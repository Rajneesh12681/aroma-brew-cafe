'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Button } from '@/components/ui/Button'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { contactSchema, type ContactSchemaInput } from '@/lib/schemas'

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

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchemaInput>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactSchemaInput) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 650))
    console.log('Contact form submission', data)
    toast.success('Message sent! We will get back to you soon.')
    reset()
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="font-semibold text-espresso dark:text-latte">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            className={inputClass}
            {...register('name')}
          />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <label htmlFor="contact-email" className="font-semibold text-espresso dark:text-latte">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            className={inputClass}
            {...register('email')}
          />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="font-semibold text-espresso dark:text-latte">
          Subject
        </label>
        <input id="subject" type="text" className={inputClass} {...register('subject')} />
        <FieldError message={errors.subject?.message} />
      </div>

      <div>
        <label htmlFor="message" className="font-semibold text-espresso dark:text-latte">
          Message
        </label>
        <textarea id="message" rows={5} className={inputClass} {...register('message')} />
        <FieldError message={errors.message?.message} />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <LoadingSpinner />
            Sending
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
