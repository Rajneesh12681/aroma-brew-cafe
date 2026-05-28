'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { fadeInUp, staggerGrid } from '@/lib/utils'

const features = [
  {
    icon: '☕',
    title: 'Freshly Brewed Coffee',
    description: 'Every cup crafted with premium beans',
  },
  {
    icon: '📶',
    title: 'Free High-Speed WiFi',
    description: 'Work, stream, stay connected all day',
  },
  {
    icon: '🛋️',
    title: 'Cozy Atmosphere',
    description: 'Warm lighting, comfy seating, good vibes',
  },
  {
    icon: '📸',
    title: 'Instagram-Worthy Interiors',
    description: 'Every corner is a photo moment',
  },
  {
    icon: '👥',
    title: 'Perfect Hangout Spot',
    description: 'For friends, dates, study sessions and more',
  },
  {
    icon: '⚡',
    title: 'Fast & Friendly Service',
    description: 'Because your time and comfort matter',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-espresso py-20 text-warmwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for Coffee, Comfort and Connection"
          subtitle="Aroma Brew is where study plans, date nights and everyday catch-ups feel better."
          light
        />

        <motion.div
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={fadeInUp}
              className="rounded-card border border-white/20 bg-white/10 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-warmwhite">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-latte/80">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
