import type { PoseLandmark } from '@/types/database'
import { LM } from './landmarks'

// Soglia di visibilità landmark: 0.15 (valore validato nella versione precedente,
// soglie più alte causavano troppi falsi negativi in condizioni di luce normali)
// Soglia alzata da 0.15 a 0.6 dopo un caso reale: con soglia bassa il sistema
// accettava rilevamenti spuri di MediaPipe anche quando la camera inquadrava
// una scena completamente sbagliata (es. pavimento), riportando "qualità alta"
// su dati privi di senso. 0.6 e' ancora permissivo ma richiede che MediaPipe
// sia ragionevolmente sicuro del landmark.
const VISIBILITY_THRESHOLD = 0.6

export function allVisible(landmarks: PoseLandmark[], indices: number[]): boolean {
  return indices.every((i) => (landmarks[i]?.visibility ?? 0) >= VISIBILITY_THRESHOLD)
}

/**
 * Calcola il rapporto di rotazione della testa usando il metodo eye-based:
 * posizione del naso relativa al punto medio degli occhi, normalizzata
 * per la distanza tra gli occhi. Metodo scelto perché il fallback
 * shoulder-based saturava a +/-1.0 e perdeva risoluzione a rotazioni ampie.
 */
export function calcHeadRotationRatio(landmarks: PoseLandmark[]): number | null {
  const leftEye = landmarks[LM.LEFT_EYE]
  const rightEye = landmarks[LM.RIGHT_EYE]
  const nose = landmarks[LM.NOSE]

  if (!leftEye || !rightEye || !nose) return null
  if (!allVisible(landmarks, [LM.LEFT_EYE, LM.RIGHT_EYE, LM.NOSE])) return null

  const eyeMidX = (leftEye.x + rightEye.x) / 2
  const eyeSpan = Math.abs(rightEye.x - leftEye.x)
  if (eyeSpan < 1e-6) return null

  // Ratio normalizzato: 0 = neutro, positivo/negativo = rotazione verso un lato
  return (nose.x - eyeMidX) / eyeSpan
}

/**
 * Converte il rapporto di rotazione in gradi ROM stimati.
 * Coefficiente empirico da validare/calibrare per singolo setup camera
 * (vedi nota su calibrazione nel documento di architettura).
 */
export function rotationRatioToROM(ratio: number): number {
  const DEG_PER_RATIO_UNIT = 65 // coefficiente iniziale, da tarare con dati reali
  return Math.abs(ratio) * DEG_PER_RATIO_UNIT
}

/**
 * Data una serie di ratio per una sequenza di movimento, calcola il ROM
 * per lato applicando la correzione per l'effetto mirror della webcam:
 * la webcam restituisce l'immagine specchiata, quindi il ratio negativo
 * corrisponde alla rotazione verso destra del paziente e viceversa.
 */
export function romFromRatioSeries(ratios: number[]): { destra: number; sinistra: number } {
  if (ratios.length === 0) return { destra: 0, sinistra: 0 }
  const minRatio = Math.min(...ratios)
  const maxRatio = Math.max(...ratios)
  return {
    destra: rotationRatioToROM(Math.abs(Math.min(minRatio, 0))),
    sinistra: rotationRatioToROM(Math.max(maxRatio, 0)),
  }
}

/**
 * Normalizza una differenza angolare nell'intervallo (-180, 180].
 * Necessario perché atan2 restituisce valori in (-180,180]: senza questa
 * normalizzazione, un angolo che attraversa il punto ±180° produce
 * differenze assurde (es. 358° invece di 2°). Bug reale scoperto in test
 * reale con acquisizione ravvicinata/inclinata.
 */
export function normalizeAngleDelta(delta: number): number {
  let d = delta % 360
  if (d > 180) d -= 360
  if (d < -180) d += 360
  return d
}

/**
 * Verifica di coerenza anatomica minima: il naso deve stare sopra le spalle
 * nell'immagine (y minore = più in alto), con un margine ragionevole.
 * Senza questo controllo, MediaPipe può restituire landmark spuri con
 * visibility alta anche su scene completamente sbagliate (es. camera
 * puntata a terra) - caso reale riscontrato in test.
 */
