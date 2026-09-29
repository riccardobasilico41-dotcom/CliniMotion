import type { Destinazione } from '@/lib/types'

// Le sette zone della Jungfrau Region trattate in "Svizzera in van"
// (src/content/viaggi/52-svizzera-alpi-van.md). Nessuna di queste
// destinazioni è stata visitata realmente: tutte hanno
// visitataPersonalmente: false e nessuna ha il campo miaEsperienza, per
// onestà verso chi legge (vedi il commento del tipo Destinazione in
// src/lib/types.ts: "Se assente, la UI mostra un placeholder editoriale
// invece di inventare un ricordo"). Nessun nome di hotel, ristorante o
// operatore è stato inventato. Prezzi, orari stagionali di passi e funivie
// e regole di campeggio in van cambiano ogni stagione e da un cantone
// all'altro: vanno riverificati prima di partire.

export const destinazioniSvizzera: Destinazione[] = [
  {
    slug: 'interlaken',
    paeseSlug: 'svizzera',
    ordine: 1,
    nome: 'Interlaken e i laghi di Thun e Brienz',
    tipologia: ['laghi', 'base logistica', 'montagna'],
    giorniConsigliati: '1-2 giorni come base, tutto il resto del giro vi ruota intorno',
    visitataPersonalmente: false,
    introduzione:
      'Il nome dice già tutto: Interlaken sta letteralmente "tra i laghi", su una lingua di terra che separa il Lago di Thun a ovest dal Lago di Brienz a est, entrambi di un colore turchese-lattiginoso dovuto ai sedimenti glaciali in sospensione. È lo snodo logistico di tutta la regione, con più campeggi nel raggio di pochi chilometri.',
    percheAndarci:
      'Perché è la base più pratica per un van in tutta la Jungfrau Region: stazione ferroviaria principale, supermercati, noleggi di attrezzatura outdoor, e la possibilità di raggiungere in giornata ogni altra zona di questa guida senza spostare l\'alloggio ogni notte.',
    cosaVedere: [
      'Il Lago di Thun e il Lago di Brienz, entrambi color turchese-lattiginoso per i sedimenti glaciali',
      'Il centro di Interlaken, con l\'Höheweg, il lungo viale con vista sulla Jungfrau in fondo',
      'Il castello di Oberhofen, sul Lago di Thun, con il parco botanico affacciato sull\'acqua',
      'Il villaggio di Iseltwald, sul Lago di Brienz, con l\'imbarcadero diventato noto dopo alcune produzioni internazionali',
    ],
    cosaFare: [
      'Un giro in battello storico su uno dei due laghi, con imbarcazioni a vapore ancora in servizio',
      'Passeggiata sull\'Höheweg al tramonto, quando la Jungfrau si accende di rosa',
      'Fare la spesa grossa in uno dei supermercati Coop o Migros del centro prima di risalire nelle valli, dove i prezzi salgono',
    ],
    doveDormire:
      'Diversi campeggi attrezzati per van sono concentrati sulle rive dei due laghi, a pochi minuti dal centro: è la base più densa di posti legali di tutta la guida.',
    doveMangiare:
      'Rösti, fondue e raclette con i formaggi d\'alpeggio locali sono la base della cucina della regione. Un pasto semplice in un ristorante di media categoria raramente scende sotto i 25-30 CHF a persona.',
    comeArrivare: 'Uscita autostradale diretta da Berna (circa un\'ora) o dal Vallese via Grimsel-Furka.',
    comeSpostarsi: 'A piedi nel centro; il van serve per raggiungere le altre zone, tutte entro 20-30 minuti di guida.',
    periodoMigliore: 'da giugno a settembre, con luglio-agosto più caldo e affollato.',
    costi: 'Campeggi 35-50 CHF/notte; giro in battello da circa 20-30 CHF a tratta singola.',
    erroriDaEvitare: [
      'Arrivare senza aver prenotato o almeno verificato un campeggio per la prima notte',
      'Fare la spesa nei minimarket delle valli invece che nei supermercati di Interlaken, sensibilmente più cari',
      'Sottovalutare quanto le altre zone assorbano la giornata: Interlaken è la base, non la destinazione principale del viaggio',
    ],
    esperienzeSlugs: ['giro-battello-laghi-thun-brienz'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il lungolago di Interlaken con la Jungfrau innevata sullo sfondo, tra i laghi di Thun e Brienz',
  },
  {
    slug: 'lauterbrunnen',
    paeseSlug: 'svizzera',
    ordine: 2,
    nome: 'Lauterbrunnen e la valle delle cascate',
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: '1 giorno pieno',
    visitataPersonalmente: false,
    introduzione:
      'Una gola glaciale a pareti verticali con settantadue cascate censite lungo i suoi dodici chilometri, la più famosa delle quali — la Staubbach, 300 metri quasi nel centro del paese — ha ispirato Goethe e, secondo la tradizione locale, la valle di Rivendell nel "Signore degli Anelli".',
    percheAndarci:
      'Perché è la valle più scenografica della regione e il punto di partenza per Mürren, Wengen e Gimmelwald, tre villaggi senza auto raggiungibili solo in funivia o cremagliera, e perché le Trümmelbachfälle sono un\'esperienza geologica che non esiste altrove.',
    cosaVedere: [
      'La cascata Staubbach, che precipita per 300 metri quasi nel centro del paese',
      'Le Trümmelbachfälle, dieci cascate glaciali visibili da gallerie e ascensori scavati dentro la montagna — vedi la scheda esperienza dedicata',
      'I villaggi senza auto di Wengen e Gimmelwald, raggiungibili solo in funivia o cremagliera',
    ],
    cosaFare: [
      'Percorrere il fondovalle a piedi o in bici tra le cascate, un itinerario quasi pianeggiante',
      'Salire in funivia o cremagliera verso Mürren o Wengen per la vista dall\'alto sulla gola',
      'Visitare le Trümmelbachfälle, aperte da inizio aprile a inizio novembre',
    ],
    doveDormire:
      'Campeggi attrezzati sul fondovalle. **Il campeggio libero in questa valle è esplicitamente vietato**, con multe fino a 200 CHF: non è una regola teorica, è applicata.',
    doveMangiare: 'Ristoranti di fondovalle con cucina svizzero-tedesca di montagna; prezzi nella media alta della regione.',
    comeArrivare: 'Da Interlaken, 20 minuti d\'auto o di treno.',
    comeSpostarsi: 'Fondovalle a piedi o in bici; per Mürren, Wengen e Gimmelwald serve funivia o cremagliera, l\'auto non arriva.',
    periodoMigliore: 'da giugno a settembre, con le cascate più abbondanti a inizio estate per lo scioglimento della neve.',
    costi: 'Trümmelbachfälle 18 CHF ingresso adulti, 8 CHF bambini 6-15 anni.',
    erroriDaEvitare: [
      'Montare tavolino e sedie fuori dal van in un parcheggio non autorizzato: è la differenza che la polizia locale controlla, anche dove il semplice pernottamento nel mezzo è tollerato',
      'Arrivare alle Trümmelbachfälle senza sapere che sono chiuse da inizio novembre a inizio aprile',
      'Non prevedere le scarpe da pioggia: le gallerie delle cascate sono umide e scivolose',
    ],
    esperienzeSlugs: ['trummelbachfalle'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La cascata Staubbach che precipita per 300 metri nella valle di Lauterbrunnen',
  },
  {
    slug: 'grindelwald',
    paeseSlug: 'svizzera',
    ordine: 3,
    nome: 'Grindelwald e il First',
    tipologia: ['montagna', 'panorama', 'famiglia'],
    giorniConsigliati: '1 giorno',
    visitataPersonalmente: false,
    introduzione:
      'Ai piedi della parete nord dell\'Eiger, Grindelwald è il villaggio più "da cartolina" della regione e il punto di partenza della funivia per il First, dove il Cliff Walk offre uno dei panorami più fotografati delle Alpi Bernesi senza un solo passo di cammino impegnativo.',
    percheAndarci:
      'Perché è il modo più semplice di avvicinarsi all\'Eiger senza affrontare un dislivello serio, e perché il First è la zona giusta sia per chi cammina fino al Bachalpsee sia per chi vuole solo il panorama dalla funivia.',
    cosaVedere: [
      'La parete nord dell\'Eiger, visibile da tutto il paese',
      'Il First Cliff Walk, una passerella metallica a sbalzo sulla parete rocciosa',
      'Il Bachalpsee, un laghetto alpino che riflette Eiger, Mönch e Jungfrau nelle giornate senza vento',
    ],
    cosaFare: [
      'Salire in funivia al First e percorrere il Cliff Walk, incluso nel biglietto e ripetibile quante volte si vuole',
      'Camminare fino al Bachalpsee, 2-3 ore andata e ritorno con dislivello moderato',
      'Provare lo zipline First Flyer, attività extra a pagamento sul posto',
    ],
    doveDormire: 'Campeggi nella zona, alternativa più economica rispetto a Interlaken ma con meno scelta.',
    doveMangiare: 'Ristoranti di montagna con vista sull\'Eiger, prezzi allineati al resto della regione.',
    comeArrivare: 'Da Interlaken, 20 minuti d\'auto o di treno.',
    comeSpostarsi: 'Il paese si gira a piedi; per il First e il Bachalpsee serve la funivia.',
    periodoMigliore: 'da giugno a settembre; il Bachalpsee resta spesso ghiacciato fino a giugno inoltrato.',
    costi: 'Funivia First 72-76 CHF A/R secondo la stagione; Cliff Walk incluso.',
    erroriDaEvitare: [
      'Salire al First aspettandosi il Bachalpsee "dietro l\'angolo": la camminata richiede 2-3 ore andata e ritorno',
      'Sottovalutare il vento in cima, che sul Cliff Walk può essere forte anche con cielo sereno a valle',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il First Cliff Walk sospeso sulla parete rocciosa con l\'Eiger sullo sfondo, Grindelwald',
  },
  {
    slug: 'jungfraujoch',
    paeseSlug: 'svizzera',
    ordine: 4,
    nome: 'Jungfraujoch, il Top of Europe',
    tipologia: ['ghiacciaio', 'panorama', 'esperienza unica'],
    giorniConsigliati: '1 giorno intero',
    visitataPersonalmente: false,
    introduzione:
      'La stazione ferroviaria più alta d\'Europa, a 3.454 metri, raggiunta da una linea a cremagliera scavata quasi interamente dentro la roccia dell\'Eiger e del Mönch tra il 1896 e il 1912. In cima, il ghiacciaio dell\'Aletsch, il più lungo delle Alpi.',
    percheAndarci:
      'Perché è l\'unica occasione di questa guida di stare a più di 3.400 metri senza un\'escursione impegnativa, davanti al ghiacciaio più lungo delle Alpi — ed è, senza girarci intorno, il biglietto più caro del viaggio, da trattare come la giornata clou.',
    cosaVedere: [
      'Il ghiacciaio dell\'Aletsch, il più esteso delle Alpi, patrimonio UNESCO',
      'Il palazzo di ghiaccio scavato nel permafrost',
      'Le terrazze panoramiche, con vista che nelle giornate limpide arriva fino alla Foresta Nera',
    ],
    cosaFare: [
      'Salire con il treno a cremagliera da Interlaken Ost, partendo presto per avere più probabilità di cielo sereno',
      'Camminare sul primo tratto del ghiacciaio dell\'Aletsch, dove segnalato e in sicurezza',
      'Visitare il palazzo di ghiaccio, incluso nel biglietto',
    ],
    doveDormire: 'Non si pernotta in quota: è una gita di giornata da Interlaken o dalle valli vicine.',
    doveMangiare: 'Ristoranti self-service in stazione, prezzi da zona di alta quota isolata.',
    comeArrivare: 'Treno a cremagliera da Interlaken Ost, con cambi a Grindelwald o Lauterbrunnen e a Kleine Scheidegg, circa 2h20 complessive.',
    comeSpostarsi: 'A piedi tra le terrazze e le gallerie panoramiche in quota.',
    periodoMigliore: 'tutto l\'anno, ma con orari e frequenze diverse tra alta e bassa stagione; le mattine sono statisticamente più serene dei pomeriggi.',
    costi: 'Biglietto A/R da Interlaken Ost circa 224-261 CHF secondo la stagione; Good Morning Ticket scontato per chi parte entro le 8.',
    erroriDaEvitare: [
      'Partire nel primo pomeriggio: le nuvole si formano tipicamente dopo mezzogiorno e coprono la vista',
      'Non prenotare online: i biglietti alla cassa costano generalmente di più',
      'Sottovalutare il freddo in quota anche in piena estate: servono giacca a vento e strati anche a luglio',
    ],
    esperienzeSlugs: ['jungfraujoch-top-of-europe'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il ghiacciaio dell\'Aletsch visto dalle terrazze panoramiche del Jungfraujoch',
  },
  {
    slug: 'muerren-schilthorn',
    paeseSlug: 'svizzera',
    ordine: 5,
    nome: 'Mürren e lo Schilthorn',
    tipologia: ['montagna', 'panorama', 'trekking'],
    giorniConsigliati: '1 giorno, più mezza giornata per chi fa la via ferrata',
    visitataPersonalmente: false,
    introduzione:
      'Mürren è uno dei villaggi senza auto della valle di Lauterbrunnen, con una vista sull\'Eiger-Mönch-Jungfrau tra le più aperte della regione. Sopra il paese, la funivia sale allo Schilthorn, dove il ristorante girevole Piz Gloria — reso famoso da un film di James Bond — offre 360 gradi su oltre duecento vette.',
    percheAndarci:
      'Perché offre lo stesso panorama sulla catena Eiger-Mönch-Jungfrau di Grindelwald ma dal lato opposto della valle, senza traffico automobilistico nel paese, e perché da qui parte la via ferrata più nota della regione.',
    cosaVedere: [
      'Il panorama sulla catena Eiger-Mönch-Jungfrau dal paese di Mürren, senza pareti a bloccare la vista',
      'Il ristorante girevole Piz Gloria in cima allo Schilthorn, location del film "Al servizio segreto di Sua Maestà"',
      'Il villaggio di Gimmelwald, ancora più piccolo e meno turistico, raggiungibile a piedi dalla via ferrata o in funivia',
    ],
    cosaFare: [
      'Salire in funivia allo Schilthorn per il panorama a 360 gradi',
      'Percorrere la via ferrata Mürren-Gimmelwald, circa 2,2 km con un ponte sospeso di 90 metri — vedi la scheda esperienza dedicata',
      'Camminare da Mürren a Gimmelwald per il sentiero normale, alternativa senza attrezzatura da ferrata',
    ],
    doveDormire: 'Nessun campeggio dentro Mürren (paese senza auto): si dorme nei campeggi del fondovalle a Lauterbrunnen o Stechelberg.',
    doveMangiare: 'Ristoranti di paese con cucina di montagna; il Piz Gloria in cima allo Schilthorn ha un menù turistico a prezzi da location panoramica.',
    comeArrivare: 'Da Lauterbrunnen, funivia da Stechelberg oppure cremagliera via Grütschalp.',
    comeSpostarsi: 'Mürren si gira a piedi; per lo Schilthorn e per Gimmelwald servono funivia o via ferrata.',
    periodoMigliore: 'da giugno a ottobre; la via ferrata è aperta solo in questa finestra.',
    costi: 'Funivia Schilthorn circa 115 CHF A/R da Stechelberg, 91 CHF da Mürren.',
    erroriDaEvitare: [
      'Affrontare la via ferrata senza kit da ferrata omologato o senza esperienza pregressa su un percorso più semplice',
      'Lasciare il van a Lauterbrunnen pensando di guidare fino a Mürren: il paese non è raggiungibile in auto',
    ],
    confronti: [
      {
        titolo: 'Salire allo Schilthorn da Stechelberg o da Mürren',
        introduzione:
          'La funivia per lo Schilthorn ha due punti di partenza possibili, con un differenza di prezzo e di tempo che vale la pena conoscere prima di scegliere.',
        opzioni: [
          {
            nome: 'Da Stechelberg (fondovalle)',
            sintesi: 'Il percorso completo, dal fondo della valle di Lauterbrunnen fino in cima in un\'unica tratta di più tronconi.',
            costo: 'circa 115 CHF A/R',
            durata: '32 minuti di sola andata',
            pro: ['Un unico biglietto per tutto il dislivello', 'Non richiede prima la cremagliera per Mürren'],
            contro: ['Più caro della tratta da Mürren', 'Il van deve arrivare fino a Stechelberg, ultimo tratto della valle'],
            perChi: 'Chi arriva in van fin dentro la valle e non vuole cambiare mezzo più volte.',
          },
          {
            nome: 'Da Mürren',
            sintesi: 'Si arriva prima a Mürren in cremagliera da Lauterbrunnen via Grütschalp, poi si prende la funivia più corta per lo Schilthorn.',
            costo: 'circa 91 CHF A/R da Mürren',
            durata: 'tratta più breve rispetto a Stechelberg',
            pro: ['Tratta finale più economica', 'Si passa comunque da Mürren, utile per chi vuole vedere anche il paese'],
            contro: ['Richiede comunque il biglietto della cremagliera fino a Mürren, quindi il risparmio netto è minore di quanto sembri'],
            perChi: 'Chi vuole comunque fermarsi a Mürren prima o dopo la salita allo Schilthorn.',
          },
        ],
        raccomandazione:
          'Per chi ha il van e vuole vedere anche il paese di Mürren, la tratta da Stechelberg con sosta intermedia resta la più semplice da organizzare in una sola giornata.',
      },
    ],
    esperienzeSlugs: ['via-ferrata-muerren-gimmelwald'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il ristorante girevole Piz Gloria in cima allo Schilthorn con vista sulle Alpi Bernesi',
  },
  {
    slug: 'grimsel-furka',
    paeseSlug: 'svizzera',
    ordine: 6,
    nome: 'Grimselpass e Furkapass',
    tipologia: ['roadtrip', 'panorama', 'passi alpini'],
    giorniConsigliati: '1 giorno di trasferimento',
    visitataPersonalmente: false,
    introduzione:
      'La strada che collega le Alpi Bernesi al Vallese attraverso due passi tra i più scenografici della Svizzera: il Grimselpass (2.164 m), tra laghi artificiali color smeraldo, e il Furkapass (2.429 m), reso celebre dall\'inseguimento in Aston Martin di "Goldfinger" e affacciato sulla lingua terminale del ghiacciaio del Rodano.',
    percheAndarci:
      'Perché è la giornata di puro roadtrip di questa guida, il tratto in cui il van dà il meglio di sé come mezzo per attraversare le Alpi invece che semplicemente visitarle, e perché collega la Jungfrau Region a Zermatt senza tornare indietro verso la pianura.',
    cosaVedere: [
      'I laghi artificiali del Grimsel, color smeraldo incastonati nella roccia grigia',
      'Il ghiacciaio del Rodano, visibile dal Furkapass, in forte ritiro e in parte coperto da teli riflettenti estivi per rallentarne lo scioglimento',
      'L\'Hotel Belvédère, abbandonato sul Furkapass, location dell\'inseguimento automobilistico di "Goldfinger"',
    ],
    cosaFare: [
      'Percorrere la strada con soste fotografiche ai punti panoramici segnalati',
      'Una breve camminata alla lingua del ghiacciaio del Rodano, dove l\'accesso è consentito',
    ],
    doveDormire: 'Nessuna sosta prevista: è una giornata di trasferimento tra la Jungfrau Region e il Vallese.',
    doveMangiare: 'Pochi rifugi e ristori di passo, prezzi da alta quota isolata; conviene portare provviste dal van.',
    comeArrivare: 'Da Interlaken o dalla zona di Lauterbrunnen-Mürren, circa 2-3 ore di guida con soste.',
    comeSpostarsi: 'Solo in auto o van; non esiste un collegamento pubblico diretto lungo l\'intero tracciato.',
    periodoMigliore: 'da giugno a ottobre; le date esatte di apertura variano ogni anno con l\'innevamento residuo.',
    costi: 'Nessun pedaggio sulla strada.',
    erroriDaEvitare: [
      'Programmare il trasferimento senza verificare prima lo stato di apertura dei due passi, soprattutto a inizio giugno o fine ottobre',
      'Non sapere che il Furka ha un\'alternativa in treno-navetta (Furka Autoverlad) quando il passo è chiuso alla circolazione ordinaria',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'La strada del Grimselpass che sale tra i laghi artificiali color smeraldo e la roccia grigia',
  },
  {
    slug: 'zermatt',
    paeseSlug: 'svizzera',
    ordine: 7,
    nome: 'Zermatt e il Cervino',
    tipologia: ['montagna', 'panorama', 'iconico'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: false,
    introduzione:
      'Il punto più a sud di questa guida, e l\'unico raggiungibile senza portarci il van fin dentro: Zermatt è chiusa al traffico privato dal 1961. Il premio è il Cervino (Matterhorn), 4.478 metri di piramide di roccia quasi perfetta, visibile dal centro del paese.',
    percheAndarci:
      'Perché il Cervino è una delle montagne più riconoscibili al mondo, e perché Zermatt, pur essendo la zona più cara e più lontana di questa guida, offre punti panoramici (Gornergrat su tutti) che non hanno equivalenti nel resto del giro.',
    cosaVedere: [
      'Il Cervino (Matterhorn), visibile dal centro del paese in ogni giornata serena',
      'Il Gornergrat, raggiunto dalla ferrovia a cremagliera più alta d\'Europa all\'aperto',
      'Il centro storico di Zermatt, senza traffico automobilistico, con i tradizionali fienili di legno su piedritti in pietra',
    ],
    cosaFare: [
      'Salire al Gornergrat in treno per la vista frontale sul Cervino',
      'Passeggiare nel centro di Zermatt, libero da auto',
      'Per chi ha tempo, una delle molte funivie panoramiche minori intorno al paese',
    ],
    doveDormire: 'Nessun pernottamento in van dentro Zermatt (città chiusa al traffico privato): si dorme nel van a Täsch o si rientra verso le altre zone.',
    doveMangiare: 'Ristoranti di paese turistico, tra i più cari della guida; conviene alternare con pasti preparati nel van a Täsch.',
    comeArrivare: 'Il van si lascia nel parcheggio coperto di Täsch, 5 km prima di Zermatt; da lì un treno navetta parte ogni 20 minuti.',
    comeSpostarsi: 'A piedi in paese; per il Gornergrat e le altre quote serve la ferrovia a cremagliera o le funivie.',
    periodoMigliore: 'da giugno a settembre; il Cervino resta comunque visibile (quando il cielo è sereno) tutto l\'anno.',
    costi: 'Parcheggio Täsch da 17 CHF/giorno; Gornergrat a parte, non incluso nel parcheggio.',
    erroriDaEvitare: [
      'Provare a entrare a Zermatt in van o in auto: il divieto è reale e controllato',
      'Non mettere in conto il tempo di guida per arrivarci: oltre due ore da Interlaken anche passando per Grimsel-Furka',
      'Aspettarsi il Cervino sereno per forza: è una montagna che genera nuvole proprie anche con cielo pulito intorno',
    ],
    esperienzeSlugs: [],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il Cervino visto dal centro di Zermatt, con i tradizionali fienili di legno in primo piano',
  },
]
