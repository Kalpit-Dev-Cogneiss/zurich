import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PortfolioCard from '@/app/components/portfolio/PortfolioCard'
import { portfolioProjects } from '@/app/lib/portfolioData'

export const metadata = {
  title: 'Portfolio | Our Projects',
  description: 'Explore our portfolio of luxury residential and commercial projects',
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section
          style={{
            padding: '12rem 4rem 6rem',
            textAlign: 'center',
            background: '#000',
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(4rem, 8vw, 8rem)',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '2rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Our Portfolio
          </h1>
          <p
            style={{
              fontSize: '1.8rem',
              color: '#aaaaaa',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            Explore our collection of exceptional residential and commercial projects
          </p>
        </section>

        {/* Portfolio Grid */}
        <section style={{ padding: '4rem 4rem 8rem', background: '#000' }}>
          <div
            style={{
              maxWidth: '1600px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '4rem',
            }}
            className="portfolio-grid"
          >
            {portfolioProjects.map((project, index) => (
              <PortfolioCard
                key={project.slug}
                title={project.title}
                slug={project.slug}
                imageSrc={project.images.hero}
                projectType={project.projectType.replace('\n', ' ')}
                location={project.location}
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
