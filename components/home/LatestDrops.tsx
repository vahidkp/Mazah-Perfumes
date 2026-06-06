import { products } from '@/lib/data/products'
import ProductCard from '@/components/ui/ProductCard'
import CarouselRow from './CarouselRow'

// Ordered to mirror Dossier's drops row: caramel → strawberry red → iris →
// light bloom, then warmer scents trailing off into the scroll.
const DROPS = [
  'golden-hour',
  'rose-noir',
  'midnight-bloom',
  'ocean-whisper',
  'citrus-luxe',
  'amber-royale',
]

export default function LatestDrops() {
  const items = DROPS.map((s) => products.find((p) => p.slug === s)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  )
  return (
    <CarouselRow
      title="Our latest drops"
      itemClass="w-[72%] sm:w-[300px] lg:w-[332px]"
    >
      {items.map((p, i) => (
        <ProductCard key={p.id} product={p} variant="drop" priority={i < 2} />
      ))}
    </CarouselRow>
  )
}
