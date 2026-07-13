import type {
  FrameSample,
  CervicalAnalysisResult,
  ConfidenceLevel,
  MetricStatus,
  PoseLandmark,
} from '@/types/database'
import {
  calcHeadRotationRatio,
  romFromRatioSeries,
  calcSmoothnessIndex,
  calcEarLineAngle,
  calcEarShoulderAngle,
  allVisible,
  normalizeAngleDelta,
  checkAnatomicalPlausibility,
} from '@/lib/mediapipe/angles'
import { LM } from '@/lib/mediapipe/landmarks'
import { asymmetryPercent, round } from '@/lib/utils/smoothing'

/**
 * Versione della formula di calcolo per ogni movimento cervicale.
 * Incrementare quando cambia il metodo/coefficiente di conversione,
 * cosi i risultati salvati restano tracciabili rispetto alla versione
 * che li ha prodotti (principio da EVIDENCE_REGISTRY/DATA_MODEL).
 */
const FORMULA_VERSION = 1

/**
 * Nessuna metrica qui e' stata ancora validata contro goniometro reale
 * (vedi VALIDATION_PLAN): tutte restano 'experimental' finche' non passa
 * un confronto analitico con un gold standard e una revisione esplicita.
 */
const METRIC_STATUS: MetricStatus = 'experimental'

/**
 * Soglie di plausibilità fisiologica per adulto sano (fonti generali di
 * letteratura ortopedica/riabilitativa, non normative individuali). Un
 * valore oltre questi limiti è quasi certamente un errore di acquisizione,
 * non un dato reale - anche con landmark visibility alta, come dimostrato
 * da un caso reale con camera puntata altrove.
 */
const PLAUSIBLE_MAX = {
  rotazione: 95,
  lat_flessione: 55,
  flessione: 70,
  estensione: 90,
} as const

function applyPlausibilityCap(
  romGradi: number,
  maxPlausible: number,
  level: ConfidenceLevel,
  score: number,
  nota: string
): { confidence: ConfidenceLevel; confidenceScore: number; nota: string } {
  if (Math.abs(romGradi) > maxPlausible) {
    return {
      confidence: 'bassa',
      confidenceScore: Math.min(score, 0.3),
      nota:
        nota +
        ` Valore (${round(romGradi)}°) fuori dal range fisiologico plausibile (max atteso ~${maxPlausible}°): probabile errore di acquisizione, verificare inquadratura e ripetere il test.`,
    }
  }
  return { confidence: level, confidenceScore: score, nota }
}

function confidenceFromValidRatio(validCount: number, totalCount: number): {
  level: ConfidenceLevel
  score: number
} {
  const score = totalCount === 0 ? 0 : validCount / totalCount
  if (score >= 0.85) return { level: 'alta', score: round(score, 2) }
  if (score >= 0.6) return { level: 'media', score: round(score, 2) }
  return { level: 'bassa', score: round(score, 2) }
}

/**
 * Analizza una sequenza di frame acquisiti durante il test di rotazione
 * cervicale (il paziente ruota la testa verso dx e sx partendo da neutro).
 *
 * Ritorna due risultati (dx, sx) con ROM stimato, asimmetria e confidence.
 * Richiede minimo 3 frame validi, altrimenti ritorna null (dato insufficiente).
 */
