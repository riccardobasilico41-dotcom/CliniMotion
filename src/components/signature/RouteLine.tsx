'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { proiettaPercorso, costruisciPath, ROUTE_VIEWBOX, type PuntoTappa } from './geo'

/**
 * Linea di rotta animata: il primitivo cartografico condiviso da Homepage
 * (geografia decorativa) e dalla pagina viaggio firmata (mappa reale del
 * percorso). Disegna la linea da sinistra a destra all'ingresso in viewport
 * (Motion `pathLength`, non scroll-scrub: non serve pin per un tratto che
 * si vede tutto a schermo). Con `prefers-reduced-motion` la linea appare
 * già intera, senza animazione.
 *
 * `decorative` disattiva marker/etichette/link (usato sullo sfondo dell'hero):
 * in quel caso l'SVG è `aria-hidden`, perché non porta informazione propria.
 */
export function RouteLine({
  tappe,
  paeseSlug,
  decorative = false,
  className = '',
  strokeClassName = 'stroke-cream/40',
  labelClassName = 'text-cream/70',
}: {
  tappe: PuntoTappa[]
  paeseSlug?: string
  decorative?: boolean
  className?: string
  strokeClassName?: string
  labelClassName?: string
}) {
  const reduceMotion = useReducedMotion()
  const { punti, schematico } = proiettaPercorso(tappe)
  if (punti.length === 0) return null
  const d = costruisciPath(punti)

  // `className` fissa l'altezza dell'area grafica (SVG), mai del componente
  // intero: in modalità non decorativa segue l'elenco delle tappe e, a volte,
  // la nota "percorso schematico" — altezza variabile che non deve mai finire
  // dentro un contenitore ad altezza fissa, o trabocca invece di spingere in
  // basso il contenuto successivo (bug reale trovato in fase di verifica).
  // Solo in modalità decorativa (nessun contenuto sotto la SVG) l'altezza va
  // sul contenitore esterno: lì serve riempire per intero un genitore già
  // dimensionato (es. `absolute inset-0`), non solo l'area della SVG.
  if (decorative) {
    return (
      <div className={className}>
        <svg viewBox={ROUTE_VIEWBOX} className="h-full w-full overflow-visible" aria-hidden="true">
          <motion.path
            d={d}
            fill="none"
            strokeWidth={0.3}
            strokeLinecap="round"
            className={strokeClassName}
            initial={reduceMotion ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>
    )
  }

  return (
    <div>
      <svg
        viewBox={ROUTE_VIEWBOX}
        className={`w-full overflow-visible ${className || 'h-24'}`}
        role="img"
        aria-label={`Percorso: ${tappe.map((t) => t.nome).join(' → ')}`}
      >
        <motion.path
          d={d}
          fill="none"
          strokeWidth={0.3}
          strokeLinecap="round"
          className={strokeClassName}
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        {punti.map((p, i) => (
          <motion.circle
            key={p.nome}
            cx={p.x}
            cy={p.y}
            r={0.9}
            className={strokeClassName.replace('stroke-', 'fill-')}
            initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={
              reduceMotion ? { duration: 0 } : { duration: 0.4, delay: 0.3 + i * 0.18, ease: [0.16, 1, 0.3, 1] }
            }
          />
        ))}
      </svg>

      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
        {punti.map((p) => {
          const contenuto = (
            <>
              <span className={`font-display text-sm font-medium ${labelClassName}`}>{p.nome}</span>
              {p.coordinateLabel && (
                <span className="ml-2 font-mono text-[0.65rem] tabular-nums text-current/60">
                  {p.coordinateLabel}
                </span>
              )}
            </>
          )
          return (
            <li key={p.nome}>
              {p.destinazioneSlug && paeseSlug ? (
                <Link
                  href={`/destinazioni/${paeseSlug}/${p.destinazioneSlug}`}
                  className="inline-flex items-baseline gap-0 underline decoration-current/20 underline-offset-4 transition-colors hover:decoration-current"
                >
                  {contenuto}
                </Link>
              ) : (
                <span className="inline-flex items-baseline gap-0">{contenuto}</span>
              )}
            </li>
          )
        })}
      </ul>

      {schematico && <p className="mt-2 text-xs italic text-current/50">Percorso schematico, non in scala.</p>}
    </div>
  )
}
