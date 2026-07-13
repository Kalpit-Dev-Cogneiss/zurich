'use client'
import { useState } from 'react'
import Link from 'next/link'
import SplitText from '@/app/components/ui/SplitText'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import Magnetic from '@/app/components/ui/Magnetic'

interface PageCTAProps {
  eyebrow: string
  heading: string
  buttonLabel: string
  href: string
}

export default function PageCTA({ eyebrow, heading, buttonLabel, href }: PageCTAProps) {
  const [hover, setHover] = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '10rem 4rem',
      }}
    >
      <AnimateReveal>
        <span style={{
          display: 'block',
          fontSize: '1.1rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--c-brown)',
          marginBottom: '3.2rem',
        }}>
          {eyebrow}
        </span>
      </AnimateReveal>

      <SplitText
        as="h2"
        mode="lines"
        text={heading}
        style={{
          fontSize: 'clamp(3.6rem, 6vw, 8.8rem)',
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: '0.03em',
          textTransform: 'uppercase',
          margin: 0,
          marginBottom: '6rem',
          maxWidth: 1100,
        }}
      />

      <AnimateReveal delay={0.3}>
        <Magnetic strength={0.3}>
          <Link
            href={href}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'clamp(16rem, 18vw, 22rem)',
              height: 'clamp(16rem, 18vw, 22rem)',
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.3)',
              overflow: 'hidden',
              color: '#fff',
            }}
          >
            {/* brown fill that grows from the centre on hover */}
            <span aria-hidden="true" style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background: 'var(--c-brown)',
              transform: hover ? 'scale(1)' : 'scale(0)',
              transition: 'transform 0.6s cubic-bezier(.7,0,.3,1)',
            }} />
            <span style={{
              position: 'relative',
              fontSize: '1.25rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
            }}>
              {buttonLabel}
              <span aria-hidden="true" style={{
                fontSize: '1.8rem',
                transform: hover ? 'translateX(0.6rem)' : 'translateX(0)',
                transition: 'transform 0.4s cubic-bezier(.7,0,.3,1)',
              }}>
                →
              </span>
            </span>
          </Link>
        </Magnetic>
      </AnimateReveal>
    </section>
  )
}
