import { ArrowUpRight } from 'lucide-react'
import type { SchedaPaese } from '@/lib/types'
import { Reveal } from './Reveal'

type Blocco = { titolo: string; voci: { label: string; valore?: string }[] }

/**
 * Scheda pratica di Paese, divisa nei tre momenti in cui servono davvero le
 * informazioni: prima di partire, una volta sul posto, e le cose da sapere
 * comunque. Le voci senza valore vengono semplicemente omesse.
 */
export function CountrySheet({ scheda }: { scheda: SchedaPaese }) {
  const blocchi: Blocco[] = [
    {
      titolo: 'Prima di partire',
      voci: [
        { label: 'Documenti e visto', valore: scheda.documenti },
        { label: 'Salute e vaccinazioni', valore: scheda.salute },
        { label: 'Valuta', valore: scheda.valuta },
        { label: 'Pagamenti e contanti', valore: scheda.pagamenti },
      ],
    },
    {
      titolo: 'Una volta sul posto',
      voci: [
        { label: 'Trasporti interni', valore: scheda.trasportiInterni },
        { label: 'SIM e connettività', valore: scheda.connettivita },
        { label: 'Quanto costa', valore: scheda.costoVita },
        { label: 'Lingua', valore: scheda.lingua },
        { label: 'Elettricità e prese', valore: scheda.elettricita },
        { label: 'Fuso orario', valore: scheda.fusoOrario },
      ],
    },
    {
      titolo: 'Da sapere comunque',
      voci: [
        { label: 'Sicurezza', valore: scheda.sicurezza },
        { label: 'Clima e stagioni', valore: scheda.clima },
        { label: 'Feste e date da segnare', valore: scheda.festivita },
        { label: 'Numeri utili', valore: scheda.emergenze },
      ],
    },
  ]

  return (
    <div className="mt-10 space-y-12">
      {blocchi.map((blocco) => {
        const voci = blocco.voci.filter((v) => v.valore)
        if (voci.length === 0) return null

        return (
          <Reveal key={blocco.titolo}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{blocco.titolo}</h3>
            <dl className="mt-4 grid gap-4 sm:grid-cols-2">
              {voci.map((voce) => (
                <div key={voce.label} className="rounded-xl border border-alpine/10 bg-white p-5">
                  <dt className="font-display text-base text-alpine">{voce.label}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-stone">{voce.valore}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )
      })}

      <p className="flex items-start gap-1.5 text-xs text-stone/60">
        <ArrowUpRight size={12} className="mt-0.5 shrink-0" />
        Scheda verificata a {scheda.aggiornatoAl}. Regole d&apos;ingresso, prezzi e livelli di sicurezza cambiano:
        controlla sempre le fonti ufficiali del tuo paese prima di partire.
      </p>
    </div>
  )
}
