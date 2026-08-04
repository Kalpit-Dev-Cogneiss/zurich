export type ProjectCategory = 'residential' | 'commercial' | 'farmhouse' | 'mall' | 'duplex-villa' | 'open-plot' | 'industrial-park' | 'corporate-brochure' | 'campaign'

export interface ProjectData {
  slug: string
  title: string
  location: string
  projectType: string
  client: string
  category: ProjectCategory
  description: string[]
  brochureFolder?: string // folder name under public/portfolio-brochures for the TurnJS flipbook
  images: {
    hero: string
    brochure: string
    single: string
    row: string[]  // Changed to support 2 or 3 images
    remaining: string[]
  }
}

const desc = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
  "It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
]

// Helper function to generate image paths
function createImages(category: string, slug: string, files: {hero: string, brochure: string, single: string, row: string[], remaining: string[]}) {
  const base = `/portfolio/${category}/${slug}`
  return {
    hero: `${base}/${files.hero}`,
    brochure: `${base}/${files.brochure}`,
    single: `${base}/${files.single}`,
    row: files.row.map(f => `${base}/${f}`),
    remaining: files.remaining.map(f => `${base}/${f}`),
  }
}

// RESIDENTIAL PROJECTS
const residentialProjects: ProjectData[] = [
  {
    slug: 'satyam-surya-manhattan',
    title: 'Satyam Surya Manhattan',
    location: '@mumbai',
    projectType: 'Luxurious\n3BHK apartment',
    client: 'Satyam Group',
    category: 'residential',
    description: ["A tall project. A towering tale. Satyam Suryam Manhattan at Mumbai was designed to be lived in, not viewed. We crafted all forms of communication to match the growing heights of the project and the address, grand 3BHK residence living, along with a world of amenities. The launch brochure took buyers on a journey through layers of story, starting from the context of the neighbourhood and ending with the view of the skyline awaiting at the top. Print advertisements, hoarding designs, and overall campaign design ensured that the project had its own unique voice in Mumbai's high-end residential market. The words built desire. The design built stature."],
    brochureFolder: 'Satyam Surya Manhattan',
    images: createImages('residencial-projects', 'satyam-surya-manhattan', {
      hero: 'ssm 01.jpg', brochure: 'ssm 02.png', single: 'ssm 03.jpg',
      row: ['ssm 04.jpg', 'ssm 05.jpg', 'ssm 06.png'],
      remaining: ['ssm 07.jpg', 'ssm 08.jpg', 'ssm 09.jpg', 'ssm 10.jpg', 'ssm 11.jpg', 'ssm 12.jpg']
    }),
  },
  {
    slug: 'vivanta-sky-towers',
    title: 'Vivanta Sky Towers',
    location: '@mumbai',
    projectType: 'Ultra-luxury\nSky residences',
    client: 'Vivanta Group',
    category: 'residential',
    description: desc,
    brochureFolder: 'Vivanta Sky Towers',
    images: createImages('residencial-projects', 'vivanta-sky-towers', {
      hero: 'V1.jpg', brochure: 'V2.png', single: 'V3.jpg',
      row: ['V4.jpg', 'V5.jpg', 'V6.png'],
      remaining: ['V7.jpg', 'V8.jpg', 'V9.jpg', 'V10.jpg', 'V11.jpg']
    }),
  },
  {
    slug: 'festival-vibes',
    title: 'Festival Vibes',
    location: '@ahmedabad',
    projectType: 'Luxurious\nResidential complex',
    client: 'Festival Group',
    category: 'residential',
    description: ["A vibrant location. A more vibrant story. Festival Vibes in Ahmedabad was never intended to be a quiet brochure in a reader's hand. We brought each and every page to life with vibrancy, character and celebration – going from the local context through luxury 3BHK living and beyond into 50+ lifestyle amenities, with vigour and verve. The brochure design achieved the delicate balance of bringing festive spirit to an exclusive residential apartment project that required precise information for its buyers. Campaign creatives, hoardings and social media material conveyed the message of constant festivity as well, providing buyers a powerful emotional push to shortlist this particular property. Illustrations made people smile. Design lent rhythm. Together they transformed a typical residential brochure into a festival of living."],
    brochureFolder: 'festival vibes',
    images: createImages('residencial-projects', 'festival-vibes', {
      hero: 'fv 01.jpg', brochure: 'fv 02.png', single: 'fv 03.jpg',
      row: ['fv 04.jpg', 'fv 05.jpg', 'fv 06.png'],
      remaining: ['fv 07.jpg', 'fv 08.jpg', 'fv 09.jpg', 'fv 10.jpg', 'fv 11.jpg', 'fv 12.jpg']
    }),
  },
  {
    slug: 'the-palatial-gardens',
    title: 'The Palatial Gardens',
    location: '@mumbai',
    projectType: 'Palatial\nGarden residences',
    client: 'Palatial Group',
    category: 'residential',
    description: ["An impressive address. An even more impressive impression. Palatial Gardens in Mumbai was conceived to ensure that luxury would not just be larger than life, but larger than everything else. We ensured that our brochures conveyed the scale, elegance and restrained luxury in majestic architecture, luxury apartments and gardens-inspired living. The brochure design was crafted to allow an entrance into the address with style, grace and nuance. Our print ads and hoardings followed the same process of creating an entrance for the premium market in Mumbai, targeting those buyers that prefer their luxury in the form of grandeur over style. We created visuals of grandeur. We provided words to refine that grandeur. Every turn of the page felt like an entrance into a home that spoke the ancient language of luxury."],
    brochureFolder: 'THE PALATIAL GARDENS',
    images: createImages('residencial-projects', 'the-palatial-gardens', {
      hero: 'T1.jpg', brochure: 'T2.png', single: 'T3.jpg',
      row: ['T4.jpg', 'T5.jpg', 'T6.png'],
      remaining: ['T7.jpg', 'T8.jpg', 'T9.jpg', 'T10.jpg', 'T11.jpg']
    }),
  },
  {
    slug: 'sanskruti-ryan-residency',
    title: 'Sanskruti Ryan Residency',
    location: '@mumbai',
    projectType: 'Contemporary\nResidential living',
    client: 'Sanskruti Group',
    category: 'residential',
    description: ["A building soaring high. A narrative grounded in nature. This is what Sanskruti Ryan Residency offered with its blend of height and ecology. Our entire design was centered around wind, sun and soil – navigating through 2 & 3BHK residential apartments, vertical gardens and rooftop spaces with freshness, fluidity and ease. Designing the brochures for the project meant making use of imagery that is naturalistic and ample whitespace, thus making the ecology of the project come alive in a real sense. Campaign and hoarding design helped position the project among an emerging category of urban buyers looking for the comfort of green living along with the modern day convenience of a residential apartment property. Let nature talk through words. And give it space in design. Together this created green living raised high above the clouds."],
    brochureFolder: 'SANSKRUTI RYAN RESIDENCY',
    images: createImages('residencial-projects', 'sanskruti-ryan-residency', {
      hero: 'srr 01.jpg', brochure: 'srr 02.png', single: 'srr 03.jpg',
      row: ['srr 04.jpg', 'srr 05.jpg', 'srr 06.png'],
      remaining: ['srr 07.jpg', 'srr 08.jpg', 'srr 09.jpg', 'srr 10.jpg', 'srr 11.jpg', 'srr 12.jpg']
    }),
  },
  {
    slug: 'palladium-highstreet',
    title: 'Palladium Highstreet',
    location: '@silvassa',
    projectType: 'Premium\nResidential space',
    client: 'Palladium Group',
    category: 'residential',
    description: ["The magnificence of ancient Rome. The grandeur of modern day. That was the vision for Palladium Highstreet. Everything we created revolved around the two aspects, taking you on a journey through bright shops, showrooms, palatial apartments and lifestyles spaces in all their majestic glory. Since it was a mixed-use development, there was no way we could change the voice for residential, retail and business segments in the brochure. So we created one story and then gave the space to the different sections for information. The design of the campaign, hoardings and print media has put Palladium Highstreet right up there in the Silvassa skyline as a landmark, rather than just another mixed-use development. The architecture had the royalty. The design lent it a modern beat. And the combination resulted in an address built to dominate a destination."],
    brochureFolder: 'Palladium Highstreet',
    images: createImages('residencial-projects', 'palladium-highstreet', {
      hero: 'P1.jpg', brochure: 'P2.png', single: 'P3.jpg',
      row: ['P4.jpg', 'P5.jpg', 'P6.jpg'],
      remaining: ['P7.jpg', 'P8.jpg', 'P9.jpg', 'P10.jpg', 'P11.jpg', 'P12.jpg']
    }),
  },
  {
    slug: 'keystone-skyvillas-xl',
    title: 'Keystone Skyvillas XL',
    location: '@mumbai',
    projectType: 'Exclusive\nSky villas',
    client: 'Keystone Group',
    category: 'residential',
    description: ["A villa-sized vision. A story with no ceiling. Keystone SkyVillas XL reimagined exclusivity at a higher altitude. We opened every page to more, moving through expansive residences, sky-high privacy and open-air living with scale, freedom and finesse. The brochure design gave every villa its own room on the page, matching the layout logic to the openness of the actual homes. Print, hoardings and campaign design positioned the project for buyers looking at premium sky residences and luxury villa formats side by side, and choosing the one that combined both. The layouts created openness. The words gave it altitude. Together, they turned the luxury of a villa into a life above the city, a way of living that answers the question ultra-luxury buyers now put to every project: what makes this one worth the height?"],
    brochureFolder: 'keystone skyvillas xl',
    images: createImages('residencial-projects', 'keystone-skyvillas-xl', {
      hero: 'K1.jpg', brochure: 'K2.png', single: 'K3.jpg',
      row: ['K4.jpg', 'K5.jpg', 'K6.png'],
      remaining: ['K7.jpg', 'K8.jpg', 'K9.jpg', 'K10.jpg', 'K11.jpg']
    }),
  },
  {
    slug: 'vraj-hillview',
    title: 'Vraj Hillview',
    location: '@mumbai',
    projectType: 'Scenic\nHillside residences',
    client: 'Vraj Group',
    category: 'residential',
    description: ["A higher vantage point. An even wider vision. Vraj Hillview was designed for lives and ambitions ready to rise. We let every page open to possibility, moving through hill-facing residential apartment homes, vibrant commercial spaces, thoughtful amenities and a fast-growing address with energy, balance and aspiration. The mixed-use scope meant the brochure had to hold two audiences at once: end-users looking for a home with a view, and investors reading the location's growth trajectory. Campaign design, hoardings and print advertising gave the project a consistent voice across both audiences, positioning Vraj Hillview as a scenic address with commercial momentum, not a scenic address alone. The views created desire. The design built momentum. Together, they turned a mixed-use development into a destination above the ordinary, a place people arrive at for the view and stay for the value."],
    brochureFolder: 'VRAJ HILLVIEW',
    images: createImages('residencial-projects', 'vraj-hillview', {
      hero: 'V1.jpg', brochure: 'V2.png', single: 'V3.jpg',
      row: ['V4.jpg', 'V5.jpg', 'V6.png'],
      remaining: ['V7.jpg', 'V8.jpg', 'V9.jpg', 'V10.jpg', 'V11.jpg']
    }),
  },
  // NEW PROJECTS
  {
    slug: 'aatlantis-the-castle',
    title: 'Aatlantis The Castle',
    location: '@mumbai',
    projectType: 'Majestic\nCastle residences',
    client: 'Aatlantis Group',
    category: 'residential',
    description: ["A residence with the presence of a castle. A story built to command attention. Aatlantic The Castle brought old-world majesty into a distinctly modern way of living. We shaped every page with grandeur, moving through stately architecture, lavish residences and lifestyle spaces with drama, detail and distinction. The brochure design carried the weight of the project's positioning: heavy imagery, disciplined layouts and typography with a sense of ceremony, so the reader felt the stature of the residence before the specifications were even reached. Campaign design and hoardings extended the same authority into the market, giving the project a distinct voice in the luxury residential apartment category, where most projects reach for the same visual vocabulary of \"premium.\" The visuals created awe. The words gave it authority. Together, they gave modern luxury the stature of a castle, a home for buyers who want their address to speak with the weight of history."],
    brochureFolder: 'ATC',
    images: createImages('residencial-projects', 'aatlantis the castle', {
      hero: 'a1.jpg', brochure: 'a2.png', single: 'a3.jpg',
      row: ['a4.jpg', 'a5.jpg', 'a6.png'],
      remaining: ['a7.jpg', 'a8.jpg', 'a9.jpg', 'a10.jpg']
    }),
  },

  {
    slug: 'greenleaf-heritage',
    title: 'Greenleaf Heritage',
    location: '@mumbai',
    projectType: 'Eco-friendly\nHeritage homes',
    client: 'Greenleaf Group',
    category: 'residential',
    description: ["A soulful Roman. A better way of life. Green Leaf Heritage transformed classic grandeur into a more responsible generation. We gave life to each page with classic architecture, spacious villas and eco-friendly lifestyle that struck a balance between tradition and sustainability, royalty and responsibility. The brochure design was inspired by classic typography, columns and archways followed by greens and daylight photography that told the story of sustainability without being preachy. The campaign design, print media and hoardings communicated the project to potential buyers who view heritage architecture and eco-friendliness as two values that complement rather than contradict each other. The design respected tradition. The concept was futuristic. They both created homes that were to have a less environmental impact while leaving behind a legacy that a generation of buyers saw as compatible with the two values of luxury and responsibility."],
    brochureFolder: 'greenleaf heritage',
    images: createImages('residencial-projects', 'greenleaf heritage', {
      hero: 'g1.jpg', brochure: 'g2.png', single: 'g3.jpg',
      row: ['g4.jpg', 'g5.jpg', 'g6.png'],
      remaining: ['g7.jpg', 'g8.jpg', 'g9.jpg', 'g10.jpg', 'g11.jpg', 'g12.jpg', 'g13.jpg']
    }),
  },

  {
    slug: 'vivera',
    title: 'Vivera',
    location: '@mumbai',
    projectType: 'Modern\nLiving experience',
    client: 'Vivera Group',
    category: 'residential',
    description: ["A modern address. A tale that speaks to the current age. The experience of modern living was brought alive in Vivera, which added its own beat to contemporary living in Mumbai. Each page was infused with flow, as the reader travelled through the thoughtfully planned residential apartment homes, elegant spaces, and convenient everyday amenities with ease, passion, and elegance. The design of the brochure favored the editorial style over the densely graphic approach typically used in real estate brochures, in response to the contemporary reading habits of modern buyers: quick, visual, and limited to information that captures their attention. The campaign design, hoardings, and online marketing materials spoke in the same measured language as the brochure, establishing the project as belonging in the mid-to-premium residential apartments of Mumbai, in tune with real life experiences."],
    images: createImages('residencial-projects', 'VIVERA', {
      hero: 'V1.jpg', brochure: 'V2.png', single: 'V3.jpg',
      row: ['V4.jpg', 'V5.jpg', 'V6.png'],
      remaining: ['V7.jpg', 'V8.jpg', 'V9.jpg', 'V10.jpg']
    }),
  },
  {
    slug: 'vyom-by-balajee',
    title: 'Vyom By Balajee',
    location: '@mumbai',
    projectType: 'Celestial\nResidential tower',
    client: 'Balajee Group',
    category: 'residential',
    description: ["It was named by the sky. We named it a universe. Vyom by Balajee was conceived as a celestial getaway from the quotidian existence. Every page was conceived keeping height, light and sky in mind, transitioning through architectural grandeur, fine residences and rooftop enjoyment with tranquility, focus and wonderment. The tone of the brochure design revolved around the concept of celesticity without making it seem like a gimmick. Deep hues and accurate typographies ensured that the tone was aspirational and realistic simultaneously. Campaign design, hoardings and print media kept the tone consistent in the market place. This is an apartment home in which one would want to live, and not read about. The design created ambiance. The words created aspiration."],
    brochureFolder: 'VYOM BY BALAJEE',
    images: createImages('residencial-projects', 'vyom by balajee', {
      hero: 'v1.jpg', brochure: 'v2.png', single: 'v3.jpg',
      row: ['v4.jpg', 'v5.jpg', 'v6.png'],
      remaining: ['v7.jpg', 'v8.jpg', 'v9.jpg', 'v10.jpg', 'v11.jpg', 'v12.jpg']
    }),
  },
]

