import { WP_BLOG_POSTS } from './wpBlogPosts'
import { FESTIVE_BLOG_POSTS } from './festiveBlogPosts'

export type BlogBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'list'; ordered: boolean; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'quote'; text: string }

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  cover: string
  content: BlogBlock[]
  seoTitle?: string
  seoDescription?: string
}

export function getAllBlogPosts(): BlogPost[] {
  return [...FESTIVE_BLOG_POSTS, ...WP_BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((p) => p.slug === slug)
}
