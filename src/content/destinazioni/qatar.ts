import type { Destinazione } from '@/lib/types'

// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario:
// vanno riletti e sostituiti. Nessun nome di hotel, ristorante o operatore è
// stato inventato. Prezzi e condizioni del programma stopover di Qatar
// Airways cambiano spesso: vanno riverificati sul portale ufficiale.

export const destinazioniQatar: Destinazione[] = [
  {
    slug: 'doha',
    paeseSlug: 'qatar',
    ordine: 1,
    nome: 'Doha',
    tipologia: ['città', 'musei', 'stopover'],
    giorniConsigliati: '12-24 ore per lo stopover essenziale, 2 giorni per farla bene',
    visitataPersonalmente: true,
    introduzione:
      'Una capitale che quindici anni fa non aveva quasi nulla da mostrare e che oggi ha il Museo di Arte Islamica di I.M. Pei su un\'isola artificiale, il Museo Nazionale di Jean Nouvel a forma di rosa del deserto, e un souq restaurato che — a differenza di molti nella regione — è rimasto un mercato vero invece di diventare una scenografia.',
    percheAndarci:
      'Perché il programma stopover di Qatar Airways rende la sosta quasi gratuita, e perché Doha è la città del Golfo che si visita meglio in poco tempo: la metropolitana collega aeroporto, souq e musei, e in una giornata piena si vede tutto quello che conta.',
    cosaVedere: [
      'Il Museo di Arte Islamica, progettato da I.M. Pei a novant\'anni, su un\'isola artificiale davanti alla Corniche',
      'Il Museo Nazionale del Qatar di Jean Nouvel, con i dischi intersecati ispirati alla rosa del deserto',
      'Il Souq Waqif, restaurato ma ancora funzionante, con il mercato dei falchi e il loro ospedale',
      'La Corniche, sette chilometri di lungomare con lo skyline di West Bay di fronte',
      'Msheireb Downtown, il quartiere ricostruito con i suoi musei sulla schiavitù e sulla storia del petrolio',
      'Il Katara Cultural Village e le installazioni di Richard Serra nel deserto',
    ],
    cosaFare: [
      'Souq Waqif la sera, quando apre il mercato dei falchi — vedi la scheda esperienza dedicata',
      'Museo di Arte Islamica al tramonto, con la vista sullo skyline dalla scalinata',
      'Giro in dhow sulla baia, le barche di legno tradizionali, per pochi riyal',
      'Escursione all\'inland sea di Khor Al Adaid, dove il mare entra nel deserto — vedi la scheda esperienza dedicata',
    ],
    doveDormire:
      'Con il programma stopover di Qatar Airways si sceglie tra le strutture convenzionate a prezzi simbolici, ed è quasi sempre la scelta giusta. Fuori dal programma, la zona di West Bay è comoda per la metropolitana, quella attorno al Souq Waqif per l\'atmosfera.',
    doveMangiare:
      'Il Souq Waqif ha la concentrazione migliore di ristoranti della città, con cucina levantina, iraniana e qatariota a tutti i livelli di prezzo. Da provare il machboos, la carne speziata con il riso, e il karak chai ai chioschi — il tè al latte speziato che qui si beve a tutte le ore e costa pochi centesimi. Per mangiare a poco, i quartieri dove vivono i lavoratori del subcontinente indiano hanno ristoranti ottimi ed economici.',
    comeArrivare:
      'Volo su Hamad International (DOH), hub di Qatar Airways e uno degli aeroporti migliori al mondo, collegato al centro dalla metropolitana in circa venti minuti.',
    comeSpostarsi:
      'Metropolitana recente, economica e climatizzata, che copre tutto quello che serve; Karwa Taxi e Uber per il resto. Camminare sulla Corniche è piacevole solo da novembre a marzo.',
    periodoMigliore:
      'da novembre a marzo. Tra giugno e settembre si superano i 45 gradi con umidità altissima, e uno stopover estivo si riduce a musei e centri commerciali.',
    costi:
      'Museo di Arte Islamica e Museo Nazionale hanno biglietti contenuti; il Souq Waqif è gratuito; la metropolitana costa pochi riyal. Con il programma stopover, l\'hotel parte da cifre simboliche.',
    erroriDaEvitare: [
      'Non prenotare lo stopover sul portale dedicato: si prenota separatamente dal volo, usando il codice di prenotazione, e molti non sanno che esiste',
      'Programmarlo in estate, quando stare all\'aperto è impraticabile',
      'Fermarsi solo a West Bay e ai centri commerciali: il souq e i musei sono la ragione per scendere dall\'aereo',
      'Sottovalutare le regole sull\'abbigliamento: qui sono più conservative che a Dubai, con spalle e ginocchia coperte attese in pubblico per tutti',
    ],
    confronti: [
      {
        titolo: 'Quanto fermarsi a Doha',
        introduzione:
          'Doha è una delle poche città al mondo che funziona bene sia in dodici ore sia in tre giorni, ed è il motivo per cui vale la pena scegliere consapevolmente invece di subire lo scalo. Le tre formule danno risultati molto diversi.',
        opzioni: [
          {
            nome: 'Scalo breve, 6-10 ore senza uscire',
            sintesi: 'Restare dentro Hamad International, che è regolarmente tra i migliori aeroporti del mondo.',
            costo: 'nulla',
            durata: '6-10 ore',
            pro: ['Nessun rischio di perdere il volo', 'L\'aeroporto ha giardini interni, una piscina, aree relax e un\'offerta gastronomica seria', 'Zero pratiche'],
            contro: ['Non si vede il paese', 'Dieci ore in aeroporto restano dieci ore in aeroporto'],
            perChi: 'Chi ha bagaglio da riconsegnare, coincidenze strette o semplicemente non vuole complicazioni.',
          },
          {
            nome: 'Stopover di 12-24 ore, una notte',
            sintesi: 'Uscire, dormire una notte in città con il programma Qatar Airways, e vedere il nucleo: souq, Corniche, un museo.',
            costo: 'da circa 14 dollari a persona a notte in quattro stelle con il programma',
            durata: 'una notte',
            pro: [
              'Il rapporto tra costo e resa più alto di tutti: a queste cifre non fermarsi è quasi una scelta contro i propri interessi',
              'Visto all\'arrivo gratuito per gli italiani, nessuna pratica preventiva',
              'Souq Waqif la sera e un museo la mattina dopo coprono l\'essenziale',
              'Metropolitana dall\'aeroporto: si è in città in venti minuti',
            ],
            contro: ['Si dorme poco, tra arrivo notturno e partenza', 'Non si esce dalla città', 'Va prenotato sul portale dedicato, non insieme al volo'],
            perChi: 'Praticamente chiunque voli con Qatar Airways e abbia uno scalo superiore alle dodici ore.',
          },
          {
            nome: 'Sosta di 2-3 giorni',
            sintesi: 'Doha con calma più l\'inland sea di Khor Al Adaid e il nord del paese, con le installazioni di Richard Serra nel deserto.',
            costo: 'fino a 4 notti con il programma stopover, a tariffe comunque basse',
            durata: '2-3 giorni',
            pro: [
              'Si esce dalla città, che è la parte che quasi nessuno fa',
              'Khor Al Adaid, dove il mare entra nel deserto, è uno dei pochi posti al mondo con questa conformazione',
              'Con tre giorni il Qatar si vede per intero: è più piccolo dell\'Abruzzo',
            ],
            contro: ['Oltre i quattro giorni il paese finisce', 'Per il deserto e il nord serve un 4x4 o un tour', 'Il costo dei trasferimenti fuori città si somma a quello dell\'hotel'],
            perChi: 'Chi vuole trasformare lo scalo in una tappa vera, e chi ha già visto Doha città.',
          },
        ],
        raccomandazione:
          'Con uno scalo sopra le dodici ore, la notte in città è la scelta ovvia: costa quanto un pranzo e restituisce una capitale intera. Con due giorni si aggiunge Khor Al Adaid, che è la cosa più insolita del paese. Sopra i quattro giorni, invece, conviene usare il Qatar come trampolino verso un\'altra tappa del Golfo, perché qui il materiale finisce.',
      },
    ],
    miaEsperienza:
      'Doha è la città del Golfo che rende di più in rapporto al tempo che le si dedica, e il motivo è quasi banale: è piccola, la metropolitana funziona, e le due cose che vale la pena vedere sono vicine. Il Museo di Arte Islamica è la migliore: Pei lo progettò a novant\'anni dopo aver girato il mondo musulmano per capire cosa fosse l\'architettura islamica, e il risultato è un edificio di pietra calcarea su un\'isola artificiale in cui la luce entra dall\'alto attraverso una cupola nascosta. Dalla scalinata esterna, al tramonto, si guarda lo skyline di West Bay dall\'altra parte dell\'acqua ed è la cartolina della città. Il Souq Waqif è l\'altra sorpresa, perché è una ricostruzione che però funziona: ci si compra ancora tessuti, spezie e falchi da caccia, e c\'è perfino un ospedale per falchi visitabile, dove gli uccelli aspettano la visita appollaiati con il cappuccio in testa. È il posto più strano e più qatariota della città. Con il programma stopover, tutto questo costa quanto una pizza.',
    esperienzeSlugs: ['souq-waqif', 'khor-al-adaid'],
    tripSlugs: ['stopover-golfo'],
    imageAlt: 'Il Museo di Arte Islamica di Doha con lo skyline di West Bay sullo sfondo al tramonto',
  },
  {
    slug: 'qatar-deserto-nord',
    paeseSlug: 'qatar',
    ordine: 2,
    nome: 'Il deserto e il nord del Qatar',
    tipologia: ['deserto', 'natura', 'archeologia'],
    giorniConsigliati: '1-2 giorni, come estensione da Doha',
    visitataPersonalmente: true,
    introduzione:
      'Fuori dalla capitale il Qatar è quasi vuoto: a sud, Khor Al Adaid, l\'"inland sea" dove il Golfo penetra nel deserto tra dune che scendono direttamente in acqua; a nord, il forte di Al Zubarah patrimonio UNESCO, i villaggi di pescatori abbandonati e le quattro lastre d\'acciaio di Richard Serra piantate in mezzo al nulla.',
    percheAndarci:
      'Perché Khor Al Adaid è una conformazione rara al mondo — un braccio di mare che entra in un deserto di dune vive — e perché il nord mostra il Qatar di prima del gas: villaggi di pescatori di perle abbandonati negli anni Settanta e lasciati dov\'erano.',
    cosaVedere: [
      'Khor Al Adaid, l\'inland sea, riserva naturale dichiarata dall\'UNESCO, raggiungibile solo in 4x4',
      'Il forte di Al Zubarah, patrimonio UNESCO, e i resti della città portuale del XVIII secolo',
      'East-West/West-East di Richard Serra, quattro lastre d\'acciaio alte 14 metri nel deserto di Brouq',
      'Il villaggio abbandonato di Al Jumail, sulla costa nord',
      'Le dune di Sealine e il deserto meridionale',
    ],
    cosaFare: [
      'Escursione in 4x4 all\'inland sea, con il dune bashing e la sosta sulla riva — vedi la scheda esperienza dedicata',
      'Giornata al nord tra Al Zubarah, Al Jumail e le installazioni di Serra',
      'Notte in campo tendato nel deserto meridionale',
      'Camminare tra le lastre di Serra al tramonto, che è quando l\'acciaio cambia colore',
    ],
    doveDormire:
      'Il deserto meridionale ha campi tendati di vario livello, dal semplice al lussuoso; il nord non ha praticamente strutture e si fa in giornata da Doha, che dista meno di un\'ora e mezza.',
    doveMangiare:
      'Fuori Doha l\'offerta è minima: nei campi tendati i pasti sono inclusi, mentre nel nord non c\'è quasi nulla. Si porta pranzo e acqua da Doha, che è quello che fanno anche i qatarioti nelle loro giornate fuori città.',
    comeArrivare:
      'Khor Al Adaid dista circa un\'ora e mezza da Doha ma **si raggiunge solo in 4x4 con autista esperto**: gli ultimi chilometri sono su sabbia. Il nord è raggiungibile in auto normale su strada asfaltata, in poco più di un\'ora.',
    comeSpostarsi: 'Auto a noleggio per il nord; 4x4 con guida per il sud e per il deserto. Non esistono mezzi pubblici utili fuori dalla capitale.',
    periodoMigliore:
      'da novembre a marzo. In estate il deserto qatariota è impraticabile, e anche le escursioni organizzate si riducono ai mesi freschi.',
    costi: 'escursione in 4x4 all\'inland sea indicativamente 250-500 riyal secondo la formula e la durata; Al Zubarah gratuito o quasi.',
    erroriDaEvitare: [
      'Provare ad arrivare a Khor Al Adaid con un\'auto normale: si resta impantanati, ed è un classico',
      'Fare il dune bashing subito dopo aver mangiato, perché è più movimentato di quanto sembri',
      'Andare al nord senza acqua e senza pranzo: non c\'è niente, per decine di chilometri',
      'Programmare il deserto tra giugno e settembre',
    ],
    miaEsperienza:
      'Il Qatar fuori Doha è quasi vuoto, e questo è esattamente il motivo per uscire dalla capitale. Khor Al Adaid è la cosa che resta: si arriva in 4x4 dopo una mezz\'ora di sabbia, con l\'autista che sgonfia le gomme all\'inizio della pista, si scollina un\'ultima duna e sotto c\'è il mare — un braccio di Golfo che entra nel deserto, con le dune che scendono direttamente in acqua e l\'Arabia Saudita sull\'altra sponda. Sono pochi i posti al mondo con questa conformazione, e il fatto che sia a un\'ora e mezza da un aeroporto internazionale è quasi assurdo. Il nord è un\'altra storia e la parte che quasi nessuno fa: le quattro lastre d\'acciaio di Richard Serra piantate in mezzo al niente, alte quattordici metri e allineate su un chilometro, si raggiungono su una pista e non c\'è nessuno — nessun parcheggio, nessun biglietto, nessun cartello. Ci si arriva, si cammina tra una lastra e l\'altra sentendo solo il vento, e si torna indietro. È l\'opposto esatto di tutto il resto del Golfo.',
    esperienzeSlugs: [],
    tripSlugs: ['stopover-golfo'],
    imageAlt: 'Le dune che scendono nel mare dell\'inland sea di Khor Al Adaid, Qatar',
  },
]
