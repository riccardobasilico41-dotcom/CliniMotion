import type { Destinazione } from '@/lib/types'

// Città-stato: le "destinazioni" qui sotto sono aree e quartieri, non città.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto e non su ricordi
// reali: vanno riletti e sostituiti. Non sono stati inventati nomi di hotel o
// ristoranti; i centri hawker e i siti pubblici citati sono luoghi, non
// esercizi commerciali.

export const destinazioniSingapore: Destinazione[] = [
  {
    slug: 'marina-bay',
    paeseSlug: 'singapore',
    ordine: 1,
    nome: 'Marina Bay e i Gardens',
    tipologia: ['architettura', 'città', 'panorami'],
    giorniConsigliati: '1 giorno, con la sera dedicata ai Gardens',
    visitataPersonalmente: true,
    introduzione:
      'La baia costruita su terra strappata al mare, dove sta tutto quello che rende Singapore riconoscibile: l\'hotel con la nave sul tetto, i Supertree alti cinquanta metri, le serre climatizzate e il museo a forma di fiore di loto. È la città come vuole essere vista, e funziona.',
    percheAndarci:
      'Perché è uno degli esperimenti urbanistici più riusciti degli ultimi trent\'anni: un\'intera baia progettata da zero che sarebbe potuta venire fuori come un centro commerciale a cielo aperto e invece regge, soprattutto dopo il tramonto.',
    cosaVedere: [
      'I Supertree Grove di Gardens by the Bay, con lo spettacolo di luci serale gratuito',
      'Le serre Flower Dome e Cloud Forest, con la cascata coperta più alta del mondo',
      'Il Marina Bay Sands e la sua piattaforma panoramica sul tetto',
      'Il ponte Helix e il Merlion, la statua simbolo della città',
      'L\'ArtScience Museum, a forma di loto, sulla punta della baia',
      'Il lungobaia illuminato, che si percorre a piedi tutto attorno',
    ],
    cosaFare: [
      'Spettacolo di luci ai Supertree dopo il tramonto — vedi la scheda esperienza dedicata',
      'Camminata completa attorno alla baia, circa 3,5 km, meglio all\'ora blu',
      'Salita a un rooftop bar invece della piattaforma panoramica: si paga un cocktail e si ha la stessa vista',
      'Serate al Marina Barrage, la diga con il prato sul tetto dove i singaporiani fanno volare gli aquiloni',
    ],
    doveDormire:
      'La zona è la più cara della città. Chi ci dorme lo fa per la vista; chi vuole spendere meno sta a Chinatown, Bugis o Geylang e arriva qui in metropolitana in dieci minuti, che è la scelta ragionevole.',
    doveMangiare:
      'È la parte della città dove si mangia peggio in rapporto al prezzo: i ristoranti attorno alla baia sono pensati per chi non si sposta. Il consiglio è mangiare altrove e venire qui dopo cena — oppure fermarsi al Satay by the Bay, il centro hawker all\'interno dei Gardens, che è l\'unica opzione a prezzi normali della zona.',
    comeArrivare: 'Metropolitana: le fermate Bayfront, Marina Bay e Promenade servono tutta l\'area. Dall\'aeroporto sono circa 30 minuti in MRT.',
    comeSpostarsi:
      'Tutto a piedi, ma con un\'avvertenza: il caldo è serio e l\'ombra è poca. I passaggi sotterranei climatizzati che collegano i centri commerciali sono la vera rete pedonale della città e vale la pena usarli.',
    periodoMigliore:
      'tutto l\'anno, con la sera come momento giusto — non solo per le luci, ma perché di giorno l\'umidità sulla baia è pesante e l\'asfalto rimanda il calore.',
    costi:
      'la baia, i Supertree e lo spettacolo di luci sono gratuiti; le serre costano attorno ai 30-50 SGD, la piattaforma del Marina Bay Sands circa 30. Quasi tutto il resto si vede senza pagare nulla.',
    erroriDaEvitare: [
      'Pagare la piattaforma panoramica del Marina Bay Sands: costa quanto un cocktail al bar dello stesso edificio, che ha la stessa vista e ci si siede',
      'Andare ai Gardens a metà giornata, quando fa caldissimo e le luci non ci sono',
      'Saltare le serre pensando che siano un giardino botanico qualsiasi: la Cloud Forest, con la cascata coperta di trenta metri, è la cosa più sorprendente della zona',
      'Cenare attorno alla baia: si paga il doppio per mangiare peggio che in qualsiasi centro hawker',
    ],
    miaEsperienza:
      'Marina Bay è il tipo di posto che uno si aspetta di trovare artificiale e che invece funziona, e vale la pena capire perché: non è solo scenografia, è una baia chiusa da una diga che ha trasformato l\'acqua di mare in un bacino d\'acqua dolce e risolto metà del problema idrico del paese. Sapendolo, i Supertree smettono di essere alberi finti e diventano quello che sono — torri di raccolta dell\'acqua piovana e di ventilazione per le serre, con i pannelli solari in cima. Lo spettacolo di luci serale è gratuito, dura una quindicina di minuti, e ci si sdraia sul prato sotto le torri insieme a centinaia di persone: è la cosa più bella della città e non costa niente. La Cloud Forest, con la cascata di trenta metri dentro una cupola di vetro climatizzata, è l\'altra sorpresa. La regola d\'oro di tutta la zona: non pagare per la vista dall\'alto, ordinare un cocktail al bar dello stesso grattacielo.',
    esperienzeSlugs: ['gardens-by-the-bay'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'I Supertree di Gardens by the Bay illuminati con il Marina Bay Sands sullo sfondo, Singapore',
  },
  {
    slug: 'quartieri-etnici',
    paeseSlug: 'singapore',
    ordine: 2,
    nome: 'Chinatown, Little India e Kampong Glam',
    tipologia: ['cultura', 'gastronomia', 'città'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'I tre quartieri storici delle comunità che hanno fatto Singapore, ognuno con il proprio tempio o moschea, la propria cucina e il proprio ritmo. Sono anche il posto dove la città smette di sembrare un progetto e torna a essere una città.',
    percheAndarci:
      'Perché sono la parte che resta quando si toglie lo skyline: shophouse a due piani, botteghe, templi in funzione, e i centri hawker dove si mangia per tre euro una cucina che altrove sarebbe da ristorante.',
    cosaVedere: [
      'Il Buddha Tooth Relic Temple e il Sri Mariamman, il tempio indù più antico della città, entrambi a Chinatown',
      'Il Maxwell Food Centre e il Chinatown Complex, i due centri hawker storici',
      'Il tempio Sri Veeramakaliamman e le vie di tessuti e spezie di Little India',
      'La Tekka Centre, il mercato coperto di Little India',
      'La moschea Sultan a Kampong Glam e le case colorate di Haji Lane',
      'Il quartiere di Tiong Bahru, con l\'architettura razionalista degli anni Trenta e il suo mercato',
    ],
    cosaFare: [
      'Pranzo o cena in un centro hawker, che è il modo giusto di mangiare in questa città — vedi la scheda esperienza dedicata',
      'Camminare i tre quartieri in sequenza, che sono a poche fermate di metropolitana uno dall\'altro',
      'Colazione con kaya toast e uovo alla coque, che è il rito mattutino locale',
      'Una sera a Haji Lane, tra murales e locali piccoli, che è la zona meno istituzionale della città',
    ],
    doveDormire:
      'Chinatown e Bugis sono le zone migliori per rapporto qualità-prezzo: centrali, servite dalla metropolitana e molto più economiche di Marina Bay. Little India ha i prezzi più bassi in assoluto.',
    doveMangiare:
      'Qui si mangia, e si mangia in un centro hawker. Il pollo di Hainan con il riso cotto nel brodo è il piatto nazionale; poi il laksa di Katong con il latte di cocco, il char kway teow, il chilli crab (che costa molto di più e si mangia altrove, sul mare), il roti prata e il teh tarik a Little India, il nasi padang a Kampong Glam. La regola: la coda più lunga indica il banco migliore, e ci si mette in fila.',
    comeArrivare: 'Metropolitana: Chinatown, Little India e Bugis hanno tutte la loro fermata, a poche stazioni di distanza.',
    comeSpostarsi: 'A piedi dentro ogni quartiere, in MRT tra l\'uno e l\'altro. Sono tutti nel raggio di tre chilometri.',
    periodoMigliore:
      'tutto l\'anno. I momenti speciali sono il Capodanno cinese a Chinatown, il Deepavali a Little India e l\'Hari Raya a Kampong Glam, quando i rispettivi quartieri si illuminano. Nel Capodanno cinese, però, molti banchi hawker a gestione familiare chiudono per giorni.',
    costi:
      'praticamente nulli: i quartieri si camminano, i templi sono gratuiti o quasi, e un pasto completo in un centro hawker sta tra i 3 e i 6 euro. È la Singapore che si può fare con pochi soldi.',
    erroriDaEvitare: [
      'Mangiare nei ristoranti con aria condizionata e menu illustrato quando a cinquanta metri c\'è un centro hawker: si paga il triplo per un piatto peggiore',
      'Andare a Chinatown solo per la via dei souvenir, che è la parte meno interessante del quartiere',
      'Dimenticare le regole nei templi: spalle e ginocchia coperte, scarpe fuori dove indicato',
      'Girare a mezzogiorno: tra le undici e le tre il caldo è pesante, ed è anche l\'ora di punta ai centri hawker',
    ],
    miaEsperienza:
      'Questa è la Singapore che convince chi arriva convinto che sia solo una città di grattacieli e regole. I centri hawker sono l\'invenzione civile più riuscita del paese: negli anni Settanta il governo tolse i venditori ambulanti dalla strada per ragioni igieniche e invece di eliminarli li mise tutti sotto tettoie con acqua corrente e licenze, e il risultato è che oggi si mangia una cucina straordinaria per tre euro, seduti a tavoli condivisi, in un posto dove chiunque può permettersi di andare. Il sistema per orientarsi è banale e funziona: si guarda quale banco ha la coda e ci si mette in fila. L\'altra cosa che colpisce, camminando tra Chinatown, Little India e Kampong Glam nello stesso pomeriggio, è quanto poco si somiglino: cambiano gli odori, la musica, la lingua che si sente per strada, e sono a due fermate di metropolitana di distanza. Il dettaglio locale da conoscere: sui tavoli si trovano pacchetti di fazzoletti appoggiati da soli — è il "chope", il modo di prenotare il posto, e non si sposta.',
    esperienzeSlugs: ['hawker-centre'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Le shophouse colorate e la moschea Sultan nel quartiere di Kampong Glam, Singapore',
  },
  {
    slug: 'natura-singapore',
    paeseSlug: 'singapore',
    ordine: 3,
    nome: 'La Singapore verde',
    tipologia: ['natura', 'parchi', 'fauna selvatica'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: true,
    introduzione:
      'La parte che quasi nessuno mette in programma: un giardino botanico patrimonio UNESCO, una riserva di foresta primaria in mezzo all\'isola, sentieri sopraelevati tra le chiome e un\'isola senza auto dove si gira in bicicletta tra le case di legno.',
    percheAndarci:
      'Perché smonta l\'idea che Singapore sia solo cemento: quasi la metà del territorio è coperta da verde, il piano urbanistico si chiama esplicitamente "città dentro un giardino", e a venti minuti di metropolitana dal centro finanziario ci sono scimmie e varani.',
    cosaVedere: [
      'I Singapore Botanic Gardens, patrimonio UNESCO, con il National Orchid Garden',
      'La Bukit Timah Nature Reserve, foresta pluviale primaria attorno alla collina più alta dell\'isola',
      'Il MacRitchie Reservoir con il TreeTop Walk, la passerella sospesa sopra la foresta',
      'L\'isola di Pulau Ubin, dieci minuti di barca, senza auto, con le ultime case di legno del kampong',
      'Il Southern Ridges, il percorso di ponti pedonali tra le colline del sud, con l\'Henderson Waves',
    ],
    cosaFare: [
      'Camminare il sentiero di MacRitchie fino al TreeTop Walk, circa 10 km ad anello',
      'Giornata in bicicletta a Pulau Ubin, con la laguna di Chek Jawa',
      'Botanic Gardens all\'apertura, quando è pieno di gente del posto che corre e fa tai chi',
      'Southern Ridges al tramonto, camminando sull\'Henderson Waves',
    ],
    doveDormire: 'Nessuna di queste zone è una base sensata: si dorme in centro e ci si arriva in metropolitana o con una corsa breve.',
    doveMangiare:
      'Nessuna offerta dentro le riserve, a parte qualche chiosco: si porta acqua in quantità, perché il caldo umido sui sentieri è serio. A Pulau Ubin ci sono un paio di ristoranti di pesce nel villaggio del molo, semplici e giusti così.',
    comeArrivare:
      'Botanic Gardens e MacRitchie hanno fermate della metropolitana o sono raggiungibili in pochi minuti di corsa; per Pulau Ubin si va a Changi Point e si prende un bumboat, che parte quando ha dodici passeggeri a bordo.',
    comeSpostarsi: 'A piedi nelle riserve, in bicicletta a Pulau Ubin (si noleggia al molo).',
    periodoMigliore:
      'tutto l\'anno, al mattino presto. Dopo le dieci il caldo e l\'umidità rendono i sentieri molto più pesanti di quanto la distanza lasci pensare.',
    costi: 'tutto gratuito, compresi Botanic Gardens, MacRitchie e Pulau Ubin; solo il National Orchid Garden ha un biglietto di pochi dollari.',
    erroriDaEvitare: [
      'Sottovalutare il clima: dieci chilometri a MacRitchie con questa umidità valgono il doppio, e lungo il percorso l\'acqua non si compra',
      'Avvicinarsi ai macachi o mangiare davanti a loro: a MacRitchie e Bukit Timah sono abituati agli esseri umani e strappano le borse',
      'Arrivare al TreeTop Walk troppo tardi: la passerella ha orari di chiusura e si percorre in una sola direzione',
      'Considerare Pulau Ubin una gita opzionale: è il posto dove si vede come era Singapore prima del 1965, e non esiste più altrove',
    ],
    miaEsperienza:
      'È la parte di Singapore che ribalta l\'idea che uno si è fatto prima di arrivare. A venti minuti di metropolitana dalla baia dei grattacieli c\'è una foresta pluviale vera, con i macachi sui sentieri e i varani che attraversano davanti, e il TreeTop Walk di MacRitchie è una passerella sospesa sopra le chiome che nessuno associa a questa città. I Botanic Gardens al mattino presto sono la scena più bella e meno turistica di tutte: gente del posto che corre, gruppi di anziani che fanno tai chi sotto gli alberi, famiglie sui prati — un parco usato, non visitato. Ma il posto che vale più di tutti è Pulau Ubin: dieci minuti di barca di legno che parte solo quando ha dodici passeggeri, e si sbarca in un\'isola senza auto, con le case di legno su palafitte, i sentieri sterrati e le biciclette a noleggio. È come era Singapore prima del 1965, ed è rimasta solo lì. Vale come contrappeso a tutto il resto, e costa quanto il traghetto.',
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'La passerella sospesa del TreeTop Walk sopra la foresta di MacRitchie, Singapore',
  },
  {
    slug: 'sentosa',
    paeseSlug: 'singapore',
    ordine: 4,
    nome: 'Sentosa e il sud',
    tipologia: ['mare', 'famiglia', 'parchi'],
    giorniConsigliati: 'mezza giornata o un giorno intero con i parchi',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola a sud, collegata da un ponte, una monorotaia e una funivia: spiagge artificiali, parchi a tema, acquario e il punto più meridionale dell\'Asia continentale — una passerella pedonale su un isolotto, con tanto di cartello.',
    percheAndarci:
      'Per i parchi, se si viaggia con bambini, e per la funivia sopra il porto, che è il modo migliore di vedere quanto sia grande il traffico marittimo che passa da qui: Singapore è uno dei porti più trafficati del pianeta e da lassù si contano le navi in rada a decine.',
    cosaVedere: [
      'Universal Studios Singapore e il S.E.A. Aquarium a Resorts World',
      'Le spiagge di Siloso, Palawan e Tanjong, artificiali ma attrezzate',
      'La funivia Mount Faber-Sentosa, sopra il porto',
      'Il Fort Siloso, l\'unica fortificazione costiera britannica conservata, con la storia della caduta di Singapore nel 1942',
      'Il punto più meridionale dell\'Asia continentale, sull\'isolotto collegato da un ponte sospeso a Palawan Beach',
    ],
    cosaFare: [
      'Funivia da Mount Faber, che è il modo giusto di arrivare',
      'Giornata ai parchi, se ci sono bambini o se piove',
      'Camminare il Southern Ridges fino a Mount Faber e poi scendere a Sentosa in funivia',
      'Fort Siloso, che è gratuito e racconta la parte di storia che l\'isola solitamente non mostra',
    ],
    doveDormire: 'Gli hotel di Sentosa sono cari e isolati dal resto della città: ha senso solo per chi passa più giorni nei parchi con dei bambini.',
    doveMangiare:
      'L\'offerta sull\'isola è tutta a prezzi da parco a tema. Il consiglio è mangiare prima o dopo, a VivoCity — il centro commerciale da cui parte la monorotaia — che ha un food court normale al piano alto.',
    comeArrivare:
      'Monorotaia da VivoCity (fermata MRT HarbourFront), funivia da Mount Faber o a piedi sul ponte pedonale, che è gratuito e dura dieci minuti.',
    comeSpostarsi: 'Navette interne gratuite, monorotaia e molte camminate: l\'isola è lunga e i punti d\'interesse sono distanti tra loro.',
    periodoMigliore: 'tutto l\'anno. Nei fine settimana e nelle vacanze scolastiche l\'isola è molto affollata di residenti.',
    costi:
      'l\'accesso all\'isola a piedi è gratuito, la monorotaia costa pochi dollari; i parchi sono la voce vera — Universal Studios e l\'acquario hanno prezzi da parco internazionale.',
    erroriDaEvitare: [
      'Aspettarsi spiagge: sono artificiali, con sabbia importata, e davanti c\'è la rada delle petroliere. Vanno prese per quello che sono',
      'Pagare la monorotaia all\'andata: il ponte pedonale è gratuito, coperto e ci si mette dieci minuti',
      'Programmare una giornata intera se non si vanno a fare i parchi: mezza giornata basta e avanza',
      'Andarci nel fine settimana, quando metà Singapore è lì',
    ],
    miaEsperienza:
      'Sentosa è la tappa su cui vale la pena essere onesti: è un\'isola di intrattenimento, con spiagge artificiali di sabbia importata che guardano una rada piena di petroliere in attesa. Chi ci va cercando il mare torna indietro perplesso. Con dei bambini, o in una giornata di pioggia, i parchi e l\'acquario sono ottimi e giustificano tutto. Per tutti gli altri, le due cose che rendono il viaggio sono altre: la funivia da Mount Faber, che passa sopra il porto e permette di vedere quante navi ci sono in rada — Singapore è uno dei porti più trafficati del mondo e dall\'alto si capisce cosa significhi — e il Fort Siloso, gratuito, con i cannoni puntati verso il mare e la storia di come la città cadde in mano giapponese nel 1942, da terra, mentre l\'artiglieria guardava dalla parte sbagliata. Quella è la mezza giornata che vale.',
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'La funivia sopra il porto verso l\'isola di Sentosa, Singapore',
  },
]
