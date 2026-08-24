import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Clock3 } from 'lucide-react'
import type { Esperienza } from '@/lib/types'
import { PersonalVerdict } from './ui/PersonalVerdict'

export function ExperienceCard({ esperienza, paeseSlug }: { esperienza: Esperienza; paeseSlug: string }) {
  return (
    <Link
      href={`/esperienze/${paeseSlug}/${esperienza.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-alpine/10 bg-white transition-[box-shadow,transform] duration-150 ease-out hover:shadow-lg active:scale-[0.99] motion-reduce:active:scale-100"
    >
      {esperienza.immagine && (
        <div className="relative h-36 overflow-hidden">
          <Image
            src={esperienza.immagine}
            alt={esperienza.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-medium leading-tight text-alpine">{esperienza.nome}</h3>
          <PersonalVerdict giudizio={esperienza.giudizio} className="shrink-0" />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone/70">
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} /> {esperienza.localita}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 size={13} /> {esperienza.durata}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-stone">{esperienza.percheFarla}</p>
        <span className="mt-auto inline-flex items-center pt-1 text-sm font-medium text-rosso">
          Scopri l&apos;esperienza
        </span>
      </div>
    </Link>
  )
}
