import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// Pura, senza dipendenze da 'node:fs': va tenuta qui (non in lib/viaggi.ts)
// così i componenti client possono importarla senza trascinarsi dietro il
// parser dei file markdown (che rompe il bundle browser).
export function getContinente(categorie: string[]): string {
  return categorie[0] ?? 'Altrove'
}

/**
 * Ordine di presentazione delle macro-regioni, condiviso tra l'indice
 * Destinazioni (dal campo `continente` di ogni Paese) e il raggruppamento dei
 * viaggi (dalla prima voce di "Categoria" nel markdown). Una regione non
 * elencata qui finisce in fondo, in ordine alfabetico, senza rompere la pagina.
 */
export const CONTINENTI = [
  'Europa',
  'Asia',
  'Medio Oriente',
  'Africa',
  'Nord America',
  'America Centrale',
  'Sud America',
  'Oceania',
]

/** Raggruppa per macro-regione mantenendo l'ordine di CONTINENTI. */
export function raggruppaPerContinente<T>(
  items: T[],
  continenteDi: (item: T) => string
): { continente: string; items: T[] }[] {
  const gruppi = new Map<string, T[]>()
  for (const item of items) {
    const continente = continenteDi(item)
    const esistente = gruppi.get(continente)
    if (esistente) esistente.push(item)
    else gruppi.set(continente, [item])
  }

  return Array.from(gruppi, ([continente, items]) => ({ continente, items })).sort((a, b) => {
    const ia = CONTINENTI.indexOf(a.continente)
    const ib = CONTINENTI.indexOf(b.continente)
    if (ia === -1 && ib === -1) return a.continente.localeCompare(b.continente)
    if (ia === -1) return 1
    if (ib === -1) return -1
    return ia - ib
  })
}

/** Slug leggibile per anchor link (es. titoli di sezione nell'indice di pagina). */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
