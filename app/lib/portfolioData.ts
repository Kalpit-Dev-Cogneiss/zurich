export interface ProjectData {
  slug: string
  title: string
  location: string
  projectType: string
  client: string
  description: string[]
  images: {
    hero: string
    brochure: string
    single: string
    row: [string, string, string]
    remaining: string[]
  }
}

export const portfolioProjects: ProjectData[] = [
  {
    slug: 'satyam-surya-manhattan',
    title: 'Satyam Surya Manhattan',
    location: '@mumbai',
    projectType: 'LUXURIOUS\n3BHK APARTMENT',
    client: 'SATYAM GROUP',
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    ],
    images: {
      hero: '/portfolio/satyam-surya-manhattan/ssm 01.jpg',
      brochure: '/portfolio/satyam-surya-manhattan/ssm 02.png',
      single: '/portfolio/satyam-surya-manhattan/ssm 03.jpg',
      row: [
        '/portfolio/satyam-surya-manhattan/ssm 04.jpg',
        '/portfolio/satyam-surya-manhattan/ssm 05.jpg',
        '/portfolio/satyam-surya-manhattan/ssm 06.png',
      ],
      remaining: [
        '/portfolio/satyam-surya-manhattan/ssm 07.jpg',
        '/portfolio/satyam-surya-manhattan/ssm 08.jpg',
        '/portfolio/satyam-surya-manhattan/ssm 09.jpg',
        '/portfolio/satyam-surya-manhattan/ssm 10.jpg',
        '/portfolio/satyam-surya-manhattan/ssm 11.jpg',
        '/portfolio/satyam-surya-manhattan/ssm 12.jpg',
      ],
    },
  },
  {
    slug: 'vivanta-sky-towers',
    title: 'Vivanta Sky Towers',
    location: '@mumbai',
    projectType: 'ULTRA-LUXURY\nSKY RESIDENCES',
    client: 'VIVANTA GROUP',
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    ],
    images: {
      hero: '/portfolio/vivanta-sky-towers/V1.jpg',
      brochure: '/portfolio/vivanta-sky-towers/V2.png',
      single: '/portfolio/vivanta-sky-towers/V3.jpg',
      row: [
        '/portfolio/vivanta-sky-towers/V4.jpg',
        '/portfolio/vivanta-sky-towers/V5.jpg',
        '/portfolio/vivanta-sky-towers/V6.png',
      ],
      remaining: [
        '/portfolio/vivanta-sky-towers/V7.jpg',
        '/portfolio/vivanta-sky-towers/V8.jpg',
        '/portfolio/vivanta-sky-towers/V9.jpg',
        '/portfolio/vivanta-sky-towers/V10.jpg',
        '/portfolio/vivanta-sky-towers/V11.jpg',
      ],
    },
  },
  {
    slug: 'festival-vibes',
    title: 'Festival Vibes',
    location: '@mumbai',
    projectType: 'LUXURIOUS\nRESIDENTIAL COMPLEX',
    client: 'FESTIVAL GROUP',
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    ],
    images: {
      hero: '/portfolio/festival-vibes/fv 01.jpg',
      brochure: '/portfolio/festival-vibes/fv 02.png',
      single: '/portfolio/festival-vibes/fv 03.jpg',
      row: [
        '/portfolio/festival-vibes/fv 04.jpg',
        '/portfolio/festival-vibes/fv 05.jpg',
        '/portfolio/festival-vibes/fv 06.png',
      ],
      remaining: [
        '/portfolio/festival-vibes/fv 07.jpg',
        '/portfolio/festival-vibes/fv 08.jpg',
        '/portfolio/festival-vibes/fv 09.jpg',
        '/portfolio/festival-vibes/fv 10.jpg',
        '/portfolio/festival-vibes/fv 11.jpg',
        '/portfolio/festival-vibes/fv 12.jpg',
      ],
    },
  },
  {
    slug: 'the-palatial-gardens',
    title: 'The Palatial Gardens',
    location: '@mumbai',
    projectType: 'PALATIAL\nGARDEN RESIDENCES',
    client: 'PALATIAL GROUP',
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    ],
    images: {
      hero: '/portfolio/the-palatial-gardens/T1.jpg',
      brochure: '/portfolio/the-palatial-gardens/T2.png',
      single: '/portfolio/the-palatial-gardens/T3.jpg',
      row: [
        '/portfolio/the-palatial-gardens/T4.jpg',
        '/portfolio/the-palatial-gardens/T5.jpg',
        '/portfolio/the-palatial-gardens/T6.png',
      ],
      remaining: [
        '/portfolio/the-palatial-gardens/T7.jpg',
        '/portfolio/the-palatial-gardens/T8.jpg',
        '/portfolio/the-palatial-gardens/T9.jpg',
        '/portfolio/the-palatial-gardens/T10.jpg',
        '/portfolio/the-palatial-gardens/T11.jpg',
      ],
    },
  },
  {
    slug: 'sanskruti-ryan-residency',
    title: 'Sanskruti Ryan Residency',
    location: '@mumbai',
    projectType: 'CONTEMPORARY\nRESIDENTIAL LIVING',
    client: 'SANSKRUTI GROUP',
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    ],
    images: {
      hero: '/portfolio/sanskruti-ryan-residency/srr 01.jpg',
      brochure: '/portfolio/sanskruti-ryan-residency/srr 02.png',
      single: '/portfolio/sanskruti-ryan-residency/srr 03.jpg',
      row: [
        '/portfolio/sanskruti-ryan-residency/srr 04.jpg',
        '/portfolio/sanskruti-ryan-residency/srr 05.jpg',
        '/portfolio/sanskruti-ryan-residency/srr 06.png',
      ],
      remaining: [
        '/portfolio/sanskruti-ryan-residency/srr 07.jpg',
        '/portfolio/sanskruti-ryan-residency/srr 08.jpg',
        '/portfolio/sanskruti-ryan-residency/srr 09.jpg',
        '/portfolio/sanskruti-ryan-residency/srr 10.jpg',
        '/portfolio/sanskruti-ryan-residency/srr 11.jpg',
        '/portfolio/sanskruti-ryan-residency/srr 12.jpg',
      ],
    },
  },
  {
    slug: 'palladium-highstreet',
    title: 'Palladium Highstreet',
    location: '@mumbai',
    projectType: 'PREMIUM\nCOMMERCIAL SPACE',
    client: 'PALLADIUM GROUP',
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    ],
    images: {
      hero: '/portfolio/palladium-highstreet/P1.jpg',
      brochure: '/portfolio/palladium-highstreet/P2.png',
      single: '/portfolio/palladium-highstreet/P3.jpg',
      row: [
        '/portfolio/palladium-highstreet/P4.jpg',
        '/portfolio/palladium-highstreet/P5.jpg',
        '/portfolio/palladium-highstreet/P6.jpg',
      ],
      remaining: [
        '/portfolio/palladium-highstreet/P7.jpg',
        '/portfolio/palladium-highstreet/P8.jpg',
        '/portfolio/palladium-highstreet/P9.jpg',
        '/portfolio/palladium-highstreet/P10.jpg',
        '/portfolio/palladium-highstreet/P11.jpg',
        '/portfolio/palladium-highstreet/P12.jpg',
      ],
    },
  },
  {
    slug: 'keystone-skyvillas-xl',
    title: 'Keystone Skyvillas XL',
    location: '@mumbai',
    projectType: 'EXCLUSIVE\nSKY VILLAS',
    client: 'KEYSTONE GROUP',
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    ],
    images: {
      hero: '/portfolio/keystone-skyvillas-xl/K1.jpg',
      brochure: '/portfolio/keystone-skyvillas-xl/K2.png',
      single: '/portfolio/keystone-skyvillas-xl/K3.jpg',
      row: [
        '/portfolio/keystone-skyvillas-xl/K4.jpg',
        '/portfolio/keystone-skyvillas-xl/K5.jpg',
        '/portfolio/keystone-skyvillas-xl/K6.png',
      ],
      remaining: [
        '/portfolio/keystone-skyvillas-xl/K7.jpg',
        '/portfolio/keystone-skyvillas-xl/K8.jpg',
        '/portfolio/keystone-skyvillas-xl/K9.jpg',
        '/portfolio/keystone-skyvillas-xl/K10.jpg',
        '/portfolio/keystone-skyvillas-xl/K11.jpg',
      ],
    },
  },
  {
    slug: 'vraj-hillview',
    title: 'Vraj Hillview',
    location: '@mumbai',
    projectType: 'SCENIC\nHILLSIDE RESIDENCES',
    client: 'VRAJ GROUP',
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
      "St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
    ],
    images: {
      hero: '/portfolio/vraj-hillview/V1.jpg',
      brochure: '/portfolio/vraj-hillview/V2.png',
      single: '/portfolio/vraj-hillview/V3.jpg',
      row: [
        '/portfolio/vraj-hillview/V4.jpg',
        '/portfolio/vraj-hillview/V5.jpg',
        '/portfolio/vraj-hillview/V6.png',
      ],
      remaining: [
        '/portfolio/vraj-hillview/V7.jpg',
        '/portfolio/vraj-hillview/V8.jpg',
        '/portfolio/vraj-hillview/V9.jpg',
        '/portfolio/vraj-hillview/V10.jpg',
        '/portfolio/vraj-hillview/V11.jpg',
      ],
    },
  },
]

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return portfolioProjects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map((project) => project.slug)
}
