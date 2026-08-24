import type { Destinazione } from '@/lib/types'

// Contenuto riutilizzato dal viaggio "Messico Beach Life" (src/content/viaggi/13-messico-beach-life.md).
// Dove un dato non è nel diario originale, il campo resta vuoto o con una nota
// esplicita "da confermare/da completare" — nessun fatto inventato.

export const destinazioniMessico: Destinazione[] = [
  {
    slug: 'cancun',
    paeseSlug: 'messico',
    ordine: 1,
    nome: 'Cancún',
    tipologia: ['mare', 'nightlife', 'cultura'],
    giorniConsigliati: '1-2 giorni, meglio se spezzati tra andata e ritorno',
    visitataPersonalmente: true,
    introduzione:
      'Il punto di ingresso e di uscita di quasi ogni viaggio nello Yucatán: aeroporto internazionale, terminal ADO comodo per gli spostamenti via bus, spiagge cittadine raggiungibili senza auto.',
    percheAndarci:
      'Come base per aggiustare il fuso e organizzare i primi acquisti (SIM, contanti), e come ultima tappa per un pomeriggio di spiaggia libera prima del rientro.',
    cosaVedere: ['Playa Marlin', 'Playa Gaviota', 'Parque las Palapas', 'Mercado 28'],
    cosaFare: [
      'Giornata di spiaggia raggiungendo Playa Marlin o Playa Gaviota con il bus locale R1 (gratuite, niente lettini a pagamento come nella zona Hotelera)',
      'Isla Mujeres in autonomia: traghetto da Puerto Juárez o Playa Tortugas (circa 540 MXN a/r), poi si gira noleggiando un golf cart (1.300-1.500 MXN per 4 persone) — oppure in giornata organizzata in catamarano, più caro ma con soste snorkeling incluse',
      'Isla Contoy + Isla Mujeres in tour organizzato di un\'intera giornata: riserva naturale con ingressi contingentati a 200 persone al giorno, indicativamente 80-100€ a persona',
      'Aperitivo e street food serale a Parque las Palapas',
      'Spiaggia libera davanti al Coco Bongo e, in alta stagione, il Coco Bongo Beach Party nel pomeriggio',
    ],
    doveDormire:
      'Ho dormito all\'Hostel Selina Cancún Downtown, a circa 200 metri dal terminal ADO: pulito, con colazione inclusa a bordo piscina.',
    doveMangiare:
      'Budget/local: bancarelle e street food a Parque las Palapas (il mio punto fisso per le prime sere), oppure El Socio Naiz o Taqueria Coapenitos per un pasto messicano genuino a prezzi bassi. Fascia media: a la Parrilla, turistico ma piacevole e con conto individuale (occhio al servizio automatico che spesso si applica oltre le 10 persone al tavolo), o Señor Frog, più indicato a pranzo per i suoi giochi alcolici. Per una cena più curata: Naviós Mexican Fusion Seafood, sull\'acqua nella zona Hotelera con vista sui coccodrilli (prezzo medio-alto), o Chambao, il più caro della lista (60€+ a persona) ma con un pescato molto buono.',
    usciteSerali:
      'Il grande classico è il Coco Bongo, discoteca-spettacolo nella zona Hotelera — meglio prendere i biglietti in prevendita, soprattutto nei weekend di alta stagione. Le alternative più economiche sono Mandala (ingresso indicativo intorno ai 20€) e Monkey Business, che unisce cena e serata (spesso richiede di mostrare il badge dell\'hotel/tour all\'ingresso).',
    comeArrivare: 'Aeroporto internazionale di Cancún, il principale hub della zona; bus ADO o Uber per il centro.',
    comeSpostarsi: 'Bus locali (linea R1 rossa) per le spiagge, taxi/Uber per il resto della città.',
    periodoMigliore: 'da confermare',
    costi: 'Città cara, con prezzi vicini a quelli europei rispetto al resto dell\'itinerario.',
    erroriDaEvitare: [
      'Non cambiare/prelevare abbastanza contanti nei primi due giorni: costringe a continui stop nelle tappe successive',
      'Aspettarsi il mare da cartolina della Riviera Maya: le spiagge cittadine sono buone ma diverse da Tulum o Holbox',
    ],
    miaEsperienza:
      'Cancún l\'ho vissuta soprattutto come base pratica: primo assaggio del Messico con lo street food di Parque las Palapas, e ultima giornata libera in spiaggia prima del volo di rientro. Non è la tappa più memorabile del viaggio, ma funziona bene su entrambi i lati dell\'itinerario.',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Spiaggia bianca e mare turchese della zona hotelera di Cancún',
  },
  {
    slug: 'valladolid',
    paeseSlug: 'messico',
    ordine: 2,
    nome: 'Valladolid',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '1 notte, anche solo di passaggio verso Mérida',
    visitataPersonalmente: true,
    introduzione:
      'Cittadina coloniale tranquilla nel cuore dello Yucatán, base comoda per Río Lagartos, Ek Balam e i primi cenote del viaggio.',
    percheAndarci:
      'È la tappa che rompe il ritmo costa-entroterra: centro storico piacevole da girare a piedi la sera, e punto di partenza per una delle combo migliori dell\'itinerario, Ek Balam più il cenote Xcanché.',
    cosaVedere: ['Centro storico coloniale', 'Sito archeologico di Ek Balam'],
    cosaFare: ['Passeggiata serale in centro', 'Bagno al cenote Xcanché'],
    doveDormire: 'Ho dormito all\'Hotel Waye, a pochi passi dalla piazza principale.',
    doveMangiare:
      'Non ho annotato nomi di ristoranti specifici — il centro storico intorno alla piazza principale è pieno di cantinas e loncherías tipiche yucateche a prezzi bassi, tutte raggiungibili a piedi dall\'hotel. Buon posto anche solo per improvvisare, senza bisogno di prenotare.',
    comeArrivare: 'Via van/auto da Cancún (circa 2-2h30), spesso con tappa a Río Lagartos lungo il tragitto.',
    comeSpostarsi: 'Centro storico compatto, si gira comodamente a piedi.',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [
      'Sottovalutare Ek Balam solo perché meno famoso di Chichén Itzá: è molto meno affollato, e il cenote Xcanché lì accanto è una combo perfetta',
    ],
    miaEsperienza:
      'Valladolid è stata una sosta breve ma piacevole: città molto tranquilla, ottima per una passeggiata serale dopo una giornata intensa tra Río Lagartos, Ek Balam e il cenote Xcanché.',
    esperienzeSlugs: ['rio-lagartos', 'ek-balam-cenote-xcanche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Facciata colorata in stile coloniale nel centro di Valladolid, Yucatán',
  },
  {
    slug: 'merida',
    paeseSlug: 'messico',
    ordine: 3,
    nome: 'Mérida',
    tipologia: ['cultura', 'nightlife', 'natura'],
    giorniConsigliati: '2 giorni, comoda anche come pausa a metà viaggio',
    visitataPersonalmente: true,
    introduzione:
      'Il capoluogo dello Yucatán: centro storico coloniale, buona vita notturna, e una gita di mare/curiosità (Playa Progreso e il "pig beach") a mezz\'ora di strada.',
    percheAndarci:
      'Mix di cultura, shopping locale e una giornata via dal ritmo archeologico del resto del viaggio; buon punto per riorganizzare i bagagli grazie al servizio lavanderia in hotel.',
    cosaVedere: ['Centro storico coloniale', 'Mercado municipal', 'Playa Progreso e il museo del meteorite'],
    cosaFare: [
      'Giornata a Playa Progreso',
      'Bagno con i maialini a "pig beach" (Playa de los Cerditos), poco battuta rispetto al resto del programma',
      'Shopping al mercado municipal',
      'Serata tra La Negrita e la Mezcalería',
    ],
    doveDormire: 'Ho dormito all\'Ontico Urban Design Hotel, nel centro storico.',
    doveMangiare:
      'Cena alla Mezcalería, locale molto grande e informale dove non serve prenotare. Il centro storico e il mercado municipal offrono comunque moltissime opzioni economiche/local per pranzo, tipiche della cucina yucateca (cochinita pibil, panuchos, sopa de lima).',
    usciteSerali:
      'Drink a La Negrita prima di cena (chiude presto, verso le 22: meglio prenotare per tempo se si vuole viverla con calma). Oltre a La Negrita e alla Mezcalería, il Paseo de Montejo è la strada di riferimento per bar e locali serali in centro.',
    comeArrivare: 'Via van/auto da Valladolid (circa 1h30-2h), passando per Chichén Itzá e Izamal.',
    comeSpostarsi: 'Centro storico a piedi; per Playa Progreso serve un trasferimento in auto/van (circa 30-40 minuti).',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [
      'La Negrita chiude presto (verso le 22): prenotare per tempo se la si vuole vivere prima di spostarsi altrove',
    ],
    miaEsperienza:
      'Mérida è stata la pausa giusta a metà viaggio: una giornata senza transfer, tra Playa Progreso e il pig beach, più una serata di vita notturna vera nel centro storico.',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Piazza coloniale nel centro storico di Mérida, Yucatán',
  },
  {
    slug: 'campeche',
    paeseSlug: 'messico',
    ordine: 4,
    nome: 'Campeche',
    tipologia: ['cultura'],
    giorniConsigliati: '1 notte, comoda tappa di passaggio',
    visitataPersonalmente: true,
    introduzione:
      'Città coloniale fortificata sul Golfo del Messico, Patrimonio UNESCO, decisamente meno turistica delle altre tappe dell\'itinerario.',
    percheAndarci:
      'Centro storico ben tenuto e tranquillo, buona base prima del transfer più lungo di tutto il viaggio verso Mahahual.',
    cosaVedere: ['Piazza della Cattedrale', 'Puerta del Mar e il lungomare', 'Centro storico fortificato'],
    cosaFare: ['Passeggiata a piedi dalla Cattedrale al lungomare, attraverso la Puerta del Mar'],
    doveDormire: 'Ho dormito all\'Hotel Francis Drake, nel centro storico.',
    doveMangiare:
      'Non ho annotato ristoranti specifici — il centro storico fortificato ha diverse opzioni lungo le vie principali vicino alla Cattedrale, comode per una cena veloce prima del transfer lungo del giorno dopo verso Mahahual.',
    comeArrivare: 'Via van/auto da Mérida, con tappe a Uxmal, Becal e Pomuch lungo il tragitto.',
    comeSpostarsi: 'Centro storico compatto, si gira a piedi.',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [
      'Il giorno dopo verso Mahahual è un transfer molto lungo con cambio di fuso orario: partire il prima possibile in mattinata',
    ],
    miaEsperienza:
      'Una tappa breve ma piacevole: la Piazza della Cattedrale è curatissima, con i tipici lustrascarpe, e la passeggiata fino al lungomare attraverso la Puerta del Mar è un bel modo per sgranchirsi dopo ore di van.',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Mura coloniali colorate del centro storico di Campeche',
  },
  {
    slug: 'mahahual',
    paeseSlug: 'messico',
    ordine: 5,
    nome: 'Mahahual',
    tipologia: ['mare', 'natura'],
    giorniConsigliati: '1-2 notti',
    visitataPersonalmente: true,
    introduzione:
      'Cittadina costiera sul Mar dei Caraibi, molto più tranquilla di Tulum o Playa del Carmen, base per lo snorkeling con le tartarughe e il secondo Temazcal del viaggio.',
    percheAndarci: 'Mare tranquillo e punto di appoggio comodo per la gita in barca a Bacalar.',
    cosaVedere: ['Lungomare di Mahahual'],
    cosaFare: ['Snorkeling con le tartarughe', 'Temazcal serale nella selva'],
    doveDormire: 'Nome della struttura da confermare.',
    doveMangiare: 'da completare',
    comeArrivare: 'Il transfer più lungo di tutto l\'itinerario, da Campeche, con cambio di fuso orario incluso.',
    comeSpostarsi: 'da completare',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [
      'Giornata di arrivo a ritmi serrati: la puntualità sulle tappe precedenti (in particolare Balam Ku) condiziona tutto il resto della giornata',
    ],
    miaEsperienza:
      'Sono arrivato a Mahahual in serata dopo il transfer più lungo del viaggio. Il giorno dopo è stato tra i più densi di tutto l\'itinerario, tra Bacalar, lo snorkeling con le tartarughe e il Temazcal — vedi la pagina del viaggio per il dettaglio.',
    esperienzeSlugs: ['snorkeling-tartarughe-mahahual', 'temazcal'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Lungomare tranquillo di Mahahual sul Mar dei Caraibi',
  },
  {
    slug: 'bacalar',
    paeseSlug: 'messico',
    ordine: 6,
    nome: 'Bacalar',
    tipologia: ['natura'],
    giorniConsigliati: 'mezza giornata se in tour da Mahahual, 1-2 notti per goderla con calma',
    visitataPersonalmente: true,
    introduzione:
      'La "laguna dai sette colori": una delle distese d\'acqua più belle dello Yucatán, visitabile in giornata da Mahahual o come tappa a sé con pernottamento.',
    percheAndarci: 'Colori dell\'acqua che cambiano davvero a seconda della profondità, tour in barca e kayak.',
    cosaVedere: ['Laguna di Bacalar'],
    cosaFare: ['Tour in barca di 2 ore sulla laguna', 'Kayak (incluso dopo il tour in barca nel mio caso)'],
    doveDormire: 'Non ho pernottato a Bacalar (visitata in giornata da Mahahual) — struttura da confermare per chi vuole fermarsi una notte.',
    doveMangiare: 'da completare',
    comeArrivare: 'In tour organizzato da Mahahual, oppure via van/auto in autonomia.',
    comeSpostarsi: 'da completare',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [
      'Vederla solo in tour da Mahahual lascia poco tempo: chi può, valuti una notte in loco per goderla con più calma',
    ],
    miaEsperienza:
      'L\'ho vista solo in giornata, con un tour in barca di 2 ore e un\'ora di kayak — bellissima, ma il tempo stretto si è sentito. Una delle tappe che ripenserei con più calma in un prossimo giro.',
    esperienzeSlugs: ['tour-barca-bacalar'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Acque turchesi e blu della laguna di Bacalar dall\'alto',
  },
  {
    slug: 'tulum',
    paeseSlug: 'messico',
    ordine: 7,
    nome: 'Tulum',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Rovine maya sospese su una scogliera a picco sul Caribe, spiagge tra le più belle di tutta la Riviera Maya, e una vita notturna che si fa sentire.',
    percheAndarci: 'Combo di cultura (il sito archeologico), mare (Playa Paraíso) e serate — difficile trovarla altrove in un\'unica tappa.',
    cosaVedere: ['Sito archeologico di Tulum, sulla scogliera', 'Caleta Tankah', 'Playa Paraíso', 'Cenote vicino a Dos Ojos, nel sistema Sac Actun'],
    cosaFare: [
      'Sito archeologico di Tulum in mattinata, prima del caldo peggiore — l\'unico sito maya del Messico affacciato direttamente sul mare',
      'Giornata a Caleta Tankah (300 MXN a persona, no carte — nessun rimborso, nemmeno uscendo dopo pochi minuti)',
      'Pranzo e pomeriggio a Playa Paraíso, uno dei beach club più consigliati della zona (lettini a pagamento)',
      'Bagno in un cenote della zona di Dos Ojos/Sac Actun — stile grotta con stalattiti, diverso dai cenote a cielo aperto dello Yucatán',
      'Per chi ha più tempo: Xcacel (100 MXN, vietato portare cibo/alcolici/speaker, aperta 10-16 chiusa il lunedì, da aprile a ottobre possibile vedere la schiusa delle tartarughe), oppure Gran Cenote o Cenote Calavera',
    ],
    doveDormire: 'Nome della struttura da confermare.',
    doveMangiare:
      'Sabor de Mar per il pesce, El Takazo Jr per tacos local a poco prezzo, Bonita (Tulum Burger Bar) se si cerca qualcosa di diverso dal messicano. Per un\'esperienza più ricercata: TuTulum, cucina messicana rivisitata (circa 40€ a persona), con qualche piatto a base di insetti per i più curiosi.',
    usciteSerali:
      'Lo Straw Hat è il locale più gettonato per la serata; se il periodo coincide con l\'inverno può capitare qualche festival organizzato in zona. Vagalume è un\'altra opzione per chi cerca musica dal vivo.',
    comeArrivare: 'Via van/auto da Mahahual (circa 2-3 ore).',
    comeSpostarsi: 'da completare',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [
      'A Caleta Tankah non c\'è rimborso in nessun caso, nemmeno dopo pochi minuti dentro: valutare bene prima di pagare l\'ingresso',
    ],
    miaEsperienza:
      'A Caleta Tankah il mare all\'inizio non era invitante — poi è uscito il sole e la giornata è cambiata completamente, cenote incluso. Il sito archeologico sulla scogliera e Playa Paraíso restano tra i ricordi più forti di tutto il viaggio.',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Gruppo in muta ed equipaggiamento da snorkeling in un cenote in grotta vicino a Dos Ojos, Tulum',
    immagine: '/images/messico/cenote-dos-ojos-gruppo.jpg',
  },
  {
    slug: 'playa-del-carmen',
    paeseSlug: 'messico',
    ordine: 8,
    nome: 'Playa del Carmen',
    tipologia: ['nightlife', 'mare'],
    giorniConsigliati: '1 serata nell\'itinerario provato, ma si può restare 1-2 giorni pieni',
    visitataPersonalmente: true,
    introduzione: 'La città più mondana della Riviera Maya, e il punto di partenza classico per l\'escursione a Cozumel.',
    percheAndarci: 'Vita notturna e, per chi ha un giorno in più, la seconda barriera corallina più grande al mondo a Cozumel.',
    cosaVedere: ['5ta Avenida'],
    cosaFare: [
      'Escursione a Cozumel in catamarano condiviso (circa 1.670 MXN a persona: include traghetto a/r, 4 ore di navigazione con soste snorkeling a Palancar/El Cielo/El Cielito, open bar e pranzo a buffet a Playa Mia) oppure in barca privata (circa 700 MXN a persona, traghetto escluso — circa 580 MXN a/r a parte — ma con snack e 2 birre a persona incluse). Non fatta in questo viaggio, ma consigliata con più tempo a disposizione.',
      'Giornata alle spiagge pubbliche: Mamitas Beach, Playacar Beach, Parque Fundadores',
      'Shopping sulla 5ta Avenida',
      'Serata al Clandestino',
    ],
    doveDormire: 'Non ho pernottato a Playa del Carmen in questo viaggio, solo una serata — struttura da confermare.',
    doveMangiare:
      'Las Camelias sulla 5ta Avenida per un pasto solido, Zitla come alternativa. Per un\'occasione più speciale, Mezcla (circa 50€ a persona) — caro ma molto buono.',
    usciteSerali:
      'Il Coco Bongo (stessa catena di Cancún) è la scelta più nota, ma anche Clandestino e Santino sono locali frequentati per la serata sulla 5ta Avenida.',
    comeArrivare: 'Via van/auto da Tulum (circa 1 ora).',
    comeSpostarsi: 'da completare',
    periodoMigliore: 'da confermare',
    costi: 'da completare',
    erroriDaEvitare: [],
    miaEsperienza:
      'L\'ho vissuta solo di sera, con una tappa al Clandestino — non abbastanza per farmi un\'idea completa della città, che meriterebbe più tempo (magari con l\'escursione a Cozumel, che nel mio viaggio non abbiamo fatto).',
    esperienzeSlugs: [],
    tripSlugs: ['messico-beach-life'],
    imageAlt: '5ta Avenida illuminata di sera a Playa del Carmen',
  },
  {
    slug: 'holbox',
    paeseSlug: 'messico',
    ordine: 9,
    nome: 'Holbox',
    tipologia: ['mare', 'natura', 'nightlife'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Isola senza auto sul Golfo del Messico, raggiungibile solo in traghetto: squalo balena, bioluminescenza e un ritmo decisamente più lento del resto del viaggio.',
    percheAndarci: 'Il momento clou di tutto l\'itinerario — sia per l\'esperienza con lo squalo balena, sia per l\'atmosfera dell\'isola.',
    cosaVedere: ['Punta Mosquito', 'Il centro dell\'isola, senza auto'],
    cosaFare: [
      'Escursione con lo squalo balena — vedi la scheda esperienza dedicata',
      'Bioluminescenza a Punta Mosquito: in autonomia con un "carrito" (taxi locale/golf cart) fino al punto, a piedi (sconsigliato — circa un\'ora di cammino per direzione, quasi tutta al buio), in kayak con guida (500 MXN a persona per gruppi sopra le 8 persone, 400 MXN sotto le 8) o con un tour organizzato in barca. Periodo migliore da aprile a novembre, dipende da fasi lunari e meteo — meglio chiedere conferma in loco lo stesso giorno.',
      'Tour delle 3 Islas (Isla Pájaros, cenote di Yalahau, Isla Pasión o Punta Mosquito): tour condiviso in barca di circa 3 ore, 750-900 MXN a persona a seconda dell\'operatore (alcuni includono il transfer dall\'hotel per circa 1.100 MXN); l\'ingresso al cenote Yalahau si paga a parte, circa 200 MXN. Si vedono fenicotteri, delfini e diverse specie di uccelli.',
      'Cabo Catoche (non fatta nel mio viaggio, ma è tra le escursioni più proposte sull\'isola): la punta più a nord dello Yucatán, dove si incontrano Golfo del Messico e Mar dei Caraibi. Tour condiviso in barca dalla mattina al tardo pomeriggio, con snorkeling su una barriera corallina bassa (circa 2 metri — tartarughe, polpi, aragoste e a volte squali nutrice innocui), pesca e ceviche fresco preparato sul momento. Indicativamente 80-100$ a persona per un tour condiviso; conviene confrontare più operatori prima di prenotare.',
      'Passeggiata a cavallo sulla spiaggia: 850 MXN a persona per un\'ora e mezza',
      'Beach club con minimum spending (di solito scalato dal conto finale): Carolinda, Zomay, Barbarossa, Amaite Beach Club',
      'Se piove: cooking class alla Puerta Rosa (abbastanza cara, ma buona alternativa) o lezione di yoga',
    ],
    doveDormire: 'Nome della struttura da confermare.',
    doveMangiare:
      'Budget/local: Taco Queto per tacos economici e genuini, El Crustaceo Kascarudo per pesce/marisco senza fronzoli. Fascia media: Mandarina, Posada Mawimbi, Viva Zapata, Chiringuito Raíces. Per un\'occasione: Casa Alebrije o Tacos de Humo (qui capita spesso un tequila di benvenuto offerto dalla casa).',
    usciteSerali:
      'Al tramonto, Café del Mar è il posto giusto per un drink con vista. Per la sera: Hot Corner per pachangueo e musica dal vivo, La Combi tra musica live e DJ set, Bikini Bottom per un DJ set direttamente in spiaggia, Tribe Hostel per musica live, Chobys se si cerca ancora il tramonto più tardi in giornata.',
    comeArrivare: 'Traghetto da Chiquilà (25-30 minuti), raggiungibile via van/auto da Cancún.',
    comeSpostarsi: 'Isola senza auto: a piedi o con i "carritos" (taxi locali/golf cart).',
    periodoMigliore: 'La bioluminescenza si vede meglio da aprile a novembre, e dipende da fasi lunari e meteo.',
    costi: 'da completare',
    erroriDaEvitare: [
      'Portare repellente anti-zanzare in abbondanza per la bioluminescenza serale: le zanzare a Punta Mosquito sono spietate',
      'Il tour a piedi per la bioluminescenza è sconsigliato: quasi un\'ora di cammino al buio per direzione — meglio un carrito, un kayak o un tour in barca',
      'Il tour delle 3 Islas è carino ma un po\' ridondante se si sono già viste cose simili altrove nel viaggio',
    ],
    miaEsperienza:
      'Holbox è stata la chiusura perfetta del viaggio: se dovessi consigliare una sola attività di tutto l\'itinerario sarebbe l\'escursione con lo squalo balena, fatta proprio qui.',
    esperienzeSlugs: ['squalo-balena-holbox', 'bioluminescenza-holbox', 'tour-3-islas-holbox', 'cabo-catoche'],
    tripSlugs: ['messico-beach-life'],
    imageAlt: 'Spiaggia bianca e acqua bassa turchese dell\'isola di Holbox',
    immagine: '/images/messico/holbox-barche.jpg',
  },
]
