import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { TripFilters } from '@/components/TripFilters'
import { getAllViaggi } from '@/lib/viaggi'
import { siteConfig } from '@/lib/site-config'
import { JsonLd } from '@/components/JsonLd'
import { raccoltaJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Tutti i viaggi',
  description: `Il catalogo completo degli itinerari di ${siteConfig.brandName}: destinazioni, periodi e durate a colpo d'occhio.`,
  alternates: { canonical: '/viaggi' },
}

export default function ViaggiIndexPage() {
  const viaggi = getAllViaggi()

  return (
    <section className="py-20 sm:py-28">
      <JsonLd
        data={raccoltaJsonLd({
          nome: 'Tutti i viaggi',
          descrizione: `Il catalogo completo degli itinerari di ${siteConfig.brandName}.`,
          percorso: '/viaggi',
          elementi: viaggi.map((v) => ({ nome: v.titolo, percorso: `/viaggi/${v.slug}` })),
        })}
      />
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone/50">L&apos;archivio completo</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight text-balance text-alpine sm:text-5xl">
          Tutti i viaggi
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone">
          {viaggi.length} itinerari completi, giorno per giorno, divisi per macro-regione — oppure esplora una
          singola destinazione o esperienza dalla pagina Paese.
        </p>
        <div className="mt-8 max-w-2xl border-t border-alpine/10" />

        <div className="mt-10">
          <TripFilters viaggi={viaggi} />
        </div>
      </Container>
    </section>
  )
}
