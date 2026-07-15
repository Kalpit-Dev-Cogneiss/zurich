---
name: scroll-animation
description: Animation and scroll conventions for the Zurich site — Framer Motion reveals, the signature cubic-bezier(.7,0,.3,1) ease, GSAP/ScrollTrigger usage, and the Lenis smooth-scroll setup. Use when adding scroll-triggered reveals, parallax, pinned/stacked sections, marquees, or any motion.
---

# Scroll & animation skill

The stack: **Framer Motion** (most reveals), **GSAP + @gsap/react** (timeline/scroll-trigger work), **Lenis** (smooth scroll, mounted once in `ui/SmoothScroll`). jQuery + turn.js power only the portfolio flipbook (`ui/TurnJSBook`).

## The signature ease — use it everywhere

```
cubic-bezier(.7,0,.3,1)
```

- CSS: `transition: transform 0.6s cubic-bezier(.7,0,.3,1)` (or `var(--ease)` from `globals.css`).
- Framer Motion: `ease: [0.7, 0, 0.3, 1]`.

Typical durations: entrance reveals `0.7–1.0s`; hover/micro-interactions `0.4–0.6s`. Stagger children with small `delay` steps (`0.1`, `0.18`, `0.3`).

## Framer Motion — standard reveal

```tsx
'use client'
import { motion } from 'framer-motion'

<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
/>
```

Prefer the existing `ui/AnimateReveal` (uses `useInView`, `once: true`, `margin: '-8% 0px'`) for simple fade-and-rise. Use `ui/SplitText` for per-line/word/char heading reveals. Use `useScroll` + `useTransform` for scroll-linked parallax (see `sections/About.tsx` video parallax).

## GSAP

Import from the local wrapper: `import { gsap } from '@/app/lib/gsap'`. Register plugins (e.g. `ScrollTrigger`) inside `useGSAP`/`useEffect` on the client only. Always clean up ScrollTriggers on unmount. Keep GSAP for things Framer can't do cleanly (complex pinned timelines); reach for Framer first.

## Lenis smooth scroll

Lenis is initialized once globally in `ui/SmoothScroll` — do **not** create a second instance. Because Lenis writes scroll position every frame, `globals.css` deliberately omits `scroll-behavior: smooth` and uses `overflow-x: clip` (not `hidden`) so `position: sticky`/pinning still works. Don't add `overflow: hidden` to `html`/`body` or re-enable CSS smooth scrolling.

## Performance rules

- Animate only `transform` and `opacity`; add `willChange: 'transform'` on elements that transform every frame.
- Throttle scroll handlers with `requestAnimationFrame` (see `About.tsx`).
- Pause off-screen or covered background video/iframes to protect FPS.
- Respect `viewport={{ once: true }}` so reveals don't re-fire and thrash.