// COMMERCIAL PROJECTS
const commercialProjects: ProjectData[] = [
  {
    slug: 'krupa-aspire',
    title: 'Krupa Aspire',
    location: '@mumbai',
    projectType: 'Commercial\nHub',
    client: 'Krupa Group',
    category: 'commercial',
    description: ["Krupa Aspire had aspirations in its name. We ensured it got reflected in each and every form of communication. The concept was created for those who saw commercial space not just as real estate but as possibilities and an opportunity. The brochure had an elegant and confident look to it. It talked straight to entrepreneurs, business owners and retail investors, the audiences any commercial property requires attracting before launch. The campaign design, hoarding and print ads maintained this tone through the entire project launch. It did not talk just about architecture. It spoke of business value. Clear in thought. Confident in expression. The outcome? A commercial property that looked like a launch pad, a property ready for business even before the shutters came down."],
    brochureFolder: 'KRUPA ASPIRE',
    images: createImages('commercial-projects', 'krupa-aspire', {
      hero: '01.jpg', brochure: '02.png', single: '03.png',
      row: ['04.png', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg']
    }),
  },
  {
    slug: 'rk-landmark',
    title: 'RK Landmark',
    location: '@mumbai',
    projectType: 'Commercial\nLandmark',
    client: 'RK Group',
    category: 'commercial',
    description: ["RK Landmark was made keeping in mind companies that recognize the power that an address holds. For the project we provided a strong design language as well as a commercial message, translating built spaces into brand equity and locations into business opportunity. Strong visuals created stature, while the clear messaging highlighted its potential. The brochure design took prospective tenants and investors on a journey from location, layout, business benefits to future value in one go without getting lost in the deluge of information like commercial project brochures do. Design of the campaign, hoardings and print advertising all came under this strong tone to position the address as RK Landmark, a project that would sell itself once the companies see the potential."],
    brochureFolder: 'RK Landmark',
    images: createImages('commercial-projects', 'rk-landmark', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg']
    }),
  },
  {
    slug: 'skyline-excellent',
    title: 'Skyline Excellent',
    location: '@mumbai',
    projectType: 'Commercial\nExcellence',
    client: 'Skyline Group',
    category: 'commercial',
    description: ["The name spoke for itself. It had excellence as its core value. Skyline Excellent needed communication that matched its ambitions of being able to attract businesses. We therefore developed an innovative visual vocabulary characterized by clarity, boldness and commercial nature. The composition of the designs lent the project a sense of prestige and the exacting messages highlighted its competitive advantage. The brochure design contained a rhythm of visuals suitable for a boardroom presentation and the collateral could be taken to a meeting without any need for explanation. The campaign design, hoardings and print media communication lent the same tone to the market and allowed Skyline Excellent to establish itself in the premium commercial project category. The tone could communicate effectively with the businesses looking forward to their next step and the designs were heavy enough to make them read through."],
    brochureFolder: 'Skyline Excellent',
    images: createImages('commercial-projects', 'skyline-excellent', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg']
    }),
  },
  {
    slug: 'tsl',
    title: 'TSL',
    location: '@mumbai',
    projectType: 'Commercial\nProject',
    client: 'TSL Group',
    category: 'commercial',
    description: ["A commercial identity that could communicate instantly and be remembered was required. This involved combining a bold design with clear messaging and a contemporary voice to transform a concise name into an identity that embodied ambition, credibility and potential. The brochure design was very effective, using powerful typography, structured grids and images that conveyed the essence of the project without resorting to lengthy explanations. This theme carried on through the campaign design, hoardings and print advertising, which all communicated the same message instantly. The voice addressed business people, investors and brands who were looking to take the next step. The end result was a commercial address that already had credibility despite the project being nowhere near completed, with the short name conveying all of its messages."],
    brochureFolder: 'TSL',
    images: createImages('commercial-projects', 'tsl', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg']
    }),
  },
  {
    slug: 'vs-monolith',
    title: 'VS Monolith',
    location: '@mumbai',
    projectType: 'Commercial\nMonolith',
    client: 'VS Group',
    category: 'commercial',
    description: ["VS Monolith was designed to project a look of being established before even the first business set up shop there. The impressive architecture, commercial spaces and location of the site were translated into a language of communication through bold geometrical form and layouts and headlines which talked in the language of ambition. The brochure design set the tone of the corporation right from the start in terms of design, with an accurate, restrained yet confident approach as opposed to the usual extravagant designs which commercial brochures usually have. Design for the campaign and the hoardings helped establish a consistent visual identity through the outdoor media space. The unique geometrical identity and restrained corporate colour palette made one thing certain about VS Monolith, that business belonged there."],
    brochureFolder: 'vs monolith',
    images: createImages('commercial-projects', 'vs-monolith', {
      hero: '01.jpg', brochure: '02.jpg', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg']
    }),
  },
]

