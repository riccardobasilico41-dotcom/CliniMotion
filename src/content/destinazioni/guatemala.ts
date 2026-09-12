import type { Destinazione } from '@/lib/types'

// Paese visitato di persona. I campi miaEsperienza sono bozze scritte da
// Claude nella voce del diario, basate su ciò che è oggettivamente vero di
// ogni posto (fatica, stagione, affollamento, logistica) e non su ricordi
// reali: vanno riletti e sostituiti con i tuoi. Nessun nome di hotel,
// ristorante o operatore è stato inventato.

export const destinazioniGuatemala: Destinazione[] = [
  {
    slug: 'antigua-guatemala',
    paeseSlug: 'guatemala',
    ordine: 1,
    nome: 'Antigua Guatemala',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '2-3 giorni, più una notte extra se si fa il trekking all\'Acatenango',
    visitataPersonalmente: true,
    introduzione:
      'L\'ex capitale coloniale, Patrimonio UNESCO: strade acciottolate, facciate color pastello, rovine di chiese distrutte dai terremoti e tre vulcani a fare da sfondo — Agua, Fuego e Acatenango.',
    percheAndarci:
      'È la base logistica di quasi ogni viaggio in Guatemala: ci si arriva in un\'ora dall\'aeroporto della capitale, si trovano shuttle per ogni altra tappa del paese, e da qui partono i trekking sui vulcani.',
    cosaVedere: [
      'L\'Arco di Santa Catalina, con il vulcano Agua incorniciato sullo sfondo',
      'Le rovine del Convento di Santa Clara e della chiesa di La Merced',
      'Il Cerro de la Cruz, punto panoramico sulla città e sui vulcani (salita breve, meglio in gruppo o con la polizia turistica)',
      'Il mercato municipale e il mercato dell\'artigianato',
    ],
    cosaFare: [
      'Trekking di due giorni all\'Acatenango per vedere le eruzioni del Fuego dal campo — vedi la scheda esperienza dedicata',
      'Corso di cucina guatemalteca o di cioccolato (ChocoMuseo e altre scuole in centro)',
      'Salita al vulcano Pacaya in mezza giornata, opzione più breve rispetto all\'Acatenango',
      'Giornata a Chichicastenango il giovedì o la domenica, per il mercato indigeno più grande del paese',
    ],
    doveDormire:
      'Tutta l\'offerta si concentra nel centro storico, a pochi isolati dal Parque Central: dagli ostelli con rooftop alle case coloniali trasformate in boutique hotel.',
    doveMangiare:
      'Antigua ha l\'offerta più internazionale del paese, ed è anche l\'unica città guatemalteca dove si può spendere come in Europa senza accorgersene. Il modo per non farlo è il mercato municipale a mezzogiorno, dove il menú del día — zuppa, piatto, tortillas, bibita — costa pochi quetzal. Da provare il pepián, lo stufato di carne con salsa di semi tostati che è il piatto nazionale, i rellenitos di platano come dolce da strada, e il caffè: il Guatemala ne produce tra i migliori al mondo e qui si beve nelle torrefazioni che lo tostano in loco.',
    comeArrivare: 'Volo su Città del Guatemala (GUA), poi circa 1 ora di shuttle o taxi privato fino ad Antigua.',
    comeSpostarsi: 'Il centro si gira interamente a piedi; per le altre tappe del paese partono shuttle turistici prenotabili in qualsiasi agenzia del centro.',
    periodoMigliore: 'novembre-aprile; la Semana Santa (marzo-aprile) porta le processioni più famose dell\'America Latina, con prezzi e affollamento ben più alti',
    costi: 'tra le città più care del Guatemala ma comunque economica per standard europei; il trekking all\'Acatenango parte da circa 60€ con l\'attrezzatura inclusa',
    erroriDaEvitare: [
      'Salire al Cerro de la Cruz da soli e fuori dagli orari di presidio della polizia turistica',
      'Sottovalutare il freddo notturno al campo dell\'Acatenango (quasi 4.000 m): servono strati veri, non solo una felpa',
    ],
    miaEsperienza:
      'È la tappa più comoda del Guatemala e anche la meno rappresentativa: Antigua è bellissima, ordinata, piena di stranieri, e non somiglia al resto del paese. Va presa per quello che è — una base logistica piacevole dove tutto si organizza in dieci minuti, con qualche chiesa in rovina che vale la sosta. La cosa che invece resta è l\'Acatenango. Sei ore di salita con gli zaini pesanti, si parte tra i campi di mais e si arriva sopra i quattromila metri con un freddo che nessuno si aspetta ai tropici, e a metà notte il Fuego comincia a eruttare a un paio di chilometri di distanza. È faticoso al limite del divertente, ma la lista delle cose da fare in America Centrale comincia da lì.',
    esperienzeSlugs: ['trekking-acatenango'],
    tripSlugs: [],
    imageAlt: 'Strada acciottolata di Antigua Guatemala con l\'arco di Santa Catalina e un vulcano sullo sfondo',
  },
  {
    slug: 'lago-atitlan',
    paeseSlug: 'guatemala',
    ordine: 2,
    nome: 'Lago Atitlán',
    tipologia: ['natura', 'cultura'],
    giorniConsigliati: '2-4 giorni, a seconda di quanti villaggi si vogliono vedere',
    visitataPersonalmente: true,
    introduzione:
      'Un lago dentro una caldera vulcanica, circondato da tre vulcani e da una decina di villaggi maya molto diversi tra loro, collegati fra loro quasi solo via barca.',
    percheAndarci:
      'È il posto dove il Guatemala rallenta: ogni villaggio sul lago ha un carattere suo — chi ci va per lo yoga, chi per le scuole di spagnolo, chi per la vita tradizionale tzutuhil e kaqchikel — e si sceglie la base in base al ritmo che si cerca.',
    cosaVedere: [
      'Panajachel, il paese d\'arrivo e nodo dei trasporti, con la Calle Santander piena di artigianato',
      'San Juan la Laguna, il villaggio più curato, noto per le cooperative tessili e i murales',
      'San Marcos la Laguna, il polo yoga/olistico del lago, con la piattaforma dei tuffi di Cerro Tzankujil',
      'Santiago Atitlán, il villaggio più grande e tradizionale, dove si venera la figura sincretica di Maximón',
      'La Riserva Naturale Atitlán vicino a Panajachel',
    ],
    cosaFare: [
      'Giro dei villaggi in lancha (barche pubbliche condivise) — vedi la scheda esperienza dedicata',
      'Alba dall\'Indian Nose, il punto panoramico sulla caldera (partenza notturna con guida)',
      'Kayak o SUP sul lago nelle prime ore del mattino, quando l\'acqua è ferma',
      'Corso di spagnolo a San Pedro la Laguna, tra i più economici dell\'America Latina',
    ],
    doveDormire:
      'La scelta della base cambia il viaggio: Panajachel per la comodità dei trasporti, San Pedro per i prezzi bassi e la vita sociale, San Marcos per il lato tranquillo e olistico, Santa Cruz per gli hotel sull\'acqua raggiungibili solo in barca.',
    doveMangiare:
      'Sul lago si mangia bene a due condizioni: il pesce è quasi sempre tilapia d\'allevamento e non pescato locale, e i ristoranti con vista costano il doppio di quelli a un isolato dall\'acqua. San Juan la Laguna ha le cooperative di caffè che servono anche da mangiare ed è il posto più curato; a San Marcos domina la cucina vegetariana per via della comunità che ci vive. Per mangiare come i locali, il mercato di Panajachel al mattino: churrasco, tamales e caldo de pollo a pochi quetzal.',
    comeArrivare: 'Shuttle turistico da Antigua (circa 3 ore) o da Città del Guatemala; in alternativa chicken bus con cambio a Los Encuentros.',
    comeSpostarsi: 'Lance pubbliche tra i villaggi (pochi euro a tratta, partenze a riempimento fino al tramonto); tuk tuk all\'interno dei paesi.',
    periodoMigliore: 'novembre-aprile; il vento del pomeriggio (Xocomil) rende le traversate più mosse dopo mezzogiorno in ogni stagione',
    costi: 'lance 10-25 GTQ a tratta secondo la distanza; alloggi tra i più economici del paese',
    erroriDaEvitare: [
      'Programmare le traversate nel pomeriggio: il vento Xocomil si alza quasi ogni giorno e rende la navigazione scomoda',
      'Fermarsi solo a Panajachel: è il nodo dei trasporti, non il villaggio più interessante del lago',
      'Salire all\'Indian Nose senza guida al buio',
    ],
    miaEsperienza:
      'L\'errore che fanno quasi tutti è fermarsi a Panajachel, che è un nodo di trasporti con una via di negozi e basta. Il lago comincia quando si sale su una lancia e si cambia sponda: dieci minuti di barca e si passa dallo yoga e dai caffè vegani di San Marcos alla vita completamente tradizionale di Santiago, dove le donne portano ancora il tocoyal avvolto in testa e nessuno si accorge di chi arriva. Da sapere prima: nel pomeriggio si alza lo Xocomil, un vento che rende le traversate scomode e a volte le sospende — chi deve prendere un bus il giorno dopo faccia i conti con questo. E l\'alba dall\'Indian Nose vale la sveglia alle quattro solo con cielo sereno: nella stagione delle piogge si sale al buio per guardare una nuvola.',
    esperienzeSlugs: ['lance-villaggi-atitlan'],
    tripSlugs: [],
    imageAlt: 'Il lago Atitlán con i vulcani sullo sfondo e una barca in primo piano, Guatemala',
  },
  {
    slug: 'tikal-flores',
    paeseSlug: 'guatemala',
    ordine: 3,
    nome: 'Tikal e Flores',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 giorni, di cui uno intero dedicato a Tikal',
    visitataPersonalmente: true,
    introduzione:
      'Il più imponente sito maya del Guatemala, nella giungla del Petén: templi che superano i 60 metri e spuntano sopra la volta della foresta, con scimmie urlatrici e tucani come colonna sonora. Si visita usando come base l\'isola di Flores, sul lago Petén Itzá.',
    percheAndarci:
      'A differenza di altri siti maya, Tikal è immerso in una foresta viva: la fauna fa parte della visita tanto quanto le piramidi, e la vista dal Tempio IV sopra la giungla è una delle più celebri della Mesoamerica.',
    cosaVedere: [
      'La Gran Plaza con i Templi I (del Gran Giaguaro) e II',
      'Il Tempio IV, il più alto del sito, con la piattaforma panoramica sopra la foresta',
      'Il Mundo Perdido, il complesso più antico del sito',
      'L\'isola di Flores, con le sue case colorate e il lungolago',
      'Il sito minore di Yaxhá, ottimo per il tramonto e molto meno affollato',
    ],
    cosaFare: [
      'Visita all\'alba di Tikal, con biglietto speciale per l\'ingresso anticipato — vedi la scheda esperienza dedicata',
      'Giro in barca sul lago Petén Itzá al tramonto',
      'Escursione a Yaxhá, raggiungibile in giornata da Flores',
    ],
    doveDormire:
      'Flores (isola) per l\'atmosfera e i collegamenti; El Remate come alternativa più tranquilla a metà strada verso Tikal; esistono anche pochi hotel dentro il parco, comodi per essere ai cancelli all\'apertura.',
    doveMangiare:
      'Nel Petén compaiono cose che nel resto del Guatemala non ci sono: il pesce bianco del lago Petén Itzá, alla griglia, e piatti a base di carne di selvaggina nei locali più tradizionali. Sull\'isola di Flores i ristoranti sul lungolago hanno il tramonto e prezzi da turista; le strade interne, un isolato più su, hanno le comedor dove si mangia con un terzo. Dentro il parco di Tikal l\'offerta si riduce a poco e caro: conviene portarsi pranzo e soprattutto molta acqua.',
    comeArrivare:
      'Volo interno da Città del Guatemala a Flores (circa 1 ora, la soluzione più rapida) oppure bus notturno (8-10 ore). Da Flores al parco, circa 1h30 di navetta.',
    comeSpostarsi: 'Navette organizzate Flores-Tikal (partenze molto presto per l\'alba); all\'interno del sito ci si muove solo a piedi, su diversi chilometri di sentieri.',
    periodoMigliore: 'novembre-aprile per i sentieri asciutti; la nebbia mattutina in stagione secca può però coprire il panorama dal Tempio IV',
    costi: 'ingresso al parco circa 150 GTQ, supplemento per l\'ingresso all\'alba e guida obbligatoria in quella fascia oraria',
    erroriDaEvitare: [
      'Comprare il biglietto per l\'alba aspettandosi un\'alba garantita: nella stagione secca la foschia sopra la giungla è frequente',
      'Sottovalutare le distanze dentro il sito: si camminano diversi chilometri con caldo e umidità alti',
      'Programmare Tikal come gita in giornata da Antigua: la distanza richiede volo o bus notturno',
    ],
    miaEsperienza:
      'Tikal batte gli altri siti maya per una ragione che le foto non rendono: la foresta non è stata tolta. Si cammina per chilometri sotto la volta degli alberi sentendo le scimmie urlatrici — un rumore che la prima volta sembra un animale molto più grande — e i templi compaiono uno alla volta invece di essere tutti allineati in una spianata. Il biglietto per l\'alba va comprato sapendo cosa si compra: nella stagione secca la foschia sopra la giungla è frequente e dal Tempio IV si vede il bianco. Ma anche con la nebbia, essere lassù prima che arrivino i pullman è l\'unico modo di sentire il posto. Flores è un\'isoletta carina da una sera, non di più: serve come base, non come meta.',
    esperienzeSlugs: ['alba-tikal'],
    tripSlugs: [],
    imageAlt: 'Il Tempio I di Tikal che emerge dalla giungla del Petén, Guatemala',
  },
  {
    slug: 'semuc-champey',
    paeseSlug: 'guatemala',
    ordine: 4,
    nome: 'Semuc Champey',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '2 giorni, considerando i lunghi trasferimenti',
    visitataPersonalmente: true,
    introduzione:
      'Una scalinata naturale di piscine turchesi di acqua calcarea, costruita su un ponte di roccia sotto il quale il fiume Cahabón scorre incassato. Si trova in una valle remota della regione di Alta Verapaz, vicino al villaggio di Lanquín.',
    percheAndarci:
      'È il posto più fotografato della natura guatemalteca, e resta abbastanza fuori mano da non essere mai davvero affollato: la strada per arrivarci è parte dell\'esperienza.',
    cosaVedere: [
      'Le piscine naturali a gradoni di Semuc Champey',
      'Il Mirador, punto panoramico dall\'alto sulle piscine (salita ripida di circa 30-45 minuti)',
      'Il punto in cui il fiume Cahabón si infila sotto il ponte di roccia',
      'Le grotte di K\'anba, percorribili a lume di candela',
    ],
    cosaFare: [
      'Bagno nelle piscine naturali, con il percorso dal basso verso l\'alto',
      'Grotte di K\'anba con candela in mano, tratti a nuoto inclusi',
      'Tubing sul fiume Cahabón',
    ],
    doveDormire: 'Lanquín (più servizi e collegamenti) oppure gli hostel lungo la strada sterrata verso Semuc, più vicini all\'ingresso ma isolati.',
    doveMangiare:
      'Non c\'è scelta e va messo in conto: a Lanquín e lungo la sterrata verso il parco si mangia negli hostel, con menu fissi serali, oppure nelle poche comedor del paese. All\'ingresso di Semuc alcune famiglie vendono pollo alla griglia e tortillas fatte al momento, che è la cosa migliore della zona. Acqua e snack vanno comprati prima: dentro il parco non si trova niente.',
    comeArrivare:
      'Shuttle turistico da Antigua, Città del Guatemala o Flores: 8-10 ore, con l\'ultimo tratto su strada sterrata molto lenta. È il trasferimento più impegnativo di un giro classico in Guatemala.',
    comeSpostarsi: 'Dal paese all\'ingresso del parco si viaggia sul cassone dei pick-up collettivi, circa 30-45 minuti.',
    periodoMigliore: 'stagione secca per l\'acqua più turchese: dopo le piogge il colore vira al verde torbido',
    costi: 'ingresso al parco circa 50 GTQ; tour combinato grotte + tubing + ingresso sui 150-250 GTQ',
    erroriDaEvitare: [
      'Programmarlo come tappa "di passaggio": i trasferimenti da e per Lanquín sono lunghi e faticosi, va messo in conto un giorno pieno per lato',
      'Andarci subito dopo giorni di pioggia intensa, quando le piscine perdono il colore turchese',
    ],
    miaEsperienza:
      'Il viaggio per arrivarci è metà del racconto: otto-dieci ore di shuttle, di cui le ultime su una sterrata che scende nella valle a passo d\'uomo, con lo zaino che rimbalza e la sensazione precisa di essersi allontanati parecchio da tutto. Poi ci si arriva, e le piscine sono davvero quelle delle fotografie. La salita al Mirador è ripida e in mezz\'ora si è fradici di sudore, ma senza quella vista dall\'alto non si capisce come funziona il posto — il fiume che sparisce sotto il ponte di roccia e riemerge trecento metri più in là. Le grotte di K\'anba, con una candela in mano e tratti da fare a nuoto al buio, sono la cosa meno turistica e più memorabile della zona: chi soffre di claustrofobia le salti senza rimpianti.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Le piscine naturali turchesi a gradoni di Semuc Champey, Guatemala',
  },
  {
    slug: 'chichicastenango',
    paeseSlug: 'guatemala',
    ordine: 5,
    nome: 'Chichicastenango',
    tipologia: ['cultura', 'mercati'],
    giorniConsigliati: 'mezza giornata, in giornata da Antigua o dal lago Atitlán',
    visitataPersonalmente: true,
    introduzione:
      'Il mercato indigeno più grande dell\'America Centrale, che il giovedì e la domenica riempie l\'intero centro del paese: tessuti, maschere, ceramiche, fiori e generi alimentari.',
    percheAndarci:
      'Oltre al mercato, è uno dei posti dove il sincretismo maya-cattolico è più visibile: sulla scalinata della chiesa di Santo Tomás si bruciano ancora copale e offerte secondo i riti k\'iche\'.',
    cosaVedere: [
      'Il mercato, con la parte artigianale nella piazza principale e quella alimentare nelle vie laterali',
      'La chiesa di Santo Tomás e la sua scalinata, dove si celebrano riti maya',
      'Il cimitero dalle tombe coloratissime, poco fuori dal centro',
    ],
    cosaFare: [
      'Contrattare tessuti e huipiles al mercato (la trattativa è la norma, non un\'eccezione)',
      'Assistere ai riti sulla scalinata di Santo Tomás, con rispetto e senza fotografare le persone senza permesso',
    ],
    doveDormire: 'La maggior parte dei visitatori arriva in giornata; per essere al mercato all\'apertura conviene però dormire in paese la sera prima.',
    doveMangiare:
      'Nei giorni di mercato il posto giusto è il mercato stesso: la sezione alimentare nelle vie laterali, dove si mangia in piedi ai banchi con i venditori — tamales avvolti nella foglia, chuchitos, caldo, tortillas fatte al momento. I ristoranti attorno alla piazza servono la stessa cosa al triplo del prezzo. Fuori dai giorni di mercato le opzioni sono poche e ordinarie.',
    comeArrivare: 'Shuttle turistico da Antigua (circa 3 ore) o da Panajachel (circa 1h30), con partenze concentrate nei giorni di mercato.',
    comeSpostarsi: 'Tutto a piedi, il paese è piccolo.',
    periodoMigliore: 'solo giovedì e domenica, i giorni di mercato; arrivare presto al mattino per la parte più autentica',
    costi: 'nessun ingresso; il costo è quello che si spende contrattando',
    erroriDaEvitare: [
      'Arrivare in un giorno diverso da giovedì o domenica: fuori dai giorni di mercato il paese è tranquillo e poco interessante',
      'Fotografare persone o riti senza chiedere il permesso: qui è una questione di rispetto, non di folklore',
    ],
    miaEsperienza:
      'Il mercato è enorme e nelle prime due ore è ancora di chi ci lavora: dopo, verso metà mattina, arrivano gli shuttle e la parte artigianale diventa un mercato per stranieri, con gli stessi tessuti ripetuti banco dopo banco. La parte che vale è quella alimentare nelle vie laterali, dove si compra e si vende sul serio. Ma la cosa che resta non è la merce: è la scalinata di Santo Tomás, dove si bruciano copale e offerte secondo riti k\'iche\' sui gradini di una chiesa cattolica, con il fumo che copre tutto. Non è folklore per visitatori e non va fotografato come tale: si sta a guardare da un lato, e si capisce più di quanto spieghi qualsiasi museo. Mezza giornata basta, ma solo giovedì o domenica.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Bancarelle di tessuti colorati al mercato di Chichicastenango, Guatemala',
  },
]
