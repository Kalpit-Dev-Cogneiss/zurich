export interface SeoEntry {
  title: string
  description: string
  keywords: string
}

// Main / listing pages, keyed by route.
export const pageSeo: Record<string, SeoEntry> = {
  home: {
    title: 'Real Estate Branding Agency | Zurich Graphics',
    description:
      'Zurich Graphics is a real estate branding agency building memorable property brands through strategy, identity, brochures, campaigns and digital communication.',
    keywords: 'real estate branding agency',
  },
  about: {
    title: 'About Us | Real Estate Brand Strategy Consulting',
    description:
      'Meet Zurich Graphics, a real estate brand strategy consulting and design studio with three decades of experience creating distinctive brands and campaigns.',
    keywords: 'real estate brand strategy consulting',
  },
  portfolio: {
    title: 'Portfolio | Real Estate Marketing Agency Work',
    description:
      "Explore Zurich Graphics' portfolio as a real estate marketing agency, spanning branding, identity, brochure and campaign work across property types.",
    keywords: 'real estate marketing agency',
  },
  caseStudy: {
    title: 'Case Studies | Real Estate Campaign Planning',
    description:
      'As a real estate campaign planning agency, Zurich Graphics shares case studies showing the strategy and design thinking behind selected project brands.',
    keywords: 'real estate campaign planning agency',
  },
  contact: {
    title: 'Contact | Real Estate Advertising Agency',
    description:
      'Start a conversation with Zurich Graphics, a real estate advertising agency covering branding, brochures, campaigns, exhibitions and digital creative work.',
    keywords: 'real estate advertising agency',
  },
  blog: {
    title: 'Blog | Real Estate SEO Agency Insights',
    description:
      'As a real estate SEO agency, Zurich Graphics shares insights on branding, campaigns, brochures and digital marketing for property developers.',
    keywords: 'real estate seo agency',
  },
  services: {
    title: 'Services | Real Estate Digital Marketing Agency',
    description:
      'Zurich Graphics is a real estate digital marketing agency covering strategy, branding, brochures, campaigns, films and exhibitions in one studio.',
    keywords: 'real estate digital marketing agency',
  },
}

