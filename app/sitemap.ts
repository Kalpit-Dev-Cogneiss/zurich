import type { MetadataRoute } from 'next'
import { getAllProjectSlugs } from '@/app/lib/portfolioData'
import { getAllCaseStudySlugs } from '@/app/lib/caseStudyData'
import { getAllServices } from '@/app/lib/servicesData'
import { getAllBlogPosts } from '@/app/lib/blogData'

const BASE_URL = 'https://zurichgraphics.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/case-study`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'yearly', priority: 0.6 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const portfolioRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const caseStudyRoutes: MetadataRoute.Sitemap = getAllCaseStudySlugs().map((slug) => ({
    url: `${BASE_URL}/case-study/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.5,
  }))

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ]
}
