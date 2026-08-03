'use client'
import { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  type MotionValue,
} from 'framer-motion'
import type Lenis from 'lenis'

const EASE: [number, number, number, number] = [0.7, 0, 0.3, 1]
// Smooth, slow deceleration — the spin gradually slows down into place
const SPIN_EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
const SPIN_DURATION = 1.1

const STATS = [
  { value: 32, suffix: '', label: 'Years', body: 'of craft: one continuous practice in premium branding, print, and exhibitions since 1994.' },
  { value: 4000, suffix: '+', label: 'Projects', body: 'delivered for real estate, architecture, and high-value businesses.' },
  { value: 3, suffix: '', label: 'Sectors', body: 'we go deep in, rather than spreading thin across everything.' },
  { value: 6, suffix: '', label: 'Service Lines', body: 'from strategy to exhibitions: one connected process, start to finish.' },
]

const PLACES = [1000, 100, 10, 1]
const PAD = 2 // buffer rows rendered beyond 0–9 so the strip wraps seamlessly (…8,9,0,1…)
const WINDOW_ROWS = 5 // rows visible at once — 2 above, the centered/highlighted one, 2 below
const CENTER_ROW = Math.floor(WINDOW_ROWS / 2) - PAD // offsets the strip so the matching digit lands in the window's middle slot
const LOW_OPACITY = 0.16
const SWIPE_THRESHOLD = 40

const mod10 = (n: number) => ((n % 10) + 10) % 10

/** One row within a reel column. Only the row sitting exactly on the centerline lights up; every other row — regardless of how close — stays at the same flat low opacity. */
function ReelRow({ pos, rowValue, significant }: { pos: MotionValue<number>; rowValue: number; significant: boolean }) {
  const opacity = useTransform(pos, p => (significant && Math.abs(p - rowValue) < 0.5) ? 1 : LOW_OPACITY)
  return (
    <motion.div style={{ height: '1em', lineHeight: 1, textAlign: 'center', color: '#fff', opacity }}>
      {mod10(rowValue)}
    </motion.div>
  )
}

/**
 * Mechanical digit reel column — a tall, unclipped window onto an endless
 * 0–9 loop (rows run …8, 9, 0, 1… so scrolling past 0 continues smoothly
 * into 9 above, never a dead edge). The row landing on the centerline is the
 * real digit for the current stat; every other row sits at one flat dim
 * opacity. Non-significant columns (leading places that aren't part of the
 * current stat's number, e.g. the "00" in "0032") never light up at all.
 * 
 * Each column independently animates to its target digit via the shortest
 * path (up or down), regardless of other columns.
 */
function ReelColumn({ targetDigit, significant }: { targetDigit: number; significant: boolean }) {
  const pos = useMotionValue(0)
  const y = useTransform(pos, p => `${-(p - CENTER_ROW)}em`)
  const rows = Array.from({ length: 10 + PAD * 2 }, (_, j) => j - PAD)

  useEffect(() => {
    const current = pos.get() % 10
    const target = targetDigit
    
    // Calculate shortest distance considering wrap-around
    let distance = target - current
    if (distance > 5) distance -= 10
    if (distance < -5) distance += 10
    
    const newPos = pos.get() + distance
    
    animate(pos, newPos, {
      duration: SPIN_DURATION,
      ease: SPIN_EASE,
    })
  }, [targetDigit, pos])

  return (
    <div style={{ position: 'relative', height: `${WINDOW_ROWS}em`, width: '1.05ch', overflow: 'hidden' }}>
      <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, y }}>
        {rows.map(rowValue => (
          <ReelRow key={rowValue} pos={pos} rowValue={rowValue} significant={significant} />
        ))}
      </motion.div>
    </div>
  )
}

/**
 * By-the-numbers stepper: a single full-screen slide per stat. One scroll
 * gesture (wheel or swipe) advances straight to the next stat — the reel
 * spins through the digits and decelerates into place — rather than
 * scrubbing gradually across a long scroll distance. Scrolling past the
 * first/last stat releases control back to normal page scroll.
 */
