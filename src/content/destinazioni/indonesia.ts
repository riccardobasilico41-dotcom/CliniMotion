import type { Destinazione } from '@/lib/types'

// Otto isole visitate di persona, ma senza ancora un viaggio-diario collegato
// (src/content/viaggi) né foto caricate: tripSlugs resta vuoto e immagine/
// miaEsperienza sono assenti di proposito, invece di inventare un ricordo o
// usare una foto stock — vedi src/lib/types.ts. Il contenuto qui sotto è
// guida pratica generale (cosa vedere/fare, come muoversi, quando andare),
// verificabile e non personale; aneddoti e conferme puntuali arriveranno
// quando saranno disponibili i ricordi reali del viaggio.

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
    doveMangiare: 'da completare',
    comeArrivare: 'Volo su Medan (Kualanamu International, KNO) da Giacarta o da Kuala Lumpur/Singapore.',
    comeSpostarsi: 'Auto privata o bus tra Medan, Bukit Lawang, Berastagi e Lago Toba; traghetto per l\'isola di Samosir.',
    periodoMigliore: 'giugno-settembre, stagione più secca per il trekking',
    costi: 'tra le isole più economiche dell\'arcipelago, soprattutto per alloggi e trekking guidati',
    erroriDaEvitare: [
      'Affidarsi a guide non certificate per il trekking oranghi: il contatto ravvicinato non regolamentato è pericoloso sia per i visitatori sia per gli animali',
      'Sottovalutare i tempi di spostamento su strade di montagna spesso dissestate',
    ],
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
    doveDormire: 'da completare',
    doveMangiare: 'da completare',
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
    doveDormire: 'da completare',
    doveMangiare: 'da completare',
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
    doveDormire: 'da completare',
    doveMangiare: 'da completare',
    comeArrivare:
      'Volo su Makassar (hub principale), poi bus o volo interno per Rantepao (Tana Toraja) o per Manado (base per Bunaken).',
    comeSpostarsi: 'Bus o auto con autista per Tana Toraja; barca dal molo di Manado per Bunaken.',
    periodoMigliore: 'maggio-ottobre',
    costi: 'nella media, più alto per i pacchetti diving a Bunaken',
    erroriDaEvitare: [
      'Partecipare a cerimonie funebri senza una guida che spieghi l\'etichetta: sono eventi privati, aperti ai visitatori solo con certe regole di rispetto',
    ],
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
    doveDormire: 'da completare',
    doveMangiare: 'da completare',
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
    doveDormire: 'da completare',
    doveMangiare: 'da completare',
    comeArrivare: 'Volo su Labuan Bajo (Flores), punto di partenza di tutti i tour verso il parco.',
    comeSpostarsi: 'Solo in barca: tour organizzati di uno o più giorni, o liveaboard.',
    periodoMigliore: 'aprile-dicembre, stagione secca con mare più calmo',
    costi: 'variabile secondo la durata del tour in barca; i liveaboard multi-giorno hanno un costo più alto',
    erroriDaEvitare: [
      'Avvicinarsi ai draghi senza un ranger o una guida: sono predatori pericolosi',
      'Sottovalutare il mare mosso e le correnti forti tra le isole',
    ],
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
    doveDormire: 'da completare',
    doveMangiare: 'da completare',
    comeArrivare:
      'Volo su Labuan Bajo per l\'ovest dell\'isola (e per proseguire verso Komodo), oppure su Ende o Maumere per l\'est.',
    comeSpostarsi:
      'La Trans-Flores, la strada che attraversa l\'isola da ovest a est: panoramica ma tortuosa e più lenta di quanto sembri sulla mappa.',
    periodoMigliore: 'maggio-ottobre',
    costi: 'tra le isole più economiche del viaggio',
    erroriDaEvitare: [
      'Sottovalutare i tempi di percorrenza sulla Trans-Flores: le distanze in linea d\'aria ingannano',
    ],
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
    doveDormire: 'da completare',
    doveMangiare: 'da completare',
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
    esperienzeSlugs: ['diving-liveaboard-raja-ampat'],
    tripSlugs: [],
    imageAlt: 'Isole calcaree a forma di fungo viste dal belvedere di Piaynemo, Raja Ampat',
  },
]
