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
  /** Indices open by default. */
  defaultOpen?: number[]
  className?: string
}

export default function Accordion({
  items,
  defaultOpen = [],
  className,
}: Props) {
  const [open, setOpen] = useState<Set<number>>(new Set(defaultOpen))

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <div className={cn('border-t border-line', className)}>
      {items.map(({ title, content }, i) => {
        const isOpen = open.has(i)
        return (
          <div key={i} className="border-b border-line">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center py-4 text-left group"
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${i}`}
            >
              <span className="font-body text-sm font-semibold text-ink">
                {title}
              </span>
              {isOpen ? (
                <Minus size={16} className="text-ink shrink-0" />
              ) : (
                <Plus size={16} className="text-muted group-hover:text-ink shrink-0" />
              )}
            </button>
            <div
              id={`accordion-panel-${i}`}
              role="region"
              className={cn(
                'grid transition-all duration-300 ease-smooth',
                isOpen
                  ? 'grid-rows-[1fr] opacity-100 pb-5'
                  : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="font-body text-sm text-muted leading-relaxed">
                  {content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
