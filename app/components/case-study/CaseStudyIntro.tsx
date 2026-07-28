'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface CaseStudyIntroProps {
  title: string
  body?: string
  location?: string
  src: string
  alt?: string
}

const EASE: [number, number, number, number] = [0.7, 0, 0.3, 1]

/**
 * Centered case-study intro block: big uppercase title, a centered
 * description paragraph, a bolder location line, and the image below —
 * everything center-aligned, matching the client's case-study cover layout.
 */
export default function CaseStudyIntro({ title, body, location, src, alt }: CaseStudyIntroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: EASE, delay },
  })

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        margin: '6rem 0',
        padding: '0 8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <motion.h2
        {...reveal(0)}
        style={{
          fontSize: 'clamp(2.8rem, 4vw, 5.2rem)',
          fontWeight: 600,
          letterSpacing: '0.06em',
          color: '#fff',
          margin: 0,
          marginBottom: '2.8rem',
        }}
      >
        {title}
      </motion.h2>

      {body && (
        <motion.p
          {...reveal(0.12)}
          style={{
            fontSize: '1.4rem',
            lineHeight: 1.8,
            letterSpacing: '0.03em',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 720,
            margin: 0,
            marginBottom: '4rem',
          }}
        >
          {body}
        </motion.p>
      )}

      {/* no bottom margin — the image below carries its own whitespace */}
      {location && (
        <motion.p
          {...reveal(0.2)}
          style={{
            fontSize: 'clamp(1.6rem, 1.6vw, 2.2rem)',
            fontWeight: 600,
            letterSpacing: '0.06em',
            color: '#fff',
            margin: 0,
          }}
        >
          {location}
        </motion.p>
      )}

      <motion.div {...reveal(0.28)} style={{ maxWidth: '100%' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt || title}
          style={{ maxWidth: '100%', width: 'auto', height: 'auto', display: 'block', margin: '0 auto' }}
        />
      </motion.div>
    </div>
  )
}
