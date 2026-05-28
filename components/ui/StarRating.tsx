import { cn } from '@/lib/utils'

type StarRatingProps = {
  rating: number
  className?: string
  showValue?: boolean
}

export function StarRating({ rating, className, showValue = false }: StarRatingProps) {
  const rounded = Math.round(rating)

  return (
    <div
      className={cn('flex items-center gap-1 text-sm text-caramel', className)}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} aria-hidden="true">
          {index < rounded ? '★' : '☆'}
        </span>
      ))}
      {showValue ? (
        <span className="ml-1 font-semibold text-espresso dark:text-latte">
          {rating.toFixed(1)}
        </span>
      ) : null}
    </div>
  )
}
