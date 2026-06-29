'use client'
import { NAV_ITEMS } from '@/app/lib/data'
import SvgIcon from '@/app/components/ui/SvgIcon'

export default function Footer() {
  return (
    <footer
      className="ui-dark"
      style={{
        background: '#000',
        color: '#fff',
        padding: '6rem 4rem 4rem',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '4rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <a href="#top" aria-label="Zorge 9 — to top">
            <SvgIcon id="logo" width={160} height={20} className="text-white" />
          </a>

          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem 4rem' }}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '1.2rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#apartments"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1.4rem 2.4rem',
              background: 'var(--c-brown)',
              color: '#fff',
              fontSize: '1.2rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Choose an Apartment
            <SvgIcon id="arrow-right" width={16} height={16} className="text-white" />
          </a>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2.4rem',
            flexWrap: 'wrap',
            gap: '1.6rem',
          }}
        >
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Zorge №9
          </p>
          <a
            href="https://vide-infra.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}
          >
            Site by vide infra
          </a>
        </div>
      </div>
    </footer>
  )
}
