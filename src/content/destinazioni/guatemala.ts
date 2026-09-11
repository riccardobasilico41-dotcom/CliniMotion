import type { Destinazione } from '@/lib/types'

// Paese visitato di persona, ma senza ancora un racconto scritto: per questo
// miaEsperienza resta assente (la UI mostra il placeholder editoriale invece
// di inventare un ricordo) e il contenuto qui sotto è guida pratica generale.
// Ricordi e giudizi personali vanno aggiunti in un secondo momento.

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
    doveMangiare: 'da completare',
    comeArrivare: 'Volo su Città del Guatemala (GUA), poi circa 1 ora di shuttle o taxi privato fino ad Antigua.',
    comeSpostarsi: 'Il centro si gira interamente a piedi; per le altre tappe del paese partono shuttle turistici prenotabili in qualsiasi agenzia del centro.',
    periodoMigliore: 'novembre-aprile; la Semana Santa (marzo-aprile) porta le processioni più famose dell\'America Latina, con prezzi e affollamento ben più alti',
    costi: 'tra le città più care del Guatemala ma comunque economica per standard europei; il trekking all\'Acatenango parte da circa 60€ con l\'attrezzatura inclusa',
    erroriDaEvitare: [
      'Salire al Cerro de la Cruz da soli e fuori dagli orari di presidio della polizia turistica',
      'Sottovalutare il freddo notturno al campo dell\'Acatenango (quasi 4.000 m): servono strati veri, non solo una felpa',
    ],
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
    doveMangiare: 'da completare',
    comeArrivare: 'Shuttle turistico da Antigua (circa 3 ore) o da Città del Guatemala; in alternativa chicken bus con cambio a Los Encuentros.',
    comeSpostarsi: 'Lance pubbliche tra i villaggi (pochi euro a tratta, partenze a riempimento fino al tramonto); tuk tuk all\'interno dei paesi.',
    periodoMigliore: 'novembre-aprile; il vento del pomeriggio (Xocomil) rende le traversate più mosse dopo mezzogiorno in ogni stagione',
    costi: 'lance 10-25 GTQ a tratta secondo la distanza; alloggi tra i più economici del paese',
    erroriDaEvitare: [
      'Programmare le traversate nel pomeriggio: il vento Xocomil si alza quasi ogni giorno e rende la navigazione scomoda',
      'Fermarsi solo a Panajachel: è il nodo dei trasporti, non il villaggio più interessante del lago',
      'Salire all\'Indian Nose senza guida al buio',
    ],
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
    doveMangiare: 'da completare',
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
    doveMangiare: 'da completare',
    comeArrivare:
      'Shuttle turistico da Antigua, Città del Guatemala o Flores: 8-10 ore, con l\'ultimo tratto su strada sterrata molto lenta. È il trasferimento più impegnativo di un giro classico in Guatemala.',
    comeSpostarsi: 'Dal paese all\'ingresso del parco si viaggia sul cassone dei pick-up collettivi, circa 30-45 minuti.',
    periodoMigliore: 'stagione secca per l\'acqua più turchese: dopo le piogge il colore vira al verde torbido',
    costi: 'ingresso al parco circa 50 GTQ; tour combinato grotte + tubing + ingresso sui 150-250 GTQ',
    erroriDaEvitare: [
      'Programmarlo come tappa "di passaggio": i trasferimenti da e per Lanquín sono lunghi e faticosi, va messo in conto un giorno pieno per lato',
      'Andarci subito dopo giorni di pioggia intensa, quando le piscine perdono il colore turchese',
    ],
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
    doveMangiare: 'da completare',
    comeArrivare: 'Shuttle turistico da Antigua (circa 3 ore) o da Panajachel (circa 1h30), con partenze concentrate nei giorni di mercato.',
    comeSpostarsi: 'Tutto a piedi, il paese è piccolo.',
    periodoMigliore: 'solo giovedì e domenica, i giorni di mercato; arrivare presto al mattino per la parte più autentica',
    costi: 'nessun ingresso; il costo è quello che si spende contrattando',
    erroriDaEvitare: [
      'Arrivare in un giorno diverso da giovedì o domenica: fuori dai giorni di mercato il paese è tranquillo e poco interessante',
      'Fotografare persone o riti senza chiedere il permesso: qui è una questione di rispetto, non di folklore',
    ],
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Bancarelle di tessuti colorati al mercato di Chichicastenango, Guatemala',
  },
]
