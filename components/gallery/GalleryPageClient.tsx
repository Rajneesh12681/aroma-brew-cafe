'use client'

import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FilterTabs, type FilterOption } from '@/components/menu/FilterTabs'
import { galleryItems } from '@/lib/data'
import { blurDataUrl, cn, fadeInUp } from '@/lib/utils'
import type { GalleryItem } from '@/types'

type GalleryFilter = 'all' | GalleryItem['category']

const options: FilterOption<GalleryFilter>[] = [
  { label: 'All', value: 'all' },
  { label: 'Ambiance', value: 'ambiance' },
  { label: 'Coffee', value: 'coffee' },
  { label: 'Food', value: 'food' },
  { label: 'Events', value: 'events' },
]

const categoryLabels: Record<GalleryItem['category'], string> = {
  ambiance: 'Ambiance',
  coffee: 'Coffee',
  food: 'Food',
  events: 'Events',
}

export function GalleryPageClient() {
  const [active, setActive] = useState<GalleryFilter>('all')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const items = useMemo(
    () =>
      active === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  )
  const selectedItem =
    selectedIndex === null || !items[selectedIndex] ? null : items[selectedIndex]

  useEffect(() => {
    setSelectedIndex(null)
  }, [active])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (event.key === 'Escape') setSelectedIndex(null)
      if (event.key === 'ArrowRight') {
        setSelectedIndex((index) =>
          index === null ? null : (index + 1) % items.length,
        )
      }
      if (event.key === 'ArrowLeft') {
        setSelectedIndex((index) =>
          index === null ? null : (index - 1 + items.length) % items.length,
        )
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [items.length, selectedIndex])

  return (
    <section className="bg-warmwhite py-16 dark:bg-matte">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <FilterTabs options={options} active={active} onChange={setActive} />
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                layout
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.96 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-card text-left shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                aria-label={`Open ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={item.span === 'tall' ? 1200 : 700}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={blurDataUrl}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
                <div className="absolute inset-0 flex items-end justify-between bg-espresso/0 p-4 text-white opacity-0 transition-all duration-300 group-hover:bg-espresso/35 group-hover:opacity-100">
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {categoryLabels[item.category]}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 backdrop-blur">
                    ⛶
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image lightbox"
          >
            <button
              type="button"
              aria-label="Close lightbox"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              ×
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={() =>
                setSelectedIndex((index) =>
                  index === null ? null : (index - 1 + items.length) % items.length,
                )
              }
              className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              ‹
            </button>

            <motion.div
              key={selectedItem.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="relative h-[76vh] w-full max-w-5xl"
            >
              <Image
                src={selectedItem.src}
                alt={selectedItem.alt}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                className="object-contain"
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
                <p className="font-heading text-2xl font-bold">{selectedItem.alt}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-latte">
                  {categoryLabels[selectedItem.category]}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next image"
              onClick={() =>
                setSelectedIndex((index) =>
                  index === null ? null : (index + 1) % items.length,
                )
              }
              className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              ›
            </button>

            <div className={cn('sr-only')} aria-live="polite">
              Viewing {selectedItem.alt}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