// MALL PROJECTS
const mallProjects: ProjectData[] = [
  {
    slug: 'happy-mall',
    title: 'Happy Mall',
    location: '@vadodara',
    projectType: 'Shopping\nMall',
    client: 'Siddheshwar Group',
    category: 'mall',
    description: ["Happy Mall was conceptualized as an entertainment place for Vadodara for shopping, eating, watching and enjoying themselves. Being home to more than 100 outlets including shops, restaurants, gaming area, banqueting facilities, and a six screen multiplex, there were a lot many activities going inside it. Our concept design was inspired by the vibrant and colorful front façade of the Mall, and we incorporated that essence into all our compositions. Bright colors, fun smile icons and energetic headlines helped us create a unique vibe for each individual section. Not only that, even detailed information about the business like leasing plans, floor plans, tenant category was conveyed in such a manner that the investors/tenants could understand what we had to offer, without going through a lot of hassles. We created designs for campaign materials, hoarding and print advertisements that communicated the same happy vibe outside of Vadodara as well."],
    brochureFolder: 'HAPPY MALL',
    images: createImages('mall-projects', 'happy-mall', {
      hero: 'M1.jpg', brochure: 'M2.png', single: 'M3.jpg',
      row: ['M4.jpg', 'M5.jpg', 'M6.png'],
      remaining: ['M7.jpg', 'M8.jpg', 'M9.jpg', 'M10.jpg', 'M11.jpg', 'M12.jpg']
    }),
  },
  {
    slug: 'vcm',
    title: 'Vinod City Mall',
    location: '@mumbai',
    projectType: 'City\nMall',
    client: 'Vinod Group',
    category: 'mall',
    description: ["Vivid blocks of colours, VCM's signature design tool and minimalist compositions brought together shopping, grocery, food, games and entertainment in one story without any congestion. The building itself was allowed to make the first impression, while the layouts, the plans and information about the business were presented in an easy and unpretentious way. A modular grid system was used in designing the brochure so that retail brands, food operators and families visiting the mall would have their sections immediately recognizable, and the information regarding tenant leasing was presented in the same consistent way as information on other pages of the brochure. All this was achieved through the campaign design, hoardings and print advertisement, which continued the same clean and colour-blocked language in the context of the launch of Vinod City Mall and positioned it in the category of mall projects as the address meant for everyday life, not only for weekends. Many experiences. Many reasons to visit. One address connecting them all."],
    brochureFolder: 'Vinod City Mall',
    images: createImages('mall-projects', 'vcm', {
      hero: 'V1.jpg', brochure: 'V2.png', single: 'V3.jpg',
      row: ['V4.jpg', 'V5.jpg', 'V6.png'],
      remaining: ['V8.jpg', 'V9.jpg', 'V10.jpg', 'V11.jpg']
    }),
  },
]

