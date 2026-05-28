import type { Metadata } from 'next'
import Image from 'next/image'
import { ReservationForm } from '@/components/forms/ReservationForm'
import { Button } from '@/components/ui/Button'
import { openingHours, siteConfig } from '@/lib/data'
import { blurDataUrl, cafeInteriorImage, getWhatsAppUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Reserve a Table | Aroma Brew Cafe Puranpur',
}

export default function ReservationPage() {
  return (
    <section className="bg-warmwhite pb-20 pt-28 dark:bg-matte">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="order-2 overflow-hidden rounded-card bg-white shadow-card dark:bg-cardDark lg:order-1">
          <div className="relative h-80">
            <Image
              src={cafeInteriorImage}
              alt="Cozy table seating for reservations at Aroma Brew Cafe"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h1 className="font-heading text-4xl font-bold text-espresso dark:text-latte">
              Plan Your Visit
            </h1>
            <p className="mt-3 leading-7 text-espresso/70 dark:text-latte/70">
              Reserve a cozy table for study time, date night, birthday plans or
              your next group hangout.
            </p>

            <div className="mt-6 rounded-card bg-latte/60 p-5 dark:bg-white/10">
              <h2 className="font-semibold text-espresso dark:text-latte">
                Opening Hours
              </h2>
              <dl className="mt-3 space-y-2 text-sm text-espresso/75 dark:text-latte/75">
                {openingHours.map((item) => (
                  <div key={item.day} className="flex justify-between gap-4">
                    <dt>{item.day}</dt>
                    <dd>{item.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={getWhatsAppUrl('Hi! I want to reserve a table at Aroma Brew Cafe.')}
                external
                variant="green"
                className="flex-1"
              >
                WhatsApp
              </Button>
              <Button href={`tel:${siteConfig.phone}`} variant="outline" className="flex-1">
                Call Cafe
              </Button>
            </div>
          </div>
        </div>

        <div className="order-1 rounded-card bg-white p-6 shadow-card dark:bg-cardDark sm:p-8 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
            Reservation
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-espresso dark:text-latte">
            Book a Table
          </h2>
          <p className="mt-3 text-espresso/70 dark:text-latte/70">
            We will confirm your booking on WhatsApp after receiving the request.
          </p>
          <div className="mt-8">
            <ReservationForm />
          </div>
        </div>
      </div>
    </section>
  )
}
