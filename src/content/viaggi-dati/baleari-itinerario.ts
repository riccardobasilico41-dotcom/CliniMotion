import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Baleari in 8 giorni: Mallorca, Ibiza e
// Minorca". Il testo narrativo resta nel markdown
// (src/content/viaggi/63-baleari-itinerario.md). `titoloGiorno` deve
// combaciare esattamente con le intestazioni "### Giorno N — ..." del file
// markdown. Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da
// ogni giorno, task separato.
//
// Le tre isole maggiori in sequenza, collegate in traghetto; Formentera resta
// fuori come estensione possibile (segnalata nel markdown), non incastrata a
// forza in un itinerario già pieno.

export const baleariItinerarioMeta: TripMeta = {
  tripSlug: 'baleari-itinerario',
  paeseSlug: 'spagna',
  ritmo:
    '3-4 giorni a Mallorca (la più grande e varia), 2-3 a Ibiza e 2-3 a Minorca, collegate in traghetto: il ritmo resta da vacanza estiva, con un solo giorno più intenso per isola (Serra de Tramuntana, il giro del nord di Ibiza, il Camí de Cavalls).',
  trasporti:
    'Traghetti Baleària/Trasmed tra le tre isole (da 1 a oltre 4 ore secondo la tratta), auto a noleggio su ciascuna isola, indispensabile soprattutto a Minorca per raggiungere le calette.',
  stile: ['isole', 'mare', 'natura', 'vita notturna'],
  adattoA: [
    'chi vuole vedere il ventaglio completo delle Baleari invece di sceglierne una sola: la capitale vera e la montagna di Mallorca, le due anime di Ibiza, il silenzio scelto di Minorca',
    'chi accetta di muoversi in traghetto tra un\'isola e l\'altra invece che restare fermo in un solo resort',
    'chi vuole vedere di Ibiza sia la vita notturna del sud sia il nord rurale, spesso ignorato dalle guide generaliste',
    'chi preferisce maggio-giugno o settembre a un\'estate piena, per prezzi più bassi e meno folla',
  ],
  puntiForti: [
    'La Serra de Tramuntana, patrimonio culturale UNESCO, con il trenino storico Palma-Sóller del 1912',
    'Dalt Vila, la città alta fortificata di Ibiza Town, bellissima anche per chi non cerca la vita notturna',
    'Il nord di Ibiza (Sant Joan, Santa Gertrudis, Benirràs), la parte più autentica e meno raccontata dell\'isola',
    'Il Camí de Cavalls di Minorca e le sue calette (Cala Macarelleta, Cala Turqueta) tra le meno sviluppate delle Baleari',
  ],
  criticita: [
    'Luglio-agosto è il picco assoluto di prezzi e affollamento su tutte e tre le isole: voli, traghetti e alloggi vanno prenotati con largo anticipo o evitati del tutto in quel periodo',
    'Le frequenze dei traghetti tra isole calano sensibilmente fuori stagione: alcune tratte (per esempio verso Minorca) richiedono scali o cambi',
    'Senza un\'auto a noleggio, gran parte del nord di Ibiza e delle calette migliori di Minorca resta fuori portata',
    'Ridurre Ibiza alla sola vita notturna del sud è l\'errore più comune: il nord dell\'isola è rurale e quasi hippie, una realtà completamente diversa',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, traghetto tra le isole, auto a noleggio su ciascuna',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Mallorca: Palma e Serra de Tramuntana', destinazioneSlug: 'mallorca' },
    { nome: 'Ibiza: Dalt Vila e il nord dell\'isola', destinazioneSlug: 'ibiza' },
    { nome: 'Minorca: Ciutadella e Mahón', destinazioneSlug: 'minorca' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Palma di Mallorca',
      tratta: 'Arrivo internazionale a Palma (Son Sant Joan) → centro storico',
      pernottamento: 'Palma di Mallorca',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'mallorca',
    },
    {
      titoloGiorno: 'Giorno 2 — La Serra de Tramuntana: Valldemossa e Sóller',
      pernottamento: 'Palma o Sóller, Mallorca',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'trenino storico Palma-Sóller circa 32€ A/R',
      destinazioneSlug: 'mallorca',
    },
    {
      titoloGiorno: 'Giorno 3 — Da Mallorca a Ibiza',
      tratta: 'Palma → Ibiza, traghetto (circa 2h15-4h15 secondo il tipo di nave)',
      pernottamento: 'Ibiza Town',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'ibiza',
    },
    {
      titoloGiorno: 'Giorno 4 — Ibiza Town e Dalt Vila',
      pernottamento: 'Ibiza Town',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'ibiza',
    },
    {
      titoloGiorno: 'Giorno 5 — Il nord di Ibiza: calette e mercati',
      pernottamento: 'Ibiza Town o Santa Gertrudis',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'ibiza',
    },
    {
      titoloGiorno: 'Giorno 6 — Da Ibiza a Minorca',
      tratta: 'Ibiza → Minorca, traghetto (spesso con scalo a Mallorca secondo la tratta)',
      pernottamento: 'Ciutadella, Minorca',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'minorca',
    },
    {
      titoloGiorno: 'Giorno 7 — Ciutadella e il Camí de Cavalls',
      pernottamento: 'Ciutadella, Minorca',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'minorca',
    },
    {
      titoloGiorno: 'Giorno 8 — Mahón e chiusura del viaggio',
      tratta: 'Ciutadella → Mahón → volo di rientro',
      intensita: 'leggero',
      destinazioneSlug: 'minorca',
    },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali/internazionali', valore: undefined },
    { etichetta: 'Traghetti tra le isole', valore: 'Palma-Ibiza da 24€, Alcúdia-Ciutadella da 12€, secondo tratta e anticipo di prenotazione' },
    { etichetta: 'Trenino storico Sóller', valore: 'circa 32€ A/R' },
    { etichetta: 'Auto a noleggio', valore: 'su ciascuna delle tre isole, prezzi molto più alti a luglio-agosto' },
    { etichetta: 'Vita notturna a Ibiza', valore: 'molto variabile, ingressi ai grandi club anche oltre 60-100€ in alta stagione' },
    { etichetta: 'Alloggi e pasti', valore: 'tra le mete più care d\'Europa a luglio-agosto, nella media negli altri mesi' },
  ],
}
