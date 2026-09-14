/**
 * Codice ISO 3166-1 alpha-2 del Paese reale a cui ogni voce dell'archivio
 * appartiene — usato come elemento tipografico nell'indice di geografia
 * della Home, non come dato inventato: per le voci che rappresentano una
 * regione (Borneo, Florida, New York, Transilvania) il codice è quello
 * dello Stato sovrano di appartenenza (rispettivamente Malesia, Stati
 * Uniti, Stati Uniti, Romania), non una sigla di fantasia.
 */
export const PAESE_CODICE: Record<string, string> = {
  'arabia-saudita': 'SA',
  belize: 'BZ',
  bolivia: 'BO',
  borneo: 'MY',
  bulgaria: 'BG',
  cina: 'CN',
  'corea-del-sud': 'KR',
  'costa-rica': 'CR',
  'emirati-arabi-uniti': 'AE',
  florida: 'US',
  francia: 'FR',
  giappone: 'JP',
  giordania: 'JO',
  guatemala: 'GT',
  indonesia: 'ID',
  islanda: 'IS',
  italia: 'IT',
  malesia: 'MY',
  marocco: 'MA',
  messico: 'MX',
  'new-york': 'US',
  norvegia: 'NO',
  panama: 'PA',
  peru: 'PE',
  qatar: 'QA',
  singapore: 'SG',
  'sri-lanka': 'LK',
  svezia: 'SE',
  thailandia: 'TH',
  transilvania: 'RO',
}

export function codicePaese(slug: string): string {
  return PAESE_CODICE[slug] ?? slug.slice(0, 2).toUpperCase()
}
