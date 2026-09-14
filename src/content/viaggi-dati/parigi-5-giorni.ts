import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Parigi in 5 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/40-parigi-5-giorni.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const parigi5GiorniMeta: TripMeta = {
  tripSlug: 'parigi-5-giorni',
  paeseSlug: 'francia',
  ritmo: 'Un grande museo al giorno, mai due, con un giorno dedicato ai quartieri fuori dal centro monumentale',
  trasporti: 'Metropolitana e a piedi',
  stile: [
    'arte',
    'architettura',
    'città',
  ],
  adattoA: [
    'chi va a Parigi per la prima volta e vuole i grandi musei senza esaurirsi',
    'chi accetta di rinunciare a qualcosa piuttosto che fare tutto di corsa',
    'chi cammina volentieri',
  ],
  puntiForti: [
    'La Sainte-Chapelle in una giornata di sole, l\'interno più bello della città',
    'Il Louvre con una strategia decisa prima, non un percorso completo',
    'Montmartre alle sette del mattino, prima dei pullman',
  ],
  criticita: [
    'Louvre e Versailles richiedono prenotazione con fascia oraria di fatto obbligatoria',
    'Louvre chiuso il martedì, Orsay il lunedì, Versailles il lunedì',
    'Le distanze sono ingannevoli: la metro comprime la percezione della città',
    'In agosto molti ristoranti e negozi di quartiere chiudono per settimane',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, metropolitana e a piedi',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'La Vittoria di Samotracia sullo scalone del Louvre, le vetrate della Sainte-Chapelle, Montmartre all\'alba',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Île de la Cité e Marais', destinazioneSlug: 'parigi' },
    { nome: 'Louvre', destinazioneSlug: 'parigi' },
    { nome: 'Orsay e Tour Eiffel', destinazioneSlug: 'parigi' },
    { nome: 'Montmartre e Versailles', destinazioneSlug: 'parigi' },
    { nome: 'Père-Lachaise e quartieri', destinazioneSlug: 'parigi' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Île de la Cité e il centro storico',
      tratta: 'Sainte-Chapelle, Notre-Dame, Marais',
      pernottamento: 'Marais o quartiere latino',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Sainte-Chapelle solo con il sole',
      destinazioneSlug: 'parigi',
    },
    {
      titoloGiorno: 'Giorno 2 — Il Louvre',
      tratta: 'Louvre con strategia decisa prima',
      pernottamento: 'Marais o quartiere latino',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'prenotazione con fascia oraria di fatto obbligatoria',
      destinazioneSlug: 'parigi',
    },
    {
      titoloGiorno: 'Giorno 3 — Orsay, Orangerie e Torre Eiffel',
      tratta: 'Musée d\'Orsay, Orangerie, Tour Eiffel da lontano',
      pernottamento: 'Marais o quartiere latino',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'parigi',
    },
    {
      titoloGiorno: 'Giorno 4 — Montmartre all\'alba e Versailles',
      tratta: 'Montmartre all\'alba, Versailles nel pomeriggio',
      pernottamento: 'Marais o quartiere latino',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'Versailles con fascia oraria obbligatoria, chiuso il lunedì',
      destinazioneSlug: 'parigi',
    },
    {
      titoloGiorno: 'Giorno 5 — Quartieri e chiusura',
      tratta: 'Père-Lachaise, Canal Saint-Martin o Belleville',
      pernottamento: 'Marais o quartiere latino',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'parigi',
    },
  ],
  budget: [
    { etichetta: 'Louvre e Orsay', valore: 'biglietti singoli contenuti; il Paris Museum Pass conviene da tre musei al giorno' },
    { etichetta: 'Versailles', valore: 'biglietto medio più il trasporto in treno regionale' },
    { etichetta: 'Metropolitana', valore: 'tariffa unica semplificata dal 2025, da verificare importi' },
    { etichetta: 'Alloggio', valore: 'la voce più alta: Marais e Canal Saint-Martin il miglior compromesso' },
    { etichetta: 'Pasti', valore: 'il menù di mezzogiorno vale la metà della sera' },
  ],
}
