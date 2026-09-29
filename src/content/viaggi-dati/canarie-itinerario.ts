import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Canarie in 9 giorni: Tenerife, Gran
// Canaria e Lanzarote". Il testo narrativo resta nel markdown
// (src/content/viaggi/62-canarie-itinerario.md). `titoloGiorno` deve
// combaciare esattamente con le intestazioni "### Giorno N — ..." del file
// markdown. Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da
// ogni giorno, task separato.
//
// Tre isole su sette, scelta deliberata: Fuerteventura, La Palma, La Gomera e
// El Hierro restano fuori, non per disinteresse ma per lo stesso principio
// già applicato in peru-itinerario.ts — tre isole ben coperte valgono più di
// sette viste di corsa. Fuerteventura e La Palma sono segnalate come
// estensioni possibili nel markdown.

export const canarieItinerarioMeta: TripMeta = {
  tripSlug: 'canarie-itinerario',
  paeseSlug: 'spagna',
  ritmo:
    'Tre isole in nove giorni, con 3 giorni pieni per Tenerife (la più grande e varia), 3 per Gran Canaria e 3 per Lanzarote: ogni cambio isola è un volo interno breve, il ritmo resta rilassato grazie al clima mite costante che non impone stagionalità.',
  trasporti:
    'Voli interni Binter Canarias/Canaryfly tra le isole (30-45 minuti), auto a noleggio su ciascuna isola per raggiungere parchi nazionali e zone rurali.',
  stile: ['vulcani', 'natura', 'isole', 'trekking leggero'],
  adattoA: [
    'chi cerca una meta spagnola con clima mite tutto l\'anno, ideale proprio nei mesi in cui il resto d\'Europa è freddo',
    'chi vuole vedere paesaggi vulcanici di scale diverse: il punto più alto di Spagna, dune quasi sahariane, colate laviche recenti',
    'chi preferisce tre isole viste bene a sette isole viste di corsa',
    'chi è interessato all\'architettura di César Manrique e al modo in cui ha plasmato l\'identità visiva di un\'intera isola',
  ],
  puntiForti: [
    'La vetta del Teide (3.715 m), il punto più alto di Spagna, raggiunta con funivia e permesso dedicato per l\'ultimo tratto a piedi',
    'Il Parco Rurale di Anaga, foresta laurifoglia relitto dell\'era terziaria, a pochi km dalle spiagge turistiche di Tenerife',
    'Le Dune di Maspalomas e il Roque Nublo, due paesaggi opposti sulla stessa isola, Gran Canaria',
    'La Ruta de los Volcanes a Timanfaya, con le dimostrazioni geotermiche dal vivo',
    'Le opere di César Manrique a Lanzarote (Jameos del Agua, Mirador del Río), un unico discorso coerente su architettura e vulcano',
  ],
  criticita: [
    'Il permesso gratuito per l\'ultimo tratto a piedi verso la vetta del Teide è a numero chiuso (200 persone al giorno) e va prenotato fino a 56 giorni prima: senza, ci si ferma alla stazione superiore della funivia',
    'A Timanfaya non si può scendere dal pullman né camminare liberamente sulla lava, per sicurezza (il suolo resta caldo pochi metri sotto la superficie) e tutela ambientale',
    'Le Canarie sono un\'ora indietro rispetto alla Spagna continentale e all\'Italia (UTC+0 contro UTC+1) tutto l\'anno: un dettaglio che genera confusione su voli e coincidenze',
    'Quattro isole restano fuori da questo itinerario (Fuerteventura, La Palma, La Gomera, El Hierro), per concentrarsi su tre coperte con calma invece di sette viste superficialmente',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, voli interni tra le isole, auto a noleggio su ciascuna isola',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Tenerife: Teide e Anaga', destinazioneSlug: 'tenerife' },
    { nome: 'Gran Canaria: Maspalomas e Roque Nublo', destinazioneSlug: 'gran-canaria' },
    { nome: 'Lanzarote: Timanfaya e Manrique', destinazioneSlug: 'lanzarote' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Tenerife: Puerto de la Cruz e la costa nord',
      tratta: 'Arrivo internazionale a Tenerife (Sud o Nord) → Puerto de la Cruz',
      pernottamento: 'Puerto de la Cruz, Tenerife',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'tenerife',
    },
    {
      titoloGiorno: 'Giorno 2 — Il Parco Nazionale del Teide',
      pernottamento: 'Puerto de la Cruz, Tenerife',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'funivia circa 40€ A/R; permesso per la vetta gratuito, prenotazione fino a 56 giorni prima',
      destinazioneSlug: 'tenerife',
    },
    {
      titoloGiorno: 'Giorno 3 — Il Parco Rurale di Anaga',
      pernottamento: 'Puerto de la Cruz, Tenerife',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'tenerife',
    },
    {
      titoloGiorno: 'Giorno 4 — Da Tenerife a Gran Canaria',
      tratta: 'Tenerife → Gran Canaria, volo interno (circa 30-40 minuti)',
      pernottamento: 'Las Palmas de Gran Canaria',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'gran-canaria',
    },
    {
      titoloGiorno: 'Giorno 5 — Le dune di Maspalomas',
      pernottamento: 'Las Palmas de Gran Canaria',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'gran-canaria',
    },
    {
      titoloGiorno: 'Giorno 6 — Il centro montuoso di Gran Canaria: il Roque Nublo',
      pernottamento: 'Las Palmas de Gran Canaria',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'gran-canaria',
    },
    {
      titoloGiorno: 'Giorno 7 — Da Gran Canaria a Lanzarote',
      tratta: 'Gran Canaria → Lanzarote, volo interno o traghetto',
      pernottamento: 'Arrecife o Playa Blanca, Lanzarote',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'lanzarote',
    },
    {
      titoloGiorno: 'Giorno 8 — Timanfaya e la Geria',
      pernottamento: 'Arrecife o Playa Blanca, Lanzarote',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Timanfaya con bus incluso circa 12-18€',
      destinazioneSlug: 'lanzarote',
    },
    {
      titoloGiorno: 'Giorno 9 — Le opere di César Manrique e chiusura del viaggio',
      tratta: 'Jameos del Agua → Mirador del Río → volo di rientro',
      intensita: 'leggero',
      costiNoti: 'Jameos del Agua e Cueva de los Verdes circa 10-12€ ciascuno',
      destinazioneSlug: 'lanzarote',
    },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali/internazionali', valore: undefined },
    { etichetta: 'Voli interni tra le isole', valore: 'Tenerife-Gran Canaria e Gran Canaria-Lanzarote, 30-45 minuti ciascuno' },
    { etichetta: 'Teide', valore: 'funivia circa 40€ A/R, permesso vetta gratuito' },
    { etichetta: 'Timanfaya', valore: 'circa 12-18€ con bus incluso' },
    { etichetta: 'Opere di César Manrique', valore: 'circa 10-12€ per sito, biglietto combinato spesso conveniente' },
    { etichetta: 'Auto a noleggio', valore: 'su ciascuna delle tre isole' },
    { etichetta: 'Alloggi e pasti', valore: 'relativamente contenuti anche in bassa stagione altrove in Europa' },
  ],
}
