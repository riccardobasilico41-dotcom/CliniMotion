import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "Thailandia". Il testo
// narrativo resta nel markdown (src/content/viaggi/06-thailandia.md).
// A differenza degli altri Paesi, il markdown copre più viaggi nel tempo:
// qui vengono mappati solo gli 11 giorni del "giro principale" (sezione
// "## Itinerario del giro principale"), non le zone extra (Bangkok
// ricorrente, Chiang Mai, Phuket/Similan, Golfo di Thailandia), che restano
// sezioni generiche fuori dal DayTimeline giorno per giorno.

export const thailandiaMeta: TripMeta = {
  tripSlug: 'thailandia',
  paeseSlug: 'thailandia',
  ritmo: 'Denso — quasi ogni giorno un trasferimento e una tappa diversa, tra van, barca e volo interno',
  trasporti: 'Van organizzato per il giro principale, traghetti per le isole, volo interno Krabi-Bangkok',
  stile: ['mare', 'giungla', 'isole'],
  adattoA: ['chi vuole un giro completo del sud della Thailandia in poco più di una settimana', 'chi cerca sia giungla sia isole nello stesso viaggio', 'viaggi organizzati in gruppo'],
  puntiForti: [
    'La varietà di paesaggi in soli 11 giorni: mercati, parchi nazionali, giungla, isole',
    'Il lago Cheow Lan a Khao Sok, tra le esperienze più belle di tutta la Thailandia',
    'Bond Island e il giro in canoa nella baia di Phang Nga',
  ],
  criticita: [
    'Il ritmo è denso, con trasferimenti diversi quasi ogni giorno',
    'Il mercato galleggiante e il mercato del treno sono molto turistici, con prezzi gonfiati rispetto a un mercato locale',
    'Diversi hotel del giro non sono specificati per nome nelle fonti del viaggio',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'gruppo organizzato con van e guida locale per il giro principale',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'La crociera al tramonto sul lago Cheow Lan, Bond Island in canoa, Koh Phi Phi dal punto panoramico',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Bangkok', destinazioneSlug: 'bangkok' },
    { nome: 'Hua Hin', destinazioneSlug: 'hua-hin' },
    { nome: 'Sam Roi Yot e Kui Buri', destinazioneSlug: 'sam-roi-yot-kui-buri' },
    { nome: 'Khao Sok', destinazioneSlug: 'khao-sok' },
    { nome: 'Krabi', destinazioneSlug: 'krabi' },
    { nome: 'Koh Phi Phi', destinazioneSlug: 'koh-phi-phi' },
    { nome: 'Krabi', destinazioneSlug: 'krabi' },
    { nome: 'Bangkok', destinazioneSlug: 'bangkok' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Bangkok',
      tratta: 'Prima serata a Bangkok, Khao San Road',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'bangkok',
    },
    {
      titoloGiorno: 'Giorno 2 — Bangkok-Hua Hin',
      tratta: 'Bangkok → Floating Market → Train Market → Hua Hin',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'hua-hin',
    },
    {
      titoloGiorno: 'Giorno 3 — Hua Hin-Chumphon',
      tratta: 'Hua Hin → Sam Roi Yot → Kui Buri → Chumphon',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'Sam Roi Yot 200 THB a persona; Kui Buri 1.050 THB a persona',
      destinazioneSlug: 'sam-roi-yot-kui-buri',
    },
    {
      titoloGiorno: 'Giorno 4 — Chumphon-Khao Sok',
      tratta: 'Chumphon → Khao Sok (circa 4h30)',
      pernottamento: 'Smiley Bungalows',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Ingresso al parco 220 THB a persona',
      destinazioneSlug: 'khao-sok',
    },
    {
      titoloGiorno: 'Giorno 5 — Khao Sok, il lago Cheow Lan',
      tratta: 'Khao Sok → lago Cheow Lan (resort galleggiante)',
      pernottamento: 'resort galleggiante sul lago Cheow Lan',
      statoPernottamento: 'provato',
      intensita: 'medio',
      destinazioneSlug: 'khao-sok',
    },
    {
      titoloGiorno: 'Giorno 6 — Khao Sok-Krabi',
      tratta: 'Lago Cheow Lan → Krabi (1h barca + 2h strada)',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'krabi',
    },
    {
      titoloGiorno: 'Giorno 7 — Krabi: Bond Island e canoa',
      tratta: 'Escursione di giornata intera a Bond Island e Koh Panyee',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'krabi',
    },
    {
      titoloGiorno: 'Giorno 8 — Krabi-Koh Phi Phi',
      tratta: 'Krabi → Koh Phi Phi, traghetto (circa 2h30)',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'koh-phi-phi',
    },
    {
      titoloGiorno: 'Giorno 9 — Koh Phi Phi-Krabi',
      tratta: 'Koh Phi Phi → Krabi, traghetto di ritorno',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'krabi',
    },
    {
      titoloGiorno: 'Giorno 10 — Krabi-Bangkok',
      tratta: 'Krabi → Bangkok, volo interno',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'bangkok',
    },
    {
      titoloGiorno: 'Giorno 11 — Bangkok',
      tratta: 'Ultima giornata libera a Bangkok',
      pernottamento: 'da completare',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'bangkok',
    },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'Van, guida e alloggi del giro principale', valore: undefined },
    { etichetta: 'Escursioni (Sam Roi Yot, Kui Buri, Bond Island)', valore: '200-1.050 THB a persona ciascuna' },
    { etichetta: 'Totale', valore: undefined },
  ],
}
