'use client'

import { useEffect, useRef, useState } from 'react'
import { BenSvg } from './BenSvg'
import { useBen, useGazeFollow } from './useBen'
import { benConfig, type BenState } from './benConfig'
import s from './Ben.module.css'

/**
 * Apparizione secondaria di Ben in un punto della pagina.
 * - `trigger="mount"`: subito (404 → lost).
 * - `trigger="visible"`: quando il contenitore è visibile al 65% + 300 ms (Paese → point verso le destinazioni).
 * Al massimo `maxSecondaryAppearancesPerPage` apparizioni automatiche per pagina; dopo il gesto torna in idle.
 * Clic o tocco: saluta.
 */
let appearancesThisPage = 0
let lastPath = ''

export function BenSpot({
  pose,
  trigger = 'visible',
  holdMs = 2600,
  label,
  className = '',
  message,
}: {
  pose: BenState
  trigger?: 'mount' | 'visible'
  holdMs?: number
  label: string
  className?: string
  message?: string
}) {
  const wrap = useRef<HTMLDivElement>(null)
  const ben = useBen('idle')
  const { play, setState, later } = ben
  const [shown, setShown] = useState(trigger === 'mount')
  const [say, setSay] = useState<string | null>(null)
  useGazeFollow(wrap, ben.setGaze, ben.state === 'idle')

  useEffect(() => {
    if (lastPath !== window.location.pathname) {
      lastPath = window.location.pathname
      appearancesThisPage = 0
    }
    const start = () => {
      if (appearancesThisPage >= benConfig.maxSecondaryAppearancesPerPage) {
        setShown(true)
        return
      }
      appearancesThisPage++
      setShown(true)
      if (pose === 'lost') setState('lost')
      else play([[pose, holdMs], ['idle', 0]])
      if (message) {
        setSay(message)
        later(holdMs, () => setSay(null))
      }
    }
    if (trigger === 'mount') {
      start()
      return
    }
    const el = wrap.current
    if (!el) return
    let t = 0
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          t = window.setTimeout(start, benConfig.destinationRevealDelayMs)
          io.disconnect()
        }
      },
      { threshold: benConfig.destinationVisibilityThreshold },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      window.clearTimeout(t)
    }
  }, [trigger, pose, holdMs, message, play, setState, later])

  return (
    <div ref={wrap} className={`relative ${className}`}>
      <div className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <button
          type="button"
          className={s.hit}
          aria-label={label}
          onClick={() => {
            setSay('Ciao, sono Ben!')
            play([['wave', 1400], [pose === 'lost' ? 'lost' : 'idle', 0]])
            later(1800, () => setSay(null))
          }}
        >
          <BenSvg state={ben.state} blink={ben.blink} gaze={ben.gaze} />
        </button>
        {say && (
          <span className={s.bubble} role="status">
            {say}
          </span>
        )}
      </div>
    </div>
  )
}
