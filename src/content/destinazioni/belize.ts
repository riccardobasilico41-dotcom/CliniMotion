import type { Destinazione } from '@/lib/types'

// Paese visitato di persona. I campi miaEsperienza sono bozze scritte da
// Claude nella voce del diario, basate su ciò che è oggettivamente vero di
// ogni posto (fatica, stagione, affollamento, logistica) e non su ricordi
// reali: vanno riletti e sostituiti con i tuoi. Nessun nome di hotel,
// ristorante o operatore è stato inventato.

export const destinazioniBelize: Destinazione[] = [
  {
    slug: 'caye-caulker',
    paeseSlug: 'belize',
    ordine: 1,
    nome: 'Caye Caulker',
    tipologia: ['mare', 'isole'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola lunga poche centinaia di metri dove non circolano auto (solo golf cart e biciclette) e il motto ufficiale, scritto ovunque, è "Go Slow". La base più economica e rilassata per il mare del Belize.',
    percheAndarci:
      'È il modo più semplice e a buon mercato per stare sulla seconda barriera corallina del mondo: si dorme sull\'isola, si fa snorkeling ogni giorno e si vive a piedi scalzi.',
    cosaVedere: [
      'The Split, il canale che divide l\'isola in due, aperto da un uragano — punto di ritrovo per il tramonto',
      'La barriera corallina al largo, parte del Belize Barrier Reef Reserve System (UNESCO)',
      'Le mangrovie e le lagune sul lato ovest dell\'isola',
    ],
    cosaFare: [
      'Snorkeling a Hol Chan Marine Reserve e Shark Ray Alley — vedi la scheda esperienza dedicata',
      'Uscita in barca a vela al tramonto',
      'Giornata di diving o volo panoramico sul Great Blue Hole',
      'Kayak tra le mangrovie o semplicemente bicicletta da un capo all\'altro dell\'isola',
    ],
    doveDormire: 'Tutta l\'isola è percorribile a piedi: le strutture vanno dagli ostelli vicino al molo alle cabañas sul lato est, più tranquille.',
    doveMangiare:
      'Il Belize è caro rispetto ai vicini e a Caye Caulker si sente, ma esiste una via d\'uscita: i barbecue di strada del pomeriggio, dove si mangia pollo o pesce alla griglia con riso e fagioli per pochi dollari, e le signore che vendono pesce fritto e fry jacks sulla via principale. Il piatto quotidiano è rice and beans con carne stufata; l\'aragosta ha una stagione precisa (da metà giugno a febbraio) e fuori da quella, se compare nel menu, è congelata. Da provare almeno una volta il ceviche di lambi (conch), che qui è locale davvero.',
    comeArrivare:
      'Volo internazionale su Belize City (BZE), poi water taxi dal terminal in centro (circa 45 minuti). In alternativa volo interno su Caye Caulker con Tropic Air o Maya Island Air.',
    comeSpostarsi: 'A piedi o in bicicletta; i golf cart si noleggiano ma servono davvero a poco, l\'isola si attraversa in venti minuti.',
    periodoMigliore: 'dicembre-aprile per mare calmo e visibilità; da giugno a novembre stagione delle piogge e degli uragani',
    costi: 'water taxi da Belize City circa 30-40 BZD a tratta; tour di snorkeling di mezza giornata 60-100 BZD più le tasse del parco marino',
    erroriDaEvitare: [
      'Aspettarsi spiagge caraibiche classiche: la costa è per lo più mangrovie e pontili, si entra in acqua dai moli',
      'Non mettere in conto le tasse d\'ingresso ai parchi marini, spesso escluse dal prezzo del tour',
    ],
    miaEsperienza:
      'Il "Go Slow" scritto ovunque non è uno slogan per cartoline: sull\'isola non ci sono auto, si cammina su sabbia e in due giorni il ritmo cala da solo. La delusione possibile, ed è bene saperla prima, è la spiaggia: non ce n\'è quasi, la costa è mangrovia e pontili e in acqua si entra dai moli o al Split. Chi arriva con in testa i Caraibi da cartolina resta spiazzato per mezza giornata, poi capisce che il mare qui si fa al largo. E al largo c\'è la seconda barriera del mondo: mezz\'ora di barca e a Shark Ray Alley si sta in acqua con gli squali nutrice che passano a mezzo metro senza dare il minimo peso a chi guarda. Il Belize costa quasi il doppio del Guatemala vicino, e questa è l\'unica vera controindicazione.',
    esperienzeSlugs: ['hol-chan-shark-ray-alley'],
    tripSlugs: [],
    imageAlt: 'Pontile di legno e acqua turchese a Caye Caulker, Belize',
  },
  {
    slug: 'ambergris-caye',
    paeseSlug: 'belize',
    ordine: 2,
    nome: 'Ambergris Caye e San Pedro',
    tipologia: ['mare', 'diving'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più grande e più sviluppata del Belize, con il paese di San Pedro come centro: più servizi, più ristoranti e più centri diving rispetto a Caye Caulker, ma anche prezzi più alti.',
    percheAndarci:
      'È la base migliore per chi mette le immersioni al centro del viaggio: da qui partono le uscite per Hol Chan, per il Blue Hole e per i punti più esterni della barriera.',
    cosaVedere: [
      'Hol Chan Marine Reserve, il canale naturale nella barriera',
      'Shark Ray Alley, dove si nuota con squali nutrice e razze',
      'Secret Beach, sul lato ovest dell\'isola, con acqua bassissima',
      'Il centro di San Pedro, tra case colorate e carretti da golf',
    ],
    cosaFare: [
      'Immersioni sulla barriera o gita di giornata al Great Blue Hole (tre immersioni, giornata lunga e mare aperto)',
      'Snorkeling a Hol Chan e Shark Ray Alley',
      'Kitesurf e windsurf sul lato sopravento dell\'isola',
    ],
    doveDormire: 'San Pedro per i servizi e la vita serale; le zone a nord e a sud dell\'isola per i resort più tranquilli, raggiungibili in golf cart o barca.',
    doveMangiare:
      'San Pedro ha l\'offerta più larga del paese e anche i prezzi più alti: sul fronte mare si paga la posizione. Le strade dietro hanno le comedor dove pranzano i locali, con lo stesso stew chicken a un quarto del costo. Da cercare i chioschi di pesce che grigliano il pescato del giorno e le tortillas di mais fatte al momento. Vale la pena provare il conch fritter in stagione e, come bevanda locale, il seaweed shake, che a sentirlo descritto non convince e poi funziona.',
    comeArrivare: 'Water taxi da Belize City (circa 1h30, spesso con sosta a Caye Caulker) oppure volo interno di 15 minuti da Belize City.',
    comeSpostarsi: 'Golf cart a noleggio, taxi-golf cart, biciclette; barche-navetta per le zone più a nord.',
    periodoMigliore: 'dicembre-aprile; il Blue Hole richiede mare calmo, più probabile nei mesi secchi',
    costi: 'immersione al Blue Hole 300-400 USD a persona (tre immersioni, pranzo incluso); noleggio golf cart 50-80 USD al giorno',
    erroriDaEvitare: [
      'Prenotare il Blue Hole senza esperienza subacquea adeguata: la parete richiede una discesa profonda, molti operatori chiedono un brevetto avanzato o un numero minimo di immersioni',
      'Dare per scontato che il Blue Hole sia spettacolare anche in snorkeling: dalla superficie si vede poco, la vista migliore è dall\'aereo',
    ],
    miaEsperienza:
      'Ambergris è la versione comoda di Caye Caulker: più ristoranti, più diving center, più carretti da golf che passano di continuo, e prezzi che ricordano la Florida più dei Caraibi. Ha senso come base se le immersioni sono il motivo del viaggio, meno se si cerca l\'atmosfera. Sul Blue Hole va detta una cosa impopolare: costa parecchio, richiede una giornata lunga in mare aperto e sott\'acqua è un muro blu con qualche stalattite e poco pesce — chi ci va aspettandosi il reef migliore del viaggio sbaglia meta. La foto famosa, quella del cerchio perfetto, è dall\'aereo: il volo panoramico costa molto meno ed è più fedele a quello che ci si immaginava.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Carretti da golf e case colorate lungo il fronte mare di San Pedro, Ambergris Caye, Belize',
  },
  {
    slug: 'san-ignacio-cayo',
    paeseSlug: 'belize',
    ordine: 3,
    nome: 'San Ignacio e il Cayo',
    tipologia: ['natura', 'cultura', 'avventura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'entroterra del Belize, al confine con il Guatemala: giungla, fiumi, siti maya e la grotta archeologica di Actun Tunichil Muknal, tra le più impressionanti al mondo.',
    percheAndarci:
      'È il contrappeso perfetto alle isole: in pochi giorni si passa dal mare caraibico alla giungla, con una delle esperienze archeologiche più intense di tutta la Mesoamerica.',
    cosaVedere: [
      'La grotta ATM (Actun Tunichil Muknal), con ceramiche e resti umani maya lasciati in situ',
      'Xunantunich, sito maya raggiungibile con un traghetto a mano sul fiume Mopan',
      'Caracol, il sito maya più grande del Belize, dentro la Chiquibul Forest Reserve',
      'Il Green Hills Butterfly Ranch e le pozze naturali di Rio On, lungo la Mountain Pine Ridge',
    ],
    cosaFare: [
      'Escursione alla grotta ATM, guida obbligatoria e macchine fotografiche vietate — vedi la scheda esperienza dedicata',
      'Canoa sul fiume Macal',
      'Cave tubing, la discesa in camera d\'aria dentro le grotte',
      'Giornata a Tikal, in Guatemala: il confine è a circa un\'ora da San Ignacio',
    ],
    doveDormire: 'San Ignacio per prezzi e servizi; i jungle lodge lungo il fiume Macal o sulla Mountain Pine Ridge per un\'esperienza più immersiva.',
    doveMangiare:
      'San Ignacio è il posto dove si mangia meglio e si spende meno di tutto il Belize, grazie al mercato del sabato mattina: banchi di frutta, pupusas, tamales e cucina cinese-belizeana, che è una combinazione ricorrente nel paese e funziona. In settimana i chioschi serali sulla via principale servono stew chicken, pollo alla griglia e le fry jacks a colazione. La cucina locale mescola influenze maya, creole e messicane, e nel Cayo la parte maya è quella più presente.',
    comeArrivare: 'Bus o navetta da Belize City (circa 2-3 ore) lungo la George Price Highway; è anche la porta d\'ingresso via terra dal Guatemala (frontiera di Melchor de Mencos).',
    comeSpostarsi: 'Tour organizzati per i siti e le grotte (quasi sempre obbligatori); taxi collettivi e bus locali per gli spostamenti brevi.',
    periodoMigliore: 'dicembre-aprile; la grotta ATM può chiudere dopo piogge intense per il livello dell\'acqua',
    costi: 'tour ATM 100-140 USD a persona incluso trasporto, pranzo e ingressi; Xunantunich circa 10 USD di ingresso',
    erroriDaEvitare: [
      'Portare la macchina fotografica alla grotta ATM: sono vietate da anni, dopo che una caduta accidentale ha danneggiato un reperto — non ci sono eccezioni',
      'Prenotare il tour ATM con operatori non autorizzati: l\'accesso è contingentato e riservato a guide con licenza specifica',
      'Sottovalutare che nella grotta si cammina e si nuota in acqua fredda per ore, con passaggi stretti',
    ],
    miaEsperienza:
      'La grotta ATM è la cosa più impressionante fatta in Centro America e non è per tutti. Si entra a nuoto in un fiume sotterraneo, si prosegue per ore in acqua fredda, tra passaggi in cui bisogna girarsi di lato, e alla fine si tolgono le scarpe per camminare in calzini nella camera superiore. Lì dentro ci sono ceramiche intatte e resti umani lasciati esattamente dove i maya li avevano deposti più di mille anni fa, la Cristallina compresa. Nessuna fotografia — sono vietate da quando una macchina caduta ha danneggiato un cranio — ed è la ragione per cui il posto funziona così bene: si guarda e basta. Chi ha problemi con spazi stretti o acqua fredda scelga Xunantunich, che è bello e sta all\'aperto.',
    esperienzeSlugs: ['grotta-atm'],
    tripSlugs: [],
    imageAlt: 'Ingresso della giungla verso la grotta di Actun Tunichil Muknal nel distretto del Cayo, Belize',
  },
  {
    slug: 'placencia-hopkins',
    paeseSlug: 'belize',
    ordine: 4,
    nome: 'Placencia e Hopkins',
    tipologia: ['mare', 'cultura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La costa sud del Belize continentale: Placencia è una penisola sottile con le spiagge di sabbia più belle del paese, Hopkins è un villaggio garifuna noto per la cultura e i tamburi.',
    percheAndarci:
      'È l\'alternativa alle isole per chi vuole spiaggia vera senza prendere un traghetto, e l\'unico posto dove incontrare da vicino la cultura garifuna, riconosciuta dall\'UNESCO.',
    cosaVedere: [
      'La Placencia Sidewalk, il camminamento pedonale che attraversa il villaggio',
      'Il villaggio garifuna di Hopkins, con le scuole di tamburo tradizionale',
      'La Laughing Bird Caye, isola-parco nazionale al largo di Placencia',
      'Il Cockscomb Basin Wildlife Sanctuary, la prima riserva al mondo dedicata ai giaguari',
    ],
    cosaFare: [
      'Snorkeling con gli squali balena a Gladden Spit (stagionale, attorno alle lune piene tra marzo e giugno)',
      'Lezione di tamburo garifuna a Hopkins',
      'Trekking e bagni nelle pozze del Cockscomb Basin',
    ],
    doveDormire: 'Placencia village per la vita sociale, la penisola a nord per i resort; Hopkins per un\'atmosfera più di villaggio.',
    doveMangiare:
      'Qui compare la cucina garifuna, che nel resto del Belize si trova poco: il piatto da cercare è l\'hudut, pesce nel latte di cocco con il purè di platano verde, lungo da preparare e servito soprattutto nei ristoranti di famiglia a Hopkins. A Placencia il pesce alla griglia e il ceviche di conch sono ovunque, con la solita differenza di prezzo tra il fronte spiaggia e le vie interne. Il cioccolato del sud del Belize, lavorato in piccole fattorie della zona di Punta Gorda, si trova in vendita un po\' ovunque e vale il costo.',
    comeArrivare: 'Volo interno da Belize City a Placencia (circa 40 minuti) o bus lungo la Hummingbird e Southern Highway (4-5 ore).',
    comeSpostarsi: 'A piedi o in bicicletta nei villaggi; golf cart a noleggio sulla penisola di Placencia.',
    periodoMigliore: 'dicembre-aprile in generale; marzo-giugno per la finestra degli squali balena',
    costi: 'volo interno 100-150 USD a tratta; uscita squali balena 200-250 USD a persona in stagione',
    erroriDaEvitare: [
      'Programmare il viaggio attorno agli squali balena dandoli per garantiti: gli avvistamenti dipendono dalle lune piene e restano incerti',
      'Sottovalutare i tempi del bus lungo la Southern Highway se si ha un volo in coincidenza',
    ],
    miaEsperienza:
      'È la parte di Belize dove finalmente c\'è la sabbia che sulle isole manca: Placencia ha chilometri di spiaggia vera e un camminamento pedonale che attraversa tutto il villaggio, e in bassa stagione ci si trova quasi soli. Ma la cosa che distingue questo tratto di costa è Hopkins, ed è culturale più che balneare: i garifuna discendono da africani mai stati schiavi, deportati qui dai Caraibi orientali, e hanno lingua, cucina e percussioni proprie, riconosciute dall\'UNESCO. Una lezione di tamburo con un maestro del villaggio dice più di qualsiasi museo. Sugli squali balena a Gladden Spit meglio essere onesti: dipendono dalle lune piene tra marzo e giugno, e costruirci sopra l\'itinerario è il modo migliore per restare delusi.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Palme e sabbia bianca sulla penisola di Placencia, Belize',
  },
]
