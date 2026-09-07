import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "New York 360°". Il testo
// narrativo resta nel markdown (src/content/viaggi/08-new-york-360.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni
// "### Giorno N (DD.MM) — ..." del file markdown.

export const newYork360Meta: TripMeta = {
  tripSlug: 'new-york-360',
  paeseSlug: 'new-york',
  ritmo: 'Molto intenso — 15-20 km a piedi al giorno, programma volutamente più ricco di quanto sia fattibile in 6 giorni',
  trasporti: 'Metro, Uber/Lyft (soprattutto di notte) e a piedi',
  stile: ['città', 'sport'],
  adattoA: ['chi vuole vedere sia Manhattan sia Brooklyn in una settimana', 'chi vuole unire una partita sportiva dal vivo al programma turistico classico', 'chi accetta di dover scegliere le priorità piuttosto che fare tutto'],
  puntiForti: [
    'Il tramonto al Top of the Rock, spesso preferito dai newyorkesi stessi rispetto all\'Empire State',
    'DUMBO, con il ponte di Manhattan perfettamente incorniciato tra i palazzi',
    'La messa gospel di domenica mattina ad Harlem, un lato di New York meno da cartolina',
  ],
  criticita: [
    'Il programma è volutamente più ricco di quanto sia fattibile in 6 giorni: è normale non riuscire a fare tutto',
    'Prenotare Top of the Rock, i musical di Broadway e le partite sportive con largo anticipo, soprattutto in alta stagione',
    'Camere piccole, anche per gli standard newyorkesi, in quasi tutti gli hotel del centro',
  ],
  budgetTotale: 'circa 200-280€ per fare praticamente tutto, esclusi volo e hotel',
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'organizzazione flessibile, spese gestite di volta in volta',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'DUMBO con il ponte di Manhattan sullo sfondo, il tramonto al Top of the Rock, la messa gospel di Harlem',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Times Square e Midtown', destinazioneSlug: 'times-square-midtown' },
    { nome: 'Harlem e Central Park', destinazioneSlug: 'harlem-central-park' },
    { nome: 'Rockefeller Center e Chelsea', destinazioneSlug: 'rockefeller-chelsea' },
    { nome: 'Statua della Libertà e Wall Street', destinazioneSlug: 'statua-liberta-wall-street' },
    { nome: 'Ground Zero e DUMBO', destinazioneSlug: 'ground-zero-dumbo' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 (07.09) — Arrivo, Times Square',
      tratta: 'Arrivo a New York, sistemazione a Midtown',
      pernottamento: 'Paramount Hotel, 235 W 46th St',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'times-square-midtown',
    },
    {
      titoloGiorno: 'Giorno 2 (08.09) — Harlem, Central Park, Empire State Building',
      tratta: 'Harlem → Central Park → Empire State Building',
      pernottamento: 'Paramount Hotel, 235 W 46th St',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      costiNoti: 'Walking tour di Harlem 275$ + mancia',
      destinazioneSlug: 'harlem-central-park',
    },
    {
      titoloGiorno: 'Giorno 3 (09.09) — Cattedrale, MoMA, High Line, The Vessel',
      tratta: 'Rockefeller Center → Cattedrale di San Patrizio → MoMA → High Line → The Vessel',
      pernottamento: 'Paramount Hotel, 235 W 46th St',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'rockefeller-chelsea',
    },
    {
      titoloGiorno: 'Giorno 4 (10.09) — Statua della Libertà, Wall Street, Chinatown, Broadway',
      tratta: 'Statua della Libertà ed Ellis Island → Wall Street → Chinatown → Broadway',
      pernottamento: 'Paramount Hotel, 235 W 46th St',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'statua-liberta-wall-street',
    },
    {
      titoloGiorno: 'Giorno 5 (11.09) — Ground Zero, DUMBO, Top of the Rock',
      tratta: 'Ground Zero → DUMBO → Brooklyn Bridge → Top of the Rock',
      pernottamento: 'Paramount Hotel, 235 W 46th St',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'ground-zero-dumbo',
    },
    {
      titoloGiorno: 'Giorno 6 (12.09) — Rientro',
      tratta: 'Check-out e rientro',
      pernottamento: 'nessun pernottamento (giorno di partenza)',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'times-square-midtown',
    },
  ],
  budget: [
    { etichetta: 'Volo', valore: undefined },
    { etichetta: 'Hotel', valore: undefined },
    { etichetta: 'Attività ed extra sul posto', valore: '200-280€' },
    { etichetta: 'Totale', valore: undefined },
  ],
}
