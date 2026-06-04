'use client'
import { useState } from 'react'
import { Heart } from 'lucide-react'
import type { Product } from '@/types'
import StarRating from '@/components/ui/StarRating'
import SizeSelector from '@/components/ui/SizeSelector'
import QuantityStepper from '@/components/ui/QuantityStepper'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'
import { formatPrice } from '@/lib/utils'

export default function ProductInfo({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].ml)
  const [qty, setQty] = useState(1)
  const addItem = useCartStore((s) => s.addItem)
  const { toggle, has } = useWishlistStore()

  const current = product.sizes.find((s) => s.ml === selectedSize)
  const currentPrice = current?.price ?? 0
  const originalPrice = current?.originalPrice

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
        <div className="mt-3">
          <StarRating rating={product.rating} count={product.reviewCount} size={16} />
        </div>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="font-heading text-3xl text-gold-primary font-semibold">
          {formatPrice(currentPrice)}
        </span>
        {originalPrice && (
          <span className="font-body text-base text-muted line-through">
            {formatPrice(originalPrice)}
          </span>
        )}
      </div>

      <p className="font-body text-sm text-muted leading-relaxed">
        {product.description}
      </p>

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
          Add to Cart
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full"
          onClick={() => toggle(product.id)}
        >
          <Heart size={16} fill={has(product.id) ? 'currentColor' : 'none'} />
          {has(product.id) ? 'Wishlisted' : 'Add to Wishlist'}
        </Button>
      </div>

      <Accordion items={accordionItems} />
    </div>
  )
}
