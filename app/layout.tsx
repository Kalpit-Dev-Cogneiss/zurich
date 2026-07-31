import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Preloader from '@/app/components/ui/Preloader'
import SmoothScroll from '@/app/components/ui/SmoothScroll'
import ScrollToTop from '@/app/components/ui/ScrollToTop'
import ScrollSnap from '@/app/components/ui/ScrollSnap'
import { pageSeo } from '@/app/lib/seoData'

// Same GTM container and Google tag (gtag.js) IDs live on zurichgraphics.com.
const GTM_ID = 'GTM-PNFXSXZC'
const GOOGLE_TAG_ID = 'GT-P3MNJNH'

export const metadata: Metadata = {
  title: pageSeo.home.title,
  description: pageSeo.home.description,
  keywords: pageSeo.home.keywords,
  metadataBase: new URL('https://zurichgraphics.com'),
  openGraph: {
    type: 'website',
    title: pageSeo.home.title,
    description: pageSeo.home.description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <Script
        id="google-tag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_TAG_ID}');`}
      </Script>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Preloader />
        <SmoothScroll />
        <ScrollToTop />
        <ScrollSnap />
        {children}
      </body>
    </html>
  )
}
