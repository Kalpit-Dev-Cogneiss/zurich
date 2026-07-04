'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface PortfolioHeroProps {
  title: string
  imageSrc: string
  imageAlt: string
  subtitle?: string
}

export default function PortfolioHero({
  imageSrc,
  imageAlt,
}: PortfolioHeroProps) {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.1])


  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: 600,
        overflow: 'hidden',
      }}
    >
      {/* Centered Image Container */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4rem 2rem',
          zIndex: 1,
        }}
      >
        <motion.div
          style={{
            scale: imgScale,
            position: 'relative',
            width: '100%',
            maxWidth: '1400px',
            height: '80vh',
            minHeight: '500px',
            maxHeight: '800px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '4px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
          />
        </motion.div>
      </div>

    </section>
  )
}
