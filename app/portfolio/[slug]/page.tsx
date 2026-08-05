import { notFound } from 'next/navigation'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PortfolioHero from '@/app/components/portfolio/PortfolioHero'
import PortfolioBrochure from '@/app/components/portfolio/PortfolioBrochure'
import PortfolioInfo from '@/app/components/portfolio/PortfolioInfo'
import PortfolioGallery from '@/app/components/portfolio/PortfolioGallery'
import PortfolioImageRow from '@/app/components/portfolio/PortfolioImageRow'
import TurnJSBook from '@/app/components/ui/TurnJSBook'
import Link from 'next/link'
import SvgIcon from '@/app/components/ui/SvgIcon'
import { getProjectBySlug, getAllProjectSlugs, portfolioProjects } from '@/app/lib/portfolioData'
import { getBrochureImages } from '@/app/lib/portfolioBrochure'
import { portfolioSeo } from '@/app/lib/seoData'

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const seo = portfolioSeo[slug]
  if (seo) {
    return {
      title: seo.title,
      description: seo.description,
      keywords: seo.keywords,
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: `Discover ${project.title} - ${project.projectType}`,
  }
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const brochureBookImages = project.brochureFolder
    ? getBrochureImages(project.brochureFolder)
    : []

  // Previous/next cycle across the whole portfolio — once a category's
  // projects are exhausted, it rolls into the next category's, wrapping
  // back to the start at the very end.
  const currentIndex = portfolioProjects.findIndex((p) => p.slug === project.slug)
  const prevProject = portfolioProjects[(currentIndex - 1 + portfolioProjects.length) % portfolioProjects.length]
  const nextProject = portfolioProjects[(currentIndex + 1) % portfolioProjects.length]

  return (
    <>
      <Header />
      <main>
        <PortfolioHero
          title={project.title.toUpperCase()}
          imageSrc={project.images.hero}
          imageAlt={`${project.title} - Elegant lifestyle`}
          backHref={`/portfolio?category=${project.category}`}
        />
        {brochureBookImages.length > 0 ? (
          <TurnJSBook images={brochureBookImages} />
        ) : (
          <PortfolioBrochure
            imageSrc={project.images.brochure}
            imageAlt={`${project.title} Brochure`}
          />
        )}
        <PortfolioInfo
          location={project.location}
          projectType={project.projectType}
          client={project.client}
          title={project.title}
          description={project.description}
        />

        {/* Image Gallery Section */}
        <section className="pf-detail-body" style={{ background: '#000', padding: '16rem 8rem' }}>
          <div
            style={{
              maxWidth: '1600px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Single Image */}
            <PortfolioGallery
              images={[{ src: project.images.single, alt: `${project.title} Interior` }]}
            />

            {/* Row of Images - Only show if row images exist */}
            {project.images.row.length > 0 && (
              <PortfolioImageRow
                images={project.images.row.map((src, index) => ({
                  src,
                  alt: `${project.title} Interior ${index + 2}`,
                }))}
              />
            )}

            {/* Remaining Single Images */}
            <PortfolioGallery
              images={project.images.remaining.map((src, index) => ({
                src,
                alt: `${project.title} Interior ${index + 5}`,
              }))}
            />
          </div>
        </section>

        {/* Previous / next project — cycles within this project's own
            category, same scope as the back button above. */}
        <section className="pf-prev-next" style={{
          background: '#000',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          display: 'flex',
        }}>
          <Link href={`/portfolio/${prevProject.slug}`} className="pf-prev-next-link" style={{
            flex: '1 1 50%',
            padding: '4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.6rem',
            color: '#fff',
          }}>
            <SvgIcon id="long-arrow-left" width={28} height={10} style={{ color: '#fff', flexShrink: 0 }} />
            <div>
              <span style={{ display: 'block', fontSize: '1.1rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>
                Previous
              </span>
              <span style={{ display: 'block', fontSize: 'clamp(1.8rem, 2.4vw, 2.6rem)', fontWeight: 600, letterSpacing: '0.01em' }}>
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link href={`/portfolio/${nextProject.slug}`} className="pf-prev-next-link" style={{
            flex: '1 1 50%',
            padding: '4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1.6rem',
            color: '#fff',
            textAlign: 'right',
          }}>
            <div>
              <span style={{ display: 'block', fontSize: '1.1rem', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.5)', marginBottom: '0.6rem' }}>
                Next
              </span>
              <span style={{ display: 'block', fontSize: 'clamp(1.8rem, 2.4vw, 2.6rem)', fontWeight: 600, letterSpacing: '0.01em' }}>
                {nextProject.title}
              </span>
            </div>
            <SvgIcon id="long-arrow-right" width={28} height={10} style={{ color: '#fff', flexShrink: 0 }} />
          </Link>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .pf-detail-body {
            padding: 6rem 0 !important;
          }
        }
        .pf-prev-next-link {
          transition: background 0.3s ease;
        }
        .pf-prev-next-link:hover {
          background: rgba(255,255,255,0.05);
        }
        @media (max-width: 640px) {
          .pf-prev-next {
            flex-direction: column !important;
          }
          .pf-prev-next-link {
            padding: 2.4rem 2rem !important;
          }
        }
      `}</style>
    </>
  )
}
