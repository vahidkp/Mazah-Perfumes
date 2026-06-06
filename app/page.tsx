import HeroSection from '@/components/home/HeroSection'
import LatestDrops from '@/components/home/LatestDrops'
import ImpressionsOriginals from '@/components/home/ImpressionsOriginals'
import CategoryCards from '@/components/home/CategoryCards'
import FeaturedFrance from '@/components/home/FeaturedFrance'
import BoutiqueBanner from '@/components/home/BoutiqueBanner'
import NextGenBanner from '@/components/home/NextGenBanner'

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestDrops />
      <ImpressionsOriginals />
      <CategoryCards />
      <FeaturedFrance />
      <BoutiqueBanner />
      <NextGenBanner />
    </>
  )
}
