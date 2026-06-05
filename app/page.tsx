import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import AboutSection from '@/components/home/AboutSection'
import NewCollection from '@/components/home/NewCollection'
import PressStrip from '@/components/home/PressStrip'
import EditorialBanner from '@/components/home/EditorialBanner'
import FeaturesSection from '@/components/home/FeaturesSection'
import GallerySection from '@/components/home/GallerySection'
import NewsletterSection from '@/components/home/NewsletterSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <NewCollection />
      <PressStrip />
      <EditorialBanner />
      <FeaturesSection />
      <GallerySection />
      <NewsletterSection />
    </>
  )
}
