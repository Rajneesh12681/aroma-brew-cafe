'use client'

import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}
    >
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${
            light ? 'text-caramel' : 'text-caramel'
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-4xl font-bold md:text-5xl ${
          light ? 'text-warmwhite' : 'text-espresso dark:text-latte'
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-7 md:text-lg ${
            light ? 'text-latte/85' : 'text-espresso/70 dark:text-latte/75'
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  )
}
