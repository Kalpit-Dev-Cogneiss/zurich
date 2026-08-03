import type { BlogBlock } from '@/app/lib/blogData'

const bodyText: React.CSSProperties = {
  fontSize: 'clamp(1.4rem, 1.3vw, 1.7rem)',
  lineHeight: 1.75,
  color: 'rgba(255,255,255,0.65)',
}

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={i} style={{ ...bodyText, marginBottom: '2.4rem' }}>
                {block.text}
              </p>
            )

          case 'heading': {
            const Tag = block.level === 2 ? 'h2' : 'h3'
            return (
              <Tag
                key={i}
                style={{
                  fontSize: block.level === 2 ? 'clamp(2.4rem, 3vw, 3.6rem)' : 'clamp(2rem, 2.4vw, 2.6rem)',
                  fontWeight: 600,
                  color: '#fff',
                  lineHeight: 1.2,
                  letterSpacing: '0.01em',
                  margin: 0,
                  marginTop: block.level === 2 ? '5rem' : '4rem',
                  marginBottom: '2rem',
                }}
              >
                {block.text}
              </Tag>
            )
          }

          case 'list': {
            const Tag = block.ordered ? 'ol' : 'ul'
            return (
              <Tag
                key={i}
                style={{
                  ...bodyText,
                  marginBottom: '2.4rem',
                  paddingLeft: '2.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </Tag>
            )
          }

          case 'table':
            return (
              <div key={i} style={{ overflowX: 'auto', marginBottom: '3.2rem' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
                  {block.headers.length > 0 && (
                    <thead>
                      <tr>
                        {block.headers.map((h, j) => (
                          <th
                            key={j}
                            style={{
                              textAlign: 'left',
                              fontSize: '1.3rem',
                              fontWeight: 600,
                              color: '#fff',
                              padding: '1.4rem 1.6rem',
                              borderBottom: '1px solid rgba(255,255,255,0.2)',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            style={{
                              fontSize: '1.3rem',
                              lineHeight: 1.6,
                              color: 'rgba(255,255,255,0.65)',
                              padding: '1.4rem 1.6rem',
                              borderBottom: '1px solid rgba(255,255,255,0.1)',
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )

          case 'image':
            return (
              <figure key={i} style={{ margin: '4rem 0' }}>
                <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={block.src}
                    alt={block.alt}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
                {block.caption && (
                  <figcaption
                    style={{
                      fontSize: '1.2rem',
                      color: 'rgba(255,255,255,0.4)',
                      marginTop: '1.2rem',
                    }}
                  >
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            )

          case 'quote':
            return (
              <blockquote
                key={i}
                style={{
                  margin: '3.2rem 0',
                  padding: '0 0 0 2.4rem',
                  borderLeft: '2px solid rgba(255,255,255,0.3)',
                  fontSize: 'clamp(1.6rem, 1.5vw, 2rem)',
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                {block.text}
              </blockquote>
            )

          default:
            return null
        }
      })}
    </>
  )
}
