'use client'
import { useEffect, useRef, useState } from 'react'
import SvgIcon from './SvgIcon'

const DEFAULT_TOTAL_IMAGES = 70
const BOOK_HEIGHT = 600
const COVER_WIDTH = 450
const SPREAD_WIDTH = 900
const COVER_OFFSET = (SPREAD_WIDTH - COVER_WIDTH) / 2

const DEFAULT_IMAGES = Array.from({ length: DEFAULT_TOTAL_IMAGES }, (_, i) => {
  const num = String(i + 1).padStart(2, '0')
  return `/Brochure-image/${i === 8 ? '09 ' : num}.webp`
})

type JQueryStatic = (element: Element | Document) => {
  data: (key?: string) => any
  turn: (options?: Record<string, unknown> | string, ...args: unknown[]) => any
  empty: () => void
  off: () => void
  removeData: () => void
  append: (html: string) => void
  css: (key: string | Record<string, string>, value?: string) => any
  length: number
}

function preloadImages(urls: string[], onProgress: (pct: number) => void) {
  let loaded = 0
  return Promise.all(
    urls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          const done = () => {
            loaded++
            onProgress(Math.round((loaded / urls.length) * 100))
            resolve()
          }
          img.onload = done
          img.onerror = done
          img.src = src
        }),
    ),
  )
}

interface TurnJSBookProps {
  images?: string[]
}

