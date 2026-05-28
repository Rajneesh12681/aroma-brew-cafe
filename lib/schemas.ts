import { z } from 'zod'

const todayAtMidnight = () => {
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return now
}

export const reservationSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be under 50 characters'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z
    .string()
    .trim()
    .refine((value) => value === '' || z.string().email().safeParse(value).success, {
      message: 'Enter a valid email address',
    }),
  date: z.string().refine(
    (value) => {
      const selectedDate = new Date(value)
      selectedDate.setHours(0, 0, 0, 0)
      return selectedDate >= todayAtMidnight()
    },
    { message: 'Reservation date must be today or later' },
  ),
  time: z.string().min(1, 'Please select a time'),
  guests: z.coerce
    .number()
    .min(1, 'At least 1 guest is required')
    .max(20, 'For more than 20 guests, please call us'),
  specialRequest: z
    .string()
    .max(300, 'Special request must be under 300 characters')
    .optional()
    .or(z.literal('')),
})

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be under 50 characters'),
  email: z.string().email('Enter a valid email address'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(80, 'Subject must be under 80 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be under 500 characters'),
})

export type ReservationSchemaInput = z.infer<typeof reservationSchema>
export type ContactSchemaInput = z.infer<typeof contactSchema>