// DUPLEX/VILLA PROJECTS
const duplexVillaProjects: ProjectData[] = [
  {
    slug: 'manogya',
    title: 'Manogya',
    location: '@mumbai',
    projectType: 'Luxury\nDuplex villas',
    client: 'Manogya Group',
    category: 'duplex-villa',
    description: ["Manogya captured the feel of an open villa and elegant style of dual-floor living. For this project, we created visual vocabulary that was grand and sophisticated in scale and backed up by stories which were warm, aspirational, and exclusive. The communication strategy transcended the features to convey freedom, privacy, and the sense of pride associated with a luxury duplex villa. The brochure design had the residential appeal and spoke about the experience of living in a duplex before speaking about the plan. In the campaign design, hoarding design, and print media design, we maintained the same language throughout the launch process and positioned the project for buyers who upgraded from apartments and were looking at buying a villa-format property for the first time. The difference between a luxury duplex villa and a large apartment lies in the way it lives, and our communication was designed to make that difference clear."],
    brochureFolder: 'Manogya',
    images: createImages('duplex-villa-projects', 'manogya', {
      hero: 'manogya_001.jpg', brochure: 'manogya_002.png', single: 'manogya_003.jpg',
      row: ['manogya_004.jpg', 'manogya_005.jpg', 'manogya_006.png'],
      remaining: ['manogya_007.jpg', 'manogya_008.jpg', 'manogya_009.jpg', 'manogya_010.jpg']
    }),
  },
  {
    slug: 'atc',
    title: 'Darshanam Kingsville 2',
    location: '@mumbai',
    projectType: 'Villa\nDevelopment',
    client: 'Darshanam Group',
    category: 'duplex-villa',
    description: ["Kingsville 2 Darshanam needed communication just as extensive as its homes. Making 'Kingdom' the language of the entire project, we brought out the grandeur in every arrival, spacious 3 & 4BHK duplex villa residences, personal gardens, terraces, and more than 20 lifestyle amenities. Ample spaces went hand-in-hand with ample visual space, and meticulous storytelling ensured that every experience was imbued with dignity and grace. The design of the brochure made use of scale as a design element, giving each residence, garden and amenity its own dedicated space instead of cramping it all in a way that reflected how a potential customer would visit a villa project on site. The design of the campaign and hoardings carried forward the royal vocabulary to make Kingsville 2 a duplex villa address for those who cherish their privacy and the story associated with it. A kingdom built for those who feel worthy enough to be in it."],
    brochureFolder: 'Darshanam Kingsville 2',
    images: createImages('duplex-villa-projects', 'atc', {
      hero: 'DARSHANAM KINGSVILLE 2_001.jpg', brochure: 'DARSHANAM KINGSVILLE 2_002.png', single: 'DARSHANAM KINGSVILLE 2_003.jpg',
      row: ['DARSHANAM KINGSVILLE 2_004.jpg', 'DARSHANAM KINGSVILLE 2_005.png'],
      remaining: ['DARSHANAM KINGSVILLE 2_006.jpg', 'DARSHANAM KINGSVILLE 2_007.jpg', 'DARSHANAM KINGSVILLE 2_008.jpg', 'DARSHANAM KINGSVILLE 2_009.jpg', 'DARSHANAM KINGSVILLE 2_010.jpg', 'DARSHANAM KINGSVILLE 2_011.jpg', 'DARSHANAM KINGSVILLE 2_012.jpg']
    }),
  },
  {
    slug: 'keystone-51',
    title: 'Keystone 51',
    location: '@mumbai',
    projectType: 'Duplex\nVillas',
    client: 'Keystone Group',
    category: 'duplex-villa',
    description: ["This project is one which embodies a way of life through its spatial, silent, luminous nature and its privilege of privacy. Its communication has been defined by a vocabulary of quiet distinction, incorporating poise, prelude, essence, enchantment and presence. Each element added another layer to its 51 private villas. Exquisite architecture and refined design coexist along with spacious terraces, landscaping of its periphery and abundant natural light through the power of lyrical communication and visual composition. The design of its brochure reflected the same restraint in all its layout compositions, making sure the villa format spaces get their own breathing room within the brochure pages just like they do in reality. The design of its campaign, hoardings and print media communicated in the same restrained yet powerful way, ensuring the launch of Keystone 51 with an appeal to buyers who associate quietness as the most prominent sign of luxury."],
    brochureFolder: 'KEYSTONE 51',
    images: createImages('duplex-villa-projects', 'keystone-51', {
      hero: 'Keystone 51_001.jpg', brochure: 'Keystone 51_002.png', single: 'Keystone 51_003.jpg',
      row: ['Keystone 51_004.jpg', 'Keystone 51_005.jpg', 'Keystone 51_006.png'],
      remaining: ['Keystone 51_007.jpg', 'Keystone 51_008.jpg', 'Keystone 51_009.jpg', 'Keystone 51_010.jpg']
    }),
  },
  {
    slug: 'oceanic-villa',
    title: 'Oceanic Villa',
    location: '@mumbai',
    projectType: 'Oceanfront\nVilla estates',
    client: 'Oceanic Group',
    category: 'duplex-villa',
    description: ["Oceanic Villa required an innovative language that was expansive, elegant, and serene. It was inspired by the vastness of the ocean, merging fluidity of design, vast compositions and storytelling to create a sense of living without any boundaries. Privacy, elegance and exclusiveness of being an owner of an independent villa were communicated through all the elements. Open spaces were captured in open layouts, while refined details created the feeling of exclusiveness. In the design of the brochure we used a limited colour palette of blues and neutrals, allowing the vastness of the villa layout to speak for itself. Hoarding and print media followed the same design principle, communicating Oceanic Villa in the way that it was intended, for buyers seeking an independent villa that is private without being isolated. What we came up with was a project that communicated in a pace of its own, deep and unhurried, like water."],
    brochureFolder: 'Oceanic Villa',
    images: createImages('duplex-villa-projects', 'oceanic-villa', {
      hero: 'o1.jpg', brochure: 'o2.png', single: 'o3.jpg',
      row: ['o4.jpg', 'o5.jpg', 'o6.png'],
      remaining: ['o7.jpg', 'o8.jpg', 'o9.jpg', 'o10.jpg']
    }),
  },
]

