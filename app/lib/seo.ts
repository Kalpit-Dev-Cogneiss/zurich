import type { Metadata } from 'next'

export const SITE_URL = 'https://zurichgraphics.com'
export const SITE_NAME = 'Zurich Graphics'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/herobanner-image-new.jpeg`
export const CONTACT_EMAIL = 'info@zurichgraphics.com'
export const CONTACT_PHONE = '+91-99250-04245'

/**
 * Builds a page's Metadata with canonical + Open Graph filled in from a
 * single source, so every route gets a consistent url/image/canonical
 * instead of each page.tsx re-deriving them by hand.
 */
export function buildMetadata({
  title,
  description,
  keywords,
  path,
  image,
  type = 'website',
}: {
  title: string
  description: string
  keywords?: string
  path: string
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const url = `${SITE_URL}${path}`
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage }],
    },
  }
}

/** Organization schema — rendered once in the root layout so it's present on every page. */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/zurich-logo-White.svg`,
  description:
    'Zurich Graphics is a real estate branding agency building memorable property brands through strategy, identity, brochures, campaigns and digital communication.',
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  areaServed: 'IN',
}

/**
 * Scans a blog post's content blocks for an FAQ section (an h2/h3 "Frequently
 * Asked Questions"-style heading followed by heading+paragraph question/answer
 * pairs) and turns it into FAQPage schema. Returns null if no such section exists.
 */
export function buildFaqJsonLd(
  content: Array<{ type: string; level?: 2 | 3; text?: string }>
): Record<string, unknown> | null {
  const startIndex = content.findIndex(
    (b) => b.type === 'heading' && /frequently asked questions|\bfaqs?\b/i.test(b.text ?? '')
  )
  if (startIndex === -1) return null

  const mainQuestions = new Set<string>()
  const sectionHeading = content[startIndex] as { level?: 2 | 3 }
  const questionLevel = sectionHeading.level === 2 ? 3 : undefined

  const entities: Array<{ '@type': 'Question'; name: string; acceptedAnswer: { '@type': 'Answer'; text: string } }> = []

  for (let i = startIndex + 1; i < content.length; i++) {
    const block = content[i]
    // Stop once we hit the next same-or-higher-level heading that isn't a question.
    if (block.type === 'heading' && block.level === 2) break
    if (block.type !== 'heading') continue
    if (questionLevel && block.level !== questionLevel) continue

    const question = (block.text ?? '').trim()
    if (mainQuestions.has(question)) continue

    const answerParts: string[] = []
    for (let j = i + 1; j < content.length; j++) {
      const next = content[j]
      if (next.type === 'heading') break
      if (next.type === 'paragraph' && next.text) answerParts.push(next.text)
    }
    if (!answerParts.length) continue

    mainQuestions.add(question)
    entities.push({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answerParts.join(' ') },
    })
  }

  if (!entities.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entities,
  }
}

export function buildBlogPostingJsonLd(post: {
  slug: string
  title: string
  excerpt: string
  date: string
  cover: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.cover.startsWith('http') ? post.cover : `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/zurich-logo-White.svg` },
    },
  }
}
