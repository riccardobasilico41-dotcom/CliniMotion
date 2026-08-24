import type { VoceBudget } from '@/lib/types'

export function BudgetBreakdown({ voci }: { voci: VoceBudget[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-alpine/10 bg-white">
      <table className="w-full text-sm">
        <tbody>
          {voci.map((voce, i) => {
            const isTotale = voce.etichetta.toLowerCase() === 'totale'
            return (
              <tr
                key={voce.etichetta}
                className={`${i !== 0 ? 'border-t border-alpine/10' : ''} ${isTotale ? 'bg-cream-dark/50' : ''}`}
              >
                <td className={`px-5 py-3 ${isTotale ? 'font-semibold text-alpine' : 'text-ink'}`}>
                  {voce.etichetta}
                </td>
                <td
                  className={`px-5 py-3 text-right ${
                    voce.valore ? 'text-ink' : 'italic text-stone/60'
                  } ${isTotale ? 'font-semibold text-alpine' : ''}`}
                >
                  {voce.valore ?? 'da aggiungere'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
