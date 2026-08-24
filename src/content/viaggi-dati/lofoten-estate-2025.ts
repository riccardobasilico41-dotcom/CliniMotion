import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "Lofoten in 7 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/01-lofoten-estate-2025.md):
// questo file aggiunge solo i campi che il markdown non modella esplicitamente
// (pernottamento per giorno, intensità, link a destinazioni, budget, mappa).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const lofotenEstate2025Meta: TripMeta = {
  tripSlug: 'lofoten-estate-2025',
  paeseSlug: 'norvegia',
  ritmo: 'Medio-intenso — trekking impegnativi alternati a giornate più tranquille, ma sempre in movimento',
  trasporti: 'Volo interno Oslo-Bodø, auto a noleggio per tutto il resto, traghetti locali tra isole e fiordi',
  stile: ['natura', 'avventura', 'on the road'],
  adattoA: ['coppie', 'piccoli gruppi', 'chi ama camminare e la natura'],
  puntiForti: [
    'Copre sia le grandi città (Oslo, Bodø) sia l\'arcipelago vero e proprio, con due basi logistiche diverse (Svolvær e Nesland) per non fare avanti e indietro ogni giorno',
    'Mix equilibrato tra trekking impegnativi (Reinebringen, Festvågtind) ed esperienze più rilassate (spiaggia di Bunes, passeggiata a Nusfjord)',
    'Il Trollfjord in RIB è un\'esperienza che va oltre il semplice trekking, con avvistamento di fauna selvatica',
  ],
  criticita: [
    'Il Reinebringen, l\'attrazione più attesa, dipende completamente dal meteo: con cielo coperto perde gran parte del senso',
    'Diverse strutture (Bodø, Reine, Henningsvær, Å) sono solo tappe di passaggio senza pernottamento, quindi il diario non ha ancora un nome di ristorante per ogni tappa',
    'Budget indicativo noto solo per i pasti (500-600€ a testa): voli, auto e traghetti restano da completare',
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
    { nome: 'Oslo', destinazioneSlug: 'oslo' },
    { nome: 'Bodø', destinazioneSlug: 'bodo' },
    { nome: 'Svolvær', destinazioneSlug: 'svolvaer' },
    { nome: 'Henningsvær', destinazioneSlug: 'henningsvaer' },
    { nome: 'Reine', destinazioneSlug: 'reine' },
    { nome: 'Vindstad / Spiaggia di Bunes' },
    { nome: 'Nesland / Flakstad', destinazioneSlug: 'nesland-flakstad' },
    { nome: 'Å', destinazioneSlug: 'a' },
    { nome: 'Bodø', destinazioneSlug: 'bodo' },
    { nome: 'Oslo', destinazioneSlug: 'oslo' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Oslo',
      tratta: 'Arrivo a Oslo',
      pernottamento: 'Citybox Hotel',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'oslo',
    },
    {
      titoloGiorno: 'Giorno 2 — Oslo → Bodø → Svolvær',
      tratta: 'Oslo → Bodø (volo) → Bognes → traghetto → Svolvær',
      pernottamento: 'Nordis Apartment',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'svolvaer',
    },
    {
      titoloGiorno: 'Giorno 3 — Svolvær → Henningsvær',
      tratta: 'Svolvær → Trollfjord (RIB) → Henningsvær → Svolvær',
      pernottamento: 'Nordis Apartment',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'svolvaer',
    },
    {
      titoloGiorno: 'Giorno 4 — Svolvær → Reine → Nesland',
      tratta: 'Svolvær → Viking Museum di Borg → Leknes → Reine (Reinebringen) → Nesland',
      pernottamento: 'Casa Flakstad (rorbu)',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      costiNoti: 'Parcheggio a Reine 200 NOK/3h',
      destinazioneSlug: 'nesland-flakstad',
    },
    {
      titoloGiorno: 'Giorno 5 — Spiaggia di Bunes',
      tratta: 'Reine → traghetto per Vindstad → spiaggia di Bunes → Reine',
      pernottamento: 'Casa Flakstad (rorbu)',
      statoPernottamento: 'provato',
      intensita: 'medio',
      destinazioneSlug: 'nesland-flakstad',
    },
    {
      titoloGiorno: 'Giorno 6 — Å e il sentiero verso Nusfjord',
      tratta: 'Nesland → Å (Museo dei Pescatori) → Sakrisøy → Nesland-Nusfjord (a piedi) → Nesland',
      pernottamento: 'Casa Flakstad (rorbu)',
      statoPernottamento: 'provato',
      intensita: 'medio',
      destinazioneSlug: 'nesland-flakstad',
    },
    {
      titoloGiorno: 'Giorno 7 — Bødø e rientro a Oslo',
      tratta: 'Moskenes → traghetto → Bodø → Misten/Kjerringøy → Bodø → volo → Oslo',
      pernottamento: 'nessun pernottamento (rientro in giornata)',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'oslo',
    },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'Pernottamenti', valore: undefined },
    { etichetta: 'Auto a noleggio e traghetti', valore: undefined },
    { etichetta: 'Escursioni e attività (Trollfjord, musei)', valore: undefined },
    { etichetta: 'Cibo', valore: '500-600€ a persona' },
    { etichetta: 'Totale', valore: undefined },
  ],
}
