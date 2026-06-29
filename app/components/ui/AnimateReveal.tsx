'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  style?: React.CSSProperties
}

export default function AnimateReveal({ children, className, delay = 0, y = 50, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, ease: [0.7, 0, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
