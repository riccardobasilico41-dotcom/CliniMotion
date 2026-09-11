import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays, Clock3, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Prose } from '@/components/Prose'
import { Reveal } from '@/components/Reveal'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { TripSummary } from '@/components/TripSummary'
import { RouteTimeline } from '@/components/RouteTimeline'
import { DayTimeline } from '@/components/DayTimeline'
import { BudgetBreakdown } from '@/components/BudgetBreakdown'
import { StickyTableOfContents, type TocItem } from '@/components/StickyTableOfContents'
import { getAllViaggi, getViaggioBySlug, getContinente } from '@/lib/viaggi'
import { getTripMeta } from '@/lib/geo'
import type { ViaggioInBreve } from '@/lib/types'
import { slugify } from '@/lib/utils'
import { JsonLd } from '@/components/JsonLd'
import { articoloViaggioJsonLd, breadcrumbJsonLd } from '@/lib/structured-data'
import { copertineViaggi } from '@/content/viaggi-copertine'

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

const CAMPI_VIAGGIO_IN_BREVE: { key: keyof ViaggioInBreve; label: string }[] = [
  { key: 'percheHoScelto', label: 'Perché ho scelto questo viaggio' },
  { key: 'conChiSonoPartito', label: 'Con chi sono partito' },
  { key: 'cosaCercavo', label: 'Cosa cercavo' },
  { key: 'treEsperienzePiuBelle', label: 'Le tre esperienze più belle' },
  { key: 'cosaCambierei', label: 'Cosa cambierei oggi' },
  { key: 'aChiLoConsiglio', label: 'A chi lo consiglio' },
]