export default function TurnJSBook({ images }: TurnJSBookProps) {
  const allImages = images && images.length > 0 ? images : DEFAULT_IMAGES
  const totalImages = allImages.length
  const sectionRef = useRef<HTMLDivElement>(null)
  const flipbookRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isReady, setIsReady] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const isMountedRef = useRef(true)
  const jqueryRef = useRef<JQueryStatic | null>(null)
  const preloadStarted = useRef(false)

  const isCover = currentPage === 1

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || preloadStarted.current) return
        preloadStarted.current = true
        observer.disconnect()

        preloadImages(allImages, setLoadProgress).then(() => {
          if (isMountedRef.current) setImagesLoaded(true)
        })
      },
      { rootMargin: '300px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!imagesLoaded) return

    isMountedRef.current = true
    let $flipbook: ReturnType<JQueryStatic> | null = null
    let isInitialized = false

    const initTurnJS = async () => {
      if (typeof window === 'undefined' || !flipbookRef.current) return

      try {
        const $ = (await import('jquery')).default as unknown as JQueryStatic
        jqueryRef.current = $

        const win = window as Window & { $?: JQueryStatic; jQuery?: JQueryStatic }
        win.$ = $
        win.jQuery = $

        await import('turn.js')

        if (!isMountedRef.current || !flipbookRef.current) return

        $flipbook = $(flipbookRef.current)
        $flipbook.empty()

        for (let index = 0; index < allImages.length; index++) {
          const src = allImages[index]
          $flipbook.append(`
            <div style="background:#fff;overflow:hidden;position:relative;width:100%;height:100%;">
              <img
                src="${src}"
                alt="Page ${index + 1}"
                draggable="false"
                style="width:100%;height:100%;object-fit:cover;display:block;user-select:none;pointer-events:none;"
              />
            </div>
          `)
        }

        const $jq = $

        // Always use double-page mode so the first flip opens straight into a spread
        $flipbook.turn({
          width: SPREAD_WIDTH,
          height: BOOK_HEIGHT,
          autoCenter: false,
          acceleration: true,
          gradients: true,
          elevation: 120,
          duration: 1000,
          page: 1,
          display: 'double',
          when: {
            turning: function (this: HTMLElement, _event: unknown, page: number) {
              $jq(this).css('cursor', 'grabbing')
              if (isMountedRef.current) setCurrentPage(page)
            },
            turned: function (this: HTMLElement) {
              $jq(this).css('cursor', 'grab')
            },
            start: function (this: HTMLElement) {
              $jq(this).css('cursor', 'grabbing')
            },
            end: function (this: HTMLElement) {
              $jq(this).css('cursor', 'grab')
            },
          },
        })

        $flipbook.css({ cursor: 'grab', margin: '0 auto', display: 'block' })

        isInitialized = true
        if (isMountedRef.current) setIsReady(true)
      } catch (error) {
        console.error('Error initializing turn.js:', error)
      }
    }

    initTurnJS()

    return () => {
      isMountedRef.current = false
      if ($flipbook && $flipbook.length > 0 && isInitialized) {
        try {
          $flipbook.off()
          $flipbook.empty()
          $flipbook.removeData()
        } catch {
          // ignore cleanup errors on unmount
        }
      }
      jqueryRef.current = null
    }
  }, [imagesLoaded])

  const goToNextPage = () => {
    if (flipbookRef.current && jqueryRef.current) {
      jqueryRef.current(flipbookRef.current).turn('next')
    }
  }

  const goToPrevPage = () => {
    if (flipbookRef.current && jqueryRef.current) {
      jqueryRef.current(flipbookRef.current).turn('previous')
    }
  }

  const loadingLabel = imagesLoaded
    ? 'Opening book...'
    : `Loading brochure... ${loadProgress}%`

  return (
    <div
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
      }}
    >
      {isReady && (
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          aria-label="Previous Page"
          style={{
            position: 'absolute',
            left: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentPage === 1 ? 0.3 : 1,
            transition: 'all 0.3s',
            zIndex: 100,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          <SvgIcon id="long-arrow-left" width={32} height={12} />
        </button>
      )}

      <div className="book-stage" style={{
        position: 'relative',
        width: '100%',
        maxWidth: `${SPREAD_WIDTH}px`,
        height: `${BOOK_HEIGHT}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
      }}>
        {/* Soft ground shadow beneath the book */}
        <div
          className={`book-ground-shadow${isCover ? ' is-cover' : ''}`}
          aria-hidden="true"
        />

        <div style={{
          transform: isCover ? `translateX(-${COVER_OFFSET}px)` : 'translateX(0)',
          transition: 'transform 0.7s cubic-bezier(0.7, 0, 0.3, 1)',
          height: `${BOOK_HEIGHT}px`,
          position: 'relative',
        }}>
          {/* Page-stack lip beneath the book block (hidden on cover) */}
          {!isCover && <div className="book-page-stack" aria-hidden="true" />}

          {/* Spine crease shadow when open */}
          <div
            className={`book-spine-shadow${isCover ? '' : ' is-open'}`}
            aria-hidden="true"
          />

          {/* Cover-only shadow on page 1 (right panel) */}
          {isCover && (
            <div className="book-cover-only-shadow" aria-hidden="true" />
          )}

          <div
            ref={flipbookRef}
            className={`book-flipbook${isCover ? ' is-cover' : ''}`}
            style={{
              width: `${SPREAD_WIDTH}px`,
              height: `${BOOK_HEIGHT}px`,
              visibility: isReady ? 'visible' : 'hidden',
            }}
          />
        </div>

        {!isReady && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            fontSize: '1.2rem',
            color: '#666',
            letterSpacing: '0.05em',
          }}>
            {loadingLabel}
          </div>
        )}
      </div>

      {isReady && (
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalImages}
          aria-label="Next Page"
          style={{
            position: 'absolute',
            right: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(0,0,0,0.8)',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            cursor: currentPage === totalImages ? 'not-allowed' : 'pointer',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentPage === totalImages ? 0.3 : 1,
            transition: 'all 0.3s',
            zIndex: 100,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          <SvgIcon id="long-arrow-right" width={32} height={12} />
        </button>
      )}

      {isReady && (
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          color: '#000',
          background: 'rgba(255,255,255,0.9)',
          padding: '0.8rem 1.5rem',
          borderRadius: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 100,
        }}>
          {currentPage} / {totalImages}
        </div>
      )}

      <style>{`
        .book-ground-shadow {
          position: absolute;
          bottom: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 88%;
          height: 36px;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0.32) 0%,
            rgba(0, 0, 0, 0.14) 42%,
            transparent 72%
          );
          pointer-events: none;
          z-index: 0;
          transition: width 0.7s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.7s ease;
        }
        .book-ground-shadow.is-cover {
          width: 46%;
        }
        .book-page-stack {
          position: absolute;
          bottom: -4px;
          left: 10px;
          right: 10px;
          height: 8px;
          background: linear-gradient(180deg, #ececec 0%, #d4d4d4 100%);
          border-radius: 0 0 3px 3px;
          box-shadow:
            0 3px 6px rgba(0, 0, 0, 0.12),
            0 8px 16px rgba(0, 0, 0, 0.08);
          pointer-events: none;
          z-index: 0;
        }
        .book-cover-only-shadow {
          position: absolute;
          top: 0;
          right: 0;
          width: ${COVER_WIDTH}px;
          height: 100%;
          pointer-events: none;
          z-index: 15;
          border-radius: 0 3px 3px 0;
          box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.08),
            0 8px 20px rgba(0, 0, 0, 0.12),
            0 20px 40px rgba(0, 0, 0, 0.14),
            0 36px 72px rgba(0, 0, 0, 0.1);
        }
        .book-cover-only-shadow::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 36px;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.18) 0%,
            rgba(0, 0, 0, 0.08) 35%,
            rgba(0, 0, 0, 0.02) 70%,
            transparent 100%
          );
          pointer-events: none;
        }
        .book-cover-only-shadow::after {
          content: '';
          position: absolute;
          top: 8px;
          right: -7px;
          width: 12px;
          height: calc(100% - 16px);
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.06) 0%,
            rgba(0, 0, 0, 0.22) 50%,
            rgba(0, 0, 0, 0.14) 100%
          );
          border-radius: 0 2px 2px 0;
          box-shadow: 3px 0 10px rgba(0, 0, 0, 0.12);
          pointer-events: none;
        }
        .book-spine-shadow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 0, 0, 0.05) 18%,
            rgba(0, 0, 0, 0.22) 50%,
            rgba(0, 0, 0, 0.05) 82%,
            transparent 100%
          );
          pointer-events: none;
          z-index: 12;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        .book-spine-shadow.is-open {
          opacity: 1;
        }
        .book-flipbook.is-cover {
          box-shadow: none;
        }
        .book-flipbook.is-cover .turn-page-wrapper,
        .book-flipbook.is-cover .turn-page {
          box-shadow: none;
          filter: none;
        }
        .book-flipbook:not(.is-cover) {
          position: relative;
          z-index: 2;
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.06),
            0 4px 12px rgba(0, 0, 0, 0.1),
            0 16px 32px rgba(0, 0, 0, 0.14),
            0 32px 64px rgba(0, 0, 0, 0.12),
            inset -2px 0 6px rgba(0, 0, 0, 0.04);
        }
        .book-flipbook:not(.is-cover) .turn-page {
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.03);
        }
        .book-flipbook:not(.is-cover) .turn-page-wrapper {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
        }
      `}</style>
    </div>
  )
}
