import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Milano in 2 giorni e i laghi in giornata".
// Il testo narrativo resta nel markdown (src/content/viaggi/30-milano-e-i-laghi.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const milanoEILaghiMeta: TripMeta = {
  tripSlug: 'milano-e-i-laghi',
  paeseSlug: 'italia',
  ritmo: 'Due giornate compatte in città, con le gite sui laghi come vero motivo per fermarsi qui',
  trasporti: 'Metropolitana più piedi in città; treni regionali per Como, Bergamo e il Lago Maggiore',
  stile: [
    'design',
    'arte contemporanea',
    'laghi',
  ],
  adattoA: [
    'chi usa Milano come base per il Lago di Como e Bergamo Alta',
    'chi cerca arte contemporanea e architettura più che centri storici',
    'chi ha uno o due giorni e vuole una città che si gira davvero in quel tempo',
  ],
  puntiForti: [
    'Le terrazze del Duomo, camminando sul tetto tra le 135 guglie',
    'San Maurizio al Monastero Maggiore: gratuita, semivuota, interamente affrescata da Luini',
    'Varenna e il triangolo dei battelli sul Lago di Como, che è il modo giusto di vedere il lago',
  ],
  criticita: [
    'Il Cenacolo è la prenotazione più difficile d\'Italia: biglietti a scaglioni con mesi di anticipo, visita di pochi minuti, nessun modo di entrare presentandosi sul posto',
    'Milano non è una città d\'arte diffusa: chi ci arriva aspettandosi Firenze resta deluso',
    'Nelle settimane del Salone del Mobile e della moda i prezzi degli alloggi triplicano',
    'Ad agosto mezza città chiude',
    'Sul lago, la strada costiera è stretta, trafficata e senza parcheggi: si va in battello',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, metro e treni regionali',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il tetto del Duomo tra le guglie, San Maurizio al Monastero Maggiore, i battelli tra Varenna, Bellagio e Menaggio',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Duomo e centro', destinazioneSlug: 'milano-nord' },
    { nome: 'Brera e Castello Sforzesco', destinazioneSlug: 'milano-nord' },
    { nome: 'Cenacolo e Sant\'Ambrogio', destinazioneSlug: 'milano-nord' },
    { nome: 'Varenna e il Lago di Como', destinazioneSlug: 'milano-nord' },
    { nome: 'Bergamo Alta', destinazioneSlug: 'milano-nord' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Duomo, centro, Brera e Castello',
      tratta: 'Terrazze del Duomo, Galleria, Scala, Brera e Castello Sforzesco',
      pernottamento: 'Milano, dentro la cerchia dei Navigli',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'terrazze del Duomo in biglietto separato o cumulativo; il cortile del Castello è gratuito',
      destinazioneSlug: 'milano-nord',
    },
    {
      titoloGiorno: 'Giorno 2 — Cenacolo, Sant\'Ambrogio e la Milano contemporanea',
      tratta: 'Cenacolo, Sant\'Ambrogio, San Maurizio e la Milano contemporanea',
      intensita: 'medio',
      costiNoti: 'Cenacolo solo su prenotazione rilasciata a scaglioni mesi prima; HangarBicocca e Cimitero Monumentale a ingresso gratuito, da riverificare',
      destinazioneSlug: 'milano-nord',
    },
  ],
  budget: [
    { etichetta: 'Ingressi', valore: 'contenuti: le cose migliori di Milano (San Maurizio, Cimitero Monumentale, HangarBicocca, cortile del Castello) sono gratuite' },
    { etichetta: 'Cenacolo', valore: 'biglietto economico, praticamente introvabile: il costo vero è la pianificazione' },
    { etichetta: 'Alloggio', valore: 'la voce più variabile, con picchi assurdi nelle settimane del Salone e della moda' },
    { etichetta: 'Gite sui laghi', valore: 'treno regionale più battelli: poche decine di euro per una giornata intera' },
    { etichetta: 'Aperitivo', valore: 'istituzione locale, e spesso sostituisce la cena' },
  ],
}
