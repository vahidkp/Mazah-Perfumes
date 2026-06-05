'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { products } from '@/lib/data/products'
import { useCartStore } from '@/store/cart'
import Button from '@/components/ui/Button'

const KIT_PRICE = 19

export default function DiscoveryKit() {
  const addItem = useCartStore((s) => s.addItem)
  const samples = products.slice(0, 6)

  const addKit = () =>
    addItem({
      productId: 'discovery-kit',
      name: 'Mazah Discovery Kit (6 × 2ml)',
      size: 2,
      price: KIT_PRICE,
      qty: 1,
      image: '/images/feature-bottle.png',
    })

  return (
    <>
      <section className="max-w-content mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Visual */}
        <div className="relative aspect-square rounded-card overflow-hidden bg-gradient-to-b from-amber-100 to-amber-50 grid place-items-center">
          <div className="grid grid-cols-3 gap-4 p-10 w-full">
            {samples.map((p) => (
              <div
                key={p.id}
                className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/60 shadow-card"
              >
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  className="object-contain p-2"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <p className="font-body text-xs text-gold-primary uppercase tracking-[0.25em]">
            Try Before You Buy
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-charcoal font-bold leading-tight">
            The Mazah <em className="font-normal">Discovery Kit</em>
          </h1>
          <div className="flex items-baseline gap-3">
            <span className="font-body text-3xl text-gold-primary font-semibold">
              ${KIT_PRICE}
            </span>
            <span className="font-body text-sm text-muted">
              for 6 × 2ml samples
            </span>
          </div>
          <p className="font-body text-base text-muted leading-relaxed">
            Fragrance is personal — so try the collection on your own skin before
            you commit to a full bottle. Six generous 2ml sprays, beautifully
            boxed, delivered to your door.
          </p>

          <ul className="flex flex-col gap-2.5">
            {[
              'Six 2ml atomisers — roughly 50 sprays each',
              '$19 credited toward your first full-size bottle',
              'Includes our bestsellers and newest launches',
            ].map((line) => (
              <li key={line} className="flex items-start gap-2.5">
                <span className="w-5 h-5 mt-0.5 rounded-full bg-gold-primary/15 grid place-items-center flex-shrink-0">
                  <Check size={12} className="text-gold-primary" />
                </span>
                <span className="font-body text-sm text-charcoal">{line}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button variant="gold" size="lg" onClick={addKit} className="flex-1">
              Add Discovery Kit — ${KIT_PRICE}
            </Button>
            <Link href="/quiz" className="flex-1">
              <Button variant="outline" size="lg" className="w-full">
                <Sparkles size={15} /> Take the Quiz
              </Button>
            </Link>
          </div>
          <p className="font-body text-xs text-muted">
            Free shipping over $100 · 30-day returns
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-amber-50/40 py-14">
        <div className="max-w-content mx-auto px-6">
          <h2 className="font-heading text-3xl text-charcoal text-center mb-10">
            What’s inside
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {samples.map((p) => (
              <Link
                key={p.id}
                href={`/collections/${p.slug}`}
                className="flex items-center gap-3 bg-white rounded-card p-3 shadow-card hover:shadow-hover transition-shadow"
              >
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 flex-shrink-0">
                  <Image src={p.images[0]} alt={p.name} fill className="object-contain p-1.5" sizes="48px" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-base text-charcoal leading-tight truncate">
                    {p.name}
                  </p>
                  <p className="font-body text-xs text-muted capitalize">
                    {p.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
