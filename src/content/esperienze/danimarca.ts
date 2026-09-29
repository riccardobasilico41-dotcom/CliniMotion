import type { Esperienza } from '@/lib/types'

// Prima uscita danese dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/danimarca.ts). Prezzi e orari cambiano spesso,
// specialmente quelli di Tivoli (aperto a stagioni alterne) e vanno
// riverificati sui canali ufficiali prima di prenotare.

export const esperienzeDanimarca: Esperienza[] = [
  {
    slug: 'nyhavn-giro-in-barca',
    paeseSlug: 'danimarca',
    destinazioneSlug: 'copenaghen',
    nome: 'Giro in barca sui canali da Nyhavn',
    localita: 'Nyhavn, Copenaghen',
    cosE:
      'Un\'escursione in battello (aperto o coperto secondo la stagione) che parte dal molo colorato di Nyhavn e attraversa i canali del centro storico e del porto: il quartiere di Christianshavn, l\'Opera House, la Biblioteca Reale ("Diamante Nero") e, secondo il percorso, un passaggio vicino alla Sirenetta vista dall\'acqua.',
    percheFarla:
      'Perché Copenaghen è una città costruita intorno all\'acqua, e vederla dal canale invece che dalla banchina cambia la prospettiva su gran parte del centro storico in poco più di un\'ora, senza bisogno di camminare.',
    durata: 'circa 1 ora per il giro classico dei canali',
    periodo: 'tutto l\'anno, con partenze più frequenti in alta stagione (maggio-settembre)',
    costo: 'indicativamente 15-20€ a persona per il giro standard di un\'ora',
    comePrenotare: 'Biglietto acquistabile direttamente al molo di Nyhavn o online in anticipo nei mesi di punta, quando le partenze si riempiono in fretta',
    cosaPortare: 'Una giacca anche d\'estate: sull\'acqua il vento si sente più che a terra, specie sulle barche scoperte',
    perChiEAdatta: 'Chiunque, nessuna difficoltà; comoda anche con bambini o mobilità ridotta secondo l\'imbarcazione',
    giudizio: 'da-verificare',
    alternative: ['Attraversare gli stessi canali in kayak a noleggio, più lento ma più attivo, per chi preferisce un\'esperienza meno passiva'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Battello turistico che naviga lungo il canale di Nyhavn tra le case colorate del XVII secolo',
  },
  {
    slug: 'copenaghen-tour-in-bicicletta',
    paeseSlug: 'danimarca',
    destinazioneSlug: 'copenaghen',
    nome: 'Tour in bicicletta di Copenaghen',
    localita: 'Copenaghen, centro e lungomare',
    cosE:
      'Un giro guidato o autonomo in bicicletta a noleggio lungo le piste ciclabili del centro e del lungomare, spesso toccando Nyhavn, il quartiere del porto, la Sirenetta e Christianshavn: il modo in cui la maggioranza dei copenaghesi si sposta ogni giorno, non un\'attività pensata per i turisti.',
    percheFarla:
      'Perché la bicicletta è la lente più autentica per capire Copenaghen: la città è stata letteralmente ridisegnata intorno a due ruote, con piste separate, semafori dedicati e una scala che non ha equivalenti in quasi nessun\'altra capitale europea.',
    durata: 'da 2-3 ore per un tour guidato classico a una giornata intera in autonomia',
    periodo: 'tutto l\'anno per chi è abituato al freddo; più comodo e diffuso da aprile a ottobre',
    costo: 'noleggio bici standard indicativamente 15-25€ al giorno; i tour guidati partono da circa 30-40€ a persona per 2-3 ore',
    comePrenotare: 'Noleggio diretto presso le stazioni bike-sharing cittadine o i negozi di noleggio nel centro; i tour guidati si prenotano online, consigliato con qualche giorno di anticipo in alta stagione',
    cosaPortare: 'Scarpe comode, un antivento leggero; caschi disponibili a noleggio ma non obbligatori per adulti in Danimarca',
    perChiEAdatta: 'A chi ha già una minima dimestichezza con la bicicletta in ambiente urbano; le piste sono sicure ma trafficate, con regole di precedenza da rispettare come su una strada vera',
    giudizio: 'da-verificare',
    alternative: ['Il bike-sharing cittadino Bycyklen, self-service e senza guida, per chi preferisce muoversi in autonomia senza prenotare un tour'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Ciclisti su una pista ciclabile separata nel centro di Copenaghen, con biciclette parcheggiate lungo la strada',
  },
  {
    slug: 'christiania-visita',
    paeseSlug: 'danimarca',
    destinazioneSlug: 'copenaghen',
    nome: 'Visita a Christiania',
    localita: 'Christianshavn, Copenaghen',
    cosE:
      'La visita, in autonomia o con un tour guidato dai residenti, della "città libera" di Christiania: un\'ex area militare occupata nel 1971 e diventata una comunità autogestita di circa 900 persone, con case autocostruite, murales, orti comuni e un\'economia informale propria. L\'ingresso è libero e gratuito; solo alcuni tour guidati sono a pagamento.',
    percheFarla:
      'Perché è un pezzo di storia sociale europea unico nel suo genere, ancora vivo dopo più di cinquant\'anni, e perché capirne le regole prima di entrare — più che "visitarla" come un\'attrazione — è il modo giusto di rispettarla.',
    durata: 'da 1 a 2-3 ore secondo quanto ci si ferma; i tour guidati durano circa 1-1,5 ore',
    periodo: 'tutto l\'anno, essendo un\'area residenziale aperta',
    costo: 'ingresso libero; i tour guidati con residenti costano indicativamente 10-15€ a persona',
    comePrenotare: 'Ingresso libero senza prenotazione; i tour guidati ufficiali (organizzati da residenti) si prenotano online sul sito di Christiania',
    cosaPortare: 'Nulla in particolare; utile sapere in anticipo le regole scritte all\'ingresso ("have fun, don\'t run, no hard drugs, no guns, no violence")',
    perChiEAdatta: 'Adatta a curiosi rispettosi delle regole locali; meno indicata a chi cerca un\'attrazione turistica nel senso classico — qui si è ospiti in un quartiere abitato',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Murales colorati su una casa autocostruita a Christiania, Copenaghen',
  },
  {
    slug: 'smorrebrod-tour-torvehallerne',
    paeseSlug: 'danimarca',
    destinazioneSlug: 'copenaghen',
    nome: 'Smørrebrød a Torvehallerne',
    localita: 'Torvehallerne, mercato coperto vicino a Nørreport, Copenaghen',
    cosE:
      'L\'assaggio dello smørrebrød, il tradizionale panino aperto danese su pane di segale scuro (rugbrød), farcito con combinazioni classiche come aringa marinata, gamberetti nordici, roast beef con remoulade o formaggio con marmellata di fichi, nei banchi specializzati di Torvehallerne, il mercato coperto della città.',
    percheFarla:
      'Perché lo smørrebrød è il piatto più rappresentativo della cucina danese di tutti i giorni, e Torvehallerne permette di assaggiarne diverse varianti in un unico posto, comparando i banchi invece di scegliere alla cieca in un ristorante turistico.',
    durata: 'un\'ora o poco più per un giro tra i banchi',
    periodo: 'tutto l\'anno, mercato al coperto',
    costo: 'indicativamente 8-15€ per pezzo secondo la farcitura, un pranzo completo con 2-3 varietà sui 20-30€ a persona',
    comePrenotare: 'Nessuna prenotazione necessaria, si ordina direttamente al banco',
    cosaPortare: 'Nulla di particolare',
    perChiEAdatta: 'Chiunque cerchi un pranzo tipico senza il formalismo (e il conto) di un ristorante di smørrebrød storico',
    giudizio: 'da-verificare',
    alternative: ['Un ristorante storico di smørrebrød nel centro, più formale e più caro, per chi vuole l\'esperienza al tavolo invece che al banco'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Vassoio di smørrebrød danese con diverse farciture su pane di segale scuro, in un banco di Torvehallerne',
  },
]
