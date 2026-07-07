import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Hero from '@/app/components/sections/Hero'
import About from '@/app/components/sections/About'
import Location from '@/app/components/sections/Location'
import Panorama from '@/app/components/sections/Panorama'
import Architecture from '@/app/components/sections/Architecture'
import Gallery from '@/app/components/sections/Gallery'
import DailySchedule from '@/app/components/sections/DailySchedule'
import Advantages from '@/app/components/sections/Advantages'
import Fitness from '@/app/components/sections/Fitness'
import Infrastructure from '@/app/components/sections/Infrastructure'
import Park from '@/app/components/sections/Park'
import Apartments from '@/app/components/sections/Apartments'
import Technologies from '@/app/components/sections/Technologies'
import Penthouses from '@/app/components/sections/Penthouses'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Location />
        <Panorama />
        <Architecture />
        <Gallery />
        <DailySchedule />
        <div style={{ marginBottom: '2rem', padding: '40px' }}>
            <h3 style={{
              fontSize: 'clamp(2rem, 3vw, 3.5rem)',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: '1rem',
            }}>
              Our Services
            </h3>
          </div>        
        <Advantages />
        <Fitness />
        {/* Sections after Fitness need z-index to scroll over the fixed Fitness panel */}
        <div style={{ position: 'relative', zIndex: 20 }}>
          <Technologies />
          <Apartments />
          <Penthouses />
        </div>
      </main>
      <Footer />
    </>
  )
}