export default function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const [stepIndex, setStepIndex] = useState(0)
  const stepIndexRef = useRef(0)
  const lockedRef = useRef(false)
  const engagedRef = useRef(false)
  const exitingRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    // the sticky wrapper StackReveal renders around this section, and its
    // sibling wrapper around the next section (AboutCraft) — used to tell
    // whether this slide is the one currently on top
    const wrapper = section.parentElement
    const nextWrapper = wrapper?.nextElementSibling as HTMLElement | null

    // Active only while pinned AND this slide — not the next section — owns
    // the screen. The old check (nextTop > 1) went active the instant the
    // next section had slid down a single pixel when scrolling up from
    // below; engage() then froze Lenis with that section still filling the
    // viewport and the stepper ran invisibly underneath it: "scrolling is
    // stuck". The allowance can't be exactly 0 either — scroll moves in
    // whole-frame jumps, so an exact-alignment window could be skipped over
    // at speed — but it only needs to be frame-sized: engage() glides the
    // page flush regardless (see below), and a wide allowance here just
    // means the *next* section's own scroll can get caught by this hijack
    // while it's still substantially on screen.
    const isActive = () => {
      const rect = section.getBoundingClientRect()
      const nextTop = nextWrapper ? nextWrapper.getBoundingClientRect().top : Infinity
      return rect.top <= 1 && nextTop - rect.bottom > -Math.max(120, window.innerHeight * 0.1)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).__lenis as Lenis | undefined

    // hard failsafe: never leave scroll hijacked longer than this, no matter
    // what triggered it or which edge case in the isActive() geometry missed
    // the release — re-armed on every step so normal use never trips it
    const ENGAGE_TIMEOUT = 4000
    let engageTimeoutId: ReturnType<typeof setTimeout> | null = null
    const armEngageTimeout = () => {
      if (engageTimeoutId) clearTimeout(engageTimeoutId)
      engageTimeoutId = setTimeout(() => {
        engagedRef.current = false
        exitingRef.current = false
        lenis?.start()
      }, ENGAGE_TIMEOUT)
    }
    const clearEngageTimeout = () => {
      if (engageTimeoutId) { clearTimeout(engageTimeoutId); engageTimeoutId = null }
    }

    const goTo = (index: number) => {
      lockedRef.current = true
      armEngageTimeout()
      stepIndexRef.current = index
      setStepIndex(index)
      // Animation duration handled by individual ReelColumns
      setTimeout(() => { lockedRef.current = false }, SPIN_DURATION * 1000)
    }

    const release = () => {
      engagedRef.current = false
      clearEngageTimeout()
      // the section still counts as active for a stretch of real scroll
      // after release (until the next section covers half the screen, or we
      // unpin upward) — keep hands off through that corridor, otherwise
      // every tick re-hijacks and immediately releases again, and the
      // stop/start churn can misread a tick as reverse and snap back a step
      exitingRef.current = true
      lenis?.start()
    }

    // true while we're still coasting out of a just-released boundary and
    // shouldn't re-engage yet; clears itself once the section is no longer active
    const stillExiting = () => {
      if (!exitingRef.current) return false
      if (isActive()) return true
      exitingRef.current = false
      return false
    }

    // safety net: if we're ever marked as hijacking scroll while this
    // section isn't actually the active one, un-hijack immediately rather
    // than relying solely on the step-boundary release — leaving engagedRef
    // stuck true leaves Lenis permanently stopped (wheel scroll dead; only
    // a native scrollbar drag, which bypasses Lenis's wheel handler, works)
    const releaseIfStale = () => {
      if (!engagedRef.current || isActive()) return false
      engagedRef.current = false
      exitingRef.current = false
      clearEngageTimeout()
      lenis?.start()
      return true
    }

    const step = (dir: 1 | -1) => {
      if (lockedRef.current) return false
      const next = stepIndexRef.current + dir
      if (next < 0 || next > STATS.length - 1) {
        release()
        return false
      }
      goTo(next)
      return true
    }

    // the scroll gesture that carries the page into the pinned section is
    // still live when we detect isActive() — engaging mid-gesture must not
    // also count as the first step, or the opening stat never gets shown
    const engage = () => {
      engagedRef.current = true
      lenis?.stop()
      // Square the slide up: the gesture that got us here rarely lands on
      // the exact pin point (frames overshoot, and up-entry from the CTA
      // activates while the CTA still covers part of the screen), so glide
      // the page until this section sits flush and the next one is fully
      // below. force:true is required — scrollTo on a stopped Lenis is a
      // no-op without it.
      const rect = section.getBoundingClientRect()
      const nextTop = nextWrapper ? nextWrapper.getBoundingClientRect().top : rect.bottom
      const offset = rect.top + (nextTop - rect.bottom)
      if (Math.abs(offset) > 2) {
        lenis?.scrollTo(window.scrollY + offset, { force: true, duration: 0.5 })
      }
      armEngageTimeout()
    }

    const onWheel = (e: WheelEvent) => {
      if (releaseIfStale()) return
      if (stillExiting()) return
      if (!isActive()) return
      if (!engagedRef.current) { engage(); return }
      step(e.deltaY > 0 ? 1 : -1)
    }

    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY }
    const onTouchMove = (e: TouchEvent) => {
      if (releaseIfStale()) return
      if (stillExiting()) return
      if (!isActive()) return
      if (!engagedRef.current) {
        engage()
        touchStartY = e.touches[0].clientY // don't let the drag that caused entry also register as a step
        return
      }
      const dy = touchStartY - e.touches[0].clientY
      if (Math.abs(dy) < SWIPE_THRESHOLD) return
      touchStartY = e.touches[0].clientY
      step(dy > 0 ? 1 : -1)
    }

    // engage the hijack the moment normal scroll brings this slide to the top
    const onScroll = () => {
      if (releaseIfStale()) return
      if (stillExiting()) return
      if (!engagedRef.current && isActive()) engage()
    }
    if (lenis) lenis.on('scroll', onScroll)
    else window.addEventListener('scroll', onScroll, { passive: true })

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      if (lenis) lenis.off('scroll', onScroll)
      else window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      clearEngageTimeout()
      if (engagedRef.current) lenis?.start()
    }
  }, [])

  const stat = STATS[stepIndex]
  const digitCount = String(stat.value).length
  const threshold = Math.pow(10, digitCount - 1)
  
  // Extract individual digits for independent animation
  const digits = [
    Math.floor(stat.value / 1000) % 10,
    Math.floor(stat.value / 100) % 10,
    Math.floor(stat.value / 10) % 10,
    stat.value % 10,
  ]

  return (
    <section
      ref={sectionRef}
      id="about-stats"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 600,
        background: '#000',
        color: '#fff',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* eyebrow */}
      <div style={{
        position: 'absolute',
        top: '2.8rem',
        left: '4rem',
        zIndex: 3,
        fontSize: '1.1rem',
        letterSpacing: '0.22em',
        color: '#fff',
      }}>
        By the numbers
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'clamp(2rem, 4vw, 4rem)',
        width: '100%',
        padding: '0 4rem',
      }}>
        {/* the reel - 50% width */}
        <div
          aria-hidden="true"
          style={{
            flex: '0 0 50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'clamp(10rem, 18vw, 24rem)',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.02em',
            fontVariantNumeric: 'tabular-nums',
            whiteSpace: 'nowrap',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, #000 22%, #000 78%, transparent 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
            {PLACES.map((place, index) => (
              <ReelColumn 
                key={place} 
                targetDigit={digits[index]} 
                significant={place <= threshold} 
              />
            ))}
            <span style={{
              opacity: stat.suffix ? 1 : 0,
              color: '#fff',
              transition: `opacity 0.5s ${EASE}`,
              marginLeft: '0.6rem',
            }}>
              {stat.suffix || '+'}
            </span>
          </div>
        </div>

        {/* text panel - 50% width */}
        <div style={{ flex: '0 0 50%', display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: '100%', width: '100%' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -26 }}
                transition={{ duration: 0.55, ease: EASE }}
              >
                <h3 style={{
                  fontSize: 'clamp(2.6rem, 3.4vw, 4.4rem)',
                  fontWeight: 600,
                  lineHeight: 1.05,
                  letterSpacing: '0.02em',
                  margin: 0,
                  marginBottom: '1.6rem',
                }}>
                  {stat.label}
                </h3>
                <p style={{
                  fontSize: '1.5rem',
                  lineHeight: 1.75,
                  letterSpacing: '0.03em',
                  color: 'rgba(255,255,255,0.65)',
                  margin: 0,
                }}>
                  {stat.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* stat rail */}
      <div style={{
        position: 'absolute',
        bottom: '3.2rem',
        left: '4rem',
        right: '4rem',
        zIndex: 3,
      }}>
        <div style={{ display: 'flex', gap: '3.2rem' }}>
          {STATS.map((s, i) => (
            <span key={s.label} style={{
              fontSize: '1.1rem',
              letterSpacing: '0.18em',
              color: i === stepIndex ? '#fff' : 'rgba(255,255,255,0.35)',
              transition: 'color 0.4s ease',
            }}>
              {String(i + 1).padStart(2, '0')} · {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
