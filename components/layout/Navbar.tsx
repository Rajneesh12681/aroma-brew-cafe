'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { navLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative h-5 w-6" aria-hidden="true">
      <span
        className={cn(
          'absolute left-0 top-1 h-0.5 w-6 rounded bg-current transition-transform',
          open && 'translate-y-1.5 rotate-45',
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-2.5 h-0.5 w-6 rounded bg-current transition-opacity',
          open && 'opacity-0',
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-4 h-0.5 w-6 rounded bg-current transition-transform',
          open && '-translate-y-1.5 -rotate-45',
        )}
      />
    </span>
  )
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-espresso/15 bg-white/70 text-espresso shadow-card transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel dark:border-latte/20 dark:bg-white/10 dark:text-latte"
    >
      <motion.span
        key={isDark ? 'sun' : 'moon'}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        className="text-lg"
        aria-hidden="true"
      >
        {isDark ? '☀' : '☾'}
      </motion.span>
    </button>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const solidNav = isScrolled || isOpen

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-50 w-full transition-all duration-300',
        solidNav
          ? 'border-b border-latte/20 bg-warmwhite/90 shadow-card backdrop-blur-md dark:bg-matte/90'
          : 'bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className={cn(
            'font-heading text-2xl font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel',
            solidNav ? 'text-espresso dark:text-latte' : 'text-warmwhite',
          )}
        >
          Aroma Brew <span className="font-body text-xs uppercase tracking-[0.22em]">Cafe</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel',
                  solidNav
                    ? 'text-espresso/80 hover:text-espresso dark:text-latte/80 dark:hover:text-latte'
                    : 'text-warmwhite/85 hover:text-white',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-2 left-0 h-0.5 rounded-full bg-caramel transition-all duration-300 group-hover:w-full',
                    isActive ? 'w-full' : 'w-0',
                  )}
                />
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button href="/reservation" size="sm">
            Reserve Table
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
            className={cn(
              'grid h-10 w-10 place-items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel',
              solidNav
                ? 'border-espresso/15 bg-white/70 text-espresso dark:border-latte/20 dark:bg-white/10 dark:text-latte'
                : 'border-white/30 bg-white/10 text-white',
            )}
          >
            <MenuIcon open={isOpen} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="border-t border-latte/40 bg-warmwhite/95 px-4 py-6 shadow-warm backdrop-blur-md dark:border-espresso/30 dark:bg-matte/95 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'rounded-card px-4 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel',
                      isActive
                        ? 'bg-espresso text-white'
                        : 'text-espresso hover:bg-latte dark:text-latte dark:hover:bg-white/10',
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Button href="/reservation" className="mt-2 w-full">
                Reserve Table
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
