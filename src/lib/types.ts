// Tipi condivisi per il layer editoriale "Paesi / Destinazioni / Esperienze".
// Contenuto statico in src/content/{paesi,destinazioni,esperienze}, nessun CMS:
// gli oggetti sono scritti a mano e tipizzati qui per avere relazioni sicure
// verso i viaggi già pubblicati in src/content/viaggi (parsati da src/lib/viaggi.ts).

export type StatoContenuto = 'provato' | 'consigliato' | 'da-verificare' | 'da-confermare'

export const STATO_CONTENUTO_LABEL: Record<StatoContenuto, string> = {
  provato: 'Provato personalmente',
  consigliato: 'Consigliato come alternativa',
  'da-verificare': 'Informazione da verificare',
  'da-confermare': 'Da confermare',
}

export type Paese = {
  slug: string
  nome: string
  /** Macro-regione di appartenenza, usata per raggruppare l'indice Destinazioni. Vedi CONTINENTI in src/lib/geo.ts. */
  continente: string
  titolo: string
  descrizione: string
  periodoMigliore: string
  durataConsigliata: string
  budgetIndicativo: string
  stileViaggio: string[]
  heroImageAlt: string
  /** Percorso in /public per l'hero fotografico della pagina Paese. Se assente, la UI mostra un fallback tipografico invece di inventare un'immagine. */
  heroImage?: string
  /** Slug del viaggio "che ho fatto io" da mettere in evidenza nella pagina Paese. */
  tripPrincipaleSlug: string
}

export type Destinazione = {
  slug: string
  paeseSlug: string
  ordine: number
  nome: string
  tipologia: string[]
  giorniConsigliati: string
  visitataPersonalmente: boolean
  introduzione: string
  percheAndarci: string
  cosaVedere: string[]
  cosaFare: string[]
  doveDormire?: string
  doveMangiare?: string
  usciteSerali?: string
  comeArrivare?: string
  comeSpostarsi?: string
  periodoMigliore?: string
  costi?: string
  erroriDaEvitare: string[]
  /** Se assente, la UI mostra un placeholder editoriale invece di inventare un ricordo. */
  miaEsperienza?: string
  esperienzeSlugs: string[]
  tripSlugs: string[]
  imageAlt: string
  /** Percorso in /public. Se assente, la UI mostra il placeholder illustrato. */
  immagine?: string
}

export type GiudizioEsperienza = 'imperdibile' | 'la-rifarei' | 'bella-non-essenziale' | 'da-verificare'

export const GIUDIZIO_LABEL: Record<GiudizioEsperienza, string> = {
  imperdibile: 'Imperdibile',
  'la-rifarei': 'La rifarei',
  'bella-non-essenziale': 'Bella ma non essenziale',
  'da-verificare': 'Da verificare',
}

export type Esperienza = {
  slug: string
  paeseSlug: string
  destinazioneSlug: string
  nome: string
  localita: string
  cosE: string
  percheFarla: string
  durata: string
  periodo: string
  costo?: string
  comePrenotare?: string
  cosaPortare?: string
  perChiEAdatta?: string
  miaEsperienza?: string
  giudizio: GiudizioEsperienza
  alternative: string[]
  tripSlugs: string[]
  imageAlt: string
  /** Percorso in /public. Se assente, la UI mostra il placeholder illustrato. */
  immagine?: string
}

// --- Overlay dati per l'itinerario (facoltativo, per viaggio) ---
// Il markdown in src/content/viaggi resta la fonte del testo narrativo.
// Questo overlay aggiunge solo metadati strutturati (pernottamento, intensità,
// link a destinazioni) per i viaggi che li hanno già pronti: se un viaggio
// non ha un overlay, la pagina /viaggi/[slug] si comporta come oggi.

export type IntensitaGiorno = 'leggero' | 'medio' | 'intenso'

export type GiornoMeta = {
  /** Deve combaciare esattamente con il titolo del giorno nel markdown (## Giorno N — ...). */
  titoloGiorno: string
  tratta?: string
  pernottamento?: string
  statoPernottamento?: StatoContenuto
  intensita: IntensitaGiorno
  costiNoti?: string
  destinazioneSlug?: string
}

export type TappaMappa = {
  nome: string
  destinazioneSlug?: string
}

export type VoceBudget = {
  etichetta: string
  valore?: string
}

export type ViaggioInBreve = {
  percheHoScelto?: string
  conChiSonoPartito?: string
  cosaCercavo?: string
  treEsperienzePiuBelle?: string
  cosaCambierei?: string
  aChiLoConsiglio?: string
}

export type TripMeta = {
  tripSlug: string
  paeseSlug: string
  ritmo: string
  trasporti: string
  stile: string[]
  adattoA: string[]
  puntiForti: string[]
  criticita: string[]
  budgetTotale?: string
  viaggioInBreve: ViaggioInBreve
  tappeMappa: TappaMappa[]
  giorni: GiornoMeta[]
  budget: VoceBudget[]
}

// --- Sezione "Meraviglie del mondo" ---
// Guida indipendente dal layer Paesi/Destinazioni/Esperienze: ogni monumento
// ha una sola pagina densissima di informazioni pratiche (non un itinerario
// di viaggio). Vedi src/content/meraviglie.ts.

export type SezioneMeraviglia = {
  nome: string
  perche: string
}

export type Meraviglia = {
  slug: string
  nome: string
  nomeLocale?: string
  paese: string
  citta: string
  titolo: string
  descrizione: string
  storiaBreve: string
  visitataPersonalmente: boolean
  periodoMigliore: string
  durataConsigliata: string
  comeArrivareInternazionale: string
  comeArrivareLocale: string
  comeSpostarsi: string
  prenotazione: string
  prezzi: string
  tourOAutonomo: string
  scamDaEvitare: string[]
  sezioniDaVedere: SezioneMeraviglia[]
  giorniSpeciali: string
  doveDormire: string
  erroriDaEvitare: string[]
  /** Se assente, la UI mostra un placeholder editoriale invece di inventare un ricordo. */
  miaEsperienza?: string
  heroImageAlt: string
  /** Percorso in /public. Se assente, la UI mostra un fallback tipografico invece di inventare un'immagine. */
  heroImage?: string
}
