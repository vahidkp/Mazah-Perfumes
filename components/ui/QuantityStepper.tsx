'use client'
import { Minus, Plus } from 'lucide-react'

interface Props {
  value: number
  onChange: (v: number) => void
  min?: number
  max?: number
}

export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 10,
}: Props) {
  return (
    <div className="inline-flex items-center border border-line rounded-pill overflow-hidden">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="px-4 py-2.5 hover:bg-card transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center font-body text-sm font-medium tabular-nums">
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="px-4 py-2.5 hover:bg-card transition-colors"
        aria-label="Increase quantity"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
