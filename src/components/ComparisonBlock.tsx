import { Check, X, ArrowRight } from 'lucide-react'
import type { Confronto } from '@/lib/types'
import { Reveal } from './Reveal'

/**
 * Confronto tra opzioni alternative: una scheda per opzione, con pro, contro e
 * "per chi è". Sta in colonna su mobile e in griglia da tablet in su, perché
 * un confronto a tabella sotto i 700px diventa illeggibile.
 */
export function ComparisonBlock({ confronto }: { confronto: Confronto }) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-alpine/15 bg-cream-dark/40 p-6 sm:p-8">
        <h3 className="font-display text-2xl text-alpine">{confronto.titolo}</h3>
        <p className="mt-3 text-base leading-relaxed text-stone">{confronto.introduzione}</p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {confronto.opzioni.map((opzione) => (
            <div key={opzione.nome} className="flex flex-col rounded-xl border border-alpine/10 bg-white p-5">
              <h4 className="font-display text-lg font-medium text-alpine">{opzione.nome}</h4>
              <p className="mt-2 text-sm leading-relaxed text-stone">{opzione.sintesi}</p>

              {(opzione.costo || opzione.durata) && (
                <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 border-y border-alpine/10 py-3 text-sm">
                  {opzione.durata && (
                    <div>
                      <dt className="text-xs font-semibold uppercase tracking-wider text-stone/60">Durata</dt>
                      <dd className="mt-0.5 text-ink">{opzione.durata}</dd>
                    </div>
                  )}
                  {opzione.costo && (
                    <div className="min-w-0 flex-1">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-stone/60">Costo</dt>
                      <dd className="mt-0.5 text-ink">{opzione.costo}</dd>
                    </div>
                  )}
                </dl>
              )}

              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone">
                {opzione.pro.map((voce) => (
                  <li key={voce} className="flex gap-2">
                    <Check size={15} className="mt-0.5 shrink-0 text-alpine" aria-hidden />
                    <span>
                      <span className="sr-only">Pro: </span>
                      {voce}
                    </span>
                  </li>
                ))}
                {opzione.contro.map((voce) => (
                  <li key={voce} className="flex gap-2">
                    <X size={15} className="mt-0.5 shrink-0 text-rosso" aria-hidden />
                    <span>
                      <span className="sr-only">Contro: </span>
                      {voce}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-auto pt-4 text-sm text-stone">
                <span className="font-medium text-ink">Per chi: </span>
                {opzione.perChi}
              </p>
            </div>
          ))}
        </div>

        {confronto.raccomandazione && (
          <p className="mt-6 flex gap-2 rounded-xl border border-rosso/20 bg-rosso/5 p-5 text-base leading-relaxed text-stone">
            <ArrowRight size={17} className="mt-1 shrink-0 text-rosso" aria-hidden />
            <span>
              <span className="font-medium text-rosso-dark">In sintesi: </span>
              {confronto.raccomandazione}
            </span>
          </p>
        )}
      </div>
    </Reveal>
  )
}
