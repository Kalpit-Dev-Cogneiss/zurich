'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS } from '@/app/lib/data'
import SvgIcon from '@/app/components/ui/SvgIcon'
import EnquireModal from '@/app/components/ui/EnquireModal'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [enquireOpen, setEnquireOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = (menuOpen || enquireOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen, enquireOpen])

  return (
    <>
      {/* Persistent top bar — right side only: enquire CTA + hamburger. No logo. */}
      <header className="site-header" style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 100,
        display: 'flex', alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '2.4rem 4rem',
        pointerEvents: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', pointerEvents: 'all' }}>
          {/* Enquire CTA — opens the quick enquiry modal on every page */}
          <button
            onClick={() => setEnquireOpen(true)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.8rem',
              padding: '1rem 2rem',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: '999px',
              background: 'rgba(0,0,0,0.25)',
              backdropFilter: 'blur(4px)',
              color: '#fff',
              fontSize: '1.2rem',
              letterSpacing: '0.04em',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'background 0.3s ease, border-color 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#fff'
              e.currentTarget.style.borderColor = '#fff'
              e.currentTarget.style.color = '#000'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.25)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
              e.currentTarget.style.color = '#fff'
            }}
          >
            Enquire Now
          </button>

          {/* Hamburger — two lines */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
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

      <EnquireModal open={enquireOpen} onClose={() => setEnquireOpen(false)} />

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
            <div className="menu-header" style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              padding: '2.4rem 4rem',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/zurich-logo-White.svg"
                alt="Zurich Graphics"
                style={{ height: 'clamp(8rem, 3.2vw, 3.8rem)', width: 'auto' }}
              />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
                style={{ color: '#fff', cursor: 'pointer', lineHeight: 0 }}
              >
                <SvgIcon id="close" width={24} height={24} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="menu-nav" style={{
              flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column',
              justifyContent: 'center', padding: '2rem 4rem',
              overflowY: 'auto',
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
                    fontSize: 'clamp(2.2rem, 3.8vw, 4.8rem)',
                    fontWeight: 600, letterSpacing: '0.02em',
                    color: 'rgba(255,255,255,0.6)',
                    padding: '0.7rem 0',
                    transition: 'color 0.3s ease',
                    lineHeight: 1.15,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* Decor image */}
            <img src="/assets/images/menu/decor.webp" alt="" aria-hidden="true"
              style={{
                position: 'absolute', bottom: 0, right: 0,
                width: '45%', opacity: 1, pointerEvents: 'none', zIndex: -1,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .site-header {
            padding: 1.6rem 2rem !important;
          }
          .menu-header {
            padding: 1.6rem 2rem !important;
          }
          .menu-nav {
            padding: 2rem !important;
          }
        }
      `}</style>
    </>
  )
}
