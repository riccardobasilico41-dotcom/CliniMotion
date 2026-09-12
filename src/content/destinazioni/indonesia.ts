import type { Destinazione } from '@/lib/types'

// Otto isole visitate di persona, ma senza ancora un viaggio-diario collegato
// (src/content/viaggi) né foto caricate: tripSlugs resta vuoto e le immagini
// usano il fallback grafico, invece di ricorrere a foto stock.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni isola (fatica, stagione,
// affollamento, logistica) e non su ricordi reali: vanno riletti e sostituiti
// con i tuoi. Nessun nome di hotel, ristorante o operatore è stato inventato.

export const destinazioniIndonesia: Destinazione[] = [
  {
    slug: 'sumatra',
    paeseSlug: 'indonesia',
    ordine: 1,
    nome: 'Sumatra',
    tipologia: ['natura', 'avventura', 'trekking'],
    giorniConsigliati: '7-10 giorni per coprire il nord (Bukit Lawang, Lago Toba, Berastagi)',
    visitataPersonalmente: true,
    introduzione:
      'La porta d\'accesso più selvaggia dell\'arcipelago: giungla del Gunung Leuser con gli ultimi oranghi selvatici del pianeta, il più grande lago vulcanico al mondo e la cultura Batak sull\'isola di Samosir.',
    percheAndarci:
      'È l\'isola dove il trekking nella giungla è più autentico e meno battuto rispetto ad altre mete del sud-est asiatico, con l\'incontro con gli oranghi come momento clou.',
    cosaVedere: [
      'Il Parco Nazionale del Gunung Leuser a Bukit Lawang, uno degli ultimi habitat degli oranghi di Sumatra',
      'Il Lago Toba, il più grande lago vulcanico al mondo, con l\'isola di Samosir al centro',
      'I villaggi Batak di Samosir, con le case tradizionali dal tetto a sella e le tombe di pietra',
      'I vulcani Sibayak e Sinabung nella zona di Berastagi',
    ],
    cosaFare: [
      'Trekking di 1-3 giorni nella giungla di Bukit Lawang per avvistare oranghi selvatici (solo con guida certificata)',
      'Giro in barca sul Lago Toba e giornata in scooter sull\'isola di Samosir',
      'Bagno nelle sorgenti calde ai piedi del Sibayak dopo un trekking vulcanico',
      'Immersione nella cultura Batak: cerimonie, artigianato, danze Sigale-gale',
    ],
    doveDormire:
      'Guesthouse lungo il fiume Bohorok a Bukit Lawang, comode per partire presto per il trekking; homestay sull\'isola di Samosir per il Lago Toba.',
    doveMangiare:
      'Si mangia semplice e quasi ovunque bene: nasi padang — vetrinette con dieci o quindici piatti già pronti, si indica quello che si vuole e si paga solo ciò che si tocca — è l\'istituzione locale ed è nato proprio qui, a Sumatra occidentale. Nella zona del Lago Toba compare il maiale, raro nel resto dell\'Indonesia musulmana, perché i Batak sono cristiani. Il caffè di Sumatra, bevuto nei warung sulla strada per Berastagi, è tra i migliori del paese e costa pochi centesimi.',
    comeArrivare: 'Volo su Medan (Kualanamu International, KNO) da Giacarta o da Kuala Lumpur/Singapore.',
    comeSpostarsi: 'Auto privata o bus tra Medan, Bukit Lawang, Berastagi e Lago Toba; traghetto per l\'isola di Samosir.',
    periodoMigliore: 'giugno-settembre, stagione più secca per il trekking',
    costi: 'tra le isole più economiche dell\'arcipelago, soprattutto per alloggi e trekking guidati',
    erroriDaEvitare: [
      'Affidarsi a guide non certificate per il trekking oranghi: il contatto ravvicinato non regolamentato è pericoloso sia per i visitatori sia per gli animali',
      'Sottovalutare i tempi di spostamento su strade di montagna spesso dissestate',
    ],
    confronti: [
      {
        titolo: 'Oranghi a Sumatra o in Borneo?',
        introduzione:
          'Gli oranghi selvatici esistono solo su queste due isole, e sono specie diverse: quello di Sumatra (in pericolo critico, poche migliaia di individui) e quello del Borneo. Chi ha fatto Bukit Lawang e pensa al Borneo — o viceversa — si sta ponendo la domanda giusta, perché non è la stessa esperienza.',
        opzioni: [
          {
            nome: 'Bukit Lawang, Sumatra',
            sintesi: 'Trekking a piedi nella giungla del Gunung Leuser, cercando gli animali invece di aspettarli.',
            costo: 'il più economico di tutti: trekking guidati di 1-3 giorni per poche decine di euro, alloggi semplici sul fiume',
            durata: '2-3 giorni',
            pro: [
              'Si cammina dentro la foresta: è un incontro attivo, non una piattaforma o una barca',
              'Probabilità alte, perché nella zona vivono ex individui riabilitati ormai selvatici',
              'Costi bassissimi, un quarto o meno di qualsiasi opzione del Borneo',
              'Il Leuser è l\'ultimo ecosistema al mondo dove oranghi, tigri, rinoceronti ed elefanti convivono',
            ],
            contro: [
              'Il nodo etico è reale: alcune guide attirano gli animali con il cibo per garantire l\'avvistamento, e va rifiutato esplicitamente in fase di prenotazione',
              'Fisicamente impegnativo: fango, radici, caldo e umidità alti',
              'Regolamentazione meno rigida che in Malesia: la qualità dipende molto dalla guida',
              'Oltre agli oranghi, la zona offre meno varietà di fauna visibile',
            ],
            perChi: 'Chi vuole cercarli camminando, ha un budget contenuto e sceglie l\'operatore con attenzione.',
          },
          {
            nome: 'Sabah, Borneo malese',
            sintesi: 'Il sistema Sepilok più Kinabatangan: centro di riabilitazione con poppate a orario e poi crociere sul fiume per gli avvistamenti selvatici.',
            costo: 'molto più alto: i lodge sul Kinabatangan si pagano a pacchetto, da circa 100€ a notte',
            durata: '4-5 giorni per fare entrambi con senso',
            pro: [
              'A Sepilok l\'incontro ravvicinato è ragionevolmente garantito in quasi ogni stagione',
              'Sul Kinabatangan gli oranghi sono selvatici e arrivano con tutto il resto: nasiche, elefanti pigmei, coccodrilli, buceri',
              'Standard di gestione e regolamentazione più alti, con pratiche di alimentazione dichiarate',
              'Nella stessa isola ci sono la foresta primaria della Danum Valley e Sipadan',
            ],
            contro: [
              'Si guarda da una piattaforma o da una barca a venti-trenta metri: è meno diretto',
              'Costa molto di più, e i trasferimenti interni sono lunghi',
              'A Sepilok gli animali sono semi-selvatici e abituati all\'uomo',
            ],
            perChi: 'Chi vuole vedere anche il resto della fauna del Borneo e accetta un budget più alto in cambio di maggiore prevedibilità.',
          },
        ],
        raccomandazione:
          'Per il solo incontro con gli oranghi, Sumatra dà più per molto meno: si cammina, si cerca, e costa una frazione. Il Borneo si sceglie quando la lista è più lunga — nasiche, elefanti pigmei, foresta primaria, Sipadan — e gli oranghi sono uno dei motivi, non l\'unico. Chi ha già fatto Bukit Lawang non attraversi mezzo sud-est asiatico per rivederli: vada in Borneo per tutto il resto, e li rivedrà comunque.',
      },
    ],
    miaEsperienza:
      'È l\'isola che quasi nessuno mette in itinerario, e sbaglia. Il trekking a Bukit Lawang non è una passeggiata nel verde: si sale nel fango aggrappandosi alle radici, fa un caldo che toglie il respiro, e dopo tre ore senza vedere niente viene il dubbio di aver buttato una giornata. Poi un orango scende su un ramo a pochi metri, guarda per qualche secondo e riprende a mangiare, e quel dubbio sparisce. Va detta anche la parte scomoda: qualche guida attira gli animali col cibo per garantire l\'avvistamento, ed è una pratica da rifiutare esplicitamente al momento della prenotazione. Il Lago Toba, dopo, funziona come decompressione — grande come una provincia, silenzioso, con un ritmo che rallenta da solo.',
    esperienzeSlugs: ['trekking-oranghi-bukit-lawang'],
    tripSlugs: [],
    imageAlt: 'Orango di Sumatra tra i rami della giungla del Gunung Leuser',
  },
  {
    slug: 'giava',
    paeseSlug: 'indonesia',
    ordine: 2,
    nome: 'Giava',
    tipologia: ['cultura', 'natura', 'vulcani'],
    giorniConsigliati: '6-8 giorni tra Yogyakarta, Bromo e Ijen',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più popolosa dell\'Indonesia, cuore culturale del paese con i templi buddisti e induisti più imponenti del sud-est asiatico e due dei vulcani più spettacolari da vedere all\'alba.',
    percheAndarci:
      'Concentra in poche centinaia di chilometri i templi di Borobudur e Prambanan, l\'alba sul cratere del Bromo e il fuoco blu dell\'Ijen — tre esperienze molto diverse tra loro.',
    cosaVedere: [
      'Borobudur, il tempio buddista più grande del mondo, all\'alba',
      'Prambanan, il complesso di templi induisti più grande dell\'Indonesia',
      'Il Gunung Bromo con il suo cratere fumante circondato dal Mare di Sabbia',
      'Il Kawah Ijen, con il lago di acido solforico turchese e le fiamme blu notturne',
    ],
    cosaFare: [
      'Alba al Bromo in jeep 4x4 dal punto panoramico del Monte Penanjakan',
      'Trekking notturno al cratere dell\'Ijen per vedere il fenomeno del "fuoco blu" e i minatori di zolfo al lavoro',
      'Giro dei templi di Yogyakarta, base ideale per Borobudur e Prambanan',
      'Corso di batik o visita a un laboratorio tradizionale a Yogyakarta',
    ],
    doveDormire:
      'Yogyakarta come base per Borobudur e Prambanan, con la zona di Prawirotaman più tranquilla di Malioboro; per Bromo si dorme a Cemoro Lawang, sul bordo del cratere, e per l\'Ijen a Banyuwangi o nelle guesthouse di Licin.',
    doveMangiare:
      'Yogyakarta è il posto dove provare il gudeg, lo stufato dolce di jackfruit che è il piatto identitario della città e divide chi lo assaggia. Per il resto la strada batte i ristoranti: nasi goreng e mie goreng dai carretti serali, sate ayam, e il tempeh — inventato proprio a Giava — fritto e mangiato come spuntino. Attorno a Bromo e all\'Ijen l\'offerta è minima e i pasti si fanno in guesthouse: non è il momento del viaggio in cui si mangia bene.',
    comeArrivare:
      'Volo su Giacarta (CGK), hub internazionale del paese, oppure direttamente su Yogyakarta o Surabaya (punto di partenza per Bromo/Ijen).',
    comeSpostarsi:
      'Treno tra le città principali (rete efficiente Giacarta-Yogyakarta-Surabaya), auto con autista per le escursioni a Bromo e Ijen.',
    periodoMigliore: 'maggio-settembre, cieli più tersi per l\'alba al Bromo',
    costi: 'nella media dell\'arcipelago; i tour organizzati per Bromo/Ijen hanno un costo fisso indipendente dalla stagione',
    erroriDaEvitare: [
      'Salire al Kawah Ijen senza maschera antigas: i fumi di zolfo sono realmente pericolosi',
      'Sottovalutare il traffico di Giacarta nella pianificazione degli spostamenti',
    ],
    miaEsperienza:
      'Giava è la parte di Indonesia che fa meno vacanza e lascia il ricordo più netto. L\'Ijen soprattutto: si parte all\'una di notte, si sale al buio con la maschera antigas addosso, e quando si scende nel cratere le fiamme blu sono più piccole di come appaiono nelle foto — è tutto il resto a essere enorme. Perché accanto passano i minatori con ceste di zolfo da ottanta chili sulle spalle, scalzi o quasi, e il turismo lì dentro assume un peso diverso. Al Bromo succede l\'opposto: l\'alba dal Penanjakan è spettacolare ma è anche un parcheggio con centinaia di jeep e file di persone col telefono alzato. Vale comunque, a patto di saperlo prima. Borobudur all\'alba è una delle poche cose che regge il proprio mito, ma il biglietto per salire sulla struttura è a numero chiuso e si esaurisce con largo anticipo.',
    esperienzeSlugs: ['alba-bromo-jeep'],
    tripSlugs: [],
    imageAlt: 'Alba sul cratere fumante del Gunung Bromo circondato dal Mare di Sabbia, Giava',
  },
  {
    slug: 'bali',
    paeseSlug: 'indonesia',
    ordine: 3,
    nome: 'Bali',
    tipologia: ['mare', 'cultura', 'nightlife'],
    giorniConsigliati: '7-10 giorni per coprire Ubud, il sud e almeno una delle isole vicine',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più conosciuta dell\'arcipelago: risaie a terrazza, templi a picco sul mare, spiagge da surf e una scena nightlife/wellness tra le più sviluppate del sud-est asiatico.',
    percheAndarci:
      'Concentra in poco spazio anime molto diverse — la calma culturale di Ubud, il surf e la vita notturna del sud, i panorami vertiginosi di Uluwatu e Nusa Penida a poche ore di barca.',
    cosaVedere: [
      'Le risaie a terrazza di Tegalalang e la foresta delle scimmie a Ubud',
      'Il tempio di Uluwatu, a picco su una scogliera a strapiombo sul mare',
      'Tanah Lot, il tempio su uno scoglio circondato dalla marea',
      'Kelingking Beach e Angel\'s Billabong a Nusa Penida',
    ],
    cosaFare: [
      'Sunrise trekking sul vulcano Gunung Batur',
      'Giornata (o più) alle isole Nusa Penida per Kelingking Beach e i punti snorkeling con le manta — vedi la scheda esperienza dedicata',
      'Surf a Canggu o Uluwatu, per tutti i livelli',
      'Danza Kecak al tramonto al tempio di Uluwatu',
      'Giro in scooter tra le risaie dell\'entroterra di Ubud',
    ],
    doveDormire:
      'Ubud per la parte culturale e le risaie, Canggu per il surf e la vita serale, Uluwatu per le scogliere e la calma relativa, Sanur o Nusa Dua per un ritmo più tranquillo e familiare. Dormire una notte a Nusa Penida evita la traversata doppia in giornata.',
    doveMangiare:
      'L\'errore è mangiare solo nei caffè per stranieri, che sono ovunque e ottimi ma raccontano poco. Il babi guling — maialino da latte allo spiedo — è il piatto balinese per eccellenza e si trova nei locali specializzati che aprono a pranzo e chiudono quando finiscono; il bebek betutu, l\'anatra cotta per ore nelle spezie, va spesso ordinato il giorno prima. Nei warung di quartiere si mangia con pochi euro, e la qualità non c\'entra niente col prezzo.',
    comeArrivare: 'Volo su Denpasar (DPS), il principale scalo internazionale dell\'isola.',
    comeSpostarsi:
      'Scooter a noleggio (patente internazionale consigliata, controlli frequenti) o autista privato/Grab per gli spostamenti più lunghi.',
    periodoMigliore: 'aprile-ottobre, stagione secca',
    costi: 'molto variabile: tra le mete indonesiane con più offerta sia economica sia di fascia alta',
    erroriDaEvitare: [
      'Noleggiare uno scooter senza patente internazionale: i controlli sono frequenti e le multe salate',
      'Sottovalutare il traffico tra Canggu e Seminyak nelle ore di punta',
      'Non prenotare in anticipo la barca per Nusa Penida in alta stagione',
    ],
    miaEsperienza:
      'Bali è due isole diverse a seconda di dove si dorme, ed è il motivo per cui riceve giudizi opposti. Il sud tra Canggu e Seminyak è cemento, traffico e locali pensati per chi arriva da fuori: ci si può divertire, ma non è l\'Indonesia. Bastano venti chilometri verso l\'interno e le offerte di fiori davanti alle case ricompaiono ogni mattina, i templi sono in uso e non in mostra, e l\'isola torna quella che si veniva a cercare. La cosa che resta più impressa non è una risaia né una spiaggia: è la danza Kecak a Uluwatu al tramonto, settanta uomini seduti in cerchio che fanno tutta la musica con la voce. Nusa Penida invece è ormai vittima del proprio successo — Kelingking a metà giornata è una coda di persone su un sentiero ripido — e conviene essere sulla prima barca del mattino.',
    esperienzeSlugs: ['giornata-nusa-penida'],
    tripSlugs: [],
    imageAlt: 'Risaie a terrazza verdi di Tegalalang vicino a Ubud, Bali',
  },
  {
    slug: 'sulawesi',
    paeseSlug: 'indonesia',
    ordine: 4,
    nome: 'Sulawesi',
    tipologia: ['cultura', 'natura', 'diving'],
    giorniConsigliati: '7-9 giorni tra Tana Toraja e Bunaken',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola dalla forma unica, divisa tra le tradizioni funerarie e i villaggi di montagna di Tana Toraja e i reef ricchissimi del Bunaken National Park, all\'estremo nord.',
    percheAndarci:
      'Offre due esperienze quasi opposte: l\'immersione in una cultura che tratta la morte come un evento sociale e non un tabù, e uno dei parchi marini più belli del sud-est asiatico.',
    cosaVedere: [
      'I villaggi tongkonan di Tana Toraja, con le case dal tetto a barca',
      'Le tombe scavate nella roccia e le "tau tau", le effigi lignee dei defunti',
      'Il reef del Bunaken National Park, con pareti coralline verticali',
      'Makassar e il forte olandese di Fort Rotterdam',
    ],
    cosaFare: [
      'Assistere, con una guida locale che spieghi l\'etichetta, a una cerimonia funebre Toraja se capita nel periodo giusto',
      'Trekking tra i villaggi di montagna intorno a Rantepao',
      'Diving o snorkeling nel Bunaken National Park — vedi la scheda esperienza dedicata',
    ],
    doveDormire:
      'Rantepao è la base naturale per tutta Tana Toraja, con guesthouse semplici in centro; per Bunaken si sceglie tra i dive resort sull\'isola stessa, più comodi per le immersioni all\'alba, e Manado sulla terraferma, più economica ma con un\'ora di barca ogni giorno.',
    doveMangiare:
      'Sulawesi ha la cucina più piccante dell\'arcipelago, soprattutto nel nord attorno a Manado: il piatto da conoscere è il rica-rica, a base di peperoncino in quantità che non si negoziano. A Makassar si mangia il coto makassar, zuppa di manzo servita a colazione, e il pesce alla griglia sul lungomare la sera. In Tana Toraja compaiono maiale e bufalo, perché la zona è cristiana: il pa\'piong, carne cotta dentro un tubo di bambù, va ordinato con ore di anticipo.',
    comeArrivare:
      'Volo su Makassar (hub principale), poi bus o volo interno per Rantepao (Tana Toraja) o per Manado (base per Bunaken).',
    comeSpostarsi: 'Bus o auto con autista per Tana Toraja; barca dal molo di Manado per Bunaken.',
    periodoMigliore: 'maggio-ottobre',
    costi: 'nella media, più alto per i pacchetti diving a Bunaken',
    erroriDaEvitare: [
      'Partecipare a cerimonie funebri senza una guida che spieghi l\'etichetta: sono eventi privati, aperti ai visitatori solo con certe regole di rispetto',
    ],
    miaEsperienza:
      'Tana Toraja è la cosa più diversa vista in Indonesia, e non è un posto da cartolina. Un funerale toraja dura giorni, ospita centinaia di persone, prevede il sacrificio di bufali davanti a tutti e non ha niente della sobrietà cui siamo abituati: è una festa, costosissima, per cui le famiglie risparmiano anni. Assistervi da estranei è possibile — si porta un regalo, di solito zucchero o sigarette, e si sta dove indica la guida — ma richiede la disponibilità a vedere cose che colpiscono. Bunaken poi è l\'altra faccia: pareti coralline che scendono a picco per centinaia di metri, dove ci si gira sulla schiena e sotto non c\'è più fondo. Tra le due, quella che ha cambiato qualcosa è Toraja.',
    esperienzeSlugs: ['diving-bunaken-national-park'],
    tripSlugs: [],
    imageAlt: 'Case tradizionali tongkonan dal tetto a barca a Tana Toraja, Sulawesi',
  },
  {
    slug: 'lombok-gili',
    paeseSlug: 'indonesia',
    ordine: 5,
    nome: 'Lombok e Gili',
    tipologia: ['mare', 'trekking', 'isole'],
    giorniConsigliati: '6-8 giorni, di cui 2-3 per il trekking al Rinjani se incluso',
    visitataPersonalmente: true,
    introduzione:
      'La vicina meno affollata di Bali: le tre isole Gili senza veicoli a motore, il vulcano Rinjani (il secondo più alto dell\'Indonesia) e spiagge del sud ancora poco battute.',
    percheAndarci:
      'Un ritmo più lento rispetto a Bali, con il trekking al Rinjani come sfida fisica principale e le Gili come contraltare rilassato via mare.',
    cosaVedere: [
      'Le tre isole Gili (Trawangan, Meno, Air), senza auto né scooter',
      'Il Gunung Rinjani, con il lago craterico Segara Anak',
      'Le spiagge del sud: Kuta Lombok, Tanjung Aan, Selong Belanak',
    ],
    cosaFare: [
      'Snorkeling con le tartarughe marine alle Gili',
      'Trekking di 2-3 giorni al Rinjani fino al lago craterico — vedi la scheda esperienza dedicata',
      'Surf a Kuta Lombok o, per livelli avanzati, a Desert Point',
    ],
    doveDormire:
      'Gili Trawangan per la vita serale, Gili Air per l\'equilibrio tra servizi e calma, Gili Meno per il silenzio vero; a Lombok, Kuta è la base del sud per surf e spiagge, Senaru e Sembalun sono i due villaggi da cui partono i trek al Rinjani.',
    doveMangiare:
      'Il piatto di Lombok è l\'ayam taliwang, pollo grigliato in una salsa di peperoncino che non fa sconti — il nome dell\'isola in sasak significa proprio peperoncino, e non è un caso. Alle Gili il mercato serale di Trawangan è il posto migliore e più economico: pesce esposto sul ghiaccio, si sceglie e si aspetta che venga grigliato. Nei ristoranti sul mare si paga la vista, non il piatto.',
    comeArrivare:
      'Volo su Lombok International Airport (LOP), oppure traghetto veloce da Bali (Padang Bai o Sanur verso le Gili).',
    comeSpostarsi: 'Solo cidomo (calessi trainati da cavalli) o bicicletta alle Gili, dove veicoli a motore sono vietati; auto o scooter sul resto di Lombok.',
    periodoMigliore:
      'aprile-novembre; il Rinjani è accessibile solo da aprile a dicembre, chiuso nella stagione delle piogge',
    costi: 'in generale più economico di Bali',
    erroriDaEvitare: [
      'Sottovalutare la fatica e l\'altitudine del trekking al Rinjani',
      'Tentare il trekking senza guida: è obbligatoria per legge',
    ],
    miaEsperienza:
      'Il Rinjani è il trekking più duro fatto in Indonesia e il paragone con gli altri non regge. La salita al bordo del cratere è lunga, esposta e finisce su sabbia vulcanica dove a ogni tre passi se ne perde uno; il campo si monta sul ciglio col vento, e la notte si dorme poco e male. Ma svegliarsi sopra il lago Segara Anak con le nuvole sotto ripaga tutto. Le Gili funzionano bene esattamente dopo: nessuna auto, nessuno scooter, si gira a piedi in un\'ora e le tartarughe si vedono partendo dalla spiaggia senza barca né guida. Trawangan la sera è più festaiola di quanto qualcuno si aspetti, Meno è l\'opposto esatto — meglio saperlo prima di prenotare.',
    esperienzeSlugs: ['trekking-gunung-rinjani'],
    tripSlugs: [],
    imageAlt: 'Acqua turchese e barche tradizionali sulla spiaggia dell\'isola di Gili Trawangan',
  },
  {
    slug: 'komodo',
    paeseSlug: 'indonesia',
    ordine: 6,
    nome: 'Komodo',
    tipologia: ['natura', 'avventura', 'diving'],
    giorniConsigliati: '3-4 giorni, spesso in tour in barca da Labuan Bajo',
    visitataPersonalmente: true,
    introduzione:
      'Il parco nazionale che dà il nome all\'ultimo grande predatore terrestre rimasto sulla Terra, il drago di Komodo, in un arcipelago di isole spettacolari sopra e sotto il livello del mare.',
    percheAndarci:
      'È probabilmente l\'unico posto al mondo dove vedere i draghi di Komodo nel loro habitat naturale, con in più alcuni dei panorami e dei fondali più fotografati dell\'Indonesia.',
    cosaVedere: [
      'I draghi di Komodo sull\'isola di Komodo e sull\'isola di Rinca',
      'Pink Beach, con la sabbia rosata data dai frammenti di corallo',
      'Padar Island, il punto panoramico con le tre baie a mezzaluna',
      'I punti snorkeling di Kanawa e Kelor',
    ],
    cosaFare: [
      'Trekking guidato per vedere i draghi di Komodo — vedi la scheda esperienza dedicata',
      'Salita a Padar Island all\'alba per il panorama iconico',
      'Snorkeling o diving nel parco marino',
      'Tour in barca (liveaboard di 2-4 giorni) da Labuan Bajo tra le isole del parco',
    ],
    doveDormire:
      'Labuan Bajo è il punto di appoggio di tutti, con una scelta larghissima tra ostelli e resort sul porto; in alternativa si dorme direttamente a bordo, nei tour in barca di due o più notti, che è anche l\'unico modo per essere a Padar all\'alba.',
    doveMangiare:
      'A Labuan Bajo si mangia pesce, e si mangia bene: il mercato serale sul lungomare espone il pescato del giorno e lo griglia al momento, a prezzi lontanissimi da quelli dei ristoranti con vista sul porto poco più in là. A bordo delle barche il cibo lo prepara l\'equipaggio ed è semplice — riso, pesce, verdure — ma sorprendentemente buono.',
    comeArrivare: 'Volo su Labuan Bajo (Flores), punto di partenza di tutti i tour verso il parco.',
    comeSpostarsi: 'Solo in barca: tour organizzati di uno o più giorni, o liveaboard.',
    periodoMigliore: 'aprile-dicembre, stagione secca con mare più calmo',
    costi: 'variabile secondo la durata del tour in barca; i liveaboard multi-giorno hanno un costo più alto',
    erroriDaEvitare: [
      'Avvicinarsi ai draghi senza un ranger o una guida: sono predatori pericolosi',
      'Sottovalutare il mare mosso e le correnti forti tra le isole',
    ],
    miaEsperienza:
      'I draghi, va detto subito, stanno quasi sempre fermi. Sono animali enormi che passano la giornata all\'ombra e si muovono poco, e chi arriva aspettandosi una scena da documentario resta spiazzato: l\'impressione la fanno le dimensioni e il fatto che il ranger tenga in mano solo un bastone biforcuto. Rinca è più selvaggia e meno affollata dell\'isola di Komodo, e conviene chiederla esplicitamente. La cosa che regge davvero è Padar all\'alba: una salita breve e ripida su una cresta, e tre baie con tre sabbie diverse tutte insieme sotto. Va fatta prestissimo, perché dalle otto la fila sul sentiero è continua e il caldo diventa serio.',
    esperienzeSlugs: ['trekking-draghi-komodo'],
    tripSlugs: [],
    imageAlt: 'Drago di Komodo sulla sabbia dell\'isola di Rinca, parco nazionale di Komodo',
  },
  {
    slug: 'flores',
    paeseSlug: 'indonesia',
    ordine: 7,
    nome: 'Flores',
    tipologia: ['natura', 'cultura', 'vulcani'],
    giorniConsigliati: '5-7 giorni, spesso combinati con Komodo via Labuan Bajo',
    visitataPersonalmente: true,
    introduzione:
      'L\'isola più selvaggia e meno sviluppata tra quelle toccate dal viaggio, famosa per i tre laghi vulcanici che cambiano colore del Kelimutu e per i villaggi tradizionali sospesi tra le montagne.',
    percheAndarci:
      'Un lato dell\'Indonesia molto più rurale e meno turistico, con paesaggi vulcanici spettacolari e una cultura dei villaggi ancora molto viva.',
    cosaVedere: [
      'Il Kelimutu, con i tre laghi craterici dai colori diversi',
      'Il villaggio tradizionale di Bena, ai piedi del vulcano Inerie',
      'Wae Rebo, il villaggio remoto raggiungibile solo a piedi',
      'Riung, punto di partenza per il tour delle 17 isole',
    ],
    cosaFare: [
      'Alba al Kelimutu per vedere i laghi nella luce migliore — vedi la scheda esperienza dedicata',
      'Trekking di 1-2 giorni fino al villaggio di Wae Rebo',
      'Giro dei villaggi tradizionali intorno a Bajawa, tra cui Bena',
    ],
    doveDormire:
      'Moni è il paese da cui si parte di notte per il Kelimutu, con guesthouse essenziali; Bajawa serve come base per i villaggi tradizionali, Labuan Bajo per l\'ovest e i tour a Komodo. A Wae Rebo si dorme nella casa comune del villaggio, tutti insieme sul pavimento: non è un albergo e non va trattato come tale.',
    doveMangiare:
      'L\'offerta è minima e questo fa parte del viaggio: fuori da Labuan Bajo si mangia nei warung di paese, quasi sempre riso, pesce o pollo e verdure saltate, con poche alternative. Vale la pena provare il se\'i, la carne affumicata tipica delle isole orientali, e ovunque si trova il caffè di Flores, tostato in casa e servito senza filtro. Nelle guesthouse di Moni la cena si ordina nel pomeriggio, perché la cucinano apposta.',
    comeArrivare:
      'Volo su Labuan Bajo per l\'ovest dell\'isola (e per proseguire verso Komodo), oppure su Ende o Maumere per l\'est.',
    comeSpostarsi:
      'La Trans-Flores, la strada che attraversa l\'isola da ovest a est: panoramica ma tortuosa e più lenta di quanto sembri sulla mappa.',
    periodoMigliore: 'maggio-ottobre',
    costi: 'tra le isole più economiche del viaggio',
    erroriDaEvitare: [
      'Sottovalutare i tempi di percorrenza sulla Trans-Flores: le distanze in linea d\'aria ingannano',
    ],
    miaEsperienza:
      'Flores è la parte di Indonesia rimasta indietro, ed è esattamente questo che la rende la più interessante di tutte. La Trans-Flores è una strada che sulla mappa sembra corta e nella realtà è una successione infinita di curve: duecento chilometri sono una giornata intera, e chi ha poco tempo farebbe meglio a rinunciare. Il Kelimutu all\'alba merita comunque la sveglia alle tre, con l\'avvertenza che i colori dei tre laghi cambiano davvero nel tempo e non c\'è modo di sapere prima cosa si troverà: non è un difetto, è il senso del posto. Wae Rebo è la cosa più forte dell\'isola — tre ore di salita nella foresta, poi sette case coniche in una radura tra le montagne e nient\'altro — ma è un villaggio abitato, non un\'attrazione, e si sta alle loro regole.',
    esperienzeSlugs: ['alba-kelimutu'],
    tripSlugs: [],
    imageAlt: 'I tre laghi vulcanici colorati del Kelimutu visti dall\'alto, Flores',
  },
  {
    slug: 'raja-ampat',
    paeseSlug: 'indonesia',
    ordine: 8,
    nome: 'Raja Ampat',
    tipologia: ['diving', 'natura', 'mare'],
    giorniConsigliati: '5-7 giorni, meglio se in liveaboard o su più isole diverse',
    visitataPersonalmente: true,
    introduzione:
      'L\'arcipelago più remoto e incontaminato del viaggio, nella Papua occidentale: reef considerati tra i più biodiversi al mondo e isole a fungo che spuntano da un mare color smeraldo.',
    percheAndarci:
      'Per chi fa diving o snorkeling è una delle destinazioni più ambite al mondo; anche senza immersioni, i belvedere sulle isole a fungo bastano da soli a giustificare il viaggio.',
    cosaVedere: [
      'Piaynemo e Wayag, i belvedere iconici sulle isole calcaree a forma di fungo',
      'Arborek, villaggio su palafitte con un reef accessibile direttamente dalla spiaggia',
      'I punti manta ray e i reef vergini del parco marino',
    ],
    cosaFare: [
      'Diving o snorkeling in liveaboard tra i reef del parco marino — vedi la scheda esperienza dedicata',
      'Salita ai belvedere di Piaynemo e Wayag',
      'Giornata a Arborek per lo snorkeling dal villaggio',
    ],
    doveDormire:
      'Homestay a gestione familiare sulle isole (Gam, Kri, Arborek): essenziali — palafitte, luce a orario, bagno condiviso — ma è il modo in cui i soldi restano davvero alle comunità locali. In alternativa i dive resort di fascia alta o il liveaboard, che è l\'unico modo per arrivare fino a Wayag.',
    doveMangiare:
      'Non c\'è scelta e non c\'è bisogno che ce ne sia: negli homestay si mangia quello che cucina la famiglia, tre volte al giorno, pesce appena pescato con riso e verdure. È buono e monotono. Fuori dagli alloggi non esistono ristoranti, quindi l\'ultima occasione per comprare snack, acqua e contanti è Sorong o Waisai: sulle isole non ci sono bancomat.',
    comeArrivare:
      'Volo su Sorong (via Giacarta o Makassar), poi traghetto veloce o barca privata per Waisai o i resort/liveaboard.',
    comeSpostarsi: 'Solo via mare: barca pubblica, barca privata o liveaboard.',
    periodoMigliore: 'ottobre-aprile, mare più calmo e visibilità migliore (fa eccezione rispetto al resto dell\'arcipelago)',
    costi:
      'tra le mete più costose dell\'Indonesia per via della logistica e del permesso obbligatorio del parco marino (PIN Raja Ampat)',
    erroriDaEvitare: [
      'Non calcolare il costo e i tempi per ottenere il permesso obbligatorio del parco marino (PIN Raja Ampat)',
      'Sottovalutare i costi di trasporto interno: voli e barche verso quest\'area sono tra i più cari del paese',
    ],
    miaEsperienza:
      'È il posto più bello visto sott\'acqua, e anche il più faticoso da raggiungere: due voli, un traghetto e una barca, con costi che non somigliano al resto dell\'Indonesia. Ma la differenza si vede al primo snorkeling — la densità di pesce sul reef di Arborek, a venti metri dalla riva, è qualcosa che altrove semplicemente non c\'è più. Le correnti sono forti e vanno rispettate: certi punti si fanno solo negli orari giusti, e non è una raccomandazione formale. Dormire negli homestay invece che nei resort è la scelta che vale la pena fare, non per il prezzo ma perché quel modello è ciò che tiene in piedi la protezione del parco. Piaynemo al tramonto, con le scale di legno e la piattaforma affollata, è l\'unico momento in cui si incontra qualcun altro.',
    esperienzeSlugs: ['diving-liveaboard-raja-ampat'],
    tripSlugs: [],
    imageAlt: 'Isole calcaree a forma di fungo viste dal belvedere di Piaynemo, Raja Ampat',
  },
]
