import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Amsterdam in un weekend lungo".
// Il testo narrativo resta nel markdown (src/content/viaggi/58-amsterdam-weekend.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da ogni giorno,
// task separato.

export const amsterdamWeekendMeta: TripMeta = {
  tripSlug: 'amsterdam-weekend',
  paeseSlug: 'paesi-bassi',
  ritmo: 'Quattro giorni di calendario, un centro compatto girabile a piedi e in bicicletta, con un solo appuntamento a orario fisso: la Casa di Anna Frank',
  trasporti: 'Piedi e bicicletta per il centro, tram/bus/metro GVB per il resto; nessuna auto necessaria',
  stile: [
    'città',
    'arte',
    'cicloturismo',
  ],
  adattoA: [
    'chi vuole un weekend europeo tra arte, canali e una cultura urbana costruita davvero intorno alla bicicletta',
    'chi accetta di prenotare con largo anticipo la Casa di Anna Frank e i musei principali',
    'chi si muove bene tra mezzi pubblici, a piedi e in bici, senza bisogno di un\'auto',
  ],
  puntiForti: [
    'Il Grachtengordel, l\'anello dei canali seicenteschi patrimonio UNESCO, visto a piedi, in bici e dall\'acqua',
    'La Casa di Anna Frank, con l\'Achterhuis rimasto in gran parte spoglio per volontà di Otto Frank',
    'Il Rijksmuseum e il Van Gogh Museum, due delle collezioni d\'arte più importanti d\'Europa a poca distanza l\'una dall\'altra',
  ],
  criticita: [
    'I biglietti della Casa di Anna Frank si aprono online con settimane di anticipo e si esauriscono in fretta: senza prenotazione anticipata non si entra',
    'Le piste ciclabili hanno priorità reale sui pedoni: camminare o fermarsi distrattamente su una pista è la causa più comune di incidenti con i turisti',
    'Molti locali accettano solo carta o contactless: non contare sui contanti come piano B',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, a piedi e in bicicletta',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Grachtengordel e Jordaan', destinazioneSlug: 'amsterdam' },
    { nome: 'Casa di Anna Frank e Dam Square', destinazioneSlug: 'amsterdam' },
    { nome: 'Rijksmuseum e Van Gogh Museum', destinazioneSlug: 'amsterdam' },
    { nome: 'Giro in bicicletta per la città', destinazioneSlug: 'amsterdam' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Grachtengordel e Jordaan',
      tratta: 'Anello dei canali del Grachtengordel, quartiere di Jordaan e crociera sui canali',
      pernottamento: 'Amsterdam, Grachtengordel',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'crociera sui canali circa 15-20€ a persona',
      destinazioneSlug: 'amsterdam',
    },
    {
      titoloGiorno: 'Giorno 2 — Casa di Anna Frank e Dam Square',
      tratta: 'Casa di Anna Frank, Dam Square e Quartiere a Luci Rosse',
      pernottamento: 'Amsterdam',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Casa di Anna Frank circa 16€, prenotazione online obbligatoria con settimane di anticipo',
      destinazioneSlug: 'amsterdam',
    },
    {
      titoloGiorno: 'Giorno 3 — Rijksmuseum e Van Gogh Museum',
      tratta: 'Rijksmuseum al mattino, Van Gogh Museum al pomeriggio, entrambi sul Museumplein',
      pernottamento: 'Amsterdam',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'biglietti museo circa 20-25€ l\'uno, consigliata prenotazione online con fascia oraria',
      destinazioneSlug: 'amsterdam',
    },
    {
      titoloGiorno: 'Giorno 4 — In bicicletta per la città',
      tratta: 'Giro libero in bicicletta per i quartieri della città',
      intensita: 'leggero',
      costiNoti: 'noleggio bici circa 10-15€ al giorno',
      destinazioneSlug: 'amsterdam',
    },
  ],
  budget: [
    { etichetta: 'Casa di Anna Frank', valore: 'circa 16€ a persona, prenotazione online obbligatoria' },
    { etichetta: 'Rijksmuseum + Van Gogh Museum', valore: 'circa 40-50€ totali per i due biglietti' },
    { etichetta: 'Noleggio bici', valore: 'circa 10-15€ al giorno' },
    { etichetta: 'Alloggio', valore: 'tra le capitali più care d\'Europa occidentale, in linea con Parigi o Londra' },
    { etichetta: 'Cibo', valore: 'cena normale 20-25€ a testa; spuntini di strada (haring, stroopwafel) pochi euro' },
  ],
}
