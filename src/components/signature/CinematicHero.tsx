import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { PuntoTappa } from './geo'
import { BenHero } from '@/components/ben/BenHero'

/**
 * Apertura della Home, Stile A "Ghat": hero diviso. A sinistra un titolo
 * grotesk pesante (le ultime parole in rosso), sottotitolo e una sola azione
 * piena; a destra una fotografia vera a tutta altezza, con il credito sotto.
 * Niente video in loop né linea di rotta decorativa: la foto fa il lavoro.
 * Statico, quindi nessun problema con `prefers-reduced-motion`.
 */
export const HERO_FOTO = {
  src: '/images/copertine/lofoten-estate-2025.jpg',
  alt: 'Il campo da calcio di Henningsvær, alle Lofoten, tra il mare e le montagne',
  luogo: 'Henningsvær, Lofoten',
  autore: 'Cappo80',
  licenza: 'CC BY-SA 4.0',
  fonteUrl: 'https://commons.wikimedia.org/wiki/File:Campo_da_calcio_di_Henningsvaer.JPG',
}

/** Divide la tagline: le ultime tre parole vanno in rosso. */
function dividiTagline(tagline: string): [string, string] {
  const parole = tagline.split(' ')
  if (parole.length < 5) return [tagline, '']
  return [parole.slice(0, -3).join(' '), parole.slice(-3).join(' ')]
}

export function CinematicHero({
  tagline,
  subtext,
}: {
  tagline: string
  subtext: string
  routeTappe?: PuntoTappa[]
}) {
  const [inizio, fine] = dividiTagline(tagline)

  return (
    <section className="grid border-b-2 border-ink lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="flex flex-col justify-end px-4 pb-12 pt-10 sm:px-8 lg:px-12 lg:pb-16 lg:pt-24">
        <h1 className="max-w-[14ch] font-display text-[clamp(2.75rem,7vw,6.75rem)] text-balance text-ink">
          {inizio} {fine && <span className="text-rosso">{fine}</span>}
        </h1>
        <p className="mt-7 max-w-[34ch] text-lg leading-relaxed text-stone sm:text-xl">{subtext}</p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/viaggi"
            className="inline-flex min-h-12 items-center gap-2 bg-rosso px-6 py-3 text-[0.95rem] font-semibold text-cream transition-colors duration-150 hover:bg-rosso-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
          >
            Scopri gli itinerari
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/destinazioni"
            className="text-[0.95rem] font-semibold text-ink underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-rosso"
          >
            Sfoglia per Paese
          </Link>
        </div>
      </div>

      <figure className="relative m-0 flex flex-col">
        <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:flex-1">
          <Image
            src={HERO_FOTO.src}
            alt={HERO_FOTO.alt}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
          />
          <BenHero />
        </div>
        <figcaption className="px-4 py-3 text-xs text-stone sm:px-8 lg:px-4">
          {HERO_FOTO.luogo}. Foto:{' '}
          <a href={HERO_FOTO.fonteUrl} className="underline underline-offset-2 hover:text-rosso" rel="noopener noreferrer" target="_blank">
            {HERO_FOTO.autore}
          </a>
          , {HERO_FOTO.licenza}
        </figcaption>
      </figure>
    </section>
  )
}
