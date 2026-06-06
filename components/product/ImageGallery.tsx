'use client'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Props {
  images: string[]
  name: string
  tint: string
}

export default function ImageGallery({ images, name, tint }: Props) {
  const [active, setActive] = useState(0)
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3">
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex sm:flex-col gap-3 overflow-x-auto no-scrollbar">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`${active === i ? 'Current view' : 'View'} image ${i + 1} of ${images.length}: ${name}`}
              aria-current={active === i}
              className={cn(
                'relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border transition-all',
                active === i ? 'border-ink' : 'border-line hover:border-ink/40'
              )}
              style={{ backgroundColor: tint }}
            >
              <Image
                src={img}
                alt={`${name} view ${i + 1}`}
                fill
                className="object-contain p-1.5 blend-multiply"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main image */}
      <div
        className="relative flex-1 aspect-square rounded-card overflow-hidden group cursor-zoom-in"
        style={{ backgroundColor: tint }}
      >
        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          className="object-contain p-8 blend-multiply transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}
