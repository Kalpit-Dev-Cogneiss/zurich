'use client'
import { useEffect, useRef, useState } from 'react'
import SvgIcon from './SvgIcon'

export default function TurnJSBook() {
  const flipbookRef = useRef<HTMLDivElement>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [isReady, setIsReady] = useState(false)

  // Generate all page paths from Brochure-image folder
  const totalImages = 70
  const allImages = Array.from({ length: totalImages }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    // Handle the space in "09 .jpg"
    return `/Brochure-image/${i === 8 ? '09 ' : num}.jpg`
  })

  useEffect(() => {
    let isMounted = true
    let $flipbook: any = null

    const initTurnJS = async () => {
      if (typeof window === 'undefined' || !flipbookRef.current) return

      try {
        console.log('Initializing TurnJS...')
        
        // Dynamically import jQuery
        const $ = (await import('jquery')).default
        console.log('jQuery loaded')
        
        // Make jQuery available globally
        if (!(window as any).$) {
          (window as any).$ = $
          (window as any).jQuery = $
        }
        
        // Import turn.js
        await import('turn.js')
        console.log('Turn.js loaded')

        // Small delay to ensure DOM is ready
        await new Promise(resolve => setTimeout(resolve, 100))

        if (!isMounted || !flipbookRef.current) return

        $flipbook = $(flipbookRef.current!)
        console.log('Flipbook element:', $flipbook.length)
        
        // Clear any existing content
        $flipbook.empty()
        
        // Add all pages to the flipbook before initialization
        allImages.forEach((imagePath, index) => {
          $flipbook.append(`
            <div style="background: #fff; overflow: hidden; position: relative; width: 100%; height: 100%;">
              <img
                src="${imagePath}"
                alt="Page ${index + 1}"
                draggable="false"
                style="width: 100%; height: 100%; object-fit: cover; display: block; user-select: none; pointer-events: none;"
              />
            </div>
          `)
        })
        
        console.log('Added', allImages.length, 'pages to flipbook')
        
        // Initialize turn.js with single page for closed book
        $flipbook.turn({
          width: 450, // Half width for single page
          height: 600,
          autoCenter: true,
          acceleration: true,
          gradients: true,
          elevation: 50,
          duration: 1200,
          page: 1,
          display: 'single', // Start with single page (closed book)
          when: {
            turning: function(this: any, _event: any, page: number) {
              $(this).css('cursor', 'grabbing')
              
              // When turning from page 1 to 2, switch to double display
              if (page === 2) {
                $(this).turn('display', 'double')
                $(this).turn('size', 900, 600) // Expand to full width
              }
            },
            turned: function(this: any, _event: any, page: number) {
              if (isMounted) {
                setCurrentPage(page)
              }
              $(this).css('cursor', 'grab')
              console.log('Turned to page:', page)
              
              // If we go back to page 1, switch back to single display
              if (page === 1) {
                $(this).turn('display', 'single')
                $(this).turn('size', 450, 600) // Shrink to half width
              }
            },
            start: function(this: any) {
              $(this).css('cursor', 'grabbing')
            },
            end: function(this: any) {
              $(this).css('cursor', 'grab')
            },
          },
        })

        // Set initial cursor
        $flipbook.css('cursor', 'grab')

        console.log('TurnJS initialized successfully with', $flipbook.turn('pages'), 'pages')
        console.log('Current display mode:', $flipbook.turn('display'))
        
        if (isMounted) {
          setIsReady(true)
        }
      } catch (error) {
        console.error('Error initializing turn.js:', error)
      }
    }

    initTurnJS()

    return () => {
      isMounted = false
      if ($flipbook && $flipbook.length > 0) {
        try {
          // Check if turn is initialized before destroying
          if (typeof $flipbook.turn === 'function') {
            const turnData = $flipbook.data('turn')
            if (turnData) {
              $flipbook.turn('destroy')
              console.log('Turn.js destroyed successfully')
            }
          }
        } catch (e) {
          // Silently fail - component is unmounting anyway
        }
      }
    }
  }, [allImages])

  const goToNextPage = () => {
    if (flipbookRef.current && (window as any).$) {
      const $ = (window as any).$
      $(flipbookRef.current).turn('next')
    }
  }

  const goToPrevPage = () => {
    if (flipbookRef.current && (window as any).$) {
      const $ = (window as any).$
      $(flipbookRef.current).turn('previous')
    }
  }

  const totalPages = totalImages // Total number of pages in the book

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

      {/* Book container - dynamic width based on page */}
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
        >
          {/* Pages are added dynamically by turn.js initialization */}
        </div>

        {/* Loading state */}
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
          disabled={currentPage === totalPages}
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
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: currentPage === totalPages ? 0.3 : 1,
            transition: 'all 0.3s',
            zIndex: 100,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={e => {
            if (currentPage < totalPages) {
              e.currentTarget.style.opacity = '0.7'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'
            }
          }}
          onMouseLeave={e => {
            if (currentPage < totalPages) {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)'
            }
          }}
        >
          <SvgIcon id="long-arrow-right" width={32} height={12} />
        </button>
      )}

      {/* Page counter - bottom center */}
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
          {currentPage} / {totalPages}
        </div>
      )}
    </div>
  )
}
