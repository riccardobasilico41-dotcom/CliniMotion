import type { Meraviglia } from './types'
import { meraviglie } from '@/content/meraviglie'

export function getAllMeraviglie(): Meraviglia[] {
  return meraviglie
}

export function getMeraviglia(slug: string): Meraviglia | undefined {
  return meraviglie.find((m) => m.slug === slug)
}
