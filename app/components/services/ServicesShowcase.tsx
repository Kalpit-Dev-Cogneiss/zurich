'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { ServiceData } from '@/app/lib/servicesData'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import ParallaxImage from '@/app/components/ui/ParallaxImage'
import Magnetic from '@/app/components/ui/Magnetic'

const pad = (n: number) => String(n).padStart(2, '0')

function ServiceMedia({ service }: { service: ServiceData }) {
  return (
    <AnimateReveal>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3', overflow: 'hidden' }}>
        <ParallaxImage src={service.image} alt={service.title} strength={8} />
      </div>
    </AnimateReveal>
  )
}

function ServiceContent({ service, index, total }: { service: ServiceData; index: number; total: number }) {
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <AnimateReveal delay={0.1}>
      <span style={{
        display: 'block',
        fontSize: '1.1rem',
        letterSpacing: '0.14em',
        color: 'var(--c-brown)',
        marginBottom: '1.6rem',
      }}>
        {pad(index + 1)} / {pad(total)}
      </span>

      <h3 style={{
        fontSize: 'clamp(2.2rem, 3vw, 3.6rem)',
        fontWeight: 600,
        lineHeight: 1.15,
        letterSpacing: '0.01em',
        color: '#fff',
        margin: 0,
        marginBottom: '1.8rem',
      }}>
        {service.title}
      </h3>

      <p style={{
        fontSize: 'clamp(1.3rem, 1.3vw, 1.5rem)',
        lineHeight: 1.6,
        letterSpacing: '0.02em',
        color: 'rgba(255,255,255,0.6)',
        maxWidth: 480,
        margin: 0,
      }}>
        {service.tagline}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', marginTop: '2.4rem', marginBottom: '3rem', maxWidth: 480 }}>
        {service.highlights.slice(0, 4).map((h) => (
          <li key={h} style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1.2rem',
            padding: '1.2rem 0',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            fontSize: 'clamp(1.2rem, 1.2vw, 1.4rem)',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.5,
          }}>
            <span aria-hidden="true" style={{
              width: 5, height: 5, borderRadius: '50%',
              background: 'var(--c-brown)', flexShrink: 0, marginTop: '0.7rem',
            }} />
            {h}
          </li>
        ))}
      </ul>

      <Magnetic strength={0.25}>
        <Link
          href={`/services/${service.slug}`}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.4rem',
            padding: '1.2rem 1.2rem 1.2rem 2.6rem',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.3)',
            overflow: 'hidden',
            color: '#fff',
          }}
        >
          <span aria-hidden="true" style={{
            position: 'absolute', inset: 0,
            background: 'var(--c-brown)',
            transform: ctaHover ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.5s cubic-bezier(.7,0,.3,1)',
          }} />
          <span style={{ position: 'relative', fontSize: '1.3rem', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
            View service
          </span>
          <span aria-hidden="true" style={{
            position: 'relative',
            width: '3.6rem', height: '3.6rem',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            transform: ctaHover ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.4s cubic-bezier(.7,0,.3,1)',
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
              <path d="M5 19L19 5M19 5H8M19 5V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </Magnetic>
    </AnimateReveal>
  )
}

/**
 * Services index: a plain alternating (zigzag) list — image and content
 * swap sides every row. Normal document scroll, no pinning.
 */
export default function ServicesShowcase({ services }: { services: ServiceData[] }) {
  const total = services.length

  return (
    <div style={{ background: '#000' }}>
      {services.map((service, i) => {
        const imageFirst = i % 2 === 0
        return (
          <div
            key={service.slug}
            style={{
              padding: 'clamp(4rem, 7vw, 8rem) 4rem',
              borderBottom: i < total - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}
          >
            <div
              className="service-row"
              style={{
                maxWidth: 1400,
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 'clamp(3rem, 5vw, 6rem)',
                alignItems: 'center',
              }}
            >
              {imageFirst ? (
                <>
                  <ServiceMedia service={service} />
                  <ServiceContent service={service} index={i} total={total} />
                </>
              ) : (
                <>
                  <ServiceContent service={service} index={i} total={total} />
                  <ServiceMedia service={service} />
                </>
              )}
            </div>
          </div>
        )
      })}

      <style>{`
        @media (max-width: 768px) {
          .service-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
