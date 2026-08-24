import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TripFilters } from '@/components/TripFilters'
import { getAllViaggi } from '@/lib/viaggi'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Tutti i viaggi',
  description: `Il catalogo completo degli itinerari di ${siteConfig.brandName}: destinazioni, periodi e durate a colpo d'occhio.`,
  alternates: { canonical: '/viaggi' },
}

export default function ViaggiIndexPage() {
  const viaggi = getAllViaggi()

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Catalogo"
          title="Tutti i viaggi"
          description={`${viaggi.length} itinerari completi, giorno per giorno — oppure esplora una singola destinazione o esperienza dalla pagina Paese.`}
        />

        <div className="mt-10">
          <TripFilters viaggi={viaggi} />
        </div>
      </Container>
    </section>
  )
}
