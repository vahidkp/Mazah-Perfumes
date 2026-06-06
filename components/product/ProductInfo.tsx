'use client'
import { useState } from 'react'
import { Heart, Check, MapPin } from 'lucide-react'
import type { Product } from '@/types'
import StarRating from '@/components/ui/StarRating'
import SizeSelector from '@/components/ui/SizeSelector'
import QuantityStepper from '@/components/ui/QuantityStepper'
import { useCartStore } from '@/store/cart'
import { useWishlistStore } from '@/store/wishlist'
import { price, priceFixed, nameParts } from '@/lib/utils'
import { FAMILY } from '@/lib/data/site'

export default function ProductInfo({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].ml)
  const [qty, setQty] = useState(1)
  const addItem = useCartStore((s) => s.addItem)
  const openCart = useCartStore((s) => s.openCart)
  const { toggle, has } = useWishlistStore()
  const saved = has(product.id)
  const fam = FAMILY[product.family]
  const { lead, last } = nameParts(product.name)

  const current = product.sizes.find((s) => s.ml === selectedSize)!
  const lowStock = typeof product.stock === 'number' && product.stock <= 10

  const add = () => {
    addItem({
      productId: product.id,
      name: product.name,
      size: selectedSize,
      price: current.guest,
      qty,
      image: product.images[0],
    })
    openCart()
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="product-name font-display text-3xl md:text-4xl tracking-tightest leading-tight">
          {lead && <span className="font-normal">{lead} </span>}
          <strong>{last}</strong>
        </h1>
        <a href="#reviews" className="inline-flex items-center gap-2 mt-2 group">
          <StarRating rating={product.rating} count={product.reviewCount} size={15} />
          <span className="text-xs text-muted group-hover:text-ink underline-offset-2 group-hover:underline">
            See reviews
          </span>
        </a>
        <p className="text-sm text-muted mt-2">
          Inspired by{' '}
          <span className="text-ink font-medium">
            {product.inspiredBy.brand}&apos;s {product.inspiredBy.scent}
          </span>
        </p>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-2xl font-semibold">{price(current.guest)}</span>
        <span className="text-coral font-medium">
          member: {priceFixed(current.member)}
        </span>
        <span className="text-sm text-muted line-through">
          Retail {price(product.retailPrice)}
        </span>
      </div>

      {/* Size */}
      <div>
        <p className="eyebrow mb-2">Size</p>
        <SizeSelector
          sizes={product.sizes}
          selected={selectedSize}
          onChange={setSelectedSize}
        />
      </div>

      {/* Crafted in France · Scent family */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <span className="inline-flex items-center gap-1.5 text-muted">
          <MapPin size={14} /> Crafted in France
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="text-muted">Scent Family:</span>
          <span
            className="text-[11px] font-semibold rounded-pill px-2 py-0.5"
            style={{ backgroundColor: fam.color, color: fam.text }}
          >
            {fam.label}
          </span>
        </span>
      </div>

      {lowStock && (
        <p className="text-sm font-medium text-coral">
          🔥 Only {product.stock} left — selling fast
        </p>
      )}

      {/* Quantity + Add to cart */}
      <div className="space-y-3">
        <div className="flex items-stretch gap-3">
          <QuantityStepper value={qty} onChange={setQty} />
          <button
            onClick={add}
            className="btn-solid flex-1 !py-3.5 text-sm whitespace-nowrap"
          >
            ADD TO CART · {price(current.guest * qty)}
          </button>
        </div>
        <button
          onClick={() => toggle(product.id)}
          aria-pressed={saved}
          className="btn-outline w-full !py-3 text-sm"
        >
          <Heart
            size={16}
            fill={saved ? '#D6492E' : 'none'}
            stroke={saved ? '#D6492E' : 'currentColor'}
          />
          {saved ? 'Saved to Wishlist' : 'Save for Later'}
        </button>
      </div>

      <p className="text-xs text-muted flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="inline-flex items-center gap-1"><Check size={12} /> Free shipping over $100</span>
        <span className="inline-flex items-center gap-1"><Check size={12} /> Free 30-day returns</span>
        <span className="inline-flex items-center gap-1"><Check size={12} /> Ships in 24h</span>
      </p>
    </div>
  )
}
