import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Andalusia in 9 giorni: Siviglia,
// Córdoba, Granada e Ronda". Il testo narrativo resta nel markdown
// (src/content/viaggi/64-andalusia-itinerario.md). `titoloGiorno` deve
// combaciare esattamente con le intestazioni "### Giorno N — ..." del file
// markdown. Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da
// ogni giorno, task separato. Trip principale del Paese "spagna" (vedi
// tripPrincipaleSlug in paesi/spagna.ts).

export const andalusiaItinerarioMeta: TripMeta = {
  tripSlug: 'andalusia-itinerario',
  paeseSlug: 'spagna',
  ritmo:
    'Ritmo cittadino sostenuto nelle prime sei giornate (Siviglia, Córdoba, Granada), con l\'Alhambra e la Mezquita a scandire le giornate più intense; si allenta negli ultimi tre giorni a Ronda, dove il ritmo diventa di montagna e strada panoramica.',
  trasporti:
    'Treno AVE ad alta velocità tra Siviglia e Córdoba (autonomia completa senza auto per le prime tre città), bus o treno regionale Córdoba-Granada, auto a noleggio da Granada in poi per raggiungere Ronda e i pueblos blancos.',
  stile: ['cultura moresca', 'flamenco', 'città', 'gastronomia'],
  adattoA: [
    'chi vuole la "Spagna da cartolina" più riconoscibile: Alhambra, Mezquita, flamenco',
    'chi preferisce muoversi in treno ad alta velocità tra le città grandi e noleggiare un\'auto solo per l\'ultimo tratto di montagna',
    'chi accetta di evitare i mesi estivi per via del caldo, spostando il viaggio in primavera o autunno',
    'chi cerca un buon equilibrio tra grandi monumenti e un ritmo più lento e paesaggistico, quello di Ronda, a chiusura del viaggio',
  ],
  puntiForti: [
    'L\'Alhambra e il Generalife, l\'ultimo palazzo moresco d\'Europa rimasto quasi intatto',
    'La Mezquita-Catedral di Córdoba, con la cattedrale rinascimentale innestata al centro della foresta di colonne',
    'Il Real Alcázar di Siviglia, palazzo mudéjar ancora in uso oggi dalla famiglia reale spagnola',
    'Il Mirador de San Nicolás all\'Albaicín, la vista classica sull\'Alhambra con la Sierra Nevada sullo sfondo',
    'Il Puente Nuevo di Ronda sulla gola del Tajo, il contrappunto di montagna a chiusura del viaggio',
  ],
  criticita: [
    'I biglietti dell\'Alhambra si vendono solo online fino a tre mesi prima e in alta stagione si esauriscono con settimane, a volte mesi, di anticipo: vanno prenotati appena si fissa la data del viaggio',
    'Il caldo estivo a Siviglia e Córdoba è un fattore di pianificazione serio: medie di 36-37°C a luglio-agosto, con il record assoluto spagnolo di 47,6°C toccato a Córdoba nell\'agosto 2021 — questo itinerario è pensato per marzo-maggio o settembre-inizio novembre',
    'La Settimana Santa e la Feria de Abril a Siviglia portano grande folla e prezzi molto più alti: da mettere in conto se il viaggio cade in quel periodo',
    'Córdoba-Granada non ha una tratta AVE diretta veloce quanto le altre: il bus è spesso più pratico del treno regionale',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, treno AVE tra le città grandi, auto a noleggio da Granada in poi',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Siviglia', destinazioneSlug: 'siviglia' },
    { nome: 'Córdoba', destinazioneSlug: 'cordoba' },
    { nome: 'Granada', destinazioneSlug: 'granada' },
    { nome: 'Ronda e i pueblos blancos', destinazioneSlug: 'ronda-pueblos-blancos' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Siviglia: Cattedrale e Giralda',
      tratta: 'Arrivo internazionale a Siviglia (San Pablo) → centro storico',
      pernottamento: 'Siviglia, Barrio de Santa Cruz o Triana',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'siviglia',
    },
    {
      titoloGiorno: 'Giorno 2 — Siviglia: Real Alcázar, Triana e flamenco',
      pernottamento: 'Siviglia, Barrio de Santa Cruz o Triana',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Real Alcázar circa 15,50€ (Appartamenti Reali +5,50€); tablao di flamenco 20-45€ a persona',
      destinazioneSlug: 'siviglia',
    },
    {
      titoloGiorno: 'Giorno 3 — Da Siviglia a Córdoba: la Mezquita',
      tratta: 'Siviglia → Córdoba, treno AVE (circa 45 minuti)',
      pernottamento: 'Córdoba, Judería',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Mezquita-Catedral circa 15€ (gratuita nei giorni feriali 8:30-9:30)',
      destinazioneSlug: 'cordoba',
    },
    {
      titoloGiorno: 'Giorno 4 — Córdoba e trasferimento a Granada',
      tratta: 'Córdoba → Granada, bus o treno regionale (circa 2-3 ore)',
      pernottamento: 'Granada, Albaicín o centro',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Alcázar de los Reyes Cristianos circa 7€',
      destinazioneSlug: 'granada',
    },
    {
      titoloGiorno: 'Giorno 5 — Granada: l\'Alhambra e il Generalife',
      pernottamento: 'Granada, Albaicín o centro',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'Alhambra generale circa 19,60€, prenotazione obbligatoria con mesi di anticipo',
      destinazioneSlug: 'granada',
    },
    {
      titoloGiorno: 'Giorno 6 — Granada: Albaicín e Sacromonte',
      pernottamento: 'Granada, Albaicín o centro',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'zambra di flamenco nel Sacromonte 25-40€ a persona',
      destinazioneSlug: 'granada',
    },
    {
      titoloGiorno: 'Giorno 7 — Da Granada a Ronda: la Serranía',
      tratta: 'Granada → Ronda, in auto attraverso la Serranía de Ronda (circa 2h30-3h)',
      pernottamento: 'Ronda, centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'ronda-pueblos-blancos',
    },
    {
      titoloGiorno: 'Giorno 8 — Ronda: il Puente Nuevo e i pueblos blancos',
      tratta: 'Escursione in auto verso Setenil de las Bodegas o Grazalema',
      pernottamento: 'Ronda, centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Plaza de Toros e museo circa 10€; bagni arabi circa 3,50€',
      destinazioneSlug: 'ronda-pueblos-blancos',
    },
    {
      titoloGiorno: 'Giorno 9 — Ronda e chiusura del viaggio verso Málaga',
      tratta: 'Ronda → Málaga, in auto (circa 1h30) → volo di rientro',
      intensita: 'leggero',
      destinazioneSlug: 'ronda-pueblos-blancos',
    },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali/internazionali', valore: undefined },
    { etichetta: 'Treni AVE', valore: 'Siviglia-Córdoba circa 45 minuti; le tratte AVE spagnole hanno prezzi variabili secondo l\'anticipo di prenotazione' },
    { etichetta: 'Alhambra', valore: 'circa 19,60€ a persona, prenotazione online obbligatoria con largo anticipo' },
    { etichetta: 'Real Alcázar e Mezquita', valore: 'circa 15-15,50€ ciascuno' },
    { etichetta: 'Flamenco', valore: 'tablao a Siviglia 20-45€, zambra nel Sacromonte 25-40€ a persona' },
    { etichetta: 'Auto a noleggio', valore: 'da Granada a Málaga, indicativamente 3-4 giorni' },
    { etichetta: 'Alloggi e pasti', valore: 'nella media spagnola; il tapeo resta un modo economico di cenare in tutte le tappe' },
  ],
}
