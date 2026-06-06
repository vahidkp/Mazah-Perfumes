'use client'
import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  viewAllHref?: string
  children: React.ReactNode
  /** Tailwind width per card track item, e.g. 'w-[260px]'. */
  itemClass?: string
  className?: string
}

export default function CarouselRow({
  title,
  viewAllHref,
  children,
  itemClass = 'w-[78%] sm:w-[300px] lg:w-[280px]',
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section className={cn('container-wide py-10 md:py-14', className)}>
      <div className="flex items-end justify-between mb-5">
        <div className="flex items-baseline gap-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tightest">
            {title}
          </h2>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="text-sm underline underline-offset-4 text-muted hover:text-ink transition-colors"
            >
              View all
            </Link>
          )}
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border border-line grid place-items-center hover:bg-ink hover:text-paper transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="w-9 h-9 rounded-full border border-line grid place-items-center hover:bg-ink hover:text-paper transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {Array.isArray(children) ? (
          (children as React.ReactNode[]).map((child, i) => (
            <div key={i} className={cn('shrink-0 snap-start', itemClass)}>
              {child}
            </div>
          ))
        ) : (
          <div className={cn('shrink-0 snap-start', itemClass)}>{children}</div>
        )}
      </div>
    </section>
  )
}
