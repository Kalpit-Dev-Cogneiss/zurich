import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PageCTA from '@/app/components/ui/PageCTA'
import FAQAccordion from '@/app/components/ui/FAQAccordion'
import { getAllServices, getServiceBySlug } from '@/app/lib/servicesData'
import { buildMetadata } from '@/app/lib/seo'

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: 'Service Not Found' }

  return buildMetadata({
    title: `${service.title} | Zurich Graphics Services`,
    description: service.tagline,
    path: `/services/${slug}`,
    image: service.image,
  })
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const allServices = getAllServices()
  const currentIndex = allServices.findIndex((s) => s.slug === service.slug)
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : null
  const nextService = currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : null

  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
        <article style={{ padding: '13rem 4rem 6rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Top Navigation & Category */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.6rem',
                marginBottom: '3.6rem',
              }}
            >
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  fontSize: '1.3rem',
                  letterSpacing: '0.04em',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s ease',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to All Services
              </Link>

              <span
                style={{
                  padding: '0.6rem 1.4rem',
                  borderRadius: '100px',
                  fontSize: '1.15rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                }}
              >
                Service #{String(service.num).padStart(2, '0')}
              </span>
            </div>

            {/* Title & Tagline */}
            <h1
              style={{
                fontSize: 'clamp(3.6rem, 5.6vw, 6.4rem)',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
                marginBottom: '1.6rem',
                maxWidth: 1000,
              }}
            >
              {service.title}
            </h1>

            <p
              style={{
                fontSize: 'clamp(1.6rem, 2vw, 2.4rem)',
                lineHeight: 1.4,
                color: 'rgba(255, 255, 255, 0.7)',
                margin: 0,
                marginBottom: '4.8rem',
                maxWidth: 850,
                fontWeight: 400,
              }}
            >
              {service.tagline}
            </p>

            {/* Featured Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                maxHeight: '580px',
                borderRadius: '24px',
                overflow: 'hidden',
                marginBottom: '6rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Content 2-Column Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) 360px',
                gap: '4.8rem',
                alignItems: 'start',
              }}
              className="service-grid-layout"
            >
              {/* Main Column */}
              <div>
                {/* Description Paragraphs */}
                <div style={{ marginBottom: '4.8rem' }}>
                  {service.description.map((paragraph, index) => (
                    <p
                      key={index}
                      style={{
                        fontSize: 'clamp(1.6rem, 1.4vw, 1.85rem)',
                        lineHeight: 1.8,
                        color: 'rgba(255, 255, 255, 0.75)',
                        marginBottom: '2.4rem',
                      }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Service Highlights Box */}
                {service.highlights && service.highlights.length > 0 && (
                  <div
                    style={{
                      padding: '3.2rem',
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.025)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      marginBottom: '4.8rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.8rem',
                        color: '#fff',
                        fontWeight: 600,
                        margin: 0,
                        marginBottom: '2rem',
                        letterSpacing: '0.01em',
                      }}
                    >
                      Key Deliverables & Scope
                    </h3>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.4rem',
                      }}
                    >
                      {service.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '1.2rem',
                            fontSize: '1.5rem',
                            color: 'rgba(255, 255, 255, 0.85)',
                            lineHeight: 1.5,
                          }}
                        >
                          <span
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '22px',
                              height: '22px',
                              minWidth: '22px',
                              borderRadius: '50%',
                              background: 'rgba(255, 255, 255, 0.1)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              color: '#fff',
                              fontSize: '1.2rem',
                              marginTop: '0.2rem',
                            }}
                          >
                            ✓
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside>
                <div style={{ position: 'sticky', top: '130px' }}>
                  {/* Secondary Image Card */}
                  {service.secondaryImage && (
                    <div
                      style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        marginBottom: '2.4rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={service.secondaryImage}
                        alt={`${service.title} process`}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  )}

                  {/* Start Project Card */}
                  <div
                    style={{
                      padding: '2.8rem',
                      borderRadius: '20px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    <h4 style={{ fontSize: '1.8rem', color: '#fff', margin: 0, marginBottom: '0.8rem', fontWeight: 600 }}>
                      Ready to build your realty brand?
                    </h4>
                    <p style={{ fontSize: '1.35rem', color: 'rgba(255,255,255,0.6)', margin: 0, marginBottom: '2rem', lineHeight: 1.5 }}>
                      Discuss your upcoming development or branding requirements with our experts.
                    </p>
                    <Link
                      href="/contact"
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'center',
                        padding: '1.4rem 1.8rem',
                        background: '#ffffff',
                        color: '#000000',
                        borderRadius: '10px',
                        fontWeight: 600,
                        fontSize: '1.4rem',
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      Start a Project &rarr;
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {/* Gallery Section if available */}
            {service.gallery && service.gallery.length > 0 && (
              <div style={{ marginTop: '8rem' }}>
                <h3 style={{ fontSize: '2.4rem', color: '#fff', fontWeight: 600, marginBottom: '2.4rem' }}>
                  Visual Showcase
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.4rem' }}>
                  {service.gallery.map((imgSrc, i) => (
                    <div
                      key={i}
                      style={{
                        borderRadius: '16px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        aspectRatio: '4 / 3',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={imgSrc} alt={`Showcase ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Section if available */}
            {service.faq && service.faq.length > 0 && (
              <div
                className="service-faq-section"
                style={{
                  marginTop: '8rem',
                  paddingTop: '6rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div
                  className="service-faq-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1.6fr',
                    gap: 'clamp(3rem, 5vw, 6rem)',
                    alignItems: 'start',
                  }}
                >
                  {/* Left — sticky label */}
                  <div style={{ position: 'sticky', top: '13rem' }}>
                    <span
                      style={{
                        display: 'block',
                        fontSize: '1.1rem',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.45)',
                        marginBottom: '2rem',
                      }}
                    >
                      Questions
                    </span>
                    <h2
                      style={{
                        fontSize: 'clamp(2.8rem, 3.6vw, 4.4rem)',
                        fontWeight: 600,
                        lineHeight: 1.1,
                        letterSpacing: '0.01em',
                        color: '#fff',
                        margin: 0,
                        marginBottom: '2rem',
                        maxWidth: 340,
                      }}
                    >
                      A Few Answers. For The Questions That Matter.
                    </h2>
                    <p
                      style={{
                        fontSize: '1.3rem',
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.4)',
                        margin: 0,
                        maxWidth: 280,
                      }}
                    >
                      Everything you need to know before we get started.
                    </p>
                  </div>

                  {/* Right — accordion */}
                  <FAQAccordion items={service.faq} />
                </div>
              </div>
            )}

            {/* Next Service Navigation */}
            {(prevService || nextService) && (
              <div
                style={{
                  marginTop: '8rem',
                  paddingTop: '3.2rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'space-between',
                  gap: '2rem',
                }}
                className="service-nav-row"
              >
                {/* Previous */}
                <div style={{ flex: 1 }}>
                  {prevService && (
                    <Link
                      href={`/services/${prevService.slug}`}
                      className="service-nav-link"
                      style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        gap: '0.6rem',
                        textDecoration: 'none',
                        color: '#fff',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          fontSize: '1.1rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.4)',
                        }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="19" y1="12" x2="5" y2="12" />
                          <polyline points="12 19 5 12 12 5" />
                        </svg>
                        Previous
                      </span>
                      <span style={{ fontSize: 'clamp(1.6rem, 1.8vw, 2.2rem)', fontWeight: 600, lineHeight: 1.2 }}>
                        {prevService.title}
                      </span>
                    </Link>
                  )}
                </div>

                {/* Divider */}
                {prevService && nextService && (
                  <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                )}

                {/* Next */}
                <div style={{ flex: 1, textAlign: 'right' }}>
                  {nextService && (
                    <Link
                      href={`/services/${nextService.slug}`}
                      className="service-nav-link"
                      style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        gap: '0.6rem',
                        alignItems: 'flex-end',
                        textDecoration: 'none',
                        color: '#fff',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          fontSize: '1.1rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'rgba(255,255,255,0.4)',
                        }}
                      >
                        Next
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                      <span style={{ fontSize: 'clamp(1.6rem, 1.8vw, 2.2rem)', fontWeight: 600, lineHeight: 1.2 }}>
                        {nextService.title}
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        </article>

        <PageCTA
          eyebrow="Ready when you are"
          heading="Let's build something exceptional"
          buttonLabel="Get in touch"
          href="/contact"
        />
      </main>
      <Footer />

      <style>{`
        @media (max-width: 991px) {
          .service-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .service-faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .service-nav-link:hover span:last-child {
          opacity: 0.7;
        }
        @media (max-width: 640px) {
          .service-nav-row {
            flex-direction: column !important;
            gap: 3.2rem !important;
          }
          .service-nav-row > div:last-child {
            text-align: left !important;
          }
          .service-nav-row > div:last-child a {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </>
  )
}