export function checkAnatomicalPlausibility(landmarks: PoseLandmark[]): boolean {
  const nose = landmarks[LM.NOSE]
  const leftShoulder = landmarks[LM.LEFT_SHOULDER]
  const rightShoulder = landmarks[LM.RIGHT_SHOULDER]
  if (!nose || !leftShoulder || !rightShoulder) return false

  const shoulderY = (leftShoulder.y + rightShoulder.y) / 2
  // il naso deve essere chiaramente sopra la linea spalle (differenza minima
  // per evitare falsi positivi su inquadrature quasi piatte)
  return shoulderY - nose.y > 0.05
}

export function calcShoulderElevation(landmarks: PoseLandmark[]): number | null {
  const l = landmarks[LM.LEFT_SHOULDER]
  const r = landmarks[LM.RIGHT_SHOULDER]
  if (!l || !r) return null
  if (!allVisible(landmarks, [LM.LEFT_SHOULDER, LM.RIGHT_SHOULDER])) return null
  return Math.abs(l.y - r.y)
}

/**
 * Angolo della linea che congiunge le due orecchie rispetto all'orizzontale.
 * Usato per la flessione laterale (vista FRONTALE, stesso setup della rotazione).
 * A neutro l'angolo è vicino a 0; durante l'inclinazione laterale ruota.
 */
export function calcEarLineAngle(landmarks: PoseLandmark[]): number | null {
  const left = landmarks[LM.LEFT_EAR]
  const right = landmarks[LM.RIGHT_EAR]
  if (!left || !right) return null
  if (!allVisible(landmarks, [LM.LEFT_EAR, LM.RIGHT_EAR])) return null

  const dx = right.x - left.x
  const dy = right.y - left.y
  return (Math.atan2(dy, dx) * 180) / Math.PI
}

/**
 * Angolo della linea orecchio-spalla rispetto alla verticale (Craniovertebral
 * Angle, metodo validato in letteratura per postura del capo).
 * Richiede vista LATERALE (paziente di profilo), non frontale.
 * Usa il lato con maggiore visibilità (l'orecchio/spalla rivolti verso la camera).
 */
export function calcEarShoulderAngle(
  landmarks: PoseLandmark[]
): { angle: number; side: 'sx' | 'dx' } | null {
  const leftVis = landmarks[LM.LEFT_EAR]?.visibility ?? 0
  const rightVis = landmarks[LM.RIGHT_EAR]?.visibility ?? 0
  const side: 'sx' | 'dx' = leftVis >= rightVis ? 'sx' : 'dx'

  const ear = side === 'sx' ? landmarks[LM.LEFT_EAR] : landmarks[LM.RIGHT_EAR]
  const shoulder = side === 'sx' ? landmarks[LM.LEFT_SHOULDER] : landmarks[LM.RIGHT_SHOULDER]
  if (!ear || !shoulder) return null

  const requiredVisIdx = side === 'sx' ? [LM.LEFT_EAR, LM.LEFT_SHOULDER] : [LM.RIGHT_EAR, LM.RIGHT_SHOULDER]
  if (!allVisible(landmarks, requiredVisIdx)) return null

  const dx = ear.x - shoulder.x
  const dy = ear.y - shoulder.y
  // angolo rispetto alla verticale: 0 = perfettamente verticale
  const angle = (Math.atan2(dx, -dy) * 180) / Math.PI
  return { angle, side }
}

/**
 * Indice di fluidità del movimento: deviazione standard della velocità
 * frame-to-frame. Valori alti indicano movimento a scatti/compensato.
 */
export function calcSmoothnessIndex(ratios: number[], timestamps: number[]): number | null {
  if (ratios.length < 3 || ratios.length !== timestamps.length) return null
  const velocities: number[] = []
  for (let i = 1; i < ratios.length; i++) {
    const dt = (timestamps[i] - timestamps[i - 1]) / 1000
    if (dt <= 0) continue
    velocities.push((ratios[i] - ratios[i - 1]) / dt)
  }
  if (velocities.length === 0) return null
  const mean = velocities.reduce((a, b) => a + b, 0) / velocities.length
  const variance =
    velocities.reduce((a, b) => a + (b - mean) ** 2, 0) / velocities.length
  return Math.sqrt(variance)
}
