import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Rich } from '@/components/ui/Rich'
import { PersonalVerdict } from '@/components/ui/PersonalVerdict'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { RelatedContent } from '@/components/RelatedContent'
import { ComparisonBlock } from '@/components/ComparisonBlock'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import {
  getAllEsperienze,
  getEsperienza,
  getPaese,
  getDestinazioniByEsperienzaSlug,
  getViaggiByEsperienza,
} from '@/lib/geo'
import { pageMetadata } from '@/lib/seo'
import { richNodes } from '@/components/ui/Rich'

export async function generateStaticParams() {
  return getAllEsperienze().map((e) => ({ paese: e.paeseSlug, slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug, slug } = await params
  const esperienza = getEsperienza(paeseSlug, slug)
  if (!esperienza) return {}
  return pageMetadata({
    title: esperienza.nome,
    description: esperienza.cosE,
    path: `/esperienze/${paeseSlug}/${slug}`,
    type: 'article',
  })
}

export default async function EsperienzaPage({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}) {
  const { paese: paeseSlug, slug } = await params
  const paese = getPaese(paeseSlug)
  const esperienza = getEsperienza(paeseSlug, slug)
  if (!paese || !esperienza) notFound()

  const destinazioni = getDestinazioniByEsperienzaSlug(esperienza)
  const viaggi = getViaggiByEsperienza(esperienza)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: esperienza.nome,
    description: esperienza.cosE,
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
            { nome: esperienza.nome, percorso: `/esperienze/${paeseSlug}/${esperienza.slug}` },
          ]),
        ]}
      />
      <PageHeader
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Destinazioni', href: '/destinazioni' },
          { label: paese.nome, href: `/destinazioni/${paeseSlug}` },
          { label: esperienza.nome },
        ]}
        eyebrow={esperienza.localita}
        badge={<PersonalVerdict giudizio={esperienza.giudizio} />}
        title={esperienza.nome}
        lead={<Rich text={esperienza.cosE} as="p" />}
        media={esperienza.immagine ? { tipo: 'foto', src: esperienza.immagine, alt: esperienza.imageAlt } : undefined}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl text-alpine">Perché farla</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{richNodes(esperienza.percheFarla)}</p>
            </div>

            {esperienza.miaEsperienza ? (
              <div>
                <h2 className="font-display text-2xl text-alpine">La mia esperienza</h2>
                <p className="mt-3 font-display text-xl italic leading-relaxed text-alpine">
                  {richNodes(esperienza.miaEsperienza)}
                </p>
              </div>
            ) : (
              <div className="rounded-none border border-dashed border-alpine/20 p-5 text-sm text-stone/70">
                Ricordo personale da aggiungere.
              </div>
            )}

            {esperienza.confronti?.map((confronto) => (
              <ComparisonBlock key={confronto.titolo} confronto={confronto} />
            ))}

            {esperienza.alternative.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Alternative</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {esperienza.alternative.map((a) => (
                    <li key={a}>· {a}</li>
                  ))}
                </ul>
              </div>
            )}

            <RelatedContent
              titolo="Destinazione collegata"
              items={destinazioni.map((d) => ({
                href: `/destinazioni/${paeseSlug}/${d.slug}`,
                eyebrow: 'Destinazione',
                titolo: d.nome,
                sottotitolo: d.giorniConsigliati,
              }))}
            />

            <RelatedContent
              titolo="Itinerari che la includono"
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
                  { label: 'Dove si trova', value: esperienza.localita },
                  { label: 'Durata', value: esperienza.durata },
                  { label: 'Periodo', value: esperienza.periodo },
                  { label: 'Costo', value: esperienza.costo ?? 'da completare' },
                  { label: 'Come prenotare', value: esperienza.comePrenotare ?? 'da completare' },
                  { label: 'Cosa portare', value: esperienza.cosaPortare ?? 'da completare' },
                  { label: 'Per chi è adatta', value: esperienza.perChiEAdatta ?? 'da completare' },
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
