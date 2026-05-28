import Image from 'next/image'
import { blurDataUrl, heroImage } from '@/lib/utils'

type PageHeroProps = {
  title: string
  subtitle?: string
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden pt-20 text-center">
      <Image
        src={heroImage}
        alt={`${title} at Aroma Brew Cafe`}
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={blurDataUrl}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-matte/75 to-espresso/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4">
        <h1 className="font-heading text-5xl font-bold text-warmwhite md:text-7xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-latte/90 md:text-xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}
