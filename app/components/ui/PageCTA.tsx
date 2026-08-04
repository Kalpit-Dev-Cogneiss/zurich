'use client'
import { useState } from 'react'
import Link from 'next/link'
import SplitText from '@/app/components/ui/SplitText'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import Magnetic from '@/app/components/ui/Magnetic'

interface PageCTAProps {
  eyebrow: string
  heading: string
  body?: string
  buttonLabel: string
  href: string
}

export default function PageCTA({ eyebrow, heading, body, buttonLabel, href }: PageCTAProps) {
  const [hover, setHover] = useState(false)

  return (
    <section
      className="page-cta"
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10rem 4rem',
        borderTop: '1px solid rgba(255,255,255,0.12)',
        overflow: 'hidden',
      }}
    >
      {/* soft glow, off-centre */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        maxWidth: 900,
        maxHeight: 900,
        background: 'radial-gradient(circle, rgba(255,255,255,0.12), transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: 1300, width: '100%', margin: '0 auto' }}>
        <AnimateReveal>
          <span style={{
            display: 'block',
            fontSize: '1.1rem',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '2.4rem',
          }}>
            {eyebrow}
          </span>
        </AnimateReveal>

        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '4rem',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(255,255,255,0.12)',
          paddingBottom: '4rem',
        }}>
          <SplitText
            as="h2"
            mode="lines"
            text={heading}
            style={{
              fontSize: 'clamp(3.2rem, 5.4vw, 7.6rem)',
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '0.01em',
              margin: 0,
              maxWidth: 900,
              flex: '1 1 480px',
            }}
          />

          {body && (
            <AnimateReveal delay={0.15} style={{ flex: '1 1 320px', maxWidth: 420 }}>
              <p style={{
                fontSize: '1.4rem',
                lineHeight: 1.7,
                letterSpacing: '0.02em',
                color: 'rgba(255,255,255,0.6)',
                margin: 0,
              }}>
                {body}
              </p>
            </AnimateReveal>
          )}

          <AnimateReveal delay={0.25} style={{ flexShrink: 0 }}>
            <Magnetic strength={0.25}>
              <Link
                href={href}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1.6rem',
                  padding: '1.6rem 1.6rem 1.6rem 3.2rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  overflow: 'hidden',
                  color: hover ? '#000' : '#fff',
                  transition: 'color 0.3s ease',
                }}
              >
                {/* white fill that slides in from the left on hover */}
                <span aria-hidden="true" style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#fff',
                  transform: hover ? 'translateX(0)' : 'translateX(-100%)',
                  transition: 'transform 0.5s cubic-bezier(.7,0,.3,1)',
                }} />
                <span style={{
                  position: 'relative',
                  fontSize: '1.3rem',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}>
                  {buttonLabel}
                </span>
                <span aria-hidden="true" style={{
                  position: 'relative',
                  width: '4.4rem',
                  height: '4.4rem',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transform: hover ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform 0.4s cubic-bezier(.7,0,.3,1)',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Magnetic>
          </AnimateReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .page-cta {
            padding: 5rem 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
