'use client'
import { useState } from 'react'
import { Bookmark, Check } from 'lucide-react'
import type { Product } from '@/types'
import StarRating from '@/components/ui/StarRating'
import SizeSelector from '@/components/ui/SizeSelector'
import QuantityStepper from '@/components/ui/QuantityStepper'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import FragranceSpecs from '@/components/product/FragranceSpecs'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'
import { formatPrice } from '@/lib/utils'

export default function ProductInfo({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].ml)
  const [qty, setQty] = useState(1)
  const addItem = useCartStore((s) => s.addItem)
  const { toggle, has } = useWishlistStore()
  const saved = has(product.id)

  const current = product.sizes.find((s) => s.ml === selectedSize)
  const currentPrice = current?.price ?? 0
  const originalPrice = current?.originalPrice
  const savings = originalPrice ? originalPrice - currentPrice : 0

  const isLimited = product.badges.includes('LIMITED')
  const lowStock = typeof product.stock === 'number' && product.stock <= 10

  const accordionItems = [
    {
      title: 'Scent Notes',
      content: (
        <div className="grid grid-cols-3 gap-4">
          {(['top', 'heart', 'base'] as const).map((tier) => (
            <div key={tier}>
              <p className="text-xs uppercase tracking-wider text-gold-primary mb-2">
                {tier}
              </p>
              <ul className="space-y-1">
                {product.scentNotes[tier].map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    },
    { title: 'Ingredients', content: product.ingredients },
    {
      title: 'How to Apply',
      content:
        'Spray onto pulse points — wrists, neck, and behind ears — from 10–15cm away. Layer with a matching body lotion for longer-lasting wear.',
    },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $100. Returns accepted within 30 days of delivery on unopened items.',
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="font-body text-xs text-gold-primary uppercase tracking-[0.25em] mb-2">
          {product.category} · Fragrance
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-charcoal font-bold leading-tight">
          {product.name}
        </h1>
        {/* Aggregate rating inline, above the fold (CRO high-impact) */}
        <a href="#reviews" className="inline-flex mt-3 group">
          <StarRating rating={product.rating} count={product.reviewCount} size={16} />
          <span className="font-body text-xs text-muted ml-1 underline-offset-2 group-hover:underline">
            See reviews
          </span>
        </a>
      </div>

      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="font-body text-3xl text-gold-primary font-semibold">
          {formatPrice(currentPrice)}
        </span>
        {originalPrice && (
          <>
            <span className="font-body text-base text-muted line-through">
              {formatPrice(originalPrice)}
            </span>
            <span className="font-body text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-1 rounded">
              Save {formatPrice(savings)}
            </span>
          </>
        )}
      </div>

      <p className="font-body text-sm text-muted leading-relaxed">
        {product.description}
      </p>

      {/* Scarcity counter for LIMITED / low-stock items (CRO high-impact) */}
      {isLimited && lowStock && (
        <div className="rounded-card border border-red-200 bg-red-50/60 px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-sm font-semibold text-red-700">
              🔥 Limited edition — only {product.stock} left
            </span>
            <span className="font-body text-xs text-red-600">Selling fast</span>
          </div>
          <div className="h-1.5 rounded-pill bg-red-100 overflow-hidden">
            <div
              className="h-full bg-red-500"
              style={{
                width: `${Math.max(8, Math.min(100, (product.stock! / 30) * 100))}%`,
              }}
            />
          </div>
        </div>
      )}

      <div>
        <p className="font-body text-xs uppercase tracking-wider text-charcoal mb-3">
          Select Size
        </p>
        <SizeSelector
          sizes={product.sizes}
          selected={selectedSize}
          onChange={setSelectedSize}
        />
      </div>

      <div>
        <p className="font-body text-xs uppercase tracking-wider text-charcoal mb-3">
          Quantity
        </p>
        <QuantityStepper value={qty} onChange={setQty} />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          variant="gold"
          size="lg"
          className="w-full"
          onClick={() =>
            addItem({
              productId: product.id,
              name: product.name,
              size: selectedSize,
              price: currentPrice,
              qty,
              image: product.images[0],
            })
          }
        >
          Add to Cart — {formatPrice(currentPrice * qty)}
        </Button>
        {/* Save for later (works without accounts via local storage) */}
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={() => toggle(product.id)}
        >
          {saved ? (
            <>
              <Check size={16} /> Saved — we’ll notify you
            </>
          ) : (
            <>
              <Bookmark size={16} /> Save for Later
            </>
          )}
        </Button>
      </div>

      {/* Reassurance line */}
      <p className="font-body text-xs text-muted text-center -mt-1">
        Free shipping over $100 · 30-day returns · Ships in 24 hours
      </p>

      {/* Fragrance specification block (CRO high-impact) */}
      <FragranceSpecs specs={product.specs} />

      <Accordion items={accordionItems} />
    </div>
  )
}
