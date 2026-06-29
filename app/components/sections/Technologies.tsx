'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import SplitText from '@/app/components/ui/SplitText'
import { TECHNOLOGY_ITEMS } from '@/app/lib/data'

export default function Technologies() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr',
      minHeight: '100vh', background: '#000',
    }} className="tech-outer-grid">

      {/* LEFT — full portrait image */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '60vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={TECHNOLOGY_ITEMS[active].image}
              alt={TECHNOLOGY_ITEMS[active].title}
              fill style={{ objectFit: 'cover' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT — section title + stacked bordered cards */}
      <div style={{
        background: '#000', color: '#fff',
        display: 'flex', flexDirection: 'column',
        padding: '6rem 4rem',
        borderLeft: '1px solid rgba(255,255,255,0.06)',
      }}>
        {/* Top: section heading (top-right in video) */}
        <AnimateReveal>
          <SplitText
            text="Technologies and Services"
            as="h2"
            mode="lines"
            style={{
              fontSize: 'clamp(2rem, 2.8vw, 3.6rem)',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              lineHeight: 1.1, marginBottom: '5.6rem',
              textAlign: 'right',
            }}
          />
        </AnimateReveal>

        {/* Stacked cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem', flex: 1 }}>
          {TECHNOLOGY_ITEMS.map((item, i) => (
            <AnimateReveal key={item.title} delay={i * 0.08}>
              <button
                onClick={() => setActive(i)}
                style={{
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  width: '100%', textAlign: 'left',
                  padding: '2.8rem',
                  border: `1px solid ${i === active ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)'}`,
                  background: i === active ? 'rgba(255,255,255,0.04)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'border-color 0.4s ease, background 0.4s ease',
                  flex: 1,
                }}
              >
                <p style={{
                  fontSize: '1.1rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: i === active ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.25)',
                  marginBottom: '1.2rem',
                  transition: 'color 0.4s ease',
                }}>
                  {item.title}
                </p>
                <AnimatePresence>
                  {i === active && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
                      style={{
                        fontSize: '1.4rem', lineHeight: 1.65,
                        color: 'rgba(255,255,255,0.55)',
                        overflow: 'hidden',
                      }}
                    >
                      {item.body}
                    </motion.p>
                  )}
                </AnimatePresence>
              </button>
            </AnimateReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .tech-outer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
