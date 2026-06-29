'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import SvgIcon from '@/app/components/ui/SvgIcon'

const IMAGES = [
  { id: 1, src: '/images/Gallery_001.jpg', aspect: '4/8', moveFactor: 0.8 },
  { id: 2, src: '/images/Gallery_002.jpg', aspect: '3/3', moveFactor: 0.9 },
  { id: 3, src: '/images/Gallery_003.jpg', aspect: '5/6', moveFactor: 0.6 },
  { id: 4, src: '/images/Gallery_004.jpg', aspect: '1/1', moveFactor: 1.0 },
  { id: 5, src: '/images/Gallery_005.jpg', aspect: '5/4', moveFactor: 0.7 },
  { id: 6, src: '/images/Gallery_006.jpg', aspect: '3/4', moveFactor: 0.8 },
]

const POSITIONS: Array<{
  top?: string; bottom?: string
  left?: string; right?: string
  width: string; parallaxFactor: number
}> = [
  { top: '0%',    left: '0%',  width: '17%', parallaxFactor: 0.8 },
  { top: '2%',    left: '40%', width: '34%', parallaxFactor: 0.9 },
  { top: '5%',    right: '0%', width: '17%', parallaxFactor: 0.6 },
  { top: '42%',   left: '19%', width: '34%', parallaxFactor: 1.0 },
  { bottom: '0%', left: '0%',  width: '25%', parallaxFactor: 0.7 },
  { bottom: '0%', right: '0%', width: '17%', parallaxFactor: 0.8 },
]

// Max pixel offset at screen edge
const MAX_OFFSET = 28

