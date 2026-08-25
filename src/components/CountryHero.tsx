import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from './ui/Container'
import { Reveal } from './Reveal'
import type { Paese } from '@/lib/types'

/* Hallmark · macrostructure: 08 Photographic (Paese hub variant) · genre: editorial
 * Replaces the previous radial-gradient "aurora-blob" background + per-word
 * fade-in headline + boxed "Foto in arrivo" placeholder with a real country
 * photograph doing the work, matching the Home hero. Falls back to a plain
 * dark surface (no gradient) when a Paese has no heroImage yet — never a
 * gradient standing in for a missing photo. See design.md. */
export function CountryHero({
  paese,
  tripHref,
  destinazioniHref,
}: {
  paese: Paese
  tripHref: string
  destinazioniHref: string
}) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden bg-alpine-dark sm:min-h-[60vh]">
      {paese.heroImage && (
        <>
          <Image
            src={paese.heroImage}
            alt={paese.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-alpine-dark/90 via-alpine-dark/25 to-alpine-dark/10" />
        </>
      )}
      <Container className="relative z-10 pb-10 sm:pb-14">
        <Reveal>
          <h1 className="font-display text-4xl font-medium leading-[1.05] text-cream sm:text-5xl">{paese.nome}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">{paese.descrizione}</p>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href={tripHref}
              className="inline-flex items-center gap-2 rounded-full bg-rosso px-6 py-3 text-sm font-medium text-cream transition-colors duration-150 hover:bg-rosso-dark"
            >
              Scopri il mio itinerario
              <ArrowRight size={15} />
            </Link>
            <Link
              href={destinazioniHref}
              className="group inline-flex items-center gap-2 text-sm font-medium text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
            >
              Esplora le destinazioni
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-cream/15 pt-7 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-cream/50">Periodo migliore</dt>
              <dd className="mt-1.5 text-sm text-cream/85">{paese.periodoMigliore}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-cream/50">Durata consigliata</dt>
              <dd className="mt-1.5 text-sm text-cream/85">{paese.durataConsigliata}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-cream/50">Budget indicativo</dt>
              <dd className="mt-1.5 text-sm text-cream/85">{paese.budgetIndicativo}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-cream/50">Stile di viaggio</dt>
              <dd className="mt-1.5 text-sm text-cream/85">{paese.stileViaggio.join(' · ')}</dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
