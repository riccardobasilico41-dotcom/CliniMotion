import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'

type Statistica = { valore: number; etichetta: string }

/**
 * Sezione identità/manifesto: il paragrafo reale del sito (non nuovo copy)
 * accostato ai numeri dell'archivio, trattati come elementi grafici di scala
 * diversa invece che in quattro riquadri identici — l'asimmetria qui non è
 * decorativa, riflette il fatto che i quattro numeri hanno pesi diversi
 * (itinerari raccontati è il numero che conta di più: prende la scala più
 * grande).
 */
export function Manifesto({
  paragrafoPrincipale,
  paragrafoSecondario,
  statistiche,
}: {
  paragrafoPrincipale: string
  paragrafoSecondario: string
  statistiche: [Statistica, Statistica, Statistica, Statistica]
}) {
  const [principale, ...resto] = statistiche

  return (
    <section className="border-t border-alpine/10 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <p className="max-w-xl text-lg leading-relaxed text-stone sm:text-xl">{paragrafoPrincipale}</p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-stone">{paragrafoSecondario}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative lg:pl-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-7xl font-medium leading-none text-alpine sm:text-8xl">
                  {principale.valore}
                </span>
                <span className="max-w-[8rem] text-xs font-semibold uppercase tracking-[0.18em] text-stone/70">
                  {principale.etichetta}
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6 border-t border-alpine/10 pt-8 sm:ml-10">
                {resto.map((s) => (
                  <div key={s.etichetta} className="flex items-baseline gap-2.5">
                    <span className="font-display text-3xl font-medium leading-none text-alpine sm:text-4xl">
                      {s.valore}
                    </span>
                    <span className="max-w-[6rem] text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-stone/60">
                      {s.etichetta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
