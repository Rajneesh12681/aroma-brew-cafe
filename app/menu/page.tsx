import type { Metadata } from 'next'
import { MenuPageClient } from '@/components/menu/MenuPageClient'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Menu | Aroma Brew Cafe — Best Coffee in Puranpur',
  description:
    'Explore our full menu of premium coffees, cold drinks, shakes and food. Starting ₹79. Aroma Brew Cafe, Puranpur.',
}

export default function MenuPage() {
  return (
    <>
      <PageHero
        title="Our Menu"
        subtitle="Premium coffee, chilled drinks and cafe favorites starting at ₹79."
      />
      <MenuPageClient />
    </>
  )
}
