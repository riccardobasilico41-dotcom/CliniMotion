import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Roma in 4 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/28-roma-4-giorni.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const roma4GiorniMeta: TripMeta = {
  tripSlug: 'roma-4-giorni',
  paeseSlug: 'italia',
  ritmo: 'Quattro giornate tematiche per quadranti, una cosa grande al mattino e il resto a piedi: l\'errore da evitare è provare a vedere tutto',
  trasporti: 'Tutto a piedi e in metro; l\'auto è inutile e dannosa per via della ZTL',
  stile: [
    'archeologia',
    'arte',
    'gastronomia',
  ],
  adattoA: [
    'chi va a Roma per la prima volta e vuole le cose grandi senza correre',
    'chi accetta di rinunciare a qualcosa invece di spuntare una lista',
    'chi cammina volentieri per otto ore al giorno',
  ],
  puntiForti: [
    'Il Colosseo nella prima fascia oraria, con arena o sotterranei se si riesce a prenotarli',
    'San Clemente, dove si scendono tre livelli e mille anni e in fondo si sente scorrere un condotto romano ancora attivo',
    'La Galleria Borghese, con i marmi di Bernini in una villa di dimensioni umane e senza folla grazie agli slot',
  ],
  criticita: [
    'Galleria Borghese e le aree speciali del Colosseo si esauriscono settimane prima e non si recuperano il giorno stesso',
    'I musei statali hanno giorni di chiusura settimanale diversi tra loro: incastrarli male è l\'errore di programmazione più comune',
    'Vaticano e Roma antica non entrano nella stessa giornata',
    'Le formule dei biglietti del Colosseo e lo stato di accesso della Fontana di Trevi cambiano di frequente',
    'Borseggio reale su metro A, bus 64 e nelle aree monumentali',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, tutto a piedi e in metro',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il mitreo sotto San Clemente, la Galleria delle Carte Geografiche ai Musei Vaticani, l\'Apollo e Dafne di Bernini alla Galleria Borghese',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Colosseo, Foro e Palatino', destinazioneSlug: 'roma' },
    { nome: 'Vaticano', destinazioneSlug: 'roma' },
    { nome: 'Centro barocco', destinazioneSlug: 'roma' },
    { nome: 'Galleria Borghese', destinazioneSlug: 'roma' },
    { nome: 'Appia Antica e Testaccio', destinazioneSlug: 'roma' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — La Roma antica: Colosseo, Foro, Palatino',
      tratta: 'Colosseo, Foro Romano, Palatino e San Clemente',
      pernottamento: 'Roma, zona Monti o centro storico',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'biglietto Colosseo nominativo con fascia oraria; arena e sotterranei sono biglietti a parte e limitatissimi',
      destinazioneSlug: 'roma',
    },
    {
      titoloGiorno: 'Giorno 2 — Vaticano: Musei, Sistina, San Pietro',
      tratta: 'Musei Vaticani, Cappella Sistina e San Pietro',
      pernottamento: 'Roma',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'prenotazione Musei Vaticani di fatto obbligatoria; basilica gratuita, cupola a pagamento',
      destinazioneSlug: 'roma',
    },
    {
      titoloGiorno: 'Giorno 3 — Il centro barocco e la Galleria Borghese',
      tratta: 'Centro barocco a piedi e Galleria Borghese',
      pernottamento: 'Roma',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Galleria Borghese solo su prenotazione con slot a numero chiuso; Pantheon a pagamento dal 2023',
      destinazioneSlug: 'roma',
    },
    {
      titoloGiorno: 'Giorno 4 — La Roma che non finisce sulle cartoline',
      tratta: 'Appia Antica, oppure Ostia Antica, oppure Testaccio e Aventino',
      intensita: 'medio',
      costiNoti: 'la domenica l\'Appia è chiusa al traffico; Domus Aurea su prenotazione in giorni limitati',
      destinazioneSlug: 'roma',
    },
  ],
  budget: [
    { etichetta: 'Ingressi principali', valore: 'Colosseo, Musei Vaticani e Galleria Borghese sono le tre voci vere; il resto del centro si cammina gratis' },
    { etichetta: 'Roma Pass', valore: 'conviene solo facendo abbastanza musei statali, e non include i Musei Vaticani, che sono in un altro Stato' },
    { etichetta: 'Alloggio', valore: 'la voce più alta: su un soggiorno corto la posizione conta più della categoria' },
    { etichetta: 'Trasporti', valore: 'bassi: metro più piedi, nessuna auto' },
    { etichetta: 'Caravaggio nelle chiese', valore: 'gratis, servono solo monete per l\'illuminazione a gettone' },
  ],
}
