import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import StackReveal from '@/app/components/ui/StackReveal'
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
import Technologies from '@/app/components/sections/Technologies'
import IndiaMap from '@/app/components/sections/IndiaMap'
import PageCTA from '@/app/components/ui/PageCTA'
import Penthouses from './components/sections/Penthouses'
import { getHomeBrochureImages } from '@/app/lib/homeBrochure'

export default function Home() {
  const homeBrochureImages = getHomeBrochureImages()

  return (
    <>
      <Header />
      <main>
        <StackReveal zIndex={1}><Hero /></StackReveal>
        <StackReveal zIndex={2}><About /></StackReveal>
        <StackReveal zIndex={3}><Location brochureImages={homeBrochureImages} /></StackReveal>
        <StackReveal zIndex={4}><Panorama /></StackReveal>
        <StackReveal zIndex={5}><Architecture /></StackReveal>
        <StackReveal zIndex={6}><Gallery /></StackReveal>
        <StackReveal zIndex={7}><DailySchedule /></StackReveal>
        <div style={{ position: 'relative', zIndex: 8, background: '#000', padding: '40px', paddingBottom: 'calc(40px + 2rem)' }}>
            <h3 style={{
              fontSize: 'clamp(2rem, 3vw, 3.5rem)',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: '1rem',
            }}>
              ALL IT TAKES TO STAND APART
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 1.1vw, 1.3rem)',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 640,
              lineHeight: 1.6,
              letterSpacing: '0.02em',
              margin: 0,
            }}>
              We name it. Brand it. Launch it. Make the market notice.
              One sharp idea runs through every piece of communication.
              Creating a brand buyers recognise, remember and respond to.
            </p>
          </div>
        <Advantages />
        <Fitness />
        <Technologies />
        {/* <div style={{ position: 'relative', zIndex: 12, background: '#000', padding: '10rem 4rem' }}>
            <h3 style={{
              fontSize: 'clamp(2rem, 3vw, 3.5rem)',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              margin: 0,
              marginBottom: '2rem',
            }}>
              Our Kind of People
            </h3>
            <p style={{
              fontSize: 'clamp(1.1rem, 1.3vw, 1.6rem)',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 780,
              lineHeight: 1.7,
              letterSpacing: '0.02em',
              margin: 0,
            }}>
              We&apos;ve seen markets shift, briefs evolve and trends disappear. Experience
              keeps us ahead; expertise makes every move count. This is a team that knows
              realty, knows its craft and has zero patience for average.
            </p>
          </div> */}
        <StackReveal zIndex={13}><IndiaMap /></StackReveal>
        <StackReveal zIndex={14}><Penthouses /></StackReveal>
        {/* <StackReveal zIndex={15}>
          <PageCTA
            eyebrow="A compelling position. A powerful story. A brand built to be chosen."
            heading="Don't Just Launch Your Next Project. Make It Arrive."
            buttonLabel="Let's Talk Realty"
            href="/contact"
          />
        </StackReveal> */}
      </main>
      <Footer />
    </>
  )
}
