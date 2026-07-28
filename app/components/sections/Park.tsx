'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimateReveal from '@/app/components/ui/AnimateReveal'
import SplitText from '@/app/components/ui/SplitText'
import ClipReveal from '@/app/components/ui/ClipReveal'

export default function Park() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])

  return (
    <ClipReveal>
      <section ref={ref} style={{ background: '#000', color: '#fff', overflow: 'hidden' }}>

        {/* Parallax full-bleed image */}
        <div style={{ position: 'relative', width: '100%', height: '90vh', overflow: 'hidden' }}>
          <motion.div style={{ y: imgY, position: 'absolute', inset: '-12% 0' }}>
            <Image
              src="/assets/images/infrastructure/1.webp"
              alt="Private park"
              fill style={{ objectFit: 'cover' }}
            />
          </motion.div>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 55%)',
          }} />
          <div style={{
            position: 'absolute', bottom: '6.4rem',
            left: '5.6rem', right: '5.6rem',
          }}>
            <AnimateReveal>
              <p style={{
                fontSize: '1.1rem', letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: '2rem',
              }}>
                Private 2-acre park
              </p>
            </AnimateReveal>
            <SplitText
              text="Private 2-acre park"
              as="h2"
              mode="chars"
              style={{
                fontSize: 'clamp(4rem, 8vw, 11.2rem)',
                lineHeight: 0.95, letterSpacing: '0.02em',
              }}
            />
          </div>
        </div>

        {/* Text block */}
        <div style={{
          padding: '10rem 5.6rem',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '8rem',
        }} className="park-grid">
          <AnimateReveal>
            <p style={{
              fontSize: 'clamp(2rem, 3vw, 3.6rem)',
              lineHeight: 1.35, color: 'rgba(255,255,255,0.9)',
            }}>
              Fresh air and birdsong will lead you to your own park.
            </p>
          </AnimateReveal>
          <AnimateReveal delay={0.15}>
            <p style={{
              fontSize: '1.7rem', lineHeight: 1.75,
              color: 'rgba(255,255,255,0.5)',
            }}>
              Here, lush maple trees rustle in the wind and birch branches sway gently. The nature
              of free time is embodied in the freedom of your plans. A cozy place to relax,
              surrounded by premium greenery brought from the best German nurseries.
            </p>
          </AnimateReveal>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .park-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </ClipReveal>
  )
}
