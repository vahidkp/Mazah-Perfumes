'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Sparkles } from 'lucide-react'
import { products } from '@/lib/data/products'
import { useCartStore } from '@/store/cart'
import { FAMILY } from '@/lib/data/site'
import Button from '@/components/ui/Button'

const KIT_PRICE = 19

export default function DiscoveryKit() {
  const addItem = useCartStore((s) => s.addItem)
  const openCart = useCartStore((s) => s.openCart)
  const samples = products.slice(0, 6)

  const addKit = () => {
    addItem({
      productId: 'discovery-kit',
      name: 'Mazah Discovery Kit (6 × 2ml)',
      size: 2,
      price: KIT_PRICE,
      qty: 1,
      image: '/images/feature-bottle.png',
    })
    openCart()
  }

  return (
    <>
      <section className="container-page py-12 md:py-16 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Visual */}
        <div className="relative aspect-square rounded-card overflow-hidden bg-card grid place-items-center">
          <div className="grid grid-cols-3 gap-3 p-8 w-full">
            {samples.map((p) => (
              <div
                key={p.id}
                className="relative aspect-[3/4] rounded-lg overflow-hidden"
                style={{ backgroundColor: p.tint }}
              >
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  className="object-contain p-2 blend-multiply"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-5">
          <p className="eyebrow !text-coral">Try Before You Buy</p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold tracking-tightest leading-tight">
            The Mazah <span className="font-normal">Discovery Kit</span>
          </h1>
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-semibold">${KIT_PRICE}</span>
            <span className="text-sm text-muted">for 6 × 2ml samples</span>
          </div>
          <p className="text-muted leading-relaxed">
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
                <span className="w-5 h-5 mt-0.5 rounded-full bg-coral/10 grid place-items-center flex-shrink-0">
                  <Check size={12} className="text-coral" />
                </span>
                <span className="text-sm">{line}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Button size="lg" onClick={addKit} className="flex-1">
              Add Discovery Kit — ${KIT_PRICE}
            </Button>
            <Button href="/quiz" variant="outline" size="lg" className="flex-1">
              <Sparkles size={15} /> Take the Quiz
            </Button>
          </div>
          <p className="text-xs text-muted">
            Free shipping over $100 · 30-day returns
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-canvas border-t border-line py-14">
        <div className="container-page">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tightest text-center mb-10">
            What&apos;s inside
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {samples.map((p) => (
              <Link
                key={p.id}
                href={`/collections/${p.slug}`}
                className="flex items-center gap-3 bg-paper rounded-card p-3 border border-line hover:shadow-hover transition-shadow"
              >
                <div
                  className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0"
                  style={{ backgroundColor: p.tint }}
                >
                  <Image src={p.images[0]} alt={p.name} fill className="object-contain p-1.5 blend-multiply" sizes="48px" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold leading-tight truncate">
                    {p.name}
                  </p>
                  <p className="text-xs text-muted">{FAMILY[p.family].label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