// Portfolio project detail pages, keyed by slug (app/portfolio/[slug]).
export const portfolioSeo: Record<string, SeoEntry> = {
  'accord-design': {
    title: 'Accord Group Brochure Design | Zurich Graphics',
    description:
      'As a brochure design company, Zurich Graphics created the Accord Group brochure, combining clear communication, structured storytelling and polished design.',
    keywords: 'brochure design company',
  },
  'elite-design': {
    title: 'Elite Group Corporate Profile Design | Zurich Graphics',
    description:
      'As a professional brochure design company, Zurich Graphics developed the Elite Group profile to present its brand, capabilities and business story with clarity.',
    keywords: 'professional brochure design company',
  },
  ratnam: {
    title: 'Ratnam Group Corporate Brochure | Zurich Graphics',
    description:
      'As a brochure design company for corporate clients, Zurich Graphics built the Ratnam Group brochure around brand storytelling and information design.',
    keywords: 'brochure design company for corporate and real estate clients',
  },
  samruddhi: {
    title: 'Samruddhi Group Brochure Design | Zurich Graphics',
    description:
      'Among the best brochure design companies for real estate projects, Zurich Graphics created the Samruddhi Group brochure through refined visual storytelling.',
    keywords: 'best brochure design company for real estate projects',
  },
  'krrish-group': {
    title: 'Krrish Group Corporate Design Portfolio | Zurich Graphics',
    description:
      'As a real estate brochure design agency, Zurich Graphics combined business information and a distinctive visual language for the Krrish Group brochure.',
    keywords: 'real estate brochure design agency',
  },
  'greenleaf-heritage-campaign': {
    title: 'Greenleaf Heritage 360° Campaign Design | Zurich Graphics',
    description:
      'Zurich Graphics delivered 360 real estate campaign design for Greenleaf Heritage, strengthening recognition through focused messaging and cohesive visuals.',
    keywords: '360 real estate campaign design',
  },
  'sky-gateway': {
    title: 'Sky Gateway Project Launch Campaign | Zurich Graphics',
    description:
      'This real estate project launch campaign design for Sky Gateway built a clear project identity and stronger market recall for the developer.',
    keywords: 'real estate project launch campaign design',
  },
  manogya: {
    title: 'Manogya Luxury Villa Branding | Zurich Graphics',
    description:
      "Zurich Graphics' real estate marketing for villa and duplex projects shaped the branding for Manogya, a luxury duplex villa expressing refined living.",
    keywords: 'real estate marketing for villa and duplex projects',
  },
  atc: {
    title: 'Darshanam Kingsville 2 Villa Identity | Zurich Graphics',
    description:
      "Through outdoor advertising for villa and duplex projects, Zurich Graphics crafted the branding for Darshanam Kingsville 2's premium community living.",
    keywords: 'outdoor advertising agency for real estate for villa and duplex projects',
  },
  'keystone-51': {
    title: 'Keystone 51 Villa Project Showcase | Zurich Graphics',
    description:
      "Zurich Graphics' social media marketing for villa and duplex projects supported the identity for Keystone 51, a duplex villa for modern living.",
    keywords: 'real estate social media marketing for villa and duplex projects',
  },
  'oceanic-villa': {
    title: 'Oceanic Villa Luxury Brand Identity | Zurich Graphics',
    description:
      "As a real estate brand identity company, Zurich Graphics shaped Oceanic Villa's presentation, an oceanfront estate built around exclusive living.",
    keywords: 'real estate brand identity company',
  },
  'reva-allizza': {
    title: 'Reva Allizza Plot Marketing Design | Zurich Graphics',
    description:
      "Zurich Graphics' digital marketing for plotted development projects shaped Reva Allizza's brand identity, built on trust and market interest.",
    keywords: 'real estate digital marketing for plotted development projects',
  },
  'raamah-eldoraa': {
    title: 'Raamah Eldoraa Plot Development Identity | Zurich Graphics',
    description:
      "Through print media advertising for plotted development projects, Zurich Graphics designed Raamah Eldoraa's identity around aspirational ownership.",
    keywords: 'real estate print media advertising for plotted development projects',
  },
  'keystone-woods': {
    title: 'Keystone Woods Nature-Led Identity | Zurich Graphics',
    description:
      "Zurich Graphics' 3D architectural rendering for plotted development projects brought Keystone Woods' nature-led positioning to life visually.",
    keywords: '3d architectural rendering for plotted development projects',
  },
  'aatmiya-industrial-park': {
    title: 'Aatmiya Industrial Park Brand Design | Zurich Graphics',
    description:
      "Zurich Graphics' brand strategy for industrial and warehouse projects shaped the communication design for Aatmiya Industrial Park's visibility.",
    keywords: 'real estate brand strategy for industrial and warehouse projects',
  },
  'shivbhumi-industrial-park': {
    title: 'Shivbhumi Industrial Park Visual Design | Zurich Graphics',
    description:
      "Through logo and brand identity work for industrial and warehouse projects, Zurich Graphics designed Shivbhumi Industrial Park's visual communication.",
    keywords: 'real estate logo and brand identity for industrial and warehouse projects',
  },
  'happy-mall': {
    title: 'Happy Mall Retail Brand Experience | Zurich Graphics',
    description:
      "Zurich Graphics' 360 real estate campaign design for mall and retail projects shaped Happy Mall's branding through engaging, customer-facing communication.",
    keywords: '360 real estate campaign for mall and retail projects',
  },
  vcm: {
    title: 'Vinod City Mall Visual Communication | Zurich Graphics',
    description:
      "Zurich Graphics' logo design for mall and retail projects gave Vinod City Mall a brand identity built to create recognition and visitor appeal.",
    keywords: 'logo design for mall and retail projects',
  },
  'krupa-aspire': {
    title: 'Krupa Aspire Commercial Brand Identity | Zurich Graphics',
    description:
      "Zurich Graphics' 360 degree branding for commercial shop and showroom projects gave Krupa Aspire a clear identity and market-facing communication.",
    keywords: '360 degree branding for commercial shop and showroom projects',
  },
  'rk-landmark': {
    title: 'RK Landmark Advertising Creative | Zurich Graphics',
    description:
      "Among the best real estate advertising agencies for builders, Zurich Graphics built the identity behind RK Landmark's memorable market presence.",
    keywords: 'best real estate advertising agency for builders',
  },
  'skyline-excellent': {
    title: 'Skyline Excellent Commercial Design | Zurich Graphics',
    description:
      "Zurich Graphics' event branding for commercial shop and showroom projects informed Skyline Excellent's design, positioned around business growth.",
    keywords: 'exhibition and event branding for commercial shop and showroom projects',
  },
  tsl: {
    title: 'TSL Commercial Communication Design | Zurich Graphics',
    description:
      "Zurich Graphics' 3D walkthrough work for commercial shop and showroom projects supported the professional communication built for TSL.",
    keywords: '3d walkthrough and virtual tour for commercial shop and showroom projects',
  },
  'vs-monolith': {
    title: 'VS Monolith Bold Visual Identity | Zurich Graphics',
    description:
      "Zurich Graphics' brochure design for commercial shop and showroom projects extended into VS Monolith's bold, distinctive visual identity.",
    keywords: 'brochure design for commercial shop and showroom projects',
  },
  'lush-meadows': {
    title: 'Lush Meadows Farmhouse Creative Identity | Zurich Graphics',
    description:
      'As an event branding agency for property launches and expos, Zurich Graphics positioned Lush Meadows around nature, space and leisure living.',
    keywords: 'exhibition and event branding agency for property launches and expos',
  },
  'the-lakeview': {
    title: 'The Lakeview Farmhouse Project Showcase | Zurich Graphics',
    description:
      "Among the best 3D walkthrough companies for property projects, Zurich Graphics shaped The Lakeview's identity around calm, scenic lakeside living.",
    keywords: 'best 3d walkthrough company for property projects',
  },
  'satyam-surya-manhattan': {
    title: 'Satyam Surya Manhattan Residential Brand | Zurich Graphics',
    description:
      "Zurich Graphics' branding for residential apartment projects shaped the identity for Satyam Surya Manhattan, a luxury 3BHK residential project.",
    keywords: 'real estate branding for residential apartment projects',
  },
  'vivanta-sky-towers': {
    title: 'Vivanta Sky Towers Video Ad Creative | Zurich Graphics',
    description:
      "Zurich Graphics' AI generated video ads for residential apartment projects brought Vivanta Sky Towers, an ultra-luxury sky residence, to life on screen.",
    keywords: 'ai generated real estate video ads for residential apartment projects',
  },
  'festival-vibes': {
    title: 'Festival Vibes Integrated Branding | Zurich Graphics',
    description:
      "As an integrated branding agency for real estate, Zurich Graphics created the visual communication for Festival Vibes' luxury residential development.",
    keywords: 'integrated branding agency for real estate',
  },
  'the-palatial-gardens': {
    title: 'The Palatial Gardens Logo & Identity Design | Zurich Graphics',
    description:
      "Zurich Graphics' real estate project logo and identity design shaped the branding for this premium project inspired by elegant garden living.",
    keywords: 'real estate project logo and identity design',
  },
  'sanskruti-ryan-residency': {
    title: 'Sanskruti Ryan Residency Brand Strategy | Zurich Graphics',
    description:
      "Offering brand strategy consulting for developers, Zurich Graphics shaped the identity for Sanskruti Ryan Residency's contemporary development.",
    keywords: 'real estate brand strategy consulting for developers',
  },
  'palladium-highstreet': {
    title: 'Palladium Highstreet Creative Portfolio | Zurich Graphics',
    description:
      "As a branding agency for builders and developers, Zurich Graphics developed Palladium Highstreet's identity with a distinctive market presence.",
    keywords: 'real estate branding agency for builders and developers',
  },
  'keystone-skyvillas-xl': {
    title: 'Keystone Skyvillas XL Campaign Visual Story | Zurich Graphics',
    description:
      "Zurich Graphics' campaign planning for residential apartment projects guided the identity for Keystone Skyvillas XL, an exclusive sky villa.",
    keywords: 'real estate campaign planning for residential apartment projects',
  },
  'vraj-hillview': {
    title: 'Vraj Hillview 3D Visualization Showcase | Zurich Graphics',
    description:
      "As a 3D architectural visualization company, Zurich Graphics brought Vraj Hillview's hillside residential identity to life through immersive visuals.",
    keywords: '3d architectural visualization company',
  },
  'aatlantis-the-castle': {
    title: 'Aatlantis The Castle 360° Brand Identity | Zurich Graphics',
    description:
      "Covering strategy, design and advertising, Zurich Graphics' 360 degree branding shaped Aatlantis The Castle's majestic, luxury positioning.",
    keywords: '360 degree branding agency covering strategy design and advertising',
  },
  'greenleaf-heritage': {
    title: 'Greenleaf Heritage Brand Positioning | Zurich Graphics',
    description:
      "As a real estate brand positioning consultant, Zurich Graphics shaped the identity for Greenleaf Heritage's eco-conscious heritage living.",
    keywords: 'real estate brand positioning consultant',
  },
  vivera: {
    title: 'Vivera Residential Digital Brand Design | Zurich Graphics',
    description:
      "As a real estate digital marketing company, Zurich Graphics shaped Vivera's branding, a contemporary residential project built around modern living.",
    keywords: 'real estate digital marketing company',
  },
  'vyom-by-balajee': {
    title: 'Vyom By Balajee Launch Campaign Identity | Zurich Graphics',
    description:
      "Zurich Graphics' campaign planning for pre-launch and post-launch phases shaped Vyom by Balajee's identity around aspirational living.",
    keywords: 'real estate campaign planning agency for pre launch and post launch phases',
  },
}

