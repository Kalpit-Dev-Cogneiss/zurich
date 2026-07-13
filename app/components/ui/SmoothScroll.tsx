'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Lerp-based (not duration-based) wheel smoothing: every wheel/trackpad
      // tick nudges the target and the visual position exponentially chases
      // it every frame. A fixed `duration` tween instead would restart a full
      // 1.4s ease on every wheel event — fine for trackpads (many tiny, rapid
      // deltas) but with a mouse wheel's few large, spaced-out notches the
      // animated position falls badly behind the target between notches.
      // ScrollSnap's proximity check reads that lagging position, so it was
      // guessing the wrong section and fighting the in-flight scroll,
      // producing the stuck / bounce-then-continue glitch on mouse wheels.
      lerp: 0.1,
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
