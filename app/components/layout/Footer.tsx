'use client'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className="ui-dark"
      style={{
        background: '#000',
        color: '#fff',
        padding: '8rem 5.6rem 4rem',
        zIndex:'999999',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        
        {/* Scroll to Top Arrow */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of the page"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: '1rem',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            <svg width="14" height="31" viewBox="0 0 14 31" fill="none">
              <path d="M7 1L7 30M7 1L1 7M7 1L13 7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>

        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 4fr 1fr',
            alignItems: 'end',
            gap: '2rem',
          }}
        >
          {/* Left - Copyright */}
          <div>
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.05em',
            }}>
              © 2026 Zurich Graphics
            </p>
          </div>

          {/* Center - Logo */}
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              <span style={{
                fontSize: 'clamp(2.4rem, 3vw, 3.6rem)',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#fff',
              }}>
                Zurich
              </span>
            </button>
          </div>

          {/* Right - Credits */}
          <div style={{ textAlign: 'right' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              title="Award-winning real estate website design agency"
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
            >
              SITE BY Octik AI Lab
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:last-child {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 3rem !important;
          }
          footer > div > div:last-child > div {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  )
}