// OPEN PLOT PROJECTS
const openPlotProjects: ProjectData[] = [
  {
    slug: 'reva-allizza',
    title: 'Reva Allizza',
    location: '@bharuch',
    projectType: 'Open plot\nDevelopment',
    client: 'Reva Group',
    category: 'open-plot',
    description: ["We made the idea of the nest central to the communication, carrying it through airy compositions, nature-led storytelling and a warm, aspirational visual language. The narrative moved from Bharuch's connectivity and well-planned internal roads to contemporary villa possibilities, landscaped greens and community spaces. Every element balanced the independence of plot ownership with the comfort of belonging to a peaceful, planned community. The brochure design used soft palettes and generous visual space to reflect the openness of a plotted development, while layout logic kept location advantages, plot sizes and infrastructure information easy to scan. Campaign design, hoardings and print advertising extended the same warm register into the local market, positioning Reva Allizza for buyers looking at open plot investments in the Bharuch region as both a long-term asset and a future home site. A plotted development built to feel like a place, not just a piece of land."],
    brochureFolder: 'reva allizza',
    images: createImages('open-plot-projects', 'reva-allizza', {
      hero: 'r1.jpg', brochure: 'r2.png', single: 'r3.jpg',
      row: ['r4.jpg', 'r5.jpg', 'r6.png'],
      remaining: ['r7.jpg', 'r8.jpg', 'r9.jpg', 'r10.jpg', 'r11.jpg']
    }),
  },
  {
    slug: 'raamah-eldoraa',
    title: 'Raamah Eldoraa',
    location: '@mumbai',
    projectType: 'Premium\nOpen plots',
    client: 'Raamah Group',
    category: 'open-plot',
    description: ["We shaped the project around a language of possibility and lasting value. Expansive compositions reflected the openness of the plotted development, while confident storytelling turned plots, planning and connectivity into a compelling vision of tomorrow. Every creative element carried a sense of aspiration, positioning the project not merely as land to own, but as a foundation for future homes, growth and generational value. The brochure design used wide layouts and strong typography to reinforce the scale of the development, while investment-relevant information such as plot dimensions, road planning and location advantages were presented with the clarity a serious buyer expects. Campaign design, hoardings and print advertising carried the same aspirational tone into the market, positioning Ramah Eldoraa in the open plot category for buyers looking beyond the immediate return to what the land could become in ten years. A plotted development sold on the future, and designed to make that future feel already visible."],
    brochureFolder: 'Raamah Eldoraa',
    images: createImages('open-plot-projects', 'raamah-eldoraa', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg']
    }),
  },
  {
    slug: 'keystone-woods',
    title: 'Keystone Woods',
    location: '@mumbai',
    projectType: 'Woodland\nPlots',
    client: 'Keystone Group',
    category: 'open-plot',
    description: ["Keystone Woods was conceived as quiet luxury shaped through expansive plots, bespoke homes and the unhurried presence of nature. We built its creative language around the world of art, using colour, texture and composition to express every dimension of the experience. Orange became serenity. Green captured nature. Blue reflected the pool and open horizon, while warmer hues brought leisure and indulgence to life. Expressive typography, artistic frames and generous white space gave the communication room to breathe, mirroring the openness of its 14 exclusive plots and green setting. The brochure design was treated as a curated portfolio rather than a sales document, so the reader engaged with the project the way they would with a considered piece of design. Campaign design and hoardings extended the same artistic register into the market, positioning Keystone Woods at the intersection of open plot investment and luxury villa aspiration. Quiet luxury, communicated with the same restraint the project itself was built on."],
    brochureFolder: 'keystone woods',
    images: createImages('open-plot-projects', 'keystone-woods', {
      hero: 'K1.jpg', brochure: 'K2.png', single: 'K3.jpg',
      row: ['K4.jpg', 'K5.jpg', 'K6.png'],
      remaining: ['K7.jpg', 'K8.jpg', 'K9.jpg']
    }),
  },
]

