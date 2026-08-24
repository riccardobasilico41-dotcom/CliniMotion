import Link from 'next/link'
import { Waves, Trees, Landmark, Music, Compass } from 'lucide-react'
import type { Destinazione } from '@/lib/types'
import { ContentStatusBadge } from './ui/ContentStatusBadge'

const TIPOLOGIA_ICON: Record<string, typeof Waves> = {
  mare: Waves,
  natura: Trees,
  cultura: Landmark,
  nightlife: Music,
}

const TIPOLOGIA_GRADIENT: Record<string, string> = {
  mare: 'from-[#1f5c56] to-[#0b2624]',
  natura: 'from-[#2f6b3f] to-[#123018]',
  cultura: 'from-[#124a6b] to-[#0a2c40]',
  nightlife: 'from-[#7a2e4e] to-[#33111e]',
}

export function DestinationCard({ destinazione, paeseSlug }: { destinazione: Destinazione; paeseSlug: string }) {
  const tipoPrincipale = destinazione.tipologia[0] ?? 'mare'
  const Icon = TIPOLOGIA_ICON[tipoPrincipale] ?? Compass
  const gradient = TIPOLOGIA_GRADIENT[tipoPrincipale] ?? 'from-alpine to-alpine-dark'

  return (
    <Link
      href={`/destinazioni/${paeseSlug}/${destinazione.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-alpine/10 bg-white transition-[box-shadow,transform] duration-150 ease-out hover:shadow-lg active:scale-[0.99] motion-reduce:active:scale-100"
    >
      <div
        role="img"
        aria-label={destinazione.imageAlt}
        className={`relative flex min-h-[10rem] items-end overflow-hidden bg-gradient-to-br p-5 text-cream ${gradient}`}
      >
        <Icon
          size={104}
          strokeWidth={1}
          className="pointer-events-none absolute -right-3 -top-3 text-cream/10 transition-transform duration-700 group-hover:scale-110"
        />
        {destinazione.visitataPersonalmente && (
          <ContentStatusBadge stato="provato" className="absolute right-4 top-4" />
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/70">
          {destinazione.tipologia.join(' · ')}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        <h3 className="font-display text-lg font-medium leading-tight text-alpine">{destinazione.nome}</h3>
        <p className="text-sm leading-relaxed text-stone">{destinazione.introduzione}</p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-xs text-stone/70">{destinazione.giorniConsigliati}</span>
          <span className="text-sm font-medium text-rosso">Scopri la destinazione</span>
        </div>
      </div>
    </Link>
  )
}
