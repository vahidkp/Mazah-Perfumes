import Image from 'next/image'
import type { Product } from '@/types'

export default function ScentStory({ product }: { product: Product }) {
  return (
    <section className="bg-amber-50/50 py-16 md:py-20">
      <div className="max-w-content mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="relative aspect-[4/3] rounded-card overflow-hidden bg-gradient-to-b from-amber-100 to-amber-50">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-10"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          {/* Decorative letter watermark */}
          <span className="absolute inset-0 flex items-center justify-center font-display text-[14rem] md:text-[20rem] font-bold text-white/20 select-none pointer-events-none leading-none">
            {product.name[0]}
          </span>
        </div>
        <div className="text-center md:text-left">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-primary mb-4">
            The Story
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-charcoal font-bold leading-tight mb-6">
            {product.name}
          </h2>
          <p className="font-body text-base text-muted leading-relaxed">
            {product.story}
          </p>
        </div>
      </div>
    </section>
  )
}
