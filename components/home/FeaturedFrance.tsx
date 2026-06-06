import { originals, products } from '@/lib/data/products'
import ProductCard from '@/components/ui/ProductCard'
import CarouselRow from './CarouselRow'

export default function FeaturedFrance() {
  // Originals are "crafted in France"; pad from the catalog if needed.
  const seen = new Set(originals.map((p) => p.id))
  const items = [
    ...originals,
    ...products.filter((p) => !seen.has(p.id)),
  ].slice(0, 6)

  return (
    <CarouselRow
      title="Featured perfumes crafted in France"
      viewAllHref="/collections?c=originals"
      itemClass="w-[78%] sm:w-[320px] lg:w-[360px]"
    >
      {items.map((p) => (
        <ProductCard key={p.id} product={p} variant="featured" />
      ))}
    </CarouselRow>
  )
}
