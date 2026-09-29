'use client'

import Image from 'next/image'
import { useReducedMotion } from 'motion/react'

/**
 * Sfondo dell'hero della pagina Meraviglia: video (se disponibile in
 * `meraviglie-hero-video.ts`) → foto reale (`heroImage`) → niente,
 * stesso ordine di priorità di `TripOpener` per i viaggi.
 *
 * `prefers-reduced-motion`: niente autoplay video — resta solo il suo
 * frame fermo (`video.poster`) come immagine di sfondo.
 */
export function MeravigliaHeroMedia({
  image,
  imageAlt,
  video,
}: {
  image?: string
  imageAlt: string
  video?: { src: string; poster: string }
}) {
  const reduceMotion = useReducedMotion()

  if (video) {
    return reduceMotion ? (
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
    )
  }

  if (image) {
    return <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
  }

  return null
}
