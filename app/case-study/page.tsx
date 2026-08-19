import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import { getAllCaseStudies } from '@/app/lib/caseStudyData'
import CaseStudyCard from '@/app/components/case-study/CaseStudyCard'
import { pageSeo } from '@/app/lib/seoData'
import { buildMetadata } from '@/app/lib/seo'

export const metadata = buildMetadata({
  title: pageSeo.caseStudy.title,
  description: pageSeo.caseStudy.description,
  keywords: pageSeo.caseStudy.keywords,
  path: '/case-study',
})

export default function CaseStudyIndexPage() {
  const studies = getAllCaseStudies()

  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh' }}>
        <section className="cs-index-header" style={{ padding: '12rem 4rem 6rem', textAlign: 'center', background: '#000' }}>
          <h1 style={{
            fontSize: 'clamp(4rem, 8vw, 8rem)',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '2rem',
            letterSpacing: '0.1em',
          }}>
            Case Studies
          </h1>
          <p style={{
            fontSize: '1.8rem',
            color: '#aaaaaa',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            A closer look at the thinking behind a few of our brands
          </p>
        </section>

        <section className="cs-index-grid-section" style={{ padding: '4rem 4rem 8rem', background: '#0a0a0a' }}>
          <div className="cs-index-grid" style={{
            maxWidth: '1600px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '3.2rem',
          }}>
            {studies.map((study, index) => (
              <CaseStudyCard
                key={study.slug}
                title={study.title}
                slug={study.slug}
                imageSrc={study.hero}
                location={study.location}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .cs-index-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .cs-index-header {
            padding: 9rem 2rem 4rem !important;
          }
          .cs-index-grid-section {
            padding: 3rem 2rem 5rem !important;
          }
        }
      `}</style>
    </>
  )
}
