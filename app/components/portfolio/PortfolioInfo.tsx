'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface InfoBlock {
  title: string
  subtitle: string
  body: string[]
}

interface PortfolioInfoProps {
  location: string
  projectType: string
  client: string
  title: string
  description: string[]
  /** overrides title/description with a sequence of title/subtitle/body
   * pairs — e.g. a "hook + sub-hook + copy" pattern repeated per idea */
  blocks?: InfoBlock[]
}

export default function PortfolioInfo({
  location,
  projectType,
  client,
  title,
  description,
  blocks,
}: PortfolioInfoProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        color: '#ffffff',
        padding: '8rem 16rem',
      }}
      className="portfolio-info"
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: '8rem',
        }}
        className="portfolio-info-container"
      >
        {/* Left Column - Project Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Location */}
            <div>
              <p
                style={{
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: '#aaaaaa',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em',
                }}
              >
                {location}
              </p>
            </div>

            {/* Project Type */}
            <div>
              <h2
                style={{
                  fontSize: '3.6rem',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: '0.02em',
                  whiteSpace: 'pre-wrap',
                  margin: 0,
                }}
              >
                {projectType}
              </h2>
            </div>
          </div>

          {/* Client - At Bottom */}
          <div style={{ marginTop: 'auto' }}>
            <p
              style={{
                fontSize: '1.6rem',
                fontWeight: 400,
                color: '#aaaaaa',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
              }}
            >
              Client
            </p>
            <p
              style={{
                fontSize: '2.4rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                margin: 0,
              }}
            >
              {client}
            </p>
          </div>
        </motion.div>

        {/* Right Column - Description */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: blocks && blocks.length > 0 ? '4.5rem' : '3rem',
          }}
        >
          {blocks && blocks.length > 0 ? (
            blocks.map((block, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <h3
                  style={{
                    fontSize: 'clamp(2.4rem, 2.6vw, 3.4rem)',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    letterSpacing: '0.02em',
                    color: '#fff',
                    margin: 0,
                  }}
                >
                  {block.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(1.8rem, 2vw, 2.4rem)',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    letterSpacing: '0.02em',
                    color: '#fff',
                    whiteSpace: 'pre-wrap',
                    margin: 0,
                  }}
                >
                  {block.subtitle}
                </p>
                {block.body.map((paragraph, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 400,
                      lineHeight: 1.8,
                      color: '#cccccc',
                      margin: 0,
                      textAlign: 'justify',
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            ))
          ) : (
            <>
              {/* Title */}
              <h3
                style={{
                  fontSize: '3.2rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  margin: 0,
                  marginBottom: '1rem',
                }}
              >
                {title}
              </h3>

              {/* Description Paragraphs */}
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: 400,
                    lineHeight: 1.8,
                    color: '#cccccc',
                    margin: 0,
                    textAlign: 'justify',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
