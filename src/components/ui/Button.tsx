import Link from 'next/link'
import type { ReactNode } from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variants = {
  primary: `${base} bg-alpine text-cream hover:bg-alpine-dark focus-visible:ring-alpine`,
  secondary: `${base} border border-alpine/30 text-alpine hover:bg-alpine/5 focus-visible:ring-alpine`,
  light: `${base} bg-cream text-alpine hover:bg-white focus-visible:ring-cream`,
}

export function Button({
  href,
  variant = 'primary',
  children,
  className = '',
  external = false,
}: {
  href: string
  variant?: keyof typeof variants
  children: ReactNode
  className?: string
  external?: boolean
}) {
  const classes = `${variants[variant]} ${className}`
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
