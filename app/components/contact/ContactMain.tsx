'use client'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Magnetic from '@/app/components/ui/Magnetic'

const EASE: [number, number, number, number] = [0.7, 0, 0.3, 1]
const CONTACT_EMAIL = 'zurichai360@gmail.com'
const CONTACT_PHONE = '+91 98765 43210'

function StudioClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(
      new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  return <span style={{ fontVariantNumeric: 'tabular-nums' }}>{time || '--:--:--'}</span>
}

/**
 * Typographic contact screen — no photography. Giant staggered wordmark,
 * a spinning circular badge, a live studio clock, and the email itself as
 * the primary call to action.
 */
export default function ContactMain() {
  const [mounted, setMounted] = useState(false)
  const [hoverEmail, setHoverEmail] = useState(false)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const spotRaf = useRef(0)
  useEffect(() => { setMounted(true) }, [])

  // warm spotlight that follows the cursor — written straight to the DOM
  // (no React re-render per mousemove), throttled to one update per frame
  const onMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    if (spotRaf.current) return
    spotRaf.current = requestAnimationFrame(() => {
      spotRaf.current = 0
      const el = spotlightRef.current
      if (el) {
        el.style.background =
          `radial-gradient(46rem circle at ${clientX}px ${clientY}px, rgba(160,114,91,0.14), transparent 65%)`
      }
    })
  }

  return (
    <section
      id="contact-main"
      onMouseMove={onMouseMove}
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 640,
        background: '#000',
        color: '#fff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 4rem',
      }}
    >
      {/* cursor spotlight */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}
      />

      {/* top row — eyebrow + live clock */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          style={{
            position: 'absolute',
            top: '2.8rem',
            left: '4rem',
            right: '4rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <span style={{
            fontSize: '1.1rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--c-brown)',
          }}>
            Contact
          </span>
          {/* pushed below the fixed header's CTA so they don't overlap */}
          <span style={{
            fontSize: '1.1rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.45)',
            marginTop: '4.8rem',
            textAlign: 'right',
          }}>
            Hyderabad, IN — <StudioClock /> IST
            <span style={{ display: 'block', marginTop: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>
              32 years · 4000+ projects
            </span>
          </span>
        </motion.div>
      )}

      {/* giant wordmark */}
      <div>
        <div style={{ overflow: 'hidden' }}>
          {mounted && (
            <motion.p
              initial={{ y: '110%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
              style={{
                fontSize: 'clamp(7rem, 16vw, 19rem)',
                fontWeight: 600,
                lineHeight: 0.92,
                letterSpacing: '0.02em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Let&apos;s
            </motion.p>
          )}
        </div>
        <div style={{ overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '3vw' }}>
          {mounted && (
            <>
              <motion.p
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                style={{
                  fontSize: 'clamp(7rem, 16vw, 19rem)',
                  fontWeight: 600,
                  lineHeight: 0.92,
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase',
                  margin: 0,
                  color: 'transparent',
                  WebkitTextStroke: '1.5px rgba(255,255,255,0.85)',
                  paddingLeft: '12vw',
                }}
              >
                Talk
              </motion.p>

              {/* spinning badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
                style={{ position: 'relative', width: 130, height: 130, flexShrink: 0 }}
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 130 130"
                  style={{
                    width: '100%',
                    height: '100%',
                    animation: 'contact-badge-spin 14s linear infinite',
                  }}
                >
                  <defs>
                    <path
                      id="contact-badge-circle"
                      d="M 65,65 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                    />
                  </defs>
                  <text style={{
                    fontSize: 11,
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                    fill: 'rgba(255,255,255,0.6)',
                  }}>
                    <textPath href="#contact-badge-circle">
                      Get in touch — Zurich Graphics — Get in touch —
                    </textPath>
                  </text>
                </svg>
                <span style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 10, height: 10, borderRadius: '50%',
                  background: 'var(--c-brown)',
                }} />
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* bottom — email as the CTA + phone */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          style={{
            position: 'absolute',
            bottom: '3.2rem',
            left: '4rem',
            right: '4rem',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '4rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <span style={{
              display: 'block',
              fontSize: '1.1rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '1.2rem',
            }}>
              4000 projects in. Yours could be next
            </span>
            <Magnetic strength={0.15}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                onMouseEnter={() => setHoverEmail(true)}
                onMouseLeave={() => setHoverEmail(false)}
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(2rem, 3.4vw, 4.4rem)',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  color: hoverEmail ? 'var(--c-brown)' : '#fff',
                  transition: 'color 0.35s ease',
                  lineHeight: 1.2,
                }}
              >
                {CONTACT_EMAIL}
                <span style={{
                  display: 'block',
                  height: 2,
                  background: 'var(--c-brown)',
                  transform: hoverEmail ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: hoverEmail ? 'left center' : 'right center',
                  transition: 'transform 0.5s cubic-bezier(.7,0,.3,1)',
                }} />
              </a>
            </Magnetic>
          </div>
          <a
            href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`}
            style={{
              fontSize: '1.6rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.6)',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            {CONTACT_PHONE}
          </a>
        </motion.div>
      )}

      <style>{`
        @keyframes contact-badge-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
