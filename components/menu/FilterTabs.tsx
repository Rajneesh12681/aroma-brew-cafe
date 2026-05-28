'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export type FilterOption<T extends string = string> = {
  label: string
  value: T
}

type FilterTabsProps<T extends string> = {
  options: FilterOption<T>[]
  active: T
  onChange: (value: T) => void
  className?: string
}

export function FilterTabs<T extends string>({
  options,
  active,
  onChange,
  className,
}: FilterTabsProps<T>) {
  return (
    <div
      className={cn(
        'flex flex-wrap items-center justify-center gap-2 rounded-full bg-latte/70 p-1 dark:bg-white/10',
        className,
      )}
      role="tablist"
      aria-label="Filter menu items"
    >
      {options.map((option) => {
        const isActive = option.value === active
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              'relative rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel',
              isActive
                ? 'text-white'
                : 'text-espresso hover:text-espresso dark:text-latte',
            )}
          >
            {isActive ? (
              <motion.span
                layoutId="active-filter-pill"
                className="absolute inset-0 rounded-full bg-espresso dark:bg-caramel"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            ) : null}
            <span
              className={cn(
                'relative z-10',
                isActive && 'dark:text-espresso',
              )}
            >
              {option.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
