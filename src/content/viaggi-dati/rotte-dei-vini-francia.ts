import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Le rotte dei vini di Francia: Alsazia e Champagne".
// Il testo narrativo resta nel markdown (src/content/viaggi/44-rotte-dei-vini-francia.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const rotteDeiViniFranciaMeta: TripMeta = {
  tripSlug: 'rotte-dei-vini-francia',
  paeseSlug: 'francia',
  ritmo: 'Quattro giorni in Alsazia in bicicletta tra i villaggi, quattro in Champagne tra Reims ed Épernay',
  trasporti: 'Auto più bicicletta in Alsazia; treno tra Alsazia e Champagne',
  stile: [
    'vino',
    'borghi',
    'gastronomia',
  ],
  adattoA: [
    'chi fa il primo viaggio del vino in Francia e non sa da dove cominciare',
    'chi cerca cantine che ricevono facilmente, senza il livello di difficoltà della Borgogna',
    'chi vuole unire un paesaggio di villaggi a graticcio con la storia dello Champagne',
  ],
  puntiForti: [
    'I villaggi della Route des Vins d\'Alsace, veri e non ricostruiti',
    'Una crayère di Champagne scavata dai Romani, oggi cantina',
    'La cattedrale di Reims, dove sono stati incoronati i re di Francia',
  ],
  criticita: [
    'In Champagne le grandi maison vanno prenotate con anticipo',
    'Guidare dopo le degustazioni non è un\'opzione: serve guidatore designato o si sputa',
    'La Borgogna, più difficile e più cara, resta esclusa da questo itinerario per una prima volta',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con auto e bicicletta in Alsazia',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Riquewihr ed Eguisheim in bici, la discesa in una crayère di Champagne, la cattedrale di Reims',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Colmar e Route des Vins', destinazioneSlug: 'vigneti-di-francia' },
    { nome: 'Strasburgo', destinazioneSlug: 'vigneti-di-francia' },
    { nome: 'Reims', destinazioneSlug: 'vigneti-di-francia' },
    { nome: 'Épernay', destinazioneSlug: 'vigneti-di-francia' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Colmar',
      tratta: 'Colmar: Museo Unterlinden',
      pernottamento: 'Colmar',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'vigneti-di-francia',
    },
    {
      titoloGiorno: 'Giorno 2 — Riquewihr e Eguisheim in bicicletta',
      tratta: 'Riquewihr, Eguisheim, Kaysersberg in bicicletta',
      pernottamento: 'Colmar',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'vigneti-di-francia',
    },
    {
      titoloGiorno: 'Giorno 3 — Route des Vins verso sud',
      tratta: 'Route des Vins verso sud, degustazione senza appuntamento',
      pernottamento: 'Colmar',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'vigneti-di-francia',
    },
    {
      titoloGiorno: 'Giorno 4 — Strasburgo',
      tratta: 'Strasburgo: cattedrale e Petite France',
      pernottamento: 'Strasburgo',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'vigneti-di-francia',
    },
    {
      titoloGiorno: 'Giorno 5 — Trasferimento a Reims',
      tratta: 'Trasferimento a Reims, cattedrale delle incoronazioni',
      pernottamento: 'Reims',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'vigneti-di-francia',
    },
    {
      titoloGiorno: 'Giorno 6 — Una crayère di Champagne',
      tratta: 'Una crayère di Champagne',
      pernottamento: 'Reims',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      costiNoti: 'appuntamento consigliato per le grandi maison',
      destinazioneSlug: 'vigneti-di-francia',
    },
    {
      titoloGiorno: 'Giorno 7 — Épernay e l\'Avenue de Champagne',
      tratta: 'Épernay e l\'Avenue de Champagne',
      pernottamento: 'Épernay',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'vigneti-di-francia',
    },
    {
      titoloGiorno: 'Giorno 8 — Rientro',
      tratta: 'Rientro verso Parigi',
      intensita: 'leggero',
      destinazioneSlug: 'vigneti-di-francia',
    },
  ],
  budget: [
    { etichetta: 'Degustazioni in Alsazia', valore: 'gratuite o a costo simbolico nella maggior parte delle cantine' },
    { etichetta: 'Degustazioni in Champagne', valore: 'da gratuite a molto care secondo la maison' },
    { etichetta: 'Noleggio bici', valore: 'prezzo contenuto per il giorno in Alsazia' },
    { etichetta: 'Alloggio', valore: 'Colmar e Reims come basi centrali' },
  ],
}
