'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { galleryItems } from '@/lib/data'
import { blurDataUrl, fadeInUp, staggerGrid } from '@/lib/utils'

export function GalleryPreview() {
  return (
    <section className="bg-warmwhite py-20 dark:bg-matte">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="A Peek Inside Aroma Brew"
          subtitle="Warm corners, crafted cups and the kind of table you keep coming back to."
        />

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {galleryItems.slice(0, 6).map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-card shadow-card"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={900}
                height={item.span === 'tall' ? 1200 : 700}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={blurDataUrl}
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 grid place-items-center bg-espresso/0 text-white opacity-0 transition-all duration-300 group-hover:bg-espresso/25 group-hover:opacity-100">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/20 backdrop-blur">
                  ◉
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button href="/gallery" size="lg">
            View Full Gallery →
          </Button>
        </div>
      </div>
    </section>
  )
}
