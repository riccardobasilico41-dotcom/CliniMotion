import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Vienna in un weekend lungo".
// Il testo narrativo resta nel markdown (src/content/viaggi/55-vienna-weekend.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da ogni giorno,
// task separato.

export const viennaWeekendMeta: TripMeta = {
  tripSlug: 'vienna-weekend',
  paeseSlug: 'austria',
  ritmo: 'Tre-quattro giorni di calendario, un centro storico compatto e una giornata quasi intera per Schönbrunn da sola',
  trasporti: 'Centro storico a piedi, U-Bahn e tram per il resto della città; nessuna auto necessaria',
  stile: [
    'arte',
    'musica',
    'gastronomia',
  ],
  adattoA: [
    'chi vuole un weekend europeo imperiale senza le complicazioni pratiche di cambio valuta di altre capitali dell\'Europa centrale',
    'chi apprezza rallentare almeno un\'ora al giorno in un caffè storico invece di correre da un monumento all\'altro',
    'chi si muove bene tra mezzi pubblici e a piedi, senza bisogno di un\'auto',
  ],
  puntiForti: [
    'La Kaffeehauskultur, la cultura del caffè viennese patrimonio UNESCO dal 2011',
    'Schönbrunn, la reggia estiva degli Asburgo con oltre 1.400 stanze',
    'Il biglietto in piedi dell\'Opera di Stato, a partire da circa 13€, per assistere a uno spettacolo di altissimo livello a una frazione del prezzo pieno',
  ],
  criticita: [
    'La quasi totalità dei negozi, supermercati compresi, è chiusa la domenica per legge',
    'Borseggi concentrati sulla linea U3 della metropolitana, soprattutto tra Stephansplatz e Westbahnhof',
    'Occasionali finti agenti di polizia che chiedono di controllare documenti o borsello',
    'Schönbrunn è molto più grande di quanto sembri dalle foto: da sola occupa quasi una giornata intera',
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
    { nome: 'Innere Stadt e Stephansdom', destinazioneSlug: 'vienna' },
    { nome: 'Hofburg e Naschmarkt', destinazioneSlug: 'vienna' },
    { nome: 'Schönbrunn', destinazioneSlug: 'vienna' },
    { nome: 'Belvedere e Prater', destinazioneSlug: 'vienna' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Innere Stadt e Stephansdom',
      tratta: 'Cattedrale di Santo Stefano, Graben, Kärntner Straße e Ring',
      pernottamento: 'Vienna, Innere Stadt',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'accesso alla cattedrale gratuito; salita alla torre sud e catacombe con biglietto separato',
      destinazioneSlug: 'vienna',
    },
    {
      titoloGiorno: 'Giorno 2 — Hofburg e Naschmarkt',
      tratta: 'Hofburg (Museo Sisi, Appartamenti Imperiali) al mattino, Naschmarkt nel pomeriggio',
      pernottamento: 'Vienna',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'biglietto combinato Hofburg attorno ai 20€; Naschmarkt libero, si paga solo quello che si consuma',
      destinazioneSlug: 'vienna',
    },
    {
      titoloGiorno: 'Giorno 3 — Schönbrunn',
      tratta: 'Giornata quasi intera alla Reggia di Schönbrunn, palazzo e giardini',
      pernottamento: 'Vienna',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'tour di base da circa 26€; giardini e parco gratuiti, Gloriette a parte',
      destinazioneSlug: 'vienna',
    },
    {
      titoloGiorno: 'Giorno 4 — Belvedere e Prater',
      tratta: 'Upper Belvedere al mattino, Prater e Wiener Riesenrad nel pomeriggio',
      intensita: 'medio',
      costiNoti: 'biglietto Upper Belvedere attorno ai 20-25€; ingresso al Prater libero, giostre a pagamento singolo',
      destinazioneSlug: 'vienna',
    },
  ],
  budget: [
    { etichetta: 'Schönbrunn', valore: 'circa 26€ il tour di base; giardini gratuiti' },
    { etichetta: 'Belvedere', valore: 'circa 20-25€ l\'Upper Belvedere con "Il Bacio" di Klimt' },
    { etichetta: 'Opera di Stato', valore: 'da circa 13€ a 18€ i biglietti in piedi, venduti solo il giorno stesso' },
    { etichetta: 'Alloggio', valore: 'nella media europea; l\'Innere Stadt costa più dei distretti limitrofi' },
    { etichetta: 'Trasporti', valore: 'biglietto singolo circa 2,40€, giornaliero circa 6€, 48 ore circa 14€' },
  ],
}
