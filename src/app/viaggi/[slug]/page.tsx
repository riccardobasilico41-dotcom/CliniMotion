import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock3, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Prose } from '@/components/Prose'
import { Reveal } from '@/components/Reveal'
import { getAllViaggi, getViaggioBySlug, getContinente } from '@/lib/viaggi'

export async function generateStaticParams() {
  return getAllViaggi().map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/viaggi/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const viaggio = getViaggioBySlug(slug)
  if (!viaggio) return {}
  return {
    title: viaggio.titolo,
    description: viaggio.descrizione,
    alternates: { canonical: `/viaggi/${viaggio.slug}` },
  }
}

export default async function ViaggioPage({ params }: PageProps<'/viaggi/[slug]'>) {
  const { slug } = await params
  const viaggio = getViaggioBySlug(slug)
  if (!viaggio) notFound()

  const continente = getContinente(viaggio.categorie)

  return (
    <>
      <section className="border-b border-alpine/10 bg-alpine-dark py-20 text-cream sm:py-28">
        <Container>
          <Reveal>
            <Link
              href="/viaggi"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-cream/60 hover:text-cream"
            >
              <ArrowLeft size={13} />
              Tutti i viaggi
            </Link>
            <div className="mt-6 flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">
                {continente}
              </p>
              {viaggio.inLavorazione && (
                <span className="rounded-full bg-cream/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream/70">
                  Racconto in arrivo
                </span>
              )}
            </div>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              {viaggio.titolo}
            </h1>
            {viaggio.inLavorazione && (
              <p className="mt-3 max-w-xl text-sm text-cream/60">
                Itinerario e consigli sono completi — mancano solo i ricordi personali di apertura e
                chiusura.
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/70">
              {viaggio.periodoBreve && (
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={14} /> {viaggio.periodoBreve}
                </span>
              )}
              {viaggio.durataBreve && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={14} /> {viaggio.durataBreve}
                </span>
              )}
              {viaggio.compagniBreve && (
                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} /> {viaggio.compagniBreve}
                </span>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-14">
            {viaggio.apertura && (
              <p className="font-display text-2xl italic leading-relaxed text-alpine sm:text-3xl">
                {viaggio.apertura}
              </p>
            )}

            {viaggio.giorni.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Itinerario giorno per giorno</h2>
                <div className="mt-6 space-y-8 border-l border-alpine/15 pl-6">
                  {viaggio.giorni.map((giorno) => (
                    <Reveal key={giorno.titolo}>
                      <h3 className="font-display text-lg font-medium text-ink">{giorno.titolo}</h3>
                      <Prose className="mt-2 text-sm">{giorno.corpo}</Prose>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {viaggio.sezioni.map((sezione) => (
              <div key={sezione.titolo}>
                <h2 className="font-display text-2xl text-alpine">{sezione.titolo}</h2>
                <Prose className="mt-4">{sezione.corpo}</Prose>
              </div>
            ))}

            {viaggio.doveDormito && viaggio.doveMangiato ? (
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-xl text-alpine">Dove abbiamo dormito</h2>
                  <Prose className="mt-3 text-sm">{viaggio.doveDormito}</Prose>
                </div>
                <div>
                  <h2 className="font-display text-xl text-alpine">Dove abbiamo mangiato</h2>
                  <Prose className="mt-3 text-sm">{viaggio.doveMangiato}</Prose>
                </div>
              </div>
            ) : (
              <>
                {viaggio.doveDormito && (
                  <div>
                    <h2 className="font-display text-xl text-alpine">Dove abbiamo dormito</h2>
                    <Prose className="mt-3 text-sm">{viaggio.doveDormito}</Prose>
                  </div>
                )}
                {viaggio.doveMangiato && (
                  <div>
                    <h2 className="font-display text-xl text-alpine">Dove abbiamo mangiato</h2>
                    <Prose className="mt-3 text-sm">{viaggio.doveMangiato}</Prose>
                  </div>
                )}
              </>
            )}

            {viaggio.chiusura && (
              <p className="border-t border-alpine/10 pt-10 font-display text-xl italic leading-relaxed text-stone">
                {viaggio.chiusura}
              </p>
            )}

            {viaggio.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {viaggio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-alpine/5 px-3 py-1 text-xs font-medium text-alpine"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            {viaggio.schedaPratica && (
              <div className="rounded-2xl border border-alpine/10 bg-cream-dark/50 p-6">
                <h2 className="font-display text-lg text-alpine">Scheda pratica</h2>
                {viaggio.periodo && viaggio.periodo !== viaggio.periodoBreve && (
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    <span className="font-semibold text-ink">Periodo: </span>
                    {viaggio.periodo}
                  </p>
                )}
                {viaggio.durata && viaggio.durata !== viaggio.durataBreve && (
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    <span className="font-semibold text-ink">Durata: </span>
                    {viaggio.durata}
                  </p>
                )}
                {viaggio.compagni && (
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    <span className="font-semibold text-ink">Compagni di viaggio: </span>
                    {viaggio.compagni}
                  </p>
                )}
                <Prose className="mt-4 text-sm prose-ul:my-0 prose-li:my-1.5">
                  {viaggio.schedaPratica}
                </Prose>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </>
  )
}
