import type { Destinazione } from '@/lib/types'

// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto (stagione, quote,
// regole d\'accesso, distanze) e non su ricordi reali: vanno riletti e
// sostituiti. Nessun nome di hotel, ristorante o operatore è stato inventato.
// L\'Arabia Saudita è il paese di questo archivio che cambia più in fretta:
// regole d\'ingresso, accessi ai siti e norme di comportamento vanno
// riverificati sui canali ufficiali prima di partire.

export const destinazioniArabiaSaudita: Destinazione[] = [
  {
    slug: 'jeddah',
    paeseSlug: 'arabia-saudita',
    ordine: 1,
    nome: 'Jeddah',
    tipologia: ['città', 'storia', 'mare'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il porto del Mar Rosso da cui per secoli sono passati i pellegrini diretti alla Mecca, e la città più aperta e rilassata del Regno. Nel centro storico, Al-Balad, restano le case-torre di pietra corallina con i moucharabieh di legno alle finestre: è patrimonio UNESCO ed è l\'unico posto in Arabia Saudita dove si cammina in una città vecchia vera.',
    percheAndarci:
      'Perché è la porta d\'ingresso naturale del paese, perché Al-Balad al tramonto è la cosa più bella dell\'ovest saudita, e perché Jeddah ha un rapporto con il mondo esterno che il resto del Regno non ha: qui si arriva da secoli da ogni parte del mondo musulmano, e si vede.',
    cosaVedere: [
      'Al-Balad, il centro storico UNESCO, con le case-torre in pietra corallina e i rawashin, le facciate di legno intagliato',
      'La Casa Nassif, la più nota delle case-torre, con la rampa interna pensata per far salire i cammelli',
      'Il souq Al-Alawi, dentro Al-Balad, ancora in funzione',
      'La Corniche e la Fontana di Re Fahd, il getto d\'acqua più alto del mondo',
      'La moschea galleggiante di Al-Rahma, sulla Corniche',
      'I reef del Mar Rosso al largo, tra i meglio conservati del pianeta',
    ],
    cosaFare: [
      'Camminare Al-Balad al tramonto, quando le facciate di legno prendono luce — vedi la scheda esperienza dedicata',
      'Cena di pesce sulla Corniche, che è quello che fanno i sauditi il giovedì sera',
      'Snorkeling o immersioni sui reef del Mar Rosso, molto meno battuti di quelli egiziani',
      'Giro nei quartieri d\'arte contemporanea, che a Jeddah sono la cosa più inaspettata del paese',
    ],
    doveDormire:
      'Vicino ad Al-Balad per essere dentro la parte storica, o sulla Corniche per il mare e i ristoranti. Jeddah è grande e dispersa: la posizione conta più che altrove.',
    doveMangiare:
      'Jeddah è la città dove si mangia meglio in Arabia Saudita, perché secoli di pellegrinaggio hanno portato qui cucine da tutto il mondo musulmano. Da provare il kabsa, il piatto nazionale di riso speziato con carne, il mandi yemenita cotto nel forno interrato, il foul a colazione, e il pesce del Mar Rosso alla griglia sulla Corniche. E poi il caffè arabo con i datteri, che qui è un rituale di ospitalità e non una consumazione. **Non esiste alcol nel paese**, senza eccezioni negli hotel.',
    comeArrivare:
      'Volo internazionale su King Abdulaziz (JED), il principale scalo dell\'ovest saudita. È anche l\'aeroporto su cui atterra chi usa il visto stopover di Saudia o flynas.',
    comeSpostarsi:
      'Uber e Careem funzionano benissimo e costano poco: sono il mezzo normale. Al-Balad si gira a piedi, il resto della città no — le distanze sono da metropoli americana.',
    periodoMigliore:
      'da novembre a marzo. Jeddah è calda e umida quasi tutto l\'anno per via del Mar Rosso, e in estate la combinazione di calore e umidità è pesante anche per gli standard della regione.',
    costi: 'Al-Balad si cammina gratuitamente; le case-museo hanno biglietti contenuti. Gli hotel hanno prezzi da capitale.',
    erroriDaEvitare: [
      'Provare a raggiungere La Mecca: è **vietata ai non musulmani**, i cartelli sull\'autostrada indicano le deviazioni obbligatorie e ci sono controlli. Non è una formalità aggirabile',
      'Visitare Al-Balad a mezzogiorno: il quartiere prende vita nel tardo pomeriggio e la luce sulle facciate di legno arriva solo allora',
      'Fotografare persone, e in particolare donne, senza permesso esplicito: qui è un problema più serio che altrove nella regione',
      'Aspettarsi di trovare alcol: non esiste in tutto il paese, nemmeno negli hotel internazionali',
    ],
    confronti: [
      {
        titolo: 'Jeddah o Riyadh come porta d\'ingresso',
        introduzione:
          'L\'Arabia Saudita ha due aeroporti principali distanti quasi mille chilometri, e da quale si entra cambia la forma dell\'intero itinerario. Non è una scelta neutra.',
        opzioni: [
          {
            nome: 'Entrare da Jeddah',
            sintesi: 'Porta dell\'ovest, con Al-Balad in città, AlUla a un volo breve o sette ore di strada, e il Mar Rosso davanti.',
            costo: 'voli europei diretti frequenti',
            durata: 'base ideale per un itinerario ovest di 7-9 giorni',
            pro: [
              'È la città più piacevole e più aperta del paese, e il centro storico UNESCO è dentro',
              'AlUla è molto più vicina che da Riyadh',
              'Il Mar Rosso è a portata, con reef quasi intatti',
              'È lo scalo su cui atterra chi usa il visto stopover di Saudia o flynas',
            ],
            contro: ['Caldo e umidità pesanti quasi tutto l\'anno', 'Più lontana dall\'Asir e dall\'est del paese', 'Città dispersa, ci si muove solo in auto'],
            perChi: 'Chiunque venga per la prima volta, e chiunque abbia pochi giorni. Con un visto stopover di quattro giorni è di fatto l\'unica scelta sensata.',
          },
          {
            nome: 'Entrare da Riyadh',
            sintesi: 'La capitale nell\'interno, con Diriyah patrimonio UNESCO alle porte e l\'Edge of the World a un\'ora e mezza di pista.',
            costo: 'voli europei diretti, spesso leggermente più cari',
            durata: 'base per un itinerario centro-est',
            pro: [
              'Diriyah, la capitale originale dei Saud, è patrimonio UNESCO ed è a venti minuti dal centro',
              'L\'Edge of the World, la scarpata del Tuwaiq, è una delle cose più spettacolari del paese',
              'Clima secco: molto più sopportabile di Jeddah alla stessa temperatura',
              'Più comoda per proseguire verso l\'est e verso il Rub\' al-Khali',
            ],
            contro: [
              'Città moderna e verticale, senza un centro storico camminabile',
              'Più conservatrice e meno rilassata di Jeddah nelle abitudini quotidiane',
              'AlUla è lontana: praticamente obbligatorio il volo interno',
            ],
            perChi: 'Chi ha almeno dieci giorni, o chi entra ed esce da due aeroporti diversi.',
          },
        ],
        raccomandazione:
          'Con meno di una settimana, Jeddah senza esitazioni: si atterra, si vede Al-Balad, si vola ad AlUla e si torna. Con dieci giorni o più, il modo migliore è entrare da una parte e uscire dall\'altra — Jeddah, AlUla, poi volo su Riyadh con Diriyah e l\'Edge of the World — evitando di rifare mille chilometri all\'indietro.',
      },
    ],
    miaEsperienza:
      'Jeddah spiazza chi arriva con l\'idea che l\'Arabia Saudita sia tutta uguale: è una città di mare, mediterranea nei modi più di quanto ci si aspetti, e la differenza con Riyadh si sente nel giro di mezza giornata. Al-Balad è il motivo principale per esserci, e va visto nell\'ora giusta: di giorno è un quartiere polveroso in restauro, mentre nel tardo pomeriggio la luce bassa prende i rawashin — quelle facciate di legno intagliato, alcune alte quattro piani, costruite per far circolare l\'aria e permettere alle donne di guardare fuori senza essere viste — e il quartiere diventa un\'altra cosa. Molte case sono puntellate e diverse sono crollate: il restauro è in corso ma non uniforme, e vedere Al-Balad adesso significa vederlo a metà strada. L\'altra cosa che resta è sociale più che monumentale: la Corniche il giovedì sera, con le famiglie che stendono i tappeti sul prato, i barbecue accesi e i bambini che giocano fino a mezzanotte. È il momento in cui si capisce meglio che paese sia questo, molto più che in qualsiasi museo.',
    esperienzeSlugs: ['al-balad-jeddah'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Le facciate di legno intagliato delle case-torre di Al-Balad a Jeddah al tramonto',
  },
  {
    slug: 'alula',
    paeseSlug: 'arabia-saudita',
    ordine: 2,
    nome: 'AlUla e Hegra',
    tipologia: ['archeologia', 'deserto', 'paesaggi'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'oasi in mezzo a un deserto di arenaria rossa, con centoundici tombe monumentali scavate nella roccia dai nabatei — gli stessi di Petra — e con una fortuna che Petra non ha: quasi nessuno davanti. Hegra è stato il primo sito saudita iscritto nel patrimonio UNESCO, nel 2008.',
    percheAndarci:
      'Perché è la ragione principale per cui vale la pena venire in Arabia Saudita. Hegra era la seconda città del regno nabateo dopo Petra, le tombe sono altrettanto elaborate e molto meglio conservate — l\'arenaria qui è più resistente — e si visitano con un numero di persone che a Petra sarebbe impensabile.',
    cosaVedere: [
      'Hegra (Mada\'in Salih), con le 111 tombe monumentali e la Qasr al-Farid, la "tomba solitaria" lasciata incompiuta',
      'Jabal Ikmah, la "biblioteca a cielo aperto" con centinaia di iscrizioni in dadanitico, lihyanita, nabateo e arabo antico',
      'Dadan, capitale dei regni di Dadan e Lihyan, più antica di Hegra',
      'La città vecchia di AlUla, con il labirinto di case di fango ai piedi della cittadella',
      'Elephant Rock (Jabal AlFil), il monolite di arenaria eroso a forma di elefante',
      'L\'oasi di AlUla, con centinaia di migliaia di palme da dattero e i percorsi ombreggiati tra i campi',
    ],
    cosaFare: [
      'Visita guidata a Hegra, obbligatoria e contingentata — vedi la scheda esperienza dedicata',
      'Jabal Ikmah al mattino presto, quando la luce radente fa risaltare le incisioni',
      'Tramonto a Elephant Rock, che è il ritrovo serale locale',
      'Camminare o pedalare nell\'oasi, lungo i percorsi tra le palme',
      'Notte nel deserto o volo in mongolfiera sopra le formazioni di arenaria, in stagione',
    ],
    doveDormire:
      'AlUla ha poche strutture rispetto alla domanda e prezzi alti: si va dai resort nel deserto, molto cari, alle sistemazioni più semplici nella città nuova. **Va prenotato con largo anticipo**, soprattutto tra dicembre e febbraio, quando la stagione è nel pieno e ci sono festival ed eventi.',
    doveMangiare:
      'L\'offerta è cresciuta in fretta ma resta limitata e cara rispetto al resto del paese. Nella città vecchia restaurata ci sono ristoranti e caffè; nella città nuova si mangia nei locali di quartiere a prezzi normali. Da cercare i datteri dell\'oasi, che sono il prodotto locale e si comprano direttamente dai produttori.',
    comeArrivare:
      'Volo interno su AlUla (ULH) da Riyadh o Jeddah, che è la soluzione normale, oppure circa 7 ore di strada da Jeddah e 3-4 da Medina. Le strade sono ottime e la benzina costa pochissimo, quindi l\'auto a noleggio è una scelta praticabile.',
    comeSpostarsi:
      'Dentro AlUla c\'è un servizio di navette che collega i siti principali; per il resto serve un\'auto. **A Hegra non si entra con il proprio mezzo**: si accede solo con i bus e le guide del sito.',
    periodoMigliore:
      'da ottobre a marzo, con dicembre e febbraio come mesi migliori: temperature tra i 12 e i 25 gradi. In estate si superano abbondantemente i 40 e la visita diventa impraticabile. Le notti nel deserto sono fredde anche in inverno.',
    costi:
      'l\'ingresso a Hegra con visita guidata ha un biglietto contingentato da prenotare online; gli altri siti hanno biglietti separati o combinati. Gli alloggi sono la voce più alta dell\'intero viaggio in Arabia Saudita.',
    erroriDaEvitare: [
      'Presentarsi a Hegra senza prenotazione: gli accessi sono contingentati, la visita è solo guidata e nei mesi di punta i posti si esauriscono',
      'Prenotare l\'alloggio all\'ultimo: AlUla ha poche strutture e in alta stagione si riempie',
      'Programmarla in estate',
      'Fermarsi a Hegra e saltare Jabal Ikmah e Dadan: sono compresi nella stessa area e raccontano i mille anni precedenti ai nabatei',
      'Dare per scontato che sia "la Petra senza turisti" e basta: il contesto paesaggistico è diverso e in certi aspetti più bello, ma le tombe sono meno numerose e non c\'è un Siq',
    ],
    miaEsperienza:
      'Hegra è la ragione per cui si prende l\'aereo per l\'Arabia Saudita, e regge quello che promette con un\'avvertenza sulle aspettative. Chi ci arriva pensando "Petra senza la folla" trova una cosa diversa: le tombe sono centoundici contro le centinaia di Petra, non c\'è un Siq che costruisca la sorpresa, e non c\'è un Tesoro. Ma quello che c\'è, non c\'è più da nessun\'altra parte: si sta davanti a una facciata nabatea scolpita duemila anni fa, alta dieci metri, con le iscrizioni ancora leggibili sull\'architrave, e intorno non c\'è nessuno — nessun venditore, nessun cammello, nessun gruppo. La Qasr al-Farid, la tomba solitaria rimasta incompiuta, sta da sola in mezzo al deserto e si capisce come lavoravano: scolpivano dall\'alto verso il basso, e quella si vede a metà. Il resto dell\'area vale quanto Hegra: Jabal Ikmah è una parete di roccia coperta di iscrizioni in quattro alfabeti diversi, lasciate lì da chi passava da queste parti duemilacinquecento anni fa — una specie di registro pubblico scolpito nella pietra. La cosa pratica che conta: si entra solo con visita guidata e con prenotazione, e gli alloggi ad AlUla sono pochi e cari.',
    esperienzeSlugs: ['hegra-alula'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'La tomba nabatea Qasr al-Farid isolata nel deserto di Hegra, AlUla, Arabia Saudita',
  },
  {
    slug: 'riyadh-diriyah',
    paeseSlug: 'arabia-saudita',
    ordine: 3,
    nome: 'Riyadh e Diriyah',
    tipologia: ['città', 'storia', 'deserto'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale nel cuore dell\'altopiano del Najd: una città verticale e recentissima, cresciuta da villaggio fortificato a metropoli di sette milioni in due generazioni. Alle sue porte c\'è Diriyah, la capitale originale della dinastia Saud, costruita in mattoni di fango e oggi patrimonio UNESCO — e a un\'ora e mezza di pista, la scarpata del Tuwaiq che tutti chiamano Edge of the World.',
    percheAndarci:
      'Perché è il posto dove si capisce la velocità con cui questo paese si è trasformato, e perché Diriyah e l\'Edge of the World, che stanno a mezz\'ora e a un\'ora e mezza dal centro, sono due delle cose migliori del Regno.',
    cosaVedere: [
      'Diriyah e il quartiere di At-Turaif, patrimonio UNESCO, costruito interamente in mattoni di fango',
      'Il Museo Nazionale Saudita, il migliore del paese per capire la storia della penisola',
      'Il Kingdom Centre con lo skybridge sospeso tra le due torri',
      'Masmak Fort, la fortezza di fango da cui nel 1902 iniziò la riconquista di Ibn Saud',
      'Il souq Al-Zal e il quartiere di Deira, la Riyadh prima dei grattacieli',
      'L\'Edge of the World (Jebel Fihrayn), la scarpata del Tuwaiq che si affaccia sul nulla',
    ],
    cosaFare: [
      'Diriyah al tramonto, quando i muri di fango diventano arancioni — vedi la scheda esperienza dedicata',
      'Escursione all\'Edge of the World, che richiede un 4x4 e mezza giornata — vedi la scheda esperienza dedicata',
      'Salita allo skybridge del Kingdom Centre per la vista sulla città',
      'Serata nei quartieri nuovi, dove dal 2019 hanno aperto caffè, ristoranti e locali che cinque anni fa non esistevano',
    ],
    doveDormire:
      'Il centro moderno (Olaya, King Fahd Road) è la zona più comoda per i trasporti e i ristoranti. Diriyah ha strutture di fascia alta nel distretto restaurato. Riyadh è enorme e dispersa: senza auto o Uber non si fa nulla.',
    doveMangiare:
      'La cucina del Najd è diversa da quella di Jeddah: più asciutta, con il kabsa come piatto principale, la jareesh — grano spezzato cotto a lungo — e il mutabbaq. I quartieri vecchi hanno ristoranti popolari ottimi e a pochissimo; i quartieri nuovi hanno una scena di caffè e ristoranti esplosa negli ultimi anni, con prezzi da capitale. Da provare il caffè arabo saudita, chiaro e speziato al cardamomo, servito con i datteri.',
    comeArrivare: 'Volo su King Khalid International (RUH), collegato all\'Europa con voli diretti. Da Jeddah, volo interno di circa 2 ore.',
    comeSpostarsi:
      'Uber e Careem, che sono il mezzo normale e costano poco. La metropolitana di Riyadh è entrata in servizio di recente e copre gli assi principali. Per l\'Edge of the World serve un 4x4 con autista: l\'ultimo tratto è pista e ci si perde facilmente.',
    periodoMigliore:
      'da novembre a marzo. L\'interno saudita ha un clima secco che rende i 30 gradi molto più sopportabili dell\'umidità di Jeddah, ma in estate si superano i 45-50 e le notti d\'inverno scendono vicino allo zero.',
    costi: 'Diriyah ha un biglietto d\'ingresso per At-Turaif; Museo Nazionale contenuto; escursione all\'Edge of the World 300-600 riyal secondo la formula.',
    erroriDaEvitare: [
      'Andare all\'Edge of the World in autonomia con un\'auto normale: l\'ultimo tratto è pista, non c\'è segnaletica e il campo telefonico va e viene',
      'Visitare Diriyah a mezzogiorno: il fango riverbera e la magia è tutta nell\'ultima ora di luce',
      'Aspettarsi una città storica: Riyadh è quasi interamente costruita dopo gli anni Settanta, e la parte vecchia si riduce a Masmak e a pochi isolati',
      'Sottovalutare le distanze: Riyadh si estende su decine di chilometri e ogni spostamento è di mezz\'ora',
    ],
    miaEsperienza:
      'Riyadh è la città che spiega il paese meglio di ogni altra, ma non per quello che mostra: per la velocità con cui è cambiata. Il Masmak Fort, la fortezza di fango da cui nel 1902 partì la riconquista di Ibn Saud, sta incastrato tra i grattacieli, e in mezzo ci sono poco più di cento anni. La cosa che resta però è Diriyah, mezz\'ora fuori: la capitale originale dei Saud, costruita interamente in mattoni di fango, distrutta dagli ottomani nel 1818 e restaurata negli ultimi anni. Al tramonto i muri passano dall\'ocra all\'arancione e il quartiere di At-Turaif, con i suoi palazzi a più piani e i motivi triangolari sulle facciate, sembra una cosa sola con la terra da cui è fatto. L\'altra tappa è l\'Edge of the World, e il nome per una volta non esagera: dopo un\'ora e mezza di pista si arriva sul bordo di una scarpata che scende per trecento metri su una pianura che si perde all\'orizzonte, senza una recinzione, senza un biglietto e con pochissime persone intorno. Serve un 4x4 e serve una guida, perché lì non c\'è segnaletica e il telefono non prende.',
    esperienzeSlugs: ['diriyah', 'edge-of-the-world'],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'I muri di fango del quartiere di At-Turaif a Diriyah al tramonto, Riyadh',
  },
  {
    slug: 'abha-asir',
    paeseSlug: 'arabia-saudita',
    ordine: 4,
    nome: 'Abha e le montagne dell\'Asir',
    tipologia: ['montagna', 'natura', 'cultura'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: false,
    introduzione:
      'Il sud-ovest del paese, sopra i 2.000 metri: montagne verdi, nebbie, terrazzamenti coltivati e villaggi di pietra aggrappati alle pareti. È la parte di Arabia Saudita che smentisce ogni aspettativa, e l\'unica dove d\'estate si sta al fresco mentre il resto del Regno supera i 45 gradi.',
    percheAndarci:
      'Perché nessuno si aspetta che l\'Arabia Saudita abbia una regione montuosa piovosa e coltivata a terrazze, e perché l\'architettura dell\'Asir — le case dipinte, i villaggi verticali come Rijal Almaa, i "villaggi di pietra" sulle scarpate — non somiglia a niente altro nella penisola.',
    cosaVedere: [
      'Rijal Almaa, il villaggio di pietra e quarzo su più piani, candidato patrimonio UNESCO',
      'Il parco nazionale dell\'Asir e il Jebel Sawda, il punto più alto del paese',
      'Habala, il villaggio sulla scarpata un tempo raggiungibile solo con scale di corda',
      'Le case dipinte di Abha, con i motivi geometrici colorati dipinti dalle donne (il qatt asiri, patrimonio immateriale UNESCO)',
      'I mercati di montagna, con i venditori che indossano ancora le ghirlande di fiori sul capo',
    ],
    cosaFare: [
      'Giornata a Rijal Almaa, con il museo nelle case restaurate',
      'Funivia dell\'Asir e sentieri sul Jebel Sawda',
      'Giro dei villaggi di montagna in auto, tra terrazzamenti e nebbia',
      'Mercato del bestiame e dei fiori, che qui è ancora l\'evento sociale della settimana',
    ],
    doveDormire:
      'Abha ha un\'offerta urbana normale e prezzi contenuti; nei villaggi di montagna cominciano a comparire strutture piccole, ma l\'offerta è ancora limitata.',
    doveMangiare:
      'La cucina dell\'Asir usa più cereali e verdure del resto del paese, per via dell\'agricoltura di montagna. Da provare l\'areeka, il pane con il miele e il burro chiarificato, e il miele dell\'Asir, che è il più pregiato della penisola e si vende nei mercati a prezzi importanti.',
    comeArrivare:
      'Volo interno su Abha (AHB) da Riyadh o Jeddah, che è la soluzione normale: via terra da Jeddah sono oltre 600 chilometri di strada di montagna.',
    comeSpostarsi: 'Auto a noleggio, indispensabile: i villaggi sono sparsi sulle montagne e non esiste trasporto pubblico utile.',
    periodoMigliore:
      'è la regione con il calendario invertito rispetto al resto del paese: l\'estate qui è la stagione buona, fresca e verde, mentre l\'inverno può essere freddo e nebbioso. Da giugno ad agosto l\'Asir si riempie di sauditi in fuga dal caldo, ed è anche il momento più vivo.',
    costi: 'contenuti: è una delle zone più economiche del Regno, con l\'eccezione del volo interno.',
    erroriDaEvitare: [
      'Programmarla in inverno pensando di trovare il clima del resto del paese: qui a 2.200 metri fa freddo e c\'è nebbia',
      'Farla senza auto: i villaggi sono distribuiti su decine di chilometri di montagna',
      'Andarci di corsa: è la regione dove l\'Arabia Saudita rallenta, e farla in un giorno significa vedere solo la strada',
      'Avvicinarsi alla zona di confine con lo Yemen, sconsigliata dagli avvisi ufficiali',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e la scheda resta sui fatti. Resta in lista perché è la parte del paese che smonta l\'immagine che tutti abbiamo dell\'Arabia Saudita: sopra i duemila metri, nel sud-ovest, ci sono montagne verdi, piogge estive, terrazzamenti coltivati e villaggi costruiti in verticale sulle pareti di roccia. Rijal Almaa è un paese di case a più piani in pietra e quarzo, con le facciate che luccicano al sole, ed è candidato al patrimonio UNESCO. Le donne dell\'Asir dipingono da generazioni gli interni delle case con motivi geometrici colorati — il qatt asiri, riconosciuto patrimonio immateriale UNESCO — che non hanno niente in comune con l\'austerità del Najd. E c\'è un dettaglio che ribalta la pianificazione: qui la stagione buona è l\'estate, quando il resto del Regno è invivibile e i sauditi salgono in massa a prendere il fresco.',
    esperienzeSlugs: [],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Il villaggio di pietra di Rijal Almaa sulle montagne dell\'Asir, Arabia Saudita',
  },
  {
    slug: 'umluj-mar-rosso',
    paeseSlug: 'arabia-saudita',
    ordine: 5,
    nome: 'Umluj e il Mar Rosso',
    tipologia: ['mare', 'isole', 'diving'],
    giorniConsigliati: '2 giorni, come estensione tra Jeddah e AlUla',
    visitataPersonalmente: false,
    introduzione:
      'La costa settentrionale del Mar Rosso saudita, con un arcipelago di un centinaio di isole di sabbia bianca e reef corallini tra i meno danneggiati al pianeta — perché fino a pochi anni fa nessun turista poteva arrivarci. La chiamano, con un\'esagerazione perdonabile, "le Maldive saudite".',
    percheAndarci:
      'Perché sono reef che non hanno subito decenni di pressione turistica, e perché è la parte del paese che sta cambiando più in fretta: qui stanno sorgendo i mega-progetti costieri, e vederla adesso significa vederla prima.',
    cosaVedere: [
      'L\'arcipelago al largo di Umluj, con le isole di sabbia bianca e i banchi corallini',
      'I reef del Mar Rosso settentrionale, con visibilità altissima',
      'La costa verso Al Wajh e l\'area dei grandi progetti turistici in costruzione',
      'I villaggi di pescatori lungo la costa, che sono la parte che sta sparendo più in fretta',
    ],
    cosaFare: [
      'Giornata in barca tra le isole, con snorkeling sui reef',
      'Immersioni, con una scena subacquea ancora agli inizi e pochissimi operatori',
      'Avvistamento di delfini e, in stagione, di squali balena',
    ],
    doveDormire:
      'L\'offerta a Umluj è ancora limitata e per lo più semplice; i grandi resort costieri sono in costruzione e cambieranno completamente il quadro. Molti fanno base a Yanbu, più attrezzata.',
    doveMangiare: 'Pesce, nei ristoranti dei porti e dei villaggi costieri, a prezzi bassi. L\'offerta è quella di una zona non ancora turistica: poche opzioni e nessun menu in inglese.',
    comeArrivare:
      'Volo interno su Yanbu o Al Wajh, oppure auto da Jeddah — circa 5-6 ore di strada costiera, che si incastra bene nel tragitto verso AlUla.',
    comeSpostarsi: 'Auto propria, obbligatoria; le uscite in barca si organizzano al porto con gli operatori locali.',
    periodoMigliore:
      'da ottobre ad aprile. In estate il caldo e l\'umidità della costa rendono la giornata in barca faticosa, anche se l\'acqua resta ottima.',
    costi: 'uscite in barca contenute rispetto agli standard del Mar Rosso egiziano; alloggi economici finché i grandi progetti non saranno operativi.',
    erroriDaEvitare: [
      'Aspettarsi infrastrutture turistiche: qui non ci sono ancora, ed è insieme il pregio e il limite della zona',
      'Contare su operatori con standard internazionali per le immersioni: la scena è agli inizi e va verificata caso per caso',
      'Dare per scontato l\'abbigliamento da spiaggia: fuori dai resort chiusi valgono le regole del paese, e sulle spiagge pubbliche si entra in acqua vestiti',
      'Programmarla senza auto',
    ],
    miaEsperienza:
      'Non ci sono ancora stato, e la scheda resta sui fatti invece di raccontare una giornata inventata. Resta in lista per un motivo che ha una scadenza: questi reef sono tra i meno danneggiati del Mar Rosso perché fino al 2019 praticamente nessun turista poteva arrivarci, e adesso su questa costa stanno sorgendo alcuni dei più grandi progetti turistici mai avviati al mondo. La finestra in cui Umluj è ancora un porto di pescatori con un centinaio di isole bianche davanti e nessuna infrastruttura è, con ogni probabilità, breve. Va anche detto con onestà cosa comporta: niente servizi, pochi operatori, nessuno standard garantito, e le regole del paese che valgono anche in spiaggia — sulle spiagge pubbliche si entra in acqua vestiti. Non è una meta balneare nel senso in cui lo intendiamo noi; è una costa che si sta aprendo adesso.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Isole di sabbia bianca e acqua turchese nell\'arcipelago di Umluj, Mar Rosso, Arabia Saudita',
  },
]
