import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { getAllPaesi } from '@/lib/geo'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Destinazioni',
  description: `I Paesi esplorati in profondità su ${siteConfig.brandName}: destinazioni ed esperienze, non solo l'itinerario completo.`,
  alternates: { canonical: '/destinazioni' },
}

export default function DestinazioniIndexPage() {
  const paesi = getAllPaesi()

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Destinazioni"
          description="Scegli un Paese per esplorarlo destinazione per destinazione ed esperienza per esperienza, non solo come itinerario unico."
        />
        <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {paesi.map((paese) => (
            <RevealItem key={paese.slug}>
              <Link
                href={`/destinazioni/${paese.slug}`}
                className="group flex flex-col gap-3 rounded-2xl border border-alpine/10 bg-white p-6 transition-[box-shadow,transform] duration-150 ease-out hover:shadow-lg active:scale-[0.99] motion-reduce:active:scale-100"
              >
                <h2 className="font-display text-xl font-medium text-alpine">{paese.nome}</h2>
                <p className="text-sm leading-relaxed text-stone">{paese.descrizione}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-rosso">
                  Esplora il Paese
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
