'use client'
import { cn, price } from '@/lib/utils'

interface SizeOption {
  ml: number
  guest: number
  member?: number
}
interface Props {
  sizes: SizeOption[]
  selected: number
  onChange: (ml: number) => void
}

export default function SizeSelector({ sizes, selected, onChange }: Props) {
  // Best value = lowest price-per-ml (typically the largest bottle).
  const bestValueMl =
    sizes.length > 1
      ? sizes.reduce((best, s) =>
          s.guest / s.ml < best.guest / best.ml ? s : best
        ).ml
      : null

  return (
    <div className="flex gap-2.5 flex-wrap" role="radiogroup" aria-label="Select size">
      {sizes.map(({ ml, guest }) => {
        const active = selected === ml
        const isBest = ml === bestValueMl
        return (
          <button
            key={ml}
            onClick={() => onChange(ml)}
            role="radio"
            aria-checked={active}
            aria-label={`${ml} millilitre, ${price(guest)}${isBest ? ', best value' : ''}`}
            className={cn(
              'relative flex items-center gap-2 px-4 py-3 rounded-lg font-body border transition-all duration-200 min-w-[112px]',
              active
                ? 'border-ink bg-ink/[0.03] ring-1 ring-ink'
                : 'border-line hover:border-ink/40'
            )}
          >
            {isBest && (
              <span className="absolute -top-2 right-2 text-[8px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-pill bg-ink text-paper whitespace-nowrap">
                Best Value
              </span>
            )}
            <span className="text-sm font-semibold">{ml}ML</span>
            <span className="text-sm text-muted">{price(guest)}</span>
          </button>
        )
      })}
    </div>
  )
}
