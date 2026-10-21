import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { TripFilters } from '@/components/TripFilters'
import { getAllViaggi } from '@/lib/viaggi'
import { siteConfig } from '@/lib/site-config'
import { pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { raccoltaJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Tutti i viaggi',
  description: `Il catalogo completo degli itinerari di ${siteConfig.brandName}: destinazioni, periodi e durate a colpo d'occhio.`,
  path: '/viaggi',
})

export default function ViaggiIndexPage() {
  const viaggi = getAllViaggi()

  return (
    <>
      <JsonLd
        data={raccoltaJsonLd({
          nome: 'Tutti i viaggi',
          descrizione: `Il catalogo completo degli itinerari di ${siteConfig.brandName}.`,
          percorso: '/viaggi',
          elementi: viaggi.map((v) => ({ nome: v.titolo, percorso: `/viaggi/${v.slug}` })),
        })}
      />
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Viaggi' }]}
        eyebrow="L'archivio completo"
        title="Tutti i viaggi"
        lead={
          <p>
            {viaggi.length} itinerari completi, giorno per giorno, divisi per macro-regione. Oppure esplora una singola
            destinazione o esperienza dalla pagina Paese.
          </p>
        }
      />
      <section className="py-14 sm:py-20">
        <Container>
          <TripFilters viaggi={viaggi} />
        </Container>
      </section>
    </>
  )
}
