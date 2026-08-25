import Link from 'next/link'
import { Container } from './ui/Container'
import { siteConfig } from '@/lib/site-config'
import { getAllViaggi } from '@/lib/viaggi'

const navLinks = [
  { href: '/viaggi', label: 'Viaggi' },
  { href: '/destinazioni', label: 'Destinazioni' },
]

/* Hallmark · nav: N6 Newspaper masthead — full-width centred wordmark, thin
 * issue line above it in small caps, double rule below. Replaces the
 * previous N1a (wordmark + inline links), the most-recognised AI nav
 * fingerprint. Not sticky by design — a masthead is a statement, not a
 * utility bar; StickyTableOfContents carries in-page wayfinding on long
 * content pages. See design.md. */
export function Header() {
  const itinerari = getAllViaggi().length

  return (
    <header className="border-b-4 border-double border-alpine/20 bg-cream">
      <Container className="flex flex-col items-center gap-2 py-7 text-center sm:py-9">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-stone">
          Diario di viaggio · {itinerari} itinerari raccontati
        </p>
        <Link href="/" className="font-display text-3xl font-medium tracking-tight text-alpine sm:text-4xl">
          {siteConfig.brandName}
        </Link>
        <nav aria-label="Primary" className="mt-1">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-stone transition-colors duration-150 hover:text-rosso"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
