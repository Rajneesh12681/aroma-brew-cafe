import { FeaturedMenu } from '@/components/home/FeaturedMenu'
import { GalleryPreview } from '@/components/home/GalleryPreview'
import { HeroSection } from '@/components/home/HeroSection'
import { Testimonials } from '@/components/home/Testimonials'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedMenu />
      <WhyChooseUs />
      <GalleryPreview />
      <Testimonials />
    </>
  )
}
