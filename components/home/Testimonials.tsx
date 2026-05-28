'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StarRating } from '@/components/ui/StarRating'
import { testimonials } from '@/lib/data'
import { cn, fadeInUp, staggerGrid } from '@/lib/utils'
import type { Testimonial } from '@/types'

const tagColors: Record<Testimonial['tag'], string> = {
  student: 'bg-blue-100 text-blue-800',
  couple: 'bg-rose-100 text-rose-800',
  freelancer: 'bg-emerald-100 text-emerald-800',
  foodie: 'bg-amber-100 text-amber-800',
}

const tagLabels: Record<Testimonial['tag'], string> = {
  student: 'Student',
  couple: 'Couple',
  freelancer: 'Freelancer',
  foodie: 'Foodie',
}

export function Testimonials() {
  return (
    <section className="bg-latte/30 py-20 dark:bg-espresso/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Guests Say"
          subtitle="Real words from students, couples, remote workers and food lovers around Puranpur."
        />

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={fadeInUp}
              className="rounded-card bg-white p-6 shadow-card dark:bg-cardDark"
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    'grid h-12 w-12 place-items-center rounded-full text-sm font-bold',
                    tagColors[testimonial.tag],
                  )}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-espresso dark:text-latte">
                    {testimonial.name}
                  </h3>
                  <span
                    className={cn(
                      'mt-1 inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold',
                      tagColors[testimonial.tag],
                    )}
                  >
                    {tagLabels[testimonial.tag]}
                  </span>
                </div>
              </div>

              <StarRating rating={testimonial.rating} className="mt-5" />
              <p className="mt-4 line-clamp-3 text-sm italic leading-6 text-espresso/70 dark:text-latte/75">
                “{testimonial.review}”
              </p>
              <p className="mt-5 text-xs font-medium text-espresso/45 dark:text-latte/45">
                {testimonial.date}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
