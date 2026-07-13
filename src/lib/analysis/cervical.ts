import type {
  FrameSample,
  CervicalAnalysisResult,
  ConfidenceLevel,
  MetricStatus,
  PoseLandmark,
} from '@/types/database'
import {
  calcEarSpan,
  calcRotationSign,
  earSpanRatioToAngle,
  calcEarLineAngle,
  calcEarShoulderAngle,
  allVisible,
  normalizeAngleDelta,
  checkAnatomicalPlausibility,
} from '@/lib/mediapipe/angles'
import { LM } from '@/lib/mediapipe/landmarks'
import {
  asymmetryPercent,
  round,
  rejectOutlierJumps,
  smoothSeries,
  findQuietBaseline,
} from '@/lib/utils/smoothing'

/**
 * Versione della formula di calcolo per ogni movimento cervicale.
 * v2: metodo geometrico auto-calibrante (sostituisce il coefficiente
 * fisso v1) + rejection scatti, picco sostenuto, baseline robusta,
 * rilevamento compensi. Incrementare quando cambia ancora il metodo,
 * cosi i risultati salvati restano tracciabili rispetto alla versione
 * che li ha prodotti (principio da EVIDENCE_REGISTRY/DATA_MODEL).
 */
const FORMULA_VERSION = 2

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
 * non un dato reale.
 */
const PLAUSIBLE_MAX = {
  rotazione: 95,
  lat_flessione: 55,
  flessione: 70,
  estensione: 90,
} as const

// Scatto massimo plausibile tra due frame consecutivi (gradi). Oltre
// questa soglia si assume perdita di tracking momentanea, non movimento
// reale del paziente - il valore viene scartato (v. rejectOutlierJumps).
const MAX_FRAME_JUMP_DEG = 20

// Soglia oltre la quale un'inclinazione laterale concomitante durante
// un altro movimento viene segnalata come possibile compenso.
const COMPENSATION_THRESHOLD_DEG = 15

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

function compensationNote(tilts: (number | null)[], peakIndex: number): string {
  const validTilts = tilts.filter((t): t is number => t !== null)
  if (validTilts.length < 5 || peakIndex < 0 || tilts[peakIndex] === null) return ''

  const tiltBaseline = findQuietBaseline(validTilts, 5, 20)
  const deviation = Math.abs(normalizeAngleDelta(tilts[peakIndex]! - tiltBaseline))

  if (deviation > COMPENSATION_THRESHOLD_DEG) {
    return ` Possibile compenso: rilevata inclinazione laterale concomitante (~${round(deviation)}°) nel momento del picco - da valutare se movimento intenzionale o compensatorio.`
  }
  return ''
}

/**
 * Analizza una sequenza di frame acquisiti durante il test di rotazione
 * cervicale (il paziente ruota la testa verso dx e sx partendo da neutro).
 *
 * Pipeline: filtro validità/coerenza anatomica → baseline robusta (finestra
 * più quieta, non i primi frame a prescindere) → conversione geometrica
 * distanza-orecchie→angolo → rejection scatti impossibili → smoothing
 * (picco sostenuto, non istantaneo) → controllo compenso laterale.
 */
export function analyzeCervicalRotation(
  frames: FrameSample[]
): CervicalAnalysisResult[] | null {
  if (frames.length < 5) return null

  const spans: number[] = []
  const signs: number[] = []
  const tilts: (number | null)[] = []
  let validCount = 0

  for (const frame of frames) {
    const span = calcEarSpan(frame.landmarks)
    const sign = calcRotationSign(frame.landmarks)
    if (span !== null && sign !== null && checkAnatomicalPlausibility(frame.landmarks)) {
      spans.push(span)
      signs.push(sign)
      tilts.push(calcEarLineAngle(frame.landmarks))
      validCount++
    }
  }

  if (spans.length < 5) return null

  // baseline robusta: cerca la finestra più stabile tra i primi frame,
  // invece di assumere che i primi 5 in assoluto siano a postura neutra
  const baselineSpan = findQuietBaseline(spans, 5, 20)

  const rawSignedAngle = spans.map((span, i) => {
    const angle = earSpanRatioToAngle(span, baselineSpan)
    return signs[i] < 0 ? -angle : angle // negativo = rotazione dx (mirror webcam)
  })

  const jumpFiltered = rejectOutlierJumps(rawSignedAngle, MAX_FRAME_JUMP_DEG)
  const smoothed = smoothSeries(jumpFiltered, 0.3)

  let peakDxIdx = 0
  let peakSxIdx = 0
  for (let i = 0; i < smoothed.length; i++) {
    if (smoothed[i] < smoothed[peakDxIdx]) peakDxIdx = i
    if (smoothed[i] > smoothed[peakSxIdx]) peakSxIdx = i
  }

  const destra = Math.max(0, -smoothed[peakDxIdx])
  const sinistra = Math.max(0, smoothed[peakSxIdx])
  const asimmetria = asymmetryPercent(destra, sinistra)
  const { level, score } = confidenceFromValidRatio(validCount, frames.length)

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
    notaBase + notaConfidence + compensationNote(tilts, peakDxIdx)
  )
  const sxCap = applyPlausibilityCap(
    sinistra,
    PLAUSIBLE_MAX.rotazione,
    level,
    score,
    notaBase + notaConfidence + compensationNote(tilts, peakSxIdx)
  )

  return [
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
}

/**
 * Verifica preliminare rapida: controlla se il primo frame ha visibilità
 * sufficiente su volto/spalle prima di avviare la registrazione del test,
 * e che la scena abbia senso anatomico (naso sopra le spalle).
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
 * della linea tra le due orecchie rispetto all'orizzontale.
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

  const baseline = findQuietBaseline(angles, 5, 20)
  const deviations = angles.map((a) => normalizeAngleDelta(a - baseline))
  const jumpFiltered = rejectOutlierJumps(deviations, MAX_FRAME_JUMP_DEG)
  const smoothed = smoothSeries(jumpFiltered, 0.3)

  const maxDx = Math.max(...smoothed, 0) // convenzione: positivo = lato dx
  const maxSx = Math.abs(Math.min(...smoothed, 0)) // negativo = lato sx

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

  const baseline = findQuietBaseline(angles, 5, 20)
  const deviations = angles.map((a) => normalizeAngleDelta(a - baseline))
  const jumpFiltered = rejectOutlierJumps(deviations, MAX_FRAME_JUMP_DEG)
  const smoothed = smoothSeries(jumpFiltered, 0.3)

  // deviazione positiva = flessione (capo in avanti), negativa = estensione
  const flessione = Math.max(...smoothed, 0)
  const estensione = Math.abs(Math.min(...smoothed, 0))

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
