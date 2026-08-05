const TOTAL_PAGES = 70

// Set once the homepage brochure pages are uploaded to S3/CloudFront, e.g.
// HOME_BROCHURE_CDN_URL=https://d123abc.cloudfront.net/brochure-image
const CDN_BASE = process.env.HOME_BROCHURE_CDN_URL?.replace(/\/$/, '')

export function getHomeBrochureImages(): string[] {
  const base = CDN_BASE ?? '/Brochure-image'
  return Array.from({ length: TOTAL_PAGES }, (_, i) => {
    const num = String(i + 1).padStart(2, '0')
    // page 1 was re-uploaded under a versioned name to bust CDN cache; "09 .webp"
    // (source has a trailing space) is the other filename quirk in this set
    const name = i === 0 ? '01-v2' : i === 8 ? '09 ' : num
    return `${base}/${name}.webp`
  })
}
