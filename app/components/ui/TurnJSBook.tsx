'use client'
import { useEffect, useRef, useState, useCallback } from 'react'
import SvgIcon from './SvgIcon'

// How many pages ahead/behind the current page to preload
const PRELOAD_RADIUS = 2

export default function TurnJSBook() {
  const flipbookRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isReady, setIsReady] = useState(false)
  // Track which page indices have already had their image loaded
  const loadedPages = useRef<Set<number>>(new Set())

  const totalImages = 70
  const allImages = Array.from({ length: totalImages }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    return `/Brochure-image/${i === 8 ? '09 ' : num}.jpg`
  })

  // Load images for pages within PRELOAD_RADIUS of `page` (1-indexed)
  const loadPagesAround = useCallback((page: number) => {
    if (!flipbookRef.current) return
    const $ = (window as unknown as Record<string, unknown>).$ as ((s: unknown) => any) | undefined
    if (!$) return

    const $book = $(flipbookRef.current)
    const pageCount = allImages.length

    for (let i = page - PRELOAD_RADIUS; i <= page + PRELOAD_RADIUS; i++) {
      if (i < 1 || i > pageCount) continue
      if (loadedPages.current.has(i)) continue

      // turn.js wraps each page in .page — select by data-page attribute we set
      const $pageDiv = $book.find(`[data-page-index="${i}"]`)
      if ($pageDiv.length === 0) continue

      const src = allImages[i - 1]
      // Replace the placeholder with the real image
      $pageDiv.html(`
        <img
          src="${src}"
          alt="Page ${i}"
          draggable="false"
          style="width:100%;height:100%;object-fit:cover;display:block;user-select:none;pointer-events:none;"
        />
      `)
      loadedPages.current.add(i)
    }
  }, [allImages])

  useEffect(() => {
    let isMounted = true
    let $flipbook: any = null
    let isInitialized = false

    const initTurnJS = async () => {
      if (typeof window === 'undefined' || !flipbookRef.current) return

      try {
        const $ = (await import('jquery')).default

        const win = window as unknown as Record<string, unknown>
        if (!win.$) {
          win.$ = $
          win['jQuery'] = $
        }

        await import('turn.js')

        await new Promise(resolve => setTimeout(resolve, 100))
        if (!isMounted || !flipbookRef.current) return

        $flipbook = $(flipbookRef.current!)

        // Already initialized (React Strict Mode double-mount guard)
        if ($flipbook.data('turn')) {
          isInitialized = true
          if (isMounted) setIsReady(true)
          return
        }

        $flipbook.empty()

        // Add all pages as lightweight placeholders — no images yet
        allImages.forEach((_, index) => {
          const pageNum = index + 1
          $flipbook.append(`
            <div
              data-page-index="${pageNum}"
              style="background:#f0f0f0;overflow:hidden;position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;"
            >
              <span style="color:#bbb;font-size:1rem;">${pageNum}</span>
            </div>
          `)
        })

        $flipbook.turn({
          width: 450,
          height: 600,
          autoCenter: true,
          acceleration: true,
          gradients: true,
          elevation: 50,
          duration: 1200,
          page: 1,
          display: 'single',
          when: {
            turning: function(this: any, _event: any, page: number) {
              $(this).css('cursor', 'grabbing')
              if (page === 2) {
                $(this).turn('display', 'double')
                $(this).turn('size', 900, 600)
              }
            },
            turned: function(this: any, _event: any, page: number) {
              if (isMounted) setCurrentPage(page)
              $(this).css('cursor', 'grab')

              if (page === 1) {
                $(this).turn('display', 'single')
                $(this).turn('size', 450, 600)
              }

              // Lazy-load images around the new page
              loadPagesAround(page)
            },
            start: function(this: any) {
              $(this).css('cursor', 'grabbing')
            },
            end: function(this: any) {
              $(this).css('cursor', 'grab')
            },
          },
        })

        $flipbook.css('cursor', 'grab')

        isInitialized = true
        if (isMounted) setIsReady(true)

        // Load the first batch right away (pages 1–3)
        loadPagesAround(1)

      } catch (error) {
        console.error('Error initializing turn.js:', error)
      }
    }

    initTurnJS()

    return () => {
      isMounted = false
      if ($flipbook && $flipbook.length > 0 && isInitialized) {
        try {
          if (typeof $flipbook.turn === 'function' && $flipbook.data('turn')) {
            $flipbook.turn('destroy')
            $flipbook.empty()
          }
        } catch {
          // silently ignore on unmount
        }
      }
    }
  }, [allImages, loadPagesAround])

  const goToNextPage = () => {
    const $ = (window as unknown as Record<string, unknown>).$ as ((s: unknown) => any) | undefined
    if (flipbookRef.current && $) $(flipbookRef.current).turn('next')
  }

  const goToPrevPage = () => {
    const $ = (window as unknown as Record<string, unknown>).$ as ((s: unknown) => any) | undefined
    if (flipbookRef.current && $) $(flipbookRef.current).turn('previous')
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
    }}>
      {/* Left Arrow */}
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
          onMouseEnter={e => {
            if (currentPage > 1) {
              e.currentTarget.style.opacity = '0.7'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }
          }}
          onMouseLeave={e => {
            if (currentPage > 1) {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }
          }}
        >
          <SvgIcon id="long-arrow-left" width={32} height={12} />
        </button>
      )}

      {/* Book container */}
      <div style={{
        position: 'relative',
        width: currentPage === 1 ? '450px' : '900px',
        height: '600px',
        boxShadow: '0 25px 80px rgba(0,0,0,0.2)',
        background: '#fff',
        transition: 'width 0.6s cubic-bezier(0.7, 0, 0.3, 1)',
      }}>
        <div
          ref={flipbookRef}
          style={{
            width: '100%',
            height: '100%',
            display: isReady ? 'block' : 'none',
          }}
        />

        {!isReady && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fff',
            fontSize: '1.5rem',
            color: '#666',
          }}>
            Loading book...
          </div>
        )}
      </div>

      {/* Right Arrow */}
      {isReady && (
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalImages}
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
          onMouseEnter={e => {
            if (currentPage < totalImages) {
              e.currentTarget.style.opacity = '0.7'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }
          }}
          onMouseLeave={e => {
            if (currentPage < totalImages) {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }
          }}
        >
          <SvgIcon id="long-arrow-right" width={32} height={12} />
        </button>
      )}

      {/* Page counter */}
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
    </div>
  )
}
