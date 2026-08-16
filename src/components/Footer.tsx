import Link from 'next/link'
import { Container } from './ui/Container'
import { siteConfig } from '@/lib/site-config'

const navLinks = [
  { href: '/la-casa', label: 'La casa e la sua storia' },
  { href: '/pinzolo-campiglio-estate', label: 'Estate a Pinzolo e Campiglio' },
  { href: '/pinzolo-campiglio-inverno', label: 'Inverno a Pinzolo e Campiglio' },
  { href: '/dove-siamo', label: 'Dove siamo e come arrivare' },
  { href: '/prenota', label: 'Prenota' },
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-alpine/10 bg-alpine text-cream/90">
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-cream">Mansarda tra le Dolomiti di Brenta</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            Bocenago, Val Rendena — Trentino. Un appartamento in mansarda con vista sulle Dolomiti di
            Brenta e sull&apos;Adamello, a pochi minuti da Pinzolo e Madonna di Campiglio.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">Il sito</p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/80 hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">Dati struttura</p>
          <ul className="mt-3 space-y-1.5 text-sm text-cream/80">
            <li>Host: {siteConfig.host.name}</li>
            <li>Numero di licenza: {siteConfig.legal.licenseNumber}</li>
            <li>CIN: {siteConfig.legal.cin}</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.shortName}. Sito non ufficiale, gestito in autonomia dall&apos;host.</p>
        <p>Prenotazioni gestite tramite Holidu.</p>
      </Container>
    </footer>
  )
}
