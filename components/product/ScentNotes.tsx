import { Leaf, Heart, Anchor, Check } from 'lucide-react'
import type { Product } from '@/types'

const TIERS = [
  { key: 'top', label: 'Top', icon: Leaf, descKey: 'topDesc' },
  { key: 'heart', label: 'Middle', icon: Heart, descKey: 'middleDesc' },
  { key: 'base', label: 'Base', icon: Anchor, descKey: 'baseDesc' },
] as const

export default function ScentNotes({ product }: { product: Product }) {
  return (
    <div className="rounded-card border border-line p-5 sm:p-6">
      <p className="eyebrow mb-3">Scent Notes</p>
      <p className="font-display text-lg font-semibold tracking-tightest">
        This perfume is{' '}
        <span className="text-coral">{product.noteDescriptor}</span>
      </p>

      {/* Main notes */}
      <div className="grid grid-cols-4 gap-2 mt-5">
        {product.mainNotes.map((n) => (
          <div key={n.name} className="flex flex-col items-center text-center gap-1.5">
            <span className="text-2xl" aria-hidden>
              {n.icon}
            </span>
            <span className="text-xs text-muted leading-tight">{n.name}</span>
          </div>
        ))}
      </div>

      {/* Pyramid */}
      <div className="mt-6 space-y-3">
        {TIERS.map(({ key, label, icon: Icon, descKey }) => (
          <div key={key} className="flex gap-3">
            <Icon size={16} className="mt-0.5 text-ink shrink-0" />
            <p className="text-sm">
              <span className="font-semibold">{label}: </span>
              <span className="text-muted">{product[descKey]}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Ingredients */}
      <details className="mt-5 group">
        <summary
          aria-label="Toggle full ingredient list"
          className="text-xs font-semibold cursor-pointer list-none flex items-center gap-1"
        >
          <span className="group-open:hidden">+ Full ingredient list</span>
          <span className="hidden group-open:inline">– Hide ingredients</span>
        </summary>
        <p className="text-2xs text-faint leading-relaxed mt-2">
          {product.ingredients}
        </p>
      </details>

      {/* Attributes */}
      <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-line text-xs">
        {product.attributes.vegan && (
          <span className="inline-flex items-center gap-1 text-muted">
            <Check size={13} className="text-green-700" /> Vegan
          </span>
        )}
        {product.attributes.crueltyFree && (
          <span className="inline-flex items-center gap-1 text-muted">
            <Check size={13} className="text-green-700" /> Cruelty-free
          </span>
        )}
        {product.attributes.clean && (
          <span className="inline-flex items-center gap-1 text-muted">
            <Check size={13} className="text-green-700" /> Clean ingredients
          </span>
        )}
      </div>
    </div>
  )
}
