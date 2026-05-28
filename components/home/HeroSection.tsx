'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { blurDataUrl, heroImage } from '@/lib/utils'

function CoffeeSteam() {
  return (
    <div className="mx-auto mt-10 h-24 w-32 text-latte/80" aria-hidden="true">
      <svg viewBox="0 0 128 96" className="h-full w-full">
        <path
          d="M46 42 C36 24, 58 22, 47 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-steam1"
        />
        <path
          d="M64 44 C54 26, 76 23, 64 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-steam2"
        />
        <path
          d="M82 42 C72 26, 94 22, 83 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-steam3"
        />
        <path
          d="M31 55h57v10a22 22 0 0 1-22 22H53a22 22 0 0 1-22-22V55Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M88 61h8a10 10 0 0 1 0 20h-9"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Cozy modern cafe interior at Aroma Brew Cafe"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(28,28,28,0.65)] to-[rgba(75,46,43,0.40)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-latte shadow-card backdrop-blur"
        >
          Now Open in Puranpur 🎉
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 font-heading font-bold leading-[0.95] text-warmwhite"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          Fresh Brews.
          <br />
          Cozy Vibes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-xl text-latte/90"
        >
          Your perfect coffee escape in Puranpur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/menu" size="lg">
            Explore Menu
          </Button>
          <Button href="/reservation" variant="secondary" size="lg">
            Reserve a Table
          </Button>
        </motion.div>

        <CoffeeSteam />
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor">
          <path d="m6 9 6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  )
}
