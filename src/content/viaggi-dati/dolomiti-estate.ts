import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Dolomiti d'estate".
// Il testo narrativo resta nel markdown (src/content/viaggi/23-dolomiti-estate.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const dolomitiEstateMeta: TripMeta = {
  tripSlug: 'dolomiti-estate',
  paeseSlug: 'italia',
  ritmo: 'Crescente: si comincia con escursioni in giornata da base fissa e si finisce con due notti in quota e una ferrata',
  trasporti: 'Auto propria per il fondovalle, bus di valle dove disponibili, impianti per le quote alte, e gambe per il resto',
  stile: ['trekking', 'rifugi', 'montagna'],
  adattoA: [
    'chi cammina e vuole provare il formato rifugio senza impegnarsi in un\'Alta Via completa',
    'chi accetta di prenotare a febbraio per luglio',
    'chi è disposto a partire alle sette per essere al rifugio prima dei temporali',
  ],
  puntiForti: [
    'Le due notti in quota, che sono la parte che si ricorda',
    'Le Tre Cime alle sei e mezza del mattino, quando è un altro posto',
    'Una ferrata dentro le gallerie della Grande Guerra, che non esiste in altre zone alpine',
  ],
  criticita: [
    'I rifugi si prenotano da gennaio-febbraio: chi ci pensa a giugno per agosto non parte',
    'Dal 2026 la strada per le Tre Cime richiede prenotazione online obbligatoria oltre al pedaggio, e il Lago di Braies contingenta l\'accesso in auto tra le 9 e le 16',
    'I temporali pomeridiani estivi sono regolari e violenti: si parte alle sette',
    'In molti rifugi si paga solo in contanti, perché non c\'è linea',
    'Il soccorso alpino in Italia si paga: la tessera CAI include una copertura ed è la spesa più sensata del viaggio',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con rifugi prenotati da febbraio',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'La sera in rifugio con l\'enrosadira sulle pareti, le Tre Cime all\'alba, la ferrata nelle gallerie del Lagazuoi',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Val Badia', destinazioneSlug: 'dolomiti' },
    { nome: 'Parco Fanes-Sennes', destinazioneSlug: 'dolomiti' },
    { nome: 'Tre Cime di Lavaredo', destinazioneSlug: 'dolomiti' },
    { nome: 'Rifugi in quota', destinazioneSlug: 'dolomiti' },
    { nome: 'Seceda e Alpe di Siusi', destinazioneSlug: 'dolomiti' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo in Val Badia',
      tratta: 'Arrivo in Val Badia',
      pernottamento: 'Maso di fondovalle',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'dolomiti',
    },
    {
      titoloGiorno: 'Giorno 2 — Il Parco Fanes-Sennes',
      pernottamento: 'Maso di fondovalle',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'dolomiti',
    },
    {
      titoloGiorno: 'Giorno 3 — Le Tre Cime di Lavaredo',
      tratta: 'Strada a pedaggio per il Rifugio Auronzo, con prenotazione obbligatoria',
      pernottamento: 'Maso di fondovalle',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'pedaggio circa 40€ per auto, valido 12 ore',
      destinazioneSlug: 'dolomiti',
    },
    {
      titoloGiorno: 'Giorno 4 — Prima notte in rifugio',
      tratta: 'Salita a piedi al rifugio, 4-5 ore e 500-800 m di dislivello',
      pernottamento: 'Rifugio in quota',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'mezza pensione 60-80€, sconti soci CAI',
      destinazioneSlug: 'dolomiti',
    },
    {
      titoloGiorno: 'Giorno 5 — Seconda tappa in quota',
      tratta: 'Traversata da rifugio a rifugio, 5-6 ore',
      pernottamento: 'Rifugio in quota',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'dolomiti',
    },
    {
      titoloGiorno: 'Giorno 6 — Una via ferrata',
      tratta: 'Discesa a valle e giornata in ferrata',
      pernottamento: 'Maso di fondovalle',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'noleggio kit da ferrata 15-25€ al giorno',
      destinazioneSlug: 'dolomiti',
    },
    {
      titoloGiorno: 'Giorno 7 — Seceda, Alpe di Siusi e rientro',
      tratta: 'Seceda o Alpe di Siusi con impianti, poi rientro',
      intensita: 'leggero',
      costiNoti: 'funivie 15-30€ a tratta',
      destinazioneSlug: 'dolomiti',
    },
  ],
  budget: [
    { etichetta: 'Mezza pensione in rifugio', valore: '60-80€ a notte, con sconti importanti per i soci CAI' },
    { etichetta: 'Tessera CAI', valore: 'si ripaga in circa tre notti e include la copertura per il soccorso in montagna' },
    { etichetta: 'Pedaggio Tre Cime', valore: 'circa 40€ per auto, valido 12 ore, con prenotazione obbligatoria dal 2026' },
    { etichetta: 'Funivie estive', valore: '15-30€ a tratta' },
    { etichetta: 'Noleggio kit da ferrata', valore: '15-25€ al giorno; guida alpina a parte' },
    { etichetta: 'Maso di fondovalle', valore: 'il miglior rapporto qualità-prezzo della montagna italiana' },
  ],
}
