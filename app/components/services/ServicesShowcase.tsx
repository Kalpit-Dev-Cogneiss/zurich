'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type Lenis from 'lenis'
import type { ServiceData } from '@/app/lib/servicesData'

const EASE: [number, number, number, number] = [0.7, 0, 0.3, 1]

/**
 * Pinned, scroll-driven service index: same mechanics as the home page's
 * Advantages section (one viewport of scroll per step), redressed with a
 * ghost numeral, a scroll-progress rail, a slow Ken Burns zoom on the active
 * image and a filmstrip of every service along the bottom.
 */
export default function ServicesShowcase({ services }: { services: ServiceData[] }) {
  const spacerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [phase, setPhase] = useState<'before' | 'pinned' | 'after'>('before')
  const [afterTop, setAfterTop] = useState(0)
  const [progress, setProgress] = useState(0)
  const total = services.length

  useEffect(() => {
    const spacer = spacerRef.current
    if (!spacer) return

    const update = (scrollY: number) => {
      const sectionTop = spacer.offsetTop
      const viewH = window.innerHeight
      const scrollDistance = (total + 1) * viewH
      const sectionBottom = sectionTop + scrollDistance

      if (scrollY < sectionTop) {
        setPhase('before')
        setProgress(0)
      } else if (scrollY < sectionBottom) {
        setPhase('pinned')
        const scrolled = scrollY - sectionTop
        const index = Math.min(total - 1, Math.floor(scrolled / viewH))
        setActive(index)
        setProgress(Math.min(1, scrolled / (total * viewH)))
      } else {
        setPhase('after')
        setAfterTop(sectionBottom - viewH)
        setActive(total - 1)
        setProgress(1)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis as Lenis | undefined
    if (lenis) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handler = (e: any) => update(e.scroll)
      lenis.on('scroll', handler)
      update(lenis.scroll)
      return () => lenis.off('scroll', handler)
    }

    const onScroll = () => update(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    update(window.scrollY)
    return () => window.removeEventListener('scroll', onScroll)
  }, [total])

  const goTo = (i: number) => {
    const spacer = spacerRef.current
    if (!spacer) return
    const target = spacer.offsetTop + i * window.innerHeight + 10
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis as Lenis | undefined
    if (lenis) lenis.scrollTo(target)
    else window.scrollTo({ top: target, behavior: 'smooth' })
  }

  const service = services[active]

  const panelStyle: React.CSSProperties =
    phase === 'pinned'
      ? { position: 'fixed', top: 0, left: 0, right: 0, height: '100vh' }
      : phase === 'after'
      ? { position: 'absolute', top: afterTop, left: 0, right: 0, height: '100vh' }
      : { position: 'absolute', top: 0, left: 0, right: 0, height: '100vh' }

  return (
    <div ref={spacerRef} style={{ position: 'relative', height: `${(total + 1) * 100}vh`, background: '#000' }}>
      <div
        className="services-showcase-panel"
        style={{ ...panelStyle, display: 'grid', gridTemplateColumns: '42% 58%', overflow: 'hidden', background: '#000', zIndex: 5 }}
      >
        {/* progress rail */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: 3,
          background: 'rgba(255,255,255,0.08)', zIndex: 3,
        }}>
          <motion.div
            animate={{ height: `${progress * 100}%` }}
            transition={{ duration: 0.2 }}
            style={{ width: '100%', background: 'var(--c-brown)' }}
          />
        </div>

        {/* LEFT — index list with ghost numeral behind it */}
        <div style={{
          position: 'relative',
          padding: 'clamp(4rem, 6vw, 8rem) clamp(3rem, 5vw, 6rem)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <motion.span
            key={`ghost-${active}`}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{
              position: 'absolute',
              top: '50%', left: 'clamp(2rem, 3vw, 4rem)',
              transform: 'translateY(-50%)',
              fontSize: 'clamp(16rem, 22vw, 30rem)',
              fontWeight: 600,
              lineHeight: 1,
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.06)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            {String(active + 1).padStart(2, '0')}
          </motion.span>

          <div style={{ position: 'relative', zIndex: 1 }}>
            {services.map((s, i) => (
              <div key={s.slug} style={{ borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <button
                  onClick={() => goTo(i)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1.6rem',
                    width: '100%',
                    padding: i === active ? '1.6rem 0' : '1.1rem 0',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', fontFamily: 'inherit',
                    transition: 'padding 0.4s cubic-bezier(.7,0,.3,1)',
                  }}
                >
                  <span aria-hidden="true" style={{
                    width: i === active ? '2.4rem' : 0,
                    height: 1.5,
                    background: 'var(--c-brown)',
                    flexShrink: 0,
                    transition: 'width 0.4s cubic-bezier(.7,0,.3,1)',
                  }} />
                  <span style={{
                    fontSize: i === active ? 'clamp(2rem, 2.8vw, 3.2rem)' : 'clamp(1.4rem, 1.7vw, 1.9rem)',
                    fontWeight: 600, letterSpacing: '0.01em', lineHeight: 1.25,
                    color: i === active ? '#fff' : 'rgba(255,255,255,0.35)',
                    transition: 'font-size 0.4s cubic-bezier(.7,0,.3,1), color 0.4s ease',
                  }}>
                    {s.title}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — slow Ken Burns crossfade + caption + filmstrip */}
        <div style={{ position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: 0.7, ease: EASE }}
              style={{ position: 'absolute', inset: 0, zIndex: i === active ? 1 : 0 }}
            >
              <motion.div
                animate={i === active ? { scale: [1, 1.08] } : { scale: 1 }}
                transition={{ duration: 5, ease: 'linear' }}
                style={{ width: '100%', height: '100%' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </motion.div>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0.9) 100%)',
              }} />
            </motion.div>
          ))}

          {/* corner brackets — viewfinder framing */}
          <div aria-hidden="true" style={{ position: 'absolute', top: '2rem', left: '2rem', width: 24, height: 24, borderTop: '1px solid rgba(255,255,255,0.5)', borderLeft: '1px solid rgba(255,255,255,0.5)', zIndex: 3 }} />
          <div aria-hidden="true" style={{ position: 'absolute', top: '2rem', right: '2rem', width: 24, height: 24, borderTop: '1px solid rgba(255,255,255,0.5)', borderRight: '1px solid rgba(255,255,255,0.5)', zIndex: 3 }} />

          <div style={{ position: 'absolute', bottom: 'clamp(9rem, 12vw, 12rem)', left: 'clamp(2.4rem, 4vw, 3.6rem)', right: 'clamp(2.4rem, 4vw, 3.6rem)', zIndex: 2 }}>
            <motion.p
              key={`tagline-${active}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              style={{ fontSize: 'clamp(1.3rem, 1.4vw, 1.7rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, maxWidth: 440, marginBottom: '2rem' }}
            >
              {service.tagline}
            </motion.p>
            <Link href={`/services/${service.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '1.4rem', color: '#fff' }}>
              <span style={{ fontSize: '1.3rem', letterSpacing: '0.06em' }}>View service</span>
              <span aria-hidden="true" className="showcase-arrow" style={{
                width: '4rem', height: '4rem', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.4s cubic-bezier(.7,0,.3,1)',
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>

          {/* filmstrip — every service, current one highlighted */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 2,
            display: 'flex', gap: 2, padding: '1.2rem clamp(2.4rem, 4vw, 3.6rem) 2rem',
          }} className="showcase-filmstrip">
            {services.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => goTo(i)}
                aria-label={s.title}
                style={{
                  position: 'relative',
                  flex: 1,
                  aspectRatio: '1 / 1',
                  overflow: 'hidden',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  opacity: i === active ? 1 : 0.4,
                  outline: i === active ? '2px solid var(--c-brown)' : 'none',
                  outlineOffset: -2,
                  transition: 'opacity 0.3s ease',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        a:hover .showcase-arrow {
          background: var(--c-brown);
          border-color: var(--c-brown);
          transform: rotate(45deg);
        }
        @media (max-width: 768px) {
          .services-showcase-panel {
            grid-template-columns: 1fr !important;
            grid-template-rows: 38% 62%;
          }
          .services-showcase-panel > div:first-child {
            padding: 2rem !important;
            overflow-y: auto;
          }
          .showcase-filmstrip { display: none !important; }
        }
      `}</style>
    </div>
  )
}
