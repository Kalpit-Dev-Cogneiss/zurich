'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/app/lib/data'
import SvgIcon from '@/app/components/ui/SvgIcon'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* Persistent top bar — right side only: CTA + hamburger. No logo. */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex', alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '2.4rem 4rem',
        pointerEvents: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3.2rem', pointerEvents: 'all' }}>
          {/* Hamburger — two lines */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{
              display: 'flex', flexDirection: 'column',
              gap: '6px', cursor: 'pointer',
              background: 'none', border: 'none', padding: '4px',
            }}
          >
            <span style={{ display: 'block', width: 32, height: 1.5, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }} />
            <span style={{ display: 'block', width: 24, height: 1.5, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }} />
          </button>
        </div>
      </header>

      {/* Full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: '#000',
              display: 'flex', flexDirection: 'column',
            }}
          >
            {/* Menu header */}
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              padding: '2.4rem 4rem',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>
              <span style={{
                fontSize: 'clamp(2rem, 3vw, 3.6rem)',
                fontWeight: 600, letterSpacing: '0.04em',
                color: '#fff',
              }}>
                ZURICH GRAPHICS
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                style={{ color: '#fff', cursor: 'pointer', lineHeight: 0 }}
              >
                <SvgIcon id="close" width={24} height={24} />
              </button>
            </div>

            {/* Nav items */}
            <nav style={{
              flex: 1, display: 'flex', flexDirection: 'column',
              justifyContent: 'center', padding: '4rem',
            }}>
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1], delay: 0.1 + i * 0.05 }}
                  style={{
                    display: 'block',
                    fontSize: 'clamp(2.8rem, 5vw, 6.4rem)',
                    fontWeight: 600, letterSpacing: '0.02em',
                    textTransform: 'uppercase', color: '#fff',
                    padding: '0.8rem 0',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                    transition: 'color 0.3s ease',
                    lineHeight: 1.1,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--c-brown)')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Decor image */}
            <img src="/assets/images/menu/decor.webp" alt="" aria-hidden="true"
              style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '45%', opacity: 0.3, pointerEvents: 'none',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
