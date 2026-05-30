'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { MenuCard } from '@/components/menu/MenuCard'
import { FilterTabs, type FilterOption } from '@/components/menu/FilterTabs'
import { Button } from '@/components/ui/Button'
import { menuItems } from '@/lib/data'
import { staggerGrid } from '@/lib/utils'
import type { MenuItem } from '@/types'

type MenuFilter = 'all' | MenuItem['category']

const options: FilterOption<MenuFilter>[] = [
  { label: 'All', value: 'all' },
  { label: 'Coffee', value: 'coffee' },
  { label: 'Cold Drinks', value: 'cold-drinks' },
  { label: 'Food', value: 'food' },
  { label: 'Shakes', value: 'shakes' },
]

export function MenuPageClient() {
  const [active, setActive] = useState<MenuFilter>('all')
  const items = useMemo(
    () =>
      active === 'all'
        ? menuItems
        : menuItems.filter((item) => item.category === active),
    [active],
  )

  return (
    <section id="menu-section" className="bg-warmwhite py-16 dark:bg-matte">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-0 lg:px-8">
        <div className="flex justify-center">
          <FilterTabs options={options} active={active} onChange={setActive} />
        </div>

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          animate="visible"
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-latte bg-warmwhite p-3 shadow-warm dark:border-espresso/40 dark:bg-matte md:hidden">
        <Button href="/reservation" className="w-full">
          Reserve a Table
        </Button>
      </div>
    </section>
  )
}
