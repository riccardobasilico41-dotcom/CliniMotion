import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { getAllPaesi } from '@/lib/geo'
import { raggruppaPerContinente } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Destinazioni',
  description: `I Paesi esplorati in profondità su ${siteConfig.brandName}, divisi per macro-regione: destinazioni ed esperienze, non solo l'itinerario completo.`,
  alternates: { canonical: '/destinazioni' },
}

export default function DestinazioniIndexPage() {
  const paesi = getAllPaesi()
  const gruppi = raggruppaPerContinente(paesi, (p) => p.continente)

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Destinazioni"
          description={`${paesi.length} Paesi divisi per macro-regione: scegline uno per esplorarlo destinazione per destinazione ed esperienza per esperienza, non solo come itinerario unico.`}
        />

        <div className="mt-14 space-y-16">
          {gruppi.map(({ continente, items }) => (
            <div key={continente}>
              <div className="flex items-baseline gap-4 border-b border-alpine/15 pb-3">
                <h2 className="font-display text-2xl font-medium text-alpine sm:text-3xl">{continente}</h2>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/60">
                  {items.length} {items.length === 1 ? 'Paese' : 'Paesi'}
                </span>
              </div>

              <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
                {items.map((paese) => (
                  <RevealItem key={paese.slug}>
                    <Link
                      href={`/destinazioni/${paese.slug}`}
                      className="group flex h-full flex-col gap-3 rounded-2xl border border-alpine/10 bg-white p-6 transition-[box-shadow,transform] duration-150 ease-out hover:shadow-lg active:scale-[0.99] motion-reduce:active:scale-100"
                    >
                      <h3 className="font-display text-xl font-medium text-alpine">{paese.nome}</h3>
                      <p className="text-sm leading-relaxed text-stone">{paese.descrizione}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-rosso">
                        Esplora il Paese
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </Link>
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
