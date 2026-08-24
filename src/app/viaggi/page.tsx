import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TripCard } from '@/components/TripCard'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { getAllViaggi, getContinente } from '@/lib/viaggi'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Tutti i viaggi',
  description: `Il catalogo completo degli itinerari di ${siteConfig.brandName}: destinazioni, periodi e durate a colpo d'occhio.`,
  alternates: { canonical: '/viaggi' },
}

export default function ViaggiIndexPage() {
  const viaggi = getAllViaggi()
  const perContinente = new Map<string, typeof viaggi>()
  for (const v of viaggi) {
    const c = getContinente(v.categorie)
    perContinente.set(c, [...(perContinente.get(c) ?? []), v])
  }

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Catalogo"
          title="Tutti i viaggi"
          description={`${viaggi.length} itinerari raccontati, organizzati per continente.`}
        />

        <div className="mt-14 space-y-16">
          {Array.from(perContinente.entries()).map(([continente, elenco]) => (
            <div key={continente}>
              <h2 className="font-display text-2xl text-alpine">{continente}</h2>
              <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
                {elenco.map((v) => (
                  <RevealItem key={v.slug}>
                    <TripCard viaggio={v} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