export default async function ViaggioPage({ params }: PageProps<'/viaggi/[slug]'>) {
  const { slug } = await params
  const viaggio = getViaggioBySlug(slug)
  if (!viaggio) notFound()

  const continente = getContinente(viaggio.categorie)
  const meta = getTripMeta(viaggio.slug)
  const paeseSlug = meta?.paeseSlug
  const copertina = copertineViaggi[viaggio.slug]

  const cosaVedereSezione = viaggio.sezioni.find((s) => /^Cosa vedere/i.test(s.titolo))
  const consigliSezione = viaggio.sezioni.find((s) => /^Consigli pratici/i.test(s.titolo))
  const altreSezioni = viaggio.sezioni.filter((s) => s !== cosaVedereSezione && s !== consigliSezione)

  const toc: TocItem[] = []
  if (meta) toc.push({ href: '#il-viaggio-in-breve', label: 'Il viaggio in breve' })
  if (meta && meta.tappeMappa.length > 0) toc.push({ href: '#mappa', label: 'Mappa' })
  if (viaggio.giorni.length > 0) toc.push({ href: '#itinerario-giorno-per-giorno', label: 'Itinerario giorno per giorno' })
  if (cosaVedereSezione) toc.push({ href: `#${slugify(cosaVedereSezione.titolo)}`, label: 'Cosa vedere e fare' })
  if (viaggio.doveDormito) toc.push({ href: '#dove-dormire', label: 'Dove dormire' })
  if (viaggio.doveMangiato) toc.push({ href: '#dove-mangiare', label: 'Dove mangiare' })
  if (meta) toc.push({ href: '#budget', label: 'Budget' })
  if (consigliSezione) {
    toc.push({ href: `#${slugify(consigliSezione.titolo)}`, label: 'Consigli pratici' })
    toc.push({ href: `#${slugify(consigliSezione.titolo)}`, label: 'Errori da evitare' })
  }

  return (
    <>
      <JsonLd
        data={[
          articoloViaggioJsonLd({
            titolo: viaggio.titolo,
            descrizione: viaggio.descrizione,
            percorso: `/viaggi/${viaggio.slug}`,
            sezioni: viaggio.sezioni.map((s) => s.titolo),
          }),
          breadcrumbJsonLd([
            { nome: 'Home', percorso: '/' },
            { nome: 'Viaggi', percorso: '/viaggi' },
            { nome: viaggio.titolo, percorso: `/viaggi/${viaggio.slug}` },
          ]),
        ]}
      />
      <ScrollProgress className="fixed inset-x-0 top-0 z-[60] h-0.5 bg-rosso motion-reduce:hidden" />
      <section className="relative overflow-hidden border-b border-alpine/10 bg-alpine-dark py-20 text-cream sm:py-28">
        {copertina && (
          <>
            <Image
              src={copertina.immagine}
              alt={copertina.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-alpine-dark/72" />
          </>
        )}
        <Container className="relative z-10">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
              <Link href="/" className="hover:text-cream">
                Home
              </Link>
              <span>/</span>
              <Link href="/viaggi" className="hover:text-cream">
                Tutti i viaggi
              </Link>
              <span>/</span>
              <span className="text-cream/85">{viaggio.titolo}</span>
            </nav>
            <Link
              href="/viaggi"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cream/60 hover:text-cream"
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

            {meta && (
              <div className="space-y-8">
                <TripSummary viaggio={viaggio} meta={meta} />

                <div id="il-viaggio-in-breve" className="scroll-mt-24">
                  <h2 className="font-display text-xl text-alpine">Il viaggio in breve</h2>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
                    {CAMPI_VIAGGIO_IN_BREVE.map(({ key, label }) => {
                      const valore = meta.viaggioInBreve[key]
                      return (
                        <div key={key} className="rounded-xl border border-dashed border-alpine/20 p-4">
                          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/70">{label}</dt>
                          <dd className={`mt-1.5 text-sm leading-relaxed ${valore ? 'text-ink' : 'italic text-stone/60'}`}>
                            {valore ?? 'Ricordo personale da aggiungere'}
                          </dd>
                        </div>
                      )
                    })}
                  </dl>
                </div>
              </div>
            )}

            {meta && meta.tappeMappa.length > 0 && paeseSlug && (
              <div id="mappa" className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">Mappa del viaggio</h2>
                <div className="mt-6">
                  <RouteTimeline tappe={meta.tappeMappa} paeseSlug={paeseSlug} />
                </div>
              </div>
            )}

            {viaggio.giorni.length > 0 && (
              <div id="itinerario-giorno-per-giorno" className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">Itinerario giorno per giorno</h2>
                <div className="mt-6">
                  {meta ? (
                    <DayTimeline giorni={viaggio.giorni} meta={meta.giorni} paeseSlug={paeseSlug} />
                  ) : (
                    <div className="space-y-8 border-l border-alpine/15 pl-6">
                      {viaggio.giorni.map((giorno) => (
                        <Reveal key={giorno.titolo}>
                          <h3 className="font-display text-lg font-medium text-ink">{giorno.titolo}</h3>
                          <Prose className="mt-2 text-sm">{giorno.corpo}</Prose>
                        </Reveal>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {cosaVedereSezione && (
              <div id={slugify(cosaVedereSezione.titolo)} className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">{cosaVedereSezione.titolo}</h2>
                <Prose className="mt-4">{cosaVedereSezione.corpo}</Prose>
              </div>
            )}

            {altreSezioni.map((sezione) => (
              <div key={sezione.titolo} id={slugify(sezione.titolo)} className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">{sezione.titolo}</h2>
                <Prose className="mt-4">{sezione.corpo}</Prose>
              </div>
            ))}

            {viaggio.doveDormito && (
              <div id="dove-dormire" className="scroll-mt-24">
                <h2 className="font-display text-xl text-alpine">Dove ho dormito</h2>
                <Prose className="mt-3 text-sm">{viaggio.doveDormito}</Prose>
              </div>
            )}
            {viaggio.doveMangiato && (
              <div id="dove-mangiare" className="scroll-mt-24">
                <h2 className="font-display text-xl text-alpine">Dove ho mangiato</h2>
                <Prose className="mt-3 text-sm">{viaggio.doveMangiato}</Prose>
              </div>
            )}

            {meta && (
              <div id="budget" className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">Budget</h2>
                <p className="mt-2 text-sm text-stone">
                  Voci di spesa indicative: dove non c&apos;è un dato affidabile, la voce resta da completare invece di una stima inventata.
                </p>
                <div className="mt-4">
                  <BudgetBreakdown voci={meta.budget} />
                </div>
              </div>
            )}

            {consigliSezione && (
              <div id={slugify(consigliSezione.titolo)} className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">{consigliSezione.titolo}</h2>
                <Prose className="mt-4">{consigliSezione.corpo}</Prose>
              </div>
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

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {toc.length > 0 && <StickyTableOfContents items={toc} />}

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

            <p className="text-xs leading-relaxed text-stone/60">
              Viaggio effettuato nel {viaggio.periodo || 'periodo da confermare'} · pagina aggiornata il{' '}
              {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}.
              <br />
              Prezzi, orari, documenti e traghetti vanno sempre verificati prima della partenza.
            </p>
          </aside>
        </Container>
      </section>
    </>
  )
}
