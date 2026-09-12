import type { Destinazione } from '@/lib/types'

// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto (stagione, monsoni,
// affollamento, orari) e non su ricordi reali: vanno riletti e sostituiti.
// Nessun nome di hotel, ristorante o operatore è stato inventato.
// Il Borneo malese sta in una scheda separata: src/content/destinazioni/borneo.ts

export const destinazioniMalesia: Destinazione[] = [
  {
    slug: 'kuala-lumpur',
    paeseSlug: 'malesia',
    ordine: 1,
    nome: 'Kuala Lumpur',
    tipologia: ['città', 'gastronomia', 'architettura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una capitale cresciuta da un accampamento di cercatori di stagno a città di grattacieli in poco più di un secolo, dove una moschea, un tempio indù e un tempio cinese possono stare nello stesso isolato e dove il cibo di strada è la vera istituzione civica.',
    percheAndarci:
      'Perché è il modo più rapido di capire come funziona la Malesia: tre comunità che vivono nella stessa città mantenendo lingue, religioni e cucine separate, e che si incontrano ai food court. E perché è un hub aereo eccellente da cui parte tutto il resto del viaggio.',
    cosaVedere: [
      'Le Petronas Twin Towers, con lo skybridge e la piattaforma panoramica',
      'Le Batu Caves, con la statua dorata di Murugan alta 42 metri e i 272 gradini colorati',
      'La moschea Masjid Jamek, alla confluenza dei due fiumi da cui la città prende il nome',
      'Il quartiere di Chinatown attorno a Petaling Street e il tempio Sri Mahamariamman',
      'Il Museo delle Arti Islamiche, uno dei migliori al mondo nel suo genere e quasi sempre vuoto',
      'Il mercato notturno di Jalan Alor, dove si cena all\'aperto tra decine di cucine',
    ],
    cosaFare: [
      'Salire alle Batu Caves presto al mattino, prima del caldo e dei gruppi — vedi la scheda esperienza dedicata',
      'Cena a Jalan Alor, che è il modo giusto di passare la prima sera',
      'Giro dei quartieri a piedi: Chinatown, Little India a Brickfields, Kampung Baru',
      'Passeggiata sulla canopy walkway del parco forestale di Bukit Nanas, foresta pluviale primaria rimasta in centro città',
    ],
    doveDormire:
      'Bukit Bintang per la comodità e la vita serale, Chinatown per i prezzi bassi e il carattere, KLCC per la vicinanza alle torri e ai centri commerciali. La città è grande e caotica: conviene stare vicino a una stazione della monorotaia o della metropolitana.',
    doveMangiare:
      'Kuala Lumpur è una delle città dove si mangia meglio in Asia e il modo di farlo è uno solo: i food court e i banchi di strada, non i ristoranti. Da provare il nasi lemak — riso al cocco con sambal, acciughe secche, arachidi e uovo, che è il piatto nazionale e si mangia a colazione — il char kway teow, il roti canai indiano al mattino con il dahl, il laksa e il satay alla brace. Jalan Alor la sera è la versione più scenografica; i food court dei centri commerciali, con l\'aria condizionata, sono sorprendentemente buoni e costano niente.',
    comeArrivare:
      'Volo su Kuala Lumpur International (KUL), grande hub regionale, con il KLIA Ekspres che porta in centro in 28 minuti. Il terminal 2 serve i voli low cost, compresi quelli per il Borneo.',
    comeSpostarsi:
      'Metropolitana, monorotaia e LRT coprono bene il centro, con la Touch \'n Go o il biglietto singolo. Grab è economico e risolve tutto il resto. Camminare è possibile ma faticoso: marciapiedi discontinui, caldo e umidità.',
    periodoMigliore:
      'tutto l\'anno, con acquazzoni pomeridiani in qualsiasi stagione. Le piogge più insistenti si concentrano tra ottobre e dicembre e ad aprile.',
    costi:
      'Petronas skybridge attorno agli 80 ringgit, Batu Caves gratuito (a pagamento solo la Dark Cave quando accessibile), Museo delle Arti Islamiche circa 20 ringgit. I trasporti costano pochi ringgit.',
    erroriDaEvitare: [
      'Salire alle Batu Caves a metà giornata: 272 gradini sotto il sole equatoriale, con le scimmie che rubano tutto quello che si tiene in mano',
      'Vestirsi troppo scoperti per visitare templi e moschee: alle Batu Caves e alla Masjid Negara servono spalle e ginocchia coperte, e i sarong prestati all\'ingresso risolvono solo in parte',
      'Giudicare la città dai centri commerciali di Bukit Bintang: quello che vale sta nei quartieri, a piedi',
      'Contare sulle carte ai banchi di strada: lì serve contante',
    ],
    miaEsperienza:
      'Kuala Lumpur è una città che quasi tutti usano come scalo e che invece regge due giorni pieni, a patto di girarla a quartieri e non a monumenti. Le Petronas si guardano dal basso all\'ora blu e va bene così: la salita allo skybridge costa e restituisce meno di quanto promette. Le Batu Caves, invece, vanno fatte alle sette del mattino, quando i gradini colorati sono ancora in ombra e i fedeli salgono per pregare: due ore dopo è una scalinata rovente con centinaia di persone e le scimmie che strappano le bottiglie di mano. Ma la cosa che resta è un\'altra ed è banale: la sera a Jalan Alor, seduti su sgabelli di plastica in mezzo alla strada, con una cucina cinese a destra, una malese a sinistra e un banco indiano di fronte. È lì che si capisce di che paese si sta parlando.',
    esperienzeSlugs: ['batu-caves'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'I 272 gradini colorati e la statua dorata di Murugan alle Batu Caves, Kuala Lumpur',
  },
  {
    slug: 'penang',
    paeseSlug: 'malesia',
    ordine: 2,
    nome: 'Penang e George Town',
    tipologia: ['gastronomia', 'cultura', 'città coloniali'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola sullo Stretto di Malacca con al centro George Town, ex porto franco britannico e oggi patrimonio UNESCO: shophouse cinesi, moschee, templi, case-clan sull\'acqua e quella che quasi tutti i malesi considerano senza discussione la migliore cucina di strada del paese.',
    percheAndarci:
      'Per il cibo, che qui è una ragione di viaggio sufficiente da sola, e perché George Town è la città dove la stratificazione culturale malese è più leggibile: quattro comunità in quattro isolati, ognuna con la propria architettura religiosa, tutte arrivate via mare.',
    cosaVedere: [
      'Il centro storico UNESCO di George Town, con le shophouse peranakan',
      'I Clan Jetties, i villaggi su palafitte delle famiglie cinesi, ognuno di un clan diverso',
      'Il tempio Kek Lok Si, il complesso buddista più grande della Malesia, sulla collina di Air Itam',
      'La Blue Mansion di Cheong Fatt Tze e la Pinang Peranakan Mansion',
      'La Street of Harmony, dove moschea, tempio cinese, tempio indù e chiesa anglicana stanno nella stessa via',
      'I murales del centro, che hanno reso George Town famosa ben oltre il suo perimetro',
    ],
    cosaFare: [
      'Mangiare ai banchi di strada, che è il motivo per cui si viene qui — vedi la scheda esperienza dedicata',
      'Girare il centro storico a piedi seguendo i murales e le installazioni in ferro battuto',
      'Salire a Penang Hill con la funicolare per la vista sull\'isola e sull\'aria fresca',
      'Escursione nel Penang National Park, il parco nazionale più piccolo al mondo, fino a Monkey Beach',
    ],
    doveDormire:
      'Dentro il perimetro UNESCO di George Town, possibilmente in una shophouse restaurata: si gira tutto a piedi ed è l\'unico modo di vedere la città la sera. Batu Ferringhi è la zona delle spiagge e dei resort, ma sta dall\'altra parte dell\'isola e taglia fuori dalla parte migliore.',
    doveMangiare:
      'È la ragione del viaggio. Da provare in ordine: l\'assam laksa, la zuppa acida di pesce e tamarindo che è il piatto simbolo dell\'isola; il char kway teow saltato al wok sul fuoco vivo; il cendol, il dolce ghiacciato con latte di cocco e zucchero di palma; il nasi kandar indiano-musulmano, con i curry versati uno sull\'altro sul riso; e il rojak, macedonia salata con salsa di gamberi fermentati. Si mangia ai coffee shop e ai food court, non nei ristoranti, e i banchi migliori hanno orari propri: alcuni aprono solo la mattina, altri solo dopo il tramonto.',
    comeArrivare:
      'Volo su Penang (PEN) da Kuala Lumpur o dall\'estero, oppure treno ETS fino a Butterworth e traghetto — che è il modo più bello di arrivare. In autobus da Kuala Lumpur sono circa 5 ore.',
    comeSpostarsi: 'George Town si gira a piedi; per il resto dell\'isola autobus pubblici economici e Grab.',
    periodoMigliore:
      'da dicembre a marzo, la stagione più secca della costa ovest. A fine giugno si tiene il George Town Festival e a luglio il festival del cibo: entrambi ottimi motivi per esserci, ma la città si riempie.',
    costi:
      'La città in sé è quasi tutta gratuita: il centro storico si cammina, i murales non si pagano. Kek Lok Si offre libero ingresso con contributo per la funicolare della pagoda; Penang Hill circa 30 ringgit andata e ritorno.',
    erroriDaEvitare: [
      'Andare a Penang per le spiagge: Batu Ferringhi è mediocre e tiene lontani dalla parte che conta',
      'Mangiare nei ristoranti con menu illustrato: i banchi migliori non hanno insegne in inglese e chiudono quando finiscono gli ingredienti',
      'Girare il centro storico a mezzogiorno: tra le undici e le tre il caldo è serio e l\'ombra è poca',
      'Fermarsi una notte sola: George Town ha bisogno almeno di due sere, perché metà dei banchi lavora solo dopo il tramonto',
    ],
    confronti: [
      {
        titolo: 'Penang o Malacca?',
        introduzione:
          'Sono le due città dello Stretto iscritte insieme nella lista UNESCO nel 2008, hanno la stessa storia — porti coloniali con comunità cinesi, indiane e malesi — e vengono spesso messe in alternativa quando il tempo è poco. Non si somigliano quanto sembra.',
        opzioni: [
          {
            nome: 'George Town (Penang)',
            sintesi: 'La più grande, la più viva e la capitale gastronomica del paese, su un\'isola con anche montagna, parco nazionale e spiagge.',
            costo: 'la città è quasi tutta gratuita; volo o 5 ore di bus da KL',
            durata: '2-3 giorni',
            pro: [
              'Il cibo di strada è di un altro livello, ed è il motivo principale per venire in Malesia',
              'Centro storico più grande e ancora abitato, non solo restaurato per i visitatori',
              'C\'è altro oltre alla città: Penang Hill, il parco nazionale, i Clan Jetties',
            ],
            contro: ['Più lontana da Kuala Lumpur', 'Più caotica e meno fotogenica nel complesso', 'Le spiagge sono deludenti'],
            perChi: 'Chi ha almeno due giorni e viene anche per mangiare. Se se ne sceglie una sola, è questa.',
          },
          {
            nome: 'Malacca',
            sintesi: 'Più piccola e più antica, con la stratificazione portoghese, olandese e britannica visibile in pochi isolati, a due ore da Kuala Lumpur.',
            costo: 'bus da KL circa 2 ore, pochi euro',
            durata: '1-2 giorni',
            pro: [
              'Comodissima: si incastra tra Kuala Lumpur e Singapore senza deviazioni',
              'Storia coloniale più antica e più leggibile, con tre dominazioni europee sovrapposte',
              'Jonker Street nel fine settimana e il quartiere peranakan sono molto belli',
            ],
            contro: [
              'Molto più turistica in proporzione, e nel fine settimana invasa dai visitatori in giornata',
              'Il centro si esaurisce in mezza giornata',
              'La cucina è buona ma non regge il confronto con Penang',
            ],
            perChi: 'Chi ha un giorno solo o sta viaggiando via terra verso Singapore.',
          },
        ],
        raccomandazione:
          'Non sono alternative se si ha una settimana: Malacca è una sosta di un giorno sulla strada per Singapore, Penang è una tappa a sé di due o tre. Dovendo sceglierne una, Penang — a meno che il viaggio non finisca a Singapore via terra, nel qual caso Malacca si fa quasi senza costi di tempo.',
      },
    ],
    miaEsperienza:
      'A Penang si va a mangiare, e chi dice il contrario non c\'è stato. Il centro storico di George Town è bello — shophouse scrostate, insegne cinesi, i Clan Jetties su palafitte dove vive ancora gente — ma la cosa che lo rende diverso da qualsiasi altra città malese è che ogni comunità ha portato qui la propria cucina e nessuna l\'ha annacquata. L\'assam laksa, con quel brodo acido di pesce e tamarindo che al primo cucchiaio spiazza, è il piatto per cui vale la deviazione. Va detto anche come funziona: i banchi migliori non hanno insegne in inglese, aprono a orari propri e chiudono quando finiscono, e capita di presentarsi e trovare la serranda abbassata alle due del pomeriggio. Sulla parte artistica conviene essere onesti: i murales sono simpatici e ormai ci sono code per fotografarsi davanti ai più famosi, ma non sono il motivo per cui questa città è patrimonio UNESCO.',
    esperienzeSlugs: ['street-food-penang'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Shophouse coloniali e murales nel centro storico UNESCO di George Town, Penang',
  },
  {
    slug: 'malacca',
    paeseSlug: 'malesia',
    ordine: 3,
    nome: 'Malacca',
    tipologia: ['storia', 'città coloniali', 'gastronomia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il porto che per secoli ha controllato lo stretto più strategico d\'Asia, conquistato dai portoghesi nel 1511, poi dagli olandesi e infine dai britannici: tre dominazioni europee sovrapposte in pochi isolati, più la cultura peranakan nata dai matrimoni tra mercanti cinesi e donne malesi.',
    percheAndarci:
      'Perché è la città dove la storia coloniale del sud-est asiatico si legge camminando — la chiesa portoghese in rovina, la piazza olandese rossa, il forte — e perché sta esattamente a metà strada tra Kuala Lumpur e Singapore.',
    cosaVedere: [
      'La Dutch Square con la Christ Church e lo Stadthuys, il municipio olandese del 1650',
      'Le rovine della chiesa di St. Paul in cima alla collina, con la vista sullo stretto',
      'La Porta de Santiago, ciò che resta della fortezza portoghese A Famosa',
      'Jonker Street, la via principale di Chinatown, con il mercato notturno del fine settimana',
      'Il Baba & Nyonya Heritage Museum, una casa peranakan conservata con gli arredi originali',
      'La Kampung Kling Mosque e il Cheng Hoon Teng, il tempio cinese più antico della Malesia',
    ],
    cosaFare: [
      'Camminare il centro storico UNESCO, che si fa tutto a piedi in mezza giornata',
      'Cenare peranakan, la cucina nata dall\'incontro tra cinesi e malesi e che esiste quasi solo qui e a Penang',
      'Mercato notturno di Jonker Street il venerdì, sabato o domenica sera',
      'Giro in barca sul fiume al tramonto, con i murales sulle rive',
    ],
    doveDormire:
      'Dentro il centro storico, meglio dal lato di Chinatown: la sera, quando i pullman dei visitatori in giornata sono ripartiti, il quartiere cambia completamente ed è la ragione per fermarsi a dormire.',
    doveMangiare:
      'La cucina da cercare è quella peranakan o nyonya: l\'ayam pongteh, il pollo stufato con salsa di soia fermentata, e il laksa nyonya, con il latte di cocco, che è diverso da quello di Penang. La specialità popolare è invece il chicken rice ball, il pollo con il riso servito in polpette compatte, nato qui. Da provare anche il cendol di Malacca, particolarmente ricco di zucchero di palma, e i satay celup, gli spiedini cotti dai clienti in una pentola di salsa di arachidi bollente al centro del tavolo.',
    comeArrivare:
      'Autobus da Kuala Lumpur, circa 2 ore, con partenze continue dal terminal TBS. Da Malacca a Singapore ci sono autobus diretti in 4-5 ore, frontiera compresa: è la ragione per cui questa città sta in mezzo a quasi tutti gli itinerari.',
    comeSpostarsi: 'Il centro storico si gira a piedi. Per la stazione degli autobus, che è fuori città, servono un bus locale o Grab.',
    periodoMigliore: 'da dicembre a marzo. Il mercato notturno di Jonker Street c\'è solo nel fine settimana, il che condiziona la scelta dei giorni.',
    costi: 'Baba & Nyonya Heritage Museum circa 25 ringgit, St. Paul e la Porta de Santiago gratuiti, giro in barca sul fiume attorno ai 30.',
    erroriDaEvitare: [
      'Andarci in un fine settimana aspettandosi tranquillità: da venerdì a domenica Malacca è una delle mete domestiche più battute della Malesia',
      'Farla in giornata da Kuala Lumpur: si vede solo nelle ore peggiori e si perde la sera, che è il momento in cui la città funziona',
      'Salire sui trishaw decorati con le luci e la musica a tutto volume aspettandosi un giro romantico: sono un\'attrazione kitsch, il che va benissimo se si sa in anticipo',
    ],
    miaEsperienza:
      'Malacca è una tappa breve che rende molto più di quanto prometta, a una condizione: dormirci. Di giorno, soprattutto nel fine settimana, il centro è un flusso continuo di visitatori in giornata da Kuala Lumpur e Singapore, con i trishaw decorati a luci LED che passano sparando musica a tutto volume — un livello di kitsch che alla seconda volta diventa divertente. La sera, quando i pullman se ne vanno, restano i vicoli di Chinatown, le case peranakan con le porte aperte e il fiume illuminato. La collina di St. Paul, con la chiesa portoghese senza tetto e le lapidi olandesi appoggiate ai muri, è il posto dove la stratificazione di questa città diventa evidente in due minuti. E la cucina nyonya, che nasce dall\'incontro tra mercanti cinesi e donne malesi, è una delle cose più interessanti mangiate in tutto il paese.',
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'La Christ Church e lo Stadthuys olandese nella piazza rossa di Malacca',
  },
  {
    slug: 'cameron-highlands',
    paeseSlug: 'malesia',
    ordine: 4,
    nome: 'Cameron Highlands',
    tipologia: ['natura', 'montagna', 'trekking'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'L\'altopiano a 1.500 metri dove i britannici si rifugiavano dal caldo: piantagioni di tè a perdita d\'occhio, serre di fragole, foresta muschiosa e un clima che di sera scende sotto i quindici gradi. È l\'unico posto della penisola dove serve una felpa.',
    percheAndarci:
      'Perché dopo qualche giorno di caldo equatoriale il sollievo fisico è reale, e perché le piantagioni di tè che scendono a onde lungo le colline sono uno dei paesaggi più fotografati del paese — con la mossy forest, la foresta muschiosa d\'altura, che è tutta un\'altra cosa.',
    cosaVedere: [
      'Le piantagioni di tè di Sungai Palas e Bharat, con le terrazze verdi che seguono le colline',
      'La mossy forest sul Gunung Brinchang, un bosco d\'altura coperto di muschio e felci, percorribile su una passerella',
      'Le fattorie di fragole e le serre, che sono il secondo prodotto locale',
      'Il Time Tunnel Museum a Brinchang, per la storia coloniale dell\'altopiano',
      'Il mercato di Brinchang, con i prodotti dell\'altopiano',
    ],
    cosaFare: [
      'Visita a una piantagione con degustazione e vista sulle terrazze — vedi la scheda esperienza dedicata',
      'Passeggiata nella mossy forest al mattino, quando la nebbia è ancora tra gli alberi',
      'Uno dei sentieri numerati della zona, dal facile al parecchio impegnativo',
      'Cercare la rafflesia, il fiore più grande del mondo, con una guida locale: fiorisce a periodi e non è garantita',
    ],
    doveDormire:
      'Tanah Rata è il paese più comodo e ha l\'offerta più larga; Brinchang è più vicino alle piantagioni ma più anonimo. Le camere hanno raramente il riscaldamento: di notte fa davvero freddo e le coperte contano più delle stelle.',
    doveMangiare:
      'L\'altopiano ha una sua identità gastronomica legata al clima: lo steamboat, la pentola di brodo bollente al centro del tavolo in cui si cuociono verdure e carne, è quello che mangiano tutti la sera perché fa freddo, ed è la cosa giusta da fare. Per il resto, tè e scones nelle sale da tè delle piantagioni — un\'eredità coloniale che qui non è una posa — e le fragole in ogni forma possibile, comprese quelle che sarebbe meglio evitare.',
    comeArrivare:
      'Autobus da Kuala Lumpur (circa 4 ore) o da Penang/Ipoh. L\'ultimo tratto è una strada di montagna con centinaia di tornanti: chi soffre il mal d\'auto lo sente, e non è un dettaglio da poco su quattro ore di viaggio.',
    comeSpostarsi:
      'Le distanze tra i punti d\'interesse sono scomode a piedi e i mezzi pubblici sono radi: quasi tutti si aggregano a un tour di mezza giornata o prendono un taxi per la giornata. Grab funziona a singhiozzo.',
    periodoMigliore:
      'tutto l\'anno, con temperature stabili sui 15-22 gradi. Le piogge sono frequenti nel pomeriggio in ogni stagione: le uscite vanno programmate al mattino.',
    costi: 'ingresso alle piantagioni gratuito o simbolico; tour di mezza giornata attorno ai 40-60 ringgit.',
    erroriDaEvitare: [
      'Andarci in un fine settimana o durante le vacanze scolastiche malesi: l\'altopiano è la meta domestica per eccellenza e le strade a tornanti diventano una coda',
      'Non portare niente di caldo: qui, unico posto del viaggio, la sera si gela',
      'Prenotare i tour più economici per la mossy forest, che spesso portano solo sulla passerella affollata vicino alla torre e non nella parte vera',
      'Aspettarsi paesaggi incontaminati: l\'altopiano è pesantemente coltivato e in alcune zone le serre di plastica hanno mangiato la vista',
    ],
    miaEsperienza:
      'Le Cameron Highlands funzionano soprattutto per contrasto: si arriva dopo giorni di caldo umido e la sera si dorme sotto una coperta, che a quel punto sembra un lusso. Le piantagioni di tè sono davvero belle, con le terrazze verdi che scendono a onde, e la sala da tè affacciata sulle colline è una di quelle cose coloniali che qui non risultano fuori luogo. La mossy forest è la parte che sorprende di più — un bosco nano a 2.000 metri completamente coperto di muschio, con la nebbia tra i rami — e insieme quella su cui conviene essere pratici: ci sono due mossy forest, quella vera e la passerella turistica accanto al parcheggio della torre, e i tour più economici portano solo alla seconda. Va detto anche il rovescio della medaglia: l\'altopiano è agricolo e in certi tratti le serre di plastica coprono interi versanti. Non è un parco nazionale, è una zona coltivata con dei bei pezzi dentro.',
    esperienzeSlugs: ['piantagioni-te-cameron'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Le terrazze verdi di una piantagione di tè nelle Cameron Highlands, Malesia',
  },
  {
    slug: 'taman-negara',
    paeseSlug: 'malesia',
    ordine: 5,
    nome: 'Taman Negara',
    tipologia: ['natura', 'giungla', 'trekking'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una delle foreste pluviali più antiche del pianeta — si stima attorno ai 130 milioni di anni, ininterrotta anche durante le glaciazioni — nel cuore della penisola malese. Ci si arriva in barca lungo il fiume, e questo dice già molto su cosa aspettarsi.',
    percheAndarci:
      'Perché è giungla vera raggiungibile in mezza giornata da Kuala Lumpur, e perché la canopy walkway sospesa tra gli alberi è uno dei pochi modi di vedere una foresta pluviale dall\'alto invece che dal basso, dove non si vede quasi niente.',
    cosaVedere: [
      'La canopy walkway, una delle più lunghe al mondo, sospesa a 40 metri tra gli alberi',
      'Il Bukit Teresek, la salita panoramica sopra la volta della foresta',
      'Le rapide di Lata Berkoh, risalite in barca',
      'Un villaggio orang asli, le comunità indigene della penisola, con dimostrazione di cerbottana',
      'Le grotte di Gua Telinga, percorribili strisciando, per chi non teme gli spazi stretti',
    ],
    cosaFare: [
      'Camminare la canopy walkway al mattino presto — vedi la scheda esperienza dedicata',
      'Night walk guidata nella foresta, che è il momento in cui gli animali si vedono davvero',
      'Risalita del fiume in barca lunga fino alle rapide',
      'Trekking di più giorni verso gli hide, le postazioni di avvistamento dove si dorme in attesa della fauna',
    ],
    doveDormire:
      'Kuala Tahan, il villaggio sulla riva opposta all\'ingresso del parco, ha le sistemazioni economiche e i ristoranti galleggianti; dentro il parco c\'è il resort ufficiale, più caro ma con il vantaggio di essere già dalla parte giusta del fiume al mattino.',
    doveMangiare:
      'A Kuala Tahan si mangia nei ristoranti galleggianti ormeggiati sul fiume, che servono cucina malese semplice a prezzi bassi con la corrente che passa sotto i tavoli. Dentro il parco l\'offerta è limitata e cara. Per i trekking lunghi si porta tutto da fuori: acqua compresa, perché lungo i sentieri non c\'è nulla.',
    comeArrivare:
      'Circa 3-4 ore di minibus da Kuala Lumpur fino a Kuala Tembeling o direttamente a Jerantut, poi barca lunga sul fiume Tembeling — la traversata dura circa 2-3 ore ed è la parte più bella del trasferimento. Molti operatori offrono il pacchetto combinato dalla capitale.',
    comeSpostarsi: 'A piedi nel parco e in barca sul fiume: non ci sono strade. Per attraversare da Kuala Tahan all\'ingresso ci sono navette a remi continue per pochi ringgit.',
    periodoMigliore:
      'da febbraio a settembre, la finestra più asciutta. Da novembre a gennaio le piogge sono forti e alcune attività vengono sospese; il livello del fiume condiziona le risalite in barca.',
    costi: 'ingresso al parco pochi ringgit più il permesso per la macchina fotografica; canopy walkway circa 5 ringgit; le escursioni guidate 50-150 ringgit secondo la durata.',
    erroriDaEvitare: [
      'Aspettarsi di vedere tigri, elefanti o tapiri: ci sono, ma gli avvistamenti sono rarissimi e chi arriva con quell\'idea torna deluso. Qui si sente più di quanto si veda',
      'Andare senza calze antisanguisughe nella stagione umida: le sanguisughe terrestri sono numerose e arrivano dal basso',
      'Fare la canopy walkway a metà giornata, quando c\'è coda sulle passerelle e si passa uno alla volta',
      'Sottovalutare la night walk: è il momento in cui la foresta si anima davvero, e quasi tutti la saltano per stanchezza',
    ],
    miaEsperienza:
      'Taman Negara va affrontata con l\'aspettativa giusta, perché è la tappa che delude chi arriva pensando a un documentario. La foresta pluviale è densissima e la visibilità laterale è di pochi metri: si sentono cicale, gibboni lontani, uccelli, ma di grande non si vede quasi niente. Quello che la rende memorabile è un\'altra cosa — la traversata in barca lunga per arrivarci, due ore e mezza controcorrente tra due muri di verde, e la canopy walkway, che è il solo modo di guardare la foresta dall\'alto e capirne la struttura a strati. Va fatta all\'apertura, perché più tardi si passa uno per volta con la coda dietro. La night walk è la parte che quasi tutti saltano ed è quella che vale: con la torcia si vedono ragni, serpenti, occhi che riflettono nel buio, e la foresta di giorno silenziosa diventa rumorosissima. Ultima cosa pratica, non trascurabile: le sanguisughe ci sono e salgono dai piedi, e le calze apposite non sono un eccesso di zelo.',
    esperienzeSlugs: ['canopy-walkway-taman-negara'],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'La passerella sospesa tra le chiome della foresta pluviale di Taman Negara, Malesia',
  },
  {
    slug: 'langkawi',
    paeseSlug: 'malesia',
    ordine: 6,
    nome: 'Langkawi',
    tipologia: ['mare', 'isole', 'natura'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un arcipelago di novantanove isole nel nord dello Stretto di Malacca, a ridosso del confine thailandese: spiagge, mangrovie, un geoparco UNESCO di formazioni calcaree e la funivia più ripida del mondo, che sale su una cresta con un ponte sospeso in curva.',
    percheAndarci:
      'Perché è la migliore isola della costa ovest accessibile senza complicazioni, perché funziona anche nella stagione in cui le Perhentian chiudono, e perché il giro in barca tra le mangrovie mostra un\'altra Malesia rispetto alle spiagge.',
    cosaVedere: [
      'Lo Sky Bridge, il ponte pedonale curvo sospeso a 660 metri, raggiunto dalla funivia di Machinchang',
      'Il geoparco delle mangrovie di Kilim, con le formazioni calcaree e le grotte',
      'Le cascate di Telaga Tujuh, le sette pozze naturali in successione',
      'La spiaggia di Pantai Cenang, la più attrezzata, e quelle più tranquille del nord',
      'L\'isola di Dayang Bunting, con il suo lago d\'acqua dolce a pochi metri dal mare',
    ],
    cosaFare: [
      'Giro in barca nelle mangrovie di Kilim, con le aquile di mare e le grotte calcaree',
      'Funivia e Sky Bridge, meglio al mattino prima che arrivi la foschia',
      'Island hopping verso Dayang Bunting e Beras Basah',
      'Approfittare del duty free: Langkawi è zona franca e l\'alcol costa una frazione che nel resto della Malesia',
    ],
    doveDormire:
      'Pantai Cenang per servizi, ristoranti e vita serale; la costa nord attorno a Datai e Tanjung Rhu per i resort e la tranquillità vera; Kuah per i prezzi bassi e la vicinanza al porto, ma senza spiaggia degna.',
    doveMangiare:
      'L\'isola vive di turismo e i prezzi lo riflettono, ma bastano pochi metri dalla spiaggia per rientrare negli standard malesi: i banchi del mercato notturno, che ruota di paese in paese secondo il giorno della settimana, sono l\'opzione migliore e più economica. Il pesce alla griglia e i curry di pesce sono la cucina naturale del posto. E, essendo zona franca, è l\'unico posto della Malesia dove bere costa poco.',
    comeArrivare:
      'Volo su Langkawi (LGK) da Kuala Lumpur o Penang, oppure traghetto da Kuala Kedah, Penang o Satun in Thailandia — utile per chi combina i due paesi.',
    comeSpostarsi:
      'Auto o scooter a noleggio sono il mezzo giusto: l\'isola è grande, i mezzi pubblici quasi inesistenti e i taxi cari rispetto al resto del paese. Guidare è semplice e le strade sono buone.',
    periodoMigliore:
      'da novembre ad aprile, la stagione secca della costa ovest, con il mare più calmo. Da maggio a ottobre le piogge sono più frequenti e in agosto-settembre può arrivare la foschia da incendi dall\'Indonesia.',
    costi: 'funivia e Sky Bridge attorno agli 85 ringgit, giro nelle mangrovie 250-350 ringgit a barca da dividere, noleggio scooter pochi euro al giorno.',
    erroriDaEvitare: [
      'Aspettarsi acque da cartolina thailandese: il mare di Langkawi è spesso torbido perché siamo alla foce di sistemi fluviali, e chi cerca il turchese resta deluso',
      'Salire alla funivia nel primo pomeriggio, quando la foschia copre la vista e la coda è lunga',
      'Noleggiare lo scooter senza patente internazionale e senza casco: i controlli ci sono',
      'Trattare il giro in mangrovie come una gita in barca: le guide che danno da mangiare alle aquile per attirarle sono una pratica discutibile, e va chiesto in anticipo se l\'operatore la fa',
    ],
    miaEsperienza:
      'Langkawi è l\'isola comoda della Malesia e va presa per quello: si arriva in volo, si noleggia uno scooter, si gira liberamente. Sul mare bisogna abbassare le aspettative — l\'acqua è spesso verdastra e torbida, siamo nello stretto e i fiumi ci scaricano dentro, quindi chi cerca il turchese delle cartoline sta guardando la costa sbagliata della Malesia. Quello che invece rende la sosta, ed è inaspettato, è la parte non balneare: il giro tra le mangrovie di Kilim, con le pareti calcaree che si chiudono sopra la barca, le grotte dei pipistrelli e i granchi sui fanghi, è più interessante di qualsiasi spiaggia dell\'isola. Lo Sky Bridge merita la salita a patto di farla presto: verso mezzogiorno la foschia si mangia tutto e resta la coda. E poi c\'è il dettaglio pratico che nessuno anticipa: Langkawi è porto franco, quindi l\'alcol costa un terzo che nel resto del paese, e si nota subito in che modo cambia l\'atmosfera serale rispetto al resto della Malesia.',
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Il ponte sospeso curvo dello Sky Bridge sopra la foresta di Langkawi, Malesia',
  },
  {
    slug: 'perhentian',
    paeseSlug: 'malesia',
    ordine: 7,
    nome: 'Isole Perhentian',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Due isole sulla costa est, nel Mar Cinese Meridionale: sabbia bianca, acqua turchese vera, tartarughe che si incontrano facendo snorkeling dalla riva e nessuna strada, perché non ci sono veicoli. Chiudono da novembre a febbraio, quando arriva il monsone.',
    percheAndarci:
      'Perché sono la risposta alla domanda su dove sia il mare bello in Malesia — e la risposta è la costa est, non quella ovest — e perché il livello di sviluppo è ancora basso: si dorme in chalet, si mangia sulla spiaggia e la sera l\'elettricità in certi posti va a generatore.',
    cosaVedere: [
      'Perhentian Besar, la più grande, più tranquilla e con le spiagge migliori',
      'Perhentian Kecil, la piccola, con Long Beach e la vita serale',
      'Il reef attorno a Shark Point e Turtle Point, raggiungibili in snorkeling',
      'La laguna di Romantic Beach e le cale accessibili solo via mare',
    ],
    cosaFare: [
      'Snorkeling con le tartarughe, che qui si vedono partendo dalla spiaggia senza barca né guida',
      'Corso o immersioni: le Perhentian sono tra i posti più economici al mondo dove prendere un brevetto',
      'Giro in barca attorno alle due isole con soste nei punti di snorkeling',
      'Camminare il sentiero nella giungla tra le spiagge, che è l\'unico collegamento via terra',
    ],
    doveDormire:
      'Besar per le famiglie e chi cerca calma, Kecil e Long Beach per il ritmo più sociale e i prezzi bassi. Le sistemazioni sono semplici: chalet in legno, aria condizionata non sempre, e in alcune strutture l\'elettricità funziona a fasce orarie.',
    doveMangiare:
      'Si mangia nei ristoranti dei chalet e nei barbecue serali sulla spiaggia, dove il pesce viene esposto sul ghiaccio e grigliato al momento: è la cena tipica e costa poco. L\'offerta è limitata e ripetitiva — nasi goreng, mie goreng, pesce, curry — e va accettato come parte del pacchetto. Da sapere: siamo in uno stato conservatore, l\'alcol è poco disponibile e caro, e alcune strutture non lo servono affatto.',
    comeArrivare:
      'Volo su Kota Bharu o autobus notturno da Kuala Lumpur fino a Kuala Besut, poi speedboat di circa 30-40 minuti. La traversata è veloce ma movimentata: chi soffre il mare lo sente.',
    comeSpostarsi: 'Solo a piedi e in water taxi: sulle isole non ci sono strade né veicoli. I trasferimenti tra spiagge si fanno in barca, per pochi ringgit.',
    periodoMigliore:
      'da marzo a ottobre, con i mesi migliori da aprile a settembre. **Da novembre a febbraio le isole chiudono quasi completamente** per il monsone di nord-est: le strutture serrano, i traghetti si fermano e non è una fase di bassa stagione ma una chiusura vera.',
    costi:
      'chalet semplici da 25-50€ a notte, speedboat andata e ritorno attorno ai 70 ringgit più la tassa di conservazione marina, immersioni tra le più economiche del sud-est asiatico.',
    erroriDaEvitare: [
      'Programmarle tra novembre e febbraio: non sono aperte, e questo è l\'errore che manda a monte interi itinerari',
      'Contare sui pagamenti con carta: sulle isole si funziona quasi solo a contante e i bancomat sono pochissimi e spesso vuoti — si preleva sulla terraferma',
      'Aspettarsi resort e servizi: qui si dorme in chalet e la corrente può andare a orari',
      'Sottovalutare il codice sociale del Terengganu: è uno stato conservatore, e fuori dalle spiagge l\'abbigliamento coperto è la norma attesa',
    ],
    miaEsperienza:
      'Le Perhentian sono la ragione per cui vale la pena riorganizzare un itinerario in Malesia: questa è l\'unica costa dove il mare è davvero quello delle fotografie, turchese e trasparente, e basta entrare in acqua dalla spiaggia per incrociare una tartaruga che bruca sul fondo senza farsi nessun problema. È anche un posto volutamente indietro: chalet di legno, ventilatore invece dell\'aria condizionata, elettricità a fasce, niente bancomat funzionante e cene che dopo tre giorni si ripetono. Chi lo sa in anticipo se lo gode, chi si aspetta un resort no. La cosa da mettere in agenda prima di qualsiasi altra è il calendario: da novembre a febbraio il monsone di nord-est chiude le isole, i traghetti si fermano e le strutture serrano. Non è bassa stagione, è proprio chiuso — ed è l\'errore che fa saltare più itinerari malesi di qualsiasi altro.',
    esperienzeSlugs: [],
    tripSlugs: ['malesia-singapore'],
    imageAlt: 'Acqua turchese e barche sulla spiaggia delle isole Perhentian, costa est della Malesia',
  },
]
