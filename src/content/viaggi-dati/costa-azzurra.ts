import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Costa Azzurra: 8 giorni da Antibes".
// Il testo narrativo resta nel markdown (src/content/viaggi/39-costa-azzurra.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const costaAzzurraMeta: TripMeta = {
  tripSlug: 'costa-azzurra',
  paeseSlug: 'francia',
  ritmo: 'Base fissa ad Antibes, spostamenti in treno lungo la costa, con un\'estensione opzionale nel Mercantour',
  trasporti: 'Treno regionale costiero per tutto; auto solo per l\'entroterra e il Mercantour',
  stile: [
    'mare',
    'arte',
    'borghi',
  ],
  adattoA: [
    'chi vuole una base comoda e usa il treno invece dell\'auto',
    'chi cerca arte del Novecento oltre alle spiagge',
    'chi ha tempo per un\'estensione in alta montagna',
  ],
  puntiForti: [
    'Il sentiero del litorale del Cap d\'Antibes, gratuito e imperdibile',
    'La Fondation Maeght a Saint-Paul-de-Vence, con il cortile di Giacometti',
    'Le Isole di Lerino davanti a Cannes, a un quarto d\'ora e da un altro mondo',
  ],
  criticita: [
    'Luglio e agosto sono il peggior momento possibile su ogni parametro',
    'Gran parte della costa, Nizza compresa, è di ciottoli e non di sabbia',
    'Il parcheggio nelle città costiere è caro, scarso e in estate una battaglia',
    'La Chapelle du Rosaire di Matisse ha orari di apertura molto limitati',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, senza auto per la costa',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il sentiero del Cap d\'Antibes con il vento, il cortile di Giacometti alla Fondation Maeght, l\'isola di Saint-Honorat con i monaci',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Antibes', destinazioneSlug: 'costa-azzurra' },
    { nome: 'Nizza', destinazioneSlug: 'costa-azzurra' },
    { nome: 'Saint-Paul-de-Vence', destinazioneSlug: 'costa-azzurra' },
    { nome: 'Èze e Monaco', destinazioneSlug: 'costa-azzurra' },
    { nome: 'Cannes e Isole di Lerino', destinazioneSlug: 'costa-azzurra' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Antibes: la città vecchia e il porto',
      tratta: 'Città vecchia di Antibes, mercato e Musée Picasso',
      pernottamento: 'Antibes',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'costa-azzurra',
    },
    {
      titoloGiorno: 'Giorno 2 — Il Cap d\'Antibes a piedi',
      tratta: 'Sentiero del litorale del Cap d\'Antibes',
      pernottamento: 'Antibes',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'costa-azzurra',
    },
    {
      titoloGiorno: 'Giorno 3 — Nizza',
      tratta: 'Treno per Nizza: Vieux Nice, Cimiez, Promenade',
      pernottamento: 'Antibes',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'costa-azzurra',
    },
    {
      titoloGiorno: 'Giorno 4 — Saint-Paul-de-Vence e Vence',
      tratta: 'Fondation Maeght e Chapelle du Rosaire',
      pernottamento: 'Antibes',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'orari della Chapelle du Rosaire molto limitati: da verificare',
      destinazioneSlug: 'costa-azzurra',
    },
    {
      titoloGiorno: 'Giorno 5 — Èze, La Turbie e Monaco',
      tratta: 'Sentiero Nietzsche fino a Èze, La Turbie, Monaco',
      pernottamento: 'Antibes',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'costa-azzurra',
    },
    {
      titoloGiorno: 'Giorno 6 — Cannes e le Isole di Lerino',
      tratta: 'Cannes e traghetto per le Isole di Lerino',
      pernottamento: 'Antibes',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'verificare orario ultimo traghetto di rientro',
      destinazioneSlug: 'costa-azzurra',
    },
    {
      titoloGiorno: 'Giorno 7 — Grasse e le colline del profumo',
      tratta: 'Grasse, Gorges du Loup, Tourrettes-sur-Loup',
      pernottamento: 'Antibes',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'costa-azzurra',
    },
    {
      titoloGiorno: 'Giorno 8 — Partenza, o estensione nel Mercantour',
      tratta: 'Partenza, o estensione di due giorni nel Mercantour',
      intensita: 'leggero',
      destinazioneSlug: 'costa-azzurra',
    },
  ],
  budget: [
    { etichetta: 'Treno costiero', valore: 'economico e frequente, la scelta giusta quasi sempre' },
    { etichetta: 'Musei', valore: 'Musée Picasso e Fondation Maeght hanno biglietti contenuti' },
    { etichetta: 'Alloggio ad Antibes', valore: 'più economico di Nizza e Cannes a parità di posizione' },
    { etichetta: 'Isole di Lerino', valore: 'traghetto a basso costo, ingresso al forte a pagamento contenuto' },
    { etichetta: 'Parcheggio', valore: 'la voce che sfugge di mano se si porta l\'auto in estate' },
  ],
}
