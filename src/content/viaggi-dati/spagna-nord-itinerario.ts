import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Spagna del Nord in 8 giorni: San
// Sebastián, Bilbao e la costa verso Santiago". Il testo narrativo resta nel
// markdown (src/content/viaggi/65-spagna-nord-itinerario.md). `titoloGiorno`
// deve combaciare esattamente con le intestazioni "### Giorno N — ..." del
// file markdown. Nessuna foto: campo `immagine`/`imageAlt` volutamente
// assente da ogni giorno, task separato.

export const spagnaNordItinerarioMeta: TripMeta = {
  tripSlug: 'spagna-nord-itinerario',
  paeseSlug: 'spagna',
  ritmo:
    'Roadtrip costiero a tappe di 1-2 notti, con due basi urbane più lunghe (San Sebastián e Bilbao) seguite da un tratto di trasferimento via via più lungo lungo Cantabria, Asturie e Galizia fino a Santiago; nessuna giornata è fisicamente intensa, ma i trasferimenti costieri richiedono più tempo di quanto sembri sulla mappa.',
  trasporti:
    'Auto a noleggio per l\'intero percorso, indispensabile per seguire la costa toccando paesi piccoli con collegamenti pubblici scarsi; atterraggio e rientro su aeroporti diversi (Bilbao e Santiago).',
  stile: ['gastronomia', 'costa', 'cammino di santiago', 'città'],
  adattoA: [
    'chi cerca la Spagna che smentisce lo stereotipo del sole e del caldo: clima fresco, paesaggio verde, identità basca e galiziana distinte',
    'chi vuole un roadtrip costiero senza il caldo estremo del sud, proprio nei mesi (giugno-settembre) che in Andalusia andrebbero evitati',
    'chi è appassionato di cibo: il pintxo basco, la fabada asturiana, il pulpo gallego sono il filo conduttore del viaggio',
    'chi vuole assaggiare un tratto del Camino del Norte senza percorrerlo per intero (quasi 900 km da Irún a Santiago)',
  ],
  puntiForti: [
    'Il txikiteo nella Parte Vieja di San Sebastián, la cultura del pintxo nella sua forma più densa e più curata di Spagna',
    'Il Museo Guggenheim Bilbao, l\'edificio che ha rigenerato una città industriale intera',
    'La Costa Verde asturiana tra Llanes e Gijón, scogliere e paesi di pescatori lontani dai circuiti più battuti',
    'L\'arrivo alla Cattedrale di Santiago de Compostela sulla Praza do Obradoiro, meta finale di tutti i Cammini',
  ],
  criticita: [
    'Il clima atlantico resta piovoso più spesso che nel resto di Spagna anche nella finestra consigliata (giugno-settembre): serve sempre una giacca antipioggia',
    'Il Guggenheim Bilbao chiude quasi tutti i lunedì, con estensioni stagionali estive da verificare prima di programmare le tappe',
    'Le distanze costiere sono ingannevoli sulla mappa: le strade seguono la costa con molte curve, i tempi di trasferimento sono più lunghi del previsto',
    'Percorrere un tratto del Camino del Norte richiede prenotare gli albergues nei mesi di punta, quando i posti letto nei paesi piccoli si esauriscono',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, in auto per l\'intero percorso costiero',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'San Sebastián (Donostia)', destinazioneSlug: 'san-sebastian' },
    { nome: 'Bilbao', destinazioneSlug: 'bilbao' },
    { nome: 'Cantabria e Asturie (Costa Verde)' },
    { nome: 'Santiago de Compostela', destinazioneSlug: 'santiago-compostela-camino-del-norte' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a San Sebastián: la Parte Vieja',
      tratta: 'Arrivo internazionale a Bilbao → San Sebastián, in bus o auto (circa 1h20)',
      pernottamento: 'San Sebastián, Parte Vieja o Gros',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'san-sebastian',
    },
    {
      titoloGiorno: 'Giorno 2 — San Sebastián: la Concha e il Monte Igueldo',
      pernottamento: 'San Sebastián, Parte Vieja o Gros',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'san-sebastian',
    },
    {
      titoloGiorno: 'Giorno 3 — Da San Sebastián a Bilbao',
      tratta: 'San Sebastián → Bilbao, in auto (circa 1h20)',
      pernottamento: 'Bilbao, Casco Viejo o Ensanche',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'bilbao',
    },
    {
      titoloGiorno: 'Giorno 4 — Bilbao: il Guggenheim e l\'Ensanche',
      pernottamento: 'Bilbao, Casco Viejo o Ensanche',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Guggenheim 18€ (metà giugno-metà settembre) o 15€ nel resto dell\'anno',
      destinazioneSlug: 'bilbao',
    },
    {
      titoloGiorno: 'Giorno 5 — Da Bilbao alla Cantabria: Santander e Santillana del Mar',
      tratta: 'Bilbao → Santillana del Mar → Santander, in auto (circa 1h30-2h)',
      pernottamento: 'Santander o Santillana del Mar',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
    },
    {
      titoloGiorno: 'Giorno 6 — Cantabria e Asturie: la Costa Verde',
      tratta: 'Santander → Llanes → Gijón, lungo la Costa Verde asturiana',
      pernottamento: 'Llanes o Gijón',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
    },
    {
      titoloGiorno: 'Giorno 7 — Dalle Asturie alla Galizia: verso Santiago',
      tratta: 'Costa asturiana → Santiago de Compostela, in auto (circa 4-5 ore)',
      pernottamento: 'Santiago de Compostela, centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'santiago-compostela-camino-del-norte',
    },
    {
      titoloGiorno: 'Giorno 8 — Santiago de Compostela e chiusura del Cammino',
      tratta: 'Santiago de Compostela → volo di rientro (aeroporto Rosalía de Castro)',
      intensita: 'leggero',
      destinazioneSlug: 'santiago-compostela-camino-del-norte',
    },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali/internazionali', valore: undefined },
    { etichetta: 'Auto a noleggio', valore: 'per l\'intero percorso di circa 550 km costieri, 8 giorni' },
    { etichetta: 'Guggenheim Bilbao', valore: '15-18€ a persona secondo la stagione' },
    { etichetta: 'Pintxos e txikiteo', valore: 'indicativamente 25-35€ a persona per serata a San Sebastián o Bilbao' },
    { etichetta: 'Alloggi', valore: 'nella media spagnola nelle città, più contenuti nei paesi costieri di Cantabria e Asturie' },
    { etichetta: 'Cibo', valore: 'fabada asturiana e pulpo á feira tra i piatti più caratteristici, prezzi nella media' },
  ],
}
