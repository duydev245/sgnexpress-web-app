import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import internationalShippingImage from '@/assets/images/international-shipping-boxes-airplane.jpg'
import shippingInsuranceImage from '@/assets/images/package-protection-insurance-delivery.jpg'
import sustainablePackagingImage from '@/assets/images/eco-friendly-green-packaging-sustainable.jpg'  

const blogPosts = [
  {
    id: 1,
    title: '5 Tips for Faster International Shipping',
    excerpt: 'Learn how to optimize your international shipping process and reduce delivery times.',
    date: 'Dec 15, 2024',
    image: internationalShippingImage,
    slug: 'faster-international-shipping-tips'
  },
  {
    id: 2,
    title: 'Understanding Shipping Insurance: What You Need to Know',
    excerpt: 'Protect your valuable packages with comprehensive shipping insurance coverage.',
    date: 'Dec 12, 2024',
    image: shippingInsuranceImage,
    slug: 'shipping-insurance-guide'
  },
  {
    id: 3,
    title: 'Sustainable Packaging Solutions for Modern Businesses',
    excerpt: 'Discover eco-friendly packaging options that reduce environmental impact.',
    date: 'Dec 10, 2024',
    image: sustainablePackagingImage,
    slug: 'sustainable-packaging-solutions'
  }
]

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
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className='group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-background border-border overflow-hidden'
            >
              <div className='relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                <img
                  src={post.image}
                  alt={post.title}
                  className='w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute top-4 right-4 z-20 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium'>
                  {post.date}
                </div>
              </div>
              <CardContent className='p-6 relative min-h-[235px]'>
                <h3 className='text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight'>
                  {post.title}
                </h3>
                <p className='text-muted-foreground mb-6 line-clamp-2 leading-relaxed'>{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className='inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-all duration-300 group-hover:translate-x-1'
                >
                  Read more
                  <ArrowRight className='w-4 h-4 ml-2 transition-transform group-hover:translate-x-1' />
                </Link>
                <div className='absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300' />
              </CardContent>
            </Card>
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
