'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import SvgIcon from '@/app/components/ui/SvgIcon'

// Remote image URLs from reference site
const BG_NIGHT = '/herobanner-image.jpg'
const DECOR_MODEL = '/images/Herobanner Model.png'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.08])

  useEffect(() => { setMounted(true) }, [])

  return (
    <section
      ref={ref}
      id="top"
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: 600,
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* ── LEFT solid black strip ── */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: '33%',
        background: '#000',
        zIndex: 2,
      }} />

      {/* ── RIGHT — night building photo from reference ── */}
      <div style={{
        position: 'absolute',
        left: '33%',
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 1,
      }}>
        <motion.div style={{ scale: imgScale, position: 'absolute', inset: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BG_NIGHT}
            alt="Zurich Graphics real estate branding"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'left center',
            }}
          />
        </motion.div>
      </div>

      {/* ── MODEL — anchored bottom, straddles the 33% boundary ── */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 'calc(33% - 14vw)',
        width: 'clamp(200px, 28vw, 460px)',
        zIndex: 5,
        pointerEvents: 'none',
      }}>
        <motion.div style={{ scale: imgScale, transformOrigin: 'bottom center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
            src={DECOR_MODEL}
            alt=""
            style={{ width: '100%', height: 'auto', display: 'block' }}
          /> */}
        </motion.div>
      </div>

      {/* ── TOP-LEFT headline — starts at same top as header ── */}
      {mounted && (
        <div style={{
          position: 'absolute',
          top: '2.4rem',
          left: '4rem',
          zIndex: 6,
          maxWidth: 'calc(33% - 4rem)',
        }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1], delay: 0.3 }}
            style={{
              color: '#fff',
              fontSize: '3.6rem',
              fontWeight: 600,
              lineHeight: '38px',
              letterSpacing: '0.02em',
              marginBottom: '2.8rem',
              whiteSpace: 'pre-line',
            }}
          >
            India&apos;s premier agency for powerful real estate brands
          </motion.p>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1], delay: 0.6 }}
            aria-label="Scroll down"
            style={{ display: 'inline-block', lineHeight: 0, color: '#fff' }}
          >
            <SvgIcon id="long-arrow-down" width={14} height={41} style={{ color: '#fff' }} />
          </motion.a>
        </div>
      )}

      {/* ── GIANT BRAND NAME at bottom ── */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 6,
          y: logoY,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {mounted && (
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1.3, ease: [0.7, 0, 0.3, 1], delay: 0.1 }}
          >
            <p style={{
              fontSize: 'clamp(8rem, 18vw, 21rem)',
              fontWeight: 600,
              fontFamily: 'Gilroy, Helvetica, Arial, sans-serif',
              letterSpacing: '0.4em',
              color: '#ffffff',
              whiteSpace: 'nowrap',
              lineHeight: 0.82,
              paddingLeft: '2.4rem',
              margin: 0,
            }}>
              Zurich
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
