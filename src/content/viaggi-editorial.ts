/**
 * Overlay editoriale/SEO per viaggio — additivo, come `viaggi-copertine.ts`:
 * il markdown in `src/content/viaggi/*.md` resta l'unica fonte di verità per
 * titolo e testo del viaggio, questo file aggiunge solo le varianti
 * SEO/editoriali quando esistono. Un viaggio assente da `editorialViaggi`
 * (cioè tutti, per ora) usa i fallback esistenti — titolo e descrizione del
 * markdown — ovunque queste voci vengano lette: nessun contenuto va
 * inventato qui prima che sia stato scritto davvero.
 *
 * Gerarchia concettuale:
 * - `seoTitle` / `seoDescription` — orientati all'intento di ricerca,
 *   descrittivi: quello che finisce in <title> e meta description.
 * - `editorialHeadline` — titolo da rivista, mostrato selettivamente
 *   nell'esperienza visiva (es. hero della pagina viaggio), non ovunque
 *   compaia il titolo del viaggio.
 * - `editorialHook` — una riga breve di curiosità, opinione o utilità,
 *   categorizzata da `editorialHookType` (vedi `HookType`).
 * - `socialTitle` / `socialDescription` — variante per Open Graph/Twitter,
 *   se deve differire da quella SEO (di solito no: default a `seoTitle`/
 *   `seoDescription` quando assenti).
 *
 * Ogni voce, quando scritta, deve restare ancorata a contenuto reale del
 * viaggio (niente affermazioni non supportate dal testo in
 * `src/content/viaggi/*.md`).
 */

export type HookType =
  | 'before-you-go'
  | 'save-this'
  | 'wish-i-knew'
  | 'mistakes'
  | 'worth-it'
  | 'hidden-side'
  | 'secret'
  | 'skip-instead'
  | 'budget'
  | 'cost'
  | 'itinerary'
  | 'almost-skipped'
  | 'would-do-differently'
  | 'verdict'
  | 'comparison'

export type EditorialMeta = {
  seoTitle?: string
  seoDescription?: string
  editorialHeadline?: string
  editorialHook?: string
  editorialHookType?: HookType
  socialTitle?: string
  socialDescription?: string
}

/**
 * Chiave = `Viaggio['slug']`. Vuoto di proposito: si popola viaggio per
 * viaggio quando il lavoro editoriale/SEO su quel viaggio è stato fatto
 * davvero, non in blocco.
 */
export const editorialViaggi: Record<string, EditorialMeta> = {}

export function getEditorialMeta(slug: string): EditorialMeta {
  return editorialViaggi[slug] ?? {}
}
