'use client'
import { useState } from 'react'
import type { Review } from '@/types'
import StarRating from '@/components/ui/StarRating'
import Button from '@/components/ui/Button'

interface Props {
  reviews: Review[]
  rating: number
  count: number
}

export default function ReviewsSection({ reviews, rating, count }: Props) {
  const [shown, setShown] = useState(4)
  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <h2 className="font-heading text-4xl text-charcoal mb-10">
        Customer <em>Reviews</em>
      </h2>
      <div className="grid md:grid-cols-[300px_1fr] gap-10 md:gap-12">
        {/* Summary */}
        <div className="flex flex-col gap-4">
          <p className="font-display text-6xl font-bold text-charcoal">
            {rating}
          </p>
          <StarRating rating={rating} count={count} size={20} />
          <p className="font-body text-sm text-muted">
            {count} verified reviews
          </p>
          <Button variant="outline" className="self-start">
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
                <p className="font-body text-sm font-semibold">{r.author}</p>
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
