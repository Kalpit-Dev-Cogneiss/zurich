'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SvgIcon from '@/app/components/ui/SvgIcon'

const ITEMS = [
  {
    time: '07:00',
    image: '/images/Work Process_001.jpg',
    text: 'ENJOY THE FIRST RAYS OF DAWN AS THE CITY UNFOLDS BEFORE YOU IN PANORAMIC WINDOWS, FILLING YOUR HOME WITH LIGHT AND SERENITY.',
    // hour hand degrees (360/12 * hour + 360/12/60 * min)
    hourDeg: -150, // 07:00
  },
  {
    time: '08:00',
    image: '/images/Work Process_002.jpg',
    text: 'Feel the ease of movement and harmony as you start your morning with yoga in the open air. Fresh air, soft rays of sunshine, and smooth movements in rhythm. There is no hustle and bustle here — just you and the perfect start to your morning.',
    hourDeg: -120,
  },
  {
    time: '11:00',
    image: '/images/Work Process_003.jpg',
    text: 'FEEL THE ATTENTION FROM THE FIRST STEP IN THE LOBBY, WHERE THE STAFF IS READY TO PROVIDE YOU WITH UNIQUE SERVICE: FROM ORGANIZING TRANSPORTATION AND BOOKING SERVICES TO SOLVING SMALL DAILY TASKS.',
    hourDeg: -30,
  },
  {
    time: '14:00',
    image: '/images/Work Process_004.jpg',
    text: 'CREATE THE PERFECT MOMENT FOR WORK IN A PRIVATE CO-WORKING SPACE. HERE IT IS EASY TO FOCUS ON YOUR TASKS, HOLD A MEETING WITH A CLIENT, OR DISCUSS STRATEGY WITH YOUR TEAM.',
    hourDeg: 60,
  },
  {
    time: '21:00',
    image: '/images/Work Process_005.jpg',
    text: 'End the day in the tea room in the grand lobby, where every gesture becomes part of a ritual: unhurried, mindful, filled with silence.',
    hourDeg: 270,
  },
  {
    time: '21:00',
    image: '/images/Work Process_006.jpg',
    text: 'End the day in the tea room in the grand lobby, where every gesture becomes part of a ritual: unhurried, mindful, filled with silence.',
    hourDeg: 270,
  },
  {
    time: '21:00',
    image: '/images/Work Process_007.jpg',
    text: 'End the day in the tea room in the grand lobby, where every gesture becomes part of a ritual: unhurried, mindful, filled with silence.',
    hourDeg: 270,
  },
]

export default function DailySchedule() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next (right→left), -1 = prev (left→right)
  const item = ITEMS[active]

  const prev = () => {
    setDirection(-1)
    setActive(a => (a - 1 + ITEMS.length) % ITEMS.length)
  }
  const next = () => {
    setDirection(1)
    setActive(a => (a + 1) % ITEMS.length)
  }

  return (
    <section
      id="schedule"
      style={{
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        width: '100%',
        height: '100svh',
        minHeight: 600,
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* ── LEFT — tall image only, no text overlay ── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="sync" custom={direction}>
          <motion.div
            key={`img-${active}`}
            custom={direction}
            initial={{ x: direction === 1 ? '100%' : '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: direction === 1 ? '-100%' : '100%' }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            style={{ position: 'absolute', inset: 0, willChange: 'transform' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.time}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── RIGHT — black panel: circle + time + text bottom-left + arrows ── */}
      <div style={{
        background: '#000',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Large background circle — half visible on right edge */}
        <div style={{
          position: 'absolute',
          right: '-10%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '90%',
          aspectRatio: '1/1',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.08)',
          pointerEvents: 'none',
        }} />

        {/* Time digits — centred */}
        <div style={{ position: 'relative', zIndex: 2, marginRight: '8%' }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={`time-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
              style={{
                fontSize: 'clamp(5rem, 8vw, 11rem)',
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#fff',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {item.time}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Text — bottom-left of right panel */}
        <div style={{
          position: 'absolute',
          bottom: '3.2rem',
          left: '3.2rem',
          right: '7rem', // leave room for arrows
          zIndex: 3,
        }}>
          <AnimatePresence mode="wait">
            <motion.p
              key={`text-${active}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 'clamp(1.1rem, 1.1vw, 1.35rem)',
                lineHeight: 1.6,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
              }}
            >
              {item.text}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ← → arrows — right side, vertically centred */}
        <div style={{
          position: 'absolute',
          right: '3.2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.6rem',
        }}>
          <button
            onClick={prev}
            aria-label="Previous"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', lineHeight: 0, padding: '0.4rem' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.4')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <SvgIcon id="long-arrow-left" width={41} height={14} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', lineHeight: 0, padding: '0.4rem' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.4')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <SvgIcon id="long-arrow-right" width={41} height={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
