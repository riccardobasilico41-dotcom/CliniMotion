import type { CervicalAnalysisResult } from '@/types/database'

interface Props {
  results: CervicalAnalysisResult[] | null
  onRestart: () => void
}

const confidenceColor: Record<string, string> = {
  alta: 'text-cm-good',
  media: 'text-cm-warn',
  bassa: 'text-cm-danger',
}

const movementLabel: Record<string, string> = {
  rotazione_dx: 'Rotazione destra',
  rotazione_sx: 'Rotazione sinistra',
  lat_flessione_dx: 'Flessione laterale dx',
  lat_flessione_sx: 'Flessione laterale sx',
  flessione: 'Flessione',
  estensione: 'Estensione',
}

export function ResultsPanel({ results, onRestart }: Props) {
  if (!results || results.length === 0) {
    return (
      <div className="space-y-3">
        <p className="text-cm-warn">
          Dato insufficiente per l'analisi. Il test è stato troppo breve o l'acquisizione non è
          stata valida — riprova assicurandoti che viso e spalle restino visibili.
        </p>
        <button
          onClick={onRestart}
          className="px-4 py-2 rounded bg-cm-brass text-cm-bg font-medium tracking-wide"
        >
          Riprova
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {results.map((r) => (
          <div
            key={r.movimento}
            className="bg-cm-panel border border-cm-panelBorder rounded p-4 space-y-2"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-xs uppercase tracking-wider text-cm-textDim">
                {movementLabel[r.movimento] ?? r.movimento}
              </p>
              <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm border border-cm-warn/40 text-cm-warn/90 shrink-0">
                {r.status}
              </span>
            </div>

            <div className="h-px bg-gradient-to-r from-cm-brass/70 to-transparent" />

            <p className="cm-mono text-4xl font-medium text-cm-data leading-none">
              {r.romGradi}
              <span className="text-lg text-cm-textDim align-top">°</span>
            </p>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className={confidenceColor[r.confidence]}>
                qualità: {r.confidence}
              </span>
              {r.asimmetriaPercent !== null && (
                <span className="text-cm-textDim cm-mono">Δ {r.asimmetriaPercent}%</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-cm-textDim italic border-l-2 border-cm-brass/50 pl-3">
        {results[0]?.nota}
      </p>

      <button
        onClick={onRestart}
        className="px-4 py-2 rounded bg-cm-brass text-cm-bg font-medium tracking-wide"
      >
        Nuovo test
      </button>
    </div>
  )
}
