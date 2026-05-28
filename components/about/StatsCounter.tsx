'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Stat = {
  label: string
  value: number
  suffix: string
}

const stats: Stat[] = [
  { label: 'Happy Customers', value: 500, suffix: '+' },
  { label: 'Menu Items', value: 10, suffix: '+' },
  { label: 'Average Rating', value: 4.8, suffix: '★' },
  { label: 'Year of Excellence', value: 1, suffix: '' },
]

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { stiffness: 80, damping: 18 })
  const display = useTransform(springValue, (latest) =>
    stat.value % 1 === 0 ? Math.round(latest).toString() : latest.toFixed(1),
  )

  useEffect(() => {
    if (inView) {
      motionValue.set(stat.value)
    }
  }, [inView, motionValue, stat.value])

  return (
    <div ref={ref} className="rounded-card bg-white p-6 text-center shadow-card dark:bg-cardDark">
      <p className="font-heading text-4xl font-bold text-espresso dark:text-caramel">
        <motion.span>{display}</motion.span>
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-semibold text-espresso/65 dark:text-latte/70">
        {stat.label}
      </p>
    </div>
  )
}

export function StatsCounter() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Counter key={stat.label} stat={stat} />
      ))}
    </div>
  )
}
