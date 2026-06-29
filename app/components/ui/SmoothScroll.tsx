'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    // Expose globally so other components can hook into scroll events
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).__lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).__lenis
    }
  }, [])

  return null
}
