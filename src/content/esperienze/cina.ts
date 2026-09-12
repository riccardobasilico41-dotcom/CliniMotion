import type { Esperienza } from '@/lib/types'

// Paese visitato di persona, due volte. I campi miaEsperienza e i giudizi sono
// bozze scritte da Claude nella voce del diario, coerenti con ciò che è
// oggettivamente vero di ogni esperienza (fatica, code, quota, regole di
// accesso) ma non basate su ricordi reali: vanno riletti e confermati o
// corretti. Nessun operatore, hotel o ristorante è stato inventato.
// Prezzi e regole di prenotazione in Cina cambiano spesso e senza preavviso:
// vanno riverificati sui canali ufficiali prima di partire.

export const esperienzeCina: Esperienza[] = [
  {
    slug: 'muraglia-jinshanling',
    paeseSlug: 'cina',
    destinazioneSlug: 'pechino',
    nome: 'Grande Muraglia a Jinshanling',
    localita: 'Contea di Luanping, circa 130 km a nord-est di Pechino',
    cosE:
      'Il tratto di Muraglia non restaurato più accessibile da Pechino: una decina di chilometri di cinta lungo un crinale, con una trentina di torri di guardia, erba tra le pietre e lunghi tratti in cui non si incontra nessuno. Si percorre normalmente da est verso ovest, con funivia disponibile sul lato d\'ingresso.',
    percheFarla:
      'Perché è l\'unico modo, in giornata da Pechino, di camminare sulla Muraglia come si immagina prima di partire: rovinata, ripida, deserta. A Badaling e Mutianyu si vede un monumento restaurato, qui si vede la cosa.',
    durata: 'giornata intera: 2h30 di trasferimento per lato e 3-4 ore di cammino',
    periodo:
      'primavera e autunno sono le stagioni migliori, con ottobre in testa per i colori. D\'estate non c\'è ombra e le temperature sul crinale sono pesanti; d\'inverno la neve rende alcuni tratti scivolosi ma il posto è completamente vuoto.',
    costo: 'ingresso circa 65 yuan, funivia a parte; il trasferimento privato da Pechino incide molto più del biglietto',
    comePrenotare:
      'Il biglietto si compra all\'ingresso, senza contingentamenti. Il problema è arrivarci: non ci sono mezzi pubblici diretti comodi, quindi si organizza un\'auto con autista per la giornata o ci si aggrega a una navetta condivisa partendo da Pechino al mattino presto.',
    cosaPortare:
      'Scarpe con suola buona — i gradini sono irregolari, alti e in più punti mezzi crollati — acqua in quantità, cappello e crema solare, perché sul crinale non c\'è un metro d\'ombra. Lungo il percorso non ci sono punti di ristoro.',
    perChiEAdatta:
      'Serve un minimo di allenamento: non è un trekking tecnico ma è un saliscendi continuo di gradini, per tre o quattro ore. Chi ha problemi di ginocchia soffre più in discesa che in salita.',
    miaEsperienza:
      'La differenza con gli altri tratti si sente dopo mezz\'ora di cammino, quando ci si volta indietro e non c\'è nessuno. Jinshanling non è restaurato e questo cambia tutto: i gradini hanno altezze diverse, alcuni sono sbriciolati, l\'erba cresce tra le pietre, e la Muraglia sale e scende seguendo il crinale invece di essere spianata per i visitatori. È anche molto più faticosa di quanto le fotografie lascino immaginare — non è una passeggiata panoramica, è una salita continua con il sole addosso. Ma dalle torri in cima si vede la cinta che continua per chilometri in entrambe le direzioni, e quella è l\'immagine per cui si viene fin qui.',
    giudizio: 'imperdibile',
    alternative: [
      'Mutianyu, restaurato ma bello, con seggiovia e slittino: la scelta giusta con mezza giornata o con compagnia mista',
      'Gubei Water Town e Simatai, l\'unico tratto visitabile di notte, illuminato',
      'Badaling, il più comodo e il più affollato, da usare solo come ultima risorsa',
    ],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Torri di guardia non restaurate della Grande Muraglia lungo il crinale a Jinshanling',
  },
  {
    slug: 'citta-proibita',
    paeseSlug: 'cina',
    destinazioneSlug: 'pechino',
    nome: 'Città Proibita e collina di Jingshan',
    localita: 'Centro di Pechino, sull\'asse nord-sud della città',
    cosE:
      'Il palazzo imperiale delle dinastie Ming e Qing: quasi mille edifici in legno su 720.000 metri quadrati, percorso in un senso unico da sud a nord. Uscendo dal cancello settentrionale, di fronte, si sale la collina artificiale di Jingshan, l\'unico punto da cui si vede il complesso dall\'alto.',
    percheFarla:
      'Perché è il complesso di palazzi in legno più grande del mondo e perché la salita a Jingshan, che quasi nessuno abbina alla visita, è ciò che permette di capire l\'impianto: dall\'interno si vedono cortili, dall\'alto si vede il disegno.',
    durata: '3-4 ore per il palazzo, più 40 minuti per Jingshan',
    periodo:
      'tutto l\'anno; chiuso il lunedì fuori dai periodi festivi. L\'inverno ha ingressi più economici e molta meno gente, con la compensazione del freddo secco di Pechino.',
    costo: 'circa 60 yuan in alta stagione e 40 in bassa, con supplemento per il Tesoro e la Galleria degli Orologi; Jingshan pochi yuan a parte',
    comePrenotare:
      'Obbligatoriamente online e in anticipo: le biglietterie fisiche non esistono più. La prenotazione è nominale e legata al numero di passaporto, che va esibito all\'ingresso, e in alta stagione i posti si esauriscono con giorni di anticipo. Si prenota sul sito ufficiale del Museo del Palazzo o tramite il suo canale WeChat.',
    cosaPortare:
      'Passaporto — senza, non si entra, perché è il titolo d\'ingresso — scarpe comode e acqua. Il percorso è quasi tutto all\'aperto e in estate non c\'è riparo.',
    perChiEAdatta:
      'A tutti, con l\'avvertenza che sono chilometri di camminata su pavimentazione irregolare e che il senso unico non permette di tornare indietro: quello che si salta, si è saltato.',
    miaEsperienza:
      'La Città Proibita ha un problema che nessuno racconta: è così grande e così ripetitiva nella sua sequenza di sale del trono che dopo la terza si guarda senza vedere più niente. Il modo di evitarlo è uscire dall\'asse centrale, dove cammina il novanta per cento dei visitatori, e infilarsi nei cortili laterali a est, quelli dei quartieri privati e delle collezioni: sono piccoli, quasi vuoti, e finalmente si capisce che lì dentro ci viveva della gente. L\'altra cosa da fare, e che quasi nessuno fa, è attraversare la strada all\'uscita nord e salire i gradini di Jingshan: dieci minuti di salita e si ha tutto il complesso sotto, con i tetti dorati allineati uno dietro l\'altro fino a Tiananmen. Da lì si capisce l\'impianto che da dentro sfugge completamente.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Tempio del Cielo al mattino presto, più piccolo e molto più vivo, con il parco pieno di gente che balla e canta',
      'Il Palazzo d\'Estate, meno monumentale ma più piacevole da camminare, sul lago',
    ],
    tripSlugs: ['cina-classica'],
    imageAlt: 'I tetti dorati della Città Proibita visti dall\'alto della collina di Jingshan, Pechino',
  },
  {
    slug: 'esercito-terracotta',
    paeseSlug: 'cina',
    destinazioneSlug: 'xian',
    nome: 'Esercito di Terracotta',
    localita: 'Distretto di Lintong, circa 40 km a est di Xi\'an',
    cosE:
      'L\'esercito funerario del primo imperatore Qin Shi Huang: più di ottomila statue a grandezza naturale, ognuna con un volto diverso, sepolte nel III secolo a.C. e ritrovate nel 1974 da contadini che scavavano un pozzo. Si visitano tre fosse coperte da capannoni e il museo dei carri in bronzo.',
    percheFarla:
      'Perché è una delle scoperte archeologiche più importanti del Novecento e perché la scala — una navata di duecento metri piena di file di soldati — non è restituibile da nessuna fotografia.',
    durata: '3-4 ore sul sito, mezza giornata contando i trasferimenti da Xi\'an',
    periodo:
      'tutto l\'anno. L\'estate è pesante perché i capannoni non sono climatizzati e la folla è massima; l\'inverno è la stagione più tranquilla.',
    costo: 'circa 120 yuan in alta stagione, con navetta interna inclusa; guida ufficiale o audioguida a parte',
    comePrenotare:
      'Solo online, con prenotazione nominale legata al passaporto: le biglietterie fisiche sono state eliminate. La finestra di vendita apre appena 7 giorni prima della data di visita e in alta stagione i posti si esauriscono in poche ore. Si prenota sul sito ufficiale del museo o tramite i suoi canali WeChat; le piattaforme di viaggio funzionano ma applicano una commissione.',
    cosaPortare:
      'Passaporto, che viene scansionato ai tornelli, e acqua. Le fosse sono ampie e si guarda sempre da un parapetto sopraelevato: un binocolo piccolo cambia parecchio la visita, perché le file più interessanti sono lontane.',
    perChiEAdatta:
      'A tutti. Il percorso è pianeggiante e coperto; l\'unica difficoltà è la folla ai parapetti nelle ore centrali.',
    miaEsperienza:
      'È uno di quei posti che si crede di conoscere e che aggiungono una cosa sola, ma decisiva: la scala. Nella fossa numero uno si guarda giù da un parapetto e la navata continua per duecento metri, con file ordinate di soldati che si perdono nel fondo, e solo lì si capisce che erano stati fatti per essere sepolti e non guardati da nessuno. La seconda cosa che colpisce si vede solo avvicinandosi alle prime file: nessun volto è uguale a un altro, cambiano i tratti, le acconciature, i baffi, l\'espressione. Va anche detto che la visita è molto gestita — passerelle obbligate, folla continua — e che le fosse due e tre, dopo la prima, sembrano cantieri: c\'è chi suggerisce di visitarle in ordine inverso proprio per questo, chiudendo con la numero uno. Sul museo dei carri in bronzo, invece, nessun dubbio: sono i due pezzi tecnicamente più impressionanti del sito e quasi tutti li saltano per stanchezza.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Museo di Storia dello Shaanxi a Xi\'an, gratuito ma con prenotazione che si esaurisce in minuti, per il contesto storico',
      'Il mausoleo di Jingdi, a nord della città, molto meno visitato e con una museografia più moderna',
    ],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Le file di guerrieri di terracotta nella fossa numero uno vista dal parapetto, Xi\'an',
  },
  {
    slug: 'mura-xian-bicicletta',
    paeseSlug: 'cina',
    destinazioneSlug: 'xian',
    nome: 'Giro delle mura di Xi\'an in bicicletta',
    localita: 'Cinta muraria Ming, centro di Xi\'an',
    cosE:
      'Quattordici chilometri di cinta muraria del XIV secolo, larga a sufficienza da poterci pedalare sopra: si noleggia una bicicletta a una delle quattro porte e si fa il giro completo del centro storico camminando sopra la città.',
    percheFarla:
      'Perché è l\'unica cinta muraria imperiale completa rimasta in Cina e perché pedalandoci sopra si vede contemporaneamente la città vecchia dentro e i grattacieli fuori: è il modo più diretto di capire come funziona una città cinese oggi.',
    durata: 'circa 1h30-2h per il giro completo con soste',
    periodo:
      'tutto l\'anno, ma il momento giusto è il tardo pomeriggio, con la luce bassa e le lanterne che si accendono sulle torri. D\'estate va evitata la fascia centrale, sul camminamento non c\'è ombra.',
    costo: 'ingresso alle mura circa 54 yuan, noleggio bicicletta attorno ai 45 yuan per due ore più cauzione',
    comePrenotare:
      'Non serve prenotare: si paga l\'ingresso alla porta e si noleggia sul posto. La Porta Sud è la più comoda e la più fornita di biciclette, comprese quelle a due posti.',
    cosaPortare:
      'Poco: acqua e qualcosa per coprirsi dal sole. La pavimentazione è in mattoni e sconnessa in più punti, quindi il giro è più scomodo di quanto sembri — con i tandem è anche peggio.',
    perChiEAdatta: 'A chiunque sappia andare in bicicletta. Il percorso è pianeggiante, l\'unica fatica è il fondo irregolare.',
    miaEsperienza:
      'È la cosa più semplice di tutta Xi\'an ed è quella che rimane. Si pedala su una muraglia larga dodici metri costruita seicento anni fa, e a ogni angolo la vista cambia: da un lato i tetti bassi e i vicoli della città vecchia, dall\'altro un\'autostrada urbana con i palazzi di vetro. Il fondo in mattoni è sconnesso e la bici vibra per tutto il tempo, quindi va detto che due ore sono il limite. Il momento giusto è l\'ultima ora di luce, quando si accendono le lanterne rosse sulle torri delle porte e la città sotto si illumina: la gente del posto sale a camminare proprio a quell\'ora, ed è l\'unico momento in cui il camminamento non sembra un\'attrazione.',
    giudizio: 'la-rifarei',
    alternative: [
      'Percorrere le mura a piedi, solo su un tratto, se due ore di bici sembrano troppe',
      'La navetta elettrica che fa il giro completo, per chi non vuole pedalare',
    ],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Il camminamento in mattoni delle mura Ming di Xi\'an con le lanterne rosse al tramonto',
  },
  {
    slug: 'giardini-suzhou',
    paeseSlug: 'cina',
    destinazioneSlug: 'shanghai',
    nome: 'I giardini classici di Suzhou',
    localita: 'Suzhou, 25 minuti di alta velocità da Shanghai',
    cosE:
      'Una decina di giardini privati costruiti tra il XVI e il XVIII secolo dai funzionari e dai letterati in pensione, oggi patrimonio UNESCO. Non sono parchi: sono composizioni chiuse di rocce, acqua, padiglioni e finestre, progettate perché nessuna inquadratura si ripeta.',
    percheFarla:
      'Perché sono l\'esatto opposto della Cina monumentale vista a Pechino e a Xi\'an: piccoli, privati, pensati per una persona sola che cammina lentamente. Ed è l\'unico posto dove si capisce cosa intendessero i cinesi con "paesaggio".',
    durata: 'una giornata per due o tre giardini, incluso il viaggio da Shanghai',
    periodo:
      'primavera e autunno. Il punto decisivo non è però la stagione ma il giorno della settimana: in un fine settimana o in un giorno di festa questi giardini si riempiono al punto da annullare completamente la ragione per cui esistono.',
    costo: 'da 30 a 80 yuan ciascuno secondo il giardino e la stagione; treno da Shanghai pochi euro',
    comePrenotare:
      'Il Giardino dell\'Umile Amministratore, il più famoso, richiede prenotazione online con passaporto e ha quote giornaliere. Gli altri si pagano all\'ingresso, ma nei periodi di punta conviene comunque prenotare. Il treno ad alta velocità da Shanghai va prenotato a parte, come tutti i treni cinesi.',
    cosaPortare:
      'Poco, ma scarpe comode: si cammina su ciottoli e ponticelli, e in un giorno si copre più terreno di quanto sembri.',
    perChiEAdatta:
      'A chi ha la pazienza di guardare. Chi viaggia per spuntare monumenti troverà i giardini piccoli e ripetitivi; chi si siede in un padiglione dieci minuti capisce perché sono patrimonio dell\'umanità.',
    miaEsperienza:
      'Venticinque minuti di treno da Shanghai e si cambia epoca. I giardini di Suzhou funzionano su una regola precisa, che sembra un dettaglio da guida finché non ci si cammina dentro: ogni finestra, ogni apertura nel muro, inquadra una scena diversa, e il percorso è costruito perché non si veda mai tutto insieme. Si gira un angolo e compare uno stagno che non c\'era; si guarda attraverso una finestra a forma di ventaglio e c\'è un bambù, uno solo, messo lì per quello. La controindicazione è seria e va detta: sono spazi piccolissimi, e con la folla del fine settimana si cammina in fila lungo i corridoi guardando le nuche degli altri. In un martedì mattina, all\'apertura, il Giardino del Maestro delle Reti — che è il più piccolo e il meno battuto — è una delle cose più belle di tutto il viaggio.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Giardino Yuyuan a Shanghai, molto più comodo ma molto più affollato e inserito in un bazar turistico',
      'Un villaggio d\'acqua come Tongli, che unisce canali e un giardino UNESCO in mezza giornata',
    ],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Padiglione e stagno del Giardino dell\'Umile Amministratore a Suzhou',
  },
  {
    slug: 'bund-pudong',
    paeseSlug: 'cina',
    destinazioneSlug: 'shanghai',
    nome: 'Il Bund e lo skyline di Pudong dopo il tramonto',
    localita: 'Lungofiume di Huangpu, Shanghai',
    cosE:
      'Il lungofiume storico di Shanghai, con la fila di palazzi coloniali degli anni Venti su un lato e, dall\'altro lato del fiume, i grattacieli di Pudong che si accendono al buio. Si guarda dal camminamento del Bund, da un rooftop, o dal battello che attraversa il fiume.',
    percheFarla:
      'Perché è il contrasto che racconta la Cina degli ultimi trent\'anni in una sola inquadratura: banche coloniali da una parte, il secondo grattacielo più alto del mondo dall\'altra, costruito su quello che nel 1990 era campagna.',
    durata: '1-2 ore, meglio a cavallo del tramonto',
    periodo:
      'tutto l\'anno; l\'autunno ha l\'aria più limpida. Le luci di Pudong si accendono dopo il tramonto e in alcune sere feriali vengono spente prima di mezzanotte.',
    costo: 'gratuito dal camminamento; traghetto pubblico attraverso il fiume pochi yuan; Shanghai Tower circa 180 yuan',
    comePrenotare:
      'Niente da prenotare per il Bund. La salita alla Shanghai Tower conviene invece prenotarla, e sceglierla in una giornata limpida: con la foschia si paga per vedere il grigio.',
    cosaPortare: 'Qualcosa per coprirsi: sul lungofiume tira sempre vento, anche d\'estate.',
    perChiEAdatta: 'A tutti, con l\'unica avvertenza che nel fine settimana il camminamento è pienissimo e si procede a passo d\'uomo.',
    miaEsperienza:
      'È la cartolina di Shanghai e funziona esattamente come promette, a patto di scegliere il momento. Alle otto di sera il camminamento del Bund è una folla compatta, con le guardie che regolano il flusso: bello lo stesso, ma non si sosta. Il trucco è arrivare all\'ora blu, quando le luci di Pudong si accendono ma il cielo non è ancora nero, e soprattutto usare il traghetto pubblico che attraversa il fiume per pochi yuan: sul ponte di quella barca, in mezzo alla corrente, si hanno i palazzi coloniali da una parte e i grattacieli dall\'altra contemporaneamente, ed è la vista migliore della città a un costo ridicolo. Le crociere turistiche organizzate costano venti volte tanto e mostrano la stessa cosa.',
    giudizio: 'la-rifarei',
    alternative: [
      'Un rooftop bar sul lato Bund, che costa quanto un cocktail e offre la vista frontale su Pudong',
      'La piattaforma panoramica della Shanghai Tower, per la prospettiva opposta: la città vista da sopra',
    ],
    tripSlugs: ['cina-classica'],
    imageAlt: 'I grattacieli illuminati di Pudong visti dal camminamento del Bund, Shanghai',
  },
  {
    slug: 'star-ferry-victoria-peak',
    paeseSlug: 'cina',
    destinazioneSlug: 'hong-kong',
    nome: 'Star Ferry e Victoria Peak',
    localita: 'Porto di Victoria e Isola di Hong Kong',
    cosE:
      'Le due viste classiche di Hong Kong: la traversata del porto sullo Star Ferry, in servizio dal 1888, e la salita a Victoria Peak con il tram a cremagliera che arriva quasi in verticale a 396 metri sopra la città.',
    percheFarla:
      'Perché sono i due punti da cui la città si capisce: dall\'acqua, con i grattacieli che incombono da entrambe le rive, e dall\'alto, dove si vede quanto poco spazio piano ci sia in realtà tra la montagna e il mare.',
    durata: '10 minuti la traversata, mezza giornata per il Peak con la salita a piedi in discesa',
    periodo:
      'ottobre-dicembre, quando l\'aria è secca e la visibilità massima. In primavera la foschia cancella completamente la vista dal Peak: con il cielo bianco, non vale il biglietto.',
    costo: 'Star Ferry pochi dollari di Hong Kong, meno di mezzo euro; Peak Tram con piattaforma panoramica attorno ai 100-150 HKD',
    comePrenotare:
      'Lo Star Ferry non si prenota: si paga con Octopus Card al tornello e si sale. Per il Peak Tram conviene prenotare online la fascia oraria, perché a fine pomeriggio la coda può superare l\'ora; in alternativa, l\'autobus 15 che sale dalla stessa zona non ha mai coda e costa una frazione.',
    cosaPortare:
      'Octopus Card, che serve per traghetti, metropolitana, bus e negozi. Scarpe comode se si vuole scendere dal Peak a piedi lungo il sentiero, che è la parte migliore.',
    perChiEAdatta: 'A tutti. Il sentiero circolare in cima (Lugard Road) è pianeggiante e adatto a chiunque.',
    miaEsperienza:
      'La cosa più bella di Hong Kong costa meno di mezzo euro, e non è una battuta. Lo Star Ferry attraversa il porto in dieci minuti e, stando sul ponte inferiore all\'ora blu, si hanno i grattacieli dell\'isola che si accendono da una parte e Kowloon dall\'altra, con le giunche e i cargo che passano in mezzo: nessuna crociera turistica offre di meglio. Sul Victoria Peak invece serve un po\' di strategia. Il tram è storico e la salita quasi verticale è divertente, ma la coda a fine pomeriggio è lunghissima, mentre l\'autobus che sale dalla stessa zona parte subito. E una volta lassù, la piattaforma a pagamento serve a poco: basta imboccare Lugard Road, un sentiero pianeggiante che gira attorno alla cima, per avere la stessa vista gratis e senza nessuno intorno.',
    giudizio: 'imperdibile',
    alternative: [
      'Il sentiero del Dragon\'s Back, a mezz\'ora dal centro, per la Hong Kong che nessuno si aspetta',
      'La funivia di Ngong Ping sull\'isola di Lantau, con il Grande Buddha e il villaggio di Tai O',
    ],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Il traghetto Star Ferry attraversa il porto di Victoria con lo skyline di Hong Kong sullo sfondo',
  },
  {
    slug: 'avatar-yuanjiajie',
    paeseSlug: 'cina',
    destinazioneSlug: 'zhangjiajie',
    nome: 'Yuanjiajie e l\'ascensore di Bailong',
    localita: 'Parco nazionale di Zhangjiajie, Wulingyuan, Hunan',
    cosE:
      'La piattaforma più alta del parco, raggiungibile con l\'ascensore di Bailong — 326 metri di corsa verticale in una gabbia di vetro attaccata alla parete di roccia, il più alto ascensore panoramico esterno del mondo. In cima si cammina lungo i belvedere del Pilastro dell\'Alleluia, la colonna che ha ispirato le montagne fluttuanti di Avatar, e del Primo Ponte sotto il Cielo.',
    percheFarla:
      'Perché è il punto in cui il paesaggio di Zhangjiajie si vede per quello che è: non un pilastro isolato ma centinaia, uno dietro l\'altro fino all\'orizzonte, che entrano ed escono dalla nebbia.',
    durata: '3-4 ore contando le code, mezza giornata con calma',
    periodo:
      'aprile-maggio e settembre-ottobre. La nebbia non è un problema ma il motivo per cui il posto è famoso: la giornata da evitare è quella di pioggia forte, quando ascensore e funivie chiudono.',
    costo: 'incluso nell\'ingresso al parco (circa 239 yuan, valido 4 giorni) tranne l\'ascensore, che costa a parte attorno ai 72 yuan a corsa',
    comePrenotare:
      'L\'ingresso al parco si prenota online con passaporto. L\'ascensore si paga sul posto e non si prenota: è proprio qui che si formano le code peggiori, che nei periodi di punta superano l\'ora e mezza.',
    cosaPortare:
      'Acqua e qualcosa da mangiare comprati fuori dal parco, dove costano un quarto. Scarpe comode, un guscio antipioggia leggero — in quota il tempo cambia in fretta — e pazienza per le code.',
    perChiEAdatta:
      'A tutti: si sale in ascensore e si cammina su passerelle pianeggianti. Chi soffre di vertigini può salire in autobus per la strada interna invece che con l\'ascensore.',
    miaEsperienza:
      'La strategia conta più di qualsiasi altra cosa. Essere all\'ingresso del parco all\'apertura e salire subito con l\'ascensore significa fare cinque minuti di coda invece di un\'ora e mezza, e girare i belvedere con la luce del mattino e la nebbia ancora bassa tra i pilastri. Chi arriva a metà mattina, come quasi tutti, passa buona parte della giornata in fila. L\'ascensore in sé è un\'esperienza che vale il prezzo: si sale incollati alla parete di roccia dentro una gabbia di vetro e negli ultimi cento metri la roccia sparisce e resta il vuoto. In cima, il consiglio è camminare fino alle piattaforme più lontane: quella del Pilastro dell\'Alleluia è la più fotografata e la più affollata, ma spostandosi di cinquecento metri sulle passerelle si ha la stessa vista con dieci persone invece di trecento.',
    giudizio: 'imperdibile',
    alternative: [
      'Tianzi Shan, raggiungibile con un\'altra funivia, con un panorama più ampio e meno gente',
      'Il sentiero del Ditastro d\'Oro in fondovalle, che mostra i pilastri dal basso invece che dall\'alto',
    ],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Il Pilastro dell\'Alleluia e i pilastri di quarzite di Yuanjiajie nella nebbia, Zhangjiajie',
  },
  {
    slug: 'tianmen-shan',
    paeseSlug: 'cina',
    destinazioneSlug: 'zhangjiajie',
    nome: 'Tianmen Shan e la Porta del Cielo',
    localita: 'Città di Zhangjiajie, Hunan',
    cosE:
      'La montagna che sovrasta la città, con una grotta naturale passante alta 131 metri — la "Porta del Cielo" — raggiungibile salendo 999 gradini. Ci si arriva con la funivia più lunga del mondo, che parte dal centro città, oppure con una navetta lungo una strada di 99 tornanti. In cima corrono passerelle a strapiombo, alcune con il fondo di vetro.',
    percheFarla:
      'Perché mette insieme in una sola giornata tre cose che altrove sono esperienze separate: una funivia da record che parte dalla città, una scalinata che finisce dentro una montagna forata, e camminamenti sospesi nel vuoto.',
    durata: 'una giornata intera',
    periodo:
      'aprile-ottobre. In inverno il ghiaccio può chiudere le passerelle esterne; nelle giornate di nebbia fitta la funivia sale dentro il bianco e non si vede nulla.',
    costo: 'circa 250-280 yuan con funivia inclusa, secondo la stagione e la combinazione scelta',
    comePrenotare:
      'Online, con fascia oraria assegnata per la funivia: in alta stagione gli slot si esauriscono, e presentarsi senza prenotazione significa rischiare di non salire. Il biglietto è nominale e legato al passaporto.',
    cosaPortare:
      'Strati: in città può esserci caldo e in cima fa parecchi gradi in meno, con vento. Per le passerelle di vetro servono i copriscarpe che vengono forniti sul posto.',
    perChiEAdatta:
      'Buona forma fisica non necessaria — si può evitare la scalinata con le scale mobili interne alla montagna — ma chi soffre di vertigini deve sapere che le passerelle a strapiombo sono parte integrante del percorso, anche se aggirabili.',
    miaEsperienza:
      'La funivia è la parte migliore e dura quasi mezz\'ora: si parte dal centro di una città qualsiasi, si sorvolano palazzi e poi campi, e a un certo punto la cabina inizia a salire sopra la strada dei 99 tornanti, che da sopra sembra un disegno. La Porta del Cielo, vista dalla base della scalinata, è impressionante per una ragione semplice: è un buco vero in una montagna vera, e le persone in cima ai 999 gradini si vedono come puntini. La salita è dura ma breve, e c\'è la scorciatoia delle scale mobili interne per chi non se la sente. Le passerelle di vetro, invece, sono la parte che divide: sono sicure e larghe, ma camminare con trecento metri di vuoto sotto le suole è un\'altra cosa, e diverse persone si fermano dopo tre passi. Rispetto al parco nazionale, Tianmen è meno straordinario come paesaggio e più spettacolare come costruzione: sono due giornate diverse, non alternative.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Grande Canyon di Zhangjiajie con il ponte di vetro, per chi vuole solo l\'adrenalina',
      'Una seconda giornata dentro il parco nazionale, se si deve scegliere solo una delle due cose',
    ],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'La grotta passante della Porta del Cielo in cima alla scalinata dei 999 gradini, Tianmen Shan',
  },
  {
    slug: 'panda-chengdu',
    paeseSlug: 'cina',
    destinazioneSlug: 'chengdu',
    nome: 'Base dei panda giganti all\'apertura',
    localita: 'Base di ricerca sull\'allevamento del panda gigante, nord di Chengdu',
    cosE:
      'Il principale centro di ricerca e riproduzione del panda gigante: un parco di ampie aree boscose dove gli animali vivono in recinti grandi, con nursery per i cuccioli. Non è uno zoo e non lo si visita come tale.',
    percheFarla:
      'Perché è il posto al mondo dove si vedono più panda in condizioni decenti, e perché la finestra in cui sono attivi è breve e precisa: chi la rispetta assiste a un\'ora di arrampicate e bambù masticato, chi la manca guarda animali che dormono.',
    durata: '3-4 ore, da fare la mattina presto',
    periodo:
      'tutto l\'anno. Da agosto a settembre ci sono i cuccioli più piccoli nella nursery; d\'estate, con il caldo, gli animali si ritirano prima e la finestra di attività si accorcia ancora.',
    costo: 'circa 55 yuan di ingresso, più la navetta interna',
    comePrenotare:
      'Online e in anticipo, con prenotazione nominale legata al passaporto: le biglietterie fisiche sono state chiuse. In alta stagione e nei fine settimana le quote si esauriscono, e per lo slot delle 7:30 conviene muoversi con qualche giorno di anticipo.',
    cosaPortare:
      'Nient\'altro che la voglia di alzarsi presto. Il parco è grande, si cammina parecchio, e ci sono navette interne per chi non vuole farlo a piedi.',
    perChiEAdatta: 'A tutti, bambini compresi. Percorsi comodi e in gran parte ombreggiati.',
    miaEsperienza:
      'Tutto dipende dall\'ora. Alle sette e mezza del mattino, appena aprono, i panda sono svegli, mangiano, si arrampicano e ogni tanto cadono dagli alberi con una goffaggine che spiega da sola perché piacciano tanto: per un\'ora buona è esattamente la scena che si sperava. Alle undici dormono tutti, distesi su una piattaforma di legno come sacchi, e chi arriva a quell\'ora — cioè la maggioranza — guarda palle di pelo immobili e se ne va convinto che sia un posto sopravvalutato. Non lo è, è solo una questione di orario. La parte dei panda rossi, che quasi tutti saltano per correre ai giganti, è tra le più divertenti: sono attivi, curiosi e a volte camminano lungo i corrimano a pochi centimetri dai visitatori.',
    giudizio: 'imperdibile',
    alternative: [
      'La base di Dujiangyan, a un\'ora da Chengdu, più piccola e meno affollata',
      'La riserva di Bifengxia, più lontana e molto meno visitata, per chi ha un giorno intero',
    ],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Un panda gigante che mangia bambù nella base di ricerca di Chengdu al mattino presto',
  },
  {
    slug: 'hot-pot-sichuan',
    paeseSlug: 'cina',
    destinazioneSlug: 'chengdu',
    nome: 'Hot pot sichuanese',
    localita: 'Chengdu, in qualunque locale di quartiere',
    cosE:
      'Una pentola di brodo bollente al centro del tavolo — di solito divisa in due settori, uno rosso di peperoncino e grasso di manzo, uno chiaro — in cui si cuociono da soli gli ingredienti ordinati a parte: carne affettata sottile, funghi, verdure, tofu, interiora. Si accompagna con una ciotola di salse che ognuno si compone al banco.',
    percheFarla:
      'Perché è il piatto identitario del Sichuan e perché il "málà", la combinazione di piccante e intorpidimento data dal pepe di Sichuan, non somiglia a niente di quello che in Europa chiamiamo piccante. È un\'esperienza prima ancora che un pasto.',
    durata: '2 ore circa: l\'hot pot non è un pasto veloce, ed è parte del punto',
    periodo: 'tutto l\'anno; i cinesi lo mangiano soprattutto d\'inverno, ma a Chengdu i locali sono pieni anche in agosto',
    costo: 'indicativamente 60-120 yuan a persona secondo quanto si ordina',
    comePrenotare:
      'Nei locali più famosi si prende un numero all\'ingresso e si aspetta, anche a lungo: è normale e fa parte della serata. I locali di quartiere, spesso migliori e molto più economici, non hanno attese.',
    cosaPortare:
      'Vestiti che si possano lavare: l\'odore del brodo resta addosso per giorni e i locali più attrezzati offrono grembiuli e sacchetti di plastica per le borse, non per scherzo.',
    perChiEAdatta:
      'A chi tollera il piccante almeno in parte. Il brodo diviso risolve il problema: nella metà chiara si cuoce tutto senza nessun ardore, e nessuno si offende.',
    miaEsperienza:
      'Il pepe di Sichuan è la sorpresa vera. Non brucia come il peperoncino: addormenta la lingua e le labbra, e la prima volta la sensazione è quasi allarmante — si controlla di avere ancora la bocca al suo posto — poi diventa una cosa che si va a cercare. Il consiglio più utile per chi non è allenato è chiedere il brodo diviso senza fare gli eroi: si cuoce nella metà rossa quello che si vuole e nella metà chiara tutto il resto, ed è quello che fanno anche molti cinesi. L\'altra cosa da sapere è che l\'hot pot è lento di proposito: si sta due ore al tavolo a buttare dentro cose, parlare e aspettare, e i locali sono rumorosissimi. È il pasto più sociale della Cina, e mangiarlo da soli ha poco senso.',
    giudizio: 'imperdibile',
    alternative: [
      'L\'hot pot di Chongqing, l\'originale, ancora più grasso e più piccante, senza versioni addolcite',
      'Un pasto sichuanese classico — mapo tofu, pollo gongbao, dan dan noodles — per chi non regge la pentola',
    ],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Pentola di hot pot sichuanese divisa in due con brodo rosso di peperoncino, Chengdu',
  },
  {
    slug: 'hongya-dong-notte',
    paeseSlug: 'cina',
    destinazioneSlug: 'chongqing',
    nome: 'Hongya Dong illuminata dalla riva opposta',
    localita: 'Confluenza tra Jialing e Yangtze, Chongqing',
    cosE:
      'Un complesso di edifici a undici piani costruito nello stile delle case su palafitte tradizionali, aggrappato alla parete sopra il fiume Jialing e interamente illuminato di giallo dopo il tramonto. Dentro è un centro commerciale; da fuori, di notte, è l\'immagine che ha reso Chongqing virale.',
    percheFarla:
      'Perché è il simbolo della città verticale, e perché la differenza tra vederlo da dentro e vederlo dalla riva giusta è la differenza tra un pomeriggio dimenticabile e la fotografia migliore del viaggio.',
    durata: '1-2 ore attorno al tramonto',
    periodo:
      'tutto l\'anno; le luci si accendono al calare del buio. L\'estate di Chongqing è però soffocante anche di sera, e il periodo giusto resta la primavera o l\'autunno.',
    costo: 'gratuito; la funivia sullo Yangtze, che dà un\'altra prospettiva sulla città illuminata, costa pochi yuan',
    comePrenotare:
      'Non serve prenotare nulla. Nei fine settimana e nei periodi di festa la zona è affollatissima: si arriva presto e si tiene il punto di osservazione.',
    cosaPortare:
      'Un telefono con una buona modalità notturna, e la pazienza di aspettare venti minuti che il cielo passi dal blu al nero: è la finestra in cui il posto rende di più.',
    perChiEAdatta: 'A tutti; l\'unica difficoltà è orientarsi in una città costruita su più livelli.',
    miaEsperienza:
      'L\'errore che fanno quasi tutti è entrare dentro Hongya Dong. All\'interno è un centro commerciale a tema, con negozi di souvenir e file alle scale mobili, e ci si chiede perché ne parlino tutti. La risposta sta sulla riva opposta del Jialing, dopo il tramonto: da lì, undici piani di edifici in legno finto illuminati di giallo si specchiano nell\'acqua con i grattacieli dietro, e la scena non somiglia a niente. La seconda cosa da fare, e che vale quanto la prima, è prendere la funivia che attraversa lo Yangtze: costa pochi yuan, dura cinque minuti, e passa sospesa sopra il fiume con la città illuminata da entrambe le parti. Chongqing non ha monumenti e non ne ha bisogno: quello che si guarda qui è la forma della città.',
    giudizio: 'bella-non-essenziale',
    alternative: [
      'La stazione di monorotaia di Liziba, dove il treno entra ed esce dal sesto piano di un palazzo abitato',
      'Il punto panoramico di Nanshan, sopra la città, per la vista d\'insieme',
    ],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Il complesso illuminato di Hongya Dong riflesso nel fiume Jialing di notte, Chongqing',
  },
  {
    slug: 'impression-lijiang',
    paeseSlug: 'cina',
    destinazioneSlug: 'yulong-shangri-la',
    nome: 'Impression Lijiang, lo spettacolo a 3.100 metri',
    localita: 'Anfiteatro all\'aperto ai piedi dello Yulong Xueshan, Lijiang',
    cosE:
      'Uno spettacolo all\'aperto diretto da Zhang Yimou, con oltre cinquecento interpreti — quasi tutti abitanti dei villaggi della zona, non attori professionisti — cavalli e musica dal vivo, in un anfiteatro costruito a 3.100 metri di quota con il massiccio del Drago di Giada come unico fondale. Racconta le tradizioni dei gruppi etnici dello Yunnan e le carovane della Via del Tè e dei Cavalli.',
    percheFarla:
      'Perché nessun teatro al mondo ha una scenografia simile: il fondale è una montagna di 5.596 metri con il ghiacciaio sopra la testa, e cambia con la luce mentre lo spettacolo va avanti.',
    durata: 'circa 70-80 minuti di spettacolo, mezza giornata contando trasferimento e ingresso al parco',
    periodo:
      'si tiene tutto l\'anno, con più repliche giornaliere in alta stagione. Nelle giornate coperte la montagna sparisce dietro le nuvole e lo spettacolo perde gran parte della sua ragione: vale la pena scegliere il giorno guardando il meteo.',
    costo: 'indicativamente 190-280 yuan secondo il settore, oltre all\'ingresso al parco dello Yulong Xueshan e alla navetta',
    comePrenotare:
      'Online in anticipo, scegliendo la replica: in alta stagione si esauriscono. Va prenotato insieme all\'ingresso al parco, perché l\'anfiteatro sta dentro l\'area a pagamento.',
    cosaPortare:
      'Strati pesanti anche in estate: si sta seduti fermi per più di un\'ora a 3.100 metri, all\'aperto, e il vento non manca. Cappello e crema solare, perché a quella quota il sole brucia in fretta.',
    perChiEAdatta:
      'A tutti, con una sola avvertenza: si tratta comunque di quota, e chi è appena arrivato in aereo dal livello del mare la sentirà anche stando seduto.',
    miaEsperienza:
      'Sulla carta è la classica cosa da turisti — cinquecento figuranti in costume, cavalli, tamburi — e sarebbe facile liquidarla così. Dal vivo funziona per un motivo che non c\'entra con la regia: il fondale non è dipinto, è la montagna vera, e mentre lo spettacolo va avanti la luce la cambia. In più i figuranti sono quasi tutti abitanti dei villaggi della zona, agricoltori e pastori, non ballerini professionisti, e si vede — nei gesti, nelle facce, nel modo di stare in scena — ed è esattamente questo che lo rende diverso da una produzione teatrale. La parte più bella è quella delle carovane, con i cavalli veri che entrano nell\'arena. Va messo in conto che si sta seduti fermi più di un\'ora a 3.100 metri: il freddo arriva dopo venti minuti anche in agosto.',
    giudizio: 'imperdibile',
    alternative: [
      'Impression Liu Sanjie a Yangshuo, dello stesso regista, sul fiume Li con le torri carsiche come scenografia',
      'La funivia al ghiacciaio dello Yulong Xueshan, se si deve scegliere una sola cosa in quota e il cielo è limpido',
    ],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'L\'anfiteatro all\'aperto di Impression Lijiang con il massiccio dello Yulong Xueshan sullo sfondo',
  },
  {
    slug: 'gola-salto-tigre',
    paeseSlug: 'cina',
    destinazioneSlug: 'yulong-shangri-la',
    nome: 'Trek della Gola del Salto della Tigre',
    localita: 'Tra Qiaotou e Walnut Garden, Yunnan settentrionale',
    cosE:
      'Due giorni di cammino lungo il sentiero alto che corre sul versante ovest di una delle gole più profonde del mondo, con lo Yangtze incassato quasi tremila metri più in basso tra lo Yulong Xueshan e l\'Haba Xueshan. Si dorme in guesthouse lungo il percorso e si scende a valle il secondo giorno.',
    percheFarla:
      'Perché è il trek più bello della Cina accessibile senza permessi, guide obbligate o attrezzatura tecnica, e perché il sentiero alto è quasi deserto mentre a fondovalle passano i pullman.',
    durata: '2 giorni, 1 notte: circa 5-6 ore il primo giorno, 3-4 il secondo',
    periodo:
      'marzo-maggio e settembre-novembre. Da giugno ad agosto le piogge provocano frane e alcuni tratti vengono chiusi; d\'inverno il sentiero è percorribile ma gelido al mattino.',
    costo: 'ingresso alla gola attorno ai 65 yuan; guesthouse lungo il percorso molto economiche, pasti inclusi a parte',
    comePrenotare:
      'Non serve una guida e non ci sono permessi: si arriva a Qiaotou in bus da Lijiang o da Shangri-La e si parte a piedi. Le guesthouse lungo il sentiero si prenotano il giorno prima o si trovano sul posto fuori stagione; in alta stagione conviene chiamare. I bagagli grossi si lasciano in deposito a Lijiang o si fanno trasportare fino all\'arrivo.',
    cosaPortare:
      'Scarpe da trekking, acqua per almeno mezza giornata, torcia, strati per la notte — le guesthouse in quota non hanno riscaldamento — e contanti, perché lungo il sentiero la connessione è intermittente e non tutte le strutture hanno il QR funzionante.',
    perChiEAdatta:
      'Serve allenamento medio, non esperienza alpinistica: il tratto duro è la salita delle 28 curve del primo giorno, dopodiché il sentiero è in gran parte in traverso. Chi soffre di vertigini deve sapere che diversi tratti sono esposti, senza protezioni.',
    miaEsperienza:
      'È la cosa migliore della Cina naturale e il motivo è semplice: è l\'unico posto in cui si cammina per ore senza incontrare nessuno. Il primo giorno c\'è da superare le 28 curve, un\'ora abbondante di tornanti in salita con il fiato corto — si è già sopra i 2.500 metri — dopo cui il sentiero si distende in traverso e la gola si apre sotto: lo Yangtze si sente prima di vedersi, un rumore costante che sale da tremila metri più in basso. Si dorme in una guesthouse sul sentiero, si cena tutti allo stesso tavolo con gli altri quattro o cinque che stanno facendo lo stesso percorso, e non c\'è altro da fare che guardare la montagna dall\'altra parte. Quello che rende tutto questo un consiglio e non solo un ricordo è che a fondovalle, sulla strada asfaltata, i pullman scaricano i gruppi al punto panoramico ufficiale per venti minuti: chi fa così pensa di aver visto la gola, e non l\'ha vista.',
    giudizio: 'imperdibile',
    alternative: [
      'Il solo punto panoramico di fondovalle, raggiungibile in auto, per chi ha mezza giornata e nessuna intenzione di camminare',
      'Il primo giorno di trek con rientro, per chi non vuole dormire lungo il sentiero',
    ],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Il sentiero alto della Gola del Salto della Tigre con lo Yangtze incassato in fondo alla valle, Yunnan',
  },
  {
    slug: 'fiume-li-zattera',
    paeseSlug: 'cina',
    destinazioneSlug: 'yangshuo',
    nome: 'Il fiume Li in zattera di bambù',
    localita: 'Tratto Xingping-Yangdi, fiume Li, Guangxi',
    cosE:
      'La discesa del tratto più bello del fiume Li su una zattera motorizzata di canne di bambù, con due o quattro posti: circa un\'ora di navigazione a pelo d\'acqua tra le torri carsiche, incluso il punto esatto riprodotto sulla banconota da 20 yuan.',
    percheFarla:
      'Perché è il paesaggio dipinto dagli artisti cinesi per secoli e perché la zattera lo attraversa a mezzo metro dall\'acqua, senza il rumore e la folla del battello turistico che parte da Guilin.',
    durata: 'circa 1 ora di navigazione, mezza giornata contando il trasferimento a Xingping',
    periodo:
      'aprile-ottobre. Il livello dell\'acqua conta: in stagione secca alcune tratte vengono sospese, e dopo piogge intense le zattere restano a terra per sicurezza.',
    costo: 'indicativamente 100-150 yuan a zattera per il tratto breve; la crociera lunga in battello da Guilin costa invece 215-450 yuan a persona',
    comePrenotare:
      'Le zattere si prendono al molo di Xingping, anche il giorno stesso; nei fine settimana e in alta stagione conviene comprare il biglietto online in anticipo. La crociera lunga da Guilin, che è un\'altra cosa, va prenotata giorni prima.',
    cosaPortare:
      'Cappello e crema solare — sulla zattera non c\'è ombra — e qualcosa di impermeabile per il telefono: gli spruzzi ci sono sempre.',
    perChiEAdatta: 'A tutti. Le zattere sono stabili e si naviga lentamente, con il giubbotto di salvataggio fornito a bordo.',
    miaEsperienza:
      'La scelta tra crociera lunga e zattera è la vera decisione di Yangshuo, e quasi tutti la prendono al contrario. La crociera da Guilin dura quattro ore, costa parecchio e si fa su un battello a due piani con il buffet e altre duecento persone: il paesaggio è lo stesso, ma lo si guarda da dietro un vetro con il chiacchiericcio intorno. La zattera invece copre solo il tratto migliore — quello attorno a Xingping, dove c\'è la veduta della banconota — dura un\'ora, costa una frazione, e si sta a mezzo metro dall\'acqua con due persone a bordo e le torri che sfilano di fianco. Il momento giusto è la prima mattina, quando c\'è ancora la foschia sul fiume e le zattere sono poche. Va detto che l\'imbarco è caotico e poco organizzato, e che alla fine si viene scaricati dove fa comodo al conducente: fa parte del pacchetto.',
    giudizio: 'la-rifarei',
    alternative: [
      'La crociera in battello Guilin-Yangshuo, più lunga e comoda, per chi vuole vedere l\'intero corso del fiume',
      'La giornata in bici elettrica lungo la Yulong River, che è il fiume minore e ha i ponti in pietra più belli',
    ],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Zattera di bambù sul fiume Li tra le torri carsiche nel tratto di Xingping, Guangxi',
  },
]
