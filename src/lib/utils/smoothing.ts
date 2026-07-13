export function round(value: number, decimals = 1): number {
  const factor = 10 ** decimals
  return Math.round(value * factor) / factor
}

export function asymmetryPercent(a: number, b: number): number | null {
  const max = Math.max(a, b)
  if (max === 0) return null
  return round((Math.abs(a - b) / max) * 100)
}

/**
 * Smoothing esponenziale semplice per ridurre jitter frame-to-frame
 * senza introdurre troppa latenza percepita.
 */
export class ExponentialSmoother {
  private alpha: number
  private value: number | null = null

  constructor(alpha = 0.3) {
    this.alpha = alpha
  }

  next(sample: number): number {
    this.value = this.value === null ? sample : this.alpha * sample + (1 - this.alpha) * this.value
    return this.value
  }

  reset() {
    this.value = null
  }
}

/**
 * Rimuove scatti frame-a-frame fisicamente impossibili (tracking perso per
 * un istante): se un valore cambia più di maxJump rispetto all'ultimo
 * valore accettato, viene sostituito con quest'ultimo invece di essere
 * usato così com'è. Riduce il rischio che un singolo frame rumoroso
 * "spari" un picco anomalo nel risultato finale.
 */
export function rejectOutlierJumps(values: number[], maxJump: number): number[] {
  if (values.length === 0) return []
  const out: number[] = [values[0]]
  for (let i = 1; i < values.length; i++) {
    const prev = out[i - 1]
    const curr = values[i]
    out.push(Math.abs(curr - prev) > maxJump ? prev : curr)
  }
  return out
}

/**
 * Applica smoothing esponenziale a un'intera serie (non solo streaming
 * live) - usato per estrarre il picco "sostenuto" invece del massimo
 * istantaneo, che può essere un singolo frame rumoroso.
 */
export function smoothSeries(values: number[], alpha = 0.3): number[] {
  const smoother = new ExponentialSmoother(alpha)
  return values.map((v) => smoother.next(v))
}

/**
 * Cerca la finestra più "quieta" (minima deviazione standard) tra i primi
 * N campioni di una serie, invece di assumere ciecamente che i primi
 * `windowSize` frame siano a postura neutra. Più robusto se il paziente
 * si sta ancora sistemando all'inizio della registrazione.
 */
export function findQuietBaseline(values: number[], windowSize = 5, searchFirstN = 20): number {
  const n = Math.min(searchFirstN, values.length)
  if (n < windowSize) {
    const slice = values.slice(0, Math.max(1, n))
    return slice.reduce((a, b) => a + b, 0) / slice.length
  }

  let bestMean = values.slice(0, windowSize).reduce((a, b) => a + b, 0) / windowSize
  let bestStd = Infinity

  for (let start = 0; start <= n - windowSize; start++) {
    const window = values.slice(start, start + windowSize)
    const mean = window.reduce((a, b) => a + b, 0) / windowSize
    const variance = window.reduce((a, b) => a + (b - mean) ** 2, 0) / windowSize
    const std = Math.sqrt(variance)
    if (std < bestStd) {
      bestStd = std
      bestMean = mean
    }
  }

  return bestMean
}
