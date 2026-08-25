import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "Islanda in tenda".
// Il testo narrativo resta nel markdown (src/content/viaggi/02-islanda-2024.md):
// questo file aggiunge solo i campi che il markdown non modella esplicitamente
// (pernottamento per giorno, intensità, link a destinazioni, budget, mappa).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const islanda2024Meta: TripMeta = {
  tripSlug: 'islanda-2024',
  paeseSlug: 'islanda',
  ritmo: 'Intenso — giornate lunghe di guida alternate a tappe naturalistiche molto dense, con notti quasi sempre in tenda',
  trasporti: 'Volo su Keflavík, auto a noleggio per l\'intero anello (Ring Road), tenda a noleggio in loco',
  stile: ['natura', 'avventura', 'campeggio', 'on the road'],
  adattoA: ['coppie', 'piccoli gruppi', 'chi non ha problemi a dormire in tenda anche con temperature vicine allo 0°C'],
  puntiForti: [
    'Anello completo dell\'isola (Ring Road) in 9 giorni, con quasi tutti i grandi classici islandesi in un unico viaggio',
    'Mix più unico che raro nello stesso itinerario: ghiacciaio, laguna glaciale, vulcano attivo e terme naturali',
    'Il campeggio abbatte i costi degli alloggi, i più cari della spesa in un\'isola già cara di suo',
  ],
  criticita: [
    'Ritmo di guida molto impegnativo: alcune tratte superano le 5-7 ore anche con soste, meglio essere in due a saper guidare',
    'Diversi dettagli (giorno esatto dell\'eruzione, campeggio di Höfn, alcuni ristoranti dei Giorni 4-8) sono ancora da confermare con foto/ricordi',
    'Il vento è una variabile costante da mettere in conto, soprattutto in tenda e sulle spiagge esposte',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Keflavík', destinazioneSlug: 'keflavik' },
    { nome: 'Vík', destinazioneSlug: 'vik' },
    { nome: 'Skaftafell e Jökulsárlón', destinazioneSlug: 'skaftafell-jokulsarlon' },
    { nome: 'Höfn', destinazioneSlug: 'hofn' },
    { nome: 'Egilsstaðir', destinazioneSlug: 'egilsstadir' },
    { nome: 'Ásbyrgi', destinazioneSlug: 'asbyrgi' },
    { nome: 'Akureyri / Mývatn', destinazioneSlug: 'akureyri' },
    { nome: 'Grundarfjörður', destinazioneSlug: 'grundarfjordur' },
    { nome: 'Reykjavík', destinazioneSlug: 'reykjavik' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Keflavík e l\'eruzione vista da vicino',
      tratta: 'Arrivo a Keflavík',
      pernottamento: 'Konvin Hotel',
      statoPernottamento: 'provato',
      intensita: 'medio',
      costiNoti: 'Bus 55: 4€ a persona a tratta',
      destinazioneSlug: 'keflavik',
    },
    {
      titoloGiorno: 'Giorno 2 — Golden Circle: Geysir e Gullfoss',
      tratta: 'Keflavík → Golden Circle (Geysir, Gullfoss) → Seljalandsfoss → Skógafoss → Vík',
      pernottamento: 'Campeggio di Vík',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      costiNoti: 'Campeggio 1.950 ISK + doccia 300 ISK · parcheggio Seljalandsfoss 700 ISK',
      destinazioneSlug: 'vik',
    },
    {
      titoloGiorno: 'Giorno 3 — Dyrhólaey, Reynisfjara e la laguna glaciale',
      tratta: 'Vík → Dyrhólaey → Reynisfjara → Fjaðrárgljúfur → Skaftafell (ghiacciaio) → Jökulsárlón (kayak) → Höfn',
      pernottamento: 'Campeggio Vestrahorn o comunale di Höfn (da confermare quale)',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'Pranzo a Reynisfjara 2-3.000 ISK',
      destinazioneSlug: 'skaftafell-jokulsarlon',
    },
    {
      titoloGiorno: 'Giorno 4 — Viking Village, fiordi dell\'Est ed Egilsstaðir',
      tratta: 'Höfn (Viking Village) → fiordi dell\'Est → Egilsstaðir (Vök Baths)',
      pernottamento: 'Camp Egilsstaðir',
      statoPernottamento: 'provato',
      intensita: 'medio',
      costiNoti: 'Campeggio 2.000-2.400 ISK',
      destinazioneSlug: 'egilsstadir',
    },
    {
      titoloGiorno: 'Giorno 5 — Stuðlagil, Dettifoss e Ásbyrgi',
      tratta: 'Egilsstaðir → Stuðlagil Canyon → Dettifoss → Ásbyrgi',
      pernottamento: 'Campeggio del parco nazionale di Ásbyrgi',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'asbyrgi',
    },
    {
      titoloGiorno: 'Giorno 6 — Húsavík, whale watching e il lago Mývatn',
      tratta: 'Ásbyrgi → Húsavík (whale watching) → Mývatn → Akureyri',
      pernottamento: 'Campeggio Hamrar (Akureyri)',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      costiNoti: 'Campeggio ~1.500 ISK/persona + quota tenda',
      destinazioneSlug: 'akureyri',
    },
    {
      titoloGiorno: 'Giorno 7 — Verso la penisola di Snæfellsnes',
      tratta: 'Akureyri → Route 1/Borgarnes → Snæfellsnes → Grundarfjörður (Kirkjufell)',
      pernottamento: 'Campeggio ai piedi del Kirkjufell',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'grundarfjordur',
    },
    {
      titoloGiorno: 'Giorno 8 — Relax termale e rientro a Reykjavík',
      tratta: 'Grundarfjörður → sosta termale (West Iceland) → Reykjavík',
      pernottamento: 'Hotel a Reykjavík (nome da confermare)',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'reykjavik',
    },
    {
      titoloGiorno: 'Giorno 9 — Rientro',
      tratta: 'Reykjavík → Keflavík (rientro)',
      pernottamento: 'nessun pernottamento (giorno di partenza)',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'reykjavik',
    },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'Campeggi e hotel', valore: undefined },
    { etichetta: 'Auto a noleggio e tenda', valore: undefined },
    { etichetta: 'Escursioni (ghiacciaio, kayak, whale watching, terme)', valore: undefined },
    { etichetta: 'Cibo', valore: undefined },
    { etichetta: 'Totale', valore: undefined },
  ],
}
