import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "Lapponia svedese: Capodanno sotto l'aurora".
// Il testo narrativo resta nel markdown (src/content/viaggi/14-lapponia-svedese-abisko.md):
// questo file aggiunge solo i campi che il markdown non modella esplicitamente
// (pernottamento per giorno, intensità, link a destinazioni, budget, mappa).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const lapponiaSvedeseAbiskoMeta: TripMeta = {
  tripSlug: 'lapponia-svedese-abisko',
  paeseSlug: 'svezia',
  ritmo: 'Medio — due giornate di puro spostamento (voli, treno) alternate a giornate intense di attività outdoor nel freddo estremo',
  trasporti: 'Volo internazionale su Stoccolma, volo interno Stoccolma-Kiruna, treno panoramico Kiruna-Abisko e ritorno',
  stile: ['natura', 'avventura', 'inverno estremo'],
  adattoA: ['coppie', 'amici', 'chi cerca l\'aurora boreale più delle grandi città'],
  puntiForti: [
    'Abisko ha uno dei microclimi più favorevoli al mondo per vedere l\'aurora, grazie al suo caratteristico "buco blu" di cielo sereno',
    'Mix di attività molto diverse tra loro nello stesso soggiorno: seggiovia panoramica, motoslitta e husky sledding',
    'Il contrasto tra le notti essenziali in stile STF e la spa dell\'Elite Hotel Frost al ritorno spezza bene il ritmo del viaggio',
  ],
  criticita: [
    'Capodanno è il periodo più caro dell\'anno per volare e dormire in zona: febbraio-marzo costa molto meno con probabilità di aurora comunque alte',
    'Il freddo estremo può causare cancellazioni dei treni (non spesso, ma capita), con il rischio di taxi a prezzi gonfiati come unica alternativa rimasta',
    'Diversi dettagli (anno esatto del viaggio, ristoranti specifici) restano da confermare: l\'itinerario è ricostruito dai documenti dell\'agenzia più che da un diario personale',
  ],
  budgetTotale: '1.500€ (budget base) - 1.800€ (livello ottimo) a persona',
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: undefined,
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Stoccolma', destinazioneSlug: 'stoccolma' },
    { nome: 'Kiruna', destinazioneSlug: 'kiruna' },
    { nome: 'Abisko', destinazioneSlug: 'abisko' },
    { nome: 'Kiruna', destinazioneSlug: 'kiruna' },
    { nome: 'Stoccolma', destinazioneSlug: 'stoccolma' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Milano → Stoccolma',
      tratta: 'Milano → Stoccolma (volo)',
      pernottamento: 'Radisson Blu Royal Viking Hotel',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'stoccolma',
    },
    {
      titoloGiorno: 'Giorno 2 — Stoccolma → Kiruna (Capodanno)',
      tratta: 'Stoccolma → Kiruna (volo interno)',
      pernottamento: 'STF Malmfältens Folkhögskola',
      statoPernottamento: 'provato',
      intensita: 'medio',
      destinazioneSlug: 'kiruna',
    },
    {
      titoloGiorno: 'Giorno 3 — Kiruna → Abisko',
      tratta: 'Kiruna → Abisko (treno panoramico)',
      pernottamento: 'STF Abisko Turiststation',
      statoPernottamento: 'provato',
      intensita: 'medio',
      destinazioneSlug: 'abisko',
    },
    {
      titoloGiorno: 'Giorno 4 — Abisko: motoslitta e husky sotto l\'aurora',
      tratta: 'Abisko (parco nazionale)',
      pernottamento: 'STF Abisko Turiststation',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      costiNoti: 'Escursioni: 450-500€ a persona per 3 tour con guida',
      destinazioneSlug: 'abisko',
    },
    {
      titoloGiorno: 'Giorno 5 — Abisko → Kiruna',
      tratta: 'Abisko → Kiruna (treno)',
      pernottamento: 'Elite Hotel Frost - Hotel & Spa',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'kiruna',
    },
    {
      titoloGiorno: 'Giorno 6 — Kiruna → Stoccolma',
      tratta: 'Kiruna → Stoccolma (volo interno)',
      pernottamento: 'Radisson Blu Royal Viking Hotel',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'stoccolma',
    },
    {
      titoloGiorno: 'Giorno 7 — Rientro',
      tratta: 'Stoccolma → Milano (volo)',
      pernottamento: 'nessun pernottamento (giorno di partenza)',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'stoccolma',
    },
  ],
  budget: [
    { etichetta: 'Voli (Milano-Stoccolma-Kiruna A/R)', valore: '600-645€' },
    { etichetta: 'Alloggi', valore: '400-600€' },
    { etichetta: 'Trasporti interni (treno panoramico + transfer)', valore: '80€' },
    { etichetta: 'Escursioni (3 tour con guida)', valore: '450-500€' },
    { etichetta: 'Pasti', valore: '10-15€/giorno colazioni, 30-50€ a pasto' },
    { etichetta: 'Totale', valore: '1.500-1.800€ a persona' },
  ],
}
