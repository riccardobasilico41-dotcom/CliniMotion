import fs from 'node:fs'
import path from 'node:path'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/viaggi')

export type ViaggioSezione = {
  titolo: string
  corpo: string
}

export type ViaggioGiorno = ViaggioSezione

export type Viaggio = {
  slug: string
  ordine: number
  titolo: string
  stato: string
  inLavorazione: boolean
  periodo: string
  periodoBreve: string
  durata: string
  durataBreve: string
  compagni: string
  compagniBreve: string
  categorie: string[]
  apertura: string | null
  schedaPratica: string
  giorni: ViaggioGiorno[]
  doveDormito: string
  doveMangiato: string
  sezioni: ViaggioSezione[]
  chiusura: string | null
  tags: string[]
  descrizione: string
}

// Alcuni valori (es. "Periodo del viaggio", "Stato bozza") vanno a capo su più
// righe prima del prossimo **Campo:** — vanno raccolte tutte, non solo la prima.
function parseMeta(headerBlock: string): Record<string, string> {
  const meta: Record<string, string> = {}
  let currentKey: string | null = null
  for (const line of headerBlock.split('\n')) {
    const m = line.match(/^\*\*(.+?):\*\*\s*(.*)$/)
    if (m) {
      currentKey = m[1].trim()
      meta[currentKey] = m[2].trim()
    } else if (currentKey && line.trim()) {
      meta[currentKey] = `${meta[currentKey]} ${line.trim()}`.trim()
    } else {
      currentKey = null
    }
  }
  return meta
}

// Ogni file può avere sezioni diverse (alcuni viaggi hanno capitoli in più,
// tipo "Onsen" o "Rooftop bar", che gli altri non hanno) — per questo si
// analizzano tutte le "## " in ordine invece di cercarne un elenco fisso.
function splitByHeading(body: string, marker: '## ' | '### '): ViaggioSezione[] {
  const out: ViaggioSezione[] = []
  const chunks = body.split(new RegExp(`\\n${marker}`))
  for (let i = 0; i < chunks.length; i++) {
    const chunk = i === 0 ? chunks[i] : marker + chunks[i]
    const match = chunk.match(new RegExp(`^${marker}(.+)\\n([\\s\\S]*)`))
    if (match) {
      out.push({ titolo: match[1].trim(), corpo: match[2].trim() })
    }
  }
  return out
}

function stripMd(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\*(.+?)\*/g, '$1')
}

// "Compagni" e "Periodo" a volte portano note lunghe tra parentesi (contatti,
// spiegazioni) — vanno bene per esteso nella scheda pratica, troppo per la
// riga di meta compatta in cima alla pagina.
function shorten(text: string, max = 60): string {
  if (!text || text.length <= max) return text
  const cut = text.split(/[,(—]/)[0].trim()
  if (cut && cut.length <= max) return cut
  return text.slice(0, max - 3).trim() + '…'
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

// Sezioni con un trattamento dedicato nella pagina (quote, sidebar, timeline,
// tag) o puramente di lavoro interno (mai da mostrare al lettore).
function isSpecial(titolo: string): boolean {
  if (titolo === 'Apertura personale') return true
  if (titolo === 'Scheda pratica') return true
  if (titolo === 'Chiusura personale') return true
  if (titolo === 'Tag') return true
  if (titolo === 'Foto/media') return true
  if (/^Itinerario/i.test(titolo)) return true
  if (/^Materiale grezzo/i.test(titolo)) return true
  if (/^Nota su questa bozza/i.test(titolo)) return true
  return false
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

  const itinerarioSection = sections.find((s) => /^Itinerario/i.test(s.titolo))
  const giorni = itinerarioSection ? splitByHeading(itinerarioSection.corpo, '### ') : []

  const apertura = publicText(sections.find((s) => s.titolo === 'Apertura personale')?.corpo ?? '')
  const schedaPratica = sections.find((s) => s.titolo === 'Scheda pratica')?.corpo ?? ''
  const chiusura = publicText(sections.find((s) => s.titolo === 'Chiusura personale')?.corpo ?? '')
  const tags = parseTags(sections.find((s) => s.titolo === 'Tag')?.corpo ?? '')
  const doveDormito = sections.find((s) => s.titolo === 'Dove abbiamo dormito')?.corpo ?? ''
  const doveMangiato = sections.find((s) => s.titolo === 'Dove abbiamo mangiato')?.corpo ?? ''

  const sezioni = sections.filter(
    (s) => !isSpecial(s.titolo) && s.titolo !== 'Dove abbiamo dormito' && s.titolo !== 'Dove abbiamo mangiato'
  )

  // Il primo giorno a volte è solo un segnaposto ("TBD", una riga) — si cerca
  // il primo giorno con contenuto vero da usare come estratto.
  const giornoUtile = giorni.find((g) => g.corpo.trim().length > 40 && !/^TBD\b/i.test(g.corpo.trim()))
  const descrizione = apertura
    ? excerpt(apertura, 200)
    : excerpt(giornoUtile?.corpo ?? schedaPratica, 200)

  return {
    slug,
    ordine,
    titolo,
    stato: meta['Stato bozza'] ?? '',
    inLavorazione: (meta['Stato bozza'] ?? '').includes('🟡'),
    periodo: stripMd(meta['Periodo del viaggio'] ?? ''),
    periodoBreve: shorten(stripMd(meta['Periodo del viaggio'] ?? '')),
    durata: stripMd(meta['Durata'] ?? ''),
    durataBreve: shorten(stripMd(meta['Durata'] ?? '')),
    compagni: stripMd(meta['Compagni di viaggio'] ?? ''),
    compagniBreve: shorten(stripMd(meta['Compagni di viaggio'] ?? '')),
    categorie,
    apertura,
    schedaPratica,
    giorni,
    doveDormito,
    doveMangiato,
    sezioni,
    chiusura,
    tags,
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
