import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import StackReveal from '@/app/components/ui/StackReveal'
import PageCTA from '@/app/components/ui/PageCTA'
import AboutManifesto from '@/app/components/about/AboutManifesto'
import AboutStoryFilm from '@/app/components/about/AboutStoryFilm'
import AboutCraft from '@/app/components/about/AboutCraft'

export const metadata = {
  title: 'About Us | Zurich Graphics',
  description:
    'Zurich Graphics — premium branding, design, print media, and exhibition company for real estate, architecture, and high-value businesses. 32 years, 4000+ projects.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <StackReveal zIndex={1}><AboutManifesto /></StackReveal>
        <StackReveal zIndex={2}><AboutStoryFilm /></StackReveal>
        <StackReveal zIndex={3}><AboutCraft /></StackReveal>
        <StackReveal zIndex={4}>
          <PageCTA
            eyebrow="Chapter five is yours"
            heading="LET'S MAKE YOUR BRAND UNFORGETTABLE"
            buttonLabel="Get in touch"
            href="/contact"
          />
        </StackReveal>
      </main>
      <Footer />
    </>
  )
}
