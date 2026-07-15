# Zurich — Design System

The design language for the Zurich real-estate branding agency site. This is the source of truth; keep it in sync with `app/globals.css` and the components in `app/components/**`. The home page is considered finished — treat it as the reference for how the system is applied.

---

## 1. Brand personality

Bold, editorial, confident. Full-bleed black canvases, oversized uppercase headlines, a single warm brown accent, and cinematic scroll motion. Everything reads as "premium, strategy-first, made for real estate brands."

---

## 2. Color

Defined as CSS variables in `app/globals.css` (`:root`). Always reference the token, not the raw hex.

| Token | Value | Use |
| --- | --- | --- |
| `--c-white` | `#ffffff` | Backgrounds (light), text on dark |
| `--c-black` | `#000000` | Primary canvas, text on light |
| `--c-brown` | `#a0725b` | **Accent** — CTAs, eyebrows, underlines, hover fills |
| `--c-gray` | `#666666` | Secondary text |
| `--c-gray-light` | `#aaaaaa` | Tertiary text / hints |

### Theme tokens (semantic)

| Token | Light default | `.ui-dark` |
| --- | --- | --- |
| `--t-background` | white | black |
| `--t-text` | black | white |
| `--t-heading` | black | white |
| `--t-primary` | brown | brown |
| `--t-small` | `rgba(0,0,0,.3)` | `rgba(255,255,255,.5)` |
| `--t-line` | `rgba(0,0,0,.1)` | `rgba(255,255,255,.2)` |

Add class `.ui-dark` to a container to flip to the dark theme; `.ui-background` applies the current theme's background + text. The site skews dark — most sections use `background: #000`.

Common ad-hoc alphas: white text at `rgba(255,255,255,0.6)` for body copy on black; overlays at `rgba(0,0,0,0.45)` over video.

---

## 3. Typography

- **Font:** `Gilroy` (SemiBold `600`), self-hosted from `/public/assets/fonts`, falling back to `Helvetica, Arial, sans-serif`. Only weight 600 is loaded — the whole site is semibold.
- **Root sizing:** `html { font-size: 62.5% }` → `1rem = 10px`. Use `rem` for all type. Body = `1.6rem` (16px).
- **Fluid scale:** size headings with `clamp()` so they hold from mobile to desktop.

| Role | Size | Treatment |
| --- | --- | --- |
| Hero / CTA heading | `clamp(3.6rem, 6vw, 8.8rem)` | UPPERCASE, `lineHeight 1.05`, `letterSpacing 0.03em` |
| Section heading (h2) | `clamp(3.6rem, 2vw, 7.2rem)` | UPPERCASE, `lineHeight 1.2`, `letterSpacing 0.02em` |
| Sub-heading (h3) | `clamp(2rem, 3vw, 3.5rem)` | UPPERCASE, `letterSpacing 0.1em` |
| Card heading | `clamp(1.8rem, 2.2vw, 2.8rem)` | UPPERCASE, `lineHeight 1.1` |
| Body | `clamp(1rem, 1.1vw, 1.3rem)` | `lineHeight 1.6`, `letterSpacing 0.02em`, muted color |
| Eyebrow / label | `1.0rem`–`1.25rem` | UPPERCASE, `letterSpacing 0.1em`–`0.2em`, brown or muted |

Headings are uppercase and `fontWeight: 600` by default (set globally). Line breaks in headings are often hand-placed with `<br />`.

---

## 4. Spacing & layout

- **Section side padding:** `4rem` (desktop). Full-screen CTA sections: `10rem 4rem`.
- **Full-bleed sections:** `height: 100svh; minHeight: 600px; overflow: hidden`. Use `svh`/`svw` (not `vh`/`vw`) to avoid mobile URL-bar jump.
- **Content max-widths:** body copy blocks `~640–780px`; large headings `~1100px`.
- **Card gaps / grid gaps:** `4rem` typical.
- Responsive collapses (portfolio grids/info) live in `globals.css` media queries at `768px` / `968px`.

---

## 5. Motion

Full detail in the `scroll-animation` skill. Essentials:

- **Signature ease:** `cubic-bezier(.7,0,.3,1)` (CSS `var(--ease)`; Framer `[0.7, 0, 0.3, 1]`).
- **Durations:** reveals `0.7–1.0s`; hover/micro `0.4–0.6s`; stagger delays `0.1 / 0.18 / 0.3`.
- **Stack:** Framer Motion (reveals), GSAP + @gsap/react (timelines/scroll-trigger), Lenis (global smooth scroll, one instance in `ui/SmoothScroll`).
- **Home sections** stack via `<StackReveal zIndex={n}>` with increasing z-index; covered wrappers are hidden.
- Animate only `transform`/`opacity`; throttle scroll with rAF; pause off-screen video.

---

## 6. Components (reuse before building)

**UI (`app/components/ui/`)**
`AnimateReveal` (scroll fade+rise) · `SplitText` (line/word/char reveal) · `Magnetic` (magnetic hover) · `PageCTA` (full-screen closing CTA) · `Marquee` · `ParallaxImage` · `ClipReveal` · `StackReveal` · `ScrollSnap` · `ScrollToTop` · `SmoothScroll` · `Preloader` · `SvgIcon` · `TurnJSBook` (portfolio flipbook).

**Layout:** `Header`, `Footer`.
**Sections (`app/components/sections/`):** Hero, About, Location, Panorama, Architecture, Gallery, DailySchedule, Advantages, Fitness, Infrastructure, Park, Technologies, Penthouses, IndiaMap.

Signature CTA = circular magnetic button, `1px rgba(255,255,255,0.3)` border, brown fill scaling from center on hover (see `ui/PageCTA.tsx`).

---

## 7. Coding conventions

- Style with **inline `style={{}}` objects**; keep global CSS in `globals.css` only (fonts, resets, tokens, responsive overrides).
- `'use client'` on anything using hooks / Framer / GSAP / browser APIs.
- Reference color tokens (`var(--c-brown)`), not raw hex.
- Reuse existing UI components; keep the black-canvas + brown-accent + uppercase-heading identity.
- Stack: **Next.js 16, React 19, Tailwind v4, TypeScript.** Note: this Next.js has breaking changes vs. older versions — check `node_modules/next/dist/docs/` before writing framework code (per `AGENTS.md`).
