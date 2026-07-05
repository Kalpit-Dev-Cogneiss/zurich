export type ProjectCategory = 'residential' | 'commercial' | 'farmhouse'

export interface ProjectData {
  slug: string
  title: string
  location: string
  projectType: string
  client: string
  category: ProjectCategory
  description: string[]
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
    projectType: 'LUXURIOUS\n3BHK APARTMENT',
    client: 'SATYAM GROUP',
    category: 'residential',
    description: desc,
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
    projectType: 'ULTRA-LUXURY\nSKY RESIDENCES',
    client: 'VIVANTA GROUP',
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
    projectType: 'LUXURIOUS\nRESIDENTIAL COMPLEX',
    client: 'FESTIVAL GROUP',
    category: 'residential',
    description: desc,
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
    projectType: 'PALATIAL\nGARDEN RESIDENCES',
    client: 'PALATIAL GROUP',
    category: 'residential',
    description: desc,
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
    projectType: 'CONTEMPORARY\nRESIDENTIAL LIVING',
    client: 'SANSKRUTI GROUP',
    category: 'residential',
    description: desc,
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
    projectType: 'PREMIUM\nRESIDENTIAL SPACE',
    client: 'PALLADIUM GROUP',
    category: 'residential',
    description: desc,
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
    projectType: 'EXCLUSIVE\nSKY VILLAS',
    client: 'KEYSTONE GROUP',
    category: 'residential',
    description: desc,
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
    projectType: 'SCENIC\nHILLSIDE RESIDENCES',
    client: 'VRAJ GROUP',
    category: 'residential',
    description: desc,
    images: createImages('residencial-projects', 'vraj-hillview', {
      hero: 'V1.jpg', brochure: 'V2.png', single: 'V3.jpg',
      row: ['V4.jpg', 'V5.jpg', 'V6.png'],
      remaining: ['V7.jpg', 'V8.jpg', 'V9.jpg', 'V10.jpg', 'V11.jpg']
    }),
  },
]

