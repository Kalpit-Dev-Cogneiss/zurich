'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface RowImage {
  src: string
  alt?: string
}

interface PortfolioImageRowProps {
  images: RowImage[]
}

export default function PortfolioImageRow({
  images,
}: PortfolioImageRowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${images.length}, 1fr)`,
        width: '100%',
        padding: '0rem 8rem',
      }}
      className="portfolio-image-row"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: [0.7, 0, 0.3, 1],
            delay: index * 0.15,
          }}
          style={{
            width: '100%',
            overflow: 'hidden',
            alignContent: 'center',
         }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt || `Portfolio image ${index + 1}`}
            style={{
              width: '100%',
              display: 'block',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