export function analyzeCervicalRotation(
  frames: FrameSample[]
): CervicalAnalysisResult[] | null {
  if (frames.length < 3) return null

  const ratios: number[] = []
  const timestamps: number[] = []
  let validCount = 0

  for (const frame of frames) {
    const ratio = calcHeadRotationRatio(frame.landmarks)
    if (ratio !== null && checkAnatomicalPlausibility(frame.landmarks)) {
      ratios.push(ratio)
      timestamps.push(frame.t)
      validCount++
    }
  }

  if (ratios.length < 3) return null

  const { destra, sinistra } = romFromRatioSeries(ratios)
  const asimmetria = asymmetryPercent(destra, sinistra)
  const { level, score } = confidenceFromValidRatio(validCount, frames.length)
  const smoothness = calcSmoothnessIndex(ratios, timestamps)

  const notaBase =
    'Dato da correlare con valutazione clinica diretta. Non costituisce diagnosi.'
  const notaConfidence =
    level === 'bassa'
      ? ' Qualità acquisizione bassa: rieseguire il test con migliore illuminazione/inquadratura.'
      : ''

  const dxCap = applyPlausibilityCap(
    destra,
    PLAUSIBLE_MAX.rotazione,
    level,
    score,
    notaBase + notaConfidence
  )
  const sxCap = applyPlausibilityCap(
    sinistra,
    PLAUSIBLE_MAX.rotazione,
    level,
    score,
    notaBase + notaConfidence
  )

  const results: CervicalAnalysisResult[] = [
    {
      movimento: 'rotazione_dx',
      romGradi: round(destra),
      asimmetriaPercent: asimmetria,
      confidence: dxCap.confidence,
      confidenceScore: dxCap.confidenceScore,
      nota: dxCap.nota,
      formulaVersion: FORMULA_VERSION,
      status: METRIC_STATUS,
    },
    {
      movimento: 'rotazione_sx',
      romGradi: round(sinistra),
      asimmetriaPercent: asimmetria,
      confidence: sxCap.confidence,
      confidenceScore: sxCap.confidenceScore,
      nota: sxCap.nota,
      formulaVersion: FORMULA_VERSION,
      status: METRIC_STATUS,
    },
  ]

  // Smoothness non ancora esposto in UI in questa fase, ma calcolato
  // e disponibile per estensioni future (indice qualità movimento)
  void smoothness

  return results
}

/**
 * Verifica preliminare rapida: controlla se il primo frame ha visibilità
 * sufficiente su volto/spalle prima di avviare la registrazione del test,
 * e che la scena abbia senso anatomico (naso sopra le spalle) - senza
 * questo secondo controllo si può avviare un test su una scena qualsiasi.
 */
export function checkSetupReady(landmarks: PoseLandmark[]): boolean {
  return (
    allVisible(landmarks, [LM.NOSE, LM.LEFT_EYE, LM.RIGHT_EYE]) &&
    checkAnatomicalPlausibility(landmarks)
  )
}

/**
 * Verifica setup per vista laterale (flessione/estensione): richiede
 * almeno un orecchio + spalla omolaterale ben visibili (profilo), e
 * coerenza anatomica di base.
 */
export function checkSetupReadyLateral(landmarks: PoseLandmark[]): boolean {
  const result = calcEarShoulderAngle(landmarks)
  return result !== null && checkAnatomicalPlausibility(landmarks)
}

/**
 * Analizza flessione laterale (dx/sx) da vista FRONTALE, usando l'angolo
 * della linea tra le due orecchie rispetto all'orizzontale. Il primo
 * secondo di frame viene usato come baseline neutra (assunta postura
 * neutra all'inizio della registrazione).
 */
