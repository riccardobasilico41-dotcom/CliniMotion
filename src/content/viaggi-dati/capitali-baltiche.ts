import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Capitali baltiche in 9 giorni:
// Vilnius, Riga e Tallinn". Il testo narrativo resta nel markdown
// (src/content/viaggi/61-capitali-baltiche.md). `titoloGiorno` deve
// combaciare esattamente con le intestazioni "### Giorno N — ..." del file
// markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
//
// Itinerario "composito" su tre Paesi, sullo stesso modello strutturale di
// centro-america-itinerario.ts, ma qui i tre Paesi sono collegati via terra
// da normali giorni di calendario (bus Lux Express) invece che da un volo
// che separa il viaggio in due parti: Vilnius (Lituania, giorni 1-3), Riga
// (Lettonia, giorni 4-6), Tallinn (Estonia, giorni 7-9).
//
// `paeseSlug` è una scelta editoriale: il tipo TripMeta supporta un solo
// Paese canonico per viaggio, qui impostato su 'lituania' perché Vilnius è
// la tappa di apertura dell'itinerario (stesso criterio con cui
// centro-america-itinerario.ts sceglie 'guatemala', la tappa di apertura
// della sua Parte 1). I link generati da RouteLine/DaySectionSignature
// combinano sempre questo paeseSlug con ogni destinazioneSlug (`/destinazioni/
// lituania/<slug>`), quindi le tappe di Lettonia ed Estonia in
// tappeMappa/giorni puntano a un percorso che non esiste ancora sotto
// /destinazioni/lituania/: è un limite noto del tipo attuale, non un errore
// di battitura (vedi la stessa nota in centro-america-itinerario.ts).
//
// Le foto giorno-per-giorno sono un task a parte, non ancora impostato per
// nessun giorno di questo viaggio.

