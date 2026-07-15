export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Study', href: '/case-study' },
] as const

export const SCHEDULE_ITEMS = [
  {
    time: '07:00',
    heading: 'ENJOY THE FIRST RAYS OF DAWN AS THE CITY UNFOLDS BEFORE YOU IN PANORAMIC WINDOWS, FILLING YOUR HOME WITH LIGHT AND SERENITY.',
    body: '',
    image: '/assets/images/schedule/1.webp',
  },
  {
    time: '08:00',
    heading: 'Feel the ease of movement and harmony as you start your morning with yoga in the open air.',
    body: 'Fresh air, soft rays of sunshine, and smooth movements in rhythm. There is no hustle and bustle here — just you and the perfect start to your morning.',
    image: '/assets/images/schedule/2.webp',
  },
  {
    time: '11:00',
    heading: 'FEEL THE ATTENTION FROM THE FIRST STEP IN THE LOBBY, WHERE THE STAFF IS READY TO PROVIDE YOU WITH UNIQUE SERVICE: FROM ORGANIZING TRANSPORTATION AND BOOKING SERVICES TO SOLVING SMALL DAILY TASKS.',
    body: '',
    image: '/assets/images/schedule/3.webp',
  },
  {
    time: '14:00',
    heading: 'CREATE THE PERFECT MOMENT FOR WORK IN A PRIVATE CO-WORKING SPACE. HERE IT IS EASY TO FOCUS ON YOUR TASKS, HOLD A MEETING WITH A CLIENT, OR DISCUSS STRATEGY WITH YOUR TEAM.',
    body: '',
    image: '/assets/images/schedule/4.webp',
  },
  {
    time: '21:00',
    heading: 'End the day in the tea room in the grand lobby.',
    body: 'Where every gesture becomes part of a ritual: unhurried, mindful, filled with silence. This evening ceremony of slowing down is a way to gently let go of the hustle and bustle of the day and prepare for sleep.',
    image: '/assets/images/schedule/5.webp',
  },
]

export const ADVANTAGES = [
  {
    title: 'lobby',
    image: '/assets/images/advantages/1.webp',
    description:
      "Spacious and elegant lobbies welcome residents with impeccable interiors and a cozy lounge area, embodying the idea of impeccable style and understated luxury. Immerse yourself in an atmosphere of refined comfort comparable to the world's finest hotels.",
  },
  {
    title: 'concierge service',
    image: '/assets/images/advantages/2.webp',
    description:
      'A personal assistant who takes care of your time and comfort. Transportation arrangements, ticket reservations, or everyday tasks — everything will be done with attention and professionalism.',
  },
  {
    title: 'community center',
    image: '/assets/images/advantages/3.webp',
    description:
      'Playing, forgetting about everything in the world, sharing secrets with friends, drawing cartoon characters — the children\'s room opens the door to another world.',
  },
  {
    title: 'co-working space',
    image: '/assets/images/advantages/4.webp',
    description:
      'If you have a brilliant business idea, discuss it with your colleagues without leaving your home. Spacious meeting rooms with high panoramic windows will help you present your project in the best light.',
  },
  {
    title: 'courtyard lounge with fireplace and fountain',
    image: '/assets/images/advantages/5.webp',
    description:
      'A secluded corner in the very center of the complex. Greenery, stylish design solutions, and cozy relaxation areas create an atmosphere of calm and harmony.',
  },
]

