import type { Esperienza } from '@/lib/types'

// I campi miaEsperienza e i giudizi sono bozze scritte da Claude nella voce
// del diario, coerenti con ciò che è oggettivamente vero di ogni esperienza
// (contingentamenti, stagione, difficoltà, regole) ma non basate su ricordi
// reali: vanno riletti e confermati o corretti.
// Fanno eccezione le esperienze della Costa Azzurra, che riguardano posti
// vissuti per due anni: lì i ricordi veri esistono e le bozze vanno
// semplicemente sostituite.
// Nessun nome di hotel, ristorante, rifugio, operatore o domaine è stato
// inventato.
// Prezzi, contingentamenti e regole di accesso cambiano ogni stagione: vanno
// riverificati.

export const esperienzeFrancia: Esperienza[] = [
  {
    slug: 'sentiero-cap-antibes',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Il sentiero del litorale del Cap d\'Antibes',
    localita: 'Cap d\'Antibes, Alpi Marittime',
    cosE:
      'Un sentiero pubblico che gira la punta del Cap d\'Antibes camminando sugli scogli, tra il mare e i muri delle proprietà private che occupano tutto il capo. È il tratto più noto del sistema di sentieri costieri che in Francia garantisce per legge il passaggio pedonale lungo la riva, e localmente è conosciuto anche come sentiero di Tire-Poil per il vento che ci soffia.',
    percheFarla:
      'Perché è gratuito, dura un\'ora e mezza, parte a venti minuti a piedi dal centro di Antibes, e attraversa uno dei pezzi di costa più belli e più chiusi del Mediterraneo: dietro i muri ci sono le ville, davanti c\'è il mare aperto, e in mezzo c\'è una striscia di roccia su cui si può camminare perché la legge lo impone.',
    durata: 'un\'ora e mezza-due ore per l\'anello principale, con varianti più brevi',
    periodo:
      '**tutto l\'anno**, e l\'inverno è di gran lunga il momento migliore: non c\'è nessuno, la luce è bassa e il mare è mosso. **Va evitato con vento forte e mare grosso**: il sentiero passa su scogli bagnati dalle onde e viene chiuso con le mareggiate. In estate si fa presto al mattino o al tramonto, perché non c\'è ombra.',
    costo: 'gratuito',
    comePrenotare: 'Nessuna prenotazione. Si arriva a piedi, in autobus o in auto, con il problema del parcheggio nei pressi della Plage de la Garoupe in alta stagione.',
    cosaPortare:
      'Scarpe con suola che tenga sulla roccia bagnata — non infradito, è l\'errore più comune — acqua, cappello d\'estate, e una giacca a vento d\'inverno perché sulla punta il vento è costante. Costume, perché ci sono punti in cui si scende in acqua.',
    perChiEAdatta:
      'Chiunque cammini con un minimo di equilibrio. Il fondo è roccioso e irregolare, con qualche gradino scavato e qualche corrimano, ma non ci sono difficoltà tecniche. **Non adatto a passeggini e sconsigliato con mare mosso.**',
    miaEsperienza:
      'È il posto che si finisce per rifare più di ogni altro, e ogni volta per un motivo diverso. In estate si va al tramonto, quando la roccia è ancora calda e la luce prende il mare di lato. In inverno si va con il vento, che qui soffia quasi sempre, e non si incontra nessuno per un\'ora — e questo, su una costa da dodici milioni di visitatori l\'anno, è una cosa che continua a sembrare uno scherzo. La parte che colpisce di più è il contrasto: a sinistra ci sono muri, cancelli, telecamere e siepi altissime che nascondono alcune delle proprietà più care d\'Europa; a destra c\'è il mare aperto; e in mezzo c\'è questa striscia di scogli su cui si cammina perché in Francia il passaggio lungo la riva è un diritto e non si può recintare. Si passa a due metri dai giardini e nessuno può dire niente. Sul lato esposto, con il maestrale, le onde arrivano sul sentiero e si torna bagnati — ed è quello il giorno in cui vale di più.',
    giudizio: 'imperdibile',
    alternative: [
      'Il sentiero del litorale del Cap Ferrat, a est di Nizza, più corto e altrettanto bello',
      'Il sentiero costiero di Saint-Tropez, da Plage des Salins, molto più lungo',
      'Il giro del faro della Garoupe, che sta sopra il capo e ha la vista dall\'alto',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Il sentiero del litorale sugli scogli del Cap d\'Antibes con il mare mosso e i pini marittimi',
  },
  {
    slug: 'mercato-provenzale-antibes',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Il Marché Provençal di Antibes',
    localita: 'Cours Masséna, città vecchia di Antibes',
    cosE:
      'Il mercato coperto sotto la tettoia in ferro del Cours Masséna, nel cuore della città vecchia: banchi di produttori, formaggi, olive, spezie, fiori, pesce e frutta, ogni mattina tranne il lunedì fuori stagione. Il pomeriggio, in certi periodi, la stessa tettoia ospita un mercato di artigianato.',
    percheFarla:
      'Perché è uno dei pochi mercati della Costa Azzurra che sia rimasto un mercato di quartiere e non una scenografia per turisti: ci fa la spesa la gente che abita dentro le mura, e la differenza si sente nei prezzi e in cosa viene venduto.',
    durata: 'un\'ora, o mezza mattinata con colazione e acquisti',
    periodo:
      '**tutto l\'anno, al mattino**, con l\'avvertenza che **fuori stagione è chiuso il lunedì** e che gli orari cambiano tra estate e inverno: **da verificare**. Il momento migliore è tra le otto e le dieci, prima che arrivino i gruppi.',
    costo: 'gratuito l\'ingresso; gli acquisti costano quanto un mercato di città, non quanto una gastronomia del lungomare',
    comePrenotare: 'Nessuna prenotazione.',
    cosaPortare: 'Una borsa di stoffa e **contanti**: molti banchi di produttori non prendono la carta, o hanno un minimo di spesa.',
    perChiEAdatta: 'Tutti. È anche il modo migliore di risolvere il pranzo spendendo poco: si compra e si mangia sui bastioni.',
    miaEsperienza:
      'Il mercato è la cosa che definisce il ritmo di una settimana ad Antibes più di qualunque monumento. Si va al mattino presto, si prende la socca se è il giorno in cui c\'è, si compra il formaggio da chi lo fa e le olive sfuse da chi le porta da dietro Grasse, e si scopre che i prezzi non hanno niente a che vedere con quelli dei ristoranti a duecento metri. È anche il posto in cui si capisce la stratificazione della zona: i banchi parlano francese, italiano e un provenzale residuo, e la clientela è fatta di anziani del quartiere, di famiglie e di equipaggi degli yacht del porto che vengono a fare la spesa per i proprietari. La cosa da non fare è andarci a mezzogiorno: alle undici e mezza i produttori cominciano a smontare e quello che resta è la parte meno interessante. E la cosa da fare è comprare il pranzo lì e portarselo sui bastioni, che è anche il modo in cui la Costa Azzurra torna a costare poco.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Cours Saleya a Nizza, più grande e più turistico, con il mercato dei fiori',
      'Il Marché Forville a Cannes, uno dei migliori della costa',
      'I mercati dei paesi dell\'entroterra, che hanno ognuno il proprio giorno e nessun turista',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'I banchi di frutta e formaggi sotto la tettoia del Marché Provençal di Antibes',
  },
  {
    slug: 'museo-picasso-antibes',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Il Musée Picasso nel Château Grimaldi',
    localita: 'Château Grimaldi, Antibes',
    cosE:
      'Il castello medievale sui bastioni di Antibes, che nell\'autunno del 1946 ospitò Picasso come atelier per alcuni mesi: al momento di andarsene lasciò alla città le opere realizzate lì. È stato il primo museo al mondo dedicato a Picasso, ed espone quei lavori nello stesso edificio in cui sono nati, con le finestre sul mare.',
    percheFarla:
      'Perché non è una collezione messa insieme da un curatore: è un corpus prodotto in quelle stanze, in poche settimane, subito dopo la guerra, e appeso dove è stato dipinto. La differenza si sente, e la terrazza sul Mediterraneo con le sculture è una delle viste migliori della costa.',
    durata: 'un\'ora e mezza',
    periodo: 'tutto l\'anno, con **un giorno di chiusura settimanale** e orari che cambiano tra estate e inverno: **da verificare**.',
    costo: 'biglietto contenuto, tra i più bassi per un museo di questo peso; gratuità e riduzioni secondo le regole dei musei municipali di Antibes',
    comePrenotare: 'Non serve prenotare salvo in occasione di mostre temporanee importanti.',
    cosaPortare: 'Niente di particolare. La terrazza è esposta al sole e al vento.',
    perChiEAdatta: 'Tutti, anche chi di Picasso conosce poco: il museo è piccolo, chiaro e non richiede resistenza.',
    miaEsperienza:
      'Quello che rende questo museo diverso da tutti gli altri musei di Picasso è che si vede cosa significa un contesto. Le opere del 1946 fatte qui — fauni, centauri, capre, pesci, figure che ballano — sono luminose e quasi allegre, e non somigliano a quasi nient\'altro della sua produzione. Il motivo è nella data: era appena finita la guerra, lui era venuto sul Mediterraneo, aveva quarantacinque anni di distanza dal cubismo alle spalle e uno spazio enorme e vuoto messo a disposizione dal conservatore del castello. Si guarda un pannello di fibrocemento dipinto con una capra, ci si affaccia dalla finestra accanto e c\'è esattamente lo stesso mare che c\'era allora. La seconda cosa è la terrazza: sculture in bronzo sui bastioni, il mare da tre lati, e nelle giornate limpide le Alpi innevate in fondo. Costa pochissimo, dura un\'ora, e quasi tutti i visitatori della costa lo saltano per andare a Saint-Tropez.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Musée National Picasso di Vallauris, con il grande murale della Guerra e della Pace in una cappella romanica',
      'Il Musée Matisse e il Musée Chagall a Nizza, a Cimiez',
      'Il Musée Fernand Léger di Biot',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'La terrazza del Château Grimaldi ad Antibes con le sculture in bronzo e il mare',
  },
  {
    slug: 'sentiero-nietzsche-eze',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Il Sentiero Nietzsche e il villaggio di Èze',
    localita: 'Da Èze-sur-Mer a Èze village, Alpi Marittime',
    cosE:
      'Una mulattiera ripida che collega la stazione ferroviaria sul mare al villaggio arroccato di Èze, circa quattrocento metri più in alto. Porta il nome di Nietzsche perché il filosofo la percorreva durante i soggiorni sulla costa e vi avrebbe concepito parte della terza parte di *Così parlò Zarathustra*.',
    percheFarla:
      'Perché è il modo giusto di arrivare a Èze: salendo a piedi dal mare invece che parcheggiando sulla strada alta. E perché in cima, oltre al villaggio, c\'è un giardino esotico sulle rovine del castello con una delle viste più ampie di tutta la costa.',
    durata: 'un\'ora-un\'ora e mezza in salita, quarantacinque minuti in discesa; il villaggio e il giardino aggiungono un\'ora e mezza',
    periodo:
      '**da ottobre ad aprile** è il periodo migliore. **D\'estate va fatto molto presto al mattino**: la salita è esposta a sud, non ha ombra e diventa pesante. Da evitare nelle ore centrali di luglio e agosto.',
    costo: 'il sentiero è gratuito; il Jardin Exotique in cima ha un biglietto contenuto',
    comePrenotare:
      'Nessuna prenotazione. La logistica migliore: **treno fino a Èze-sur-Mer, salita a piedi, e ritorno in autobus** dal villaggio verso Nizza o Monaco — così non si scende e non si torna al punto di partenza.',
    cosaPortare: 'Scarpe da trekking o comunque con suola, **almeno un litro e mezzo d\'acqua**, cappello. Il sentiero è sassoso e in alcuni punti scivoloso.',
    perChiEAdatta:
      'Serve gamba: sono quattrocento metri di dislivello concentrati, su gradoni irregolari. **Non adatto a chi ha problemi di ginocchia o a chi non cammina abitualmente.** Chi non se la sente arriva in autobus o in auto al villaggio.',
    miaEsperienza:
      'Il sentiero è una salita seria e ingannevole: sulla mappa sono due chilometri, nella realtà sono quattrocento metri di dislivello su gradoni di pietra irregolari, in mezzo agli ulivi e ai fichi d\'India, con il mare che si allontana progressivamente sotto. A metà si capisce perché a un filosofo con problemi di salute questa salita facesse venire delle idee: non c\'è niente da guardare se non il mare che si apre alle spalle, e si cammina in silenzio. In cima si arriva sudati in un villaggio pieno di gente scesa dai pullman, ed è un contrasto quasi comico. La ricompensa vera è il giardino in cima, che è costruito sulle rovine del castello a quattrocento metri sopra il mare, con le agavi e i cactus tra le pietre e le sculture in terracotta: da lassù si vede la costa da Cap Ferrat fino all\'Esterel, e nelle giornate limpide si dice che si arrivi alla Corsica. Il consiglio pratico è fare treno all\'andata e autobus al ritorno, e non provare a scendere sulle stesse gambe dopo aver salito.',
    giudizio: 'la-rifarei',
    alternative: [
      'Salire a Èze in autobus e fare solo il villaggio e il giardino',
      'Il sentiero del Cap Ferrat, pianeggiante e sul mare',
      'La salita alla Tête de Chien sopra La Turbie, con il trofeo romano di Augusto',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Il villaggio arroccato di Èze visto dal sentiero con il mare e il Cap Ferrat sullo sfondo',
  },
  {
    slug: 'fondation-maeght',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'La Fondation Maeght a Saint-Paul-de-Vence',
    localita: 'Saint-Paul-de-Vence, entroterra di Nizza',
    cosE:
      'Una fondazione d\'arte moderna aperta nel 1964 in una pineta sopra Saint-Paul-de-Vence, costruita da un mercante d\'arte e da sua moglie insieme agli artisti che rappresentavano: Giacometti ha progettato il cortile con le sue figure allungate, Miró un labirinto di sculture e ceramiche, Chagall e Braque hanno lavorato sull\'edificio. È una delle collezioni d\'arte moderna più importanti d\'Europa.',
    percheFarla:
      'Perché non è un museo che ospita opere: è un edificio pensato insieme alle opere che contiene, e il rapporto tra architettura, pineta e sculture all\'aperto è l\'esperienza vera. Il cortile di Giacometti, con le figure in bronzo distribuite in uno spazio aperto sotto i pini, è uno degli spazi espositivi più riusciti al mondo.',
    durata: 'due-tre ore',
    periodo:
      'tutto l\'anno. **La collezione permanente non è sempre esposta integralmente**, perché lo spazio viene usato per grandi mostre temporanee: **va verificato cosa è visibile nel periodo del viaggio**, perché chi arriva pensando di trovare tutto il cortile di Giacometti e trova una mostra in corso rimane deluso.',
    costo: 'biglietto medio, più alto della media dei musei della costa; supplementi per alcune mostre',
    comePrenotare: 'Prenotazione consigliata nei periodi di mostre importanti.',
    cosaPortare: 'Niente di particolare. Il percorso è in parte all\'aperto, tra i pini.',
    perChiEAdatta: 'Chi ha un interesse anche minimo per l\'arte del Novecento. È accessibile anche a chi non ne sa nulla, perché molto è all\'aperto e si guarda camminando.',
    miaEsperienza:
      'La Fondation Maeght è la cosa che si consiglia a chiunque venga in Costa Azzurra e pensi che qui ci siano solo spiagge e yacht. Si sale in un bosco di pini sopra un villaggio, si entra in un edificio basso di mattoni e cemento con due vele bianche sul tetto — che non sono decorative: servono a raccogliere l\'acqua piovana — e si esce in un cortile dove ci sono le figure di Giacometti distribuite nello spazio. Non sono su piedistalli in una sala: stanno in piedi su un pavimento all\'aperto, sotto il cielo, e ci si cammina in mezzo. L\'uomo che cammina, in bronzo, alto e sottilissimo, visto contro i pini e non contro un muro bianco, è un\'altra opera. Poi c\'è il labirinto di Miró, che è un giardino a terrazze con sculture e ceramiche disseminate tra la vegetazione, e che ai bambini piace moltissimo. La combinazione giusta è farla al mattino e poi scendere a Saint-Paul-de-Vence nel tardo pomeriggio, quando i pullman sono ripartiti e il villaggio torna a essere camminabile.',
    giudizio: 'imperdibile',
    alternative: [
      'La Chapelle du Rosaire di Matisse a Vence, a pochi chilometri — **con orari di apertura molto limitati, da verificare**',
      'Il Musée Fernand Léger di Biot',
      'Il MAMAC di Nizza per il contemporaneo',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Le sculture di Giacometti nel cortile della Fondation Maeght sotto i pini',
  },
  {
    slug: 'isole-lerino',
    paeseSlug: 'francia',
    destinazioneSlug: 'costa-azzurra',
    nome: 'Le Isole di Lerino davanti a Cannes',
    localita: 'Sainte-Marguerite e Saint-Honorat, al largo di Cannes',
    cosE:
      'Due isole a quindici minuti di traghetto dalla Croisette. **Sainte-Marguerite** ha il Fort Royal, in cui fu detenuto per anni il prigioniero rimasto noto come la Maschera di Ferro, e una pineta attraversata da sentieri. **Saint-Honorat** appartiene a una comunità monastica presente sull\'isola da circa milleseicento anni, che coltiva la vigna e produce vino.',
    percheFarla:
      'Perché a un quarto d\'ora dal lungomare più mondano della costa ci sono due isole senza auto, con i sentieri nella pineta, le calette e un monastero attivo. È il contrasto più forte che la Costa Azzurra offra su una distanza così breve.',
    durata: 'mezza giornata per una, una giornata intera per entrambe',
    periodo:
      '**da aprile a ottobre**, con **maggio, giugno e settembre** come mesi migliori. **Le corse sono più frequenti in alta stagione e ridotte d\'inverno**: gli orari vanno verificati, e soprattutto va verificata **l\'ora dell\'ultimo rientro**, perché sulle isole non si pernotta (salvo la foresteria del monastero).',
    costo: 'traghetto di andata e ritorno a costo contenuto; ingresso al forte e al museo di Sainte-Marguerite a pagamento; l\'isola monastica è a ingresso libero',
    comePrenotare: 'Biglietti del traghetto al porto o online; **le due isole sono servite da compagnie distinte** e il biglietto per una non vale per l\'altra.',
    cosaPortare: 'Acqua e pranzo (l\'offerta sulle isole è minima e cara), costume, scarpe da camminata, cappello. **Sull\'isola monastica è richiesto un abbigliamento decoroso** ed è un luogo di preghiera.',
    perChiEAdatta: 'Tutti. I sentieri sono pianeggianti e facili.',
    miaEsperienza:
      'La cosa che colpisce è la distanza: dalla Croisette, con le auto, le vetrine e i palazzi, si sale su un traghetto e dopo un quarto d\'ora si cammina in una pineta silenziosa dove non passa nessun veicolo. Sainte-Marguerite è quella da fare con tempo: si gira l\'isola su un sentiero che costeggia il mare, ci sono calette di ciottoli in cui non c\'è quasi nessuno anche in luglio, e al centro c\'è il forte, con la cella in cui è stato tenuto per undici anni un prigioniero la cui identità non è mai stata accertata e attorno al quale si è costruita una delle leggende più solide di Francia. Saint-Honorat è un\'altra cosa ancora: è proprietà di una comunità monastica presente lì da sedici secoli, i monaci coltivano la vigna, e si può camminare lungo il perimetro dell\'isola in un\'ora passando davanti alle antiche fortificazioni monastiche affacciate sul mare. Il silenzio è reale e chiesto esplicitamente. È probabilmente il posto meno "Costa Azzurra" di tutta la Costa Azzurra, e sta davanti a Cannes.',
    giudizio: 'imperdibile',
    alternative: [
      'Le Îles d\'Hyères — Porquerolles e Port-Cros — più a ovest, più grandi e più selvagge',
      'Il massiccio dell\'Esterel tra Cannes e Saint-Raphaël, con il porfido rosso sul mare',
      'Una giornata in barca lungo la costa, per vedere le calette non raggiungibili da terra',
    ],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Il sentiero costiero nella pineta dell\'isola di Sainte-Marguerite con il mare e Cannes sullo sfondo',
  },
  {
    slug: 'louvre-strategia',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'Il Louvre con una strategia',
    localita: 'Palais du Louvre, 1° arrondissement, Parigi',
    cosE:
      'Il museo più grande e più visitato del mondo: decine di migliaia di opere esposte lungo chilometri di sale, in un palazzo che è stato fortezza medievale, residenza reale e infine museo dalla Rivoluzione. Non è una visita: è una serie di scelte.',
    percheFarla:
      'Perché copre cinquemila anni di storia in un solo edificio e nessun altro museo ha questa ampiezza. E perché, con un piano deciso prima, è una delle esperienze più intense possibili; senza, è una camminata di quattro ore che finisce in una folla davanti a un quadro piccolo.',
    durata: 'tre-quattro ore con una strategia; una giornata intera per chi ha resistenza',
    periodo:
      'tutto l\'anno. **Chiuso il martedì**, che è il giorno in cui tutta la folla si riversa su Orsay. I momenti migliori sono **l\'apertura** e, nei giorni di **apertura serale** (che esistono in alcune giornate della settimana e vanno verificate), le ultime due ore, quando i gruppi sono già usciti.',
    costo: 'biglietto singolo contenuto rispetto alle dimensioni; incluso nel Paris Museum Pass, **che però non sostituisce la prenotazione con fascia oraria**',
    comePrenotare:
      '**Prenotazione online con fascia oraria, di fatto obbligatoria** e da fare con giorni o settimane di anticipo in alta stagione. Nota pratica importante: **la Piramide non è l\'unico ingresso** — esistono accessi secondari (dalla galleria commerciale sotterranea e dal Passage Richelieu, con condizioni che cambiano) in cui la coda dei controlli è molto più breve: **da verificare quali sono attivi**.',
    cosaPortare: 'Scarpe comode, una bottiglia d\'acqua, e un elenco scritto di **dieci opere e due ali**, deciso prima.',
    perChiEAdatta:
      'Tutti, ma è faticoso fisicamente. Con bambini, la strategia è ancora più necessaria: due ore su un percorso scelto, non di più.',
    miaEsperienza:
      'L\'errore che fanno quasi tutti è entrare al Louvre senza decidere niente, seguendo i cartelli verso la Gioconda. Il risultato è prevedibile: si attraversano di corsa sale straordinarie per arrivare in una stanza enorme, in fondo alla quale, dietro un vetro e a sei metri di distanza, c\'è un dipinto di settantasette per cinquantatré centimetri, davanti al quale duecento persone tengono il telefono in alto. Si guarda per venti secondi, si esce, e si è stanchi. Il modo in cui il Louvre funziona è l\'opposto: si scelgono due ali e dieci opere, e si ignora tutto il resto senza rimpianti. Il pezzo che resta, quasi sempre, non è nessuno dei quadri famosi: è la **Vittoria di Samotracia**, messa in cima allo scalone Daru, che si vede da sotto mentre si sale — una figura alata con il panneggio che sembra bagnato dal vento, senza testa e senza braccia, su una prua di nave. È l\'allestimento meglio riuscito di qualunque museo al mondo, ed è gratis in termini di fatica: si passa di lì comunque. L\'altra scoperta sono i sotterranei, dove sono visibili le **fondazioni del castello medievale** su cui il palazzo è stato costruito: un fossato e la base di un torrione, sotto il museo.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Musée d\'Orsay, più corto e per molti più soddisfacente',
      'Il Musée du Quai Branly per le arti extraeuropee',
      'Una visita accompagnata tematica al Louvre, che risolve il problema della strategia',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'La Vittoria di Samotracia in cima allo scalone Daru del Louvre',
  },
  {
    slug: 'sainte-chapelle',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'La Sainte-Chapelle in una giornata di sole',
    localita: 'Île de la Cité, 1° arrondissement, Parigi',
    cosE:
      'Una cappella gotica a due piani costruita nel XIII secolo da Luigi IX per custodire le reliquie della Passione, tra cui la Corona di Spine. La cappella alta ha quindici vetrate alte circa quindici metri con oltre mille pannelli istoriati, e i muri sono ridotti a sottili colonne: il vetro occupa quasi tutta la superficie.',
    percheFarla:
      'Perché è probabilmente l\'interno più bello di Parigi ed è un capolavoro tecnico: costruita in circa sette anni, con una struttura portante ridotta al minimo indispensabile per far posto al vetro. In una giornata di sole l\'effetto non ha equivalenti in Europa.',
    durata: 'quarantacinque minuti-un\'ora',
    periodo:
      'tutto l\'anno, **ma solo con il sole**. Con il cielo coperto le vetrate restano scure e la visita perde gran parte del senso: è l\'unica cosa a Parigi che vada spostata in base al meteo. Il **tardo pomeriggio** con il sole basso è il momento migliore.',
    costo: 'biglietto contenuto; **esiste un cumulativo con la Conciergerie**, che sta nello stesso complesso ed è dove furono detenuti i prigionieri del Terrore',
    comePrenotare:
      'Prenotazione online consigliata. Attenzione: **la cappella è dentro il complesso del Palazzo di Giustizia e si passa da un controllo di sicurezza** che nelle ore centrali fa una coda lunga, **indipendentemente dal biglietto o dal pass**.',
    cosaPortare: 'Niente. Eventualmente un binocolo leggero per leggere i pannelli in alto.',
    perChiEAdatta: 'Tutti. La cappella bassa è accessibile, quella alta si raggiunge con una scala a chiocciola stretta.',
    miaEsperienza:
      'Si entra dalla cappella bassa, che è schiacciata, scura e dipinta di blu e oro, e per un momento si pensa che sia tutto lì. Poi si sale una scala a chiocciola stretta e si emerge nella cappella alta, e l\'effetto è quasi fisico: non ci sono pareti. Ci sono quindici finestre alte quindici metri, separate da colonnine sottilissime, e la luce che entra è colorata e mobile. Il rosso e il blu del vetro del Duecento hanno una saturazione che i restauri successivi non hanno mai replicato. La cosa che vale la pena sapere prima è cosa si sta guardando: le vetrate raccontano l\'intera Bibbia in oltre mille scene, e si leggono dal basso verso l\'alto e da sinistra a destra, come un fumetto — è stato costruito come un dispositivo narrativo per persone che non sapevano leggere. E il tutto è stato tirato su in circa sette anni, cioè in un tempo che le cattedrali gotiche non conoscevano, perché serviva una teca per delle reliquie che il re aveva comprato per una cifra superiore al costo della cappella stessa. Regola pratica: **si va solo se c\'è il sole.** Con il cielo grigio è un\'altra cosa, e conviene rimandare.',
    giudizio: 'imperdibile',
    alternative: [
      'Notre-Dame, riaperta nel dicembre 2024, a ingresso gratuito',
      'La Conciergerie, nello stesso complesso, con il cumulativo',
      'Saint-Séverin e Saint-Eustache, due chiese gotiche molto meno visitate',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'Le vetrate della cappella alta della Sainte-Chapelle illuminate dal sole',
  },
  {
    slug: 'montmartre-alba',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'Montmartre all\'alba',
    localita: '18° arrondissement, Parigi',
    cosE:
      'La collina più alta di Parigi, annessa alla città solo nel 1860, con il Sacré-Cœur in cima, le vie ripide, l\'ultima vigna urbana rimasta e le scalinate che scendono verso Pigalle. Fino a metà giornata è un quartiere abitato; dalle dieci in poi è una delle aree più affollate d\'Europa.',
    percheFarla:
      'Perché la differenza tra Montmartre alle sette del mattino e Montmartre a mezzogiorno è la differenza tra un quartiere e un parco a tema, e costa solo alzarsi presto.',
    durata: 'due-tre ore',
    periodo:
      'tutto l\'anno. **L\'ora è più importante della stagione**: all\'alba o nella prima mattina. In inverno, con la luce che arriva tardi, si può fare anche alle otto.',
    costo: 'gratuito; la funicolare costa come un biglietto della metropolitana e la salita alla cupola del Sacré-Cœur ha un biglietto contenuto',
    comePrenotare: 'Niente da prenotare.',
    cosaPortare: 'Scarpe comode: è tutto in salita e in discesa, su pavé e scalinate.',
    perChiEAdatta: 'Tutti, con l\'avvertenza che il dislivello è reale e le scalinate sono molte. Esiste la funicolare per evitare la salita principale.',
    miaEsperienza:
      'Alle sette del mattino, sui gradini davanti al Sacré-Cœur, ci sono tre persone e uno spazzino. Parigi è sotto, piatta, grigio-azzurra, con la Tour Eiffel a sinistra e la torre di Montparnasse a destra, e non c\'è rumore. Tre ore dopo, sugli stessi gradini, ci sono duemila persone, i venditori di braccialetti e chi suona la chitarra. È lo stesso posto. La cosa da fare, dopo, è girare le spalle alla basilica e camminare nelle vie laterali: **Place du Tertre**, con i pittori e i menù turistici, è a duecento metri e va attraversata senza fermarsi, perché a un isolato di distanza ci sono strade in cui non c\'è nessuno — la **Rue de l\'Abreuvoir** con le case basse, la **vigna del Clos Montmartre** che è l\'ultima vigna urbana di Parigi e produce qualche centinaio di bottiglie l\'anno, il muro dei baci, le scalinate che scendono verso nord. La collina era un comune indipendente fino al 1860, con i mulini, le cave di gesso e il vino esente dalle tasse della città: è per questo che ci si beveva e ci si divertiva, ed è per questo che ci sono venuti gli artisti. Dalle dieci in poi, però, si scende e si va altrove.',
    giudizio: 'la-rifarei',
    alternative: [
      'Belleville, che è la Montmartre di oggi: collina, vista, street art e nessun turista',
      'Il Parc des Buttes-Chaumont, il parco più bello di Parigi',
      'Il Père-Lachaise al mattino presto',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'Le scalinate di Montmartre all\'alba con Parigi sullo sfondo e nessuna persona',
  },
  {
    slug: 'catacombe-parigi',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'Le Catacombe di Parigi',
    localita: '14° arrondissement, Parigi',
    cosE:
      'Un percorso di circa un chilometro e mezzo a venti metri sotto il livello della strada, dentro antiche cave di calcare, in cui alla fine del Settecento furono trasferiti i resti dei cimiteri cittadini saturi. Le ossa di **diversi milioni di persone** sono accatastate lungo le gallerie in muri composti con criteri quasi decorativi.',
    percheFarla:
      'Perché è la soluzione fisica a un problema urbanistico del XVIII secolo — i cimiteri parigini erano talmente pieni da provocare crolli e contaminazioni — e perché camminare per un chilometro e mezzo tra muri di ossa è un\'esperienza che non somiglia a nessun\'altra cosa in città.',
    durata: 'un\'ora-un\'ora e mezza nel percorso; **si scendono circa 130 gradini e se ne risalgono più di 110** all\'uscita, che è in un punto diverso dall\'ingresso',
    periodo:
      'tutto l\'anno: sottoterra ci sono **circa quattordici gradi costanti**, il che d\'estate è un sollievo e d\'inverno richiede una giacca. **Chiuso un giorno a settimana**: da verificare.',
    costo: 'biglietto medio; la prenotazione online costa più della cassa ma è l\'unico modo realistico di entrare',
    comePrenotare:
      '**Prenotazione online con fascia oraria fortemente consigliata**: senza, la coda in strada può essere di ore e la capienza sotterranea è limitata per legge.',
    cosaPortare:
      'Una **giacca** (quattordici gradi), scarpe chiuse perché il fondo è umido e in alcuni punti fangoso, e nient\'altro: **gli zaini grandi non sono ammessi**. Vietato toccare le ossa.',
    perChiEAdatta:
      '**Non adatta a chi soffre di claustrofobia**, a chi ha difficoltà motorie (le scale a chiocciola sono strette e non c\'è ascensore) o a bambini piccoli impressionabili. Non è un luogo horror ed è trattato con rispetto, ma è pur sempre un ossario.',
    miaEsperienza:
      'Si scende una scala a chiocciola stretta per venti metri, si cammina qualche centinaio di metri in una galleria di cava vuota e umida, e poi si arriva a una porta con un\'iscrizione che avverte che di lì in poi comincia l\'impero dei morti. Da quel punto, per oltre un chilometro, ci sono muri di ossa: femori accatastati in file orizzontali, crani incastrati a formare croci e motivi geometrici, lapidi che indicano da quale cimitero è arrivato quel gruppo e in che anno. La cosa che disturba non è la macabra teatralità, che pure c\'è: è la quantità. Si continua a camminare e continuano a esserci, per centinaia di metri, e a un certo punto si smette di guardarli come oggetti e si comincia a fare il conto di quante persone siano — e sono milioni, cioè più di quante ne vivano oggi in città. È il monumento più onesto di Parigi: tutti quelli che hanno abitato qui prima, messi da parte quando non c\'era più posto. Nota pratica, che sembra un dettaglio e non lo è: **l\'uscita è a più di un chilometro dall\'ingresso**, in un\'altra via, e bisogna saperlo se si è lasciato qualcosa o qualcuno all\'entrata.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Père-Lachaise, in superficie e gratuito',
      'Le fognature di Parigi, visitabili in un percorso museale',
      'La cripta archeologica sotto il sagrato di Notre-Dame',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'Una galleria delle Catacombe di Parigi con i muri di ossa allineate',
  },
  {
    slug: 'pere-lachaise',
    paeseSlug: 'francia',
    destinazioneSlug: 'parigi',
    nome: 'Il cimitero del Père-Lachaise',
    localita: '20° arrondissement, Parigi',
    cosE:
      'Il cimitero più grande di Parigi, aperto nel 1804 su una collina alla periferia di allora, oggi un parco di quarantaquattro ettari con viali alberati, settantamila sepolture e una densità straordinaria di scultura funeraria ottocentesca. Ci sono sepolti Chopin, Oscar Wilde, Jim Morrison, Édith Piaf, Molière e molti altri.',
    percheFarla:
      'Perché è gratuito, è uno dei posti più belli e più tranquilli di Parigi, ed è un museo di scultura all\'aperto con due secoli di storia del gusto funerario. Ed è anche un pezzo di storia politica: contro il **Mur des Fédérés**, in fondo al cimitero, furono fucilati gli ultimi combattenti della Comune nel 1871.',
    durata: 'due-tre ore per una visita con calma',
    periodo:
      'tutto l\'anno, e **l\'autunno è il periodo migliore**, con i castagni e gli aceri che cambiano colore. Al mattino presto è quasi vuoto. **Con la pioggia i viali acciottolati diventano scivolosi.**',
    costo: 'gratuito',
    comePrenotare:
      'Niente da prenotare. **La mappa è indispensabile**: il cimitero è enorme, i numeri delle divisioni sono l\'unico riferimento, e senza una piantina si gira a vuoto. Le piantine sono disponibili agli ingressi e online.',
    cosaPortare: 'Scarpe comode, mappa, acqua. È un luogo di sepoltura in uso: silenzio e rispetto sono richiesti.',
    perChiEAdatta: 'Tutti. Il terreno è in pendenza e acciottolato in molti punti.',
    miaEsperienza:
      'Il Père-Lachaise si visita per due ragioni diverse e la seconda è migliore della prima. La prima è la caccia alle tombe famose, che è piacevole e funziona: la tomba di Wilde, con la sfinge alata, è protetta da un vetro dal 2011 perché era coperta di rossetto da migliaia di baci; quella di Morrison è transennata; quella di Chopin è sempre coperta di fiori freschi. La seconda ragione, che è quella per cui ci si torna, è che è un parco. Si sale un viale acciottolato tra i castagni, passano i gatti, non c\'è rumore di traffico, e ai lati ci sono duecento anni di scultura funeraria: cappelle neogotiche, obelischi egittizzanti, angeli liberty, e poi i monumenti collettivi in fondo — quelli ai deportati nei campi di sterminio, e il **Mur des Fédérés**, un muro qualunque contro il quale, nel maggio del 1871, furono fucilati gli ultimi difensori della Comune di Parigi e sepolti in una fossa comune lì davanti. È un pezzo di storia francese che in Italia si conosce poco e che qui è ancora oggetto di commemorazioni. Si entra per vedere Jim Morrison e si esce avendo camminato tre ore.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il cimitero di Montmartre e quello di Montparnasse, più piccoli e meno visitati',
      'Il Parc des Buttes-Chaumont, a poca distanza',
      'La Coulée verte René-Dumont, il parco lineare sopra il viadotto',
    ],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'Un viale alberato del cimitero del Père-Lachaise con le cappelle funerarie in autunno',
  },
  {
    slug: 'spiagge-sbarco',
    paeseSlug: 'francia',
    destinazioneSlug: 'normandia',
    nome: 'Le spiagge dello sbarco',
    localita: 'Costa del Calvados e della Manica, da Sainte-Mère-Église a Ouistreham',
    cosE:
      'Ottanta chilometri di costa divisi nei cinque settori dello sbarco del 6 giugno 1944 — Utah, Omaha, Gold, Juno, Sword — con i cimiteri militari, le batterie tedesche, i resti del porto artificiale di Arromanches, i musei e i villaggi che furono i primi a essere liberati.',
    percheFarla:
      'Perché è uno dei pochi luoghi in Europa in cui la storia del Novecento si tocca su un paesaggio rimasto quasi identico, e perché il contrasto tra la banalità di quelle spiagge e quello che ci è successo è la cosa che resta.',
    durata: 'una giornata piena per due o tre settori; due giornate per farli tutti con calma',
    periodo:
      'tutto l\'anno; **da maggio a settembre** per il meteo. **Attorno al 6 giugno** ci sono le commemorazioni ufficiali: è il momento più intenso e il più difficile — strade chiuse, alloggi esauriti con un anno di anticipo, aree ad accesso regolato.',
    costo: 'i cimiteri, la Pointe du Hoc e le batterie sono **a ingresso libero**; i musei e il Mémorial de Caen hanno biglietti contenuti',
    comePrenotare:
      'Niente da prenotare per i siti all\'aperto. **Le visite accompagnate in giornata da Bayeux e Caen vanno prenotate** e, per questo luogo più che per altri, valgono davvero: il racconto è metà dell\'esperienza, perché il paesaggio da solo non spiega nulla.',
    cosaPortare:
      'Giacca a vento in qualunque mese: sulla costa normanna il vento è costante. Scarpe comode, perché alla Pointe du Hoc si cammina su un terreno sconvolto dai crateri.',
    perChiEAdatta:
      'Tutti, con un\'avvertenza: **è un luogo emotivamente pesante**, e con bambini va preparato. I cimiteri militari sono luoghi di raccoglimento e il comportamento richiesto è quello.',
    miaEsperienza:
      'Il consiglio più utile che si possa dare su questo posto è sull\'ordine: **prima un museo, poi le spiagge**. Il Mémorial de Caen o uno dei musei di settore danno il contesto — perché lì, perché quel giorno, come funzionava il Vallo Atlantico, cosa significava attraversare quel tratto di sabbia — e senza quel contesto Omaha Beach è una spiaggia larghissima e ventosa con la gente che porta a spasso il cane. È esattamente questo, però, il punto che resta: si guarda quella distesa piatta, si vede la scarpata bassa in fondo dove c\'erano le postazioni, si calcola a occhio quanti metri scoperti ci sono in mezzo, e non serve altro. Alla **Pointe du Hoc** l\'effetto è opposto e immediato, perché il terreno è rimasto come allora: crateri di bombardamento uno dentro l\'altro per ettari, bunker spaccati e ribaltati, e il ciglio della falesia da cui i ranger salirono con le scale. Il cimitero americano di Colleville, con le croci allineate sopra la spiaggia, è progettato per fare un effetto preciso e lo fa. Ad Arromanches, invece, ci sono ancora i cassoni di cemento del porto artificiale in mare: rimorchiati dall\'Inghilterra e affondati apposta per creare un porto dove non c\'era, perché senza un porto lo sbarco non si poteva rifornire. Sono lì da ottant\'anni e i bambini ci giocano intorno con la bassa marea.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Mémorial de Caen da solo, per chi ha mezza giornata',
      'Il museo di Utah Beach e Sainte-Mère-Église per il settore americano occidentale',
      'I cimiteri tedesco e britannico, che raccontano la stessa vicenda da altri due punti di vista',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Le croci allineate del cimitero americano di Colleville-sur-Mer sopra Omaha Beach',
  },
  {
    slug: 'mont-saint-michel',
    paeseSlug: 'francia',
    destinazioneSlug: 'normandia',
    nome: 'Il Mont-Saint-Michel con la marea',
    localita: 'Baia del Mont-Saint-Michel, al confine tra Normandia e Bretagna',
    cosE:
      'Un isolotto roccioso in mezzo a una baia, con un\'abbazia benedettina costruita a partire dall\'VIII secolo sulla cima e un villaggio fortificato aggrappato ai fianchi. La baia ha **l\'escursione di marea più ampia d\'Europa continentale**, e in occasione delle grandi maree l\'acqua circonda completamente la roccia.',
    percheFarla:
      'Perché è una delle costruzioni più improbabili d\'Europa — un\'abbazia gotica issata sulla punta di uno scoglio, con la chiesa che poggia su cripte costruite apposta per reggerla — e perché il rapporto con la marea è il motivo per cui esiste.',
    durata: 'mezza giornata per l\'abbazia e il villaggio; una notte per vederlo alla sera e all\'alba',
    periodo:
      'tutto l\'anno. **Il fattore decisivo non è la stagione ma la marea**: il **calendario delle grandi maree è pubblicato con anni di anticipo**, e sono i pochi giorni in cui il Mont torna a essere un\'isola circondata dall\'acqua. Le ore migliori sono **prima delle 9.30 e dopo le 18**.',
    costo: 'l\'accesso al villaggio è libero; **l\'abbazia ha un biglietto** e il **parcheggio sulla terraferma più la navetta** sono una voce a parte, non trascurabile',
    comePrenotare:
      'Biglietto dell\'abbazia prenotabile online, consigliato in alta stagione. **Le visite serali dell\'abbazia con illuminazione e musica si tengono in periodi limitati: date da verificare.** Per dormire sull\'isola servono mesi di anticipo.',
    cosaPortare:
      'Scarpe comode: la Grande Rue è in salita e all\'abbazia si arriva per scalinate. Giacca a vento sempre. Per la traversata della baia: pantaloni corti, asciugamano, e **niente scarpe** — si cammina scalzi.',
    perChiEAdatta:
      'Tutti, con l\'avvertenza che **dal parcheggio all\'abbazia si sale parecchio** e che il villaggio è fatto di scalinate. La traversata della baia richiede una camminata di ore su sabbia e fango.',
    miaEsperienza:
      'Il Mont-Saint-Michel è vittima del proprio orario. Alle undici del mattino la Grande Rue, che è l\'unica via del villaggio e sale in mezzo alle case, è una fila compatta di persone tra negozi di souvenir e crêperie, e ci si muove a passo d\'uomo per mezz\'ora. Alle sette di sera la stessa via è vuota, si sentono il vento e i gabbiani, e le case chiuse sembrano quello che sono: un paese di duecento metri di lunghezza costruito su uno scoglio. L\'abbazia è la parte che vale, e va guardata da sotto prima che da dentro: la chiesa in cima poggia su una serie di cripte e sale costruite apposta per sostenerla su una roccia che non era piatta — cioè hanno costruito il basamento per poter costruire in cima, e il risultato è un edificio che si sviluppa in verticale su tre livelli con il chiostro sospeso tra cielo e mare. La cosa che però cambia la visita è la marea. Nella baia l\'escursione arriva a valori tra i più alti d\'Europa, e nelle giornate di grande marea l\'acqua risale su chilometri di sabbia a una velocità che sorprende. Da qui l\'altra avvertenza, che non è folklore: **la baia non si attraversa da soli**. Ci sono zone di sabbie mobili, e la marea arriva più in fretta di quanto si creda. Con una guida è una delle camminate più belle di Francia.',
    giudizio: 'imperdibile',
    alternative: [
      'La traversata della baia a piedi con guida autorizzata, che è l\'arrivo dei pellegrini',
      'Vedere il Mont dalla costa bretone, dal lato di Cancale, da cui si ha la vista d\'insieme',
      'L\'abbazia di Fontevraud o quella di Jumièges, se si è saturi di folla',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Il Mont-Saint-Michel circondato dall\'acqua durante una grande marea',
  },
  {
    slug: 'arazzo-bayeux',
    paeseSlug: 'francia',
    destinazioneSlug: 'normandia',
    nome: 'L\'Arazzo di Bayeux',
    localita: 'Bayeux, Calvados',
    cosE:
      'Un ricamo di lana su lino lungo circa settanta metri e alto cinquanta centimetri, realizzato nell\'XI secolo, che racconta in cinquantotto scene la conquista normanna dell\'Inghilterra fino alla battaglia di Hastings del 1066. Non è tecnicamente un arazzo ma un ricamo, ed è iscritto nel registro UNESCO della Memoria del Mondo.',
    percheFarla:
      'Perché è il documento narrativo più straordinario del medioevo europeo: una striscia di stoffa di settanta metri che racconta una vicenda politica complessa, con didascalie in latino, dettagli su navi, armi, abbigliamento e agricoltura, e perfino il passaggio di una cometa. È una fonte storica e un fumetto di novecentocinquant\'anni fa.',
    durata: 'un\'ora-un\'ora e mezza',
    periodo:
      'tutto l\'anno. **Avvertenza importante: il museo è interessato da un lungo intervento di ristrutturazione**, con chiusura e trasferimento temporaneo dell\'opera: **le date e la sede vanno verificate prima di programmare il viaggio.**',
    costo: 'biglietto contenuto, con cumulativi per i musei di Bayeux',
    comePrenotare: 'Prenotazione consigliata in alta stagione. L\'audioguida è inclusa ed è praticamente necessaria, perché scandisce il ritmo lungo la vetrina.',
    cosaPortare: 'Niente. **Non si fotografa** e la sala è in penombra per conservazione.',
    perChiEAdatta: 'Tutti, anche i bambini: è una storia raccontata per immagini e funziona benissimo come tale.',
    miaEsperienza:
      'Ci si immagina un arazzo appeso a una parete e invece è una striscia lunghissima dentro una vetrina curva, in una sala buia, che si percorre camminando lentamente con l\'audioguida che va avanti da sola: si cammina alla velocità del racconto. E il racconto è sorprendentemente moderno — c\'è un antefatto, ci sono i personaggi presentati uno a uno, c\'è il giuramento tradito che giustifica tutta l\'operazione, c\'è la preparazione, e poi la battaglia. I dettagli sono la parte che colpisce: si vedono gli alberi abbattuti e le navi costruite, i cavalli caricati a bordo, i cuochi che preparano il pasto prima dello sbarco, e nei bordi superiori e inferiori corre una fascia di animali, scene agricole e figure che commentano. C\'è anche una cometa, guardata dalla folla con terrore, che gli astronomi hanno identificato con il passaggio della cometa di Halley del 1066. La cosa che resta è che è **propaganda**: è stato commissionato dai vincitori, e racconta la conquista come un atto di giustizia. Saperlo mentre lo si guarda lo rende molto più interessante, non meno.',
    giudizio: 'imperdibile',
    alternative: [
      'La cattedrale di Bayeux, a duecento metri, per la quale l\'arazzo fu probabilmente realizzato',
      'Il Mémorial de Caen, per l\'altra guerra che ha attraversato questa terra',
      'Il castello di Falaise, dove nacque Guglielmo il Conquistatore',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Un dettaglio dell\'Arazzo di Bayeux con le navi normanne e i cavalli',
  },
  {
    slug: 'giverny',
    paeseSlug: 'francia',
    destinazioneSlug: 'normandia',
    nome: 'La casa e il giardino di Monet a Giverny',
    localita: 'Giverny, Eure, tra Parigi e Rouen',
    cosE:
      'La casa in cui Claude Monet ha vissuto per più di quarant\'anni e il giardino che ha progettato, scavato e piantato personalmente: il **Clos Normand** davanti alla casa, con le aiuole di fiori a fasce di colore, e il **giardino d\'acqua** con lo stagno delle ninfee, i salici e il ponte giapponese, costruito deviando un braccio del fiume.',
    percheFarla:
      'Perché il giardino non è il luogo in cui Monet dipingeva: **è il quadro**. Ha comprato il terreno, deviato l\'acqua, piantato le ninfee e disposto i colori per avere il soggetto davanti a casa, e poi lo ha dipinto per trent\'anni fino alle grandi tele delle Ninfee. Camminarci dentro è entrare nel motivo.',
    durata: 'due ore per la casa e i giardini',
    periodo:
      '**aperto indicativamente da fine marzo a inizio novembre**, chiuso d\'inverno: **date da verificare**. I periodi migliori sono **maggio-giugno** (glicini, iris, papaveri) e **luglio-agosto** per le ninfee in fiore. È molto affollato: **l\'apertura mattutina è l\'unico momento tranquillo**.',
    costo: 'biglietto medio; cumulativi possibili con il museo degli impressionismi accanto',
    comePrenotare:
      '**Prenotazione online con fascia oraria fortemente consigliata**, e in alta stagione necessaria. Si raggiunge in treno da Parigi fino a Vernon e poi navetta o bici lungo la ciclabile.',
    cosaPortare: 'Niente di particolare. Il percorso è pianeggiante e si svolge quasi tutto all\'aperto.',
    perChiEAdatta: 'Tutti. Il giardino d\'acqua si raggiunge con un sottopasso e il percorso è accessibile.',
    miaEsperienza:
      'Giverny è una di quelle visite che rischiano di essere rovinate dalla folla e che invece reggono, a una condizione: arrivarci all\'apertura. Alle dieci del mattino il ponte giapponese è un punto in cui si fa la fila per fotografare; alle nove e mezza è vuoto e si sente solo l\'acqua. La cosa che cambia il modo di guardare i quadri è capire l\'ordine delle operazioni: Monet non ha trovato questo posto, se l\'è costruito. Ha comprato il terreno di là dalla strada, ha ottenuto il permesso di deviare un braccio del fiume per creare lo stagno, ha fatto piantare i salici e le ninfee, ha fatto costruire il ponte su modello delle stampe giapponesi che collezionava — e le stampe sono ancora appese nelle stanze della casa. Poi ha passato trent\'anni a dipingere quella superficie d\'acqua a ore diverse. Il giardino davanti alla casa è l\'altra metà: aiuole strettissime organizzate per fasce di colore, con i fiori scelti per fiorire in successione, così che la tavolozza cambiasse tutto l\'anno. Detto in altri termini, si cammina dentro una tela dipinta con le piante. Nella casa, la cucina piastrellata di blu e la sala da pranzo gialla sono rimaste come allora.',
    giudizio: 'la-rifarei',
    alternative: [
      'L\'Orangerie a Parigi, per vedere le grandi Ninfee nelle sale ovali',
      'Il Musée Marmottan Monet, con la più ampia raccolta al mondo dell\'artista',
      'Rouen e la sua cattedrale, dipinta decine di volte a ore diverse',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Il ponte giapponese sullo stagno delle ninfee nel giardino di Monet a Giverny',
  },
  {
    slug: 'gr34-sentiero-doganieri',
    paeseSlug: 'francia',
    destinazioneSlug: 'bretagna',
    nome: 'Il GR34, sentiero dei doganieri',
    localita: 'Tutta la costa bretone, oltre duemila chilometri',
    cosE:
      'Il sentiero costiero più lungo di Francia, nato nel Settecento come pattugliamento antifrode lungo tutta la costa bretone, con la traccia che segue sempre il bordo dell\'acqua — falesie, spiagge, porti, brughiere — senza mai scegliere la scorciatoia interna.',
    percheFarla:
      'Perché non serve percorrerlo tutto: da qualunque paese costiero della Bretagna si può camminare un tratto per due o tre ore e avere l\'esperienza intera, con il paesaggio che cambia continuamente e il mare sempre a un lato.',
    durata: 'da due ore a settimane, secondo il tratto scelto',
    periodo:
      '**da aprile a ottobre** per il meteo più affidabile, ma il sentiero si cammina tutto l\'anno. **Va verificato il meteo appena prima di partire**: qui il tempo cambia nell\'arco di un\'ora in ogni stagione.',
    costo: 'gratuito',
    comePrenotare: 'Nessuna prenotazione. Segnaletica bianco-rossa costante come tutti i GR francesi.',
    cosaPortare: 'Giacca antipioggia sempre, scarpe da trekking, layers, e la consultazione degli **orari di marea** se il tratto scelto tocca zone di battigia.',
    perChiEAdatta:
      'Adattabile a tutti: ci sono tratti pianeggianti facili e tratti su falesia più impegnativi. **Va rispettata la segnaletica delle maree**, perché alcuni tratti si allagano.',
    miaEsperienza:
      'La cosa che colpisce del GR34 è che non finisce mai, e questo lo si capisce subito: da qualunque paese si parta, il sentiero prosegue in entrambe le direzioni verso l\'orizzonte, e non c\'è un punto in cui "arriva" da qualche parte se non dopo settimane. Nato per sorvegliare i contrabbandieri, segue sempre il bordo dell\'acqua nel modo più aderente possibile — sui bordi delle falesie, sulle dighe, attraverso le pinete costiere — e in un paio d\'ore si passa da una spiaggia di sabbia bianca a una scogliera di granito rosa a un porticciolo di pescatori con le barche adagiate sul fango, perché la marea se n\'è andata. È il sentiero che spiega meglio di ogni altra cosa perché la Bretagna vada percorsa e non solo visitata: ogni tratto ha un carattere diverso, e la sorpresa è costante.',
    giudizio: 'imperdibile',
    alternative: [
      'Il tratto della Côte de Granit Rose, tra Perros-Guirec e Ploumanac\'h',
      'Il tratto della penisola di Crozon, più selvaggio',
      'Il cammino costiero attorno a Belle-Île, in versione insulare',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Il sentiero dei doganieri lungo una falesia bretone con il mare sotto',
  },
  {
    slug: 'carnac-megaliti',
    paeseSlug: 'francia',
    destinazioneSlug: 'bretagna',
    nome: 'Gli allineamenti di Carnac',
    localita: 'Carnac, Morbihan',
    cosE:
      'Migliaia di menhir disposti in file parallele su diversi chilometri, eretti nel Neolitico — **più antichi di Stonehenge e delle piramidi egizie** — la cui funzione resta oggetto di ipotesi (rituale, astronomica, funeraria) senza una risposta definitiva.',
    percheFarla:
      'Perché è uno dei complessi megalitici più estesi al mondo e perché guardarlo costringe ad ammettere un limite: non sappiamo perché sia stato costruito, da chi esattamente, né come abbiano spostato pietre di quelle dimensioni senza metallo.',
    durata: 'due-tre ore per una visita con calma',
    periodo:
      'tutto l\'anno. **L\'accesso ai principali campi di allineamento è regolamentato per proteggere il suolo**: in alta stagione (indicativamente da giugno a settembre) l\'ingresso diretto tra le pietre è limitato o solo con visita accompagnata; **fuori stagione l\'accesso è più libero**. Le condizioni cambiano e vanno verificate presso il Maison des Mégalithes.',
    costo: 'l\'accesso perimetrale è gratuito; le visite accompagnate all\'interno dei recinti hanno un costo contenuto',
    comePrenotare: 'Visite accompagnate prenotabili presso il centro visitatori, consigliate in alta stagione.',
    cosaPortare: 'Niente di particolare. Un binocolo aiuta per apprezzare l\'estensione dall\'alto di qualche punto panoramico.',
    perChiEAdatta: 'Tutti. Il perimetro si percorre facilmente a piedi o in bici.',
    miaEsperienza:
      'Carnac va affrontato sapendo cosa si sta guardando, altrimenti sembra solo un campo di pietre. Sono migliaia di menhir, disposti in file parallele che corrono per chilometri, eretti da una civiltà senza metallo, seimila anni fa — prima delle piramidi, prima di Stonehenge. Non sappiamo perché li abbiano messi lì: le ipotesi vanno dal culto religioso all\'osservazione astronomica alla marcatura di percorsi cerimoniali, e nessuna è dimostrata in modo definitivo. È uno dei pochi luoghi in Europa in cui l\'unica risposta onesta a "perché" è "non lo sappiamo", e c\'è qualcosa di raro nell\'accettarlo davanti a un\'opera così enorme.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il cairn di Gavrinis, nel Golfo del Morbihan, con incisioni neolitiche visitabili in barca',
      'Il tumulo di Saint-Michel a Carnac stesso',
      'Locmariaquer, con il grande menhir spezzato',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'File di menhir allineati a Carnac al tramonto',
  },
  {
    slug: 'saint-malo-bastioni',
    paeseSlug: 'francia',
    destinazioneSlug: 'bretagna',
    nome: 'I bastioni di Saint-Malo con la marea alta',
    localita: 'Saint-Malo, Ille-et-Vilaine',
    cosE:
      'Il camminamento continuo sulle mura della città corsara, ricostruita pietra su pietra dopo la distruzione quasi totale del 1944, con vista sul mare, sul forte e sulle isolette raggiungibili a piedi con la bassa marea.',
    percheFarla:
      'Perché il giro completo dei bastioni si fa in un\'ora e mostra la città da un punto di vista che nessun\'altra visita offre, e perché con la marea alta le onde arrivano a scavalcare il molo, che è uno spettacolo gratuito.',
    durata: 'un\'ora per il giro completo dei bastioni',
    periodo: 'tutto l\'anno; **con marea alta e mare mosso** l\'effetto delle onde contro le mura è più spettacolare, e va verificato l\'orario di marea.',
    costo: 'gratuito',
    comePrenotare: 'Nessuna prenotazione.',
    cosaPortare: 'Giacca a vento: sui bastioni il vento è quasi sempre presente.',
    perChiEAdatta: 'Tutti. Il percorso è pianeggiante con qualche gradino.',
    miaEsperienza:
      'Saint-Malo è una città che è stata quasi interamente rasa al suolo nell\'agosto del 1944 e ricostruita, pietra su pietra, negli anni successivi, seguendo per quanto possibile l\'aspetto originario. Il giro dei bastioni permette di capire la scala dell\'operazione: si cammina sopra la città vecchia, si vedono i tetti d\'ardesia, il forte al largo, e con la marea alta le onde si infrangono contro le mura sollevando spruzzi che arrivano sul camminamento. Con la bassa marea, invece, si può camminare fino ad alcune delle isolette antistanti — un\'esperienza che va sempre verificata sugli orari, perché la marea risale in fretta.',
    giudizio: 'la-rifarei',
    alternative: [
      'Dinard, dall\'altra parte dell\'estuario, con le ville liberty',
      'Il Fort National, raggiungibile a piedi con la bassa marea',
      'Cancale, poco più a est, per le ostriche',
    ],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Le mura di Saint-Malo con le onde che si infrangono durante l\'alta marea',
  },
  {
    slug: 'chambord',
    paeseSlug: 'francia',
    destinazioneSlug: 'castelli-loira',
    nome: 'Chambord e la scala a doppia elica',
    localita: 'Chambord, Loir-et-Cher',
    cosE:
      'Il più grande castello della Loira, voluto da Francesco I come reggia di caccia: quattrocentoquaranta stanze, un parco recintato di oltre cinquemila ettari, e al centro una scala a doppia elica — due rampe intrecciate che permettono a due persone di salire e scendere contemporaneamente senza mai incontrarsi.',
    percheFarla:
      'Perché è l\'edificio più sproporzionato e teatrale della valle, mai davvero abitato, e perché la terrazza sul tetto — una foresta di camini, torrette e lucernari scolpiti — è uno degli spazi più stravaganti dell\'architettura rinascimentale.',
    durata: 'mezza giornata, di più se si esplora anche il parco',
    periodo: 'tutto l\'anno; **aprile-giugno e settembre-ottobre** per il periodo migliore, evitando la folla di luglio-agosto.',
    costo: 'biglietto tra i più alti della valle, più il parcheggio a pagamento',
    comePrenotare: 'Prenotazione online consigliata in alta stagione, non sempre obbligatoria.',
    cosaPortare: 'Scarpe comode: l\'edificio è enorme e si cammina molto tra piani e terrazza.',
    perChiEAdatta: 'Tutti. La terrazza si raggiunge con scale, non c\'è ascensore su tutto il percorso.',
    miaEsperienza:
      'Chambord si capisce salendo la scala a doppia elica e provando, come fanno tutti, a vedere se si riesce a incrociare qualcuno che sale dall\'altra parte: non succede mai, ed è esattamente il punto — due rampe intrecciate attorno allo stesso asse centrale, con finestre che si affacciano l\'una sull\'altra senza mai unirsi. Si discute ancora se l\'idea sia arrivata da Leonardo da Vinci, che negli ultimi anni di vita lavorava vicino da Francesco I. Ma la vera sorpresa è la terrazza in cima: un tetto che è diventato una piazza all\'aperto, con decine di camini, torrette e lucernari scolpiti come un secondo palazzo sopra il primo, dove la corte si affacciava per guardare le battute di caccia nella foresta sottostante.',
    giudizio: 'imperdibile',
    alternative: ['Chenonceau, per il contrasto con un castello abitato e arredato', 'Blois, per la stratificazione di stili diversi in un solo edificio'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'La scala a doppia elica di Chambord vista dal basso',
  },
  {
    slug: 'chenonceau',
    paeseSlug: 'francia',
    destinazioneSlug: 'castelli-loira',
    nome: 'Chenonceau, il castello sul fiume',
    localita: 'Chenonceaux, Indre-et-Loire',
    cosE:
      'Un castello costruito letteralmente sopra il fiume Cher, con una galleria a ponte che attraversa l\'acqua. Durante la Seconda guerra mondiale la galleria segnò per un periodo la linea di demarcazione tra zona occupata e zona libera.',
    percheFarla:
      'Perché è il castello più fotogenico della valle, arredato e vissuto, con una storia di donne influenti — Diana di Poitiers, Caterina de\' Medici — che ne hanno definito i giardini contrapposti, e con un dettaglio storico del Novecento che pochi si aspettano.',
    durata: 'mezza giornata',
    periodo: 'tutto l\'anno; da fare **all\'apertura o nell\'ultima ora** per evitare la folla nella galleria.',
    costo: 'biglietto alto, in linea con Chambord',
    comePrenotare: 'Prenotazione online consigliata in alta stagione.',
    cosaPortare: 'Niente di particolare.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Attraversare la galleria di Chenonceau, con l\'acqua del Cher che scorre visibile sotto i piedi attraverso le finestre, è di per sé un\'esperienza che nessun altro castello della Loira offre. Ma il dettaglio che cambia tutto è storico: durante l\'occupazione tedesca, il fiume Cher segnava per un tratto il confine tra la zona occupata a nord e la zona libera di Vichy a sud — e la galleria del castello, che attraversa proprio quel fiume, aveva l\'ingresso in zona occupata e l\'uscita in zona libera. Si racconta che alcune persone siano passate di lì per fuggire. Camminare in quella galleria sapendolo cambia completamente la percezione di un edificio altrimenti solo elegante.',
    giudizio: 'imperdibile',
    alternative: ['Chambord, per lo sfarzo opposto', 'Azay-le-Rideau, per un altro castello sull\'acqua, più piccolo e meno affollato'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'Il castello di Chenonceau con la galleria a ponte sul fiume Cher',
  },
  {
    slug: 'loira-in-bicicletta',
    paeseSlug: 'francia',
    destinazioneSlug: 'castelli-loira',
    nome: 'La Loira in bicicletta',
    localita: 'Itinerario ciclabile della Loira a Vélo, circa 900 km lungo il fiume',
    cosE:
      'Un itinerario ciclabile segnalato che segue il corso della Loira, pianeggiante, con noleggi a senso unico tra le città principali e i castelli distanziati di dieci-venti chilometri l\'uno dall\'altro.',
    percheFarla:
      'Perché la valle della Loira è patrimonio UNESCO come paesaggio, non solo per i monumenti, e la bicicletta è l\'unico modo di sperimentare davvero quel paesaggio: gli argini, i banchi di sabbia, i paesi senza castello e senza turisti.',
    durata: 'una giornata per un tratto tra due castelli; una settimana per un tratto lungo',
    periodo: 'aprile-ottobre, con maggio-giugno e settembre come mesi ideali per temperatura.',
    costo: 'noleggio bici a prezzo contenuto, con supplemento per il ritiro a senso unico',
    comePrenotare: 'Noleggio prenotabile online presso i punti lungo il percorso.',
    cosaPortare: 'Abbigliamento a strati, protezione solare, acqua.',
    perChiEAdatta: 'Praticamente tutti: il percorso è pianeggiante e la rete ciclabile è ben segnalata.',
    miaEsperienza:
      'La differenza tra vedere la Loira in auto e vederla in bici è la differenza tra visitare dei monumenti e attraversare un paesaggio. Pedalando lungo l\'argine si passa da un castello all\'altro in due ore invece che in venti minuti, e nel mezzo ci sono paesi che non hanno un castello e quindi non hanno turisti, campi coltivati, e la Loira stessa — che è uno degli ultimi grandi fiumi europei non canalizzato, con i suoi banchi di sabbia mobili e le isole che cambiano di anno in anno. È il modo in cui questo paesaggio andrebbe visto, ed è anche il motivo per cui l\'UNESCO ha iscritto la valle intera e non i singoli edifici.',
    giudizio: 'la-rifarei',
    alternative: ['Un tour in auto classico, se il tempo è limitato', 'Una gita in barca tradizionale sul fiume, dove disponibile'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'Una ciclabile lungo l\'argine della Loira con un castello sullo sfondo',
  },
  {
    slug: 'cantina-troglodita-loira',
    paeseSlug: 'francia',
    destinazioneSlug: 'castelli-loira',
    nome: 'Una cantina trogloditica scavata nel tufo',
    localita: 'Zone di Vouvray, Chinon, Saumur',
    cosE:
      'Gallerie scavate nella stessa pietra di tufo bianco con cui sono stati costruiti i castelli della valle, oggi riusate come cantine a temperatura costante di circa dodici gradi, con le bottiglie disposte in nicchie ricavate nella roccia.',
    percheFarla:
      'Perché racconta il legame materiale tra i castelli e il territorio: la pietra cavata per costruire ha lasciato chilometri di gallerie che oggi servono a far maturare il vino, e scendere in una di queste cantine è un\'esperienza fisica, non solo enologica.',
    durata: 'un\'ora-un\'ora e mezza con degustazione',
    periodo: 'tutto l\'anno, essendo un ambiente sotterraneo a temperatura costante.',
    costo: 'degustazione a prezzo contenuto, spesso gratuita con l\'acquisto',
    comePrenotare: 'Appuntamento consigliato, specie per le proprietà più piccole.',
    cosaPortare: 'Una giacca leggera: sottoterra fa più fresco che fuori.',
    perChiEAdatta: 'Tutti, salvo chi soffre di claustrofobia in spazi sotterranei bassi.',
    miaEsperienza:
      'Scendere in una di queste cantine significa entrare in una galleria a dodici gradi costanti con le bottiglie incastrate in nicchie scavate nella parete, e il produttore spiega quasi sempre lo stesso fatto sorprendente: quella pietra bianca e tenera che si taglia con facilità è la stessa che, cavata in blocchi, ha costruito il castello che si è appena visitato al di là del fiume. È un collegamento diretto tra il paesaggio sopra e quello sotto, ed è la parte della valle della Loira che meno guide raccontano.',
    giudizio: 'bella-non-essenziale',
    alternative: ['Le grotte di funghi champignon, coltivati nelle stesse gallerie', 'Una degustazione in superficie in una proprietà tradizionale'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'Una cantina scavata nel tufo bianco con bottiglie in nicchie nella roccia',
  },
  {
    slug: 'saint-emilion',
    paeseSlug: 'francia',
    destinazioneSlug: 'bordeaux',
    nome: 'Saint-Émilion e la chiesa monolitica',
    localita: 'Saint-Émilion, Gironda',
    cosE:
      'Un borgo medievale patrimonio UNESCO dal 1999 come primo paesaggio vitivinicolo iscritto al mondo, costruito sopra una rete di gallerie e catacombe, con al centro una chiesa scavata interamente nella roccia calcarea — la più grande d\'Europa nel suo genere.',
    percheFarla:
      'Perché unisce vino, architettura e sottosuolo in un modo che nessun\'altra tappa della regione offre, e perché la chiesa monolitica è un\'opera che richiede secoli di scavo manuale per essere capita davvero.',
    durata: 'mezza giornata per il borgo e la chiesa, una giornata intera con una degustazione',
    periodo: 'tutto l\'anno; **settembre-ottobre** in vendemmia, con l\'avvertenza che alcune proprietà riducono le visite in quel periodo.',
    costo: 'la visita della chiesa monolitica e delle catacombe è a pagamento tramite l\'ufficio del turismo; le degustazioni variano molto per prezzo',
    comePrenotare:
      '**La chiesa monolitica e le catacombe si visitano solo con accompagnamento prenotato tramite l\'ufficio del turismo**: non ci si entra da soli. Le degustazioni nelle proprietà vanno prenotate separatamente.',
    cosaPortare: 'Scarpe comode: il borgo è su un pendio con vicoli acciottolati ripidi.',
    perChiEAdatta: 'Tutti, con attenzione ai bambini piccoli sulle scale ripide del borgo.',
    miaEsperienza:
      'Il modo in cui la chiesa monolitica di Saint-Émilion è stata realizzata cambia il modo di guardarla: non è stata costruita, è stata **scavata** — nel corso di secoli, a partire dal XII secolo, artigiani hanno tolto pietra dall\'interno di una collina calcarea per ricavare uno spazio ecclesiastico enorme, lasciando pilastri e volte nella roccia stessa. È la chiesa scavata più grande d\'Europa, e visitarla insieme alle catacombe sottostanti, con una guida che spiega la tecnica, dà al borgo tutto sopra un significato diverso: il paese intero galleggia su un sottosuolo bucato per secoli.',
    giudizio: 'imperdibile',
    alternative: ['Pomerol, a pochi chilometri, per un contrasto di scala nelle proprietà', 'I Graves, a sud di Bordeaux, per un paesaggio diverso'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'Il borgo medievale di Saint-Émilion visto dall\'alto tra i vigneti',
  },
  {
    slug: 'sauternes-muffa-nobile',
    paeseSlug: 'francia',
    destinazioneSlug: 'bordeaux',
    nome: 'Sauternes e la muffa nobile',
    localita: 'Sauternes, Gironda',
    cosE:
      'La denominazione dei vini dolci bordolesi, dove le nebbie mattutine di un affluente freddo che incontra un fiume più caldo creano le condizioni perfette per la Botrytis cinerea — la muffa nobile — che concentra gli zuccheri negli acini raccolti a mano, a passaggi successivi, uno per uno.',
    percheFarla:
      'Perché è la storia enologica più controintuitiva della regione: si guardano grappoli marci, raggrinziti e coperti di muffa grigia, sapendo che sono esattamente quello per cui la squadra ha aspettato tutto l\'anno.',
    durata: 'mezza giornata',
    periodo: 'la vendemmia avviene indicativamente **da fine settembre a novembre**, a passaggi successivi.',
    costo: 'degustazione a prezzo medio-alto in alcune delle proprietà più note; più accessibile nelle denominazioni satellite',
    comePrenotare: 'Appuntamento necessario, specie nel periodo di vendemmia quando le proprietà sono al lavoro.',
    cosaPortare: 'Niente di particolare.',
    perChiEAdatta: 'Tutti; interessante soprattutto per chi si incuriosisce del processo agricolo oltre che del vino.',
    miaEsperienza:
      'Vedere per la prima volta i grappoli da cui si fa il Sauternes è uno shock: sono acini raggrinziti, ricoperti di una muffa grigiastra, che qualunque agricoltore normale scarterebbe senza pensarci. È esattamente il risultato cercato — la Botrytis cinerea concentra gli zuccheri disidratando l\'acino — e le squadre passano nello stesso filare cinque o sei volte in settimane diverse, raccogliendo a mano solo gli acini arrivati al punto giusto. Le rese sono bassissime: si dice che da una vite intera esca un solo bicchiere di vino. È uno dei processi più controintuitivi dell\'agricoltura europea, e capirlo sul posto vale più di qualunque degustazione.',
    giudizio: 'la-rifarei',
    alternative: ['I Graves, a nord, per rossi e bianchi secchi', 'Il Médoc, per il contrasto con i grandi rossi da invecchiamento'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'Grappoli affetti da muffa nobile pronti per la vendemmia a Sauternes',
  },
  {
    slug: 'dune-du-pilat',
    paeseSlug: 'francia',
    destinazioneSlug: 'bordeaux',
    nome: 'La Dune du Pilat',
    localita: 'La Teste-de-Buch, vicino ad Arcachon',
    cosE:
      'La duna di sabbia più alta d\'Europa, che avanza di alcuni metri all\'anno verso l\'interno inghiottendo progressivamente la pineta alle sue spalle.',
    percheFarla:
      'Perché è un fenomeno geografico raro in Europa occidentale e perché la vista dalla cima, con l\'oceano da un lato e la foresta delle Landes dall\'altro, è tra le più sorprendenti della costa atlantica francese.',
    durata: 'un\'ora-un\'ora e mezza',
    periodo: 'tutto l\'anno; **il tramonto** è il momento più bello, con meno gente e luce migliore.',
    costo: 'parcheggio a pagamento; accesso alla duna gratuito',
    comePrenotare: 'Nessuna prenotazione.',
    cosaPortare: '**In estate la sabbia scotta**: scarpe leggere o sandali robusti. Acqua, perché la salita è faticosa su terreno cedevole.',
    perChiEAdatta: 'Tutti con una base di forma fisica: la salita su sabbia è più faticosa di quanto sembri.',
    miaEsperienza:
      'Salire sulla Dune du Pilat è più faticoso di quanto l\'altezza suggerisca, perché ogni passo affonda nella sabbia e si perde metà dello sforzo. Arrivati in cima, però, la vista compensa tutto: da un lato l\'oceano Atlantico a perdita d\'occhio, dall\'altro la pineta delle Landes che la duna sta lentamente seppellendo, avanzando di alcuni metri ogni anno. È uno dei pochi luoghi in Europa in cui si vede un fenomeno geologico muoversi quasi in tempo reale, generazione dopo generazione.',
    giudizio: 'la-rifarei',
    alternative: ['Il Bacino di Arcachon in barca', 'Il Cap Ferret, dall\'altro lato del bacino'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'La Dune du Pilat con l\'oceano da un lato e la pineta dall\'altro',
  },
  {
    slug: 'ostriche-arcachon',
    paeseSlug: 'francia',
    destinazioneSlug: 'bordeaux',
    nome: 'Ostriche nelle cabanes di Arcachon',
    localita: 'Bacino di Arcachon, Gironda',
    cosE:
      'Le capanne dei produttori di ostriche sul Bacino di Arcachon, dove si comprano e si mangiano sul posto, sedendosi su un pontile, accompagnate tradizionalmente da piccole salsicce calde.',
    percheFarla:
      'Perché è il modo più diretto e meno costoso di mangiare ostriche appena raccolte, direttamente da chi le alleva, in un contesto informale che non ha niente a che vedere con un ristorante.',
    durata: 'un\'ora-due ore',
    periodo: 'tutto l\'anno, con la stagione classica delle ostriche da settembre a aprile, anche se oggi si mangiano tutto l\'anno.',
    costo: 'basso: è uno dei pasti più economici della zona in rapporto alla qualità',
    comePrenotare: 'Nessuna prenotazione, si arriva e si ordina alla capanna.',
    cosaPortare: 'Niente di particolare, eventualmente un coltello da ostriche se non fornito.',
    perChiEAdatta: 'Tutti gli amanti del pesce crudo; meno adatto a chi non apprezza le ostriche.',
    miaEsperienza:
      'Mangiare ostriche in una cabane di Arcachon, seduti su un pontile di legno con i piedi che quasi toccano l\'acqua del bacino, è un\'esperienza completamente diversa da un ristorante: si comprano da chi le ha appena raccolte, si aprono lì, e si accompagnano con del pane, burro e le tradizionali piccole salsicce calde alla griglia. Il contrasto tra il gusto salino e fresco dell\'ostrica e la salsiccia calda è una combinazione locale che sorprende chi non la conosce, ed è il modo più genuino di sperimentare il bacino.',
    giudizio: 'la-rifarei',
    alternative: ['Cancale, in Bretagna, per un\'altra zona ostricola storica', 'Un ristorante di pesce ad Arcachon per una versione più formale'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'Ostriche appena aperte su un pontile di legno ad Arcachon',
  },
  {
    slug: 'cantina-champagne',
    paeseSlug: 'francia',
    destinazioneSlug: 'vigneti-di-francia',
    nome: 'Una cantina di Champagne nelle crayères',
    localita: 'Reims o Épernay, Marna',
    cosE:
      'Le crayères sono cave di gesso di epoca gallo-romana, scavate per estrarre il materiale da costruzione, oggi riusate come cantine per la maturazione dello Champagne: profonde decine di metri, a temperatura e umidità costanti tutto l\'anno.',
    percheFarla:
      'Perché scendere in queste gallerie duemila anni dopo che sono state scavate, con milioni di bottiglie che riposano nel buio, è un\'esperienza spaziale prima ancora che enologica, e permette di vedere da vicino il processo del rémuage e della sboccatura.',
    durata: 'un\'ora-un\'ora e mezza con degustazione',
    periodo: 'tutto l\'anno, essendo un ambiente sotterraneo.',
    costo: 'variabile da contenuto a molto alto secondo la maison; le grandi case hanno visite strutturate a pagamento fisso',
    comePrenotare: 'Prenotazione online consigliata, spesso necessaria per le maison più note.',
    cosaPortare: 'Una giacca: sottoterra la temperatura è più bassa che in superficie.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Scendere in una crayère significa entrare in una galleria scavata da mani romane per estrarre gesso, e trovarla oggi piena di scaffalature con milioni di bottiglie che riposano nel buio e nel silenzio. Il processo che si osserva — il rémuage, la lenta rotazione delle bottiglie per far scendere i sedimenti verso il collo, un tempo fatto a mano bottiglia per bottiglia e oggi spesso meccanizzato — e la sboccatura, l\'espulsione del tappo di ghiaccio con i sedimenti, sono la parte tecnica più affascinante di tutta la visita. Il fatto che lo spazio stesso abbia duemila anni di storia prima ancora di diventare una cantina aggiunge un livello che nessun\'altra regione vinicola francese offre.',
    giudizio: 'imperdibile',
    alternative: ['L\'Avenue de Champagne a Épernay, con le gallerie sotto la strada stessa', 'Una piccola maison a conduzione familiare, per un\'accoglienza più informale'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: 'Bottiglie di Champagne allineate in una crayère scavata nel gesso',
  },
  {
    slug: 'route-des-vins-alsazia',
    paeseSlug: 'francia',
    destinazioneSlug: 'vigneti-di-francia',
    nome: 'La Route des Vins d\'Alsace',
    localita: 'Circa 170 km tra Marlenheim e Thann, ai piedi dei Vosgi',
    cosE:
      'La strada dei vini più antica di Francia, che collega decine di villaggi a case a graticcio tra i Vosgi e la pianura del Reno, con le cantine che ricevono facilmente, spesso senza appuntamento.',
    percheFarla:
      'Perché è la rotta del vino più accessibile e più bella di Francia: i villaggi distano pochi chilometri, la rete ciclabile è ottima, e i bianchi alsaziani — Riesling, Gewurztraminer, Pinot Gris — sono tra i più interessanti d\'Europa a prezzi contenuti.',
    durata: 'tre-cinque giorni per un tratto significativo',
    periodo: 'aprile-ottobre, con maggio-giugno per il paesaggio verde e settembre-ottobre per la vendemmia.',
    costo: 'basso: molte degustazioni sono gratuite o a costo simbolico',
    comePrenotare: 'Molte cantine ricevono senza appuntamento; per le più note è comunque consigliato un contatto preventivo.',
    cosaPortare: 'Se in bicicletta: abbigliamento a strati, casco.',
    perChiEAdatta: 'Praticamente tutti; ottima anche per famiglie grazie alla scala ridotta dei villaggi e alla bassa velocità del viaggio.',
    miaEsperienza:
      'La Route des Vins d\'Alsace è la più bella da attraversare di tutte le rotte francesi: villaggi come Riquewihr, Eguisheim e Kaysersberg hanno una scenografia quasi eccessiva di case a graticcio, gerani alle finestre e insegne in ferro battuto, ma sono veri, abitati, non ricostruiti per i turisti. Il fatto che le cantine ricevano spesso senza appuntamento, in un contesto informale e a prezzi bassi, la rende radicalmente diversa dalla Borgogna: qui si entra, si assaggia, si chiacchiera, e si spende poco. È la rotta giusta per chi non ha mai fatto un viaggio del vino e non sa da dove cominciare.',
    giudizio: 'imperdibile',
    alternative: ['Colmar e il Museo Unterlinden, per una pausa culturale', 'Il Mont Sainte-Odile, per una gita fuori dalla rotta principale'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: 'Un villaggio a case a graticcio sulla Route des Vins d\'Alsace tra i vigneti',
  },
  {
    slug: 'climats-borgogna',
    paeseSlug: 'francia',
    destinazioneSlug: 'vigneti-di-francia',
    nome: 'Camminare tra i climats della Côte de Nuits',
    localita: 'Côte de Nuits, tra Digione e Beaune',
    cosE:
      'Un sentiero che attraversa a piedi i climats — le oltre milleduecento parcelle delimitate e nominate, patrimonio UNESCO dal 2015 — permettendo di vedere da vicino i muri a secco che separano terreni di valore molto diverso.',
    percheFarla:
      'Perché è il modo più diretto, e gratuito, di toccare con mano il concetto di terroir: due parcelle identiche all\'occhio, separate da un muro, producono vini di prezzo incomparabile, e camminarci in mezzo è più istruttivo di qualunque degustazione.',
    durata: 'due-tre ore',
    periodo: 'tutto l\'anno; **settembre-ottobre** per i colori della vendemmia.',
    costo: 'gratuito',
    comePrenotare: 'Nessuna prenotazione.',
    cosaPortare: 'Scarpe comode; il percorso è su sterrato tra i filari.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Camminare tra i climats della Côte de Nuits è l\'esperienza che rende comprensibile un concetto altrimenti astratto: si cammina venti minuti e si passa da una denominazione regionale a un grand cru che vale cento volte tanto, con un muro a secco alto un metro come unico confine visibile. Il terreno sembra identico da entrambi i lati. Non lo è — cambia l\'esposizione, il drenaggio, la pendenza di pochi gradi — ma la differenza è invisibile a occhio nudo, e solo il vino la registra. È un\'idea che in altre regioni vinicole esiste ma non è mai stata codificata e delimitata con questa precisione, e vederla disegnata sul terreno è la lezione più utile di tutto un viaggio del vino.',
    giudizio: 'imperdibile',
    alternative: ['L\'Hôtel-Dieu di Beaune, per il patrimonio architettonico legato al vino', 'Una degustazione presso un domaine, prenotata con settimane di anticipo'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: 'Un muro a secco tra due parcelle di vigneto nella Côte de Nuits',
  },
  {
    slug: 'lavanda-provenza',
    paeseSlug: 'francia',
    destinazioneSlug: 'provenza',
    nome: 'La lavanda in fiore',
    localita: 'Altopiani di Valensole e di Sault',
    cosE:
      'I campi di lavanda e lavandino della Provenza, che fioriscono in una finestra breve e diversa a seconda dell\'altopiano — Valensole più presto, Sault più tardi — e vengono tagliati subito dopo la fioritura.',
    percheFarla:
      'Perché è uno dei paesaggi agricoli più fotografati al mondo, ma solo se si arriva nella finestra giusta: è l\'esperienza della Provenza in cui la pianificazione conta più di ogni altra cosa.',
    durata: 'una giornata per visitare più campi',
    periodo:
      '**Valensole: metà giugno-metà luglio. Sault: metà luglio-inizio agosto.** Il taglio avviene subito dopo la fioritura: **verificare lo stato dei campi pochi giorni prima di partire.**',
    costo: 'gratuito guardare dalla strada; alcune distillerie offrono visite a pagamento contenuto',
    comePrenotare: 'Nessuna prenotazione per i campi; le distillerie e le abbazie con giardini vanno verificate per orari.',
    cosaPortare: 'Cappello e acqua: si cammina spesso sotto il sole di piena estate. Repellente per le api, numerosissime nei campi.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'L\'errore più comune sulla lavanda provenzale è arrivare al momento sbagliato, e capita più spesso di quanto si pensi: i campi fioriscono in una finestra di poche settimane, diversa da altopiano ad altopiano, e vengono tagliati quasi subito dopo. Valensole ha i campi larghi e regolari delle fotografie più diffuse, con il lavandino che fiorisce prima; Sault, più in quota, ha la lavanda vera, con un profumo più fine, che fiorisce più tardi. Chi arriva ad agosto pensando ai campi viola trova quasi sempre le stoppie. La regola pratica che vale più di ogni altra: verificare lo stato della fioritura pochi giorni prima di muoversi, perché varia ogni anno con l\'andamento stagionale.',
    giudizio: 'la-rifarei',
    alternative: ['Il Musée de la Lavande, per capire distillazione e storia', 'Rinunciare alla lavanda e venire in Provenza a settembre, molto meno affollata'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Un campo di lavanda in fiore sull\'altopiano di Valensole',
  },
  {
    slug: 'gole-verdon',
    paeseSlug: 'francia',
    destinazioneSlug: 'provenza',
    nome: 'Le Gole del Verdon',
    localita: 'Gorges du Verdon, Alpes-de-Haute-Provence e Var',
    cosE:
      'Il canyon più profondo d\'Europa, scavato dal fiume Verdon, con pareti calcaree che in alcuni tratti superano i settecento metri e un\'acqua di colore verde smeraldo per la presenza di particelle calcaree in sospensione.',
    percheFarla:
      'Perché è uno dei paesaggi più spettacolari di Francia, percorribile a piedi sul fondo, in kayak dal lago di Sainte-Croix, o ammirato dall\'alto lungo la strada panoramica.',
    durata: 'una giornata per la strada panoramica; una giornata intera o più per il fondo del canyon',
    periodo: 'maggio-ottobre; **luglio-agosto molto affollato**, con parcheggi ai punti panoramici saturi.',
    costo: 'gratuito per i punti panoramici; a pagamento il noleggio di kayak o canoe sul lago',
    comePrenotare: 'Noleggio imbarcazioni consigliato prenotare in anticipo in alta stagione.',
    cosaPortare: 'Scarpe da trekking per il fondo del canyon, che ha tratti impegnativi e alcuni tunnel scavati nella roccia da attraversare con torcia.',
    perChiEAdatta: 'La strada panoramica è per tutti; la percorrenza sul fondo richiede una base di allenamento e non è per chi soffre di vertigini nei tratti esposti.',
    miaEsperienza:
      'Il Verdon sorprende chi ha in mente solo la Provenza dei villaggi e della lavanda: qui ci si trova davanti a un canyon con pareti verticali di centinaia di metri, un\'acqua di un verde quasi innaturale, e sentieri che attraversano tunnel scavati nella roccia da percorrere con la torcia frontale. Camminare sul fondo, con le pareti che si alzano su entrambi i lati, dà una sensazione di scala che nessuna fotografia dall\'alto riesce a trasmettere, ed è uno dei motivi per cui il Verdon merita almeno quanto i più celebrati villaggi del Luberon.',
    giudizio: 'imperdibile',
    alternative: ['Il lago di Sainte-Croix, per un\'esperienza più rilassata in kayak', 'Moustiers-Sainte-Marie, il villaggio all\'ingresso delle gole'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Le pareti del canyon del Verdon con l\'acqua verde smeraldo del fiume',
  },
  {
    slug: 'calanques-marsiglia',
    paeseSlug: 'francia',
    destinazioneSlug: 'provenza',
    nome: 'Le Calanques tra Marsiglia e Cassis',
    localita: 'Parco Nazionale delle Calanques',
    cosE:
      'Un parco nazionale di falesie calcaree bianche che scendono verticalmente nel Mediterraneo, formando insenature strette e profonde raggiungibili a piedi, in barca o in kayak.',
    percheFarla:
      'Perché è un paesaggio mediterraneo estremo, a pochi minuti dal centro di una grande città, e perché il contrasto tra il bianco della roccia e il blu del mare è tra i più intensi della costa francese.',
    durata: 'mezza giornata per una calanque; una giornata per un giro in barca di più calanques',
    periodo:
      'aprile-ottobre; **d\'estate va sempre verificato l\'accesso**, perché per rischio incendio il parco applica una valutazione giornaliera con **chiusure decise il giorno prima** e alcune calanque hanno **accesso a numero chiuso con prenotazione gratuita obbligatoria**.',
    costo: 'l\'accesso via terra è gratuito (dove non contingentato); il giro in barca ha un costo medio',
    comePrenotare: '**Verificare ogni giorno lo stato di accesso in estate** sul sito del parco; prenotare l\'accesso alle calanque contingentate quando richiesto.',
    cosaPortare: 'Scarpe da trekking per i sentieri, che sono rocciosi e senza ombra; molta acqua.',
    perChiEAdatta: 'I sentieri richiedono una base di allenamento; alcune calanques sono raggiungibili solo via mare.',
    miaEsperienza:
      'Le Calanques sono la sorpresa di chi associa Marsiglia solo al porto e al Vieux-Port: bastano venti minuti di auto o di bus dal centro città per trovarsi tra falesie bianche verticali che scendono in un mare turchese, in insenature strette che sembrano fiordi mediterranei. Il punto pratico da sapere prima è che l\'accesso non è scontato: per il rischio di incendi, che qui sono una minaccia reale e frequente, il parco decide ogni giorno d\'estate quali sentieri restano aperti, e alcune calanque più delicate richiedono una prenotazione gratuita obbligatoria per limitare l\'affluenza.',
    giudizio: 'imperdibile',
    alternative: ['Cassis, il paese all\'estremità est del parco, con un porticciolo pittoresco', 'Un giro in barca da Cassis per vedere più calanques in poche ore'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Le falesie bianche di una calanque con il mare turchese sotto',
  },
  {
    slug: 'pont-du-gard',
    paeseSlug: 'francia',
    destinazioneSlug: 'provenza',
    nome: 'Il Pont du Gard',
    localita: 'Vers-Pont-du-Gard, Gard',
    cosE:
      'Un acquedotto romano a tre ordini di arcate, alto quasi cinquanta metri, parte di una condotta di circa cinquanta chilometri con una pendenza media di appena venticinque centimetri per chilometro, patrimonio UNESCO.',
    percheFarla:
      'Perché è uno dei monumenti dell\'ingegneria romana meglio conservati al mondo, e perché sotto le arcate si può fare il bagno nel fiume Gardon, unendo storia e refrigerio.',
    durata: 'due-tre ore',
    periodo: 'tutto l\'anno; **estate** per il bagno nel fiume sottostante.',
    costo: 'ingresso al sito e parcheggio a pagamento; il museo interpretativo è incluso',
    comePrenotare: 'Non necessaria, salvo eventi speciali.',
    cosaPortare: 'Costume e asciugamano d\'estate per il bagno nel fiume.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Il Pont du Gard colpisce per la precisione più che per la dimensione: è un acquedotto costruito duemila anni fa, parte di una condotta lunga cinquanta chilometri, con una pendenza media di appena venticinque centimetri per chilometro — un margine che oggi si otterrebbe con strumenti laser. Vederlo dal basso, con le tre file di arcate che si sovrappongono, e poi fare il bagno nel fiume proprio sotto le arcate più basse, è un modo di stare in un monumento romano che in Italia raramente si può replicare con la stessa naturalezza.',
    giudizio: 'imperdibile',
    alternative: ['Nîmes, con l\'arena romana meglio conservata al mondo', 'Uzès, il borgo vicino, meno affollato'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Il Pont du Gard con le tre file di arcate romane sul fiume Gardon',
  },
  {
    slug: 'camargue-a-cavallo',
    paeseSlug: 'francia',
    destinazioneSlug: 'camargue',
    nome: 'A cavallo in Camargue',
    localita: 'Riserva della Camargue, delta del Rodano',
    cosE:
      'Una passeggiata a cavallo con i cavalli camarguesi — una razza antichissima che nasce scura e diventa bianca tra i quattro e i sette anni — attraverso zone umide e praterie salmastre non raggiungibili in altro modo.',
    percheFarla:
      'Perché è il modo tradizionale con cui i gardians, i mandriani camarguesi, si muovono in questo territorio, e permette di avvicinarsi a fenicotteri e tori senza disturbarli come farebbe un veicolo.',
    durata: 'un\'ora-mezza giornata secondo il percorso',
    periodo:
      'aprile-ottobre; **evitare l\'estate piena per il caldo e le zanzare**, che al tramonto rendono la Camargue difficile.',
    costo: 'a prezzo contenuto per un\'ora, più alto per un\'escursione di mezza giornata',
    comePrenotare: 'Prenotazione presso una manade (azienda di allevamento) o un maneggio locale.',
    cosaPortare: 'Repellente per insetti, maniche lunghe, cappello.',
    perChiEAdatta: 'Anche principianti: i cavalli camarguesi sono noti per il temperamento docile.',
    miaEsperienza:
      'Muoversi a cavallo in Camargue apre zone che a piedi o in auto restano inaccessibili: si attraversano acquitrini bassi, si passa accanto a gruppi di cavalli bianchi semibradi, e capita di avvicinarsi a fenicotteri che filtrano il fango con il becco senza spaventarli, cosa che con un veicolo non succederebbe. È anche il modo in cui i gardians governano ancora oggi i tori e i cavalli di queste terre, e sentirsi parte per un\'ora di quella pratica, invece che semplici spettatori, cambia la percezione dell\'intera riserva.',
    giudizio: 'la-rifarei',
    alternative: ['Il birdwatching a piedi lungo la digue à la mer', 'Una visita a una manade per vedere il lavoro dei gardians senza cavalcare'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Cavalli bianchi camarguesi che camminano in un acquitrino al tramonto',
  },
  {
    slug: 'fenicotteri-camargue',
    paeseSlug: 'francia',
    destinazioneSlug: 'camargue',
    nome: 'I fenicotteri rosa di Pont de Gau',
    localita: 'Parc Ornithologique du Pont de Gau, Camargue',
    cosE:
      'Un parco ornitologico con passerelle che permettono di osservare da vicino i fenicotteri rosa, presenti tutto l\'anno in Camargue e in numero maggiore in primavera ed estate, insieme a centinaia di altre specie di uccelli migratori.',
    percheFarla:
      'Perché la Camargue è l\'unico sito di nidificazione regolare del fenicottero rosa in Francia, e questo parco permette un\'osservazione ravvicinata senza disturbare gli animali.',
    durata: 'due ore',
    periodo: 'tutto l\'anno; primavera e inizio estate per il picco di presenza e per la migrazione.',
    costo: 'biglietto contenuto',
    comePrenotare: 'Non necessaria.',
    cosaPortare: 'Binocolo se disponibile, repellente per insetti in estate.',
    perChiEAdatta: 'Tutti, percorso su passerelle accessibili.',
    miaEsperienza:
      'Vedere centinaia di fenicotteri rosa che filtrano il fango con il becco rovesciato all\'ingiù — una postura che a prima vista sembra innaturale — in un paesaggio piattissimo di canne e acqua bassa, è l\'immagine che meglio riassume la Camargue. Il parco di Pont de Gau permette di avvicinarsi su passerelle senza disturbare gli uccelli, ed è il posto giusto per capire perché questo delta sia uno dei siti ornitologici più importanti d\'Europa.',
    giudizio: 'la-rifarei',
    alternative: ['La digue à la mer, per birdwatching più libero e meno strutturato', 'Una gita in barca sull\'Étang de Vaccarès'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Fenicotteri rosa in una laguna della Camargue',
  },
  {
    slug: 'aigues-mortes',
    paeseSlug: 'francia',
    destinazioneSlug: 'camargue',
    nome: 'Le mura di Aigues-Mortes e le saline rosa',
    localita: 'Aigues-Mortes, Gard',
    cosE:
      'Una città fortificata fatta costruire da Luigi IX nel XIII secolo come porto d\'imbarco per le crociate, con le mura medievali intatte percorribili a piedi, affacciate su saline che in certe condizioni assumono un colore rosa.',
    percheFarla:
      'Perché è una delle città murate meglio conservate di Francia, con una storia diretta legata alle crociate, e perché la vista dalle mura sulle saline rosa al tramonto è tra le più insolite della regione.',
    durata: 'due ore',
    periodo: 'tutto l\'anno; **il colore rosa delle saline è più intenso in estate**, per la concentrazione di sale e la presenza di microrganismi.',
    costo: 'biglietto contenuto per la salita alle mura',
    comePrenotare: 'Non necessaria.',
    cosaPortare: 'Niente di particolare.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Aigues-Mortes è una città che sembra uscita intatta dal Duecento: le mura la circondano per intero e si percorrono a piedi su tutto il perimetro, con la pianta a griglia della città medievale sotto e, oltre le mura, le saline che si estendono fino all\'orizzonte. Fu costruita da Luigi IX come porto per imbarcare i crociati verso la Terra Santa, anche se oggi il mare si è ritirato di alcuni chilometri. Salire sulle mura al tramonto, con le saline che prendono un colore rosa per la concentrazione di sale, è uno dei modi più suggestivi di chiudere una giornata in Camargue.',
    giudizio: 'la-rifarei',
    alternative: ['Le saline di Salin-de-Giraud, più vicine al cuore della riserva', 'Nîmes, poco distante, per l\'arena romana'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Le mura medievali di Aigues-Mortes con le saline rosa sullo sfondo',
  },
  {
    slug: 'castelli-catari',
    paeseSlug: 'francia',
    destinazioneSlug: 'occitania',
    nome: 'Un castello cataro',
    localita: 'Quéribus, Peyrepertuse o Montségur, Occitania',
    cosE:
      'Fortezze arroccate su creste calcaree a centinaia di metri di altezza, ultimi rifugi della comunità catara sterminata dalla crociata albigese nel XIII secolo, raggiungibili solo a piedi dopo un parcheggio in fondovalle.',
    percheFarla:
      'Perché raccontano una delle vicende più dure del medioevo europeo — una crociata bandita contro cristiani nel proprio paese — in un paesaggio che da solo giustificherebbe la salita.',
    durata: 'mezza giornata per un castello, con salita e discesa a piedi',
    periodo: 'aprile-ottobre; **evitare le ore centrali d\'estate**, perché le creste sono senza ombra e il vento è quasi sempre forte.',
    costo: 'biglietto contenuto o gratuito secondo il sito',
    comePrenotare: 'Non necessaria.',
    cosaPortare: 'Scarpe da trekking, acqua, giacca a vento (il vento in cima è quasi costante).',
    perChiEAdatta: 'Richiede una base di forma fisica per la salita, spesso ripida e su terreno sconnesso.',
    miaEsperienza:
      'Salire a Peyrepertuse o a Quéribus significa camminare per mezz\'ora o un\'ora su un sentiero ripido, con il vento che non si ferma mai, fino a raggiungere una fortezza costruita su una cresta calcarea larga pochi metri, a centinaia di metri d\'altezza. Da lassù si guarda una valle vuota, e si pensa a cosa significasse rifugiarsi lì nel Duecento, quando il papato bandì una crociata non contro musulmani ma contro cristiani del proprio paese — la comunità catara — e la campagna durò vent\'anni e finì con uno sterminio. Di quella gente non è rimasto altro che queste rocce, e i nomi dei luoghi nei cartelli. È una storia poco conosciuta fuori dalla Francia, e questi castelli sono il modo più diretto per incontrarla.',
    giudizio: 'imperdibile',
    alternative: ['Il museo del catarismo a Villerouge-Termenès', 'Carcassonne, per un contesto fortificato completamente diverso'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Il castello cataro di Peyrepertuse sulla cresta calcarea',
  },
  {
    slug: 'canal-du-midi',
    paeseSlug: 'francia',
    destinazioneSlug: 'occitania',
    nome: 'Il Canal du Midi in barca o in bicicletta',
    localita: 'Da Tolosa a Sète, oltre 200 km',
    cosE:
      'Un canale del Seicento, patrimonio UNESCO, che collega l\'Atlantico al Mediterraneo attraverso soluzioni tecniche innovative per l\'epoca, come le scale di chiuse di Fonseranes, con un\'alzaia alberata di platani percorribile in bici per tutta la sua lunghezza.',
    percheFarla:
      'Perché è un\'opera di ingegneria idraulica di oltre trecento anni fa ancora perfettamente funzionante, e perché percorrerlo in barca a noleggio (senza patente nautica) o in bicicletta sull\'alzaia è uno dei modi più rilassanti di attraversare l\'Occitania.',
    durata: 'una giornata per un tratto in bici; diversi giorni per una crociera in barca',
    periodo: 'aprile-ottobre.',
    costo: 'noleggio bici a prezzo contenuto; noleggio barca (a settimana o giorno) a prezzo medio-alto',
    comePrenotare: 'Il noleggio barca va prenotato con anticipo in alta stagione.',
    cosaPortare: 'Per la barca: nessuna patente richiesta, ma è utile un breve briefing di sicurezza fornito dal noleggiatore.',
    perChiEAdatta: 'Tutti; la navigazione in barca su un canale è lenta e non richiede esperienza.',
    miaEsperienza:
      'Il Canal du Midi è un\'opera che si apprezza meglio muovendosi alla sua stessa velocità: pedalando o navigando lentamente sotto i platani secolari che ombreggiano l\'alzaia, si passa davanti a soluzioni tecniche pensate nel Seicento per superare ogni dislivello — le scale di chiuse di Fonseranes, una successione di bacini che permette alle barche di salire o scendere diversi metri in sequenza, sono il punto più spettacolare. È un\'opera idraulica che risolve un problema — collegare due mari — con un\'eleganza che si vede ancora oggi, e percorrerla è uno dei modi più rilassanti di attraversare questa parte di Francia.',
    giudizio: 'la-rifarei',
    alternative: ['Una gita in giornata su un tratto breve del canale', 'Il Canal de la Robine, un ramo minore verso Narbonne'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Il Canal du Midi con i platani secolari sull\'alzaia',
  },
  {
    slug: 'carcassonne',
    paeseSlug: 'francia',
    destinazioneSlug: 'occitania',
    nome: 'Carcassonne di sera',
    localita: 'La Cité, Carcassonne, Aude',
    cosE:
      'La città fortificata più grande d\'Europa, con doppia cinta muraria e cinquantadue torri, restaurata nell\'Ottocento da Viollet-le-Duc con criteri molto discussi che hanno definito l\'immagine attuale, comprese le caratteristiche torrette a punta.',
    percheFarla:
      'Perché di giorno la cité è un flusso continuo di visitatori tra negozi turistici, mentre di sera, con i pullman ripartiti e le mura illuminate, diventa un\'esperienza completamente diversa e molto più suggestiva.',
    durata: 'un\'ora e mezza-due ore di sera',
    periodo: 'tutto l\'anno; **la sera** è il momento consigliato indipendentemente dalla stagione.',
    costo: 'l\'accesso alla cité è gratuito; il castello comitale interno ha un biglietto a parte',
    comePrenotare: 'Non necessaria per la visita serale della cité; il castello ha orari di apertura diurni.',
    cosaPortare: 'Niente di particolare; scarpe comode per i vicoli acciottolati.',
    perChiEAdatta: 'Tutti.',
    miaEsperienza:
      'Carcassonne va presa per quello che è: un restauro ottocentesco molto discusso, che secondo alcuni storici ha inventato elementi come le torrette a punta che probabilmente non erano mai esistite nella forma attuale. Detto questo, l\'effetto resta impressionante, soprattutto la sera. Nelle ore centrali la Cité è un corridoio di negozi di souvenir e ristoranti turistici affollato di pullman; dopo le diciotto, quando i gruppi sono ripartiti, si può camminare tra le due cinte murarie senza incontrare quasi nessuno, con le torri illuminate contro il cielo scuro. È in quel momento che si capisce perché, nonostante le polemiche sul restauro, resti uno dei monumenti più fotografati di Francia.',
    giudizio: 'la-rifarei',
    alternative: ['La città bassa (Bastide Saint-Louis), più economica e meno turistica', 'Il castello comitale interno, per la parte più antica'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Le mura illuminate della Cité di Carcassonne di sera',
  },
  {
    slug: 'vallee-blanche',
    paeseSlug: 'francia',
    destinazioneSlug: 'sciare-in-francia',
    nome: 'La Vallée Blanche',
    localita: 'Massiccio del Monte Bianco, da Chamonix',
    cosE:
      'Una discesa fuoripista di oltre venti chilometri su ghiacciaio, dall\'Aiguille du Midi (3.842 m) fino a Chamonix, attraverso crepacci, seracchi e panorami sul massiccio del Monte Bianco. Non è una pista battuta: è un itinerario glaciale che richiede una guida.',
    percheFarla:
      'Perché è probabilmente la discesa fuoripista più famosa al mondo, e perché nessun\'altra esperienza sciistica in Europa combina un dislivello e un paesaggio glaciale di questa portata.',
    durata: 'mezza giornata, comprensiva della salita in funivia',
    periodo:
      'da dicembre a maggio, con le condizioni del ghiacciaio che variano molto anno per anno; **una guida alpina valuta le condizioni del giorno prima di partire**.',
    costo: 'costo elevato per la guida (in gruppo o privata), più il biglietto della funivia per l\'Aiguille du Midi',
    comePrenotare: '**Obbligatoria una guida alpina certificata**: non è un percorso da affrontare da soli, per la presenza di crepacci non segnalati.',
    cosaPortare: 'Attrezzatura da sci fuoripista, ARVA, pala e sonda forniti o richiesti dalla guida, abbigliamento tecnico per l\'alta quota.',
    perChiEAdatta:
      'Sciatori di livello buono, non necessariamente esperti di fuoripista tecnico, ma con sicurezza su neve variabile e resistenza fisica per un percorso lungo.',
    miaEsperienza:
      'La Vallée Blanche comincia con un\'uscita che da sola vale il viaggio: si esce dalla stazione dell\'Aiguille du Midi attraverso una cresta stretta, spesso con corda di sicurezza, a quasi 3.850 metri, con un vuoto di centinaia di metri sotto i piedi prima di calzare gli sci sul ghiacciaio. Da lì la discesa attraversa un paesaggio di crepacci, seracchi e pareti di ghiaccio per oltre venti chilometri, fino a rientrare tra gli alberi sopra Chamonix. Non è tecnicamente durissima come sci, ma richiede sicurezza su terreno glaciale e va fatta esclusivamente con una guida che conosca le condizioni del giorno: i crepacci non sono sempre visibili sotto la neve fresca.',
    giudizio: 'imperdibile',
    alternative: ['Una discesa fuoripista più breve e meno impegnativa nella stessa zona', 'Salire all\'Aiguille du Midi senza sciare, solo per il panorama'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: 'Sciatori sulla Vallée Blanche tra i crepacci del ghiacciaio del Monte Bianco',
  },
  {
    slug: 'aiguille-du-midi',
    paeseSlug: 'francia',
    destinazioneSlug: 'sciare-in-francia',
    nome: 'L\'Aiguille du Midi',
    localita: 'Chamonix, Alta Savoia',
    cosE:
      'Una funivia che sale da Chamonix fino a 3.842 metri in circa venti minuti, con una terrazza panoramica e un ponte sospeso di vetro affacciato sul massiccio del Monte Bianco.',
    percheFarla:
      'Perché è una delle salite in funivia più spettacolari d\'Europa, accessibile anche a chi non scia, e mette a contatto con l\'alta montagna in modo diretto, con il Monte Bianco a distanza ravvicinata.',
    durata: 'due-tre ore per la salita, la terrazza e la discesa',
    periodo:
      'tutto l\'anno, con **condizioni meteo che possono chiudere l\'accesso alla terrazza esterna** in caso di vento forte: da verificare il giorno stesso.',
    costo: 'biglietto della funivia elevato, tra i più cari d\'Europa per un impianto turistico',
    comePrenotare: 'Prenotazione online con fascia oraria fortemente consigliata in alta stagione, quando le code superano le due ore senza.',
    cosaPortare:
      'Giacca pesante anche in piena estate: in cima le temperature sono spesso sotto lo zero. Occhiali da sole per la neve.',
    perChiEAdatta:
      'Tutti, ma **l\'altitudine può causare lievi malesseri** (mal di montagna) a chi sale rapidamente da bassa quota: sconsigliato a chi ha problemi cardiaci o respiratori senza consulto medico.',
    miaEsperienza:
      'Salire all\'Aiguille du Midi significa passare da Chamonix, a poco più di mille metri, a quasi 3.850 in venti minuti di funivia, e il cambiamento è fisico oltre che paesaggistico: l\'aria si fa sensibilmente più fredda e rarefatta, e in cima il massiccio del Monte Bianco appare a distanza ravvicinata, con le sue pareti di ghiaccio e roccia. Il ponte sospeso di vetro, costruito a sbalzo sul vuoto, mette a disagio chi soffre di vertigini ma offre una vista che non ha equivalenti sulle Alpi occidentali. È un\'esperienza che vale anche per chi non scia affatto.',
    giudizio: 'imperdibile',
    alternative: ['Il trenino del Montenvers per la Mer de Glace, più accessibile', 'Il Brévent, dal lato opposto della valle, per la vista sul massiccio del Monte Bianco intero'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: 'La terrazza dell\'Aiguille du Midi con il massiccio del Monte Bianco sullo sfondo',
  },
  {
    slug: 'scialpinismo-francia',
    paeseSlug: 'francia',
    destinazioneSlug: 'sciare-in-francia',
    nome: 'Scialpinismo nelle valli laterali',
    localita: 'Valli laterali dei grandi comprensori alpini francesi',
    cosE:
      'Salite con pelli di foca su percorsi non battuti, lontano dagli impianti, in valli laterali dei grandi comprensori dove il paesaggio torna silenzioso e la neve non è preparata dai gatti delle nevi.',
    percheFarla:
      'Perché è l\'esatto contrario dell\'esperienza da comprensorio: niente impianti, niente code, niente rumore, solo il proprio passo e la neve fresca, spesso a pochi chilometri dalle stazioni più affollate.',
    durata: 'mezza giornata-giornata intera',
    periodo: 'dicembre-aprile, secondo l\'innevamento e la stabilità del manto nevoso.',
    costo: 'basso se autonomi con attrezzatura propria; medio con guida alpina',
    comePrenotare:
      'Consigliata una guida alpina per chi non ha esperienza di valutazione del rischio valanghe; **verificare sempre il bollettino valanghe locale prima di partire**.',
    cosaPortare: 'Sci da scialpinismo o splitboard, pelli, ARVA, pala, sonda, e la capacità di usarli.',
    perChiEAdatta:
      'Richiede una buona forma fisica e, per chi va senza guida, competenze di autosoccorso in valanga e lettura del bollettino nivometeorologico.',
    miaEsperienza:
      'La differenza tra sciare in un grande comprensorio e fare scialpinismo in una valle laterale è quasi la differenza tra due sport diversi. Si sale con le pelli in silenzio, il paesaggio cambia lentamente sotto i propri passi invece che sotto una seggiovia, e si arriva a una discesa su neve non toccata da nessuno, spesso a un\'ora di cammino da una delle stazioni più affollate delle Alpi. È un\'esperienza che richiede preparazione tecnica seria — soprattutto la valutazione del rischio valanghe — ma che restituisce un rapporto con la montagna completamente diverso da quello della pista battuta.',
    giudizio: 'la-rifarei',
    alternative: ['Le ciaspole, per un\'esperienza simile senza il rischio tecnico dello scialpinismo', 'Un corso base di sicurezza in valanga prima di iniziare'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: 'Uno scialpinista in salita con le pelli su un pendio innevato lontano dagli impianti',
  },
  {
    slug: 'tour-du-mont-blanc',
    paeseSlug: 'francia',
    destinazioneSlug: 'montagne-francesi',
    nome: 'Il Tour du Mont Blanc',
    localita: 'Circa 170 km attorno al massiccio del Monte Bianco, tra Francia, Italia e Svizzera',
    cosE:
      'Un trekking a tappe che gira per intero attorno al massiccio del Monte Bianco, attraversando tre paesi in circa dieci giorni, con pernottamento ogni sera in un rifugio diverso e circa diecimila metri di dislivello complessivo.',
    percheFarla:
      'Perché è probabilmente il trekking a tappe più bello d\'Europa: il massiccio resta sempre in vista da angolazioni diverse, e ogni versante — francese, italiano, svizzero — ha un carattere e una cucina propri.',
    durata: '7-11 giorni per il giro completo; esistono versioni ridotte di 3-5 tappe',
    periodo:
      '**da metà giugno a metà settembre**, finestra in cui i rifugi sono aperti e i colli alti sono liberi dalla neve. **Settembre è il mese migliore**: meno gente, aria limpida, rifugi ancora aperti nella prima parte del mese.',
    costo:
      'mezza pensione in rifugio ogni notte, con tariffe nella fascia alta alpina; da mettere in conto pranzi al sacco e eventuali funivie',
    comePrenotare:
      '**I rifugi si prenotano da gennaio-febbraio per l\'estate**: è il vincolo che struttura l\'intero itinerario, perché le tappe si incastrano tra loro e spostarne una significa spesso rifare tutta la prenotazione.',
    cosaPortare:
      'Zaino da 30-40 litri, sacco lenzuolo obbligatorio in tutti i rifugi, scarponi rodati, strati per temperature che scendono vicino allo zero in quota di notte, guscio antipioggia, torcia frontale, e **contanti** per i rifugi senza linea per il pagamento con carta.',
    perChiEAdatta:
      'Serve allenamento e abitudine a camminare più giorni consecutivi con zaino, non tecnica alpinistica: non ci sono tratti attrezzati obbligatori, ma le tappe sono lunghe (spesso 800-900 metri di dislivello) e vanno prese sul serio.',
    miaEsperienza:
      'Il Tour du Mont Blanc si capisce attraversando i tre versanti in successione: quello francese è verticale e ghiacciato, con il massiccio che incombe da vicino; quello italiano si apre su prati larghissimi con la parete che si vede intera da lontano; quello svizzero è ordinato, verde, quasi curato come un giardino. Sono tre modi completamente diversi di stare sotto la stessa cima. La cosa che sorprende di più è quanto sia internazionale: si dorme in rifugio con persone di dieci nazionalità diverse che fanno lo stesso giro in senso opposto, e capita di incrociarle di nuovo su un colle tre giorni dopo. La regola che struttura tutto, però, è amministrativa: i rifugi si esauriscono da gennaio-febbraio, e chi ci pensa a giugno per un\'estate a settembre spesso non trova più posto sulle tappe principali.',
    giudizio: 'imperdibile',
    alternative: [
      'Una versione ridotta di 3-5 tappe sul solo versante francese o italiano',
      'Il Tour des Écrins, meno affollato e più severo',
      'Escursioni in giornata da Chamonix, per un assaggio senza impegno a tappe',
    ],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: 'Escursionisti su un colle del Tour du Mont Blanc con il massiccio innevato alle spalle',
  },
  {
    slug: 'gr20-corsica',
    paeseSlug: 'francia',
    destinazioneSlug: 'montagne-francesi',
    nome: 'Il GR20 in Corsica',
    localita: 'Dorsale montuosa della Corsica, da Calenzana a Conca, circa 180 km',
    cosE:
      'Un sentiero a tappe considerato il percorso segnalato più duro d\'Europa: quindici tappe attraverso creste granitiche, laghi glaciali e pinete di pino laricio, con tratti attrezzati con catene e passaggi che richiedono l\'uso delle mani.',
    percheFarla:
      'Perché attraversa un paesaggio montano unico nel Mediterraneo, e perché portarlo a termine è un traguardo fisico e psicologico che pochi trekking europei offrono con la stessa intensità.',
    durata: '12-16 giorni per il percorso completo; si può fare la sola metà nord o sud',
    periodo:
      'indicativamente **da giugno a settembre**, con i mesi centrali molto caldi nelle parti basse e i rifugi aperti solo in quella finestra.',
    costo: 'i rifugi sono spartani e più economici delle Alpi; molti portano tenda e cibo per risparmiare e per maggiore flessibilità',
    comePrenotare: 'I rifugi principali si prenotano con settimane di anticipo in alta stagione; verificare la disponibilità di posti tenda.',
    cosaPortare:
      'Attrezzatura da trekking tecnico completa, scarponi robusti, corda leggera se richiesta per alcuni passaggi, molta acqua (non sempre disponibile), protezione solare.',
    perChiEAdatta:
      '**Non è un primo trekking**: richiede esperienza di cammino su terreno tecnico, piede fermo su roccia, e resistenza fisica per giornate di sette-nove ore con dislivelli enormi. Ogni anno molte persone si ritirano dopo le prime tappe.',
    miaEsperienza:
      'Il GR20 va affrontato sapendo esattamente cosa aspettarsi: non sono semplici camminate panoramiche, sono giornate intere su creste granitiche con passaggi in cui si usano le mani, catene fisse su tratti esposti, e un caldo che nelle tappe basse può essere estenuante. La ricompensa è un paesaggio che non somiglia a nient\'altro nel Mediterraneo: laghi glaciali incastonati tra pareti di granito, pinete di pino laricio secolare, e una sensazione di isolamento raro in Europa occidentale. La metà nord è la più dura e la più spettacolare; la metà sud, più accessibile, è la scelta giusta per chi vuole assaggiare il percorso senza il livello di difficoltà completo.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Mare e Monti, un trekking corso meno impegnativo lungo la costa nord-ovest',
      'La sola metà sud del GR20, più accessibile',
    ],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: 'Escursionisti su una cresta granitica del GR20 in Corsica con un lago glaciale sotto',
  },
  {
    slug: 'mer-de-glace',
    paeseSlug: 'francia',
    destinazioneSlug: 'montagne-francesi',
    nome: 'La Mer de Glace',
    localita: 'Montenvers, sopra Chamonix',
    cosE:
      'Il più grande ghiacciaio francese, raggiungibile con un trenino a cremagliera storico da Chamonix, con una grotta di ghiaccio scavata ogni anno e una scala di discesa lungo la quale sono segnati gli anni e il livello che il ghiacciaio aveva in passato.',
    percheFarla:
      'Perché è il documento più diretto e più fisico sul ritiro dei ghiacciai alpini che si possa vedere in Europa: si scende una scala e a ogni gradino segnato si vede quanto il ghiaccio si sia ritirato in pochi decenni.',
    durata: 'mezza giornata, treno incluso',
    periodo: 'da maggio a ottobre, secondo l\'apertura stagionale del trenino: **da verificare**.',
    costo: 'biglietto del trenino a cremagliera medio-alto; supplemento per la grotta di ghiaccio',
    comePrenotare: 'Prenotazione online consigliata in alta stagione per il trenino.',
    cosaPortare: 'Giacca pesante: nella grotta di ghiaccio la temperatura è sempre sotto lo zero.',
    perChiEAdatta: 'Tutti; la discesa alla grotta comporta diverse centinaia di gradini, con una funivia di supporto in alcuni tratti.',
    miaEsperienza:
      'La Mer de Glace è la cosa più dura da guardare di tutto il massiccio del Monte Bianco, e non per la sua bellezza ma per quello che mostra. Si scende una scala verso la grotta di ghiaccio scavata ogni anno nel ghiacciaio, e ai lati della scala ci sono cartelli con gli anni e il livello che il ghiaccio raggiungeva allora: 1990 qui, 2000 più sotto, 2010 ancora più sotto. Si continua a scendere, e il ghiacciaio si allontana sempre di più dal punto in cui un tempo arrivava fino al trenino stesso. È un\'esperienza turistica che diventa, quasi senza volerlo, una lezione diretta sul cambiamento climatico misurato in decenni e in metri concreti.',
    giudizio: 'imperdibile',
    alternative: ['L\'Aiguille du Midi, per una prospettiva dall\'alto sullo stesso massiccio', 'Il Glacier Blanc negli Écrins, per un altro ghiacciaio francese meno affollato'],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: 'La scala di discesa verso la grotta di ghiaccio della Mer de Glace con i segnali storici dei livelli passati',
  },
]
