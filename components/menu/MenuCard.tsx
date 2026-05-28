'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { MenuItem } from '@/types'
import { Button } from '@/components/ui/Button'
import { StarRating } from '@/components/ui/StarRating'
import { blurDataUrl, fadeInUp, formatPrice } from '@/lib/utils'

const categoryLabels: Record<MenuItem['category'], string> = {
  coffee: 'Coffee',
  'cold-drinks': 'Cold Drinks',
  food: 'Food',
  shakes: 'Shakes',
}

export function MenuCard({ item }: { item: MenuItem }) {
  return (
    <motion.article
      variants={fadeInUp}
      layout
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
      className="group overflow-hidden rounded-card bg-white shadow-card transition-all duration-300 hover:scale-[1.02] hover:shadow-warm dark:bg-cardDark"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={item.image}
          alt={`${item.name} at Aroma Brew Cafe`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute right-3 top-3 flex flex-col items-end gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-espresso shadow-card backdrop-blur">
            {categoryLabels[item.category]}
          </span>
          {item.isPopular ? (
            <span className="rounded-full bg-caramel px-3 py-1 text-xs font-semibold text-espresso shadow-card">
              ★ Popular
            </span>
          ) : null}
          {item.isNew ? (
            <span className="rounded-full bg-espresso px-3 py-1 text-xs font-semibold text-warmwhite shadow-card">
              New
            </span>
          ) : null}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-heading text-xl font-bold text-espresso dark:text-latte">
          {item.name}
        </h3>
        <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-espresso/60 dark:text-latte/65">
          {item.description}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <StarRating rating={item.rating} showValue />
          <span className="text-sm text-espresso/55 dark:text-latte/55">
            ({item.reviewCount})
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-xl font-bold text-espresso dark:text-caramel">
            {formatPrice(item.price)}
          </p>
          <Button
            href="/reservation"
            variant="ghost"
            size="sm"
            aria-label={`Add ${item.name} to order`}
            className="px-3 text-caramel hover:bg-caramel/10"
          >
            Add to Order →
          </Button>
        </div>
      </div>
    </motion.article>
  )
}
