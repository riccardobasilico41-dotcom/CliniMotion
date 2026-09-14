'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { RouteLine } from './RouteLine'
import type { PuntoTappa } from './geo'

/**
 * Apertura cinematica della Home. Sostituisce l'hero fotografico singolo con
 * un'apertura tipografica su campo scuro: una linea di rotta schematica
 * (decorativa, aria-hidden — attraversa Paesi reali dell'archivio, ma senza
 * pretesa di scala) disegnata dietro il titolo, e il titolo stesso rivelato
 * con una singola maschera al montaggio (non per-parola: un solo gesto
 * comunicativo, non una cascata). `prefers-reduced-motion` salta dritto allo
 * stato finale.
 */
export function CinematicHero({
  tagline,
  subtext,
  routeTappe,
}: {
  tagline: string
  subtext: string
  routeTappe: PuntoTappa[]
}) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden bg-alpine-dark pb-14 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <RouteLine tappe={routeTappe} decorative className="h-full w-full" strokeClassName="stroke-cream/[0.14]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-alpine-dark via-alpine-dark/40 to-alpine-dark/10" />

      <Container className="relative z-10">
        <motion.h1
          initial={reduceMotion ? false : { clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          transition={reduceMotion ? { duration: 0 } : { duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-balance text-cream sm:text-7xl lg:text-8xl"
        >
          {tagline}
        </motion.h1>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/70 sm:text-lg">{subtext}</p>
          <Link
            href="/viaggi"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
          >
            Scopri gli itinerari
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
