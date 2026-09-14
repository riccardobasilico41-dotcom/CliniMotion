import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { FieldDossier } from './FieldDossier'
import { getContinente } from '@/lib/utils'
import type { Viaggio } from '@/lib/viaggi'
import type { CopertinaViaggio } from '@/content/viaggi-copertine'

/**
 * Archivio visivo: scorrimento orizzontale nativo (scroll-snap, nessun
 * hijack dello scroll verticale) attraverso i viaggi recenti. Le tessere con
 * una copertina reale e quelle senza (Field Dossier) stanno nello stesso
 * ritmo, stessa dimensione: una copertina mancante non deve leggersi come
 * "la versione rotta" della tessera con foto.
 */
export function VisualArchive({
  viaggi,
  copertine,
}: {
  viaggi: Viaggio[]
  copertine: Record<string, CopertinaViaggio>
}) {
  return (
    <section className="border-t border-alpine/10 py-24 sm:py-32">
      <Container className="mb-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl font-display text-3xl font-medium leading-tight text-balance text-alpine sm:text-4xl">
            L&apos;archivio dei viaggi
          </h2>
          <Link
            href="/viaggi"
            className="group inline-flex items-center gap-2 text-sm font-medium text-rosso hover:underline"
          >
            Vedi tutti i viaggi
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>

      <Reveal>
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 pl-6 sm:pl-8 [scrollbar-width:thin]">
          {viaggi.map((viaggio) => {
            const continente = getContinente(viaggio.categorie)
            const copertina = copertine[viaggio.slug]
            return (
              <Link
                key={viaggio.slug}
                href={`/viaggi/${viaggio.slug}`}
                className="group relative flex h-[26rem] w-[19rem] shrink-0 snap-start flex-col overflow-hidden rounded-none border border-alpine/10 transition-shadow duration-150 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine focus-visible:ring-offset-2 sm:w-[22rem]"
              >
                {copertina ? (
                  <>
                    <Image
                      src={copertina.immagine}
                      alt={copertina.imageAlt}
                      fill
                      sizes="(min-width: 640px) 22rem, 19rem"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="relative z-10 mt-auto p-6 text-cream">
                      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-cream/70">
                        {continente}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-medium leading-tight">{viaggio.titolo}</h3>
                      <p className="mt-2 text-sm text-cream/70">{viaggio.durataBreve}</p>
                    </div>
                  </>
                ) : (
                  <FieldDossier
                    tone="dark"
                    size="lg"
                    eyebrow={continente}
                    titolo={viaggio.titolo}
                    meta={viaggio.durataBreve}
                    className="h-full"
                  />
                )}
              </Link>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
