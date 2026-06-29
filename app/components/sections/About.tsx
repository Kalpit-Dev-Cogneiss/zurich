'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SvgIcon from '@/app/components/ui/SvgIcon'

export default function About() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: 600,
        overflow: 'hidden',
        background: '#000',
        color: '#fff',
      }}
    >
      {/* ── Vimeo video background ── */}
      <div style={{
        position: 'absolute', inset: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}>
        <iframe
          src="https://player.vimeo.com/video/1185877284?loop=1&muted=1&autoplay=1&autopause=0&background=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            position: 'absolute',
            // oversized to fill any aspect ratio — centre it
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'calc(100% + 200px)',
            height: 'calc(100% + 200px)',
            minWidth: '177.78vh',  /* 16/9 ratio */
            minHeight: '56.25vw',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
        {/* dark overlay so content stays readable */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.45)',
        }} />
      </div>

      {/* ── BOTTOM ROW: title left + cards right ── */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        zIndex: 2,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '0 4rem 4rem',
        gap: '4rem',
      }}>

        {/* LEFT — big heading */}
        <div style={{ flex: '0 0 auto', maxWidth: '42%' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
            style={{
              fontSize: 'clamp(3.6rem, 5.5vw, 7.2rem)',
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              color: '#fff',
              margin: 0,
            }}
          >
            Life on Your<br />Own Terms
          </motion.h2>
        </div>

        {/* RIGHT — two cards */}
        <div style={{
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'stretch',
          gap: 0,
          height: 220,
        }}>

          {/* Card 1 — dark, About the Project / play */}
          <motion.button
            onClick={() => setVideoOpen(true)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
            style={{
              width: 200,
              background: 'rgba(10,10,10,0.85)',
              border: 'none',
              cursor: 'pointer',
              padding: '2.4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              color: '#fff',
              backdropFilter: 'blur(6px)',
            }}
          >
            <span style={{
              fontSize: '1.0rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              textAlign: 'left',
              lineHeight: 1.3,
            }}>
              About the Project
            </span>
            {/* Play icon centered */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <SvgIcon id="play-lg" width={12} height={26} style={{ color: '#fff' }} />
            </div>
          </motion.button>

          {/* Card 2 — white, Installment / Special Offers / Watch */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.18 }}
            style={{
              width: 200,
              background: '#fff',
              color: '#000',
              padding: '2.4rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textDecoration: 'none',
            }}
          >
            {/* top label */}
            <p style={{
              fontSize: '1.0rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(0,0,0,0.5)',
              lineHeight: 1.4,
              margin: 0,
            }}>
              Installment<br />and Mortgage
            </p>

            {/* center heading */}
            <p style={{
              fontSize: 'clamp(1.8rem, 2.2vw, 2.8rem)',
              fontWeight: 600,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              lineHeight: 1.1,
              margin: 0,
              textAlign: 'center',
            }}>
              Special<br />Offers
            </p>

            {/* bottom CTA */}
            <p style={{
              fontSize: '1.0rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#b5845f',
              margin: 0,
              textAlign: 'center',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}>
              Watch
            </p>
          </motion.a>
        </div>
      </div>

      {/* ── Video modal ── */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 400,
              background: 'rgba(0,0,0,0.95)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ width: '100%', maxWidth: 1060, position: 'relative' }}
            >
              <button
                onClick={() => setVideoOpen(false)}
                style={{ position: 'absolute', top: -48, right: 0, color: '#fff', cursor: 'pointer', background: 'none', border: 'none' }}
              >
                <SvgIcon id="close" width={24} height={24} />
              </button>
              <div style={{ width: '100%', aspectRatio: '16/9' }}>
                <iframe
                  src="https://player.vimeo.com/video/1185877284?autoplay=1"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