function ParallaxItem({
  src, aspect, pos, moveFactor, mouseX, mouseY,
}: {
  src: string; aspect: string
  pos: typeof POSITIONS[number]
  moveFactor: number
  mouseX: ReturnType<typeof useSpring>
  mouseY: ReturnType<typeof useSpring>
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scrollY = useTransform(scrollYProgress, [0, 1], [`${pos.parallaxFactor * 25}vh`, `${-pos.parallaxFactor * 25}vh`])

  // Cursor-driven offset — opposite direction, scaled by moveFactor
  const x = useTransform(mouseX, (v: number) => -v * MAX_OFFSET * moveFactor)
  const cursorY = useTransform(mouseY, (v: number) => -v * MAX_OFFSET * moveFactor)

  return (
    <motion.div
      ref={ref}
      style={{
        position: 'absolute',
        top: pos.top, bottom: pos.bottom,
        left: pos.left, right: pos.right,
        width: pos.width,
        y: scrollY,
        x,
        pointerEvents: 'none',
      }}
    >
      {/* Second motion.div applies cursor Y independently */}
      <motion.div style={{ y: cursorY }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: aspect, overflow: 'hidden' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  // Normalised cursor position: -1 to +1 from centre
  const rawMouseX = useMotionValue(0)
  const rawMouseY = useMotionValue(0)
  // Spring for smooth lag — stiffness/damping controls how floaty it feels
  const mouseX = useSpring(rawMouseX, { stiffness: 60, damping: 20 })
  const mouseY = useSpring(rawMouseY, { stiffness: 60, damping: 20 })

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [modalOpen])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setCursorPos({ x: e.clientX, y: e.clientY })
    // Normalise to -1 … +1
    rawMouseX.set((e.clientX - rect.left) / rect.width * 2 - 1)
    rawMouseY.set((e.clientY - rect.top) / rect.height * 2 - 1)
  }, [rawMouseX, rawMouseY])

  const handleMouseLeave = useCallback(() => {
    setCursorVisible(false)
    rawMouseX.set(0)
    rawMouseY.set(0)
  }, [rawMouseX, rawMouseY])

  return (
    <>
      {/* Gap from Architecture section */}
      <div style={{ height: '8rem', background: '#fff' }} />

      <section
        ref={sectionRef}
        id="gallery"
        onClick={() => setModalOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          width: '100%',
          height: '100svh',
          minHeight: 700,
          background: '#000',
          color: '#fff',
          overflow: 'hidden',
          cursor: 'none', // hide default cursor over section
        }}
      >
        {/* Mosaic images */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {IMAGES.map((img, i) => (
            <ParallaxItem
              key={img.id}
              src={img.src}
              aspect={img.aspect}
              pos={POSITIONS[i]}
              moveFactor={img.moveFactor}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>

        {/* Title + photo count */}
        <div style={{
          position: 'absolute', bottom: '22%', left: 0, right: 0,
          zIndex: 10, display: 'flex', alignItems: 'baseline',
          gap: '2rem', padding: '0 4rem', pointerEvents: 'none',
        }}>
          <div style={{ flex: '0 0 25%' }} />
          <h2 style={{
            fontSize: 'clamp(5rem, 9vw, 12rem)', fontWeight: 600,
            letterSpacing: '0.01em', textTransform: 'uppercase',
            lineHeight: 1, margin: 0, color: '#fff',
          }}>
            Gallery
          </h2>
          <p style={{
            fontSize: '1.1rem', letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.6)', whiteSpace: 'nowrap',
            alignSelf: 'flex-end', paddingBottom: '0.8rem',
          }}>
            /11 photos
          </p>
        </div>

        {/* Custom cursor — "VIEW →" follows mouse */}
        <AnimatePresence>
          {cursorVisible && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed',
                left: cursorPos.x,
                top: cursorPos.y,
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1rem 1.8rem',
                border: '1px solid rgba(255,255,255,0.5)',
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(4px)',
                color: '#fff',
                fontSize: '1.1rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                whiteSpace: 'nowrap',
              }}
            >
              View
              <SvgIcon id="arrow-right" width={7} height={12} style={{ color: '#fff' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── Gallery Modal — split layout ── */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 500,
              display: 'flex',
            }}
          >
            {/* LEFT — fixed black panel */}
            <div style={{
              width: '30%', flexShrink: 0,
              background: '#000',
              position: 'relative',
              height: '100dvh',
              display: 'flex', flexDirection: 'column',
            }}>
              {/* Close */}
              <button
                onClick={(e) => { e.stopPropagation(); setModalOpen(false) }}
                style={{
                  position: 'absolute', top: '3.2rem', left: '3.2rem',
                  width: 48, height: 48,
                  border: '1px solid rgba(255,255,255,0.35)',
                  background: 'transparent', color: '#fff',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <SvgIcon id="close" width={16} height={16} />
              </button>

              {/* GALLERY title — vertically centred */}
              <div style={{
                position: 'absolute', top: '50%', left: '3.2rem',
                transform: 'translateY(-50%)',
              }}>
                <p style={{
                  fontSize: 'clamp(2.8rem, 3.5vw, 5rem)', fontWeight: 600,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  color: '#fff', margin: 0, lineHeight: 1,
                }}>
                  Gallery
                </p>
                <div style={{ marginTop: '1.6rem', width: '80%', height: 1, background: 'rgba(255,255,255,0.2)' }} />
              </div>
            </div>

            {/* RIGHT — scrollable images, isolated from page scroll */}
            <div
              style={{
                flex: 1,
                height: '100dvh',
                overflowY: 'scroll',
                background: '#111',
                // isolate scroll from page
                overscrollBehavior: 'contain',
              }}
              onWheel={e => e.stopPropagation()}
            >
              {IMAGES.map((img, i) => (
                <div key={img.id} style={{ position: 'relative', width: '100%' }} className="gallery-modal-item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={`Gallery photo ${i + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <div className="gallery-modal-overlay" style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0)', transition: 'background 0.3s ease',
                    pointerEvents: 'none',
                  }}>
                    <div className="gallery-modal-plus" style={{
                      width: 48, height: 48,
                      border: '1px solid rgba(255,255,255,0.7)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      opacity: 0, transition: 'opacity 0.3s ease',
                      color: '#fff', fontSize: '2.4rem', fontWeight: 300,
                    }}>+</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-modal-item:hover .gallery-modal-overlay { background: rgba(0,0,0,0.25) !important; }
        .gallery-modal-item:hover .gallery-modal-plus { opacity: 1 !important; }
      `}</style>
    </>
  )
}
