import type { Esperienza } from '@/lib/types'

// Prima uscita spagnola dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/spagna.ts). Prezzi, orari e regole di prenotazione
// (Alhambra, Teide, Guggenheim) cambiano spesso e vanno riverificati sui
// canali ufficiali prima di prenotare.

export const esperienzeSpagna: Esperienza[] = [
  // --- Andalusia ---
  {
    slug: 'alhambra-visita',
    paeseSlug: 'spagna',
    destinazioneSlug: 'granada',
    nome: 'Visita all\'Alhambra e al Generalife',
    localita: 'Granada, Andalusia',
    cosE:
      'Il complesso palaziale-fortezza dell\'ultima dinastia moresca di Al-Andalus (i Nazridi, XIII-XV secolo), su una collina che domina Granada: i Palazzi Nazridi con il Patio de los Leones e la Sala degli Ambasciatori, l\'Alcazaba (la fortezza militare più antica) e il Generalife, i giardini estivi con le fontane a scomparsa. Uno dei monumenti più visitati al mondo, con ingresso a numero chiuso e fasce orarie fisse per i Palazzi Nazridi.',
    percheFarla:
      'Perché è probabilmente il singolo monumento che meglio racconta cosa fosse l\'arte moresca in Spagna: non rovine, ma un palazzo che si può ancora percorrere stanza per stanza, con la decorazione in stucco e i giochi d\'acqua rimasti sostanzialmente intatti da sei secoli.',
    durata: 'mezza giornata (3-4 ore) per vedere con calma Palazzi Nazridi, Alcazaba e Generalife',
    periodo: 'tutto l\'anno; in estate conviene la fascia mattutina più presto possibile, per il caldo e per la luce migliore sui giardini',
    costo: 'biglietto generale circa 19,60€, con l\'accesso ai Palazzi Nazridi vincolato a una fascia oraria specifica indicata sul biglietto',
    comePrenotare:
      'Esclusivamente online sul sito ufficiale (alhambra-patronato.es), fino a tre mesi prima della visita. In alta stagione (giugno-settembre, Settimana Santa, Natale) i biglietti si esauriscono spesso con settimane, a volte mesi, di anticipo: prenotare appena si fissa la data del viaggio, non a ridosso della partenza. Se il sito ufficiale risulta esaurito, restano alcune alternative (tour operator con quote pre-acquistate, Granada Card, biglietti rilasciati da cancellazioni a mezzanotte ora spagnola).',
    cosaPortare: 'Un documento d\'identità valido, che deve corrispondere al nominativo sul biglietto (i controlli sono rigorosi); scarpe comode per il percorso, in gran parte all\'aperto.',
    perChiEAdatta: 'Adatta a chiunque, bambini compresi; il percorso richiede cammino ma non è fisicamente impegnativo.',
    giudizio: 'da-verificare',
    alternative: ['Tour guidato con ingresso incluso, per chi non riesce a trovare posto sul sito ufficiale o preferisce una spiegazione storica strutturata'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'Il Patio de los Leones nei Palazzi Nazridi dell\'Alhambra, con la fontana centrale e i portici a colonne sottili',
  },
  {
    slug: 'flamenco-triana',
    paeseSlug: 'spagna',
    destinazioneSlug: 'siviglia',
    nome: 'Spettacolo di flamenco in un tablao acustico a Triana o Santa Cruz',
    localita: 'Siviglia, Andalusia',
    cosE:
      'Uno spettacolo di flamenco dal vivo in un tablao di piccole dimensioni, senza amplificazione (cante, chitarra e ballo interamente acustici), nella tradizione dei locali storici di Triana e del Barrio de Santa Cruz — diverso dai grandi format turistici con più artisti, luci teatrali e sale da centinaia di posti.',
    percheFarla:
      'Perché il flamenco è nato a Siviglia (soprattutto a Triana, quartiere gitano) come espressione popolare, non come intrattenimento da palcoscenico: un tablao piccolo e acustico restituisce l\'intensità originale molto meglio di uno spettacolo pensato per pullman di turisti.',
    durata: 'circa 1-1,5 ore per spettacolo',
    periodo: 'tutto l\'anno, essendo un\'esperienza al chiuso',
    costo: 'indicativamente 20-45€ a persona secondo il locale, spesso con un drink incluso; i tablao più curati (senza amplificazione, con pochi posti) tendono a costare di più di quelli standardizzati per grandi gruppi',
    comePrenotare: 'Direttamente sul sito del tablao scelto o tramite le piattaforme di biglietteria online; consigliata la prenotazione con qualche giorno di anticipo nei weekend e in alta stagione.',
    perChiEAdatta: 'Adatta a tutti; chi cerca un\'esperienza più intima e meno "da show" dovrebbe informarsi in anticipo sulla dimensione della sala e sull\'uso o meno di amplificazione.',
    giudizio: 'da-verificare',
    alternative: ['Assistere a una sessione informale in una peña flamenca (club non a scopo di lucro frequentato da appassionati locali), meno turistica ma con orari e disponibilità più incerti'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'Una ballerina di flamenco in movimento su un piccolo palco acustico, illuminata da luce calda',
  },
  {
    slug: 'tapeo-siviglia',
    paeseSlug: 'spagna',
    destinazioneSlug: 'siviglia',
    nome: 'Tapeo tra Triana e Santa Cruz',
    localita: 'Siviglia, Andalusia',
    cosE:
      'Un giro serale tra bar di tapas, spostandosi a piedi da un locale all\'altro tra il Mercado de Triana, i bar storici sul lungofiume e i vicoli del Barrio de Santa Cruz, assaggiando poche tapas per locale prima di cambiare — l\'equivalente andaluso del txikiteo basco, ma con un ritmo più informale.',
    percheFarla:
      'Perché a Siviglia la cena "seria" spesso non esiste: si mangia girando, ed è il modo in cui i sivigliani stessi passano la serata, soprattutto d\'estate quando il caldo scoraggia i pasti seduti nelle ore più calde.',
    durata: '2-3 ore, di solito a partire dalla tarda serata (21-22), quando il caldo estivo è calato',
    periodo: 'tutto l\'anno, ma particolarmente piacevole in primavera e autunno, con le temperature serali più gradevoli',
    costo: 'indicativamente 20-30€ a persona per una serata di 4-5 tapas con vino o birra',
    comePrenotare: 'Nessuna prenotazione necessaria nella maggior parte dei bar tradizionali; nei locali più noti nei weekend può convenire arrivare presto per un tavolo.',
    perChiEAdatta: 'Adatta a tutti; chi ha intolleranze o allergie dovrebbe segnalarle bar per bar, dato che i menu spesso non sono scritti.',
    giudizio: 'da-verificare',
    alternative: ['Un tour gastronomico guidato tra tapas bar, per chi preferisce una selezione già fatta da un locale esperto'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'Un bancone di bar affollato a Siviglia con piattini di tapas e bicchieri di vino sul marmo',
  },
  {
    slug: 'zambra-sacromonte',
    paeseSlug: 'spagna',
    destinazioneSlug: 'granada',
    nome: 'Zambra di flamenco in una casa-grotta del Sacromonte',
    localita: 'Sacromonte, Granada',
    cosE:
      'Uno spettacolo di flamenco nella variante zambra, nata proprio nel quartiere del Sacromonte tra la comunità gitana, ospitato in una delle case-grotta scavate nella collina — con un\'atmosfera più raccolta e domestica rispetto a un tablao cittadino tradizionale.',
    percheFarla:
      'Perché il Sacromonte ha una tradizione flamenca propria, distinta da quella di Siviglia, e vederla nel suo ambiente naturale (una grotta abitata, non un teatro) è un\'esperienza diversa da qualsiasi tablao di città.',
    durata: 'circa 1-1,5 ore',
    periodo: 'tutto l\'anno',
    costo: 'indicativamente 25-40€ a persona secondo la casa-grotta scelta',
    comePrenotare: 'Online tramite i siti delle singole cuevas o piattaforme di biglietteria; consigliata la prenotazione con qualche giorno di anticipo.',
    cosaPortare: 'Scarpe comode: il Sacromonte è in salita e alcune grotte si raggiungono solo a piedi lungo sentieri non asfaltati.',
    perChiEAdatta: 'Adatta a tutti; nel quartiere convivono zambras storiche e format più turistici allo stesso prezzo, quindi conviene informarsi sulla reputazione della singola cueva prima di prenotare.',
    giudizio: 'da-verificare',
    alternative: ['Un tablao in centro a Granada, più comodo da raggiungere ma meno legato alla tradizione specifica del quartiere'],
    tripSlugs: ['andalusia-itinerario'],
    imageAlt: 'L\'interno di una casa-grotta del Sacromonte allestita per uno spettacolo di flamenco, con sedie e pareti bianche di roccia',
  },

  // --- Nord ---
  {
    slug: 'pintxos-crawl-donostia',
    paeseSlug: 'spagna',
    destinazioneSlug: 'san-sebastian',
    nome: 'Txikiteo: giro di pintxos nella Parte Vieja',
    localita: 'San Sebastián (Donostia), Paesi Baschi',
    cosE:
      'Il giro serale da bar a bar della Parte Vieja di San Sebastián, ordinando un pintxo (o due) e un bicchiere di txakoli o sidra per locale, prima di spostarsi al successivo: la regola non scritta è "un bar, una specialità", restando al massimo 15-20 minuti in ognuno.',
    percheFarla:
      'Perché è la forma più autentica e più densa della cultura gastronomica basca, concentrata in poche vie della città vecchia, e perché San Sebastián ha, per abitante, più stelle Michelin di qualsiasi altra città al mondo — anche solo a livello di pintxos da bancone il livello medio è altissimo.',
    durata: '2-3 ore per un giro di 4-6 bar',
    periodo: 'tutto l\'anno, con l\'atmosfera più vivace nei mesi estivi quando si mangia anche all\'aperto',
    costo: 'indicativamente 25-35€ a persona per una serata di 4-5 pintxos con altrettanti bicchieri; i pintxos singoli costano in media 2-5€ ciascuno',
    comePrenotare: 'Nessuna prenotazione necessaria: si entra, ci si mette al bancone, si ordina.',
    cosaPortare: 'Nessuna attrezzatura particolare; utile un po\' di spagnolo o basco di base per orientarsi nei bar più frequentati dai locali, dove i menu non sono sempre in inglese.',
    perChiEAdatta: 'Adatta a tutti; poco indicata a chi preferisce un pasto seduto e tranquillo invece che in piedi e in movimento.',
    giudizio: 'da-verificare',
    alternative: ['Un tour guidato con un locale esperto, utile per chi arriva senza sapere quali bar scegliere tra le decine della Parte Vieja'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'Un bancone di bar nella Parte Vieja di San Sebastián coperto di pintxos su stuzzicadenti colorati',
  },
  {
    slug: 'guggenheim-bilbao',
    paeseSlug: 'spagna',
    destinazioneSlug: 'bilbao',
    nome: 'Museo Guggenheim Bilbao',
    localita: 'Bilbao, Paesi Baschi',
    cosE:
      'Il museo di arte contemporanea progettato da Frank Gehry, aperto nel 1997, il cui edificio in titanio sull\'estuario del Nervión è diventato di per sé l\'opera più famosa che ospita. Le collezioni permanenti (arte astratta, espressionismo astratto, arte contemporanea basca e spagnola) si affiancano a mostre temporanee di rilievo internazionale.',
    percheFarla:
      'Perché è l\'esempio più citato al mondo di "effetto Bilbao": un singolo edificio che ha rigenerato una città industriale in declino, e perché l\'architettura stessa — che cambia aspetto con la luce del giorno — è parte dell\'esperienza tanto quanto le opere esposte.',
    durata: '2-3 ore per una visita con calma',
    periodo: 'tutto l\'anno; il museo chiude quasi tutti i lunedì (con eccezioni stagionali estive da verificare)',
    costo: 'adulti 18€ da metà giugno a metà settembre, 15€ nel resto dell\'anno (ridotto 9€/7,50€); gratuito per i minori di 18 anni',
    comePrenotare: 'Consigliata la prenotazione online sul sito ufficiale per saltare la fila, soprattutto nei weekend e nei mesi estivi.',
    perChiEAdatta: 'Adatta a tutti; l\'edificio stesso si può ammirare gratuitamente dall\'esterno, lungo il Nervión, per chi non vuole entrare.',
    giudizio: 'da-verificare',
    alternative: ['Passeggiata gratuita intorno all\'edificio e alle sculture esterne (il "Puppy" di Jeff Koons, il "Maman" di Louise Bourgeois), per chi vuole solo l\'esperienza architettonica'],
    tripSlugs: ['spagna-nord-itinerario'],
    imageAlt: 'La facciata in titanio del Museo Guggenheim Bilbao che riflette la luce del tardo pomeriggio sul fiume Nervión',
  },

  // --- Baleari ---
  {
    slug: 'serra-tramuntana-trekking',
    paeseSlug: 'spagna',
    destinazioneSlug: 'mallorca',
    nome: 'Trekking nella Serra de Tramuntana',
    localita: 'Serra de Tramuntana, Mallorca',
    cosE:
      'Un\'escursione, anche di una sola giornata, lungo una tappa del GR221 (il "Sentiero della Pietra a Secco") o su uno dei sentieri minori della Serra de Tramuntana, la catena montuosa patrimonio culturale UNESCO che corre per 90 km lungo la costa nord-occidentale di Mallorca, tra terrazzamenti agricoli costruiti a mano nei secoli, uliveti e paesi di pietra come Valldemossa e Deià.',
    percheFarla:
      'Perché è il paesaggio che smentisce l\'idea di Mallorca come sola isola da spiaggia: un paesaggio agricolo modellato dall\'uomo per secoli, dichiarato patrimonio UNESCO nel 2011 non per la natura in sé ma per la simbiosi tra uomo e territorio.',
    durata: 'da poche ore per un tratto breve fino a 8 giorni per l\'attraversata completa del GR221 con pernottamento nei rifugi',
    periodo: 'primavera e autunno per le temperature migliori; l\'estate è più calda ma praticabile nelle ore mattutine',
    costo: 'accesso libero ai sentieri; i rifugi lungo il GR221 richiedono prenotazione e hanno un costo a notte',
    comePrenotare: 'Nessuna prenotazione per le escursioni di giornata; per l\'attraversata multi-giorno, i rifugi (refugis) vanno prenotati in anticipo tramite il sito ufficiale del Consell de Mallorca.',
    cosaPortare: 'Scarpe da trekking, acqua abbondante (le fonti non sono sempre affidabili), protezione solare.',
    perChiEAdatta: 'Le tappe brevi sono adatte a camminatori di livello medio; l\'attraversata completa richiede allenamento ed esperienza escursionistica.',
    giudizio: 'da-verificare',
    alternative: ['Il trenino storico Palma-Sóller, per vedere la Serra dal basso senza camminare'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'Un sentiero di pietra a secco tra terrazzamenti di ulivi nella Serra de Tramuntana, Mallorca',
  },
  {
    slug: 'ibiza-nord-calette',
    paeseSlug: 'spagna',
    destinazioneSlug: 'ibiza',
    nome: 'Il nord di Ibiza: calette e mercati oltre la vita notturna',
    localita: 'Sant Joan de Labritja e Santa Gertrudis, Ibiza',
    cosE:
      'Una giornata (o più) dedicata al nord rurale di Ibiza: le calette di Cala Xarraca e Cala Sant Vicent, il mercato hippie-artigianale di Las Dalias o quello del sabato di Sant Joan, e il tramonto ai tamburi di Benirràs, un rituale informale della domenica che dura da decenni.',
    percheFarla:
      'Perché è la parte di Ibiza che le guide generaliste tendono a saltare, ed è quella che restituisce il vero carattere bohémien dell\'isola — quello che l\'ha resa negli anni \'60-\'70 una meta hippie prima ancora che una capitale del clubbing.',
    durata: 'una giornata intera per coprire con calma calette e mercati',
    periodo: 'da maggio a ottobre per il mare; i mercati e i tamburi di Benirràs seguono un calendario stagionale da verificare in loco',
    costo: 'nessun costo di ingresso alle calette; i mercati hanno prezzi variabili sugli acquisti, senza costo di ingresso',
    comePrenotare: 'Nessuna prenotazione necessaria; utile un\'auto o uno scooter a noleggio, dato che i collegamenti bus verso il nord sono limitati.',
    cosaPortare: 'Crema solare, acqua, un telo da mare: le calette del nord hanno pochi servizi rispetto alle spiagge attrezzate del sud.',
    perChiEAdatta: 'Adatta a tutti, famiglie comprese; è l\'alternativa naturale per chi visita Ibiza senza interesse per la vita notturna.',
    giudizio: 'da-verificare',
    alternative: ['Un tour organizzato in jeep o minivan tra le calette del nord, per chi non vuole guidare su strade secondarie'],
    tripSlugs: ['baleari-itinerario'],
    imageAlt: 'La caletta isolata di Cala Xarraca sulla costa nord di Ibiza, con acqua turchese e scogliere basse',
  },

  // --- Canarie ---
  {
    slug: 'teide-vetta-permesso',
    paeseSlug: 'spagna',
    destinazioneSlug: 'tenerife',
    nome: 'Salita al Pico del Teide: funivia e permesso per la vetta',
    localita: 'Parco Nazionale del Teide, Tenerife',
    cosE:
      'L\'ascesa al punto più alto di Spagna (3.715 metri) in due tappe: la funivia del Teide porta dalla stazione base (2.356 m) alla stazione superiore (3.555 m) in circa 8 minuti; da lì, il sentiero PNT-10 Telesforo Bravo, a numero chiuso e con permesso obbligatorio, porta fino al vero cratere sommitale in circa 45 minuti-1 ora di cammino.',
    percheFarla:
      'Perché la vista dalla cima del Teide, sopra il mare di nubi che spesso copre il resto dell\'isola, è tra le esperienze paesaggistiche più forti delle Canarie, e perché l\'accesso regolamentato mantiene il numero di visitatori contenuto rispetto a quanto la fama del luogo farebbe pensare.',
    durata: 'mezza giornata, tra funivia, tempo in vetta e ridiscesa',
    periodo: 'tutto l\'anno, con temperature comunque molto più basse che a valle; in inverno la neve può richiedere attrezzatura aggiuntiva o rendere il sentiero sommitale impraticabile',
    costo: 'funivia circa 40€ andata e ritorno; il permesso per la vetta è gratuito',
    comePrenotare:
      'Due prenotazioni separate: il biglietto della funivia sul sito ufficiale volcanoteide.com, e il permesso gratuito per il tratto sommitale sul portale del Parco Nazionale (tramite Tenerife ON), fino a 56 giorni prima e con un limite di 200 persone al giorno — va richiesto con largo anticipo, mesi prima nei periodi di punta.',
    cosaPortare: 'Abbigliamento a strati (le temperature in vetta sono molto più basse che a valle, anche d\'estate), scarpe da trekking, protezione solare e occhiali da sole (la radiazione UV in quota è alta), acqua.',
    perChiEAdatta: 'Il tratto sommitale richiede una condizione fisica normale ma risente dell\'altitudine; chi soffre di problemi cardiorespiratori dovrebbe informarsi prima.',
    giudizio: 'da-verificare',
    alternative: ['Solo funivia, senza permesso per la vetta: la stazione superiore offre già un ampio panorama sulla caldera, sufficiente per chi non vuole gestire la prenotazione del permesso'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'Il cratere sommitale del Teide visto dal sentiero Telesforo Bravo, sopra un mare di nubi',
  },
  {
    slug: 'timanfaya-ruta-volcanes',
    paeseSlug: 'spagna',
    destinazioneSlug: 'lanzarote',
    nome: 'Ruta de los Volcanes a Timanfaya',
    localita: 'Parco Nazionale di Timanfaya, Lanzarote',
    cosE:
      'Il percorso guidato in pullman attraverso il paesaggio vulcanico creato dalle eruzioni del 1730-1736, che ricoprirono un quarto dell\'isola di lava: dune di cenere nera, colate pietrificate e crateri, visitabili solo restando a bordo del mezzo per motivi di sicurezza (il suolo resta caldo a pochi metri di profondità) e di tutela ambientale. Include le dimostrazioni geotermiche all\'Islote del Hilario.',
    percheFarla:
      'Perché è il paesaggio vulcanico più intatto e più scenografico delle Canarie, e perché le dimostrazioni geotermiche dal vivo — legna che prende fuoco a contatto con pietre del terreno, acqua versata in un foro che schizza in aria come un geyser — rendono tangibile un\'attività vulcanica che altrove si vede solo nei documentari.',
    durata: 'circa 2-3 ore, tra ingresso, percorso in bus (circa 40 minuti) e dimostrazioni',
    periodo: 'tutto l\'anno; le ore centrali della giornata, su un terreno scuro che assorbe calore, sono le più calde da affrontare',
    costo: 'biglietto con bus incluso circa 12-18€ a persona',
    comePrenotare: 'Consigliata la prenotazione online in anticipo nei mesi di punta, per garantirsi una fascia oraria e ridurre l\'attesa in loco.',
    cosaPortare: 'Protezione solare e acqua; non serve equipaggiamento da trekking, dato che il percorso principale si fa interamente in pullman.',
    perChiEAdatta: 'Adatta a tutti, bambini compresi, proprio perché non richiede cammino.',
    giudizio: 'da-verificare',
    alternative: ['Il sentiero guidato a piedi (su prenotazione separata e a numero più limitato) per chi vuole un\'esperienza più ravvicinata del paesaggio, sempre accompagnato da una guida del parco'],
    tripSlugs: ['canarie-itinerario'],
    imageAlt: 'Un pullman panoramico percorre la Ruta de los Volcanes tra le colate laviche nere di Timanfaya, Lanzarote',
  },
]
