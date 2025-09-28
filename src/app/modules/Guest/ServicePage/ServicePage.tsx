import { Globe, MapPin, Package, Zap } from 'lucide-react'
import { PATH } from '@/routes/path'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: MapPin,
    title: 'Door-to-door Shipping',
    description:
      'Nationwide delivery with extensive network coverage across all provinces, ensuring fast and reliable delivery times.'
  },
  {
    icon: Zap,
    title: 'Express Delivery',
    description:
      'Same-day delivery service in major cities and surrounding areas, ensuring packages reach customers as quickly as possible.'
  },
  {
    icon: Package,
    title: 'Warehousing & Packaging',
    description:
      'Professional storage services and careful packaging, ensuring goods are preserved in the best condition during transport.'
  },
  {
    icon: Globe,
    title: 'International Shipping',
    description:
      'Global connectivity with international shipping services to over 200 countries and territories worldwide.'
  }
]

const ServicePage = () => {
  return (
    <main className='bg-background text-foreground min-h-screen'>
      <section className='py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-8'>
            <h1 className='text-4xl font-bold mb-4'>Our Services</h1>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              SGNExpress provides diverse shipping services to meet all customer needs.
            </p>
          </div>

          {/* Detailed service sections */}
          <div className='mt-6 space-y-12'>
            {services.map((service, index) => (
              <section id={`service-${index}`} key={index} className='bg-card p-8 rounded-lg shadow-sm'>
                <div className='flex flex-col lg:flex-row lg:items-start lg:gap-8'>
                  <div className='mb-4 lg:mb-0 lg:w-24 flex-shrink-0'>
                    <div className='bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center'>
                      <service.icon className='h-8 w-8 text-primary' />
                    </div>
                  </div>

                  <div>
                    <h3 className='text-2xl font-semibold mb-3'>{service.title}</h3>
                    <p className='text-muted-foreground mb-4'>{service.description}</p>

                    <ul className='list-disc pl-5 space-y-2 text-sm text-muted-foreground mb-4'>
                      {index === 0 && (
                        <>
                          <li>Pickup from your door or our drop-off points.</li>
                          <li>Real-time tracking and SMS updates.</li>
                          <li>Insurance options for valuable shipments.</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>Same-day pickup and delivery in major cities.</li>
                          <li>Priority handling and expedited routing.</li>
                          <li>Guaranteed delivery windows for business clients.</li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li>Secure warehousing with inventory management.</li>
                          <li>Professional packaging and custom crating.</li>
                          <li>Short-term and long-term storage options.</li>
                        </>
                      )}
                      {index === 3 && (
                        <>
                          <li>Door-to-door international customs clearance support.</li>
                          <li>Competitive international freight rates.</li>
                          <li>Worldwide partner network for end-to-end delivery.</li>
                        </>
                      )}
                    </ul>

                    <div className='flex items-center gap-3'>
                      <Link
                        to={PATH.CONTACT_PAGE}
                        className='inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md shadow-sm hover:bg-primary/90'
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicePage
