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

/** Slug leggibile per anchor link (es. titoli di sezione nell'indice di pagina). */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
