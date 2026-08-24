'use client'

import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Container } from './ui/Container'
import { siteConfig } from '@/lib/site-config'

const navLinks = [
  { href: '/viaggi', label: 'Viaggi' },
  { href: '/destinazioni', label: 'Destinazioni' },
  { href: '/destinazioni', label: 'Esperienze' },
  { href: '/destinazioni', label: 'Consigli pratici' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-50 border-b border-alpine/10 bg-cream/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg font-medium tracking-tight text-alpine">
            {siteConfig.brandName}
          </span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.14em] text-rosso">
            Diario di viaggio
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone transition-colors hover:text-alpine"
            >
              {link.label}
            </Link>
          ))}
        </nav>

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

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-alpine/10 bg-cream md:hidden"
            initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-stone hover:bg-alpine/5 hover:text-alpine"
                >
                  {link.label}
                </Link>
              ))}
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
