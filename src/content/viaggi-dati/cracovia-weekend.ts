import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Cracovia in un weekend lungo".
// Il testo narrativo resta nel markdown (src/content/viaggi/53-cracovia-weekend.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da ogni giorno,
// task separato.

export const cracoviaWeekendMeta: TripMeta = {
  tripSlug: 'cracovia-weekend',
  paeseSlug: 'polonia',
  ritmo: 'Tre-quattro giorni di calendario, un centro storico compatto e una giornata isolata per Auschwitz-Birkenau: non va incastrata tra altre tappe',
  trasporti: 'Centro storico a piedi, bus e treno regionale per le due gite fuori porta; nessuna auto necessaria',
  stile: [
    'storia',
    'memoria',
    'gastronomia',
  ],
  adattoA: [
    'chi vuole un weekend europeo che unisca una città medievale intatta a un luogo di memoria che chiede tempo e rispetto',
    'chi accetta di dedicare una giornata intera, senza altri programmi, ad Auschwitz-Birkenau',
    'chi si muove bene tra mezzi pubblici e a piedi, senza bisogno di un\'auto',
  ],
  puntiForti: [
    'L\'Hejnał che suona ogni ora dalla torre di Santa Maria e si interrompe di colpo a metà nota',
    'La visita ad Auschwitz-Birkenau, affrontata come giornata a sé e non come tappa tra le altre',
    'La Cappella di Santa Kinga nella Miniera di Wieliczka, scolpita interamente nel sale',
  ],
  criticita: [
    'L\'ingresso di Auschwitz-Birkenau è gratuito ma la prenotazione online è di fatto obbligatoria, e in alta stagione gli slot si esauriscono con settimane d\'anticipo',
    'La Polonia è nell\'Unione Europea ma non nell\'eurozona: si paga in złoty, non in euro',
    'Cambiavalute vistosi intorno a Rynek Główny con tassi ingannevoli su valute minori',
    'Promoter di strada che invitano a bar dai conti gonfiati a dismisura, soprattutto intorno a Rynek Główny, via Floriańska e Kazimierz',
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
    { nome: 'Rynek Główny e Wawel', destinazioneSlug: 'cracovia' },
    { nome: 'Auschwitz-Birkenau', destinazioneSlug: 'auschwitz-birkenau' },
    { nome: 'Kazimierz e Podgórze', destinazioneSlug: 'cracovia' },
    { nome: 'Miniera di Wieliczka', destinazioneSlug: 'cracovia' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Rynek Główny e il colle di Wawel',
      tratta: 'Rynek Główny, Sukiennice, Basilica di Santa Maria e colle di Wawel',
      pernottamento: 'Cracovia, centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Castello e Cattedrale di Wawel hanno biglietti separati per le diverse sezioni, a numero limitato',
      destinazioneSlug: 'cracovia',
    },
    {
      titoloGiorno: 'Giorno 2 — Auschwitz-Birkenau',
      tratta: 'Giornata intera ad Auschwitz-Birkenau, da Cracovia',
      pernottamento: 'Cracovia',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'ingresso gratuito, prenotazione online obbligatoria; trasporto in bus o treno a parte',
      destinazioneSlug: 'auschwitz-birkenau',
    },
    {
      titoloGiorno: 'Giorno 3 — Kazimierz e Podgórze',
      tratta: 'Sinagoghe di Kazimierz, Piazza degli Eroi del Ghetto e Fabbrica di Schindler a Podgórze',
      pernottamento: 'Cracovia',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'ingressi a sinagoghe e musei pochi euro ciascuno; tour gastronomico serale a parte',
      destinazioneSlug: 'cracovia',
    },
    {
      titoloGiorno: 'Giorno 4 — La Miniera di Wieliczka e l\'ultimo giro',
      tratta: 'Miniera di sale di Wieliczka al mattino, centro storico di Cracovia nel pomeriggio',
      intensita: 'medio',
      costiNoti: 'biglietto Wieliczka attorno ai 120 PLN; consigliata prenotazione online',
      destinazioneSlug: 'cracovia',
    },
  ],
  budget: [
    { etichetta: 'Auschwitz-Birkenau', valore: 'ingresso gratuito; solo il trasporto (bus/treno o tour organizzato) è a pagamento' },
    { etichetta: 'Miniera di Wieliczka', valore: 'circa 120 PLN il Percorso Turistico standard' },
    { etichetta: 'Alloggio', valore: 'tra le capitali europee più economiche; il centro storico costa più di Kazimierz' },
    { etichetta: 'Trasporti', valore: 'bassi: a piedi in centro, tram/bus KMK per il resto, nessuna auto necessaria' },
    { etichetta: 'Cibo', valore: 'pierogi e piatti tradizionali nei bary mleczne a pochi euro; la vodka nei bar turistici costa più che altrove' },
  ],
}
