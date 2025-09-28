import { BlogCard } from '@/components/BlogCard'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { blogData } from '@/mocks'
import { PATH } from '@/routes/path'
import { Calendar, Clock, Home, Tag } from 'lucide-react'
import { useParams } from 'react-router-dom'

const blogPosts = blogData || []

function getRelatedPosts(currentSlug: string, limit = 3) {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}

const BlogDetailPage = () => {
  const { slug } = useParams()

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <div>Blog post not found</div>
  }

  const relatedPosts = getRelatedPosts(post.slug)

  return (
    <>
      <div className='bg-background'>
        {/* Header */}
        <div className='container mx-auto px-4 py-8'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={PATH.HOME}>
                  <Home className='w-4 h-4 mr-1' />
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={PATH.BLOG_PAGE}>Blogs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{post.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Image */}
        <div
          className='relative h-[400px] overflow-hidden'
          style={{ background: `url(${post.image}) no-repeat center/cover` }}
        >
          <div className='absolute inset-0 bg-black/40' />

          <div className='container mx-auto px-4 flex items-center justify-center h-full'>
            <div className='bg-background/95 backdrop-blur-sm rounded-lg p-6 max-w-4xl'>
              <div className='flex items-center gap-4 mb-4 text-sm text-muted-foreground'>
                <span className='flex items-center'>
                  <Calendar className='w-4 h-4 mr-1' />
                  {post.date}
                </span>
                <span className='flex items-center'>
                  <Clock className='w-4 h-4 mr-1' />
                  {post.readTime}
                </span>
                <span className='flex items-center'>
                  <Tag className='w-4 h-4 mr-1' />
                  {post.category}
                </span>
              </div>
              <h1 className='text-4xl font-bold text-foreground mb-2'>{post.title}</h1>
              <p className='text-lg text-muted-foreground mb-4'>{post.excerpt}</p>
              <div className='flex items-center'>
                <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3'>
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className='font-semibold text-foreground'>{post.author}</p>
                  <p className='text-sm text-muted-foreground'>{post.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className='py-16'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <div
                className='prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground'
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className='py-16 bg-card'>
            <div className='container mx-auto px-4'>
              <h2 className='text-3xl font-bold text-card-foreground mb-8 text-center'>Related Articles</h2>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}

export default BlogDetailPage