// Case study detail pages, keyed by slug (app/case-study/[slug]).
export const caseStudySeo: Record<string, SeoEntry> = {
  'festive-vibes': {
    title: 'Festive Vibes Campaign Planning Case Study | Zurich Graphics',
    description:
      "As a real estate campaign planning and execution agency, this case study shows Zurich Graphics' approach to Festive Vibes' identity and communication.",
    keywords: 'real estate campaign planning and execution agency',
  },
  'greenleaf-heritage': {
    title: 'Greenleaf Heritage Campaign Design Case Study | Zurich Graphics',
    description:
      'As an integrated campaign design agency, Zurich Graphics developed the branding for Greenleaf Heritage, a real estate project in Vadodara.',
    keywords: 'integrated campaign design agency',
  },
  'happy-mall': {
    title: 'Happy Mall Video Ad Case Study | Zurich Graphics',
    description:
      "This case study covers Zurich Graphics' AI powered TVC ad work for mall and retail projects behind Happy Mall's branding and identity.",
    keywords: 'ai powered tvc ad maker for mall and retail projects',
  },
  'lush-meadows': {
    title: 'Lush Meadows Outdoor Advertising Case Study | Zurich Graphics',
    description:
      'This case study on outdoor advertising for hoardings and billboards explores the visual identity and site communication behind Lush Meadows.',
    keywords: 'outdoor advertising agency for real estate hoardings and billboards',
  },
  'reva-allizza': {
    title: 'Reva Allizza Print Media Case Study | Zurich Graphics',
    description:
      "Drawing on print media work for newspaper and magazine ads, this case study explores how Reva Allizza's brand identity was shaped for the market.",
    keywords: 'real estate print media agency for newspaper and magazine ads',
  },
  'rk-landmark': {
    title: 'RK Landmark Campaign Planning Case Study | Zurich Graphics',
    description:
      'As a real estate campaign planning agency for builders, this case study shows the approach behind RK Landmark\'s market-facing communication.',
    keywords: 'real estate campaign planning agency for builders',
  },
  'satyam-surya-manhattan': {
    title: 'Satyam Surya Manhattan Identity Case Study | Zurich Graphics',
    description:
      'This case study on project logo and brand identity design for launch explores the design language created for Satyam Surya Manhattan.',
    keywords: 'real estate project logo and brand identity design for launch',
  },
  tsl: {
    title: 'TSL Campaign Design Case Study | Zurich Graphics',
    description:
      "Drawing on 360 degree campaign design for office space projects, this case study explores the branding and communication developed for TSL.",
    keywords: '360 degree campaign design for office space projects',
  },
}

