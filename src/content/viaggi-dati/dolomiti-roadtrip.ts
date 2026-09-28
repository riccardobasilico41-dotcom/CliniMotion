import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Dolomiti Roadtrippin'".
// Il testo narrativo resta nel markdown (src/content/viaggi/23-dolomiti-roadtrip.md).
// A differenza degli altri viaggi, qui `giorni[]` non rappresenta giorni di
// calendario ma le 10 zone del roadtrip modulare — vedi la nota in cima al
// markdown. `titoloGiorno` deve combaciare esattamente con le intestazioni
// "### ..." del file markdown, altrimenti il merge in DayTimeline non trova
// la corrispondenza.

export const dolomitiRoadtripMeta: TripMeta = {
  tripSlug: 'dolomiti-roadtrip',
  paeseSlug: 'italia',
  ritmo:
    'Modulare, non lineare: si combinano le zone in base ai giorni disponibili, da un weekend su una zona sola a un giro di due settimane. Tre proposte pronte da 5, 7 e 10 giorni nella scheda pratica.',
  trasporti:
    "Auto fortemente consigliata: è l'unico modo pratico di collegare le zone tra loro. Dentro ogni singola valle i mezzi pubblici funzionano bene (bus SAD, Alto Adige Val Gardena/Val Badia Mobil Card inclusa in molte strutture), ma da una zona all'altra i collegamenti sono scarsi o assenti.",
  stile: ['trekking', 'roadtrip', 'sci', 'montagna'],
  adattoA: [
    'chi preferisce costruirsi il proprio giro invece di seguire un itinerario fisso giorno per giorno',
    'chi ha in mente di tornarci più volte e vuole una mappa delle zone prima di scegliere dove andare la prima volta',
    'chi cammina, ma anche chi vuole vedere le stesse pareti stando comodo su una seggiovia',
    "chi accetta che la parte migliore delle Dolomiti d'estate va prenotata con largo anticipo",
  ],
  puntiForti: [
    'Dieci zone trattate come luoghi distinti invece che tappe di un unico itinerario, con pro, contro e un\'indicazione di quanto tempo dedicarci',
    "Il confronto onesto tra chi cammina forte e chi vuole solo il panorama, con dislivelli e difficoltà indicati per ogni proposta",
    "Tre roadtrip pronti (5, 7, 10 giorni) che combinano le zone senza dover fare il lavoro di incastro da soli",
  ],
  criticita: [
    "L'overtourism estivo è reale e concentrato: Lago di Braies e Tre Cime nelle ore centrali di luglio-agosto sono code, parcheggi pieni entro le 8 e un'esperienza molto diversa da quella che vendono le foto",
    'I parcheggi e le funivie nelle zone più fotografate costano cifre che pesano su un budget giornaliero — vanno messi in conto, non scoperti sul posto',
    'Dal 2026 la strada per le Tre Cime richiede prenotazione online obbligatoria oltre al pedaggio, e il Lago di Braies contingenta l\'accesso in auto tra le 9 e le 16 in alta stagione',
    "I rifugi si prenotano da gennaio-febbraio per l'estate: chi ci pensa a giugno per agosto non ci dorme",
    "In inverno la Sella Ronda con lo skipass Dolomiti Superski è tra i circuiti più affollati delle Alpi nei weekend e nelle vacanze di Natale",
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    treEsperienzePiuBelle:
      "L'enrosadira vista da un rifugio in quota, il giro ad anello delle Tre Cime alle sei e mezza del mattino prima della processione di gente, la prima volta dentro le gallerie del Lagazuoi",
  },
  unitaGiorniLabel: 'Zona',
  tappeMappa: [
    { nome: 'Val Gardena', destinazioneSlug: 'dolomiti' },
    { nome: 'Alta Badia', destinazioneSlug: 'dolomiti' },
    { nome: 'I Quattro Passi', destinazioneSlug: 'dolomiti' },
    { nome: 'Il Lagazuoi', destinazioneSlug: 'dolomiti' },
    { nome: 'La Marmolada', destinazioneSlug: 'dolomiti' },
    { nome: 'Valle di Braies', destinazioneSlug: 'dolomiti' },
    { nome: 'Tre Cime e San Candido', destinazioneSlug: 'dolomiti' },
    { nome: 'Brunico e la Val Pusteria', destinazioneSlug: 'dolomiti' },
    { nome: "Vipiteno e l'Alta Val d'Isarco", destinazioneSlug: 'dolomiti' },
    { nome: 'Val di Sole', destinazioneSlug: 'dolomiti' },
  ],
  giorni: [
    {
      titoloGiorno: 'Val Gardena, Ortisei e la Seceda',
      tratta: "Da Bolzano, 40 minuti d'auto",
      intensita: 'medio',
      costiNoti: 'cabinovia Ortisei-Seceda circa 30-35€ A/R',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/giorno-7-seceda.jpg',
      imageAlt: 'La cresta erbosa di Seceda che si spezza di colpo nelle guglie verticali delle Odle',
    },
    {
      titoloGiorno: 'Alta Badia e il Parco di Fanes-Sennes',
      tratta: 'Da Ortisei, 30 minuti sul Passo Gardena',
      intensita: 'medio',
      costiNoti: 'parcheggio a San Vigilio di Marebbe pochi euro/ora',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/giorno-2-fanes.jpg',
      imageAlt: "Il Lago di Fanes con le conche d'alta quota del parco Fanes-Sennes sullo sfondo",
    },
    {
      titoloGiorno: 'I Quattro Passi e il Sella Ronda',
      tratta: 'Anello Gardena-Sella-Pordoi-Campolongo, circa 55 km',
      intensita: 'leggero',
      costiNoti: 'parcheggi ai passi 3-8€/ora in alta stagione; nessun pedaggio sulla strada',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/giorno-4-rifugio-nuvolau.jpg',
      imageAlt: 'Il Rifugio Nuvolau in vetta, con gli escursionisti in arrivo dalle Cinque Torri',
    },
    {
      titoloGiorno: 'Il Lagazuoi e le trincee della Grande Guerra',
      tratta: 'Passo Falzarego, 15 minuti da Cortina',
      intensita: 'medio',
      costiNoti: 'funivia del Lagazuoi circa 25-28€ A/R',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/giorno-6-lagazuoi.jpg',
      imageAlt: 'Le gallerie scavate nella roccia del Lagazuoi durante la Prima guerra mondiale',
    },
    {
      titoloGiorno: 'La Marmolada, la Regina delle Dolomiti',
      tratta: 'Da Canazei o da Alta Badia, circa 45 minuti fino a Malga Ciapela',
      intensita: 'medio',
      costiNoti: 'funivia Malga Ciapela-Punta Rocca circa 35-38€ A/R',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/marmolada.jpg',
      imageAlt: 'Il ghiacciaio della Marmolada visto dal Lago di Fedaia, con la diga in primo piano',
    },
    {
      titoloGiorno: 'La Valle di Braies',
      tratta: 'Da Brunico, 30 minuti; accesso regolamentato in alta stagione',
      intensita: 'leggero',
      costiNoti:
        'parcheggio 5-10€ (bus navetta incluso fuori stagione); accesso auto contingentato 9-16 in estate, con prenotazione online obbligatoria',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/giorno-1-lago-di-braies.jpg',
      imageAlt: 'Il Lago di Braies con le sue barche a remi e le pareti dolomitiche sullo sfondo',
    },
    {
      titoloGiorno: 'Le Tre Cime di Lavaredo e San Candido',
      tratta: 'Da San Candido, 30 minuti fino al Rifugio Auronzo',
      intensita: 'medio',
      costiNoti: 'pedaggio strada Tre Cime circa 40€ per auto (12 ore), prenotazione online obbligatoria dal 2026',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/giorno-3-tre-cime.jpg',
      imageAlt: 'Le Tre Cime di Lavaredo al tramonto viste dal Rifugio Locatelli',
    },
    {
      titoloGiorno: 'Brunico e la Val Pusteria',
      tratta: 'Snodo centrale della Val Pusteria, 20 minuti da Braies e da San Candido',
      intensita: 'leggero',
      costiNoti: 'parcheggi del centro storico 1-2€/ora',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/brunico.jpg',
      imageAlt: 'La Stadtgasse, la via principale del centro storico di Brunico',
    },
    {
      titoloGiorno: "Vipiteno e l'Alta Val d'Isarco",
      tratta: 'Uscita autostrada A22, punto più a nord del giro',
      intensita: 'leggero',
      costiNoti: 'parcheggi del centro pochi euro; ingresso al centro storico gratuito',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/vipiteno.jpg',
      imageAlt: 'La Torre delle Dodici (Zwölferturm) sulla via principale di Vipiteno',
    },
    {
      titoloGiorno: "Val di Sole, l'altra faccia del Trentino",
      tratta: "Circa 2 ore d'auto da Bolzano, verso il Parco Nazionale dello Stelvio e le Dolomiti di Brenta",
      intensita: 'leggero',
      costiNoti: 'terme di Pejo/Rabbi 20-30€ ingresso giornaliero',
      destinazioneSlug: 'dolomiti',
      immagine: '/images/viaggi/dolomiti-roadtrip/val-di-sole.jpg',
      imageAlt: 'Un sentiero di montagna nei pressi di Peio, in Val di Sole, con le vette del gruppo Ortles-Cevedale sullo sfondo',
    },
  ],
  budget: [
    { etichetta: 'Parcheggi nelle zone più fotografate', valore: '3-10€/ora, alcuni con tariffa giornaliera' },
    { etichetta: 'Funivie e cabinovie', valore: '25-38€ A/R a seconda della tratta' },
    { etichetta: 'Pedaggio strada Tre Cime', valore: 'circa 40€ per auto, valido 12 ore, prenotazione obbligatoria' },
    { etichetta: 'Accesso Lago di Braies', valore: '5-10€ di parcheggio, prenotazione obbligatoria in alta stagione' },
    { etichetta: 'Mezza pensione in rifugio', valore: '60-80€ a notte, sconti per i soci CAI' },
    { etichetta: 'Tessera CAI', valore: 'si ripaga in circa tre notti in rifugio e include la copertura per il soccorso in montagna' },
    { etichetta: 'Skipass invernale (giornaliero)', valore: '60-75€ per il comprensorio Dolomiti Superski' },
    { etichetta: 'Noleggio kit da ferrata', valore: '15-25€ al giorno; guida alpina a parte' },
  ],
}