// COMMERCIAL PROJECTS
const commercialProjects: ProjectData[] = [
  {
    slug: 'darshanam-kingsville-2',
    title: 'Darshanam Kingsville 2',
    location: '@mumbai',
    projectType: 'COMMERCIAL\nDEVELOPMENT',
    client: 'DARSHANAM GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'darshanam-kingsville-2', {
      hero: 'DARSHANAM KINGSVILLE 2_001.jpg', brochure: 'DARSHANAM KINGSVILLE 2_002.png', single: 'DARSHANAM KINGSVILLE 2_003.jpg',
      row: ['DARSHANAM KINGSVILLE 2_004.jpg', 'DARSHANAM KINGSVILLE 2_005.png'],
      remaining: ['DARSHANAM KINGSVILLE 2_006.jpg', 'DARSHANAM KINGSVILLE 2_007.jpg', 'DARSHANAM KINGSVILLE 2_008.jpg', 'DARSHANAM KINGSVILLE 2_009.jpg', 'DARSHANAM KINGSVILLE 2_010.jpg', 'DARSHANAM KINGSVILLE 2_011.jpg', 'DARSHANAM KINGSVILLE 2_012.jpg']
    }),
  },
  {
    slug: 'keystone-51',
    title: 'Keystone 51',
    location: '@mumbai',
    projectType: 'COMMERCIAL\nCOMPLEX',
    client: 'KEYSTONE GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'keystone-51', {
      hero: 'Keystone 51_001.jpg', brochure: 'Keystone 51_002.png', single: 'Keystone 51_003.jpg',
      row: ['Keystone 51_004.jpg', 'Keystone 51_005.jpg', 'Keystone 51_006.png'],
      remaining: ['Keystone 51_007.jpg', 'Keystone 51_008.jpg', 'Keystone 51_009.jpg', 'Keystone 51_010.jpg']
    }),
  },
  {
    slug: 'krupa-aspire',
    title: 'Krupa Aspire',
    location: '@mumbai',
    projectType: 'COMMERCIAL\nHUB',
    client: 'KRUPA GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'krupa-aspire', {
      hero: '01.jpg', brochure: '02.png', single: '03.png',
      row: ['04.png', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg']
    }),
  },
  {
    slug: 'manogya',
    title: 'Manogya',
    location: '@mumbai',
    projectType: 'COMMERCIAL\nSPACE',
    client: 'MANOGYA GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'manogya', {
      hero: 'manogya_001.jpg', brochure: 'manogya_002.png', single: 'manogya_003.jpg',
      row: ['manogya_004.jpg', 'manogya_005.jpg', 'manogya_006.png'],
      remaining: ['manogya_007.jpg', 'manogya_008.jpg', 'manogya_009.jpg', 'manogya_010.jpg']
    }),
  },
  {
    slug: 'rk-landmark',
    title: 'RK Landmark',
    location: '@mumbai',
    projectType: 'COMMERCIAL\nLANDMARK',
    client: 'RK GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'rk-landmark', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg']
    }),
  },
  {
    slug: 'siddheshwar-happy-mall',
    title: 'Siddheshwar Happy Mall',
    location: '@mumbai',
    projectType: 'SHOPPING\nMALL',
    client: 'SIDDHESHWAR GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'siddheshwar-happy-mall', {
      hero: 'M1.jpg', brochure: 'M2.png', single: 'M3.jpg',
      row: ['M4.jpg', 'M5.jpg', 'M6.png'],
      remaining: ['M7.jpg', 'M8.jpg', 'M9.jpg', 'M10.jpg', 'M11.jpg', 'M12.jpg']
    }),
  },
  {
    slug: 'skyline-excellent',
    title: 'Skyline Excellent',
    location: '@mumbai',
    projectType: 'COMMERCIAL\nEXCELLENCE',
    client: 'SKYLINE GROUP',
    category: 'commercial',
    description: desc,
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
    projectType: 'COMMERCIAL\nPROJECT',
    client: 'TSL GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'tsl', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg']
    }),
  },
  {
    slug: 'vinod-city-mall',
    title: 'Vinod City Mall',
    location: '@mumbai',
    projectType: 'CITY\nMALL',
    client: 'VINOD GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'vinod-city-mall', {
      hero: 'V1.jpg', brochure: 'V2.png', single: 'V3.jpg',
      row: ['V4.jpg', 'V5.jpg', 'V6.png'],
      remaining: ['V8.jpg', 'V9.jpg', 'V10.jpg', 'V11.jpg']
    }),
  },
  {
    slug: 'vs-monolith',
    title: 'VS Monolith',
    location: '@mumbai',
    projectType: 'COMMERCIAL\nMONOLITH',
    client: 'VS GROUP',
    category: 'commercial',
    description: desc,
    images: createImages('commercial-projects', 'vs-monolith', {
      hero: '01.jpg', brochure: '02.jpg', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: ['07.jpg', '08.jpg', '09.jpg', '10.jpg']
    }),
  },
]

// FARMHOUSE PROJECTS
const farmhouseProjects: ProjectData[] = [
  {
    slug: 'lush-meadows',
    title: 'Lush Meadows',
    location: '@mumbai',
    projectType: 'LUXURY\nFARMHOUSE',
    client: 'LUSH GROUP',
    category: 'farmhouse',
    description: desc,
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
    projectType: 'LAKESIDE\nFARMHOUSE',
    client: 'LAKEVIEW GROUP',
    category: 'farmhouse',
    description: desc,
    images: createImages('farmhouse', 'the-lakeview', {
      hero: '01.jpg', brochure: '02.png', single: '03.jpg',
      row: ['04.jpg', '05.jpg', '06.png'],
      remaining: []
    }),
  },
]

// Combined portfolio
export const portfolioProjects: ProjectData[] = [
  ...residentialProjects,
  ...commercialProjects,
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

export { residentialProjects, commercialProjects, farmhouseProjects }
