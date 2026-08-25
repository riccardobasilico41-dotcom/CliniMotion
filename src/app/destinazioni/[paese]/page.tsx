import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { CountryHero } from '@/components/CountryHero'
import { RouteTimeline } from '@/components/RouteTimeline'
import { DestinationCard } from '@/components/DestinationCard'
import { ExperienceCard } from '@/components/ExperienceCard'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { getAllPaesi, getPaese, getDestinazioniByPaese, getEsperienzeByPaese, getTripMeta } from '@/lib/geo'
import { getViaggioBySlug } from '@/lib/viaggi'

export async function generateStaticParams() {
  return getAllPaesi().map((p) => ({ paese: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug } = await params
  const paese = getPaese(paeseSlug)
  if (!paese) return {}
  return {
    title: paese.titolo,
    description: paese.descrizione,
    alternates: { canonical: `/destinazioni/${paeseSlug}` },
  }
}

export default async function PaesePage({ params }: { params: Promise<{ paese: string }> }) {
  const { paese: paeseSlug } = await params
  const paese = getPaese(paeseSlug)
  if (!paese) notFound()

  const destinazioni = getDestinazioniByPaese(paeseSlug)
  const esperienze = getEsperienzeByPaese(paeseSlug)
  const tripPrincipale = getViaggioBySlug(paese.tripPrincipaleSlug)
  const tripMeta = getTripMeta(paese.tripPrincipaleSlug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Country',
    name: paese.nome,
    description: paese.descrizione,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CountryHero
        paese={paese}
        tripHref={tripPrincipale ? `/viaggi/${tripPrincipale.slug}` : '/viaggi'}
        destinazioniHref="#destinazioni"
      />

      {/* Il viaggio che ho fatto io */}
      {tripPrincipale && (
        <section className="py-20 sm:py-28">
          <Container>
            <SectionHeading
              title={tripPrincipale.titolo}
              description="Itinerario completo, giorno per giorno — con quello che rifarei e quello che cambierei."
            />
            <Reveal>
              <div className="mt-8 grid gap-10 rounded-2xl border border-alpine/10 bg-cream-dark/40 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  {tripPrincipale.apertura ? (
                    <p className="font-display text-xl italic leading-relaxed text-alpine">
                      {tripPrincipale.apertura}
                    </p>
                  ) : (
                    <p className="font-display text-xl italic leading-relaxed text-stone">
                      {tripPrincipale.descrizione}
                    </p>
                  )}
                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-stone/60">Durata</dt>
                      <dd className="text-ink">{tripPrincipale.durataBreve || '13 giorni'}</dd>
                    </div>
                    {tripMeta && (
                      <>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/60">Trasporti</dt>
                          <dd className="text-ink">{tripMeta.trasporti}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/60">Stile</dt>
                          <dd className="text-ink">{tripMeta.stile.join(' · ')}</dd>
                        </div>
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/60">Ritmo</dt>
                          <dd className="text-ink">{tripMeta.ritmo}</dd>
                        </div>
                      </>
                    )}
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={`/viaggi/${tripPrincipale.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-alpine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-alpine-dark"
                    >
                      Copia questo itinerario
                      <ArrowRight size={15} />
                    </Link>
                    <Link
                      href={`/viaggi/${tripPrincipale.slug}#itinerario-giorno-per-giorno`}
                      className="inline-flex items-center gap-2 rounded-full border border-alpine/30 px-6 py-3 text-sm font-medium text-alpine transition-colors hover:bg-alpine/5"
                    >
                      Leggi il viaggio giorno per giorno
                    </Link>
                  </div>
                </div>

                {tripMeta && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-stone/60">Principali tappe</p>
                    <RouteTimeline tappe={tripMeta.tappeMappa} paeseSlug={paeseSlug} />
                  </div>
                )}
              </div>
            </Reveal>
          </Container>
        </section>
      )}

      {/* Destinazioni */}
      <section id="destinazioni" className="scroll-mt-24 border-t border-alpine/10 py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Destinazioni"
            description="Ogni tappa dell'itinerario esplorata singolarmente: quanto fermarsi, cosa fare, dove ho dormito e mangiato io."
          />
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
            {destinazioni.map((d) => (
              <RevealItem key={d.slug}>
                <DestinationCard destinazione={d} paeseSlug={paeseSlug} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Esperienze */}
      <section id="esperienze" className="scroll-mt-24 border-t border-alpine/10 py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Esperienze"
            description="Le attività che valgono davvero il tempo — con un giudizio sincero su ciascuna."
          />
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
            {esperienze.map((e) => (
              <RevealItem key={e.slug}>
                <ExperienceCard esperienza={e} paeseSlug={paeseSlug} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Organizza il viaggio */}
      <section id="organizza-il-viaggio" className="scroll-mt-24 border-t border-alpine/10 bg-cream-dark/30 py-20 sm:py-28">
        <Container>
          <SectionHeading
            title="Organizza il viaggio"
            description="Le informazioni pratiche raccolte nella scheda del viaggio: verificale sempre prima di partire, prezzi e orari cambiano."
          />
          <PracticalInfo
            className="mt-10 sm:grid-cols-3"
            items={[
              { label: 'Quando andare', href: `/viaggi/${paese.tripPrincipaleSlug}#scheda-riassuntiva`, value: 'Periodo e stagionalità' },
              { label: 'Come spostarsi', href: `/viaggi/${paese.tripPrincipaleSlug}#scheda-riassuntiva`, value: 'Trasporti principali' },
              { label: 'Budget', href: `/viaggi/${paese.tripPrincipaleSlug}#budget`, value: 'Voci di spesa' },
              { label: 'Documenti', href: `/viaggi/${paese.tripPrincipaleSlug}#itinerario-giorno-per-giorno`, value: 'Passaporto e visto' },
              { label: 'SIM e internet', href: `/viaggi/${paese.tripPrincipaleSlug}#itinerario-giorno-per-giorno`, value: 'Come restare connessi' },
              { label: 'Salute e assicurazione', href: `/viaggi/${paese.tripPrincipaleSlug}#itinerario-giorno-per-giorno`, value: 'Cosa sapere prima di partire' },
              { label: 'Cosa mettere in valigia', href: `/viaggi/${paese.tripPrincipaleSlug}#itinerario-giorno-per-giorno`, value: 'Bagaglio consigliato' },
              { label: 'Errori da evitare', href: `/viaggi/${paese.tripPrincipaleSlug}#errori-da-evitare`, value: 'Cosa non rifare' },
            ]}
          />
          <p className="mt-6 flex items-center gap-1.5 text-xs text-stone/60">
            <ArrowUpRight size={12} />
            Pagine pratiche dedicate (una per argomento) sono il prossimo passo: per ora ogni voce rimanda alla sezione corrispondente della scheda del viaggio.
          </p>
        </Container>
      </section>
    </>
  )
}
