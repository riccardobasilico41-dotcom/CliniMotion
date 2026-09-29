import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Praga in un weekend lungo".
// Il testo narrativo resta nel markdown (src/content/viaggi/54-praga-weekend.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da ogni giorno,
// task separato.

export const pragaWeekendMeta: TripMeta = {
  tripSlug: 'praga-weekend',
  paeseSlug: 'repubblica-ceca',
  ritmo: 'Tre-quattro giorni di calendario, un centro storico compatto e Vyšehrad come mezza giornata più tranquilla a chiusura del weekend',
  trasporti: 'Centro storico a piedi, metro e tram per il resto della città; nessuna auto necessaria',
  stile: [
    'storia',
    'architettura',
    'gastronomia',
  ],
  adattoA: [
    'chi vuole un weekend europeo compatto tra Medioevo, barocco e una cultura della birra molto radicata',
    'chi si muove bene tra mezzi pubblici e a piedi, senza bisogno di un\'auto',
    'chi preferisce sapere in anticipo dove sono le truffe da zona turistica invece di scoprirle sul posto',
  ],
  puntiForti: [
    'L\'Orologio Astronomico del 1410, il terzo più antico al mondo e ancora funzionante',
    'Il colle del Castello di Praga, tra i complessi castellani chiusi più grandi al mondo, con la Cattedrale di San Vito',
    'Vyšehrad, il contrappunto tranquillo alla folla del centro, con la leggenda fondativa di Praga',
  ],
  criticita: [
    'La Repubblica Ceca è nell\'Unione Europea ma non nell\'eurozona: si paga in corone, non in euro',
    'Ristoranti intorno alla Piazza della Città Vecchia e via Karlova con conti gonfiati e "welcome drink" non richiesti',
    'Borseggi concentrati sul tram 22, la linea che sale verso il Castello',
    'Occasionali finti agenti di polizia che chiedono soldi per strada',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, tutto a piedi e con i mezzi pubblici',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Staré Město e Piazza della Città Vecchia', destinazioneSlug: 'praga' },
    { nome: 'Ponte Carlo, Malá Strana e Castello', destinazioneSlug: 'praga' },
    { nome: 'Josefov', destinazioneSlug: 'praga' },
    { nome: 'Vyšehrad', destinazioneSlug: 'praga' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Staré Město e la Piazza della Città Vecchia',
      tratta: 'Piazza della Città Vecchia, Orologio Astronomico, Chiesa di Tyn',
      pernottamento: 'Praga, centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'accesso alla piazza e alle chiese esterne gratuito; attenzione ai ristoranti con conti gonfiati intorno alla piazza',
      destinazioneSlug: 'praga',
    },
    {
      titoloGiorno: 'Giorno 2 — Ponte Carlo, Malá Strana e il Castello di Praga',
      tratta: 'Ponte Carlo, Malá Strana e colle del Castello di Praga',
      pernottamento: 'Praga',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'biglietto Circuito A del Castello attorno ai 450 CZK; cortili e navata della Cattedrale gratuiti',
      destinazioneSlug: 'praga',
    },
    {
      titoloGiorno: 'Giorno 3 — Josefov, il quartiere ebraico',
      tratta: 'Sinagoghe e Antico Cimitero Ebraico di Josefov, Nové Město nel pomeriggio',
      pernottamento: 'Praga',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Jewish Town Ticket attorno ai 600 CZK; Sinagoga Vecchia-Nuova con biglietto separato',
      destinazioneSlug: 'praga',
    },
    {
      titoloGiorno: 'Giorno 4 — Vyšehrad e l\'ultimo giro',
      tratta: 'Fortezza di Vyšehrad al mattino, ultimo giro per il centro nel pomeriggio',
      intensita: 'leggero',
      costiNoti: 'ingresso al parco di Vyšehrad gratuito',
      destinazioneSlug: 'praga',
    },
  ],
  budget: [
    { etichetta: 'Castello di Praga', valore: 'circa 450 CZK il Circuito A; cortili e navata della Cattedrale gratuiti' },
    { etichetta: 'Josefov', valore: 'circa 600 CZK il Jewish Town Ticket per sei siti' },
    { etichetta: 'Alloggio', valore: 'tra le capitali europee più economiche fuori da Staré Město; il centro storico costa più di Vinohrady o Žižkov' },
    { etichetta: 'Trasporti', valore: 'bassi: a piedi in centro, metro/tram PID per il resto, nessuna auto necessaria' },
    { etichetta: 'Cibo e birra', valore: 'hospoda di quartiere a pochi euro a pasto; birra più economica dell\'acqua fuori dal centro turistico' },
  ],
}
