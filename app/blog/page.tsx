import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import { getAllBlogPosts } from '@/app/lib/blogData'
import BlogCard from '@/app/components/blog/BlogCard'
import { pageSeo } from '@/app/lib/seoData'

export const metadata = {
  title: pageSeo.blog.title,
  description: pageSeo.blog.description,
  keywords: pageSeo.blog.keywords,
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <Header />
      <main style={{ background: '#000', minHeight: '100vh' }}>
        <section className="blog-header" style={{ padding: '13rem 4rem 6rem' }}>
          <span style={{
            display: 'block',
            fontSize: '1.1rem',
            letterSpacing: '0.14em',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '2rem',
          }}>
            The journal
          </span>
          <h1 style={{
            fontSize: 'clamp(4rem, 7vw, 8rem)',
            fontWeight: 600,
            color: '#fff',
            lineHeight: 1.05,
            letterSpacing: '0.01em',
            maxWidth: 900,
            margin: 0,
            marginBottom: '2.4rem',
          }}>
            Notes on building brands for real estate
          </h1>
          <p style={{
            fontSize: 'clamp(1.3rem, 1.3vw, 1.6rem)',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 640,
            lineHeight: 1.6,
            margin: 0,
          }}>
            Thinking from inside the studio, on naming, brochures, campaigns and the craft
            of making a project impossible to ignore.
          </p>
        </section>

        <section className="blog-grid-section" style={{ padding: '4rem 4rem 10rem' }}>
          <div style={{
            maxWidth: 1400,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '4rem 3.2rem',
          }} className="blog-grid">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 968px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
          .blog-header { padding: 9rem 2rem 4rem !important; }
          .blog-grid-section { padding: 3rem 2rem 6rem !important; }
        }
      `}</style>
    </>
  )
}
