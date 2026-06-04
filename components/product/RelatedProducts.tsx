import type { Product } from '@/types'
import ProductCard from '@/components/ui/ProductCard'

export default function RelatedProducts({
  products,
}: {
  products: Product[]
}) {
  if (!products.length) return null
  return (
    <section className="max-w-content mx-auto px-6 py-16 border-t border-charcoal/10">
      <h2 className="font-heading text-4xl text-charcoal mb-8">
        You May Also <em>Like</em>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
