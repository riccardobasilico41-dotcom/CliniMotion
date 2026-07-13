import { useCallback, useRef } from 'react'
import type { PoseLandmark, FrameSample } from '@/types/database'

// Le classi Pose/Camera vengono caricate globalmente via script MediaPipe
// (vedi index.html o import dinamico) - dichiarate qui per TS
declare global {
  interface Window {
    Pose: any
    Camera: any
    drawConnectors: any
    drawLandmarks: any
    POSE_CONNECTIONS: any
  }
}

type Status = 'idle' | 'loading' | 'ready' | 'error'

interface UseMediaPipePoseOptions {
  videoRef: React.RefObject<HTMLVideoElement>
  canvasRef: React.RefObject<HTMLCanvasElement>
  onLandmarks?: (landmarks: PoseLandmark[]) => void
}

/**
 * Hook per gestire il ciclo di vita di MediaPipe Pose su un elemento video.
 *
 * Nota importante (bug risolto in precedenza): NON usare uno state React
 * per decidere se registrare i frame dentro la callback onResults, perché
 * la closure catturata da MediaPipe resta "stale" e non vede aggiornamenti
 * di state. Usare invece un ref booleano (isRecordingRef) come qui sotto.
 */
export function useMediaPipePose({ videoRef, canvasRef, onLandmarks }: UseMediaPipePoseOptions) {
  const statusRef = useRef<Status>('idle')
  const poseRef = useRef<any>(null)
  const cameraRef = useRef<any>(null)

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
          color: '#5EE6C8',
          lineWidth: 2,
        })
      }
      if (window.drawLandmarks) {
        window.drawLandmarks(ctx, landmarks, { color: '#E6A85E', radius: 2 })
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

  const init = useCallback(async () => {
    if (!videoRef.current) return
    if (statusRef.current === 'loading' || statusRef.current === 'ready') return
    statusRef.current = 'loading'

    try {
      const pose = new window.Pose({
        locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`,
      })
      pose.setOptions({
        modelComplexity: 0, // modello lite - molto più veloce in browser
        smoothLandmarks: true,
        enableSegmentation: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      })
      pose.onResults(handleResults)

      const camera = new window.Camera(videoRef.current, {
        onFrame: async () => {
          if (videoRef.current) await pose.send({ image: videoRef.current })
        },
        width: 320,
        height: 240,
      })

      poseRef.current = pose
      cameraRef.current = camera
      await camera.start()
      statusRef.current = 'ready'
    } catch (err) {
      console.error('Errore inizializzazione MediaPipe:', err)
      statusRef.current = 'error'
    }
  }, [videoRef, handleResults])

  const destroy = useCallback(() => {
    cameraRef.current?.stop()
    poseRef.current?.close()
    poseRef.current = null
    cameraRef.current = null
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

  return { init, destroy, startRecording, stopRecording, statusRef }
}
