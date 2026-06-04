'use client'
import { useState } from 'react'
import Image from 'next/image'
import Badge from '@/components/ui/Badge'
import type { Product } from '@/types'

interface Props {
  images: string[]
  name: string
  badges: Product['badges']
}

export default function ImageGallery({ images, name, badges }: Props) {
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square rounded-card overflow-hidden bg-gradient-to-b from-amber-50 to-amber-100 group cursor-zoom-in">
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width:768px) 100vw, 55vw"
          priority
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {badges.map((b) => (
            <Badge key={b} variant={b} />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-1 snap-x snap-mandatory no-scrollbar">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`snap-start relative w-16 md:w-20 flex-shrink-0 aspect-square rounded-lg overflow-hidden border-2 transition-all bg-gradient-to-b from-amber-50 to-amber-100 ${
                active === i
                  ? 'border-gold-primary'
                  : 'border-transparent hover:border-charcoal/20'
              }`}
            >
              <Image
                src={img}
                alt={`${name} view ${i + 1}`}
                fill
                className="object-contain p-2"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
