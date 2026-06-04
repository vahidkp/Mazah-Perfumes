'use client'
import { cn } from '@/lib/utils'

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
  return (
    <div className="flex gap-2 flex-wrap">
      {sizes.map(({ ml }) => (
        <button
          key={ml}
          onClick={() => onChange(ml)}
          className={cn(
            'px-5 py-2 rounded-pill font-body text-sm border transition-all duration-200',
            selected === ml
              ? 'bg-gold-primary border-gold-primary text-white'
              : 'bg-transparent border-charcoal/20 text-charcoal hover:border-gold-primary hover:text-gold-primary'
          )}
        >
          {ml}ml
        </button>
      ))}
    </div>
  )
}
