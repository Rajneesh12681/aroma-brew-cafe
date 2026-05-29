'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { timeSlots } from '@/lib/data'
import { reservationSchema, type ReservationSchemaInput } from '@/lib/schemas'
import { getWhatsAppUrl } from '@/lib/utils'

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message ? (
        <motion.p
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mt-1 overflow-hidden text-sm text-red-600 dark:text-red-300"
        >
          {message}
        </motion.p>
      ) : null}
    </AnimatePresence>
  )
}

const inputClass =
  'mt-2 w-full rounded-card border border-espresso/15 bg-white px-4 py-3 text-espresso outline-none transition focus:border-caramel focus:ring-2 focus:ring-caramel/30 dark:border-latte/15 dark:bg-cardDark dark:text-latte'

export function ReservationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationSchemaInput>({
    resolver: zodResolver(reservationSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: 2,
      specialRequest: '',
    },
  })

  const onSubmit = async (data: ReservationSchemaInput) => {
    setIsSubmitting(true)
    try {
      const message = [
        'Hi! I want to reserve a table at Aroma Brew Cafe.',
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        data.email ? `Email: ${data.email}` : null,
        `Date: ${data.date}`,
        `Time: ${data.time}`,
        `Guests: ${data.guests}`,
        data.specialRequest ? `Special request: ${data.specialRequest}` : null,
      ]
        .filter(Boolean)
        .join('\n')

      window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
      toast.success('Reservation details opened in WhatsApp.')
      reset()
    } catch {
      toast.error('Unable to open WhatsApp. Please call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold text-espresso dark:text-latte">
            Name
          </label>
          <input id="name" type="text" className={inputClass} {...register('name')} />
          <FieldError message={errors.name?.message} />
        </div>

        <div>
          <label htmlFor="phone" className="font-semibold text-espresso dark:text-latte">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            className={inputClass}
            {...register('phone')}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="font-semibold text-espresso dark:text-latte">
          Email
        </label>
        <input id="email" type="email" className={inputClass} {...register('email')} />
        <FieldError message={errors.email?.message} />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <label htmlFor="date" className="font-semibold text-espresso dark:text-latte">
            Date
          </label>
          <input id="date" type="date" className={inputClass} {...register('date')} />
          <FieldError message={errors.date?.message} />
        </div>

        <div>
          <label htmlFor="time" className="font-semibold text-espresso dark:text-latte">
            Time
          </label>
          <select id="time" className={inputClass} {...register('time')}>
            <option value="">Select time</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <FieldError message={errors.time?.message} />
        </div>

        <div>
          <label htmlFor="guests" className="font-semibold text-espresso dark:text-latte">
            Guests
          </label>
          <input
            id="guests"
            type="number"
            min={1}
            max={20}
            className={inputClass}
            {...register('guests')}
          />
          <FieldError message={errors.guests?.message} />
        </div>
      </div>

      <div>
        <label
          htmlFor="specialRequest"
          className="font-semibold text-espresso dark:text-latte"
        >
          Special Request
        </label>
        <textarea
          id="specialRequest"
          rows={4}
          className={inputClass}
          {...register('specialRequest')}
        />
        <FieldError message={errors.specialRequest?.message} />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <LoadingSpinner />
            Reserving
          </>
        ) : (
          'Reserve Table'
        )}
      </Button>
    </form>
  )
}
