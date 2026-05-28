'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { fadeIn } from '@/lib/utils'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            borderRadius: '16px',
            background: '#2A1F1D',
            color: '#F5E6D3',
          },
        }}
      />
    </ThemeProvider>
  )
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.main
      id="main-content"
      key={pathname}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.main>
  )
}