export function analyzeLateralFlexion(frames: FrameSample[]): CervicalAnalysisResult[] | null {
  if (frames.length < 5) return null

  const angles: number[] = []
  let validCount = 0
  for (const frame of frames) {
    const a = calcEarLineAngle(frame.landmarks)
    if (a !== null && checkAnatomicalPlausibility(frame.landmarks)) {
      angles.push(a)
      validCount++
    }
  }
  if (angles.length < 5) return null

  // baseline = media dei primi frame validi (assunti a postura neutra)
  const baselineCount = Math.min(5, angles.length)
  const baseline = angles.slice(0, baselineCount).reduce((a, b) => a + b, 0) / baselineCount

  const deviations = angles.map((a) => normalizeAngleDelta(a - baseline))
  const maxDx = Math.max(...deviations, 0) // convenzione: positivo = lato dx
  const maxSx = Math.abs(Math.min(...deviations, 0)) // negativo = lato sx

  const asimmetria = asymmetryPercent(maxDx, maxSx)
  const { level, score } = confidenceFromValidRatio(validCount, frames.length)
  const nota =
    'Dato da correlare con valutazione clinica diretta. Non costituisce diagnosi.' +
    (level === 'bassa' ? ' Qualità acquisizione bassa: rieseguire il test.' : '')

  const dxCap = applyPlausibilityCap(maxDx, PLAUSIBLE_MAX.lat_flessione, level, score, nota)
  const sxCap = applyPlausibilityCap(maxSx, PLAUSIBLE_MAX.lat_flessione, level, score, nota)

  return [
    {
      movimento: 'lat_flessione_dx',
      romGradi: round(maxDx),
      asimmetriaPercent: asimmetria,
      confidence: dxCap.confidence,
      confidenceScore: dxCap.confidenceScore,
      nota: dxCap.nota,
      formulaVersion: FORMULA_VERSION,
      status: METRIC_STATUS,
    },
    {
      movimento: 'lat_flessione_sx',
      romGradi: round(maxSx),
      asimmetriaPercent: asimmetria,
      confidence: sxCap.confidence,
      confidenceScore: sxCap.confidenceScore,
      nota: sxCap.nota,
      formulaVersion: FORMULA_VERSION,
      status: METRIC_STATUS,
    },
  ]
}

/**
 * Analizza flessione/estensione da vista LATERALE (profilo), usando il
 * Craniovertebral Angle (angolo orecchio-spalla rispetto alla verticale).
 * Baseline neutra presa dai primi frame della registrazione.
 */
export function analyzeFlexionExtension(frames: FrameSample[]): CervicalAnalysisResult[] | null {
  if (frames.length < 5) return null

  const angles: number[] = []
  let validCount = 0
  for (const frame of frames) {
    const result = calcEarShoulderAngle(frame.landmarks)
    if (result !== null && checkAnatomicalPlausibility(frame.landmarks)) {
      angles.push(result.angle)
      validCount++
    }
  }
  if (angles.length < 5) return null

  const baselineCount = Math.min(5, angles.length)
  const baseline = angles.slice(0, baselineCount).reduce((a, b) => a + b, 0) / baselineCount
  const deviations = angles.map((a) => normalizeAngleDelta(a - baseline))
  // negativa = estensione (capo indietro) — dipende dal lato ripreso,
  // ma la baseline neutra normalizza comunque la direzione
  const flessione = Math.max(...deviations, 0)
  const estensione = Math.abs(Math.min(...deviations, 0))

  const { level, score } = confidenceFromValidRatio(validCount, frames.length)
  const nota =
    'Dato da correlare con valutazione clinica diretta. Non costituisce diagnosi.' +
    (level === 'bassa' ? ' Qualità acquisizione bassa: rieseguire il test.' : '')

  const flessCap = applyPlausibilityCap(flessione, PLAUSIBLE_MAX.flessione, level, score, nota)
  const estCap = applyPlausibilityCap(estensione, PLAUSIBLE_MAX.estensione, level, score, nota)

  return [
    {
      movimento: 'flessione',
      romGradi: round(flessione),
      asimmetriaPercent: null,
      confidence: flessCap.confidence,
      confidenceScore: flessCap.confidenceScore,
      nota: flessCap.nota,
      formulaVersion: FORMULA_VERSION,
      status: METRIC_STATUS,
    },
    {
      movimento: 'estensione',
      romGradi: round(estensione),
      asimmetriaPercent: null,
      confidence: estCap.confidence,
      confidenceScore: estCap.confidenceScore,
      nota: estCap.nota,
      formulaVersion: FORMULA_VERSION,
      status: METRIC_STATUS,
    },
  ]
}
