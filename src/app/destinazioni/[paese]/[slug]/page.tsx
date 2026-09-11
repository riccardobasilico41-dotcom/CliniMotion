import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { ContentStatusBadge } from '@/components/ui/ContentStatusBadge'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { ExperienceCard } from '@/components/ExperienceCard'
import { ComparisonBlock } from '@/components/ComparisonBlock'
import { RelatedContent } from '@/components/RelatedContent'
import {
  getAllDestinazioni,
  getDestinazione,
  getPaese,
  getEsperienzeDiDestinazione,
  getViaggiByDestinazione,
} from '@/lib/geo'

// "Torna a..." con l'articolo corretto per ciascun Paese (il Messico, la Norvegia,
// l'Islanda, la Svezia) — l'italiano non si presta a una regola generica affidabile.
const TORNA_A_PAESE: Record<string, string> = {
  messico: 'Torna al Messico',
  norvegia: 'Torna alla Norvegia',
  islanda: "Torna all'Islanda",
  svezia: 'Torna alla Svezia',
}

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
  return {
    title: destinazione.nome,
    description: destinazione.introduzione,
    alternates: { canonical: `/destinazioni/${paeseSlug}/${slug}` },
  }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-alpine/10 bg-alpine-dark py-16 text-cream sm:py-20">
        <Container>
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
              <Link href="/" className="hover:text-cream">
                Home
              </Link>
              <span>/</span>
              <Link href={`/destinazioni/${paeseSlug}`} className="hover:text-cream">
                {paese.nome}
              </Link>
              <span>/</span>
              <span className="text-cream/85">{destinazione.nome}</span>
            </nav>
            <Link
              href={`/destinazioni/${paeseSlug}`}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cream/60 hover:text-cream"
            >
              <ArrowLeft size={13} />
              {TORNA_A_PAESE[paese.slug] ?? `Torna a ${paese.nome}`}
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">
                {destinazione.tipologia.join(' · ')}
              </p>
              {destinazione.visitataPersonalmente && <ContentStatusBadge stato="provato" />}
            </div>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              {destinazione.nome}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70">{destinazione.introduzione}</p>
          </Reveal>
        </Container>
      </section>

      {destinazione.immagine && (
        <Container className="relative -mt-10 sm:-mt-14">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-alpine/10 shadow-lg sm:aspect-[21/9]">
              <Image
                src={destinazione.immagine}
                alt={destinazione.imageAlt}
                fill
                sizes="(min-width: 1024px) 1152px, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      )}

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl text-alpine">Perché andarci</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{destinazione.percheAndarci}</p>
            </div>

            {destinazione.cosaVedere.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Cosa vedere</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {destinazione.cosaVedere.map((v) => (
                    <li key={v}>· {v}</li>
                  ))}
                </ul>
              </div>
            )}

            {destinazione.cosaFare.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Cosa fare</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {destinazione.cosaFare.map((v) => (
                    <li key={v}>· {v}</li>
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
                <p className="mt-3 text-base leading-relaxed text-stone">{destinazione.doveMangiare}</p>
              </div>
            )}

            {destinazione.usciteSerali && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Dove andare dopo cena</h2>
                <p className="mt-3 text-base leading-relaxed text-stone">{destinazione.usciteSerali}</p>
              </div>
            )}

            {destinazione.doveDormire && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Dove dormire</h2>
                <p className="mt-3 text-base leading-relaxed text-stone">{destinazione.doveDormire}</p>
              </div>
            )}

            {destinazione.miaEsperienza ? (
              <div>
                <h2 className="font-display text-2xl text-alpine">La mia esperienza</h2>
                <p className="mt-3 font-display text-xl italic leading-relaxed text-alpine">
                  {destinazione.miaEsperienza}
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-alpine/20 p-5 text-sm text-stone/70">
                Ricordo personale da aggiungere.
              </div>
            )}

            {destinazione.erroriDaEvitare.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Errori da evitare</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {destinazione.erroriDaEvitare.map((v) => (
                    <li key={v}>· {v}</li>
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
