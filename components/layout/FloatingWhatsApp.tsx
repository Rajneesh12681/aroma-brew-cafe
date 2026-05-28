import { getWhatsAppUrl } from '@/lib/utils'

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl("Hi! I'd like to know more about Aroma Brew Cafe")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-white shadow-warm transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
    >
      <span className="absolute inset-0 rounded-full bg-green-400/50 animate-pulseRing" />
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="relative h-7 w-7 fill-current"
      >
        <path d="M16.01 3.2A12.68 12.68 0 0 0 5.14 22.42L3.8 28.8l6.52-1.29A12.69 12.69 0 1 0 16.01 3.2Zm0 23.1c-1.95 0-3.86-.54-5.52-1.57l-.39-.24-3.87.76.8-3.76-.25-.4a10.34 10.34 0 1 1 9.23 5.21Zm5.83-7.73c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.53-.72-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-full bg-matte px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-card transition-opacity group-hover:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  )
}
