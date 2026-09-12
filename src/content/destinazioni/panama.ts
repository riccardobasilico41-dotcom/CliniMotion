import type { Destinazione } from '@/lib/types'

// Paese visitato di persona. I campi miaEsperienza sono bozze scritte da
// Claude nella voce del diario, basate su ciò che è oggettivamente vero di
// ogni posto (fatica, stagione, affollamento, logistica) e non su ricordi
// reali: vanno riletti e sostituiti con i tuoi. Nessun nome di hotel,
// ristorante o operatore è stato inventato.

export const destinazioniPanama: Destinazione[] = [
  {
    slug: 'panama-city',
    paeseSlug: 'panama',
    ordine: 1,
    nome: 'Panama City',
    tipologia: ['città', 'cultura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una capitale con due facce opposte a pochi chilometri di distanza: lo skyline di grattacieli sulla baia e il Casco Viejo, il centro storico coloniale Patrimonio UNESCO, con le sue piazze e i suoi rooftop.',
    percheAndarci:
      'È l\'hub aereo di tutta l\'America Latina e la porta d\'ingresso obbligata del paese — e, a differenza di molte capitali della regione, merita davvero un paio di giorni.',
    cosaVedere: [
      'Il Casco Viejo, con Plaza de la Independencia e le chiese coloniali',
      'Le chiuse di Miraflores sul Canale di Panama, con il centro visitatori e la terrazza panoramica',
      'Le rovine di Panamá Viejo, la città originale distrutta dai pirati nel 1671',
      'Il Biomuseo firmato Frank Gehry, sulla Calzada de Amador',
      'Il Parque Natural Metropolitano, foresta tropicale dentro i confini della città',
    ],
    cosaFare: [
      'Visita alle chiuse del canale, meglio negli orari di transito delle navi — vedi la scheda esperienza dedicata',
      'Aperitivo su uno dei rooftop del Casco Viejo al tramonto',
      'Gita in giornata alle isole Perlas o a Isla Taboga in traghetto',
      'Escursione a Portobelo e alla costa caraibica, a circa 2 ore dalla capitale',
    ],
    doveDormire: 'Casco Viejo per l\'atmosfera e la vita serale; zona Marbella/Obarrio per hotel più moderni e prezzi spesso più bassi.',
    doveMangiare:
      'Il posto da non saltare è il Mercado de Mariscos sulla baia: al piano di sotto si compra il pesce, al piano di sopra lo cucinano, e un ceviche in bicchiere di plastica costa un paio di dollari. Il Casco Viejo ha i rooftop e i ristoranti d\'autore, con prezzi da capitale internazionale; le fonde di quartiere servono il sancocho, la zuppa di pollo con la ñame che è il piatto nazionale, e il ropa vieja. Da provare come strada: le carimañolas e le empanadas fritte a colazione.',
    comeArrivare: 'Volo internazionale su Panama City-Tocumen (PTY), uno degli hub principali delle Americhe; dall\'aeroporto al centro 30-45 minuti in taxi o Uber.',
    comeSpostarsi: 'Metro (due linee, economica e funzionale), Uber diffuso e conveniente, taxi da contrattare sempre prima di salire.',
    periodoMigliore: 'metà dicembre-metà aprile, stagione secca; nel resto dell\'anno piove soprattutto nel pomeriggio',
    costi: 'si paga in dollari USA (il balboa esiste solo in monete); ingresso a Miraflores circa 20 USD per gli stranieri',
    erroriDaEvitare: [
      'Andare alle chiuse senza controllare gli orari di transito: senza navi in passaggio la visita perde gran parte del senso',
      'Girare di notte fuori dalle zone turistiche del Casco Viejo, che confina con quartieri da evitare',
    ],
    miaEsperienza:
      'Panama City spiazza perché non somiglia al resto della regione: dal Casco Viejo si guarda uno skyline di grattacieli che sembra Miami, e in mezzo ci sono duecento metri di quartieri in cui non si entra la sera. Il Casco è stato ristrutturato in fretta e in modo disomogeneo, con palazzi rifatti accanto a facciate ancora puntellate, e questo contrasto è la cosa più interessante da guardare. Sulle chiuse di Miraflores serve una raccomandazione pratica più che un giudizio: senza una nave in transito si guarda una vasca di cemento vuota, quindi gli orari di passaggio vanno controllati prima di partire da casa. Quando invece una portacontainer entra nella camera con pochi centimetri per lato, il senso si capisce subito.',
    esperienzeSlugs: ['chiuse-miraflores'],
    tripSlugs: [],
    imageAlt: 'Lo skyline di Panama City visto dal Casco Viejo al tramonto',
  },
  {
    slug: 'san-blas',
    paeseSlug: 'panama',
    ordine: 2,
    nome: 'San Blas (Guna Yala)',
    tipologia: ['mare', 'isole', 'cultura'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un arcipelago di oltre 300 isole caraibiche amministrato in autonomia dal popolo Guna: palme, sabbia bianca, acqua bassa turchese e sistemazioni volutamente essenziali, spesso senza elettricità continua.',
    percheAndarci:
      'È il mare più iconico di Panama e uno dei pochi territori indigeni autogovernati del continente: le regole d\'accesso, i trasporti e le strutture sono gestiti dalla comunità Guna, non da catene turistiche.',
    cosaVedere: [
      'Le isole più note per le gite in giornata: Isla Perro (con un relitto da snorkeling), Isla Aguja, Cayos Holandeses',
      'Le piscine naturali di acqua bassa in mezzo al mare',
      'I villaggi Guna, dove si acquistano le mole, i tessuti tradizionali cuciti a mano',
    ],
    cosaFare: [
      'Notte in cabaña su un\'isola, con pasti inclusi e giri in barca tra gli isolotti',
      'Snorkeling sui relitti e sulle secche coralline',
      'Traversata a vela verso la Colombia (3-5 giorni), alternativa classica al Darién Gap',
    ],
    doveDormire: 'Solo cabañas gestite dalle famiglie Guna, dal livello molto basico a qualche opzione con bagno privato: si prenota a pacchetto, con trasporto e pasti inclusi.',
    doveMangiare: 'I pasti sono quasi sempre inclusi nel pacchetto: pesce, aragosta in stagione, riso e platano.',
    comeArrivare:
      'Trasferimento in 4x4 da Panama City fino al porto di Cartí (circa 2h30-3h su strada di montagna molto ripida), poi barca verso le isole. Partenze molto presto al mattino.',
    comeSpostarsi: 'Solo in barca, con i trasferimenti organizzati dalla struttura che ospita.',
    periodoMigliore: 'stagione secca (dicembre-aprile) per mare più calmo; la traversata in barca può essere impegnativa con vento',
    costi:
      'ingresso al territorio Guna e tasse per le isole da pagare in contanti; transfer 4x4 + barca 40-60 USD a tratta; pacchetti con cabaña e pasti 60-150 USD a persona per notte',
    erroriDaEvitare: [
      'Arrivare senza contanti: sulle isole non ci sono bancomat né pagamenti con carta',
      'Aspettarsi comfort da resort: elettricità limitata, acqua dolce razionata, wifi quasi assente — fa parte dell\'esperienza',
      'Prenotare con intermediari non autorizzati: le strutture e i trasporti sono gestiti dalla comunità Guna, che regola gli accessi',
    ],
    miaEsperienza:
      'Il viaggio per arrivarci mette alla prova: sveglia alle cinque, tre ore di 4x4 su una strada di montagna con pendenze che sembrano sbagliate, e poi una barca aperta che nelle giornate ventose prende onda in pieno. Poi si arriva, e le isole sono esattamente quelle delle fotografie — palme, sabbia, acqua bassa e nient\'altro. Vale la pena sapere in cosa si sta entrando: Guna Yala è un territorio autogoverno, le regole le fanno i Guna, il turismo lo gestiscono loro e l\'ingresso si paga in contanti a loro. Le cabañas sono spartane per scelta, non per trascuratezza: luce a orario, acqua dolce razionata, niente wifi. Chi ci va aspettandosi un resort passa due giorni a lamentarsi; chi accetta il patto trova il posto più bello dei Caraibi panamensi.',
    esperienzeSlugs: ['notte-isola-san-blas'],
    tripSlugs: [],
    imageAlt: 'Isolotto con palme e acqua turchese nell\'arcipelago di San Blas, Panama',
  },
  {
    slug: 'bocas-del-toro',
    paeseSlug: 'panama',
    ordine: 3,
    nome: 'Bocas del Toro',
    tipologia: ['mare', 'isole', 'nightlife'],
    giorniConsigliati: '3-5 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Arcipelago caraibico al confine con la Costa Rica, con case su palafitte, surf, snorkeling e una vita notturna che non ha eguali nel resto del paese.',
    percheAndarci:
      'È il posto dove Panama diventa caraibica anche nell\'atmosfera: più vivace e meno essenziale di San Blas, con isole molto diverse tra loro a pochi minuti di barca.',
    cosaVedere: [
      'Isla Colón, con Bocas Town e i suoi edifici in legno colorati',
      'Starfish Beach, la spiaggia delle stelle marine',
      'Isla Bastimentos e il parco nazionale marino, con Red Frog Beach',
      'Cayo Zapatilla, spesso la tappa più bella dei tour in barca',
      'Cayo Coral, per lo snorkeling in acqua bassa',
    ],
    cosaFare: [
      'Tour in barca di giornata tra gli isolotti, con soste snorkeling e avvistamento delfini',
      'Lezione di surf a Playa Bluff o Paunch',
      'Giro in kayak tra le mangrovie',
      'Serata a Bocas Town, tra bar sull\'acqua e feste sulle isole',
    ],
    doveDormire: 'Bocas Town su Isla Colón per servizi e vita notturna; Bastimentos o Carenero per la tranquillità e gli alloggi sull\'acqua.',
    doveMangiare:
      'Bocas è il posto di Panama dove si mangia caraibico: pesce e pollo in salsa di cocco, rice and beans cucinati col latte di cocco invece che con l\'acqua, patacones ovunque. Il patrimonio afro-caraibico dell\'arcipelago si sente in cucina più che altrove nel paese. A Bocas Town i ristoranti sull\'acqua costano il doppio dei chioschi a due strade di distanza, dove si mangia lo stesso pesce; il mercato del mattino è l\'opzione più economica. La birra locale ghiacciata è praticamente la bevanda ufficiale dell\'isola.',
    comeArrivare:
      'Volo interno da Panama City a Bocas del Toro (circa 1 ora) oppure bus notturno fino ad Almirante e water taxi (circa 30 minuti). Molti arrivano anche via terra dalla Costa Rica, dal confine di Sixaola.',
    comeSpostarsi: 'Water taxi tra le isole (pochi dollari a tratta), biciclette e taxi su Isla Colón.',
    periodoMigliore:
      'ha un microclima diverso dal resto del paese: settembre-ottobre e febbraio-marzo sono spesso i periodi più soleggiati, mentre la "stagione secca" panamense non coincide necessariamente qui',
    costi: 'tour in barca di giornata 25-40 USD a persona più le tasse del parco nazionale; volo interno 100-150 USD a tratta',
    erroriDaEvitare: [
      'Dare per scontata la stagione secca nazionale: qui il meteo segue un ciclo diverso dal resto di Panama',
      'Programmare il tour in barca senza tenere conto del mare mosso, che può cancellare le uscite verso i cayos più esterni',
    ],
    miaEsperienza:
      'Bocas è l\'opposto esatto di San Blas: rumorosa, sociale, piena di ostelli e di gente che resta più del previsto. Le case su palafitte di Bocas Town sono belle in fotografia e un po\' meno da vicino, ma il giro in barca tra gli isolotti compensa: Cayo Zapatilla è la cosa più bella dell\'arcipelago e Starfish Beach mantiene la promessa del nome, con le stelle marine visibili in acqua alta un metro. Due avvertenze pratiche che valgono più di qualsiasi consiglio estetico. La prima: qui il meteo non segue la stagione secca panamense, e ci si può trovare sotto la pioggia in pieno febbraio mentre nella capitale c\'è il sole. La seconda: le sabbie sono infestate dai chitre, moscerini che pungono senza che ci si accorga e lasciano segni per giorni.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Case su palafitte e barche a Bocas Town, arcipelago di Bocas del Toro, Panama',
  },
  {
    slug: 'boquete',
    paeseSlug: 'panama',
    ordine: 4,
    nome: 'Boquete e gli altopiani',
    tipologia: ['natura', 'trekking'],
    giorniConsigliati: '2-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il Panama d\'altura, nella provincia di Chiriquí: clima fresco, piantagioni di caffè tra i migliori al mondo, foreste nuvolose e il Volcán Barú, il punto più alto del paese.',
    percheAndarci:
      'È l\'unico posto al mondo da cui, con la giornata giusta, si vedono contemporaneamente l\'Oceano Pacifico e il Mar dei Caraibi — e il contraltare fresco alle isole caraibiche.',
    cosaVedere: [
      'Il Volcán Barú (3.475 m), con la salita notturna per l\'alba sui due oceani',
      'Il Sendero Los Quetzales, tra i migliori posti al mondo per avvistare il quetzal',
      'Le piantagioni di caffè della zona, tra cui quelle che producono il pregiato Geisha',
      'Le cascate di Lost Waterfalls e il Caldera Hot Springs',
    ],
    cosaFare: [
      'Salita notturna al Volcán Barú per l\'alba — vedi la scheda esperienza dedicata',
      'Tour di una finca di caffè con degustazione',
      'Birdwatching sul Sendero Los Quetzales, meglio con guida locale',
      'Rafting sul Rio Chiriquí Viejo',
    ],
    doveDormire: 'Boquete paese per i servizi; i lodge sulle colline circostanti per il verde e le viste sulla valle.',
    doveMangiare:
      'Boquete è il posto dove si beve il caffè migliore del viaggio, e non è un modo di dire: la zona produce il Geisha, che alle aste batte record mondiali di prezzo, e nelle caffetterie del paese si assaggia a una frazione di quello che costa altrove. Sul cibo l\'offerta è sorprendentemente internazionale per un paese di montagna, per via della comunità di pensionati nordamericani che ci vive; per mangiare panamense servono le fonde locali, con il sancocho e la carne guisada. Al mercato dell\'agricoltore si trovano fragole e verdura d\'altura, rare nel resto del paese.',
    comeArrivare:
      'Volo interno da Panama City a David (circa 1 ora), poi 40 minuti di auto o bus fino a Boquete; in alternativa bus notturno dalla capitale (6-7 ore).',
    comeSpostarsi: 'Bus locali frequenti tra David e Boquete; auto a noleggio comoda per le finche e i sentieri fuori paese.',
    periodoMigliore:
      'dicembre-aprile per la salita al Barú con cieli sereni; il bajareque, la pioggerella fine tipica della zona, può comparire in qualsiasi stagione',
    costi: 'ingresso al parco Volcán Barú pochi dollari; salita guidata 50-90 USD a persona; tour del caffè 30-40 USD',
    erroriDaEvitare: [
      'Salire al Barú senza abbigliamento invernale: in vetta si arriva prima dell\'alba, con vento e temperature vicine allo zero',
      'Aspettarsi la vista sui due oceani garantita: capita solo con cielo limpido, tipicamente nei mesi secchi',
    ],
    miaEsperienza:
      'Dopo il caldo umido delle isole, Boquete è un sollievo fisico: si dorme con la finestra aperta e senza ventilatore, cosa che a Panama non capita quasi mai. La salita notturna al Barú è dura più per il modo in cui è fatta che per la pendenza — tredici chilometri di pista sconnessa partendo attorno a mezzanotte, al buio, col freddo che aumenta man mano, per arrivare in vetta intorno ai 3.475 metri prima dell\'alba. E qui va detta la verità scomoda: la famosa vista sui due oceani insieme si ottiene solo con cielo perfettamente limpido, che nella pratica significa pochi giorni buoni anche in stagione secca. Chi non vuole rischiare la notte in bianco ha alternative valide: il Sendero Los Quetzales e un tour serio in una finca di caffè valgono da soli la deviazione in montagna.',
    esperienzeSlugs: ['alba-volcan-baru'],
    tripSlugs: [],
    imageAlt: 'Piantagioni di caffè e colline verdi attorno a Boquete, Panama',
  },
]
