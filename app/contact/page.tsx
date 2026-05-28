import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'
import { Button } from '@/components/ui/Button'
import { PageHero } from '@/components/ui/PageHero'
import { openingHours, siteConfig } from '@/lib/data'
import { getWhatsAppUrl } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact | Aroma Brew Cafe — Café in Puranpur UP',
  description:
    'Visit Aroma Brew Cafe near Ashok Colony, Puranpur. Call, WhatsApp, or fill our contact form.',
}

const contactCards = [
  { icon: '📍', label: 'Address', value: siteConfig.location, href: siteConfig.mapUrl },
  { icon: '📞', label: 'Phone', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: 'Same number',
    href: getWhatsAppUrl('Hi! I want to know more about Aroma Brew Cafe.'),
  },
  {
    icon: '📱',
    label: 'Instagram',
    value: '@aroma_brew_cafe',
    href: siteConfig.instagramUrl,
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Find Us"
        subtitle="Visit Aroma Brew Cafe near Ashok Colony, Puranpur, or message us before you come."
      />

      <section className="bg-warmwhite py-20 dark:bg-matte">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                className="flex gap-4 rounded-card bg-white p-5 shadow-card transition hover:-translate-y-1 hover:shadow-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel dark:bg-cardDark"
              >
                <span className="text-3xl" aria-hidden="true">
                  {card.icon}
                </span>
                <span>
                  <span className="block font-semibold text-espresso dark:text-latte">
                    {card.label}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-espresso/65 dark:text-latte/70">
                    {card.value}
                  </span>
                </span>
              </a>
            ))}

            <div className="rounded-card bg-white p-5 shadow-card dark:bg-cardDark">
              <div className="flex gap-4">
                <span className="text-3xl" aria-hidden="true">
                  🕐
                </span>
                <div className="flex-1">
                  <h2 className="font-semibold text-espresso dark:text-latte">Hours</h2>
                  <dl className="mt-2 space-y-2 text-sm text-espresso/65 dark:text-latte/70">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex justify-between gap-4">
                        <dt>{item.day}</dt>
                        <dd>{item.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <iframe
            title="Aroma Brew Cafe map"
            src={siteConfig.mapEmbedUrl}
            className="h-[400px] w-full rounded-card border-0 shadow-card"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="bg-latte/35 py-20 dark:bg-espresso/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-card bg-white p-6 shadow-card dark:bg-cardDark sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
              Contact Form
            </p>
            <h2 className="mt-3 font-heading text-4xl font-bold text-espresso dark:text-latte">
              Send a Message
            </h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-warmwhite px-4 pb-20 dark:bg-matte">
        <div className="mx-auto flex max-w-4xl flex-col justify-center gap-3 sm:flex-row">
          <Button href={`tel:${siteConfig.phone}`} variant="dark">
            Call Now
          </Button>
          <Button
            href={getWhatsAppUrl('Hi! I want to contact Aroma Brew Cafe.')}
            external
            variant="green"
          >
            WhatsApp Us
          </Button>
          <Button href={siteConfig.mapUrl} external variant="outline">
            View on Maps
          </Button>
        </div>
      </section>
    </>
  )
}
