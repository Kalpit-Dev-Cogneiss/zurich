import type { Metadata } from 'next'
import './globals.css'
import Preloader from '@/app/components/ui/Preloader'
import SmoothScroll from '@/app/components/ui/SmoothScroll'
import ScrollToTop from '@/app/components/ui/ScrollToTop'
import ScrollSnap from '@/app/components/ui/ScrollSnap'

export const metadata: Metadata = {
  title: 'Business class apartments Zorge 9 | Luxury Real Estate',
  description:
    'Zorge 9 is an exclusive complex of New York-style apartments in the prestigious Khodynka district. Luxurious interiors, five-star hotel service, private park, fitness center for residents.',
  metadataBase: new URL('https://zorge9.estate'),
  openGraph: {
    type: 'website',
    title: 'Business class apartments Zorge 9 | Luxury Real Estate',
    description:
      'Zorge 9 — an exclusive complex of New York-style apartments. Luxurious interiors, five-star hotel service, private park, fitness center.',
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
