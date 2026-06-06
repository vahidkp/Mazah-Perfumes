'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useState } from 'react'
import { cn, price, priceFixed, nameParts, isLightHex } from '@/lib/utils'
import { useWishlistStore } from '@/store/wishlist'
import { useCartStore } from '@/store/cart'
import { lowestGuest, lowestMember } from '@/lib/data/products'
import { FAMILY, GENDER } from '@/lib/data/site'
import type { Product } from '@/types'
import StarRating from './StarRating'

interface Props {
  product: Product
  variant?: 'grid' | 'featured' | 'drop'
  className?: string
  priority?: boolean
}

/** Two-weight Dossier-style product name. */
function ProductName({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const { lead, last } = nameParts(name)
  return (
    <span className={cn('product-name', className)}>
      {lead && <span className="font-normal">{lead} </span>}
      <strong>{last}</strong>
    </span>
  )
}

export default function ProductCard({
  product,
  variant = 'grid',
  className,
  priority,
}: Props) {
  const [hovered, setHovered] = useState(false)
  const { toggle, has } = useWishlistStore()
  const addItem = useCartStore((s) => s.addItem)
  const wishlisted = has(product.id)
  const fam = FAMILY[product.family]
  const guest = lowestGuest(product)
  const member = lowestMember(product)
  const href = `/collections/${product.slug}`

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      productId: product.id,
      name: product.name,
      size: product.sizes[0].ml,
      price: product.sizes[0].guest,
      qty: 1,
      image: product.images[0],
    })
  }

  const heart = (
    <button
      onClick={(e) => {
        e.preventDefault()
        toggle(product.id)
      }}
      aria-label="Add to wishlist"
      className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-paper/85 backdrop-blur grid place-items-center transition-transform hover:scale-110"
    >
      <Heart
        size={14}
        fill={wishlisted ? '#D6492E' : 'none'}
        stroke={wishlisted ? '#D6492E' : '#141414'}
      />
    </button>
  )

  // ---- Colorful "latest drops" card ----
  if (variant === 'drop') {
    const light = isLightHex(product.cardColor)
    return (
      <Link
        href={href}
        className={cn('group block', className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative overflow-hidden rounded-card aspect-[4/5]"
          style={{ backgroundColor: product.cardColor }}
        >
          {heart}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            className={cn(
              'object-contain p-5 blend-multiply transition-transform duration-500',
              hovered ? 'scale-105' : 'scale-100'
            )}
            sizes="(max-width:640px) 80vw, (max-width:1024px) 40vw, 25vw"
          />
          {/* Bottom scrim aids legibility on the darker, saturated cards. */}
          {!light && (
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/30 to-transparent" />
          )}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <ProductName
              name={product.name}
              className={cn('block text-xl', light ? 'text-ink' : 'text-paper')}
            />
            <p className={cn('text-xs mt-0.5', light ? 'text-ink/60' : 'text-paper/85')}>
              Inspired by {product.inspiredBy.brand}&apos;s{' '}
              {product.inspiredBy.scent}
            </p>
            <button
              onClick={handleAdd}
              className={cn(
                'mt-3 w-full text-xs font-semibold tracking-wide rounded-pill py-2.5 transition-transform hover:scale-[1.02]',
                light ? 'bg-ink text-paper' : 'bg-paper text-ink'
              )}
            >
              ADD TO CART&nbsp;&nbsp;{price(guest)}
            </button>
          </div>
        </div>
      </Link>
    )
  }

  // ---- White "featured" card with explicit add-to-cart ----
  if (variant === 'featured') {
    return (
      <Link
        href={href}
        className={cn('group block', className)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative overflow-hidden rounded-card aspect-square"
          style={{ backgroundColor: product.tint }}
        >
          {heart}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            className={cn(
              'object-contain p-6 blend-multiply transition-transform duration-500',
              hovered ? 'scale-105' : 'scale-100'
            )}
            sizes="(max-width:640px) 90vw, 33vw"
          />
        </div>
        <div className="mt-3">
          <ProductName name={product.name} className="text-lg" />
          <div className="mt-1">
            <StarRating rating={product.rating} count={product.reviewCount} size={13} />
          </div>
          <p className="text-xs text-muted mt-1.5">
            Inspired by{' '}
            <span className="text-ink font-medium">
              {product.inspiredBy.brand}&apos;s {product.inspiredBy.scent}
            </span>
          </p>
          <button onClick={handleAdd} className="btn-outline w-full mt-3 !py-2.5 text-xs tracking-wide">
            ADD TO CART&nbsp;&nbsp;{price(guest)}
          </button>
        </div>
      </Link>
    )
  }

  // ---- Default collection grid card ----
  return (
    <Link
      href={href}
      className={cn('group block', className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-card aspect-square border border-line/60"
        style={{ backgroundColor: product.tint }}
      >
        {/* brand wordmark */}
        <span className="absolute top-3 left-3 z-10 font-display text-[11px] lowercase tracking-tight text-ink/70">
          mazah
        </span>
        {/* gender tag — sits left of the wishlist heart (heart spans ~12–44px from right) */}
        <span className="absolute top-3 right-12 z-10 text-[9px] font-semibold uppercase tracking-wide text-muted border border-line bg-paper/70 rounded-pill px-2 py-0.5">
          {GENDER[product.gender]}
        </span>
        {heart}
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          className={cn(
            'object-contain p-6 blend-multiply transition-transform duration-500',
            hovered ? 'scale-105' : 'scale-100'
          )}
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
        />
        {/* quick add — reveal on hover (desktop), always visible (mobile) */}
        <button
          onClick={handleAdd}
          className={cn(
            'absolute bottom-3 inset-x-3 bg-ink text-paper text-xs font-semibold rounded-pill py-2.5 transition-all duration-300',
            'opacity-100 translate-y-0 md:opacity-0 md:translate-y-2',
            hovered && 'md:opacity-100 md:translate-y-0'
          )}
        >
          ADD TO CART · {price(guest)}
        </button>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <ProductName name={product.name} className="text-[15px] leading-tight" />
          <span
            className="shrink-0 text-[10px] font-semibold rounded-pill px-2 py-0.5"
            style={{ backgroundColor: fam.color, color: fam.text }}
          >
            {fam.label}
          </span>
        </div>
        <div className="mt-1">
          <StarRating rating={product.rating} count={product.reviewCount} size={12} />
        </div>
        <p className="text-xs text-muted mt-1.5 leading-snug">
          Inspired by{' '}
          <span className="text-ink font-medium">
            {product.inspiredBy.brand}&apos;s {product.inspiredBy.scent}
          </span>
        </p>
        <p className="text-sm mt-1.5">
          <span className="text-muted">Guest: </span>
          <span className="font-semibold">{price(guest)}</span>
          <span className="text-coral font-medium ml-2">
            member: {priceFixed(member)}
          </span>
        </p>
      </div>
    </Link>
  )
}

export { ProductName }
