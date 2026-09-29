import type { Esperienza } from '@/lib/types'

// Prima uscita ungherese dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/ungheria.ts). Prezzi, orari e regole di
// prenotazione cambiano spesso e vanno riverificati sui canali ufficiali
// prima di prenotare.

export const esperienzeUngheria: Esperienza[] = [
  {
    slug: 'terme-szechenyi',
    paeseSlug: 'ungheria',
    destinazioneSlug: 'budapest',
    nome: 'Terme di Széchenyi',
    localita: 'Városliget (Parco cittadino), Budapest',
    cosE:
      'Il più grande complesso termale d\'Europa, aperto nel 1913 in un edificio neobarocco color giallo ocra nel Parco cittadino. Tre grandi vasche esterne (comprese quelle dove si vedono le classiche foto di anziani ungheresi che giocano a scacchi immersi nell\'acqua calda) e una quindicina tra vasche interne, saune e bagni turchi, alimentate da due sorgenti termali proprie a temperature tra 27°C e 38°C circa secondo la vasca.',
    percheFarla:
      'Perché è l\'esperienza più riconoscibile di Budapest e la più semplice da vivere come turista: grande, ben organizzata, aperta tutto l\'anno, con le vasche esterne che restano calde anche sotto la neve d\'inverno — probabilmente il momento più suggestivo per andarci.',
    durata: 'realisticamente 2,5-3 ore, tra spogliatoio, code per gli armadietti e tempo nelle vasche; si può restare anche l\'intera giornata',
    periodo: 'tutto l\'anno; d\'inverno l\'esperienza delle vasche esterne fumanti nella neve è particolarmente suggestiva, d\'estate le vasche esterne sono più affollate',
    costo:
      'biglietto giornaliero indicativamente tra 20 e 30€ secondo il giorno (feriale/weekend) e la formula (solo ingresso, con cabina o con armadietto); telo e ciabatte da bagno non sono inclusi e si possono noleggiare in loco a pagamento, oppure portare da casa per risparmiare.',
    comePrenotare: 'Biglietto acquistabile online in anticipo sul sito ufficiale (consigliato nei weekend e in alta stagione per saltare la coda alla cassa) o direttamente in loco.',
    cosaPortare: 'Costume da bagno, ciabatte antiscivolo e telo da mare, per evitare il costo del noleggio; una cuffia se si vuole nuotare nella vasca sportiva.',
    perChiEAdatta: 'Adatta a quasi tutti; nei weekend serali (i cosiddetti "Sparty", feste notturne con musica e luci) l\'atmosfera cambia radicalmente e diventa più simile a un party che a una terma tradizionale — da verificare il calendario se si cerca l\'esperienza più tranquilla.',
    giudizio: 'da-verificare',
    alternative: ['Le Terme di Gellért, più piccole e in stile Art Nouveau, per un\'atmosfera diversa — vedi la scheda dedicata'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'Le vasche esterne color giallo ocra delle Terme di Széchenyi a Budapest, con il vapore che sale dall\'acqua calda',
  },
  {
    slug: 'terme-gellert',
    paeseSlug: 'ungheria',
    destinazioneSlug: 'budapest',
    nome: 'Terme di Gellért',
    localita: 'Ai piedi del colle Gellért, lato Buda, Budapest',
    cosE:
      'Il complesso termale in stile Art Nouveau annesso allo storico Hotel Gellért, aperto nel 1918, con vasche interne decorate da mosaici, colonne e vetrate colorate, più una vasca esterna con onde artificiali (tra le prime al mondo, introdotta già nel 1927) e una zona solarium.',
    percheFarla:
      'Perché è l\'alternativa più elegante e "fotogenica" a Széchenyi: l\'edificio stesso, con le sue decorazioni Art Nouveau, vale la visita quanto l\'acqua termale, ed è generalmente meno affollata del complesso nel Parco cittadino.',
    durata: '2-3 ore, tra spogliatoio e tempo nelle vasche',
    periodo: 'tutto l\'anno; la vasca esterna con onde è particolarmente piacevole nei mesi estivi',
    costo: 'biglietto giornaliero indicativamente tra 20 e 28€ secondo il giorno e la formula (con o senza cabina privata)',
    comePrenotare: 'Biglietto acquistabile online in anticipo sul sito ufficiale o direttamente in loco.',
    cosaPortare: 'Costume da bagno, ciabatte antiscivolo e telo da mare, per evitare il costo del noleggio.',
    perChiEAdatta: 'Adatta a chi cerca un\'atmosfera più raccolta ed elegante rispetto a Széchenyi; meno indicata a chi cerca l\'esperienza più "sociale" delle grandi vasche esterne affollate.',
    giudizio: 'da-verificare',
    alternative: ['Le Terme di Széchenyi, più grandi e con vasche esterne aperte tutto l\'anno — vedi la scheda dedicata'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'L\'interno Art Nouveau delle Terme di Gellért, con colonne, mosaici e vetrate colorate sopra la vasca termale',
  },
  {
    slug: 'crociera-danubio',
    paeseSlug: 'ungheria',
    destinazioneSlug: 'budapest',
    nome: 'Crociera serale sul Danubio',
    localita: 'Danubio, tra i moli del lungofiume di Pest',
    cosE:
      'Un giro in battello di circa un\'ora sul Danubio, tipicamente all\'imbrunire o dopo il tramonto, per vedere dall\'acqua il Parlamento, il Castello di Buda, il Bastione dei Pescatori e il Ponte delle Catene illuminati. Offerta da decine di operatori diversi, con formule che vanno dal semplice giro panoramico a quelle con cena o drink inclusi.',
    percheFarla:
      'Perché il Parlamento e il Castello di Buda, entrambi costruiti per essere visti dal fiume, mostrano la prospettiva più bella proprio dall\'acqua, ed è il modo più semplice per vedere insieme, in un\'unica serata, i principali monumenti illuminati delle due sponde.',
    durata: 'circa 1 ora per il giro base; le formule con cena arrivano a 2-2,5 ore',
    periodo: 'tutto l\'anno, con la parte migliore dopo il tramonto quando i monumenti sono illuminati; in inverno l\'imbrunire è già nel tardo pomeriggio',
    costo: 'indicativamente 15-25€ a persona per il giro panoramico base, di più per le formule con cena o drink inclusi',
    comePrenotare: 'Prenotabile online con largo anticipo o, per gli operatori più piccoli, direttamente al molo poco prima della partenza; consigliata la prenotazione anticipata nei weekend estivi.',
    cosaPortare: 'Una giacca anche in estate: sul fiume, di sera, fa più fresco che in città.',
    perChiEAdatta:
      'Adatta a chiunque cerchi una vista d\'insieme dei monumenti principali senza camminare; attenzione a scegliere operatori con licenza e prezzi trasparenti — sul lungofiume non mancano piccoli operatori non ufficiali che applicano tariffe gonfiate a chi prenota all\'ultimo momento sul molo.',
    giudizio: 'da-verificare',
    alternative: ['La stessa vista, gratuita, camminando o attraversando a piedi il Ponte delle Catene al tramonto'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'Il Parlamento ungherese illuminato visto da un battello sul Danubio al tramonto',
  },
  {
    slug: 'ruin-bar-tour',
    paeseSlug: 'ungheria',
    destinazioneSlug: 'budapest',
    nome: 'Giro dei ruin bar nel quartiere ebraico',
    localita: 'Erzsébetváros (distretto VII), Budapest',
    cosE:
      'Un giro, in autonomia o con tour organizzato, tra i romkocsma, i "bar delle rovine" nati a partire dai primi anni Duemila in edifici fatiscenti, cortili interni e vecchi appartamenti del quartiere ebraico, arredati con mobili spaiati e oggetti di recupero. Lo Szimpla Kert, aperto nel 2002 nel cortile di un ex fabbrica, è il capostipite e il più noto, ma il quartiere ne conta decine, con atmosfere diverse tra i più turistici sulle vie principali e quelli più frequentati dai locali nelle traverse.',
    percheFarla:
      'Perché è un fenomeno nato qui e difficile da trovare altrove con la stessa densità e originalità: bar improvvisati dentro edifici altrimenti destinati alla demolizione, diventati nel giro di vent\'anni uno dei motivi per cui Budapest è una delle capitali europee più note per la vita notturna.',
    durata: 'una serata, indicativamente 3-4 ore per un giro di più locali',
    periodo: 'tutto l\'anno, essendo un\'esperienza prevalentemente al chiuso o nei cortili coperti; d\'estate molti hanno anche spazi all\'aperto',
    costo: 'ingresso generalmente gratuito o con consumazione minima; una birra artigianale costa indicativamente 3-5€, meno che nei locali turistici del centro',
    comePrenotare: 'Nessuna prenotazione necessaria per il giro in autonomia; esistono anche pub crawl organizzati con guida e ingressi prioritari in alcuni locali, prenotabili online.',
    cosaPortare: 'Documento d\'identità (alcuni locali lo richiedono all\'ingresso in tarda serata) e contante per i locali più piccoli che non accettano carte.',
    perChiEAdatta:
      'Adatta a chi cerca una serata informale e diversa dal solito giro di pub; attenzione a non farsi avvicinare per strada da promoter che invitano in locali "speciali" fuori dal circuito noto: è lo schema classico dei conti gonfiati a dismisura descritto nella scheda della destinazione — meglio scegliere i locali da soli, seguendo guide affidabili o recensioni.',
    giudizio: 'da-verificare',
    alternative: ['Un giro guidato con operatore certificato, per chi preferisce non doversi orientare da solo tra decine di locali senza insegna'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'Il cortile pieno di luci e mobili di recupero di un ruin bar nel quartiere ebraico di Budapest',
  },
]
