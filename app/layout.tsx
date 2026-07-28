import type { Metadata } from 'next'
import './globals.css'
import Preloader from '@/app/components/ui/Preloader'
import SmoothScroll from '@/app/components/ui/SmoothScroll'
import ScrollToTop from '@/app/components/ui/ScrollToTop'
import ScrollSnap from '@/app/components/ui/ScrollSnap'

export const metadata: Metadata = {
  title: 'Zurich Graphics | Real Estate Branding, Marketing & Design',
  description:
    "Zurich Graphics is India's premier agency for powerful real estate brands. Over three decades of 360° solutions: branding, marketing strategy, naming, brochures, campaigns and digital experiences, concept to conversion.",
  metadataBase: new URL('https://zurichgraphics.com'),
  openGraph: {
    type: 'website',
    title: 'Zurich Graphics | Real Estate Branding, Marketing & Design',
    description:
      "India's premier agency for powerful real estate brands. 360° solutions: branding, marketing, naming, brochures, campaigns and digital experiences, concept to conversion.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <SmoothScroll />
        <ScrollToTop />
        <ScrollSnap />
        {children}
      </body>
    </html>
  )
}
