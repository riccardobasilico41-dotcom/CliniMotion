import Link from 'next/link'
import { Container } from './ui/Container'
import { siteConfig } from '@/lib/site-config'

/* Hallmark · footer: Ft1 Mast-headed — wordmark + tagline anchor a single
 * quiet band, a couple of real links beside, colophon below. Replaces the
 * previous Ft3 (3 columns of links + copyright, the other most-recognised
 * AI footer fingerprint) — which also had a real bug: its "Destinazioni /
 * Esperienze / Continenti" links were all hardcoded to /destinazioni/messico
 * regardless of which continent was listed. Ft1 doesn't pretend to a
 * sitemap the site doesn't have yet, so the bug has nowhere to hide. See
 * design.md. */
export function Footer() {
  return (
    <footer className="mt-24 border-t border-alpine/10 bg-alpine text-cream/90">
      <Container className="flex flex-col items-center gap-3 py-16 text-center">
        <p className="font-display text-2xl text-cream">{siteConfig.brandName}</p>
        <p className="max-w-md text-sm leading-relaxed text-cream/70">
          {siteConfig.tagline} — con tappe giorno per giorno, consigli pratici e ricordi da rileggere.
        </p>
        <p className="mt-2 text-sm text-cream/70">
          <Link href="/viaggi" className="underline decoration-cream/30 underline-offset-4 hover:text-cream hover:decoration-cream">
            Tutti i viaggi
          </Link>
          <span className="mx-3 text-cream/30">·</span>
          <Link href="/destinazioni" className="underline decoration-cream/30 underline-offset-4 hover:text-cream hover:decoration-cream">
            Tutte le destinazioni
          </Link>
        </p>
      </Container>

      <Container className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        <p>© {new Date().getFullYear()} {siteConfig.shortName}. Appunti di viaggio personali.</p>
      </Container>
    </footer>
  )
}
