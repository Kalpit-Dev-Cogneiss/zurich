import { notFound } from 'next/navigation'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PortfolioHero from '@/app/components/portfolio/PortfolioHero'
import PortfolioBrochure from '@/app/components/portfolio/PortfolioBrochure'
import PortfolioInfo from '@/app/components/portfolio/PortfolioInfo'
import PortfolioGallery from '@/app/components/portfolio/PortfolioGallery'
import PortfolioImageRow from '@/app/components/portfolio/PortfolioImageRow'
import { getProjectBySlug, getAllProjectSlugs } from '@/app/lib/portfolioData'

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

  return (
    <>
      <Header />
      <main>
        <PortfolioHero
          title={project.title.toUpperCase()}
          imageSrc={project.images.hero}
          imageAlt={`${project.title} - Elegant lifestyle`}
        />
        <PortfolioBrochure
          imageSrc={project.images.brochure}
          imageAlt={`${project.title} Brochure`}
        />
        <PortfolioInfo
          location={project.location}
          projectType={project.projectType}
          client={project.client}
          title={project.title}
          description={project.description}
        />

        {/* Image Gallery Section */}
        <section style={{ background: '#000', padding: '16rem 8rem' }}>
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

            {/* Row of 3 Images */}
            <PortfolioImageRow
              images={project.images.row.map((src, index) => ({
                src,
                alt: `${project.title} Interior ${index + 2}`,
              }))}
            />

            {/* Remaining Single Images */}
            <PortfolioGallery
              images={project.images.remaining.map((src, index) => ({
                src,
                alt: `${project.title} Interior ${index + 5}`,
              }))}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
