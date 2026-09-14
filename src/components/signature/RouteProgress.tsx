'use client'

import { motion, useScroll, useTransform } from 'motion/react'

/**
 * Segnaposto di percorso: sostituisce la barra di avanzamento generica con
 * un piccolo indicatore "Giorno X di N" ancorato a una linea verticale,
 * legato allo scroll del contenitore dei giorni (non a `window.scroll`: usa
 * `useScroll`/`useTransform` di Motion, mai `useState` su un valore continuo
 * — vedi le note tecniche). Non è gated da `prefers-reduced-motion`: riflette
 * direttamente la posizione di scroll, come farebbe una scrollbar nativa,
 * non è un effetto decorativo aggiunto sopra il contenuto.
 */
export function RouteProgress({ totaleGiorni, containerRef }: { totaleGiorni: number; containerRef: React.RefObject<HTMLElement | null> }) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const markerY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const giornoCorrente = useTransform(scrollYProgress, (v) =>
    Math.min(totaleGiorni, Math.max(1, Math.round(v * (totaleGiorni - 1)) + 1))
  )

  return (
    <div className="hidden lg:flex lg:items-start lg:gap-3">
      <div className="relative h-40 w-px shrink-0 bg-alpine/15">
        <motion.div
          aria-hidden="true"
          className="absolute -left-[3px] h-2 w-2 rounded-full bg-rosso"
          style={{ top: markerY }}
        />
      </div>
      <div className="pt-0.5 font-mono text-xs tabular-nums text-stone/60">
        <p>Giorno</p>
        <motion.p className="font-display text-lg text-alpine">{giornoCorrente}</motion.p>
        <p>di {totaleGiorni}</p>
      </div>
    </div>
  )
}
