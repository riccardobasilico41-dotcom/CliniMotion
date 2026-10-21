import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { getAllViaggi } from '@/lib/viaggi'

const navLinks = [
  { href: '/viaggi', label: 'Viaggi' },
  { href: '/destinazioni', label: 'Destinazioni' },
  { href: '/meraviglie', label: 'Meraviglie del mondo' },
]

/* Stile A "Ghat" · nav: testata a una riga. Marchio grotesk pesante a
 * sinistra, conteggio degli itinerari accanto (dato reale, non decorazione),
 * voci a destra, filo nero sotto. Non sticky: StickyTableOfContents porta
 * l'orientamento nelle pagine lunghe. Vedi design.md. */
export function Header() {
  const itinerari = getAllViaggi().length

  return (
    <header className="border-b border-ink/15 bg-cream">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 py-4 sm:px-8 lg:px-12">
        <div className="flex items-baseline gap-4">
          <Link href="/" className="font-display text-2xl font-extrabold text-ink sm:text-[1.7rem]">
            {siteConfig.brandName}
          </Link>
          <span className="hidden text-sm text-stone md:inline">{itinerari} itinerari raccontati</span>
        </div>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-[0.95rem] font-medium text-ink decoration-rosso decoration-2 underline-offset-[6px] transition-colors duration-150 hover:text-rosso hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
