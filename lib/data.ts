import type { GalleryItem, MenuItem, Testimonial } from '@/types'

export const siteConfig = {
  name: 'Aroma Brew Cafe',
  location: 'Near Ashok Colony, Puranpur, Uttar Pradesh 262122',
  phone:
    process.env.NEXT_PUBLIC_PHONE_NUMBER ??
    process.env.NEXT_PUBLIC_PHONE ??
    '+91-XXXXXXXXXX',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '91XXXXXXXXXX',
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    'https://www.instagram.com/aroma_brew_cafe/',
  mapUrl:
    'https://maps.google.com/?q=Aroma+Brew+Cafe+Puranpur+UP',
  mapEmbedUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL ??
    'https://maps.google.com/maps?q=Near+Ashok+Colony+Puranpur+262122&output=embed',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aromabrew.cafe',
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reservation', label: 'Reservation' },
  { href: '/contact', label: 'Contact' },
] as const

export const menuItems: MenuItem[] = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'coffee',
    price: 99,
    rating: 4.8,
    reviewCount: 234,
    description: 'Rich espresso with velvety steamed milk foam',
    image:
      'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'espresso',
    name: 'Espresso',
    category: 'coffee',
    price: 79,
    rating: 4.7,
    reviewCount: 189,
    description: 'Double shot, intense and bold',
    image:
      'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cafe-latte',
    name: 'Cafe Latte',
    category: 'coffee',
    price: 109,
    rating: 4.9,
    reviewCount: 312,
    description: 'Smooth espresso with silky microfoam',
    image:
      'https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
  },
  {
    id: 'mocha',
    name: 'Mocha',
    category: 'coffee',
    price: 129,
    rating: 4.6,
    reviewCount: 178,
    description: 'Espresso + chocolate + steamed milk',
    image:
      'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hazelnut-frappe',
    name: 'Hazelnut Frappe',
    category: 'coffee',
    price: 149,
    rating: 4.8,
    reviewCount: 267,
    description: 'Blended iced coffee with hazelnut',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffee',
    category: 'cold-drinks',
    price: 119,
    rating: 4.7,
    reviewCount: 198,
    description: 'Chilled, creamy and refreshing',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'brownie-shake',
    name: 'Brownie Shake',
    category: 'shakes',
    price: 159,
    rating: 4.9,
    reviewCount: 143,
    description: 'Thick milkshake with brownie chunks',
    image:
      'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=80',
    isNew: true,
  },
  {
    id: 'garlic-sandwich',
    name: 'Garlic Sandwich',
    category: 'food',
    price: 89,
    rating: 4.5,
    reviewCount: 156,
    description: 'Crispy garlic butter grilled sandwich',
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pasta',
    name: 'Pasta',
    category: 'food',
    price: 149,
    rating: 4.6,
    reviewCount: 134,
    description: 'Creamy white sauce pasta with herbs',
    image:
      'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'crispy-fries',
    name: 'Crispy Fries',
    category: 'food',
    price: 79,
    rating: 4.4,
    reviewCount: 221,
    description: 'Golden thin-cut fries, perfectly seasoned',
    image:
      'https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=900&q=80',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'aarav-sharma',
    name: 'Aarav Sharma',
    avatar: 'AS',
    rating: 5,
    review:
      'Yaar Best cafe in Puranpur hai yeh! Ek baar aao toh baar baar aana padta hai. Cold coffee aur Hazelnut Frappe toh must try hai. WiFi bhi super fast hai for study sessions. Love this place!',
    date: '2 weeks ago',
    tag: 'student',
  },
  {
    id: 'priya-rohan',
    name: 'Priya & Rohan',
    avatar: 'PR',
    rating: 5,
    review:
      'Perfect date spot! Ambiance is so cozy and aesthetic, felt like we were in a Starbucks. Garlic sandwich was amazing. Definitely coming back for our anniversary too!',
    date: '3 weeks ago',
    tag: 'couple',
  },
  {
    id: 'karan-mishra',
    name: 'Karan Mishra',
    avatar: 'KM',
    rating: 4,
    review:
      "As a freelancer who works remotely, this is my go-to spot. Great WiFi, peaceful vibe in the mornings, and the Cafe Latte here is honestly better than anything I've had in big cities. Value for money.",
    date: '1 month ago',
    tag: 'freelancer',
  },
  {
    id: 'shreya-gupta',
    name: 'Shreya Gupta',
    avatar: 'SG',
    rating: 5,
    review:
      'The Brownie Shake is absolutely divine! And the interiors are so Instagram-worthy, got like 200 likes on my reel from here. Staff is very friendly too. Highly recommended for all my foodie friends in Puranpur!',
    date: '1 month ago',
    tag: 'foodie',
  },
  {
    id: 'divyansh-agarwal',
    name: 'Divyansh Agarwal',
    avatar: 'DA',
    rating: 5,
    review:
      'Group of 8 aaye the, sabka experience amazing raha! Mocha aur Pasta sabne order ki, superb quality at such affordable prices. Iss price mein aisa cafe poore UP mein nahi milega!',
    date: '2 months ago',
    tag: 'student',
  },
  {
    id: 'anjali-singh',
    name: 'Anjali Singh',
    avatar: 'AS',
    rating: 4,
    review:
      'Came here for my birthday celebration - staff decorated our table without even being asked! Such a warm and welcoming place. The Espresso and Cappuccino are perfectly brewed. This cafe has a real soul to it.',
    date: '2 months ago',
    tag: 'couple',
  },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'cozy-interior',
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80',
    alt: 'Warm cafe interior seating with ambient lights',
    category: 'ambiance',
    span: 'tall',
  },
  {
    id: 'latte-art',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80',
    alt: 'Fresh latte art in a ceramic cup',
    category: 'coffee',
    span: 'normal',
  },
  {
    id: 'friends-table',
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=80',
    alt: 'Friends enjoying coffee at a cafe table',
    category: 'events',
    span: 'wide',
  },
  {
    id: 'coffee-counter',
    src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80',
    alt: 'Coffee counter with cups and brewing tools',
    category: 'ambiance',
    span: 'normal',
  },
  {
    id: 'sandwich-plate',
    src: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=1000&q=80',
    alt: 'Grilled sandwich served on a plate',
    category: 'food',
    span: 'normal',
  },
  {
    id: 'iced-coffee',
    src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1000&q=80',
    alt: 'Iced coffee served in a glass',
    category: 'coffee',
    span: 'tall',
  },
  {
    id: 'study-corner',
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1000&q=80',
    alt: 'Comfortable study cafe corner with tables',
    category: 'ambiance',
    span: 'wide',
  },
  {
    id: 'pasta-bowl',
    src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1000&q=80',
    alt: 'Creamy pasta bowl with herbs',
    category: 'food',
    span: 'normal',
  },
  {
    id: 'birthday-table',
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80',
    alt: 'Celebration table with lights and desserts',
    category: 'events',
    span: 'normal',
  },
  {
    id: 'espresso-shot',
    src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=1000&q=80',
    alt: 'Fresh espresso being poured',
    category: 'coffee',
    span: 'normal',
  },
  {
    id: 'fries-snack',
    src: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=80',
    alt: 'Crispy fries snack in a cafe',
    category: 'food',
    span: 'tall',
  },
  {
    id: 'evening-cafe',
    src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1000&q=80',
    alt: 'Evening cafe ambiance with warm lights',
    category: 'ambiance',
    span: 'wide',
  },
]

export const openingHours = [
  { day: 'Mon-Thu', time: '7:00 AM - 10:00 PM' },
  { day: 'Fri-Sun', time: '7:00 AM - 11:00 PM' },
] as const

export const timeSlots = [
  '7:00 AM',
  '7:30 AM',
  '8:00 AM',
  '8:30 AM',
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
  '9:00 PM',
  '9:30 PM',
  '10:00 PM',
] as const
