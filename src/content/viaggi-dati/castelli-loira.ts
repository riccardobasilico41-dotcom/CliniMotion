import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "I Castelli della Loira in 6 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/42-castelli-loira.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const castelliLoiraMeta: TripMeta = {
  tripSlug: 'castelli-loira',
  paeseSlug: 'francia',
  ritmo: 'Un castello al giorno, con una giornata intera lasciata alla bicicletta lungo il fiume',
  trasporti: 'Auto più una giornata a noleggio bici',
  stile: [
    'castelli',
    'giardini',
    'bicicletta',
  ],
  adattoA: [
    'chi non vuole vedere più di cinque o sei castelli in una settimana',
    'chi vuole unire i monumenti a una giornata nel paesaggio',
    'chi viaggia con famiglia grazie alla scala accessibile della valle',
  ],
  puntiForti: [
    'La scala a doppia elica di Chambord',
    'La galleria di Chenonceau sul fiume Cher, con la sua storia della linea di demarcazione',
    'Una giornata intera in bicicletta lungo l\'argine della Loira',
  ],
  criticita: [
    'Vederne troppi in pochi giorni li rende indistinguibili',
    'I giardini di Villandry fuori stagione sono spogli',
    'I parcheggi dei grandi castelli si riempiono presto in alta stagione',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, auto e bicicletta',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'La terrazza di Chambord tra i camini, la galleria di Chenonceau sull\'acqua, una cantina scavata nel tufo',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Blois', destinazioneSlug: 'castelli-loira' },
    { nome: 'Chambord', destinazioneSlug: 'castelli-loira' },
    { nome: 'Chenonceau e Amboise', destinazioneSlug: 'castelli-loira' },
    { nome: 'Villandry e Azay-le-Rideau', destinazioneSlug: 'castelli-loira' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo e Blois',
      tratta: 'Arrivo e visita al castello di Blois',
      pernottamento: 'Amboise o Blois',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'castelli-loira',
    },
    {
      titoloGiorno: 'Giorno 2 — Chambord',
      tratta: 'Chambord: scala a doppia elica e terrazza',
      pernottamento: 'Amboise o Blois',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'castelli-loira',
    },
    {
      titoloGiorno: 'Giorno 3 — Chenonceau e Amboise',
      tratta: 'Chenonceau, poi Amboise e il Clos Lucé',
      pernottamento: 'Amboise',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'castelli-loira',
    },
    {
      titoloGiorno: 'Giorno 4 — In bicicletta lungo la Loira',
      tratta: 'Giornata in bicicletta lungo la Loira',
      pernottamento: 'Amboise',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'castelli-loira',
    },
    {
      titoloGiorno: 'Giorno 5 — Villandry e Azay-le-Rideau',
      tratta: 'Villandry e Azay-le-Rideau',
      pernottamento: 'Amboise o Tours',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'castelli-loira',
    },
    {
      titoloGiorno: 'Giorno 6 — Cheverny o Fontevraud, e partenza',
      tratta: 'Cheverny o Fontevraud, partenza',
      intensita: 'leggero',
      destinazioneSlug: 'castelli-loira',
    },
  ],
  budget: [
    { etichetta: 'Biglietti dei castelli', valore: 'ogni castello ha il suo biglietto; formule cumulative convengono da tre-quattro visite' },
    { etichetta: 'Noleggio bici', valore: 'prezzo contenuto, supplemento per il ritiro a senso unico' },
    { etichetta: 'Alloggio', valore: 'Amboise o Blois offrono il miglior compromesso di posizione e prezzo' },
    { etichetta: 'Degustazioni in cantina', valore: 'gratuite o a prezzo simbolico nelle proprietà minori' },
  ],
}
