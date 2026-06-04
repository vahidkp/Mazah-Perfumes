import { Star } from 'lucide-react'

interface Props {
  rating: number
  count?: number
  size?: number
}

export default function StarRating({ rating, count, size = 14 }: Props) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={size}
            fill={i <= Math.round(rating) ? '#C8962A' : 'none'}
            stroke="#C8962A"
          />
        ))}
      </div>
      {count !== undefined && (
        <span className="font-body text-xs text-muted">({count})</span>
      )}
    </div>
  )
}
