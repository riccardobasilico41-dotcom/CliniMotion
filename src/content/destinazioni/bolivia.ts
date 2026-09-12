import type { Destinazione } from '@/lib/types'

// Paese visitato di persona. I campi miaEsperienza sono bozze scritte da
// Claude nella voce del diario, basate su ciò che è oggettivamente vero di
// ogni posto e non su ricordi reali: vanno riletti e sostituiti con i tuoi.
// Nessun nome di hotel, operatore o ristorante è stato inventato. In Bolivia
// prezzi e soprattutto condizioni di accesso (blocchi stradali, disponibilità
// di contanti) cambiano rapidamente: vanno verificati sul posto.

export const destinazioniBolivia: Destinazione[] = [
  {
    slug: 'la-paz',
    paeseSlug: 'bolivia',
    ordine: 1,
    nome: 'La Paz',
    tipologia: ['città', 'avventura'],
    giorniConsigliati: '3-4 giorni, compresa la giornata sulla Carretera de la Muerte',
    visitataPersonalmente: true,
    introduzione:
      'La sede del governo più alta del mondo, incastrata in un canyon a 3.600 metri con El Alto che la sovrasta a oltre 4.000. Ci si muove con una rete di teleferiche urbane che è insieme trasporto pubblico e miglior punto panoramico della città.',
    percheAndarci:
      'Perché è la base per la Carretera de la Muerte e per il Titicaca, e perché la città stessa — mercati di strada, quartieri verticali, il contrasto tra il centro e El Alto — è una delle più particolari del continente.',
    cosaVedere: [
      'Mi Teleférico, la rete di funivie urbane: la linea rossa e quella gialla danno la vista migliore sulla conca',
      'Il Mercado de las Brujas, il mercato delle streghe, con i rimedi tradizionali aymara',
      'La Valle de la Luna, formazioni di argilla erosa a pochi chilometri dal centro',
      'Il mercato di El Alto (giovedì e domenica), uno dei più grandi del Sud America',
      'Il Nevado Illimani che chiude l\'orizzonte a 6.438 metri',
    ],
    cosaFare: [
      'Scendere la Carretera de la Muerte in mountain bike — vedi la scheda esperienza dedicata',
      'Salire in teleferica all\'ora del tramonto, quando la conca si illumina',
      'Assistere a un incontro di cholitas luchadoras, il wrestling delle donne aymara a El Alto',
      'Escursione al Chacaltaya, l\'ex stazione sciistica più alta del mondo, oggi senza ghiacciaio',
    ],
    doveDormire: 'Sopocachi per i ristoranti e la vita serale, zona San Pedro e centro per i prezzi bassi e la comodità alle agenzie.',
    doveMangiare:
      'A La Paz si mangia per strada meglio che al ristorante: salteñas a metà mattina (è un\'abitudine locale, non una colazione), api con pastel, e le zuppe dei mercati coperti. Nella zona di Sopocachi c\'è l\'offerta più curata della città.',
    comeArrivare:
      'Volo internazionale su El Alto (LPB), uno degli aeroporti più alti del mondo a oltre 4.000 metri: si passa dal livello del mare alla quota massima in poche ore, con effetti che si sentono subito. Via terra, bus da Copacabana (circa 4 ore) o da Cusco passando dal Titicaca.',
    comeSpostarsi: 'Mi Teleférico per gli spostamenti lunghi, taxi radio per il resto. Evitare i taxi non ufficiali, soprattutto la sera.',
    periodoMigliore: 'maggio-ottobre, stagione secca; le notti sono fredde tutto l\'anno',
    costi: 'corsa in teleferica pochi centesimi di euro; la città è tra le capitali più economiche al mondo',
    erroriDaEvitare: [
      'Atterrare a El Alto e programmare qualcosa di impegnativo il giorno stesso: dal livello del mare a 4.000 metri il corpo non si adatta in poche ore',
      'Sottovalutare i blocchi stradali: quando ci sono, possono isolare la città per giorni e far saltare voli e trasferimenti',
      'Girare con oggetti di valore in vista nei mercati affollati',
    ],
    miaEsperienza:
      'Atterrare a El Alto è uno shock fisico che quasi nessuno mette in conto: si scende dall\'aereo a più di quattromila metri e il corpo se ne accorge prima ancora di uscire dal terminal. La Paz è poi la città più strana del continente, costruita dentro una conca con i quartieri poveri in alto e quelli ricchi in basso — l\'opposto di ogni altra città al mondo, e per una ragione precisa: più si scende, più si respira. Le teleferiche urbane sono la cosa da consigliare a chiunque, costano pochi centesimi e danno la vista migliore sulla conca. Il problema vero della Bolivia, però, sono i blocchi stradali: vanno messi in conto nell\'itinerario, non trattati come eventualità remota.',
    esperienzeSlugs: ['carretera-de-la-muerte'],
    tripSlugs: [],
    imageAlt: 'La conca di La Paz vista dall\'alto con il Nevado Illimani sullo sfondo, Bolivia',
  },
  {
    slug: 'salar-de-uyuni',
    paeseSlug: 'bolivia',
    ordine: 2,
    nome: 'Salar de Uyuni e Sud Lípez',
    tipologia: ['natura', 'avventura', 'deserto'],
    giorniConsigliati: '3-4 giorni, il formato del tour classico in 4x4',
    visitataPersonalmente: true,
    introduzione:
      'La distesa di sale più grande del mondo, oltre 10.000 km quadrati a 3.650 metri di quota, e il suo naturale prolungamento verso sud: le lagune colorate, i geyser e i deserti d\'alta quota del Sud Lípez, fino al confine cileno.',
    percheAndarci:
      'Perché non somiglia a nient\'altro, e perché il tour di tre giorni in 4x4 attraversa in sequenza salar, lagune rosse e verdi, geyser a 5.000 metri e terme all\'aperto: una concentrazione di paesaggi che raramente si trova in così poco spazio.',
    cosaVedere: [
      'Il salar vero e proprio, con i poligoni di sale a perdita d\'occhio',
      'Isla Incahuasi, l\'isola di roccia coperta di cactus giganti in mezzo alla distesa bianca',
      'Il cimitero dei treni, alla periferia di Uyuni',
      'La Laguna Colorada, rossa per le alghe, con migliaia di fenicotteri',
      'I geyser Sol de Mañana, a quasi 5.000 metri, e le terme di Polques',
      'La Laguna Verde ai piedi del vulcano Licancabur',
    ],
    cosaFare: [
      'Tour classico di 3 giorni e 2 notti in 4x4, con rientro a Uyuni o proseguimento verso San Pedro de Atacama in Cile',
      'Le foto prospettiche sul salar, dove la mancanza di riferimenti annulla la percezione della distanza',
      'Notte in un hotel di sale, con pareti e arredi ricavati dai blocchi del salar',
      'Alba sul salar, il momento in cui la luce fa la differenza vera',
    ],
    doveDormire:
      'Uyuni come base di partenza; durante il tour si dorme in alloggi molto essenziali nel Sud Lípez, spesso senza riscaldamento a oltre 4.000 metri.',
    doveMangiare: 'Pasti inclusi nel tour, preparati dall\'autista-cuoco.',
    comeArrivare:
      'Volo da La Paz a Uyuni (circa un\'ora, la soluzione più comoda) oppure bus notturno da La Paz, Sucre o Potosí. Molti arrivano anche da San Pedro de Atacama, in Cile, facendo il tour in senso inverso.',
    comeSpostarsi: 'Solo in 4x4 con autista, nell\'ambito del tour organizzato: non è una zona da girare in autonomia.',
    periodoMigliore:
      'Due stagioni, due esperienze diverse. Da maggio a ottobre il salar è asciutto e completamente percorribile, con cieli limpidi e notti gelide. Da gennaio a marzo un velo d\'acqua lo trasforma nello specchio gigante delle fotografie più famose, ma alcune zone — Isla Incahuasi compresa — possono diventare inaccessibili.',
    costi: 'tour di 3 giorni indicativamente 150-250$ a persona secondo l\'operatore, con ingresso al parco Eduardo Avaroa a parte',
    erroriDaEvitare: [
      'Scegliere l\'operatore solo sul prezzo: i mezzi e la manutenzione fanno una differenza reale su piste isolate a 4.500 metri, dove un guasto è un problema serio',
      'Andare a gennaio-marzo aspettandosi di vedere tutto: con l\'acqua l\'effetto specchio è spettacolare ma diverse tappe saltano',
      'Sottovalutare il freddo notturno: negli alloggi del Sud Lípez si dorme sotto zero, e il sacco a pelo non sempre è incluso',
      'Arrivare a Uyuni senza essersi acclimatati: il tour sale fino a quasi 5.000 metri il secondo giorno',
    ],
    miaEsperienza:
      'È l\'unico posto in cui si perde davvero il senso della distanza: senza riferimenti non si capisce se una montagna è a cinque chilometri o a cinquanta, ed è per questo che funzionano le foto prospettiche. Ma la parte che resta non è il primo giorno sul sale, è il secondo, nel Sud Lípez: lagune rosse piene di fenicotteri oltre i quattromila metri, geyser che sbuffano all\'alba con venti gradi sotto zero, alloggi dove si dorme vestiti perché non c\'è riscaldamento. È un tour molto più duro di quanto le fotografie lascino immaginare, e l\'unica voce su cui non conviene risparmiare è l\'operatore: lì in mezzo un 4x4 che si rompe è un problema serio.',
    esperienzeSlugs: ['tour-uyuni-sud-lipez'],
    tripSlugs: [],
    imageAlt: 'Distesa di sale del Salar de Uyuni con i poligoni bianchi a perdita d\'occhio, Bolivia',
  },
  {
    slug: 'titicaca-boliviano',
    paeseSlug: 'bolivia',
    ordine: 3,
    nome: 'Copacabana e Isla del Sol',
    tipologia: ['natura', 'cultura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il lato boliviano del Titicaca: Copacabana, paese di pellegrinaggio affacciato sul lago, e l\'Isla del Sol, dove secondo la tradizione inca nacquero il sole e il primo Inca. È anche la via naturale per entrare in Bolivia dal Perù.',
    percheAndarci:
      'Perché l\'Isla del Sol è più bella e meno costruita delle isole peruviane, con sentieri panoramici tra rovine inca e terrazzamenti, e perché il passaggio di frontiera da Puno è tra i più semplici del continente.',
    cosaVedere: [
      'La Basilica di Copacabana, meta di pellegrinaggio con la Virgen de la Candelaria',
      'Il Cerro Calvario, la collina sopra il paese, per il tramonto sul lago',
      'Le rovine di Chincana e la Roca Sagrada, sull\'estremità nord dell\'Isla del Sol',
      'Il sentiero che percorre la dorsale dell\'isola da nord a sud',
      'Le rovine di Tiwanaku, sulla strada verso La Paz, capitale di una civiltà precedente agli Inca',
    ],
    cosaFare: [
      'Dormire una notte sull\'Isla del Sol, invece di visitarla in giornata: al tramonto e all\'alba resta quasi deserta',
      'Camminare lungo la dorsale dell\'isola, tra terrazzamenti e rovine',
      'Attraversare il confine da Puno via Kasani/Yunguyo, con i timbri di uscita e ingresso da fare a piedi',
    ],
    doveDormire: 'Copacabana per la comodità dei collegamenti; l\'Isla del Sol per la notte più suggestiva, in strutture semplici e senza riscaldamento.',
    doveMangiare: 'Trucha (trota del lago) praticamente ovunque, sul lungolago di Copacabana.',
    comeArrivare:
      'Bus da Puno (Perù) con passaggio alla frontiera di Kasani, circa 3-4 ore in totale; da La Paz circa 4 ore, con la traversata dello stretto di Tiquina su chiatta.',
    comeSpostarsi: 'Barche collettive da Copacabana per l\'Isla del Sol; sull\'isola non esistono veicoli, si cammina e basta, sempre in salita.',
    periodoMigliore: 'maggio-ottobre per il sole; a 3.800 metri le notti sono fredde tutto l\'anno',
    costi: 'molto economico: barca per l\'isola pochi dollari, più piccole tasse d\'ingresso riscosse dalle comunità locali',
    erroriDaEvitare: [
      'Programmare l\'Isla del Sol in giornata da Copacabana: gli orari delle barche lasciano poche ore utili e si perde la parte migliore',
      'Dare per scontato l\'accesso a tutta l\'isola: tensioni tra le comunità hanno a tratti limitato il passaggio verso la parte nord, da verificare sul posto',
      'Sottovalutare la quota: si cammina in salita a quasi 4.000 metri',
    ],
    miaEsperienza:
      'Il lato boliviano del lago è più bello di quello peruviano, e non di poco. Copacabana è un paese di pellegrinaggio un po\' scalcinato ma con un\'anima, e l\'Isla del Sol batte le isole di Puno senza discussione: terrazzamenti, sentieri in pietra, nessuna macchina e nessuna organizzazione turistica pesante. Dormirci una notte cambia tutto, perché le barche in giornata arrivano e ripartono tutte insieme e appena se ne vanno l\'isola torna silenziosa. Va solo messo in conto che si cammina sempre in salita a quasi quattromila metri, con lo zaino: non è una passeggiata.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Terrazzamenti e sentieri dell\'Isla del Sol sul lago Titicaca, Bolivia',
  },
  {
    slug: 'sucre-potosi',
    paeseSlug: 'bolivia',
    ordine: 4,
    nome: 'Sucre e Potosí',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '3-4 giorni per entrambe',
    visitataPersonalmente: true,
    introduzione:
      'Sucre è la capitale costituzionale, città coloniale bianca Patrimonio UNESCO a 2.800 metri — la quota più gentile della Bolivia. Potosí, a 4.000 metri, è la città che con l\'argento del suo Cerro Rico ha finanziato per secoli l\'impero spagnolo, al costo di un numero enorme di vite.',
    percheAndarci:
      'Per il contrasto: Sucre è la Bolivia più dolce, con il clima migliore e le migliori scuole di spagnolo del paese; Potosí è la sua storia più dura, ancora visibile ogni giorno nelle gallerie in attività.',
    cosaVedere: [
      'Il centro coloniale di Sucre, con la Casa de la Libertad dove fu firmata l\'indipendenza',
      'Il Parque Cretácico di Sucre, una parete verticale con migliaia di impronte di dinosauro',
      'La Casa Nacional de la Moneda a Potosí, l\'antica zecca coloniale',
      'Il Cerro Rico, la montagna d\'argento che domina Potosí',
      'Le lagune e i villaggi tessili intorno a Sucre, come Tarabuco con il suo mercato domenicale',
    ],
    cosaFare: [
      'Corso di spagnolo a Sucre, tra i più economici e apprezzati del Sud America',
      'Visita alle miniere cooperative del Cerro Rico — un\'esperienza forte e discussa, vedi la scheda esperienza dedicata',
      'Mercato di Tarabuco la domenica, per i tessuti yampara',
    ],
    doveDormire: 'Centro storico di Sucre, la città più piacevole in cui fermarsi qualche giorno in tutta la Bolivia.',
    doveMangiare:
      'Sucre ha la migliore qualità della vita del paese e si mangia bene e a pochissimo nei mercati coperti, dove il banco dei succhi di frutta è un\'istituzione. A Potosí l\'offerta è più essenziale: zuppe sostanziose, adatte ai quattromila metri.',
    comeArrivare: 'Volo da La Paz a Sucre (circa un\'ora) o bus notturno; tra Sucre e Potosí circa 3 ore di strada.',
    comeSpostarsi: 'Entrambe le città si girano a piedi; bus frequenti tra le due.',
    periodoMigliore: 'maggio-ottobre; Sucre ha il clima più mite del paese grazie alla quota più bassa',
    costi: 'tra le città più economiche del continente, corsi di lingua compresi',
    erroriDaEvitare: [
      'Passare da Potosí senza mettere in conto la quota: a 4.000 metri anche camminare in centro è faticoso',
      'Trattare la visita alle miniere come un\'attrazione turistica qualunque: è un luogo di lavoro reale, con condizioni durissime',
    ],
    miaEsperienza:
      'Sucre è il posto dove viene voglia di fermarsi più a lungo: duemilaottocento metri invece di quattromila, clima mite, una città bianca e ordinata dove finalmente si respira e si dorme. Potosí è l\'opposto, e non solo per la quota. Entrare nelle gallerie del Cerro Rico è l\'esperienza più pesante di tutto il viaggio — non pericolosa in sé, ma difficile da digerire: si cammina piegati in cunicoli caldi e polverosi accanto a uomini che ci passano dieci ore al giorno con strumenti di un altro secolo. Non è un\'attrazione e non andrebbe trattata come tale. Se ne esce zitti, e forse è giusto così.',
    esperienzeSlugs: ['miniere-cerro-rico'],
    tripSlugs: [],
    imageAlt: 'Il centro coloniale bianco di Sucre con la cattedrale, Bolivia',
  },
  {
    slug: 'rurrenabaque-madidi',
    paeseSlug: 'bolivia',
    ordine: 5,
    nome: 'Rurrenabaque e il Madidi',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '4-5 giorni, per fare sia pampas sia giungla',
    visitataPersonalmente: true,
    introduzione:
      'L\'Amazzonia boliviana, molto meno battuta e molto più economica di quella peruviana o brasiliana. Da Rurrenabaque si parte in due direzioni opposte: le pampas del Yacuma, praterie allagate dove la fauna si vede facilmente, o la foresta primaria del Parco Nazionale Madidi.',
    percheAndarci:
      'Perché è probabilmente il modo più economico al mondo di entrare in Amazzonia, e perché il Madidi è una delle aree protette con la maggiore biodiversità del pianeta.',
    cosaVedere: [
      'I caimani, i capibara e le scimmie lungo il Rio Yacuma, nelle pampas',
      'I delfini rosa di fiume, che nelle pampas si avvicinano alle barche',
      'La foresta primaria del Madidi, con alberi enormi e fauna più difficile da avvistare ma più autentica',
      'I tramonti sulle praterie allagate, il momento migliore della giornata',
    ],
    cosaFare: [
      'Tour di 3 giorni nelle pampas: navigazione, avvistamento fauna, pesca ai piranha e ricerca notturna dei caimani',
      'Tour nella giungla del Madidi, con camminate guidate e notti in lodge nella foresta',
      'Nuotare con i delfini rosa dove le guide lo consentono',
    ],
    confronti: [
      {
        titolo: 'Pampas o giungla? Le due Amazzonie di Rurrenabaque',
        introduzione:
          'Da Rurrenabaque si sceglie tra due ambienti completamente diversi, e chi ha tempo per uno solo spesso sbaglia scelta. Non è questione di qualità ma di cosa si vuole vedere.',
        opzioni: [
          {
            nome: 'Pampas del Yacuma',
            sintesi: 'Praterie allagate percorse in barca lungo il fiume, con la fauna concentrata sulle rive e ben visibile.',
            costo: 'indicativamente 100-200$ per 3 giorni, tutto incluso',
            durata: '3 giorni, 2 notti',
            pro: [
              'Avvistamenti garantiti e ravvicinati: caimani, capibara, scimmie, delfini rosa, centinaia di uccelli',
              'Meno faticoso: si sta quasi sempre in barca',
              'Il più economico dei due',
            ],
            contro: [
              'Non è la foresta amazzonica "da immaginario": è savana allagata',
              'Zanzare in quantità notevole',
              'Alcune pratiche degli operatori più economici con caimani e anaconda sono discutibili sul piano etico',
            ],
            perChi: 'Chi vuole vedere animali, e vederli con certezza.',
          },
          {
            nome: 'Giungla del Madidi',
            sintesi: 'Foresta primaria all\'interno del parco nazionale, con camminate guidate e notti in lodge o campo tendato.',
            costo: 'indicativamente 150-300$ per 3-4 giorni',
            durata: '3-4 giorni',
            pro: [
              'È l\'Amazzonia vera, con alberi enormi e una biodiversità altissima',
              'Componente culturale forte se si sceglie un lodge gestito dalle comunità indigene, come Chalalán o San Miguel del Bala',
              'Molto meno battuta delle pampas',
            ],
            contro: [
              'La fauna è molto più difficile da avvistare: nella foresta densa si sente più di quanto si veda',
              'Più faticoso, con camminate nel caldo umido',
              'Costa di più',
            ],
            perChi: 'Chi vuole capire com\'è fatta davvero la foresta, accettando di vedere meno animali.',
          },
        ],
        raccomandazione:
          'Con quattro o cinque giorni si fanno entrambe, ed è la soluzione migliore: pampas per la fauna, Madidi per la foresta. Dovendo scegliere, chi viene in Amazzonia per gli animali prenda le pampas, chi ci viene per l\'ambiente scelga il Madidi — e in entrambi i casi verifichi che l\'operatore non maneggi la fauna per intrattenere i clienti.',
      },
    ],
    doveDormire: 'Rurrenabaque come base; durante i tour si dorme in lodge lungo il fiume, essenziali ma con zanzariere.',
    doveMangiare: 'Pasti inclusi nei tour.',
    comeArrivare:
      'Volo da La Paz a Rurrenabaque (circa 45 minuti, su piccoli aerei, spesso cancellati per meteo) oppure bus di 18-20 ore lungo una strada di montagna impegnativa.',
    comeSpostarsi: 'Solo in barca e a piedi, nell\'ambito dei tour organizzati.',
    periodoMigliore: 'maggio-ottobre, stagione secca: meno zanzare, strade e piste praticabili e fauna concentrata lungo i fiumi',
    costi: 'tra le esperienze amazzoniche più economiche al mondo',
    erroriDaEvitare: [
      'Contare sul volo di rientro senza margine: i voli per Rurrenabaque saltano spesso per il meteo, e l\'alternativa è un bus di quasi venti ore',
      'Scegliere l\'operatore più economico senza informarsi: nelle pampas alcune pratiche con caimani e anaconda sono dannose per gli animali',
      'Andarci senza repellente serio e senza vaccinazione contro la febbre gialla',
    ],
    miaEsperienza:
      'Le pampas sono il posto dove si vedono più animali con meno sforzo di qualsiasi altro: si sta in barca e sfilano caimani, capibara, scimmie e centinaia di uccelli, con i delfini rosa che ogni tanto emergono accanto allo scafo. È anche il posto dove si vedono le pratiche più discutibili: certe guide tirano fuori i caimani dall\'acqua o vanno a cercare le anaconda per farle toccare ai clienti, e non è una cosa da assecondare — basta dire di no e chiedere di restare a guardare. Le zanzare, poi, sono di un altro livello: quello che serve non è un repellente, è una corazza.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Barca sul Rio Yacuma tra le praterie allagate delle pampas boliviane al tramonto',
  },
]
