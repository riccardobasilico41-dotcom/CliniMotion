import type { Destinazione } from '@/lib/types'

// Paese visitato di persona, due volte. I campi miaEsperienza sono bozze
// scritte da Claude nella voce del diario, basate su ciò che è oggettivamente
// vero di ogni posto (code, quote, orari, regole d\'accesso, stagione) e non
// su ricordi reali: vanno riletti e sostituiti con i tuoi. Nessun nome di
// hotel, ristorante o operatore è stato inventato.
// Prezzi degli ingressi, orari e regole di prenotazione in Cina cambiano
// spesso e senza preavviso: vanno riverificati sui canali ufficiali.

export const destinazioniCina: Destinazione[] = [
  {
    slug: 'pechino',
    paeseSlug: 'cina',
    ordine: 1,
    nome: 'Pechino',
    tipologia: ['città', 'cultura', 'storia'],
    giorniConsigliati: '4-5 giorni, di cui uno intero dedicato alla Muraglia',
    visitataPersonalmente: true,
    introduzione:
      'La capitale politica e simbolica del paese: due palazzi imperiali, il tempio dove l\'imperatore pregava per il raccolto, gli ultimi hutong sopravvissuti alle ruspe e, a un\'ora e mezza di strada, il tratto di Grande Muraglia che si vede in tutte le fotografie.',
    percheAndarci:
      'Perché è l\'unico posto dove la Cina imperiale, quella maoista e quella di oggi si toccano nello spazio di pochi chilometri: si esce dalla Città Proibita, si attraversa Tiananmen e ci si trova davanti al mausoleo di Mao, con lo skyline finanziario sullo sfondo.',
    cosaVedere: [
      'La Città Proibita, il complesso di palazzi in legno più grande del mondo, con quasi mille edifici',
      'Piazza Tiananmen e, dall\'altro lato, la collina di Jingshan, da cui si vede il tetto dorato della Città Proibita dall\'alto',
      'Il Tempio del Cielo, con la sala circolare a tre tetti blu e il parco dove ogni mattina centinaia di pensionati ballano, cantano e giocano a carte',
      'Il Palazzo d\'Estate, con il lago Kunming e il lungo corridoio dipinto',
      'Gli hutong attorno alla Torre del Tamburo e al lago Houhai, il tessuto di vicoli e cortili della città vecchia',
      'La Grande Muraglia: Mutianyu, Jinshanling o Simatai a seconda di quanto si è disposti a camminare',
    ],
    cosaFare: [
      'Camminare un tratto di Muraglia non restaurato — vedi la scheda esperienza dedicata',
      'Visitare la Città Proibita all\'apertura, con la prenotazione fatta giorni prima',
      'Anatra laccata in un ristorante specializzato: a Pechino è un piatto da ordinare intero, tagliato al tavolo',
      'Giro in bicicletta o in risciò tra gli hutong al tramonto',
      'Salire a Jingshan nell\'ultima ora di luce, la vista migliore sulla città vecchia',
    ],
    doveDormire:
      'Le zone di Dongcheng attorno a Wangfujing e agli hutong del lago Houhai sono le più comode per muoversi a piedi e in metropolitana; Sanlitun è la scelta per chi vuole la parte moderna, ristoranti e vita serale. Conviene scegliere in base alla linea di metro più che al quartiere: la città è enorme e in superficie il traffico è pesante.',
    doveMangiare:
      'L\'anatra laccata è la ragione gastronomica per stare a Pechino, e va mangiata in un locale che la faccia come mestiere, non come voce del menu. Il resto della città si mangia per strada e nei ristoranti di quartiere: jianbing (la crêpe salata del mattino) ai carretti, jiaozi e baozi al vapore, noodles tirati a mano dello Shanxi, e lo spiedino di agnello al cumino che è l\'eredità musulmana del nord. Il dettaglio pratico che cambia tutto: la maggior parte dei locali ha il menu solo in cinese, e il traduttore con fotocamera trasforma un problema in un gioco.',
    comeArrivare:
      'Volo internazionale su Pechino Capital (PEK) o sul più nuovo Daxing (PKX), che è però lontanissimo dal centro: verificare quale dei due prima di prenotare il transfer. Entrambi sono collegati in metropolitana e con treni espresso.',
    comeSpostarsi:
      'Metropolitana, capillare, economica e con cartelli anche in caratteri latini: è di gran lunga il modo migliore. I taxi si prendono solo con l\'app (DiDi, disponibile in inglese e collegabile a una carta estera) perché fermarne uno per strada senza parlare cinese è complicato. Le distanze in centro ingannano: quello che sulla mappa sembra un isolato spesso è un chilometro.',
    periodoMigliore:
      'settembre-ottobre è la stagione migliore in assoluto, con cieli limpidi e temperature miti; aprile-maggio la seconda scelta. L\'estate è afosa e affollatissima di turismo interno, l\'inverno secco e gelido ma con la Muraglia innevata e nessuno in giro.',
    costi:
      'Città Proibita attorno ai 60 yuan in alta stagione (meno in inverno), Tempio del Cielo e Palazzo d\'Estate sui 30-60 yuan con il biglietto combinato, ingresso alla Muraglia 40-45 yuan più funivia dove c\'è. La metropolitana costa pochi yuan a corsa.',
    erroriDaEvitare: [
      'Presentarsi alla Città Proibita senza prenotazione: l\'ingresso è a numero chiuso, nominale e legato al passaporto, e i biglietti si esauriscono con giorni di anticipo — la biglietteria fisica non esiste più',
      'Scegliere Badaling perché è il tratto di Muraglia più vicino: è anche il più restaurato e il più affollato del paese',
      'Seguire chi ferma per strada proponendo una cerimonia del tè o una mostra d\'arte: è la truffa storica di Pechino e funziona ancora',
      'Sottovalutare le distanze e programmare Città Proibita, Tempio del Cielo e Palazzo d\'Estate nello stesso giorno',
    ],
    confronti: [
      {
        titolo: 'Quale tratto di Grande Muraglia scegliere da Pechino',
        introduzione:
          'È la decisione che fa la differenza tra una gita in coda e la giornata migliore del viaggio. I tratti raggiungibili in giornata dalla capitale sono quattro e non si somigliano: cambiano il tempo di viaggio, la fatica, e soprattutto quanta gente si trova sul camminamento.',
        opzioni: [
          {
            nome: 'Badaling',
            sintesi: 'Il tratto più vicino e più famoso, interamente restaurato, con treno diretto dalla stazione di Pechino Nord.',
            costo: 'ingresso circa 40 yuan, treno ad alta velocità pochi yuan',
            durata: 'mezza giornata',
            pro: ['Il più facile da raggiungere, anche in autonomia e senza tour', 'Camminamento largo e sicuro, adatto a chiunque', 'Funivia e slittovia per evitare la salita'],
            contro: ['È il tratto più affollato della Cina: nei giorni di festa si procede in fila indiana', 'Restaurato al punto da sembrare una ricostruzione moderna', 'Zero senso di isolamento'],
            perChi: 'Chi ha poche ore, viaggia con bambini piccoli o persone con mobilità ridotta.',
          },
          {
            nome: 'Mutianyu',
            sintesi: 'Il compromesso più equilibrato: restaurato ma immerso nel verde, con seggiovia per salire e slittino su rotaia per scendere.',
            costo: 'ingresso circa 45 yuan più 100-140 yuan per funivia e slittino',
            durata: 'giornata intera con il trasferimento',
            pro: ['Molto meno affollato di Badaling', 'Paesaggio di boschi che in autunno diventa spettacolare', 'La discesa in slittino è una delle cose più divertenti del viaggio'],
            contro: ['Serve un\'auto o un transfer organizzato, i mezzi pubblici sono scomodi', 'Resta comunque un tratto ricostruito', 'I costi extra delle risalite raddoppiano il prezzo dell\'ingresso'],
            perChi: 'Chi vuole la Muraglia bella e comoda in un giorno solo, senza trattarla come un\'escursione impegnativa.',
          },
          {
            nome: 'Jinshanling',
            sintesi: 'Due ore e mezza da Pechino, torri non restaurate, erba tra le pietre e lunghi tratti senza nessuno in vista.',
            costo: 'ingresso circa 65 yuan, funivia a parte',
            durata: 'giornata intera, con 3-4 ore di cammino',
            pro: ['È la Muraglia che si immagina prima di partire: rovinata, verticale, deserta', 'Il tratto fotograficamente più bello nei pressi di Pechino', 'Si cammina per ore incrociando pochissime persone'],
            contro: ['Trasferimento lungo, da organizzare', 'Impegnativo: saliscendi continui su gradini di altezza irregolare, senza ombra', 'Servizi quasi assenti lungo il percorso'],
            perChi: 'Chi ha una giornata intera e gambe allenate, e viene in Cina anche per questo.',
          },
          {
            nome: 'Gubei Water Town e Simatai',
            sintesi: 'Un borgo d\'acqua ricostruito ai piedi della Muraglia, con l\'unico tratto visitabile di notte, illuminato.',
            costo: 'ingresso al borgo più biglietto per la Muraglia, indicativamente 150-200 yuan complessivi',
            durata: 'una notte sul posto',
            pro: ['La Muraglia illuminata dopo il tramonto non si vede da nessun\'altra parte', 'Si dorme ai piedi del sito, evitando la corsa del rientro serale', 'Bello anche solo come borgo, con i canali'],
            contro: ['Il borgo è una ricostruzione recente e si vede: è un prodotto turistico, non un paese storico', 'Il più caro dei quattro', 'Va prenotato in anticipo, ingresso serale contingentato'],
            perChi: 'Chi ha una notte da spendere fuori città e vuole la Muraglia in una versione che nessun altro tour mostra.',
          },
        ],
        raccomandazione:
          'Con una giornata sola e gambe in ordine, Jinshanling: è quello che resta. Con mezza giornata o compagnia mista, Mutianyu senza esitare. Badaling solo se non ci sono alternative — e mai in un giorno di festa nazionale.',
      },
    ],
    miaEsperienza:
      'Pechino è la città che chiede più preparazione di tutto il viaggio e ripaga subito chi l\'ha fatta. La Città Proibita è enorme oltre ogni aspettativa e questo è insieme il suo pregio e il suo limite: si attraversa cortile dopo cortile in una direzione sola, insieme a migliaia di persone, e dopo la terza sala del trono ci si accorge di guardare senza vedere. Il trucco è uscire dalla via centrale e infilarsi nei palazzi laterali a est, dove non va quasi nessuno e le sale sono piccole e abitabili. La cosa che invece non delude mai è il Tempio del Cielo al mattino presto, e non per il tempio: nel parco attorno centinaia di pensionati ballano, cantano in coro, giocano a carte e fanno esercizi con la spada, ed è la scena più bella e meno turistica della città. Sugli hutong bisogna essere onesti: quelli attorno a Houhai sono ormai bar e negozi, la vita vera è nei vicoli due isolati più in là.',
    esperienzeSlugs: ['muraglia-jinshanling', 'citta-proibita'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'La Grande Muraglia Cinese che si snoda sui crinali a Jinshanling, a nord di Pechino',
  },
  {
    slug: 'xian',
    paeseSlug: 'cina',
    ordine: 2,
    nome: 'Xi\'an',
    tipologia: ['cultura', 'storia', 'città'],
    giorniConsigliati: '2 giorni pieni, arrivando la sera prima',
    visitataPersonalmente: true,
    introduzione:
      'Il capolinea orientale della Via della Seta e capitale di tredici dinastie. Oggi è una città di nove milioni di abitanti con una cinta muraria Ming interamente conservata, un quartiere musulmano che profuma di cumino e, a un\'ora dal centro, l\'esercito di terracotta.',
    percheAndarci:
      'Per l\'Esercito di Terracotta, che da solo giustifica la deviazione, ma anche perché è la città dove si capisce che la Cina non è solo Han: il quartiere Hui, musulmano da più di mille anni, con la sua moschea costruita come un tempio cinese, è una cosa che altrove non si vede.',
    cosaVedere: [
      'L\'Esercito di Terracotta, con le tre fosse e il museo dei carri in bronzo',
      'Le mura Ming, quattordici chilometri di cinta percorribili in bicicletta sopra il camminamento',
      'Il Quartiere Musulmano e la Grande Moschea, nascosta in fondo a un vicolo di bancarelle',
      'La Grande Pagoda dell\'Oca Selvatica, con la piazza delle fontane musicali',
      'La Torre della Campana e la Torre del Tamburo, nel punto esatto in cui si incrociano gli assi della città',
      'Il Museo di Storia dello Shaanxi, uno dei più importanti del paese',
    ],
    cosaFare: [
      'Visita all\'Esercito di Terracotta con biglietto prenotato — vedi la scheda esperienza dedicata',
      'Giro completo delle mura in bicicletta, circa un\'ora e mezza di pedalata',
      'Cena a tappe tra le bancarelle del Quartiere Musulmano',
      'Assaggiare il roujiamo, il panino di maiale stufato che qui rivendicano come il primo hamburger della storia',
    ],
    doveDormire:
      'Dentro le mura, nel quadrante attorno alla Torre della Campana: si gira tutto a piedi, il Quartiere Musulmano è a dieci minuti e i bus per l\'Esercito di Terracotta partono dalla stazione ferroviaria, raggiungibile in metropolitana.',
    doveMangiare:
      'Xi\'an è una delle città dove si mangia meglio in Cina e il merito è quasi tutto della cucina Hui. Nel Quartiere Musulmano si cena camminando: spiedini di agnello al cumino cotti sulla brace, il roujiamo, i biang biang noodles (una singola tagliatella larga come una cintura), il liangpi freddo e piccante, e lo yangrou paomo, la zuppa di agnello in cui si sbriciola il pane con le mani prima di consegnarlo in cucina. Il consiglio è mangiare poco a ogni banco e andare avanti invece di sedersi in un ristorante.',
    comeArrivare:
      'Treno ad alta velocità da Pechino in circa 4h30 e da Shanghai in 6 ore, ed è il modo giusto di arrivarci. In alternativa volo su Xi\'an Xianyang (XIY). La stazione Xi\'an Nord è fuori città ma collegata in metropolitana.',
    comeSpostarsi:
      'Metropolitana per gli spostamenti lunghi e centro storico a piedi. Per l\'Esercito di Terracotta, il bus pubblico 5 (306) dalla stazione ferroviaria è economico e diretto; i "bus turistici" che intercettano i passeggeri nel piazzale della stazione portano invece a siti minori spacciati per il museo, ed è una fregatura comune.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre; l\'estate a Xi\'an è torrida e le fosse non sono climatizzate',
    costi:
      'Esercito di Terracotta attorno ai 120 yuan in alta stagione, con prenotazione obbligatoria online; mura cittadine 54 yuan più il noleggio della bicicletta; Museo di Storia dello Shaanxi gratuito ma a prenotazione contingentata, che si esaurisce in pochi minuti.',
    erroriDaEvitare: [
      'Arrivare al museo dell\'Esercito di Terracotta senza prenotazione: le biglietterie fisiche sono state chiuse, si entra solo con prenotazione nominale legata al passaporto e la finestra di vendita apre appena 7 giorni prima',
      'Salire sui bus non ufficiali davanti alla stazione: portano a mausolei minori facendoli passare per il sito principale',
      'Visitare le fosse partendo dalla numero uno: è la più spettacolare e dopo di lei le altre due sembrano poca cosa — molte guide consigliano l\'ordine inverso',
      'Dare per scontato il Museo di Storia dello Shaanxi: è gratuito ma i posti giornalieri si esauriscono nel giro di minuti dall\'apertura delle prenotazioni',
    ],
    confronti: [
      {
        titolo: 'Treno ad alta velocità o volo interno?',
        introduzione:
          'Sull\'asse classico Pechino-Xi\'an-Shanghai la domanda si ripete a ogni tratta, e la risposta non è sempre la stessa. Conta la durata porta a porta, non quella del mezzo: le stazioni ad alta velocità sono in città o quasi, gli aeroporti no.',
        opzioni: [
          {
            nome: 'Treno ad alta velocità (fino a 5-6 ore)',
            sintesi: 'Il mezzo giusto per Pechino-Xi\'an, Xi\'an-Shanghai, Shanghai-Suzhou e in generale per tutto l\'est del paese.',
            costo: 'indicativamente 40-90€ in seconda classe secondo la distanza',
            durata: 'Pechino-Xi\'an 4h30, Pechino-Shanghai 4h30, Shanghai-Suzhou 25 minuti',
            pro: ['Stazioni in città: si risparmia più tempo di quello che sembra', 'Puntualità assoluta e partenze ogni mezz\'ora sulle tratte forti', 'Bagaglio con sé, niente stiva né limiti di peso', 'Si vede il paese scorrere, che non è un dettaglio da poco'],
            contro: ['Biglietti in vendita solo 15 giorni prima, alle 8 ora di Pechino, e sulle tratte forti si esauriscono in poche ore', 'Serve un account 12306 verificato col passaporto, da preparare prima di partire', 'In stazione servono 30-40 minuti di margine per i controlli, e i gate chiudono prima della partenza'],
            perChi: 'Chiunque si muova nell\'est e nel centro del paese: su queste distanze il treno vince quasi sempre.',
          },
          {
            nome: 'Volo interno',
            sintesi: 'L\'opzione sensata sulle tratte che in treno superano le otto ore: Shanghai-Lijiang, Pechino-Chengdu, Guilin-Zhangjiajie.',
            costo: 'spesso 60-120€ prenotando con qualche settimana di anticipo',
            durata: '2-3 ore di volo, più i trasferimenti da e per gli aeroporti',
            pro: ['Su distanze enormi fa risparmiare un\'intera giornata di viaggio', 'Rete interna capillare, anche verso città medie', 'Prezzi bassi rispetto agli standard europei'],
            contro: ['I ritardi sui voli interni cinesi sono frequenti e talvolta lunghissimi', 'Aeroporti lontani dal centro su entrambi i lati', 'Controlli di sicurezza più lenti che in Europa'],
            perChi: 'Chi attraversa il paese da est a ovest, o deve raggiungere Yunnan, Sichuan e Hunan da lontano.',
          },
        ],
        raccomandazione:
          'La regola pratica: sotto le sei ore il treno batte l\'aereo porta a porta, sopra le otto vince il volo. E qualunque sia la scelta, la prenotazione si fa prima di partire dall\'Italia — non in loco.',
      },
    ],
    miaEsperienza:
      'L\'Esercito di Terracotta è uno di quei posti in cui la fotografia ha già mostrato tutto e il sopralluogo aggiunge una cosa sola, ma decisiva: la scala. Dal parapetto della fossa numero uno si guarda una navata lunga duecento metri piena di file di soldati, e solo allora si capisce che erano fatti per essere sepolti, non guardati. La sorpresa vera però è altrove — nessuna delle statue ha la stessa faccia, e avvicinandosi alle prime file si vedono volti, acconciature e baffi tutti diversi. Va anche detto che l\'esperienza è molto gestita: passerelle obbligate, folla continua, e le fosse due e tre che dopo la prima sembrano cantieri. Il resto di Xi\'an compensa: pedalare sulle mura al tramonto, con la città moderna da un lato e i tetti vecchi dall\'altro, è la cosa che è rimasta più impressa, e il Quartiere Musulmano la sera è il posto dove si mangia meglio in tutta la Cina classica.',
    esperienzeSlugs: ['esercito-terracotta', 'mura-xian-bicicletta'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Le file di guerrieri di terracotta nella fossa numero uno del mausoleo di Qin Shi Huang, Xi\'an',
  },
  {
    slug: 'shanghai',
    paeseSlug: 'cina',
    ordine: 3,
    nome: 'Shanghai, Suzhou e i villaggi d\'acqua',
    tipologia: ['città', 'cultura', 'architettura'],
    giorniConsigliati: '4-5 giorni, di cui uno a Suzhou e mezza giornata in un villaggio d\'acqua',
    visitataPersonalmente: true,
    introduzione:
      'La città più occidentale della Cina e insieme la più spettacolare: da una parte il Bund, il lungofiume delle banche coloniali degli anni Venti, dall\'altra i grattacieli di Pudong, cresciuti su quello che trent\'anni fa era campagna. Intorno, a mezz\'ora di treno, i giardini classici di Suzhou e i villaggi costruiti sui canali.',
    percheAndarci:
      'Perché è il posto dove la Cina si mostra come vuole essere vista, e perché nel raggio di un\'ora di treno c\'è il suo esatto contrario: Suzhou e i borghi d\'acqua sono la Cina dei letterati, dei giardini e dei ponti a schiena d\'asino.',
    cosaVedere: [
      'Il Bund al tramonto e poi di nuovo di notte, quando Pudong si accende dall\'altra parte del fiume',
      'Il quartiere delle ex Concessioni Francesi, con i platani e le case in mattoni',
      'Il Giardino Yuyuan e il bazar attorno, nella città vecchia',
      'La Shanghai Tower, secondo grattacielo più alto del mondo, con l\'ascensore più veloce del pianeta',
      'I giardini classici di Suzhou: l\'Umile Amministratore, il Giardino del Maestro delle Reti, il Padiglione delle Onde Blu',
      'Un villaggio d\'acqua: Zhujiajiao, Wuzhen, Tongli o Nanxun, tutti raggiungibili in giornata',
    ],
    cosaFare: [
      'Passeggiata sul Bund all\'ora blu, quando si accendono le insegne al neon di Pudong',
      'Giornata a Suzhou in treno ad alta velocità, 25 minuti di viaggio — vedi la scheda esperienza dedicata',
      'Giro in barca a remi nei canali di un villaggio d\'acqua',
      'Serata nei locali dell\'ex Concessione Francese, il quartiere più piacevole della città',
      'Salita a un rooftop di Pudong al tramonto, l\'unico modo per capire le dimensioni della città',
    ],
    doveDormire:
      'La ex Concessione Francese è la zona più piacevole in cui dormire, verde e a misura di passeggiata; il Bund e Nanjing Road sono più centrali ma caotici; Pudong conviene solo per comodità di trasferimento. Shanghai è cara rispetto al resto del paese, ma la metropolitana permette di dormire lontano dal centro senza penalizzarsi.',
    doveMangiare:
      'Il piatto identitario sono gli xiaolongbao, i ravioli al vapore ripieni di brodo, che si mangiano con una tecnica precisa: si morde un angolo, si beve il brodo, poi si mangia il resto — farlo di slancio significa ustionarsi. Da provare anche gli shengjianbao, la versione scottata sulla piastra, e i noodles in brodo del mattino. Shanghai ha inoltre la scena internazionale più sviluppata della Cina, il che la rende il posto giusto per una pausa dalla cucina cinese se dopo due settimane serve. Nei villaggi d\'acqua si mangia pesce di fiume e il maiale brasato, che a Wuzhen e Tongli è la specialità.',
    comeArrivare:
      'Volo internazionale su Pudong (PVG), collegato al centro dal Maglev, il treno a levitazione magnetica che tocca i 300 km/h in otto minuti. Da Pechino e Xi\'an, treno ad alta velocità.',
    comeSpostarsi:
      'La metropolitana di Shanghai è una delle più estese al mondo e copre tutto, compresi gli aeroporti e la partenza per Zhujiajiao. Per Suzhou e i villaggi d\'acqua più lontani, alta velocità o bus dalle stazioni degli autobus. DiDi per i taxi.',
    periodoMigliore:
      'ottobre-novembre è il periodo migliore, con marzo-aprile subito dietro. L\'estate è umida e opprimente, con i tifoni tra luglio e settembre; l\'inverno è freddo e umido, senza riscaldamento adeguato in molti edifici.',
    costi:
      'Giardini di Suzhou 30-80 yuan ciascuno secondo la stagione; villaggi d\'acqua 50-120 yuan di ingresso al borgo, spesso con biglietto combinato per le case-museo; Shanghai Tower circa 180 yuan. La città in sé è la più cara della Cina continentale.',
    erroriDaEvitare: [
      'Fermarsi a Shanghai senza uscire dalla città: Suzhou dista 25 minuti di treno ed è un\'altra epoca',
      'Visitare i giardini di Suzhou nel fine settimana o in un giorno di festa: sono piccoli e la folla ne annulla completamente il senso',
      'Scegliere il villaggio d\'acqua più comodo senza sapere che sono molto diversi tra loro (vedi il confronto qui sotto)',
      'Cadere nella truffa del tè sulla Nanjing Road: qui è ancora più diffusa che a Pechino',
    ],
    confronti: [
      {
        titolo: 'Quale villaggio d\'acqua scegliere',
        introduzione:
          'Attorno a Shanghai e Suzhou ce ne sono almeno sei, tutti venduti come "la Venezia d\'Oriente" e tutti diversi per distanza, prezzo e livello di ricostruzione. La differenza vera è una: quanto si è disposti a viaggiare per trovarne uno ancora abitato.',
        opzioni: [
          {
            nome: 'Zhujiajiao',
            sintesi: 'Il più vicino: si raggiunge in metropolitana da Shanghai in circa un\'ora.',
            costo: 'ingresso libero al borgo, biglietti combinati per le case-museo attorno ai 60-80 yuan',
            durata: 'mezza giornata',
            pro: ['Comodissimo, senza bisogno di organizzare nulla', 'Si può fare in un pomeriggio senza perdere una giornata', 'Il ponte Fangsheng e i canali principali sono davvero belli'],
            contro: ['Molto turistico e molto affollato, soprattutto nel fine settimana', 'Via principale ormai tutta negozi di souvenir', 'Poca vita locale rimasta'],
            perChi: 'Chi ha poco tempo e vuole comunque vedere un borgo sull\'acqua.',
          },
          {
            nome: 'Tongli',
            sintesi: 'A pochi chilometri da Suzhou, con canali, ponti e il Giardino del Ritiro e della Riflessione, patrimonio UNESCO.',
            costo: 'ingresso al borgo attorno ai 100 yuan, giardino incluso',
            durata: 'mezza giornata o una giornata combinata con Suzhou',
            pro: ['Meno turistico di Zhujiajiao e più grande', 'Il giardino UNESCO è di livello pari a quelli di Suzhou', 'Si combina bene con una giornata a Suzhou'],
            contro: ['Serve un trasferimento in bus o taxi da Suzhou', 'Il centro resta comunque molto commerciale', 'Biglietto d\'ingresso obbligatorio'],
            perChi: 'Chi è già a Suzhou e vuole aggiungere il borgo senza tornare a Shanghai.',
          },
          {
            nome: 'Wuzhen',
            sintesi: 'Il più curato e il più ricostruito: due settori separati, di cui quello orientale visitabile in giornata e quello occidentale pensato per la notte, con illuminazione scenografica.',
            costo: 'ingresso 110-150 yuan per settore, combinato più caro',
            durata: 'una notte sul posto per vedere il settore ovest illuminato',
            pro: ['La sezione ovest di notte, con i riflessi sui canali, è la più fotogenica di tutte', 'Gestito benissimo, con servizi ordinati', 'Si dorme dentro il borgo'],
            contro: ['È un borgo-museo: i residenti sono stati trasferiti, quello che si vede è una scenografia perfetta', 'Il più caro del gruppo', 'Due ore da Shanghai'],
            perChi: 'Chi mette l\'estetica davanti all\'autenticità e ha una notte da dedicargli.',
          },
          {
            nome: 'Nanxun',
            sintesi: 'Il meno battuto dei quattro, con le ville dei mercanti della seta e un tessuto ancora in parte abitato.',
            costo: 'ingresso attorno ai 100 yuan',
            durata: 'una giornata, con trasferimento più lungo',
            pro: ['Ancora abitato: si vedono panni stesi, bici, gente che cucina sull\'uscio', 'Le residenze dei mercanti della seta, con mobili e decorazioni originali, non hanno pari negli altri borghi', 'Molto meno affollato'],
            contro: ['Il più scomodo da raggiungere', 'Servizi turistici minimi', 'Meno "da cartolina" degli altri'],
            perChi: 'Chi ha già visto un borgo d\'acqua e vuole quello vero.',
          },
        ],
        raccomandazione:
          'Con mezza giornata, Zhujiajiao e nessun rimpianto. Con una notte libera, Wuzhen ovest dopo il tramonto è la cosa più bella. Chi cerca un posto ancora vivo prenda Nanxun e accetti il viaggio più lungo.',
      },
    ],
    miaEsperienza:
      'Shanghai funziona meglio di come viene raccontata, e il motivo non è lo skyline: è che si cammina. Nell\'ex Concessione Francese, tra i platani e le case basse in mattoni, ci si dimentica di essere nella città più popolosa del paese, e quella è la Shanghai che vale. Il Bund di notte è spettacolare e va visto, con l\'avvertenza che lo pensano tutti: sul camminamento la sera si sta spalla a spalla. Il salto vero però è Suzhou. Venticinque minuti di treno e si passa da una città verticale a giardini costruiti nel Cinquecento su una regola precisa, che nessuna finestra debba inquadrare la stessa cosa due volte: sembra un dettaglio da guida e invece camminandoci dentro si capisce subito. Il consiglio che vale più di tutti è di andarci in un giorno feriale, perché quei giardini sono piccoli e con la folla perdono esattamente ciò per cui esistono.',
    esperienzeSlugs: ['giardini-suzhou', 'bund-pudong'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Lo skyline di Pudong visto dal Bund di Shanghai illuminato di notte',
  },
  {
    slug: 'zhangjiajie',
    paeseSlug: 'cina',
    ordine: 4,
    nome: 'Zhangjiajie',
    tipologia: ['natura', 'trekking', 'panorami'],
    giorniConsigliati: '3-4 giorni: due nel parco nazionale, uno a Tianmen Shan',
    visitataPersonalmente: true,
    introduzione:
      'Le montagne dell\'Hunan: tremila pilastri di quarzite alti fino a trecento metri che spuntano da un mare di nebbia, e che hanno ispirato le montagne fluttuanti di Avatar. Il parco nazionale è enorme e va affrontato con un piano, perché senza si finisce a fare quattro ore di code alle funivie.',
    percheAndarci:
      'Perché non esiste un paesaggio simile da nessun\'altra parte, e perché è la dimostrazione che la Cina più spettacolare non è quella dei monumenti imperiali ma quella dei parchi che quasi nessun viaggiatore straniero mette in itinerario.',
    cosaVedere: [
      'Yuanjiajie, con il Pilastro dell\'Alleluia — la colonna che ha ispirato Avatar — e il Ponte del Primo Ponte sotto il Cielo',
      'L\'ascensore di Bailong, 326 metri di corsa verticale attaccati alla parete di roccia, il più alto ascensore panoramico esterno del mondo',
      'Tianzi Shan, il punto panoramico più ampio sull\'intero massiccio',
      'Il sentiero lungo il ruscello del Ditastro d\'Oro, l\'unico modo di vedere i pilastri dal basso invece che dall\'alto',
      'Tianmen Shan, la montagna della "porta del cielo", con la scalinata dei 999 gradini e la funivia più lunga del mondo',
      'Il sentiero con il fondo di vetro sospeso sulla parete di Tianmen',
    ],
    cosaFare: [
      'Salire a Yuanjiajie con l\'ascensore di Bailong e scendere a piedi — vedi la scheda esperienza dedicata',
      'Giornata completa a Tianmen Shan, con funivia, strada dei 99 tornanti e scalinata finale',
      'Camminare il sentiero del Ditastro d\'Oro in fondo alla valle, dove non arrivano i pullman',
      'Grande Canyon di Zhangjiajie con il ponte di vetro, il più lungo e alto del mondo nella sua categoria',
    ],
    doveDormire:
      'Due scelte con logiche opposte. Il villaggio di Wulingyuan, appena fuori dall\'ingresso principale del parco, è la base giusta per due giorni dentro il parco: si entra all\'apertura evitando le code peggiori. La città di Zhangjiajie serve invece per Tianmen Shan, la cui funivia parte dal centro città. Fare tutto da una sola base significa perdere ore in trasferimenti.',
    doveMangiare:
      'La cucina dell\'Hunan è tra le più piccanti della Cina, più della sichuanese anche se in modo diverso: non intorpidisce la bocca, brucia e basta. I piatti da provare sono il maiale saltato al peperoncino, i pesci di fiume in umido con i peperoni fermentati e il tofu puzzolente fritto, che è una specialità locale nonostante il nome dissuada. Dentro il parco si mangia male e caro, quindi conviene fare scorta di acqua e qualcosa da mangiare prima di entrare.',
    comeArrivare:
      'Volo su Zhangjiajie Hehua (DYG), oppure treno ad alta velocità dalla linea Chongqing-Changsha fino a Zhangjiajie Ovest. Dalla stazione o dall\'aeroporto, bus o taxi fino a Wulingyuan in circa 40 minuti.',
    comeSpostarsi:
      'Dentro il parco ci si muove solo con le navette ecologiche, incluse nel biglietto, che collegano gli ingressi ai punti di partenza di funivie e sentieri. Il sistema è efficiente ma le distanze interne sono enormi: la mappa va studiata prima, non all\'ingresso.',
    periodoMigliore:
      'aprile-maggio e settembre-ottobre. Sulla nebbia conviene ribaltare il ragionamento: è ciò che fa sembrare i pilastri sospesi nel vuoto, quindi una giornata di foschia non è una giornata persa — quella persa è quella di pioggia battente, quando le funivie chiudono.',
    costi:
      'Ingresso al parco nazionale attorno ai 239 yuan, valido quattro giorni e comprensivo delle navette interne; ascensore di Bailong e funivie si pagano a parte, indicativamente 70-100 yuan a corsa; Tianmen Shan è un biglietto separato, sui 250-280 yuan con funivia inclusa. Il totale sale in fretta oltre i 60-70€ a persona.',
    erroriDaEvitare: [
      'Programmare un giorno solo: il parco è enorme e le code a funivie e ascensore possono valere più di un\'ora per tratta',
      'Andarci durante le settimane di festa nazionale (1-7 ottobre, inizio maggio): i tempi di attesa diventano di tre o quattro ore',
      'Dormire in città pensando di fare il parco in giornata: si perdono due ore di trasferimento al giorno',
      'Non comprare il biglietto della funivia di Tianmen in anticipo, con la fascia oraria: si rischia di restare fuori nei giorni pieni',
    ],
    confronti: [
      {
        titolo: 'Parco nazionale o Tianmen Shan: quale scegliere se si ha un giorno solo',
        introduzione:
          'Zhangjiajie è in realtà due destinazioni diverse a un\'ora di distanza, con biglietti separati e paesaggi che non si somigliano. Chi ha poco tempo deve scegliere, e la scelta sbagliata è quella fatta senza saperlo.',
        opzioni: [
          {
            nome: 'Zhangjiajie National Forest Park (Wulingyuan)',
            sintesi: 'I pilastri di quarzite, Yuanjiajie, l\'ascensore di Bailong: le montagne di Avatar.',
            costo: 'circa 239 yuan per quattro giorni, più funivie e ascensore',
            durata: 'minimo due giorni per farlo bene',
            pro: ['È il paesaggio per cui si viene fin qui, e non ha eguali', 'Il biglietto vale quattro giorni: si entra e si esce senza ricomprare', 'Molti sentieri, anche in fondovalle, dove la folla si dirada'],
            contro: ['Enorme: senza un piano si passano ore in navetta e in coda', 'Code lunghissime ad ascensore e funivie nei periodi di punta', 'Va abbinato a un alloggio a Wulingyuan, non in città'],
            perChi: 'Chiunque venga a Zhangjiajie per la prima volta: se si sceglie uno solo, è questo.',
          },
          {
            nome: 'Tianmen Shan',
            sintesi: 'La montagna sopra la città, con la grotta naturale in cima, i 999 gradini, la strada dei 99 tornanti e i sentieri con il fondo di vetro.',
            costo: 'circa 250-280 yuan, funivia inclusa',
            durata: 'una giornata',
            pro: ['La funivia parte dal centro città: zero trasferimenti', 'La combinazione grotta, scalinata e passerelle di vetro è unica', 'Si fa comodamente in un giorno'],
            contro: ['Paesaggio meno straordinario del parco nazionale', 'Fasce orarie contingentate da prenotare in anticipo', 'Le passerelle di vetro sono un problema serio per chi soffre di vertigini'],
            perChi: 'Chi ha un giorno solo e parte dalla città, o chi ha già fatto il parco e vuole qualcosa di diverso.',
          },
        ],
        raccomandazione:
          'Con tre giorni si fanno entrambi: due dentro il parco dormendo a Wulingyuan, uno a Tianmen Shan partendo dalla città, magari il giorno dell\'arrivo o della partenza. Con un giorno solo, il parco nazionale senza discussione.',
      },
    ],
    miaEsperienza:
      'Zhangjiajie è il posto che più di ogni altro in Cina va organizzato invece che improvvisato, e il motivo è banale: è enorme e ci vanno tutti. Le code all\'ascensore di Bailong nel pieno della giornata sono la cosa peggiore del viaggio, e l\'unico modo di evitarle è essere all\'ingresso all\'apertura e salire subito, lasciando i punti panoramici famosi per il tardo pomeriggio quando i gruppi se ne sono andati. Detto questo, il paesaggio regge qualsiasi aspettativa. La cosa che colpisce non è il singolo pilastro ma il fatto che siano migliaia, uno dietro l\'altro fino all\'orizzonte, e che entrino ed escano dalla nebbia mentre li si guarda. Chi ci viene sperando in una giornata limpida sta sperando nella cosa sbagliata: con il cielo terso sembrano delle montagne normali, con la foschia sembrano sospese. E il consiglio meno ovvio è di scendere in fondovalle almeno mezza giornata, lungo il ruscello del Ditastro d\'Oro: guardare quei pilastri dal basso, con il collo all\'insù, è più impressionante che vederli dall\'alto.',
    esperienzeSlugs: ['avatar-yuanjiajie', 'tianmen-shan'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'I pilastri di quarzite di Zhangjiajie che emergono dalla nebbia nel parco nazionale dello Hunan',
  },
  {
    slug: 'furong-zhen',
    paeseSlug: 'cina',
    ordine: 5,
    nome: 'Furong Zhen',
    tipologia: ['borghi', 'cultura', 'natura'],
    giorniConsigliati: '1 notte, come tappa tra Zhangjiajie e Fenghuang o Chongqing',
    visitataPersonalmente: true,
    introduzione:
      'Il borgo costruito sopra una cascata: un villaggio Tujia di case di legno su palafitte appoggiato alla roccia, con un salto d\'acqua che gli passa sotto e attraverso. Si chiamava Wangcun e ha preso il nome attuale dal film che ci fu girato negli anni Ottanta.',
    percheAndarci:
      'Perché è la sosta che spezza il trasferimento tra Zhangjiajie e il resto dell\'Hunan, e perché di notte, con la cascata illuminata e i vicoli in pietra quasi vuoti, è uno dei posti più suggestivi del paese — e uno dei pochi dove non si incontrano stranieri.',
    cosaVedere: [
      'La cascata che attraversa il borgo, con il camminamento che passa dietro il velo d\'acqua',
      'Le case Tujia su palafitte aggrappate al pendio sopra il fiume You',
      'La via lastricata principale, con i gradini che scendono fino al fiume',
      'Il borgo illuminato dopo il tramonto, il momento per cui vale la pena dormirci',
    ],
    cosaFare: [
      'Passare dietro la cascata lungo il camminamento scavato nella roccia',
      'Dormire in una guesthouse affacciata sul fiume e vedere il borgo svuotarsi la sera',
      'Colazione con il tofu piccante e i noodles di riso al banco del mattino',
    ],
    doveDormire:
      'Le guesthouse dentro il borgo, quelle affacciate sul fiume o sulla cascata, sono l\'unico motivo per fermarsi a dormire: chi arriva in giornata vede il posto nelle ore peggiori, quelle dei pullman. Gli standard sono semplici, le camere piccole, e l\'inglese praticamente assente.',
    doveMangiare:
      'Cucina Tujia, quindi Hunan nella sua versione di montagna: pesce di fiume in umido, maiale affumicato appeso sopra il fuoco (la conservazione tradizionale della zona), tofu piccante e verdure sottaceto. Si mangia nelle case che affacciano sulla via principale, quasi tutte con la stessa carta e senza menu in inglese.',
    comeArrivare:
      'Circa 2 ore di auto o bus da Zhangjiajie, 1 ora e mezza da Fenghuang. La stazione ad alta velocità di Furong Zhen sulla linea Chongqing-Changsha ha reso la tappa molto più semplice di un tempo: da Chongqing sono poco più di due ore.',
    comeSpostarsi: 'Tutto a piedi, su gradini: il borgo è costruito su un pendio e non esiste un percorso pianeggiante.',
    periodoMigliore:
      'Dopo le piogge, tra aprile e ottobre, quando la cascata ha portata piena: in stagione secca si riduce parecchio e il borgo perde il suo elemento principale.',
    costi: 'Ingresso al borgo attorno ai 100 yuan, che si paga anche dormendoci; guesthouse molto economiche.',
    erroriDaEvitare: [
      'Visitarlo in giornata: tra le dieci e le sedici è pieno di gruppi, la sera e la mattina presto è un altro posto',
      'Andarci in stagione secca aspettandosi la cascata delle fotografie',
      'Contare su pagamenti in contanti o su personale che parli inglese: qui servono davvero Alipay o WeChat Pay e il traduttore',
    ],
    miaEsperienza:
      'È la tappa che nessuno mette in itinerario e che invece resta. Di giorno Furong Zhen è quello che ci si aspetta — pullman, bancarelle, la stessa merce di ogni borgo cinese ricostruito — ma verso le sei di sera i gruppi ripartono tutti insieme, le luci si accendono sulla cascata e il paese torna a quattro strade di pietra bagnata con qualche famiglia che cena sull\'uscio. Il camminamento che passa dietro il salto d\'acqua è la cosa che si ricorda: si cammina in un corridoio scavato nella roccia con il rumore dell\'acqua a un metro e si esce fradici di spruzzi. Va detto che come borgo storico è in larga parte rimesso a nuovo, quindi chi cerca autenticità architettonica resterà deluso; quello che funziona qui è la posizione, unica, e l\'ora del giorno in cui lo si guarda.',
    esperienzeSlugs: [],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Il borgo di Furong Zhen con le case di legno sopra la cascata, Hunan, Cina',
  },
  {
    slug: 'chengdu',
    paeseSlug: 'cina',
    ordine: 6,
    nome: 'Chengdu',
    tipologia: ['città', 'cultura', 'gastronomia'],
    giorniConsigliati: '3 giorni, con una gita fuori città',
    visitataPersonalmente: true,
    introduzione:
      'La capitale del Sichuan, la città dei panda e dell\'hot pot, e per reputazione la più rilassata della Cina: si beve tè nei parchi per interi pomeriggi, si gioca a mahjong per strada, e il ritmo è dichiaratamente più lento di quello di Pechino e Shanghai.',
    percheAndarci:
      'Per i panda, che qui si vedono in un centro di ricerca serio e non in uno zoo, e per il cibo: il Sichuan è la regione gastronomica più identitaria del paese, e l\'hot pot di Chengdu è un\'esperienza prima ancora che un pasto.',
    cosaVedere: [
      'La Base di ricerca sull\'allevamento del panda gigante, a nord della città',
      'Il Monastero di Wenshu, il tempio più bello della città, con la sala da tè nel cortile',
      'Il quartiere di Kuanzhai Xiangzi, i vicoli larghi e stretti restaurati',
      'Il parco del Popolo, con la casa da tè Heming dove si fa pulizia delle orecchie in mezzo alla gente',
      'Il sistema di irrigazione di Dujiangyan, in funzione ininterrotta dal III secolo a.C., patrimonio UNESCO',
      'Il Grande Buddha di Leshan, 71 metri scolpiti nella roccia, a due ore di treno',
    ],
    cosaFare: [
      'Base dei panda all\'apertura, quando gli animali sono attivi — vedi la scheda esperienza dedicata',
      'Hot pot sichuanese in un locale di quartiere, con il brodo diviso in due',
      'Spettacolo dell\'Opera Sichuanese con il numero del cambio di maschera',
      'Pomeriggio in una casa da tè, che a Chengdu è l\'attività cittadina per eccellenza',
      'Gita in giornata a Leshan per il Grande Buddha, o a Dujiangyan',
    ],
    doveDormire:
      'La zona attorno al Monastero di Wenshu e quella di Kuanzhai Xiangzi sono le più comode e piacevoli; il quartiere di Chunxi Road è più commerciale ma centralissimo per la metropolitana. La base dei panda è a nord e si raggiunge in metro più navetta.',
    doveMangiare:
      'Chengdu è probabilmente la città dove si mangia meglio in Cina, e va affrontata sapendo che il piccante sichuanese è di un tipo particolare: il pepe di Sichuan non brucia, intorpidisce la lingua, e la sensazione — il famoso "málà" — spiazza al primo assaggio. I piatti obbligatori sono il mapo tofu, il pollo gongbao (che non ha niente a che vedere con la versione servita in Europa), i dan dan noodles e il coniglio, che qui è cucina quotidiana. L\'hot pot va fatto almeno una volta con il brodo diviso: metà piccante, metà chiaro, così ognuno sceglie. E il cibo di strada dei vicoli è ottimo e costa pochissimo.',
    comeArrivare:
      'Volo su Chengdu Tianfu (TFU) o Shuangliu (SHA), oppure alta velocità: da Chongqing sono poco più di un\'ora, da Xi\'an circa 4 ore.',
    comeSpostarsi: 'Metropolitana estesa ed economica, più DiDi per le tratte non coperte. Il centro si cammina bene.',
    periodoMigliore:
      'marzo-giugno e settembre-novembre. Il Sichuan vive sotto una cappa di grigio per gran parte dell\'anno — la battuta locale è che i cani abbaiano quando vedono il sole — e l\'estate è calda e umida.',
    costi:
      'Base dei panda 55 yuan, con prenotazione nominale obbligatoria; Leshan attorno agli 80 yuan; hot pot 60-120 yuan a persona. Città economica rispetto alla costa.',
    erroriDaEvitare: [
      'Arrivare alla base dei panda a metà mattina: dopo le dieci gli animali hanno mangiato e dormono, e si vedono palle di pelo immobili',
      'Presentarsi senza prenotazione: l\'ingresso è nominale, legato al passaporto, e le biglietterie fisiche sono chiuse',
      'Ordinare l\'hot pot interamente piccante alla prima esperienza: il brodo diviso esiste esattamente per questo',
      'Fare Leshan e Dujiangyan nello stesso giorno: sono in direzioni opposte',
    ],
    miaEsperienza:
      'Chengdu è la città in cui viene voglia di restare più a lungo di quanto prevedesse il programma, e non per quello che c\'è da vedere — che è poco — ma per come si sta. Nel parco del Popolo, un pomeriggio qualsiasi, ci sono centinaia di persone sedute a bere tè da sole o a giocare a carte, e nessuno ha fretta: è l\'unica città cinese in cui il tempo sembra abbondante. Sui panda va gestita l\'aspettativa: alle otto e mezza del mattino sono svegli, mangiano bambù e si arrampicano, e per un\'ora sono esattamente quello che si sperava; due ore dopo dormono e la visita perde tutto. L\'hot pot invece è la cosa che spiazza di più: il pepe di Sichuan non è piccante come lo intendiamo noi, addormenta la bocca, e la prima volta la sensazione è quasi allarmante prima di diventare una dipendenza. Il consiglio è chiedere il brodo diviso e non fare gli eroi.',
    esperienzeSlugs: ['panda-chengdu', 'hot-pot-sichuan'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Un panda gigante sull\'albero alla base di ricerca di Chengdu, Sichuan, Cina',
  },
  {
    slug: 'chongqing',
    paeseSlug: 'cina',
    ordine: 7,
    nome: 'Chongqing',
    tipologia: ['città', 'architettura', 'panorami'],
    giorniConsigliati: '2 giorni, più uno se si aggiunge Wulong',
    visitataPersonalmente: true,
    introduzione:
      'La megalopoli verticale costruita sulle colline alla confluenza tra Yangtze e Jialing: trentadue milioni di abitanti nella municipalità, grattacieli che escono dalla nebbia, e una geografia così ripida che la metropolitana attraversa un palazzo e la stessa strada può essere contemporaneamente al piano terra e al quindicesimo piano.',
    percheAndarci:
      'Perché è la città più fotogenica e più strana della Cina, quella che negli ultimi anni è diventata virale per ragioni giuste: non ha monumenti, ha una forma. E perché è il punto di partenza delle crociere sullo Yangtze e la base per il carso di Wulong.',
    cosaVedere: [
      'Hongya Dong, il complesso di case su palafitte a più piani illuminato di notte sul fiume',
      'La stazione di Liziba, dove la monorotaia entra ed esce dal sesto piano di un palazzo residenziale',
      'Il quartiere di Ciqikou, il borgo antico conservato dentro la città',
      'Il punto panoramico di Nanshan e la funivia sopra lo Yangtze',
      'Il carso di Wulong, con i tre ponti naturali e la voragine del Tiankeng, a tre ore dalla città',
    ],
    cosaFare: [
      'Attraversare il fiume in funivia al tramonto',
      'Vedere Hongya Dong dalla riva opposta dopo il buio, che è l\'unico punto da cui si capisce',
      'Hot pot di Chongqing, ancora più oleoso e piccante di quello di Chengdu: qui è nato',
      'Escursione in giornata o con pernottamento al parco carsico di Wulong',
      'Imbarcarsi per la crociera sulle Tre Gole dello Yangtze, che parte da qui',
    ],
    doveDormire:
      'La penisola di Yuzhong, il centro storico-finanziario, è la base più comoda: Hongya Dong, Liziba e i moli sono raggiungibili a piedi o con poche fermate di metropolitana. Vale la pena spendere qualcosa in più per una camera con vista sul fiume: qui la vista è la città.',
    doveMangiare:
      'L\'hot pot di Chongqing è l\'originale e non fa concessioni: brodo rosso di grasso di manzo e peperoncino, senza la versione addolcita. I locali storici hanno ancora i tavoli con la pentola a scomparti condivisa. Fuori dall\'hot pot, la specialità sono i xiaomian, i noodles piccanti del mattino, che qui si mangiano a colazione seduti su sgabelli di plastica in strada. Da provare anche il pollo alla Laziji, sepolto sotto una montagna di peperoncini secchi da cui va pescato.',
    comeArrivare:
      'Volo su Chongqing Jiangbei (CKG) oppure alta velocità: Chengdu è a poco più di un\'ora, Zhangjiajie e Furong Zhen sono sulla stessa linea verso est.',
    comeSpostarsi:
      'Metropolitana e monorotaia, che qui sono uno spettacolo di per sé. I taxi hanno un problema strutturale: la navigazione satellitare impazzisce su una città a più livelli, e capita che l\'autista arrivi alla giusta coordinata ma sul piano sbagliato. Camminare è faticoso, si sale e si scende di continuo.',
    periodoMigliore:
      'marzo-maggio e settembre-novembre. L\'estate a Chongqing è famigerata: è una delle "città forno" della Cina, con settimane sopra i 40 gradi e umidità altissima.',
    costi:
      'Wulong attorno ai 135 yuan più le navette; funivia sullo Yangtze pochi yuan; Hongya Dong gratuito. Città molto economica su cibo e trasporti.',
    erroriDaEvitare: [
      'Andare a Hongya Dong e guardarlo da dentro: dall\'interno è un centro commerciale, l\'unica prospettiva che conta è dalla riva opposta, dopo il tramonto',
      'Fidarsi delle mappe per stimare i tempi a piedi: due punti a trecento metri di distanza possono essere separati da cento metri di dislivello',
      'Visitarla in luglio o agosto, quando il caldo rende impraticabile qualsiasi programma diurno',
      'Considerarla solo una tappa di passaggio verso la crociera sullo Yangtze: merita due giorni per sé',
    ],
    miaEsperienza:
      'Chongqing è la città più assurda vista in Cina e va presa per quello che è: non ci sono monumenti da spuntare, c\'è una geografia impazzita da attraversare. Il momento in cui si capisce è quando si esce da un centro commerciale al primo piano e ci si ritrova su una strada trafficata, con altri due livelli di città sotto i piedi. Hongya Dong dal vivo, di notte, è più impressionante delle fotografie, a una condizione: guardarlo dalla riva opposta e non da dentro, perché all\'interno è un normalissimo centro commerciale a tema. La metropolitana che entra nel sesto piano di un palazzo abitato è esattamente come nei video, e il fatto che sia una cosa quotidiana per chi ci vive è il dettaglio migliore. Sul clima, invece, nessuna indulgenza: d\'estate qui non si sta, e un viaggio programmato a luglio è un viaggio programmato male.',
    esperienzeSlugs: ['hongya-dong-notte'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Il complesso illuminato di Hongya Dong sul fiume a Chongqing, Cina',
  },
  {
    slug: 'lijiang',
    paeseSlug: 'cina',
    ordine: 8,
    nome: 'Lijiang',
    tipologia: ['borghi', 'cultura', 'montagna'],
    giorniConsigliati: '2-3 giorni, come base per lo Yulong Xueshan',
    visitataPersonalmente: true,
    introduzione:
      'La città vecchia dei Naxi nello Yunnan settentrionale, a 2.400 metri: un labirinto di vicoli lastricati, canali e tetti di tegole grigie, patrimonio UNESCO, con il massiccio del Drago di Giada che chiude l\'orizzonte a nord.',
    percheAndarci:
      'Perché è la base logistica per tutto il nord dello Yunnan — Yulong Xueshan, Gola del Salto della Tigre, Shangri-La — e perché la cultura Naxi, con la sua scrittura pittografica ancora in uso, è una delle più particolari del paese.',
    cosaVedere: [
      'La città vecchia (Dayan), con la piazza dello Sifang e i canali che la attraversano',
      'La collina del Leone e la Pagoda Wangu, per la vista sui tetti grigi dall\'alto',
      'Il villaggio di Baisha, a nord, molto meno turistico e con gli affreschi Ming',
      'Shuhe, la città vecchia minore, più tranquilla di Dayan',
      'Il Lago del Drago Nero, con la cartolina classica dello Yulong Xueshan riflesso nell\'acqua',
    ],
    cosaFare: [
      'Perdersi nei vicoli di Dayan la mattina presto, prima che aprano i negozi',
      'Salire sulla collina del Leone al tramonto',
      'Giornata a Baisha in bicicletta, dove la vita Naxi è ancora quella vera',
      'Usare Lijiang come base per Yulong Xueshan e per la Gola del Salto della Tigre',
    ],
    doveDormire:
      'Le guesthouse a cortile dentro la città vecchia sono l\'esperienza giusta, con l\'avvertenza che dentro Dayan non entrano le auto: si arriva al bordo e si prosegue a piedi con i bagagli sui ciottoli. Chi preferisce comodità e silenzio dorma a Shuhe, dieci minuti di taxi più a nord.',
    doveMangiare:
      'La cucina dello Yunnan è la più diversa dal resto della Cina: meno piccante del Sichuan, con molti funghi, fiori, erbe e formaggi — cosa rarissima nel resto del paese. I piatti da cercare sono i noodles "che attraversano il ponte" (serviti in un brodo bollente con gli ingredienti da aggiungere al momento), il formaggio di capra grigliato dei Bai, i funghi saltati in stagione e il maiale affumicato dei Naxi. Dentro la città vecchia i prezzi sono da turista: bastano due vicoli fuori per dimezzarli.',
    comeArrivare:
      'Volo su Lijiang Sanyi (LJG), che è il modo normale di arrivarci, con collegamenti da Kunming, Chengdu, Shanghai e Pechino. In alternativa treno da Kunming (circa 3 ore in alta velocità) o da Dali.',
    comeSpostarsi: 'La città vecchia si gira solo a piedi. Per Yulong Xueshan, Baisha e la Gola del Salto della Tigre servono bus turistici, taxi o autista giornaliero.',
    periodoMigliore:
      'marzo-maggio e settembre-novembre, con cieli limpidi e il massiccio visibile. Le piogge si concentrano tra giugno e agosto; l\'inverno è freddo ma limpido, con la neve sul Drago di Giada.',
    costi:
      'La tassa di manutenzione della città vecchia (circa 50 yuan) viene chiesta all\'ingresso di alcuni siti; guesthouse molto economiche. La quota è già sensibile: 2.400 metri non sono pochi, e chi arriva dal livello del mare li sente.',
    erroriDaEvitare: [
      'Giudicare Lijiang dalla via principale di Dayan alle sei di sera, quando è un corridoio di negozi e karaoke: la città vecchia va vista all\'alba',
      'Ignorare la quota: da qui si sale a 4.500 metri sullo Yulong Xueshan, e arrivare in aereo dal livello del mare la sera prima è la scelta sbagliata',
      'Saltare Baisha e Shuhe pensando che siano la stessa cosa di Dayan',
    ],
    miaEsperienza:
      'Lijiang divide, e con ragione. La città vecchia è patrimonio UNESCO e alle sette di sera è un mercato continuo di souvenir con la musica a palla nei bar della piazza: chi ci arriva a quell\'ora e si ferma lì torna a casa convinto che sia una trappola. Poi si esce alle sei del mattino, con i vicoli bagnati, i canali che scorrono, le vecchie Naxi che spazzano davanti casa e nessun negozio aperto, ed è un altro posto: quello per cui ha senso dormirci invece di passarci. Il consiglio più utile è dedicare mezza giornata a Baisha, dieci chilometri a nord: è il villaggio Naxi originario, quasi nessuno ci va, e quello che a Dayan si cerca senza trovarlo lì c\'è ancora. Vale infine ricordare che siamo a 2.400 metri e che il vero motivo per essere qui è ciò che sta più a nord: Lijiang è la base, non la meta.',
    esperienzeSlugs: [],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'I tetti grigi della città vecchia di Lijiang con il massiccio dello Yulong Xueshan sullo sfondo, Yunnan',
  },
  {
    slug: 'yulong-shangri-la',
    paeseSlug: 'cina',
    ordine: 9,
    nome: 'Yulong Xueshan, il Salto della Tigre e Shangri-La',
    tipologia: ['montagna', 'natura', 'trekking'],
    giorniConsigliati: '3-4 giorni partendo da Lijiang',
    visitataPersonalmente: true,
    introduzione:
      'Le montagne dello Yunnan settentrionale: il massiccio del Drago di Giada (Yulong Xueshan), che sfiora i 5.600 metri e non è mai stato scalato, l\'anfiteatro a 3.100 metri dove va in scena lo spettacolo diretto da Zhang Yimou, una delle gole più profonde del mondo e, alla fine della strada, l\'altopiano tibetano di Shangri-La.',
    percheAndarci:
      'Perché in tre giorni si passa da un teatro all\'aperto sotto un ghiacciaio a un trek lungo una gola scavata per 3.000 metri, fino a un monastero tibetano a 3.200 metri di quota: è la sequenza di paesaggi più forte di tutta la Cina.',
    cosaVedere: [
      'Il massiccio dello Yulong Xueshan, con la funivia che sale al ghiacciaio a 4.506 metri',
      'Lo spettacolo Impression Lijiang, nell\'anfiteatro all\'aperto a 3.100 metri ai piedi della montagna',
      'La Valle della Luna Blu e il Prato degli Yak, ai piedi del massiccio',
      'La Gola del Salto della Tigre, dove lo Yangtze corre incassato tra pareti di 3.000 metri',
      'Il monastero di Songzanlin a Shangri-La, il più grande complesso buddista tibetano dello Yunnan',
      'La città vecchia di Dukezong a Shangri-La, con il grande cilindro di preghiera girevole',
    ],
    cosaFare: [
      'Assistere a Impression Lijiang con la montagna come fondale — vedi la scheda esperienza dedicata',
      'Trek di due giorni lungo il sentiero alto della Gola del Salto della Tigre — vedi la scheda esperienza dedicata',
      'Salire con la funivia al ghiacciaio a 4.506 metri e camminare sulle passerelle in quota',
      'Giornata a Shangri-La tra monastero, città vecchia e altopiano',
    ],
    doveDormire:
      'Lijiang come base per Yulong Xueshan e per lo spettacolo. Per la Gola del Salto della Tigre si dorme nelle guesthouse lungo il sentiero alto, a Walnut Garden o alla Tea Horse, che sono il motivo per cui il trek va fatto in due giorni invece che in uno. A Shangri-La, la città vecchia di Dukezong.',
    doveMangiare:
      'Sull\'altopiano la cucina cambia e diventa tibetana: tè al burro di yak (che spiazza al primo sorso), carne di yak essiccata, momo al vapore e zuppe dense. Lungo la Gola del Salto della Tigre si mangia nelle guesthouse, con menu fissi semplici e sorprendentemente buoni. Attorno allo Yulong Xueshan l\'offerta è minima e cara: conviene portarsi pranzo e acqua da Lijiang.',
    comeArrivare:
      'Tutto parte da Lijiang: un\'ora di auto per l\'ingresso dello Yulong Xueshan, due ore per Qiaotou, dove inizia il sentiero alto della gola, quattro ore per Shangri-La (che ha anche un suo aeroporto e, dal 2023, il collegamento ferroviario da Lijiang in poco più di un\'ora).',
    comeSpostarsi:
      'Bus turistici e autista giornaliero da Lijiang; per il trek della gola ci si muove a piedi, con i bagagli grossi lasciati in deposito a Lijiang o trasportati fino alla guesthouse d\'arrivo.',
    periodoMigliore:
      'marzo-maggio e settembre-novembre. La gola è pericolosa nella stagione delle piogge (giugno-agosto) per le frane; il ghiacciaio è visibile tutto l\'anno ma nelle giornate nuvolose la funivia sale dentro la nebbia e non si vede nulla.',
    costi:
      'Yulong Xueshan: circa 100 yuan di ingresso al parco più 20 di navetta più la funivia per il ghiacciaio, che è la voce più cara (indicativamente 120 yuan) e va prenotata. Impression Lijiang costa circa 190-280 yuan secondo il settore. Gola del Salto della Tigre circa 65 yuan. Monastero di Songzanlin attorno ai 100 yuan.',
    erroriDaEvitare: [
      'Salire al ghiacciaio a 4.506 metri il giorno dopo essere arrivati in aereo dal livello del mare: la quota si sente, la bombola di ossigeno venduta all\'ingresso non è un souvenir',
      'Non prenotare in anticipo la funivia grande: le quote giornaliere sono contingentate e si esauriscono presto in alta stagione',
      'Fare la Gola del Salto della Tigre lungo la strada asfaltata di fondovalle pensando di averla vista: il percorso vero è il sentiero alto, sull\'altro versante',
      'Programmare il trek nella stagione delle piogge, quando le frane chiudono tratti di sentiero',
      'Sottovalutare Shangri-La: a 3.200 metri le notti sono fredde in ogni stagione e il fiato manca anche salendo una rampa di scale',
    ],
    confronti: [
      {
        titolo: 'Le tre funivie dello Yulong Xueshan',
        introduzione:
          'Il massiccio ha tre risalite diverse, con prezzi, quote e code molto diverse tra loro. La maggior parte dei visitatori prende la prima senza sapere che esistono le altre, e in alta stagione è la scelta che costa più ore di attesa.',
        opzioni: [
          {
            nome: 'Funivia del ghiacciaio (Glacier Park)',
            sintesi: 'La grande funivia che sale a 4.506 metri, con le passerelle sopra il ghiacciaio e il punto più alto raggiungibile.',
            costo: 'indicativamente 120 yuan, oltre a ingresso e navetta',
            durata: 'mezza giornata contando le attese',
            pro: ['È il punto più alto e più spettacolare del massiccio', 'La sensazione di quota è reale e vale il viaggio', 'Le passerelle permettono di camminare in quota senza alcuna difficoltà tecnica'],
            contro: ['Quota giornaliera contingentata: senza prenotazione si rischia di restare fuori', 'Code lunghissime in alta stagione', 'A 4.500 metri chi non è acclimatato sta male davvero', 'Con le nuvole non si vede nulla e il biglietto è speso comunque'],
            perChi: 'Chi ha prenotato in anticipo, ha una giornata limpida e ha passato almeno una notte a Lijiang.',
          },
          {
            nome: 'Funivia del Prato degli Abeti (Spruce Meadow)',
            sintesi: 'Sale a circa 3.200 metri, su una radura di prati e abeti ai piedi delle pareti.',
            costo: 'indicativamente 55 yuan',
            durata: '1-2 ore',
            pro: ['Molto meno coda della funivia grande', 'Quota accessibile a tutti', 'Vista frontale sulle pareti del massiccio, tra le più belle'],
            contro: ['Non si arriva al ghiacciaio', 'Meno "impresa" e meno racconto', 'Comunque affollata nei fine settimana'],
            perChi: 'Chi ha problemi con la quota, viaggia con bambini o anziani, o ha trovato la funivia grande esaurita.',
          },
          {
            nome: 'Funivia del Prato degli Yak (Yak Meadow)',
            sintesi: 'La meno frequentata delle tre, a circa 3.700 metri, su pascoli d\'altura con un piccolo tempio.',
            costo: 'indicativamente 45 yuan',
            durata: '2 ore',
            pro: ['Quasi deserta anche in alta stagione', 'Paesaggio di pascoli e yak, il più tranquillo del massiccio', 'La più economica'],
            contro: ['La meno spettacolare dal punto di vista panoramico', 'Pochi servizi', 'Richiede comunque una navetta dedicata'],
            perChi: 'Chi vuole camminare in pace e non sopporta le code.',
          },
        ],
        raccomandazione:
          'Con una giornata limpida e la prenotazione in mano, la funivia del ghiacciaio: è quella che si ricorda. Se il cielo è coperto, non vale il prezzo — meglio dirottare sul Prato degli Abeti e tenere i soldi per lo spettacolo.',
      },
    ],
    miaEsperienza:
      'È la parte di Cina che si ricorda meglio, e non per un singolo posto ma per la sequenza. Impression Lijiang è uno spettacolo che sulla carta sembra la classica cosa da turisti — cinquecento figuranti, cavalli, costumi — e dal vivo funziona per una ragione che non c\'entra con la regia: l\'anfiteatro è all\'aperto a 3.100 metri e il fondale è la montagna vera, con il ghiacciaio sopra la testa. Nessun teatro può competere. Il giorno dopo, la funivia a 4.506 metri: si sale in pochi minuti e il corpo non ha tempo di capire, si cammina sulle passerelle con venti passi e una sosta, e le bombole di ossigeno vendute all\'ingresso da improbabili diventano ragionevoli. Ma la cosa migliore resta il sentiero alto della Gola del Salto della Tigre: due giorni di cammino su un versante quasi deserto, con lo Yangtze tremila metri più in basso che si sente prima di vedersi, e le guesthouse dove si cena tutti allo stesso tavolo. Shangri-La, alla fine della strada, è già Tibet in tutto tranne che nel nome.',
    esperienzeSlugs: ['impression-lijiang', 'gola-salto-tigre'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Il massiccio innevato dello Yulong Xueshan visto dall\'anfiteatro di Impression Lijiang, Yunnan',
  },
  {
    slug: 'yangshuo',
    paeseSlug: 'cina',
    ordine: 10,
    nome: 'Yangshuo e il fiume Li',
    tipologia: ['natura', 'bicicletta', 'panorami'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il carso del Guangxi: migliaia di torri calcaree che spuntano dalle risaie lungo il fiume Li, il paesaggio riprodotto sulla banconota da 20 yuan e dipinto per secoli dagli artisti cinesi. Yangshuo è il paese ai piedi delle torri, un tempo villaggio e oggi base di tutto quello che si fa nella zona.',
    percheAndarci:
      'Perché è il paesaggio cinese per eccellenza, quello dei rotoli dipinti, e perché è l\'unica tappa del paese dove il modo giusto di viaggiare è lento: bicicletta tra le risaie, zattera sul fiume, nessun museo da spuntare.',
    cosaVedere: [
      'Il tratto di fiume Li tra Guilin e Yangshuo, il più fotografato della Cina',
      'La collina di Xianggong all\'alba, il punto panoramico sull\'ansa del fiume',
      'Le terrazze di riso di Longji, a due ore e mezza verso nord',
      'Il villaggio di Xingping, con la veduta della banconota da 20 yuan',
      'La Yulong River, con i suoi ponti in pietra e le risaie, molto più tranquilla del fiume Li',
      'Lo spettacolo Impression Liu Sanjie, sul fiume, con le torri carsiche come scenografia',
    ],
    cosaFare: [
      'Discesa del fiume Li in zattera o in battello — vedi la scheda esperienza dedicata',
      'Giornata in bicicletta o scooter elettrico lungo la Yulong River tra risaie e villaggi',
      'Alba sulla collina di Xianggong, il momento migliore della giornata',
      'Arrampicata sportiva: Yangshuo è una delle capitali mondiali del climbing su calcare',
      'Spettacolo serale sul fiume con le torri illuminate',
    ],
    doveDormire:
      'Il paese di Yangshuo è comodo ma rumoroso, soprattutto attorno alla West Street; le guesthouse in campagna, lungo la Yulong River o verso Xingping, sono la scelta migliore e costano meno. Xingping è l\'alternativa per chi vuole un paese più piccolo e il punto panoramico a due passi.',
    doveMangiare:
      'Il piatto locale è il pesce birra, cotto in padella con birra, peperoni e pomodoro, e va mangiato lungo il fiume. Da provare anche le lumache di fiume ripiene e i noodles di riso di Guilin, che qui si mangiano a colazione con sottaceti e arachidi a un paio di euro. La West Street è la via dei ristoranti per stranieri, con prezzi e cucina addomesticati: basta uscirne per mangiare meglio e spendere metà.',
    comeArrivare:
      'Alta velocità fino a Guilin o direttamente alla stazione di Yangshuo (che è però a 30 minuti dal centro): da Canton sono circa 3 ore, da Shanghai 8-9. Volo su Guilin Liangjiang (KWL), poi un\'ora di bus.',
    comeSpostarsi:
      'Bicicletta e scooter elettrico sono il mezzo giusto e si noleggiano ovunque per pochi yuan. Per il fiume Li si usano battello o zattera di bambù; per Longji serve un bus o un\'auto.',
    periodoMigliore:
      'aprile-ottobre, con una precisazione: le risaie sono verdi in estate e dorate a fine settembre-ottobre, allagate e riflettenti a maggio-giugno. L\'estate porta caldo e afa, ma anche la portata d\'acqua giusta sul fiume.',
    costi:
      'Crociera in battello Guilin-Yangshuo attorno ai 215-450 yuan secondo la classe; zattera di bambù sul tratto breve da Xingping 100-150 yuan; terrazze di Longji circa 80 yuan; bici a noleggio pochi yuan al giorno.',
    erroriDaEvitare: [
      'Prenotare la crociera lunga da Guilin pensando che sia l\'unica opzione: il tratto più bello è quello attorno a Xingping, e si può fare in zattera in un\'ora',
      'Fermarsi sulla West Street pensando di aver visto Yangshuo: il senso del posto sta fuori dal paese, sulle strade di campagna',
      'Andarci in agosto senza mettere in conto caldo e umidità pesanti',
      'Dare per scontata la portata del fiume: in stagione secca alcune tratte in zattera vengono sospese',
    ],
    miaEsperienza:
      'Yangshuo è la tappa in cui finalmente si rallenta, e in un viaggio in Cina è un bene più prezioso di quanto sembri. La crociera lunga da Guilin, quella che tutti prenotano, è bella ma è un battello pieno con il buffet: il tratto che conta davvero è quello attorno a Xingping, e si fa in un\'ora su una zattera di bambù con due persone a bordo e le torri che sfilano a pelo d\'acqua. La giornata migliore però è quella senza programma: una bici elettrica, la strada lungo la Yulong River, e cinque ore a fermarsi dove capita tra risaie, bufali e ponti in pietra. La West Street la sera è l\'esatto contrario — insegne, musica alta, ristoranti con il menu in cinque lingue — e si risolve dormendo in campagna invece che in paese. Sull\'alba a Xianggong vale la pena essere chiari: sveglia prima delle cinque, salita ripida al buio, e poi la nebbia che si alza dall\'ansa del fiume. È la fotografia che si aveva in testa partendo.',
    esperienzeSlugs: ['fiume-li-zattera'],
    tripSlugs: ['cina-paesaggi'],
    imageAlt: 'Le torri carsiche lungo il fiume Li con una zattera di bambù, Yangshuo, Guangxi',
  },
  {
    slug: 'hong-kong',
    paeseSlug: 'cina',
    ordine: 11,
    nome: 'Hong Kong',
    tipologia: ['città', 'panorami', 'gastronomia'],
    giorniConsigliati: '3-4 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Regione amministrativa speciale con frontiera, valuta, lingua veicolare e sistema legale propri: si entra e si esce con controllo passaporti come in un altro paese. Una delle skyline più famose del mondo, appoggiata su un\'isola montuosa e su una penisola, con sette milioni e mezzo di persone stipate tra il mare e la roccia.',
    percheAndarci:
      'Perché la densità verticale di Hong Kong non esiste altrove, e perché a venti minuti dai grattacieli ci sono sentieri di montagna, spiagge e villaggi di pescatori: nessuna altra città al mondo passa così in fretta da un estremo all\'altro.',
    cosaVedere: [
      'Victoria Peak, con il tram a cremagliera che sale quasi in verticale',
      'Il porto di Victoria dal lungomare di Tsim Sha Tsui, con lo spettacolo di luci Symphony of Lights la sera',
      'La Star Ferry, il traghetto storico che attraversa il porto per pochi centesimi',
      'Il quartiere di Sheung Wan e le sue scale mobili all\'aperto, le più lunghe del mondo',
      'Il Grande Buddha di Ngong Ping sull\'isola di Lantau, con la funivia panoramica',
      'Il villaggio di pescatori di Tai O, con le case su palafitte',
      'I mercati di Mong Kok, tra quello degli uccelli, quello dei fiori e quello notturno di Temple Street',
    ],
    cosaFare: [
      'Salire a Victoria Peak con il tram storico e scendere a piedi lungo il sentiero',
      'Attraversare il porto in Star Ferry al tramonto, la cosa più economica e più bella della città',
      'Dim sum a pranzo in un locale tradizionale, con i carrelli che passano tra i tavoli',
      'Dragon\'s Back, il sentiero panoramico sopra la costa sud, a mezz\'ora dal centro',
      'Giornata a Lantau tra funivia, Grande Buddha e Tai O',
    ],
    doveDormire:
      'Causeway Bay e Wan Chai sul lato isola, Tsim Sha Tsui sul lato Kowloon: la metropolitana collega tutto in pochi minuti e la vista sul porto vale la spesa. Hong Kong ha le camere più piccole e più care di tutto il viaggio: è un dato di fatto, non una sorpresa da evitare.',
    doveMangiare:
      'È una delle capitali gastronomiche dell\'Asia e la si può attraversare a tre livelli. Il dim sum a pranzo, che qui è istituzione e non moda; i cha chaan teng, le tavole calde locali dove si mangia la cucina ibrida anglo-cantonese — toast alla francese, tè al latte, maccheroni in brodo — per pochi dollari; e la ristorazione stellata, tra le più dense al mondo. Da provare almeno una volta l\'oca arrosto, il roast goose cantonese, che è tra le cose migliori mangiate in tutta la Cina.',
    comeArrivare:
      'Volo internazionale su Hong Kong (HKG), uno dei principali hub asiatici, con l\'Airport Express che porta in centro in 24 minuti. Dalla Cina continentale: alta velocità fino a West Kowloon (da Canton meno di un\'ora, da Shanghai circa 8), traghetto, o autobus attraverso il ponte Hong Kong-Zhuhai-Macao.',
    comeSpostarsi:
      'La MTR è tra le metropolitane migliori del mondo, con segnaletica bilingue e la Octopus Card che serve anche per bus, traghetti e negozi. Il tram a due piani dell\'isola, il "ding ding", costa pochi centesimi ed è il modo più lento e più piacevole di attraversare la città.',
    periodoMigliore:
      'ottobre-dicembre è la finestra migliore, con aria secca e cieli limpidi. L\'estate è calda, umidissima e attraversata dai tifoni tra luglio e settembre; la primavera porta la foschia che cancella la vista dal Peak.',
    costi:
      'La città più cara di tutto il viaggio, soprattutto sugli alloggi. Trasporti e cibo di strada restano invece economici: la Star Ferry costa meno di mezzo euro e un pasto in un cha chaan teng sta sotto i 10.',
    erroriDaEvitare: [
      'Dimenticare che Hong Kong è frontiera a sé: entrando dalla Cina continentale si esce ufficialmente dal paese, e rientrare significa una nuova entrata (senza visto per gli italiani, ma il conteggio dei 30 giorni riparte)',
      'Salire al Peak in una giornata di foschia: la vista è tutta, e senza visibilità il biglietto è buttato',
      'Aspettarsi che l\'Alipay o il WeChat Pay cinesi funzionino ovunque: qui si usano altre app, si paga con Octopus, carte internazionali o contanti in dollari di Hong Kong',
      'Considerarla una città solo di grattacieli e saltare Lantau, le isole e i sentieri: è metà della sua identità',
    ],
    miaEsperienza:
      'Hong Kong spiazza chi ci arriva dopo tre settimane di Cina continentale, perché tutto torna a funzionare come ci si aspetta: cartelli in inglese, Google che si apre senza VPN, code ordinate. La cosa che rimane però non è la skyline — bellissima e vista mille volte — ma il fatto che a mezz\'ora di metropolitana dal centro finanziario si cammini su un crinale con il mare sotto e nessun palazzo in vista. Il Dragon\'s Back è una passeggiata facile che nessuno mette in programma e che vale quanto il Peak. Sulla salita al Victoria Peak conviene invece essere pratici: si va solo con il cielo pulito, e la coda per il tram a fine pomeriggio può superare l\'ora, mentre l\'autobus che sale dalla stessa parte non ha coda. E la cosa più bella costa meno di mezzo euro: attraversare il porto in Star Ferry all\'ora blu, sul ponte inferiore, con i palazzi che si accendono da entrambe le parti.',
    esperienzeSlugs: ['star-ferry-victoria-peak'],
    tripSlugs: ['cina-classica'],
    imageAlt: 'Lo skyline di Hong Kong e il porto di Victoria visti dal lungomare di Tsim Sha Tsui al tramonto',
  },
  {
    slug: 'macao',
    paeseSlug: 'cina',
    ordine: 12,
    nome: 'Macao',
    tipologia: ['città', 'cultura', 'gastronomia'],
    giorniConsigliati: '1-2 giorni, spesso in giornata da Hong Kong',
    visitataPersonalmente: true,
    introduzione:
      'Quattro secoli e mezzo di Portogallo incastrati in trenta chilometri quadrati alla foce del fiume delle Perle: chiese barocche, piazze con il calçada portoghese a onde, cucina macanese, e a duecento metri i casinò più redditizi del mondo, che fatturano più di Las Vegas.',
    percheAndarci:
      'Perché il centro storico è patrimonio UNESCO e non somiglia a nient\'altro in Asia, e perché il contrasto tra i vicoli coloniali e la striscia dei casinò del Cotai è una delle cose più assurde e memorabili del viaggio.',
    cosaVedere: [
      'Le rovine di San Paolo, la facciata della chiesa gesuita rimasta in piedi da sola dopo l\'incendio del 1835',
      'Il Senado Square, con la pavimentazione portoghese a onde e le facciate pastello',
      'La Fortaleza do Monte e il Museo di Macao',
      'Il quartiere di Taipa Village, con le case-museo color pastello lungo la Rua do Cunha',
      'Il tempio di A-Ma, il più antico della città, da cui deriva il nome Macao',
      'La striscia del Cotai, con i casinò che riproducono Venezia, Parigi e Londra a scala reale',
    ],
    cosaFare: [
      'Camminare il centro storico UNESCO, che si fa tutto a piedi in mezza giornata',
      'Mangiare macanese, la cucina di fusione più antica del mondo',
      'Serata sulla striscia del Cotai, anche solo per vedere la scala della cosa',
      'Bungee jumping dalla Macau Tower, 233 metri: il salto da torre più alto del mondo',
    ],
    doveDormire:
      'La maggior parte dei visitatori arriva in giornata da Hong Kong, ed è una scelta sensata. Chi si ferma trova gli hotel dei casinò sul Cotai a prezzi spesso più bassi di quanto sembri, perché il ricavo è altrove, e strutture più semplici nella penisola storica.',
    doveMangiare:
      'La cucina macanese è il motivo gastronomico per venire qui: è la fusione tra portoghese, cantonese e le rotte coloniali dell\'Africa e dell\'India, ed esiste solo qui. Da provare il galinha à africana, il minchi (carne trita con patate e uovo), il bacalhau nelle sue versioni locali e, ovviamente, i pastéis de nata, che a Macao sono arrivati dal Portogallo e da qui si sono diffusi in tutta l\'Asia. La Rua do Cunha a Taipa è la via giusta per assaggiare camminando.',
    comeArrivare:
      'Traghetto veloce da Hong Kong (circa un\'ora dai terminal di Sheung Wan o Kowloon) oppure bus attraverso il ponte Hong Kong-Zhuhai-Macao, il ponte marittimo più lungo del mondo, circa 40 minuti. Dalla Cina continentale si entra via terra dal valico di Gongbei, a Zhuhai. Macao ha anche un suo aeroporto internazionale.',
    comeSpostarsi:
      'A piedi nel centro storico. Gli autobus navetta gratuiti dei casinò collegano traghetti, aeroporto e Cotai, e sono il mezzo che usano tutti, anche chi non gioca. Taxi disponibili ma con code lunghe nei fine settimana.',
    periodoMigliore: 'ottobre-dicembre, come Hong Kong. L\'estate è umida e battuta dai tifoni.',
    costi:
      'Ingressi quasi tutti gratuiti o simbolici nel centro storico; il costo vero è il trasporto da Hong Kong (traghetto attorno ai 160-200 dollari di Hong Kong a tratta). Si paga in pataca, ma i dollari di Hong Kong sono accettati ovunque alla pari.',
    erroriDaEvitare: [
      'Andarci solo per i casinò e saltare il centro storico, che è la parte che vale',
      'Dimenticare che è una frontiera: si esce da Hong Kong o dalla Cina continentale e si rientra, con nuovo controllo passaporti in entrambe le direzioni',
      'Programmarla in un fine settimana, quando arrivano i pullman dalla Cina continentale e le code ai valichi diventano lunghissime',
      'Dare per scontato che valga il pernottamento: per molti è la gita in giornata perfetta da Hong Kong',
    ],
    miaEsperienza:
      'Macao funziona per un motivo solo, ed è il salto. Si passa la mattina in un centro storico che potrebbe essere una città portoghese dell\'Alentejo — pavimentazione a onde, chiese gialle, panetterie con i pastéis appena sfornati — e nel pomeriggio si sale su un autobus gratuito che in venti minuti scarica davanti a una riproduzione a grandezza naturale del Canal Grande, con i gondolieri che cantano sotto un cielo dipinto. Sono due posti diversi a quattro chilometri l\'uno dall\'altro, e il senso della giornata è proprio vederli nello stesso giorno. Il centro storico, va detto, si esaurisce in mezza giornata: chi si aspetta una città da esplorare resterà sorpreso dalle dimensioni. La cosa che merita di più, più delle rovine di San Paolo che sono sempre piene di gente, è Taipa Village con la sua strada di case pastello e i banchi di cibo — e la cucina macanese, che non si trova da nessun\'altra parte al mondo.',
    esperienzeSlugs: [],
    tripSlugs: ['cina-classica'],
    imageAlt: 'La facciata delle rovine della chiesa di San Paolo a Macao vista dalla scalinata',
  },
]
