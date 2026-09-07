import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "Giordania 360°". Il testo
// narrativo resta nel markdown (src/content/viaggi/03-giordania-360.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const giordania360Meta: TripMeta = {
  tripSlug: 'giordania-360',
  paeseSlug: 'giordania',
  ritmo: 'Intenso — transfer anche lunghi (fino a 4h30 tra Aqaba e Amman) quasi ogni giorno',
  trasporti: 'Transfer organizzati (minivan/auto) su tutto il percorso, tramite un DMC locale',
  stile: ['deserto', 'storia', 'capodanno'],
  adattoA: ['chi vuole vedere Petra e Wadi Rum senza le folle abituali', 'chi cerca un Capodanno fuori dagli schemi', 'chi vuole un giro completo della Giordania in poco più di una settimana'],
  puntiForti: [
    'Petra e Wadi Rum vissuti quasi deserti per il calo turistico regionale successivo all\'ottobre 2023',
    'Il contrasto tra il deserto di Wadi Rum e il mare di Aqaba nello stesso viaggio',
    'Il Capodanno nel deserto sotto un cielo stellato senza pari',
  ],
  criticita: [
    'Il ritmo è denso, con transfer anche di 3-4 ore quasi ogni giorno',
    'Diversi hotel (Amman, Petra/Wadi Musa, Wadi Rum, Aqaba) non sono annotati per nome nei documenti originali del viaggio: restano segnalati con alternative per fascia di prezzo invece di un giudizio inventato',
    'Il Monte Nebo, spesso presentato come tappa clou, è più un valore simbolico che scenico',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'organizzato tramite un DMC locale, con coordinatore in loco per transfer, guide e attività',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il Tesoro di Petra emerso dal Siq quasi deserto, il jeep safari e il Capodanno nel deserto di Wadi Rum, il tramonto nel Mar Morto',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Amman', destinazioneSlug: 'amman' },
    { nome: 'Jerash', destinazioneSlug: 'jerash' },
    { nome: 'Mar Morto', destinazioneSlug: 'mar-morto' },
    { nome: 'Karak e Monte Nebo', destinazioneSlug: 'karak-monte-nebo' },
    { nome: 'Petra e Little Petra', destinazioneSlug: 'petra' },
    { nome: 'Wadi Rum', destinazioneSlug: 'wadi-rum' },
    { nome: 'Aqaba', destinazioneSlug: 'aqaba' },
    { nome: 'Amman', destinazioneSlug: 'amman' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo ad Amman',
      tratta: 'Arrivo ad Amman',
      pernottamento: 'hotel generico ad Amman (nome non annotato)',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'amman',
    },
    {
      titoloGiorno: 'Giorno 2 — Jerash e Mar Morto',
      tratta: 'Amman → Jerash → Mar Morto',
      pernottamento: 'Holiday Inn Resort Dead Sea by IHG',
      statoPernottamento: 'provato',
      intensita: 'medio',
      destinazioneSlug: 'mar-morto',
    },
    {
      titoloGiorno: 'Giorno 3 — Karak, Monte Nebo e Little Petra',
      tratta: 'Mar Morto → Karak Castle → Monte Nebo → Little Petra',
      pernottamento: 'hotel generico a Wadi Musa (nome non annotato)',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'karak-monte-nebo',
    },
    {
      titoloGiorno: 'Giorno 4 — Petra, giornata intera',
      tratta: 'Giornata intera a Petra',
      pernottamento: 'hotel generico a Wadi Musa (nome non annotato)',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'petra',
    },
    {
      titoloGiorno: 'Giorno 5 — Wadi Rum: cammelli, jeep safari e Capodanno nel deserto',
      tratta: 'Wadi Musa → Wadi Rum',
      pernottamento: 'campo tendato nel deserto (nome non annotato)',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      costiNoti: 'Cammellata 20 JOD; pranzo al sacco 10 JOD',
      destinazioneSlug: 'wadi-rum',
    },
    {
      titoloGiorno: 'Giorno 6 — Alba nel deserto e mare ad Aqaba',
      tratta: 'Wadi Rum → Aqaba',
      pernottamento: 'hotel generico ad Aqaba (nome non annotato)',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'aqaba',
    },
    {
      titoloGiorno: 'Giorno 7 — Rientro ad Amman: due opzioni',
      tratta: 'Aqaba → Amman',
      pernottamento: 'hotel generico ad Amman (nome non annotato)',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'amman',
    },
    {
      titoloGiorno: 'Giorno 8 — Rientro',
      tratta: 'Amman → rientro',
      pernottamento: 'nessun pernottamento (giorno di partenza)',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'amman',
    },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'DMC locale (transfer, guide, attività)', valore: undefined },
    { etichetta: 'Jordan Pass', valore: undefined },
    { etichetta: 'Extra (cammellata, buggy, hammam)', valore: '10-40 JOD ciascuna' },
    { etichetta: 'Totale', valore: undefined },
  ],
}
