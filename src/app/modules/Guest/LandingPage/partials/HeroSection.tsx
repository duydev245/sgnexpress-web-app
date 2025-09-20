import HeroBanner from '@/assets/images/hero-banner.jpg'

const HeroSection = () => {
  return (
    <section className='relative min-h-screen'>
      <div className='relative w-full h-screen'>
        <img src={HeroBanner} alt='SGNExpress delivery truck with packages' className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-black/50'></div>
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='container mx-auto px-4'>
          <div className='text-center max-w-4xl mx-auto'>
            <h1 className='text-4xl lg:text-6xl font-bold text-white mb-6 text-balance'>Fast – Safe – Affordable</h1>

            <p className='text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty'>
              SGNExpress is your trusted partner for all shipping needs. With our extensive network and professional
              service, we're committed to delivering the best shipping experience.
            </p>

            {/* <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
              <Button size='lg' className='bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg'>
                Ship Now
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='px-8 py-3 text-lg bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
              >
                Track Package
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
