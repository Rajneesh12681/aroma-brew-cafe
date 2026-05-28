import Link from 'next/link'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'dark' | 'green' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-caramel text-espresso shadow-card hover:shadow-warm hover:scale-105 active:scale-100',
  secondary:
    'border border-white/80 bg-white/10 text-white backdrop-blur hover:bg-white/20 hover:scale-105 active:scale-100',
  outline:
    'border border-espresso/30 bg-transparent text-espresso hover:bg-latte dark:border-latte/30 dark:text-latte dark:hover:bg-espresso/50 hover:scale-105 active:scale-100',
  dark:
    'bg-espresso text-white shadow-card hover:bg-espresso/90 hover:scale-105 active:scale-100',
  green:
    'bg-green-600 text-white shadow-card hover:bg-green-700 hover:scale-105 active:scale-100',
  ghost:
    'bg-transparent text-espresso hover:bg-latte dark:text-latte dark:hover:bg-white/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10 p-0',
}

type CommonProps = {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
    external?: never
  }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    external?: boolean
  }

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...rest
  } = props

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-caramel focus-visible:ring-offset-2 focus-visible:ring-offset-warmwhite disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-offset-matte',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if ('href' in rest && rest.href) {
    const { href, external, ...anchorProps } = rest
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noreferrer"
          {...anchorProps}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
