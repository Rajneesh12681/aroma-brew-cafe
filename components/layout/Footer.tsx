import Link from 'next/link'
import { navLinks, openingHours, siteConfig } from '@/lib/data'
import { getWhatsAppUrl } from '@/lib/utils'

export function Footer() {
  const quickLinks = navLinks.filter((link) =>
    ['/', '/menu', '/about', '/gallery'].includes(link.href),
  )

  return (
    <footer className="bg-espresso text-latte/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="font-heading text-3xl font-bold text-warmwhite">
            Aroma Brew
            <span className="ml-2 font-body text-xs uppercase tracking-[0.22em]">
              Cafe
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6">
            Premium coffee, cozy corners and warm conversations in the heart of
            Puranpur.
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Aroma Brew Cafe on Instagram"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-latte/20 text-latte transition-colors hover:bg-latte hover:text-espresso focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
          >
            ◎
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-warmwhite">Quick Links</h3>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition-colors hover:text-caramel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-warmwhite">Contact</h3>
          <address className="mt-4 space-y-3 text-sm not-italic leading-6">
            <p>{siteConfig.location}</p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="block transition-colors hover:text-caramel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              {siteConfig.phone}
            </a>
            <a
              href={getWhatsAppUrl("Hi! I'd like to know more about Aroma Brew Cafe")}
              target="_blank"
              rel="noreferrer"
              className="block transition-colors hover:text-caramel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel"
            >
              WhatsApp Us
            </a>
          </address>
        </div>

        <div>
          <h3 className="font-semibold text-warmwhite">Opening Hours</h3>
          <dl className="mt-4 space-y-3 text-sm">
            {openingHours.map((item) => (
              <div key={item.day} className="flex justify-between gap-4">
                <dt>{item.day}</dt>
                <dd className="text-latte">{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-latte/10 px-4 py-5 text-center text-sm text-latte/70">
        © 2024 Aroma Brew Cafe. All rights reserved. | Made with coffee in
        Puranpur
      </div>
    </footer>
  )
}
