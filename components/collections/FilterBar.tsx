'use client'
import { useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const CATEGORIES = ['All', 'Floral', 'Woody', 'Oriental', 'Fresh', 'Citrus']
const SORTS = ['Most Popular', 'Price: Low–High', 'Price: High–Low', 'Newest']

interface Props {
  activeCategory: string
  activeSort: string
  onCategory: (c: string) => void
  onSort: (s: string) => void
}

export default function FilterBar({
  activeCategory,
  activeSort,
  onCategory,
  onSort,
}: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-[96px] md:top-[108px] z-30 bg-cream/95 backdrop-blur-sm border-b border-charcoal/10">
      {/* Desktop / tablet bar */}
      <div className="hidden md:block py-4 px-6">
        <div className="max-w-content mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategory(cat.toLowerCase())}
                className={cn(
                  'px-4 py-1.5 rounded-pill font-body text-xs uppercase tracking-wider border transition-all duration-200',
                  activeCategory === cat.toLowerCase()
                    ? 'bg-gold-primary border-gold-primary text-white'
                    : 'border-charcoal/20 text-charcoal hover:border-gold-primary hover:text-gold-primary'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={activeSort}
            onChange={(e) => onSort(e.target.value)}
            aria-label="Sort products"
            className="font-body text-sm border border-charcoal/20 rounded-pill px-4 py-1.5 bg-transparent focus:outline-none focus:border-gold-primary text-charcoal cursor-pointer"
          >
            {SORTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile trigger */}
      <div className="flex md:hidden items-center justify-between px-5 py-3">
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 font-body text-sm text-charcoal"
        >
          <SlidersHorizontal size={16} />
          Filter &amp; Sort
        </button>
        {activeCategory !== 'all' && (
          <span className="text-xs text-gold-primary capitalize">
            {activeCategory}
          </span>
        )}
      </div>

      {/* Mobile bottom sheet */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-cream rounded-t-2xl p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-heading text-xl">Filter &amp; Sort</h3>
              <button onClick={() => setOpen(false)} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-wider text-muted mb-3">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      onCategory(cat.toLowerCase())
                      setOpen(false)
                    }}
                    className={cn(
                      'px-4 py-2 rounded-pill font-body text-sm border transition-all',
                      activeCategory === cat.toLowerCase()
                        ? 'bg-gold-primary border-gold-primary text-white'
                        : 'border-charcoal/20 text-charcoal'
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-wider text-muted mb-3">
                Sort By
              </p>
              <div className="flex flex-col gap-2">
                {SORTS.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      onSort(s)
                      setOpen(false)
                    }}
                    className={cn(
                      'text-left px-4 py-3 rounded-lg font-body text-sm border transition-all',
                      activeSort === s
                        ? 'bg-gold-primary/10 border-gold-primary text-gold-primary'
                        : 'border-charcoal/10'
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
