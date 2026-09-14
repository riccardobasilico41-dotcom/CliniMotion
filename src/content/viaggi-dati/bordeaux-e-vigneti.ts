import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Bordeaux e i suoi vigneti in 7 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/43-bordeaux-e-vigneti.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const bordeauxEVignetiMeta: TripMeta = {
  tripSlug: 'bordeaux-e-vigneti',
  paeseSlug: 'francia',
  ritmo: 'Due giorni in città, quattro tra Saint-Émilion, Médoc e Sauternes, un giorno sull\'oceano ad Arcachon',
  trasporti: 'Auto con guidatore designato per le degustazioni; treno per Arcachon',
  stile: [
    'vino',
    'città',
    'costa',
  ],
  adattoA: [
    'chi si interessa al vino come sistema economico oltre che come bevanda',
    'chi vuole unire la città e il territorio circostante',
    'chi chiude con una giornata di oceano',
  ],
  puntiForti: [
    'La chiesa monolitica di Saint-Émilion, scavata nella roccia',
    'I grappoli botritizzati del Sauternes, raccolti a passaggi successivi',
    'La Dune du Pilat al tramonto e le ostriche di Arcachon sul pontile',
  ],
  criticita: [
    'I grandi château richiedono appuntamento prenotato con settimane di anticipo',
    'I controlli sull\'alcol alla guida in Francia sono frequenti: serve un guidatore designato o sputare in degustazione',
    'Durante la vendemmia molte proprietà riducono le visite',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con auto e guidatore designato',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'La chiesa scavata di Saint-Émilion, i grappoli marci del Sauternes, la Dune du Pilat al tramonto',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Bordeaux città', destinazioneSlug: 'bordeaux' },
    { nome: 'Saint-Émilion', destinazioneSlug: 'bordeaux' },
    { nome: 'Médoc', destinazioneSlug: 'bordeaux' },
    { nome: 'Sauternes', destinazioneSlug: 'bordeaux' },
    { nome: 'Bacino di Arcachon', destinazioneSlug: 'bordeaux' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Bordeaux città',
      tratta: 'Place de la Bourse, centro settecentesco, Chartrons',
      pernottamento: 'Bordeaux città',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'bordeaux',
    },
    {
      titoloGiorno: 'Giorno 2 — La Cité du Vin e i Chartrons',
      tratta: 'Cité du Vin, quartiere dei Chartrons',
      pernottamento: 'Bordeaux città',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'bordeaux',
    },
    {
      titoloGiorno: 'Giorno 3 — Saint-Émilion',
      tratta: 'Saint-Émilion: chiesa monolitica e degustazione',
      pernottamento: 'Bordeaux città',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'chiesa monolitica solo con accompagnamento prenotato',
      destinazioneSlug: 'bordeaux',
    },
    {
      titoloGiorno: 'Giorno 4 — Pomerol e i Graves',
      tratta: 'Pomerol e i Graves',
      pernottamento: 'Bordeaux città',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'bordeaux',
    },
    {
      titoloGiorno: 'Giorno 5 — Il Médoc',
      tratta: 'Médoc: château lungo la strada dei vini',
      pernottamento: 'Bordeaux città',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'appuntamento obbligatorio per i grandi château',
      destinazioneSlug: 'bordeaux',
    },
    {
      titoloGiorno: 'Giorno 6 — Sauternes',
      tratta: 'Sauternes: la muffa nobile',
      pernottamento: 'Bordeaux città',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'bordeaux',
    },
    {
      titoloGiorno: 'Giorno 7 — Bacino di Arcachon',
      tratta: 'Dune du Pilat e ostriche ad Arcachon',
      intensita: 'medio',
      destinazioneSlug: 'bordeaux',
    },
  ],
  budget: [
    { etichetta: 'Degustazioni', valore: 'da gratuite nelle piccole proprietà a molto care nei grand cru classé' },
    { etichetta: 'Cité du Vin', valore: 'biglietto medio' },
    { etichetta: 'Alloggio a Bordeaux città', valore: 'nella media francese, base per tutte le gite' },
    { etichetta: 'Dune du Pilat e Arcachon', valore: 'parcheggio a pagamento, ostriche economiche nelle cabanes' },
  ],
}
