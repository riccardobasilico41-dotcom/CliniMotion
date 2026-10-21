import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { MeravigliaCard } from '@/components/MeravigliaCard'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { siteConfig } from '@/lib/site-config'
import { pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { raccoltaJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Le sette meraviglie del mondo',
  description: `Guida pratica completa alle Sette Meraviglie del Mondo Moderno su ${siteConfig.brandName}: prenotazione, prezzi, come arrivare, truffe da evitare e cosa vedere in ognuna.`,
  path: '/meraviglie',
})

export default function MeraviglieIndexPage() {
  const meraviglie = getAllMeraviglie()
  const visitate = meraviglie.filter((m) => m.visitataPersonalmente).length

  return (
    <>
      <JsonLd
        data={raccoltaJsonLd({
          nome: 'Le sette meraviglie del mondo',
          descrizione: 'Guida pratica completa alle Sette Meraviglie del Mondo Moderno.',
          percorso: '/meraviglie',
          elementi: meraviglie.map((m) => ({ nome: m.nome, percorso: `/meraviglie/${m.slug}` })),
        })}
      />
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Meraviglie del mondo' }]}
        eyebrow={`${visitate} su ${meraviglie.length} viste di persona`}
        title="Le sette meraviglie del mondo"
        lead={
          <p>
            Una guida pratica, monumento per monumento: come prenotare, come arrivare, prezzi e combo, tour organizzato o
            in autonomia, le truffe più comuni da evitare e le sezioni da non perdere.
          </p>
        }
      />
      <section className="py-14 sm:py-20">
        <Container>
          <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {meraviglie.map((meraviglia) => (
              <RevealItem key={meraviglia.slug}>
                <MeravigliaCard meraviglia={meraviglia} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  )
}
