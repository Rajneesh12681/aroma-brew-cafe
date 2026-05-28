export function SkeletonCard() {
  return (
    <div className="overflow-hidden rounded-card bg-white shadow-card dark:bg-cardDark">
      <div className="h-60 animate-pulse bg-latte dark:bg-white/10" />
      <div className="space-y-4 p-4">
        <div className="h-5 w-2/3 animate-pulse rounded bg-latte dark:bg-white/10" />
        <div className="h-4 w-full animate-pulse rounded bg-latte dark:bg-white/10" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-latte dark:bg-white/10" />
        <div className="flex justify-between">
          <div className="h-6 w-16 animate-pulse rounded bg-latte dark:bg-white/10" />
          <div className="h-6 w-28 animate-pulse rounded bg-latte dark:bg-white/10" />
        </div>
      </div>
    </div>
  )
}
