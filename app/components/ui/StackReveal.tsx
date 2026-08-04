'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'

interface StackRevealProps {
  children: ReactNode
  zIndex: number
}

/**
 * Sticky-stacks a section so the next one slides up over it as the page
 * scrolls, instead of both simply scrolling past each other.
 *
 * All StackReveal wrappers are siblings inside <main>, so each sticky
 * section stays pinned until the *end of main* — meaning it holds still
 * while every later sibling (opaque, higher z-index) slides up over it.
 * No spacer element is needed: adding extra height below the sticky child
 * would only insert an empty (black) gap between sections and make the
 * section un-stick before the next one arrives.
 *
 * Sections taller than the viewport get a negative `top` so they first
 * scroll through normally, then pin with their bottom at the viewport
 * bottom — and still get covered by the next section.
 */
export default function StackReveal({ children, zIndex }: StackRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(0)
  const [covered, setCovered] = useState(false)
  // Below this width, sections no longer have a reliable one-viewport
  // height (mobile layouts stack content and grow taller than 100svh), so
  // the sticky-pin-and-cover trick reliably produces sections visually
  // overlapping each other mid-transition. Mobile gets plain document flow
  // instead — each section simply scrolls past the last one.
  const [stackingEnabled, setStackingEnabled] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const update = () => setStackingEnabled(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !stackingEnabled) return
    const check = () => {
      setTop(Math.min(0, window.innerHeight - el.offsetHeight))
    }
    check()
    const ro = new ResizeObserver(check)
    ro.observe(el)
    window.addEventListener('resize', check)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', check)
    }
  }, [stackingEnabled])

  // A pinned section stays composited for the rest of the page even though
  // later sections fully cover it, so the browser drags every stacked layer
  // through each frame. Once the next sibling's top crosses the viewport top
  // (rootMargin shrinks the root to that top edge), this section is fully
  // covered — hide it so it costs nothing until the user scrolls back up.
  useEffect(() => {
    const el = ref.current
    const next = el?.nextElementSibling
    if (!next || !stackingEnabled) return
    const io = new IntersectionObserver(
      ([entry]) => setCovered(entry.isIntersecting),
      { rootMargin: '0px 0px -100% 0px' }
    )
    io.observe(next)
    return () => io.disconnect()
  }, [stackingEnabled])

  if (!stackingEnabled) {
    return (
      <div style={{ position: 'relative', zIndex }}>
        {children}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      style={{
        position: 'sticky',
        top,
        zIndex,
        visibility: covered ? 'hidden' : undefined,
      }}
    >
      {children}
    </div>
  )
}
