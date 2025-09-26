import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    company: 'ABC Trading Company',
    content:
      'SGNExpress has helped us save a lot of time and costs in shipping goods. Professional service with enthusiastic staff.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    company: 'Fashion Boutique XYZ',
    content:
      'I have been using SGNExpress services for 2 years. Goods are always delivered on time and in perfect condition. Very satisfied with the service quality.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'Online Business Owner',
    content:
      'Reasonable prices, fast delivery. SGNExpress is truly a reliable partner for my online business. Will continue using their services.',
    rating: 5
  }
]

const TestimonialsSection = () => {
  return (
    <section id='testimonials' className='py-16 lg:py-24 bg-card'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-card-foreground mb-4'>What Our Customers Say</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Thousands of customers have trusted and used SGNExpress services
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='bg-background border-border pt-6'>
              <CardContent className='p-6'>
                <div className='flex items-center mb-4'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className='h-5 w-5 text-primary fill-current' />
                  ))}
                </div>
                <p className='text-foreground mb-4 italic'>"{testimonial.content}"</p>
                <div>
                  <p className='font-semibold text-foreground'>{testimonial.name}</p>
                  <p className='text-sm text-muted-foreground'>{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
