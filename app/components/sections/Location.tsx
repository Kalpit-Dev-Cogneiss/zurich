'use client'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { motion } from 'framer-motion'
import TurnJSBook from '@/app/components/ui/TurnJSBook'


const HERO_IMAGE = 'https://zorge9.estate/assets/images/media/landing/3.location/hero@xxxl.webp'

// Gallery images for book animation (pairs of left/right pages)
const BOOK_PAGES = [
  { left: '/images/Gallery_001.jpg', right: '/images/Gallery_002.jpg' },
  { left: '/images/Gallery_003.jpg', right: '/images/Gallery_004.jpg' },
  { left: '/images/Gallery_005.jpg', right: '/images/Gallery_006.jpg' },
]

const CARDS = [
  { label: 'Residential Projects',    image: '/images/Residential Projects.jpg' },
  { label: 'Commercial Projects',     image: '/images/Commercial Projects.jpg' },
  { label: 'Duplex - Villa Projects', image: '/images/Duplex - Villa Projects.jpg' },
  { label: 'Mall Projects',           image: '/images/Mall Projects.jpg' },
  { label: 'Farmhouse Projects',      image: '/images/Farmhouse Projects.jpg' },
  { label: 'Open Plot Projects',      image: '/images/Open Plot Projects.jpg' },
  { label: 'Industrial Projects',     image: '/images/Industrial Projects.jpg' },
  { label: 'Corporate Projects',      image: '/images/Corporate Projects.jpg' },
]

export default function Location() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free-snap',
    slides: {
      perView: 2,
      spacing: 10,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1.15, spacing: 10 },
      },
    },
  })

  return (
    <section id="location" style={{ background: '#fff', color: '#000', overflow: 'hidden' }}>

      {/* ── Hero image — offset right, ~75% width ── */}

      {/* ── Book Animation ── */}
      <TurnJSBook />

      {/* ── Label + body text ── */}
      <div style={{ padding: '3.2rem 4rem 0', marginLeft: '25%' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
          style={{
            fontSize: '1.1rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.45)',
            marginBottom: '2.4rem',
          }}
        >
          Privilege of Location
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 3vw, 3.6rem)',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            maxWidth: 860,
          }}
        >
          City skyscrapers and iconic landmarks are at your feet. The capital unfolds before you like a grand bouquet of endless opportunities.
        </motion.p>
      </div>

      {/* ── LOCATION heading right-aligned + divider ── */}
      <div style={{ padding: '6rem 4rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2rem' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            style={{
              fontSize: 'clamp(5rem, 8vw, 11rem)',
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: '0.01em',
              textTransform: 'uppercase',
            }}
          >
            Location
          </motion.p>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.15)', margin: 0 }} />
      </div>

      {/* ── Keen slider — 2 cards visible, drag to navigate ── */}
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{ marginTop: '0.8rem', cursor: 'grab' }}
      >
        {CARDS.map((card) => (
          <div
            key={card.label}
            className="keen-slider__slide"
            style={{ overflow: 'hidden' }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.label}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.9s cubic-bezier(.7,0,.3,1)',
                }}
                className="loc-slide-img"
              />
              {/* dark gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(0deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.05) 50%)',
              }} />
              {/* label */}
              <div style={{
                position: 'absolute',
                bottom: '3.2rem', left: '3.2rem',
                color: '#fff',
              }}>
                <p style={{
                  fontSize: 'clamp(2rem, 3vw, 3.6rem)',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  margin: 0,
                }}>
                  {card.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .loc-slide-img { user-select: none; -webkit-user-drag: none; }
        .keen-slider__slide:hover .loc-slide-img { transform: scale(1.04) !important; }
        .keen-slider { cursor: grab; }
        .keen-slider:active { cursor: grabbing; }
      `}</style>
    </section>
  )
}
