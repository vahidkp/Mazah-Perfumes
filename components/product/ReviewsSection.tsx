'use client'
import { useState } from 'react'
import { BadgeCheck, Star, MessageSquare } from 'lucide-react'
import type { Review } from '@/types'
import StarRating from '@/components/ui/StarRating'

interface Props {
  reviews: Review[]
  rating: number
  count: number
}

const FILTERS = ['Most Recent', 'Highest Rating', 'Lowest Rating', 'Verified']

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function ReviewsSection({ reviews, rating, count }: Props) {
  const [shown, setShown] = useState(5)
  const [filter, setFilter] = useState('Most Recent')

  const sorted = [...reviews]
  if (filter === 'Highest Rating') sorted.sort((a, b) => b.rating - a.rating)
  else if (filter === 'Lowest Rating') sorted.sort((a, b) => a.rating - b.rating)
  else if (filter === 'Verified')
    sorted.sort((a, b) => Number(b.verified) - Number(a.verified))

  return (
    <section id="reviews" className="bg-canvas border-t border-line scroll-mt-20">
      <div className="container-wide py-14">
        {/* Trustpilot-style banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-3 sm:gap-5 text-center mb-10">
          <div className="flex items-center gap-2">
            <Star size={18} fill="#00B67A" stroke="#00B67A" />
            <span className="font-semibold">Trustpilot</span>
          </div>
          <span className="text-muted text-sm">
            Mazah is rated{' '}
            <span className="font-semibold text-ink">Excellent</span>
          </span>
          <div className="flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className="w-5 h-5 grid place-items-center"
                style={{ backgroundColor: '#00B67A' }}
              >
                <Star size={12} fill="#fff" stroke="#fff" />
              </span>
            ))}
            <span className="text-sm font-medium ml-1">{rating}</span>
          </div>
          <span className="text-xs text-muted">Based on {count.toLocaleString()} reviews</span>
        </div>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          {/* Summary + write review */}
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tightest">
              Customer Reviews
            </h2>
            <div className="flex items-end gap-3 mt-3">
              <span className="font-display text-5xl font-extrabold">{rating}</span>
              <div className="pb-1">
                <StarRating rating={rating} showCount={false} size={16} />
                <p className="text-xs text-muted mt-1">
                  Based on {count.toLocaleString()} reviews
                </p>
              </div>
            </div>

            <div className="flex gap-4 mt-5 text-sm border-b border-line">
              <span className="pb-2 border-b-2 border-ink font-semibold">
                Reviews ({count.toLocaleString()})
              </span>
              <span className="pb-2 text-muted">Questions (3)</span>
            </div>

            <button className="btn-outline w-full mt-5 text-sm">
              Write a Review
            </button>
          </div>

          {/* Review list */}
          <div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`text-xs rounded-pill px-3 py-1.5 border transition-colors ${
                    filter === f
                      ? 'border-ink bg-ink text-paper'
                      : 'border-line text-muted hover:border-ink'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {sorted.slice(0, shown).map((r) => (
                <div key={r.id} className="border-b border-line pb-6">
                  <div className="flex items-start gap-3">
                    <span className="w-9 h-9 rounded-full bg-card grid place-items-center text-xs font-semibold shrink-0">
                      {initials(r.author)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold">{r.author}</p>
                          {r.verified && (
                            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wide text-green-700">
                              <BadgeCheck size={12} /> Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted">
                          {new Date(r.date).toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                      <div className="mt-1">
                        <StarRating rating={r.rating} showCount={false} size={13} />
                      </div>
                      {r.title && (
                        <p className="text-sm font-semibold mt-2">{r.title}</p>
                      )}
                      <p className="text-sm text-muted leading-relaxed mt-1">
                        {r.text}
                      </p>

                      {r.reply && (
                        <div className="mt-3 ml-1 pl-3 border-l-2 border-line">
                          <p className="text-xs font-semibold flex items-center gap-1.5">
                            <MessageSquare size={12} /> Mazah Perfumes
                          </p>
                          <p className="text-sm text-muted leading-relaxed mt-1">
                            {r.reply}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {shown < sorted.length && (
              <button
                onClick={() => setShown((s) => s + 5)}
                className="btn-outline mt-8 text-sm px-12"
              >
                Show More
              </button>
            )}
            {reviews.length === 0 && (
              <p className="text-sm text-muted">
                Be the first to review this fragrance.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
