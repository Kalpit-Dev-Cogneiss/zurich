'use client'
import { useState } from 'react'
import India from '@react-map/india'

// Cities with their approximate positions on the map (percentage based on actual geography)
const CITIES = [
  { name: 'Mumbai', state: 'Maharashtra', projects: 12, x: 16, y: 58 },
  { name: 'Delhi', state: 'Delhi', projects: 8, x: 30.5, y: 26 },
  { name: 'Bangalore', state: 'Karnataka', projects: 15, x: 31, y: 78 },
  { name: 'Hyderabad', state: 'Telangana', projects: 10, x: 37, y: 62 },
  { name: 'Chennai', state: 'Tamil Nadu', projects: 7, x: 41, y: 80 },
  { name: 'Kolkata', state: 'West Bengal', projects: 6, x: 69, y: 46 },
  { name: 'Pune', state: 'Maharashtra', projects: 9, x: 19, y: 59 },
  { name: 'Ahmedabad', state: 'Gujarat', projects: 5, x: 17, y: 46 },
  { name: 'Vadodara', state: 'Gujarat', projects: 4, x: 20, y: 50 },
]

export default function IndiaMap() {
  const [activeCity, setActiveCity] = useState<string | null>(null)

  return (
    <section
      id="india-map"
      style={{
        background: '#000',
        color: '#fff',
        padding: '10rem 5.6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 4vw, 5rem)',
              fontWeight: 600,
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}
          >
            The Map Of Our Work
          </h2>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 1.5vw, 1.6rem)',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '0.05em',
            }}
          >
            Across India, we&apos;ve helped real estate projects find their position, voice and
            market presence. Different cities. Different challenges. One standard of work.
          </p>
        </div>

        {/* Map Container with City Markers */}
        <div
          style={{
            position: 'relative',
            maxWidth: 800,
            margin: '0 auto 6rem',
          }}
        >
          {/* India Map - No interaction */}
          <India
            type="select-single"
            size={800}
            mapColor="#1a1a1a"
            strokeColor="rgba(255,255,255,0.1)"
            strokeWidth={1}
            hoverColor="#1a1a1a"
            selectColor="#1a1a1a"
            disableClick={true}
            disableHover={true}
            hints={false}
          />

          {/* City Markers Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
            }}
          >
            {CITIES.map((city) => {
              const isActive = activeCity === city.name
              return (
                <div
                  key={city.name}
                  style={{
                    position: 'absolute',
                    left: `${city.x}%`,
                    top: `${city.y}%`,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'auto',
                    zIndex: isActive ? 10 : 5,
                  }}
                  onMouseEnter={() => setActiveCity(city.name)}
                  onMouseLeave={() => setActiveCity(null)}
                >
                  {/* Dot Marker */}
                  <div
                    style={{
                      width: isActive ? '16px' : '12px',
                      height: isActive ? '16px' : '12px',
                      borderRadius: '50%',
                      background: isActive ? '#000' : '#fff',
                      border: '2px solid rgba(255,255,255,0.9)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: isActive
                        ? '0 0 20px rgba(255,255,255,0.7)'
                        : '0 0 10px rgba(255,255,255,0.4)',
                    }}
                  />

                  {/* City Label with Line */}
                  <div
                    style={{
                      position: 'absolute',
                      left: city.x > 50 ? 'auto' : '50%',
                      right: city.x > 50 ? '50%' : 'auto',
                      top: isActive ? '-55px' : '-45px',
                      transform: city.x > 50 ? 'translateX(50%)' : 'translateX(-50%)',
                      opacity: isActive ? 1 : 0.85,
                      transition: 'all 0.3s ease',
                      pointerEvents: 'none',
                    }}
                  >
                    {/* Connecting Line */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-35px',
                        left: '50%',
                        width: '1px',
                        height: '25px',
                        background: isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.4)',
                        transform: 'translateX(-50%)',
                      }}
                    />

                    {/* Label Box */}
                    <div
                      style={{
                        background: isActive ? '#fff' : 'rgba(0,0,0,0.95)',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        border: `1px solid ${isActive ? '#fff' : 'rgba(255,255,255,0.25)'}`,
                        whiteSpace: 'nowrap',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '0.95rem',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                          marginBottom: '0.2rem',
                          color: isActive ? '#000' : '#fff',
                        }}
                      >
                        {city.name}
                      </p>
                      {/* <p
                        style={{
                          fontSize: '0.75rem',
                          color: 'rgba(255,255,255,0.8)',
                        }}
                      >
                        {city.projects} Projects
                      </p> */}
                    </div>
                  </div>

                  {/* Pulse Animation */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: '#fff',
                        opacity: 0,
                        animation: 'pulse 2s infinite',
                        pointerEvents: 'none',
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Pulse Animation Keyframes */}
      <style>{`
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          #india-map > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}
