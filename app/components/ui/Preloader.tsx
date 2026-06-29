'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SvgIcon from './SvgIcon'

export default function Preloader() {
  const [done, setDone] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress 0→100 over ~1.8s
    const start = performance.now()
    const duration = 1800

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setProgress(p)
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(() => setDone(true), 400)
      }
    }
    requestAnimationFrame(tick)
  }, [])

  // SVG rect perimeter for the card shape (240×360)
  const W = 240, H = 360
  const perimeter = 2 * (W + H) // 1200
  const offset = perimeter * (1 - progress)

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.7, 0, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'relative', width: W, height: H }}>
            {/* Background rect */}
            <svg
              width={W}
              height={H}
              viewBox={`0 0 ${W} ${H}`}
              fill="none"
              style={{ position: 'absolute', inset: 0 }}
            >
              <path
                d={`M${W - 1} 1H1V${H - 1}H${W - 1}V1Z`}
                stroke="white"
                strokeOpacity="0.2"
              />
            </svg>

            {/* Animated progress border */}
            <svg
              width={W}
              height={H}
              viewBox={`0 0 ${W} ${H}`}
              fill="none"
              style={{ position: 'absolute', inset: 0 }}
            >
              <path
                d={`M${W - 1} 1H1V${H - 1}H${W - 1}V1Z`}
                stroke="white"
                strokeDasharray={perimeter}
                strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 0.016s linear' }}
              />
            </svg>

            {/* Logo centered */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SvgIcon id="logo" width={120} height={16} className="text-white" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
