import type { Destinazione } from '@/lib/types'

// Prima uscita portoghese dell'archivio, collegata al viaggio "Lisbona in un
// weekend lungo" (src/content/viaggi/59-lisbona-weekend.md, dati in
// src/content/viaggi-dati/lisbona-weekend.ts). Due destinazioni distinte,
// come da indicazione: Lisbona e Sintra, la seconda come gita di un giorno
// dalla prima. Nessuna delle due è stata visitata di persona:
// visitataPersonalmente resta false su entrambe e il campo miaEsperienza,
// facoltativo nel tipo, è assente di proposito — niente ricordo inventato,
// solo fatti verificati con ricerca (stesso trattamento usato in
// src/content/paesi/polonia.ts). Nessun nome di hotel, ristorante o
// operatore è stato inventato. Prezzi e orari (soprattutto quelli di Sintra)
// cambiano spesso e vanno riverificati sui canali ufficiali prima di partire.

export const destinazioniPortogallo: Destinazione[] = [
  {
    slug: 'lisbona',
    paeseSlug: 'portogallo',
    ordine: 1,
    nome: 'Lisbona',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '3-4 giorni, compresa la gita fuori porta a Sintra',
    visitataPersonalmente: false,
    introduzione:
      'La capitale del Portogallo, costruita su sette colline affacciate sull\'estuario del Tago, ricostruita in gran parte dopo il devastante terremoto del 1755 — l\'evento che diede forma alla Baixa, il quartiere basso dal disegno regolare illuminista che oggi divide i quartieri più antichi e collinari (Alfama, Bairro Alto) dal fiume.',
    percheAndarci:
      'Perché è una città che si vive in verticale, tra salite, miradouros (belvedere panoramici) e mezzi storici pensati apposta per le sue colline, e perché racchiude in un\'area compatta il quartiere più antico e stratificato (Alfama), il cuore commerciale ricostruito dopo il terremoto (Baixa-Chiado) e, a un\'ora di treno, uno dei paesaggi da favola più fotografati d\'Europa: Sintra.',
    cosaVedere: [
      'L\'Alfama, il quartiere più antico della città, sopravvissuto quasi intatto al terremoto del 1755 per la sua struttura araba a vicoli stretti: qui si sente il fado, il canto tradizionale portoghese, nelle case da fado (casas de fado) sparse tra i vicoli',
      'Il tram 28, la linea storica che attraversa Alfama, Graça, Baixa ed Estrela su vagoni in legno d\'epoca, il modo più iconico (e più affollato) di vedere le colline della città dall\'interno',
      'Belém, la zona sul lungofiume da cui partirono le grandi spedizioni portoghesi dell\'epoca delle scoperte: il Mosteiro dos Jerónimos, capolavoro manuelino patrimonio UNESCO, e la Torre de Belém, la fortezza-simbolo della città sull\'acqua, anch\'essa UNESCO',
      'Baixa e Chiado, il centro ricostruito dopo il 1755 su un disegno a griglia illuminista, con la Praça do Comércio affacciata sul Tago e l\'Elevador de Santa Justa, l\'ascensore panoramico in ferro battuto in stile neogotico',
      'I miradouros, i belvedere sparsi sulle colline della città: il Miradouro da Senhora do Monte e il Miradouro da Graça tra i più suggestivi al tramonto',
      'Sintra, patrimonio UNESCO dal 1995, con il Palácio Nacional da Pena e la Quinta da Regaleira — vedi la destinazione dedicata',
    ],
    cosaFare: [
      'Prendere il tram 28 presto al mattino, prima delle 9, per evitare la calca e i borseggiatori che lo rendono famoso in negativo tanto quanto in positivo',
      'Ascoltare il fado dal vivo in una casa da fado dell\'Alfama, la sera',
      'Mangiare un pastel de nata alla Pastéis de Belém, la pasticceria originale dal 1837, dove nacque la ricetta',
      'Salire ai miradouros al tramonto, con un vino al bicchiere comprato in un chiosco (esplanada) informale',
      'Dedicare un\'intera giornata a Sintra, partendo il prima possibile — vedi la destinazione e l\'esperienza dedicate',
    ],
    doveDormire:
      'Baixa-Chiado è la zona più centrale e pratica, con buoni collegamenti verso tutto il resto della città; l\'Alfama è l\'alternativa più caratteristica e vissuta, ma con salite più ripide e strade più strette. Entrambe comode a piedi per il grosso delle attrazioni del centro.',
    doveMangiare:
      'Il pastel de nata, la sfoglia con crema pasticcera spolverata di cannella, ovunque in città ma nato alla Pastéis de Belém; il bacalhau (baccalà), preparato in centinaia di varianti diverse secondo la tradizione portoghese; le petiscos, piccoli piatti da condividere sul modello delle tapas spagnole, tipiche del Bairro Alto e di Alfama; il ginjinha, il liquore di amarena servito in bicchierini nei minuscoli chioschi storici della Baixa.',
    comeArrivare:
      'Aeroporto Humberto Delgado (LIS), a circa 7 km dal centro: metro (linea rossa) in circa 20-25 minuti fino al centro, oppure autobus e taxi/app di ride-hailing. In treno dall\'Italia non esiste un collegamento diretto comodo: si arriva quasi sempre in aereo.',
    comeSpostarsi: 'Molte salite: i tram storici, le funicolari (elevadores) e l\'Elevador de Santa Justa esistono apposta per questo. Metro, autobus e treni suburbani si pagano con la carta contactless Viva Viagem/Navegante. Il centro si gira comunque bene a piedi, con qualche fiato in più per le colline.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e molto affollata soprattutto sul tram 28 e a Sintra; novembre-marzo è mite ma piovoso',
    costi: 'città ancora relativamente economica per l\'Europa occidentale, anche se in crescita: pranzo semplice 10-12€, cena normale 15-20€ a testa, biglietto di un tram o autobus circa 2€',
    erroriDaEvitare: [
      'Salire sul tram 28 nelle ore centrali della giornata sperando in posto e tranquillità: è tra i mezzi pubblici più affollati e più battuti dai borseggiatori d\'Europa',
      'Sottovalutare le salite pianificando un giro a piedi come se Lisbona fosse una città pianeggiante',
      'Andare a Sintra senza partire presto la mattina: le code per il Palácio da Pena diventano lunghissime già a metà mattinata',
      'Cercare il "vero" pastel de nata solo alla Pastéis de Belém e ignorare le pasticcerie di quartiere: sono comunque ottimi e senza fila',
    ],
    confronti: [
      {
        titolo: 'Come arrivare a Sintra da Lisbona',
        introduzione: 'La gita a Sintra si può organizzare in autonomia in treno o con un tour organizzato: la differenza principale è quanto tempo si è disposti a perdere in coda tra un palazzo e l\'altro.',
        opzioni: [
          {
            nome: 'Treno da Rossio + biglietti online',
            sintesi: 'Treno regionale dalla stazione di Rossio (circa 40 minuti, corse molto frequenti), poi bus locale 434 o a piedi in salita fino al Palácio da Pena, con biglietti d\'ingresso acquistati online con orario in anticipo',
            costo: 'treno circa 5€ a tratta, ingressi 15-25€ a sito',
            durata: 'giornata intera, partendo presto',
            pro: ['Economico', 'Flessibile su orari e ritmo', 'Nessuna dipendenza da un gruppo'],
            contro: ['Richiede di organizzare da soli bus locale e code', 'Nessuna guida storica inclusa'],
            perChi: 'chi preferisce muoversi in autonomia e risparmiare',
          },
          {
            nome: 'Tour organizzato da Lisbona',
            sintesi: 'Transfer in minivan da Lisbona con guida, biglietti "salta fila" inclusi e un itinerario che spesso copre anche Cascais o la Boca do Inferno',
            costo: 'indicativamente 70-100€ a persona',
            durata: 'giornata intera',
            pro: ['Nessuna organizzazione logistica', 'Spesso ingresso prioritario', 'Guida con contesto storico'],
            contro: ['Più caro', 'Ritmo fissato dal gruppo', 'Meno tempo libero per esplorare da soli'],
            perChi: 'chi preferisce non gestire trasporti e code da solo, o ha poco tempo a disposizione',
          },
        ],
        raccomandazione: 'Per chi ha tutta la giornata libera e un minimo di organizzazione, il treno con biglietti online prenotati in anticipo resta la scelta più efficiente: il vero fattore critico a Sintra non è come arrivarci, ma partire presto la mattina.',
      },
    ],
    esperienzeSlugs: ['tram-28-alfama', 'pasteis-de-belem'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il tram 28 giallo che sale per le stradine strette e in pendenza dell\'Alfama a Lisbona',
  },
  {
    slug: 'sintra',
    paeseSlug: 'portogallo',
    ordine: 2,
    nome: 'Sintra',
    tipologia: ['storia', 'natura', 'arte'],
    giorniConsigliati: 'una giornata intera, come gita da Lisbona',
    visitataPersonalmente: false,
    introduzione:
      'Una cittadina tra le colline boscose a circa 30 km a nord-ovest di Lisbona, patrimonio UNESCO dal 1995 come "Paesaggio culturale di Sintra": per secoli meta di villeggiatura estiva della nobiltà e della famiglia reale portoghese, che vi costruì una concentrazione di palazzi e ville romantiche unica in Europa, immersi in un microclima più fresco e umido di Lisbona.',
    percheAndarci:
      'Perché il Palácio Nacional da Pena, con le sue torri colorate in stile romantico ottocentesco arroccate su una collina, è uno dei paesaggi più fotografati del Portogallo, e perché la Quinta da Regaleira, con il suo pozzo iniziatico a spirale e i giardini esoterici, è tra le cose più insolite da vedere nel paese. È anche, però, una delle giornate più logisticamente impegnative dell\'intero itinerario, per via delle code.',
    cosaVedere: [
      'Il Palácio Nacional da Pena, il palazzo reale in stile romantico ottocentesco che mescola elementi gotici, manuelini, mori e rinascimentali, dai colori sgargianti (giallo e rosso) arroccato su una collina alta sulla città',
      'La Quinta da Regaleira, villa e giardino esoterico di inizio Novecento, con il celebre "Poço Iniciático" (pozzo iniziatico), una scala a spirale che scende sottoterra tra simboli massonici e templari',
      'Il Castelo dos Mouros, le rovine del castello di origine moresca del IX secolo, con vista panoramica su Sintra e, nelle giornate più limpide, fino all\'oceano',
      'Il Palácio Nacional de Sintra, nel centro cittadino, con le sue due enormi ciminiere coniche bianche visibili da tutta la valle',
      'Il centro storico di Sintra, piccolo e pedonale, con pasticcerie storiche note per i travesseiros (dolci sfogliati ripieni di crema di mandorle) e le queijadas',
    ],
    cosaFare: [
      'Arrivare con il primo treno utile da Lisbona per essere tra i primi in coda al Palácio da Pena: è di gran lunga il consiglio più ripetuto da chi ha già affrontato questa gita',
      'Prenotare online biglietti con fascia oraria per Pena e Regaleira prima di partire, non contare sull\'acquisto in loco',
      'Prendere il bus locale 434 tra la stazione, il centro e il Palácio da Pena, invece di affrontare a piedi la salita ripida in giornate calde',
      'Scendere nel pozzo iniziatico della Quinta da Regaleira, uno dei punti più fotografati e più affollati del sito: prevedere tempo di attesa anche qui',
    ],
    doveDormire: 'Si visita in giornata da Lisbona: non è pensata come tappa con pernottamento a Sintra.',
    doveMangiare: 'I travesseiros e le queijadas, i dolci tipici locali, in una delle pasticcerie storiche del centro; per il resto, opzioni turistiche concentrate intorno alla stazione e al centro pedonale.',
    comeArrivare:
      'Treno regionale dalla stazione di Rossio a Lisbona, circa 40 minuti, corse molto frequenti durante il giorno; è di gran lunga l\'opzione più semplice ed economica rispetto a un\'auto a noleggio, vista la scarsità di parcheggio nel centro di Sintra nei fine settimana e in alta stagione.',
    comeSpostarsi: 'Bus locale 434 (percorso circolare) tra stazione, centro storico e Palácio da Pena; il centro pedonale si gira a piedi, ma le distanze tra i siti principali (Pena, Regaleira, Castelo dos Mouros) sono tutte in salita e più lunghe di quanto sembrino sulla mappa.',
    periodoMigliore:
      'tutto l\'anno per il clima, ma il vero fattore è l\'affollamento: nei weekend e in alta stagione (giugno-agosto) le code ai palazzi principali diventano lunghissime già dalla tarda mattinata. Un giorno feriale, con partenza il prima possibile, riduce drasticamente i tempi di attesa in qualunque stagione.',
    costi: 'Palácio da Pena circa 20-25€, Quinta da Regaleira circa 15€, con sconti per i biglietti combinati; treno da Lisbona circa 5€ a tratta',
    erroriDaEvitare: [
      'Arrivare a metà mattina pensando di "fare tutto in giornata con calma": le code al Palácio da Pena e alla Quinta da Regaleira si allungano rapidamente dopo le 10-11',
      'Non prenotare online i biglietti con fascia oraria: in alta stagione gli slot della mattina si esauriscono',
      'Sottovalutare le distanze e i dislivelli tra un sito e l\'altro: non è un centro storico compatto come Lisbona',
      'Provare a vedere tutti e quattro i siti principali (Pena, Regaleira, Castelo dos Mouros, Palácio Nacional) in una sola giornata senza sacrificarne almeno uno: è raramente realistico con i tempi di coda reali',
    ],
    esperienzeSlugs: ['sintra-giornata-da-lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il Palácio Nacional da Pena di Sintra, con le sue torri dai colori giallo e rosso arroccate sulla collina boscosa',
  },
]
