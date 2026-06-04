import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import NewCollection from '@/components/home/NewCollection'
import EditorialBanner from '@/components/home/EditorialBanner'
import FeaturesSection from '@/components/home/FeaturesSection'
import GallerySection from '@/components/home/GallerySection'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewCollection />
      <EditorialBanner />
      <FeaturesSection />
      <GallerySection />
      <NewsletterSection />
    </>
  )
}
