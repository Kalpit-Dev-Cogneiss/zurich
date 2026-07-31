import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import StackReveal from '@/app/components/ui/StackReveal'
import Marquee from '@/app/components/ui/Marquee'
import ContactMain from '@/app/components/contact/ContactMain'
import ContactForm from '@/app/components/contact/ContactForm'
import { pageSeo } from '@/app/lib/seoData'

export const metadata = {
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  keywords: pageSeo.contact.keywords,
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <StackReveal zIndex={1}><ContactMain /></StackReveal>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <ContactForm />
        </div>
        <div style={{ background: '#000', padding: '6rem 0' }}>
          <Marquee
            items={["Let's talk", 'New project', "Let's talk", 'New launch']}
            reverse
            itemStyle={{
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,255,255,0.5)',
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
