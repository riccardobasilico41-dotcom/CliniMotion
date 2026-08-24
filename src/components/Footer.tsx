import Link from 'next/link'
import { Container } from './ui/Container'
import { getAllViaggi, getContinente } from '@/lib/viaggi'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  const continenti = Array.from(new Set(getAllViaggi().map((v) => getContinente(v.categorie))))

  return (
    <footer className="mt-24 border-t border-alpine/10 bg-alpine text-cream/90">
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-cream">{siteConfig.brandName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {siteConfig.tagline}. Itinerari giorno per giorno, consigli pratici e ricordi di ogni
            viaggio.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">Il sito</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/viaggi" className="text-sm text-cream/80 hover:text-cream">
                Tutti i viaggi
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">Destinazioni</p>
          <ul className="mt-3 space-y-1.5 text-sm text-cream/80">
            {continenti.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.shortName}. Appunti di viaggio personali.</p>
      </Container>
    </footer>
  )
}
