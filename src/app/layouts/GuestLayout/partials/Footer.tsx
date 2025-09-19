import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react'
import logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <footer id='contact' className='bg-secondary text-secondary-foreground'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Company Info */}
          <div>
            <div className='flex items-center mb-4'>
              <img
                src={logo}
                alt='SGNExpress Logo'
                className='w-auto h-10 cursor-pointer'
              />
            </div>
            <p className='text-secondary-foreground/80 mb-4'>Your trusted partner for all shipping needs</p>
            <div className='flex space-x-4'>
              <Facebook className='h-6 w-6 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors' />
              <Instagram className='h-6 w-6 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors' />
              <Youtube className='h-6 w-6 text-secondary-foreground/60 hover:text-primary cursor-pointer transition-colors' />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Contact</h3>
            <div className='space-y-3'>
              <div className='flex items-start space-x-3'>
                <MapPin className='h-5 w-5 text-primary mt-0.5' />
                <div>
                  <p className='text-sm'>123 Business District</p>
                  <p className='text-sm'>Downtown, City Center</p>
                </div>
              </div>
              <div className='flex items-center space-x-3'>
                <Phone className='h-5 w-5 text-primary' />
                <p className='text-sm'>1-800-SGN-EXPRESS</p>
              </div>
              <div className='flex items-center space-x-3'>
                <Mail className='h-5 w-5 text-primary' />
                <p className='text-sm'>info@sgnexpress.vn</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <div className='space-y-2'>
              <a href='#' className='block text-sm text-secondary-foreground/80 hover:text-primary transition-colors'>
                Blog
              </a>
              <a href='#' className='block text-sm text-secondary-foreground/80 hover:text-primary transition-colors'>
                FAQ
              </a>
              <a href='#' className='block text-sm text-secondary-foreground/80 hover:text-primary transition-colors'>
                Contact
              </a>
              <a href='#' className='block text-sm text-secondary-foreground/80 hover:text-primary transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='block text-sm text-secondary-foreground/80 hover:text-primary transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-lg font-semibold mb-4'>Newsletter</h3>
            <p className='text-sm text-secondary-foreground/80 mb-4'>
              Subscribe to receive promotional information and latest news
            </p>
            <div className='flex space-x-2'>
              <Input placeholder='Your email' className='bg-background text-foreground border-border' />
              <Button className='bg-primary text-primary-foreground hover:bg-primary/90'>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className='border-t border-secondary-foreground/20 mt-8 pt-8 text-center'>
          <p className='text-sm text-secondary-foreground/60'>© 2024 SGNExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
