import Link from 'next/link'
import { Route, BedDouble, Coins, Gauge, ArrowUpRight } from 'lucide-react'
import { Prose } from './Prose'
import { Reveal } from './Reveal'
import { ContentStatusBadge } from './ui/ContentStatusBadge'
import type { ViaggioGiorno } from '@/lib/viaggi'
import type { GiornoMeta, IntensitaGiorno } from '@/lib/types'

const INTENSITA_LABEL: Record<IntensitaGiorno, string> = {
  leggero: 'Ritmo leggero',
  medio: 'Ritmo medio',
  intenso: 'Ritmo intenso',
}

const INTENSITA_CLASSES: Record<IntensitaGiorno, string> = {
  leggero: 'bg-alpine/10 text-alpine',
  medio: 'bg-rosso/10 text-rosso-dark',
  intenso: 'bg-rosso text-cream',
}

/**
 * Timeline giorno-per-giorno: il testo (giorno.corpo) resta quello del
 * markdown, invariato. Se esiste un `GiornoMeta` con lo stesso titolo, la
 * card si arricchisce di tratta/pernottamento/intensità/link — altrimenti
 * mostra solo titolo e testo, come nella pagina viaggio "classica".
 * Contenuto sempre visibile (nessun accordion chiuso di default).
 */
export function DayTimeline({
  giorni,
  meta,
  paeseSlug,
}: {
  giorni: ViaggioGiorno[]
  meta?: GiornoMeta[]
  paeseSlug?: string
}) {
  return (
    <ol className="space-y-10">
      {giorni.map((giorno, i) => {
        const info = meta?.find((m) => m.titoloGiorno === giorno.titolo)
        const numero = giorno.titolo.match(/Giorno\s+(\d+)/i)?.[1] ?? String(i + 1)

        return (
          <Reveal key={giorno.titolo}>
            <li className="rounded-2xl border border-alpine/10 bg-white p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-alpine font-display text-sm font-semibold text-cream">
                    {numero}
                  </span>
                  <h3 className="font-display text-lg font-medium text-ink">{giorno.titolo}</h3>
                </div>
                {info && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${INTENSITA_CLASSES[info.intensita]}`}
                  >
                    <Gauge size={12} />
                    {INTENSITA_LABEL[info.intensita]}
                  </span>
                )}
              </div>

              {info && (
                <dl className="mt-4 grid gap-3 border-b border-alpine/10 pb-4 text-sm sm:grid-cols-3">
                  {info.tratta && (
                    <div className="flex items-start gap-2">
                      <Route size={15} className="mt-0.5 shrink-0 text-stone/60" />
                      <div>
                        <dt className="text-xs text-stone/60">Tratta</dt>
                        <dd className="text-ink">{info.tratta}</dd>
                      </div>
                    </div>
                  )}
                  {info.pernottamento && (
                    <div className="flex items-start gap-2">
                      <BedDouble size={15} className="mt-0.5 shrink-0 text-stone/60" />
                      <div>
                        <dt className="text-xs text-stone/60">Pernottamento</dt>
                        <dd className="flex flex-wrap items-center gap-1.5 text-ink">
                          {info.pernottamento}
                          {info.statoPernottamento && <ContentStatusBadge stato={info.statoPernottamento} />}
                        </dd>
                      </div>
                    </div>
                  )}
                  {info.costiNoti && (
                    <div className="flex items-start gap-2">
                      <Coins size={15} className="mt-0.5 shrink-0 text-stone/60" />
                      <div>
                        <dt className="text-xs text-stone/60">Costi noti</dt>
                        <dd className="text-ink">{info.costiNoti}</dd>
                      </div>
                    </div>
                  )}
                </dl>
              )}

              <Prose className="mt-4 text-sm">{giorno.corpo}</Prose>

              {info?.destinazioneSlug && paeseSlug && (
                <Link
                  href={`/destinazioni/${paeseSlug}/${info.destinazioneSlug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-rosso hover:text-rosso-dark"
                >
                  Scopri la destinazione
                  <ArrowUpRight size={14} />
                </Link>
              )}
            </li>
          </Reveal>
        )
      })}
    </ol>
  )
}
