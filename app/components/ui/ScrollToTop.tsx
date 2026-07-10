'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import type Lenis from 'lenis'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const lenis = (window as Window & { __lenis?: Lenis }).__lenis
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return null
}
