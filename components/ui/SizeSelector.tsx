'use client'
import { cn, formatPrice } from '@/lib/utils'

interface SizeOption {
  ml: number
  price: number
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
          s.price / s.ml < best.price / best.ml ? s : best
        ).ml
      : null

  return (
    <div className="flex gap-2 flex-wrap">
      {sizes.map(({ ml, price }) => {
        const active = selected === ml
        const isBest = ml === bestValueMl
        return (
          <button
            key={ml}
            onClick={() => onChange(ml)}
            className={cn(
              'relative flex flex-col items-center gap-0.5 px-5 py-2.5 rounded-card font-body border transition-all duration-200 min-w-[90px]',
              active
                ? 'bg-gold-primary border-gold-primary text-white'
                : 'bg-transparent border-charcoal/20 text-charcoal hover:border-gold-primary'
            )}
          >
            {isBest && (
              <span
                className={cn(
                  'absolute -top-2 left-1/2 -translate-x-1/2 text-[8px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-pill whitespace-nowrap',
                  active ? 'bg-charcoal text-cream' : 'bg-gold-primary text-white'
                )}
              >
                Best Value
              </span>
            )}
            <span className="text-sm font-medium">{ml}ml</span>
            <span
              className={cn(
                'text-xs',
                active ? 'text-white/90' : 'text-muted'
              )}
            >
              {formatPrice(price)}
            </span>
          </button>
        )
      })}
    </div>
  )
}
