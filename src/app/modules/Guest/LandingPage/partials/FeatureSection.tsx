import { DollarSign, Shield, Truck } from "lucide-react"

const FeatureSection = () => {
  return (
    <div className='bg-background py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
          <div className='flex flex-col items-center'>
            <div className='bg-primary/10 p-4 rounded-full mb-4'>
              <Truck className='h-10 w-10 text-primary' />
            </div>
            <h3 className='font-semibold text-lg mb-2 text-foreground'>Fast</h3>
            <p className='text-muted-foreground text-center'>Same-day delivery in major cities and surrounding areas</p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='bg-primary/10 p-4 rounded-full mb-4'>
              <Shield className='h-10 w-10 text-primary' />
            </div>
            <h3 className='font-semibold text-lg mb-2 text-foreground'>Safe</h3>
            <p className='text-muted-foreground text-center'>
              100% insurance coverage with careful packaging and handling
            </p>
          </div>

          <div className='flex flex-col items-center'>
            <div className='bg-primary/10 p-4 rounded-full mb-4'>
              <DollarSign className='h-10 w-10 text-primary' />
            </div>
            <h3 className='font-semibold text-lg mb-2 text-foreground'>Affordable</h3>
            <p className='text-muted-foreground text-center'>
              Most competitive rates in the market with attractive discounts
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
