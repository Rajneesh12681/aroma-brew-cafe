import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        espresso: '#4B2E2B',
        latte: '#F5E6D3',
        caramel: '#D9B382',
        warmwhite: '#FAF7F2',
        matte: '#1C1C1C',
        cardDark: '#2A1F1D',
      },
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 4px 24px rgba(75, 46, 43, 0.15)',
        card: '0 2px 12px rgba(75, 46, 43, 0.10)',
      },
      borderRadius: {
        card: '16px',
      },
      keyframes: {
        steamRise1: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '35%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-22px)' },
        },
        steamRise2: {
          '0%': { opacity: '0', transform: 'translateY(12px) translateX(0)' },
          '45%': { opacity: '0.9' },
          '100%': { opacity: '0', transform: 'translateY(-26px) translateX(4px)' },
        },
        steamRise3: {
          '0%': { opacity: '0', transform: 'translateY(8px) translateX(0)' },
          '40%': { opacity: '0.85' },
          '100%': { opacity: '0', transform: 'translateY(-24px) translateX(-4px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
      animation: {
        steam1: 'steamRise1 2s ease-in-out infinite',
        steam2: 'steamRise2 2.5s ease-in-out infinite',
        steam3: 'steamRise3 3s ease-in-out infinite',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
