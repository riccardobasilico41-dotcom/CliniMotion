'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { RouteLine } from './RouteLine'
import type { PuntoTappa } from './geo'

/**
 * Apertura cinematica della Home: apertura tipografica su un fondale video
 * (loop muto, 20s, licenza libera — vedi credito in HERO_VIDEO_CREDITO più
 * sotto) invece del solo hero fotografico singolo. Sopra restano la linea di
 * rotta schematica (decorativa, aria-hidden — attraversa Paesi reali
 * dell'archivio, ma senza pretesa di scala) e il titolo, rivelato con una
 * singola maschera al montaggio (non per-parola: un solo gesto comunicativo,
 * non una cascata).
 *
 * `prefers-reduced-motion`: niente video autoplay (è esattamente il tipo di
 * movimento continuo che quella preferenza chiede di evitare) — resta solo
 * il frame fermo del video come immagine di sfondo, stesso trattamento
 * scuro sopra. Il titolo salta dritto allo stato finale.
 */
export const HERO_VIDEO_CREDITO = {
  autore: 'Mixkit',
  licenza: 'Mixkit Stock Video Free License',
  fonteUrl: 'https://mixkit.co/free-stock-video/beautiful-beach-surrounded-by-nature-seen-from-above-5371/',
}

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
      <div className="absolute inset-0">
        {reduceMotion ? (
          // eslint-disable-next-line @next/next/no-img-element -- sfondo decorativo a piena pagina, non serve next/image qui
          <img
            src="/videos/hero-travel-poster.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        ) : (
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/hero-travel-poster.jpg"
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero-travel.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <RouteLine tappe={routeTappe} decorative className="h-full w-full" strokeClassName="stroke-cream/[0.14]" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-alpine-dark via-alpine-dark/65 to-alpine-dark/45" />

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
