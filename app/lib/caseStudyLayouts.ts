/**
 * Per-case-study image layout overrides, keyed by slug. Anything not
 * mentioned here just renders as a single full-width image in its normal
 * numeric order — these entries only carve out the exceptions: an image
 * that needs a heading above it, or images that share a row.
 */

interface LabeledSpec {
  type: 'labeled'
  /** heading rendered next to the image, e.g. "Logo Design" */
  label: string
  /** optional paragraph under the heading (fills the side layout's left column) */
  body?: string
  /** the image's number, from its filename (e.g. "L2.jpg" → 2) */
  num: number
  /** 'top' (default): heading above the image. 'side': text on the left, image on the right. */
  layout?: 'top' | 'side'
}

interface ActualSpec {
  type: 'actual'
  /** the image's number, from its filename (e.g. "L6.jpg" → 6) */
  num: number
}

interface IntroSpec {
  type: 'intro'
  /** big centered title, e.g. "Greenleaf Heritage" */
  label: string
  /** bold centered sub-hook under the title, e.g. "Only 11 villas. One unmistakable identity." */
  subtitle?: string
  /** centered description paragraph(s) under the subtitle */
  body?: string | string[]
  /** bolder line under the description, e.g. "Location : Vadodara, Gujarat" */
  location?: string
  /** the image shown below the text, from its filename number */
  num: number
}

interface RowImageSpec {
  /** the image's number, from its filename (e.g. "L4.jpg" → 4) */
  num: number
  /** manual flex-grow weight (e.g. 30 / 70 for a 30:70 split). Omit to size
   * this image by its own natural aspect ratio instead (the default). */
  width?: number
}

interface RowSpec {
  type: 'row'
  /** images that share one row, all at the same height — see CaseStudyImageRow */
  images: RowImageSpec[]
  /** show every image uncropped at its natural size instead of the justified full-bleed row */
  actualSize?: boolean
  /** add breathing room (6rem) below the row */
  spaceBelow?: boolean
  /** gap between images in an actualSize row, in rem (default 2). Set 0 for flush images. */
  gap?: number
}

interface SplitSpec {
  type: 'split'
  /** the large image, from its filename number, shown full row height on the left */
  main: number
  /** two images stacked in a column on the right, each half the row height */
  stacked: [number, number]
  /** optional image layered on top of the row, centered, at its own natural size */
  overlay?: number
  /** gap between main/stacked and between the two stacked images, in rem (default 0.6). Set 0 for flush images. */
  gap?: number
  /** how the two stacked images fill their box: 'cover' (default) crops to fill;
   * 'contain' shows the whole image uncropped, letterboxed if its aspect ratio doesn't match;
   * 'none' skips object-fit entirely — the image just scales to the column width at its own aspect ratio */
  stackedFit?: 'fill' | 'cover' | 'contain' | 'none'
}

interface StoryContentBlock {
  /** 'lead': a bold standalone statement line (one per item). 'paragraph': regular body copy.
   * 'steps': a short journey/progression list (e.g. "From X... to Y..."), styled distinctly.
   * 'list': a bullet list (e.g. key highlights). */
  type: 'lead' | 'paragraph' | 'steps' | 'list'
  items: string[]
}

interface StorySpec {
  type: 'story'
  /** small section label above the content, e.g. "Our Solution" */
  heading: string
  /** ordered content blocks making up the section body */
  blocks: StoryContentBlock[]
  /** where this text-only section sits among the numbered images — use a
   * fractional value (e.g. 8.5) to place it between image 8 and image 9 */
  num: number
}

export type CaseStudySectionSpec = LabeledSpec | RowSpec | ActualSpec | IntroSpec | SplitSpec | StorySpec

export interface CaseStudyInfoBlock {
  title: string
  subtitle: string
  body: string[]
}

/** per-study override for the PortfolioInfo right column: instead of one
 * title + description, render a sequence of title/subtitle/body pairs */
