import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  rating: number
  count?: number
  size?: number
  /** Star color. Defaults to ink (near-black), Dossier-style. */
  color?: string
  className?: string
  showCount?: boolean
}

export default function StarRating({
  rating,
  count,
  size = 14,
  color = '#141414',
  className,
  showCount = true,
}: Props) {
  const rounded = Math.round(rating)
  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className="flex" aria-label={`Rated ${rating} out of 5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            strokeWidth={1.5}
            fill={i <= rounded ? color : 'none'}
            stroke={color}
          />
        ))}
      </div>
      {showCount && count !== undefined && (
        <span className="font-body text-xs text-muted">
          {count.toLocaleString()}
        </span>
      )}
    </div>
  )
}
