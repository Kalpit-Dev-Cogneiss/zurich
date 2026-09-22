'use client'

import { useEffect, useRef } from 'react'

export default function ReadingProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrameId: number

    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0 && barRef.current) {
        const currentScroll = window.scrollY
        const progress = Math.min(1, Math.max(0, currentScroll / totalHeight))
        barRef.current.style.transform = `scaleX(${progress})`
      }
      animationFrameId = requestAnimationFrame(updateProgress)
    }

    animationFrameId = requestAnimationFrame(updateProgress)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 9999,
        pointerEvents: 'none',
        background: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <div
        ref={barRef}
        style={{
          height: '100%',
          width: '100%',
          transformOrigin: 'left center',
          transform: 'scaleX(0)',
          background: 'linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.3)',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
