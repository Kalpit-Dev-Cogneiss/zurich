'use client'
import { useEffect, useRef, useState } from 'react'
import SvgIcon from './SvgIcon'

const TOTAL_IMAGES = 70
const BOOK_HEIGHT = 600
const COVER_WIDTH = 450
const SPREAD_WIDTH = 900
const COVER_OFFSET = (SPREAD_WIDTH - COVER_WIDTH) / 2

const ALL_IMAGES = Array.from({ length: TOTAL_IMAGES }, (_, i) => {
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

export default function TurnJSBook() {
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

        preloadImages(ALL_IMAGES, setLoadProgress).then(() => {
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

        for (let index = 0; index < ALL_IMAGES.length; index++) {
          const src = ALL_IMAGES[index]
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
          elevation: 50,
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
          aria-label="Previous page"
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

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: `${SPREAD_WIDTH}px`,
        height: `${BOOK_HEIGHT}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          transform: isCover ? `translateX(-${COVER_OFFSET}px)` : 'translateX(0)',
          transition: 'transform 0.7s cubic-bezier(0.7, 0, 0.3, 1)',
          height: `${BOOK_HEIGHT}px`,
        }}>
          <div
            ref={flipbookRef}
            style={{
              width: `${SPREAD_WIDTH}px`,
              height: `${BOOK_HEIGHT}px`,
              boxShadow: isReady ? '0 25px 80px rgba(0,0,0,0.2)' : 'none',
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
          disabled={currentPage === TOTAL_IMAGES}
          aria-label="Next page"
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
            cursor: currentPage === TOTAL_IMAGES ? 'not-allowed' : 'pointer',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentPage === TOTAL_IMAGES ? 0.3 : 1,
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
          {currentPage} / {TOTAL_IMAGES}
        </div>
      )}
    </div>
  )
}
