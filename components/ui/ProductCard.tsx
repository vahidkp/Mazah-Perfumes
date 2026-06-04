'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Plus } from 'lucide-react'
import { useState } from 'react'
import { cn, formatPrice } from '@/lib/utils'
import { useWishlistStore } from '@/store/wishlist'
import { useCartStore } from '@/store/cart'
import type { Product } from '@/types'
import Badge from './Badge'

interface Props {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: Props) {
  const [hovered, setHovered] = useState(false)
  const { toggle, has } = useWishlistStore()
  const addItem = useCartStore((s) => s.addItem)
  const wishlisted = has(product.id)
  const lowestPrice = Math.min(...product.sizes.map((s) => s.price))

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      productId: product.id,
      name: product.name,
      size: product.sizes[0].ml,
      price: product.sizes[0].price,
      qty: 1,
      image: product.images[0],
    })
  }

  return (
    <Link
      href={`/collections/${product.slug}`}
      className={cn('group block', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-card bg-gradient-to-b from-amber-100 to-amber-50 aspect-[3/4]">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={cn(
            'object-contain p-6 transition-transform duration-500',
            hovered ? 'scale-110' : 'scale-100'
          )}
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badges.map((b) => (
            <Badge key={b} variant={b} />
          ))}
        </div>

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            toggle(product.id)
          }}
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm
            grid place-items-center shadow-card transition-transform hover:scale-110"
        >
          <Heart
            size={14}
            fill={wishlisted ? '#C8962A' : 'none'}
            stroke={wishlisted ? '#C8962A' : '#1C1C1C'}
          />
        </button>

        {/* Quick add — always visible on mobile, reveal on hover for desktop */}
        <button
          onClick={handleAddToCart}
          className={cn(
            'absolute bottom-3 inset-x-3 bg-charcoal text-cream font-body text-xs tracking-widest uppercase',
            'py-2.5 rounded-pill flex items-center justify-center gap-2 transition-all duration-300',
            'opacity-100 translate-y-0',
            'md:opacity-0 md:translate-y-2',
            hovered && 'md:opacity-100 md:translate-y-0'
          )}
        >
          <Plus size={14} /> Add to Cart
        </button>
      </div>

      {/* Info */}
      <div className="mt-3 px-1">
        <p className="font-heading text-lg text-charcoal leading-tight">
          {product.name}
        </p>
        <p className="font-body text-sm text-muted capitalize mt-0.5">
          {product.category}
        </p>
        <p className="font-heading text-base text-gold-primary font-medium mt-1">
          {formatPrice(lowestPrice)}
        </p>
      </div>
    </Link>
  )
}
