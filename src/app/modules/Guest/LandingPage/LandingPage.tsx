import AboutSection from './partials/AboutSection'
import BlogPreviewSection from './partials/BlogPreviewSection'
import FeatureSection from './partials/FeatureSection'
import HeroSection from './partials/HeroSection'
import PartnerSection from './partials/PartnerSection'
import ServiceSection from './partials/ServiceSection'
import TestimonialsSection from './partials/TestimonialsSection'

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      <TestimonialsSection />
      <PartnerSection />
      <BlogPreviewSection />
    </>
  )
}

export default LandingPage
