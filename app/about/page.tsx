import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import StackReveal from '@/app/components/ui/StackReveal'
import PageCTA from '@/app/components/ui/PageCTA'
import AboutManifesto from '@/app/components/about/AboutManifesto'
import AboutPassages from '@/app/components/about/AboutPassages'
import AboutStoryFilm from '@/app/components/about/AboutStoryFilm'
import AboutStats from '@/app/components/about/AboutStats'
import AboutFounder from '@/app/components/about/AboutFounder'
import AboutCraft from '@/app/components/about/AboutCraft'
import { pageSeo } from '@/app/lib/seoData'

export const metadata = {
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  keywords: pageSeo.about.keywords,
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <StackReveal zIndex={1}><AboutManifesto /></StackReveal>
        <AboutPassages />
        {/* <StackReveal zIndex={3}><AboutStoryFilm /></StackReveal> */}
        <StackReveal zIndex={4}><AboutStats /></StackReveal>
        <StackReveal zIndex={5}><AboutFounder /></StackReveal>
        {/* <StackReveal zIndex={5}><AboutCraft /></StackReveal> */}
        <StackReveal zIndex={6}>
          <PageCTA
            eyebrow="Chapter five is yours"
            heading="That's us. Let's get your brand talking."
            buttonLabel="Get in touch"
            href="/contact"
          />
        </StackReveal>
      </main>
      <Footer />
    </>
  )
}
