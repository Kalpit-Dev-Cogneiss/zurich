import { notFound } from 'next/navigation'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PortfolioHero from '@/app/components/portfolio/PortfolioHero'
import PortfolioInfo from '@/app/components/portfolio/PortfolioInfo'
import PortfolioGallery from '@/app/components/portfolio/PortfolioGallery'
import CaseStudyLabeledImage from '@/app/components/case-study/CaseStudyLabeledImage'
import CaseStudyImageRow from '@/app/components/case-study/CaseStudyImageRow'
import CaseStudySplitRow from '@/app/components/case-study/CaseStudySplitRow'
import CaseStudyIntro from '@/app/components/case-study/CaseStudyIntro'
import CaseStudyStorySection from '@/app/components/case-study/CaseStudyStorySection'
import { getCaseStudyBySlug, getAllCaseStudySlugs, type CaseStudy } from '@/app/lib/caseStudyData'
import { CASE_STUDY_LAYOUTS, CASE_STUDY_INFO_BLOCKS, HIDE_INFO_SLUGS, SPACE_BELOW_SINGLES_SLUGS, type CaseStudySectionSpec } from '@/app/lib/caseStudyLayouts'
import { caseStudySeo } from '@/app/lib/seoData'

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  if (!study) return { title: 'Case Study Not Found' }

  const seo = caseStudySeo[slug]
  if (seo) {
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
    }
  }

  return {
    title: `${study.title} | Case Study`,
    description: `${study.title}. A Zurich Graphics case study.`,
  }
}

type Section =
  | { type: 'single'; num: number; sortKey: number }
  | (CaseStudySectionSpec & { sortKey: number })

/**
 * Body images (everything after the hero), in numeric order, with any
 * layout overrides (a labeled single image, images grouped into a row)
 * spliced in at the position of their lowest image number.
 */
function buildSections(study: CaseStudy): Section[] {
  const specials = CASE_STUDY_LAYOUTS[study.slug] ?? []
  const specialNums = new Set(
    specials.flatMap(s => {
      if (s.type === 'row') return s.images.map(i => i.num)
      if (s.type === 'split') return s.overlay != null ? [s.main, ...s.stacked, s.overlay] : [s.main, ...s.stacked]
      return [s.num]
    })
  )
  const heroNum = study.images[0]?.num

  const sections: Section[] = study.images
    .filter(img => img.num !== heroNum && !specialNums.has(img.num))
    .map((img): Section => ({ type: 'single', num: img.num, sortKey: img.num }))

  for (const spec of specials) {
    const sortKey =
      spec.type === 'row' ? Math.min(...spec.images.map(i => i.num))
      : spec.type === 'split' ? Math.min(spec.main, ...spec.stacked)
      : spec.num
    sections.push({ ...spec, sortKey })
  }

  return sections.sort((a, b) => a.sortKey - b.sortKey)
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) notFound()

  const findImage = (num: number) => study.images.find(img => img.num === num)
  const sections = buildSections(study)

  return (
    <>
      <Header />
      <main>
        <PortfolioHero
          title={study.title}
          imageSrc={study.hero}
          imageAlt={study.title}
        />
        {!HIDE_INFO_SLUGS.has(study.slug) && (
          <PortfolioInfo
            location={study.location}
            projectType={study.projectType}
            client={study.client}
            title={study.title}
            description={study.description}
            blocks={CASE_STUDY_INFO_BLOCKS[study.slug]}
          />
        )}

        <section style={{ background: '#000', padding: '16rem 8rem' }}>
          <div style={{
            maxWidth: '1600px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',          }}>
            {sections.map((section, i) => {
              if (section.type === 'single') {
                const img = findImage(section.num)
                if (!img) return null
                const gallery = (
                  <PortfolioGallery
                    key={i}
                    images={[{ src: img.src, alt: `${study.title} ${section.num}` }]}
                  />
                )
                if (!SPACE_BELOW_SINGLES_SLUGS.has(study.slug)) return gallery
                return <div key={i} style={{ marginBottom: '6rem' }}>{gallery}</div>
              }

              if (section.type === 'labeled') {
                const img = findImage(section.num)
                if (!img) return null
                return (
                  <CaseStudyLabeledImage
                    key={i}
                    label={section.label}
                    body={section.body}
                    layout={section.layout}
                    src={img.src}
                    alt={`${study.title}: ${section.label}`}
                  />
                )
              }

              if (section.type === 'actual') {
                const img = findImage(section.num)
                if (!img) return null
                return (
                  <CaseStudyLabeledImage
                    key={i}
                    src={img.src}
                    alt={`${study.title} ${section.num}`}
                  />
                )
              }

              if (section.type === 'intro') {
                const img = findImage(section.num)
                if (!img) return null
                return (
                  <CaseStudyIntro
                    key={i}
                    title={section.label}
                    subtitle={section.subtitle}
                    body={section.body}
                    location={section.location}
                    src={img.src}
                    alt={`${study.title}: ${section.label}`}
                  />
                )
              }

              if (section.type === 'split') {
                const mainImg = findImage(section.main)
                const stackedImgs = section.stacked.map(findImage)
                const overlayImg = section.overlay != null ? findImage(section.overlay) : undefined
                if (!mainImg || stackedImgs.some(img => !img)) return null
                return (
                  <CaseStudySplitRow
                    key={i}
                    main={{ src: mainImg.src, alt: `${study.title} ${section.main}` }}
                    stacked={stackedImgs.map((img, idx) => ({
                      src: img!.src,
                      alt: `${study.title} ${section.stacked[idx]}`,
                    })) as [{ src: string; alt: string }, { src: string; alt: string }]}
                    overlay={overlayImg ? { src: overlayImg.src, alt: `${study.title} ${section.overlay}` } : undefined}
                    gap={section.gap}
                    stackedFit={section.stackedFit}
                  />
                )
              }

              if (section.type === 'story') {
                return (
                  <CaseStudyStorySection
                    key={i}
                    heading={section.heading}
                    blocks={section.blocks}
                  />
                )
              }

              // row
              const rowImages = section.images
                .map(spec => {
                  const img = findImage(spec.num)
                  return img ? { src: img.src, alt: `${study.title} ${spec.num}`, width: spec.width } : null
                })
                .filter((img): img is NonNullable<typeof img> => Boolean(img))
              if (rowImages.length === 0) return null
              return (
                <CaseStudyImageRow
                  key={i}
                  images={rowImages}
                  actualSize={section.actualSize}
                  spaceBelow={section.spaceBelow}
                />
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
