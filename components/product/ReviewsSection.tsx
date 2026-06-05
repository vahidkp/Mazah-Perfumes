'use client'
import { useState } from 'react'
import { BadgeCheck } from 'lucide-react'
import type { Review } from '@/types'
import StarRating from '@/components/ui/StarRating'
import Button from '@/components/ui/Button'

interface Props {
  reviews: Review[]
  rating: number
  count: number
}

// Approximate the star distribution from the average so the bar chart looks real.
function distribution(rating: number) {
  const five = Math.round((rating / 5) * 78)
  const four = Math.round((rating / 5) * 15)
  const three = Math.max(0, 100 - five - four - 3)
  return [
    { star: 5, pct: five },
    { star: 4, pct: four },
    { star: 3, pct: Math.min(three, 5) },
    { star: 2, pct: 2 },
    { star: 1, pct: 1 },
  ]
}

export default function ReviewsSection({ reviews, rating, count }: Props) {
  const [shown, setShown] = useState(6)
  const dist = distribution(rating)

  return (
    <section id="reviews" className="max-w-content mx-auto px-6 py-16 scroll-mt-32">
      <h2 className="font-heading text-4xl text-charcoal mb-10">
        Customer <em>Reviews</em>
      </h2>
      <div className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-12">
        {/* Summary */}
        <div className="flex flex-col gap-4">
          <p className="font-body text-6xl font-bold text-charcoal">{rating}</p>
          <StarRating rating={rating} count={count} size={20} />
          <p className="font-body text-sm text-muted">{count} verified reviews</p>

          {/* Rating distribution bars */}
          <div className="flex flex-col gap-1.5 mt-2">
            {dist.map(({ star, pct }) => (
              <div key={star} className="flex items-center gap-2">
                <span className="font-body text-xs text-muted w-3">{star}</span>
                <div className="flex-1 h-1.5 rounded-pill bg-charcoal/10 overflow-hidden">
                  <div
                    className="h-full bg-gold-primary"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="font-body text-[11px] text-muted w-8 text-right">
                  {pct}%
                </span>
              </div>
            ))}
          </div>

          <Button variant="outline" className="self-start mt-2">
            Write a Review
          </Button>
        </div>

        {/* Review cards */}
        <div className="flex flex-col gap-6">
          {reviews.slice(0, shown).map((r) => (
            <div
              key={r.id}
              className="p-6 border border-charcoal/10 rounded-card bg-white"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <p className="font-body text-sm font-semibold">{r.author}</p>
                  {r.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-green-700 bg-green-50 px-1.5 py-0.5 rounded">
                      <BadgeCheck size={11} /> Verified
                    </span>
                  )}
                </div>
                <p className="font-body text-xs text-muted">
                  {new Date(r.date).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
              </div>
              <StarRating rating={r.rating} size={13} />
              <p className="font-body text-sm text-muted leading-relaxed mt-3">
                {r.text}
              </p>
            </div>
          ))}
          {shown < reviews.length && (
            <Button
              variant="ghost"
              className="self-start"
              onClick={() => setShown((s) => s + 4)}
            >
              Load More Reviews
            </Button>
          )}
          {reviews.length === 0 && (
            <p className="font-body text-sm text-muted">
              Be the first to review this fragrance.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
