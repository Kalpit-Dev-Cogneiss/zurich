'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'

const ITEMS = [
  {
    num: 1,
    title: 'Brochure Design',
    description: 'Spacious and elegant lobbies welcome residents with impeccable interiors and a cozy lounge area, embodying the idea of impeccable style and understated luxury. Immerse yourself in an atmosphere of refined comfort comparable to the world\'s finest hotels.',
    image: '/images/Services_Brochure Design.jpg',
  },
  {
    num: 2,
    title: 'Corporate Brochur\n Design',
    description: 'A secluded corner in the very center of the complex. Greenery, stylish design solutions, and cozy relaxation areas create an atmosphere of calm and harmony.',
    image: '/images/Services_Corporate Brochure Design.jpg',
  },
  {
    num: 3,
    title: 'Campaign Design',
    description: 'A personal assistant who takes care of your time and comfort. Transportation arrangements, ticket reservations, or everyday tasks — everything will be done with attention and professionalism.',
    image: '/images/Services_Campaign Design.jpg',
  },
  {
    num: 4,
    title: '360 Branding\n Design',
    description: 'Playing, forgetting about everything in the world, sharing secrets with friends, drawing cartoon characters — the children\'s room opens the door to another world.',
    image: '/images/Services_360 Branding Design.jpg',
  },
  {
    num: 5,
    title: 'Reels',
    description: 'If you have a brilliant business idea, discuss it with your colleagues without leaving your home. Spacious meeting rooms with high panoramic windows will help you present your project in the best light.',
    image: '/images/Services_Reels_2.jpg',
  },
  {
    num: 6,
    title: 'Corporate\n Video',
    description: 'A secluded corner in the very center of the complex. Greenery, stylish design solutions, and cozy relaxation areas create an atmosphere of calm and harmony.',
    image: '/images/Services_Corporate Video.jpg',
  },
  {
    num: 7,
    title: 'Print\n Media',
    description: 'A secluded corner in the very center of the complex. Greenery, stylish design solutions, and cozy relaxation areas create an atmosphere of calm and harmony.',
    image: '/images/Services_Print Media.jpg',
  },
  
]

const TOTAL = ITEMS.length

export default function Advantages() {
  const spacerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  // 'before' | 'pinned' | 'after'
  const [phase, setPhase] = useState<'before' | 'pinned' | 'after'>('before')
  // top offset for 'after' phase (px from top of document)
  const [afterTop, setAfterTop] = useState(0)

  useEffect(() => {
    const spacer = spacerRef.current
    if (!spacer) return

    const update = (scrollY: number) => {
      const sectionTop = spacer.offsetTop
      const viewH = window.innerHeight
      // Each step gets one full viewH of scroll — all TOTAL steps reachable while pinned
      // Plus 2 extra viewH to keep step 7 visible before next section
      const scrollDistance = (TOTAL + 2) * viewH
      const sectionBottom = sectionTop + scrollDistance

      if (scrollY < sectionTop) {
        setPhase('before')
      } else if (scrollY < sectionBottom) {
        setPhase('pinned')
        const scrolled = scrollY - sectionTop
        const index = Math.min(TOTAL - 1, Math.floor(scrolled / viewH))
        setActive(index)
      } else {
        setPhase('after')
        setAfterTop(sectionBottom - viewH)
        setActive(TOTAL - 1)
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
  }, [])

  const item = ITEMS[active]

  // Panel style based on phase
  const panelStyle: React.CSSProperties =
    phase === 'pinned'
      ? { position: 'fixed', top: 0, left: 0, right: 0, height: '100vh' }
      : phase === 'after'
      ? { position: 'absolute', top: afterTop, left: 0, right: 0, height: '100vh' }
      : { position: 'absolute', top: 0, left: 0, right: 0, height: '100vh' }

  return (
    // Spacer: tall enough for all steps — (TOTAL-1) extra viewports + 1 for the panel itself + 2vh buffer
    <div
      ref={spacerRef}
      id="advantages"
      style={{
        position: 'relative',
        height: `${(TOTAL + 2) * 100}vh`,
        background: '#000',
      }}
    >
      {/* Panel — fixed when pinned, absolute otherwise */}
      <div
        style={{
          ...panelStyle,
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          overflow: 'hidden',
          background: '#000',
          zIndex: 10,
        }}
      >
        {/* ── LEFT ── */}
        <div style={{
          background: '#000', color: '#fff',
          display: 'flex', flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '4rem',
          overflow: 'hidden',
        }}>

          {/* Counter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            
            <motion.span
              key={`num-${active}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff', lineHeight: 1 }}
            >
              {item.num}
            </motion.span>
            <span style={{ display: 'block', width: 40, height: 1, background: 'rgba(255,255,255,0.3)' }} />
            <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1 }}>
              {TOTAL}
            </span>
          </div>

          {/* Title */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <motion.h2
              key={`title-${active}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] as [number,number,number,number] }}
              style={{
                fontSize: 'clamp(3.2rem, 5vw, 7rem)', fontWeight: 600,
                lineHeight: 1.05, letterSpacing: '0.01em',
                textTransform: 'uppercase', color: '#fff',
                margin: 0, whiteSpace: 'pre-line',
              }}
            >
              {item.title}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            key={`desc-${active}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] as [number,number,number,number], delay: 0.1 }}
            style={{
              fontSize: 'clamp(1.2rem, 1.2vw, 1.5rem)', lineHeight: 1.65,
              color: 'rgba(255,255,255,0.55)', maxWidth: 420,
              margin: 0, letterSpacing: '0.03em', textTransform: 'uppercase',
            }}
          >
            {item.description}
          </motion.p>
        </div>

        {/* ── RIGHT — all images stacked, opacity crossfade ── */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.num}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] as [number,number,number,number] }}
              style={{ position: 'absolute', inset: 0, zIndex: i === active ? 1 : 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={it.image}
                alt={it.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
