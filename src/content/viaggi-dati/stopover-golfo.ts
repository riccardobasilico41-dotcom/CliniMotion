import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Il Golfo in stopover".
// Il testo narrativo resta nel markdown (src/content/viaggi/21-stopover-golfo.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown. A differenza degli altri itinerari, i giorni qui non sono
// consecutivi per forza: ogni blocco di 1-2 giorni è pensato per funzionare
// da solo come stopover a sé.

export const stopoverGolfoMeta: TripMeta = {
  tripSlug: 'stopover-golfo',
  paeseSlug: 'emirati-arabi-uniti',
  ritmo: 'Modulare: sette giorni se fatti di seguito, ma ogni blocco da 24-48 ore funziona come stopover indipendente',
  trasporti: 'Voli di linea con gli hub del Golfo, metropolitana dagli aeroporti, 4x4 con autista per il deserto',
  stile: ['stopover', 'architettura', 'deserto'],
  adattoA: [
    'chi vola verso Asia, Oceania o Africa orientale e ha scali lunghi da riempire',
    'chi vuole vedere qualcosa senza allungare il viaggio né spendere molto',
    'chi accetta di pianificare il programma stopover in fase di prenotazione del biglietto, non dopo',
  ],
  puntiForti: [
    'Il creek di Dubai in abra a un dirham, a venti minuti di metropolitana dall\'aeroporto',
    'La Grande Moschea Sheikh Zayed e il Louvre, entrambi dentro lo stopover gratuito di Etihad',
    'Lo stopover di Qatar Airways a circa 14 dollari a notte, che è il miglior rapporto costo-resa del Golfo',
  ],
  criticita: [
    'I programmi non sono equivalenti: Dubai Connect è una compensazione per uno scalo lungo inevitabile, tutti gli altri sono scelte da fare in fase di prenotazione',
    'Lo stopover di Qatar Airways si prenota su un portale separato con il codice del volo: è il passaggio che quasi nessuno conosce',
    'Da maggio a settembre si superano i 45 gradi in tutto il Golfo e lo stopover si riduce a musei e centri commerciali',
    'Uno scalo di dodici ore non sono dodici ore di città: tra controlli, transfer e rientro anticipato ne restano cinque o sei',
    'Condizioni, soglie e prezzi dei programmi cambiano spesso e senza preavviso',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, usando i programmi stopover delle compagnie del Golfo',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il creek di Dubai in abra, la luce sotto la cupola del Louvre Abu Dhabi, le dune che entrano in acqua a Khor Al Adaid',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Dubai', destinazioneSlug: 'dubai' },
    { nome: 'Abu Dhabi', destinazioneSlug: 'abu-dhabi' },
    { nome: 'Doha', destinazioneSlug: 'doha' },
    { nome: 'Khor Al Adaid', destinazioneSlug: 'qatar-deserto-nord' },
    { nome: 'Jeddah', destinazioneSlug: 'jeddah' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Dubai, le prime 24 ore', tratta: 'Aeroporto DXB → centro in metropolitana (20 min)', pernottamento: 'Dubai, assegnato da Dubai Connect o Deira/Bur Dubai', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'abra 1 dirham; Burj Khalifa da circa 170 dirham', destinazioneSlug: 'dubai' },
    { titoloGiorno: 'Giorno 2 — Dubai, il secondo giorno', pernottamento: 'Dubai', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'safari serale nel deserto 200-400 dirham', destinazioneSlug: 'dubai' },
    { titoloGiorno: 'Giorno 3 — Abu Dhabi, lo stopover Etihad', tratta: 'Dubai → Abu Dhabi (circa 2h in autobus)', pernottamento: 'Abu Dhabi, hotel incluso nello stopover Etihad', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Grande Moschea gratuita, con prenotazione a fascia oraria', destinazioneSlug: 'abu-dhabi' },
    { titoloGiorno: 'Giorno 4 — Abu Dhabi, il Louvre e il deserto', pernottamento: 'Abu Dhabi', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Louvre Abu Dhabi circa 65 dirham', destinazioneSlug: 'abu-dhabi' },
    { titoloGiorno: 'Giorno 5 — Doha, lo stopover da quattordici dollari', tratta: 'Volo per Doha; aeroporto → centro in metropolitana (20 min)', pernottamento: 'Doha, hotel del programma Qatar Airways', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'hotel 4 stelle da circa 14$ a persona a notte; souq e ospedale dei falchi gratuiti', destinazioneSlug: 'doha' },
    { titoloGiorno: 'Giorno 6 — Doha, l\'inland sea', tratta: 'Doha → Khor Al Adaid in 4x4 (1h30, ultimo tratto su sabbia)', pernottamento: 'Doha o campo tendato nel deserto', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'escursione 250-500 riyal secondo la formula', destinazioneSlug: 'qatar-deserto-nord' },
    { titoloGiorno: 'Giorno 7 — Jeddah, lo stopover saudita', tratta: 'Volo per Jeddah con Saudia o flynas, visto stopover gratuito', pernottamento: 'Jeddah, vicino ad Al-Balad o sulla Corniche', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'visto stopover gratuito, salvo spese amministrative e assicurazione', destinazioneSlug: 'jeddah' },
  ],
  budget: [
    { etichetta: 'Hotel con Emirates Dubai Connect', valore: 'gratuito, ma assegnato: camera, pasti, transfer e visto di transito inclusi' },
    { etichetta: 'Hotel con Etihad Abu Dhabi Stopover', valore: 'gratuito per 1 o 2 notti, su prenotazione andata e ritorno con sosta dichiarata' },
    { etichetta: 'Hotel con Qatar Airways Stopover', valore: '4 stelle da circa 14$ a persona a notte, 5 stelle da 20-30$' },
    { etichetta: 'Visto stopover Arabia Saudita', valore: 'gratuito con Saudia o flynas, salvo spese amministrative e assicurazione' },
    { etichetta: 'Visti Emirati e Qatar', valore: 'gratuiti all\'arrivo per i cittadini italiani' },
    { etichetta: 'Escursioni nel deserto', valore: 'safari serale 200-400 dirham; Khor Al Adaid 250-500 riyal' },
  ],
}
