import type { Destinazione } from '@/lib/types'

// Paese visitato di persona. I campi miaEsperienza sono bozze scritte da
// Claude nella voce del diario, basate su ciò che è oggettivamente vero di
// ogni posto (quota, fatica, affollamento, stagione) e non su ricordi reali:
// vanno riletti e sostituiti con i tuoi. Nessun nome di hotel o ristorante è
// stato inventato. Prezzi, quote di ingresso e regole di prenotazione in Perù
// cambiano spesso: vanno riverificati sui canali ufficiali prima di partire
// (biglietti Machu Picchu solo su tuboleto.cultura.pe).

export const destinazioniPeru: Destinazione[] = [
  {
    slug: 'cusco',
    paeseSlug: 'peru',
    ordine: 1,
    nome: 'Cusco',
    tipologia: ['cultura', 'città'],
    giorniConsigliati: '3-4 giorni, di cui almeno due solo per acclimatarsi',
    visitataPersonalmente: true,
    introduzione:
      'L\'antica capitale dell\'impero inca a 3.400 metri, dove le fondamenta in pietra incastrata a secco reggono ancora le chiese coloniali costruite sopra. È la base logistica di quasi tutto ciò che si fa in Perù: da qui partono treni, trek e voli per l\'Amazzonia.',
    percheAndarci:
      'Perché è il punto di partenza obbligato e perché merita di suo: la muratura inca di Sacsayhuamán e di Qorikancha è il miglior modo per capire cosa si andrà a vedere a Machu Picchu.',
    cosaVedere: [
      'Qorikancha, il tempio del sole inca su cui i conquistadores costruirono il convento di Santo Domingo',
      'Sacsayhuamán, la fortezza con i blocchi megalitici incastrati senza malta, sopra la città',
      'Plaza de Armas e la Cattedrale',
      'Il quartiere di San Blas, il più ripido e caratteristico',
      'La Piedra de los Doce Ángulos, in Calle Hatun Rumiyoc',
    ],
    cosaFare: [
      'Prendersela comoda i primi due giorni: l\'acclimatamento non è un consiglio, è la condizione per riuscire a fare tutto il resto',
      'Mercato di San Pedro per il primo assaggio della cucina andina',
      'Corso di cucina peruviana o degustazione di ceviche e pisco sour',
      'Giornata a Rainbow Mountain (Vinicunca) o alla laguna Humantay — entrambe sopra i 4.600 metri, da fare solo dopo essersi acclimatati',
    ],
    doveDormire:
      'Il centro storico e San Blas sono le zone più comode e piacevoli; San Blas è però tutto in salita, cosa che nei primi giorni in quota si sente parecchio.',
    doveMangiare:
      'Il mercato di San Pedro è il posto giusto per il primo impatto: succhi di frutta al banco, zuppe e menú del día a pochi soles. Da provare in città il cuy (porcellino d\'India), l\'alpaca alla griglia e il chicharrón; il pisco sour è d\'obbligo la prima sera, ma con calma, perché a 3.400 metri l\'alcol pesa il doppio.',
    comeArrivare: 'Volo interno da Lima (circa 1h20), la soluzione quasi obbligata. Via terra da Puno o Arequipa servono 6-10 ore di bus.',
    comeSpostarsi: 'Il centro si gira a piedi; taxi economici e collettivi per le zone esterne. Per la Valle Sacra, tour organizzati o auto con autista.',
    periodoMigliore: 'maggio-settembre, stagione secca. Attenzione al 24 giugno, quando l\'Inti Raymi riempie la città',
    costi: 'il Boleto Turístico del Cusco (circa 130 soles) copre in un unico biglietto Sacsayhuamán, i siti della Valle Sacra e diversi musei; conviene quasi sempre',
    erroriDaEvitare: [
      'Atterrare a Cusco e partire il giorno dopo per un trek: è il modo più diretto per rovinarsi il viaggio con il mal d\'altitudine',
      'Sottovalutare le notti: a 3.400 metri fa freddo tutto l\'anno, anche quando di giorno ci sono 20 gradi',
      'Salire a Rainbow Mountain nei primi giorni, quando l\'organismo non ha ancora reagito alla quota',
    ],
    miaEsperienza:
      'Il primo giorno qui è un giorno perso, e va messo in conto come tale: si arriva convinti di essere in forma e basta una rampa di scale per scoprire che a 3.400 metri il fiato non è questione di allenamento. Camminare piano tra San Blas e la Plaza de Armas, con il tè di coca in mano come fanno tutti, è esattamente quello che serve, e il resto del viaggio ne guadagna. La sorpresa è la città in sé: sembra solo il campo base per Machu Picchu, invece la muratura inca sotto le chiese coloniali racconta la conquista meglio di qualsiasi museo.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Plaza de Armas di Cusco con la cattedrale e i tetti di tegole rosse, Perù',
  },
  {
    slug: 'valle-sacra',
    paeseSlug: 'peru',
    ordine: 2,
    nome: 'Valle Sacra degli Inca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 giorni, meglio dormendoci invece di farla in giornata da Cusco',
    visitataPersonalmente: true,
    introduzione:
      'La valle del fiume Urubamba tra Cusco e Machu Picchu: terrazzamenti, saline ancora in uso dai tempi degli Inca, villaggi di tessitori e la fortezza di Ollantaytambo, da cui partono i treni.',
    percheAndarci:
      'Sta 500-600 metri più in basso di Cusco, quindi è il posto giusto dove acclimatarsi dormendo meglio, ed è ricchissima di siti che quasi nessuno visita con calma perché tutti corrono a Machu Picchu.',
    cosaVedere: [
      'Ollantaytambo, l\'unico insediamento inca ancora abitato secondo l\'impianto originale, con la fortezza a terrazze sopra il paese',
      'Le saline di Maras, migliaia di vasche bianche scavate nel fianco della montagna',
      'Moray, i terrazzamenti circolari concentrici usati dagli Inca come laboratorio agricolo',
      'Il mercato e il sito archeologico di Pisac',
      'Chinchero, per la tessitura tradizionale',
    ],
    cosaFare: [
      'Dormire a Ollantaytambo la sera prima del treno per Machu Picchu: si guadagna un\'ora abbondante di sonno rispetto a partire da Cusco',
      'Giro in bici o quad tra Maras e Moray',
      'Rafting sull\'Urubamba o parapendio sopra la valle',
      'Laboratorio di tessitura con una cooperativa di donne a Chinchero',
    ],
    doveDormire:
      'Ollantaytambo è la scelta più strategica per il treno; Urubamba ha le strutture più confortevoli; Pisac è la più tranquilla e alternativa.',
    doveMangiare:
      'Nella valle si mangia meglio nei ristoranti di campagna con vista sui terrazzamenti che nei locali turistici di Pisac. Da cercare la trucha (trota) dei fiumi della zona e il classico menú del día, che a mezzogiorno costa pochissimo ed è quello che mangiano i locali.',
    comeArrivare: 'Circa 1h30 di auto da Cusco a Ollantaytambo; collettivi frequenti ed economici da Calle Pavitos a Cusco.',
    comeSpostarsi: 'Auto con autista o tour organizzato per coprire Maras, Moray e Pisac in una giornata; collettivi tra i paesi principali.',
    periodoMigliore: 'maggio-settembre; nella stagione delle piogge le strade sterrate verso Maras si fanno difficili',
    costi: 'la maggior parte dei siti è inclusa nel Boleto Turístico; le saline di Maras hanno un biglietto a parte (circa 10 soles)',
    erroriDaEvitare: [
      'Comprimere Valle Sacra e Machu Picchu in un\'unica giornata di corsa: è il classico errore che toglie senso a entrambe',
      'Dormire a Cusco la sera prima del treno delle 5 o 6 del mattino da Ollantaytambo',
    ],
    miaEsperienza:
      'È la tappa da allungare se si ha un giorno in più, ed è quella che quasi tutti sacrificano per correre a Machu Picchu. Sta cinquecento metri più in basso di Cusco e si dorme molto meglio: sembra un dettaglio da poco finché non si passa una notte a respirare male in città. Maras colpisce più di Moray — le vasche di sale scavate nella montagna sono ancora in uso dalle stesse famiglie da generazioni, e vederle in funzione è un\'altra cosa rispetto a guardare un sito archeologico. Ollantaytambo dà il meglio la sera, quando i pullman dei tour sono ripartiti e il paese torna ai suoi abitanti.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Le vasche bianche delle saline di Maras sul fianco della montagna, Valle Sacra, Perù',
  },
  {
    slug: 'machu-picchu',
    paeseSlug: 'peru',
    ordine: 3,
    nome: 'Machu Picchu',
    tipologia: ['cultura', 'trekking'],
    giorniConsigliati: '2 giorni (una notte ad Aguas Calientes) per entrare all\'apertura senza corse',
    visitataPersonalmente: true,
    introduzione:
      'La cittadella inca del XV secolo sospesa tra le montagne, e la meta con il sistema di accesso più regolamentato di tutto il Sud America: quote giornaliere, fasce orarie fisse, circuiti obbligati e biglietti extra a numero chiusissimo per le vette.',
    percheAndarci:
      'Perché è ciò che promette di essere, e perché il modo in cui ci si arriva cambia completamente il viaggio: arrivarci in treno o dopo quattro giorni di cammino attraverso la Porta del Sole sono due esperienze diverse.',
    cosaVedere: [
      'L\'Intihuatana, la pietra rituale legata all\'osservazione solare, uno dei pochi sopravvissuti alla distruzione coloniale',
      'Il Tempio del Sole e il Recinto Reale, dove la muratura inca raggiunge il massimo livello',
      'I terrazzamenti agricoli, con le prospettive fotografiche classiche',
      'Huayna Picchu, la vetta che fa da sfondo alle foto — salita ripida con biglietto separato',
      'Intipunku, la Porta del Sole, punto d\'arrivo del Cammino Inca',
    ],
    cosaFare: [
      'Scegliere il circuito giusto al momento della prenotazione: i percorsi sono numerati e vincolanti, non ci si muove liberamente nel sito',
      'Aggiungere la salita a Huayna Picchu o alla Montaña Machu Picchu, entrambe con quota separata e molto limitata',
      'Dormire ad Aguas Calientes per entrare al primo turno, quando il sito è più vuoto',
    ],
    confronti: [
      {
        titolo: 'Come arrivare a Machu Picchu: tutte le opzioni a confronto',
        introduzione:
          'Non esiste una strada che arrivi a Machu Picchu: si arriva solo in treno, a piedi, o con una combinazione delle due cose. La scelta pesa sul budget molto più del biglietto d\'ingresso, che costa relativamente poco. Tutte le opzioni convergono su Aguas Calientes (Machu Picchu Pueblo), da cui si sale con il bus navetta in 25 minuti o a piedi in 1h30-2h.',
        opzioni: [
          {
            nome: 'Treno da Ollantaytambo o Cusco',
            sintesi:
              'La via classica: treno PeruRail o IncaRail fino ad Aguas Calientes, poi bus navetta fino all\'ingresso. Le partenze da Ollantaytambo sono più numerose e più economiche di quelle da Cusco/Poroy.',
            costo: 'treno 70-500$ andata e ritorno secondo la classe (Expedition/Voyager le economiche, Vistadome panoramico, Hiram Bingham di lusso), più 24$ di bus navetta A/R e l\'ingresso al sito (circa 152 soles)',
            durata: '1 giorno da Ollantaytambo, meglio 2 con notte ad Aguas Calientes',
            pro: [
              'Nessuna preparazione fisica richiesta, adatto a tutti',
              'Tempi certi e prevedibili, utile se si hanno pochi giorni',
              'Permette di dormire ad Aguas Calientes ed entrare al primo turno',
            ],
            contro: [
              'Di gran lunga l\'opzione più cara',
              'I posti in treno si esauriscono con settimane di anticipo nei mesi di punta',
              'Zero senso di "arrivo" progressivo: si passa dal vagone alla cittadella in poche ore',
            ],
            perChi: 'Chi ha poco tempo, viaggia con bambini o non vuole affrontare un trek in quota.',
          },
          {
            nome: 'Cammino Inca classico (4 giorni)',
            sintesi:
              'Il trek storico lungo la via lastricata originale, con arrivo a Machu Picchu attraverso Intipunku, la Porta del Sole, all\'alba dell\'ultimo giorno. Obbligatorio andarci con un\'agenzia autorizzata: non è percorribile in autonomia.',
            costo: 'indicativamente 600-900$ a persona, tutto incluso (permesso, guida, portatori, campo, pasti, treno di rientro)',
            durata: '4 giorni, 3 notti',
            pro: [
              'L\'arrivo dalla Porta del Sole è il modo in cui il sito era pensato per essere visto',
              'Siti inca lungo il percorso che nessun\'altra via tocca',
              'Tutto organizzato: portatori, cuoco, tende',
            ],
            contro: [
              'I permessi sono contingentati e si esauriscono anche 5-6 mesi prima, soprattutto per i mesi da maggio ad agosto',
              'Chiuso tutto febbraio per manutenzione',
              'Passo Warmiwañusca a 4.215 metri: serve acclimatamento vero',
            ],
            perChi: 'Chi vuole l\'esperienza storica completa e può prenotare con molti mesi di anticipo.',
          },
          {
            nome: 'Cammino Inca corto (2 giorni)',
            sintesi:
              'Versione ridotta che parte dal km 104 della ferrovia e copre l\'ultimo tratto del sentiero originale, con arrivo alla Porta del Sole nel pomeriggio e visita del sito il giorno dopo.',
            costo: 'indicativamente 400-550$ a persona',
            durata: '2 giorni, 1 notte (ad Aguas Calientes, non in tenda)',
            pro: [
              'Si arriva comunque da Intipunku, come nel percorso classico',
              'Molto meno impegnativo, si dorme in hotel',
              'Permessi più facili da trovare rispetto al classico',
            ],
            contro: [
              'Richiede comunque un permesso a numero chiuso',
              'Si perde gran parte del percorso e dei siti intermedi',
            ],
            perChi: 'Chi vuole l\'arrivo dalla Porta del Sole senza quattro giorni di campo in quota.',
          },
          {
            nome: 'Trek del Salkantay (4-5 giorni)',
            sintesi:
              'L\'alternativa più popolare al Cammino Inca: passo a 4.630 metri sotto il ghiacciaio Salkantay, poi discesa verso la foresta nuvolosa e arrivo ad Aguas Calientes via Hidroeléctrica.',
            costo: 'indicativamente 350-600$ a persona secondo il livello dei campi',
            durata: '4-5 giorni',
            pro: [
              'Nessun permesso a numero chiuso: si può prenotare anche pochi giorni prima',
              'Paesaggi più vari del Cammino Inca, dal ghiacciaio alla giungla',
              'Costa sensibilmente meno',
            ],
            contro: [
              'Il passo è più alto di quello del Cammino Inca: la quota si sente',
              'Non si arriva dalla Porta del Sole ma dal basso, come chi arriva in treno',
            ],
            perChi: 'Chi vuole un trek impegnativo e panoramico senza dipendere dai permessi.',
          },
          {
            nome: 'Via Hidroeléctrica (bus + camminata)',
            sintesi:
              'L\'opzione low cost: minibus da Cusco fino alla centrale di Hidroeléctrica, poi 2-3 ore di cammino pianeggiante lungo i binari fino ad Aguas Calientes.',
            costo: 'indicativamente 30-60$ andata e ritorno per il trasporto',
            durata: '2 giorni (6-7 ore di strada per tratta più la camminata)',
            pro: [
              'Di gran lunga la via più economica per raggiungere il sito',
              'La camminata finale lungo la ferrovia è piacevole e pianeggiante',
            ],
            contro: [
              'La strada è lunga, tortuosa e in alcuni tratti esposta: non è un tragitto comodo',
              'Nella stagione delle piogge sono frequenti frane e interruzioni',
              'Giornata molto lunga, con partenza prima dell\'alba',
            ],
            perChi: 'Chi viaggia con budget ridotto e ha un giorno in più da spendere.',
          },
          {
            nome: 'Inca Jungle Trek (3-4 giorni)',
            sintesi:
              'Formula avventura che mette insieme discesa in mountain bike, rafting, zipline e camminata, con arrivo finale ad Aguas Calientes.',
            costo: 'indicativamente 250-450$ a persona secondo le attività incluse',
            durata: '3-4 giorni',
            pro: [
              'Il modo più divertente di arrivarci se si cerca adrenalina più che archeologia',
              'Nessun permesso richiesto',
              'Quote più basse rispetto agli altri trek: meno problemi di altitudine',
            ],
            contro: [
              'Poco contenuto storico-archeologico lungo il percorso',
              'La qualità di bici e attrezzature varia molto da operatore a operatore',
            ],
            perChi: 'Chi è giovane dentro, cerca attività e non è interessato al cammino storico.',
          },
        ],
        raccomandazione:
          'Con date fisse e poco tempo, treno da Ollantaytambo con notte ad Aguas Calientes: si entra al primo turno e si evita la corsa. Con 4-5 giorni e voglia di camminare, il Salkantay dà più paesaggio per meno soldi e senza l\'ansia dei permessi. Il Cammino Inca classico vale la pena solo se si può decidere — e prenotare — con almeno cinque o sei mesi di anticipo.',
      },
    ],
    doveDormire:
      'Aguas Calientes (Machu Picchu Pueblo) è l\'unica base che permette di entrare al primo turno senza dipendere dal primo treno del giorno; in alternativa Ollantaytambo o la Valle Sacra per una visita in giornata.',
    doveMangiare:
      'Aguas Calientes vive di turismo e i prezzi lo dimostrano: i ristoranti sulla via principale sono cari e mediocri, meglio scendere verso il mercato per mangiare a una frazione del prezzo. Conviene comunque portarsi acqua e qualcosa da mangiare per la visita, perché dentro il sito non si può consumare cibo.',
    comeArrivare: 'Vedi il confronto qui sopra: treno, trek o via Hidroeléctrica, tutte con arrivo ad Aguas Calientes.',
    comeSpostarsi:
      'Da Aguas Calientes all\'ingresso del sito: bus navetta Consettur, circa 25 minuti e 24$ andata e ritorno, oppure 1h30-2h a piedi in salita. Dentro il sito ci si muove solo lungo il circuito assegnato.',
    periodoMigliore:
      'maggio-settembre per i cieli limpidi, ma è anche il periodo in cui tutto si esaurisce prima. Aprile e ottobre sono un buon compromesso tra meteo e affollamento',
    costi:
      'Ingresso: circa 152 soles per il circuito base; il circuito con Huayna Picchu o con la Montaña Machu Picchu costa circa 200 soles (54$ circa). L\'unico venditore ufficiale è il portale del Ministero della Cultura, tuboleto.cultura.pe: tutto il resto sono rivenditori con ricarico.',
    erroriDaEvitare: [
      'Prenotare tardi: per Huayna Picchu servono 2-3 mesi di anticipo in qualsiasi stagione, 3-4 nei mesi di punta, e i posti finiscono in fretta',
      'Comprare i biglietti da rivenditori non ufficiali a prezzi gonfiati invece che su tuboleto.cultura.pe',
      'Scegliere il circuito senza leggere cosa include: i percorsi sono vincolanti e alcuni non passano dai punti che si danno per scontati',
      'Arrivare a Cusco e salire a Machu Picchu il giorno dopo, senza acclimatamento',
    ],
    miaEsperienza:
      'È uno di quei posti di cui si sono viste talmente tante foto da temere la delusione, e invece regge — ma regge nella prima ora, quando la nebbia si alza a strappi e il sito compare a pezzi. Dopo, con i gruppi in fila lungo il circuito assegnato, diventa un\'altra cosa: bellissima, ma gestita. Il consiglio che vale più di tutti è dormire ad Aguas Calientes ed entrare al primo turno, non per la luce ma per quei quaranta minuti in cui il posto è ancora silenzioso. E conviene sapere prima che non si gira liberamente: il circuito scelto al momento della prenotazione decide cosa si vedrà e cosa no.',
    esperienzeSlugs: ['huayna-picchu', 'cammino-inca'],
    tripSlugs: [],
    imageAlt: 'La cittadella inca di Machu Picchu vista dall\'alto con il Huayna Picchu sullo sfondo',
  },
  {
    slug: 'choquequirao',
    paeseSlug: 'peru',
    ordine: 4,
    nome: 'Choquequirao',
    tipologia: ['trekking', 'cultura', 'avventura'],
    giorniConsigliati: '4-5 giorni per l\'andata e ritorno classico',
    visitataPersonalmente: true,
    introduzione:
      'La "sorella di Machu Picchu": una cittadella inca di dimensioni paragonabili, scavata solo per circa un terzo, appollaiata sopra il canyon dell\'Apurímac. Ci arrivano meno di diecimila persone all\'anno, contro il milione e mezzo di Machu Picchu, e il motivo è semplice: non c\'è altro modo che camminare per due giorni.',
    percheAndarci:
      'È il posto dove si può stare davanti a rovine inca di quella scala praticamente da soli — un\'esperienza che a Machu Picchu non esiste più da decenni. Ed è una finestra che si sta chiudendo: da anni si parla di una teleferica che ridurrebbe l\'accesso da due giorni di cammino a venti minuti.',
    cosaVedere: [
      'La piazza cerimoniale e il settore degli usnu, la parte centrale della cittadella',
      'Le terrazze delle llamas, decorate con figure di lama in pietra bianca incastonata',
      'Il settore agricolo con i terrazzamenti che scendono lungo il fianco della montagna',
      'Il canyon dell\'Apurímac, uno dei più profondi del continente, che si attraversa scendendo e risalendo circa 1.500 metri per lato',
    ],
    cosaFare: [
      'Il trek classico di 4-5 giorni da Cachora, andata e ritorno per la stessa via — vedi la scheda esperienza dedicata',
      'La traversata lunga Choquequirao-Machu Picchu, 8-9 giorni, uno dei trek più duri e belli del Perù',
      'Fermarsi due notti al sito invece di una, per avere una giornata piena tra le rovine senza la stanchezza della salita',
    ],
    doveDormire:
      'Campeggio lungo tutto il percorso (Chiquisca, Santa Rosa, Marampata), con alcune famiglie che affittano spazi e servizi essenziali a Marampata, il villaggio più vicino al sito.',
    doveMangiare: 'Pasti preparati dalla propria organizzazione di trek; a Marampata e Chiquisca si trova qualcosa di semplice.',
    comeArrivare: 'Da Cusco circa 4 ore di auto fino a Cachora (regione di Apurímac), il punto di partenza del sentiero.',
    comeSpostarsi: 'Solo a piedi. I muli si possono noleggiare per i bagagli e, in alcuni tratti, per chi è in difficoltà.',
    periodoMigliore:
      'da aprile a ottobre. Nella stagione delle piogge il sentiero diventa pericoloso per le frane e il caldo nel canyon è pesante in qualsiasi periodo',
    costi:
      'Trek organizzato indicativamente 400-700$ a persona per 4-5 giorni con guida, muli e pasti; in autonomia si spende molto meno, con l\'ingresso al sito attorno ai 60 soles.',
    confronti: [
      {
        titolo: 'Andarci ora o aspettare la teleferica?',
        introduzione:
          'Il progetto di una teleferica per Choquequirao esiste dal 2011 e da allora è stato rinviato più volte per ragioni tecniche, legali, ambientali e sociali. Nel 2026 è ancora in fase di gara, con il modello della partnership pubblico-privata, e senza una data di costruzione confermata. Cambierebbe radicalmente il posto.',
        opzioni: [
          {
            nome: 'Andarci adesso, a piedi',
            sintesi: 'Il trek di 4-5 giorni da Cachora, come si fa oggi: due giorni di cammino per arrivare, con discesa e risalita del canyon dell\'Apurímac.',
            durata: '4-5 giorni',
            costo: '400-700$ con agenzia, molto meno in autonomia',
            pro: [
              'Rovine di scala monumentale praticamente deserte: oggi ci vanno circa 10.000 persone l\'anno',
              'Il percorso in sé è considerato più duro del Cammino Inca e del Salkantay ed è parte dell\'esperienza',
              'Nessuna infrastruttura turistica: il posto è ancora com\'era',
            ],
            contro: [
              'Fisicamente impegnativo: circa 1.500 metri di dislivello in discesa e altrettanti in salita, due volte, con caldo forte nel fondovalle',
              'Serve tempo: 4-5 giorni minimo, difficili da incastrare in un itinerario corto',
            ],
            perChi: 'Chi cammina volentieri e vuole vedere il posto prima che cambi.',
          },
          {
            nome: 'Aspettare la teleferica',
            sintesi:
              'Il progetto prevede oltre 10 km di percorso aereo tra Kiuñalla (Apurímac) e Yanama (Cusco), con un investimento stimato attorno ai 261 milioni di dollari.',
            durata: '20 minuti invece di due giorni di cammino',
            pro: [
              'Renderebbe il sito accessibile a chiunque, a prescindere dalla forma fisica',
              'Tempi compatibili con una visita in giornata da Cusco',
            ],
            contro: [
              'Nessuna data di costruzione confermata: l\'aggiudicazione era attesa nell\'ultimo trimestre del 2026 e il progetto slitta da oltre un decennio',
              'La capacità passerebbe da circa 10.000 visitatori l\'anno a oltre un milione: sarebbe un altro posto',
            ],
            perChi: 'Chi non può o non vuole affrontare quattro giorni di trek in quota.',
          },
        ],
        raccomandazione:
          'Se si è in grado di camminare, andarci adesso. Il valore di Choquequirao oggi non sta solo nelle rovine, ma nel fatto che ci si arriva a fatica e ci si sta quasi da soli: è esattamente la cosa che la teleferica eliminerebbe.',
      },
    ],
    erroriDaEvitare: [
      'Sottovalutarlo perché "è meno famoso di Machu Picchu": le guide di Cusco lo considerano più duro sia del Cammino Inca sia del Salkantay',
      'Portare troppo peso: il dislivello si sente enormemente, i muli per i bagagli valgono ogni sol speso',
      'Andarci nella stagione delle piogge, quando il sentiero sul fianco del canyon diventa pericoloso',
      'Programmare una sola notte al sito: si arriva stanchi e si riparte subito, perdendo il senso del posto',
    ],
    miaEsperienza:
      'La cosa più dura del Perù, e quella che vale di più. La discesa nel canyon dell\'Apurímac inganna: si scende per ore con le gambe fresche pensando che stia andando bene, e solo dopo ci si ricorda che tutto quel dislivello va risalito dall\'altra parte, col sole addosso e senza un filo d\'ombra. Ma arrivare lassù e trovarsi davanti terrazzamenti di quella scala senza nessun altro intorno è qualcosa che a Machu Picchu non esiste più. Chi ci sta pensando lo faccia adesso: se la teleferica verrà costruita davvero, questo posto smetterà di essere quello che è.',
    esperienzeSlugs: ['trek-choquequirao'],
    tripSlugs: [],
    imageAlt: 'I terrazzamenti inca di Choquequirao sopra il canyon dell\'Apurímac, Perù',
  },
  {
    slug: 'amazzonia-peruviana',
    paeseSlug: 'peru',
    ordine: 5,
    nome: 'Amazzonia peruviana',
    tipologia: ['natura', 'avventura'],
    giorniConsigliati: '3-4 giorni da Puerto Maldonado, 5-7 da Iquitos, 6-8 per il Manu',
    visitataPersonalmente: true,
    introduzione:
      'Oltre metà del territorio peruviano è foresta amazzonica, e la domanda vera non è "andarci o no" ma "da quale porta entrare": Puerto Maldonado, Iquitos e il Manu offrono tre esperienze molto diverse per costo, difficoltà e tipo di fauna.',
    percheAndarci:
      'Perché è il contrappeso perfetto alle Ande e perché il Perù ha alcune delle aree protette più biodiverse del pianeta — la Riserva di Tambopata, il Parco Nazionale del Manu e la riserva Pacaya-Samiria.',
    cosaVedere: [
      'Le collpas, le pareti di argilla dove centinaia di pappagalli e ara si radunano all\'alba per integrare i minerali',
      'Le lontre giganti dei laghi a ferro di cavallo, come il Lago Sandoval',
      'I delfini rosa di fiume, più facili da avvistare nella zona di Iquitos',
      'Caimani, scimmie, bradipi e centinaia di specie di uccelli',
      'Le canopy walkway, le passerelle sospese tra le chiome degli alberi',
    ],
    cosaFare: [
      'Escursioni notturne nella foresta, quando la fauna è più attiva',
      'Navigazione all\'alba per l\'avvistamento di fauna lungo i fiumi',
      'Pesca ai piranha e visita alle comunità locali',
      'Birdwatching alle collpas, da farsi molto presto al mattino',
    ],
    confronti: [
      {
        titolo: 'Le tre porte dell\'Amazzonia peruviana a confronto',
        introduzione:
          'Puerto Maldonado, Iquitos e il Manu non sono varianti della stessa cosa: cambiano il tempo necessario, il costo, la difficoltà d\'accesso e persino gli animali che si vedono. Sceglierne una senza sapere cosa offrono le altre è il modo più comune di restare delusi da un lodge amazzonico.',
        opzioni: [
          {
            nome: 'Puerto Maldonado (Tambopata)',
            sintesi:
              'La porta più semplice: voli diretti da Cusco e da Lima, e lodge raggiungibili con brevi trasferimenti in barca lungo i fiumi Madre de Dios e Tambopata.',
            costo: 'indicativamente 300-600$ per 3 notti in lodge, tutto incluso; volo da Cusco poco più di un\'ora',
            durata: '3-4 giorni, il formato ideale',
            pro: [
              'Accesso rapidissimo: si può innestare in un itinerario Cusco-Machu Picchu senza stravolgerlo',
              'Ottimo per lontre giganti, ara alle collpas e fauna delle chiome',
              'Ampia scelta di lodge per tutte le fasce di prezzo',
            ],
            contro: [
              'La zona più vicina alla città è la più battuta: per la fauna migliore bisogna spingersi più a monte, e servono più ore di barca',
              'Meno "spedizione" e più circuito organizzato',
            ],
            perChi: 'Chi ha pochi giorni e vuole comunque un\'Amazzonia vera senza complicazioni logistiche.',
          },
          {
            nome: 'Iquitos (Pacaya-Samiria e Rio delle Amazzoni)',
            sintesi:
              'La più grande città al mondo non raggiungibile via strada: ci si arriva solo in aereo o risalendo il fiume. È la base per le spedizioni fluviali lunghe e per le crociere sul Rio delle Amazzoni.',
            costo: 'da 400-800$ per un lodge di qualche notte fino a diverse migliaia per le crociere fluviali',
            durata: '5-7 giorni per avere senso',
            pro: [
              'L\'esperienza fluviale più profonda: si naviga davvero, non si fa base in un lodge',
              'I delfini rosa si avvistano con più facilità che altrove',
              'La città stessa è un pezzo di storia del boom del caucciù, con un carattere che Puerto Maldonado non ha',
            ],
            contro: [
              'Si raggiunge solo via Lima: non si incastra bene in un giro andino',
              'Richiede più giorni per giustificare lo spostamento',
              'Alcune attrazioni vicino alla città sono molto turistiche, con animali tenuti in condizioni discutibili',
            ],
            perChi: 'Chi vuole il fiume come protagonista e ha una settimana da dedicargli.',
          },
          {
            nome: 'Parco Nazionale del Manu',
            sintesi:
              'Una delle aree più biodiverse del pianeta, raggiungibile da Cusco via terra e poi in barca, attraversando la discesa dalle Ande alla foresta di pianura.',
            costo: 'indicativamente 800-1.500$ per una spedizione di 6-8 giorni',
            durata: '6-8 giorni, non meno',
            pro: [
              'La biodiversità più alta delle tre: è il posto dove si vede di più, in assoluto',
              'La discesa dalle Ande alla foresta attraversa fasce di vegetazione completamente diverse, gallo delle rocce compreso',
              'Poco battuto: si incontrano pochissimi altri gruppi',
            ],
            contro: [
              'Il più costoso e il più lungo: due giorni di trasferimento solo per entrare e uscire',
              'Livello di difficoltà da moderato a impegnativo',
              'La zona riservata ha accessi limitati e richiede operatori autorizzati',
            ],
            perChi: 'Chi mette la fauna al primo posto e ha tempo e budget per una vera spedizione.',
          },
        ],
        raccomandazione:
          'In un viaggio classico di due settimane in Perù, Puerto Maldonado è la scelta sensata: costa poco in termini di tempo e restituisce comunque un\'Amazzonia autentica, purché si scelga un lodge abbastanza lontano dalla città. Iquitos ha senso solo se si dedica una settimana al fiume. Il Manu è per chi torna in Perù una seconda volta, o per chi viene apposta per la fauna.',
      },
    ],
    doveDormire:
      'Lodge nella foresta, quasi sempre venduti a pacchetto con trasferimenti, pasti ed escursioni incluse. La variabile che conta di più non è il lusso della struttura ma la distanza dalla città: più si risale il fiume, più fauna si vede.',
    doveMangiare: 'Pasti inclusi nei pacchetti dei lodge.',
    comeArrivare:
      'Puerto Maldonado: volo da Cusco (poco più di un\'ora) o da Lima. Iquitos: volo da Lima, oppure risalendo il fiume — non esistono strade. Manu: da Cusco via terra e poi in barca, con due giorni di trasferimento.',
    comeSpostarsi: 'Solo in barca lungo i fiumi e a piedi lungo i sentieri, sempre accompagnati da una guida del lodge.',
    periodoMigliore:
      'Da maggio a ottobre (acque basse) i sentieri sono più praticabili e la fauna si concentra lungo i corsi d\'acqua; da dicembre a maggio (acque alte) si naviga più in profondità nella foresta allagata. Non esiste una stagione senza pioggia.',
    costi: 'La voce principale è il pacchetto del lodge; il volo interno da Cusco a Puerto Maldonado costa poco se prenotato per tempo.',
    erroriDaEvitare: [
      'Scegliere il lodge più vicino alla città perché costa meno: è la ragione numero uno per cui la gente torna dicendo "non abbiamo visto niente"',
      'Andare in Amazzonia per due notti: la prima e l\'ultima giornata se ne vanno quasi interamente in trasferimenti',
      'Dimenticare il certificato di vaccinazione contro la febbre gialla, richiesto da alcuni lodge',
      'Sottovalutare il repellente, la torcia frontale e i sacchetti impermeabili per l\'elettronica',
    ],
    miaEsperienza:
      'Non è il documentario che ci si aspetta: nella foresta densa si sente molto più di quanto si veda, e le prime ore possono deludere chi arriva con l\'idea di trovare animali a ogni albero. Il momento che ribalta tutto è l\'alba alla collpa, quando centinaia di ara arrivano insieme sulla parete d\'argilla e per venti minuti non si riesce a guardare altro. L\'altra cosa che conta più di quanto sembri è la distanza dalla città: i lodge vicini sono comodi e non si vede quasi niente, quelli a qualche ora di barca in più cambiano completamente l\'esperienza. Al caldo umido, invece, non ci si abitua.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Ara colorate su una parete di argilla nella foresta amazzonica peruviana',
  },
  {
    slug: 'lago-titicaca',
    paeseSlug: 'peru',
    ordine: 6,
    nome: 'Lago Titicaca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '2-3 giorni dal lato peruviano, 4-5 se si prosegue in Bolivia',
    visitataPersonalmente: true,
    introduzione:
      'Il lago navigabile più alto del mondo, a 3.812 metri, diviso tra Perù e Bolivia. Dal lato peruviano si parte da Puno per le isole galleggianti degli Uros, Taquile e Amantaní; dal lato boliviano ci sono Copacabana e l\'Isla del Sol, e il confine si attraversa senza difficoltà.',
    percheAndarci:
      'Per le comunità che ci vivono, più che per il paesaggio: gli Uros costruiscono ancora le isole in totora, a Taquile la tessitura è patrimonio UNESCO e ad Amantaní si dorme in casa delle famiglie.',
    cosaVedere: [
      'Le isole galleggianti degli Uros, a pochi minuti di barca da Puno',
      'Taquile, con i suoi tessuti e la vista sulla parte boliviana del lago',
      'Amantaní, l\'isola dove si pernotta presso le famiglie',
      'Le torri funerarie preincaiche di Sillustani, poco fuori Puno',
      'Copacabana e l\'Isla del Sol, in Bolivia, dove secondo la tradizione nacque il primo Inca',
    ],
    cosaFare: [
      'Tour di due giorni con notte in homestay ad Amantaní: è quello che dà senso alla visita',
      'Proseguire via terra verso la Bolivia (vedi il confronto qui sotto)',
      'Kayak all\'alba sul lago, dove l\'acqua è ferma e la luce migliore',
    ],
    confronti: [
      {
        titolo: 'Estendere il Titicaca alla Bolivia: come e se conviene',
        introduzione:
          'Puno e Copacabana distano poche ore e il confine di Kasani/Yunguyo è uno dei più semplici del continente. La domanda è se fermarsi al lato peruviano o incrociare anche quello boliviano, che ha un carattere diverso.',
        opzioni: [
          {
            nome: 'Solo lato peruviano (Puno)',
            sintesi: 'Base a Puno, con Uros, Taquile ed eventualmente la notte ad Amantaní.',
            durata: '2-3 giorni',
            pro: [
              'Non serve attraversare frontiere, tutto si incastra facilmente con Cusco o Arequipa',
              'L\'homestay ad Amantaní è l\'esperienza più autentica del lago',
            ],
            contro: [
              'Gli Uros sono il punto più turistico e organizzato di tutto il lago',
              'Puno come città ha poco da offrire',
            ],
            perChi: 'Chi ha un itinerario solo peruviano e pochi giorni.',
          },
          {
            nome: 'Estensione a Copacabana e Isla del Sol (Bolivia)',
            sintesi:
              'Bus da Puno a Copacabana attraversando il confine di Kasani (circa 3-4 ore in totale, con la formalità di uscita e ingresso a piedi), poi barca per l\'Isla del Sol.',
            costo: 'bus 10-20$; barca per l\'Isla del Sol pochi dollari; tasse d\'ingresso locali sull\'isola',
            durata: '2-3 giorni in più',
            pro: [
              'L\'Isla del Sol è più bella e meno costruita delle isole peruviane, con sentieri panoramici tra rovine inca',
              'Copacabana ha un\'atmosfera da paese di pellegrinaggio che Puno non ha',
              'Apre naturalmente la strada a La Paz e al resto della Bolivia',
            ],
            contro: [
              'Va messa in conto la logistica di frontiera, con i timbri di uscita e ingresso da fare a piedi',
              'Sull\'Isla del Sol le tensioni tra comunità hanno a tratti limitato l\'accesso alla parte nord: da verificare sul posto',
            ],
            perChi: 'Chi sta facendo un giro sudamericano più ampio o vuole entrare in Bolivia via terra.',
          },
        ],
        raccomandazione:
          'Se la Bolivia è già in programma, il Titicaca è il modo migliore per entrarci: si passa da Puno a Copacabana in mezza giornata e si arriva a La Paz il giorno dopo. Se invece il viaggio resta peruviano, due giorni a Puno con la notte ad Amantaní bastano e avanzano.',
      },
    ],
    doveDormire: 'Puno per la logistica; Amantaní per l\'homestay, che è la ragione principale per venire fin qui.',
    doveMangiare:
      'Lima è il motivo gastronomico del viaggio: ceviche a pranzo in una cevichería di quartiere (la sera è considerato fuori orario e il pesce non è più quello del mattino), poi tiradito, causa, lomo saltado e anticuchos dai carretti la sera. L\'alta cucina per cui la città è famosa va prenotata con settimane di anticipo.',
    comeArrivare:
      'Da Cusco, bus turistico di circa 7-8 ore con soste ai siti lungo la strada (la formula migliore), treno panoramico Andean Explorer, oppure volo su Juliaca. Da Arequipa circa 6 ore di bus.',
    comeSpostarsi: 'Barche collettive e tour organizzati dal porto di Puno; a Taquile e Amantaní ci si muove solo a piedi, in salita.',
    periodoMigliore: 'maggio-settembre per il sole; le notti sono gelide tutto l\'anno a quasi 3.900 metri',
    costi: 'tour di due giorni con homestay indicativamente 30-60$ a persona, uno dei migliori rapporti qualità-prezzo del Perù',
    erroriDaEvitare: [
      'Arrivare a Puno direttamente da bassa quota: a 3.812 metri il mal d\'altitudine è più probabile che a Cusco',
      'Fare solo il giro degli Uros in mezza giornata e ripartire: è la parte più turistica e meno rappresentativa del lago',
      'Sottovalutare il freddo notturno nelle case di Amantaní, dove non c\'è riscaldamento',
    ],
    miaEsperienza:
      'Gli Uros, va detto, sono una messa in scena: si arriva, si assiste alla spiegazione su come si costruisce l\'isola di totora, si compra qualcosa e si riparte. Mezz\'ora interessante, non di più. Il Titicaca diventa un\'altra cosa il giorno dopo ad Amantaní, dove si dorme in casa di una famiglia senza riscaldamento né acqua calda, si cena con loro e si sale al tempio per il tramonto. Non è comodo — a 3.800 metri la notte si gela davvero — ma è l\'unico momento in cui si esce dal circuito. Dovendo scegliere una sola cosa sul lago, è quella.',
    esperienzeSlugs: ['homestay-amantani'],
    tripSlugs: [],
    imageAlt: 'Isole galleggianti di totora degli Uros sul lago Titicaca, Perù',
  },
  {
    slug: 'lima',
    paeseSlug: 'peru',
    ordine: 7,
    nome: 'Lima',
    tipologia: ['città', 'cibo'],
    giorniConsigliati: '2 giorni, spesso all\'inizio e alla fine del viaggio',
    visitataPersonalmente: true,
    introduzione:
      'La capitale sull\'oceano, punto di arrivo di ogni volo internazionale e, negli ultimi vent\'anni, una delle capitali gastronomiche mondiali: diversi ristoranti della città compaiono stabilmente nelle classifiche dei migliori al mondo.',
    percheAndarci: 'Perché ci si passa comunque, e perché è il posto dove la cucina peruviana si vede al massimo livello, dal ceviche di quartiere all\'alta cucina.',
    cosaVedere: [
      'Il centro storico coloniale, Patrimonio UNESCO, con la Plaza Mayor e il convento di San Francisco',
      'Miraflores e il Malecón, la passeggiata sulla scogliera a picco sull\'oceano',
      'Barranco, il quartiere bohémien con i murales e il Puente de los Suspiros',
      'Il Museo Larco, con la più importante collezione di arte precolombiana del paese',
      'Huaca Pucllana, la piramide preincaica in mezzo a Miraflores',
    ],
    cosaFare: [
      'Mangiare ceviche in una cevichería a pranzo, come si usa qui (la sera è considerato fuori orario)',
      'Tour gastronomico tra mercati e cucine di quartiere',
      'Parapendio dalla scogliera di Miraflores',
      'Prenotare con largo anticipo uno dei ristoranti da classifica mondiale, se interessa',
    ],
    doveDormire: 'Miraflores per comodità e sicurezza, Barranco per l\'atmosfera; entrambi lontani dal centro storico ma ben collegati.',
    doveMangiare:
      'La cucina arequipeña è diversa da quella del resto del Perù e vale la pena assaggiarla nelle picanterías tradizionali: rocoto relleno, adobo la domenica mattina e chupe de camarones. Nel canyon l\'offerta si riduce ai menù fissi dei piccoli ristoranti dei villaggi.',
    comeArrivare: 'Aeroporto Jorge Chávez, l\'unico scalo intercontinentale del paese. Dall\'aeroporto al centro, taxi autorizzati o app: mai i tassisti abusivi all\'uscita.',
    comeSpostarsi: 'Taxi tramite app, Metropolitano per gli assi principali; il traffico è pesante, i tempi vanno sempre maggiorati.',
    periodoMigliore: 'dicembre-aprile per il sole; da giugno a novembre la garúa, una foschia umida costante, copre la città',
    costi: 'nella media; l\'alta cucina ha prezzi internazionali, il resto no',
    erroriDaEvitare: [
      'Prendere taxi non autorizzati all\'uscita dell\'aeroporto: è uno dei punti dove i furti a turisti sono più frequenti',
      'Saltarla del tutto: molti ci passano solo in transito, ma due giorni qui raccontano un Perù che sulle Ande non si vede',
    ],
    miaEsperienza:
      'La descrivono come una città da attraversare in fretta, e invece è quella che lascia la voglia di tornare. Non per i monumenti, il centro coloniale si vede in mezza giornata: per il cibo. Un ceviche mangiato a pranzo in una cevichería di quartiere, col pesce arrivato la mattina, rovina tutti i ceviche successivi. La garúa, quella foschia grigia che copre la città per mesi, rende tutto un po\' malinconico, e il traffico è pesante — ma Barranco al tramonto, con l\'oceano sotto la scogliera, vale la sosta.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Il Malecón di Miraflores a Lima con la scogliera a picco sull\'oceano Pacifico',
  },
  {
    slug: 'arequipa-colca',
    paeseSlug: 'peru',
    ordine: 8,
    nome: 'Arequipa e il Colca',
    tipologia: ['cultura', 'natura'],
    giorniConsigliati: '3-4 giorni, di cui due per il canyon',
    visitataPersonalmente: true,
    introduzione:
      'La "città bianca", costruita in sillar, la pietra vulcanica chiara, ai piedi del vulcano Misti — e a poche ore il Canyon del Colca, uno dei più profondi al mondo, dove i condor si alzano in volo la mattina presto.',
    percheAndarci:
      'Arequipa sta a 2.300 metri ed è la tappa perfetta per acclimatarsi gradualmente prima di salire a Cusco o Puno, invece di arrivare in quota di colpo.',
    cosaVedere: [
      'Il Monastero di Santa Catalina, una città nella città con vicoli e cortili colorati',
      'La Plaza de Armas e la cattedrale in sillar bianco',
      'La mummia Juanita al Museo Santuarios Andinos',
      'La Cruz del Cóndor, nel Canyon del Colca, punto di avvistamento dei condor andini',
      'I villaggi coloniali e i terrazzamenti preincaici lungo il canyon',
    ],
    cosaFare: [
      'Alzarsi presto per la Cruz del Cóndor: i condor sfruttano le correnti termiche del mattino',
      'Trek di due giorni nel canyon fino all\'oasi di Sangalle, con risalita all\'alba',
      'Bagni termali di La Calera a Chivay',
      'Assaggiare il rocoto relleno e gli altri piatti della cucina arequipeña, diversa da quella del resto del paese',
    ],
    doveDormire: 'Centro storico di Arequipa; Chivay o Cabanaconde come basi per il canyon.',
    doveMangiare:
      'A Huaraz si mangia semplice e abbondante, come in una base di montagna: zuppe calde, trucha e menú del día a prezzi molto bassi. Per i trek conviene fare scorta al mercato centrale, molto più economico dei negozi per turisti.',
    comeArrivare: 'Volo da Lima (circa 1h30) o bus notturno; da Puno circa 6 ore di bus.',
    comeSpostarsi: 'Arequipa si gira a piedi; per il Colca tour organizzati di due giorni o bus di linea fino a Chivay e Cabanaconde.',
    periodoMigliore: 'maggio-settembre; i condor si avvistano tutto l\'anno ma con più probabilità nelle prime ore del mattino',
    costi: 'ingresso al Monastero di Santa Catalina e boleto turistico del Colca a parte, entrambi contenuti',
    erroriDaEvitare: [
      'Fare il Colca in un\'unica giornata da Arequipa: significa partire alle 3 del mattino e passare quasi tutto il tempo in pullman',
      'Sottovalutare la risalita dall\'oasi di Sangalle: circa 1.100 metri di dislivello, da fare prima che il sole picchi',
    ],
    miaEsperienza:
      'È la città dove finalmente si dorme: a 2.300 metri il corpo recupera, e dopo giorni passati in quota si sente. Il Monastero di Santa Catalina è il posto che resta più impresso — non ci si aspetta che sia così grande, è letteralmente una piccola città murata con i vicoli dipinti di blu e arancione. Alla Cruz del Cóndor invece bisogna arrivare con le aspettative giuste: i condor si alzano con le correnti del mattino e quando succede è impressionante, ma non è garantito e la piazzola è piena di gente. Vale comunque la sveglia all\'alba.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Il Monastero di Santa Catalina ad Arequipa con i muri colorati e il vulcano Misti sullo sfondo',
  },
  {
    slug: 'huaraz-cordillera-blanca',
    paeseSlug: 'peru',
    ordine: 9,
    nome: 'Huaraz e la Cordillera Blanca',
    tipologia: ['trekking', 'natura', 'avventura'],
    giorniConsigliati: '4-7 giorni, secondo i trek scelti',
    visitataPersonalmente: true,
    introduzione:
      'La catena tropicale più alta del mondo, con oltre trenta cime sopra i 6.000 metri e laghi glaciali dai colori irreali. È il Perù dell\'alta montagna, quasi ignorato da chi viene solo per Machu Picchu.',
    percheAndarci:
      'Perché è il miglior terreno di trekking del paese e perché la Laguna 69 e il circuito di Santa Cruz reggono il confronto con qualsiasi trek andino, a una frazione del costo e della folla del circuito di Cusco.',
    cosaVedere: [
      'La Laguna 69, a 4.600 metri, dal colore turchese quasi artificiale',
      'Il Nevado Huascarán, la montagna più alta del Perù (6.768 m)',
      'La Laguna Parón, la più grande della Cordillera Blanca',
      'Il sito archeologico di Chavín de Huántar, Patrimonio UNESCO',
      'Il Nevado Pastoruri, uno dei pochi ghiacciai raggiungibili in giornata',
    ],
    cosaFare: [
      'Laguna 69 in giornata: il classico, impegnativo per la quota più che per la distanza',
      'Trek di Santa Cruz, 4 giorni tra i 6.000 della cordigliera',
      'Alpinismo di introduzione sul Nevado Mateo o sull\'Ishinca, per chi ha esperienza',
    ],
    doveDormire: 'Huaraz è la base di tutto: ostelli e piccoli hotel, con agenzie di trekking a ogni angolo.',
    doveMangiare:
      'Huaraz è una città di montagna e si mangia di conseguenza: zuppe calde a ogni pasto, trucha (trota) degli allevamenti in quota, cuy e il pachamanca, la carne cotta sotto terra con pietre roventi, che si trova soprattutto nei fine settimana. Il mercato centrale al mattino serve caldo de gallina e gli infusi di erbe d\'altura che aiutano davvero nei primi giorni. Per le giornate di trekking, il pranzo al sacco lo preparano le agenzie o lo si compra al mercato: sui sentieri non c\'è nulla.',
    comeArrivare: 'Bus notturno da Lima, circa 8 ore. Non ci sono voli regolari comodi: la strada è la via normale.',
    comeSpostarsi: 'Collettivi e tour giornalieri dalle agenzie di Huaraz per tutti i punti di partenza dei trek.',
    periodoMigliore: 'da maggio a settembre, la stagione secca: nel resto dell\'anno i sentieri in quota diventano impraticabili',
    costi: 'tra le zone più economiche del Perù: una giornata guidata alla Laguna 69 costa poche decine di dollari',
    erroriDaEvitare: [
      'Arrivare da Lima (livello del mare) e partire il giorno dopo per la Laguna 69 a 4.600 metri: serve acclimatarsi a Huaraz per almeno due giorni',
      'Affidarsi alle agenzie più economiche senza verificare guide e attrezzatura, soprattutto per i trek multi-giorno',
    ],
    miaEsperienza:
      'È la parte di Perù che quasi nessuno fa, ed è un peccato: la Cordillera Blanca regge il confronto con qualsiasi cosa si veda intorno a Cusco, a una frazione del prezzo e senza code. La Laguna 69 è la sintesi di tutto: gli ultimi quaranta minuti sopra i 4.500 metri sono una lotta col fiato, venti passi e una sosta, e poi ci si trova davanti a quel turchese che sembra ritoccato e non lo è. Il paese in sé non è bello, è una base di appoggio piena di agenzie — ma è esattamente quello che serve.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'La Laguna 69 dal colore turchese ai piedi dei ghiacciai della Cordillera Blanca, Perù',
  },
]
