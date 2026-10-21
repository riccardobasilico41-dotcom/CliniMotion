/**
 * Regia di Ben (dal pacchetto Ben_Rive_Claude_Integration, config/ben.config.example.ts).
 * Tutti i tempi e le attivazioni stanno qui: i componenti non hanno numeri magici.
 */
export const benConfig = {
  desktopIntroDurationSeconds: 5.2,
  mobileIntroDurationSeconds: 2.5,
  mobileIntroEnabled: true,
  introOncePerSession: true,
  introSessionKey: 'v360-ben-intro',
  maxSecondaryAppearancesPerPage: 2,
  desktopHoverEnabled: true,
  secondaryAnimationCooldownMs: 20_000,
  destinationVisibilityThreshold: 0.65,
  destinationRevealDelayMs: 300,
  hoverActivationDelayMs: 200,
  blinkIntervalMs: [3000, 7000] as const,
  idleBreathingDurationMs: 3500,
  gazeIntervalMs: [5000, 10000] as const,
  idleGestureIntervalMs: [12000, 20000] as const,
  prefersReducedMotion: 'static-pose' as const,
  mobileBreakpointPx: 768,
} as const

/** Stati della state machine obiettivo `Ben_Controller` (prompt 02). */
export const BEN_STATES = [
  'idle',
  'run',
  'brake',
  'crash',
  'recover',
  'embarrassed',
  'lean',
  'wave',
  'point',
  'curious',
  'lost',
] as const
export type BenState = (typeof BEN_STATES)[number]
