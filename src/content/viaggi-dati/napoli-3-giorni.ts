import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Napoli in 3 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/33-napoli-3-giorni.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const napoli3GiorniMeta: TripMeta = {
  tripSlug: 'napoli-3-giorni',
  paeseSlug: 'italia',
  ritmo: 'Due giornate in città camminando sui decumani e una intera dedicata all\'archeologia vesuviana',
  trasporti: 'A piedi, metropolitana e funicolari in città; Circumvesuviana per gli scavi. Auto da escludere',
  stile: [
    'archeologia',
    'arte',
    'gastronomia',
  ],
  adattoA: [
    'chi vuole capolavori senza code e senza transenne',
    'chi viene per Pompei ed Ercolano e scopre che la città vale di più',
    'chi cammina volentieri e non si spaventa del caos',
  ],
  puntiForti: [
    'Il Cristo Velato alla Cappella Sansevero, con il velo scolpito nello stesso blocco di marmo',
    'Le Sette Opere di Misericordia di Caravaggio, ancora sopra l\'altare per cui furono dipinte, con pochi euro e nessuna coda',
    'Ercolano, sepolta da flussi piroclastici e quindi con travi, porte e piani superiori ancora in piedi',
  ],
  criticita: [
    'La Cappella Sansevero si prenota con giorni di anticipo e non si fotografa',
    'Il Vesuvio richiede la prenotazione online obbligatoria del biglietto con fascia oraria',
    'Pompei ed Ercolano nello stesso giorno significa farle male entrambe',
    'Borseggi noti sulla Circumvesuviana nelle tratte turistiche',
    'Gli scavi non hanno ombra: d\'estate a mezzogiorno diventano pericolosi',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, tutto a piedi, metro e treni locali',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il Cristo Velato, il Caravaggio del Pio Monte della Misericordia, il legno carbonizzato ancora in piedi a Ercolano',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Decumani e Cappella Sansevero', destinazioneSlug: 'napoli' },
    { nome: 'Museo Archeologico Nazionale', destinazioneSlug: 'napoli' },
    { nome: 'Rione Sanità', destinazioneSlug: 'napoli' },
    { nome: 'Vomero, Castel Sant\'Elmo e Certosa', destinazioneSlug: 'napoli' },
    { nome: 'Ercolano, Vesuvio e Pompei', destinazioneSlug: 'napoli' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — I decumani, il Cristo Velato e la Napoli sotterranea',
      tratta: 'Spaccanapoli, Santa Chiara, Cappella Sansevero, via dei Tribunali e la città sotterranea',
      pernottamento: 'Napoli, centro storico o Chiaia',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'Cappella Sansevero solo su prenotazione con fascia oraria; Pio Monte della Misericordia a ingresso molto contenuto',
      destinazioneSlug: 'napoli',
    },
    {
      titoloGiorno: 'Giorno 2 — MANN, Sanità e la collina',
      tratta: 'MANN al mattino, Rione Sanità nel pomeriggio, Vomero al tramonto',
      pernottamento: 'Napoli',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'le Catacombe di San Gennaro sono gestite da una cooperativa del quartiere e il biglietto finanzia quel progetto',
      destinazioneSlug: 'napoli',
    },
    {
      titoloGiorno: 'Giorno 3 — Il Vesuvio, Ercolano e Pompei',
      tratta: 'Ercolano e Vesuvio, oppure Pompei per l\'intera giornata',
      intensita: 'intenso',
      costiNoti: 'Vesuvio con prenotazione online obbligatoria; biglietti degli scavi con slot consigliati in alta stagione',
      destinazioneSlug: 'napoli',
    },
  ],
  budget: [
    { etichetta: 'Ingressi in città', valore: 'bassissimi rispetto al resto d\'Italia: il Caravaggio del Pio Monte costa pochi euro' },
    { etichetta: 'Scavi e Vesuvio', valore: 'la voce principale della giornata archeologica, con i biglietti da prendere online' },
    { etichetta: 'Trasporti', valore: 'metropolitana, funicolari e Circumvesuviana: economici, con l\'alternativa più rapida e più cara per gli scavi' },
    { etichetta: 'Alloggio', valore: 'tra i più bassi delle grandi città italiane, con il centro storico rumoroso di notte' },
    { etichetta: 'Cibo', valore: 'il miglior rapporto qualità-prezzo d\'Italia: è difficile mangiare male' },
  ],
}
