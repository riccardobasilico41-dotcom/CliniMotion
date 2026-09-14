// Helper di proiezione per il linguaggio cartografico di "Signature Editorial".
// Pura (nessuna dipendenza da 'node:fs'), usabile sia da componenti server che client.
//
// Non è una libreria di mappe: non abbiamo dati geografici reali (confini,
// basemap) in questo ambiente, quindi il sistema resta onesto su cosa sta
// disegnando. Due modalità, mai mescolate all'interno dello stesso percorso:
//
// - Punti con lat/lng reali → proiezione equirettangolare semplice, corretta
//   per cluster regionali stretti (una nazione, non il globo). Le coordinate
//   mostrate in UI sono quelle vere.
// - Punti senza lat/lng → layout schematico (tappe in ordine, distribuite su
//   un arco), esplicitamente "non in scala": non finge una posizione che non
//   conosciamo.

export type PuntoTappa = {
  nome: string
  lat?: number
  lng?: number
  destinazioneSlug?: string
}

export type PuntoProiettato = {
  nome: string
  x: number
  y: number
  destinazioneSlug?: string
  coordinateLabel?: string
}

const VIEWBOX = { width: 100, height: 60 }
const PADDING = 12

/** Formatta lat/lng reali in etichetta tipografica, es. "41.90° N, 12.50° E". */
export function formatCoordinate(lat: number, lng: number): string {
  const ns = lat >= 0 ? 'N' : 'S'
  const ew = lng >= 0 ? 'E' : 'O'
  return `${Math.abs(lat).toFixed(2)}° ${ns}, ${Math.abs(lng).toFixed(2)}° ${ew}`
}

/**
 * Proietta una sequenza di tappe in coordinate SVG (viewBox 100×60).
 * Se tutte le tappe hanno lat/lng, usa una proiezione equirettangolare vera
 * (corretta su cluster stretti). Altrimenti distribuisce le tappe in ordine
 * su un arco dolce — un percorso "schematico", dichiaratamente non in scala.
 */
export function proiettaPercorso(tappe: PuntoTappa[]): { punti: PuntoProiettato[]; schematico: boolean } {
  if (tappe.length === 0) return { punti: [], schematico: false }

  const tutteConCoordinate = tappe.every((t) => typeof t.lat === 'number' && typeof t.lng === 'number')

  if (tutteConCoordinate) {
    const lats = tappe.map((t) => t.lat as number)
    const lngs = tappe.map((t) => t.lng as number)
    const latMin = Math.min(...lats)
    const latMax = Math.max(...lats)
    const lngMin = Math.min(...lngs)
    const lngMax = Math.max(...lngs)
    const latSpan = latMax - latMin || 1
    const lngSpan = lngMax - lngMin || 1
    const usableW = VIEWBOX.width - PADDING * 2
    const usableH = VIEWBOX.height - PADDING * 2

    const punti = tappe.map((t) => {
      const x = PADDING + ((t.lng! - lngMin) / lngSpan) * usableW
      // Y invertita: latitudine più alta = più in su nel viewBox.
      const y = PADDING + (1 - (t.lat! - latMin) / latSpan) * usableH
      return {
        nome: t.nome,
        x,
        y,
        destinazioneSlug: t.destinazioneSlug,
        coordinateLabel: formatCoordinate(t.lat!, t.lng!),
      }
    })
    return { punti, schematico: false }
  }

  // Layout schematico: N punti distribuiti su un arco, in ordine di visita.
  const n = tappe.length
  const punti = tappe.map((t, i) => {
    const progress = n === 1 ? 0.5 : i / (n - 1)
    const x = PADDING + progress * (VIEWBOX.width - PADDING * 2)
    const archY = VIEWBOX.height / 2 - Math.sin(progress * Math.PI) * (VIEWBOX.height / 2 - PADDING)
    return { nome: t.nome, x, y: archY, destinazioneSlug: t.destinazioneSlug }
  })
  return { punti, schematico: true }
}

/** Costruisce una path SVG "a curva morbida" (Catmull-Rom → Bézier) tra i punti proiettati. */
export function costruisciPath(punti: PuntoProiettato[]): string {
  if (punti.length === 0) return ''
  if (punti.length === 1) return `M ${punti[0].x} ${punti[0].y}`

  let d = `M ${punti[0].x} ${punti[0].y}`
  for (let i = 0; i < punti.length - 1; i++) {
    const p0 = punti[i === 0 ? 0 : i - 1]
    const p1 = punti[i]
    const p2 = punti[i + 1]
    const p3 = punti[i + 2 < punti.length ? i + 2 : i + 1]
    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
  }
  return d
}

export const ROUTE_VIEWBOX = `0 0 ${VIEWBOX.width} ${VIEWBOX.height}`
