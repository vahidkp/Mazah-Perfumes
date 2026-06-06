import type { Product } from '@/types'
import ProductCard from '@/components/ui/ProductCard'

export default function RelatedProducts({
  products,
}: {
  products: Product[]
}) {
  if (!products.length) return null
  return (
    <section className="container-wide py-12 border-t border-line">
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tightest mb-6">
        You Might <span className="font-normal">Love</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
