import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogData } from '@/mocks'
import type { Blog } from '@/models'
import { BlogCard } from '@/components/BlogCard'

const blogPosts: Blog[] = blogData.slice(0, 3)

const BlogPreviewSection = () => {
  return (
    <section className='py-16 bg-card'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-card-foreground mb-4'>Latest from Our Blog</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Stay updated with the latest shipping tips, industry insights, and logistics trends
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
          {blogPosts.map((post: Blog) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className='text-center'>
          <Button
            asChild
            size='lg'
            variant='outline'
            className='hover:bg-primary hover:text-primary-foreground transition-all duration-300 border-2 hover:border-primary bg-transparent'
          >
            <Link to='/blog'>
              View All Blog Posts
              <ArrowRight className='w-4 h-4 ml-2' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BlogPreviewSection
