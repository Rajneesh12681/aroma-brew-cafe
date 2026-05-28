export interface MenuItem {
  id: string
  name: string
  category: 'coffee' | 'cold-drinks' | 'food' | 'shakes'
  price: number
  rating: number
  reviewCount: number
  description: string
  image: string
  isPopular?: boolean
  isNew?: boolean
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  review: string
  date: string
  tag: 'student' | 'couple' | 'freelancer' | 'foodie'
}

export interface GalleryItem {
  id: string
  src: string
  alt: string
  category: 'ambiance' | 'coffee' | 'food' | 'events'
  span?: 'tall' | 'wide' | 'normal'
}

export interface ReservationFormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  guests: number
  specialRequest?: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
