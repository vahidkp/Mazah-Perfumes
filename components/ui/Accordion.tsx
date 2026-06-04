'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Item {
  title: string
  content: React.ReactNode
}
interface Props {
  items: Item[]
}

export default function Accordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
      {items.map(({ title, content }, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center py-4 text-left"
          >
            <span className="font-body text-sm font-medium tracking-wider uppercase">
              {title}
            </span>
            {open === i ? (
              <Minus size={16} className="text-gold-primary" />
            ) : (
              <Plus size={16} className="text-gold-primary" />
            )}
          </button>
          <div
            className={cn(
              'overflow-hidden transition-all duration-300',
              open === i ? 'max-h-96 pb-4' : 'max-h-0'
            )}
          >
            <div className="font-body text-sm text-muted leading-relaxed">
              {content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
