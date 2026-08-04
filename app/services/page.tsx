import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PageCTA from '@/app/components/ui/PageCTA'
import SplitText from '@/app/components/ui/SplitText'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import ParallaxImage from '@/app/components/ui/ParallaxImage'
import Marquee from '@/app/components/ui/Marquee'
import FAQAccordion from '@/app/components/ui/FAQAccordion'
import ServicesShowcase from '@/app/components/services/ServicesShowcase'
import { getAllServices, GENERAL_FAQ } from '@/app/lib/servicesData'
import { pageSeo } from '@/app/lib/seoData'

export const metadata = {
  title: pageSeo.services.title,
  description: pageSeo.services.description,
  keywords: pageSeo.services.keywords,
}

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh' }}>
        {/* Hero — full-bleed image backdrop */}
        <section style={{ position: 'relative', height: '100svh', minHeight: 640, overflow: 'hidden' }}>
          <ParallaxImage
            src="/images/services-page-hero-banner.jpeg"
            alt="Zurich Graphics Services"
            strength={10}
            style={{ position: 'absolute', inset: 0 }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.92) 100%)',
          }} />

          {/* small floating accent images — corner collage */}
          {/* <div aria-hidden="true" style={{
            position: 'absolute', top: '11rem', right: '5.6rem',
            width: 'clamp(120px, 12vw, 200px)', aspectRatio: '3 / 4', overflow: 'hidden',
            display: 'none',
          }} className="hero-accent-1">
            <ParallaxImage src="/images/Services_Campaign Design.jpg" strength={14} />
          </div>
          <div aria-hidden="true" style={{
            position: 'absolute', bottom: '18rem', right: '2.4rem',
            width: 'clamp(90px, 9vw, 150px)', aspectRatio: '1 / 1', overflow: 'hidden',
            display: 'none',
          }} className="hero-accent-2">
            <ParallaxImage src="/images/Services_Reels.jpg" strength={18} />
          </div> */}

          <div className="services-hero-content" style={{ position: 'relative', maxWidth: 1400, margin: '0 auto', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '13rem 4rem 6rem' }}>
            <AnimateReveal>
              <span style={{
                display: 'block',
                fontSize: '1.1rem',
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '2.4rem',
              }}>
                What we do, {String(services.length).padStart(2, '0')} ways
              </span>
            </AnimateReveal>
            <SplitText
              as="h1"
              mode="lines"
              text="The whole realty brand. All the way."
              style={{
                fontSize: 'clamp(3.6rem, 6.6vw, 8.8rem)',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.05,
                letterSpacing: '0.01em',
                maxWidth: 1150,
                margin: 0,
              }}
            />
            <AnimateReveal delay={0.2} style={{ marginTop: '2.8rem' }}>
              <p style={{
                fontSize: 'clamp(1.4rem, 1.4vw, 1.7rem)',
                lineHeight: 1.7,
                letterSpacing: '0.02em',
                color: 'rgba(255,255,255,0.65)',
                maxWidth: 620,
                margin: 0,
              }}>
                A real estate brand has more ground to cover than a master plan. It needs to think sharp, look right and show up everywhere. We stay with the brand from the first question to final execution. Different formats. Same voice. Same edge. One complete realty brand. One partner all the way.
              </p>
            </AnimateReveal>
          </div>

          <style>{`
            @media (min-width: 640px) {
              .hero-accent-1, .hero-accent-2 { display: block !important; }
            }
          `}</style>
        </section>

        {/* Marquee strip */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', borderBottom: '1px solid rgba(255,255,255,0.12)', padding: '3.2rem 0' }}>
          <Marquee
            items={services.map((s) => s.title)}
            duration={40}
            itemStyle={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}
          />
        </div>

        {/* Pinned, scroll-driven services index */}
        <ServicesShowcase services={services} />

        {/* FAQ */}
        <section className="services-faq-section" style={{ position: 'relative', zIndex: 6, background: '#000', padding: 'clamp(6rem, 9vw, 11rem) 4rem' }}>
          <div style={{
            maxWidth: 1400,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: 'clamp(3rem, 5vw, 6rem)',
          }} className="services-faq-grid">
            <div>
              <AnimateReveal>
                <span style={{
                  display: 'block',
                  fontSize: '1.1rem',
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.6)',
                  marginBottom: '2rem',
                }}>
                  Questions
                </span>
                <h2 style={{
                  fontSize: 'clamp(2.8rem, 3.6vw, 4.4rem)',
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: '0.01em',
                  color: '#fff',
                  margin: 0,
                  maxWidth: 400,
                }}>
                  A Few Answers. For The Questions That Matter.
                </h2>
              </AnimateReveal>
            </div>
            <AnimateReveal delay={0.15}>
              <FAQAccordion items={GENERAL_FAQ} />
            </AnimateReveal>
          </div>
        </section>

        <div style={{ position: 'relative', zIndex: 6 }}>
          <PageCTA
            eyebrow="Ready when you are"
            heading="Let's give the market a new favourite"
            body="You build the address. We'll build the preference."
            buttonLabel="Start a project"
            href="/contact"
          />
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .services-faq-grid { grid-template-columns: 1fr !important; }
          .services-hero-content { padding: 9rem 2rem 4rem !important; }
          .services-faq-section { padding: 4rem 2rem !important; }
        }
      `}</style>
    </>
  )
}
