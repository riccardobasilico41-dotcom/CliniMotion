import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "Tromsø: la capitale artica".
// Il testo narrativo resta nel markdown (src/content/viaggi/15-tromso.md): questo
// file aggiunge solo i campi che il markdown non modella esplicitamente
// (pernottamento per giorno, intensità, link a destinazioni, budget, mappa).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
//
// A differenza degli altri overlay di questo sito, qui i ricordi diretti
// dell'autore sono pochi: struttura del viaggio e attività vengono da un
// documento di un'agenzia di viaggi, le sezioni pratiche da ricerca — vedi
// il "Materiale grezzo" nel markdown per i dettagli.

export const tromsoMeta: TripMeta = {
  tripSlug: 'tromso',
  paeseSlug: 'norvegia',
  ritmo: 'Medio — una escursione organizzata (mezza giornata o serata) al giorno, alternata a tempo libero in città',
  trasporti: 'Volo diretto o con scalo su Tromsø, poi a piedi in città e minibus/pullman organizzati per le escursioni',
  stile: ['natura', 'avventura', 'inverno estremo'],
  adattoA: ['coppie', 'amici', 'chi cerca un pacchetto concentrato di attività artiche in pochi giorni'],
  puntiForti: [
    'Tutte le attività-chiave dell\'inverno artico (aurora, husky, sami) raggiungibili in escursioni giornaliere da un\'unica base in città',
    'La Cattedrale Artica e il Fjellheisen danno alla città stessa un\'identità forte, non solo un punto di partenza per le escursioni',
    'Zona ben collegata anche per aggiungere whale watching o una notte in igloo di vetro con un minimo di organizzazione extra',
  ],
  criticita: [
    'I ricordi diretti di questo viaggio sono pochi: la struttura viene da un documento di un\'agenzia di viaggi più che da un diario, quindi diversi dettagli restano da confermare',
    'Notte polare tra dicembre e gennaio: pochissime ore di luce diurna da mettere in conto nella pianificazione delle giornate',
    'La Norvegia è cara, e le escursioni organizzate (aurora, husky, sami) pesano parecchio sul budget complessivo',
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
  tappeMappa: [{ nome: 'Tromsø', destinazioneSlug: 'tromso' }],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Tromsø',
      tratta: 'Arrivo a Tromsø',
      pernottamento: 'da confermare',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'tromso',
    },
    {
      titoloGiorno: 'Giorno 2 — Aurora chase in minibus',
      tratta: 'Tromsø e dintorni (escursione serale)',
      pernottamento: 'da confermare',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'tromso',
    },
    {
      titoloGiorno: 'Giorno 3 — Husky sledding',
      tratta: 'Dintorni di Tromsø',
      pernottamento: 'da confermare',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'tromso',
    },
    {
      titoloGiorno: 'Giorno 4 — Cultura sami e renne',
      tratta: 'Dintorni di Tromsø',
      pernottamento: 'da confermare',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'tromso',
    },
    {
      titoloGiorno: 'Giorno 5 — Tempo libero e partenza',
      tratta: 'Tromsø → rientro',
      pernottamento: 'nessun pernottamento (giorno di partenza)',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'tromso',
    },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'Alloggio (doppia centrale, indicativo)', valore: '140-170€/notte' },
    { etichetta: 'Fjellheisen + Polaria + Polar Museum', valore: '90-95€ a persona' },
    { etichetta: 'Aurora chase in minibus', valore: '100-160€ a persona' },
    { etichetta: 'Husky sledding', valore: '170-320€ a persona' },
    { etichetta: 'Esperienza sami con le renne', valore: '145-260€ a persona' },
    { etichetta: 'Cibo', valore: undefined },
    { etichetta: 'Totale', valore: undefined },
  ],
}
