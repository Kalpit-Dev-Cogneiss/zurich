'use client'

// TODO: swap in the real studio address before this goes in front of a
// client — this is a placeholder query so the map renders something sane
// out of the box. Google's no-API-key embed works with a plain text query.
const ADDRESS = 'Zurich Graphics, Hyderabad, Telangana, India'
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`
const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

/**
 * Studio location — a bordered map panel with the address printed above it
 * and a "get directions" link below. Pairs with ContactForm as the right-hand
 * column of the same section.
 */
export default function ContactMap() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <span style={{
        display: 'block',
        fontSize: '1.1rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.45)',
        marginBottom: '1.6rem',
      }}>
        Find us
      </span>

      <div style={{
        position: 'relative',
        flex: 1,
        minHeight: 320,
        border: '1px solid rgba(255,255,255,0.15)',
        overflow: 'hidden',
      }}>
        <iframe
          title="Zurich Graphics — studio location"
          src={MAPS_EMBED_SRC}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{
            width: '100%',
            height: '100%',
            minHeight: 320,
            border: 0,
            display: 'block',
            filter: 'grayscale(1) invert(0.92) contrast(0.92)',
          }}
        />
      </div>

      <div style={{ marginTop: '1.8rem' }}>
        <p style={{
          fontSize: '1.4rem',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.6)',
          margin: 0,
          marginBottom: '0.8rem',
        }}>
          {ADDRESS}
        </p>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '1.2rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--c-brown)',
          }}
        >
          Get directions →
        </a>
      </div>
    </div>
  )
}
