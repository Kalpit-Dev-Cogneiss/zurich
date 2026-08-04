'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface ContentBlock {
  type: 'lead' | 'paragraph' | 'steps' | 'list'
  items: string[]
}

interface CaseStudyStorySectionProps {
  heading: string
  blocks: ContentBlock[]
}

const EASE: [number, number, number, number] = [0.7, 0, 0.3, 1]

/**
 * Text-only narrative block dropped between case-study images (e.g. "Our
 * Solution", "Outcome") — a small section label followed by an ordered mix
 * of bold statement lines, body paragraphs, a "journey" progression list,
 * or a bullet list, matching the client's case-study copy structure.
 */
export default function CaseStudyStorySection({ heading, blocks }: CaseStudyStorySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, ease: EASE, delay },
  })

  let delay = 0
  const nextDelay = () => {
    delay += 0.1
    return delay
  }

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
      <div style={{ maxWidth: 780, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.4rem' }}>
        {heading && (
          <motion.span
            {...reveal(0)}
            style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#fff',
            }}
          >
            {heading}
          </motion.span>
        )}

        {blocks.map((block, i) => {
          if (block.type === 'lead') {
            return (
              <motion.div key={i} {...reveal(nextDelay())} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {block.items.map((line, j) => (
                  <p key={j} style={{
                    fontSize: 'clamp(2.2rem, 2.8vw, 3.4rem)',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: '0.01em',
                    color: '#fff',
                    margin: 0,
                  }}>
                    {line}
                  </p>
                ))}
              </motion.div>
            )
          }

          if (block.type === 'paragraph') {
            return (
              <motion.div key={i} {...reveal(nextDelay())} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {block.items.map((p, j) => (
                  <p key={j} style={{
                    fontSize: '1.5rem',
                    lineHeight: 1.8,
                    letterSpacing: '0.02em',
                    color: 'rgba(255,255,255,0.65)',
                    margin: 0,
                  }}>
                    {p}
                  </p>
                ))}
              </motion.div>
            )
          }

          if (block.type === 'steps') {
            return (
              <motion.div key={i} {...reveal(nextDelay())} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {block.items.map((step, j) => (
                  <p key={j} style={{
                    fontSize: 'clamp(1.5rem, 1.8vw, 1.9rem)',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: j === block.items.length - 1 ? '#fff' : 'rgba(255,255,255,0.45)',
                    margin: 0,
                  }}>
                    {j > 0 && <span style={{ color: '#fff', marginRight: '0.8rem' }}>&rarr;</span>}
                    {step}
                  </p>
                ))}
              </motion.div>
            )
          }

          // list
          return (
            <motion.ul
              key={i}
              {...reveal(nextDelay())}
              style={{
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.4rem 3rem',
                margin: 0,
                padding: 0,
                width: '100%',
                textAlign: 'left',
              }}
            >
              {block.items.map((item, j) => (
                <li key={j} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  fontSize: '1.5rem',
                  lineHeight: 1.6,
                  letterSpacing: '0.02em',
                  color: 'rgba(255,255,255,0.8)',
                }}>
                  <span style={{ color: '#fff', flexShrink: 0 }}>&mdash;</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          )
        })}
      </div>
    </div>
  )
}
