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
    location: 'Mumbai',
    projectType: 'Luxurious\n3BHK apartment',
    client: 'Satyam Group',
    category: 'residential',
    description: ["A tall project. An even taller story. Satyam Suryam Manhattan was meant to be experienced. We let every page rise with the project, moving through architecture, spacious 3BHK living and an elevated world of amenities with pace, polish and presence. The words built desire. The design built stature. Together, they made every turn feel like a step up."],
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
    location: 'Bharuch',
    projectType: 'Ultra-luxury\nSky residences',
    client: 'Vivanta Group',
    category: 'residential',
    description: ["A rare height. An even rarer way of life. Vivanta Skytowers belonged above the ordinary. We let the brochure unfold closer to the sky, revealing architectural grandeur, expansive residences and elevated experiences with space, sophistication and restraint. The design created awe. The words built exclusivity. Together, they gave luxury a higher point of view."],
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
    location: 'Ahmedabad',
    projectType: 'Luxurious\nResidential complex',
    client: 'Festival Group',
    category: 'residential',
    description: ["A lively address. An even livelier story. Festival Vibes was never meant to sit quietly on a page. We brought every spread alive with colour, character and celebration, moving from its Ahmedabad setting to lavish 3BHK living and 50+ lifestyle amenities with energy, warmth and flow. The illustrations sparked joy. The design created rhythm. Together, they turned a residential brochure into a festival of everyday living."],
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
    location: 'Rajkot',
    projectType: 'Palatial\nGarden residences',
    client: 'Palatial Group',
    category: 'residential',
    description: ["A grand address. An even grander expression. Palatial Gardens was created to make luxury feel larger than life. We let every page unfold with scale, elegance and quiet opulence, moving through majestic architecture, luxurious apartments and garden-inspired living with grace, depth and detail. The visuals created grandeur. The words added refinement. Together, they made every page turn feel like a grand entrance."],
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
    location: 'Indore',
    projectType: 'Contemporary\nResidential living',
    client: 'Sanskruti Group',
    category: 'residential',
    description: ["A home that reached for the sky. A story that stayed rooted in nature. Sanskruti Ryan Residency brought elevation and ecology into one living idea. We shaped every page around wind, sunlight and soil, moving through spacious 2 & 3BHK homes, vertical gardens and rooftop retreats with freshness, fluidity and calm. The words let nature speak. The design gave it space to grow. Together, they made green living feel beautifully elevated."],
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
    location: 'Silvassa',
    projectType: 'Premium\nResidential space',
    client: 'Palladium Group',
    category: 'residential',
    description: ["Roman grandeur. Modern ambition. Palladium Highstreet was envisioned to bring both together under one commanding address. We built every page around this powerful contrast, moving through vibrant shops, statement showrooms, lavish apartments and elevated lifestyle spaces with scale, rhythm and regal energy. The architecture brought a sense of royalty. The design gave it a contemporary pulse. Together, they made Palladium Highstreet feel like a landmark built to rule the skyline of Silvassa."],
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
    location: 'Vadodara',
    projectType: 'Exclusive\nSky villas',
    client: 'Keystone Group',
    category: 'residential',
    description: ["A villa-sized vision. A story with no ceiling. Keystone SkyVillas XL reimagined exclusivity at a higher level. We opened every page to more, moving through expansive residences, sky-high privacy and elevated living with scale, freedom and finesse. The layouts created openness. The words gave it altitude. Together, they turned the luxury of a villa into a life above the city."],
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
    location: 'Nashik',
    projectType: 'Scenic\nHillside residences',
    client: 'Vraj Group',
    category: 'residential',
    description: ["A higher vantage point. An even wider vision. Vraj Hillview was designed for lives and ambitions ready to rise. We let every page open to possibility, moving through hill-facing homes, vibrant commercial spaces, thoughtful amenities and a fast-growing address with energy, balance and aspiration. The views created desire. The design built momentum. Together, they turned a mixed-use development into a destination above the ordinary."],
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
    location: 'Mumbai',
    projectType: 'Majestic\nCastle residences',
    client: 'Aatlantis Group',
    category: 'residential',
    description: ["A residence with the presence of a castle. A story built to command attention. Aatlantic The Castle brought old-world majesty into a distinctly modern way of living. We shaped every page with grandeur, moving through stately architecture, lavish residences and elevated lifestyle spaces with drama, detail and distinction. The visuals created awe. The words gave it authority. Together, they gave modern luxury the stature of a castle."],
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
    location: 'Vadodara',
    projectType: 'Eco-friendly\nHeritage homes',
    client: 'Greenleaf Group',
    category: 'residential',
    description: ["A Roman soul. A greener way to live. Green Leaf Heritage reimagined classical grandeur for a more conscious generation. We brought every page alive with stately architecture, expansive villas and nature-led living, balancing heritage with sustainability and royalty with responsibility. The design honoured the past. The idea looked towards the future. Together, they created homes made to leave a lighter footprint and a lasting legacy."],
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
    location: 'Dabhoi',
    projectType: 'Modern\nLiving experience',
    client: 'Vivera Group',
    category: 'residential',
    description: ["A modern address. A story made for the way life moves today. Vivera brought a fresh rhythm to contemporary living in Mumbai. We gave every page a sense of effortless flow, moving through thoughtfully planned homes, refined spaces and everyday conveniences with clarity, energy and style. The visuals kept it fresh. The words made it relatable. Together, they turned modern living into an experience designed around real life."],
    images: createImages('residencial-projects', 'VIVERA', {
      hero: 'V1.jpg', brochure: 'V2.png', single: 'V3.jpg',
      row: ['V4.jpg', 'V5.jpg', 'V6.png'],
      remaining: ['V7.jpg', 'V8.jpg', 'V9.jpg', 'V10.jpg']
    }),
  },
  {
    slug: 'vyom-by-balajee',
    title: 'Vyom By Balajee',
    location: 'Dhanbad',
    projectType: 'Celestial\nResidential tower',
    client: 'Balajee Group',
    category: 'residential',
    description: ["The sky gave it a name. We gave it a universe. Vyom by Balajee was imagined as a celestial escape above the everyday. We built every page around height, light and limitless possibility, moving through striking architecture, refined residences and elevated leisure with calm, clarity and wonder. The design created atmosphere. The words added aspiration. Together, they made the sky feel like home."],
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
    location: 'Ahmedabad',
    projectType: 'Commercial\nHub',
    client: 'Krupa Group',
    category: 'commercial',
    description: ["Krupa Aspire had aspiration in its name. We made sure it showed in every piece of communication. The story was built for people who see commercial space as more than property, as presence, possibility and the beginning of something bigger. Clean in thought. Confident in expression. Ready for business before the doors even opened."],
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
    location: 'Rajkot',
    projectType: 'Commercial\nLandmark',
    client: 'RK Group',
    category: 'commercial',
    description: ["RK Landmark was shaped for businesses that understand how strongly an address can speak. We gave the project a confident design language and a sharper commercial voice, turning built space into brand value and location into business leverage. Bold visuals established stature, while focused messaging brought its ambition and opportunity to the forefront. Every element worked to build credibility, attract attention and create presence before the first signboard went up."],
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
    location: 'Bharuch',
    projectType: 'Commercial\nExcellence',
    client: 'Skyline Group',
    category: 'commercial',
    description: ["Excellence was in the name. We made it the creative standard. Skyline Excellent called for communication as sharp and ambitious as the businesses it was created to attract. We developed a contemporary visual language built around clarity, confidence and commercial appeal. Strong compositions gave the project stature, while precise messaging brought its advantages into sharper focus."],
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
    location: 'Surat',
    projectType: 'Commercial\nProject',
    client: 'TSL Group',
    category: 'commercial',
    description: ["The project needed a commercial identity that could speak quickly and stay remembered. We brought together confident design, precise messaging and a contemporary attitude, turning a compact name into a powerful expression of ambition, credibility and opportunity. The tone spoke directly to entrepreneurs, investors and brands ready to make their next move. The result was a commercial address that felt established before it even opened its doors."],
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
    location: 'Vadodara',
    projectType: 'Commercial\nMonolith',
    client: 'VS Group',
    category: 'commercial',
    description: ["VS Monolith was positioned to look established before the first business moved in. We translated its commanding architecture, premium commercial spaces and strategic accessibility into a communication language with weight: bold geometry, disciplined layouts and headlines that spoke the language of ambition. A distinctive geometric identity and restrained corporate palette worked together to make one promise clear: business belongs here."],
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
    location: 'Vadodara',
    projectType: 'Shopping\nMall',
    client: 'Siddheshwar Group',
    category: 'mall',
    description: ["Happy Mall was imagined as a place where Vadodara could shop, eat, watch, play and simply enjoy being together. With over 100 stores, restaurants, gaming, banqueting and a six-screen multiplex, there was a lot happening under one roof. We took inspiration from the mall's colourful façade and carried its vibrancy through every composition. Bright colours, playful smile motifs and lively headlines gave each section a mood of its own. Even the detailed business information was presented in a way that felt clear and engaging."],
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
    location: 'Rajasthan',
    projectType: 'City\nMall',
    client: 'Vinod Group',
    category: 'mall',
    description: ["Bright colour blocks, a distinctive VCM graphic device and clean compositions brought shopping, grocery, food, gaming and entertainment into one lively story without making it feel crowded. The architecture was allowed to make a strong first impression, while layouts, plans and business information were kept simple and easy to follow. Many experiences. Many reasons to arrive. One address bringing them all together."],
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
    location: 'Dhanbad',
    projectType: 'Luxury\nDuplex villas',
    client: 'Manogya Group',
    category: 'duplex-villa',
    description: ["Manogya brought together the openness of a villa and the elegance of living across two beautifully planned levels. We gave the project a visual language rich in scale and sophistication, supported by storytelling that felt warm, aspirational and exclusive. The communication moved beyond features to capture the freedom, privacy and pride that come with owning a luxury duplex villa."],
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
    location: 'Vadodara',
    projectType: 'Villa\nDevelopment',
    client: 'Darshanam Group',
    category: 'duplex-villa',
    description: ["Kingsville Phase 2 called for communication as expansive as the homes themselves. We turned the idea of a Kingdom into the project's defining language, carrying it through grand arrivals, spacious 3 & 4BHK homes, private gardens, open terraces and 20+ lifestyle amenities. Generous layouts were matched with generous visual space, while refined storytelling gave every experience its own sense of stature."],
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
    location: 'Vadodara',
    projectType: 'Duplex\nVillas',
    client: 'Keystone Group',
    category: 'duplex-villa',
    description: ["This project was about elevation felt through space, silence, sunlight and the privilege of privacy. We shaped its communication around a language of quiet distinction, adding poise, prelude, essence, enchantment and presence, each idea revealing another dimension of its 51 private villas. Expansive architecture met restrained design, while generous terraces, landscaped edges and light-filled interiors unfolded through lyrical storytelling and a composed visual rhythm."],
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
    location: 'Vadodara',
    projectType: 'Oceanfront\nVilla estates',
    client: 'Oceanic Group',
    category: 'duplex-villa',
    description: ["Oceanic Villa called for a creative language that felt expansive, elegant and effortlessly calm. We drew inspiration from the openness of the ocean, bringing fluid design, spacious compositions and evocative storytelling together to reflect a life without boundaries. Every element communicated privacy, architectural distinction and the quiet privilege of owning an independent villa. Generous spaces were expressed through uncluttered layouts, while sophisticated details added depth and exclusivity."],
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
    location: 'Bharuch',
    projectType: 'Open plot\nDevelopment',
    client: 'Reva Group',
    category: 'open-plot',
    description: ["We made the idea of the nest central to the communication, carrying it through airy compositions, nature-led storytelling and a warm, aspirational visual language. The narrative moved seamlessly from Bharuch's connectivity and well-planned internal roads to contemporary villa possibilities, landscaped greens and leisurely community spaces. Every element balanced the independence of plot ownership with the comfort of belonging to a peaceful, beautifully planned world."],
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
    location: 'Vadodara',
    projectType: 'Premium\nOpen plots',
    client: 'Raamah Group',
    category: 'open-plot',
    description: ["We shaped the project around a language of possibility and lasting value. Expansive compositions reflected the openness of the development, while confident storytelling transformed plots, planning and connectivity into a compelling vision of tomorrow. Every creative element carried a sense of aspiration, positioning the project not merely as land to own, but as a foundation for dreams, growth and generational value."],
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
    location: 'Vadodara',
    projectType: 'Woodland\nPlots',
    client: 'Keystone Group',
    category: 'open-plot',
    description: ["Keystone Woods was conceived as quiet luxury shaped through expansive plots, bespoke homes and the unhurried presence of nature. We built its creative language around the world of art, using colour, texture and composition to express every dimension of the experience. Orange became serenity. Green captured nature. Blue reflected the pool and open horizon, while warmer hues brought leisure and indulgence to life. Expressive typography, artistic frames and generous white space gave the communication room to breathe, mirroring the openness of its 14 exclusive plots and expansive green setting."],
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
    location: 'Vadodara',
    projectType: 'Industrial\nPark development',
    client: 'Aatmiya Group',
    category: 'industrial-park',
    description: ["What began as a complex industrial proposition became a communication experience that felt direct, credible and refreshingly simple. The bold colour palette created instant visibility, while structured layouts made the location, master plan, plot choices and facilities easy to navigate. Every detail was placed with purpose, helping buyers see how their business could fit into the development. Infrastructure was presented as a practical advantage, giving businesses a clearer picture of everyday operations and future expansion."],
    images: createImages('industrial-park', 'aatmiya-industrial-park', {
      hero: 'AI1.jpg', brochure: 'AI2.png', single: 'AI3.jpg',
      row: ['AI4.jpg', 'AI5.jpg', 'AI6.png'],
      remaining: ['AI7.jpg']
    }),
  },
  {
    slug: 'shivbhumi-industrial-park',
    title: 'Shivbhumi Industrial Park',
    location: 'Vadodara',
    projectType: 'Industrial\nPark complex',
    client: 'Brookfields Group',
    category: 'industrial-park',
    description: ["Shivbhumi Industrial Park had a clear advantage: it was located where industries could move faster. We made this sense of movement central to the communication. Route lines, distance markers and structured maps brought the location story into immediate focus, while a strong blue-and-gold visual language gave the project scale and confidence. Industrial imagery was blended with human silhouettes, keeping the story connected to the entrepreneurs, teams and ambitions behind every enterprise. A large industrial opportunity, made easier to navigate and harder to overlook."],
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
    location: 'Dahej',
    projectType: 'Corporate\nBrochure',
    client: 'Accord Group',
    category: 'corporate-brochure',
    description: ["The narrative moved from the practice's philosophy and capabilities to its process, people and completed work. Complex services were organised with clarity, making the technical depth of the studio easier to understand without diluting its creative strength. We drew inspiration from the meaning of accord: different elements working beautifully together. Clean grids, measured typography, architectural lines and a restrained visual palette created a sense of balance across the portfolio."],
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
    location: 'Surat',
    projectType: 'Corporate\nBrochure',
    client: 'Elite Group',
    category: 'corporate-brochure',
    description: ["With a practice dating back to 2008, the portfolio needed to communicate both the breadth of its expertise and the disciplined thinking behind every assignment. We translated the studio's architectural approach into a modular visual system. Geometric grids, structured blocks, sharply framed project imagery and a distinctive teal-and-coral palette gave the communication precision without making it feel rigid. Controlled white space allowed complex information to breathe, while bold typography created a confident hierarchy across every section."],
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
    location: 'Vadodara',
    projectType: 'Corporate\nBrochure',
    client: 'Ratnam Group',
    category: 'corporate-brochure',
    description: ["We created a narrative that moved through four defining ideas: legacy, scale, trust and purpose. Business achievements were translated into clear milestones, while the founder's perspective and customer experiences gave the numbers a more personal meaning. The design combined textured greys with the brand's bold red, giving the communication maturity and confidence. Strong typography and structured architectural grids carried the corporate story, while colourful illustrations brought warmth to the Ratnam Foundation's work in organ-donation awareness."],
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
    location: 'Vadodara',
    projectType: 'Corporate\nBrochure',
    client: 'Samruddhi Group',
    category: 'corporate-brochure',
    description: ["A clear chapter-based structure made the extensive portfolio easy to explore without making it feel like a catalogue. The writing balanced corporate confidence with warmth, while a consistent design language connected projects of different types, scales and stages. Growth became the central thread, expressed through a branching tree device, an earthy brown backdrop and accents of gold and green. The visual language felt warm, grounded and established, while still giving every project a premium presence."],
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
    location: 'Nashik',
    projectType: 'Corporate\nBrochure',
    client: 'Krrish Group',
    category: 'corporate-brochure',
    description: ["A clean visual structure brought consistency to the diverse portfolio. The recurring arrow-inspired graphic created movement across the narrative, while maps, milestones and project information were arranged for effortless reading. Residential and commercial developments were presented as individual successes, yet remained connected to one strong corporate identity. The closing narrative brought attention back to the principles supporting that growth: quality, integrity, customer trust and relationships built over time."],
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
    location: 'Vadodara',
    projectType: 'Campaign\nDesign',
    client: 'Greenleaf Group',
    category: 'campaign',
    description: ["We developed the central creative thought, visual identity and communication language that carried the project across every campaign touchpoint. Classical arches, columns, symmetry and regal textures established its heritage character, while natural greens and contemporary compositions kept the expression fresh and relevant. The messaging moved beyond architecture to communicate privacy, exclusivity, sustainability and the pride of owning a home with enduring character."],
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
    location: 'Vadodara',
    projectType: 'Campaign\nDesign',
    client: 'Sky Gateway Group',
    category: 'campaign',
    description: ["The story unfolded gradually from intrigue and introduction to lifestyle, features and project value, giving audiences more reasons to engage at every stage. We turned the idea of elevation into a complete creative system: one that expressed ambition, progress and the feeling of arriving at a better place. Sharp, aspirational messaging carried the same momentum across every communication, allowing each campaign piece to work independently while remaining part of one recognisable identity."],
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
    location: 'Kantharpura',
    projectType: 'Luxury\nFarmhouse',
    client: 'Lush Group',
    category: 'farmhouse',
    description: ["We built the communication around one sensory promise: Feel the Freshness. A soft, nature-led palette, scrapbook-inspired compositions and playful illustrations created a relaxed visual rhythm, while evocative storytelling moved through lush surroundings, private villas, thoughtful planning and an expansive world of leisure. A project created for refreshing weekends. A story designed to make the feeling last."],
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
    location: 'Dahod',
    projectType: 'Lakeside\nFarmhouse',
    client: 'Lakeview Group',
    category: 'farmhouse',
    description: ["The Lakeview was envisioned as a farmhouse retreat where open landscapes, unhurried moments and waterside calm shaped a different rhythm of living. We created a visual and verbal language that felt expansive, immersive and naturally refined. Serene compositions allowed the setting to breathe, while evocative storytelling captured the freedom of owning a private escape away from the everyday."],
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
