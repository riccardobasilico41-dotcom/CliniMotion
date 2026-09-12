import type { Destinazione } from '@/lib/types'

// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto (stagione, orari,
// regole, affollamento) e non su ricordi reali: vanno riletti e sostituiti.
// Nessun nome di hotel, ristorante o operatore è stato inventato.
// Il confronto tra i programmi stopover delle compagnie del Golfo sta nella
// scheda Dubai: condizioni e prezzi cambiano spesso e vanno riverificati sui
// siti ufficiali delle compagnie prima di prenotare.

export const destinazioniEmiratiArabiUniti: Destinazione[] = [
  {
    slug: 'dubai',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 1,
    nome: 'Dubai',
    tipologia: ['città', 'architettura', 'stopover'],
    giorniConsigliati: '24 ore per lo stopover essenziale, 48 per farla bene',
    visitataPersonalmente: true,
    introduzione:
      'La città che nel 1960 era un porto di pescatori di perle sul creek e oggi ha l\'edificio più alto del mondo. È anche lo scalo aereo più trafficato del pianeta per passeggeri internazionali, il che significa che moltissimi ci passano sopra senza scendere — mentre scendere, grazie ai programmi delle compagnie, spesso costa poco o nulla.',
    percheAndarci:
      'Perché è lo stopover più facile del mondo: visto all\'arrivo gratuito, metropolitana dall\'aeroporto, e due giorni bastano per vedere sia la Dubai delle fotografie sia quella che quasi nessuno cerca — il creek con le barche di legno, i souq, e i quartieri di Deira dove vive la maggioranza dei residenti.',
    cosaVedere: [
      'Il Burj Khalifa, 828 metri, con le piattaforme panoramiche ai piani 124-125 e 148',
      'Il Dubai Creek, con le abra — le barche di legno che traghettano per un dirham — e i souq dell\'oro e delle spezie a Deira',
      'Il quartiere storico di Al Fahidi, con le torri del vento e le case di corallo e gesso',
      'La Dubai Fountain e il Dubai Mall, che è anche una città a sé',
      'La Moschea di Jumeirah, l\'unica visitabile dai non musulmani, con visite guidate',
      'Il Museo del Futuro, con la calligrafia araba incisa sulla facciata a toro',
      'Alserkal Avenue, il quartiere delle gallerie d\'arte ricavato dai magazzini industriali',
    ],
    cosaFare: [
      'Attraversare il creek in abra e perdersi nei souq di Deira — vedi la scheda esperienza dedicata',
      'Salire al Burj Khalifa al tramonto, con il biglietto comprato online',
      'Safari nel deserto con cena e notte sotto le stelle — vedi la scheda esperienza dedicata',
      'Mangiare nei quartieri indiani e pakistani di Bur Dubai e Karama, che è dove si mangia meglio e si spende meno',
    ],
    doveDormire:
      'Deira e Bur Dubai per i prezzi bassi, la metropolitana e la città vera; Downtown per essere sotto il Burj Khalifa; Jumeirah e Marina per la spiaggia. Con uno stopover Emirates o Etihad l\'hotel è assegnato dal programma e la scelta non si pone.',
    doveMangiare:
      'Dubai è uno dei posti dove si mangia meglio la cucina del subcontinente indiano fuori dall\'India, e costa pochissimo: nei quartieri di Karama, Bur Dubai e Deira si cena con meno di dieci euro in ristoranti pieni di residenti. Da provare il biryani, i curry pakistani, il pane afgano cotto nel tandoor, e per la cucina locale il machboos e lo shawarma dei banchi di strada. La cucina emiratina vera è in realtà rara: il paese è per la grande maggioranza abitato da stranieri, e questo si vede prima di tutto nei menu.',
    comeArrivare:
      'Volo su Dubai International (DXB), collegato al centro dalla metropolitana in venti minuti, o su Al Maktoum (DWC), molto più lontano. Da Abu Dhabi, autobus frequenti in circa 2 ore.',
    comeSpostarsi:
      'Metropolitana con la Nol Card per l\'asse principale, taxi e Careem per il resto, e le abra sul creek per un dirham a tratta. Camminare è possibile solo in inverno e solo in certe zone: la città è progettata per l\'auto.',
    periodoMigliore:
      'da novembre a marzo. Da giugno a settembre si superano i 45 gradi con umidità alta e tutto si svolge al chiuso: uno stopover estivo si riduce a centri commerciali e hotel.',
    costi:
      'Burj Khalifa dai 170 dirham circa per i piani 124-125, molto di più per il 148 e per le fasce al tramonto; abra 1 dirham; metropolitana pochi dirham; safari nel deserto 200-400 dirham secondo la formula. Con Dubai Connect o lo stopover Etihad, l\'hotel esce dal conto.',
    erroriDaEvitare: [
      'Comprare il biglietto del Burj Khalifa sul posto: costa di più e le fasce al tramonto si esauriscono con giorni di anticipo',
      'Fermarsi ai centri commerciali e alla Marina: è la Dubai che tutti si aspettano e anche la meno interessante. Il creek, i souq e Al Fahidi sono a venti minuti di metropolitana',
      'Programmare uno stopover tra giugno e settembre, quando stare all\'aperto è impraticabile',
      'Dimenticare che l\'alcol si consuma solo nei locali autorizzati e che l\'ubriachezza in pubblico è un reato',
      'Contare su WhatsApp per le chiamate: le VoIP sono limitate sulle reti locali, mentre i messaggi passano',
    ],
    confronti: [
      {
        titolo: 'I programmi stopover delle compagnie del Golfo: come funzionano davvero',
        introduzione:
          'Tutte le grandi compagnie del Golfo hanno un programma che incentiva a fermarsi nel loro hub invece di cambiare aereo in due ore, ma funzionano in modo molto diverso tra loro — e la differenza principale è una sola: alcuni sono compensazioni per uno scalo lungo che subisci, altri sono prodotti commerciali che scegli. Confonderli è il modo più rapido per aspettarsi un hotel gratis e non averlo.',
        opzioni: [
          {
            nome: 'Emirates — Dubai Connect',
            sintesi: 'Hotel, pasti, trasferimenti e visto di transito gratuiti quando lo scalo a Dubai è lungo e inevitabile. È una compensazione, non un pacchetto turistico.',
            costo: 'gratuito, ma non si sceglie: viene assegnato',
            durata: 'scali indicativamente tra le 8 e le 26 ore, con soglie diverse per classe di viaggio',
            pro: [
              'Completamente gratuito: camera, pasti, transfer e visto di transito inclusi',
              'Non richiede di allungare il viaggio: si applica a uno scalo che si ha comunque',
              'Copre anche il visto, quindi non serve nessuna pratica preventiva',
            ],
            contro: [
              'Vale solo se lo scalo a Dubai è **il più breve disponibile** su quella rotta: se si è scelto volontariamente un volo successivo, decade',
              'Serve un biglietto unico emesso su documento Emirates, con i voli in arrivo e in partenza Emirates (o Qantas in codeshare)',
              'L\'hotel viene assegnato e può essere lontano dal centro: come base turistica vale poco',
              'Le ore effettive libere si riducono parecchio tra transfer e procedure',
            ],
            perChi: 'Chi ha già uno scalo lungo e forzato a Dubai e vuole dormire in un letto invece che in aeroporto. Non è il programma con cui organizzare una visita.',
          },
          {
            nome: 'Emirates — Dubai Stopover (pacchetto)',
            sintesi: 'Il prodotto commerciale separato: hotel scontati e visto agevolato per chi decide di fermarsi volontariamente uno o più giorni.',
            costo: 'a pagamento, con tariffe scontate rispetto alla prenotazione libera',
            durata: 'una o più notti, a scelta',
            pro: ['Si sceglie l\'hotel e la durata', 'Prezzi più bassi rispetto a prenotare a parte', 'Si può combinare con il biglietto in un\'unica prenotazione'],
            contro: ['Non è gratuito, e viene spesso confuso con Dubai Connect', 'Conviene confrontarlo con il prezzo di una prenotazione indipendente, perché non sempre è il più basso'],
            perChi: 'Chi vuole fermarsi a Dubai per scelta e cerca la comodità di un\'unica prenotazione.',
          },
          {
            nome: 'Etihad — Abu Dhabi Stopover',
            sintesi: 'Una o due notti di hotel gratuite ad Abu Dhabi per chi inserisce volontariamente una sosta nel proprio biglietto andata e ritorno.',
            costo: 'hotel gratuito per una o due notti; restano a carico voli, transfer e pasti',
            durata: 'sosta di almeno 24 ore, 1 o 2 notti',
            pro: [
              'È gratuito e, a differenza di Dubai Connect, **si sceglie**: si aggiunge in fase di prenotazione sul sito Etihad',
              'Abu Dhabi in due giorni si vede bene: Grande Moschea, Louvre e il deserto di Liwa a portata',
              'Si può abbinare a Dubai, che è a due ore di autobus',
            ],
            contro: [
              'Richiede una prenotazione andata e ritorno con la sosta dichiarata: non si applica a uno scalo qualsiasi',
              'L\'hotel va prenotato con qualche giorno di anticipo rispetto al volo, non all\'ultimo',
              'Serve avere il visto per gli Emirati o averne diritto all\'arrivo — per gli italiani non è un problema, perché è gratuito in aeroporto',
            ],
            perChi: 'Chi vola con Etihad e vuole aggiungere due giorni reali di visita senza pagare l\'hotel. È il programma con il miglior rapporto tra gratuità e libertà.',
          },
          {
            nome: 'Qatar Airways — Stopover a Doha',
            sintesi: 'Hotel a quattro e cinque stelle a prezzi simbolici per chi si ferma a Doha tra un volo e l\'altro, prenotati attraverso il portale Discover Qatar.',
            costo: 'quattro stelle a partire da circa 14 dollari a persona a notte, cinque stelle da 20-30: una frazione delle tariffe normali di Doha',
            durata: 'da 1 a 4 notti, con scalo compreso tra 12 e 96 ore',
            pro: [
              'Il rapporto qualità-prezzo più alto in assoluto tra tutti i programmi del Golfo',
              'Si applica a biglietti Qatar Airways, codeshare e oneworld, quindi la platea è larga',
              'Si sceglie l\'hotel e il numero di notti, e Doha si visita benissimo in due giorni',
              'Il visto all\'arrivo per gli italiani è gratuito: nessuna pratica preventiva',
            ],
            contro: [
              'Non è gratuito, anche se ci va vicino',
              'Si prenota su un portale separato usando il codice di prenotazione del volo: è un passaggio in più che molti non conoscono',
              'La disponibilità delle strutture migliori si esaurisce nei periodi di punta',
            ],
            perChi: 'Chiunque voli con Qatar Airways e non abbia fretta. A queste cifre, non fermarsi è quasi una scelta contro i propri interessi.',
          },
          {
            nome: 'Saudia e flynas — visto stopover per l\'Arabia Saudita',
            sintesi: 'Non un hotel, ma un visto: chi vola con Saudia o flynas ottiene un visto stopover gratuito che consente fino a 4 giorni nel Regno, utilizzabile per turismo.',
            costo: 'il visto è gratuito, salvo spese amministrative e assicurazione sanitaria obbligatoria',
            durata: 'validità del visto tre mesi, soggiorno fino a 4 giorni',
            pro: [
              'Fa risparmiare il visto turistico ordinario, che costa attorno ai 130 euro',
              'Si richiede online dopo l\'acquisto del biglietto e arriva per email in tempi brevi',
              'Quattro giorni bastano per Jeddah più AlUla, che è il nucleo del paese',
              'Consente anche l\'Umrah, per chi è musulmano',
            ],
            contro: [
              'Non include l\'hotel: è un\'agevolazione sull\'ingresso, non un pacchetto',
              'Vincola alla compagnia: vale solo volando Saudia o flynas',
              'Quattro giorni sono pochi per un paese di queste dimensioni, dove le distanze interne richiedono voli',
            ],
            perChi: 'Chi vuole vedere l\'Arabia Saudita senza impegnarsi in un viaggio lungo, o chi vuole testarla prima di tornarci con il visto annuale.',
          },
        ],
        raccomandazione:
          'La regola per orientarsi è una: **Dubai Connect è una compensazione, tutti gli altri sono scelte**. Se lo scalo lungo a Dubai ce l\'hai comunque, Dubai Connect è denaro trovato e non va lasciato lì. Se invece stai decidendo dove fermarti, il migliore in assoluto è Qatar Airways — a quattordici dollari a notte in un quattro stelle non c\'è discussione — seguito da Etihad, che è gratuito ma richiede una prenotazione andata e ritorno. Il visto stopover saudita gioca un altro campionato: non regala un letto, regala l\'ingresso in un paese che altrimenti costa centotrenta euro di visto, ed è il modo più economico per vedere Hegra. Tutte le condizioni vanno comunque riverificate sui siti ufficiali prima di prenotare, perché questi programmi cambiano spesso e senza preavviso.',
      },
    ],
    miaEsperienza:
      'Dubai è la città più facile del mondo da liquidare e questo, dopo due giorni, sembra un giudizio pigro. Lo skyline e i centri commerciali sono esattamente come li si immagina — il Burj Khalifa è impressionante per i numeri e un po\' meno per l\'esperienza, che è una fila, un ascensore e una vetrata — ma a venti minuti di metropolitana c\'è un\'altra città che nessuno cerca. Il creek è ancora un porto commerciale vero, con le barche di legno cariche fino all\'orlo di elettrodomestici dirette in Iran e in India, e l\'abra che lo attraversa costa un dirham: si sale, si sta seduti in mezzo a gente che va al lavoro, e si sbarca dall\'altra parte nel souq delle spezie. Al Fahidi, con le torri del vento e i vicoli di gesso, mostra com\'era questo posto quando le perle erano l\'unica economia. E poi c\'è il dato che spiega la città meglio di ogni grattacielo: gli emiratini sono poco più del dieci per cento di chi ci vive, e la sera nei ristoranti pakistani di Karama si mangia benissimo con otto euro in mezzo a operai, autisti e famiglie. Quella, più del Burj, è Dubai.',
    esperienzeSlugs: ['creek-souq-dubai', 'deserto-emirati'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: 'Barche di legno sul Dubai Creek con lo skyline di Deira alle spalle',
  },
  {
    slug: 'abu-dhabi',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 2,
    nome: 'Abu Dhabi',
    tipologia: ['città', 'architettura', 'musei'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale degli Emirati, più bassa, più verde e molto meno frenetica di Dubai, con due edifici che da soli giustificano la deviazione: la Grande Moschea Sheikh Zayed, con le colonne intarsiate di madreperla e il tappeto annodato a mano più grande del mondo, e il Louvre di Jean Nouvel, coperto da una cupola forata che filtra la luce come una palmeta.',
    percheAndarci:
      'Perché è la destinazione dello stopover gratuito di Etihad, e perché in due giorni si vede una versione degli Emirati più misurata e più interessante di quella di Dubai — con in più il deserto di Liwa a un paio d\'ore.',
    cosaVedere: [
      'La Grande Moschea Sheikh Zayed, aperta ai visitatori non musulmani con regole di abbigliamento precise',
      'Il Louvre Abu Dhabi, sull\'isola di Saadiyat, con la cupola di 7.850 stelle metalliche sovrapposte',
      'Qasr Al Watan, il palazzo presidenziale visitabile, e Qasr Al Hosn, il forte più antico della città',
      'La Corniche e il quartiere di Al Mina con il mercato del pesce',
      'Il Museo Zayed National e il distretto culturale di Saadiyat, in espansione continua',
      'Yas Island, con il circuito di Formula 1 e i parchi a tema',
    ],
    cosaFare: [
      'Visitare la Grande Moschea nel tardo pomeriggio, quando il bianco vira al rosa e poi al blu — vedi la scheda esperienza dedicata',
      'Louvre Abu Dhabi, meglio di sera quando la luce attraverso la cupola cambia',
      'Escursione alle dune di Liwa, che sono le più alte del paese',
      'Mercato del pesce di Al Mina, dove si compra al banco e si fa cucinare accanto',
    ],
    doveDormire:
      'La Corniche e il centro sono comodi e ben collegati; Saadiyat è la zona dei musei e delle spiagge; Yas per i parchi e il circuito. Con lo stopover Etihad l\'hotel è compreso e assegnato tra le strutture convenzionate.',
    doveMangiare:
      'Come a Dubai, la cucina migliore e più economica è quella del subcontinente indiano, nei quartieri attorno al centro. Per il pesce, il mercato di Al Mina è il posto giusto: si sceglie al banco e si porta ai ristoranti accanto che lo cucinano per pochi dirham. La cucina emiratina vera si trova in pochi locali dedicati: da provare il machboos, il luqaimat come dolce e il karak chai, il tè speziato al latte che qui si beve a tutte le ore.',
    comeArrivare:
      'Volo su Abu Dhabi Zayed International (AUH), hub di Etihad. Da Dubai, autobus frequenti in circa 2 ore o taxi.',
    comeSpostarsi:
      'Non c\'è metropolitana: si usano taxi e Careem, che costano poco, o gli autobus urbani. Le distanze tra il centro, Saadiyat e Yas sono notevoli e camminare non è un\'opzione praticabile per gran parte dell\'anno.',
    periodoMigliore: 'da novembre a marzo, come tutto il Golfo. Il Gran Premio di Formula 1 si corre in autunno e riempie la città.',
    costi:
      'Grande Moschea gratuita; Louvre Abu Dhabi attorno ai 65 dirham; Qasr Al Watan circa 65. Complessivamente, una giornata ad Abu Dhabi costa molto meno di una a Dubai.',
    erroriDaEvitare: [
      'Presentarsi alla Grande Moschea senza abbigliamento adeguato: servono braccia e gambe coperte per tutti e il capo coperto per le donne. Le abaya vengono prestate ma con code lunghe, e in certi orari l\'ingresso è contingentato',
      'Visitare la moschea a mezzogiorno: il marmo bianco riverbera e fa male agli occhi, oltre a essere l\'ora peggiore per le fotografie',
      'Andare al Louvre di corsa: la cupola e il gioco di luce sotto di essa sono metà dell\'opera, e vanno guardati con calma',
      'Dare per scontato che ci sia una metropolitana come a Dubai: qui non c\'è, e le distanze sono grandi',
    ],
    miaEsperienza:
      'Abu Dhabi è la sorpresa degli Emirati, e lo è soprattutto per chi ci arriva dopo Dubai: più bassa, più lenta, con lo spazio tra un edificio e l\'altro. La Grande Moschea è uno di quei posti in cui il superlativo — il tappeto annodato a mano più grande del mondo, i lampadari con i cristalli Swarovski, ottantadue cupole — rischia di far pensare a un eccesso, e invece funziona: le colonne bianche intarsiate con motivi floreali in madreperla sono di una delicatezza che le cifre non lasciano immaginare, e il momento giusto è il tardo pomeriggio, quando il marmo passa dal bianco al rosa e poi al blu con l\'illuminazione notturna. Il Louvre è l\'altro pezzo forte e vale quanto la collezione: sotto quella cupola forata da quasi ottomila stelle metalliche sovrapposte cade una luce che si muove e si scompone tutto il giorno, e Nouvel la chiama pioggia di luce. Ci si siede sotto e si sta lì. Due giorni bastano, e con lo stopover Etihad l\'hotel non si paga.',
    esperienzeSlugs: ['moschea-sheikh-zayed', 'louvre-abu-dhabi'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: 'Le cupole bianche e il cortile della Grande Moschea Sheikh Zayed ad Abu Dhabi',
  },
  {
    slug: 'liwa-al-ain',
    paeseSlug: 'emirati-arabi-uniti',
    ordine: 3,
    nome: 'Liwa e Al Ain',
    tipologia: ['deserto', 'natura', 'oasi'],
    giorniConsigliati: '1-2 giorni, come estensione da Abu Dhabi',
    visitataPersonalmente: false,
    introduzione:
      'L\'entroterra: a sud, l\'oasi di Liwa sul bordo del Rub\' al-Khali — il Quarto Vuoto, il più grande deserto di sabbia continuo del mondo — con dune che superano i 250 metri; a est, Al Ain, la "città giardino" patrimonio UNESCO, con le oasi di palme irrigate dai falaj, i canali sotterranei di duemila anni fa.',
    percheAndarci:
      'Perché è l\'unico modo di vedere il deserto vero invece della sua versione da safari serale alle porte di Dubai, e perché Al Ain mostra come si viveva qui prima del petrolio: un\'oasi agricola con un sistema di irrigazione che funziona ancora.',
    cosaVedere: [
      'Le dune di Moreeb, tra le più alte del mondo, nella zona di Liwa',
      'Il bordo del Rub\' al-Khali, il deserto di sabbia continuo più grande del pianeta',
      'L\'oasi di Al Ain, patrimonio UNESCO, con 147.000 palme e i canali falaj ancora in uso',
      'Il forte di Al Jahili e i siti archeologici di Hili, con tombe dell\'età del bronzo',
      'Jebel Hafeet, la montagna con la strada panoramica e la vista sull\'oasi',
    ],
    cosaFare: [
      'Notte nel deserto a Liwa, molto più autentica dei safari serali nei dintorni di Dubai',
      'Alba sulle dune di Moreeb',
      'Camminare nell\'oasi di Al Ain lungo i canali di irrigazione, all\'ombra delle palme',
      'Salita in auto al Jebel Hafeet, con i tornanti e il punto panoramico in cima',
    ],
    doveDormire:
      'A Liwa ci sono pochi resort nel deserto, cari e da prenotare in anticipo; Al Ain ha un\'offerta urbana normale. La maggior parte dei visitatori arriva da Abu Dhabi in giornata, ed è la scelta che fa perdere la parte migliore — che è la notte.',
    doveMangiare:
      'Fuori dai resort l\'offerta è quella dei ristoranti di quartiere, quasi tutti indiani o pakistani, buoni ed economici. Ad Al Ain vale la pena cercare i datteri locali, che sono il prodotto agricolo dell\'oasi e si vendono nei mercati specializzati.',
    comeArrivare:
      'Da Abu Dhabi, circa 2 ore di strada per Liwa e 1h30 per Al Ain. Serve un\'auto a noleggio o un transfer: i mezzi pubblici esistono ma non sono pratici, e per le dune serve comunque un 4x4 con guida.',
    comeSpostarsi: 'Auto propria sulle strade asfaltate; per le dune, solo 4x4 con autista esperto — guidare sulla sabbia senza esperienza è il modo classico di restare impantanati.',
    periodoMigliore:
      'da novembre a marzo, e nel deserto anche allora le notti sono fredde. In estate le temperature nell\'interno superano regolarmente i 50 gradi.',
    costi: 'oasi di Al Ain e forti gratuiti o quasi; i resort nel deserto sono la voce cara.',
    erroriDaEvitare: [
      'Confondere un safari serale nei dintorni di Dubai con il deserto: quelli sono su dune piccole a mezz\'ora dalla città, questo è il bordo del Rub\' al-Khali',
      'Guidare sulla sabbia senza esperienza e senza un secondo mezzo: è il modo più comune di finire nei guai',
      'Visitare in giornata e saltare la notte, che è il motivo per cui si viene fin qui',
      'Sottovalutare il freddo notturno nel deserto d\'inverno',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e la scheda resta sui fatti invece di raccontare una giornata che non c\'è stata. Resta in lista per una ragione precisa: quello che a Dubai e ad Abu Dhabi viene venduto come "safari nel deserto" si svolge su dune modeste a mezz\'ora dalla città, con i quad, la cena in campo tendato e il rientro in serata. Il Rub\' al-Khali è un\'altra cosa — il più grande deserto di sabbia continuo del mondo, con dune oltre i duecento metri a Moreeb — e sta a due ore da Abu Dhabi, cioè dentro la portata di un\'estensione di due giorni. L\'altra metà della deviazione è Al Ain, che è l\'esatto opposto: un\'oasi patrimonio UNESCO con centoquarantasettemila palme irrigate da canali scavati duemila anni fa e ancora in funzione, dove si cammina all\'ombra e si sente l\'acqua scorrere. Insieme spiegano com\'era questo paese prima che ci trovassero il petrolio, ed è la cosa che manca completamente a uno stopover di sole città.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Le dune del Rub\' al-Khali nella regione di Liwa, Emirati Arabi Uniti',
  },
]
