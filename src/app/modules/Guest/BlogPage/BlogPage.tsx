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
import { Home } from 'lucide-react'

const allBlogPosts = blogData || []

const BlogPage = () => {
  return (
    <div className='bg-background'>
      {/* Blog Header */}
      <div className='container mx-auto px-4 py-8'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/'>
                <Home className='w-4 h-4 mr-1' />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blogs</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Blog Title Section */}
      <section className='py-12 bg-background'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl font-bold text-foreground mb-4'>Our Blog</h1>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
            Insights, tips, and updates from the world of logistics and shipping
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {allBlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
