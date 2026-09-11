import type { Destinazione } from '@/lib/types'

// Paese visitato di persona, ma senza ancora un racconto scritto: miaEsperienza
// resta assente e il contenuto qui sotto è guida pratica generale. Ricordi e
// giudizi personali vanno aggiunti in un secondo momento.

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
    doveMangiare: 'da completare',
    comeArrivare:
      'Volo internazionale su Belize City (BZE), poi water taxi dal terminal in centro (circa 45 minuti). In alternativa volo interno su Caye Caulker con Tropic Air o Maya Island Air.',
    comeSpostarsi: 'A piedi o in bicicletta; i golf cart si noleggiano ma servono davvero a poco, l\'isola si attraversa in venti minuti.',
    periodoMigliore: 'dicembre-aprile per mare calmo e visibilità; da giugno a novembre stagione delle piogge e degli uragani',
    costi: 'water taxi da Belize City circa 30-40 BZD a tratta; tour di snorkeling di mezza giornata 60-100 BZD più le tasse del parco marino',
    erroriDaEvitare: [
      'Aspettarsi spiagge caraibiche classiche: la costa è per lo più mangrovie e pontili, si entra in acqua dai moli',
      'Non mettere in conto le tasse d\'ingresso ai parchi marini, spesso escluse dal prezzo del tour',
    ],
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
    doveMangiare: 'da completare',
    comeArrivare: 'Water taxi da Belize City (circa 1h30, spesso con sosta a Caye Caulker) oppure volo interno di 15 minuti da Belize City.',
    comeSpostarsi: 'Golf cart a noleggio, taxi-golf cart, biciclette; barche-navetta per le zone più a nord.',
    periodoMigliore: 'dicembre-aprile; il Blue Hole richiede mare calmo, più probabile nei mesi secchi',
    costi: 'immersione al Blue Hole 300-400 USD a persona (tre immersioni, pranzo incluso); noleggio golf cart 50-80 USD al giorno',
    erroriDaEvitare: [
      'Prenotare il Blue Hole senza esperienza subacquea adeguata: la parete richiede una discesa profonda, molti operatori chiedono un brevetto avanzato o un numero minimo di immersioni',
      'Dare per scontato che il Blue Hole sia spettacolare anche in snorkeling: dalla superficie si vede poco, la vista migliore è dall\'aereo',
    ],
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
    doveMangiare: 'da completare',
    comeArrivare: 'Bus o navetta da Belize City (circa 2-3 ore) lungo la George Price Highway; è anche la porta d\'ingresso via terra dal Guatemala (frontiera di Melchor de Mencos).',
    comeSpostarsi: 'Tour organizzati per i siti e le grotte (quasi sempre obbligatori); taxi collettivi e bus locali per gli spostamenti brevi.',
    periodoMigliore: 'dicembre-aprile; la grotta ATM può chiudere dopo piogge intense per il livello dell\'acqua',
    costi: 'tour ATM 100-140 USD a persona incluso trasporto, pranzo e ingressi; Xunantunich circa 10 USD di ingresso',
    erroriDaEvitare: [
      'Portare la macchina fotografica alla grotta ATM: sono vietate da anni, dopo che una caduta accidentale ha danneggiato un reperto — non ci sono eccezioni',
      'Prenotare il tour ATM con operatori non autorizzati: l\'accesso è contingentato e riservato a guide con licenza specifica',
      'Sottovalutare che nella grotta si cammina e si nuota in acqua fredda per ore, con passaggi stretti',
    ],
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
    doveMangiare: 'da completare',
    comeArrivare: 'Volo interno da Belize City a Placencia (circa 40 minuti) o bus lungo la Hummingbird e Southern Highway (4-5 ore).',
    comeSpostarsi: 'A piedi o in bicicletta nei villaggi; golf cart a noleggio sulla penisola di Placencia.',
    periodoMigliore: 'dicembre-aprile in generale; marzo-giugno per la finestra degli squali balena',
    costi: 'volo interno 100-150 USD a tratta; uscita squali balena 200-250 USD a persona in stagione',
    erroriDaEvitare: [
      'Programmare il viaggio attorno agli squali balena dandoli per garantiti: gli avvistamenti dipendono dalle lune piene e restano incerti',
      'Sottovalutare i tempi del bus lungo la Southern Highway se si ha un volo in coincidenza',
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Palme e sabbia bianca sulla penisola di Placencia, Belize',
  },
]
