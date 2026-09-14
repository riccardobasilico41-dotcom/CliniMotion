'use client'

import { useRef } from 'react'
import { DayTimelineSignature } from './DayTimelineSignature'
import { RouteProgress } from './RouteProgress'
import type { ViaggioGiorno } from '@/lib/viaggi'
import type { GiornoMeta } from '@/lib/types'

/**
 * Contenitore che tiene insieme la timeline dei giorni e il suo segnaposto
 * di percorso: il riferimento allo scroll deve essere condiviso dai due, e
 * qui restano vicini nel DOM (colonna larga + colonna stretta sticky),
 * invece che a distanza tra corpo dell'articolo e sidebar lontana.
 */
export function DaySectionSignature({
  giorni,
  meta,
  paeseSlug,
}: {
  giorni: ViaggioGiorno[]
  meta: GiornoMeta[]
  paeseSlug: string
}) {
  const containerRef = useRef<HTMLOListElement>(null)

  return (
    <div className="lg:grid lg:grid-cols-[1fr_7rem] lg:gap-8">
      <DayTimelineSignature ref={containerRef} giorni={giorni} meta={meta} paeseSlug={paeseSlug} />
      <div className="lg:sticky lg:top-24 lg:self-start">
        <RouteProgress totaleGiorni={giorni.length} containerRef={containerRef} />
      </div>
    </div>
  )
}
