import fs from 'node:fs'
import path from 'node:path'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/viaggi')

export type ViaggioGiorno = {
  titolo: string
  corpo: string
}

export type Viaggio = {
  slug: string
  ordine: number
  titolo: string
  stato: string
  inLavorazione: boolean
  periodo: string
  durata: string
  compagni: string
  categorie: string[]
  apertura: string | null
  schedaPratica: string
  giorni: ViaggioGiorno[]
  cosaVedere: string
  doveDormito: string
  doveMangiato: string
  consigli: string
  chiusura: string | null
  tags: string[]
  descrizione: string
}

function parseMeta(headerBlock: string): Record<string, string> {
  const meta: Record<string, string> = {}
  const re = /\*\*(.+?):\*\*\s*(.*)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(headerBlock))) {
    meta[m[1].trim()] = m[2].trim()
  }
  return meta
}

function splitByHeading(body: string, marker: '## ' | '### '): Record<string, string> {
  const sections: Record<string, string> = {}
  const chunks = body.split(new RegExp(`\\n${marker}`))
  for (let i = 0; i < chunks.length; i++) {
    const chunk = i === 0 ? chunks[i] : marker + chunks[i]
    const match = chunk.match(new RegExp(`^${marker}(.+)\\n([\\s\\S]*)`))
    if (match) {
      sections[match[1].trim()] = match[2].trim()
    }
  }
  return sections
}

function parseGiorni(itinerarioBody: string): ViaggioGiorno[] {
  const days = splitByHeading(itinerarioBody, '### ')
  return Object.entries(days).map(([titolo, corpo]) => ({ titolo, corpo }))
}

function stripMd(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1')
}

function parseTags(tagBody: string): string[] {
  const matches = tagBody.match(/#[\p{L}0-9_-]+/gu) ?? []
  return matches.map((t) => t.slice(1))
}

// Alcune bozze contengono un appunto dell'autore al posto del racconto vero
// (es. "*(spunto pronto: ...)*" o "*(da scrivere insieme)*"): non è testo per il
// lettore, va trattato come sezione mancante.
function publicText(text: string): string | null {
  const trimmed = text.trim()
  if (!trimmed) return null
  if (/^\*\([\s\S]*\)\*$/.test(trimmed)) return null
  return trimmed
}

function parseViaggio(filename: string): Viaggio {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), 'utf8')

  const orderMatch = filename.match(/^(\d+)-/)
  const ordine = orderMatch ? parseInt(orderMatch[1], 10) : 0
  const slug = filename.replace(/^\d+-/, '').replace(/\.md$/, '')

  const separatorIndex = raw.indexOf('\n---\n')
  const headerBlock = raw.slice(0, separatorIndex)
  const body = raw.slice(separatorIndex + 5).trim()

  const titleMatch = headerBlock.match(/^#\s+(.+)/)
  const titolo = titleMatch ? titleMatch[1].trim() : slug

  const meta = parseMeta(headerBlock)
  const categorie = (meta['Categoria'] ?? '')
    .split('·')
    .map((c) => c.trim())
    .filter(Boolean)

  const sections = splitByHeading(body, '## ')
  const giorni = parseGiorni(sections['Itinerario giorno per giorno'] ?? '')
  const apertura = publicText(sections['Apertura personale'] ?? '')

  const descrizione = apertura
    ? excerpt(apertura, 200)
    : excerpt(giorni[0]?.corpo ?? sections['Scheda pratica'] ?? '', 200)

  return {
    slug,
    ordine,
    titolo,
    stato: meta['Stato bozza'] ?? '',
    inLavorazione: (meta['Stato bozza'] ?? '').includes('🟡'),
    periodo: meta['Periodo del viaggio'] ?? '',
    durata: meta['Durata'] ?? '',
    compagni: stripMd(meta['Compagni di viaggio'] ?? ''),
    categorie,
    apertura,
    schedaPratica: sections['Scheda pratica'] ?? '',
    giorni,
    cosaVedere: sections['Cosa vedere / cosa fare'] ?? '',
    doveDormito: sections['Dove abbiamo dormito'] ?? '',
    doveMangiato: sections['Dove abbiamo mangiato'] ?? '',
    consigli: sections['Consigli pratici / errori da non ripetere'] ?? '',
    chiusura: publicText(sections['Chiusura personale'] ?? ''),
    tags: parseTags(sections['Tag'] ?? ''),
    descrizione,
  }
}

let cache: Viaggio[] | null = null

export function getAllViaggi(): Viaggio[] {
  if (cache) return cache
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))
  cache = files.map(parseViaggio).sort((a, b) => a.ordine - b.ordine)
  return cache
}

export function getViaggioBySlug(slug: string): Viaggio | undefined {
  return getAllViaggi().find((v) => v.slug === slug)
}

export function getContinente(categorie: string[]): string {
  return categorie[0] ?? 'Altrove'
}

export function excerpt(markdown: string, maxLength = 200): string {
  const plain = markdown
    .replace(/^[-*]\s+/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (plain.length <= maxLength) return plain
  return plain.slice(0, maxLength).replace(/\s+\S*$/, '') + '…'
}
