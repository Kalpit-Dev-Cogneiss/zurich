export interface FAQItem {
  question: string
  answer: string
}

export interface ServiceData {
  slug: string
  num: number
  title: string
  tagline: string
  description: string[]
  highlights: string[]
  image: string
  secondaryImage: string
  gallery: [string, string]
  faq: FAQItem[]
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'brand-strategy-positioning',
    num: 1,
    title: 'Brand strategy & positioning',
    tagline: 'Giving your project a sharper position and a stronger reason to be chosen.',
    description: [
      'Every project is competing with a dozen others promising the same location, the same amenities and the same lifestyle. Strategy is where we find the one true difference worth building a brand around, before a single visual is drawn.',
      'We study the site, the buyer and the competition, then land on a position that is ownable, defensible and easy to say out loud. Everything downstream, naming, brochure, campaign, is built to prove that one idea.',
    ],
    highlights: [
      'Market, site and competitor reads',
      'Buyer persona and decision mapping',
      'A single, ownable brand position',
      'A messaging framework every vendor can follow',
    ],
    image: '/images/Service_Brand-strategy.jpeg',
    secondaryImage: '/images/Work Process_001.jpg',
    gallery: ['/images/Services_004.jpg', '/images/Services_005.jpg'],
    faq: [
      { question: 'How long does a positioning project take?', answer: 'Typically two to three weeks, from the first site and market read to a locked position and messaging framework your team can brief every vendor from.' },
      { question: 'Do you work from research or gut instinct?', answer: 'Both. We start with site visits, competitor audits and buyer conversations, then pressure-test every idea against what actually moves a decision in this category.' },
    ],
  },
  {
    slug: 'naming-brand-identity',
    num: 2,
    title: 'Naming & brand identity',
    tagline: 'We give projects names people remember and identities competitors notice.',
    description: [
      'A project name has to survive being said by a broker, printed on a hoarding, and repeated by a buyer to a friend six months later. We generate wide, then narrow hard against ownability, sayability and how it stretches across every surface.',
      'Once the name is locked, the identity, wordmark, colour, type, motif, is built to carry it consistently from the site hoarding to the smallest brochure footer.',
    ],
    highlights: [
      'Naming exploration and legal-safe shortlisting',
      'Wordmark and logo system',
      'Colour, type and motif guidelines',
      'A brand manual every vendor can build from',
    ],
    image: '/images/Service_Naming-brand.jpeg',
    secondaryImage: '/images/Work Process_002.jpg',
    gallery: ['/images/Services_006.jpg', '/images/Services_007.jpg'],
    faq: [
      { question: 'Do you check names are legally available?', answer: 'We screen every shortlisted name for obvious trademark and local project-name clashes before it goes to you, though final legal clearance sits with your counsel.' },
      { question: 'Can you redesign an identity that already exists?', answer: 'Yes. We regularly sharpen or fully rebuild identities for projects that launched with a rushed or inconsistent mark.' },
    ],
  },
  {
    slug: 'brochure-design',
    num: 3,
    title: 'Brochure design',
    tagline: 'We give every feature a reason to matter and every page a reason to turn.',
    description: [
      'A brochure is often the only physical object a buyer takes home from a site visit. It has ten seconds to earn a second look, and a coffee table to survive on if it does.',
      'We open with a single strong idea rather than a floor plan, then order every spread the way a buyer actually decides, location, layout, amenities, trust, and choose paper and print finish to match the building it describes.',
    ],
    highlights: [
      'Narrative structure and page sequencing',
      'Layout, typography and photography direction',
      'Print production and paper selection',
      'Digital and interactive brochure formats',
    ],
    image: '/images/Services_Brochure Design.jpg',
    secondaryImage: '/images/Work Process_003.jpg',
    gallery: ['/images/Services_008.jpg', '/images/Services_009.jpg'],
    faq: [
      { question: 'How many pages is a typical project brochure?', answer: 'Most run 16 to 32 pages depending on the number of unit types and amenities, though we have built single-fold leave-behinds and 60-page collector\'s editions too.' },
      { question: 'Do you manage the print run as well?', answer: 'Yes, we oversee paper selection, proofing and the press run with our print partners so the final brochure matches what was approved on screen.' },
    ],
  },
  {
    slug: 'campaign-design',
    num: 4,
    title: 'Campaign design',
    tagline: 'Creative that cuts through clutter and gives the project an unfair share of attention.',
    description: [
      'Most launch campaigns lead with the project. Ours lead with a single sharp idea the competition is not saying, then let the project prove it, across hoardings, print, digital and the sales lounge.',
      'Consistency, more than cleverness, is what actually builds recall in a category buyers only shop in once every few years. We repeat the idea relentlessly until the market can finish the sentence for us.',
    ],
    highlights: [
      'Campaign idea and key visual',
      'Media adaptation across formats',
      'Launch, pre-launch and possession phasing',
      'Sales collateral aligned to the campaign',
    ],
    image: '/images/Services_Campaign Design.jpg',
    secondaryImage: '/images/Work Process_004.jpg',
    gallery: ['/images/Services_010.jpg', '/images/Services_004.jpg'],
    faq: [
      { question: 'Do you also plan the media buy?', answer: 'We design and adapt the campaign across formats; for media planning and buying we work alongside your media agency or can recommend partners we trust.' },
      { question: 'Can a campaign be phased across launch stages?', answer: 'Yes, we typically plan a pre-launch teaser, a launch push and a possession or milestone phase, each with its own key message built on the same idea.' },
    ],
  },
  {
    slug: '360-project-branding',
    num: 5,
    title: '360° project branding',
    tagline: 'We make one powerful brand speak fluently across every physical and digital touchpoint.',
    description: [
      'The gap between a project\'s advertising and its actual sales experience is where trust is lost fastest. A polished campaign followed by an inconsistent sales office undoes weeks of media spend in a single site visit.',
      '360° branding writes the rules once, typography, colour, tone, imagery, so every vendor producing a brochure, a signage panel or a reel works from the same brief. A buyer should not be able to tell where one touchpoint ends and the next begins.',
    ],
    highlights: [
      'Signage and way-finding systems',
      'Sales office and site branding',
      'Vendor-ready brand guidelines',
      'Cross-touchpoint consistency audits',
    ],
    image: '/images/Services_360 Branding Design.jpg',
    secondaryImage: '/images/Work Process_005.jpg',
    gallery: ['/images/Services_005.jpg', '/images/Services_006.jpg'],
    faq: [
      { question: 'What counts as a touchpoint here?', answer: 'Anything a buyer sees or reads: hoardings, brochures, signage, sales office branding, reels, even the WhatsApp catalogue your sales team shares.' },
      { question: 'Can you audit a project that is already mid-launch?', answer: 'Yes, we run a consistency audit across existing touchpoints, flag the gaps, and bring everything back in line with one brief.' },
    ],
  },
  {
    slug: 'reels-digital-communication',
    num: 6,
    title: 'Reels & digital communication',
    tagline: 'Scroll-stopping content that moves fast, speaks sharp and keeps the project in conversation.',
    description: [
      'On a feed, a reel is competing with everything else in a thumb\'s flick. If the first three seconds do not promise something, a feeling of scale, of light, of a life being lived in the space, the rest of the thirty do not matter.',
      'We cut for sound-off viewing first, since most reels are watched muted, then layer sound design in as a second pass. Captions carry the story; music carries the mood.',
    ],
    highlights: [
      'Short-form reels and social content',
      'Content calendars and posting cadence',
      'Community and enquiry response support',
      'Performance-led creative iteration',
    ],
    image: '/images/Services_Reels.jpg',
    secondaryImage: '/images/Work Process_006.jpg',
    gallery: ['/images/Services_Reels_2.jpg', '/images/Services_007.jpg'],
    faq: [
      { question: 'How many reels do you produce a month?', answer: 'Most retainers run 8 to 12 reels a month, mixing project walkthroughs, amenity highlights and quick-answer content, scoped to your launch calendar.' },
      { question: 'Do you shoot new footage or edit existing footage?', answer: 'Both. We can shoot fresh site footage on a schedule, or work from your existing photo and video library when a fast turnaround is needed.' },
    ],
  },
  {
    slug: 'corporate-project-films',
    num: 7,
    title: 'Corporate & project films',
    tagline: 'We give corporate vision a voice and project stories a powerful screen presence.',
    description: [
      'A film has a job a brochure cannot do: it lets a buyer feel scale, light and craft before the building is even finished. We script, shoot and edit with that promise in mind, whether it is a project walkthrough or a corporate vision film.',
      'From site recce to final grade, every film is built to hold its own on a hoarding-sized screen, a laptop, or a phone in a broker\'s hand.',
    ],
    highlights: [
      'Project walkthrough and launch films',
      'Corporate vision and leadership films',
      'Drone, cinematic and 3D-render sequences',
      'Sound design and colour grading',
    ],
    image: '/images/Services_Corporate Video.jpg',
    secondaryImage: '/images/Work Process_007.jpg',
    gallery: ['/images/Services_008.jpg', '/images/Services_010.jpg'],
    faq: [
      { question: 'Do you handle drone and 3D render footage?', answer: 'Yes, we coordinate drone shoots where permitted and can blend in 3D-render sequences for phases of the project that are not built yet.' },
      { question: 'What is the typical turnaround for a project film?', answer: 'A three to five minute film usually takes three to four weeks end to end, from script and recce to the final graded edit.' },
    ],
  },
  {
    slug: 'print-outdoor-media',
    num: 8,
    title: 'Print & outdoor media',
    tagline: 'Turning every hoarding, newspaper and site surface into a reason to look.',
    description: [
      'Outdoor media gets one glance from a moving car and one column-inch of attention in a newspaper. We design for that reality, a single idea, legible from a distance, consistent with everything else the project is saying.',
      'From hoardings to newspaper ads to site boundary wraps, every surface is treated as media, not decoration, and produced to hold up in the sun, the rain and the print run.',
    ],
    highlights: [
      'Hoardings and unipoles',
      'Newspaper and magazine ads',
      'Site boundary and gate branding',
      'Production oversight and vendor coordination',
    ],
    image: '/images/Services_Print Media.jpg',
    secondaryImage: '/images/Work Process_001.jpg',
    gallery: ['/images/Services_009.jpg', '/images/Services_001.jpg'],
    faq: [
      { question: 'Do you coordinate with printing and hoarding vendors directly?', answer: 'Yes, we brief and review proofs with your print and hoarding vendors so the final output matches the approved design, colour included.' },
      { question: 'Can the same creative scale from a hoarding to a newspaper ad?', answer: 'That is exactly how we design it, one key visual and message adapted to each format\'s size, distance and reading time.' },
    ],
  },
  {
    slug: 'exhibition-stall-designs',
    num: 9,
    title: 'Exhibition & stall designs',
    tagline: 'Designed to turn heads before the conversation even begins.',
    description: [
      'A property expo gives a project thirty seconds and thirty square feet to make a case a competitor\'s stall right next door is trying to make too. We design stalls that are noticed first and remembered longest.',
      'From layout and materials to lighting and signage, every stall is built around the same brand idea running through the project\'s brochure and campaign, so a visitor recognises it instantly.',
    ],
    highlights: [
      'Stall concept, layout and 3D visualisation',
      'Material and lighting specification',
      'On-ground production supervision',
      'Collateral and giveaway design',
    ],
    image: '/images/Services_003.jpg',
    secondaryImage: '/images/Work Process_002.jpg',
    gallery: ['/images/Services_002.jpg', '/images/Services_010.jpg'],
    faq: [
      { question: 'Do you supervise the stall build on-site?', answer: 'Yes, we send a production lead to oversee setup at the venue so the stall matches the approved 3D visual, down to lighting and signage placement.' },
      { question: 'Can you design for a recurring expo circuit?', answer: 'We can design a modular stall system that adapts across multiple expos and city venues without rebuilding the concept each time.' },
    ],
  },
]

export const GENERAL_FAQ: FAQItem[] = [
  { question: 'How long does a full brand identity take?', answer: 'A complete strategy-to-identity project typically runs four to six weeks. Brochures, campaigns and films are scoped separately once the identity is locked.' },
  { question: 'Do you only work with real estate projects?', answer: 'Real estate and high-value businesses, architecture, hospitality and premium retail, are our core focus, which is why our process is built around long sales cycles and trust-heavy decisions.' },
  { question: 'Can you handle print production and vendor coordination?', answer: 'Yes, for brochures, hoardings and exhibition stalls we brief and review proofs with your production vendors so the final output matches the approved design.' },
  { question: 'Do you work with projects outside Hyderabad?', answer: 'Yes, our studio is based in Hyderabad but we run projects across India, coordinating site visits and vendor production remotely where needed.' },
  { question: 'What is included in 360° project branding?', answer: 'Everything a buyer sees: naming and identity, brochure and campaign, signage and sales-office branding, reels and films, brought under one consistent brief.' },
]

export function getAllServices(): ServiceData[] {
  return SERVICES
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
