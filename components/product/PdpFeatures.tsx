import Image from 'next/image'
import { RotateCcw, MapPin, Award, Tag } from 'lucide-react'
import type { Product } from '@/types'

const FEATURES = [
  { icon: RotateCcw, label: 'Free Returns', sub: 'with Mazah+' },
  { icon: MapPin, label: 'Crafted in France', sub: '' },
  { icon: Award, label: '6+ Million', sub: 'bottles sold' },
  { icon: Tag, label: 'Up to 30% Off', sub: 'with Mazah+' },
]

export default function PdpFeatures({ product }: { product: Product }) {
  return (
    <div className="mt-4 space-y-4">
      {/* Feature grid */}
      <div className="grid grid-cols-2 gap-3">
        {FEATURES.map((f) => (
          <div
            key={f.label}
            className="flex items-center gap-3 rounded-card border border-line p-3.5"
          >
            <f.icon size={22} className="text-coral shrink-0" />
            <div className="leading-tight">
              <p className="text-sm font-semibold">{f.label}</p>
              {f.sub && <p className="text-xs text-muted">{f.sub}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Same scent / new look */}
      <div className="rounded-card overflow-hidden bg-card grid grid-cols-2">
        <div className="p-4 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Same Scent
          </p>
          <p className="font-display text-base font-bold tracking-tightest mt-0.5">
            New Look
          </p>
          <p className="text-xs text-muted mt-1">
            Our refreshed bottle — the fragrance you love, inside.
          </p>
        </div>
        <div className="relative min-h-[120px]" style={{ backgroundColor: product.tint }}>
          <Image
            src={product.images[0]}
            alt={`${product.name} new look`}
            fill
            className="object-contain p-4 blend-multiply"
            sizes="200px"
          />
        </div>
      </div>
    </div>
  )
}
