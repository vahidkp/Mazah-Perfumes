import ScrollReveal from '@/components/ui/ScrollReveal'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/data/products'
import { formatPrice } from '@/lib/utils'

// Each gallery tile links through to a real product (CRO: no dead-end gallery).
const GALLERY = [
  { src: '/images/gallery-1.jpg', className: 'col-span-2 row-span-2', slug: 'amber-royale' },
  { src: '/images/gallery-2.jpg', className: 'col-span-1', slug: 'midnight-bloom' },
  { src: '/images/gallery-3.jpg', className: 'col-span-1', slug: 'velvet-oud' },
  { src: '/images/gallery-4.jpg', className: 'col-span-1', slug: 'rose-noir' },
  { src: '/images/gallery-5.jpg', className: 'col-span-1', slug: 'golden-hour' },
]

export default function GallerySection() {
  return (
    <section className="max-w-content mx-auto px-6 py-20 md:py-24">
      <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.3em] text-gold-primary mb-2">
            Gallery
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-charcoal">
            Elegance <em>in Every Detail</em>
          </h2>
        </div>
        <Link
          href="/collections"
          className="self-start sm:self-auto font-body text-sm text-gold-primary uppercase tracking-wider hover:text-gold-muted transition-colors"
        >
          Shop the Edit →
        </Link>
      </ScrollReveal>

      <div className="grid grid-cols-4 grid-rows-2 gap-3 md:gap-4 h-[360px] md:h-[480px]">
        {GALLERY.map(({ src, className, slug }, i) => {
          const product = products.find((p) => p.slug === slug)
          const price = product
            ? Math.min(...product.sizes.map((s) => s.price))
            : 0
          return (
            <ScrollReveal
              key={i}
              delay={i * 0.08}
              className={`${className} rounded-card overflow-hidden relative group`}
            >
              <Link href={`/collections/${slug}`} className="block w-full h-full">
                <Image
                  src={src}
                  alt={product?.name ?? `Gallery image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                {/* Hover caption with product name + price */}
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent">
                  <div className="p-4">
                    <p className="font-heading text-lg text-cream leading-tight">
                      {product?.name}
                    </p>
                    <p className="font-body text-sm text-gold-light">
                      from {formatPrice(price)}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
