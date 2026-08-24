import Link from 'next/link'
import { ArrowRight, Compass } from 'lucide-react'
import { Container } from './ui/Container'
import { Reveal } from './Reveal'
import { TextEffect } from './motion-primitives/text-effect'
import type { Paese } from '@/lib/types'

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
    <section className="relative overflow-hidden bg-alpine-dark py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(209,69,44,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(18,74,107,0.55), transparent 50%)',
        }}
      />
      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">Guida Paese</p>
            </Reveal>
            <TextEffect
              as="h1"
              per="word"
              preset="fade-in-blur"
              delay={0.15}
              className="mt-5 font-display text-5xl font-medium leading-[1.05] text-cream sm:text-6xl"
            >
              {paese.nome}
            </TextEffect>
            <Reveal delay={0.35}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
                {paese.descrizione}
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={tripHref}
                  className="inline-flex items-center gap-2 rounded-full bg-rosso px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-rosso-dark"
                >
                  Scopri il mio itinerario
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href={destinazioniHref}
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
                >
                  Esplora le destinazioni
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div
              role="img"
              aria-label={paese.heroImageAlt}
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-cream/10 bg-gradient-to-br from-alpine to-alpine-dark"
            >
              <Compass size={72} strokeWidth={1} className="text-cream/15" />
              <span className="absolute bottom-4 left-4 rounded-full bg-cream/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-cream/60 backdrop-blur">
                Foto in arrivo
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.6}>
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-cream/10 pt-8 sm:grid-cols-4">
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
