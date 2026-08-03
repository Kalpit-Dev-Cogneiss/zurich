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
    title: 'Brand Strategy & Consulting',
    tagline: 'The Master Plan Needs A Master Thought.',
    description: [
      "Land gives a project its address. A clear idea gives it a place in the market. To find that idea, we study the site, read the market, understand the buyer and get close to the developer's ambition. Somewhere in that mix is the project's real edge. We bring it forward, sharpen it and turn it into a position the buyer can immediately understand while the brand can confidently own.",
      "Once that master thought lands, the brand knows exactly where to go. The name finds its voice. The identity gets its attitude. The brochure builds the case. The campaign and sales communication carry it into the market. Different expressions. One direction. That's real estate brand strategy consulting at Zurich Graphics: one clear thought, strong enough to keep the entire brand moving as one.",
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
      { question: 'How Long Does A Positioning Project Take?', answer: 'Typically two to three weeks, from the first site and market read to a locked position and messaging framework your team can brief every vendor from.' },
      { question: 'Do You Work From Research Or Gut Instinct?', answer: 'Both. We start with site visits, competitor audits and buyer conversations, then pressure-test every idea against what actually moves a decision in this category.' },
    ],
  },
  {
    slug: 'naming-brand-identity',
    num: 2,
    title: 'Naming & Brand Identity',
    tagline: 'A Good Name Travels. A Strong Identity Arrives With It.',
    description: [
      'A project name has a busy life. It needs to sound right the first time and stay remembered long after. We begin wide, explore every direction and test each possibility for meaning, rhythm, relevance and recall. Then we keep only the names strong enough to carry the project without needing a lengthy explanation.',
      'Once the name is final, we create a visual world around it. The wordmark, palette, typography and brand elements of real estate logo and brand identity design are shaped to work together wherever the project appears. Different spaces. Yet, one unmistakable identity.',
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
      { question: 'Do You Check Names Are Legally Available?', answer: 'We screen every shortlisted name for obvious trademark and local project-name clashes before it goes to you, though final legal clearance sits with your counsel.' },
      { question: 'Can You Redesign An Identity That Already Exists?', answer: 'Yes. We regularly sharpen or fully rebuild identities for projects that launched with a rushed or inconsistent mark.' },
    ],
  },
  {
    slug: 'brochure-design',
    num: 3,
    title: 'Brochure Design',
    tagline: 'Made To Leave The Site. Designed To Stay In Mind.',
    description: [
      'Most site visits end at the gate. A good brochure gets invited home. It lands on the coffee table, gets passed around the family and opens again when the project returns to the conversation. That is the life we design for in real estate brochure design.',
      'We begin with an idea strong enough to pull people in, then let every spread do its job. Location, lifestyle, planning, amenities and details unfold without making the brochure feel like homework. Words and visuals keep the pace. Paper, texture and print finishes add the right personality. Indeed, a project story that sits well in the hand and better in the mind.',
    ],
    highlights: [
      'Narrative structure and page sequencing',
      'Layout, typography and photography direction',
      'Print production and paper selection',
      'Digital and interactive brochure formats',
    ],
    image: '/images/Services_Brochure Design__670 X 502.jpeg',
    secondaryImage: '/images/Work Process_003.jpg',
    gallery: ['/images/Services_008.jpg', '/images/Services_009.jpg'],
    faq: [
      { question: 'How Many Pages Is A Typical Project Brochure?', answer: 'Most run 16 to 32 pages depending on the number of unit types and amenities, though we have built single-fold leave-behinds and 60-page collector\'s editions too.' },
      { question: 'Do You Manage The Print Run As Well?', answer: 'Yes, we oversee paper selection, proofing and the press run with our print partners so the final brochure matches what was approved on screen.' },
    ],
  },
  {
    slug: 'campaign-design',
    num: 4,
    title: 'Campaign Design',
    tagline: 'One Idea With More Than One Address.',
    description: [
      'A project can have a lot to say. A campaign needs to know what to say first. Through 360 degree campaign design, we find that central thought and build the entire launch around it. The message then moves across hoardings, print, digital communication and the sales lounge, adapted to suit each space without losing its original direction.',
      'A hoarding has seconds. Digital has a thumb-scroll. Print gets a little longer. The sales lounge gets the conversation. We shape the message for each moment while keeping the brand unmistakably connected.',
    ],
    highlights: [
      'Campaign idea and key visual',
      'Media adaptation across formats',
      'Launch, pre-launch and possession phasing',
      'Sales collateral aligned to the campaign',
    ],
    image: '/images/Services_Campaign Design_670 X 502.jpeg',
    secondaryImage: '/images/Work Process_004.jpg',
    gallery: ['/images/Services_010.jpg', '/images/Services_004.jpg'],
    faq: [
      { question: 'Do You Also Plan The Media Buy?', answer: 'We design and adapt the campaign across formats; for media planning and buying we work alongside your media agency or can recommend partners we trust.' },
      { question: 'Can A Campaign Be Phased Across Launch Stages?', answer: 'Yes, we typically plan a pre-launch teaser, a launch push and a possession or milestone phase, each with its own key message built on the same idea.' },
    ],
  },
  {
    slug: '360-project-branding',
    num: 5,
    title: '360° Project Branding',
    tagline: "The Address Changes. The Brand Doesn't.",
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
    image: '/images/Services_360 Branding Design_670 X 502.jpeg',
    secondaryImage: '/images/Work Process_005.jpg',
    gallery: ['/images/Services_005.jpg', '/images/Services_006.jpg'],
    faq: [
      { question: 'What Counts As A Touchpoint Here?', answer: 'Anything a buyer sees or reads: hoardings, brochures, signage, sales office branding, reels, even the WhatsApp catalogue your sales team shares.' },
      { question: 'Can You Audit A Project That Is Already Mid-Launch?', answer: 'Yes, we run a consistency audit across existing touchpoints, flag the gaps, and bring everything back in line with one brief.' },
    ],
  },
  {
    slug: 'reels-digital-communication',
    num: 6,
    title: 'Reels & Digital Communication',
    tagline: 'Scroll-Stopping Content That Moves Fast, Speaks Sharp And Keeps The Project In Conversation.',
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
    image: '/images/Services_Reels_670 X 502.jpeg',
    secondaryImage: '/images/Work Process_006.jpg',
    gallery: ['/images/Services_Reels_2.jpg', '/images/Services_007.jpg'],
    faq: [
      { question: 'How Many Reels Do You Produce A Month?', answer: 'Most retainers run 8 to 12 reels a month, mixing project walkthroughs, amenity highlights and quick-answer content, scoped to your launch calendar.' },
      { question: 'Do You Shoot New Footage Or Edit Existing Footage?', answer: 'Both. We can shoot fresh site footage on a schedule, or work from your existing photo and video library when a fast turnaround is needed.' },
    ],
  },
  {
    slug: 'corporate-project-films',
    num: 7,
    title: 'Corporate & Project Films',
    tagline: 'The Project Has A Story. Roll It.',
    description: [
      'Film lets a project move, breathe and make an impression before its doors even open. Scale becomes visible. Spaces feel real. The corporate vision finds a voice. Whether it is a project film, walkthrough or corporate story, we begin with one clear narrative and build every frame around it.',
      "Our team handles the journey from the first site visit and script to the final edit, sound and colour grade. Each film is made to work wherever it plays. Be it on a large sales-lounge screen, inside a presentation or on a phone in a broker's hand. Different screens. Same story. Full impact.",
    ],
    highlights: [
      'Project walkthrough and launch films',
      'Corporate vision and leadership films',
      'Drone, cinematic and 3D-render sequences',
      'Sound design and colour grading',
    ],
    image: '/images/Services_Corporate Video_670 X 502.jpeg',
    secondaryImage: '/images/Work Process_007.jpg',
    gallery: ['/images/Services_008.jpg', '/images/Services_010.jpg'],
    faq: [
      { question: 'Do You Handle Drone And 3D Render Footage?', answer: 'Yes, we coordinate drone shoots where permitted and can blend in 3D-render sequences for phases of the project that are not built yet.' },
      { question: 'What Is The Typical Turnaround For A Project Film?', answer: 'A three to five minute film usually takes three to four weeks end to end, from script and recce to the final graded edit.' },
    ],
  },
  {
    slug: 'print-outdoor-media',
    num: 8,
    title: 'Print & Outdoor Media',
    tagline: 'Turning Every Hoarding, Newspaper Ad And Site Surface Into A Reason To Look.',
    description: [
      "The road is busy. So is the newspaper. Nobody is waiting around to decode an ad. That's why we keep the thought sharp, the message quick and the visual strong enough to do its job in a few passing seconds.",
      'Hoardings, newspaper ads, site façades, boundary wraps and other outdoor formats are designed as one connected campaign. We adapt the idea to each space while keeping the brand instantly recognisable. And because outdoor communication has to face more than an audience, we stay closely involved in production too. Scale, visibility, materials and finishes are all considered. Built to catch the eye. Made to handle the real world.',
    ],
    highlights: [
      'Hoardings and unipoles',
      'Newspaper and magazine ads',
      'Site boundary and gate branding',
      'Production oversight and vendor coordination',
    ],
    image: '/images/Services_Print Media_670 X 502.jpeg',
    secondaryImage: '/images/Work Process_001.jpg',
    gallery: ['/images/Services_009.jpg', '/images/Services_001.jpg'],
    faq: [
      { question: 'Do You Coordinate With Printing And Hoarding Vendors Directly?', answer: 'Yes, we brief and review proofs with your print and hoarding vendors so the final output matches the approved design, colour included.' },
      { question: 'Can The Same Creative Scale From A Hoarding To A Newspaper Ad?', answer: 'That is exactly how we design it, one key visual and message adapted to each format\'s size, distance and reading time.' },
    ],
  },
  {
    slug: 'exhibition-stall-designs',
    num: 9,
    title: 'Exhibition & Stall Designs',
    tagline: 'Before The Handshake, Comes The Head-Turn.',
    description: [
      'Expo halls come with crowds, conversations and plenty of reasons to keep walking. We give visitors one good reason to stop. The stall catches the eye, opens up naturally and makes stepping inside feel like the obvious next move.',
      "Layout, lighting, materials, graphics and signage are all shaped around the project's central idea. The campaign's personality simply moves into the space, recognisable at a glance and engaging up close. Before the first hello, the project has already made an impression. And long after the handshake, it stays remembered. That is real estate exhibition stall design at Zurich Graphics.",
    ],
    highlights: [
      'Stall concept, layout and 3D visualisation',
      'Material and lighting specification',
      'On-ground production supervision',
      'Collateral and giveaway design',
    ],
    image: '/images/Exhibition & Stall Designs_670 X 502.jpeg',
    secondaryImage: '/images/Work Process_002.jpg',
    gallery: ['/images/Services_002.jpg', '/images/Services_010.jpg'],
    faq: [
      { question: 'Do You Supervise The Stall Build On-Site?', answer: 'Yes, we send a production lead to oversee setup at the venue so the stall matches the approved 3D visual, down to lighting and signage placement.' },
      { question: 'Can You Design For A Recurring Expo Circuit?', answer: 'We can design a modular stall system that adapts across multiple expos and city venues without rebuilding the concept each time.' },
    ],
  },
]

export const GENERAL_FAQ: FAQItem[] = [
  { question: 'How Long Does A Full Brand Identity Take?', answer: 'A complete strategy-to-identity project typically runs four to six weeks. Brochures, campaigns and films are scoped separately once the identity is locked.' },
  { question: 'Do You Only Work With Real Estate Projects?', answer: 'Real estate and high-value businesses, architecture, hospitality and premium retail, are our core focus, which is why our process is built around long sales cycles and trust-heavy decisions.' },
  { question: 'Can You Handle Print Production And Vendor Coordination?', answer: 'Yes, for brochures, hoardings and exhibition stalls we brief and review proofs with your production vendors so the final output matches the approved design.' },
  { question: 'Do You Work With Projects Outside Hyderabad?', answer: 'Yes, our studio is based in Hyderabad but we run projects across India, coordinating site visits and vendor production remotely where needed.' },
  { question: 'What Is Included In 360° Project Branding?', answer: 'Everything a buyer sees: naming and identity, brochure and campaign, signage and sales-office branding, reels and films, brought under one consistent brief.' },
]

export function getAllServices(): ServiceData[] {
  return SERVICES
}

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