export const capitaliBalticheMeta: TripMeta = {
  tripSlug: 'capitali-baltiche',
  paeseSlug: 'lituania',
  ritmo:
    'Regolare e senza tappe estreme: tre-tre giorni a testa per Vilnius, Riga e Tallinn, con una gita fuori porta a mezza giornata per città (Trakai, Jūrmala) e due trasferimenti in bus di circa quattro ore a fare da cerniera tra le tappe',
  trasporti:
    'Bus Lux Express (o compagnia equivalente) tra le tre capitali, circa 4 ore Vilnius-Riga e 4-4h30 Riga-Tallinn; centri storici interamente a piedi; treno regionale per Trakai e per Jūrmala',
  stile: ['città', 'storia', 'architettura', 'gastronomia'],
  adattoA: [
    'chi vuole confrontare da vicino tre capitali europee spesso trattate come intercambiabili e scoprire quanto siano diverse tra loro',
    'chi preferisce un itinerario via terra su normali giorni di calendario, senza voli interni o cerniere logistiche complicate',
    'chi cerca un\'Europa ancora economica rispetto a Europa occidentale e capitali nordiche, ma già dentro l\'eurozona senza cambio valuta',
    'chi si muove bene a piedi e con mezzi pubblici, senza bisogno di un\'auto a noleggio',
    'chi preferisce anche solo una delle tre tappe: Vilnius, Riga e Tallinn funzionano bene anche come weekend lunghi indipendenti',
  ],
  puntiForti: [
    'Il Muro della Costituzione di Užupis, il quartiere di Vilnius che si è autoproclamato repubblica indipendente nel 1997',
    'Il Castello dell\'Isola di Trakai, gotico in mattoni rossi, che galleggia letteralmente su un\'isola del lago Galvė',
    'Il quartiere Art Nouveau di Riga, una delle concentrazioni di architettura liberty più alte al mondo lungo Alberta iela',
    'Il Mercato Centrale di Riga, cinque hangar per dirigibili della Prima guerra mondiale riconvertiti nel più grande bazar d\'Europa',
    'Le due piattaforme panoramiche di Kohtuotsa e Patkuli su Toompea, a Tallinn, con vista sulla città bassa e il Golfo di Finlandia',
    'Il contrasto tra il Parco imperiale di Kadriorg e l\'ex complesso industriale sovietico di Telliskivi Creative City, entrambi a Tallinn',
  ],
  criticita: [
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
    'Tre lingue diverse e non mutuamente comprensibili tra loro (lituano e lettone baltiche solo alla lontana imparentate, estone ugrofinnico): non affidarsi all\'idea di una lingua "baltica" comune',
    'I bus Lux Express tra le tre capitali vanno prenotati con anticipo in alta stagione per le tariffe migliori, e gli orari vanno riverificati vicino alla partenza',
    'Jūrmala ha senso soprattutto da giugno ad agosto: fuori stagione la spiaggia è semi-deserta e l\'acqua troppo fredda per un bagno vero',
    'Tutti e tre i paesi confinano a est con la Russia (Lituania e Lettonia anche con la Bielorussia): zone di frontiera reali, del tutto fuori da questo itinerario, da non avvicinare in ogni caso',
    'Il centro storico di Trakai richiede mezza giornata reale con i trasporti da Vilnius, non un\'ora incastrata tra altre tappe',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, a piedi in ogni città e in autobus tra una capitale e l\'altra',
    cosaCercavo: undefined,
    treEsperienzePiuBelle:
      'Il Muro della Costituzione di Užupis a Vilnius, il Castello dell\'Isola di Trakai visto dal lago, il quartiere Art Nouveau di Riga lungo Alberta iela',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Vilnius', destinazioneSlug: 'vilnius' },
    { nome: 'Trakai', destinazioneSlug: 'trakai' },
    { nome: 'Riga', destinazioneSlug: 'riga' },
    { nome: 'Jūrmala', destinazioneSlug: 'jurmala' },
    { nome: 'Tallinn', destinazioneSlug: 'tallinn' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Vilnius e la Città Vecchia al tramonto',
      tratta: 'Aeroporto di Vilnius (VNO) → centro storico, treno o bus, 10-20 minuti',
      pernottamento: 'Vilnius, centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'vilnius',
    },
    {
      titoloGiorno: 'Giorno 2 — Vilnius: Cattedrale, Torre di Gediminas e il Palazzo dei Granduchi',
      pernottamento: 'Vilnius, centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Torre di Gediminas 8€ più 2-3€ di funicolare',
      destinazioneSlug: 'vilnius',
    },
    {
      titoloGiorno: 'Giorno 3 — Užupis e il castello dell\'isola di Trakai',
      tratta: 'Vilnius → Trakai, treno (circa 34 min) o bus (circa 35 min)',
      pernottamento: 'Vilnius, centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Castello di Trakai 12-14€ secondo la stagione; noleggio barca 8-15€/ora',
      destinazioneSlug: 'trakai',
    },
    {
      titoloGiorno: 'Giorno 4 — Il bus per Riga e le prime ore nella Città Vecchia',
      tratta: 'Vilnius → Riga, bus Lux Express, circa 4 ore',
      pernottamento: 'Riga, Città Vecchia',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      costiNoti: 'bus Vilnius-Riga indicativamente 15-25€ a persona secondo l\'anticipo di prenotazione',
      destinazioneSlug: 'riga',
    },
    {
      titoloGiorno: 'Giorno 5 — Riga: il quartiere Art Nouveau e il Mercato Centrale',
      pernottamento: 'Riga, Città Vecchia',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'torre della Chiesa di San Pietro 9€',
      destinazioneSlug: 'riga',
    },
    {
      titoloGiorno: 'Giorno 6 — Jūrmala e l\'ultimo giro per Riga',
      tratta: 'Riga → Jūrmala, treno regionale, circa 30 minuti (andata e ritorno)',
      pernottamento: 'Riga, Città Vecchia',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      costiNoti: 'treno per Jūrmala circa 2€ a tratta',
      destinazioneSlug: 'jurmala',
    },
    {
      titoloGiorno: 'Giorno 7 — Il bus per Tallinn e la Città Vecchia alla luce della sera',
      tratta: 'Riga → Tallinn, bus Lux Express, circa 4-4h30',
      pernottamento: 'Tallinn, Città Vecchia',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      costiNoti: 'bus Riga-Tallinn indicativamente 15-25€ a persona secondo l\'anticipo di prenotazione',
      destinazioneSlug: 'tallinn',
    },
    {
      titoloGiorno: 'Giorno 8 — Tallinn: la Città Vecchia e la collina di Toompea',
      pernottamento: 'Tallinn, Città Vecchia',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'quattro torri delle mura cittadine (Kiek in de Kök) 12€',
      destinazioneSlug: 'tallinn',
    },
    {
      titoloGiorno: 'Giorno 9 — Kadriorg, Telliskivi e la partenza',
      tratta: 'Centro → Aeroporto di Tallinn (TLL), tram, 15-20 minuti',
      intensita: 'leggero',
      costiNoti: 'ingresso al KUMU 12-16€ secondo la mostra',
      destinazioneSlug: 'tallinn',
    },
  ],
  budget: [
    { etichetta: 'Bus Vilnius-Riga', valore: 'Lux Express o compagnia equivalente, circa 4 ore, 15-25€ a persona secondo l\'anticipo' },
    { etichetta: 'Bus Riga-Tallinn', valore: 'Lux Express o compagnia equivalente, circa 4-4h30, 15-25€ a persona secondo l\'anticipo' },
    { etichetta: 'Ingressi principali', valore: 'Torre di Gediminas 8€, Castello di Trakai 12-14€, torre di San Pietro a Riga 9€, quattro torri di Tallinn 12€, KUMU 12-16€' },
    { etichetta: 'Gite fuori porta', valore: 'treno per Trakai o Jūrmala pochi euro a tratta; noleggio barca a Trakai 8-15€/ora' },
    { etichetta: 'Alloggio', valore: 'tra le capitali europee più economiche pur pagando in euro; Tallinn leggermente più cara di Vilnius e Riga' },
    { etichetta: 'Cibo', valore: 'pasto normale 8-18€ a testa secondo la città; i mercati (Mercato Centrale di Riga) restano l\'opzione più economica' },
  ],
}
