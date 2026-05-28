# Aroma Brew Cafe

Production-ready Next.js 15 website for Aroma Brew Cafe, a premium coffee shop near Ashok Colony, Puranpur, Uttar Pradesh. The site includes a homepage, menu, about, gallery, reservation flow, contact page, SEO metadata, sitemap, robots file, LocalBusiness schema, dark mode, and responsive UI.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` from `.env.local.example`.

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in international format without `+`, for `wa.me` links. |
| `NEXT_PUBLIC_PHONE` | Public cafe phone number. |
| `NEXT_PUBLIC_PHONE_NUMBER` | Public cafe phone number used by schema and tel links. |
| `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL` | Google Maps iframe embed URL. |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Aroma Brew Cafe Instagram URL. |
| `NEXT_PUBLIC_SITE_URL` | Production site URL used by sitemap and robots. |

## Folder Structure

```text
aroma-brew-cafe/
├── app/                    # Next.js App Router pages, API, sitemap and robots
├── components/             # Layout, home sections, menu cards, forms and UI primitives
├── lib/                    # Static data, zod schemas and utility helpers
├── public/images/          # Logo and image placeholders
├── types/                  # Shared TypeScript interfaces
├── tailwind.config.ts      # Brand colors, fonts, shadows, radius and animations
├── next.config.ts          # Next image remote patterns and build config
└── README.md
```

## Deployment on Vercel

1. Push the project to a GitHub repository.
2. Connect the repository to Vercel.
3. Add all environment variables from `.env.local.example`.
4. Use a custom domain or `aromabrew.vercel.app`.
5. Keep the framework preset as Next.js.
6. Use the default build command: `next build`.
7. After deployment, submit `https://your-domain.com/sitemap.xml` to Google Search Console.

## SEO Checklist

1. Root metadata includes title template and local keyword targeting.
2. Every page has a focused title and description.
3. LocalBusiness schema is injected in the root layout.
4. `app/sitemap.ts` lists all six public pages.
5. `app/robots.ts` allows crawling and points to the sitemap.
6. Open Graph image metadata is configured.
7. Instagram profile is linked in schema and footer.
8. Address, phone and map links are crawlable.
9. Semantic headings and sections are used across pages.
10. Replace `public/images/og-image.jpg` with a real 1200x630 image before launch.

## Performance Checklist

1. All rendered images use `next/image`.
2. Hero images use `priority` only where appropriate.
3. Unsplash remote image host is configured in `next.config.ts`.
4. Fonts are loaded with `next/font/google` and `display: swap`.
5. Client components are limited to interactive UI.
6. CSS animations handle coffee steam without JavaScript.
7. Framer Motion scroll animations use `viewport={{ once: true }}`.
8. Production compression is enabled.
9. Responsive grids avoid layout shifts.
10. Form submissions include loading states.

## Updating Menu Items

Edit `lib/data.ts`. Menu items live in the `menuItems` array and use the `MenuItem` interface from `types/index.ts`. Update the name, category, price, rating, review count, description, image URL, and optional `isPopular` or `isNew` flags there.
