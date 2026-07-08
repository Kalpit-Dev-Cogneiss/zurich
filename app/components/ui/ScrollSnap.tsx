'use client'
import { useEffect } from 'react'
import type Lenis from 'lenis'
import Snap from 'lenis/snap'

/**
 * Section scroll-snapping built on Lenis' official Snap addon.
 *
 * Every section's top is a snap point (align: start). With `type: 'proximity'`
 * each snap point only acts as a magnet within `distanceThreshold` of its top,
 * so:
 *  - Full-screen sections settle neatly into view when you stop scrolling.
 *  - Tall / pinned sections snap into alignment as you arrive, but their middle
 *    stays freely scrollable (the nearest snap point is out of range there).
 */

// Ordered ids of the home-page sections (see app/page.tsx).
const SECTION_IDS = [
  'top',
  'about',
  'location',
  'panorama',
  'style',
  'gallery',
  'schedule',
  'advantages',
  'fitness',
  'services',
  'apartments',
  'india-map',
  'penthouses',
]

export default function ScrollSnap() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    // Skip pure touch devices; desktops (mouse/trackpad) get snapping.
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return

    let snap: Snap | undefined
    let poll: ReturnType<typeof setInterval> | undefined
    let disposed = false

    const build = (lenis: Lenis) => {
      snap = new Snap(lenis, {
        type: 'proximity',
        duration: 0.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        distanceThreshold: '60%',
        // Fire soon after scrolling stops (default is 500ms).
        debounce: 80,
      })

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el) snap.addElement(el, { align: ['start'] })
      }

      // Recompute snap positions once the page has fully settled (images,
      // fonts, etc. shift layout after mount).
      const recompute = () => snap?.resize()
      window.addEventListener('load', recompute)
      setTimeout(recompute, 600)
      setTimeout(recompute, 1500)
    }

    const tryInit = () => {
      if (disposed || snap) return
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenis = (window as any).__lenis as Lenis | undefined
      if (lenis) {
        build(lenis)
        if (poll) clearInterval(poll)
      }
    }

    tryInit()
    if (!snap) poll = setInterval(tryInit, 200)

    return () => {
      disposed = true
      if (poll) clearInterval(poll)
      snap?.destroy()
    }
  }, [])

  return null
}
