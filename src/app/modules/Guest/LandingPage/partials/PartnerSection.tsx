import amazonLogo from '@/assets/images/amazon-logo.png'
import ebayLogo from '@/assets/images/ebay-logo.png'
import shopifyLogo from '@/assets/images/shopify-logo.png'
import etsyLogo from '@/assets/images/etsy-logo.png'
import dhlLogo from '@/assets/images/dhl-logo.png'
import fedexLogo from '@/assets/images/fedex-logo.png'

const partners = [
  {
    name: 'Amazon',
    logo: amazonLogo,
    color: 'bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200'
  },
  { name: 'eBay', logo: ebayLogo, color: 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200' },
  {
    name: 'Shopify',
    logo: shopifyLogo,
    color: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200'
  },
  { name: 'Etsy', logo: etsyLogo, color: 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200' },
  { name: 'DHL', logo: dhlLogo, color: 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200' },
  {
    name: 'FedEx',
    logo: fedexLogo,
    color: 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200'
  }
]

const PartnerSection = () => {
  return (
    <section className='py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>Our Partners</h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>Trusted by leading companies worldwide</p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`${partner.color} border-2 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 aspect-[3/2] flex items-center justify-center p-4 group`}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className='w-full h-full object-contain transition-all duration-300 group-hover:scale-110'
              />
              <div className='hidden w-full h-full items-center justify-center'>
                <span className='text-foreground font-semibold text-sm'>{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerSection
