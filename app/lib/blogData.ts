export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  cover: string
  content: string[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-real-estate-brands-need-more-than-a-logo',
    title: 'Why real estate brands need more than a logo',
    excerpt:
      'A wordmark is where a brand starts, not where it ends. Here is what actually makes a project brand stick in a buyer\'s mind.',
    date: '2026-06-18',
    category: 'Branding',
    cover: '/images/Gallery_001.jpg',
    content: [
      'A logo is the easiest part of a brand to commission and the easiest part to forget. What buyers actually remember is a feeling: the way a lobby is lit, the tone of a brochure, the promise a campaign made before they ever visited the site.',
      'For real estate specifically, the brand has to do a harder job than most categories. It has to justify a price per square foot, carry trust across a construction timeline of years, and hold together across sales offices, hoardings, brochures and site signage that are often produced by different vendors at different times.',
      'That is why our process starts with positioning and naming before a single visual is drawn. Get the idea right, and every touchpoint downstream, from the brochure to the reel to the site hoarding, becomes easier to make and more consistent to hold.',
    ],
  },
  {
    slug: 'anatomy-of-a-brochure-that-gets-read',
    title: 'The anatomy of a brochure that actually gets read',
    excerpt:
      'Most project brochures are skimmed for ten seconds and binned. A few get kept on the coffee table. Here is the difference.',
    date: '2026-05-27',
    category: 'Print',
    cover: '/images/Gallery_002.jpg',
    content: [
      'A brochure competes with every other brochure a buyer collected that weekend. The ones that survive share a pattern: they open with a single strong idea on page one, not a floor plan.',
      'Every spread earns its place by answering a real question a buyer is asking, location, layout, amenities, trust, in an order that mirrors how a decision actually gets made, not how the org chart is structured.',
      'And the paper, print finish and pacing of images matter as much as the copy. A brochure is often the only physical object a buyer takes home from a site visit. It should feel like the building it is describing.',
    ],
  },
  {
    slug: 'naming-a-project-buyers-remember',
    title: 'Naming a project: how we land on names buyers remember',
    excerpt:
      'A good project name has to survive being said out loud by a broker, printed on a hoarding, and remembered six months later. Most names fail one of the three.',
    date: '2026-05-04',
    category: 'Naming',
    cover: '/images/Gallery_003.jpg',
    content: [
      'Every naming project starts with a filter, not a brainstorm: what does this location, this developer and this category of buyer actually respond to. A farmhouse project and a commercial tower are not solving the same naming problem.',
      'From there we generate wide, then narrow hard. A name has to be ownable (not already claimed nearby), sayable across languages in the market it is selling in, and stretchable across a brochure, a hoarding and a WhatsApp forward without losing its shape.',
      'The best test is the dumbest one: say it out loud to someone outside the project, then ask them to repeat it back an hour later. If they cannot, neither will a buyer.',
    ],
  },
  {
    slug: 'what-makes-a-launch-campaign-cut-through',
    title: 'What makes a launch campaign cut through the noise',
    excerpt:
      'Every project launches into a market already full of hoardings promising the same three things. Here is how we make one stand out.',
    date: '2026-04-12',
    category: 'Campaigns',
    cover: '/images/Gallery_004.jpg',
    content: [
      'Most launch campaigns lead with the project. The ones that cut through lead with a single sharp idea, and let the project prove it. That ordering changes everything downstream, the headline, the visual, the media plan.',
      'We build campaigns around one insight the competition is not saying, then repeat it relentlessly across every surface, hoarding, brochure, reel, so the market hears the same sentence enough times to remember it.',
      'Consistency, more than cleverness, is what actually builds recall in a category buyers only shop in once every few years.',
    ],
  },
  {
    slug: 'branding-beyond-the-sign-board',
    title: 'Branding a project across every touchpoint, not just the sign board',
    excerpt:
      'A brand that only lives on the hoarding falls apart the moment a buyer walks into the sales lounge. 360 branding means the idea survives every handoff.',
    date: '2026-03-22',
    category: 'Branding',
    cover: '/images/Gallery_005.jpg',
    content: [
      'The gap between a project\'s advertising and its actual sales experience is where trust is lost fastest. A polished campaign followed by an inconsistent brochure or an unbranded sales office undoes weeks of media spend in a single site visit.',
      '360 branding is less about touching everything and more about writing down the rules once, typography, colour, tone, imagery, so every vendor producing a brochure, a signage panel or a reel is working from the same brief.',
      'Done properly, a buyer should not be able to tell whether they are looking at a hoarding, a brochure or a reel. It should all read as one project, one voice.',
    ],
  },
  {
    slug: 'designing-reels-that-stop-the-scroll',
    title: 'The 30-second rule: designing reels that stop the scroll',
    excerpt:
      'A real estate reel has less time to earn attention than almost any other format. Here is what we build into the first three seconds.',
    date: '2026-02-14',
    category: 'Digital',
    cover: '/images/Gallery_006.jpg',
    content: [
      'On a feed, a reel is competing with everything else in a thumb\'s flick. If the first three seconds do not promise something, the rest of the thirty do not matter.',
      'For real estate, that promise is rarely the floor plan. It is a feeling, of scale, of light, of a life being lived in the space, delivered fast, then followed by the one detail (location, price, possession date) the viewer actually needs to act.',
      'We cut for sound-off viewing first, since most reels are watched muted, then layer sound design in as a second pass. Captions carry the story; music carries the mood.',
    ],
  },
]

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