// INDUSTRIAL PARK PROJECTS
const industrialParkProjects: ProjectData[] = [
  {
    slug: 'aatmiya-industrial-park',
    title: 'Aatmiya Industrial Park',
    location: '@mumbai',
    projectType: 'Industrial\nPark development',
    client: 'Aatmiya Group',
    category: 'industrial-park',
    description: ["What began as a complex industrial proposition became a communication experience that felt direct, credible and refreshingly simple. The bold colour palette created instant visibility, while structured layouts made the location, master plan, plot choices and facilities easy to navigate. Every detail was placed with purpose, helping industrial buyers see how their business could fit into the development. Infrastructure was presented as a practical advantage, giving businesses a clearer picture of everyday operations and future expansion. The brochure design carried the discipline an industrial park project asks for: no ornamentation, no unnecessary storytelling, just structured information served at the pace a decision-maker needs it. Campaign design, hoardings and print advertising extended the same clear visual language into the industrial real estate market, positioning Aatmiya as a place for businesses that value clarity over marketing polish. An industrial park communicated the way industry itself operates, plainly, and with the numbers upfront."],
    images: createImages('industrial-park', 'aatmiya-industrial-park', {
      hero: 'AI1.jpg', brochure: 'AI2.png', single: 'AI3.jpg',
      row: ['AI4.jpg', 'AI5.jpg', 'AI6.png'],
      remaining: ['AI7.jpg']
    }),
  },
  {
    slug: 'shivbhumi-industrial-park',
    title: 'Shivbhumi Industrial Park',
    location: '@mumbai',
    projectType: 'Industrial\nPark complex',
    client: 'Brookfields Group',
    category: 'industrial-park',
    description: ["Shivbhumi Industrial Park had a clear advantage: it was located where industries could move faster. We made this sense of movement central to the communication. Route lines, distance markers and structured maps brought the location story into immediate focus, while a strong blue-and-gold visual language gave the project scale and confidence. Industrial imagery was blended with human silhouettes, keeping the story connected to the entrepreneurs, teams and ambitions behind every enterprise. The brochure design leaned into map-led navigation, so a factory operator or logistics planner could read the location advantage in one spread rather than three sections. Campaign design, hoardings and print advertising carried the same directional, movement-led register into the industrial real estate market, positioning Shivbhumi for businesses that ranked accessibility above every other factor. A large industrial opportunity, made easier to navigate and harder to overlook."],
    images: createImages('industrial-park', 'shivbhumi-industrial-park', {
      hero: 'B1.jpg', brochure: 'B2.png', single: 'B3.jpg',
      row: ['B4.jpg', 'B5.jpg', 'B6.png'],
      remaining: ['B7.jpg', 'B8.jpg', 'B9.jpg', 'B10.jpg']
    }),
  },
]

