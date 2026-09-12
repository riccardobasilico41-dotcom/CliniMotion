import type { Meraviglia } from '@/lib/types'

// Le Sette Meraviglie del Mondo Moderno (New7Wonders, 2007). Contenuto guida
// puramente pratico e verificabile (storia, prenotazione, prezzi, come
// arrivare, truffe comuni) — non un itinerario di viaggio personale.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni monumento (affollamento,
// orari, fatica, regole di accesso) e non su ricordi reali: vanno riletti e
// sostituiti con i tuoi. Restano assenti sul Cristo Redentore, l'unica delle
// sette non ancora vista. Prezzi, orari e regole di prenotazione cambiano
// spesso: vanno sempre riverificati sui siti ufficiali prima di partire.

export const meraviglie: Meraviglia[] = [
  {
    slug: 'grande-muraglia-cinese',
    nome: 'Grande Muraglia Cinese',
    nomeLocale: '长城 (Chángchéng)',
    paese: 'Cina',
    citta: 'Pechino (varie sezioni)',
    titolo: 'Grande Muraglia Cinese: quale sezione scegliere e come arrivarci da Pechino',
    descrizione:
      'Oltre 21.000 km di fortificazioni costruite in oltre duemila anni, di cui i tratti meglio conservati risalgono alla dinastia Ming (XIV-XVII secolo). Non un singolo monumento ma una rete di sezioni molto diverse tra loro per stato di conservazione, affollamento e difficoltà — la scelta della sezione giusta conta più di ogni altro dettaglio pratico.',
    storiaBreve:
      'Costruita e ricostruita a partire dal VII secolo a.C. da diversi stati e dinastie per difendersi dalle incursioni nomadi del nord, raggiunse la forma oggi più visibile sotto i Ming. Patrimonio UNESCO dal 1987, eletta tra le New7Wonders nel 2007.',
    visitataPersonalmente: true,
    periodoMigliore:
      'aprile-giugno e settembre-novembre, clima mite e minore umidità; evitare agosto (caldo/afa) e le settimane della Golden Week di inizio ottobre e del Capodanno cinese, quando ogni sezione è presa d\'assalto.',
    durataConsigliata: 'mezza giornata per Badaling o Mutianyu, giornata intera per Jinshanling o Simatai incluse le soste',
    comeArrivareInternazionale: 'Aeroporto di Pechino Capitale (PEK) o Daxing (PKX).',
    comeArrivareLocale:
      'Badaling: treno diretto da Pechino Nord (circa 1h) o bus turistico 877 da Deshengmen — la sezione più facile da raggiungere in autonomia. Mutianyu: nessun treno diretto, bus turistico stagionale o auto/tour privato (circa 1h30). Jinshanling e Simatai: più lontane (2-3h), quasi sempre convenienti solo con tour organizzato o autista privato per l\'intera giornata.',
    comeSpostarsi:
      'A Badaling e Mutianyu funivia/seggiovia disponibile per salire (consigliata, il dislivello a piedi è impegnativo); a Mutianyu esiste anche uno scivolo/toboga per la discesa, un\'esperienza a sé. A Jinshanling e Simatai si cammina di più, sentieri meno battuti e in parte non restaurati.',
    prenotazione:
      'A Badaling è in vigore un sistema di prenotazione online nominale (real-name), obbligatorio con passaporto nei periodi di alta affluenza — meglio prenotare qualche giorno prima sul sito ufficiale o tramite un\'agenzia. Mutianyu, Jinshanling e Simatai sono generalmente acquistabili anche in loco, ma prenotare online evita le code.',
    prezzi:
      'Badaling: circa 45-180 RMB a seconda di stagione e funivia inclusa. Mutianyu: ingresso circa 45 RMB, funivia/toboga extra 120-180 RMB andata e ritorno. Jinshanling: circa 65-100 RMB. Simatai: ingresso combinato con la visita serale, prezzi più alti e su prenotazione separata per gli slot notturni.',
    tourOAutonomo:
      'Badaling e Mutianyu si visitano bene anche in autonomia con i mezzi pubblici o un taxi/Didi. Per Jinshanling e Simatai conviene un tour organizzato o un autista privato per l\'intera giornata: i collegamenti pubblici sono scarsi e i tempi di trasferimento lunghi.',
    scamDaEvitare: [
      'Venditori ambulanti fuori dagli hotel di Pechino che offrono "tour economici" verso sezioni improvvisate o mai raggiunte davvero — prenotare solo tramite agenzie con recensioni verificabili',
      'Tassisti che sostengono che la sezione scelta sia "chiusa" per dirottare verso un\'altra meta convenzionata a loro favore',
      'Venditori di biglietti "scontati" fuori dagli ingressi ufficiali: i biglietti si comprano solo alle biglietterie o online sui canali ufficiali',
    ],
    sezioniDaVedere: [
      {
        nome: 'Badaling',
        perche: 'la sezione più restaurata e turistica, la più semplice da raggiungere in autonomia da Pechino — ma anche la più affollata.',
      },
      {
        nome: 'Mutianyu',
        perche: 'ben restaurata come Badaling ma meno affollata, con funivia e il celebre toboga per la discesa — il miglior compromesso per chi ha poco tempo.',
      },
      {
        nome: 'Jinshanling',
        perche: 'parzialmente restaurata, ottima per chi vuole camminare a lungo lungo torri di guardia più autentiche e panorami meno battuti.',
      },
      {
        nome: 'Simatai',
        perche: 'la sezione più selvaggia e meno ricostruita, l\'unica che si può visitare anche di sera con illuminazione dedicata (prenotazione a parte).',
      },
    ],
    giorniSpeciali:
      'Da evitare assolutamente: la Golden Week (prima settimana di ottobre) e il Capodanno cinese (variabile tra fine gennaio e febbraio), quando ogni sezione — Badaling in testa — raggiunge livelli di affollamento estremi. Simatai offre visite serali a pagamento in date limitate, da prenotare con anticipo.',
    doveDormire: 'Pechino città, per la comodità dei collegamenti verso qualsiasi sezione si scelga; alcune guesthouse vicino a Mutianyu permettono un\'alba sulla muraglia senza folla.',
    erroriDaEvitare: [
      'Sottovalutare la ripidezza e il numero di gradini, specialmente a Jinshanling e Simatai: non è una semplice passeggiata',
      'Andarci in piena estate senza acqua e protezione solare: gran parte dei percorsi non ha ombra',
      'Scegliere Badaling nei weekend o nei giorni festivi cinesi aspettandosi tranquillità',
    ],
    miaEsperienza:
      'Il consiglio che conta più di tutti riguarda quale tratto scegliere, perché fa la differenza tra una gita in mezzo alla folla e una giornata memorabile. Badaling è vicino, comodo e restaurato al punto da sembrare un parco a tema: nei giorni di festa ci si muove in fila indiana. Mutianyu è il compromesso giusto, con la seggiovia per salire e la slitta per scendere, che sembra una trovata turistica e invece è uno dei modi più divertenti di finire la giornata. Ma il tratto che resta davvero è Jinshanling: due ore da Pechino, torri non restaurate, erba tra le pietre e per lunghi tratti nessun altro in vista. Va anche detta la fatica, che le foto non trasmettono: non è una passeggiata in piano ma un continuo su e giù su gradini di altezza diversa, alcuni altissimi, e dopo tre ore le gambe se ne accorgono.',
    heroImageAlt: 'La Grande Muraglia Cinese che si snoda tra le colline a Mutianyu, vicino Pechino',
  },
  {
    slug: 'petra',
    nome: 'Petra',
    nomeLocale: 'البتراء (Al-Batrāʾ)',
    paese: 'Giordania',
    citta: 'Wadi Musa',
    titolo: 'Petra: Jordan Pass, Petra by Night e come organizzare la visita al sito nabateo',
    descrizione:
      'L\'antica capitale del regno nabateo, scavata nella roccia arenaria rosa a partire dal IV secolo a.C. Oltre 800 monumenti su più di 8 km di estensione, con il Tesoro (Al-Khazneh) e il Monastero (Ad-Deir) come punti più iconici.',
    storiaBreve:
      'Fondata come capitale nabatea e crocevia delle rotte carovaniere dell\'incenso, fu abbandonata dopo un terremoto nel 363 d.C. e riscoperta per il mondo occidentale nel 1812 dall\'esploratore svizzero Johann Ludwig Burckhardt. Patrimonio UNESCO dal 1985, New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'marzo-maggio e settembre-novembre; l\'estate è molto calda e priva d\'ombra lungo quasi tutto il percorso, l\'inverno può portare rari ma intensi acquazzoni con rischio di flash flood nel Siq.',
    durataConsigliata: 'una giornata intera per il percorso principale fino al Monastero, due giorni per esplorare anche i sentieri meno battuti (Alta Place of Sacrifice, tombe periferiche)',
    comeArrivareInternazionale: 'Aeroporto di Amman-Regina Alia (AMM), in alternativa Aqaba (AQJ) più vicino se si arriva dal Mar Rosso.',
    comeArrivareLocale: 'Da Amman, circa 3 ore di auto o bus JETT fino a Wadi Musa, la cittadina all\'ingresso del sito; da Aqaba circa 2 ore.',
    comeSpostarsi:
      'All\'interno del sito si cammina molto (fino a 8 km andata e ritorno per il Monastero). Sono disponibili a pagamento carrozza fino all\'inizio del Siq, cavallo per il primo tratto del Siq (incluso nel biglietto solo per un breve tratto), asino o cammello per tratti più lunghi — tutti opzionali e spesso oggetto di richieste di mance oltre l\'accordo iniziale.',
    prenotazione:
      'Il Jordan Pass (acquistabile online prima del viaggio) copre il visto d\'ingresso in Giordania e l\'accesso a Petra ed è conveniente per chi resta almeno 3 notti nel paese. In alternativa si acquista il biglietto direttamente in loco (1, 2 o 3 giorni), senza necessità di prenotazione anticipata per l\'ingresso diurno.',
    prezzi:
      'Con Jordan Pass, l\'ingresso è incluso. Senza pass: circa 50 JOD per 1 giorno, 55 JOD per 2 giorni, 60 JOD per 3 giorni (tariffe più alte per chi non pernotta in Giordania). "Petra by Night" è un biglietto separato, circa 17 JOD.',
    tourOAutonomo:
      'Il sito si visita bene in autonomia seguendo la mappa fornita all\'ingresso; una guida locale (assumibile alla biglietteria, circa 50 JOD per un piccolo gruppo, 1-2 ore) aggiunge molto contesto storico, soprattutto sul Siq e sul Tesoro.',
    scamDaEvitare: [
      'Sedicenti "guide" non ufficiali fuori dal centro visitatori: rivolgersi solo al booth ufficiale delle guide dentro l\'ingresso',
      'Conducenti di cavalli/asini/cammelli che, dopo il giro, chiedono mance ben superiori a quanto pattuito: concordare sempre il prezzo totale prima di salire',
      'Venditori lungo il Siq e vicino al Tesoro con prezzi gonfiati per souvenir "antichi" — sono repliche',
    ],
    sezioniDaVedere: [
      {
        nome: 'Il Siq',
        perche: 'la gola naturale di 1,2 km che introduce al sito: il primo scorcio del Tesoro attraverso la fessura finale è il momento clou dell\'intera visita.',
      },
      {
        nome: 'Al-Khazneh (il Tesoro)',
        perche: 'la facciata più fotografata di Petra, resa celebre anche da Indiana Jones e l\'ultima crociata — da vedere anche con luce diversa se si torna più volte durante il giorno.',
      },
      {
        nome: 'Street of Facades e le Tombe Reali',
        perche: 'la concentrazione più alta di facciate scavate nella roccia dopo il Tesoro, spesso saltata da chi ha poco tempo.',
      },
      {
        nome: 'Ad-Deir (il Monastero)',
        perche: 'più grande e meno affollato del Tesoro, raggiungibile con una salita di oltre 800 gradini — la vista dal chiosco panoramico di fronte ripaga la fatica.',
      },
    ],
    giorniSpeciali:
      '"Petra by Night" si svolge tre sere a settimana (lunedì, mercoledì, giovedì, da verificare sul sito ufficiale per eventuali variazioni stagionali): il Siq viene illuminato da centinaia di candele fino al Tesoro, con musica beduina dal vivo — biglietto separato, consigliata prenotazione con un giorno d\'anticipo.',
    doveDormire: 'Wadi Musa, la cittadina proprio all\'ingresso del sito: permette di arrivare a piedi alla biglietteria e di partire presto per battere il caldo e le folle.',
    erroriDaEvitare: [
      'Non portare abbastanza acqua: quasi tutto il percorso è privo d\'ombra',
      'Non mettere in conto tempo sufficiente per la salita al Monastero, spesso tagliata per mancanza di tempo',
      'Perdersi Petra by Night pur pernottando a Wadi Musa: è incluso nel prezzo del tempo, non del biglietto diurno',
    ],
    miaEsperienza:
      'Petra non è un monumento, è una città, e il primo errore è comprare il biglietto da un giorno. Il Siq da solo è più di un chilometro di gola stretta e altissima che continua a girare senza mai mostrare cosa c\'è dopo, e quando il Tesoro compare nello spiraglio finale l\'effetto funziona anche sapendolo in anticipo. Ma il Tesoro è l\'inizio: il Monastero sta in cima a ottocento gradini, un\'ora abbondante di salita col sole a picco, ed è più grande di quello che quasi tutti vengono a vedere. Chi ha una sola giornata parta all\'apertura ed eviti la fascia centrale, quando arrivano i pullman dal Mar Morto e la temperatura tra le rocce diventa seria. Sui muli e i cammelli offerti lungo il percorso vale la pena essere netti: le condizioni degli animali sono spesso pessime, e rifiutare è la scelta giusta.',
    heroImageAlt: 'Il Tesoro di Petra (Al-Khazneh) visto all\'uscita del Siq, Giordania',
  },
  {
    slug: 'cristo-redentore',
    nome: 'Cristo Redentore',
    nomeLocale: 'Cristo Redentor',
    paese: 'Brasile',
    citta: 'Rio de Janeiro',
    titolo: 'Cristo Redentore a Rio: treno del Corcovado, orari e come evitare le rivendite non ufficiali',
    descrizione:
      'La statua Art Déco di 38 metri che domina Rio de Janeiro dalla cima del Corcovado, all\'interno della Foresta di Tijuca. A differenza delle altre meraviglie di questa lista, qui l\'accesso è regolamentato e possibile solo tramite trasporto ufficiale.',
    storiaBreve:
      'Costruita tra il 1922 e il 1931 su progetto dell\'ingegnere Heitor da Silva Costa con la collaborazione dello scultore francese Paul Landowski, fu concepita per celebrare il centenario dell\'indipendenza del Brasile. Si trova all\'interno del Parco Nazionale della Foresta di Tijuca, Patrimonio UNESCO dal 2012 (nell\'ambito del paesaggio culturale di Rio). New7Wonder dal 2007.',
    visitataPersonalmente: false,
    periodoMigliore: 'stagione secca, maggio-settembre, per cieli più tersi — ma la nuvolosità sulla cima del Corcovado è imprevedibile in ogni stagione: vale la pena tenere un giorno di riserva se il programma lo permette.',
    durataConsigliata: 'mezza giornata, incluso il trasporto di andata e ritorno e il tempo sulla piattaforma panoramica',
    comeArrivareInternazionale: 'Aeroporto di Rio de Janeiro-Galeão (GIG), in alternativa Santos Dumont (SDU) per i voli nazionali.',
    comeArrivareLocale:
      'Non è consentito salire con auto privata fino alla cima: l\'accesso è regolamentato esclusivamente tramite il trenino ufficiale del Corcovado (partenza dalla stazione di Cosme Velho) oppure van/minibus ufficiali con partenza da diversi punti della città (tra cui Largo do Machado). Esistono anche tour in elicottero come opzione premium.',
    comeSpostarsi: 'Una volta in cima, un breve tratto a piedi o con scale mobili/ascensori porta alla piattaforma panoramica; l\'intera visita in vetta si svolge a piedi su un\'area contenuta.',
    prenotazione:
      'Obbligatoria in anticipo online, con orario fisso (treno o van): i biglietti si esauriscono facilmente nei weekend e in alta stagione. Non esiste un ingresso "diretto" acquistabile solo sul posto con certezza di disponibilità.',
    prezzi:
      'Il treno del Corcovado (che include il trasporto e l\'ingresso) costa indicativamente 155-190 BRL a seconda dell\'orario e della stagione; i van ufficiali sono generalmente un\'opzione più economica, a partire da circa 100 BRL. L\'ingresso al monumento non si acquista separatamente dal trasporto.',
    tourOAutonomo:
      'Non esiste una vera opzione "indipendente" senza trasporto ufficiale: treno e van sono l\'unico modo per arrivare in cima. Le guide turistiche non sono necessarie per la visita in sé (la piattaforma si vede da sola), ma un tour organizzato semplifica la prenotazione e spesso combina la visita con il Pan di Zucchero nella stessa giornata.',
    scamDaEvitare: [
      'Siti terzi non ufficiali che rivendono i biglietti del treno a prezzi gonfiati: acquistare solo dal sito ufficiale del Trem do Corcovado o da operatori riconosciuti',
      'Tassisti o autisti che promettono di portare "fino in cima" con auto privata: non è permesso e rischia di lasciare il turista a piedi ben prima della meta',
      'Borseggio nelle code e sulla piattaforma panoramica affollata: tenere gli oggetti di valore ben chiusi',
    ],
    sezioniDaVedere: [
      {
        nome: 'La piattaforma panoramica',
        perche: 'vista a 360° su Rio: il Pan di Zucchero, le spiagge di Copacabana e Ipanema, la Baia di Guanabara e le favelas che si arrampicano sulle colline.',
      },
      {
        nome: 'La piccola cappella alla base della statua',
        perche: 'spesso trascurata dai visitatori più frettolosi, offre un momento di quiete rispetto all\'affollamento della piattaforma principale.',
      },
    ],
    giorniSpeciali:
      'Gli slot mattutini presto e quelli a fine giornata sono generalmente meno affollati dei tour di mezza giornata via crociera. Natale e Capodanno vedono un\'affluenza fuori scala: prenotare con largo anticipo se si viaggia in quel periodo.',
    doveDormire: 'Zona Sul di Rio (Copacabana o Ipanema), la base più comoda per raggiungere sia il Corcovado sia le principali attrazioni della città.',
    erroriDaEvitare: [
      'Non prenotare un orario specifico in anticipo, rischiando di trovare tutti gli slot esauriti',
      'Non controllare le previsioni meteo: la statua è spesso avvolta dalle nuvole, meglio tenere flessibilità sulle date se possibile',
      'Portare con sé oggetti di valore vistosi nelle zone più affollate',
    ],
    heroImageAlt: 'Il Cristo Redentore sulla cima del Corcovado con Rio de Janeiro e il Pan di Zucchero sullo sfondo',
  },
  {
    slug: 'machu-picchu',
    nome: 'Machu Picchu',
    paese: 'Perù',
    citta: 'Regione di Cusco (base ad Aguas Calientes)',
    titolo: 'Machu Picchu: quote giornaliere, circuiti e come prenotare Huayna Picchu',
    descrizione:
      'La cittadella inca del XV secolo sospesa tra le montagne della Valle Sacra, riportata all\'attenzione del mondo occidentale nel 1911. È la meraviglia di questa lista con il sistema di accesso più regolamentato: quote giornaliere di visitatori, circuiti obbligati e biglietti extra per le vette circostanti.',
    storiaBreve:
      'Costruita intorno al 1450 come probabile residenza reale o santuario dell\'imperatore Pachacútec, fu abbandonata durante la conquista spagnola e rimase sconosciuta al mondo esterno fino a quando l\'esploratore americano Hiram Bingham la fece conoscere internazionalmente nel 1911. Patrimonio UNESCO dal 1983, New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'maggio-settembre, stagione secca con cieli più tersi (ma anche la più affollata e con i biglietti che si esauriscono prima); aprile e ottobre sono un buon compromesso tra clima e affollamento.',
    durataConsigliata: 'una giornata piena se si pernotta ad Aguas Calientes il giorno prima per un ingresso all\'apertura; due giorni se si combina con il Trekking dell\'Inca Trail',
    comeArrivareInternazionale: 'Aeroporto di Lima (LIM), poi volo interno per Cusco (CUZ) — non esistono voli diretti internazionali su Cusco.',
    comeArrivareLocale:
      'Da Cusco (o dalla Valle Sacra) si raggiunge Aguas Calientes/Machu Picchu Pueblo solo in treno (PeruRail o IncaRail, partenza da Ollantaytambo o dalla stazione di Poroy vicino Cusco) — non esiste una strada diretta per veicoli privati. Da Aguas Calientes, bus navetta ufficiale (Consettur) fino all\'ingresso del sito in circa 25 minuti, oppure una salita a piedi di circa 1h30-2h.',
    comeSpostarsi:
      'All\'interno del sito si cammina su sentieri e terrazze in pietra, con dislivelli e alcuni tratti stretti — il percorso da seguire dipende dal circuito assegnato al momento della prenotazione (attualmente diversi circuiti numerati, con percorsi e durate differenti).',
    prenotazione:
      'Obbligatoria con largo anticipo (settimane o mesi prima in alta stagione): esiste una quota massima di visitatori giornalieri e fasce orarie di ingresso fisse. I biglietti per la salita a Huayna Picchu o alla Montaña, entrambi con quote separate e molto più limitate, vanno prenotati con ancora più anticipo — spesso 3-6 mesi prima per l\'alta stagione. Diversi circuiti richiedono obbligatoriamente una guida autorizzata.',
    prezzi:
      'Ingresso base (circuito generale): circa 152 soles per stranieri (~40 USD). Aggiungendo Huayna Picchu o Montaña: circa 200 soles combinati. Il treno andata/ritorno da Cusco/Valle Sacra costa dai 70 ai 500+ USD a seconda della classe (Expedition, Vistadome, Hiram Bingham). Bus navetta da Aguas Calientes: circa 24 USD andata/ritorno.',
    tourOAutonomo:
      'Molti dei circuiti attuali richiedono obbligatoriamente una guida autorizzata all\'ingresso (regola introdotta negli ultimi anni, da verificare sul sito ufficiale prima di prenotare): conviene organizzare il tour o unirsi a un piccolo gruppo alla biglietteria. Il trasporto (treno + biglietto) si può comunque organizzare in autonomia con largo anticipo.',
    scamDaEvitare: [
      'Rivenditori non ufficiali di biglietti online a prezzi gonfiati o con garanzie false sulla disponibilità: acquistare solo dai canali ufficiali (Ministero della Cultura peruviano) o da agenzie autorizzate riconosciute',
      'Operatori che offrono trekking sull\'Inca Trail "last minute" senza permesso regolare: i permessi sono limitatissimi e vanno prenotati mesi prima tramite agenzie autorizzate',
      'Venditori di pillole "miracolose" per il mal di montagna a Cusco a prezzi eccessivi: la coca in foglie o in tè, ampiamente disponibile, è il rimedio locale più diffuso ed economico',
    ],
    sezioniDaVedere: [
      {
        nome: 'Intihuatana',
        perche: 'la pietra rituale legata all\'osservazione astronomica, uno dei pochi manufatti di questo tipo sopravvissuti alla distruzione spagnola.',
      },
      {
        nome: 'Tempio del Sole e Recinto Reale',
        perche: 'la sezione con la muratura più raffinata del sito, esempio dell\'ingegneria inca ai suoi massimi livelli.',
      },
      {
        nome: 'Terrazze agricole',
        perche: 'raccontano la capacità inca di coltivare su pendii ripidissimi, e offrono le prospettive fotografiche più classiche sul sito.',
      },
      {
        nome: 'Huayna Picchu',
        perche: 'la montagna che fa da sfondo alle foto più iconiche di Machu Picchu — la salita (ripida, con biglietto a parte) regala la vista dall\'alto sull\'intera cittadella.',
      },
      {
        nome: 'Intipunku (Porta del Sole)',
        perche: 'il punto d\'arrivo del Cammino Inca classico, con la prima vista panoramica su Machu Picchu che vedevano i pellegrini originali.',
      },
    ],
    giorniSpeciali:
      'La quota giornaliera di visitatori è fissa tutto l\'anno; nei mesi di giugno-agosto (alta stagione) i biglietti per gli orari migliori e per Huayna Picchu si esauriscono con largo anticipo. Il sito osserva chiusure per manutenzione in alcune date dell\'anno: verificare sempre il calendario ufficiale prima di pianificare il viaggio.',
    doveDormire: 'Aguas Calientes (Machu Picchu Pueblo) per un ingresso mattutino senza dover dipendere dal primo treno del giorno; in alternativa Cusco o la Valle Sacra se si organizza una visita in giornata.',
    erroriDaEvitare: [
      'Prenotare treno e biglietti d\'ingresso troppo a ridosso della data: in alta stagione si esauriscono con settimane di anticipo',
      'Sottovalutare l\'altitudine di Cusco (circa 3.400 m): meglio acclimatarsi un paio di giorni prima di qualsiasi sforzo fisico',
      'Non portare abbigliamento per la pioggia: il clima della foresta nuvolosa è imprevedibile anche in stagione secca',
    ],
    miaEsperienza:
      'È uno di quei posti di cui si sono viste talmente tante foto da temere la delusione, e invece regge — ma regge nella prima ora, quando la nebbia si alza a strappi e il sito compare a pezzi. Dopo, con i gruppi in fila lungo il circuito assegnato, diventa un\'altra cosa: bellissima, ma gestita. Conviene sapere prima che non si gira liberamente: dal 2024 il circuito scelto al momento della prenotazione decide cosa si vedrà e cosa no, e la fotografia classica dall\'alto non è compresa in tutti. L\'altra cosa da mettere in conto è che i biglietti per i periodi buoni si esauriscono con mesi di anticipo, Huayna Picchu per primo. Dormire ad Aguas Calientes ed entrare al primo turno non serve per la luce: serve per quei quaranta minuti in cui il posto è ancora silenzioso.',
    heroImageAlt: 'La cittadella inca di Machu Picchu tra le montagne della Valle Sacra, Perù',
  },
  {
    slug: 'chichen-itza',
    nome: 'Chichén Itzá',
    paese: 'Messico',
    citta: 'Yucatán (vicino Valladolid)',
    titolo: 'Chichén Itzá: orari, biglietti e come evitare la ressa dei pullman turistici',
    descrizione:
      'Il più celebre sito archeologico Maya dello Yucatán, dominato dalla piramide di Kukulcán (El Castillo). A differenza delle altre meraviglie di questa lista non richiede prenotazione anticipata, ma l\'orario di arrivo fa una differenza enorme sull\'esperienza.',
    storiaBreve:
      'Città Maya fondata intorno al V secolo d.C. e diventata, con influenze Tolteche successive, uno dei centri politici e religiosi più importanti della penisola dello Yucatán fino al suo declino nel XIII secolo. Patrimonio UNESCO dal 1988, New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'novembre-marzo, stagione più fresca e secca; il sito va comunque affrontato presto al mattino in ogni stagione per il caldo e le folle di mezza giornata.',
    durataConsigliata: 'mezza giornata, 2-3 ore di visita effettiva',
    comeArrivareInternazionale: 'Aeroporto di Cancún (CUN), il più comodo; in alternativa Mérida (MID), più vicino geograficamente al sito.',
    comeArrivareLocale: 'Bus ADO da Cancún, Mérida o Valladolid (quest\'ultima solo 45 minuti di distanza); auto a noleggio; oppure tour organizzato di giornata da Cancún o dalla Riviera Maya (spesso lungo, 4-5 ore di solo trasferimento andata e ritorno).',
    comeSpostarsi: 'Il sito si visita interamente a piedi, su un\'area pianeggiante e priva quasi ovunque di ombra.',
    prenotazione: 'Non è richiesta una prenotazione anticipata: i biglietti si acquistano alla biglietteria d\'ingresso. Arrivare all\'apertura (8:00) è la vera chiave per evitare sia il caldo peggiore sia l\'arrivo in massa dei pullman turistici da Cancún, che tipicamente confluisce tra le 11:00 e le 14:00.',
    prezzi: 'Circa 614 pesos messicani in totale (tariffa federale INAH più tariffa statale, indicativo, soggetto a revisione periodica); sconto per residenti/cittadini messicani. Lo spettacolo di luci ed effetti sonori serale ha un biglietto separato.',
    tourOAutonomo: 'Facilmente visitabile in autonomia via bus o auto a noleggio. Le guide ufficiali si trovano all\'ingresso (contrattabili, circa 25-40 USD per un piccolo gruppo) e aggiungono molto contesto storico sulla cosmologia Maya e sul gioco della pelota.',
    scamDaEvitare: [
      '"Guide gratuite" che si offrono spontaneamente all\'ingresso e poi richiedono una mancia elevata a fine tour: concordare sempre il prezzo prima di iniziare',
      'Venditori di souvenir all\'interno del sito con tattiche di vendita aggressive ("ultimo giorno di sconto", "prezzo speciale solo per te")',
      'Tour "combinati" venduti fuori dai terminal bus a prezzi gonfiati rispetto a quelli prenotabili online o direttamente con operatori riconosciuti',
    ],
    sezioniDaVedere: [
      {
        nome: 'El Castillo (Tempio di Kukulcán)',
        perche: 'la piramide simbolo del sito, allineata astronomicamente per l\'effetto luce-ombra a forma di serpente durante gli equinozi — la scalata è vietata dal 2008.',
      },
      {
        nome: 'Grande Gioco della Pelota',
        perche: 'il campo da gioco cerimoniale più grande della Mesoamerica, con un\'acustica particolare che si può testare con un battito di mani.',
      },
      {
        nome: 'Tempio dei Guerrieri',
        perche: 'colonnato imponente con la statua reclinata del Chac Mool, tra le zone meno affollate rispetto a El Castillo.',
      },
      {
        nome: 'El Caracol (l\'Osservatorio)',
        perche: 'edificio circolare usato per osservazioni astronomiche, una delle prove più dirette della sofisticazione scientifica Maya.',
      },
      {
        nome: 'Cenote Sagrado',
        perche: 'il pozzo naturale usato per offerte rituali (anche umane, secondo i ritrovamenti archeologici), a una breve passeggiata dal centro del sito.',
      },
    ],
    giorniSpeciali:
      'Gli equinozi di primavera (20-21 marzo) e d\'autunno (22-23 settembre) portano folle enormi per assistere al celebre effetto del serpente di luce e ombra che scende lungo la scalinata di El Castillo — spettacolare ma da affrontare sapendo di trovare il sito sovraffollato. Lo show serale di luci e suoni si tiene la maggior parte delle sere, biglietto a parte.',
    doveDormire: 'Valladolid, cittadina coloniale a 45 minuti dal sito — la base più comoda e piacevole; alternativa Mérida, più distante ma con più offerta.',
    erroriDaEvitare: [
      'Arrivare a metà mattina: tra le 11:00 e le 14:00 il sito si riempie dei pullman organizzati da Cancún e dalla Riviera Maya',
      'Tentare di salire su El Castillo: la scalata è vietata dal 2008 dopo un incidente mortale',
      'Non portare acqua e protezione solare: il sito è quasi completamente privo di ombra',
    ],
    miaEsperienza:
      'È la meraviglia che più delude chi arriva impreparato, e la ragione non è il sito ma il modo in cui lo si visita. Dalle dieci in poi arrivano i pullman da Cancún e da Playa del Carmen, i viali si riempiono e soprattutto si riempiono di venditori: bancarelle una accanto all\'altra lungo quasi tutti i percorsi, con i fischietti a forma di giaguaro che suonano di continuo. Entrare all\'apertura cambia completamente l\'esperienza. Il Castillo non si sale più da anni, quindi va guardato da sotto, ed è lì che si capisce il gioco: battendo le mani davanti alla scalinata l\'eco torna indietro come il verso del quetzal, e non è una coincidenza. Chi cerca la sensazione di scoperta la trova più a Uxmal o a Cobá; qui si viene per la precisione astronomica, che è un\'altra cosa e vale comunque.',
    heroImageAlt: 'La piramide di El Castillo a Chichén Itzá, Yucatán, Messico',
  },
  {
    slug: 'colosseo',
    nome: 'Colosseo',
    nomeLocale: 'Colosseum / Anfiteatro Flavio',
    paese: 'Italia',
    citta: 'Roma',
    titolo: 'Colosseo: biglietti combinati, accesso all\'arena e come evitare le code',
    descrizione:
      'Il più grande anfiteatro mai costruito dall\'Impero Romano, nel cuore di Roma. Insieme al Foro Romano e al Palatino forma un\'area archeologica unica, visitabile con un unico biglietto combinato.',
    storiaBreve:
      'Costruito tra il 70 e l\'80 d.C. sotto la dinastia Flavia, ospitava combattimenti tra gladiatori, cacce di animali selvatici e spettacoli pubblici davanti a decine di migliaia di spettatori. Patrimonio UNESCO dal 1980 (nell\'ambito del centro storico di Roma), New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'aprile-maggio e settembre-ottobre, clima mite; in piena estate le code e il caldo dentro l\'anfiteatro (poca ombra) rendono la visita più faticosa — meglio prenotare gli orari mattutini o del tardo pomeriggio.',
    durataConsigliata: '2-3 ore per Colosseo, Foro Romano e Palatino insieme',
    comeArrivareInternazionale: 'Aeroporto di Roma-Fiumicino (FCO) o Roma-Ciampino (CIA).',
    comeArrivareLocale: 'Metro Linea B, fermata Colosseo, proprio davanti all\'ingresso; numerose linee di bus e tram; a piedi dal centro storico (15-20 minuti da Piazza Venezia).',
    comeSpostarsi: 'Il sito e l\'area archeologica circostante (Foro Romano, Palatino) si visitano interamente a piedi, su terreno spesso irregolare (pavimentazione antica, gradini).',
    prenotazione: 'Fortemente consigliata la prenotazione online con orario fisso sul sito ufficiale (Coopculture/Parco Archeologico del Colosseo), soprattutto in alta stagione: evita code che in piena estate possono superare l\'ora.',
    prezzi:
      'Biglietto combinato Colosseo + Foro Romano + Palatino: indicativamente 18-24 euro secondo la tipologia. Il biglietto "Full Experience", con accesso all\'arena ricostruita e agli ipogei sotterranei, costa di più (circa 24 euro) e richiede prenotazione specifica con orario dedicato. Ingresso gratuito la prima domenica di ogni mese (molto affollato, comunque richiede prenotazione dello slot orario).',
    tourOAutonomo:
      'Visitabile bene in autonomia con biglietto e audioguida (anche tramite app ufficiale); un tour guidato o il biglietto "Full Experience" con accesso all\'arena e agli ipogei aggiunge una prospettiva che da soli non si può vedere (i sotterranei dove venivano preparati gladiatori e animali).',
    scamDaEvitare: [
      'Venditori di biglietti "salta fila" fuori dall\'area archeologica a prezzi molto più alti di quelli ufficiali',
      '"Gladiatori" in costume che si offrono per foto e poi chiedono compensi elevati non dichiarati in anticipo',
      'Finti tour "senza coda" venduti da persone non affiliate, che spesso rivendono biglietti generici già esauriti per lo slot promesso',
    ],
    sezioniDaVedere: [
      {
        nome: 'L\'arena (sezione ricostruita)',
        perche: 'una porzione del pavimento originale è stata ricostruita, permettendo di stare dove un tempo si esibivano i gladiatori.',
      },
      {
        nome: 'Gli ipogei (sotterranei)',
        perche: 'la rete di corridoi e montacarichi usati per far comparire d\'improvviso gladiatori e animali nell\'arena — accesso solo con biglietto "Full Experience" e su prenotazione.',
      },
      {
        nome: 'Gli anelli superiori',
        perche: 'la vista d\'insieme migliore sull\'intera struttura, comprese le gradinate dove sedeva la plebe romana.',
      },
      {
        nome: 'Foro Romano e Palatino',
        perche: 'inclusi nello stesso biglietto combinato, raccontano il cuore politico e residenziale dell\'antica Roma — spesso sottovalutati rispetto al solo Colosseo.',
      },
    ],
    giorniSpeciali: 'Ingresso gratuito la prima domenica di ogni mese (richiede comunque la prenotazione di uno slot orario, e l\'affollamento è molto più alto del normale). In alcune serate estive vengono organizzate aperture serali speciali con percorsi guidati aggiuntivi, da verificare sul calendario ufficiale.',
    doveDormire: 'Zona Monti o Celio, entrambe a pochi minuti a piedi dal Colosseo e dal centro storico.',
    erroriDaEvitare: [
      'Presentarsi senza biglietto prenotato in alta stagione, rischiando di non trovare posto per lo stesso giorno',
      'Sottovalutare i controlli di sicurezza all\'ingresso, che allungano i tempi anche con biglietto già in mano',
      'Visitare a mezzogiorno in piena estate: l\'interno dell\'anfiteatro ha pochissima ombra',
    ],
    miaEsperienza:
      'Il Colosseo ha un problema che nessuna delle altre meraviglie ha: ci si passa davanti in mezzo al traffico, e questo toglie qualcosa. Il modo per recuperarlo è scendere negli ipogei, i sotterranei dove stavano gabbie, montacarichi e chi lavorava agli spettacoli: sono a ingresso separato, a numero chiuso, si esauriscono presto, e sono di gran lunga la parte più interessante del monumento. L\'errore più comune resta comprare il biglietto sul posto: la fila si conta in ore, e online sul sito ufficiale costa meno. Attenzione anche a chi propone "salta fila" davanti all\'ingresso, spesso a prezzi tripli per lo stesso biglietto. Il consiglio pratico è visitarlo la mattina presto o nell\'ultima fascia del pomeriggio, e tenersi il Palatino per dopo: è compreso nello stesso biglietto e quasi tutti lo saltano per stanchezza.',
    heroImageAlt: 'Il Colosseo di Roma visto dall\'esterno in una giornata di sole',
  },
  {
    slug: 'taj-mahal',
    nome: 'Taj Mahal',
    nomeLocale: 'ताज महल',
    paese: 'India',
    citta: 'Agra',
    titolo: 'Taj Mahal: perché conviene l\'ingresso all\'alba e come evitare le truffe dei finti negozi',
    descrizione:
      'Il mausoleo di marmo bianco fatto costruire dall\'imperatore Moghul Shah Jahan in memoria della moglie Mumtaz Mahal, sulle rive del fiume Yamuna. Uno dei monumenti più fotografati al mondo, e uno di quelli dove l\'orario di visita cambia radicalmente l\'esperienza.',
    storiaBreve:
      'Costruito tra il 1632 e il 1653 da circa 20.000 artigiani, è considerato l\'apice dell\'architettura Moghul, con influenze persiane, islamiche e indiane. Patrimonio UNESCO dal 1983, New7Wonder dal 2007.',
    visitataPersonalmente: true,
    periodoMigliore: 'novembre-febbraio, temperature più miti; da evitare il monsone (luglio-settembre, afa altissima) e l\'estate (aprile-giugno, spesso oltre i 40°C).',
    durataConsigliata: '2-3 ore per la visita, mezza giornata se combinata con il Forte di Agra',
    comeArrivareInternazionale: 'Aeroporto di Delhi (DEL), il principale scalo internazionale più vicino.',
    comeArrivareLocale: 'Da Delhi, il treno Gatimaan Express o lo Shatabdi Express raggiungono Agra in circa 1h45-2h; in alternativa auto/bus (3-4 ore). La gita in giornata da Delhi è molto comune ma frettolosa: pernottare almeno una notte ad Agra permette l\'ingresso all\'alba.',
    comeSpostarsi: 'Il complesso si visita interamente a piedi; dal parcheggio esterno (le auto non possono avvicinarsi per motivi di inquinamento) si prosegue con navette elettriche, a piedi o in risciò a pedali fino agli ingressi.',
    prenotazione: 'Consigliata la prenotazione online in anticipo (sito ASI/Archaeological Survey of India) con fascia oraria, soprattutto per lo slot dell\'alba che ha una quota limitata di visitatori.',
    prezzi: 'Circa 1.100-1.300 rupie indiane per stranieri (tariffa differenziata, molto più bassa per cittadini indiani), con un piccolo extra (circa 200 rupie) per l\'accesso al mausoleo principale. Il biglietto include copriscarpe e una bottiglietta d\'acqua.',
    tourOAutonomo: 'Facilmente visitabile in autonomia. Una guida autorizzata (contrattabile all\'ingresso, indicativamente 1.000-1.500 rupie per un piccolo gruppo) aiuta a capire i dettagli della simmetria architettonica e della calligrafia coranica incisa sul marmo, oltre a scoraggiare l\'avvicinamento di venditori e falsi assistenti.',
    scamDaEvitare: [
      'Finte guide o "assistenti" fuori dai cancelli che offrono aiuto e poi portano verso negozi di tappeti/marmi con commissione, sotto forma di "laboratorio artigianale da visitare"',
      'Tassisti che insistono per portare solo a negozi "convenzionati dal governo" a prezzi gonfiati',
      'Persone che affermano che l\'ingresso "è chiuso" o "cambiato" per reindirizzare verso un accesso alternativo a pagamento',
    ],
    sezioniDaVedere: [
      {
        nome: 'Il mausoleo principale',
        perche: 'l\'intarsio in marmo (pietra dura) con motivi floreali e calligrafia coranica è visibile da vicino solo salendo sulla piattaforma di marmo — qui si trovano i cenotafi di Shah Jahan e Mumtaz Mahal.',
      },
      {
        nome: 'I giardini Charbagh',
        perche: 'il giardino quadripartito persiano che inquadra simmetricamente il mausoleo, pensato per essere ammirato lungo l\'asse centrale dal Grande Cancello.',
      },
      {
        nome: 'Il Grande Cancello (Darwaza-i-rauza)',
        perche: 'la prima vista incorniciata del Taj Mahal, un momento scenografico voluto dagli architetti originali.',
      },
      {
        nome: 'Moschea e Jawab',
        perche: 'i due edifici gemelli in arenaria rossa ai lati del mausoleo, spesso ignorati ma parte integrante della simmetria del complesso.',
      },
      {
        nome: 'Mehtab Bagh',
        perche: 'giardino sulla sponda opposta del fiume Yamuna, ottimo per una vista del Taj Mahal al tramonto senza l\'affollamento del complesso principale.',
      },
    ],
    giorniSpeciali: 'Il Taj Mahal è chiuso ogni venerdì per le funzioni di preghiera islamiche — un dettaglio da tenere bene a mente nella pianificazione. Nelle cinque notti attorno alla luna piena di ogni mese (tranne durante il Ramadan e il venerdì) è possibile una visita notturna speciale con permesso separato, in gruppi limitati e orari contingentati.',
    doveDormire: 'Agra, per un ingresso all\'alba (la luce migliore e la minore folla); molti hotel con vista sul monumento si trovano nella zona di Taj Ganj, a ridosso dell\'ingresso est.',
    erroriDaEvitare: [
      'Programmare la visita di venerdì: il sito è chiuso',
      'Arrivare a metà mattina in alta stagione: le code diventano lunghissime e il caldo si fa sentire',
      'Seguire chiunque si offra spontaneamente come guida o "aiuto" fuori dai cancelli ufficiali',
    ],
    miaEsperienza:
      'Il Taj è l\'unico monumento che regge davvero la propria fama, e lo fa per un motivo difficile da spiegare a parole: il marmo cambia colore durante il giorno, rosato all\'alba, bianco accecante a mezzogiorno, ambrato al tramonto, e non è un modo di dire. Va visto all\'apertura, con il biglietto comprato online la sera prima, perché entro le nove i cortili sono pieni e la panchina delle fotografie ha una fila costante. La cosa che colpisce da vicino, e che nessuna foto mostra, è l\'intarsio: fiori composti con decine di pietre dure incastrate nel marmo, che si vedono solo appoggiandosi al muro. Ad Agra però bisogna essere preparati a tutto il resto: il livello di insistenza di guide non autorizzate, autisti e venditori attorno agli ingressi è tra i più alti dell\'India, e l\'unico modo di gestirlo è non avviare la conversazione. Chiude il venerdì, ed è l\'errore più comune di chi organizza all\'ultimo.',
    heroImageAlt: 'Il Taj Mahal riflesso nella vasca dei giardini Charbagh, Agra, India',
  },
]
