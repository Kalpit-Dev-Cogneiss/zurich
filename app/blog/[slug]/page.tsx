import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PageCTA from '@/app/components/ui/PageCTA'
import { getAllBlogPosts, getBlogPostBySlug } from '@/app/lib/blogData'
import BlogContent from '@/app/components/blog/BlogContent'

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} | Zurich Graphics`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const date = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh' }}>
        <article style={{ padding: '13rem 4rem 4rem' }}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                fontSize: '1.2rem',
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '3rem',
              }}
            >
              &larr; Back to the journal
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.1rem', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.6)' }}>
                {post.category}
              </span>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
              <span style={{ fontSize: '1.1rem', letterSpacing: '0.04em', color: 'rgba(255,255,255,0.4)' }}>
                {date}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(3.2rem, 5vw, 5.6rem)',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.12,
              letterSpacing: '0.01em',
              margin: 0,
              marginBottom: '4rem',
            }}>
              {post.title}
            </h1>

            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', overflow: 'hidden', marginBottom: '5rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover}
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <BlogContent blocks={post.content} />
          </div>
        </article>

        <PageCTA
          eyebrow="Enjoyed this one?"
          heading="Let's talk about your project"
          buttonLabel="Get in touch"
          href="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
