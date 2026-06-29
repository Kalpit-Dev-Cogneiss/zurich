'use client'
import { useRef, useEffect, useState } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

/**
 * Wipes section into view from bottom using clip-path, exactly matching
 * zorge9.estate's polygon(0 100svh, 100% 100svh, 100% 100%, 0 100%) → inset(0)
 */
export default function ClipReveal({ children, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: visible
          ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          : 'polygon(0 100svh, 100% 100svh, 100% 100%, 0 100%)',
        transition: 'clip-path 1.2s cubic-bezier(.7,0,.3,1)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
