'use client'

import { useEffect, useState } from 'react'

export interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (!items.length) return

    const handleScroll = () => {
      const offset = 180
      const headingElements = items
        .map((item) => document.getElementById(item.id))
        .filter((el): el is HTMLElement => el !== null)

      if (!headingElements.length) return

      let currentActiveId = headingElements[0].id

      for (const el of headingElements) {
        const top = el.getBoundingClientRect().top
        if (top <= offset) {
          currentActiveId = el.id
        } else {
          break
        }
      }

      setActiveId(currentActiveId)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
      setActiveId(id)
    }
  }

  if (!items.length) return null

  // Process items to generate H2 numbers and H3 bullet dots
  let h2Count = 0
  const formattedItems = items.map((item) => {
    if (item.level === 2) {
      h2Count++
      return { ...item, prefix: `${h2Count}.` }
    }
    return { ...item, prefix: '•' }
  })

  return (
    <>
      <div
        className="toc-desktop-container"
        style={{
          padding: '2.4rem',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
          marginBottom: '2.4rem',
        }}
      >
        {/* Table of Contents Header */}
        <h3
          style={{
            fontSize: '1.3rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#fff',
            fontWeight: 600,
            margin: 0,
            marginBottom: '1.8rem',
          }}
        >
          Table of Contents
        </h3>

        {/* Navigation Links with Custom Scrollbar */}
        <nav
          className="toc-nav-scroll"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            maxHeight: 'calc(70vh - 160px)',
            overflowY: 'auto',
            paddingRight: '0.8rem',
          }}
        >
          {formattedItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.8rem',
                  fontSize: item.level === 3 ? '1.25rem' : '1.35rem',
                  paddingLeft: item.level === 3 ? '1.4rem' : '0px',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
                  fontWeight: isActive ? 700 : 400,
                  lineHeight: 1.5,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <span
                  style={{
                    fontSize: item.level === 3 ? '1.1rem' : '1.25rem',
                    opacity: isActive ? 1 : 0.6,
                    fontWeight: isActive ? 700 : 400,
                  }}
                >
                  {item.prefix}
                </span>
                <span style={{ flex: 1 }}>{item.text}</span>
              </a>
            )
          })}
        </nav>
      </div>

      <style jsx global>{`
        .toc-nav-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.03);
        }

        .toc-nav-scroll::-webkit-scrollbar {
          width: 4px;
        }

        .toc-nav-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
          border-radius: 4px;
        }

        .toc-nav-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          transition: background 0.2s ease;
        }

        .toc-nav-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  )
}
