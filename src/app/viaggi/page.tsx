import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
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
        <SectionHeading
          title="Tutti i viaggi"
          description={`${viaggi.length} itinerari completi, giorno per giorno, divisi per macro-regione — oppure esplora una singola destinazione o esperienza dalla pagina Paese.`}
        />

        <div className="mt-10">
          <TripFilters viaggi={viaggi} />
        </div>
      </Container>
    </section>
  )
}
