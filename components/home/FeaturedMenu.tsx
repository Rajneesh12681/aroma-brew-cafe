'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { MenuCard } from '@/components/menu/MenuCard'
import { FilterTabs, type FilterOption } from '@/components/menu/FilterTabs'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { menuItems } from '@/lib/data'
import { staggerGrid } from '@/lib/utils'

type HomeFilter = 'all' | 'coffee' | 'cold-drinks' | 'food'

const options: FilterOption<HomeFilter>[] = [
  { label: 'All', value: 'all' },
  { label: 'Coffee', value: 'coffee' },
  { label: 'Cold Drinks', value: 'cold-drinks' },
  { label: 'Food', value: 'food' },
]

export function FeaturedMenu() {
  const [active, setActive] = useState<HomeFilter>('all')
  const items = useMemo(() => {
    const filtered =
      active === 'all'
        ? menuItems
        : menuItems.filter((item) => item.category === active)
    return filtered.slice(0, 6)
  }, [active])

  return (
    <section className="bg-warmwhite py-20 dark:bg-matte">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Signature Picks"
          subtitle="Crafted with love, served with warmth"
        />

        <div className="mt-10 flex justify-center">
          <FilterTabs options={options} active={active} onChange={setActive} />
        </div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <Button href="/menu" size="lg">
            View Full Menu →
          </Button>
        </div>
      </div>
    </section>
  )
}
