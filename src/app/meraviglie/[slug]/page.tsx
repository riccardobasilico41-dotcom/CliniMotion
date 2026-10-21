import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowUpRight, AlertTriangle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { ContentStatusBadge } from '@/components/ui/ContentStatusBadge'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { getAllMeraviglie, getMeraviglia } from '@/lib/meraviglie'
import { pageMetadata } from '@/lib/seo'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'
import { getHeroVideoMeraviglia } from '@/content/meraviglie-hero-video'
import { creditiHeroVideoMeraviglie } from '@/content/meraviglie-hero-video-crediti'
import { creditiMeraviglie } from '@/content/meraviglie-foto-crediti'
import { PageHeader } from '@/components/ui/PageHeader'

export async function generateStaticParams() {
  return getAllMeraviglie().map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meraviglia = getMeraviglia(slug)
  if (!meraviglia) return {}
  return pageMetadata({
    title: meraviglia.titolo,
    description: meraviglia.descrizione,
    path: `/meraviglie/${slug}`,
    type: 'article',
  })
}

export default async function MeravigliaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meraviglia = getMeraviglia(slug)
  if (!meraviglia) notFound()
  const heroVideo = getHeroVideoMeraviglia(meraviglia.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: meraviglia.nome,
    description: meraviglia.descrizione,
    address: {
      '@type': 'PostalAddress',
      addressLocality: meraviglia.citta,
      addressCountry: meraviglia.paese,
    },
  }

  return (
    <>
      <JsonLd
        data={[
          jsonLd,
          breadcrumbJsonLd([
            { nome: 'Home', percorso: '/' },
            { nome: 'Meraviglie del mondo', percorso: '/meraviglie' },
            { nome: meraviglia.nome, percorso: `/meraviglie/${meraviglia.slug}` },
          ]),
        ]}
      />
      <PageHeader
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Meraviglie del mondo', href: '/meraviglie' },
          { label: meraviglia.nome },
        ]}
        eyebrow={`${meraviglia.paese} · ${meraviglia.citta}`}
        badge={meraviglia.visitataPersonalmente ? <ContentStatusBadge stato="provato" /> : undefined}
        title={meraviglia.nome}
        titleNote={meraviglia.nomeLocale}
        lead={<p>{meraviglia.descrizione}</p>}
        media={
          heroVideo
            ? { tipo: 'video', src: heroVideo.src, poster: heroVideo.poster }
            : meraviglia.heroImage
              ? { tipo: 'foto', src: meraviglia.heroImage, alt: meraviglia.heroImageAlt }
              : undefined
        }
        credito={heroVideo ? creditiHeroVideoMeraviglie[meraviglia.slug] : creditiMeraviglie[meraviglia.slug]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl text-alpine">Perché è una meraviglia</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.storiaBreve}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">Cosa vedere e perché</h2>
              <div className="mt-4 space-y-4">
                {meraviglia.sezioniDaVedere.map((sezione) => (
                  <div key={sezione.nome} className="rounded-none border border-alpine/10 bg-cream-dark/40 p-5">
                    <h3 className="font-display text-lg text-alpine">{sezione.nome}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone">{sezione.perche}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">Tour organizzato o in autonomia?</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.tourOAutonomo}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">Prenotazione</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.prenotazione}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">Prezzi e biglietti combinati</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.prezzi}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">Come arrivare</h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-stone">
                <p><span className="font-medium text-ink">In aereo: </span>{meraviglia.comeArrivareInternazionale}</p>
                <p><span className="font-medium text-ink">Dall&apos;aeroporto al sito: </span>{meraviglia.comeArrivareLocale}</p>
                <p><span className="font-medium text-ink">Come spostarsi sul posto: </span>{meraviglia.comeSpostarsi}</p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-alpine">Giorni speciali e quando andare</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{meraviglia.giorniSpeciali}</p>
            </div>

            {meraviglia.scamDaEvitare.length > 0 && (
              <div className="rounded-none border border-rosso/20 bg-rosso/5 p-6">
                <h2 className="flex items-center gap-2 font-display text-2xl text-rosso-dark">
                  <AlertTriangle size={20} />
                  Truffe comuni da evitare
                </h2>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-stone">
                  {meraviglia.scamDaEvitare.map((v) => (
                    <li key={v}>· {v}</li>
                  ))}
                </ul>
              </div>
            )}

            {meraviglia.erroriDaEvitare.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Altri errori da non fare</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {meraviglia.erroriDaEvitare.map((v) => (
                    <li key={v}>· {v}</li>
                  ))}
                </ul>
              </div>
            )}

            {meraviglia.miaEsperienza ? (
              <div>
                <h2 className="font-display text-2xl text-alpine">La mia esperienza</h2>
                <p className="mt-3 font-display text-xl italic leading-relaxed text-alpine">
                  {meraviglia.miaEsperienza}
                </p>
              </div>
            ) : (
              <div className="rounded-none border border-dashed border-alpine/20 p-5 text-sm text-stone/70">
                Ricordo personale da aggiungere.
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="font-display text-lg text-alpine">Informazioni pratiche</h2>
              <PracticalInfo
                className="mt-4"
                items={[
                  { label: 'Paese', value: meraviglia.paese },
                  { label: 'Durata consigliata', value: meraviglia.durataConsigliata },
                  { label: 'Periodo migliore', value: meraviglia.periodoMigliore },
                  { label: 'Dove dormire', value: meraviglia.doveDormire },
                ]}
              />
            </div>
            <p className="flex items-center gap-1.5 text-xs text-stone/60">
              <ArrowUpRight size={12} />
              Prezzi, orari e regole di prenotazione cambiano spesso: verificare sempre sui canali ufficiali prima di partire.
            </p>
          </aside>
        </Container>
      </section>
    </>
  )
}
