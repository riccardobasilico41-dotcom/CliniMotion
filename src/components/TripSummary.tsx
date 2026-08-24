import { CheckCircle2, AlertTriangle } from 'lucide-react'
import type { Viaggio } from '@/lib/viaggi'
import type { TripMeta } from '@/lib/types'

export function TripSummary({ viaggio, meta }: { viaggio: Viaggio; meta: TripMeta }) {
  const righe: { label: string; value: string }[] = [
    { label: 'Durata', value: viaggio.durata || 'da confermare' },
    { label: 'Ritmo', value: meta.ritmo },
    { label: 'Trasporti', value: meta.trasporti },
    { label: 'Stile', value: meta.stile.join(' · ') },
    { label: 'Budget', value: meta.budgetTotale || 'da completare' },
    { label: 'Periodo del viaggio', value: viaggio.periodo || 'da confermare' },
    { label: 'Adatto a', value: meta.adattoA.join(' · ') },
  ]

  return (
    <div id="scheda-riassuntiva" className="rounded-2xl border border-alpine/10 bg-cream-dark/50 p-6 sm:p-8">
      <h2 className="font-display text-xl text-alpine">Scheda riassuntiva</h2>
      <dl className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {righe.map((r) => (
          <div key={r.label}>
            <dt className="text-xs font-semibold uppercase tracking-wider text-stone/70">{r.label}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-ink">{r.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 grid gap-6 border-t border-alpine/10 pt-6 sm:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-alpine">
            <CheckCircle2 size={14} /> Punti forti
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone">
            {meta.puntiForti.map((p) => (
              <li key={p}>· {p}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rosso">
            <AlertTriangle size={14} /> Principali criticità
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-stone">
            {meta.criticita.map((c) => (
              <li key={c}>· {c}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
