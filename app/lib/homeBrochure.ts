const TOTAL_PAGES = 70

// Set once the homepage brochure pages are uploaded to S3/CloudFront, e.g.
// HOME_BROCHURE_CDN_URL=https://d123abc.cloudfront.net/brochure-image
const CDN_BASE = process.env.HOME_BROCHURE_CDN_URL?.replace(/\/$/, '')

export function getHomeBrochureImages(): string[] {
  const base = CDN_BASE ?? '/Brochure-image'
  return Array.from({ length: TOTAL_PAGES }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    const name = i === 8 ? '09 ' : num // source file "09 .webp" has a trailing space
    return `${base}/${name}.webp`
  })
}
