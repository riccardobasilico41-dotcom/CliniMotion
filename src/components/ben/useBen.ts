'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { benConfig, type BenState } from './benConfig'

/**
 * Controller di Ben. Oggi muove il rig SVG (BenSvg); l'API è quella della state machine obiettivo
 * `Ben_Controller` del file .riv, così quando il .riv esisterà basterà un adapter che chiama
 * `stateMachineInputs` di @rive-app/react-canvas con gli stessi nomi, senza toccare le pagine.
 * Nessun .riv esiste ancora: questo hook non finge di caricarne uno.
 */
const rand = ([a, b]: readonly [number, number]) => a + Math.random() * (b - a)

export function useBen(initial: BenState = 'idle') {
  const reduceMotion = useReducedMotion() ?? false
  const [state, setStateRaw] = useState<BenState>(initial)
  const [blink, setBlink] = useState(false)
  const [gaze, setGaze] = useState<{ x: number; y: number } | undefined>()
  const timers = useRef<number[]>([])

  const later = useCallback((ms: number, fn: () => void) => {
    const id = window.setTimeout(fn, ms)
    timers.current.push(id)
    return id
  }, [])

  const clear = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }, [])

  /** Con reduced motion Ben resta in posa ferma (idle), qualunque stato venga chiesto. */
  const setState = useCallback((s: BenState) => setStateRaw(reduceMotion ? 'idle' : s), [reduceMotion])

  /** Esegue una sequenza [stato, durata ms]; l'ultimo stato resta. */
  const play = useCallback(
    (steps: [BenState, number][]) => {
      clear()
      let t = 0
      steps.forEach(([s, d]) => {
        later(t, () => setState(s))
        t += d
      })
      return t
    },
    [clear, later, setState],
  )

  // battito di ciglia a intervalli casuali
  useEffect(() => {
    if (reduceMotion) return
    let id = 0
    const loop = () => {
      id = window.setTimeout(() => {
        setBlink(true)
        window.setTimeout(() => setBlink(false), 140)
        loop()
      }, rand(benConfig.blinkIntervalMs))
    }
    loop()
    return () => window.clearTimeout(id)
  }, [reduceMotion])

  useEffect(() => clear, [clear])

  return { state, setState, play, blink, gaze, setGaze, reduceMotion, later, clear }
}

/** Sguardo che segue il puntatore (solo desktop, solo in idle/lean). */
export function useGazeFollow(
  el: React.RefObject<Element | null>,
  setGaze: (g: { x: number; y: number } | undefined) => void,
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let raf = 0
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = el.current?.getBoundingClientRect()
        if (!r) return
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height * 0.5)
        const d = Math.hypot(dx, dy) || 1
        const k = Math.min(1, d / 400)
        setGaze({ x: (dx / d) * 9 * k, y: (dy / d) * 7 * k })
      })
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
      setGaze(undefined)
    }
  }, [el, setGaze, enabled])
}
