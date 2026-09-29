import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Budapest in un weekend lungo".
// Il testo narrativo resta nel markdown (src/content/viaggi/56-budapest-weekend.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da ogni giorno,
// task separato.

export const budapestWeekendMeta: TripMeta = {
  tripSlug: 'budapest-weekend',
  paeseSlug: 'ungheria',
  ritmo: 'Tre-quattro giorni di calendario, il lato Buda e il lato Pest divisi dal Danubio, con una giornata isolata dedicata alle terme',
  trasporti: 'Centro di Pest e colle di Buda a piedi, metro/tram/bus BKK per il resto; nessuna auto necessaria',
  stile: [
    'terme',
    'vita notturna',
    'gastronomia',
  ],
  adattoA: [
    'chi vuole un weekend europeo che unisca città storica, panorami sul fiume e un\'esperienza wellness fuori dal comune',
    'chi accetta di dedicare mezza giornata piena alle terme invece di trattarle come una tappa veloce',
    'chi si muove bene tra mezzi pubblici e a piedi, senza bisogno di un\'auto',
  ],
  puntiForti: [
    'Le vasche esterne delle Terme di Széchenyi, calde tutto l\'anno, con il vapore che sale nella neve d\'inverno',
    'Il Parlamento e il Castello di Buda visti dal Danubio, di sera, illuminati',
    'I ruin bar del quartiere ebraico, un fenomeno di vita notturna nato qui e difficile da trovare altrove con la stessa densità',
  ],
  criticita: [
    'L\'Ungheria è nell\'Unione Europea ma non nell\'eurozona: si paga in fiorini (HUF), con numeri grandi che confondono chi arriva da poco',
    'Promoter di strada che invitano a bar dai conti gonfiati a dismisura, soprattutto nel quartiere ebraico e intorno alle piazze turistiche',
    'Cambiavalute con tassi poco trasparenti intorno a Váci utca',
    'Il tour guidato del Parlamento ha ingressi contingentati e si esaurisce spesso con giorni di anticipo in alta stagione',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, tutto a piedi e con i mezzi pubblici',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Colle di Buda e Bastione dei Pescatori', destinazioneSlug: 'budapest' },
    { nome: 'Parlamento e quartiere ebraico', destinazioneSlug: 'budapest' },
    { nome: 'Terme di Széchenyi o Gellért', destinazioneSlug: 'budapest' },
    { nome: 'Isola Margherita e Danubio', destinazioneSlug: 'budapest' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Il colle di Buda e il Bastione dei Pescatori',
      tratta: 'Castello di Buda, Bastione dei Pescatori, Chiesa di Mattia e Ponte delle Catene',
      pernottamento: 'Budapest, lato Pest',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'ingressi ai musei del castello a parte; il Bastione dei Pescatori è gratuito fuori dalle torrette a pagamento',
      destinazioneSlug: 'budapest',
    },
    {
      titoloGiorno: 'Giorno 2 — Il Parlamento e il quartiere ebraico',
      tratta: 'Tour guidato del Parlamento, Grande Sinagoga di Via Dohány e primo giro nel quartiere ebraico',
      pernottamento: 'Budapest, lato Pest',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'tour del Parlamento da prenotare online con anticipo, ingressi contingentati',
      destinazioneSlug: 'budapest',
    },
    {
      titoloGiorno: 'Giorno 3 — Le terme: Széchenyi o Gellért',
      tratta: 'Giornata dedicata alle terme, con colle Gellért o Parco cittadino nel pomeriggio secondo la scelta',
      pernottamento: 'Budapest',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      costiNoti: 'ingresso alle terme indicativamente 20-30€, telo e ciabatte a noleggio se non portati da casa',
      destinazioneSlug: 'budapest',
    },
    {
      titoloGiorno: 'Giorno 4 — Danubio, Isola Margherita e l\'ultimo giro',
      tratta: 'Isola Margherita al mattino, Basilica di Santo Stefano e Mercato Centrale nel pomeriggio, crociera serale sul Danubio',
      intensita: 'leggero',
      costiNoti: 'crociera sul Danubio indicativamente 15-25€ a persona',
      destinazioneSlug: 'budapest',
    },
  ],
  budget: [
    { etichetta: 'Terme', valore: 'circa 20-30€ a persona a ingresso, telo e ciabatte spesso a noleggio' },
    { etichetta: 'Parlamento', valore: 'tour guidato a pagamento, da prenotare online con anticipo' },
    { etichetta: 'Crociera sul Danubio', valore: 'circa 15-25€ a persona per il giro panoramico base' },
    { etichetta: 'Alloggio', valore: 'fascia medio-bassa tra le capitali europee, in crescita negli ultimi anni' },
    { etichetta: 'Trasporti', valore: 'bassi: rete BKK economica, nessuna auto necessaria' },
    { etichetta: 'Cibo', valore: 'cena normale 12-20€ a testa nelle zone centrali, meno al Mercato Centrale' },
  ],
}
