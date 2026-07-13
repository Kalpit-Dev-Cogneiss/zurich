'use client'

interface MarqueeProps {
  items: string[]
  /** seconds for one full loop */
  duration?: number
  reverse?: boolean
  style?: React.CSSProperties
  /** style for each word */
  itemStyle?: React.CSSProperties
}

/**
 * Infinite horizontal text marquee. Content is rendered twice and shifted
 * -50% in a loop, so the band never shows a seam.
 */
export default function Marquee({ items, duration = 28, reverse = false, style, itemStyle }: MarqueeProps) {
  const row = items.map((item, i) => (
    <span
      key={i}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4rem',
        paddingRight: '4rem',
        fontSize: 'clamp(3.2rem, 6vw, 8rem)',
        fontWeight: 600,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        ...itemStyle,
      }}
    >
      {item}
      <span aria-hidden="true" style={{
        width: '1.2rem', height: '1.2rem', borderRadius: '50%',
        background: 'var(--c-brown)', display: 'inline-block', flexShrink: 0,
      }} />
    </span>
  ))

  return (
    <div style={{ overflow: 'hidden', width: '100%', ...style }} aria-hidden="true">
      <div
        className="marquee-track"
        style={{
          display: 'inline-flex',
          animation: `marquee-scroll ${duration}s linear infinite${reverse ? ' reverse' : ''}`,
          willChange: 'transform',
        }}
      >
        <div style={{ display: 'inline-flex' }}>{row}</div>
        <div style={{ display: 'inline-flex' }}>{row}</div>
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
