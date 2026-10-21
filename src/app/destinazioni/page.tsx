import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { RevealGroup, RevealItem } from '@/components/Reveal'
import { getAllPaesi } from '@/lib/geo'
import { raggruppaPerContinente } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { raccoltaJsonLd } from '@/lib/structured-data'

export const metadata: Metadata = pageMetadata({
  title: 'Destinazioni',
  description: `I Paesi esplorati in profondità su ${siteConfig.brandName}, divisi per macro-regione: destinazioni ed esperienze, non solo l'itinerario completo.`,
  path: '/destinazioni',
})

export default function DestinazioniIndexPage() {
  const paesi = getAllPaesi()
  const gruppi = raggruppaPerContinente(paesi, (p) => p.continente)

  return (
    <>
      <JsonLd
        data={raccoltaJsonLd({
          nome: 'Destinazioni',
          descrizione: `I Paesi esplorati in profondità su ${siteConfig.brandName}.`,
          percorso: '/destinazioni',
          elementi: paesi.map((p) => ({ nome: p.nome, percorso: `/destinazioni/${p.slug}` })),
        })}
      />
      <PageHeader
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Destinazioni' }]}
        eyebrow="Paese per Paese"
        title="Destinazioni"
        lead={
          <p>
            {paesi.length} Paesi divisi per macro-regione: scegline uno per esplorarlo destinazione per destinazione ed
            esperienza per esperienza, non solo come itinerario unico.
          </p>
        }
      />
      <section className="py-14 sm:py-20">
      <Container>
        <div className="space-y-16">
          {gruppi.map(({ continente, items }) => (
            <div key={continente}>
              <div className="flex items-baseline gap-4 border-b border-alpine/15 pb-3">
                <h2 className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] text-alpine">{continente}</h2>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/60">
                  {items.length} {items.length === 1 ? 'Paese' : 'Paesi'}
                </span>
              </div>

              <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
                {items.map((paese) => (
                  <RevealItem key={paese.slug}>
                    <Link
                      href={`/destinazioni/${paese.slug}`}
                      className="group flex h-full flex-col gap-3 rounded-none border border-alpine/10 bg-white p-6 transition-[border-color,transform] duration-150 ease-out hover:border-ink active:scale-[0.99] motion-reduce:active:scale-100"
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
    </>
  )
}
