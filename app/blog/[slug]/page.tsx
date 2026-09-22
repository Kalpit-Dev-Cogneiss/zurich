import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import PageCTA from '@/app/components/ui/PageCTA'
import { getAllBlogPosts, getBlogPostBySlug } from '@/app/lib/blogData'
import BlogContent, { slugifyHeading } from '@/app/components/blog/BlogContent'
import TableOfContents, { type TocItem } from '@/app/components/blog/TableOfContents'
import ReadingProgressBar from '@/app/components/blog/ReadingProgressBar'
import ShareButtons from '@/app/components/blog/ShareButtons'
import BlogCard from '@/app/components/blog/BlogCard'
import { buildMetadata, buildBlogPostingJsonLd, buildFaqJsonLd } from '@/app/lib/seo'

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Post not found' }
  return buildMetadata({
    title: `${post.title} | Zurich Graphics`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    image: post.cover,
    type: 'article',
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const date = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  // Extract full text for metrics
  const fullText = post.content
    .map((block) => {
      if ('text' in block) return block.text
      if ('items' in block) return block.items.join(' ')
      if ('rows' in block) return block.rows.flatMap((r) => r).join(' ')
      return ''
    })
    .join(' ')
  const wordCount = fullText.split(/\s+/).filter(Boolean).length
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 220))

  // Build Table of Contents items
  const tocItems: TocItem[] = []
  post.content.forEach((block, i) => {
    if (block.type === 'heading') {
      tocItems.push({
        id: slugifyHeading(block.text, i),
        text: block.text,
        level: block.level,
      })
    }
  })

  // Fetch related posts
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  const blogPostingJsonLd = buildBlogPostingJsonLd(post)
  const faqJsonLd = buildFaqJsonLd(post.content)

  return (
    <>
      <ReadingProgressBar />
      <script
        id="blogposting-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      {faqJsonLd && (
        <script
          id="faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />
      <main style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
        <article className="blog-article" style={{ padding: '13rem 4rem 6rem' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            {/* Top Navigation & Category Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.6rem',
                marginBottom: '3.6rem',
              }}
            >
              <Link
                href="/blog"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  fontSize: '1.3rem',
                  letterSpacing: '0.04em',
                  color: 'rgba(255,255,255,0.6)',
                  transition: 'color 0.2s ease',
                }}
                className="back-journal-link"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Journal
              </Link>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '100px',
                    fontSize: '1.15rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                  }}
                >
                  {post.category}
                </span>
                <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>•</span>
                <span style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.5)' }}>
                  {date}
                </span>
                <span style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)' }}>•</span>
                <span style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.5)' }}>
                  {readTimeMinutes} min read
                </span>
              </div>
            </div>

            {/* Main Article Title */}
            <h1
              style={{
                fontSize: 'clamp(3.4rem, 5.2vw, 5.8rem)',
                fontWeight: 600,
                color: '#fff',
                lineHeight: 1.12,
                letterSpacing: '-0.02em',
                margin: 0,
                marginBottom: '4rem',
                maxWidth: 1000,
              }}
            >
              {post.title}
            </h1>

            {/* Featured Image Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                maxHeight: '600px',
                borderRadius: '24px',
                overflow: 'hidden',
                marginBottom: '6rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover}
                alt={post.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Editorial 2-Column Layout */}
            <div className="blog-grid-layout">
              {/* Main Content Area */}
              <div className="blog-main-column">
                {/* Blog Blocks */}
                <BlogContent blocks={post.content} />

                {/* Article Footer & Share */}
                <div
                  style={{
                    marginTop: '6rem',
                    paddingTop: '3.6rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.4rem',
                  }}
                >
                  <ShareButtons title={post.title} />

                  {/* Publisher / Author Card */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2rem',
                      padding: '2.4rem',
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <div
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #ffffff 0%, #666666 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '1.8rem',
                        minWidth: '56px',
                      }}
                    >
                      ZG
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.6rem', color: '#fff', margin: 0, marginBottom: '0.4rem', fontWeight: 600 }}>
                        Zurich Graphics Editorial
                      </h4>
                      <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.5 }}>
                        Insights, strategies, and design excellence for modern real estate branding & marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Sticky Sidebar */}
              <aside className="blog-sidebar">
                <div style={{ position: 'sticky', top: '130px' }}>
                  {/* Table of Contents */}
                  <TableOfContents items={tocItems} />

                  {/* Share buttons */}
                  <ShareButtons title={post.title} />

                  {/* Quick CTA Mini Card */}
                  <div
                    style={{
                      padding: '2.4rem',
                      borderRadius: '16px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                    }}
                  >
                    <h4 style={{ fontSize: '1.6rem', color: '#fff', margin: 0, marginBottom: '0.8rem', fontWeight: 600 }}>
                      Planning a Property Launch?
                    </h4>
                    <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.6)', margin: 0, marginBottom: '1.6rem', lineHeight: 1.5 }}>
                      Talk to our strategy experts about branding your real estate project.
                    </p>
                    <Link
                      href="/contact"
                      style={{
                        display: 'inline-block',
                        width: '100%',
                        textAlign: 'center',
                        padding: '1.2rem 1.6rem',
                        background: '#ffffff',
                        color: '#000000',
                        borderRadius: '8px',
                        fontWeight: 600,
                        fontSize: '1.3rem',
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      Get in Touch &rarr;
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
              <div
                style={{
                  marginTop: '10rem',
                  paddingTop: '6rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div style={{ marginBottom: '4rem' }}>
                  <span
                    style={{
                      fontSize: '1.2rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255, 255, 255, 0.5)',
                      display: 'block',
                      marginBottom: '0.8rem',
                    }}
                  >
                    More Insights
                  </span>
                  <h2 style={{ fontSize: 'clamp(2.4rem, 3.5vw, 3.8rem)', color: '#fff', fontWeight: 600, margin: 0 }}>
                    Related Articles
                  </h2>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3.2rem',
                  }}
                >
                  {relatedPosts.map((relPost, index) => (
                    <BlogCard key={relPost.slug} post={relPost} index={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        <PageCTA
          eyebrow="Enjoyed this article?"
          heading="Let's elevate your brand together"
          buttonLabel="Get in touch"
          href="/contact"
        />
      </main>
      <Footer />

      <style>{`
        .blog-grid-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          gap: 4.8rem;
          align-items: stretch;
        }

        .back-journal-link:hover {
          color: #ffffff !important;
        }

        @media (max-width: 991px) {
          .blog-grid-layout {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .blog-sidebar {
            display: none !important;
          }
        }

        @media (max-width: 640px) {
          .blog-article {
            padding: 10rem 2rem 4rem !important;
          }
        }
      `}</style>
    </>
  )
}