export const FITNESS_ITEMS = [
  {
    heading: 'SWIMMING POOL',
    body: 'Sport and luxury combine in the design of the spacious 25-meter swimming pool with 3 lanes. Crystal clear water, soft comfortable sun loungers, light that dissolves the contours.',
    image: '/assets/images/fitness/image-1.webp',
  },
  {
    heading: 'SAUNA',
    body: 'The soothing scent of wood and the crackling of hot stones in the sauna restore your strength and create a resort atmosphere any day you wish.',
    image: '/assets/images/fitness/image-2.webp',
  },
  {
    heading: 'GYM',
    body: 'Smart trainers with artificial intelligence will help you maintain your beauty, strength, and flexibility. Crossovers with horizontal bars, power frames, butterfly machines — here, fitness becomes premium.',
    image: '/assets/images/fitness/image-3.webp',
  },
  {
    heading: 'BOXING GYM',
    body: 'Feel ironclad confidence and knock out all doubts about your own abilities. Precisely balanced leather punching bags, hanging Thai boxing bags, modern equipment for developing coordination and agility.',
    image: '/assets/images/fitness/image-4.webp',
  },
  {
    heading: 'YOGA STUDIO',
    body: 'The yoga studio offers a smooth transition to relaxation, bringing your mind and body into harmony. Soft lighting, the relaxing voice of the instructor, and the calm rhythm of the movements will help you find your balance.',
    image: '/assets/images/fitness/image-5.webp',
  },
]

export const INFRASTRUCTURE_SLIDES = [
  {
    title: 'Restaurant and bar',
    description:
      'The captivatingly beautiful restaurant will win you over with its signature dishes and carefully curated wine collection. Here, time stands still so you can fully immerse yourself in your senses.',
    image: '/assets/images/infrastructure/slider-1.webp',
  },
  {
    title: 'Beauty salon',
    description:
      'Bright beauty trends and new classics, Hollywood curls and creative coloring, "blogger" manicures and professional facial care — the masters at Beauty salon can do it all and even more.',
    image: '/assets/images/infrastructure/slider-2.webp',
  },
  {
    title: 'spa & grooming',
    description:
      'Want to treat your furry friend to a creative haircut or spa? Pet care is easier with professional grooming. Save time and energy — everything you need for your friend\'s comfort is within walking distance.',
    image: '/assets/images/infrastructure/slider-3.webp',
  },
]

export const APARTMENT_TYPES = [
  { label: 'studios', range: '26–30 м²', image: '/assets/images/apartments/floor-studio.png' },
  { label: '1BR', range: '36–65 м²', image: '/assets/images/apartments/floor-1br.png' },
  { label: '2BR', range: '56–67 м²', image: '/assets/images/apartments/floor-2br.png' },
  { label: '3br', range: '64–80 м²', image: '/assets/images/apartments/floor-3br.png' },
  { label: 'with terraces', range: '67–81 м²', image: '/assets/images/apartments/floor-studio.png' },
  { label: 'penthouse', range: '60–150 м²', image: '/assets/images/apartments/floor-penthouse.png' },
] as const

export const TECHNOLOGY_ITEMS = [
  {
    number: '1',
    total: '3',
    title: 'Good work gets noticed',
    body: 'Great partnerships get talked about. These words come from the people we’ve had the privilege of building brands with.',
    image: '/assets/images/services/1.webp',
  },
  {
    number: '2',
    total: '3',
    title: 'Trusted across realty',
    body: 'From residential towers to industrial parks, our partners come back project after project — a standard of work that travels across cities.',
    image: '/assets/images/services/2.webp',
  },
  {
    number: '3',
    total: '3',
    title: 'Hear from our clients',
    body: 'Client stories from the brands we’ve built with — coming soon.',
    image: '/assets/images/services/3.webp',
  },
]

export const GALLERY_IMAGES = [
  '/assets/images/gallery/1.webp',
  '/assets/images/gallery/2.webp',
  '/assets/images/gallery/3.webp',
  '/assets/images/gallery/4.webp',
  '/assets/images/gallery/5.webp',
  '/assets/images/gallery/6.webp',
]

export const LOCATION_CARDS = [
  { label: 'Walking park', image: '/assets/images/location/card-1.webp' },
  { label: 'School', image: '/assets/images/location/card-2.webp' },
  { label: 'Sport center', image: '/assets/images/location/card-3.webp' },
  { label: 'Embankment', image: '/assets/images/location/card-4.webp' },
  { label: 'Restaurants', image: '/assets/images/location/card-5.webp' },
]
