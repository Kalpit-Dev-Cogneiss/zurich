'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface PortfolioInfoProps {
  location?: string
  projectType?: string
  client?: string
  title?: string
  description?: string[]
}

export default function PortfolioInfo({
  location = '@mumbai',
  projectType = 'Luxurious\n3BHK apartment',
  client = 'Satyam Group',
  title = 'Satyam Surya Manhattan',
  description = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.',
    'St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset\'s Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.',
  ],
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
            gap: '3rem',
          }}
        >
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
        </motion.div>
      </div>
    </section>
  )
}
