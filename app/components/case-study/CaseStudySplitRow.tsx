'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SplitImage {
  src: string
  alt?: string
}

interface CaseStudySplitRowProps {
  /** the large image, on the left */
  main: SplitImage
  /** two images stacked in a column on the right */
  stacked: [SplitImage, SplitImage]
  /** optional image layered on top of the whole row, centered, shown at its
   * own natural size (not stretched) — e.g. a standee mockup floating over
   * the product shots beneath it */
  overlay?: SplitImage
  /** gap between main/stacked and between the two stacked images, in rem (default 0.6). Set 0 for flush images. */
  gap?: number
  /** how the two stacked images fill their box: 'cover' (default) crops to fill;
   * 'contain' shows the whole image uncropped, letterboxed if its aspect ratio doesn't match;
   * 'fill' stretches the image to fill the box, ignoring its aspect ratio;
   * 'none' skips object-fit entirely — the image just scales to the column width at its own aspect ratio */
  stackedFit?: 'cover' | 'contain' | 'fill' | 'none'
}

const EASE: [number, number, number, number] = [0.7, 0, 0.3, 1]

/**
 * Product-shot spread: one large image on the left, paired with two images
 * stacked on the right (e.g. a bag beside a cap and a t-shirt), matching the
 * client's case-study mockup layout.
 */
export default function CaseStudySplitRow({ main, stacked, overlay, gap = 0.6, stackedFit = 'cover' }: CaseStudySplitRowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        gap: `${gap}rem`,
        padding: '0rem 8rem',
        marginBottom: '6rem',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        style={{ flex: '3 1 0', overflow: 'hidden' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={main.src}
          alt={main.alt || 'Case study image'}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </motion.div>

      <div style={{ flex: '2 1 0', display: 'flex', flexDirection: 'column', gap: `${gap}rem` }}>
        {stacked.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 + i * 0.15 }}
            style={{ flex: '1 1 0', overflow: 'hidden', background: stackedFit === 'contain' ? '#000' : undefined }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt || 'Case study image'}
              style={
                stackedFit === 'none'
                  ? { width: '100%', height: 'auto', display: 'block' }
                  : { width: '100%', height: '100%', objectFit: stackedFit, display: 'block' }
              }
            />
          </motion.div>
        ))}
      </div>

      {overlay && (
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: EASE, delay: 0.35 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '8rem',
            right: '8rem',
            transform: 'translateY(-50%)',
            maxHeight: '85%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
            filter: 'drop-shadow(0 1.5rem 3rem rgba(0,0,0,0.45))',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={overlay.src}
            alt={overlay.alt || 'Case study image'}
            style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', display: 'block' }}
          />
        </motion.div>
      )}
    </div>
  )
}
