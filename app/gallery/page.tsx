import type { Metadata } from 'next'
import { GalleryPageClient } from '@/components/gallery/GalleryPageClient'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Gallery | Aroma Brew Cafe Puranpur',
  description:
    'Photos of Aroma Brew Cafe interiors, coffee art, food and events in Puranpur UP.',
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Explore our interiors, coffee moments, snacks and celebrations."
      />
      <GalleryPageClient />
    </>
  )
}
