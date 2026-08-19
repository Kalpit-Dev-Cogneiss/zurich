import { Suspense } from 'react'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PortfolioTabs from '@/app/components/portfolio/PortfolioTabs'
import {
  residentialProjects,
  commercialProjects,
  mallProjects,
  duplexVillaProjects,
  openPlotProjects,
  industrialParkProjects,
  corporateBrochureProjects,
  campaignProjects,
  farmhouseProjects,
} from '@/app/lib/portfolioData'
import { pageSeo } from '@/app/lib/seoData'
import { buildMetadata } from '@/app/lib/seo'

export const metadata = buildMetadata({
  title: pageSeo.portfolio.title,
  description: pageSeo.portfolio.description,
  keywords: pageSeo.portfolio.keywords,
  path: '/portfolio',
})

const projectsByCategory = {
  residential: residentialProjects,
  commercial: commercialProjects,
  'duplex-villa': duplexVillaProjects,
  mall: mallProjects,
  farmhouse: farmhouseProjects,
  'open-plot': openPlotProjects,
  'industrial-park': industrialParkProjects,
  'corporate-brochure': corporateBrochureProjects,
  campaign: campaignProjects,
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh' }}>
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
            Explore our collection of exceptional residential, commercial, and specialty projects
          </p>
        </section>

        <section style={{ padding: '4rem 4rem 8rem', background: '#0a0a0a' }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
            <Suspense fallback={<div style={{ color: '#fff', textAlign: 'center' }}>Loading portfolio...</div>}>
              <PortfolioTabs projectsByCategory={projectsByCategory} />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
