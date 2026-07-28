'use client'
import { useState } from 'react'
import type { FAQItem } from '@/app/lib/servicesData'

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.14)' }}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.question} style={{ borderBottom: '1px solid rgba(255,255,255,0.14)' }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2rem',
                width: '100%',
                padding: 'clamp(2rem, 2.6vw, 2.8rem) 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: '#fff',
                fontFamily: 'inherit',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'baseline', gap: '2rem' }}>
                <span style={{ fontSize: '1.2rem', letterSpacing: '0.06em', color: 'var(--c-brown)', flexShrink: 0 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{
                  fontSize: 'clamp(1.6rem, 2vw, 2.2rem)',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  lineHeight: 1.35,
                }}>
                  {item.question}
                </span>
              </span>
              <span aria-hidden="true" style={{
                position: 'relative',
                width: '2.4rem',
                height: '2.4rem',
                flexShrink: 0,
              }}>
                <span style={{
                  position: 'absolute', top: '50%', left: 0, right: 0, height: 1.5,
                  background: '#fff', transform: 'translateY(-50%)',
                }} />
                <span style={{
                  position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1.5,
                  background: '#fff', transform: `translateX(-50%) scaleY(${isOpen ? 0 : 1})`,
                  transition: 'transform 0.35s cubic-bezier(.7,0,.3,1)',
                }} />
              </span>
            </button>

            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.5s cubic-bezier(.7,0,.3,1)',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <p style={{
                  fontSize: 'clamp(1.3rem, 1.3vw, 1.6rem)',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.6)',
                  maxWidth: 720,
                  paddingLeft: 'clamp(3rem, 4vw, 4.4rem)',
                  margin: 0,
                  paddingBottom: 'clamp(2rem, 2.6vw, 2.8rem)',
                }}>
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
