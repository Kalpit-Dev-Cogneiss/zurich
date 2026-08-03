'use client'
import Image from 'next/image'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import SplitText from '@/app/components/ui/SplitText'
import SvgIcon from '@/app/components/ui/SvgIcon'

export default function Penthouses() {
  return (
      <section id="penthouses" style={{ background: '#000', color: '#fff' }}>
        
        {/* Sticky Hero Section */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            {/* Background Image */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src="/assets/images/penthouses/bg.webp"
                alt="Penthouse"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute', 
              inset: 0,
              background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 55%)',
            }} />
            
            {/* Hero Content */}
            <div style={{
              position: 'absolute', 
              bottom: '6.4rem',
              left: '5.6rem', 
              right: '5.6rem',
            }}>
              <SplitText
                text="Penthouses with glass roofs"
                as="h2"
                mode="lines"
                style={{
                  fontSize: 'clamp(3.2rem, 6.5vw, 9.6rem)',
                  lineHeight: 0.95,
                  letterSpacing: '0.02em',
                }}
              />
            </div>

            {/* Intro Text Overlay */}
            <div style={{
              position: 'absolute',
              top: '40%',
              left: '5.6rem',
              right: '5.6rem',
              maxWidth: '50%',
            }}>
              <p style={{
                fontSize: 'clamp(1rem, 1.2vw, 1.4rem)',
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.8)',
                letterSpacing: '0.05em',
              }}>
                Climb to the top, gaze at the sky that has become much closer, and take your place among the stars. Penthouse owners have access to all dimensions: the height of the horizon, the width of the panorama, and the length of the admiring gaze.
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content Section */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2, 
          background: '#000',
          paddingTop: '8rem',
          paddingBottom: '12rem',
        }}>
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 5.6rem' }}>

            {/* First Large Image - Full Width */}
            <div style={{ marginBottom: '8rem' }}>
              <AnimateReveal>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image 
                    src="/assets/images/penthouses/1.webp" 
                    alt="Penthouse" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              </AnimateReveal>
            </div>

            {/* Quote */}
            <div style={{ marginBottom: '10rem' }}>
              <AnimateReveal>
                <SplitText
                  text="Sunbeams light up the transparent windows above your head and reflect the colors of the sunset. With high ceilings and elegant decor, penthouses give you the feeling of flying over the luxurious landscape of your own life."
                  as="p"
                  mode="lines"
                  style={{
                    fontSize: 'clamp(1.8rem, 2.5vw, 3.2rem)',
                    lineHeight: 1.4, 
                    color: 'rgba(255,255,255,0.65)',
                    maxWidth: 900,
                  }}
                />
              </AnimateReveal>
            </div>

            {/* Two Stats Cards - Different Heights */}
            <div style={{
              display: 'grid', 
              gridTemplateColumns: '40% 55%',
              gap: '5%', 
              marginBottom: '10rem',
            }} className="pent-grid">
              
              {/* Card 1 - Ceiling Height (Smaller, Left) */}
              <AnimateReveal delay={0.1}>
                <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                  <Image 
                    src="/assets/images/penthouses/penthouse-2.webp" 
                    alt="Penthouse" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '2rem',
                    right: '2rem',
                  }}>
                    <p style={{
                      fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                    }}>
                      4.2 M
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.6)',
                    }}>
                      Ceilings height
                    </p>
                  </div>
                </div>
              </AnimateReveal>

              {/* Card 2 - Window Height (Taller, Right) */}
              <AnimateReveal delay={0.2}>
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                  <Image 
                    src="/assets/images/penthouses/image-4.webp" 
                    alt="Penthouse" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '2rem',
                    right: '2rem',
                  }}>
                    <p style={{
                      fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                      fontWeight: 600,
                    }}>
                      3.6 M
                    </p>
                    <p style={{
                      fontSize: '0.9rem',
                      letterSpacing: '0.1em',
                      color: 'rgba(255,255,255,0.6)',
                    }}>
                      Window height
                    </p>
                  </div>
                </div>
              </AnimateReveal>
            </div>

            {/* Private Terraces - Large Image Left + Title Right */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: '75% 25%',
              gap: '0',
              marginBottom: '4rem',
            }}>
              {/* Terrace Image */}
              <AnimateReveal>
                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                  <Image 
                    src="/assets/images/penthouses/image-2.webp" 
                    alt="Private Terraces" 
                    fill 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              </AnimateReveal>

              {/* Title on Right */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
                paddingLeft: '2rem',
                paddingBottom: '2rem',
              }}>
                <AnimateReveal delay={0.1}>
                  <h3 style={{
                    fontSize: 'clamp(1.8rem, 2.5vw, 3rem)',
                    lineHeight: 1,
                    textAlign: 'right',
                    fontWeight: 600,
                  }}>
                    Private<br />Terraces
                  </h3>
                </AnimateReveal>
              </div>
            </div>

            {/* Terrace Description */}
            <AnimateReveal delay={0.2}>
              <p style={{
                fontSize: '1.4rem', 
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.6)',
                maxWidth: '640px',
                marginBottom: '4rem',
              }}>
                This is not just a place to relax, it's an extension of your home where you can realise your bold ideas for creating a garden, a space for evening gatherings or a place to enjoy peace and quiet under the stars.
              </p>
            </AnimateReveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .pent-grid { 
              grid-template-columns: 1fr !important; 
            }
          }
        `}</style>
      </section>
  )
}
