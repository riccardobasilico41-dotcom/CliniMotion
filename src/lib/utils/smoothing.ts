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
