---
name: zurich-ui
description: Build UI for the Zurich real-estate branding site so it matches the existing design system — colors, typography, spacing, the StackReveal section pattern, and the inline-style + CSS-variable conventions used across app/components. Use whenever creating or editing any page, section, or UI component in this repo.
---

# Zurich UI — design-system skill

Read `Design.md` at the repo root first; it is the source of truth. This skill is the fast checklist for writing components that fit in.

## Conventions to always follow

- **Styling = inline `style={{}}` objects.** Components in `app/components/**` style with inline objects, not Tailwind classes or CSS modules. Match that. Tailwind v4 is imported in `globals.css` but used sparingly. Only global rules (fonts, resets, theme vars, responsive overrides) live in `globals.css`.
- **Use CSS variables for theme colors**, not hardcoded hex, when a token exists:
  - `var(--c-brown)` = `#a0725b` (accent — CTAs, eyebrows, underlines)
  - `var(--c-black)` `#000`, `var(--c-white)` `#fff`, `var(--c-gray)` `#666`, `var(--c-gray-light)` `#aaa`
  - Theme tokens: `--t-background`, `--t-text`, `--t-heading`, `--t-primary`, `--t-small`, `--t-line`. Add `.ui-dark` to flip the theme to dark.
- **Font sizing uses `rem` on a 62.5% root** (`1rem = 10px`). So `1.6rem = 16px`. Body is `1.6rem`, Gilroy 600.
- **Fluid type with `clamp()`.** Headings: `clamp(3.6rem, 6vw, 8.8rem)`. Body: `clamp(1rem, 1.1vw, 1.3rem)`. Eyebrows/labels: `1.0–1.25rem`.
- **Headings are UPPERCASE**, `fontWeight: 600`, `letterSpacing` ~`0.02em`–`0.1em`, tight `lineHeight` (1.05–1.2).
- **Eyebrows/labels:** small (`1.0–1.25rem`), `letterSpacing: 0.1em`–`0.2em`, `textTransform: uppercase`, often brown or a muted `rgba`.
- **Section padding** is typically `4rem` sides, generous vertical (`10rem` on full-height CTA sections). Full-bleed sections use `height: 100svh; minHeight: 600`.
- **`'use client'`** is required on any component using hooks, Framer Motion, GSAP, or browser APIs.

## The StackReveal section pattern

The home page composes full-screen sections inside `<StackReveal zIndex={n}>` wrappers (see `app/page.tsx`). Sections stack and reveal on scroll; later sections cover earlier ones (covered wrappers get `visibility: hidden`). When adding a home section:
- Give it a **monotonically increasing `zIndex`**.
- Make it a self-contained `100svh` block with its own dark `background: '#000'`.
- If it plays background video, pause it when off-screen or covered (see `About.tsx` for the reference implementation).

## Reusable building blocks (prefer these — don't reinvent)

- `ui/AnimateReveal` — fade+rise on scroll into view.
- `ui/SplitText` — line/word/char reveal for headings (`mode="lines"`).
- `ui/Magnetic` — magnetic hover for buttons/links.
- `ui/PageCTA` — the standard full-screen closing CTA (eyebrow + big heading + circular magnetic button).
- `ui/Marquee`, `ui/ParallaxImage`, `ui/ClipReveal`, `ui/StackReveal`, `ui/SvgIcon`.
- Layout: `layout/Header`, `layout/Footer`.

For motion specifics (eases, durations, GSAP/Lenis), use the `scroll-animation` skill.

## Do / Don't

- ✅ Reuse existing UI components before writing new ones.
- ✅ Keep the black-background, brown-accent, uppercase-heading aesthetic.
- ✅ Use `svh`/`svw` and `clamp()` so layouts hold on mobile.
- ❌ Don't introduce a UI/CSS framework, add global CSS for one-off component styling, or hardcode `#a0725b` when `var(--c-brown)` exists.
- ❌ Don't touch the home page (`app/page.tsx` + its sections) unless explicitly asked — it is considered finished.