// Service detail pages, keyed by slug (app/services/[slug]).
export const serviceSeo: Record<string, SeoEntry> = {
  'brand-strategy-positioning': {
    title: 'Brand Strategy & Consulting | Zurich Graphics',
    description:
      'Offering real estate brand strategy and positioning consulting for project launch, Zurich Graphics gives every project a sharper reason to be chosen.',
    keywords: 'real estate brand strategy and positioning consulting for project launch',
  },
  'naming-brand-identity': {
    title: 'Naming & Brand Identity Design | Zurich Graphics',
    description:
      "Zurich Graphics' real estate logo and brand identity design gives projects names people remember and identities competitors notice.",
    keywords: 'real estate logo and brand identity design',
  },
  'brochure-design': {
    title: 'Brochure Design Services | Zurich Graphics',
    description:
      'Through real estate brochure design services, Zurich Graphics gives every feature a reason to matter and every page a reason to turn.',
    keywords: 'real estate brochure design services',
  },
  'campaign-design': {
    title: '360 Degree Campaign Design Agency | Zurich Graphics',
    description:
      'As a 360 degree campaign design agency, Zurich Graphics creates ideas that cut through clutter, giving projects an unfair share of attention.',
    keywords: '360 degree campaign design agency',
  },
  '360-project-branding': {
    title: '360 Degree Branding Agency | Zurich Graphics',
    description:
      'As a 360 degree branding agency, Zurich Graphics makes one powerful brand speak fluently across every physical and digital touchpoint.',
    keywords: '360 degree branding agency',
  },
  'reels-digital-communication': {
    title: 'Reels & Social Media Marketing | Zurich Graphics',
    description:
      'As a real estate social media marketing agency, Zurich Graphics creates scroll-stopping reels that move fast and keep projects in conversation.',
    keywords: 'real estate social media marketing agency',
  },
  'corporate-project-films': {
    title: 'TVC Ad Agency For Corporate Films | Zurich Graphics',
    description:
      'As a TVC ad agency, Zurich Graphics gives corporate vision a voice and project stories a powerful screen presence, from script to final grade.',
    keywords: 'tvc ad agency',
  },
  'print-outdoor-media': {
    title: 'Outdoor Advertising Agency For Real Estate | Zurich Graphics',
    description:
      'As an outdoor advertising agency for real estate, Zurich Graphics turns every hoarding, newspaper and site surface into a reason to look.',
    keywords: 'outdoor advertising agency for real estate',
  },
  'exhibition-stall-designs': {
    title: 'Exhibition Stall Design Company | Zurich Graphics',
    description:
      'As a real estate exhibition stall design company, Zurich Graphics designs stalls that are noticed first and remembered longest at property expos.',
    keywords: 'real estate exhibition stall design company',
  },
}
