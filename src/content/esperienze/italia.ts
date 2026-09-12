import type { Esperienza } from '@/lib/types'

// I campi miaEsperienza e i giudizi sono bozze scritte da Claude nella voce
// del diario, coerenti con ciò che è oggettivamente vero di ogni esperienza
// (contingentamenti, stagione, difficoltà, regole) ma non basate su ricordi
// reali: vanno riletti e confermati o corretti — qui più che altrove, perché
// questi posti li conosci davvero.
// Nessun nome di rifugio, hotel, ristorante o cantina è stato inventato.
// Prezzi e regole di accesso cambiano ogni stagione: vanno riverificati.

export const esperienzeItalia: Esperienza[] = [
  {
    slug: 'alta-via-1',
    paeseSlug: 'italia',
    destinazioneSlug: 'dolomiti',
    nome: 'Alta Via 1 delle Dolomiti',
    localita: 'Da Lago di Braies a Belluno, Alto Adige e Veneto',
    cosE:
      'Il trekking a tappe più classico delle Dolomiti: circa 125 chilometri da nord a sud, dal Lago di Braies fino a Belluno, dormendo nei rifugi. Si attraversano il Parco Fanes-Sennes-Braies, le Tofane, il gruppo del Pelmo e le Dolomiti Bellunesi, con un dislivello complessivo di diverse migliaia di metri distribuito su 8-12 tappe.',
    percheFarla:
      'Perché è il modo in cui le Dolomiti vanno viste: non da un parcheggio ma camminandoci dentro per giorni, con lo zaino leggero perché a cena e al letto pensano i rifugi. È il modello alpino, e non esiste in questa densità da nessun\'altra parte al mondo.',
    durata: '8-12 giorni a seconda di come si accorpano le tappe; esistono versioni ridotte di 4-5 giorni',
    periodo:
      '**da fine giugno a metà settembre**, la finestra in cui i rifugi sono aperti. A giugno i nevai residui sui passi alti sono una variabile seria; a fine settembre i rifugi cominciano a chiudere e le giornate si accorciano. **Settembre è il mese migliore**: meno gente, aria limpida, rifugi ancora attivi fino a fine mese.',
    costo:
      'mezza pensione in rifugio indicativamente 60-80€ a notte, con sconti importanti per i soci CAI e delle associazioni alpinistiche affiliate — la tessera si ripaga in tre notti. Aggiungere pranzi al sacco, funivie dove si usano e il rientro.',
    comePrenotare:
      '**I rifugi si prenotano da gennaio-febbraio per l\'estate**, e per le camere private anche prima: è il vincolo che determina tutto il resto. Si prenota direttamente con ogni rifugio, per telefono o email, oppure attraverso il portale di prenotazione del CAI dove disponibile. Va costruito l\'intero itinerario prima, perché le tappe si incastrano e spostarne una significa rifare tutto.',
    cosaPortare:
      'Zaino da 30-40 litri e non di più, sacco lenzuolo (obbligatorio in tutti i rifugi), scarponi rodati, strati per temperature che dai 25 gradi del fondovalle scendono vicino allo zero di notte in quota, guscio antipioggia, torcia frontale, e **contanti**, perché in molti rifugi la carta non si usa: non c\'è linea. Tappi per le orecchie, per le camerate.',
    perChiEAdatta:
      'Serve allenamento e abitudine a camminare più giorni consecutivi con uno zaino, non tecnica alpinistica: l\'Alta Via 1 è la più accessibile delle Alte Vie e non ha tratti attrezzati obbligatori, ma le tappe sono lunghe e i dislivelli seri. Chi non ha mai fatto un trekking a tappe faccia una versione ridotta.',
    miaEsperienza:
      'La prima cosa che si impara è che nelle Dolomiti i numeri ingannano: una tappa di dodici chilometri sembra corta e poi ha novecento metri di salita e altrettanti di discesa, e alle cinque del pomeriggio le gambe la sentono. La seconda è che il rifugio cambia tutto. Si arriva stanchi, si tolgono gli scarponi all\'ingresso come impone la regola, si cena alle sette a tavolate comuni con altre venti persone che hanno fatto lo stesso percorso in senso opposto, e alle dieci si spengono le luci — non per modo di dire: si spengono. Il giorno dopo si parte alle sette. È un ritmo che dopo tre giorni entra nel corpo, e uscirne al ritorno è la parte difficile. La cosa da sapere prima di tutto è il calendario delle prenotazioni: i rifugi dell\'Alta Via 1 si esauriscono da febbraio, e chi ci pensa a giugno per agosto non parte. E poi la regola dei temporali, che sembra folklore e non lo è: qui d\'estate i temporali pomeridiani sono regolari, e si parte alle sette per essere al rifugio prima delle due.',
    giudizio: 'imperdibile',
    alternative: [
      'L\'Alta Via 2, più lunga e più impegnativa, con tratti attrezzati',
      'Una versione ridotta di 4-5 tappe, per chi non ha mai fatto un trekking a rifugi',
      'Il giro del Sassolungo o dell\'Alpe di Siusi in giornata, per chi vuole solo assaggiare',
    ],
    tripSlugs: ['dolomiti-estate'],
    imageAlt: 'Escursionisti su un sentiero dell\'Alta Via 1 con le pareti dolomitiche sullo sfondo',
  },
  {
    slug: 'tre-cime-lavaredo',
    paeseSlug: 'italia',
    destinazioneSlug: 'dolomiti',
    nome: 'Il giro delle Tre Cime di Lavaredo',
    localita: 'Parco Naturale Tre Cime, tra Alto Adige e Veneto',
    cosE:
      'L\'anello attorno alla base delle Tre Cime, circa 10 chilometri con 350 metri di dislivello, che parte dal Rifugio Auronzo e passa dal Rifugio Lavaredo, dalla Forcella Lavaredo, dal Rifugio Locatelli — con la vista classica sulle tre pareti nord — e rientra dal versante opposto.',
    percheFarla:
      'Perché è il simbolo delle Dolomiti e perché il giro completo mostra le tre cime da tutti i lati: la sagoma che si conosce dalle fotografie è quella vista dal Locatelli, e per arrivarci bisogna camminare.',
    durata: '3-4 ore per l\'anello completo con soste',
    periodo:
      'da fine giugno a inizio ottobre, quando la strada è aperta. **Il momento giusto è l\'alba o il tardo pomeriggio**: nelle ore centrali di luglio e agosto il sentiero è una fila continua.',
    costo:
      '**pedaggio della strada attorno ai 40€ per auto**, valido 12 ore dall\'orario prenotato, oltre a moto, camper e bus con tariffe proprie. Il sentiero in sé è gratuito.',
    comePrenotare:
      '**Dal 2026 l\'accesso in auto al parcheggio del Rifugio Auronzo richiede prenotazione online obbligatoria con fascia oraria**, oltre al pedaggio: chi arriva senza torna indietro. La prenotazione si fa sul portale ufficiale e le fasce migliori si esauriscono. In alternativa si sale in bus dai fondovalle, o a piedi da Misurina o dalla Val Fiscalina — che è il modo in cui si faceva prima e che elimina il problema.',
    cosaPortare:
      'Scarpe da trekking (il fondo è sassoso e irregolare), acqua, strati: a 2.400 metri il vento gira e la temperatura cambia in fretta. Contanti per i rifugi lungo il percorso.',
    perChiEAdatta:
      'A quasi tutti: il dislivello è modesto e il sentiero è largo e ben tracciato. È probabilmente l\'escursione dolomitica più accessibile in rapporto a quello che si vede, ed è anche il motivo per cui è così affollata.',
    miaEsperienza:
      'È l\'escursione più famosa delle Dolomiti e va affrontata sapendo esattamente in cosa ci si infila. Nel pieno di agosto, tra le dieci e le quattro, il sentiero attorno alle Tre Cime è una processione: si cammina in fila, si aspetta per fare una fotografia al Locatelli, e il parcheggio del Rifugio Auronzo si riempie prestissimo — al punto che dal 2026 hanno dovuto introdurre la prenotazione obbligatoria della strada. Detto questo: alle sei e mezza del mattino è un altro posto. Le pareti nord sono ancora in ombra e il sole prende le cime dall\'altro lato, l\'aria è ferma, e per la prima ora si incontra pochissima gente. Il punto che vale il giro non è la vista dal parcheggio — che si ha appena si scende dall\'auto — ma il tratto dopo la Forcella Lavaredo, quando ci si gira e le tre pareti nord si allineano come nelle fotografie. Chi vuole evitare del tutto il pedaggio e la coda può salire a piedi dalla Val Fiscalina: è una giornata intera, ed è come lo si faceva prima che ci fosse la strada.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il giro del Sassolungo o il sentiero delle Odle, altrettanto spettacolari e molto meno affollati',
      'Il Lago di Sorapis, con il turchese da farina glaciale, anch\'esso contingentato ma meno battuto',
      'Salire alle Tre Cime a piedi dalla Val Fiscalina, evitando pedaggio e prenotazione',
    ],
    tripSlugs: ['dolomiti-estate'],
    imageAlt: 'Le pareti nord delle Tre Cime di Lavaredo viste dal sentiero al Rifugio Locatelli',
  },
  {
    slug: 'via-ferrata-dolomiti',
    paeseSlug: 'italia',
    destinazioneSlug: 'dolomiti',
    nome: 'Una via ferrata',
    localita: 'Dolomiti, in tutte le province',
    cosE:
      'Un percorso attrezzato su parete rocciosa con cavi d\'acciaio, scale e pioli fissati alla roccia, che si percorre assicurati con un kit specifico. Le ferrate dolomitiche nascono in gran parte dalle opere militari della Prima guerra mondiale, e oggi sono la rete più fitta al mondo.',
    percheFarla:
      'Perché permette di arrivare in posti verticali senza essere alpinisti, e perché nelle Dolomiti molte ferrate passano dentro gallerie e camminamenti scavati nella roccia dai soldati tra il 1915 e il 1917: si sale dentro la storia oltre che sulla parete.',
    durata: 'da 2 a 8 ore secondo l\'itinerario',
    periodo:
      'da fine giugno a settembre, quando la roccia è asciutta e libera da neve. **Mai con temporali in arrivo**: il cavo d\'acciaio è un conduttore, ed è la ragione per cui si parte presto e si è fuori dalla parete entro il primo pomeriggio.',
    costo: 'noleggio del kit completo (imbrago, set da ferrata con dissipatore, casco) indicativamente 15-25€ al giorno; una guida alpina per un gruppo piccolo costa molto di più ma è l\'investimento giusto la prima volta',
    comePrenotare:
      'Le ferrate non si prenotano: si va. Quello che va prenotato è il noleggio dell\'attrezzatura nei periodi di punta e, la prima volta, una **guida alpina**. Fondamentale scegliere l\'itinerario sulla base della difficoltà reale: le ferrate hanno scale di difficoltà, e "facile" non significa banale.',
    cosaPortare:
      '**Kit da ferrata omologato con dissipatore** — non un\'imbragatura improvvisata, non moschettoni da arrampicata generici — casco, guanti, scarponi con suola rigida. Acqua e strati. La torcia se il percorso passa in galleria.',
    perChiEAdatta:
      'Serve assenza di vertigini, una discreta forza nelle braccia e, soprattutto, la capacità di gestire l\'esposizione. **Non è un\'escursione con le catene**: si sta su pareti verticali con centinaia di metri sotto. La prima volta si va con una guida, punto.',
    miaEsperienza:
      'La ferrata è la cosa che fa capire cosa siano davvero le Dolomiti: si passa dal camminare su un sentiero al salire una parete verticale con il vuoto sotto i piedi, e il cambio di prospettiva è immediato. Tecnicamente non è difficile — ci si aggancia al cavo con due moschettoni e si sale — ma la parte difficile non è tecnica: è la testa. Ci sono tratti in cui si è appesi a una scala metallica su una parete strapiombante e sotto ci sono trecento metri d\'aria, e lì la differenza tra chi regge e chi no non ha niente a che vedere con l\'allenamento. La cosa che rende le ferrate dolomitiche diverse da quelle di altre zone alpine è la storia: molti percorsi seguono le opere militari della Grande Guerra, e si attraversano gallerie scavate a mano nella roccia, postazioni, camminamenti — sul Lagazuoi si cammina dentro una montagna che gli austriaci e gli italiani si sono scavati addosso per due anni. Due cose non negoziabili, e vanno dette senza attenuarle: **il kit deve essere omologato con dissipatore**, e non si entra in parete con un temporale in arrivo. Il soccorso alpino in Italia si paga, e questi due errori sono la ragione più frequente per cui viene chiamato.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Sentiero delle Gallerie del Lagazuoi, che è la parte storica con molta meno esposizione',
      'Un sentiero attrezzato di difficoltà bassa, per capire se l\'esposizione è gestibile prima di impegnarsi',
    ],
    tripSlugs: ['dolomiti-estate'],
    imageAlt: 'Scala metallica di una via ferrata su parete verticale nelle Dolomiti',
  },
  {
    slug: 'sellaronda',
    paeseSlug: 'italia',
    destinazioneSlug: 'sciare-in-italia',
    nome: 'Il giro del Sellaronda',
    localita: 'Gruppo del Sella, tra Val Gardena, Val Badia, Arabba e Val di Fassa',
    cosE:
      'Il giro completo sugli sci attorno al massiccio del Sella, attraversando quattro passi dolomitici e quattro valli in una sola giornata, con circa 26 chilometri di discese e altrettanti di risalite. Si può fare in senso orario (indicato in arancione) o antiorario (in verde).',
    percheFarla:
      'Perché non esiste in nessun altro comprensorio al mondo: si gira attorno a un intero massiccio dolomitico usando solo gli sci e gli impianti, attraversando quattro valli con quattro lingue e quattro cucine, e si torna al punto di partenza.',
    durata: 'una giornata intera, 5-6 ore effettive senza contare le soste',
    periodo:
      'da dicembre ad aprile, con la stagione completa. **Va fatto partendo presto, entro le nove**: gli ultimi impianti chiudono nel primo pomeriggio, e chi parte tardi rischia di restare dalla parte sbagliata del massiccio.',
    costo: 'compreso nello skipass Dolomiti Superski, con il giornaliero attorno agli 86€ in alta stagione',
    comePrenotare:
      'Non si prenota. Serve però lo skipass Dolomiti Superski (o almeno quello valido per tutte le aree attraversate) e serve controllare il meteo: con vento forte gli impianti dei passi chiudono e il giro si interrompe, lasciando a valle dalla parte opposta rispetto all\'auto.',
    cosaPortare:
      'Uno skipass valido su tutte le aree, il telefono carico, e una copia della mappa del giro. **Il piano B**: sapere in anticipo come si torna con i mezzi se il giro si interrompe, perché i bus di collegamento tra le valli esistono ma sono lunghi.',
    perChiEAdatta:
      'A sciatori di livello intermedio: le piste sono in gran parte blu e rosse, senza difficoltà tecniche, ma sono sei ore di sci con poche pause. La difficoltà non è la pendenza, è la resistenza.',
    miaEsperienza:
      'Il Sellaronda è la cosa più bella che si può fare sugli sci in Italia e, nelle settimane sbagliate, anche una delle più frustranti. L\'idea è perfetta: si parte al mattino, si scende in una valle, si risale un passo, si scende nella successiva, e a un certo punto ci si accorge di aver girato attorno a un massiccio intero e di essere in una valle dove si parla ladino invece che tedesco. Il problema è che nelle settimane di punta lo fanno tutti insieme, e a metà giornata le code agli impianti dei passi diventano lunghe: il giro che dovrebbe durare cinque ore ne dura sette, con l\'ansia crescente che l\'ultima seggiovia chiuda. La regola pratica che risolve quasi tutto: **partire alle nove in punto e fare il giro in senso antiorario**, che è quello meno battuto. E controllare il vento la sera prima, perché è quello che chiude gli impianti dei passi — e restare bloccati dalla parte opposta rispetto a dove si è lasciata l\'auto significa due ore di bus di valle.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Giro della Grande Guerra, l\'altro anello sciistico dolomitico, meno battuto e con le postazioni storiche lungo il percorso',
      'Una giornata concentrata su una sola valle, per chi vuole sciare invece che spostarsi',
    ],
    tripSlugs: ['settimana-bianca'],
    imageAlt: 'Sciatori su una pista con il massiccio del Sella innevato sullo sfondo, Dolomiti',
  },
  {
    slug: 'scialpinismo-ciaspole',
    paeseSlug: 'italia',
    destinazioneSlug: 'sciare-in-italia',
    nome: 'Scialpinismo e ciaspole',
    localita: 'Tutto l\'arco alpino e l\'Appennino',
    cosE:
      'La montagna invernale senza impianti: lo scialpinismo sale con le pelli di foca applicate sotto gli sci e scende fuoripista, le ciaspole permettono di camminare sulla neve fresca senza sprofondare. Entrambi portano dove gli impianti non arrivano.',
    percheFarla:
      'Perché è l\'unico modo di stare in montagna d\'inverno in silenzio, e perché il rapporto tra fatica e ricompensa è completamente diverso da quello dello sci in pista: si sale per due ore per una discesa di venti minuti su neve che nessuno ha toccato.',
    durata: 'da mezza giornata a itinerari di più giorni con notti in rifugio invernale',
    periodo:
      'da dicembre ad aprile, con marzo e aprile come mesi migliori per lo scialpinismo primaverile. **Le condizioni della neve contano più della data**, e vanno lette prima di partire.',
    costo: 'noleggio attrezzatura scialpinistica indicativamente 30-50€ al giorno, ciaspole 10-15€; una guida alpina per una giornata è la spesa più sensata la prima volta',
    comePrenotare:
      'Niente da prenotare, salvo la guida e i rifugi invernali. Quello che va fatto prima è **leggere il bollettino valanghe**, che in Italia viene emesso quotidianamente per ogni settore alpino con una scala da 1 a 5, e adeguare l\'itinerario al grado di pericolo.',
    cosaPortare:
      '**ARTVA, pala e sonda — e saperli usare.** Non sono un accessorio: sono l\'unica cosa che rende recuperabile una persona sepolta da una valanga nei primi quindici minuti, che è la finestra in cui le probabilità di sopravvivenza crollano. Chi non ha fatto un corso di autosoccorso vada con una guida. Poi: strati, occhiali, crema solare (la neve riflette), torcia frontale e cibo.',
    perChiEAdatta:
      'Le ciaspole sono per tutti su itinerari facili. Lo scialpinismo richiede di saper sciare bene fuoripista e, soprattutto, di saper valutare il rischio valanghe — o di andare con qualcuno che sappia farlo. **Non è sci in pista con una salita davanti.**',
    miaEsperienza:
      'La prima volta che si sale con le pelli si capisce che è uno sport diverso, non una variante: si cammina per due ore in silenzio, con il rumore degli sci sulla neve e basta, e mentre gli impianti portano centinaia di persone sulla stessa pista, qui non c\'è nessuno. Poi si arriva in cima, si tolgono le pelli, e la discesa su neve fresca è venti minuti che valgono le due ore di salita — chiunque abbia provato lo dice, e sembra retorica finché non succede. Ma c\'è una cosa che va detta senza attenuarla, perché è la ragione per cui ogni inverno in Italia muoiono persone in montagna: **il rischio valanghe è reale, si legge in un bollettino pubblico e si sottovaluta sistematicamente**. ARTVA, pala e sonda non bastano se non si sa usarli, e non bastano comunque se si entra su un pendio a 35 gradi con il bollettino a 3. La prima volta si va con una guida alpina, si fa un corso di autosoccorso, e poi si decide. Le ciaspole, per chi non vuole entrare in questo mondo, danno il novanta per cento del silenzio con una frazione del rischio.',
    giudizio: 'la-rifarei',
    alternative: [
      'Le ciaspole su itinerari segnati, che danno la montagna invernale senza il rischio valanghe dei pendii aperti',
      'Lo sci di fondo, su anelli battuti, per chi cerca la fatica senza l\'esposizione',
    ],
    tripSlugs: ['settimana-bianca'],
    imageAlt: 'Scialpinista in salita con le pelli su un pendio innevato all\'alba, Alpi',
  },
  {
    slug: 'roma-sotterranea',
    paeseSlug: 'italia',
    destinazioneSlug: 'roma',
    nome: 'Roma sotterranea',
    localita: 'Roma, vari siti nel centro',
    cosE:
      'La città sotto la città: la Basilica di San Clemente, dove si scende attraverso tre livelli fino a un mitreo del II secolo; le Case Romane del Celio sotto i Santi Giovanni e Paolo; la Domus Aurea di Nerone, visitabile con visite guidate a numero chiusissimo; le catacombe lungo l\'Appia.',
    percheFarla:
      'Perché è il modo più diretto di capire cosa significa "stratificazione": a San Clemente si entra in una basilica del XII secolo, si scende a una del IV, e da lì si scende ancora a un edificio romano del I secolo con un tempio di Mitra — tre epoche una sopra l\'altra, raggiungibili con due rampe di scale.',
    durata: '1-2 ore per sito',
    periodo:
      'tutto l\'anno, e d\'estate è il modo migliore di passare le ore centrali: sottoterra la temperatura è costante attorno ai 15 gradi mentre in superficie ce ne sono 38.',
    costo: 'ingressi contenuti per San Clemente e le Case Romane; la Domus Aurea ha una visita guidata con biglietto più alto',
    comePrenotare:
      'San Clemente e le Case Romane si visitano senza grande difficoltà. **La Domus Aurea va prenotata con largo anticipo**: le visite sono guidate, a gruppi piccoli, in un cantiere di restauro permanente, e i posti si esauriscono. Alcune catacombe chiudono un giorno a settimana, diverso per ciascuna.',
    cosaPortare: 'Una felpa anche d\'estate — sottoterra fa fresco e c\'è umidità — e scarpe con suola che tenga: i pavimenti sono bagnati e irregolari.',
    perChiEAdatta:
      'A tutti, con l\'avvertenza per chi soffre di claustrofobia: alcuni passaggi sono stretti e bassi, e nella Domus Aurea si cammina in ambienti sotterranei per un\'ora.',
    miaEsperienza:
      'San Clemente è il posto che spiega Roma meglio di qualsiasi guida, e ci va una frazione delle persone che fanno la fila al Colosseo a quattrocento metri di distanza. Si entra in una basilica medievale con un mosaico absidale dorato, si paga qualche euro, si scende una scala e ci si trova in una basilica paleocristiana del quarto secolo con gli affreschi ancora sui muri; si scende ancora e c\'è un edificio romano del primo secolo con dentro un mitreo — un tempio del culto di Mitra, con l\'altare al centro e le panche di pietra ai lati — e si sente scorrere l\'acqua di un canale sotterraneo che porta ancora acqua da duemila anni. Tre livelli, tre religioni, novecento anni di distanza tra il primo e l\'ultimo. La Domus Aurea è l\'altra cosa che vale, ed è diversa: è la villa che Nerone si fece costruire dopo l\'incendio del 64 e che i suoi successori seppellirono di proposito per cancellarne la memoria. Si visita con il casco, dentro un cantiere, ed è proprio questo che la rende impressionante — non è un museo finito, è uno scavo in corso.',
    giudizio: 'imperdibile',
    alternative: [
      'Le catacombe di San Callisto o San Sebastiano lungo l\'Appia Antica',
      'Il complesso archeologico di Vicus Caprarius, la "città dell\'acqua" sotto la zona di Fontana di Trevi',
    ],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Il livello paleocristiano sotterraneo della Basilica di San Clemente, Roma',
  },
  {
    slug: 'appia-antica',
    paeseSlug: 'italia',
    destinazioneSlug: 'roma',
    nome: 'L\'Appia Antica a piedi',
    localita: 'Parco dell\'Appia Antica, Roma',
    cosE:
      'La "regina delle vie", aperta nel 312 a.C., che usciva da Roma verso sud fino a Brindisi. Il primo tratto dentro il parco regionale conserva il basolato originale, i sepolcri ai lati, i resti delle ville e, poco oltre, gli acquedotti del Parco degli Acquedotti.',
    percheFarla:
      'Perché si cammina su una strada romana originale, con le pietre segnate dai carri, a mezz\'ora dal Colosseo — e perché la domenica è chiusa al traffico e diventa il posto più bello e meno visitato di Roma.',
    durata: 'da 2 ore a una giornata, secondo quanto si prosegue',
    periodo:
      'tutto l\'anno; **la domenica il tratto principale è chiuso al traffico**, ed è il giorno giusto. Primavera e autunno sono ideali; d\'estate serve partire presto perché l\'ombra è discontinua.',
    costo: 'gratuito camminare; le catacombe, la Villa dei Quintili e il Mausoleo di Cecilia Metella hanno biglietti separati o cumulativi',
    comePrenotare:
      'Nulla da prenotare per la passeggiata. Le biciclette si noleggiano all\'ingresso del parco, ed è un buon modo per coprire più chilometri — con l\'avvertenza che sul basolato romano si sobbalza parecchio.',
    cosaPortare: 'Acqua, cappello, e scarpe con suola robusta: i basoli sono grandi, sconnessi e scivolosi quando piove.',
    perChiEAdatta: 'A tutti. Il percorso è pianeggiante; l\'unica difficoltà è il fondo irregolare della pavimentazione antica.',
    miaEsperienza:
      'È la cosa che consiglio sempre a chi dice di aver "già visto Roma". Si prende un autobus, si scende all\'inizio del parco e si comincia a camminare su una strada aperta nel 312 avanti Cristo, con il basolato originale sotto i piedi, i pini marittimi ai lati e i sepolcri delle famiglie romane che si affacciavano sulla via — perché le tombe stavano fuori dalle mura, lungo le strade, per essere viste da chi passava. La domenica la strada è chiusa al traffico e ci sono ciclisti, famiglie e gente che corre: è un parco urbano che è anche un sito archeologico, e nessuno dei milioni di visitatori del centro storico ci arriva. Proseguendo si arriva alla Villa dei Quintili, che era talmente bella che l\'imperatore Commodo fece uccidere i proprietari per prendersela — una storia che rende bene l\'idea del posto — e poco più in là c\'è il Parco degli Acquedotti, dove sei acquedotti romani attraversano un prato con gli archi ancora in piedi. È il contrario esatto della Roma in coda: si cammina per chilometri in mezzo a duemila anni di roba e c\'è silenzio.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Parco degli Acquedotti da solo, raggiungibile in metropolitana, per chi ha meno tempo',
      'Il quartiere dell\'EUR o la Garbatella, per una Roma novecentesca che quasi nessuno visita',
    ],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Il basolato romano originale dell\'Appia Antica con i pini e i sepolcri ai lati',
  },
  {
    slug: 'cupola-brunelleschi',
    paeseSlug: 'italia',
    destinazioneSlug: 'firenze',
    nome: 'Salire la cupola di Brunelleschi',
    localita: 'Duomo di Santa Maria del Fiore, Firenze',
    cosE:
      'La salita dei 463 gradini fino alla lanterna della cupola, passando tra i due gusci — quello interno e quello esterno — che Brunelleschi progettò autoportanti, senza centine, risolvendo un problema che era rimasto aperto per più di un secolo dopo l\'inizio della costruzione del Duomo.',
    percheFarla:
      'Perché non si sale semplicemente su un panorama: si attraversa l\'interno di una struttura che è ancora oggi la più grande cupola in muratura mai costruita, si passa a pochi centimetri dagli affreschi del Giudizio Universale, e si vede la tecnica del mattone a spinapesce che la tiene in piedi.',
    durata: '1 ora circa la salita e la discesa',
    periodo:
      'tutto l\'anno. **La prima fascia del mattino** è quella giusta: meno gente sulle scale, che sono strette e a senso unico, e luce migliore dalla lanterna.',
    costo: 'compreso nel biglietto cumulativo del complesso del Duomo, che include anche battistero, campanile, cripta e museo',
    comePrenotare:
      '**Prenotazione obbligatoria con fascia oraria assegnata**, e le fasce si esauriscono con giorni di anticipo in alta stagione. Si prenota sul sito ufficiale del complesso del Duomo. Non esiste modo di salire senza.',
    cosaPortare:
      'Poco o niente: gli zaini grandi non sono ammessi. Scarpe comode. Chi ha problemi di claustrofobia lo valuti prima: alcuni tratti sono corridoi stretti tra i due gusci, a senso unico e senza possibilità di tornare indietro.',
    perChiEAdatta:
      'Serve una discreta condizione: sono 463 gradini senza ascensore e senza punti di sosta veri. Sconsigliata a chi soffre di claustrofobia o ha problemi cardiaci — è scritto anche all\'ingresso e non è una formalità.',
    miaEsperienza:
      'La salita alla cupola è una delle poche esperienze turistiche italiane in cui la coda vale davvero la pena, a una condizione: prenotare la prima fascia. Alle otto e mezza si sale con poche persone davanti, e il percorso è la parte interessante — non si sale in un vano scale ma **dentro la cupola**, nell\'intercapedine tra i due gusci, su scale che seguono la curvatura. A un certo punto si esce su un ballatoio interno e ci si trova a pochi metri dagli affreschi del Giudizio Universale di Vasari e Zuccari, che dal basso sono lontanissimi: da lì si vedono i dannati a grandezza reale. Poi si continua a salire, le scale si stringono e si inclinano seguendo la cupola, e alla fine si esce sulla lanterna con tutta Firenze sotto e le colline intorno. La cosa che resta però è tecnica: Brunelleschi vinse il concorso proponendo di costruirla senza centine — cioè senza l\'impalcatura di legno che fino ad allora serviva a sostenere una volta durante la costruzione — con i mattoni disposti a spinapesce che si autosostengono. Lo si vede salendo, nei tratti in cui la muratura è a vista. Nessuno è mai riuscito a ricostruire con certezza tutto il procedimento.',
    giudizio: 'imperdibile',
    alternative: [
      'Il campanile di Giotto, accanto, con la stessa vista e la cupola nell\'inquadratura — ma senza l\'esperienza dell\'interno',
      'San Miniato al Monte al tramonto, gratuito, con il panorama migliore sulla città',
    ],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Le scale interne tra i due gusci della cupola di Brunelleschi, Firenze',
  },
  {
    slug: 'venezia-alba',
    paeseSlug: 'italia',
    destinazioneSlug: 'venezia',
    nome: 'Venezia all\'alba',
    localita: 'Venezia, sestieri centrali e mercato di Rialto',
    cosE:
      'La città nelle due ore prima che arrivino i treni e le navi: le calli vuote, le barche delle consegne che scaricano, il mercato del pesce di Rialto in piena attività, i bacari che aprono per chi va al lavoro.',
    percheFarla:
      'Perché è l\'unica finestra in cui Venezia è quello che ci si aspettava, e perché è gratis. Le stesse calli che alle undici sono un flusso compatto, alle sette sono vuote e si sente l\'acqua battere contro i muri.',
    durata: '2-3 ore, dall\'alba fino alle nove',
    periodo:
      'tutto l\'anno, con l\'inverno che aggiunge la nebbia sulla laguna. Il **mercato del pesce di Rialto è chiuso la domenica e il lunedì**, quindi quei due giorni si sceglie un altro percorso.',
    costo: 'gratuito, salvo il vaporetto e il caffè',
    comePrenotare:
      'Niente da prenotare. **L\'unico requisito è dormire in centro**: chi alloggia a Mestre o arriva in giornata non può farlo, e questa è la vera ragione per cui vale la pena spendere di più per una notte in città.',
    cosaPortare: 'Poco. D\'inverno qualcosa di caldo: l\'umidità della laguna al mattino entra nelle ossa più del freddo secco.',
    perChiEAdatta: 'A chiunque riesca ad alzarsi presto in vacanza, che è la sola difficoltà.',
    miaEsperienza:
      'È il consiglio che cambia di più il giudizio su Venezia, e costa solo una sveglia. Alle sette del mattino, la calle che porta a Rialto — quella che alle undici è una fila compatta di persone che si muove a scatti — è vuota. Si sentono i motori delle barche delle consegne, i carrelli sui ponti, le serrande che si alzano. Al mercato del pesce, sotto la loggia, i banchi sono già in piena attività dalle cinque: si vende ai ristoranti e alle massaie, si urla, e ci sono pesci che nel resto d\'Italia non si vedono — le moeche, i granchi in muta, che si pescano poche settimane l\'anno. Poi si entra in un bacaro, si prende un caffè o già un\'ombra di bianco con un cicheto in piedi al banco accanto a gente che va al lavoro, e Venezia per un\'ora è una città e non un sito. Alle dieci arrivano i treni e finisce. Chi giudica Venezia avendola vista solo tra le dieci e le cinque, sugli assi principali, ha visto una cosa che non esiste il resto del tempo.',
    giudizio: 'imperdibile',
    alternative: [
      'Venezia dopo le sette di sera, che è la seconda finestra, quando i giornalieri sono ripartiti',
      'Il campanile di San Giorgio Maggiore, con la vista migliore su San Marco e senza la coda del campanile principale',
    ],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Una calle veneziana vuota all\'alba con le barche delle consegne sul canale',
  },
  {
    slug: 'pompei-ercolano',
    paeseSlug: 'italia',
    destinazioneSlug: 'napoli',
    nome: 'Pompei ed Ercolano',
    localita: 'Provincia di Napoli, ai piedi del Vesuvio',
    cosE:
      'Le due città sepolte dall\'eruzione del 79 d.C. Pompei, coperta da metri di cenere e lapilli, è vastissima — sessantasei ettari — e conserva la struttura urbana intera. Ercolano, investita da flussi piroclastici e fango, è molto più piccola ma conserva i piani superiori, le travi di legno carbonizzate e perfino i mobili.',
    percheFarla:
      'Perché non esiste altro posto al mondo dove una città romana si sia fermata in un giorno preciso e sia rimasta lì, e perché le due sono complementari e non alternative: Pompei dà la scala, Ercolano dà il dettaglio.',
    durata: '4-5 ore per Pompei, 2-3 per Ercolano',
    periodo:
      'da ottobre ad aprile per evitare il caldo. **A Pompei d\'estate non c\'è ombra su sessantasei ettari**, e ogni anno ci sono malori. Se si va d\'estate, si entra all\'apertura.',
    costo:
      'biglietti separati, oppure il cumulativo valido tre giorni che comprende anche Oplontis e Stabia — conviene sempre se se ne visitano almeno due.',
    comePrenotare:
      '**A Pompei il biglietto è nominativo dal 2024 e c\'è un tetto di 20.000 visitatori al giorno**, con fasce orarie nel periodo estivo (massimo 15.000 dalle 9 alle 12, 5.000 dalle 12 in poi). Esaurita la quota giornaliera **non si entra**, né online né in biglietteria. Si prenota sul canale ufficiale con anticipo, soprattutto in alta stagione e nei fine settimana.',
    cosaPortare:
      'Acqua in quantità — ci sono fontanelle ma le distanze sono grandi — cappello, crema solare e scarpe comode: si cammina su basoli romani sconnessi per ore. A Ercolano il percorso è più breve ma con dislivelli, perché la città è sotto il livello attuale.',
    perChiEAdatta:
      'A tutti, con la sola avvertenza della fatica: Pompei è una città intera e farla bene significa camminare per chilometri. Chi ha problemi di deambulazione trovi il percorso accessibile, che esiste ed è segnalato.',
    miaEsperienza:
      'Il consiglio che vale più di qualsiasi altro su Pompei riguarda l\'ordine delle visite: **il Museo Archeologico Nazionale di Napoli va visto prima, non dopo**. Nell\'Ottocento quasi tutti i mosaici, gli affreschi e i bronzi migliori furono staccati e portati lì — il mosaico di Alessandro dalla Casa del Fauno, i Corridori di Ercolano, il Toro Farnese — e chi arriva a Pompei senza averli visti cammina per quattro ore in mezzo a muri di tufo chiedendosi dove sia la meraviglia. Con quel passaggio, invece, si guardano gli stessi muri sapendo cosa c\'era appeso. La seconda cosa è che quasi tutti fanno solo Pompei, e Ercolano è più impressionante: è un decimo della superficie, ma essendo stata sepolta dal fango e non dalla cenere si sono conservati i piani superiori, le porte, le travi del tetto carbonizzate e in alcuni casi i mobili in legno. Si cammina dentro case a due piani con le scale ancora al loro posto, e nei fornici sulla spiaggia ci sono i calchi degli scheletri di chi aspettava le barche. In due ore si capiscono cose che a Pompei, dove tutto è a livello di fondamenta, restano astratte.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Museo Archeologico Nazionale di Napoli, che è il presupposto e non l\'alternativa',
      'Oplontis, la villa di Poppea, compresa nel biglietto cumulativo e quasi sempre vuota',
      'La salita al cratere del Vesuvio, per vedere da dove è venuto tutto',
    ],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Una strada di Pompei con i basoli romani e il Vesuvio sullo sfondo',
  },
  {
    slug: 'napoli-sotterranea',
    paeseSlug: 'italia',
    destinazioneSlug: 'napoli',
    nome: 'Napoli sotterranea',
    localita: 'Centro storico di Napoli',
    cosE:
      'Quaranta metri sotto il centro storico c\'è una città parallela: le cave di tufo greche da cui è stata estratta la pietra per costruire quella di sopra, trasformate in cisterne dell\'acquedotto romano, poi in discariche, poi in rifugi antiaerei durante la Seconda guerra mondiale.',
    percheFarla:
      'Perché racconta duemilacinquecento anni della città in un percorso, e perché la parte sui rifugi antiaerei — con gli oggetti lasciati dalle famiglie che ci vissero per mesi — è una delle cose più forti che si vedano a Napoli.',
    durata: '1h30-2 ore',
    periodo: 'tutto l\'anno; la temperatura sotterranea è costante e d\'estate è un sollievo.',
    costo: 'biglietto contenuto, con visita guidata inclusa',
    comePrenotare:
      'Le visite sono guidate e a orari fissi. Conviene prenotare nei fine settimana e in alta stagione. Esistono percorsi diversi gestiti da operatori differenti: vale la pena verificare quale include il tratto stretto e quale no.',
    cosaPortare:
      'Una felpa — sotto ci sono circa 15 gradi tutto l\'anno — e scarpe chiuse. **Chi soffre di claustrofobia valuti prima**: una parte del percorso passa attraverso cunicoli larghi poco più di cinquanta centimetri, che si affrontano di lato con una candela.',
    perChiEAdatta:
      'A tutti tranne a chi ha problemi seri con gli spazi stretti. Il tratto dei cunicoli è facoltativo in diversi percorsi e si può aspettare.',
    miaEsperienza:
      'La parte che si racconta di più è quella claustrofobica: a un certo punto la guida spegne le luci elettriche, distribuisce delle candele, e si passa attraverso un cunicolo largo cinquanta centimetri camminando di lato. È teatrale e funziona. Ma la parte che resta davvero è un\'altra ed è storica: quelle cisterne, durante la Seconda guerra mondiale, sono state usate come rifugio antiaereo, e ci sono vissute migliaia di persone per mesi durante i bombardamenti del 1943. Sono rimasti i giocattoli, i letti improvvisati, le scritte sui muri. La guida racconta che i bambini nati là sotto vedevano la luce del giorno per la prima volta quando finiva l\'allarme. È un pezzo di storia del Novecento che sta sotto un centro storico greco, dentro cave scavate duemilacinquecento anni fa, e questa sovrapposizione è esattamente cos\'è Napoli. Sopra, nella stessa piazza da cui si è scesi, c\'è gente che mangia una pizza.',
    giudizio: 'imperdibile',
    alternative: [
      'Le catacombe di San Gennaro, gestite da una cooperativa di giovani del rione Sanità, che è anche un progetto sociale riuscito',
      'Il Museo Archeologico Nazionale, per la Napoli di sopra e di duemila anni fa',
    ],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Cisterna sotterranea scavata nel tufo sotto il centro storico di Napoli',
  },
  {
    slug: 'pizza-napoletana',
    paeseSlug: 'italia',
    destinazioneSlug: 'napoli',
    nome: 'La pizza, dove è nata',
    localita: 'Napoli, centro storico e quartieri',
    cosE:
      'La pizza napoletana vera: impasto ad alta idratazione lievitato a lungo, steso a mano senza mattarello lasciando il cornicione, cotto in forno a legna a circa 450 gradi per 60-90 secondi. L\'arte del pizzaiuolo napoletano è patrimonio immateriale UNESCO dal 2017.',
    percheFarla:
      'Perché è un piatto diverso da tutto quello che porta lo stesso nome altrove: il centro resta morbido al punto che la fetta si piega, e questo non è un difetto ma la definizione. E perché a Napoli costa quanto un panino.',
    durata: 'il tempo di un pasto, più la coda',
    periodo: 'tutto l\'anno. Le pizzerie storiche hanno code serie a cena e nei fine settimana: si va presto o si prende il numero.',
    costo: 'una margherita in una pizzeria di quartiere costa pochi euro — a Napoli la pizza è cibo popolare, non un piatto da ristorante',
    comePrenotare:
      'Le pizzerie storiche in genere **non prenotano**: si arriva, si prende il numero e si aspetta in strada. È parte del rito. Le insegne più recenti e quelle di fascia alta accettano prenotazioni.',
    cosaPortare: 'Appetito e pazienza per la coda. E contanti, che in alcune pizzerie storiche restano preferiti.',
    perChiEAdatta: 'A tutti. Per i celiaci l\'offerta senza glutine esiste ma è limitata nelle pizzerie storiche.',
    miaEsperienza:
      'La prima volta che si mangia una pizza a Napoli si nota subito una cosa che spiazza: il centro è morbido e bagnato, e la fetta non sta dritta. Altrove sarebbe considerato un errore; qui è il risultato voluto di novanta secondi a quattrocentocinquanta gradi, che cuociono il cornicione e lasciano il cuore appena rappreso. Si mangia piegata in quattro — il famoso "a libretto" — e da strada si compra la pizza a portafoglio per due euro, piegata in un foglio, camminando. La differenza con la pizza che si mangia nel resto d\'Italia non è una questione di campanile: è proprio un altro prodotto, con un\'altra idratazione e un\'altra cottura. La cosa che invece sorprende chi arriva è il prezzo: nelle pizzerie storiche di quartiere una margherita costa quanto un caffè e una brioche altrove, perché a Napoli la pizza è nata come cibo dei poveri e in larga parte lo è rimasta. La contropartita sono le code, che nelle insegne più famose superano l\'ora: si prende il numero, si aspetta in strada, e fa parte del pacchetto.',
    giudizio: 'imperdibile',
    alternative: [
      'La pizza a portafoglio da strada, che costa due euro e si mangia camminando',
      'Il ragù napoletano in una trattoria di quartiere la domenica, che è l\'altro piatto identitario della città',
    ],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Una pizza margherita napoletana appena uscita dal forno a legna',
  },
  {
    slug: 'etna',
    paeseSlug: 'italia',
    destinazioneSlug: 'sicilia',
    nome: 'Salire sull\'Etna',
    localita: 'Parco dell\'Etna, versanti sud (Nicolosi) e nord (Linguaglossa)',
    cosE:
      'La salita al vulcano attivo più alto d\'Europa, oltre 3.300 metri e in continua variazione per via delle eruzioni. Si sale in funivia e poi con mezzi fuoristrada fino a circa 2.900 metri; **oltre quella quota l\'accompagnamento di una guida alpina o vulcanologica è obbligatorio**.',
    percheFarla:
      'Perché non è un panorama ma un vulcano in attività: si cammina su lapilli neri che scricchiolano, il terreno in certi punti è caldo al tatto, le fumarole escono dalle fessure e la conformazione dei crateri cambia da un anno all\'altro.',
    durata: 'mezza giornata per la zona sommitale, una giornata per le escursioni più lunghe',
    periodo:
      'tutto l\'anno, con caratteristiche diverse. In primavera e in autunno le condizioni sono migliori; d\'estate fa caldo alle quote basse ma in vetta il vento è freddo; d\'inverno **si scia sull\'Etna**, con due piccole stazioni sui due versanti. **L\'attività eruttiva può chiudere l\'accesso alla zona sommitale senza preavviso.**',
    costo:
      'funivia più fuoristrada più guida fino alla zona sommitale: è un costo consistente, e va verificato perché varia per versante e stagione. Le escursioni ai crateri laterali, a quote più basse, costano molto meno.',
    comePrenotare:
      'Le guide si prenotano il giorno prima o direttamente alla base della funivia; nei periodi di punta conviene prima. **Va controllato lo stato di allerta del vulcano**: l\'INGV pubblica bollettini, e in caso di attività l\'accesso sopra una certa quota viene interdetto.',
    cosaPortare:
      'Strati veri: si parte con venticinque gradi a Catania e a tremila metri ce ne possono essere cinque con vento forte. Scarponi (i lapilli entrano ovunque), occhiali da sole, mascherina o buff per la cenere se c\'è attività, e acqua. In vetta la maschera antipolvere non è un eccesso.',
    perChiEAdatta:
      'La salita con funivia e fuoristrada è accessibile a tutti; il tratto finale a piedi richiede fiato per via della quota e del fondo di lapilli, dove si scivola indietro a ogni passo. Le escursioni ai crateri laterali sono più facili.',
    miaEsperienza:
      'L\'Etna non è una montagna che si guarda, è una montagna che fa qualcosa mentre la si guarda, e questo cambia completamente l\'esperienza. Si sale con la funivia sopra il limite della vegetazione e da lì in poi è tutto nero: lapilli, sabbia lavica e colate solidificate, senza un filo d\'erba. Si cammina su un terreno che scricchiola e cede sotto i piedi come sabbia grossa, e in certi punti — dove le colate sono recenti — appoggiando la mano sul terreno si sente il calore. Dalle fessure escono fumarole di vapore con l\'odore di zolfo. In cima, se la giornata è pulita, si vede tutta la Sicilia orientale e la costa calabrese. La cosa che colpisce di più però non è la vetta: sono i paesi sul versante, con le colate che si vedono chiaramente scendere verso il basso e fermarsi a pochi metri dalle case — e la gente che ci vive coltivando vigne su quella stessa lava, perché il suolo vulcanico è eccezionale. Un dettaglio pratico che quasi nessuno anticipa: sopra i duemilanovecento metri la guida è obbligatoria per legge, non è un modo per vendere un servizio, e in caso di attività eruttiva l\'accesso si chiude e basta.',
    giudizio: 'imperdibile',
    alternative: [
      'I crateri Silvestri, a quota bassa, raggiungibili in auto e gratuiti, per chi non vuole salire',
      'La Valle del Bove da un punto panoramico, per vedere la scala delle colate',
      'Le cantine dell\'Etna sui versanti, che sono l\'altro modo di conoscere il vulcano',
    ],
    tripSlugs: ['sicilia-itinerario'],
    imageAlt: 'I crateri sommitali dell\'Etna con le fumarole e il terreno di lapilli neri',
  },
  {
    slug: 'gorropu',
    paeseSlug: 'italia',
    destinazioneSlug: 'sardegna',
    nome: 'La gola di Gorropu',
    localita: 'Supramonte, tra Urzulei e Orgosolo, Sardegna',
    cosE:
      'Una delle gole più profonde d\'Europa, scavata dal Rio Flumineddu tra pareti che in alcuni punti superano i cinquecento metri, con un fondo di massi calcarei grandi come automobili. Si raggiunge a piedi da due lati: da Genna \'e Silana (in discesa e poi risalita) o dal ponte sul Flumineddu (in piano).',
    percheFarla:
      'Perché non ci si aspetta niente del genere in Sardegna: si cammina in una fenditura tra pareti verticali con una striscia di cielo sopra, in un ambiente che somiglia più a un canyon americano che a un\'isola mediterranea.',
    durata: '4-6 ore andata e ritorno secondo l\'accesso scelto',
    periodo:
      'primavera e autunno. **D\'estate fa molto caldo e non c\'è ombra sull\'avvicinamento**; dopo forti piogge il fondo della gola può essere pericoloso per la portata del fiume.',
    costo: 'ingresso contenuto alla gola; il percorso guidato oltre il primo tratto ha un costo aggiuntivo',
    comePrenotare:
      'L\'accesso al primo tratto è libero previo pagamento del ticket. **Il proseguimento nella parte stretta e più profonda richiede una guida**, perché il terreno diventa un ammasso di blocchi dove serve progressione assistita. Le guide si prenotano nei paesi vicini.',
    cosaPortare:
      'Scarponi con suola che tenga sui massi, molta acqua (lungo il percorso non ce n\'è), cappello, e bastoncini per la risalita se si sceglie l\'accesso da Genna \'e Silana. **Segnale telefonico assente** per gran parte dell\'itinerario.',
    perChiEAdatta:
      'Serve allenamento. L\'accesso dall\'alto comporta una discesa di circa seicento metri di dislivello e la stessa risalita alla fine, quando si è già stanchi — ed è la parte che sottovalutano in tanti. L\'accesso dal ponte è quasi pianeggiante ma più lungo.',
    miaEsperienza:
      'Gorropu è la cosa che ribalta l\'idea di Sardegna. Si arriva dopo aver guidato su strade di montagna strette nel Supramonte, si scende per due ore in un vallone secco, e a un certo punto le pareti si stringono: da lì in poi si cammina sul fondo di una gola dove il cielo è una striscia, la temperatura scende di parecchi gradi rispetto a fuori e i massi sotto i piedi sono grandi come automobili. Nel punto più profondo le pareti superano i cinquecento metri e stanno a poche decine di metri l\'una dall\'altra. Non c\'è nessun altro: è un posto che sta in una regione conosciuta per il mare e ci va una frazione minima delle persone che riempiono le cale a quaranta chilometri di distanza. La parte da mettere in conto è la risalita: se si scende da Genna \'e Silana si perdono seicento metri di dislivello all\'andata, e tutta quella quota va recuperata alla fine della giornata, con il sole e senz\'acqua lungo il percorso. È il motivo per cui ogni anno il soccorso interviene su quel sentiero.',
    giudizio: 'imperdibile',
    alternative: [
      'La Valle della Luna e il Supramonte di Orgosolo, per l\'interno sardo con meno fatica',
      'Tiscali, il villaggio nuragico dentro una dolina, raggiungibile con un\'escursione simile per impegno',
    ],
    tripSlugs: [],
    imageAlt: 'Le pareti verticali e i massi sul fondo della gola di Gorropu, Sardegna',
  },
  {
    slug: 'cala-goloritze',
    paeseSlug: 'italia',
    destinazioneSlug: 'sardegna',
    nome: 'Scendere a Cala Goloritzé',
    localita: 'Golfo di Orosei, Baunei, Sardegna',
    cosE:
      'La cala più celebre della Sardegna, formata da una frana nel 1962, con il pinnacolo di calcare alto 143 metri che la chiude a sud e i ciottoli bianchi sul fondo. **Si raggiunge solo a piedi** dall\'altopiano del Golgo, con un sentiero di circa un\'ora e mezza, o via mare senza possibilità di attracco.',
    percheFarla:
      'Perché è monumento naturale protetto e perché ci si arriva solo camminando o in barca: quella difficoltà di accesso è la ragione per cui è rimasta quello che è.',
    durata: '3-4 ore andata e ritorno, più il tempo in spiaggia',
    periodo:
      'maggio-giugno e settembre. D\'estate il sentiero, esposto, va fatto presto al mattino o nel tardo pomeriggio. **Diversi accessi del Golfo di Orosei sono contingentati con prenotazione obbligatoria**, e Goloritzé ha un numero massimo di ingressi giornalieri.',
    costo: 'ticket di accesso obbligatorio e contingentato, da prenotare online',
    comePrenotare:
      '**Prenotazione obbligatoria online con numero chiuso giornaliero.** Senza, non si scende. Il sistema è stato introdotto proprio per limitare l\'affluenza, e in alta stagione i posti si esauriscono con giorni di anticipo.',
    cosaPortare:
      'Acqua in quantità (**in spiaggia non c\'è nessun servizio, nessun chiosco e nessuna ombra artificiale**), scarpe da trekking per la discesa su pietra, cappello, e tutto ciò che serve perché lì sotto non si compra niente. Si riporta indietro ogni rifiuto.',
    perChiEAdatta:
      'Serve gamba: la discesa è un sentiero roccioso e la risalita alla fine della giornata, con il caldo, è la parte dura. Non è adatta a chi ha problemi di deambulazione, e non ci sono alternative per scendere.',
    miaEsperienza:
      'Cala Goloritzé è il posto in cui la fatica fa parte del risultato. Si parcheggia sull\'altopiano del Golgo, si cammina un\'ora e mezza in discesa su un sentiero di roccia e ginepri, e a un certo punto il vallone si apre e sotto c\'è una cala di ciottoli bianchi con l\'acqua di un turchese che sembra ritoccato e il pinnacolo di calcare che sale per centoquarantatré metri dal mare. È un monumento naturale e si vede perché: non c\'è un chiosco, non c\'è un ombrellone, non c\'è niente — si porta tutto e si riporta indietro tutto. La cosa da sapere è che ormai si scende **solo con prenotazione**: gli accessi sono contingentati, e chi arriva al parcheggio senza averla fatta torna indietro. È una restrizione che all\'inizio infastidisce e che, arrivati giù e trovando una spiaggia non sovraffollata, si capisce. L\'ultima cosa, pratica: la risalita si fa a fine giornata, in salita, con il sole. Chi scende senza acqua a sufficienza la paga.',
    giudizio: 'imperdibile',
    alternative: [
      'Cala Mariolu e Cala Luna, raggiungibili in barca, con accessi anch\'essi regolamentati',
      'Il giro in gommone del Golfo di Orosei, che permette di vedere più cale in una giornata senza camminare',
    ],
    tripSlugs: [],
    imageAlt: 'Cala Goloritzé con il pinnacolo di calcare e l\'acqua turchese, Sardegna',
  },
  {
    slug: 'cammini-italia',
    paeseSlug: 'italia',
    destinazioneSlug: 'italia-inesplorata',
    nome: 'Camminare un cammino',
    localita: 'Via degli Dei, Via Francigena, Cammino di San Benedetto e altri',
    cosE:
      'I cammini italiani sono itinerari a tappe percorribili a piedi in più giorni, con una rete di ostelli, parrocchie, conventi e piccole strutture convenzionate lungo il percorso. La Via degli Dei collega Bologna a Firenze in 5-6 giorni sull\'Appennino; la Francigena attraversa il paese da nord a sud; altri cammini seguono percorsi storici e devozionali.',
    percheFarla:
      'Perché è il modo più economico ed efficace di vedere l\'Italia interna, e perché camminando si attraversano paesi in cui nessuno si ferma mai — con un\'accoglienza che nasce proprio dal fatto che arrivi a piedi.',
    durata: 'da 3 giorni a diverse settimane, secondo il cammino',
    periodo:
      'primavera e autunno. D\'estate l\'Appennino centro-meridionale è troppo caldo; d\'inverno molti tratti in quota sono impraticabili e diverse strutture chiudono.',
    costo:
      'il modo più economico di viaggiare in Italia: ostelli e accoglienze lungo i cammini costano tra i 15 e i 40 euro, spesso con cena, e in alcuni casi funzionano a offerta.',
    comePrenotare:
      'La **credenziale del pellegrino** — il documento che si fa timbrare lungo il percorso — dà accesso alle accoglienze a tariffa ridotta e si richiede alle associazioni che gestiscono ciascun cammino. Le strutture si prenotano tappa per tappa, spesso il giorno prima; nei periodi di punta e sui cammini più battuti conviene con più anticipo.',
    cosaPortare:
      'Zaino leggero — la regola è non superare il dieci per cento del proprio peso — scarpe rodate (le vesciche sono la prima causa di abbandono), sacco lenzuolo, qualcosa per il bucato serale, e i cerotti giusti. **Meno roba possibile**: ogni chilo si sente al terzo giorno.',
    perChiEAdatta:
      'A chiunque possa camminare 15-25 chilometri al giorno per più giorni consecutivi. Non serve allenamento sportivo ma serve abitudine a camminare, e soprattutto serve aver rodato le scarpe prima di partire.',
    miaEsperienza:
      'Il cammino cambia il rapporto con i posti in un modo che nessun altro modo di viaggiare riproduce, e la ragione è meccanica: arrivando a piedi si entra nei paesi dalla parte sbagliata, quella dove non c\'è il parcheggio e non c\'è niente da vedere, e si viene trattati diversamente. In un paese dell\'Appennino con duecento abitanti, chi arriva in auto è un turista; chi arriva a piedi con lo zaino è qualcuno a cui si offre da bere. La Via degli Dei tra Bologna e Firenze è il cammino giusto per cominciare: cinque o sei giorni, tappe umane, e si passa sopra la vecchia strada romana Flaminia Militare, con tratti di basolato del secondo secolo avanti Cristo ancora in mezzo al bosco. La sera si arriva in un ostello o in una canonica, si lavano i calzini nel lavandino, si cena con gli altri che stanno facendo lo stesso percorso, e alle nove si dorme. Il terzo giorno è quello in cui le gambe capiscono e il cervello si spegne. La cosa pratica che fa fallire più cammini di qualsiasi altra: **le scarpe**. Non si parte con scarpe nuove, mai, e non si porta più del dieci per cento del proprio peso.',
    giudizio: 'imperdibile',
    alternative: [
      'La Via Francigena nel tratto toscano, il più attrezzato e frequentato',
      'Il Sentiero Italia del CAI, che attraversa tutto il paese ed è pensato per escursionisti più che per pellegrini',
    ],
    tripSlugs: [],
    imageAlt: 'Segnavia di un cammino su un sentiero dell\'Appennino tra i boschi',
  },
  {
    slug: 'degustazione-cantina',
    paeseSlug: 'italia',
    destinazioneSlug: 'rotte-dei-vini',
    nome: 'Visita e degustazione in cantina',
    localita: 'Tutte le zone vitivinicole italiane',
    cosE:
      'La visita a un\'azienda vitivinicola: il vigneto, la cantina di vinificazione, quella di affinamento con le botti, e la degustazione guidata di alcuni vini — quasi sempre con il produttore o con chi lavora in azienda, non con una guida turistica.',
    percheFarla:
      'Perché in Italia, a differenza di quanto accade in molte zone francesi, le cantine sono in larga parte aziende familiari dove chi ti riceve è chi fa il vino — e questo cambia completamente il tipo di conversazione.',
    durata: '1h30-2 ore per cantina',
    periodo:
      '**settembre e ottobre durante la vendemmia**, quando le cantine lavorano e si vede il processo. Da aprile a giugno è la seconda finestra. In agosto molte chiudono o sono in preparazione; d\'inverno le visite si riducono.',
    costo: 'indicativamente 15-40€ a persona secondo i vini e il livello dell\'accoglienza, spesso scalati sull\'acquisto',
    comePrenotare:
      '**Sempre su appuntamento, con qualche giorno di anticipo.** È la regola che quasi tutti ignorano: una cantina non è un negozio, è un\'azienda agricola con un ciclo di lavoro, e chi si presenta senza preavviso nella maggior parte dei casi trova chiuso. Una mail o una telefonata tre giorni prima risolvono tutto.',
    cosaPortare:
      'Niente profumi forti, che interferiscono con la degustazione. Qualcosa per proteggere le bottiglie acquistate durante il viaggio. E **una soluzione per chi guida**, decisa prima: si assaggia e si sputa — come fanno i professionisti, e non è una rinuncia — oppure si paga un autista.',
    perChiEAdatta: 'A tutti, anche a chi non conosce il vino: i produttori sono in genere felici di spiegare a chi è curioso, molto più che a chi finge di sapere.',
    miaEsperienza:
      'La differenza tra una buona e una cattiva giornata in cantina si decide tre giorni prima, con una mail. Chi scrive e prenota viene ricevuto dal produttore, che ha un\'ora per te, ti porta in vigna e ti spiega perché quella parcella dà un vino diverso da quella a cento metri; chi si presenta al cancello trova il cancello. La seconda cosa che ho capito è che due o tre cantine al giorno sono il massimo: dopo la terza non si assaggia più niente con attenzione e la giornata diventa una collezione di timbri. Meglio due fatte bene, con il tempo di camminare tra i filari. La terza è la più scomoda e va detta: si sta guidando su strade collinari e si sta bevendo. L\'unica soluzione seria è quella dei professionisti — si assaggia, si tiene il vino in bocca, si valuta e si sputa nell\'apposito contenitore che in ogni cantina è sul tavolo — oppure si paga qualcuno che guidi. Sembra che tolga qualcosa e in realtà non toglie niente: il vino si giudica in bocca, non nello stomaco.',
    giudizio: 'imperdibile',
    alternative: [
      'La vendemmia partecipata, che alcune aziende offrono a settembre',
      'Le enoteche regionali e i consorzi, per assaggiare molti produttori in un posto solo senza spostarsi',
    ],
    tripSlugs: ['rotte-dei-vini-itinerario'],
    imageAlt: 'Botti di affinamento in una cantina italiana durante una degustazione',
  },
]
