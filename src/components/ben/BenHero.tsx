'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { BenSvg } from './BenSvg'
import { useBen, useGazeFollow } from './useBen'
import { benConfig } from './benConfig'
import s from './Ben.module.css'

/**
 * Ben nell'hero della Home, appoggiato al bordo sinistro della foto (mai sopra titolo, CTA o menù).
 * Prima visita della sessione: entra correndo da destra, frena, sbatte contro il bordo, si riprende,
 * si imbarazza e si appoggia (run > brake > crash > recover > embarrassed > lean > idle).
 * Visite successive e reduced motion: già al suo posto, fermo. Clic o tocco: saluta.
 * Il riquadro ha dimensioni fisse: nessuno spostamento di layout.
 */
export function BenHero() {
  const wrap = useRef<HTMLDivElement>(null)
  const ben = useBen('idle')
  const { play, setState, reduceMotion, later } = ben
  const [say, setSay] = useState<string | null>(null)
  const hoverTimer = useRef(0)
  // letto una volta sola: in sviluppo React esegue gli effetti due volte e il secondo giro vedrebbe il flag appena scritto
  const [introVista] = useState(() => {
    if (typeof window === 'undefined' || !benConfig.introOncePerSession) return false
    try {
      return sessionStorage.getItem(benConfig.introSessionKey) === '1'
    } catch {
      return false
    }
  })
  useGazeFollow(wrap, ben.setGaze, ben.state === 'idle' || ben.state === 'lean')

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const seen = introVista
    const mobile = window.innerWidth < benConfig.mobileBreakpointPx
    if (seen || reduceMotion || (mobile && !benConfig.mobileIntroEnabled)) {
      setState('lean')
      return
    }
    try {
      sessionStorage.setItem(benConfig.introSessionKey, '1')
    } catch {}

    const total = mobile ? benConfig.mobileIntroDurationSeconds : benConfig.desktopIntroDurationSeconds
    const runS = total * (mobile ? 0.36 : 0.3)
    const distance = (el.parentElement?.clientWidth ?? 500) - el.clientWidth * 0.6
    const ms = (f: number) => Math.round(total * 1000 * f)
    const tl = gsap.timeline()
    tl.fromTo(el, { x: distance, opacity: 1 }, { x: 0, duration: runS, ease: 'power1.in' })
      .to(el, { x: 10, duration: 0.12, ease: 'power2.out' })
      .to(el, { x: 0, duration: 0.25, ease: 'back.out(3)' })
    play(
      mobile
        ? [
            ['run', runS * 1000],
            ['crash', ms(0.28)],
            ['embarrassed', ms(0.3)],
            ['lean', 0],
          ]
        : [
            ['run', runS * 1000 - 120],
            ['brake', 120],
            ['crash', ms(0.14)],
            ['recover', ms(0.12)],
            ['embarrassed', ms(0.24)],
            ['lean', ms(0.2)],
            ['idle', 0],
          ],
    )
    return () => {
      tl.kill()
      gsap.set(el, { clearProps: 'transform' })
    }
  }, [play, setState, reduceMotion, introVista])

  const greet = () => {
    setSay('Ciao, sono Ben!')
    play([
      ['wave', 1400],
      ['idle', 0],
    ])
    later(1800, () => setSay(null))
  }

  return (
    <div
      ref={wrap}
      className="pointer-events-none absolute bottom-3 left-3 z-10 w-[clamp(92px,11vw,168px)] sm:bottom-4 sm:left-4"
    >
      <button
        type="button"
        className={`${s.hit} pointer-events-auto`}
        aria-label="Ben, la mascotte di Viaggi 360°: tocca per un saluto"
        onClick={greet}
        onPointerEnter={() => {
          if (!benConfig.desktopHoverEnabled || reduceMotion) return
          hoverTimer.current = window.setTimeout(() => {
            if (ben.state === 'idle' || ben.state === 'lean') setState('curious')
          }, benConfig.hoverActivationDelayMs)
        }}
        onPointerLeave={() => {
          window.clearTimeout(hoverTimer.current)
          if (ben.state === 'curious') setState('idle')
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
  )
}
