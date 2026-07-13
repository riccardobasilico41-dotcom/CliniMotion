export interface PoseLandmark {
  x: number
  y: number
  z: number
  visibility?: number
}

export type Movement =
  | 'rotazione_dx'
  | 'rotazione_sx'
  | 'flessione'
  | 'estensione'
  | 'lat_flessione_dx'
  | 'lat_flessione_sx'

export type ConfidenceLevel = 'alta' | 'media' | 'bassa'

export type MetricStatus = 'experimental' | 'clinical'

export interface CervicalAnalysisResult {
  movimento: Movement
  romGradi: number
  asimmetriaPercent: number | null
  confidence: ConfidenceLevel
  confidenceScore: number // 0-1
  nota: string
  formulaVersion: number
  status: MetricStatus
}

export interface FrameSample {
  landmarks: PoseLandmark[]
  t: number
}
