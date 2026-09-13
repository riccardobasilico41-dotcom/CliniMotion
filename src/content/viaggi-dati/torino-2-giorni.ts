import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Torino in 2 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/32-torino-2-giorni.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const torino2GiorniMeta: TripMeta = {
  tripSlug: 'torino-2-giorni',
  paeseSlug: 'italia',
  ritmo: 'Due giornate compatte, con il Museo Egizio che si prende mezza giornata da solo e il resto sotto i portici',
  trasporti: 'A piedi e sotto i portici, con una linea di metropolitana automatica e le funicolari',
  stile: [
    'musei',
    'architettura',
    'gastronomia',
  ],
  adattoA: [
    'chi cerca una grande città italiana senza le folle di Roma, Firenze e Venezia',
    'chi va per i musei e non per il centro storico diffuso',
    'chi viaggia d\'inverno, quando i portici e la vista sulle Alpi danno il meglio',
  ],
  puntiForti: [
    'Il Museo Egizio, la più importante collezione egizia al mondo dopo il Cairo, con la tomba intatta di Kha e Merit',
    'Il Museo del Cinema dentro la Mole, con l\'ascensore di vetro che sale nel vuoto dell\'aula',
    'La Cappella della Sindone del Guarini, riaperta dopo vent\'anni di restauro',
  ],
  criticita: [
    'La Sindone non è esposta: si vede solo in ostensioni straordinarie decise a distanza di molti anni',
    'Il Museo Egizio va prenotato e richiede almeno tre ore: liquidarlo in un\'ora è lo spreco più comune',
    'Lo slot dell\'ascensore della Mole si esaurisce nelle giornate limpide',
    'Gli allestimenti del Museo Egizio sono stati rinnovati più volte: le informazioni invecchiano in fretta',
    'Luglio e agosto sono caldi e la città si svuota',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, a piedi e in metro',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il corredo intatto della tomba di Kha e Merit, l\'ascensore di vetro dentro la Mole, la cupola della Cappella della Sindone guardata dal basso',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Museo Egizio', destinazioneSlug: 'torino' },
    { nome: 'Piazza Castello e Musei Reali', destinazioneSlug: 'torino' },
    { nome: 'Mole Antonelliana', destinazioneSlug: 'torino' },
    { nome: 'Monte dei Cappuccini e Superga', destinazioneSlug: 'torino' },
    { nome: 'Lingotto', destinazioneSlug: 'torino' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Museo Egizio, piazze e caffè',
      tratta: 'Museo Egizio, Piazza Castello, Musei Reali e Quadrilatero Romano',
      pernottamento: 'Torino, centro tra Piazza Castello e Piazza San Carlo',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'Museo Egizio con fascia oraria prenotata; la Torino+Piemonte Card conviene da tre o quattro musei',
      destinazioneSlug: 'torino',
    },
    {
      titoloGiorno: 'Giorno 2 — La Mole, il fiume e la collina',
      tratta: 'Mole Antonelliana e Museo del Cinema, poi il fiume e la collina oppure il Novecento industriale',
      intensita: 'medio',
      costiNoti: 'ascensore della Mole in biglietto separato o cumulativo con slot; funicolare a cremagliera per Superga',
      destinazioneSlug: 'torino',
    },
  ],
  budget: [
    { etichetta: 'Museo Egizio', valore: 'la voce principale, e la ragione del viaggio' },
    { etichetta: 'Mole e Museo del Cinema', valore: 'biglietto cumulativo con l\'ascensore panoramico' },
    { etichetta: 'Torino+Piemonte Card', valore: 'conviene a partire da tre o quattro musei, realistico in questa città' },
    { etichetta: 'Alloggio', valore: 'in media molto più basso delle altre grandi città d\'arte italiane a parità di categoria' },
    { etichetta: 'Caffè storici', valore: 'un bicerin e un aperitivo al banco sono parte della visita, non un extra' },
  ],
}
