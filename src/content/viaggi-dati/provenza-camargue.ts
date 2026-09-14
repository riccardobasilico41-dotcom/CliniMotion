import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Provenza, Camargue e Occitania in 10 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/45-provenza-camargue.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const provenzaCamargueMeta: TripMeta = {
  tripSlug: 'provenza-camargue',
  paeseSlug: 'francia',
  ritmo: 'Romani e villaggi a est, delta e cavalli al centro, castelli catari e canali a ovest',
  trasporti: 'Auto a noleggio per tutto il percorso',
  stile: [
    'paesaggi',
    'natura',
    'storia',
  ],
  adattoA: [
    'chi vuole unire archeologia romana, natura selvaggia e storia medievale in un solo viaggio',
    'chi ha una finestra di tempo compatibile con la fioritura della lavanda',
    'chi cerca il sud della Francia senza fermarsi solo alla Costa Azzurra',
  ],
  puntiForti: [
    'Il Pont du Gard, con il bagno nel fiume sotto le arcate romane',
    'I fenicotteri e i cavalli bianchi della Camargue',
    'Le Gole del Verdon, il canyon più profondo d\'Europa',
  ],
  criticita: [
    'La lavanda ha una finestra di fioritura breve e diversa per altopiano',
    'Le Calanques hanno un accesso variabile giorno per giorno d\'estate per rischio incendio',
    'Non si entra nei campi di lavanda privati per le fotografie',
    'Le grandi città della zona richiedono la vignetta Crit\'Air',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con auto a noleggio',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il bagno sotto le arcate del Pont du Gard, i fenicotteri della Camargue al tramonto, il canyon del Verdon a piedi',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Avignone', destinazioneSlug: 'provenza' },
    { nome: 'Camargue', destinazioneSlug: 'camargue' },
    { nome: 'Luberon e lavanda', destinazioneSlug: 'provenza' },
    { nome: 'Gole del Verdon', destinazioneSlug: 'provenza' },
    { nome: 'Marsiglia e Calanques', destinazioneSlug: 'provenza' },
    { nome: 'Occitania', destinazioneSlug: 'occitania' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Avignone',
      tratta: 'Palazzo dei Papi, ponte di Avignone',
      pernottamento: 'Avignone',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'provenza',
    },
    {
      titoloGiorno: 'Giorno 2 — Pont du Gard e Nîmes',
      tratta: 'Pont du Gard e arena di Nîmes',
      pernottamento: 'Avignone',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'provenza',
    },
    {
      titoloGiorno: 'Giorno 3 — Arles e la Camargue',
      tratta: 'Arles e ingresso in Camargue',
      pernottamento: 'zona Camargue',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'camargue',
    },
    {
      titoloGiorno: 'Giorno 4 — Camargue',
      tratta: 'Fenicotteri, cavalli, Saintes-Maries-de-la-Mer',
      pernottamento: 'zona Camargue',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'camargue',
    },
    {
      titoloGiorno: 'Giorno 5 — Aigues-Mortes e le Alpilles',
      tratta: 'Aigues-Mortes, saline rosa, Alpilles',
      pernottamento: 'zona Luberon',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'camargue',
    },
    {
      titoloGiorno: 'Giorno 6 — Il Luberon e la lavanda (se in stagione)',
      tratta: 'Gordes, Roussillon, campi di lavanda se in stagione',
      pernottamento: 'zona Luberon',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'verificare stato della fioritura pochi giorni prima',
      destinazioneSlug: 'provenza',
    },
    {
      titoloGiorno: 'Giorno 7 — Le Gole del Verdon',
      tratta: 'Gole del Verdon a piedi o in kayak',
      pernottamento: 'zona Verdon',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'provenza',
    },
    {
      titoloGiorno: 'Giorno 8 — Aix-en-Provence e Marsiglia',
      tratta: 'Aix-en-Provence, Marsiglia',
      pernottamento: 'Marsiglia o Cassis',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'provenza',
    },
    {
      titoloGiorno: 'Giorno 9 — Le Calanques',
      tratta: 'Calanques tra Marsiglia e Cassis',
      pernottamento: 'Cassis',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'verificare stato di accesso giornaliero per rischio incendio',
      destinazioneSlug: 'provenza',
    },
    {
      titoloGiorno: 'Giorno 10 — Un castello cataro o Carcassonne, e partenza',
      tratta: 'Un castello cataro o Carcassonne, partenza',
      intensita: 'medio',
      destinazioneSlug: 'occitania',
    },
  ],
  budget: [
    { etichetta: 'Pont du Gard e Nîmes', valore: 'biglietti contenuti, cumulativi disponibili' },
    { etichetta: 'Camargue', valore: 'attività gratuite o a basso costo, la passeggiata a cavallo la voce più alta' },
    { etichetta: 'Verdon', valore: 'noleggio kayak a prezzo medio' },
    { etichetta: 'Alloggio', valore: 'variabile: il Luberon in stagione di lavanda è la zona più cara' },
  ],
}
