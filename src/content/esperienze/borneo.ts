import type { Esperienza } from '@/lib/types'

// I campi miaEsperienza e i giudizi sono bozze scritte da Claude nella voce
// del diario, coerenti con ciò che è oggettivamente vero di ogni esperienza
// (quote, permessi, stagione, probabilità di avvistamento) ma non basate su
// ricordi reali: vanno riletti e confermati o corretti. Nessun operatore,
// lodge o resort è stato inventato.
// Le quote dei permessi (Kinabalu, Sipadan) cambiano: vanno riverificate.

export const esperienzeBorneo: Esperienza[] = [
  {
    slug: 'monte-kinabalu',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kota-kinabalu',
    nome: 'Salita al Monte Kinabalu',
    localita: 'Kinabalu Park, Sabah',
    cosE:
      'La salita in due giorni alla vetta più alta del sud-est asiatico tra l\'Himalaya e la Nuova Guinea, 4.095 metri: sei chilometri di gradini nella foresta pluviale fino al rifugio di Laban Rata a 3.270 metri, poi ripartenza alle due di notte sulla piattaforma di granito nudo, con corde fisse, per arrivare in vetta all\'alba.',
    percheFarla:
      'Perché è una delle pochissime vette oltre i 4.000 metri al mondo raggiungibili senza alcuna esperienza alpinistica, e perché l\'alba sulla piattaforma di granito, con le nuvole sotto i piedi e tutto il Borneo intorno, è la cosa che quasi tutti mettono al primo posto di questo viaggio.',
    durata: '2 giorni, 1 notte al rifugio',
    periodo:
      'da marzo a settembre, con meno probabilità di pioggia in vetta. La montagna chiude in caso di condizioni avverse, e in passato è stata chiusa per mesi dopo eventi sismici: la data va presa con un margine.',
    costo:
      'la voce più alta del viaggio: permesso di salita, guida obbligatoria, notte con pasti a Laban Rata, assicurazione e trasferimenti si pagano a pacchetto. La via ferrata sommitale, quando inclusa, alza ulteriormente il conto.',
    comePrenotare:
      'Con **mesi** di anticipo, non settimane: i permessi giornalieri sono poco più di centosessanta e sono legati ai posti letto del rifugio, che è l\'unico punto di appoggio in quota. Si prenota tramite gli operatori autorizzati che gestiscono le sistemazioni sulla montagna. La guida è obbligatoria per legge e non è una formalità.',
    cosaPortare:
      'Strati veri: si parte a 1.866 metri con venti gradi e si arriva in vetta prima dell\'alba vicino allo zero, con il vento. Guanti sottili, torcia frontale (la partenza notturna è al buio pesto), scarpe con buona presa sul granito bagnato, e il minimo indispensabile nello zaino, perché ogni chilo pesa il doppio sulla scalinata.',
    perChiEAdatta:
      'Non serve tecnica ma serve gamba: il primo giorno sono sei chilometri quasi interamente di gradini irregolari. Il problema vero è la quota, perché si passa da meno di duemila metri a oltre quattromila in poco più di ventiquattro ore senza alcun acclimatamento, e il mal di montagna colpisce anche persone allenatissime.',
    miaEsperienza:
      'Il primo giorno è una scalinata infinita dentro la foresta pluviale: sei chilometri di gradini di legno e pietra irregolari, con l\'umidità addosso e la sensazione che non finisca mai, fino al rifugio di Laban Rata dove si mangia presto e si cerca di dormire alle otto di sera in una camerata a 3.270 metri, cosa che a quella quota riesce a pochi. Poi la sveglia all\'una e mezza e la parte che si ricorda: si esce al buio, la foresta è finita, e si cammina sulla roccia nuda tenendosi a una corda fissa, con una fila di torce frontali sopra e sotto che segna il percorso lungo il fianco della montagna. La quota si sente davvero — mal di testa e fiato corto sono la norma, e qualcuno rinuncia negli ultimi cento metri. Poi si arriva sulla piattaforma di granito, il cielo passa dal nero all\'arancione e sotto ci sono le nuvole e tutto il Borneo. La cosa pratica che conta più di ogni altra: i permessi sono poco più di centosessanta al giorno e legati ai letti del rifugio, quindi si prenota con mesi di anticipo — chi ci prova sul posto non sale.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Kinabalu Park senza salita in vetta, con i sentieri bassi, il giardino botanico e le sorgenti termali di Poring',
      'La via ferrata sommitale, la più alta del mondo, per chi ha già il permesso di salita e vuole aggiungere una giornata',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Escursionisti sulla piattaforma di granito della vetta del Monte Kinabalu all\'alba, Sabah',
  },
  {
    slug: 'sepilok-oranghi',
    paeseSlug: 'borneo',
    destinazioneSlug: 'sepilok-sandakan',
    nome: 'Le poppate degli oranghi a Sepilok',
    localita: 'Sepilok Orangutan Rehabilitation Centre, Sabah',
    cosE:
      'Il centro dove gli oranghi orfani o confiscati al commercio illegale vengono reinseriti gradualmente nella foresta. Due volte al giorno, su piattaforme raggiungibili da passerelle di legno, viene messa a disposizione frutta per integrare quello che gli animali non sanno ancora procurarsi da soli.',
    percheFarla:
      'Perché è il posto al mondo con la probabilità più alta di vedere oranghi da vicino, e perché il centro non finge di essere natura: spiega apertamente che si tratta di riabilitazione, e questo lo rende molto più onesto di gran parte delle attrazioni faunistiche del sud-est asiatico.',
    durata: 'mezza giornata, contando entrambe le poppate',
    periodo:
      'tutto l\'anno con una precisazione decisiva: nella stagione dei frutti della foresta, grosso modo tra dicembre e febbraio ma variabile, gli oranghi trovano cibo da soli e alle piattaforme ne compaiono molti meno. Da aprile a ottobre le probabilità sono nettamente più alte.',
    costo: 'circa 30 ringgit di ingresso, più un permesso per la macchina fotografica',
    comePrenotare:
      'Non serve prenotare: si paga all\'ingresso. Le poppate sono a orario fisso, al mattino e nel primo pomeriggio, e conviene esserci per entrambe — sono due tentativi invece di uno.',
    cosaPortare:
      'Nient\'altro che acqua, e tenuta in borsa: i macachi si aggirano attorno alle passerelle e strappano bottiglie, sacchetti e occhiali senza esitazione. Gli zaini vanno chiusi o lasciati negli armadietti all\'ingresso.',
    perChiEAdatta: 'A tutti. Le passerelle sono comode e in gran parte all\'ombra, e il percorso è breve.',
    miaEsperienza:
      'È il posto dove gli oranghi si vedono con la maggiore certezza, e va detto subito cosa significa: sono animali orfani o sequestrati al commercio illegale, in riabilitazione, abituati alla presenza umana. Non è natura, e il centro non lo racconta come tale — cosa che, in questa parte del mondo, non è scontata. Detto questo, vedere un orango attraversare una corda tesa sopra la testa a pochi metri, con quel modo di muoversi lentissimo e stranamente ragionato, è una di quelle cose che da sole giustificano un viaggio. Il consiglio più utile è andare a entrambe le poppate invece che a una sola, perché in certe stagioni la foresta offre abbastanza frutta e non si presenta praticamente nessuno — ed è dichiarato, non è sfortuna. La cosa che quasi tutti saltano è a duecento metri: il centro dei sun bear, gli orsi più piccoli del mondo, recuperati dal commercio di animali domestici. Sono meno famosi e la visita è altrettanto interessante.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Kinabatangan per gli oranghi selvatici, meno garantiti ma veri',
      'Semenggoh in Sarawak, con animali liberi che però nella stagione dei frutti possono non presentarsi',
      'Bukit Lawang a Sumatra, dove si cercano a piedi nella giungla invece che aspettarli',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Un orango si sposta lungo una corda sopra la passerella del centro di Sepilok, Sabah',
  },
  {
    slug: 'crociera-kinabatangan',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kinabatangan',
    nome: 'Crociere sul fiume Kinabatangan',
    localita: 'Sukau e Bilit, fiume Kinabatangan, Sabah',
    cosE:
      'Uscite in barca all\'alba e al tramonto lungo il fiume, con il motore al minimo, per avvistare la fauna che si concentra sulla fascia di foresta rimasta lungo le rive: oranghi selvatici, nasiche, elefanti pigmei, coccodrilli, buceri e macachi. Si aggiunge quasi sempre un\'uscita notturna con le torce.',
    percheFarla:
      'Perché è il posto con il miglior rapporto tra probabilità di avvistamento e costo di tutto il sud-est asiatico, e perché qui gli animali sono completamente selvatici: non c\'è nessuna piattaforma e nessun orario di alimentazione.',
    durata: '2-3 notti in lodge, con 4-6 uscite complessive',
    periodo:
      'da marzo a ottobre. Nella stagione delle piogge il fiume si alza, la foresta si allaga e gli animali si disperdono all\'interno invece di concentrarsi sulle rive: le probabilità calano sensibilmente.',
    costo: 'pacchetti da circa 100€ a notte a persona, con pensione completa, uscite in barca e trasferimenti da Sandakan inclusi',
    comePrenotare:
      'Direttamente con i lodge di Sukau o Bilit, a pacchetto: non ha senso organizzare i pezzi separatamente, perché lungo il fiume non esistono servizi indipendenti. In alta stagione conviene muoversi con qualche mese di anticipo.',
    cosaPortare:
      '**Un binocolo**, che è la cosa che cambia di più la giornata: si guarda quasi sempre a venti o trenta metri, e senza si perde metà di ciò che la guida indica. Poi repellente ad alta concentrazione per le uscite serali, una giacca leggera antipioggia, e contanti in ringgit, perché lungo il fiume non ci sono bancomat.',
    perChiEAdatta: 'A tutti: si sta seduti in barca. L\'unica fatica sono le sveglie prima dell\'alba e il caldo umido.',
    miaEsperienza:
      'Il Kinabatangan è il posto dove il Borneo mantiene quello che promette e, nello stesso momento, dove si capisce cosa è successo a quest\'isola. Si esce all\'alba con la nebbia ancora sul fiume, il motore quasi spento, e in due ore passano nasiche che saltano tra i rami — quelle scimmie dal naso enorme che esistono solo qui — buceri in coppia, macachi, coccodrilli immobili sulle rive e, con fortuna, un orango selvatico che si muove lentissimo su un albero. Poi la barca svolta in un affluente, la fascia di verde si assottiglia e dietro compaiono le file ordinate delle palme da olio fino all\'orizzonte. È lì che la cosa cambia di segno: gli animali si vedono così facilmente perché sono compressi in una striscia di foresta larga poche centinaia di metri. Non è una riserva ben progettata, è quello che è avanzato. Due consigli concreti: dormire almeno due notti, perché ogni uscita è una lotteria e quattro biglietti valgono più di due, e portare un binocolo.',
    giudizio: 'imperdibile',
    alternative: [
      'La Danum Valley, foresta primaria vera, dove gli animali sono meno visibili proprio perché hanno più spazio',
      'Le Gomantong Caves nelle vicinanze, con l\'uscita serale di milioni di pipistrelli',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Barca in avvicinamento alla riva del fiume Kinabatangan all\'alba con la foresta sullo sfondo',
  },
  {
    slug: 'diving-sipadan',
    paeseSlug: 'borneo',
    destinazioneSlug: 'semporna-sipadan',
    nome: 'Immersioni a Sipadan',
    localita: 'Isola di Sipadan, al largo di Semporna, Sabah',
    cosE:
      'Un pinnacolo corallino che sale da seicento metri di profondità in mezzo al mare, con pareti verticali, banchi di barracuda, centinaia di tartarughe e squali di barriera. L\'accesso è contingentato con permessi giornalieri gestiti da Sabah Parks; sull\'isola non si può dormire da quando le strutture furono rimosse nel 2004.',
    percheFarla:
      'Perché è uno dei pochissimi posti al mondo la cui reputazione da "miglior sito di immersione del pianeta" regge alla prova dei fatti: la densità di vita su quelle pareti non è confrontabile con quasi nient\'altro.',
    durata: 'una giornata di immersioni, dentro un soggiorno di 4-5 notti',
    periodo:
      'da aprile a settembre, con mare calmo e visibilità migliore. Da novembre a febbraio il mare è più mosso e le uscite possono saltare.',
    costo:
      'il permesso si paga in aggiunta al pacchetto diving; ogni permesso consente oggi tre immersioni sull\'isola nella stessa giornata. Il costo complessivo dipende dal resort e dalla durata del soggiorno.',
    comePrenotare:
      'Il punto cruciale: **i permessi non si rilasciano ai privati**. Sabah Parks assegna una quota giornaliera — poco più di duecentocinquanta permessi — ai singoli operatori autorizzati, che la distribuiscono tra i propri ospiti quasi sempre a rotazione, premiando i soggiorni più lunghi. Si prenota quindi un pacchetto di più notti con un resort di Mabul o Kapalai, con sei-dodici mesi di anticipo nei mesi di punta, e il permesso arriva da lì.',
    cosaPortare:
      'Brevetto e libretto immersioni, che vengono controllati; l\'assicurazione subacquea; e la consapevolezza che alcune immersioni hanno correnti serie. Il resto dell\'attrezzatura si noleggia sul posto.',
    perChiEAdatta:
      'A subacquei brevettati con un minimo di esperienza: le pareti scendono a picco e le correnti in alcuni punti sono forti. Per i non brevettati esiste lo snorkeling, ma i permessi vanno in massima parte ai subacquei, quindi non è la scelta su cui costruire il viaggio.',
    miaEsperienza:
      'Sipadan regge la propria fama, e capita di rado di poterlo dire di un posto così celebrato. Si scende lungo una parete che continua nel blu senza fondo visibile, e nel giro di pochi minuti passa un banco di barracuda che si avvita in una spirale larga quanto una casa; le tartarughe sono talmente tante che dopo la quinta si smette di fotografarle. La cosa da capire prima di prenotare, però, è che il permesso governa tutto il viaggio: sono poco più di duecentocinquanta al giorno, non si comprano da privati, li assegna Sabah Parks agli operatori che li distribuiscono a rotazione tra gli ospiti — e la rotazione premia chi resta più a lungo. Prenotare due notti e sperare è il modo più diretto per non immergersi affatto. La sorpresa, per come è andata, è un\'altra: Mabul, che tutti trattano come la semplice base d\'appoggio, è uno dei migliori posti al mondo per il muck diving, e passare quaranta minuti a cercare un cavalluccio pigmeo grande come un\'unghia su una gorgonia è divertente quanto un banco di barracuda.',
    giudizio: 'imperdibile',
    alternative: [
      'Muck diving a Mabul e Kapalai, che vale il viaggio anche senza permesso per Sipadan',
      'Le isole del parco marino di Tunku Abdul Rahman a Kota Kinabalu, per snorkeling facile e senza permessi',
    ],
    tripSlugs: ['borneo-itinerario'],
    imageAlt: 'Tartaruga marina e parete corallina a picco nel sito di immersione di Sipadan, Sabah',
  },
  {
    slug: 'bako-nasiche',
    paeseSlug: 'borneo',
    destinazioneSlug: 'kuching-bako',
    nome: 'Le nasiche del parco di Bako',
    localita: 'Parco nazionale di Bako, Sarawak',
    cosE:
      'Il parco nazionale più antico del Sarawak, raggiungibile solo in barca, con sentieri che attraversano sette tipi di vegetazione diversi in poche migliaia di ettari e scogliere di arenaria sul mare. È il posto più accessibile al mondo per vedere le nasiche, le scimmie dal naso enorme endemiche del Borneo.',
    percheFarla:
      'Perché le nasiche esistono solo su quest\'isola e qui si osservano da pochi metri senza barca e senza fortuna particolare, e perché il parco è una delle escursioni in giornata meglio riuscite di tutto il sud-est asiatico.',
    durata: 'una giornata, meglio con una notte nei chalet del parco',
    periodo:
      'da marzo a ottobre. Gli orari delle barche dipendono dalla marea e non dall\'orologio: con la bassa marea le partenze si spostano o si sospendono, ed è il vincolo che condiziona tutta la giornata.',
    costo: 'ingresso attorno ai 20 ringgit più la barca andata e ritorno, da dividere tra i passeggeri',
    comePrenotare:
      'L\'ingresso si registra al quartier generale del parco. I chalet interni vanno prenotati in anticipo sul portale dei parchi del Sarawak e sono pochi: chi li prende ha accesso ai sentieri all\'alba e alla passeggiata notturna, che è il vantaggio vero.',
    cosaPortare:
      'Acqua in quantità, repellente, scarpe da sentiero e un binocolo. E niente cibo in mano: i macachi dalla coda lunga attorno al quartier generale sono aggressivi e organizzati, e rubano regolarmente.',
    perChiEAdatta: 'A tutti: ci sono sentieri di tutte le lunghezze, dal quarto d\'ora alla giornata intera, e le nasiche si avvistano spesso vicino alle strutture.',
    miaEsperienza:
      'Bako è la gita che rende più di quanto costi, ed è a mezz\'ora da Kuching. Si arriva solo via mare, su una barca che sbarca direttamente sulla spiaggia quando la marea lo consente, e già questo mette nell\'ordine di idee giusto. Le nasiche si incontrano spesso entro la prima ora di sentiero: maschi con quel naso sproporzionato e la pancia gonfia, seduti sui rami a mangiare foglie, che guardano chi passa senza dargli il minimo peso. Sono animali che esistono solo su quest\'isola e vederli da cinque metri, senza barca e senza appostamenti, è più facile qui che in qualsiasi altro posto del Borneo. I macachi vicino al quartier generale sono l\'esatto contrario: aggressivi, abituati e velocissimi, e portare cibo in mano è un errore che si paga subito. Il vincolo da tenere presente è la marea, perché le barche partono in funzione dell\'acqua e non dell\'orario: chi va in giornata senza controllarla rischia di restare bloccato o di tagliare il pomeriggio.',
    giudizio: 'la-rifarei',
    alternative: [
      'Semenggoh per gli oranghi liberi, a mezz\'ora da Kuching, con la stagione che però decide tutto',
      'Una notte in longhouse iban lungo il Batang Ai, per la parte culturale del Sarawak',
    ],
    tripSlugs: [],
    imageAlt: 'Un maschio di nasica su un ramo nel parco nazionale di Bako, Sarawak',
  },
]
