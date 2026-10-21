import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Rich } from '@/components/ui/Rich'
import { ContentStatusBadge } from '@/components/ui/ContentStatusBadge'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { ExperienceCard } from '@/components/ExperienceCard'
import { ComparisonBlock } from '@/components/ComparisonBlock'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { RelatedContent } from '@/components/RelatedContent'
import {
  getAllDestinazioni,
  getDestinazione,
  getPaese,
  getEsperienzeDiDestinazione,
  getViaggiByDestinazione,
} from '@/lib/geo'
import { pageMetadata } from '@/lib/seo'
import { richNodes } from '@/components/ui/Rich'

// "Torna a..." con l'articolo corretto per ciascun Paese (il Messico, la Norvegia,
// l'Islanda, la Svezia) — l'italiano non si presta a una regola generica affidabile.
export async function generateStaticParams() {
  return getAllDestinazioni().map((d) => ({ paese: d.paeseSlug, slug: d.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug, slug } = await params
  const destinazione = getDestinazione(paeseSlug, slug)
  if (!destinazione) return {}
  return pageMetadata({
    title: destinazione.nome,
    description: destinazione.introduzione,
    path: `/destinazioni/${paeseSlug}/${slug}`,
    type: 'article',
  })
}

export default async function DestinazionePage({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}) {
  const { paese: paeseSlug, slug } = await params
  const paese = getPaese(paeseSlug)
  const destinazione = getDestinazione(paeseSlug, slug)
  if (!paese || !destinazione) notFound()

  const esperienze = getEsperienzeDiDestinazione(destinazione)
  const viaggi = getViaggiByDestinazione(destinazione)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: destinazione.nome,
    description: destinazione.introduzione,
  }

  return (
    <>
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { nome: 'Home', percorso: '/' },
            { nome: 'Destinazioni', percorso: '/destinazioni' },
            { nome: paese.nome, percorso: `/destinazioni/${paeseSlug}` },
            { nome: destinazione.nome, percorso: `/destinazioni/${paeseSlug}/${destinazione.slug}` },
          ]),
        ]}
      />
      <PageHeader
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinazioni', href: '/destinazioni' },
          { label: paese.nome, href: `/destinazioni/${paeseSlug}` },
          { label: destinazione.nome },
        ]}
        eyebrow={destinazione.tipologia.join(' · ')}
        badge={destinazione.visitataPersonalmente ? <ContentStatusBadge stato="provato" /> : undefined}
        title={destinazione.nome}
        lead={<Rich text={destinazione.introduzione} as="p" />}
        media={destinazione.immagine ? { tipo: 'foto', src: destinazione.immagine, alt: destinazione.imageAlt } : undefined}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl text-alpine">Perché andarci</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{richNodes(destinazione.percheAndarci)}</p>
            </div>

            {destinazione.cosaVedere.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Cosa vedere</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {destinazione.cosaVedere.map((v) => (
                    <li key={v}>· {richNodes(v)}</li>
                  ))}
                </ul>
              </div>
            )}

            {destinazione.cosaFare.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Cosa fare</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {destinazione.cosaFare.map((v) => (
                    <li key={v}>· {richNodes(v)}</li>
                  ))}
                </ul>
              </div>
            )}

            {destinazione.confronti?.map((confronto) => (
              <ComparisonBlock key={confronto.titolo} confronto={confronto} />
            ))}

            {destinazione.doveMangiare && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Dove mangiare</h2>
                <p className="mt-3 text-base leading-relaxed text-stone">{richNodes(destinazione.doveMangiare)}</p>
              </div>
            )}

            {destinazione.usciteSerali && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Dove andare dopo cena</h2>
                <p className="mt-3 text-base leading-relaxed text-stone">{richNodes(destinazione.usciteSerali)}</p>
              </div>
            )}

            {destinazione.doveDormire && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Dove dormire</h2>
                <p className="mt-3 text-base leading-relaxed text-stone">{richNodes(destinazione.doveDormire)}</p>
              </div>
            )}

            {destinazione.miaEsperienza ? (
              <div>
                <h2 className="font-display text-2xl text-alpine">La mia esperienza</h2>
                <p className="mt-3 font-display text-xl italic leading-relaxed text-alpine">
                  {richNodes(destinazione.miaEsperienza)}
                </p>
              </div>
            ) : (
              <div className="rounded-none border border-dashed border-alpine/20 p-5 text-sm text-stone/70">
                Ricordo personale da aggiungere.
              </div>
            )}

            {destinazione.erroriDaEvitare.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Errori da evitare</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {destinazione.erroriDaEvitare.map((v) => (
                    <li key={v}>· {richNodes(v)}</li>
                  ))}
                </ul>
              </div>
            )}

            {esperienze.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Esperienze collegate</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {esperienze.map((e) => (
                    <ExperienceCard key={e.slug} esperienza={e} paeseSlug={paeseSlug} />
                  ))}
                </div>
              </div>
            )}

            <RelatedContent
              titolo="Itinerari che includono questa destinazione"
              items={viaggi.map((v) => ({
                href: `/viaggi/${v.slug}`,
                eyebrow: 'Itinerario completo',
                titolo: v.titolo,
                sottotitolo: v.durataBreve,
              }))}
            />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="font-display text-lg text-alpine">Informazioni pratiche</h2>
              <PracticalInfo
                className="mt-4"
                items={[
                  { label: 'Giorni consigliati', value: destinazione.giorniConsigliati },
                  { label: 'Periodo migliore', value: destinazione.periodoMigliore ?? 'da confermare' },
                  { label: 'Come arrivare', value: destinazione.comeArrivare ?? 'da completare' },
                  { label: 'Come spostarsi', value: destinazione.comeSpostarsi ?? 'da completare' },
                  { label: 'Costi', value: destinazione.costi ?? 'da completare' },
                ]}
              />
            </div>
            <p className="flex items-center gap-1.5 text-xs text-stone/60">
              <ArrowUpRight size={12} />
              Prezzi, orari e disponibilità vanno sempre verificati prima della partenza.
            </p>
          </aside>
        </Container>
      </section>
    </>
  )
}
