'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import { Route, BedDouble, Coins, Gauge, ArrowUpRight } from 'lucide-react'
import { Prose } from '@/components/Prose'
import { Reveal } from '@/components/Reveal'
import { ContentStatusBadge } from '@/components/ui/ContentStatusBadge'
import { FieldDossier } from './FieldDossier'
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
 * Presentazione giorno-per-giorno di Signature Editorial: stesso contenuto e
 * stesso `GiornoMeta` del `DayTimeline` esistente (nessuna perdita di dati),
 * ma il numero del giorno diventa un vero ancoraggio tipografico invece di
 * un badge circolare, e ogni giorno senza fotografia (qui: tutti, per questo
 * viaggio) porta un Field Dossier invece di restare una card bianca vuota.
 * Usata solo dalla pagina viaggio firmata — `DayTimeline` originale resta
 * intatto per tutti gli altri 46 itinerari.
 */
export const DayTimelineSignature = forwardRef<
  HTMLOListElement,
  { giorni: ViaggioGiorno[]; meta: GiornoMeta[]; paeseSlug: string }
>(function DayTimelineSignature({ giorni, meta, paeseSlug }, ref) {
  return (
    <ol ref={ref} className="space-y-16 sm:space-y-24">
      {giorni.map((giorno, i) => {
        const info = meta.find((m) => m.titoloGiorno === giorno.titolo)
        const numero = giorno.titolo.match(/Giorno\s+(\d+)/i)?.[1] ?? String(i + 1)
        const sottotitolo = giorno.titolo.replace(/^Giorno\s+\d+\s*[—-]\s*/i, '')

        return (
          <Reveal key={giorno.titolo}>
            <li className="grid gap-6 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <div className="flex sm:block">
                <span className="font-display text-6xl font-medium leading-none text-alpine/20 sm:text-7xl">
                  {numero.padStart(2, '0')}
                </span>
                {info && (
                  <span
                    className={`ml-4 inline-flex h-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider sm:ml-0 sm:mt-3 ${INTENSITA_CLASSES[info.intensita]}`}
                  >
                    <Gauge size={12} />
                    {INTENSITA_LABEL[info.intensita]}
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-display text-2xl font-medium leading-tight text-ink sm:text-3xl">
                  {sottotitolo}
                </h3>

                {/* Field Dossier a piena larghezza: nessuna foto per nessun giorno di
                    questo viaggio, quindi ogni giorno porta questa striscia invece di
                    restare senza alcun elemento visivo. Impilata sotto il titolo, mai
                    in una colonna affiancata al testo — con tre livelli di grid già
                    annidati sopra (pagina → sezione giorni → questo giorno), un'altra
                    colonna `lg:` finiva per calcolare la soglia sulla larghezza dello
                    schermo invece che sullo spazio realmente disponibile qui, e le due
                    colonne si sovrapponevano. */}
                <FieldDossier
                  size="sm"
                  eyebrow={`Giorno ${numero}`}
                  titolo={info?.destinazioneSlug ?? sottotitolo}
                  meta={info?.intensita ? INTENSITA_LABEL[info.intensita] : undefined}
                  className="mt-5 h-28"
                />

                <div className="mt-6">
                  {info && (
                    <dl className="grid gap-3 border-b border-alpine/10 pb-5 text-sm sm:grid-cols-3">
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

                  <Prose className="mt-5 text-sm">{giorno.corpo}</Prose>

                  {info?.destinazioneSlug && (
                    <Link
                      href={`/destinazioni/${paeseSlug}/${info.destinazioneSlug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-rosso hover:text-rosso-dark"
                    >
                      Scopri la destinazione
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </li>
          </Reveal>
        )
      })}
    </ol>
  )
})
