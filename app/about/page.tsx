import type { Metadata } from 'next'
import Image from 'next/image'
import { StatsCounter } from '@/components/about/StatsCounter'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/lib/data'
import { blurDataUrl, cafeInteriorImage } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About Us | Aroma Brew Cafe Puranpur',
  description:
    "Learn the story behind Aroma Brew Cafe — Puranpur's favourite premium coffee destination near Ashok Colony.",
}

const values = [
  {
    title: 'Quality First',
    description: 'We source only premium coffee beans',
  },
  {
    title: 'Community',
    description: 'A space for everyone — students, couples, dreamers',
  },
  {
    title: 'Warmth',
    description: 'Every guest is family at Aroma Brew',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="A premium cafe experience shaped by Puranpur's warmth and everyday energy."
      />

      <section className="bg-warmwhite py-20 dark:bg-matte">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="About Aroma Brew"
              title="Great coffee, made for memorable days"
              align="left"
            />
            <p className="mt-6 text-lg leading-8 text-espresso/75 dark:text-latte/75">
              Aroma Brew Cafe was born from a simple belief — that great coffee
              and great company can transform an ordinary day into something
              memorable. Nestled in the heart of Puranpur near Ashok Colony, we
              opened our doors to give this city its first truly premium cafe
              experience. Every cup we serve is a story of passion, precision,
              and the warmth of home.
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-card shadow-warm">
            <Image
              src={cafeInteriorImage}
              alt="Warm seating area inside Aroma Brew Cafe"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-latte/35 py-16 dark:bg-espresso/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      <section className="bg-warmwhite py-20 dark:bg-matte">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The details we protect every day, from the beans to the welcome."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-card bg-white p-8 shadow-card dark:bg-cardDark"
              >
                <h3 className="font-heading text-2xl font-bold text-espresso dark:text-latte">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-espresso/65 dark:text-latte/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-latte/35 py-20 dark:bg-espresso/20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="rounded-card bg-white p-8 shadow-card dark:bg-cardDark">
            <h2 className="font-heading text-3xl font-bold text-espresso dark:text-latte">
              Visit Us Near Ashok Colony
            </h2>
            <p className="mt-4 leading-7 text-espresso/70 dark:text-latte/75">
              {siteConfig.location}
            </p>
            <Button href={siteConfig.mapUrl} external className="mt-6">
              View on Maps
            </Button>
          </div>
          <iframe
            title="Aroma Brew Cafe location map"
            src={siteConfig.mapEmbedUrl}
            className="h-[400px] w-full rounded-card border-0 shadow-card"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  )
}
