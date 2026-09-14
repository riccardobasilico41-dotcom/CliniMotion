import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Prose } from '@/components/Prose'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { TripSummary } from '@/components/TripSummary'
import { BudgetBreakdown } from '@/components/BudgetBreakdown'
import { StickyTableOfContents, type TocItem } from '@/components/StickyTableOfContents'
import { TripOpener } from '@/components/signature/TripOpener'
import { DaySectionSignature } from '@/components/signature/DaySectionSignature'
import { RouteLine } from '@/components/signature/RouteLine'
import { Container } from '@/components/ui/Container'
import { getAllViaggi, getViaggioBySlug, type Viaggio } from '@/lib/viaggi'
import { getTripMeta } from '@/lib/geo'
import type { ViaggioInBreve, TripMeta } from '@/lib/types'
import { slugify } from '@/lib/utils'
import { JsonLd } from '@/components/JsonLd'
import { articoloViaggioJsonLd, breadcrumbJsonLd } from '@/lib/structured-data'
import { copertineViaggi } from '@/content/viaggi-copertine'
import { getEditorialMeta, type EditorialMeta } from '@/content/viaggi-editorial'
import { pageMetadata } from '@/lib/seo'

export async function generateStaticParams() {
  return getAllViaggi().map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/viaggi/[slug]'>): Promise<Metadata> {
  const { slug } = await params
  const viaggio = getViaggioBySlug(slug)
  if (!viaggio) return {}

  const editorial = getEditorialMeta(slug)
  return pageMetadata({
    title: editorial.seoTitle ?? viaggio.titolo,
    description: editorial.seoDescription ?? viaggio.descrizione,
    socialTitle: editorial.socialTitle,
    socialDescription: editorial.socialDescription,
    path: `/viaggi/${viaggio.slug}`,
    type: 'article',
  })
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

  const meta = getTripMeta(viaggio.slug)
  if (!meta) notFound()
  const copertina = copertineViaggi[viaggio.slug]
  const editorial = getEditorialMeta(viaggio.slug)

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

      <SignatureViaggioContent
        viaggio={viaggio}
        meta={meta}
        copertina={copertina}
        editorial={editorial}
        toc={toc}
        cosaVedereSezione={cosaVedereSezione}
        consigliSezione={consigliSezione}
        altreSezioni={altreSezioni}
      />
    </>
  )
}

type SezioneViaggio = Viaggio['sezioni'][number]

/**
 * Composizione Signature Editorial della pagina viaggio: apertura firmata
 * (foto reale se in `copertineViaggi`, altrimenti Field Dossier a scala
 * hero), mappa del percorso con `RouteLine`, e giorno-per-giorno con numeri
 * grandi + segnaposto di percorso.
 */
function SignatureViaggioContent({
  viaggio,
  meta,
  copertina,
  editorial,
  toc,
  cosaVedereSezione,
  consigliSezione,
  altreSezioni,
}: {
  viaggio: Viaggio
  meta: TripMeta
  copertina?: { immagine: string; imageAlt: string }
  editorial: EditorialMeta
  toc: TocItem[]
  cosaVedereSezione?: SezioneViaggio
  consigliSezione?: SezioneViaggio
  altreSezioni: SezioneViaggio[]
}) {
  return (
    <>
      <TripOpener
        titolo={viaggio.titolo}
        editorialHeadline={editorial.editorialHeadline}
        editorialHook={editorial.editorialHook}
        paeseSlug={meta.paeseSlug}
        periodoBreve={viaggio.periodoBreve}
        durataBreve={viaggio.durataBreve}
        compagniBreve={viaggio.compagniBreve}
        tappe={meta.tappeMappa}
        inLavorazione={viaggio.inLavorazione}
        copertina={copertina}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-16">
            {viaggio.apertura && (
              <p className="font-display text-2xl italic leading-relaxed text-alpine sm:text-3xl">
                {viaggio.apertura}
              </p>
            )}

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

            {meta.tappeMappa.length > 0 && (
              <div id="mappa" className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">La rotta</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone">
                  Le tappe dell&apos;itinerario, nell&apos;ordine in cui si visitano.
                </p>
                <div className="mt-8 rounded-2xl border border-alpine/10 bg-cream-dark/40 p-6 sm:p-10">
                  <RouteLine
                    tappe={meta.tappeMappa}
                    paeseSlug={meta.paeseSlug}
                    strokeClassName="stroke-alpine/60"
                    labelClassName="text-alpine"
                    className="h-48"
                  />
                </div>
              </div>
            )}

            {viaggio.giorni.length > 0 && (
              <div id="itinerario-giorno-per-giorno" className="scroll-mt-24">
                <h2 className="font-display text-2xl text-alpine">Itinerario giorno per giorno</h2>
                <div className="mt-10">
                  <DaySectionSignature giorni={viaggio.giorni} meta={meta.giorni} paeseSlug={meta.paeseSlug} />
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

            <div id="budget" className="scroll-mt-24">
              <h2 className="font-display text-2xl text-alpine">Budget</h2>
              <p className="mt-2 text-sm text-stone">
                Voci di spesa indicative: dove non c&apos;è un dato affidabile, la voce resta da completare invece di
                una stima inventata.
              </p>
              <div className="mt-4">
                <BudgetBreakdown voci={meta.budget} />
              </div>
            </div>

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
                  <span key={tag} className="rounded-full bg-alpine/5 px-3 py-1 text-xs font-medium text-alpine">
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
                <Prose className="mt-4 text-sm prose-ul:my-0 prose-li:my-1.5">{viaggio.schedaPratica}</Prose>
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
