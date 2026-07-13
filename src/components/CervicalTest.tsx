import { useEffect, useRef, useState } from 'react'
import { useMediaPipePose } from '@/hooks/useMediaPipePose'
import {
  analyzeCervicalRotation,
  analyzeLateralFlexion,
  analyzeFlexionExtension,
  checkSetupReady,
  checkSetupReadyLateral,
} from '@/lib/analysis/cervical'
import type { CervicalAnalysisResult, PoseLandmark } from '@/types/database'
import { getOrCreatePatient, createSession, saveTestResults } from '@/lib/api/sessions'
import { getAiInterpretation } from '@/lib/api/interpretation'
import { ResultsPanel } from './ResultsPanel'

function formatError(err: unknown): string {
  if (err instanceof Error) return err.message
  if (typeof err === 'object' && err !== null) {
    const anyErr = err as any
    return anyErr.message || anyErr.error_description || anyErr.hint || JSON.stringify(err)
  }
  return String(err)
}

type Phase =
  | 'patient'
  | 'setup_frontal'
  | 'recording_frontal'
  | 'setup_lateral'
  | 'recording_lateral'
  | 'saving'
  | 'results'
  | 'error'

export function CervicalTest() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [phase, setPhase] = useState<Phase>('patient')
  const [patientName, setPatientName] = useState('')
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [setupOk, setSetupOk] = useState(false)

  const [frontalResults, setFrontalResults] = useState<CervicalAnalysisResult[]>([])
  const [lateralResults, setLateralResults] = useState<CervicalAnalysisResult[]>([])
  const [aiText, setAiText] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const phaseRef = useRef(phase)
  phaseRef.current = phase

  const handleLandmarks = (landmarks: PoseLandmark[]) => {
    if (phaseRef.current === 'setup_frontal') setSetupOk(checkSetupReady(landmarks))
    if (phaseRef.current === 'setup_lateral') setSetupOk(checkSetupReadyLateral(landmarks))
  }

  const { init, destroy, startRecording, stopRecording } = useMediaPipePose({
    videoRef,
    canvasRef,
    onLandmarks: handleLandmarks,
  })

  useEffect(() => {
    init()
    return () => destroy()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleStartSession = async () => {
    if (!patientName.trim()) return
    try {
      const patientId = await getOrCreatePatient(patientName.trim())
      const newSessionId = await createSession(patientId)
      setSessionId(newSessionId)
      setSetupOk(false)
      setPhase('setup_frontal')
    } catch (err) {
      setErrorMsg('Errore creazione sessione: ' + formatError(err))
      setPhase('error')
    }
  }

  const handleStartFrontalRecording = () => {
    setPhase('recording_frontal')
    startRecording()
  }

  const handleStopFrontalRecording = () => {
    const frames = stopRecording()
    const rotation = analyzeCervicalRotation(frames) ?? []
    const lateralFlex = analyzeLateralFlexion(frames) ?? []
    setFrontalResults([...rotation, ...lateralFlex])
    setSetupOk(false)
    setPhase('setup_lateral')
  }

  const handleStartLateralRecording = () => {
    setPhase('recording_lateral')
    startRecording()
  }

  const handleStopLateralRecording = async () => {
    const frames = stopRecording()
    const flexExt = analyzeFlexionExtension(frames) ?? []
    setLateralResults(flexExt)
    setPhase('saving')

    const allResults = [...frontalResults, ...flexExt]

    try {
      if (sessionId) {
        await saveTestResults(sessionId, 'cervicale', allResults)
      }
      const interpretation = await getAiInterpretation('cervicale', allResults)
      setAiText(interpretation.testo)
    } catch (err) {
      // Il salvataggio/interpretazione può fallire (es. edge function non
      // ancora deployata); i risultati restano comunque visibili.
      setErrorMsg('Salvataggio o interpretazione AI non riusciti: ' + formatError(err))
    }
    setPhase('results')
  }

  const handleRestart = () => {
    setFrontalResults([])
    setLateralResults([])
    setAiText(null)
    setErrorMsg(null)
    setSessionId(null)
    setPatientName('')
    setPhase('patient')
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold text-cm-brass cm-mono tracking-tight">CliniMotion — Test Cervicale</h1>

      {phase === 'patient' && (
        <div className="space-y-3 bg-cm-panel border border-cm-panelBorder rounded p-4">
          <label className="block text-sm text-cm-text/70">Nome paziente</label>
          <input
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full px-3 py-2 rounded bg-cm-bg border border-cm-text/20 text-cm-text"
            placeholder="Nome e cognome"
          />
          <button
            disabled={!patientName.trim()}
            onClick={handleStartSession}
            className="px-4 py-2 rounded bg-cm-brass text-cm-bg font-medium disabled:opacity-40"
          >
            Avvia sessione
          </button>
        </div>
      )}

      <div
        className={
          phase === 'patient'
            ? 'hidden'
            : 'relative bg-cm-panel border border-cm-panelBorder rounded overflow-hidden aspect-video'
        }
      >
        <video ref={videoRef} className="w-full h-full object-cover -scale-x-100" playsInline muted />
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -scale-x-100" />
      </div>

      {phase === 'setup_frontal' && (
        <div className="space-y-2">
          <p className="text-sm text-cm-text/70">
            Fase 1/2 — vista FRONTALE. Paziente seduto o in piedi, colonna dritta, a 60-80 cm dalla
            camera, viso e spalle centrati e ben visibili. Evita di tenere il telefono troppo
            vicino al volto: la distanza sbagliata è la causa più comune di dati imprecisi.
            Testeremo rotazione e flessione laterale.
          </p>
          <p className={setupOk ? 'text-cm-brass' : 'text-cm-warn'}>
            {setupOk ? 'Inquadratura pronta ✓' : 'In attesa di inquadratura valida...'}
          </p>
          <button
            disabled={!setupOk}
            onClick={handleStartFrontalRecording}
            className="px-4 py-2 rounded bg-cm-brass text-cm-bg font-medium disabled:opacity-40"
          >
            Avvia registrazione
          </button>
        </div>
      )}

      {phase === 'recording_frontal' && (
        <div className="space-y-2">
          <p className="text-cm-warn">
            Registrazione in corso — ruota verso dx, poi sx, torna al centro. Poi inclina
            l'orecchio verso la spalla dx, poi sx, torna al centro.
          </p>
          <button
            onClick={handleStopFrontalRecording}
            className="px-4 py-2 rounded bg-cm-warn text-cm-bg font-medium"
          >
            Termina fase frontale
          </button>
        </div>
      )}

      {phase === 'setup_lateral' && (
        <div className="space-y-2">
          <p className="text-sm text-cm-text/70">
            Fase 2/2 — vista LATERALE. Chiedi al paziente di girarsi di 90° (di profilo rispetto
            alla camera). Testeremo flessione ed estensione.
          </p>
          <p className={setupOk ? 'text-cm-brass' : 'text-cm-warn'}>
            {setupOk ? 'Inquadratura pronta ✓' : 'In attesa di inquadratura valida...'}
          </p>
          <button
            disabled={!setupOk}
            onClick={handleStartLateralRecording}
            className="px-4 py-2 rounded bg-cm-brass text-cm-bg font-medium disabled:opacity-40"
          >
            Avvia registrazione
          </button>
        </div>
      )}

      {phase === 'recording_lateral' && (
        <div className="space-y-2">
          <p className="text-cm-warn">
            Registrazione in corso — annuisci in avanti (mento verso petto), poi indietro,
            torna al centro.
          </p>
          <button
            onClick={handleStopLateralRecording}
            className="px-4 py-2 rounded bg-cm-warn text-cm-bg font-medium"
          >
            Termina test
          </button>
        </div>
      )}

      {phase === 'saving' && (
        <p className="text-cm-text/70">Salvataggio risultati e generazione interpretazione AI...</p>
      )}

      {phase === 'results' && (
        <div className="space-y-4">
          <ResultsPanel results={[...frontalResults, ...lateralResults]} onRestart={handleRestart} />
          {aiText && (
            <div className="bg-cm-panel border border-cm-panelBorder rounded p-4 space-y-1">
              <p className="text-sm text-cm-brass font-medium">Interpretazione AI</p>
              <p className="text-sm text-cm-text/90">{aiText}</p>
            </div>
          )}
          {errorMsg && <p className="text-xs text-cm-warn">{errorMsg}</p>}
        </div>
      )}

      {phase === 'error' && (
        <div className="space-y-2">
          <p className="text-cm-warn">{errorMsg}</p>
          <button onClick={handleRestart} className="px-4 py-2 rounded bg-cm-brass text-cm-bg">
            Riprova
          </button>
        </div>
      )}
    </div>
  )
}
