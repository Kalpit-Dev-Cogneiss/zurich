'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import SplitText from '@/app/components/ui/SplitText'
import { APARTMENT_TYPES } from '@/app/lib/data'
import SvgIcon from '@/app/components/ui/SvgIcon'

export default function Apartments() {
  const [active, setActive] = useState(0)

  return (
    <section id="apartments" style={{ background: '#fff', padding: '0 0 12rem' }}>

      {/* Hero */}
      <div style={{
        position: 'relative', width: '100%',
        aspectRatio: '21/9', overflow: 'hidden', marginBottom: '10rem',
      }}>
        <Image
          src="/assets/images/apartments/hero.webp"
          alt="Apartments overview" fill style={{ objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 55%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '5.6rem',
          left: '5.6rem', right: '5.6rem', color: '#fff',
        }}>
          <SplitText
            text="SPLENDID APARTMENTS"
            as="h2"
            mode="chars"
            style={{
              fontSize: 'clamp(3.2rem, 7vw, 10rem)',
              lineHeight: 0.95, letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          />
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 5.6rem' }}>

        <AnimateReveal>
          <p style={{
            fontSize: '1.7rem', lineHeight: 1.75,
            color: 'var(--c-gray)', maxWidth: 640, marginBottom: '8rem',
          }}>
            Refined finishes, neoclassical furniture, and beauty imprinted in every detail — the
            atmosphere of these apartments makes you want to immerse yourself in them again and again.
          </p>
        </AnimateReveal>

        {/* Type tabs */}
        <AnimateReveal delay={0.1}>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 0,
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            marginBottom: '6.4rem',
          }}>
            {APARTMENT_TYPES.map((type, i) => (
              <button
                key={type.label}
                onClick={() => setActive(i)}
                style={{
                  padding: '1.6rem 2.4rem',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: '1.2rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: i === active ? '#000' : 'rgba(0,0,0,0.3)',
                  borderBottom: i === active ? '2px solid var(--c-brown)' : '2px solid transparent',
                  transition: 'color 0.4s ease, border-color 0.4s ease',
                  marginBottom: '-1px',
                }}
              >
                {type.label}
              </button>
            ))}
          </div>
        </AnimateReveal>

        {/* Floor plan + info */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '8rem', alignItems: 'center',
        }} className="apt-grid">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
              style={{ position: 'relative', aspectRatio: '1/1' }}
            >
              <Image
                src={APARTMENT_TYPES[active].image}
                alt={`${APARTMENT_TYPES[active].label} floor plan`}
                fill style={{ objectFit: 'contain' }}
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`info-${active}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
            >
              <p style={{
                fontSize: '1.1rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'var(--c-gray-light)',
                marginBottom: '1.2rem',
              }}>
                {APARTMENT_TYPES[active].label}
              </p>
              <p style={{
                fontSize: 'clamp(5rem, 8vw, 10rem)',
                lineHeight: 0.95, letterSpacing: '0.01em',
                marginBottom: '3.2rem',
              }}>
                {APARTMENT_TYPES[active].range}
              </p>

              <div style={{
                padding: '2.8rem', background: '#f5f5f5',
                marginBottom: '4rem',
              }}>
                <p style={{
                  fontSize: '1.1rem', letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--c-gray)',
                  marginBottom: '1rem',
                }}>
                  Purchase conditions
                </p>
                <p style={{ fontSize: '1.5rem', lineHeight: 1.6, color: '#000' }}>
                  Mortgage · 0% installment plan · Trade-in
                </p>
              </div>

              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: '1.4rem',
                padding: '1.8rem 3.6rem',
                background: 'var(--c-brown)', color: '#fff',
                fontSize: '1.2rem', letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'background 0.3s ease',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#8a6049')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--c-brown)')}
              >
                Choose an Apartment
                <SvgIcon id="arrow-right" width={16} height={16} />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .apt-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
