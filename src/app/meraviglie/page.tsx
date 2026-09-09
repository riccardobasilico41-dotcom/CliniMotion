import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { MeravigliaCard } from '@/components/MeravigliaCard'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Le sette meraviglie del mondo',
  description: `Guida pratica completa alle Sette Meraviglie del Mondo Moderno su ${siteConfig.brandName}: prenotazione, prezzi, come arrivare, truffe da evitare e cosa vedere in ognuna.`,
  alternates: { canonical: '/meraviglie' },
}

export default function MeraviglieIndexPage() {
  const meraviglie = getAllMeraviglie()
  const visitate = meraviglie.filter((m) => m.visitataPersonalmente).length

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={`${visitate} su ${meraviglie.length} viste di persona`}
          title="Le sette meraviglie del mondo"
          description="Una guida pratica, monumento per monumento: come prenotare, come arrivare, prezzi e combo, tour organizzato o in autonomia, le truffe più comuni da evitare e le sezioni da non perdere — e perché."
        />
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {meraviglie.map((meraviglia) => (
            <RevealItem key={meraviglia.slug}>
              <MeravigliaCard meraviglia={meraviglia} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
