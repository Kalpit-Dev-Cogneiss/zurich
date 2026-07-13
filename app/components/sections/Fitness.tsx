'use client'
import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Lenis from 'lenis'

const IMG = {
  i1: '/images/Services_001.jpg',
  i2: '/images/Services_002.jpg',
  i3: '/images/Services_003.jpg',
  i4: '/images/Services_004.jpg',
  i5: '/images/Services_005.jpg',
  i6: '/images/Services_006.jpg',
  i7: '/images/Services_007.jpg',
  i8: '/images/Services_008.jpg',
  i9: '/images/Services_009.jpg',
  i10: '/images/Services_010.jpg',
}

export default function Fitness() {
  const spacerRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [slideX, setSlideX] = useState(100)  // vw: 100 = off-screen right
  const [phase, setPhase] = useState<'before' | 'pinned' | 'after'>('before')
  const [afterTop, setAfterTop] = useState(0)

  useEffect(() => {
    const spacer = spacerRef.current
    const strip = stripRef.current
    if (!spacer || !strip) return

    const update = (scrollY: number) => {
      const sectionTop = spacer.offsetTop
      const viewW = window.innerWidth
      const viewH = window.innerHeight
      const maxX = strip.scrollWidth - viewW

      // Slide-in zone: 1 viewH before sectionTop for smooth slide-in animation
      const slideStart = sectionTop - viewH
      // Horizontal scroll ends when we've scrolled maxX past sectionTop
      const hScrollEnd = sectionTop + maxX

      if (scrollY < slideStart) {
        setSlideX(100); setPhase('before'); setTranslateX(0)
      } else if (scrollY < sectionTop) {
        // Slide in from right — strip stays at 0, no horizontal scroll yet
        const p = (scrollY - slideStart) / viewH
        setSlideX(100 - p * 100); setPhase('before'); setTranslateX(0)
      } else if (scrollY < hScrollEnd) {
        // Fully in — horizontal scroll starts from 0
        setSlideX(0); setPhase('pinned')
        setTranslateX(-(scrollY - sectionTop))
      } else {
        // End — park
        setSlideX(0); setPhase('after')
        setAfterTop(sectionTop + maxX)
        setTranslateX(-maxX)
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
    const fn = () => update(window.scrollY)
    window.addEventListener('scroll', fn, { passive: true })
    update(window.scrollY)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const [spacerH, setSpacerH] = useState('400vh')
  useEffect(() => {
    const recalc = () => {
      const strip = stripRef.current
      if (!strip) return
      const maxX = strip.scrollWidth - window.innerWidth
      // Spacer = horizontal scroll distance + 2 viewport heights buffer
      // The slide-in (1vh) happens while scrolling through previous section
      const bufferSpace = window.innerHeight * 2
      setSpacerH(`${maxX + bufferSpace}px`)
    }
    const t = setTimeout(recalc, 100)
    window.addEventListener('resize', recalc)
    return () => { clearTimeout(t); window.removeEventListener('resize', recalc) }
  }, [])

  const panelStyle: React.CSSProperties =
    phase === 'before'
      ? { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }
      : { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }

  return (
    <div
      ref={spacerRef}
      id="fitness"
      style={{ position: 'relative', height: spacerH, background: '#000', zIndex: 10 }}
    >
      <div
        style={{
          ...panelStyle,
          overflow: 'hidden',
          zIndex: 15,
          background: '#fff',
          transform: `translate3d(${slideX}vw, 0, 0)`,
          willChange: 'transform',
          // Hide completely when fully off-screen to prevent visibility during pre-scroll
          visibility: slideX >= 100 ? 'hidden' : 'visible',
        }}
      >
        <div
          ref={stripRef}
          style={{
            display: 'flex', alignItems: 'flex-start',
            height: '100vh', width: 'max-content',
            background: '#fff',
            transform: `translateX(${translateX}px)`,
            willChange: 'transform',
          }}
        >
          {/* PANEL 1 */}
          <div style={{ display: 'flex', height: '100vh', alignItems: 'center', padding: '0 6rem', gap: '5rem', flexShrink: 0 }}>
            <div style={{ flexShrink: 0, width: '20vw' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 2.8vw, 3.6rem)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '0.02em', textTransform: 'uppercase', color: '#000', margin: 0 }}>
                Our Work
              </h2>
            </div>
            <div style={{ flexShrink: 0, width: '38vw', height: '78vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i1} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '80% 20%' }} />
            </div>
            <div style={{ flexShrink: 0, width: '22vw' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 1.1vw, 1.4rem)', lineHeight: 1.65, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#000' }}>
                We&apos;ll let it do the talking. Inside are identities that found their edge,
                campaigns that owned their space and projects that became brands.
              </p>
            </div>
          </div>

          {/* PANEL 2 */}
          <div style={{ display: 'flex', height: '100vh', alignItems: 'center', padding: '0 4rem', gap: '3rem', flexShrink: 0 }}>
            <div style={{ flexShrink: 0, width: '20vw', height: '65vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i2} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flexShrink: 0, width: '22vw', height: '72vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <p style={{ fontSize: 'clamp(1rem, 1vw, 1.25rem)', lineHeight: 1.6, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#000', marginTop: '2rem' }}>
                Built in the studio. Tested in the market. Remembered across cities.
              </p>
            </div>
            <div style={{ flexShrink: 0, width: '20vw' }}>
              <p style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.4rem)', fontWeight: 600, lineHeight: 1.25, letterSpacing: '0.02em', textTransform: 'uppercase', color: '#000' }}>
                The skyline remembers great architecture. The market remembers great branding. This is where we made our mark.
              </p>
            </div>
          </div>

          {/* PANEL 3 */}
          <div style={{ display: 'flex', height: '100vh', alignItems: 'center', padding: '0 4rem', gap: '3rem', flexShrink: 0 }}>
            <div style={{ flexShrink: 0, width: '28vw', height: '78vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i4} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '20% 0%' }} />
            </div>
            <div style={{ flexShrink: 0, width: '28vw', height: '75vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i5} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flexShrink: 0, width: '18vw' }}>
              <p style={{ fontSize: 'clamp(1rem, 1vw, 1.25rem)', lineHeight: 1.65, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#000' }}>
                Every project becomes a case study our clients are proud to share — from first
                sketch to the finished brand on the ground.
              </p>
            </div>
          </div>

          {/* PANEL 4 */}
          <div style={{ display: 'flex', height: '100vh', alignItems: 'center', padding: '0 4rem', gap: '3rem', flexShrink: 0 }}>
            <div style={{ flexShrink: 0, width: '28vw', height: '72vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i6} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flexShrink: 0, width: '48vw', height: '78vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i7} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }} />
            </div>
            <div style={{ flexShrink: 0, width: '20vw' }}>
              <p style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.4rem)', fontWeight: 600, lineHeight: 1.25, letterSpacing: '0.02em', textTransform: 'uppercase', color: '#000' }}>
                From naming to launch — one connected creative journey, across every touchpoint.
              </p>
            </div>
            <div style={{ flexShrink: 0, width: '6vw' }} />
          </div>

          <div style={{ display: 'flex', height: '100vh', alignItems: 'center', padding: '0 4rem', gap: '3rem', flexShrink: 0 }}>
            <div style={{ flexShrink: 0, width: '28vw', height: '72vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i8} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ flexShrink: 0, width: '48vw', height: '78vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i9} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 20%' }} />
            </div>
            <div style={{ flexShrink: 0, width: '20vw' }}>
              <p style={{ fontSize: 'clamp(1.4rem, 1.8vw, 2.4rem)', fontWeight: 600, lineHeight: 1.25, letterSpacing: '0.02em', textTransform: 'uppercase', color: '#000' }}>
                A compelling position. A powerful story. A brand built to be chosen.
              </p>
            </div>
            <div style={{ flexShrink: 0, width: '6vw' }} />
          </div>

          {/* PANEL 10 */}
          <div style={{ display: 'flex', height: '100vh', alignItems: 'center', padding: '0 6rem', gap: '5rem', flexShrink: 0 }}>
            <div style={{ flexShrink: 0, width: '20vw' }}>
              <h2 style={{ fontSize: 'clamp(2rem, 2.8vw, 3.6rem)', fontWeight: 600, lineHeight: 1.1, letterSpacing: '0.02em', textTransform: 'uppercase', color: '#000', margin: 0 }}>
                THE WORK<br />SPEAKS
              </h2>
            </div>
            <div style={{ flexShrink: 0, width: '38vw', height: '78vh', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.i10} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '80% 20%' }} />
            </div>
            <div style={{ flexShrink: 0, width: '22vw' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 1.1vw, 1.4rem)', lineHeight: 1.65, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#000' }}>
                Over three decades of experience, a deep understanding of Indian realty and a
                strategy-first approach — identities that found their edge, campaigns that owned
                their space and projects that became brands.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
