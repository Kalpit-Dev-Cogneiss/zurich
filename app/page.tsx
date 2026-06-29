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
        <Advantages />
        <Fitness />
        {/* Sections after Fitness need z-index to scroll over the fixed Fitness panel */}
        <div style={{ position: 'relative', zIndex: 20 }}>
          <Infrastructure />
          <Park />
          <Apartments />
          <Technologies />
          <Penthouses />
        </div>
      </main>
      <Footer />
    </>
  )
}
