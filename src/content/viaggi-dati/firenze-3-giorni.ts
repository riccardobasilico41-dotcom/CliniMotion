import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Firenze in 3 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/29-firenze-3-giorni.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const firenze3GiorniMeta: TripMeta = {
  tripSlug: 'firenze-3-giorni',
  paeseSlug: 'italia',
  ritmo: 'Un grande museo al giorno e non due, con dei buchi lasciati apposta nel programma: è la concentrazione a essere il problema',
  trasporti: 'Tutto a piedi; l\'auto è inutile e la ZTL ha varchi elettronici attivi',
  stile: [
    'arte',
    'rinascimento',
    'gastronomia',
  ],
  adattoA: [
    'chi vuole il Rinascimento fiorentino senza uscirne annientato',
    'chi preferisce due musei fatti bene a sei attraversati di corsa',
    'chi sa già che dopo il terzo capolavoro si smette di vedere',
  ],
  puntiForti: [
    'La cupola del Brunelleschi, salita passando tra i due gusci della calotta autoportante',
    'Il Museo dell\'Opera del Duomo, con le Porte del Paradiso originali e la Pietà Bandini, che quasi tutti saltano',
    'San Miniato al Monte al tramonto, con i vespri in gregoriano e un decimo della gente di Piazzale Michelangelo',
  ],
  criticita: [
    'La cupola si sale solo con prenotazione a fascia oraria e gli slot finiscono in alta stagione',
    '463 scalini senza ascensore e senza uscite intermedie, con il tratto finale stretto e inclinato',
    'Molti musei statali chiudono il lunedì e il complesso del Duomo ha un calendario proprio',
    'Le formule e i nomi dei biglietti cumulativi del Duomo cambiano nel tempo',
    'L\'accesso alla Cappella Brancacci è contingentato e condizionato dai restauri',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, tutto a piedi',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il passaggio tra i due gusci della cupola, i Prigioni incompiuti di Michelangelo all\'Accademia, i vespri gregoriani a San Miniato al tramonto',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Complesso del Duomo', destinazioneSlug: 'firenze' },
    { nome: 'Uffizi', destinazioneSlug: 'firenze' },
    { nome: 'Oltrarno e Santo Spirito', destinazioneSlug: 'firenze' },
    { nome: 'San Miniato al Monte', destinazioneSlug: 'firenze' },
    { nome: 'Accademia e Cappelle Medicee', destinazioneSlug: 'firenze' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Il complesso del Duomo e il centro',
      tratta: 'Cupola, Battistero, Campanile e Museo dell\'Opera del Duomo',
      pernottamento: 'Firenze, centro storico o Oltrarno',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'biglietto cumulativo del complesso del Duomo con validità a giorni; cupola solo su prenotazione oraria',
      destinazioneSlug: 'firenze',
    },
    {
      titoloGiorno: 'Giorno 2 — Uffizi e Oltrarno',
      tratta: 'Uffizi al mattino, Oltrarno nel pomeriggio, San Miniato al tramonto',
      pernottamento: 'Firenze',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'Uffizi con slot fortemente consigliato; Cappella Brancacci con accesso contingentato',
      destinazioneSlug: 'firenze',
    },
    {
      titoloGiorno: 'Giorno 3 — Il David, le Cappelle Medicee e la scelta finale',
      tratta: 'Galleria dell\'Accademia, Cappelle Medicee e una scelta tra Bargello, Santa Croce e Palazzo Vecchio',
      intensita: 'medio',
      costiNoti: 'Accademia su prenotazione; il Bargello ha il miglior rapporto tra qualità e affollamento della città',
      destinazioneSlug: 'firenze',
    },
  ],
  budget: [
    { etichetta: 'Complesso del Duomo', valore: 'biglietto cumulativo unico: cupola, Battistero, campanile, cripta e Museo dell\'Opera' },
    { etichetta: 'Uffizi e Accademia', valore: 'le due voci museali principali, entrambe con prenotazione' },
    { etichetta: 'Firenze Card', valore: 'conviene solo facendo molti musei in tre giorni, cioè il ritmo che qui si sconsiglia' },
    { etichetta: 'Alloggio', valore: 'alto in centro; l\'Oltrarno è il miglior compromesso' },
    { etichetta: 'Trasporti', valore: 'praticamente nulli: la città si attraversa a piedi in venticinque minuti' },
  ],
}
