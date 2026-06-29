'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import SplitText from '@/app/components/ui/SplitText'
import ClipReveal from '@/app/components/ui/ClipReveal'
import SvgIcon from '@/app/components/ui/SvgIcon'

export default function Penthouses() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <ClipReveal>
      <section ref={ref} id="penthouses" style={{ background: '#000', color: '#fff', padding: '0 0 12rem' }}>

        {/* Hero — parallax */}
        <div style={{ position: 'relative', width: '100%', height: '90vh', overflow: 'hidden', marginBottom: '10rem' }}>
          <motion.div style={{ y: heroY, position: 'absolute', inset: '-12% 0' }}>
            <Image src="/assets/images/penthouses/bg.webp" alt="Penthouse" fill style={{ objectFit: 'cover' }} />
          </motion.div>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.1) 55%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '6.4rem',
            left: '5.6rem', right: '5.6rem',
          }}>
            <SplitText
              text="PENTHOUSES WITH GLASS ROOFS"
              as="h2"
              mode="lines"
              style={{
                fontSize: 'clamp(3.2rem, 6.5vw, 9.6rem)',
                lineHeight: 0.95, letterSpacing: '0.02em',
                textTransform: 'uppercase',
              }}
            />
          </div>
        </div>

        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 5.6rem' }}>

          {/* Intro */}
          <AnimateReveal>
            <p style={{
              fontSize: 'clamp(1.8rem, 2.8vw, 3.6rem)',
              lineHeight: 1.4, color: 'rgba(255,255,255,0.75)',
              maxWidth: 800, marginBottom: '8rem',
            }}>
              Climb to the top, gaze at the sky that has become much closer, and take your place
              among the stars. Penthouse owners have access to all dimensions: the height of the
              horizon, the width of the panorama, and the length of the admiring gaze.
            </p>
          </AnimateReveal>

          {/* Stats */}
          <AnimateReveal delay={0.1}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '4rem', marginBottom: '10rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '5.6rem',
            }} className="pent-stats">
              {[
                { value: '4.2 m', label: 'Ceilings height' },
                { value: '3.6 m', label: 'Window height' },
                { value: 'Private', label: 'Terraces' },
              ].map((s, i) => (
                <AnimateReveal key={s.label} delay={i * 0.08}>
                  <p style={{
                    fontSize: 'clamp(3.6rem, 5.5vw, 7.2rem)',
                    lineHeight: 0.95, letterSpacing: '0.01em',
                    marginBottom: '1.2rem',
                  }}>
                    {s.value}
                  </p>
                  <p style={{
                    fontSize: '1.2rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                  }}>
                    {s.label}
                  </p>
                </AnimateReveal>
              ))}
            </div>
          </AnimateReveal>

          {/* Images grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem', marginBottom: '10rem',
          }} className="pent-grid">
            {[
              { src: '/assets/images/penthouses/1.webp', ratio: '4/3' },
              { src: '/assets/images/penthouses/penthouse-2.webp', ratio: '4/3' },
              { src: '/assets/images/penthouses/image-4.webp', ratio: '4/3' },
              { src: '/assets/images/penthouses/image-2.webp', ratio: '4/3' },
            ].map((img, i) => (
              <AnimateReveal key={img.src} delay={i * 0.08}>
                <div style={{ position: 'relative', aspectRatio: img.ratio, overflow: 'hidden' }}>
                  <Image src={img.src} alt="Penthouse" fill style={{ objectFit: 'cover' }} />
                </div>
              </AnimateReveal>
            ))}
          </div>

          {/* Quote */}
          <AnimateReveal>
            <SplitText
              text="SUNBEAMS LIGHT UP THE TRANSPARENT WINDOWS ABOVE YOUR HEAD AND REFLECT THE COLORS OF THE SUNSET. With high ceilings and elegant decor, penthouses give you the feeling of flying over the luxurious landscape of your own life."
              as="p"
              mode="lines"
              style={{
                fontSize: 'clamp(1.8rem, 2.5vw, 3.2rem)',
                lineHeight: 1.4, color: 'rgba(255,255,255,0.65)',
                maxWidth: 900, marginBottom: '8rem',
              }}
            />
          </AnimateReveal>

          {/* Terrace CTA */}
          <AnimateReveal delay={0.15}>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '5.6rem' }}>
              <p style={{
                fontSize: '1.1rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)',
                marginBottom: '2rem',
              }}>
                Private Terraces
              </p>
              <p style={{
                fontSize: '1.7rem', lineHeight: 1.7,
                color: 'rgba(255,255,255,0.55)', maxWidth: 640,
                marginBottom: '4.8rem',
              }}>
                This is not just a place to relax, it's an extension of your home where you can
                realise your bold ideas for creating a garden, a space for evening gatherings or a
                place to enjoy peace and quiet under the stars.
              </p>
              <a href="#apartments" style={{
                display: 'inline-flex', alignItems: 'center', gap: '1.4rem',
                padding: '1.8rem 3.6rem', background: 'var(--c-brown)',
                color: '#fff', fontSize: '1.2rem',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                transition: 'background 0.3s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#8a6049')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--c-brown)')}
              >
                Choose an Apartment
                <SvgIcon id="arrow-right" width={16} height={16} />
              </a>
            </div>
          </AnimateReveal>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .pent-grid { grid-template-columns: 1fr !important; }
            .pent-stats { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </ClipReveal>
  )
}
