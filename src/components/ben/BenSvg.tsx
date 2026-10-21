import type { CSSProperties, Ref } from 'react'
import type { BenState } from './benConfig'
import s from './Ben.module.css'

/**
 * Ben, la mascotte di Viaggi 360°, dai livelli di Ben_Rig_Starter (artboard 600×600, stesso ordine dei file
 * 01_zaino … 13_cappellino). Ricostruzione vettoriale semplificata, non il 3D approvato: va sostituita
 * dal file .riv quando esiste (vedi controller.ts). Ogni livello è un gruppo animabile; lo stato attivo sta
 * in `data-state` e le pose sono in Ben.module.css.
 * Divisi rispetto agli SVG originali: occhi → bianco + pupille (per lo sguardo), due bocche (felice/sorpresa).
 */
export function BenSvg({
  state,
  blink,
  gaze,
  svgRef,
  className,
  style,
}: {
  state: BenState
  blink?: boolean
  gaze?: { x: number; y: number }
  svgRef?: Ref<SVGSVGElement>
  className?: string
  style?: CSSProperties
}) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 600 600"
      className={`${s.ben} ${className ?? ''}`}
      data-state={state}
      data-blink={blink ? 'on' : undefined}
      aria-hidden="true"
      focusable="false"
      style={style}
    >
      <g className={s.rig}>
        <g className={s.zaino}>
          <rect x="135" y="140" width="330" height="340" rx="95" fill="#d43d36" stroke="#a52c29" strokeWidth="8" />
          <path d="M180 205h240v215H180z" fill="none" stroke="#286ca1" strokeWidth="12" />
          <rect x="180" y="388" width="240" height="72" rx="20" fill="#ead1ac" stroke="#8e623c" strokeWidth="6" />
          <rect x="193" y="101" width="214" height="75" rx="35" fill="#c8302b" stroke="#94302c" strokeWidth="6" />
          <path d="M240 105v72m120-72v72" stroke="#d3ae76" strokeWidth="13" />
        </g>
        <g className={s.gambaS}>
          <ellipse cx="220" cy="494" rx="43" ry="35" fill="#f5dfb8" stroke="#e5cba5" strokeWidth="4" />
        </g>
        <g className={s.gambaD}>
          <ellipse cx="380" cy="494" rx="43" ry="35" fill="#f5dfb8" stroke="#e5cba5" strokeWidth="4" />
        </g>
        <g className={s.corpo}>
          <circle cx="300" cy="325" r="175" fill="#fff0cf" stroke="#e4d0af" strokeWidth="5" />
          <ellipse cx="260" cy="253" rx="110" ry="85" fill="#fff9e9" opacity=".55" />
        </g>
        <g className={s.braccioS}>
          <ellipse cx="145" cy="360" rx="40" ry="53" transform="rotate(-24 145 360)" fill="#fff0cd" stroke="#e5cda6" strokeWidth="4" />
        </g>
        <g className={s.braccioD}>
          <ellipse cx="455" cy="360" rx="40" ry="53" transform="rotate(24 455 360)" fill="#fff0cd" stroke="#e5cda6" strokeWidth="4" />
        </g>
        <g className={s.spallacci}>
          <path d="M168 224 Q135 285 153 384 M432 224 Q465 285 447 384" fill="none" stroke="#b73834" strokeWidth="29" />
          <path d="M168 224 Q135 285 153 384 M432 224 Q465 285 447 384" fill="none" stroke="#2877ab" strokeWidth="8" />
          <rect x="132" y="329" width="40" height="28" rx="5" fill="#cca06b" />
          <rect x="430" y="329" width="40" height="28" rx="5" fill="#cca06b" />
        </g>
        <g className={s.guance}>
          <ellipse cx="196" cy="353" rx="29" ry="18" fill="#f3b4a5" />
          <ellipse cx="404" cy="353" rx="29" ry="18" fill="#f3b4a5" />
        </g>
        <g className={s.occhi}>
          <ellipse cx="239" cy="303" rx="27" ry="36" fill="white" />
          <ellipse cx="361" cy="303" rx="27" ry="36" fill="white" />
          <g className={s.pupille} style={gaze ? { transform: `translate(${gaze.x}px, ${gaze.y}px)` } : undefined}>
            <ellipse cx="243" cy="307" rx="19" ry="28" fill="#422719" />
            <ellipse cx="364" cy="307" rx="19" ry="28" fill="#422719" />
            <circle cx="249" cy="295" r="7" fill="white" />
            <circle cx="370" cy="295" r="7" fill="white" />
          </g>
        </g>
        <g className={s.sopracciglia}>
          <path d="M207 251 Q239 227 267 250 M333 250 Q360 227 391 251" fill="none" stroke="#62402b" strokeWidth="10" strokeLinecap="round" />
        </g>
        <g className={s.boccaFelice}>
          <path d="M258 375 Q300 412 342 375 Q341 437 300 439 Q261 437 258 375Z" fill="#7a3327" />
          <path d="M274 425 Q303 396 326 423" stroke="#ec8d84" strokeWidth="14" fill="none" strokeLinecap="round" />
        </g>
        <g className={s.boccaSorpresa}>
          <ellipse cx="300" cy="396" rx="23" ry="31" fill="#75332a" />
        </g>
        <g className={s.cappellino}>
          <path d="M192 215 Q168 128 225 100 Q300 69 375 100 Q432 128 408 215Z" fill="#dfc59a" stroke="#b19873" strokeWidth="5" />
          <path d="M190 178 Q300 155 411 178" stroke="#777b60" strokeWidth="29" fill="none" />
          <path d="M185 190 Q303 166 416 192" stroke="#be4941" strokeWidth="10" fill="none" />
          <path d="M105 219 Q175 165 300 174 Q445 162 495 220 Q476 255 422 237 Q304 210 177 240 Q130 254 105 219Z" fill="#e4ca9e" stroke="#a48d69" strokeWidth="5" />
          <rect x="279" y="165" width="44" height="24" rx="3" fill="#f3dfbd" stroke="#2875a5" strokeWidth="4" />
        </g>
      </g>
    </svg>
  )
}
