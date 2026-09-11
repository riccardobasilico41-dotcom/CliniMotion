'use client'

import { useMemo, useState } from 'react'
import { TripCard } from './TripCard'
import { RevealGroup, RevealItem } from './Reveal'
import type { Viaggio } from '@/lib/viaggi'
import { getContinente, raggruppaPerContinente } from '@/lib/utils'

const STILI_NOTI = ['mare', 'natura', 'cultura', 'animali', 'avventura', 'nightlife']

function stiliDelViaggio(viaggio: Viaggio): string[] {
  const parole = [...viaggio.categorie, ...viaggio.tags].map((s) => s.toLowerCase())
  return STILI_NOTI.filter((stile) => parole.some((p) => p.includes(stile)))
}

/**
 * Filtri funzionanti per continente e stile di viaggio (derivati da categoria
 * e tag già presenti in ogni file .md, nessun dato nuovo da mantenere), con i
 * risultati sempre divisi per macro-regione.
 * Durata e periodo non sono ancora abbastanza strutturati nel markdown per
 * un filtro affidabile: restano previsti per una prossima iterazione, quando
 * i viaggi avranno campi durata/periodo normalizzati.
 */
export function TripFilters({ viaggi }: { viaggi: Viaggio[] }) {
  const [continente, setContinente] = useState<string>('tutti')
  const [paese, setPaese] = useState<string>('tutti')
  const [stiliAttivi, setStiliAttivi] = useState<string[]>([])

  const continenti = useMemo(
    () => Array.from(new Set(viaggi.map((v) => getContinente(v.categorie)))).sort(),
    [viaggi]
  )

  const paesi = useMemo(
    () => Array.from(new Set(viaggi.map((v) => v.categorie[1]).filter(Boolean))).sort(),
    [viaggi]
  )

  const viaggiConStile = useMemo(
    () => viaggi.map((v) => ({ viaggio: v, stili: stiliDelViaggio(v) })),
    [viaggi]
  )

  const filtrati = viaggiConStile.filter(({ viaggio, stili }) => {
    const passaContinente = continente === 'tutti' || getContinente(viaggio.categorie) === continente
    const passaPaese = paese === 'tutti' || viaggio.categorie[1] === paese
    const passaStile = stiliAttivi.length === 0 || stiliAttivi.every((s) => stili.includes(s))
    return passaContinente && passaPaese && passaStile
  })

  function toggleStile(stile: string) {
    setStiliAttivi((prev) => (prev.includes(stile) ? prev.filter((s) => s !== stile) : [...prev, stile]))
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-stone">
          Continente
          <select
            value={continente}
            onChange={(e) => setContinente(e.target.value)}
            className="rounded-full border border-alpine/20 bg-white px-3 py-1.5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine"
          >
            <option value="tutti">Tutti</option>
            {continenti.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2 text-sm text-stone">
          Paese
          <select
            value={paese}
            onChange={(e) => setPaese(e.target.value)}
            className="rounded-full border border-alpine/20 bg-white px-3 py-1.5 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine"
          >
            <option value="tutti">Tutti</option>
            {paesi.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <div className="flex flex-wrap gap-2">
          {STILI_NOTI.map((stile) => {
            const attivo = stiliAttivi.includes(stile)
            return (
              <button
                key={stile}
                type="button"
                onClick={() => toggleStile(stile)}
                aria-pressed={attivo}
                className={`rounded-full border px-3 py-1.5 text-sm capitalize transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine ${
                  attivo
                    ? 'border-alpine bg-alpine text-cream'
                    : 'border-alpine/20 bg-white text-stone hover:border-alpine/40'
                }`}
              >
                {stile}
              </button>
            )
          })}
        </div>

        {(continente !== 'tutti' || paese !== 'tutti' || stiliAttivi.length > 0) && (
          <button
            type="button"
            onClick={() => {
              setContinente('tutti')
              setPaese('tutti')
              setStiliAttivi([])
            }}
            className="text-sm font-medium text-rosso hover:text-rosso-dark"
          >
            Azzera filtri
          </button>
        )}
      </div>

      <p className="mt-4 text-sm text-stone/70">
        {filtrati.length} {filtrati.length === 1 ? 'viaggio trovato' : 'viaggi trovati'}
      </p>

      {filtrati.length > 0 ? (
        <div className="mt-10 space-y-14">
          {raggruppaPerContinente(filtrati, ({ viaggio }) => getContinente(viaggio.categorie)).map(
            ({ continente, items }) => (
              <div key={continente}>
                <div className="flex items-baseline gap-4 border-b border-alpine/15 pb-3">
                  <h2 className="font-display text-2xl font-medium text-alpine sm:text-3xl">{continente}</h2>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone/60">
                    {items.length} {items.length === 1 ? 'viaggio' : 'viaggi'}
                  </span>
                </div>
                <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
                  {items.map(({ viaggio }) => (
                    <RevealItem key={viaggio.slug}>
                      <TripCard viaggio={viaggio} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            )
          )}
        </div>
      ) : (
        <p className="mt-10 text-sm text-stone">Nessun viaggio corrisponde a questi filtri.</p>
      )}
    </div>
  )
}
