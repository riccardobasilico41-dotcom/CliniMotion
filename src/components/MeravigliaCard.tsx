import Link from 'next/link'
import Image from 'next/image'
import { Landmark } from 'lucide-react'
import type { Meraviglia } from '@/lib/types'
import { ContentStatusBadge } from './ui/ContentStatusBadge'

export function MeravigliaCard({ meraviglia }: { meraviglia: Meraviglia }) {
  return (
    <Link
      href={`/meraviglie/${meraviglia.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-alpine/10 bg-white transition-[box-shadow,transform] duration-150 ease-out hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine focus-visible:ring-offset-2 active:scale-[0.99] motion-reduce:active:scale-100"
    >
      <div
        role={meraviglia.heroImage ? undefined : 'img'}
        aria-label={meraviglia.heroImage ? undefined : meraviglia.heroImageAlt}
        className="relative flex min-h-[10rem] items-end overflow-hidden bg-gradient-to-br from-alpine to-alpine-dark p-5 text-cream"
      >
        {meraviglia.heroImage ? (
          <Image
            src={meraviglia.heroImage}
            alt={meraviglia.heroImageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <Landmark
            size={104}
            strokeWidth={1}
            className="pointer-events-none absolute -right-3 -top-3 text-cream/10 transition-transform duration-700 group-hover:scale-110"
          />
        )}
        {meraviglia.heroImage && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
        )}
        {meraviglia.visitataPersonalmente && (
          <ContentStatusBadge stato="provato" className="absolute right-4 top-4 z-10" />
        )}
        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-cream/70">
          {meraviglia.paese}
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <h3 className="font-display text-xl font-medium leading-tight text-alpine">{meraviglia.nome}</h3>
        <p className="text-sm leading-relaxed text-stone line-clamp-3">{meraviglia.descrizione}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-xs text-stone/70">{meraviglia.citta}</span>
          <span className="text-sm font-medium text-rosso">Guida completa</span>
        </div>
      </div>
    </Link>
  )
}