// CORPORATE BROCHURE PROJECTS
const corporateBrochureProjects: ProjectData[] = [
  {
    slug: 'accord-design',
    title: 'Accord Design',
    location: '@mumbai',
    projectType: 'Corporate\nBrochure',
    client: 'Accord Group',
    category: 'corporate-brochure',
    description: ["The narrative moved from the practice's philosophy and capabilities to its process, people and completed work. Complex architectural services were organised with clarity, making the technical depth of the studio easier to understand without diluting its creative strength. We drew inspiration from the meaning of accord, different elements working beautifully together. Clean grids, measured typography, architectural lines and a restrained visual palette created a sense of balance across the corporate portfolio. The brochure design was structured so a prospective client could read the studio's story at three depths: at a glance, in a scan, or in a full reading, a choice that respects the way busy decision-makers actually consume corporate collateral. The result was a corporate portfolio that felt as considered as the work it presented, giving Accord Design a communication asset that carried the same design intelligence as the projects on its shelves."],
    brochureFolder: 'Accord Design',
    images: createImages('corporate-brochure', 'Accord Design', {
      hero: '1.jpg', brochure: '2.jpg', single: '3.jpg',
      row: ['4.jpg', '5.jpg', '6.png'],
      remaining: ['7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg']
    }),
  },
  {
    slug: 'elite-design',
    title: 'Elite Design',
    location: '@mumbai',
    projectType: 'Corporate\nBrochure',
    client: 'Elite Group',
    category: 'corporate-brochure',
    description: ["With a practice dating back to 2008, the portfolio needed to communicate both the breadth of its expertise and the disciplined thinking behind every assignment. We translated the studio's architectural approach into a modular visual system. Geometric grids, structured blocks, sharply framed project imagery and a distinctive teal-and-coral palette gave the communication precision without making it feel rigid. Controlled white space allowed complex information to breathe, while bold typography created a confident hierarchy across every section. The corporate portfolio was structured to walk a reader through the studio's positioning, process and range of projects at a pace that felt neither rushed nor drawn out. What resulted was a corporate profile that reflected Elite Design the way its own clients experience the practice, precise, considered and quietly confident. A portfolio that reads as a working demonstration of the studio's own design principles, applied to its own story."],
    brochureFolder: 'Elite Designer',
    images: createImages('corporate-brochure', 'Elite Design', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg']
    }),
  },
  {
    slug: 'ratnam',
    title: 'Ratnam',
    location: '@mumbai',
    projectType: 'Corporate\nBrochure',
    client: 'Ratnam Group',
    category: 'corporate-brochure',
    description: ["We created a narrative that moved through four defining ideas: legacy, scale, trust and purpose. Business achievements were translated into clear milestones, while the founder's perspective and customer experiences gave the numbers a more personal meaning. The design combined textured greys with the brand's bold red, giving the communication maturity and confidence. Strong typography and structured architectural grids carried the corporate story, while colourful illustrations brought warmth to the Ratnam Foundation's work in organ-donation awareness. The corporate portfolio was designed to hold two registers at once: the disciplined confidence a business audience expects, and the emotional openness a CSR narrative asks for, without either weakening the other. What emerged was a corporate brochure that spoke as fluently to investors and partners as it did to the communities the foundation served. A corporate profile that reads a business and its purpose as a single, continuous story."],
    brochureFolder: 'Ratnam',
    images: createImages('corporate-brochure', 'ratnam', {
      hero: 'r1.jpg', brochure: 'r2.png', single: 'r3.jpg',
      row: ['r4.jpg', 'r5.jpg', 'r6.png'],
      remaining: ['r7.jpg', 'r8.jpg', 'r9.jpg', 'r10.jpg']
    }),
  },
  {
    slug: 'samruddhi',
    title: 'Samruddhi',
    location: '@mumbai',
    projectType: 'Corporate\nBrochure',
    client: 'Samruddhi Group',
    category: 'corporate-brochure',
    description: ["A clear chapter-based structure made the extensive portfolio easy to explore without making it feel like a catalogue. The writing balanced corporate confidence with warmth, while a consistent design language connected projects of different types, scales and stages. Growth became the central thread, expressed through a branching tree device, an earthy brown backdrop and accents of gold and green. The visual language felt warm, grounded and established, while still giving every project a premium presence. The brochure design was built around a reader who might arrive interested in one specific vertical, then stay for the fuller portfolio, a structural choice that reflected the group's positioning across categories. The result was a corporate portfolio that read like the group itself: rooted, growing, and with a clear sense of where it had come from and where it was headed. A story of growth, told with the calm confidence of a business that has already lived it."],
    brochureFolder: 'SAMRUDDHI',
    images: createImages('corporate-brochure', 'samruddhi', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg']
    }),
  },
  {
    slug: 'krrish-group',
    title: 'Krrish Group',
    location: '@mumbai',
    projectType: 'Corporate\nBrochure',
    client: 'Krrish Group',
    category: 'corporate-brochure',
    description: ["A clean visual structure brought consistency to the diverse portfolio. The recurring arrow-inspired graphic created movement across the narrative, while maps, milestones and project information were arranged for effortless reading. Residential and commercial developments were presented as individual successes, yet remained connected to one strong corporate identity. The brochure design used the arrow motif as both a navigation tool and a positioning idea, signalling forward direction while helping the reader move through a substantial body of work without losing their place. Campaign design and corporate collateral carried the same directional language into every touchpoint, giving the group a consistent voice across categories and cities. The closing narrative brought attention back to the principles supporting that growth: quality, integrity, customer trust and relationships built over time. A corporate portfolio built to make an extensive body of work feel connected, considered and confidently led."],
    brochureFolder: 'KRRISH',
    images: createImages('corporate-brochure', 'krrish-group', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg']
    }),
  },
]

