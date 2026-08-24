import Link from 'next/link'
import { ArrowUpRight, Compass, Mountain, TreePalm, Landmark, Sun, Waves } from 'lucide-react'
import type { Viaggio } from '@/lib/viaggi'
import { getContinente } from '@/lib/viaggi'
import { FeaturedBorderTrail } from './FeaturedBorderTrail'

const GRADIENTS: Record<string, string> = {
  Europa: 'from-[#2c4a6b] to-[#0f2439]',
  Africa: 'from-[#b5652b] to-[#5e2f11]',
  'Nord America': 'from-[#1f5c56] to-[#0b2624]',
  'America Centrale': 'from-[#2f6b3f] to-[#123018]',
  'Medio Oriente': 'from-[#a8672f] to-[#4a2a10]',
  Asia: 'from-[#7a2e4e] to-[#33111e]',
}

const ICONS: Record<string, typeof Compass> = {
  Europa: Landmark,
  Africa: Sun,
  'Nord America': Mountain,
  'America Centrale': TreePalm,
  'Medio Oriente': Waves,
  Asia: Mountain,
}

function gradientFor(continente: string) {
  return GRADIENTS[continente] ?? 'from-alpine to-alpine-dark'
}

function iconFor(continente: string) {
  return ICONS[continente] ?? Compass
}

export function TripCard({ viaggio, featured = false }: { viaggio: Viaggio; featured?: boolean }) {
  const continente = getContinente(viaggio.categorie)
  const Icon = iconFor(continente)

  return (
    <Link
      href={`/viaggi/${viaggio.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-alpine/10 bg-white transition-[box-shadow,transform] duration-150 ease-out hover:shadow-lg active:scale-[0.99] motion-reduce:active:scale-100"
    >
      {featured && <FeaturedBorderTrail />}
      <div
        className={`relative flex items-end overflow-hidden bg-gradient-to-br p-6 text-cream ${gradientFor(continente)} ${
          featured ? 'min-h-[14rem]' : 'min-h-[9rem]'
        }`}
      >
        <Icon
          size={featured ? 140 : 96}
          strokeWidth={1}
          className="pointer-events-none absolute -right-4 -top-4 text-cream/10 transition-transform duration-700 group-hover:scale-110"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/70">
          {continente}
        </p>
        {viaggio.inLavorazione && (
          <span className="absolute right-4 top-4 rounded-full bg-cream/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream/80 backdrop-blur">
            Racconto in arrivo
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3
          className={`font-display font-medium leading-tight text-alpine ${
            featured ? 'text-2xl' : 'text-lg'
          }`}
        >
          {viaggio.titolo}
        </h3>
        <p className="text-sm leading-relaxed text-stone">{viaggio.descrizione}</p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-xs text-stone/70">
          {viaggio.periodoBreve && <span>{viaggio.periodoBreve}</span>}
          {viaggio.durataBreve && <span>· {viaggio.durataBreve}</span>}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-rosso">
          Leggi l&apos;itinerario
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