export const CASE_STUDY_INFO_BLOCKS: Record<string, CaseStudyInfoBlock[]> = {
  'festive-vibes': [
    {
      title: 'Don’t Sell Your Projects.',
      subtitle: 'Sell Your Ambitions.',
      body: [
        "Festival Vibes wasn't looking for a way to attract buyers. They wanted to make sure their project would be able to gain their trust and respect.",
        'A well-planned residential project deserves a communication approach that feels as considered and well-planned as the project itself. We turned it into a premium real estate brochure that allowed buyers to see a lifestyle rather than just a project.',
      ],
    },
    {
      title: 'People Don’t Purchase Amenities.',
      subtitle: 'They Purchase Certainty.',
      body: [
        'The project had beautiful architecture, open spaces, amenities, and the lifestyle to go with it. The problem is to turn all those assets into a story that would feel effortless rather than overwhelming.',
      ],
    },
  ],
  'happy-mall': [
    {
      title: 'A Destination Designed To Keep The City Alive.',
      subtitle: 'Retail Is Not Just About Stores.\nIt Is About Giving Customers A Reason To Come Back.',
      body: [
        "Happy Mall was conceptualized as the next generation of Vadodara's lifestyle destinations—an integrated combination of shopping, entertainment, dining, and experience all under one landmark. Zurich Graphics helped in developing a distinctive brand image and high-end marketing materials for Happy Mall, even before it opened its doors to customers.",
        'Good Malls Bring People In. Good Brands Create Destinations.',
      ],
    },
  ],
  'reva-allizza': [
    {
      title: 'Every Great Arrival Deserves A Grand Beginning.',
      subtitle: "First Impressions Don't End At The Entrance Gate.",
      body: [
        "They continue through every boulevard, every landscape, and every carefully planned corner. Reva Allizza was envisioned as a premium residential villa project where architecture and infrastructure work together to create lasting value. Zurich Graphics transformed that vision into a refined real estate branding experience that feels premium from the very first glance.",
        'Because confidence begins before the front door opens.',
      ],
    },
  ],
  'lush-meadows': [
    {
      title: 'Luxury Lives Beyond Architecture.',
      subtitle: 'A Premium Villa Deserves More Than Beautiful Visuals.\nIt Deserves A Brand Story.',
      body: [
        'For Lush Meadows, Zurich Graphics developed a complete residential brochure design that combined architectural storytelling, strategic content, and luxury print aesthetics to position the project as an aspirational weekend villa destination.',
      ],
    },
  ],
  'satyam-surya-manhattan': [
    {
      title: 'When A Skyline Becomes A Statement.',
      subtitle: "Some Landmarks Redefine A City's Horizon.\nOthers Redefine The Way People Experience Everyday Living.",
      body: [
        "Satyam Surya Manhattan was envisioned as a premium residential high-rise where contemporary architecture, luxury residences, curated amenities, and vibrant retail spaces come together as one destination. Zurich Graphics translated that vision into a compelling real estate branding experience that reflects sophistication at every touchpoint.",
        'Because exceptional living deserves exceptional presentation.',
      ],
    },
  ],
  'rk-landmark': [
    {
      title: 'Business Begins With The Right Address.',
      subtitle: "A Landmark Isn't Built With Concrete.\nIt's Built With Confidence.",
      body: [
        "That's exactly what RK Landmark was created to deliver.",
        "Designed for ambitious businesses, premium retail showrooms, and modern office spaces, RK Landmark demanded an identity that reflected its stature. Zurich Graphics crafted a commercial branding experience that transformed architectural excellence into a compelling business proposition — one that speaks to entrepreneurs, investors, and growing brands alike.",
      ],
    },
  ],
}

/** studies that skip the PortfolioInfo block (their intro section covers the same ground) */
export const HIDE_INFO_SLUGS = new Set(['greenleaf-heritage', 'tsl'])

