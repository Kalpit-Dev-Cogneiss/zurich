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
    description: desc,
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
    images: createImages('residencial-projects', 'vivanta-sky-towers', {
      hero: 'V1.jpg', brochure: 'V2.png', single: 'V3.jpg',
      row: ['V4.jpg', 'V5.jpg', 'V6.png'],
      remaining: ['V7.jpg', 'V8.jpg', 'V9.jpg', 'V10.jpg', 'V11.jpg']
    }),
  },
  {
    slug: 'festival-vibes',
    title: 'Festival Vibes',
    location: '@mumbai',
    projectType: 'Luxurious\nResidential complex',
    client: 'Festival Group',
    category: 'residential',
    description: desc,
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
    description: desc,
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
    description: desc,
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
    location: '@mumbai',
    projectType: 'Premium\nResidential space',
    client: 'Palladium Group',
    category: 'residential',
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
    images: createImages('residencial-projects', 'VIVERA', {
      hero: 'v1.jpg', brochure: 'v2.png', single: 'v3.jpg',
      row: ['v4.jpg', 'v5.jpg', 'v6.png'],
      remaining: ['v7.jpg', 'v8.jpg', 'v9.jpg', 'v10.jpg', 'v11.jpg']
    }),
  },
  {
    slug: 'vyom-by-balajee',
    title: 'Vyom by Balajee',
    location: '@mumbai',
    projectType: 'Celestial\nResidential tower',
    client: 'Balajee Group',
    category: 'residential',
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    location: '@mumbai',
    projectType: 'Shopping\nMall',
    client: 'Siddheshwar Group',
    category: 'mall',
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
    images: createImages('duplex-villa-projects', 'oceanic-villa', {
      hero: 'O1.jpg', brochure: 'O2.png', single: 'O3.jpg',
      row: ['O4.jpg', 'O5.jpg', 'O6.png'],
      remaining: ['O7.jpg', 'O8.jpg', 'O9.jpg', 'O10.jpg', 'O11.jpg']
    }),
  },
]

// OPEN PLOT PROJECTS
const openPlotProjects: ProjectData[] = [
  {
    slug: 'reva-allizza',
    title: 'Reva Allizza',
    location: '@mumbai',
    projectType: 'Open plot\nDevelopment',
    client: 'Reva Group',
    category: 'open-plot',
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
    images: createImages('industrial-park', 'aatmiya-industrial-park', {
      hero: 'a1.jpg', brochure: 'a2.png', single: 'a3.jpg',
      row: ['a4.jpg', 'a5.jpg', 'a6.png'],
      remaining: ['a7.jpg', 'a8.jpg', 'a9.jpg', 'a10.jpg', 'a11.jpg', 'a12.jpg']
    }),
  },
  {
    slug: 'shivbhumi-industrial-park',
    title: 'Shivbhumi Industrial Park',
    location: '@mumbai',
    projectType: 'Industrial\nPark complex',
    client: 'Brookfields Group',
    category: 'industrial-park',
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
    images: createImages('corporate-brochure', 'krrish-group', {
      hero: 'k1.jpg', brochure: 'k2.png', single: 'k3.jpg',
      row: ['k4.jpg', 'k5.jpg', 'k6.png'],
      remaining: ['k7.jpg', 'k8.jpg', 'k9.jpg', 'k10.jpg', 'k11.jpg']
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
    description: desc,
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
