import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PortfolioHero from '@/app/components/portfolio/PortfolioHero'
import PortfolioBrochure from '@/app/components/portfolio/PortfolioBrochure'
import PortfolioInfo from '@/app/components/portfolio/PortfolioInfo'
import PortfolioGallery from '@/app/components/portfolio/PortfolioGallery'
import PortfolioImageRow from '@/app/components/portfolio/PortfolioImageRow'

export const metadata = {
  title: 'Satyam Surya Manhattan | Portfolio',
  description: 'Discover the elegance and sophistication of Satyam Surya Manhattan',
}

export default function SatyamSuryaManhattanPage() {
  return (
    <>
      <Header />
      <main>
        <PortfolioHero
          title="SATYAM SURYA MANHATTAN"
          imageSrc="/satyam-surya-manhattan/ssm 01.jpg"
          imageAlt="Satyam Surya Manhattan - Elegant lifestyle"
        />
        <PortfolioBrochure
          imageSrc="/satyam-surya-manhattan/ssm 02.png"
          imageAlt="Satyam Surya Manhattan Brochure"
        />
        <PortfolioInfo
          location="@mumbai"
          projectType={`LUXURIOUS\n3BHK APARTMENT`}
          client="SATYAM GROUP"
          title="Satyam Surya Manhattan"
          description={[
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
            "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
          ]}
        />
        
        {/* Image Gallery Section */}
        <section style={{padding: '8rem 8rem' }}>
          <div style={{ maxWidth: '1600px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            {/* Single Image - ssm 03 */}
            <PortfolioGallery
              images={[
                { src: '/satyam-surya-manhattan/ssm 03.jpg', alt: 'Satyam Surya Manhattan Interior 1' },
              ]}
            />
            
            {/* Row of 3 Images - ssm 04, 05, 06 */}
            <PortfolioImageRow
              images={[
                { src: '/satyam-surya-manhattan/ssm 04.jpg', alt: 'Satyam Surya Manhattan Interior 2' },
                { src: '/satyam-surya-manhattan/ssm 05.jpg', alt: 'Satyam Surya Manhattan Interior 3' },
                { src: '/satyam-surya-manhattan/ssm 06.png', alt: 'Satyam Surya Manhattan Interior 4' },
              ]}
            />
            
            {/* Remaining Single Images - ssm 07 to 12 */}
            <PortfolioGallery
              images={[
                { src: '/satyam-surya-manhattan/ssm 07.jpg', alt: 'Satyam Surya Manhattan Interior 5' },
                { src: '/satyam-surya-manhattan/ssm 08.jpg', alt: 'Satyam Surya Manhattan Interior 6' },
                { src: '/satyam-surya-manhattan/ssm 09.jpg', alt: 'Satyam Surya Manhattan Interior 7' },
                { src: '/satyam-surya-manhattan/ssm 10.jpg', alt: 'Satyam Surya Manhattan Interior 8' },
                { src: '/satyam-surya-manhattan/ssm 11.jpg', alt: 'Satyam Surya Manhattan Interior 9' },
                { src: '/satyam-surya-manhattan/ssm 12.jpg', alt: 'Satyam Surya Manhattan Interior 10' },
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
