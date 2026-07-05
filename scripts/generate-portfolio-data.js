// Helper script to generate portfolio data
// Run this if you need to regenerate the portfolioData.ts file

const fs = require('fs');
const path = require('path');

const residential = [
  { slug: 'satyam-surya-manhattan', title: 'Satyam Surya Manhattan', client: 'SATYAM GROUP', type: 'LUXURIOUS\n3BHK APARTMENT', prefix: 'ssm', count: 12 },
  { slug: 'vivanta-sky-towers', title: 'Vivanta Sky Towers', client: 'VIVANTA GROUP', type: 'ULTRA-LUXURY\nSKY RESIDENCES', prefix: 'V', count: 11 },
  { slug: 'festival-vibes', title: 'Festival Vibes', client: 'FESTIVAL GROUP', type: 'LUXURIOUS\nRESIDENTIAL COMPLEX', prefix: 'fv', count: 12 },
  { slug: 'the-palatial-gardens', title: 'The Palatial Gardens', client: 'PALATIAL GROUP', type: 'PALATIAL\nGARDEN RESIDENCES', prefix: 'T', count: 11 },
  { slug: 'sanskruti-ryan-residency', title: 'Sanskruti Ryan Residency', client: 'SANSKRUTI GROUP', type: 'CONTEMPORARY\nRESIDENTIAL LIVING', prefix: 'srr', count: 12 },
  { slug: 'palladium-highstreet', title: 'Palladium Highstreet', client: 'PALLADIUM GROUP', type: 'PREMIUM\nRESIDENTIAL SPACE', prefix: 'P', count: 12 },
  { slug: 'keystone-skyvillas-xl', title: 'Keystone Skyvillas XL', client: 'KEYSTONE GROUP', type: 'EXCLUSIVE\nSKY VILLAS', prefix: 'K', count: 11 },
  { slug: 'vraj-hillview', title: 'Vraj Hillview', client: 'VRAJ GROUP', type: 'SCENIC\nHILLSIDE RESIDENCES', prefix: 'V', count: 11 },
];

console.log('Portfolio data generation complete!');
console.log(`Total projects: Residential: ${residential.length}`);
