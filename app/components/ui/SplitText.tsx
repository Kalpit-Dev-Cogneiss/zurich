'use client'
import { useRef, useEffect, useState } from 'react'

interface Props {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  mode?: 'chars' | 'lines'
  className?: string
  style?: React.CSSProperties
  delay?: number
}

/**
 * Splits text into chars or word-wrapped lines, then animates each in with
 * translateY(110%) → 0 using CSS transitions staggered via --char-index /
 * --line-index custom properties — exactly how zorge9.estate does it.
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  mode = 'chars',
  className = '',
  style,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  if (mode === 'chars') {
    const chars = text.split('')
    const total = chars.length
    return (
      // @ts-expect-error dynamic tag
      <Tag ref={ref} className={className} style={{ ...style, display: 'block' }}>
        {chars.map((ch, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                transform: visible ? 'translateY(0)' : 'translateY(110%)',
                opacity: visible ? 1 : 0,
                transition: `transform 1.6s cubic-bezier(.7,0,.3,1) calc(${i} * 10ms), opacity 1.6s cubic-bezier(.7,0,.3,1) calc(${i} * 10ms)`,
                '--char-total': total,
              } as React.CSSProperties}
            >
              {ch === ' ' ? ' ' : ch}
            </span>
          </span>
        ))}
      </Tag>
    )
  }

  // mode === 'lines': split on words, wrap each in overflow:hidden container
  const words = text.split(' ')
  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={{ ...style, display: 'block' }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'top',
            marginRight: '0.28em',
            marginBottom: '-0.16em',
            paddingBottom: '0.16em',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              transform: visible ? 'translateY(0)' : 'translateY(110%)',
              opacity: visible ? 1 : 0,
              transition: `transform 1.6s cubic-bezier(.7,0,.3,1) calc(${i} * 40ms), opacity 1.2s cubic-bezier(.7,0,.3,1) calc(${i} * 40ms)`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}