// CAMPAIGN PROJECTS
const campaignProjects: ProjectData[] = [
  {
    slug: 'greenleaf-heritage-campaign',
    title: 'Greenleaf Heritage',
    location: '@mumbai',
    projectType: 'Campaign\nDesign',
    client: 'Greenleaf Group',
    category: 'campaign',
    description: ["We developed the central creative thought, visual identity and communication language that carried the project across every campaign touchpoint. Classical arches, columns, symmetry and regal textures established its heritage character, while natural greens and contemporary compositions kept the expression fresh and relevant. The messaging moved beyond architecture to communicate privacy, exclusivity, sustainability and the pride of owning a home with enduring character. The 360° campaign design worked across print, outdoor hoardings, digital, brochure and site branding, so every buyer touchpoint carried the same balance of heritage and green living. Campaign phases were sequenced from teaser through launch through sustained lifestyle communication, giving the audience a reason to engage at every stage rather than a single burst of visibility. What emerged was a campaign that moved beyond individual assets to become a full brand experience, an approach that made a heritage residential project feel simultaneously classical and current, without asking either sensibility to give way."],
    images: createImages('campaign', 'GREENLEAF HERITAGE', {
      hero: 'GREENLEAF HERITAGE_001.jpg', 
      brochure: 'RESIDENCIAL PORTFOLIO_002.png', 
      single: 'GREENLEAF HERITAGE_003.jpg',
      row: [], // No row images for campaign
      remaining: [
        'GREENLEAF HERITAGE_004.jpg', 
        'GREENLEAF HERITAGE_005.jpg', 
        'GREENLEAF HERITAGE_006.jpg', 
        'GREENLEAF HERITAGE_007.jpg', 
        'GREENLEAF HERITAGE_008.jpg', 
        'GREENLEAF HERITAGE_009.jpg', 
        'GREENLEAF HERITAGE_010.jpg', 
        'GREENLEAF HERITAGE_011.jpg',
        'GREENLEAF HERITAGE_012.jpg',
        'GREENLEAF HERITAGE_013.jpg',
        'GREENLEAF HERITAGE_014.jpg',
        'GREENLEAF HERITAGE_015.jpg',
        'GREENLEAF HERITAGE_016.jpg',
        'GREENLEAF HERITAGE_017.jpg',
        'GREENLEAF HERITAGE_018.jpg',
        'GREENLEAF HERITAGE_019.jpg',
        'GREENLEAF HERITAGE_020.jpg'
      ]
    }),
  },
  {
    slug: 'sky-gateway',
    title: 'Sky Gateway',
    location: '@mumbai',
    projectType: 'Campaign\nDesign',
    client: 'Sky Gateway Group',
    category: 'campaign',
    description: ["The story unfolded gradually, from intrigue and introduction to lifestyle, features and project value, giving audiences more reasons to engage at every stage. We turned the idea of a raised address into a complete creative system: one that expressed ambition, progress and the feeling of arriving at a better place. Sharp, aspirational messaging carried the same momentum across every communication, allowing each campaign piece to work independently while remaining part of one recognisable identity. The 360° real estate campaign design covered outdoor hoardings, print media, digital, brochure, launch collateral and site branding, sequenced so early awareness built into strong purchase intent by the time the project opened for bookings. What set Sky Gateway apart in the campaign category was continuity: no single piece did all the work, every piece built on the last. A campaign designed the way the project itself was designed, for the arrival, not just the announcement."],
    images: createImages('campaign', 'Sky Gateway', {
      hero: 'Sky Gateway_001.jpg', 
      brochure: 'Sky Gateway_002.png', 
      single: 'Sky Gateway_003.jpg',
      row: [], // No row images for campaign
      remaining: [
        'Sky Gateway_005.jpg',
        'Sky Gateway_006.jpg',
        'Sky Gateway_007.jpg',
        'Sky Gateway_008.jpg',
        'Sky Gateway_009.jpg',
        'Sky Gateway_010.jpg',
        'Sky Gateway_011.jpg',
        'Sky Gateway_012.jpg',
        'Sky Gateway_013.jpg',
        'Sky Gateway_014.jpg',
        'Sky Gateway_015.jpg',
        'Sky Gateway_016.jpg',
        'Sky Gateway_017.jpg',
        'Sky Gateway_018.jpg',
        'Sky Gateway_019.jpg'
      ]
    }),
  },
]

// FARMHOUSE PROJECTS
const farmhouseProjects: ProjectData[] = [
  {
    slug: 'lush-meadows',
    title: 'Lush Meadows',
    location: '@mumbai',
    projectType: 'Luxury\nFarmhouse',
    client: 'Lush Group',
    category: 'farmhouse',
    description: ["The communication was designed with just one sensory promise, feel the freshness. Using a soft and nature-inspired colour palette, compositions inspired by scrapbooks and playful illustrations, we created a relaxed visual flow, while storytelling unfolded amid lush settings, luxurious villas, well-planned layouts and a whole world of leisure activities. The design of the brochure was created using both photography and illustrations and the pages seemed to become the actual creation of memories rather than just specifications that the farmhouse buyer registers. The campaign design, hoardings and print advertisements maintained the same spirit and positioned Lush Meadows as the perfect getaway destination for city dwellers within driving distance of their homes. A project designed for refreshing weekends. A communication designed to make this feeling linger long after the brochure is closed. The result was a farmhouse project that captured people not only because of its layout but primarily because of its mood, which was precisely the right order for this particular category."],
    brochureFolder: 'Lush Meadows',
    images: createImages('farmhouse', 'lush-meadows', {
      hero: '01.jpg', brochure: '02.jpg', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg']
    }),
  },
  {
    slug: 'the-lakeview',
    title: 'The Lakeview',
    location: '@mumbai',
    projectType: 'Lakeside\nFarmhouse',
    client: 'Lakeview Group',
    category: 'farmhouse',
    description: ["Lakeview was conceptualized as a farmhouse which was to provide its owners an opportunity to live in a place that had open spaces, a relaxed pace of life and a tranquil environment. Our approach to communicating its concept involved a visual language that was spacious and immersive by nature. A serene composition was used to allow the environment to speak for itself, while the narrative that went into the project communicated the joy of owning your very own place to get away from the daily routine of life. The visual language of the brochure included use of landscape images, spacious white backgrounds and typography that stayed out of the picture. For the campaign visuals, hoarding and print advertisements, the same water-based language was carried forward to ensure positioning of Lakeview among buyers looking to purchase a second property in a farmhouse/weekend home format."],
    brochureFolder: 'The Lakeview',
    images: createImages('farmhouse', 'the-lakeview', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.png', '08.png']
    }),
  },
]

// Combined portfolio
export const portfolioProjects: ProjectData[] = [
  ...residentialProjects,
  ...commercialProjects,
  ...mallProjects,
  ...duplexVillaProjects,
  ...openPlotProjects,
  ...industrialParkProjects,
  ...corporateBrochureProjects,
  ...campaignProjects,
  ...farmhouseProjects,
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return portfolioProjects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((project) => project.slug)
}

export function getProjectsByCategory(category: ProjectCategory): ProjectData[] {
  return portfolioProjects.filter((project) => project.category === category)
}

export { 
  residentialProjects, 
  commercialProjects, 
  mallProjects,
  duplexVillaProjects,
  openPlotProjects,
  industrialParkProjects,
  corporateBrochureProjects,
  campaignProjects,
  farmhouseProjects 
}
