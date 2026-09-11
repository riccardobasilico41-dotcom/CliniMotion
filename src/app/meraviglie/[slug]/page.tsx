import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, AlertTriangle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { ContentStatusBadge } from '@/components/ui/ContentStatusBadge'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { getAllMeraviglie, getMeraviglia } from '@/lib/meraviglie'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbJsonLd } from '@/lib/structured-data'

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
  return {
    title: meraviglia.titolo,
    description: meraviglia.descrizione,
    alternates: { canonical: `/meraviglie/${slug}` },
  }
}

export default async function MeravigliaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meraviglia = getMeraviglia(slug)
  if (!meraviglia) notFound()

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
      <section className="relative flex min-h-[42vh] items-end overflow-hidden border-b border-alpine/10 bg-alpine-dark text-cream sm:min-h-[48vh]">
        {meraviglia.heroImage && (
          <>
            <Image
              src={meraviglia.heroImage}
              alt={meraviglia.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-alpine-dark/90 via-alpine-dark/25 to-alpine-dark/10" />
          </>
        )}
        <Container className="relative z-10 py-16 sm:py-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
              <Link href="/" className="hover:text-cream">
                Home
              </Link>
              <span>/</span>
              <Link href="/meraviglie" className="hover:text-cream">
                Meraviglie
              </Link>
              <span>/</span>
              <span className="text-cream/85">{meraviglia.nome}</span>
            </nav>
            <Link
              href="/meraviglie"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cream/60 hover:text-cream"
            >
              <ArrowLeft size={13} />
              Torna alle meraviglie
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">
                {meraviglia.paese} · {meraviglia.citta}
              </p>
              {meraviglia.visitataPersonalmente && <ContentStatusBadge stato="provato" />}
            </div>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              {meraviglia.nome}
              {meraviglia.nomeLocale && (
                <span className="ml-3 font-display text-xl font-normal italic text-cream/60">
                  {meraviglia.nomeLocale}
                </span>
              )}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70">{meraviglia.descrizione}</p>
          </Reveal>
        </Container>
      </section>

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
                  <div key={sezione.nome} className="rounded-xl border border-alpine/10 bg-cream-dark/40 p-5">
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
              <div className="rounded-2xl border border-rosso/20 bg-rosso/5 p-6">
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
              <div className="rounded-xl border border-dashed border-alpine/20 p-5 text-sm text-stone/70">
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
