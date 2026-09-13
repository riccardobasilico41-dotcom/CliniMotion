import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Venezia in 3 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/31-venezia-3-giorni.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const venezia3GiorniMeta: TripMeta = {
  tripSlug: 'venezia-3-giorni',
  paeseSlug: 'italia',
  ritmo: 'Le cose famose presto o tardi, mai nel mezzo, e il resto del tempo camminando nella direzione sbagliata',
  trasporti: 'Tutto a piedi; vaporetto solo per il Canal Grande e le isole della laguna',
  stile: [
    'arte',
    'laguna',
    'gastronomia',
  ],
  adattoA: [
    'chi dorme in città e non a Mestre, che è la decisione che determina l\'esito del viaggio',
    'chi è disposto ad alzarsi all\'alba e a camminare fuori dall\'asse Rialto-San Marco',
    'chi va d\'inverno o in bassa stagione',
  ],
  puntiForti: [
    'Il campanile di San Giorgio Maggiore, da cui si vede Piazza San Marco intera con il suo campanile, senza coda',
    'La Scuola Grande di San Rocco, due piani di teleri del Tintoretto e gli specchi da tenere in mano',
    'Torcello, con la Madonna bizantina su fondo d\'oro nell\'abside della basilica del VII secolo',
  ],
  criticita: [
    'Il contributo di accesso, le sue date e le sue modalità sono cambiati più volte: vanno verificati e la sanzione è salata',
    'Da giugno ad agosto è il peggior momento possibile',
    'Acqua alta in autunno e inverno: il MOSE ha ridotto molto gli allagamenti ma non li ha eliminati',
    'Il biglietto singolo del vaporetto è molto caro e vale poco più di un\'ora',
    'I bagagli si portano a mano sui ponti: nessun servizio lo fa al posto tuo',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, tutto a piedi e in vaporetto',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Piazza San Marco vista dal campanile di San Giorgio, i teleri del Tintoretto a San Rocco, il mosaico dell\'abside di Torcello',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'San Marco e Palazzo Ducale', destinazioneSlug: 'venezia' },
    { nome: 'San Giorgio Maggiore', destinazioneSlug: 'venezia' },
    { nome: 'Dorsoduro e i Frari', destinazioneSlug: 'venezia' },
    { nome: 'Cannaregio e il Ghetto', destinazioneSlug: 'venezia' },
    { nome: 'Murano, Burano e Torcello', destinazioneSlug: 'venezia' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — San Marco, ma all\'ora giusta',
      tratta: 'Basilica di San Marco, Palazzo Ducale e San Giorgio Maggiore',
      pernottamento: 'Venezia, Cannaregio o Castello',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'prenotazione della basilica per saltare la coda; Loggia dei Cavalli e Pala d\'Oro sono supplementi a parte',
      destinazioneSlug: 'venezia',
    },
    {
      titoloGiorno: 'Giorno 2 — Dorsoduro, i Frari e San Rocco',
      tratta: 'Accademia, Frari, Scuola Grande di San Rocco e Dorsoduro',
      pernottamento: 'Venezia',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'il Chorus Pass conviene già dalla terza o quarta chiesa',
      destinazioneSlug: 'venezia',
    },
    {
      titoloGiorno: 'Giorno 3 — Cannaregio, il Ghetto e le isole',
      tratta: 'Cannaregio e il Ghetto al mattino, laguna nord in vaporetto nel pomeriggio',
      intensita: 'medio',
      costiNoti: 'abbonamento vaporetti a giornata: si ripaga al terzo viaggio e serve per le isole',
      destinazioneSlug: 'venezia',
    },
  ],
  budget: [
    { etichetta: 'Contributo di accesso', valore: 'dovuto da chi entra in giornata in date stabilite; chi pernotta è esente ma deve registrarsi' },
    { etichetta: 'Vaporetti', valore: 'voce alta se si comprano biglietti singoli, bassa con un abbonamento multigiornaliero' },
    { etichetta: 'Ingressi', valore: 'San Marco costa poco, Palazzo Ducale è cumulativo con i musei della piazza, il Chorus Pass copre le chiese' },
    { etichetta: 'Gondola', valore: 'tariffa ufficiale fissata dal Comune, a gondola e non a persona, più alta la sera' },
    { etichetta: 'Cicchetti', valore: 'cenare al banco nei bacari costa una frazione di un ristorante' },
  ],
}
