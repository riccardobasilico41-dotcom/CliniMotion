'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, CalendarDays, Clock3, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { RouteLine } from './RouteLine'
import { codicePaese } from './paese-codici'
import type { PuntoTappa } from './geo'

/**
 * Apertura firmata della pagina viaggio: titolo a scala estrema e una
 * striscia di percorso/coordinate sopra un campo scuro. Priorità dello
 * sfondo: video del viaggio (se in `viaggi-hero-video.ts`) → copertina
 * fotografica reale → tacche cartografiche del Field Dossier applicato a un
 * momento hero invece che a una card.
 *
 * `prefers-reduced-motion`: niente autoplay video — resta solo il suo frame
 * fermo (`video.poster`) come immagine di sfondo, stesso overlay scuro.
 */
export function TripOpener({
  titolo,
  editorialHeadline,
  editorialHook,
  paeseSlug,
  periodoBreve,
  durataBreve,
  compagniBreve,
  tappe,
  inLavorazione,
  copertina,
  video,
}: {
  titolo: string
  /** Titolo da rivista per l'H1: sostituisce `titolo` solo qui (hero), mai in breadcrumb/JSON-LD. Fallback a `titolo` se assente. */
  editorialHeadline?: string
  /** Riga breve sotto l'H1 (curiosità/opinione/utilità) — vedi `HookType` in viaggi-editorial.ts. Nessun rendering se assente. */
  editorialHook?: string
  paeseSlug: string
  periodoBreve?: string
  durataBreve?: string
  compagniBreve?: string
  tappe: PuntoTappa[]
  inLavorazione?: boolean
  copertina?: { immagine: string; imageAlt: string }
  /** Video di sfondo, se il viaggio ne ha uno in `viaggi-hero-video.ts` — ha priorità su `copertina`. */
  video?: { src: string; poster: string }
}) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden border-b border-alpine/10 bg-alpine-dark pb-14 pt-10 text-cream sm:pb-20 sm:pt-14">
      {video ? (
        <>
          {reduceMotion ? (
            // eslint-disable-next-line @next/next/no-img-element -- sfondo decorativo a piena pagina, non serve next/image qui
            <img src={video.poster} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <video
              aria-hidden="true"
              autoPlay
              loop
              muted
              playsInline
              poster={video.poster}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={video.src} type="video/mp4" />
            </video>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-alpine-dark via-alpine-dark/65 to-alpine-dark/45" />
        </>
      ) : copertina ? (
        <>
          <Image
            src={copertina.immagine}
            alt={copertina.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-alpine-dark via-alpine-dark/55 to-alpine-dark/40" />
        </>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full text-cream/[0.06]"
        >
          <path d="M6 24 V6 H24" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <path d="M94 6 H76 V24" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      )}

      <Container className="relative z-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
          <Link href="/" className="hover:text-cream">
            Home
          </Link>
          <span>/</span>
          <Link href="/viaggi" className="hover:text-cream">
            Tutti i viaggi
          </Link>
          <span>/</span>
          <span className="text-cream/85">{titolo}</span>
        </nav>
        <Link
          href="/viaggi"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cream/60 hover:text-cream"
        >
          <ArrowLeft size={13} />
          Tutti i viaggi
        </Link>

        <div className="mt-8 flex items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cream/50">
            {codicePaese(paeseSlug)}
          </span>
          {inLavorazione && (
            <span className="rounded-full bg-cream/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream/70">
              Racconto in arrivo
            </span>
          )}
        </div>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-balance sm:text-7xl lg:text-8xl"
        >
          {editorialHeadline ?? titolo}
        </motion.h1>

        {editorialHook && (
          <p className="mt-4 max-w-2xl font-display text-lg italic leading-relaxed text-cream/80 sm:text-xl">
            {editorialHook}
          </p>
        )}

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/70">
          {periodoBreve && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} /> {periodoBreve}
            </span>
          )}
          {durataBreve && (
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={14} /> {durataBreve}
            </span>
          )}
          {compagniBreve && (
            <span className="inline-flex items-center gap-1.5">
              <Users size={14} /> {compagniBreve}
            </span>
          )}
        </div>

        <div className="mt-10 max-w-2xl border-t border-cream/15 pt-8">
          <RouteLine
            tappe={tappe}
            paeseSlug={paeseSlug}
            strokeClassName="stroke-rosso/70"
            labelClassName="text-cream"
            className="h-24"
          />
        </div>
      </Container>
    </section>
  )
}
