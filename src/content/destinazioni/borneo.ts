import type { Destinazione } from '@/lib/types'

// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto (stagione, quote,
// probabilità di avvistamento, fatica, costi) e non su ricordi reali: vanno
// riletti e sostituiti. Nessun nome di lodge, resort o operatore è stato
// inventato.
// Quote dei permessi (Kinabalu, Sipadan) e orari delle poppate ai centri di
// riabilitazione cambiano: vanno riverificati sui canali ufficiali.

export const destinazioniBorneo: Destinazione[] = [
  {
    slug: 'kota-kinabalu',
    paeseSlug: 'borneo',
    ordine: 1,
    nome: 'Kota Kinabalu e il Monte Kinabalu',
    tipologia: ['città', 'montagna', 'trekking'],
    giorniConsigliati: '1 giorno in città, più 2-3 per la salita al Kinabalu',
    visitataPersonalmente: true,
    introduzione:
      'La porta d\'ingresso del Sabah: una città portuale senza particolari pretese, con i tramonti migliori del Borneo e cinque isole a venti minuti di barca, e alle spalle il Monte Kinabalu, 4.095 metri, la cima più alta del sud-est asiatico tra l\'Himalaya e la Nuova Guinea.',
    percheAndarci:
      'Perché tutto in Sabah parte da qui, e perché la salita al Kinabalu è una delle poche vette oltre i 4.000 metri al mondo raggiungibili senza alcuna esperienza alpinistica — a patto di avere il permesso, che è contingentato e va prenotato con mesi di anticipo.',
    cosaVedere: [
      'Il Monte Kinabalu, con i sentieri che partono dal Timpohon Gate e il rifugio di Laban Rata',
      'Il Kinabalu Park, patrimonio UNESCO, che si visita anche senza salire in vetta',
      'Le sorgenti termali di Poring e la canopy walkway nel parco',
      'Il parco marino di Tunku Abdul Rahman, cinque isole a venti minuti di barca dalla città',
      'Il mercato del pesce e il Filipino Market sul lungomare, con i banchi serali',
      'La moschea cittadina di Likas, che sembra galleggiare sull\'acqua',
    ],
    cosaFare: [
      'Salire il Kinabalu in due giorni con notte a Laban Rata — vedi la scheda esperienza dedicata',
      'Via ferrata dalla cresta sommitale, la più alta del mondo, per chi ha già il permesso di salita',
      'Giornata di snorkeling alle isole del parco marino',
      'Tramonto sul lungomare, che a Kota Kinabalu è un rito collettivo',
    ],
    doveDormire:
      'In città il lungomare è la zona più comoda. Per la salita al Kinabalu si dorme a Kundasang o dentro il parco, perché la partenza è all\'alba e da Kota Kinabalu sono due ore di strada: farlo in giornata significa alzarsi alle tre.',
    doveMangiare:
      'Kota Kinabalu si mangia sul mare: al Filipino Market si sceglie il pesce al banco e lo si fa grigliare al momento, ed è la cena più tipica della città a prezzi bassi. Da provare il hinava, il pesce crudo marinato nel lime dei Kadazan-Dusun, e il tuaran mee, i noodles fatti a mano della zona. Nelle città del Sabah la cucina cinese è ottima e onnipresente.',
    comeArrivare:
      'Volo su Kota Kinabalu (BKI) da Kuala Lumpur, circa 2h30, con decine di collegamenti al giorno. All\'arrivo si passa il controllo passaporti del Sabah, che ha immigrazione propria anche per chi arriva dalla penisola.',
    comeSpostarsi:
      'In città a piedi e con Grab. Per il parco del Kinabalu e per Sandakan servono minibus interurbani o trasferimenti privati: le strade sono lente e le distanze ingannano sulla mappa.',
    periodoMigliore:
      'da marzo a settembre per la salita, con meno probabilità di pioggia in vetta. La montagna si chiude in caso di condizioni avverse e, in passato, dopo eventi sismici: la data va presa con un margine di flessibilità.',
    costi:
      'la salita al Kinabalu è cara e non aggirabile: permesso, guida obbligatoria, notte a Laban Rata e trasferimenti si pagano a pacchetto, ed è una delle voci più alte di tutto il viaggio. Le isole del parco marino, al contrario, costano pochissimo.',
    erroriDaEvitare: [
      'Pensare di prenotare la salita al Kinabalu sul posto: i permessi giornalieri sono poco più di centosessanta e si esauriscono con mesi di anticipo',
      'Sottovalutare la quota: si parte da 1.866 metri e si arriva a 4.095 in poco più di 24 ore, senza acclimatamento, e il mal di montagna colpisce anche persone allenate',
      'Dormire a Kota Kinabalu la sera prima della salita',
      'Usare la città come semplice scalo: il tramonto sul lungomare e le isole a venti minuti valgono una giornata',
    ],
    miaEsperienza:
      'Kota Kinabalu in sé è una città funzionale più che bella, ricostruita dopo i bombardamenti della seconda guerra mondiale, e si capisce in mezza giornata. Quello per cui vale è alle spalle. Il Kinabalu si sale in due giorni: il primo è una scalinata infinita nella foresta pluviale, sei chilometri di gradini irregolari con l\'umidità addosso, fino al rifugio di Laban Rata a 3.270 metri; il secondo comincia alle due di notte, al buio, sulla roccia granitica nuda, tenendosi a una corda fissa, con la quota che si fa sentire davvero — si parte da meno di duemila metri e in poco più di un giorno si arriva sopra i quattromila, senza nessun acclimatamento, e il mal di testa è la regola più che l\'eccezione. Poi il sole sorge sulla piattaforma di granito e sotto c\'è tutto il Borneo con le nuvole sotto i piedi. La cosa pratica che conta più di ogni altra: i permessi sono poco più di centosessanta al giorno e vanno prenotati mesi prima, non settimane.',
    esperienzeSlugs: ['monte-kinabalu'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'La piattaforma di granito della vetta del Monte Kinabalu all\'alba, Sabah, Borneo',
  },
  {
    slug: 'sepilok-sandakan',
    paeseSlug: 'borneo',
    ordine: 2,
    nome: 'Sepilok e Sandakan',
    tipologia: ['fauna selvatica', 'natura', 'storia'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il centro di riabilitazione degli oranghi più noto al mondo, dove gli animali orfani o confiscati vengono reinseriti gradualmente nella foresta, e accanto il centro dei sun bear, gli orsi più piccoli del pianeta. La città di Sandakan, a mezz\'ora, conserva la memoria di uno dei capitoli più duri della guerra nel Pacifico.',
    percheAndarci:
      'Perché è il posto con la probabilità più alta di vedere oranghi da vicino, ed è il punto di partenza naturale per il Kinabatangan. E perché il Sandakan Memorial Park racconta le marce della morte del 1945, di cui su 2.400 prigionieri alleati sopravvissero in sei.',
    cosaVedere: [
      'Il Sepilok Orangutan Rehabilitation Centre, con le piattaforme di alimentazione',
      'Il Bornean Sun Bear Conservation Centre, accanto, spesso saltato e altrettanto interessante',
      'Il Rainforest Discovery Centre, con una canopy walkway ottima per il birdwatching all\'alba',
      'Il Sandakan Memorial Park, sul sito del campo di prigionia giapponese',
      'La Agnes Keith House e la vista sulla baia di Sandakan',
    ],
    cosaFare: [
      'Assistere alle poppate al centro di Sepilok — vedi la scheda esperienza dedicata',
      'Canopy walkway del Rainforest Discovery Centre all\'alba, quando passano i buceri',
      'Visita al centro dei sun bear, che sta a duecento metri e quasi nessuno include',
      'Escursione alle isole tartaruga di Selingan, con deposizione notturna delle uova',
    ],
    doveDormire:
      'A Sepilok, nei lodge immersi nella foresta a pochi minuti dai centri: è la scelta migliore, perché permette di essere alla prima poppata e alla canopy walkway all\'alba. Sandakan città serve solo per i collegamenti.',
    doveMangiare:
      'A Sandakan si mangia pesce e cucina cinese, ed entrambe sono di buon livello: la città ha una comunità cinese storica e i ristoranti di mare sul lungomare sono il posto giusto. A Sepilok l\'offerta si riduce ai ristoranti dei lodge, semplici e con menu fissi.',
    comeArrivare:
      'Volo da Kota Kinabalu a Sandakan (circa 45 minuti) oppure 6 ore di strada. Da Sandakan a Sepilok sono 25 chilometri.',
    comeSpostarsi: 'Taxi o trasferimenti organizzati dai lodge. I mezzi pubblici esistono ma sono radi e scomodi con i bagagli.',
    periodoMigliore:
      'tutto l\'anno per i centri, con una precisazione importante: nella stagione dei frutti della foresta (grosso modo tra dicembre e febbraio, ma variabile) gli oranghi trovano cibo da soli e alle poppate ne compaiono molti meno. Da aprile a ottobre le probabilità sono più alte.',
    costi: 'Sepilok circa 30 ringgit più il permesso per la macchina fotografica; sun bear centre attorno ai 30; Rainforest Discovery Centre sui 15.',
    erroriDaEvitare: [
      'Andare a una sola poppata: sono due al giorno, e due tentativi raddoppiano le probabilità in una stagione sfavorevole',
      'Portare zaini aperti, bottiglie o cibo in mano: i macachi li strappano, e capita spesso',
      'Fermarsi a Sepilok e saltare il Kinabatangan pensando di aver visto la fauna del Borneo: qui gli oranghi sono semi-selvatici e abituati all\'uomo',
      'Saltare il Sandakan Memorial Park perché "è solo un parco": è uno dei luoghi di memoria più forti del sud-est asiatico',
    ],
    confronti: [
      {
        titolo: 'Dove vedere gli oranghi: Borneo o Sumatra',
        introduzione:
          'Gli oranghi selvatici esistono solo su due isole al mondo, il Borneo e Sumatra, e sono due specie diverse — tre contando il tapanuli, scoperto nel 2017 e ridotto a poche centinaia di individui. È la decisione che più di ogni altra cambia il viaggio, perché i luoghi principali hanno probabilità di avvistamento, costi e livelli di autenticità completamente diversi. La regola generale: più l\'incontro è selvatico, meno è garantito e più costa arrivarci.',
        opzioni: [
          {
            nome: 'Sepilok (Sabah)',
            sintesi: 'Centro di riabilitazione per orfani e animali confiscati, con due poppate al giorno su piattaforme raggiungibili da passerelle.',
            costo: 'circa 30 ringgit di ingresso',
            durata: 'mezza giornata; ci si dorme accanto',
            pro: [
              'La probabilità più alta di vedere oranghi da vicino, in qualsiasi periodo',
              'Facile da raggiungere e da abbinare al Kinabatangan',
              'Il lavoro di riabilitazione è serio e documentato: non è uno zoo',
              'Accanto ci sono il centro dei sun bear e una canopy walkway ottima',
            ],
            contro: [
              'Gli animali sono semi-selvatici e abituati all\'uomo: non è un incontro in natura',
              'Nella stagione dei frutti della foresta ne compaiono molti meno, perché mangiano da soli',
              'Affollato agli orari delle poppate',
            ],
            perChi: 'Chiunque voglia la certezza ragionevole di vederli, e chi ha poco tempo. È il punto di partenza, non il traguardo.',
          },
          {
            nome: 'Fiume Kinabatangan (Sabah)',
            sintesi: 'Crociere in barca all\'alba e al tramonto lungo il fiume, dove gli animali si concentrano sulla fascia di foresta rimasta lungo le rive.',
            costo: 'pacchetti in lodge da circa 100€ a notte con pasti e uscite incluse',
            durata: '2-3 notti',
            pro: [
              'Oranghi completamente selvatici, insieme a nasiche, elefanti pigmei, coccodrilli e buceri',
              'Il miglior rapporto tra probabilità di avvistamento e costo di tutto il Borneo',
              'Con due o tre notti le probabilità salgono parecchio',
            ],
            contro: [
              'Nessuna garanzia: si avvistano dalla barca, spesso lontani e in controluce',
              'La fascia di foresta è stretta proprio perché intorno c\'è la palma da olio — è anche il motivo per cui gli animali si concentrano lì, ed è una cosa che fa riflettere',
              'Zanzare e caldo pesanti nelle uscite serali',
            ],
            perChi: 'Chiunque abbia almeno due notti: è la scelta con il miglior equilibrio tra autenticità e riuscita.',
          },
          {
            nome: 'Danum Valley (Sabah)',
            sintesi: 'Foresta primaria mai tagliata, con lodge di ricerca e di alta gamma, sentieri e canopy walkway a 26 metri.',
            costo: 'la tappa più cara del Borneo, con pacchetti di più notti',
            durata: '3 notti minimo per avere senso',
            pro: [
              'Foresta primaria vera, la cosa più vicina al Borneo di prima del disboscamento',
              'Fauna completa: oranghi, gibboni, leopardi nebulosi, cervi, tantissimi uccelli',
              'Pochissime persone, guide naturalistiche di livello',
            ],
            contro: [
              'Costosissima, e gli avvistamenti di oranghi restano imprevedibili: qui si viene per la foresta, non per una specie',
              'Difficile da raggiungere: trasferimenti lunghi su piste forestali',
              'Sanguisughe, umidità e trekking impegnativi',
            ],
            perChi: 'Chi ha budget e almeno tre notti, e viene per la foresta in sé più che per una lista di animali.',
          },
          {
            nome: 'Bukit Lawang (Sumatra, Indonesia)',
            sintesi: 'L\'altra isola: trekking nella giungla del Gunung Leuser, con gli oranghi di Sumatra — specie diversa da quella del Borneo e in pericolo critico.',
            costo: 'nettamente il più economico di tutti: trekking guidati di 1-3 giorni per poche decine di euro',
            durata: '1-3 giorni di trekking',
            pro: [
              'Si cammina dentro la foresta e si cercano a piedi, invece di guardarli da una piattaforma o da una barca',
              'Probabilità di avvistamento alte, perché nella zona vivono ex individui riabilitati ormai selvatici',
              'Costi bassissimi rispetto a qualsiasi opzione del Borneo: alloggi, guide e trekking sono una frazione',
              'La giungla del Leuser è l\'ultimo posto al mondo dove oranghi, tigri, rinoceronti ed elefanti convivono nello stesso ecosistema',
            ],
            contro: [
              'Il problema etico è reale e va conosciuto prima: alcune guide attirano gli animali con il cibo per garantire l\'avvistamento, pratica da rifiutare esplicitamente al momento della prenotazione',
              'Molto più fisico: si sale nel fango aggrappandosi alle radici, con caldo e umidità alti',
              'La regolamentazione è meno rigida che in Malesia, e la qualità dipende molto dalla guida che capita',
              'Sumatra è lontana dal Borneo: sono due viaggi diversi, non due tappe dello stesso',
            ],
            perChi: 'Chi vuole cercarli a piedi invece che guardarli, ha un budget contenuto e sceglie l\'operatore con attenzione.',
          },
          {
            nome: 'Semenggoh (Sarawak)',
            sintesi: 'Riserva vicino a Kuching dove vivono oranghi riabilitati ormai liberi, che tornano alle piattaforme solo quando la foresta offre poco.',
            costo: 'pochi ringgit',
            durata: '2-3 ore, in giornata da Kuching',
            pro: [
              'Comodissimo: mezz\'ora da Kuching, si fa in mezza mattina',
              'Gli animali sono liberi e semi-selvatici, non in recinti',
              'Nella stagione giusta possono presentarsene parecchi insieme',
            ],
            contro: [
              'Nella stagione dei frutti (grosso modo novembre-marzo) può non presentarsi nessuno, ed è dichiarato apertamente',
              'Molto affollato, e la sosta dura poco',
              'Sta in Sarawak: ha senso solo se il viaggio include Kuching',
            ],
            perChi: 'Chi è già a Kuching. Non è una ragione sufficiente per attraversare il Borneo.',
          },
        ],
        raccomandazione:
          'Dentro il Borneo, la combinazione che funziona è Sepilok più Kinabatangan: il primo garantisce l\'incontro ravvicinato, il secondo lo rende selvatico, e insieme costano meno di tre notti alla Danum Valley. La Danum si aggiunge se ci sono budget e giorni; Semenggoh solo se l\'itinerario tocca il Sarawak. Nel confronto tra le due isole, invece, la differenza è di esperienza prima che di fauna: a Sumatra si cammina nella giungla e si cercano, in Borneo si sta su una piattaforma o su una barca e si aspetta. Sumatra costa una frazione ed è più fisica e più diretta; il Borneo è più organizzato, più regolamentato e offre in aggiunta cose che a Bukit Lawang non esistono — le nasiche, gli elefanti pigmei, la foresta primaria della Danum e Sipadan a poche ore. Chi ha già fatto Bukit Lawang non venga in Borneo per gli oranghi: ci venga per tutto il resto, e li rivedrà comunque.',
      },
    ],
    miaEsperienza:
      'Sepilok è il posto dove si vedono gli oranghi con la maggiore certezza, e va detto subito cosa significa: sono animali orfani o confiscati al commercio illegale, in riabilitazione, abituati alla presenza umana, e le piattaforme di alimentazione servono a integrare quello che ancora non sanno trovarsi da soli. Non è natura e il centro non finge che lo sia. Detto questo, vedere un orango che attraversa una corda tesa sopra la testa a tre metri di distanza, con quel modo di muoversi lentissimo e apparentemente pensato, è una di quelle cose che giustificano un viaggio. Il consiglio più utile è andare a entrambe le poppate invece che a una, perché in certe stagioni la foresta offre abbastanza frutta e non si presenta quasi nessuno. E poi c\'è quello che quasi tutti saltano: il centro dei sun bear a duecento metri, con gli orsi più piccoli del mondo salvati dal commercio di animali domestici, e il Sandakan Memorial Park, sul sito del campo di prigionia da cui partirono le marce della morte del 1945 — su duemilaquattrocento prigionieri alleati ne sopravvissero sei.',
    esperienzeSlugs: ['sepilok-oranghi'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Un orango sulla piattaforma di alimentazione del centro di riabilitazione di Sepilok, Sabah',
  },
  {
    slug: 'kinabatangan',
    paeseSlug: 'borneo',
    ordine: 3,
    nome: 'Fiume Kinabatangan',
    tipologia: ['fauna selvatica', 'natura', 'fiume'],
    giorniConsigliati: '2-3 notti',
    visitataPersonalmente: true,
    introduzione:
      'Il fiume più lungo del Sabah, con una fascia di foresta rimasta lungo le rive e piantagioni di palma da olio tutt\'intorno. Quella compressione è una tragedia ecologica e insieme la ragione per cui questo è il posto con la maggior concentrazione di fauna selvatica visibile di tutto il sud-est asiatico: gli animali non hanno altro dove andare.',
    percheAndarci:
      'Perché in due giorni di crociere all\'alba e al tramonto si vedono oranghi selvatici, nasiche, elefanti pigmei del Borneo, coccodrilli, macachi, buceri e martin pescatori — con il miglior rapporto tra probabilità di avvistamento e costo di tutta l\'isola.',
    cosaVedere: [
      'Gli oranghi selvatici sugli alberi lungo le rive, che al tramonto costruiscono il nido per la notte',
      'Le nasiche, le scimmie dal naso enorme che esistono solo nel Borneo',
      'Gli elefanti pigmei del Borneo, i più piccoli al mondo, che si spostano in branco lungo il fiume',
      'I coccodrilli di estuario, che si vedono meglio nelle uscite notturne',
      'Gli otto tipi di bucero del Borneo, compreso il rinoceronte con il casco arancione',
      'Le Gomantong Caves, con milioni di pipistrelli e i nidi di rondine raccolti per la zuppa',
    ],
    cosaFare: [
      'Crociere in barca all\'alba e al tramonto, che sono il cuore dell\'esperienza — vedi la scheda esperienza dedicata',
      'Uscita notturna in barca con le torce, per coccodrilli, civette e gufi',
      'Trekking guidato nella foresta dietro il lodge, con le calze antisanguisughe',
      'Visita alle Gomantong Caves, con l\'uscita serale dei pipistrelli',
    ],
    doveDormire:
      'Nei lodge lungo il fiume, quasi tutti attorno a Sukau e Bilit, che si prenotano a pacchetto con pasti e uscite in barca incluse: è l\'unico modo sensato di organizzarsi. Gli standard vanno dal molto essenziale al confortevole, e la differenza di prezzo sta più nella camera che nelle guide.',
    doveMangiare:
      'Non c\'è scelta ed è normale: si mangia al lodge, a buffet, tre volte al giorno, con cucina malese semplice — riso, pollo, pesce di fiume, verdure saltate, frutta. È buono e ripetitivo. Non esistono negozi: acqua, snack e soprattutto contanti vanno presi a Sandakan prima di partire.',
    comeArrivare:
      'Circa 2 ore di strada da Sandakan fino a Sukau o Bilit, poi barca fino al lodge. Quasi tutti i pacchetti includono il trasferimento da Sandakan o direttamente dall\'aeroporto.',
    comeSpostarsi: 'Solo in barca, con le uscite organizzate dal lodge: non esistono strade lungo il fiume.',
    periodoMigliore:
      'da marzo a ottobre. Nella stagione delle piogge il fiume si alza e gli animali si disperdono nella foresta allagata invece di concentrarsi sulle rive: le probabilità di avvistamento calano sensibilmente.',
    costi: 'pacchetti da circa 100€ a notte a persona con pensione completa, uscite in barca e trasferimenti inclusi; le differenze di prezzo riguardano soprattutto il livello della camera.',
    erroriDaEvitare: [
      'Fermarsi una notte sola: con due uscite si è in balìa della fortuna, con quattro o sei le probabilità cambiano completamente',
      'Arrivare senza contanti: lungo il fiume non ci sono bancomat e molti lodge e servizi extra si pagano solo in ringgit',
      'Aspettarsi animali vicini: si avvistano dalla barca, spesso a venti o trenta metri e in controluce. Un binocolo cambia la giornata più di qualsiasi obiettivo fotografico',
      'Sottovalutare le zanzare nelle uscite serali: qui il repellente ad alta concentrazione serve davvero',
    ],
    miaEsperienza:
      'Il Kinabatangan è il posto dove il Borneo mantiene tutte le promesse, e insieme quello dove si capisce cosa è successo a quest\'isola. Si esce in barca all\'alba, si risale il fiume con il motore al minimo e in due ore si vedono nasiche che saltano tra gli alberi, buceri che attraversano in coppia, macachi, e con un po\' di fortuna un orango selvatico che si muove lentissimo su un ramo. Poi la barca svolta in un affluente, la fascia di foresta si assottiglia e dietro compaiono le file ordinate delle palme da olio a perdita d\'occhio: è lì che si capisce perché gli animali siano tutti concentrati su una striscia larga poche centinaia di metri. Non è una riserva ben riuscita, è quello che è rimasto. Due cose pratiche che contano più di ogni altra: dormire almeno due notti, perché ogni uscita è una lotteria e quattro biglietti valgono più di due, e portare un binocolo — si guarda quasi sempre a venti metri di distanza, e senza si perde metà di quello che la guida indica.',
    esperienzeSlugs: ['crociera-kinabatangan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Una nasica su un albero lungo il fiume Kinabatangan al tramonto, Sabah, Borneo',
  },
  {
    slug: 'danum-valley',
    paeseSlug: 'borneo',
    ordine: 4,
    nome: 'Danum Valley',
    tipologia: ['natura', 'foresta primaria', 'trekking'],
    giorniConsigliati: '3 notti minimo',
    visitataPersonalmente: false,
    introduzione:
      'Quarantatremila ettari di foresta pluviale primaria mai tagliata, una delle poche rimaste nel sud-est asiatico: alberi di ottanta metri, una canopy walkway sospesa a ventisei metri e un silenzio che al mattino presto viene rotto solo dai gibboni. Non ci sono villaggi né strade pubbliche.',
    percheAndarci:
      'Perché è la cosa più vicina al Borneo di prima del disboscamento, e perché la differenza tra foresta primaria e foresta secondaria — che sulla carta sembra un tecnicismo — qui si vede con gli occhi: alberi di dimensioni che altrove non esistono più e una struttura a strati completa.',
    cosaVedere: [
      'La canopy walkway sospesa a 26 metri tra le chiome',
      'Gli alberi emergenti, che superano gli 80 metri',
      'La fauna della foresta primaria: gibboni, oranghi selvatici, cervi, orsi malesi, leopardi nebulosi per i pochissimi fortunati',
      'Il punto panoramico di Bukit Fatimah, con la vista sulla foresta ininterrotta',
      'Le sepolture rupestri sulla parete di roccia, lasciate dalle popolazioni locali secoli fa',
    ],
    cosaFare: [
      'Trekking guidati diurni e notturni con naturalisti residenti',
      'Night drive sulla pista forestale, il momento migliore per i mammiferi',
      'Alba dalla canopy walkway, quando i gibboni cominciano a chiamarsi',
      'Bagno nel fiume Danum, che è il modo in cui si chiude ogni giornata',
    ],
    doveDormire:
      'Due sole opzioni, entrambe dentro la valle: il centro di ricerca, essenziale e più economico, e il lodge di alta gamma. Non esistono alternative e non si può arrivare in giornata: è la tappa più costosa di qualsiasi viaggio in Borneo.',
    doveMangiare: 'Pensione completa inclusa nel pacchetto, senza alternative: non c\'è nient\'altro nel raggio di decine di chilometri.',
    comeArrivare:
      'Volo su Lahad Datu, poi circa 2-3 ore di pista forestale con trasferimento organizzato dalla struttura. Non si arriva in autonomia e non esistono mezzi pubblici.',
    comeSpostarsi: 'A piedi lungo i sentieri, sempre con guida, e in fuoristrada per i night drive.',
    periodoMigliore:
      'da marzo a ottobre, la finestra più asciutta. Piove comunque: è foresta pluviale equatoriale e la pioggia fa parte del pacchetto.',
    costi: 'la voce più alta del viaggio, con pacchetti di più notti che includono trasferimenti, pensione completa e attività guidate.',
    erroriDaEvitare: [
      'Andarci per vedere gli oranghi: ci sono ma gli avvistamenti sono imprevedibili, e chi viene per una specie sola resta deluso. Qui si viene per la foresta',
      'Fermarsi una notte: tra i trasferimenti resterebbero poche ore effettive, e il costo per ora diventa assurdo',
      'Sottovalutare le sanguisughe: nella stagione umida sono numerose e le calze apposite sono la sola difesa che funziona',
      'Dare per scontata la connessione: qui non c\'è, ed è parte del punto',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e per onestà la scheda si ferma alle informazioni verificabili invece di raccontare una giornata inventata. Le ragioni per cui resta in lista sono due, e sono precise. La prima è che la foresta primaria non è un dettaglio da naturalisti: gli alberi emergenti oltre gli ottanta metri e la struttura a strati completa non esistono più quasi da nessuna parte nel sud-est asiatico, e la Danum è uno dei pochissimi posti dove si possono ancora vedere. La seconda è il rovescio esatto del Kinabatangan — lì gli animali si vedono facilmente perché sono compressi in una striscia di verde tra le palme da olio, qui si vedono poco proprio perché hanno ancora quarantatremila ettari in cui stare. Costa parecchio e va messa in conto per tre notti minime: chi ci va per una resta praticamente solo nei trasferimenti.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'La canopy walkway sospesa tra gli alberi della foresta primaria della Danum Valley, Sabah',
  },
  {
    slug: 'semporna-sipadan',
    paeseSlug: 'borneo',
    ordine: 5,
    nome: 'Semporna e Sipadan',
    tipologia: ['diving', 'mare', 'isole'],
    giorniConsigliati: '4-5 giorni, per avere una reale possibilità di ottenere il permesso',
    visitataPersonalmente: true,
    introduzione:
      'La costa sud-orientale del Sabah, con l\'isola di Sipadan al largo: un pinnacolo corallino che sale da 600 metri di profondità, considerato da molti il miglior sito di immersione al mondo. L\'accesso è contingentato, non si può dormire sull\'isola, e il permesso si ottiene solo attraverso un operatore.',
    percheAndarci:
      'Per Sipadan, che non è un\'esagerazione da brochure: banchi di barracuda a spirale, centinaia di tartarughe, squali di barriera e pareti che scendono nel blu. E per Mabul e Kapalai, che sono l\'opposto — fondali bassi e sabbiosi dove si cercano gli animali più piccoli e strani dell\'oceano.',
    cosaVedere: [
      'Sipadan, con i punti Barracuda Point, Drop Off e Turtle Tomb',
      'Mabul, capitale mondiale del muck diving: cavallucci pigmei, polpi mimetici, nudibranchi, pesci rana',
      'Kapalai, con le palafitte sul banco di sabbia',
      'Le comunità Bajau Laut, i "nomadi del mare", che vivono su barche e palafitte spesso senza cittadinanza',
      'Bohey Dulang, il cratere vulcanico dell\'isola con il sentiero panoramico sulla laguna',
    ],
    cosaFare: [
      'Immersioni a Sipadan, con il permesso ottenuto tramite l\'operatore — vedi la scheda esperienza dedicata',
      'Muck diving a Mabul e Kapalai, che vale il viaggio anche senza Sipadan',
      'Salita a Bohey Dulang, per la vista sulla laguna dall\'alto del cratere',
      'Snorkeling per chi non è brevettato, con l\'avvertenza che a Sipadan i permessi vanno soprattutto ai subacquei',
    ],
    doveDormire:
      'Sull\'isola di Mabul, nei resort e nelle strutture più economiche, oppure a Semporna in città, che costa meno ed è più comoda per i collegamenti ma toglie la comodità di essere già in mare. **Sull\'isola di Sipadan non si può dormire**: le strutture furono rimosse nel 2004 proprio per proteggerla.',
    doveMangiare:
      'Nei resort si mangia a pensione completa, inclusa nel pacchetto. A Semporna città ci sono ristoranti di pesce sul lungomare, ottimi ed economici, con il pescato del giorno scelto al banco.',
    comeArrivare:
      'Volo su Tawau, poi circa un\'ora e mezza di strada fino a Semporna, poi barca per Mabul (circa 45 minuti). Quasi tutti i resort organizzano il trasferimento completo.',
    comeSpostarsi: 'Solo in barca, con le uscite organizzate dal diving center.',
    periodoMigliore:
      'da aprile a settembre, con mare più calmo e visibilità migliore. Da novembre a febbraio il mare è più mosso e alcune uscite saltano.',
    costi:
      'pacchetti diving di più notti con pensione completa; il permesso per Sipadan si paga a parte ed è la voce che decide tutto. Ogni permesso oggi consente tre immersioni sull\'isola nella stessa giornata.',
    erroriDaEvitare: [
      'Presentarsi sperando di immergersi a Sipadan senza aver prenotato mesi prima: i permessi giornalieri sono poco più di duecentocinquanta, vengono assegnati da Sabah Parks ai singoli operatori e distribuiti tra i loro ospiti, quasi sempre a rotazione premiando i soggiorni più lunghi',
      'Prenotare due notti sole e contare su Sipadan: la rotazione favorisce chi resta 4-5 notti, ed è il motivo per cui l\'itinerario va costruito così',
      'Cercare di comprare un permesso per conto proprio: non vengono rilasciati ai privati, solo agli operatori autorizzati',
      'Ignorare gli avvisi di sicurezza sulla costa orientale del Sabah: l\'area è presidiata e il turismo funziona regolarmente, ma la situazione va verificata prima di prenotare',
    ],
    miaEsperienza:
      'Sipadan regge la propria reputazione, ed è raro poterlo dire di un posto così celebrato. Si scende lungo una parete che continua nel blu senza fondo visibile, e dopo pochi minuti passa un banco di barracuda che si avvita in una spirale larga come una casa; le tartarughe sono talmente tante che si smette di fotografarle dopo la quinta. Ma la cosa da capire prima di prenotare è che il permesso governa tutto: sono poco più di duecentocinquanta al giorno, non si comprano da privati, li assegna Sabah Parks agli operatori che poi li distribuiscono tra i loro ospiti a rotazione — e la rotazione premia chi resta più a lungo. Prenotare due notti e sperare è il modo più diretto per non immergersi affatto. La sorpresa, comunque, è un\'altra: Mabul, che tutti trattano come la base d\'appoggio, è uno dei posti migliori al mondo per il muck diving, e cercare un cavalluccio pigmeo grande come un\'unghia su una gorgonia è divertente quanto un banco di barracuda. Ultima cosa, che non è turistica: attorno alle palafitte vivono i Bajau Laut, spesso senza cittadinanza di nessuno stato, e il contrasto con i resort a cinquanta metri è una cosa su cui vale la pena fermarsi a pensare.',
    esperienzeSlugs: ['diving-sipadan'],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Banco di barracuda in spirale lungo la parete di Sipadan, Sabah, Borneo',
  },
  {
    slug: 'kuching-bako',
    paeseSlug: 'borneo',
    ordine: 6,
    nome: 'Kuching e il Sarawak',
    tipologia: ['città', 'natura', 'cultura'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale del Sarawak, sul fiume, con un lungofiume ordinato e una storia particolare: per un secolo fu il regno privato dei "rajah bianchi", la dinastia inglese dei Brooke. Attorno, il parco nazionale di Bako con le nasiche, i villaggi longhouse iban e le grotte preistoriche di Niah.',
    percheAndarci:
      'Perché è probabilmente la città più piacevole della Malesia, e perché il Sarawak ha una storia e una composizione etnica completamente diverse dal Sabah: qui la cultura dominante è quella iban, con le longhouse — case comuni lunghe centinaia di metri in cui vivono decine di famiglie.',
    cosaVedere: [
      'Il lungofiume di Kuching e i vecchi shophouse del centro',
      'Il Sarawak Museum e il Borneo Cultures Museum, tra i migliori musei etnografici della regione',
      'Il parco nazionale di Bako, con le nasiche, i macachi e le formazioni di arenaria sul mare',
      'Il Sarawak Cultural Village, con le case tradizionali dei diversi gruppi etnici',
      'Semenggoh Nature Reserve, con gli oranghi riabilitati ormai liberi',
      'Le grotte di Niah, con tracce di presenza umana di quarantamila anni fa',
    ],
    cosaFare: [
      'Giornata a Bako, raggiungibile solo in barca, con i sentieri tra la foresta e le scogliere',
      'Semenggoh alla poppata del mattino, sapendo che nella stagione dei frutti può non presentarsi nessuno',
      'Notte in una longhouse iban lungo il Batang Ai o il Lemanak',
      'Mangiare il laksa di Sarawak a colazione, che è un piatto diverso da tutti gli altri laksa malesi',
    ],
    doveDormire:
      'Sul lungofiume o nel centro storico di Kuching, che si gira tutto a piedi. Per Bako conviene una notte nei chalet del parco, che permette la passeggiata notturna e i sentieri all\'alba senza dipendere dalle maree delle barche.',
    doveMangiare:
      'Kuching è una città dove si mangia molto bene e in modo diverso dal resto della Malesia. Il piatto da provare è il Sarawak laksa, a colazione, con un brodo di gamberi e spezie che non somiglia né a quello di Penang né a quello nyonya; poi il kolo mee, i noodles asciutti, e il midin, una felce di foresta saltata all\'aglio che si trova solo qui. Il mercato notturno di Chinatown e i food court sul fiume sono i posti giusti.',
    comeArrivare:
      'Volo su Kuching (KCH) da Kuala Lumpur (circa 1h45) o da Kota Kinabalu. Anche qui c\'è un controllo passaporti proprio: il Sarawak ha immigrazione separata perfino rispetto al Sabah.',
    comeSpostarsi:
      'Kuching si gira a piedi e con Grab. Per Bako serve un bus più una barca, con orari legati alla marea; per Semenggoh, autobus o Grab in mezz\'ora.',
    periodoMigliore:
      'da marzo a ottobre. A Semenggoh la stagione conta parecchio: da aprile a ottobre le probabilità di vedere oranghi sono molto più alte, mentre nella stagione dei frutti della foresta possono non presentarsi affatto.',
    costi: 'Bako attorno ai 20 ringgit più la barca; Semenggoh pochi ringgit; musei gratuiti o quasi. Kuching è economica anche per gli standard malesi.',
    erroriDaEvitare: [
      'Andare a Semenggoh tra novembre e marzo contandoci: nella stagione dei frutti gli oranghi mangiano nella foresta e la riserva lo dichiara apertamente',
      'Fare Bako in giornata senza controllare le maree: le barche partono e tornano in funzione dell\'acqua, e si resta bloccati facilmente',
      'Aspettarsi che il Sarawak sia come il Sabah: sono due stati con storia, popolazioni e immigrazione separate, e il passaggio dall\'uno all\'altro comporta un nuovo timbro sul passaporto',
      'Prenotare una longhouse "turistica" senza informarsi: le esperienze variano moltissimo, dalla visita costruita al soggiorno vero in una comunità',
    ],
    miaEsperienza:
      'Kuching è la sorpresa del Borneo: una città di fiume tranquilla, con il lungofiume pedonale, le case cinesi basse e un livello di vivibilità che nessun\'altra città malese di queste dimensioni ha. Il Sarawak laksa a colazione, in una di quelle sale con i ventilatori al soffitto, è una delle cose migliori mangiate in tutta la Malesia. Bako è il parco che rende: ci si arriva solo in barca, con gli orari dettati dalla marea, e nel giro di un\'ora di sentiero si incontrano le nasiche, quelle scimmie dal naso enorme che esistono solo su quest\'isola e che si guardano da pochi metri mentre mangiano foglie senza dare peso a chi passa. Su Semenggoh, invece, conviene essere chiari: gli oranghi sono liberi e tornano alle piattaforme solo quando la foresta offre poco, quindi tra novembre e marzo può non presentarsi nessuno — e la riserva lo scrive apertamente all\'ingresso. Chi ha già fatto Sepilok non deve venire nel Sarawak per questo: ci venga per Bako, per le longhouse e per la città.',
    esperienzeSlugs: ['bako-nasiche'],
    tripSlugs: [],
    imageAlt: 'Una nasica sul ramo di un albero nel parco nazionale di Bako, Sarawak, Borneo',
  },
  {
    slug: 'gunung-mulu',
    paeseSlug: 'borneo',
    ordine: 7,
    nome: 'Gunung Mulu',
    tipologia: ['natura', 'grotte', 'trekking'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: false,
    introduzione:
      'Un parco nazionale patrimonio UNESCO nell\'interno del Sarawak, raggiungibile solo in aereo, con alcuni dei sistemi di grotte più grandi del pianeta: la Sarawak Chamber è la più grande camera sotterranea conosciuta al mondo, e ogni sera dalla Deer Cave escono milioni di pipistrelli in formazioni a spirale.',
    percheAndarci:
      'Per le grotte, che non hanno paragoni al mondo per dimensioni, e per i Pinnacoli — lame di calcare alte cinquanta metri sul fianco della montagna, raggiungibili con un trekking tra i più duri del sud-est asiatico.',
    cosaVedere: [
      'La Deer Cave, con l\'uscita serale di milioni di pipistrelli',
      'La Lang Cave, la più decorata di concrezioni',
      'Le Clearwater e Wind Cave, raggiungibili in barca lungo il fiume',
      'I Pinnacoli del Gunung Api, le lame di calcare sul versante della montagna',
      'La canopy walkway del parco, tra le più lunghe al mondo',
    ],
    cosaFare: [
      'Assistere all\'uscita dei pipistrelli dalla Deer Cave al tramonto, dall\'osservatorio dedicato',
      'Trekking di tre giorni ai Pinnacoli, con notte al campo base e una salita durissima su roccia e scale',
      'Adventure caving, per chi vuole entrare nelle sezioni non attrezzate',
      'Canopy walkway e sentieri nella foresta attorno al quartier generale del parco',
    ],
    doveDormire:
      'Dentro il parco, nelle sistemazioni gestite dal parco stesso o nell\'unico resort esterno. Le opzioni sono poche e vanno prenotate in anticipo, perché il numero di posti limita di fatto il numero di visitatori.',
    doveMangiare: 'Il ristorante del parco e quello del resort, senza alternative. Come nelle altre tappe forestali, si porta con sé quello che serve.',
    comeArrivare:
      'Solo in aereo, con i voli da Miri, Kuching o Kota Kinabalu: non ci sono strade che arrivano al parco. È la ragione principale per cui questa tappa va pianificata prima di tutto il resto.',
    comeSpostarsi: 'A piedi lungo le passerelle del parco e in barca lungo il fiume per le grotte più lontane.',
    periodoMigliore:
      'tutto l\'anno, ma l\'uscita dei pipistrelli non è garantita: quando piove al tramonto, i pipistrelli restano dentro. Il trekking ai Pinnacoli è più sicuro nella stagione più asciutta.',
    costi: 'ingresso al parco basso, ma ogni grotta e ogni escursione guidata si pagano a parte; il volo è la voce principale.',
    erroriDaEvitare: [
      'Prenotare il volo prima dell\'alloggio: i posti dentro il parco sono limitati e senza sistemazione non si va da nessuna parte',
      'Programmare una notte sola: con i voli e le distanze interne resterebbe poco tempo effettivo',
      'Iscriversi al trekking dei Pinnacoli sottovalutandolo: è una salita di roccia e scale a pioli tra le più impegnative della regione, con limiti di tempo imposti dalle guide',
      'Contare sull\'uscita dei pipistrelli: se piove non escono, e capita spesso',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e la scheda resta sui fatti invece di raccontare una giornata che non c\'è stata. Resta però nella lista per una ragione precisa: le dimensioni. La Sarawak Chamber è la camera sotterranea più grande conosciuta — nei confronti che si trovano in giro ci starebbero dentro diversi aerei di linea affiancati — e la Deer Cave ha un\'imboccatura talmente ampia che l\'uscita serale dei pipistrelli si vede come una colonna di fumo scura che si arrotola sopra la foresta. La cosa da sapere prima di sognarci sopra è logistica: al Mulu si arriva solo in aereo, i posti letto dentro il parco sono pochi e limitano il numero di visitatori, e quindi si prenota nell\'ordine inverso rispetto al solito — prima il letto, poi il volo.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'L\'uscita serale dei pipistrelli dalla Deer Cave nel parco nazionale di Gunung Mulu, Sarawak',
  },
]