/** studies where every full-bleed single image gets breathing room (6rem) below it,
 * instead of butting straight up against the next image */
export const SPACE_BELOW_SINGLES_SLUGS = new Set(['tsl'])

export const CASE_STUDY_LAYOUTS: Record<string, CaseStudySectionSpec[]> = {
  'greenleaf-heritage': [
    {
      type: 'intro',
      label: "Luxury Isn't Claimed. It's Curated.",
      subtitle: 'Only 11 Villas. One Unmistakable Identity.',
      body: [
        "Greenleaf Heritage wasn't another premium villa project. It was a statement in Roman inspired architecture, crafted for those who value privacy over popularity. Zurich Graphics translated that vision into a luxury brand experience that felt as exclusive as the address itself.",
        "When the audience is exclusive, the communication can't be ordinary.",
      ],
      location: 'Location : Vadodara, Gujarat',
      num: 2,
    },
    {
      type: 'story',
      heading: '',
      num: 7.5,
      blocks: [
        { type: 'lead', items: ["Selling villas wasn't difficult.", 'Selling exclusivity was.'] },
        { type: 'paragraph', items: ['The project already had architectural excellence. What it lacked was a brand presence that reflected its true stature.'] },
        { type: 'lead', items: ['Every interaction needed to whisper prestige not shout luxury.', "Luxury isn't louder. It's rarer."] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 14.5,
      blocks: [
        { type: 'lead', items: ["We didn't design a brochure.", 'We designed aspiration.'] },
        { type: 'paragraph', items: ['Every visual, headline, layout, and finish was strategically crafted to elevate perception. Roman-inspired aesthetics, editorial storytelling, premium print execution, and refined brand language came together to create a luxury real estate identity that buyers instantly connected with.'] },
        { type: 'lead', items: ['Architecture builds homes. Branding builds desire.'] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 21.5,
      blocks: [
        { type: 'lead', items: ['Greenleaf Heritage became more than a villa launch.', 'It became a benchmark in luxury real estate branding, villa brochure design, and property marketing.'] },
        { type: 'paragraph', items: ['The brand commanded attention, strengthened buyer confidence, and elevated perceived value long before the first site visit.'] },
        { type: 'lead', items: ["Because premium buyers don't chase luxury. They recognize it."] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 26.5,
      blocks: [
        { type: 'list', items: [
          'Luxury Villa Branding',
          'Real Estate Brochure Design',
          'Roman-Inspired Creative Direction',
          'Property Brand Positioning',
          'Editorial Storytelling',
          'Premium Print Production',
          'Luxury Marketing Collateral',
          'Strategic Brand Communication',
        ] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 28.5,
      blocks: [
        { type: 'lead', items: ['Some projects sell homes.', 'We build brands buyers aspire to belong to.'] },
      ],
    },
  ],
  'tsl': [
    {
      type: 'intro',
      label: 'Not Just A Building. A Business Statement.',
      subtitle: "Every Successful Venture Deserves More Than An Office.\nIt Deserves An Identity.",
      body: [
        'TSL is envisioned as a premium commercial landmark where modern architecture, high-street retail, and contemporary workspaces come together to create an address that inspires confidence and attracts opportunity.',
        'Built to be noticed. Designed to perform.',
        'Because every thriving business begins with the right foundation.',
      ],
      location: 'Location : Surat, Gujarat',
      num: 2,
    },
    {
      type: 'story',
      heading: '',
      num: 4.5,
      blocks: [
        { type: 'lead', items: ['Space attracts.', 'Experience converts.'] },
        { type: 'paragraph', items: ['The project already possessed architectural excellence, premium planning, and exceptional visibility. The real challenge was translating these strengths into a brand experience that investors could trust and businesses could proudly associate with.'] },
        { type: 'lead', items: ['Perception creates value before possession does.'] },
      ],
    },
    { type: 'row', images: [{ num: 7 }, { num: 8 }], spaceBelow: true },
    {
      type: 'story',
      heading: '',
      num: 8.5,
      blocks: [
        { type: 'lead', items: ['Every page earned attention.', 'Every visual built confidence.'] },
        { type: 'paragraph', items: ['From commercial branding and brochure design to architectural storytelling and 3D visualization, every element was crafted with one purpose — to communicate aspiration with clarity and position TSL as a destination where businesses belong.'] },
        { type: 'lead', items: ['Good design gets noticed.', 'Great branding gets remembered.'] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 12.5,
      blocks: [
        { type: 'lead', items: ['A landmark with a lasting impression.'] },
        { type: 'paragraph', items: ["TSL entered the market with a commercial identity that reflects ambition, credibility, and timeless appeal. Every touchpoint strengthens buyer confidence while reinforcing its position as one of Surat's premium business destinations."] },
        { type: 'lead', items: ['Some projects create spaces.', 'Exceptional ones create opportunities.'] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 15.5,
      blocks: [
        { type: 'list', items: [
          'Premium Commercial Landmark',
          'High-Street Retail Destination',
          'Modern Office Spaces',
          'Commercial Real Estate Branding',
          'Commercial Brochure Design',
          '3D Architectural Visualization',
          'Architectural Storytelling',
          'Premium Marketing Collateral',
          'Property Branding & Identity',
          'Sales-Focused Brand Communication',
        ] },
      ],
    },
  ],
  'lush-meadows': [
    { type: 'labeled', label: 'Logo Design', num: 2 },
    { type: 'row', images: [{ num: 4, width: 40 }, { num: 5, width: 60 }] },
    { type: 'actual', num: 6 },
    { type: 'actual', num: 7 },
    {
      type: 'story',
      heading: '',
      num: 7.5,
      blocks: [
        { type: 'lead', items: ["Designing a real estate brochure isn't about showcasing amenities.", 'It\'s about creating aspiration.'] },
        { type: 'paragraph', items: ['The objective was to transform architectural plans and project specifications into an emotional buying experience while maintaining a premium brand identity.'] },
      ],
    },
    { type: 'labeled', label: 'Logo Icon', num: 9, layout: 'side' },
    { type: 'row', images: [{ num: 10 }, { num: 11 }, { num: 12 }], actualSize: true },
    {
      type: 'story',
      heading: '',
      num: 12.5,
      blocks: [
        { type: 'lead', items: ['We approached Lush Meadows as a branding exercise rather than a brochure.'] },
        { type: 'paragraph', items: ["Through refined layouts, compelling copywriting, premium typography, and immersive visuals, we created a luxury property brochure that reflected the project's calm, nature-inspired lifestyle while strengthening buyer confidence."] },
      ],
    },
    { type: 'row', images: [{ num: 14 }, { num: 15 }], spaceBelow: true },
    {
      type: 'story',
      heading: '',
      num: 15.5,
      blocks: [
        { type: 'paragraph', items: ["The final villa brochure design became a powerful sales tool, helping communicate the project's premium positioning with clarity and consistency."] },
        { type: 'lead', items: ["Because exceptional real estate marketing collateral doesn't just inform.", 'It influences decisions.'] },
      ],
    },
    { type: 'labeled', label: 'Stall Panel Design', num: 17 },
    {
      type: 'story',
      heading: '',
      num: 17.5,
      blocks: [
        { type: 'list', items: [
          'Residential Villa Brochure Design',
          'Luxury Real Estate Brochure Design',
          'Real Estate Branding & Identity',
          'Property Marketing Collateral Design',
          'Architectural Brochure Layout Design',
          'Premium Copywriting & Content Strategy',
          'Luxury Print Design & Production',
          'Master Plan & Amenities Presentation',
          'Visual Storytelling for Real Estate',
          'Sales-Driven Brochure Design',
          'Brand Positioning for Residential Projects',
          'High-End Marketing Communication',
        ] },
      ],
    },
  ],
  'satyam-surya-manhattan': [
    { type: 'actual', num: 2 },
    { type: 'actual', num: 3 },
    { type: 'actual', num: 4 },
    { type: 'row', images: [{ num: 5 }, { num: 6 }], actualSize: true },
    {
      type: 'story',
      heading: '',
      num: 6.5,
      blocks: [
        { type: 'lead', items: ['Luxury is never explained.', 'It is experienced.'] },
        { type: 'paragraph', items: ["The project offered iconic tower architecture, premium 2 & 3 BHK residences, lifestyle amenities, landscaped podium spaces, and modern retail avenues. The challenge was transforming these strengths into a real estate brochure design that felt refined, aspirational, and aligned with the expectations of today's premium homebuyers. Every detail needed to inspire confidence before the first site visit."] },
        { type: 'lead', items: ['Great brands create belief before conversations begin.'] },
      ],
    },
    { type: 'row', images: [{ num: 9 }, { num: 10 }, { num: 11 }] },
    {
      type: 'story',
      heading: '',
      num: 12.5,
      blocks: [
        { type: 'lead', items: ['Every spread created anticipation.', 'Every visual strengthened perception.'] },
        { type: 'paragraph', items: ["Through strategic property branding, premium brochure design, architectural storytelling, immersive layouts, and carefully structured communication, we developed a complete marketing experience that showcased the project's scale, elegance, and lifestyle. Every page balanced luxury with clarity, ensuring buyers connected emotionally while understanding the project's value."] },
        { type: 'lead', items: ['Design captures attention. Brand stories create desire.'] },
      ],
    },
    { type: 'split', main: 14, stacked: [15, 16] },
    { type: 'row', images: [{ num: 19 }, { num: 20 }] },
    {
      type: 'story',
      heading: '',
      num: 20.5,
      blocks: [
        { type: 'paragraph', items: ['Satyam Surya Manhattan launched with a premium identity worthy of its stature. The residential project branding, luxury marketing collateral, and architectural presentation elevated buyer perception, strengthened market positioning, and established the project as a distinguished residential destination in Kharghar, Navi Mumbai.'] },
        { type: 'lead', items: ['Some towers reach the skyline.', 'The remarkable ones define it.'] },
      ],
    },
    { type: 'actual', num: 22.5 },
    {
      type: 'story',
      heading: '',
      num: 28.5,
      blocks: [
        { type: 'list', items: [
          'Premium Residential High-Rise Branding',
          'Real Estate Brochure Design',
          'Property Branding & Identity',
          'Architectural Visual Storytelling',
          'Luxury Marketing Collateral',
          '3D Architectural Visualization',
          'Premium Print Design',
          'Sales-Focused Brand Communication',
          'Residential Project Branding',
          'High-End Real Estate Creative',
        ] },
      ],
    },
  ],
  'festive-vibes': [
    { type: 'actual', num: 2 },
    { type: 'actual', num: 3 },
    { type: 'row', images: [{ num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }] },
    {
      type: 'story',
      heading: '',
      num: 8.5,
      blocks: [
        { type: 'lead', items: ['Every page must provide an answer to the next question.'] },
        { type: 'paragraph', items: ['We stopped trying to fill pages with information and started thinking about creating a journey.'] },
        { type: 'steps', items: ['From an aspiration...', 'to a lifestyle...', 'to planning...', 'to confidence.'] },
        { type: 'paragraph', items: ["Each page brought buyers closer to the point when they would make a decision, while reinforcing the project's brand identity at the same time."] },
      ],
    },
    { type: 'row', images: [{ num: 11 }, { num: 13 }, { num: 14 }], spaceBelow: true },
    {
      type: 'story',
      heading: '',
      num: 14.5,
      blocks: [
        { type: 'lead', items: ['Beautiful design gets noticed.', 'Good communication gets remembered.'] },
        { type: 'paragraph', items: ['A careful visual strategy, thoughtful layouts, renders, floor plans, and lifestyle shots were used to create a premium property marketing brochure that never became overwhelming despite its complexity.'] },
      ],
    },
    { type: 'row', images: [{ num: 15, width: 40 }, { num: 16, width: 60 }] },
    {
      type: 'story',
      heading: '',
      num: 16.5,
      blocks: [
        { type: 'lead', items: ['Premium communication leads to a premium project perception.'] },
        { type: 'paragraph', items: ['Our design solution allowed us to turn the brochure into a powerful marketing tool that helps to market the Festival Vibes project as confidently as possible.'] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 26.5,
      blocks: [
        { type: 'list', items: [
          'Premium Real Estate Brochure Design',
          'Residential Project Branding',
          'Lifestyle-driven Visual Storytelling',
          'Floor Plans and Amenities Presentation',
          'Brand Identity and Print Design',
          'Brochure for Developers and Builders',
        ] },
      ],
    },
  ],
  'reva-allizza': [
    { type: 'actual', num: 2 },
    {
      type: 'story',
      heading: '',
      num: 3.5,
      blocks: [
        { type: 'lead', items: ["Luxury isn't built with specifications.", "It's built with perception."] },
        { type: 'paragraph', items: ['The project offered everything buyers expect from premium villa living. The real challenge was presenting those strengths through a residential brochure design that felt elegant, structured, and worthy of the lifestyle it promised.'] },
        { type: 'lead', items: ['People trust what they can imagine.'] },
      ],
    },
    { type: 'split', main: 4, stacked: [5, 6], gap: 0, stackedFit: 'fill' },
    { type: 'split', main: 8, stacked: [9, 10], gap: 0 },
    {
      type: 'story',
      heading: '',
      num: 10.5,
      blocks: [
        { type: 'lead', items: ['Every page had a purpose.', 'Every visual had a voice.'] },
        { type: 'paragraph', items: ["Through thoughtful real estate brochure design, premium layouts, architectural storytelling, and carefully structured content, we created a communication system that balanced aspiration with clarity. The result wasn't just a brochure—it became an extension of the project's identity."] },
        { type: 'lead', items: ['Design attracts attention. Storytelling earns trust.'] },
      ],
    },
    { type: 'row', images: [{ num: 11 }, { num: 12 }] },
    {
      type: 'story',
      heading: '',
      num: 12.5,
      blocks: [
        { type: 'lead', items: ['Reva Allizza entered the market with a brand that reflected its ambition.'] },
        { type: 'paragraph', items: ["The property branding, premium marketing collateral, and architectural presentation elevated buyer perception while strengthening the project's premium positioning in Bharuch's residential market."] },
        { type: 'lead', items: ['Some projects build homes.', 'The memorable ones build belonging.'] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 18.5,
      blocks: [
        { type: 'list', items: [
          'Premium Residential Villa Branding',
          'Real Estate Brochure Design',
          'Property Branding & Identity',
          'Architectural Visual Storytelling',
          'Luxury Marketing Collateral',
          'Master Plan Presentation',
          'Premium Print Design',
          'Sales-Focused Brand Communication',
          'Residential Project Branding',
          'High-End Real Estate Creative',
        ] },
      ],
    },
  ],
  'happy-mall': [
    { type: 'actual', num: 2 },
    {
      type: 'story',
      heading: '',
      num: 2.5,
      blocks: [
        { type: 'lead', items: ['A landmark needs more than just visibility.', 'It needs memorability.'] },
        { type: 'paragraph', items: ['With over 100 retail outlets, entertainment zones, dining destinations, and premium infrastructure, the key challenge was not highlighting scale but rather communicating the experience that would make people want to be a part of it.'] },
        { type: 'lead', items: ['People do not visit buildings; they visit possibilities.'] },
      ],
    },
    { type: 'row', images: [{ num: 4 }, { num: 5 }, { num: 6 }], actualSize: true },
    { type: 'actual', num: 7 },
    { type: 'actual', num: 8 },
    { type: 'actual', num: 9 },
    {
      type: 'story',
      heading: '',
      num: 9.5,
      blocks: [
        { type: 'lead', items: ['Each page was designed to spark the anticipation.', 'Not only deliver information.'] },
        { type: 'paragraph', items: ['From dramatic architectural visuals and engaging layouts to compelling story-telling and business-oriented communication strategy, each element of creativity made sure that Happy Mall was positioned as a commercially viable destination for shoppers, brands, and investors.'] },
        { type: 'lead', items: ['Because perception starts well before the first visit.'] },
      ],
    },
    { type: 'split', main: 11, stacked: [12, 13],  gap: 0, stackedFit: 'cover' },
    {
      type: 'story',
      heading: '',
      num: 13.5,
      blocks: [
        { type: 'lead', items: ['Happy Mall has been launched with a brand identity as striking as its architecture.'] },
        { type: 'paragraph', items: ["The marketing materials helped in building the credibility of the project, increased the confidence of the investors and showcased the development as one of Vadodara's most exciting retail destinations."] },
        { type: 'lead', items: ['When design inspires, destinations turn into landmarks.'] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 17.5,
      blocks: [
        { type: 'list', items: [
          'Commercial Mall Branding',
          'Real Estate Brochure Design',
          'Retail Destination Positioning',
          'Brand Communication Focused on Investment',
          'Architectural Visual Storytelling',
          'High-End Sales Collateral Design',
          'Commercial Property Marketing',
          'Mall Launch Campaign Creative Materials',
          'Luxury Print Production',
          'Strategic Brand Experience',
        ] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 17.6,
      blocks: [
        { type: 'lead', items: ['A mall is judged by its footfall.', 'A brand is remembered for the experience it offers.', 'Happy Mall had both in its DNA.'] },
      ],
    },
  ],
  'rk-landmark': [
    {
      type: 'story',
      heading: '',
      num: 3.5,
      blocks: [
        { type: 'lead', items: ['Commercial spaces are everywhere.', 'Business destinations are rare.', 'The difference lies in perception.'] },
        { type: 'paragraph', items: ['The project needed more than a brochure. It required a premium commercial identity that communicated credibility, investment value, and business potential. Every detail had to inspire confidence before the first site visit.'] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 7.5,
      blocks: [
        { type: 'lead', items: ['Every layout served a purpose.', 'Every visual reinforced trust.', 'Every page moved the conversation forward.'] },
        { type: 'paragraph', items: ['Through strategic commercial brochure design, premium visual storytelling, architectural presentation, and sales-focused content, we created a brand experience that highlighted location, infrastructure, and business opportunity. The result was a marketing asset that looked as professional as the businesses it was built to welcome.'] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 11.5,
      blocks: [
        { type: 'lead', items: ['Businesses saw opportunity.', 'Investors saw value.', 'The market saw a landmark.'] },
        { type: 'paragraph', items: ["RK Landmark launched with a premium commercial identity that strengthened its positioning in Rajkot's growing business district. The brochure, branding, and marketing collateral established a strong first impression while showcasing the project as a future-ready destination for offices, retail showrooms, and commercial investment."] },
      ],
    },
    {
      type: 'story',
      heading: '',
      num: 14.5,
      blocks: [
        { type: 'list', items: [
          'Premium Commercial Building Branding',
          'Commercial Brochure Design',
          'Office Space Marketing',
          'Retail Showroom Branding',
          'Commercial Property Branding',
          'Corporate Identity Design',
          'Architectural Visual Storytelling',
          'Sales-Focused Marketing Collateral',
          'Commercial Real Estate Branding',
          'Premium Print Design',
          'Business Address Positioning',
          'Commercial Investment Communication',
        ] },
      ],
    },
  ],
}
