import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import { getAllCaseStudies } from '@/app/lib/caseStudyData'
import CaseStudyCard from '@/app/components/case-study/CaseStudyCard'

export const metadata = {
  title: 'Case Studies | Zurich Graphics',
  description: 'In-depth looks at how Zurich Graphics builds brands for real estate and high-value businesses.',
}

export default function CaseStudyIndexPage() {
  const studies = getAllCaseStudies()

  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh' }}>
        <section style={{ padding: '12rem 4rem 6rem', textAlign: 'center', background: '#000' }}>
          <h1 style={{
            fontSize: 'clamp(4rem, 8vw, 8rem)',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '2rem',
            letterSpacing: '0.1em',
          }}>
            Case studies
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

        <section style={{ padding: '4rem 4rem 8rem', background: '#0a0a0a' }}>
          <div style={{
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
    </>
  )
}
