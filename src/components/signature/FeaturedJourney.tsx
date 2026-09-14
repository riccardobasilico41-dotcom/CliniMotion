'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { RouteLine } from './RouteLine'
import type { PuntoTappa } from './geo'

gsap.registerPlugin(ScrollTrigger)

export type BeatViaggio = {
  eyebrow: string
  contenuto: React.ReactNode
}

/**
 * Racconto in scena fissa del viaggio in evidenza: tre battute (apertura →
 * percorso → giorno più forte) che si alternano mentre la sezione resta
 * ancorata a schermo per un tratto di scroll. Motivazione dell'animazione:
 * imita il ritmo di uno storytelling a capitoli invece di far scorrere tre
 * blocchi in sequenza — è l'unico punto del sito che usa il pin dello
 * scroll, perché è l'unico caso in cui il pin comunica qualcosa (la
 * sensazione di "un unico viaggio in tre atti") che uno scroll normale no.
 *
 * Il pin è attivo solo da `lg` in su e solo senza `prefers-reduced-motion`:
 * sotto quella soglia (mobile, o riduzione del movimento richiesta) le tre
 * battute si leggono in sequenza normale, senza alcun pin — non è l'effetto
 * desktop "disattivato", è la versione dell'esperienza pensata per quel
 * contesto.
 */
export function FeaturedJourney({
  titolo,
  href,
  tappe,
  paeseSlug,
  battute,
}: {
  titolo: string
  href: string
  tappe: PuntoTappa[]
  paeseSlug?: string
  battute: [BeatViaggio, BeatViaggio, BeatViaggio]
}) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const beatRefs = useRef<(HTMLDivElement | null)[]>([])
  const [pinAttivo, setPinAttivo] = useState(false)

  useEffect(() => {
    if (!wrapperRef.current) return

    const mm = gsap.matchMedia()

    mm.add(
      { pinnable: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)' },
      (context) => {
        const { pinnable } = context.conditions as { pinnable: boolean }
        if (!pinnable) {
          setPinAttivo(false)
          return
        }
        setPinAttivo(true)

        const ctx = gsap.context(() => {
          const beats = beatRefs.current.filter((b): b is HTMLDivElement => b !== null)
          gsap.set(beats.slice(1), { autoAlpha: 0, y: 24 })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top top',
              end: `+=${beats.length * 90}%`,
              pin: true,
              scrub: 0.6,
            },
          })

          beats.forEach((beat, i) => {
            if (i === 0) return
            tl.to(beats[i - 1], { autoAlpha: 0, y: -24, duration: 0.4 }, i - 0.5)
            tl.to(beat, { autoAlpha: 1, y: 0, duration: 0.4 }, i - 0.5)
          })
        }, wrapperRef)

        return () => ctx.revert()
      }
    )

    return () => mm.revert()
  }, [])

  return (
    <section className="border-t border-alpine/10 bg-cream-dark/40">
      <Container className="py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Il viaggio in evidenza</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight text-balance text-alpine sm:text-4xl">
          {titolo}
        </h2>
      </Container>

      <div ref={wrapperRef} className={pinAttivo ? 'relative h-[270vh]' : 'relative'}>
        <div className={pinAttivo ? 'sticky top-0 flex min-h-[100dvh] items-center overflow-hidden' : 'space-y-16 py-4'}>
          <Container className="w-full">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
              <div className={pinAttivo ? 'relative' : 'space-y-12'}>
                {battute.map((beat, i) => (
                  <div
                    key={beat.eyebrow}
                    ref={(el) => {
                      beatRefs.current[i] = el
                    }}
                    className={pinAttivo && i > 0 ? 'absolute inset-x-0 top-0' : ''}
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone/50">{beat.eyebrow}</p>
                    <div className="mt-4">{beat.contenuto}</div>
                  </div>
                ))}
              </div>

              <div className="text-stone">
                <RouteLine
                  tappe={tappe}
                  paeseSlug={paeseSlug}
                  strokeClassName="stroke-alpine/50"
                  labelClassName="text-alpine"
                  className="h-40"
                />
              </div>
            </div>

            <Link
              href={href}
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-rosso hover:text-rosso-dark"
            >
              Leggi l&apos;itinerario completo
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Container>
        </div>
      </div>
    </section>
  )
}
