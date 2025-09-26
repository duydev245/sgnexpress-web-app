import { Link } from 'react-router-dom'
import { Card, CardContent } from '../ui/card'
import { ArrowRight } from 'lucide-react'
import type { Blog } from '@/models'

type BlogCardProps = {
  post: Blog
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card
      key={post.id}
      className='group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-background border-border overflow-hidden cursor-pointer'
    >
      <Link to={`/blog/${post.slug}`}>
        <div className='relative overflow-hidden'>
          <img
            src={post.image}
            alt={post.title}
            className='w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300 brightness-100 contrast-110 saturate-110'
          />
          <div className='absolute top-4 right-4 z-20 bg-primary/95 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg'>
            {post.date}
          </div>
          <div className='absolute top-4 left-4 z-20 bg-background/95 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium shadow-lg'>
            {post.category}
          </div>
        </div>
        <CardContent className='p-6 relative'>
          <h3 className='text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>
            {post.title}
          </h3>
          <p className='text-muted-foreground mb-6 line-clamp-2 leading-relaxed'>{post.excerpt}</p>
          <div className='inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-300 group-hover:translate-x-1'>
            Read more
            <ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
          </div>
          <div className='absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300' />
        </CardContent>
      </Link>
    </Card>
  )
}

export default BlogCard

