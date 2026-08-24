import Link from 'next/link'
import { Container } from './ui/Container'
import { getAllViaggi, getViaggioBySlug, getContinente } from '@/lib/viaggi'
import { getAllPaesi } from '@/lib/geo'
import { siteConfig } from '@/lib/site-config'

export function Footer() {
  const continenti = Array.from(new Set(getAllViaggi().map((v) => getContinente(v.categorie))))
  // Solo i continenti con un Paese dotato di pagina dedicata diventano link,
  // gli altri restano testo semplice finché non hanno una pagina reale.
  const continentiConPagina = new Set(
    getAllPaesi()
      .map((p) => getViaggioBySlug(p.tripPrincipaleSlug))
      .filter((v): v is NonNullable<typeof v> => Boolean(v))
      .map((v) => getContinente(v.categorie))
  )

  return (
    <footer className="mt-24 border-t border-alpine/10 bg-alpine text-cream/90">
      <Container className="grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-cream">{siteConfig.brandName}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {siteConfig.tagline} — con tappe giorno per giorno, consigli pratici e ricordi da
            rileggere.
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
            <li>
              <Link href="/destinazioni/messico#destinazioni" className="text-sm text-cream/80 hover:text-cream">
                Destinazioni
              </Link>
            </li>
            <li>
              <Link href="/destinazioni/messico#esperienze" className="text-sm text-cream/80 hover:text-cream">
                Esperienze
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-cream/50">Continenti</p>
          <ul className="mt-3 space-y-1.5 text-sm text-cream/80">
            {continenti.map((c) =>
              continentiConPagina.has(c) ? (
                <li key={c}>
                  <Link href="/destinazioni/messico" className="hover:text-cream">
                    {c}
                  </Link>
                </li>
              ) : (
                <li key={c}>{c}</li>
              )
            )}
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-cream/10 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.shortName}. Appunti di viaggio personali.</p>
      </Container>
    </footer>
  )
}
