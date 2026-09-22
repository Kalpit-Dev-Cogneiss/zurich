'use client'

import { useState } from 'react'

interface ShareButtonsProps {
  title: string
  url?: string
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const getShareUrl = (platform: 'twitter' | 'linkedin') => {
    if (typeof window === 'undefined') return '#'
    const currentUrl = encodeURIComponent(window.location.href)
    const shareTitle = encodeURIComponent(title)

    if (platform === 'twitter') {
      return `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareTitle}`
    }
    if (platform === 'linkedin') {
      return `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`
    }
    return '#'
  }

  return (
    <div
      style={{
        padding: '1.6rem',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        marginBottom: '2rem',
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: '1.1rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'rgba(255, 255, 255, 0.4)',
          marginBottom: '1.2rem',
          fontWeight: 600,
        }}
      >
        Share Article
      </span>
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
        <button
          onClick={handleCopy}
          type="button"
          style={{
            flex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            padding: '0.8rem 1.2rem',
            fontSize: '1.2rem',
            color: copied ? '#4ade80' : 'rgba(255, 255, 255, 0.8)',
            background: copied ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${copied ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            ) : (
              <>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </>
            )}
          </svg>
          {copied ? 'Link Copied!' : 'Copy Link'}
        </button>

        <a
          href={getShareUrl('twitter')}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.8)',
            transition: 'all 0.2s ease',
          }}
          title="Share on X (Twitter)"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        <a
          href={getShareUrl('linkedin')}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgba(255, 255, 255, 0.8)',
            transition: 'all 0.2s ease',
          }}
          title="Share on LinkedIn"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
          </svg>
        </a>
      </div>
    </div>
  )
}
