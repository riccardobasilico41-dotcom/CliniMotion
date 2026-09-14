import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Settimana bianca in Francia".
// Il testo narrativo resta nel markdown (src/content/viaggi/46-settimana-bianca-francia.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const settimanaBiancaFranciaMeta: TripMeta = {
  tripSlug: 'settimana-bianca-francia',
  paeseSlug: 'francia',
  ritmo: 'Una settimana classica da sabato a sabato su un grande comprensorio d\'alta quota, con una giornata a Chamonix',
  trasporti: 'Navette gratuite in stazione; auto solo per l\'arrivo e la partenza',
  stile: [
    'sci',
    'montagna',
    'inverno',
  ],
  adattoA: [
    'chi cerca grande estensione e neve garantita dalla quota',
    'chi vuole unire lo sci di pista a un\'esperienza ad alta quota a Chamonix',
    'chi verifica il calendario delle vacanze scolastiche prima di prenotare',
  ],
  puntiForti: [
    'L\'estensione dei grandi comprensori collegati francesi, i più vasti al mondo',
    'L\'Aiguille du Midi a 3.842 metri, con la terrazza sul massiccio del Monte Bianco',
    'La possibilità di provare scialpinismo o ciaspole in una valle laterale',
  ],
  criticita: [
    'Le vacanze scolastiche francesi sono scaglionate in tre zone: il prezzo e l\'affollamento dipendono da quella variabile',
    'Il soccorso sulle piste in Francia è a pagamento: serve l\'assicurazione venduta con lo skipass',
    'Il sabato in alta stagione le strade della Tarentaise registrano code lunghe',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, appartamento in residence',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'La vista dall\'Aiguille du Midi, una discesa su un grande comprensorio collegato, una mattina di scialpinismo in silenzio',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Grande comprensorio', destinazioneSlug: 'sciare-in-francia' },
    { nome: 'Chamonix', destinazioneSlug: 'sciare-in-francia' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo',
      tratta: 'Arrivo, ritiro appartamento e attrezzatura',
      pernottamento: 'stazione scelta',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'sciare-in-francia',
    },
    {
      titoloGiorno: 'Giorno 2 — Sci nel comprensorio principale',
      tratta: 'Sci nel comprensorio principale',
      pernottamento: 'stazione scelta',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'sciare-in-francia',
    },
    {
      titoloGiorno: 'Giorno 3 — Sci nel comprensorio principale',
      tratta: 'Sci nel comprensorio principale',
      pernottamento: 'stazione scelta',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'sciare-in-francia',
    },
    {
      titoloGiorno: 'Giorno 4 — Giornata in una valle laterale o a Chamonix',
      tratta: 'Giornata a Chamonix: Aiguille du Midi',
      pernottamento: 'stazione scelta',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'prenotazione online con fascia oraria consigliata',
      destinazioneSlug: 'sciare-in-francia',
    },
    {
      titoloGiorno: 'Giorno 5 — Sci libero',
      tratta: 'Sci libero, con una mezza giornata di scialpinismo',
      pernottamento: 'stazione scelta',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'sciare-in-francia',
    },
    {
      titoloGiorno: 'Giorno 6 — Sci libero',
      tratta: 'Sci libero',
      pernottamento: 'stazione scelta',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'sciare-in-francia',
    },
    {
      titoloGiorno: 'Giorno 7 — Ultima mattina e partenza',
      tratta: 'Ultima mattina sugli sci, partenza',
      intensita: 'leggero',
      destinazioneSlug: 'sciare-in-francia',
    },
  ],
  budget: [
    { etichetta: 'Forfait', valore: 'la voce più alta: online e in anticipo costa sensibilmente meno che alla cassa' },
    { etichetta: 'Appartamento in residence', valore: 'formula dominante, settimana da sabato a sabato' },
    { etichetta: 'Assicurazione soccorso piste', valore: 'pochi euro al giorno, venduta con lo skipass' },
    { etichetta: 'Aiguille du Midi', valore: 'biglietto elevato, tra i più cari d\'Europa per un impianto turistico' },
  ],
}
