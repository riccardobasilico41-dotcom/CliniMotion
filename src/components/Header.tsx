'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import { siteConfig } from '@/lib/site-config'

const navLinks = [
  { href: '/la-casa', label: 'La casa' },
  { href: '/pinzolo-campiglio-estate', label: 'Estate' },
  { href: '/pinzolo-campiglio-inverno', label: 'Inverno' },
  { href: '/dove-siamo', label: 'Dove siamo' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-alpine/10 bg-cream/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg font-medium tracking-tight text-alpine">
            {siteConfig.brandName}
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-rosso">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone transition-colors hover:text-alpine"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/prenota" variant="primary" className="!px-5 !py-2.5 text-xs">
            Prenota il soggiorno
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
          aria-expanded={open}
          className="text-alpine md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-alpine/10 bg-cream md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-stone hover:bg-alpine/5 hover:text-alpine"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/prenota"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-alpine px-3 py-3 text-center text-base font-medium text-cream"
            >
              Prenota il soggiorno
            </Link>
          </Container>
        </div>
      )}
    </header>
  )
}
