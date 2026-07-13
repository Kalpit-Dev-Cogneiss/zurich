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
    let removeSnaps: (() => void)[] = []
    let teardown: (() => void) | undefined

    const build = (lenis: Lenis) => {
      snap = new Snap(lenis, {
        type: 'proximity',
        duration: 1,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        distanceThreshold: '60%',
        // Wait for scrolling to fully stop before snapping.
        debounce: 1000,
      })

      // Register raw scroll values, NOT snap.addElement(): SnapElement's
      // measuring step (removeParentSticky) rewrites our sticky StackReveal
      // wrappers to position:static and — because a static wrapper drops out
      // of the offsetParent chain — the restore walk never finds them again,
      // permanently breaking the stacked-section reveal.
      //
      // A section's snap point is its wrapper's *natural* top. Cumulative
      // sibling heights give that regardless of how many wrappers are
      // currently pinned (sticky elements keep their in-flow size).
      const recompute = () => {
        if (!snap) return
        const main = document.querySelector('main')
        if (!main) return
        for (const remove of removeSnaps) remove()
        removeSnaps = []
        const tops = new Map<Element, number>()
        let acc = main.getBoundingClientRect().top + window.scrollY
        for (const child of Array.from(main.children)) {
          tops.set(child, acc)
          acc += (child as HTMLElement).offsetHeight
        }
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id)
          if (!el) continue
          // Walk up to the direct <main> child that contains this section.
          let wrapper: Element = el
          while (wrapper.parentElement && wrapper.parentElement !== main) {
            wrapper = wrapper.parentElement
          }
          const top = tops.get(wrapper)
          if (top !== undefined) removeSnaps.push(snap.add(Math.round(top)))
        }
      }

      recompute()
      // Recompute snap positions once the page has fully settled (images,
      // fonts, etc. shift layout after mount).
      window.addEventListener('load', recompute)
      window.addEventListener('resize', recompute)
      const t1 = setTimeout(recompute, 600)
      const t2 = setTimeout(recompute, 1500)
      teardown = () => {
        window.removeEventListener('load', recompute)
        window.removeEventListener('resize', recompute)
        clearTimeout(t1)
        clearTimeout(t2)
      }
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
      teardown?.()
      snap?.destroy()
    }
  }, [])

  return null
}
