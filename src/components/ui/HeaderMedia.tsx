'use client'

import Image from 'next/image'
import { useReducedMotion } from 'motion/react'

export type Media =
  | { tipo: 'foto'; src: string; alt: string }
  | { tipo: 'video'; src: string; poster: string }

/**
 * Riempie il riquadro destro di `PageHeader`: foto vera oppure video muto in loop.
 * `prefers-reduced-motion`: niente autoplay, resta il fotogramma fermo (`poster`).
 */
export function HeaderMedia({ media }: { media: Media }) {
  const reduceMotion = useReducedMotion()

  if (media.tipo === 'foto') {
    return (
      <Image
        src={media.src}
        alt={media.alt}
        fill
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
        className="object-cover"
      />
    )
  }
  if (reduceMotion) {
    // eslint-disable-next-line @next/next/no-img-element -- fotogramma fermo del video, decorativo
    return <img src={media.poster} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
  }
  return (
    <video
      aria-hidden="true"
      autoPlay
      loop
      muted
      playsInline
      poster={media.poster}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src={media.src} type="video/mp4" />
    </video>
  )
}
