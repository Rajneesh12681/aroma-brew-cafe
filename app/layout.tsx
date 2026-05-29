import type { Metadata } from 'next'
import Script from 'next/script'
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { PageTransition, Providers } from '@/components/Providers'
import { siteConfig } from '@/lib/data'
import './globals.css'

const ogImageUrl =
  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&h=630&q=85'

export const metadata: Metadata = {
  metadataBase: new URL('https://aromabrew.cafe'),
  title: {
    default: 'Aroma Brew Cafe | Best Coffee Shop in Puranpur UP',
    template: '%s | Aroma Brew Cafe',
  },
  description:
    'Aroma Brew Cafe — Premium coffee shop near Ashok Colony, Puranpur, Uttar Pradesh. Enjoy freshly brewed coffee, cold drinks, shakes & snacks. Best café in Puranpur for students, couples and freelancers.',
  keywords: [
    'best cafe in puranpur',
    'coffee shop puranpur',
    'cafe near ashok colony puranpur',
    'puranpur coffee',
    'cafe puranpur UP',
    'aroma brew cafe',
    'restaurant puranpur',
    'coffee shop near me puranpur',
    'study cafe puranpur',
    'date spot puranpur',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aroma Brew Cafe',
    images: [{ url: ogImageUrl, width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Aroma Brew Cafe',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Ashok Colony',
    addressLocality: 'Puranpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '262122',
    addressCountry: 'IN',
  },
  telephone: siteConfig.phone,
  url: 'https://aromabrew.cafe',
  servesCuisine: 'Coffee, Café, Continental',
  priceRange: '₹79 - ₹159',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '07:00',
      closes: '22:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '23:00',
    },
  ],
  sameAs: ['https://www.instagram.com/aroma_brew_cafe/'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body className="font-body antialiased">
        <Providers>
          <a href="#main-content" className="skip-to-content">
            Skip to content
          </a>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <FloatingWhatsApp />
        </Providers>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  )
}
