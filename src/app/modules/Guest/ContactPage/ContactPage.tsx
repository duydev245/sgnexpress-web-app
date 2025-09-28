import { MapPin, Phone, Mail } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className='bg-background text-foreground min-h-screen py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-3xl font-bold mb-6'>Contact Us</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Contact Info */}
          <div className='bg-card p-6 rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-4'>Get in touch</h2>
            <p className='text-sm text-muted-foreground mb-6'>
              We're here to help. Reach out to us using the information below or send us a message using the contact
              form.
            </p>

            <div className='space-y-6'>
              <div className='flex items-center space-x-3'>
                <MapPin className='h-6 w-6 text-primary mt-0.5' />
                <p className='text-sm'>99 Cong Hoa Street, 12 Ward, Tan Binh District, Ho Chi Minh City</p>
              </div>

              <div className='flex items-center space-x-3'>
                <Phone className='h-5 w-5 text-primary' />
                <a href='tel:+840368253868' className='text-sm text-black hover:underline'>
                  (+84) 036 825 3868
                </a>
              </div>

              <div className='flex items-center space-x-3 mt-3 sm:mt-0'>
                <Mail className='h-5 w-5 text-primary' />
                <a href='mailto:info@sgnexpress.vn' className='text-sm text-black hover:underline'>
                  info@sgnexpress.vn
                </a>
              </div>

              <div>
                <h3 className='font-semibold'>Working hours</h3>
                <div className='text-sm text-muted-foreground mt-2'>
                  <div>Mon - Fri: 08:00 — 18:00</div>
                  <div>Sat: 09:00 — 14:00</div>
                  <div>Sun: Closed</div>
                </div>
              </div>

              <div>
                <h3 className='font-semibold'>Locations</h3>
                <ul className='text-sm text-muted-foreground mt-2 space-y-1'>
                  <li>
                    <strong>Head Office:</strong> 99 Cong Hoa Street, Tan Binh
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right column: map */}
          <div className='bg-card p-0 rounded-lg shadow-sm overflow-hidden'>
            <div className='w-full h-96 lg:h-[520px]'>
              <iframe
                title='SGNExpress location'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.606059411705!2d106.65439029999999!3d10.8015631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752937938152ff%3A0xc26b2c33ab245bcc!2zOTkgQ-G7mW5nIEjDsmEsIFBoxrDhu51uZyA0LCBUw6JuIELDrG5oLCBI4buTIENow60gTWluaA!5e1!3m2!1svi!2s!4v1759028178801!5m2!1svi!2s'
                className='w-full h-full'
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
