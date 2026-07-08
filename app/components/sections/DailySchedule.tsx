'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import SvgIcon from '@/app/components/ui/SvgIcon'

const ITEMS = [
  {
    time: 'DISCOVER',
    image: '/daily-schedule/w1.jpg',
    text: 'ENJOY THE FIRST RAYS OF DAWN AS THE CITY UNFOLDS BEFORE YOU IN PANORAMIC WINDOWS, FILLING YOUR HOME WITH LIGHT AND SERENITY.',
    // hour hand degrees (360/12 * hour + 360/12/60 * min)
    hourDeg: -50, // 07:00
  },
  {
    time: 'DEFINE',
    image: '/daily-schedule/w2.jpg',
    text: 'Feel the ease of movement and harmony as you start your morning with yoga in the open air. Fresh air, soft rays of sunshine, and smooth movements in rhythm. There is no hustle and bustle here — just you and the perfect start to your morning.',
    hourDeg: -120,
  },
  {
    time: 'RESEARCH',
    image: '/daily-schedule/w3.jpg',
    text: 'FEEL THE ATTENTION FROM THE FIRST STEP IN THE LOBBY, WHERE THE STAFF IS READY TO PROVIDE YOU WITH UNIQUE SERVICE: FROM ORGANIZING TRANSPORTATION AND BOOKING SERVICES TO SOLVING SMALL DAILY TASKS.',
    hourDeg: -30,
  },
  {
    time: 'CREATE',
    image: '/daily-schedule/w4.jpg',
    text: 'CREATE THE PERFECT MOMENT FOR WORK IN A PRIVATE CO-WORKING SPACE. HERE IT IS EASY TO FOCUS ON YOUR TASKS, HOLD A MEETING WITH A CLIENT, OR DISCUSS STRATEGY WITH YOUR TEAM.',
    hourDeg: 60,
  },
  {
    time: 'REFINE',
    image: '/daily-schedule/w5.jpg',
    text: 'End the day in the tea room in the grand lobby, where every gesture becomes part of a ritual: unhurried, mindful, filled with silence.',
    hourDeg: 270,
  },
  {
    time: 'DELIVER',
    image: '/daily-schedule/w6.jpg',
    text: 'End the day in the tea room in the grand lobby, where every gesture becomes part of a ritual: unhurried, mindful, filled with silence.',
    hourDeg: 270,
  },
  {
    time: 'SUPPORT',
    image: '/daily-schedule/w7.jpg',
    text: 'End the day in the tea room in the grand lobby, where every gesture becomes part of a ritual: unhurried, mindful, filled with silence.',
    hourDeg: 270,
  },
]

export default function DailySchedule() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = next (right→left), -1 = prev (left→right)
  const item = ITEMS[active]

  const leftRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: leftRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

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
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        width: '100%',
        height: '100svh',
        minHeight: 600,
        background: '#000',
        overflow: 'hidden',
      }}
    >
      {/* Clock positioned at the center divider */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vh',
        height: '100vh',
        zIndex: 10,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: '50%',
      }}>
        {/* Clock circle */}
        <div style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.15)',
        }} />

        {/* Fixed vertical line (always pointing up) - starts from center, extends to top */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '50%',
          height: '1px',
          background: '#fff',
          transformOrigin: 'left center',
          transform: 'translateY(-50%) rotate(-90deg)',
        }} />

        {/* Rotating line (changes with slider) - starts from center, rotates */}
        <motion.div
          key={`hand-${active}`}
          initial={{ rotate: item.hourDeg - 30 }}
          animate={{ rotate: item.hourDeg }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '50%',
            height: '1px',
            background: '#fff',
            transformOrigin: 'left center',
            transform: 'translateY(-50%)',
          }}
        />
      </div>

      {/* ── LEFT — tall image only, no text overlay ── */}
      <div ref={leftRef} style={{ position: 'relative', overflow: 'hidden' }}>
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
            <motion.div style={{ y: imgY, position: 'absolute', inset: '-14% 0' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.image}
                alt={item.time}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── RIGHT — black panel: time + text bottom-left + arrows ── */}
      <div style={{
        background: '#000',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
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
