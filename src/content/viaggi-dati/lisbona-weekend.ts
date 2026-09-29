import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Lisbona in un weekend lungo".
// Il testo narrativo resta nel markdown (src/content/viaggi/59-lisbona-weekend.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da ogni giorno,
// task separato.

export const lisbonaWeekendMeta: TripMeta = {
  tripSlug: 'lisbona-weekend',
  paeseSlug: 'portogallo',
  ritmo: 'Quattro giorni di calendario, una città collinare da vivere a piedi e in tram, con una giornata intera isolata per la gita a Sintra',
  trasporti: 'Piedi, tram e funicolari in città, treno regionale da Rossio per Sintra; nessuna auto necessaria',
  stile: [
    'città',
    'storia',
    'gastronomia',
  ],
  adattoA: [
    'chi vuole un weekend europeo tra una capitale collinare ricca di storia e una gita fuori porta da favola come Sintra',
    'chi accetta di partire presto la mattina per Sintra e di prenotare online i biglietti dei palazzi',
    'chi si muove bene tra salite, tram e mezzi pubblici, senza bisogno di un\'auto',
  ],
  puntiForti: [
    'L\'Alfama e i suoi miradouros, il quartiere sopravvissuto quasi intatto al terremoto del 1755',
    'Belém, con il Mosteiro dos Jerónimos, la Torre de Belém e il pastel de nata originale alla Pastéis de Belém',
    'Sintra, con il Palácio Nacional da Pena e il pozzo iniziatico della Quinta da Regaleira',
  ],
  criticita: [
    'Il tram 28 è tra i mezzi pubblici più battuti d\'Europa dai borseggiatori: va preso presto al mattino',
    'A Sintra le code ai palazzi principali si allungano già a metà mattinata in alta stagione: serve partire presto e prenotare online',
    'Lisbona è una città di sette colline reali, non un centro storico pianeggiante: le giornate vanno pianificate tenendo conto dei dislivelli',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, a piedi e con i mezzi pubblici',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Alfama e tram 28', destinazioneSlug: 'lisbona' },
    { nome: 'Belém', destinazioneSlug: 'lisbona' },
    { nome: 'Sintra', destinazioneSlug: 'sintra' },
    { nome: 'Baixa e Chiado', destinazioneSlug: 'lisbona' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Alfama e il tram 28',
      tratta: 'Castelo de São Jorge, miradouros dell\'Alfama e giro sul tram 28',
      pernottamento: 'Lisbona, Baixa-Chiado',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'biglietto tram singolo circa 3€, più conveniente la carta Viva Viagem/Navegante',
      destinazioneSlug: 'lisbona',
    },
    {
      titoloGiorno: 'Giorno 2 — Belém',
      tratta: 'Mosteiro dos Jerónimos, Torre de Belém e pastéis de nata alla Pastéis de Belém',
      pernottamento: 'Lisbona',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'ingressi Jerónimos e Torre de Belém pochi euro ciascuno',
      destinazioneSlug: 'lisbona',
    },
    {
      titoloGiorno: 'Giorno 3 — Sintra',
      tratta: 'Giornata intera a Sintra: Palácio Nacional da Pena, Quinta da Regaleira e Castelo dos Mouros',
      pernottamento: 'Lisbona',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'treno da Rossio circa 5€ a tratta; Palácio da Pena 20-25€, Quinta da Regaleira circa 15€',
      destinazioneSlug: 'sintra',
    },
    {
      titoloGiorno: 'Giorno 4 — Baixa, Chiado e ultimo giro',
      tratta: 'Baixa, Praça do Comércio, Chiado e Elevador de Santa Justa',
      intensita: 'leggero',
      costiNoti: 'Elevador de Santa Justa pochi euro, incluso nei pass giornalieri dei trasporti',
      destinazioneSlug: 'lisbona',
    },
  ],
  budget: [
    { etichetta: 'Sintra (treno + ingressi)', valore: 'circa 45-50€ a persona tra treno, Palácio da Pena e Quinta da Regaleira' },
    { etichetta: 'Belém (Jerónimos + Torre)', valore: 'pochi euro ciascuno, con biglietto combinato disponibile' },
    { etichetta: 'Alloggio', valore: 'ancora relativamente economico per l\'Europa occidentale, in crescita per la pressione turistica' },
    { etichetta: 'Trasporti', valore: 'bassi con la carta Viva Viagem/Navegante; nessuna auto necessaria' },
    { etichetta: 'Cibo', valore: 'pranzo semplice 10-12€, cena normale 15-20€ a testa' },
  ],
}
