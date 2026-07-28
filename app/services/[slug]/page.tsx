import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PageCTA from '@/app/components/ui/PageCTA'
import SplitText from '@/app/components/ui/SplitText'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import ParallaxImage from '@/app/components/ui/ParallaxImage'
import FAQAccordion from '@/app/components/ui/FAQAccordion'
import { getAllServices, getServiceBySlug } from '@/app/lib/servicesData'

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Service not found' }
  return {
    title: `${service.title} | Zurich Graphics`,
    description: service.tagline,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const all = getAllServices()
  const index = all.findIndex((s) => s.slug === slug)
  const next = all[(index + 1) % all.length]

  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh' }}>
        {/* Hero */}
        <section style={{ position: 'relative', height: '100svh', minHeight: 600, overflow: 'hidden' }}>
          <ParallaxImage src={service.image} alt={service.title} strength={10} style={{ position: 'absolute', inset: 0 }} />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.92) 100%)',
          }} />

          <Link
            href="/services"
            style={{
              position: 'absolute',
              top: '12rem',
              left: '4rem',
              fontSize: '1.2rem',
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            &larr; All services
          </Link>

          <div style={{
            position: 'absolute',
            bottom: '5.6rem',
            left: '4rem',
            right: '4rem',
          }}>
            <AnimateReveal>
              <span style={{
                display: 'block',
                fontSize: '1.2rem',
                letterSpacing: '0.14em',
                color: 'var(--c-brown)',
                marginBottom: '1.6rem',
              }}>
                Service {String(service.num).padStart(2, '0')} / {String(all.length).padStart(2, '0')}
              </span>
            </AnimateReveal>
            <SplitText
              as="h1"
              mode="lines"
              text={service.title}
              style={{
                fontSize: 'clamp(3.6rem, 7vw, 9rem)',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.03,
                letterSpacing: '0.01em',
                maxWidth: 1100,
                margin: 0,
              }}
            />
          </div>
        </section>

        {/* Intro + highlights */}
        <section style={{ padding: 'clamp(6rem, 10vw, 12rem) 4rem' }}>
          <div style={{
            maxWidth: 1400,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: 'clamp(4rem, 6vw, 8rem)',
          }} className="service-intro-grid">
            <div>
              <AnimateReveal>
                <p style={{
                  fontSize: 'clamp(1.8rem, 2.4vw, 2.6rem)',
                  lineHeight: 1.5,
                  color: '#fff',
                  margin: 0,
                  marginBottom: '3.2rem',
                  maxWidth: 720,
                }}>
                  {service.tagline}
                </p>
              </AnimateReveal>
              {service.description.map((para, i) => (
                <AnimateReveal key={i} delay={0.1 + i * 0.08}>
                  <p style={{
                    fontSize: 'clamp(1.3rem, 1.3vw, 1.6rem)',
                    lineHeight: 1.75,
                    color: 'rgba(255,255,255,0.6)',
                    maxWidth: 680,
                    marginBottom: '2rem',
                  }}>
                    {para}
                  </p>
                </AnimateReveal>
              ))}
            </div>

            <AnimateReveal delay={0.2}>
              <span style={{
                display: 'block',
                fontSize: '1.1rem',
                letterSpacing: '0.14em',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '2.4rem',
              }}>
                What is included
              </span>
              <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {service.highlights.map((h) => (
                  <li key={h} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.4rem',
                    padding: '1.6rem 0',
                    borderTop: '1px solid rgba(255,255,255,0.12)',
                    fontSize: 'clamp(1.3rem, 1.3vw, 1.6rem)',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.5,
                  }}>
                    <span aria-hidden="true" style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: 'var(--c-brown)', flexShrink: 0, marginTop: '0.9rem',
                    }} />
                    {h}
                  </li>
                ))}
              </ul>
            </AnimateReveal>
          </div>
        </section>

        {/* Secondary image, full width */}
        <section style={{ padding: '0 4rem clamp(3rem, 5vw, 5rem)' }}>
          <AnimateReveal>
            <div style={{ maxWidth: 1400, margin: '0 auto', position: 'relative', width: '100%', aspectRatio: '16 / 8', overflow: 'hidden' }}>
              <ParallaxImage src={service.secondaryImage} alt={service.title} strength={8} />
            </div>
          </AnimateReveal>
        </section>

        {/* Gallery pair */}
        <section style={{ padding: '0 4rem clamp(6rem, 10vw, 12rem)' }}>
          <div style={{
            maxWidth: 1400,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(1.6rem, 2.4vw, 2.4rem)',
          }} className="service-gallery-grid">
            {service.gallery.map((src, i) => (
              <AnimateReveal key={src} delay={i * 0.1}>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 5', overflow: 'hidden' }}>
                  <ParallaxImage src={src} alt={service.title} strength={6} />
                </div>
              </AnimateReveal>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '0 4rem clamp(6rem, 10vw, 11rem)' }}>
          <div style={{
            maxWidth: 1400,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: 'clamp(3rem, 5vw, 6rem)',
          }} className="service-faq-grid">
            <AnimateReveal>
              <span style={{
                display: 'block',
                fontSize: '1.1rem',
                letterSpacing: '0.14em',
                color: 'var(--c-brown)',
                marginBottom: '2rem',
              }}>
                Questions
              </span>
              <h2 style={{
                fontSize: 'clamp(2.4rem, 3vw, 3.6rem)',
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: '0.01em',
                color: '#fff',
                margin: 0,
                maxWidth: 360,
              }}>
                About this service
              </h2>
            </AnimateReveal>
            <AnimateReveal delay={0.15}>
              <FAQAccordion items={service.faq} />
            </AnimateReveal>
          </div>
        </section>

        {/* Next service */}
        <section style={{ padding: '0 4rem clamp(6rem, 10vw, 10rem)' }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', borderTop: '1px solid rgba(255,255,255,0.14)', paddingTop: '4rem' }}>
            <span style={{
              display: 'block',
              fontSize: '1.1rem',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '1.6rem',
            }}>
              Next service
            </span>
            <Link
              href={`/services/${next.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                color: '#fff',
              }}
            >
              <span style={{
                fontSize: 'clamp(2.8rem, 5vw, 6rem)',
                fontWeight: 600,
                letterSpacing: '0.01em',
                lineHeight: 1.1,
              }}>
                {next.title}
              </span>
              <span aria-hidden="true" style={{
                flexShrink: 0,
                width: 'clamp(4.4rem, 5vw, 5.6rem)',
                height: 'clamp(4.4rem, 5vw, 5.6rem)',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </section>

        <PageCTA
          eyebrow="Ready when you are"
          heading="Let's build the brand your project deserves"
          buttonLabel="Start a project"
          href="/contact"
        />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .service-intro-grid { grid-template-columns: 1fr !important; }
          .service-faq-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .service-gallery-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
