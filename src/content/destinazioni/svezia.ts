import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Lapponia svedese: Capodanno sotto l'aurora"
// (src/content/viaggi/14-lapponia-svedese-abisko.md), a sua volta ricostruito
// incrociando i documenti dell'agenzia "Mama Family Travel Partner" (preventivo,
// piano hotel, piano voli, presentazione comparativa Capodanno). Dove un dato
// non è nei documenti originali, il campo resta con una nota esplicita
// "da confermare/da completare" — nessun fatto inventato.
//
// Le immagini sono foto stock temporanee (Pixabay/Pexels, licenze free-use),
// scelte per rappresentare davvero il luogo in attesa di foto originali.

export const destinazioniSvezia: Destinazione[] = [
  {
    slug: 'stoccolma',
    paeseSlug: 'svezia',
    ordine: 1,
    nome: 'Stoccolma',
    tipologia: ['cultura'],
    giorniConsigliati: 'una notte, sia all\'andata che al ritorno — solo transito',
    visitataPersonalmente: true,
    introduzione: 'Il punto di transito obbligato tra il volo internazionale e quello interno verso Kiruna, sia all\'andata che al ritorno.',
    percheAndarci: 'Serve comunque attraversarla per i collegamenti aerei: una notte per direzione, senza vero tempo per visitarla.',
    cosaVedere: ['Il centro città, in una versione molto ridotta viste le poche ore disponibili'],
    cosaFare: ['Poco altro oltre a check-in/check-out data la sola notte di transito'],
    doveDormire: 'Ho dormito al Radisson Blu Royal Viking sia all\'andata sia al ritorno: catena internazionale affidabile, comoda per chi arriva o parte con voli serali.',
    doveMangiare: 'Nessuna nota specifica, viste le poche ore disponibili in entrambe le occasioni.',
    comeArrivare: 'Volo internazionale su Stoccolma Arlanda.',
    comeSpostarsi: 'Non necessario, solo transito aeroporto-hotel.',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [],
    miaEsperienza:
      'Stoccolma è stata puramente una tappa logistica in entrambe le direzioni: giusto il tempo di dormire tra un volo e l\'altro, niente di più.',
    esperienzeSlugs: [],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Case colorate del centro storico di Stoccolma affacciate sull\'acqua in inverno',
    immagine: '/images/svezia/stoccolma-stock.jpg',
  },
  {
    slug: 'kiruna',
    paeseSlug: 'svezia',
    ordine: 2,
    nome: 'Kiruna',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 notti totali (andata e ritorno), base logistica per Abisko',
    visitataPersonalmente: true,
    introduzione: 'La città più a nord della Svezia, base logistica per raggiungere Abisko e famosa per la miniera di ferro LKAB che sta letteralmente costringendo la città a spostarsi, pezzo per pezzo, qualche chilometro più in là.',
    percheAndarci: 'Punto di passaggio obbligato per Abisko, ma con una sua identità precisa: la chiesa di legno rossa, il centro in piena trasformazione urbanistica, e — nelle vicinanze — il celebre ICEHOTEL.',
    cosaVedere: [
      'La chiesa di legno rossa di Kiruna, uno degli edifici simbolo della città',
      'Il centro città, che nei prossimi anni verrà smontato e ricostruito altrove per l\'espansione della miniera',
    ],
    cosaFare: [
      'Giro del centro a piedi',
      'Relax in spa all\'Elite Hotel Frost dopo le giornate più intense ad Abisko',
    ],
    doveDormire:
      'All\'andata ho dormito allo STF Malmfältens Folkhögskola, una sistemazione semplice ed essenziale gestita dalla Svenska Turistföreningen (l\'associazione escursionistica svedese, molto presente in tutta la regione). Al ritorno invece all\'Elite Hotel Frost - Hotel & Spa: un netto salto di qualità, con spa interna perfetta per recuperare dopo le giornate più fredde ad Abisko.',
    doveMangiare: 'Nessuna nota specifica sui ristoranti — budget indicativo dal preventivo: colazioni 10-15€/giorno, pranzi e cene 30-50€ a pasto.',
    comeArrivare: 'Volo interno da Stoccolma Arlanda; poi treno panoramico per Abisko.',
    comeSpostarsi: 'A piedi in centro; treno per Abisko.',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [],
    miaEsperienza:
      'Kiruna l\'ho vissuta come base pratica più che come meta in sé: utile per il cambio di passo tra il rigore dello STF di andata e la spa dell\'Elite Hotel Frost al ritorno, con la chiesa rossa e il centro in trasformazione a fare da sfondo.',
    esperienzeSlugs: ['icehotel-jukkasjarvi'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Chiesa di legno rossa di Kiruna sotto un cielo invernale svedese',
    immagine: '/images/svezia/kiruna-stock.jpg',
  },
  {
    slug: 'abisko',
    paeseSlug: 'svezia',
    ordine: 3,
    nome: 'Abisko',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2-3 notti, cuore del viaggio',
    visitataPersonalmente: true,
    introduzione: 'Il vero motivo del viaggio: un parco nazionale con un microclima secco che lo rende uno dei posti migliori al mondo per vedere l\'aurora boreale, e la base per motoslitta, husky sledding e la celebre Aurora Sky Station.',
    percheAndarci: 'Per l\'aurora boreale, prima di tutto — ma anche per la natura artica del parco nazionale e per due delle attività più adrenaliniche di tutto il viaggio.',
    cosaVedere: [
      'La vista dalla Aurora Sky Station, in cima al monte Nuolja',
      'Il lago ghiacciato del parco nazionale',
    ],
    cosaFare: [
      'Aurora Sky Station: seggiovia e cena panoramica — vedi la scheda esperienza dedicata',
      'Motoslitta sul lago ghiacciato — vedi la scheda esperienza dedicata',
      'Husky sledding con caccia all\'aurora — vedi la scheda esperienza dedicata',
    ],
    doveDormire:
      'Ho dormito allo STF Abisko Turiststation, la storica stazione di montagna dentro il parco nazionale e punto di partenza diretto per la seggiovia della Aurora Sky Station. Essenziale ma con un\'atmosfera che altrove non si trova, immersa nel parco.',
    doveMangiare: 'Nessuna nota specifica — colazioni spesso incluse nelle strutture STF, pranzi e cene nella media indicata dal preventivo (30-50€ a pasto).',
    comeArrivare: 'Treno panoramico da Kiruna, poco più di un\'ora attraverso un paesaggio via via più spoglio.',
    comeSpostarsi: 'A piedi nel villaggio; escursioni organizzate per motoslitta e husky.',
    periodoMigliore: 'da fine dicembre a marzo; febbraio-marzo costa molto meno pur mantenendo alte probabilità di aurora',
    costi: 'Guida completa ai costi (per persona, intero viaggio): voli 600-645€, alloggi 400-600€, trasporti interni 80€ (treno panoramico + transfer aeroportuale), escursioni 450-500€ per 3 tour con guida — budget totale indicativo 1.500€ (base) - 1.800€ (livello ottimo).',
    erroriDaEvitare: [
      'Andare a Capodanno se l\'obiettivo è risparmiare: è il periodo più caro dell\'anno per volare e dormire in zona',
      'Non mettere in conto un margine extra sui trasporti: con il freddo estremo i treni a volte (non spesso, ma succede) vengono cancellati, e i taxi della zona in quel caso tendono ad alzare un po\' i prezzi',
    ],
    miaEsperienza:
      'Abisko è stato il cuore del viaggio: la cena alla Aurora Sky Station in quota, la motoslitta sul lago ghiacciato e l\'husky sledding sotto un cielo che a un certo punto si è davvero acceso — tre modi diversi di vivere lo stesso freddo estremo, e i ricordi più forti di tutta la settimana.',
    esperienzeSlugs: ['aurora-sky-station', 'motoslitta-lago-ghiacciato', 'husky-sledding-caccia-aurora'],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Aurora boreale verde sopra le montagne innevate del parco nazionale di Abisko',
    immagine: '/images/svezia/abisko-stock.jpg',
  },
]
