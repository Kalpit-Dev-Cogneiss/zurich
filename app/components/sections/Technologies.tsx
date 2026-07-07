'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TECHNOLOGY_ITEMS } from '@/app/lib/data'

export default function Technologies() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="services"
      style={{
        background: '#000',
        color: '#fff',
        minHeight: '100vh',
        padding: '4rem 0',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '50% 50%',
          minHeight: '100vh',
        }}
      >
        {/* LEFT - Image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {TECHNOLOGY_ITEMS.map((tech, i) => (
            <motion.div
              key={tech.title}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] as [number,number,number,number] }}
              style={{ 
                position: 'absolute', 
                inset: 0, 
                zIndex: i === active ? 1 : 0 
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.image}
                alt={tech.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          ))}
        </div>

        {/* RIGHT - Title and Cards */}
        <div
          style={{
            background: '#000',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            padding: '4rem',
          }}
        >
          {/* Title */}
          <div style={{ textAlign: 'right', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2.5rem, 3.5vw, 4rem)',
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              Testimonails
            </h2>
          </div>

          {/* Service Cards */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {TECHNOLOGY_ITEMS.map((tech, i) => (
              <motion.div
                key={tech.title}
                animate={{
                  borderColor: i === active ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                  backgroundColor: i === active ? 'rgba(255,255,255,0.05)' : 'transparent',
                }}
                transition={{ duration: 0.4 }}
                style={{
                  flex: 1,
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
                onClick={() => setActive(i)}
              >
                <p
                  style={{
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: '1rem',
                  }}
                >
                  {tech.title}
                </p>
                <motion.p
                  key={`desc-${i}-${active}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.5, delay: i === active ? 0.2 : 0 }}
                  style={{
                    fontSize: '1.4rem',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.6)',
                    display: i === active ? 'block' : 'none',
                  }}
                >
                  {tech.body}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
