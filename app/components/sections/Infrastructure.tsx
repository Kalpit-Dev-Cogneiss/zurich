'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SvgIcon from '@/app/components/ui/SvgIcon'
import ParallaxImage from '@/app/components/ui/ParallaxImage'

const SLIDES = [
  {
    title: 'Restaurant\nand bar',
    description: 'The captivatingly beautiful restaurant will win you over with its signature dishes and carefully curated wine collection. Here, time stands still so you can fully immerse yourself in your senses.',
    image: 'https://zorge9.estate/media/cache/homepage_infrastructure_slider_img_xxl/uploads/39/img_4055_1_1777295251.webp',
  },
  {
    title: 'Beauty salon',
    description: 'Bright beauty trends and new classics, Hollywood curls and creative coloring, "blogger" manicures and professional facial care — the masters at Beauty salon can do it all and even more.',
    image: 'https://zorge9.estate/media/cache/homepage_infrastructure_slider_img_xxl/uploads/39/img_4055_2_1777295279.webp',
  },
  {
    title: 'Spa &\nGrooming',
    description: "Want to treat your furry friend to a creative haircut or spa? Pet care is easier with professional grooming. Save time and energy — everything you need for your friend's comfort is within walking distance.",
    image: 'https://zorge9.estate/media/cache/homepage_infrastructure_slider_img_xxl/uploads/39/img_4055_1777295252.webp',
  },
]

export default function Infrastructure() {
  const [active, setActive] = useState(0)
  const prev = () => setActive(a => Math.max(0, a - 1))
  const next = () => setActive(a => Math.min(SLIDES.length - 1, a + 1))

  return (
    <section
      id="infrastructure"
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        width: '100%',
        height: '100svh',
        minHeight: 600,
        background: '#000',
        overflow: 'hidden',
      }}>
        {/* LEFT — image crossfade */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {SLIDES.map((s, i) => (
            <motion.div
              key={i}
              animate={{ opacity: i === active ? 1 : 0 }}
              transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] as [number,number,number,number] }}
              style={{ position: 'absolute', inset: 0, zIndex: i === active ? 1 : 0 }}
            >
              <ParallaxImage src={s.image} alt={s.title} strength={8} />
            </motion.div>
          ))}
        </div>

        {/* RIGHT — dark panel */}
        <div style={{
          background: '#000', color: '#fff',
          display: 'flex', flexDirection: 'column',
          padding: '4rem',
        }}>
          {/* Label */}
          <p style={{
            fontSize: '1.1rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
            marginBottom: '3.2rem',
          }}>
            Infrastructure
          </p>

          {/* Title */}
          <AnimatePresence mode="wait">
            <motion.h3
              key={`t-${active}`}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] as [number,number,number,number] }}
              style={{
                fontSize: 'clamp(3.2rem, 4vw, 5.6rem)', fontWeight: 600,
                lineHeight: 1.05, letterSpacing: '0.01em',
                textTransform: 'uppercase', color: '#fff',
                margin: '0 0 4rem', whiteSpace: 'pre-line',
              }}
            >
              {SLIDES[active].title}
            </motion.h3>
          </AnimatePresence>

          {/* Arrows + counter */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', gap: '2.4rem' }}>
              <button onClick={prev} aria-label="Previous"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: active === 0 ? 'rgba(255,255,255,0.2)' : '#fff', lineHeight: 0 }}>
                <SvgIcon id="long-arrow-left" width={41} height={14} />
              </button>
              <button onClick={next} aria-label="Next"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: active === SLIDES.length - 1 ? 'rgba(255,255,255,0.2)' : '#fff', lineHeight: 0 }}>
                <SvgIcon id="long-arrow-right" width={41} height={14} />
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.4rem', fontWeight: 600, color: '#fff' }}>{active + 1}</span>
              <span style={{ display: 'block', width: 32, height: 1, background: 'rgba(255,255,255,0.25)' }} />
              <span style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.35)' }}>{SLIDES.length}</span>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginTop: 'auto' }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={`d-${active}`}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] as [number,number,number,number], delay: 0.1 }}
                style={{
                  fontSize: 'clamp(1.2rem, 1.2vw, 1.5rem)', lineHeight: 1.65,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {SLIDES[active].description}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </section>
  )
}
