import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Il Tour du Mont Blanc in 9 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/47-tour-du-mont-blanc.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const tourDuMontBlancMeta: TripMeta = {
  tripSlug: 'tour-du-mont-blanc',
  paeseSlug: 'francia',
  ritmo: 'Nove tappe attorno al massiccio, attraversando Francia, Italia e Svizzera, con pernottamento in rifugio ogni notte',
  trasporti: 'A piedi, con navette e trasferimento bagagli disponibili sulla rete',
  stile: [
    'trekking',
    'montagna',
    'natura',
  ],
  adattoA: [
    'chi è allenato a camminare più giorni consecutivi con uno zaino',
    'chi vuole un grande trekking a tappe senza difficoltà tecniche',
    'chi prenota i rifugi con largo anticipo',
  ],
  puntiForti: [
    'Il massiccio del Monte Bianco visto da tre versanti diversi',
    'Il Rifugio Bonatti, uno dei punti panoramici più noti del giro',
    'L\'attraversamento di tre paesi in un\'unica settimana di cammino',
  ],
  criticita: [
    'I rifugi si prenotano da gennaio-febbraio per l\'estate: è il vincolo che struttura tutto l\'itinerario',
    'Le tappe hanno dislivelli regolarmente di 800-900 metri',
    'I temporali pomeridiani estivi sono regolari e violenti: si parte presto',
    'Molti rifugi accettano solo contanti',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, pernottamento in rifugio ogni notte',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il versante italiano con i prati aperti, il Rifugio Bonatti, il lago di Champex-Lac sul versante svizzero',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Les Houches', destinazioneSlug: 'montagne-francesi' },
    { nome: 'Courmayeur', destinazioneSlug: 'montagne-francesi' },
    { nome: 'Champex-Lac', destinazioneSlug: 'montagne-francesi' },
    { nome: 'Chamonix', destinazioneSlug: 'montagne-francesi' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Les Houches, partenza',
      tratta: 'Partenza da Les Houches verso Les Contamines-Montjoie',
      pernottamento: 'rifugio in quota',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'montagne-francesi',
    },
    {
      titoloGiorno: 'Giorno 2 — Verso il Col du Bonhomme',
      tratta: 'Salita al Col du Bonhomme',
      pernottamento: 'rifugio in quota',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'montagne-francesi',
    },
    {
      titoloGiorno: 'Giorno 3 — Ingresso in Italia, Val Veny',
      tratta: 'Ingresso in Italia, Val Veny',
      pernottamento: 'rifugio in quota',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'montagne-francesi',
    },
    {
      titoloGiorno: 'Giorno 4 — Courmayeur',
      tratta: 'Tappa a Courmayeur',
      pernottamento: 'Courmayeur',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'montagne-francesi',
    },
    {
      titoloGiorno: 'Giorno 5 — Rifugio Bonatti',
      tratta: 'Salita al Rifugio Bonatti',
      pernottamento: 'Rifugio Bonatti',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'montagne-francesi',
    },
    {
      titoloGiorno: 'Giorno 6 — Passaggio in Svizzera',
      tratta: 'Attraversamento del Grand Col Ferret verso la Svizzera',
      pernottamento: 'rifugio in quota',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'montagne-francesi',
    },
    {
      titoloGiorno: 'Giorno 7 — La Fouly, Champex-Lac',
      tratta: 'Discesa verso Champex-Lac',
      pernottamento: 'Champex-Lac',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'montagne-francesi',
    },
    {
      titoloGiorno: 'Giorno 8 — Rientro verso la Francia',
      tratta: 'Tappa di rientro verso il versante francese',
      pernottamento: 'rifugio in quota',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'montagne-francesi',
    },
    {
      titoloGiorno: 'Giorno 9 — Chamonix',
      tratta: 'Ultima tappa fino a Chamonix',
      intensita: 'medio',
      destinazioneSlug: 'montagne-francesi',
    },
  ],
  budget: [
    { etichetta: 'Mezza pensione in rifugio', valore: 'la voce principale, ogni notte del percorso' },
    { etichetta: 'Trasferimento bagagli', valore: 'servizio disponibile su gran parte della rete, a pagamento' },
    { etichetta: 'Assicurazione', valore: 'il soccorso pubblico è gratuito in Francia, ma rimpatrio e spese mediche restano da coprire' },
    { etichetta: 'Aiguille du Midi a Chamonix', valore: 'come chiusura del viaggio, se il tempo lo permette' },
  ],
}
