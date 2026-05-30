import type { Metadata } from 'next'
import { MenuPageClient } from '@/components/menu/MenuPageClient'
import { TeaStoryHero } from '@/components/menu/TeaStoryHero'

export const metadata: Metadata = {
  title: 'Menu | Aroma Brew Cafe — Best Coffee in Puranpur',
  description:
    'Explore our full menu of premium coffees, cold drinks, shakes and food. Starting ₹79. Aroma Brew Cafe, Puranpur.',
}

export default function MenuPage() {
  return (
    <>
      <TeaStoryHero />
      <MenuPageClient />
    </>
  )
}
