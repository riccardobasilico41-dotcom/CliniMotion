import { useCallback, useRef, useState } from 'react'
import type { PoseLandmark, FrameSample } from '@/types/database'

declare global {
  interface Window {
    Pose: any
    drawConnectors: any
    drawLandmarks: any
    POSE_CONNECTIONS: any
  }
}

type Status = 'idle' | 'loading' | 'ready' | 'error'

export interface CameraDevice {
  deviceId: string
  label: string
}

interface UseMediaPipePoseOptions {
  videoRef: React.RefObject<HTMLVideoElement>
  canvasRef: React.RefObject<HTMLCanvasElement>
  onLandmarks?: (landmarks: PoseLandmark[]) => void
}

/**
 * Hook per gestire MediaPipe Pose con controllo manuale dello stream video.
 *
 * Non usiamo più l'utility Camera di MediaPipe (che sceglie automaticamente
 * la camera di default, di solito quella frontale su mobile): gestiamo noi
 * lo stream via getUserMedia, cosi' l'utente puo' scegliere qualsiasi
 * dispositivo video disponibile (frontale, posteriore, webcam esterna via
 * adattatore) mediante enumerateDevices/deviceId.
 *
 * Nota importante (bug risolto in precedenza): NON usare uno state React
 * per decidere se registrare i frame dentro la callback onResults, perché
 * la closure catturata da MediaPipe resta "stale" e non vede aggiornamenti
 * di state. Usare invece un ref booleano (isRecordingRef) come qui sotto.
 */
export function useMediaPipePose({ videoRef, canvasRef, onLandmarks }: UseMediaPipePoseOptions) {
  const statusRef = useRef<Status>('idle')
  const poseRef = useRef<any>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const rafRef = useRef<number | null>(null)
  const processingRef = useRef(false)

  const [devices, setDevices] = useState<CameraDevice[]>([])
  const [activeDeviceId, setActiveDeviceId] = useState<string | null>(null)

  const isRecordingRef = useRef(false)
  const framesRef = useRef<FrameSample[]>([])
  const startTimeRef = useRef<number>(0)

  const drawSkeleton = useCallback(
    (landmarks: PoseLandmark[]) => {
      const canvas = canvasRef.current
      const video = videoRef.current
      if (!canvas || !video) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (window.drawConnectors && window.POSE_CONNECTIONS) {
        window.drawConnectors(ctx, landmarks, window.POSE_CONNECTIONS, {
          color: '#8FB4D9',
          lineWidth: 2,
        })
      }
      if (window.drawLandmarks) {
        window.drawLandmarks(ctx, landmarks, { color: '#C9A24B', radius: 2 })
      }
    },
    [canvasRef, videoRef]
  )

  const handleResults = useCallback(
    (results: any) => {
      const landmarks: PoseLandmark[] = results.poseLandmarks
      if (!landmarks) return

      drawSkeleton(landmarks)
      onLandmarks?.(landmarks)

      if (isRecordingRef.current) {
        framesRef.current.push({
          landmarks,
          t: Date.now() - startTimeRef.current,
        })
      }
    },
    [drawSkeleton, onLandmarks]
  )

  const frameLoop = useCallback(() => {
    const video = videoRef.current
    const pose = poseRef.current
    if (video && pose && !processingRef.current && video.readyState >= 2) {
      processingRef.current = true
      pose.send({ image: video }).finally(() => {
        processingRef.current = false
      })
    }
    rafRef.current = requestAnimationFrame(frameLoop)
  }, [videoRef])

  const refreshDeviceList = useCallback(async () => {
    try {
      const all = await navigator.mediaDevices.enumerateDevices()
      const videoInputs = all
        .filter((d) => d.kind === 'videoinput')
        .map((d, i) => ({ deviceId: d.deviceId, label: d.label || `Camera ${i + 1}` }))
      setDevices(videoInputs)
      return videoInputs
    } catch {
      return []
    }
  }, [])

  const [isFrontFacing, setIsFrontFacing] = useState(true)

  const startStream = useCallback(
    async (deviceId?: string) => {
      streamRef.current?.getTracks().forEach((t) => t.stop())

      const constraints: MediaStreamConstraints = {
        video: deviceId
          ? { deviceId: { exact: deviceId } }
          : { facingMode: { ideal: 'environment' } }, // preferisci posteriore: piu' lontana, meno distorsione
      }

      const stream = await navigator.mediaDevices.getUserMedia(constraints)
      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      const track = stream.getVideoTracks()[0]
      const settings = track.getSettings()
      setActiveDeviceId(settings.deviceId ?? null)
      // specchiare solo la camera frontale (selfie): posteriore/esterna non va specchiata,
      // altrimenti chi osserva il paziente vede dx/sx invertiti in modo fuorviante
      setIsFrontFacing(settings.facingMode !== 'environment')

      // richiedere i permessi sblocca le label reali dei dispositivi
      await refreshDeviceList()
    },
    [videoRef, refreshDeviceList]
  )

  const switchDevice = useCallback(
    async (deviceId: string) => {
      await startStream(deviceId)
    },
    [startStream]
  )

  const init = useCallback(async () => {
    if (!videoRef.current) return
    if (statusRef.current === 'loading' || statusRef.current === 'ready') return
    statusRef.current = 'loading'

    try {
      const pose = new window.Pose({
        locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
      })
      pose.setOptions({
        modelComplexity: 0,
        smoothLandmarks: true,
        enableSegmentation: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      })
      pose.onResults(handleResults)
      poseRef.current = pose

      await startStream()

      rafRef.current = requestAnimationFrame(frameLoop)
      statusRef.current = 'ready'
    } catch (err) {
      console.error('Errore inizializzazione MediaPipe/camera:', err)
      statusRef.current = 'error'
    }
  }, [videoRef, handleResults, startStream, frameLoop])

  const destroy = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    streamRef.current?.getTracks().forEach((t) => t.stop())
    poseRef.current?.close()
    poseRef.current = null
    streamRef.current = null
    statusRef.current = 'idle'
  }, [])

  const startRecording = useCallback(() => {
    framesRef.current = []
    startTimeRef.current = Date.now()
    isRecordingRef.current = true
  }, [])

  const stopRecording = useCallback((): FrameSample[] => {
    isRecordingRef.current = false
    return framesRef.current
  }, [])

  return {
    init,
    destroy,
    startRecording,
    stopRecording,
    statusRef,
    devices,
    activeDeviceId,
    switchDevice,
    isFrontFacing,
  }
}
