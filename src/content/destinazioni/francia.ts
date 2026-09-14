import type { Destinazione } from '@/lib/types'

// La Francia è organizzata per temi e per regioni-carattere: vedi il commento
// in src/content/paesi/francia.ts.
// La Costa Azzurra è l'unica destinazione dell'archivio scritta da dentro
// (due anni vissuti ad Antibes): i suoi campi miaEsperienza sono comunque
// bozze di Claude e vanno sostituiti con i ricordi veri.
// Nessun nome di hotel, ristorante, operatore o domaine è stato inventato.
// Prezzi, contingentamenti e regole di accesso cambiano ogni stagione e sono
// la parte che invecchia più in fretta: vanno riverificati prima di partire.

export const destinazioniFrancia: Destinazione[] = [
  {
    slug: 'costa-azzurra',
    paeseSlug: 'francia',
    ordine: 1,
    nome: 'Costa Azzurra',
    tipologia: ['mare', 'città', 'arte'],
    giorniConsigliati: '7-10 giorni usando una sola base',
    visitataPersonalmente: true,
    introduzione:
      'Centoventi chilometri di costa tra Cassis e Mentone in cui stanno, uno dietro l\'altro, una città di mezzo milione di abitanti riconosciuta dall\'UNESCO per la sua invenzione stessa, il porto turistico più importante del Mediterraneo, tre musei di Picasso, una fondazione d\'arte moderna tra le più importanti d\'Europa e un parco nazionale alpino a un\'ora e mezza dalla spiaggia. È anche il pezzo di Francia che più soffre la propria fama: in luglio e agosto la costa è un ingorgo continuo e i prezzi non hanno rapporto con niente.',
    percheAndarci:
      'Perché nessun\'altra costa mediterranea ha questa densità di cose diverse a venti minuti l\'una dall\'altra, e perché è uno dei pochi posti al mondo dove a febbraio si può sciare al mattino e stare al sole in riva al mare nel pomeriggio. La versione che vale davvero non è quella di agosto: è quella di maggio, di ottobre e — sorprendentemente — di gennaio.',
    cosaVedere: [
      '**Antibes**: la città vecchia dentro i bastioni, il **Marché Provençal** al mattino sul Cours Masséna, il **Musée Picasso** nel Château Grimaldi dove Picasso lavorò davvero nell\'autunno del 1946, e **Port Vauban**, il porto più grande del Mediterraneo per tonnellaggio, con il molo degli yacht enormi',
      '**Il Cap d\'Antibes** e il sentiero del litorale che ne gira la punta: gratuito, sul mare, e quasi nessuno lo fa',
      '**Nizza**: la Promenade des Anglais, il Vieux Nice, il mercato del **Cours Saleya**, la Colline du Château e i musei **Matisse** e **Chagall** a Cimiez. La città è patrimonio UNESCO dal 2021 come invenzione stessa della villeggiatura invernale',
      '**Villefranche-sur-Mer** con la rada profonda e la cappella decorata da **Cocteau**, e **Saint-Jean-Cap-Ferrat** con la **Villa Ephrussi de Rothschild** e i suoi nove giardini tematici',
      '**Èze**, villaggio arroccato con il giardino esotico in cima, e il **Sentier Nietzsche** che ci sale dal mare',
      '**Cannes** con Le Suquet e il mercato Forville, e le **Isole di Lerino** davanti: Sainte-Marguerite con il forte della Maschera di Ferro e Saint-Honorat con l\'abbazia dove i monaci coltivano la vigna',
      '**Saint-Paul-de-Vence** e la **Fondation Maeght**, e a Vence la **Chapelle du Rosaire**, che Matisse progettò interamente — vetrate, ceramiche, paramenti — e considerava il proprio capolavoro',
      '**Mentone**, il punto più caldo della costa, con i giardini botanici e la Festa del Limone di febbraio',
      '**Grasse** per il profumo, **Biot** per il vetro soffiato, **Vallauris** per le ceramiche di Picasso',
      '**Il Mercantour e la Valle delle Meraviglie**, con migliaia di incisioni rupestri dell\'età del Bronzo sotto il Monte Bego, a un\'ora e mezza dal mare',
    ],
    cosaFare: [
      'Il **sentiero del litorale del Cap d\'Antibes**, che è la cosa migliore della costa e costa zero — vedi la scheda esperienza dedicata',
      'Il **mercato di Antibes** o il **Cours Saleya** al mattino, che è il modo in cui la costa vive davvero',
      'Le **Isole di Lerino** in traghetto da Cannes, per capire cosa c\'era prima degli alberghi',
      'La **Grande Corniche** in auto da Nizza a Mentone, con le tre corniches a quote diverse',
      'Sciare a **Isola 2000, Auron o Valberg** e scendere al mare nel pomeriggio, che si può fare davvero',
      'Il **Train des Pignes** da Nizza verso l\'entroterra, una ferrovia a scartamento ridotto che esce dalla costa e sale',
    ],
    doveDormire:
      'La scelta della base conta più della struttura, ed è il senso del primo confronto qui sotto. In generale: **il treno regionale lungo la costa è ottimo** e permette di dormire in un posto e muoversi ovunque senza auto, che in estate è un vantaggio enorme. Antibes e Villefranche sono i migliori compromessi tra prezzo, posizione e vivibilità; Nizza ha l\'offerta più ampia e l\'aeroporto; Cannes costa di più e la settimana del festival è impraticabile; Mentone è la più economica e la più lontana da tutto.',
    doveMangiare:
      'La cucina nizzarda è mediterranea e povera, e non somiglia a quella francese classica: **socca** (una focaccia di farina di ceci cotta nel forno a legna e servita bollente, a pezzi, in coppette di carta), **pissaladière** (cipolle, acciughe, olive), **pan bagnat**, **petits farcis**, **ratatouille**, e la **salade niçoise**, che nella versione locale **non ha né patate né fagiolini cotti** — è un\'insalata cruda, e la questione è presa molto sul serio. Poi la **daube** di manzo, la **bouillabaisse** più a ovest verso Marsiglia, e i **vini di Bellet**, la denominazione minuscola che sta dentro il comune di Nizza. La regola generale: **il menù di mezzogiorno** vale metà di quello della sera, e sui lungomare si paga la posizione.',
    comeArrivare:
      'L\'aeroporto di **Nizza** è il secondo di Francia e sta sulla costa, collegato al centro dal tram. In treno l\'alta velocità arriva da Parigi in circa sei ore; dall\'Italia la linea costiera passa da Ventimiglia. In auto, l\'autostrada A8 percorre tutta la costa a pedaggio.',
    comeSpostarsi:
      '**Il treno regionale lungo la costa è la risposta giusta quasi sempre**: collega Cannes, Antibes, Nizza, Monaco e Mentone con corse frequenti, costa pochissimo e salta completamente il traffico, che d\'estate è la variabile che rovina le giornate. La rete di autobus regionali del dipartimento ha tariffe molto basse e copre anche l\'entroterra — **le formule tariffarie cambiano, vanno verificate**. L\'auto serve solo per l\'entroterra e per il Mercantour, ed è un peso ovunque altrove: **il parcheggio in tutte le città costiere è caro, scarso e in estate una battaglia**.',
    periodoMigliore:
      '**maggio-giugno e da metà settembre a ottobre.** **Luglio e agosto sono il peggior momento possibile**: traffico, spiagge piene, prezzi al massimo e una città come Antibes che triplica di abitanti. **L\'inverno è il segreto meglio custodito della costa**: da dicembre a marzo il clima è mite, i sentieri sul mare sono vuoti, a febbraio ci sono la mimosa in fiore, la Festa del Limone a Mentone e il Carnevale di Nizza, e le stazioni di sci del Mercantour sono a un\'ora e mezza. Aprile e ottobre sono ideali per i sentieri costieri.',
    costi:
      'Tra le zone più care di Francia in alta stagione, e su livelli normali da ottobre a marzo. I musei costano poco (il Picasso di Antibes e i musei municipali di Nizza hanno prezzi contenuti), i trasporti regionali pochissimo, gli alloggi molto. Le due voci che sfuggono di mano sono **il parcheggio** e **gli stabilimenti balneari privati**, dove un lettino in alta stagione costa quanto una cena.',
    erroriDaEvitare: [
      '**Venire in luglio o agosto con l\'auto e senza aver prenotato il parcheggio.** È l\'errore che rovina più soggiorni: si passa la giornata in coda sulla costiera e a girare in cerca di posto',
      'Prenotare a Cannes nella settimana del festival senza saperlo: la città diventa impraticabile e i prezzi si moltiplicano',
      'Non usare il treno costiero, che è frequente, economico e più veloce dell\'auto in ogni ora di punta',
      'Aspettarsi spiagge di sabbia: **gran parte della costa, Nizza compresa, è di ciottoli**. Le scarpette di gomma cambiano la giornata, e le spiagge di sabbia vera stanno più a ovest, verso Antibes-Juan e Cannes',
      'Fermarsi sulla fascia costiera. **L\'entroterra comincia a dieci chilometri dal mare** ed è dove la Costa Azzurra è ancora sé stessa',
      'Ordinare una salade niçoise aspettandosi le patate, e discuterne con un nizzardo',
      'Dare per scontato che il Mercantour sia sempre raggiungibile: **la tempesta Alex del 2020 ha devastato le valli della Roya e della Vésubie** e la viabilità è stata ricostruita a tappe. Va verificato lo stato delle strade',
    ],
    confronti: [
      {
        titolo: 'Dove mettere base sulla Costa Azzurra',
        introduzione:
          'La costa si attraversa in treno in un\'ora e mezza da capo a capo, quindi la base non limita quello che si vede: cambia quanto si spende, quanto si sta in mezzo alla gente e che tipo di serata si ha. È la decisione più importante del viaggio ed è quasi sempre presa a caso.',
        opzioni: [
          {
            nome: 'Nizza',
            sintesi: 'La città vera: mezzo milione di abitanti, aeroporto, tram, musei, un centro storico che vive tutto l\'anno e la scelta più ampia di alloggi della costa.',
            costo: 'media-alta, con la forbice più ampia della costa: si trova di tutto',
            durata: 'ottima anche per soggiorni lunghi',
            pro: [
              'L\'unica base che funziona senza auto in assoluto: aeroporto, stazione, tram e treni costieri',
              'Musei di primo livello — Matisse, Chagall, MAMAC — a prezzi contenuti',
              'Il Vieux Nice e il Cours Saleya sono vivi tutto l\'anno, non solo in stagione',
              'La scelta più ampia di alloggi e la più facile da trovare fuori stagione',
            ],
            contro: [
              'È una città, con i problemi di una città: traffico, rumore, borseggi nelle zone turistiche',
              'La spiaggia è di ciottoli grossi, e per molti è una delusione',
              'La Promenade in alta stagione è satura',
            ],
            perChi: 'Chi viaggia senza auto, chi vuole musei e vita cittadina, chi arriva in aereo per pochi giorni.',
          },
          {
            nome: 'Antibes e Juan-les-Pins',
            sintesi: 'Il miglior compromesso della costa: una città vecchia dentro i bastioni, un mercato vero, spiagge di sabbia, il Cap con i sentieri, e il treno per tutto il resto.',
            costo: 'media, sensibilmente sotto Cannes e Saint-Jean-Cap-Ferrat',
            durata: 'la base ideale per 7-10 giorni',
            pro: [
              'La città vecchia è abitata davvero e il Marché Provençal è un mercato di quartiere, non una scenografia',
              'Spiagge di sabbia, che su questa costa non sono scontate',
              'Il Cap d\'Antibes con il sentiero del litorale a venti minuti a piedi dal centro',
              'Il Musée Picasso nel castello dove ha lavorato davvero, con la vista sul mare dalla terrazza',
              'Posizione centrale: Cannes e Nizza a un quarto d\'ora di treno l\'una e venti minuti l\'altra',
            ],
            contro: [
              'Juan-les-Pins d\'estate è rumorosa fino a notte fonda: chi cerca silenzio stia dalla parte del Cap o del centro storico',
              'In agosto la popolazione si moltiplica e il parcheggio diventa impossibile',
              'Meno offerta museale di Nizza',
            ],
            perChi: 'Chi vuole una base per una settimana o più, chi viaggia in famiglia, chi cerca il punto di equilibrio tra prezzo, mare e posizione. È la scelta consigliata.',
          },
          {
            nome: 'Cannes',
            sintesi: 'Croisette, Palais des Festivals, Le Suquet in collina e il mercato Forville. Più ordinata e più cara di Antibes, con le Isole di Lerino davanti.',
            costo: 'alta, e fuori scala nelle settimane degli eventi',
            durata: '3-5 giorni',
            pro: [
              'Spiagge di sabbia lungo tutta la Croisette',
              'Le Suquet, la collina della città vecchia, con la vista sul porto',
              'Le Isole di Lerino a quindici minuti di traghetto, che sono il contrasto migliore con la città',
              'Il mercato Forville, uno dei migliori della costa',
            ],
            contro: [
              '**Nella settimana del festival la città è impraticabile** e i prezzi si moltiplicano: va verificato il calendario prima di prenotare',
              'Fuori dagli eventi è meno viva di Nizza e meno abitata di Antibes',
              'Il rapporto qualità-prezzo degli alloggi è il peggiore della costa',
            ],
            perChi: 'Chi vuole le spiagge di sabbia e un contesto ordinato, e non capita nelle settimane sbagliate.',
          },
          {
            nome: 'Villefranche, Beaulieu e Saint-Jean-Cap-Ferrat',
            sintesi: 'La fascia più bella e più raccolta della costa, tra Nizza e Monaco: una rada profondissima, un borgo di case ocra, e la penisola con le ville.',
            costo: 'da media (Villefranche) a molto alta (Saint-Jean-Cap-Ferrat)',
            durata: '3-5 giorni',
            pro: [
              'Villefranche è probabilmente il borgo più bello della costa, con la rue Obscure medievale e la cappella di Cocteau',
              'La Villa Ephrussi de Rothschild e i sentieri del litorale del Cap Ferrat',
              'Nizza e Monaco a pochi minuti di treno',
              'Molto più tranquilla della costa a ovest',
            ],
            contro: [
              'Offerta di alloggi limitata e cara, soprattutto sul Cap Ferrat',
              'Poca vita serale: chi cerca movimento deve spostarsi',
              'Le spiagge sono piccole e affollate in stagione',
            ],
            perChi: 'Chi cerca la costa più scenografica e accetta di pagarla, chi viaggia in coppia, chi vuole Monaco a portata.',
          },
          {
            nome: 'L\'entroterra: Valbonne, Mougins, Vence, Tourrettes',
            sintesi: 'Dieci o quindici chilometri dentro, e cambia tutto: villaggi in pietra, uliveti, prezzi normali, e il mare a venti minuti di auto.',
            costo: 'media-bassa, la più economica di tutte le opzioni',
            durata: 'ottima per soggiorni lunghi e per chi ha l\'auto',
            pro: [
              'Prezzi sensibilmente più bassi a parità di struttura',
              'Il caldo è più sopportabile e le sere sono fresche',
              'Si è vicini a Grasse, alle Gorges du Loup, a Saint-Paul-de-Vence e alla Fondation Maeght',
              'È la Provenza collinare, che è una cosa diversa dalla costa e spesso più bella',
            ],
            contro: [
              '**Serve l\'auto**, e sulla costa l\'auto è un peso: parcheggio caro e traffico',
              'Andare al mare significa mettere in conto il traffico e la sosta ogni volta',
              'Collegamenti pubblici possibili ma lenti',
            ],
            perChi: 'Chi ha l\'auto, chi si ferma a lungo, chi viene in estate e vuole scappare dal caos costiero, chi ha un budget da rispettare.',
          },
        ],
        raccomandazione:
          '**Antibes** è la risposta giusta per la maggior parte delle persone: è l\'unica base della costa che sia insieme abitata, economica rispetto alle vicine, dotata di spiagge di sabbia, in posizione centrale sulla linea ferroviaria e a piedi da un sentiero costiero che vale il viaggio. **Nizza** la batte solo per chi non ha auto e va per i musei, **l\'entroterra** solo per chi viene in agosto o resta un mese.',
      },
      {
        titolo: 'Quanto entrare nell\'entroterra, e dove',
        introduzione:
          'La Costa Azzurra è larga dieci chilometri e profonda cento. Tutto quello che sta dietro la prima fila di colline è meno caro, meno affollato e spesso più interessante della costa — ma sono posti molto diversi tra loro, e il tempo che richiedono cambia di un ordine di grandezza.',
        opzioni: [
          {
            nome: 'I villaggi arroccati vicini: Èze, Saint-Paul-de-Vence, Mougins',
            sintesi: 'Borghi in pietra a mezz\'ora dal mare, con vicoli stretti, gallerie d\'arte e panorami. Sono i più belli e i più visitati.',
            costo: 'bassi (i borghi sono gratis), a pagamento i giardini e le fondazioni',
            durata: 'mezza giornata ciascuno',
            pro: [
              'Èze ha il giardino esotico in cima al villaggio con la vista più alta della costa',
              'Saint-Paul-de-Vence ospita la **Fondation Maeght**, una delle raccolte d\'arte moderna più importanti d\'Europa, con il cortile di Giacometti e il labirinto di Miró',
              'A Vence, poco sopra, c\'è la **Chapelle du Rosaire** di Matisse, che la progettò interamente e la considerava il proprio capolavoro',
              'Raggiungibili facilmente anche senza fermarsi a dormire',
            ],
            contro: [
              'Nelle ore centrali sono saturi di pullman: vanno fatti presto al mattino o nel tardo pomeriggio',
              'Le vie principali sono file di negozi per turisti',
              '**La Chapelle du Rosaire ha giorni e orari di apertura molto limitati**, che vanno verificati: chi si presenta a caso la trova chiusa',
            ],
            perChi: 'Tutti, a patto di andarci fuori dalle ore centrali.',
          },
          {
            nome: 'Grasse e le colline del profumo',
            sintesi: 'La capitale storica della profumeria, con il museo internazionale e le case storiche che fanno provare la composizione di una fragranza.',
            costo: 'contenuto per il museo, medio per i laboratori di composizione',
            durata: 'mezza giornata o una giornata',
            pro: [
              'Il **Musée International de la Parfumerie** racconta una storia industriale e agricola vera, non una vetrina',
              'Le colline intorno sono coltivate a rosa centifolia e gelsomino, con la raccolta a maggio e in agosto',
              'La città vecchia è meno turistica di quanto ci si aspetti',
            ],
            contro: [
              'Grasse città è meno bella dei villaggi vicini e in parte trascurata',
              'I laboratori "crea il tuo profumo" sono un prodotto turistico: piacevoli ma non sono artigianato',
            ],
            perChi: 'Chi vuole capire come una valle agricola è diventata un distretto industriale globale.',
          },
          {
            nome: 'Le Gorges du Loup e Tourrettes-sur-Loup',
            sintesi: 'Una gola scavata nella roccia con strada a strapiombo, cascate e piscine naturali, e sopra un villaggio noto per la coltivazione della violetta.',
            costo: 'gratis, salvo i parcheggi',
            durata: 'una giornata',
            pro: [
              'La strada della gola è una delle più belle del dipartimento e si fa in auto o in bici',
              'Piscine naturali e cascate lungo il torrente, che d\'estate sono un\'alternativa vera al mare',
              'Tourrettes-sur-Loup è un borgo abitato, con botteghe artigiane e senza folla',
            ],
            contro: [
              'Serve l\'auto e la strada è stretta con pochi punti di sosta',
              'Le piscine naturali in agosto sono affollate e l\'acqua è gelida tutto l\'anno',
            ],
            perChi: 'Chi vuole una giornata fuori dal mare senza allontanarsi troppo.',
          },
          {
            nome: 'Il Mercantour e la Valle delle Meraviglie',
            sintesi: 'Un parco nazionale alpino con cime sopra i tremila metri a un\'ora e mezza dalla spiaggia, e sotto il Monte Bego decine di migliaia di incisioni rupestri dell\'età del Bronzo.',
            costo: 'accesso al parco gratuito; visite accompagnate alla zona delle incisioni a pagamento',
            durata: '2-3 giorni minimo',
            pro: [
              'È la cosa che più stupisce chi conosce solo la costa: alta montagna vera, marmotte, camosci e laghi glaciali',
              'La **Valle delle Meraviglie** ha una delle maggiori concentrazioni di arte rupestre preistorica d\'Europa',
              'Il Train des Pignes e il treno per Tenda risalgono le valli senza bisogno di guidare',
            ],
            contro: [
              '**La zona delle incisioni è accessibile solo d\'estate** (indicativamente da luglio a settembre), si raggiunge con lunghe camminate in quota e **le aree principali si visitano solo con guida autorizzata**: da verificare ogni stagione',
              'Serve un cambio di abbigliamento completo: è alta montagna, non costa',
              '**La tempesta Alex del 2020 ha devastato le valli della Roya e della Vésubie**: strade e servizi sono stati ricostruiti a tappe e vanno verificati',
            ],
            perChi: 'Chi resta almeno una settimana e vuole vedere che la Costa Azzurra è anche un\'altra cosa.',
          },
        ],
        raccomandazione:
          'Su una settimana, il minimo sindacale è **una mezza giornata a Saint-Paul-de-Vence con la Fondation Maeght e la Chapelle du Rosaire a Vence**, che insieme raccontano l\'arte del Novecento su questa costa meglio di qualunque museo. Chi ha dieci giorni aggiunga **due giorni nel Mercantour**: è il contrasto più forte che la regione offra.',
      },
    ],
    miaEsperienza:
      'Due anni ad Antibes insegnano una cosa che nessuna guida scrive: la Costa Azzurra ha due stagioni e sono invertite rispetto a come la si immagina. Da giugno a settembre è un posto difficile — il traffico sulla costiera è continuo, il parcheggio è una battaglia quotidiana, le spiagge sono piene e i prezzi salgono ovunque. Da ottobre a maggio è uno dei posti più piacevoli d\'Europa: il sole c\'è, i sentieri sul mare sono deserti, i mercati tornano a essere mercati di quartiere, e a febbraio c\'è la mimosa in fiore mentre a un\'ora e mezza di macchina si scia. Chi ci vive, in agosto, o parte o sale nell\'entroterra. La seconda cosa è il treno. La linea costiera passa ogni pochi minuti, costa pochi euro, collega tutto da Cannes a Mentone e non conosce ingorghi — e praticamente nessun turista lo usa, tutti noleggiano l\'auto e poi passano la vacanza a cercare posto. La terza è che la costa si esaurisce in fretta e l\'entroterra no: dieci chilometri dentro ci sono villaggi in pietra dove si mangia alla metà, e a un\'ora e mezza c\'è un parco nazionale con i camosci. Il Cap d\'Antibes, infine, è la cosa che si finisce per rifare cento volte: un sentiero pubblico, gratuito, che gira la punta del capo sul mare, con le onde sotto e le ville nascoste dietro i muri, e in inverno non c\'è nessuno.',
    esperienzeSlugs: ['sentiero-cap-antibes', 'mercato-provenzale-antibes', 'museo-picasso-antibes', 'sentiero-nietzsche-eze', 'fondation-maeght', 'isole-lerino'],
    tripSlugs: ['costa-azzurra'],
    imageAlt: 'Il porto di Antibes con i bastioni della città vecchia e le Alpi innevate sullo sfondo',
  },
  {
    slug: 'parigi',
    paeseSlug: 'francia',
    ordine: 2,
    nome: 'Parigi',
    tipologia: ['città', 'arte', 'architettura'],
    giorniConsigliati: '5 giorni, con versioni da 3 e da 2',
    visitataPersonalmente: true,
    introduzione:
      'Venti arrondissement disposti a spirale a partire dal primo, due isole sulla Senna, il museo più visitato del mondo e una densità di grandi collezioni che in Europa ha pochi confronti. È anche la città in cui si sbaglia più spesso il programma, perché tutto sembra vicino sulla mappa e non lo è, e perché i musei chiudono in giorni diversi tra loro.',
    percheAndarci:
      'Perché è l\'unica città al mondo in cui, nello stesso giorno, si può passare da una vetrata gotica del Duecento a una collezione impressionista dentro una stazione ferroviaria del 1900 e a un quartiere che non ha niente di monumentale e in cui si mangia meglio che in centro. E perché la Parigi che resta non è quella dei monumenti: è quella dei quartieri.',
    cosaVedere: [
      'Il **Louvre**, il museo più grande del mondo, con la Vittoria di Samotracia in cima allo scalone Daru, la Venere di Milo, la Zattera della Medusa e gli appartamenti di Napoleone III — **prenotazione con fascia oraria di fatto obbligatoria, chiuso il martedì**',
      'Il **Musée d\'Orsay** dentro l\'ex stazione ferroviaria del 1900, con gli impressionisti all\'ultimo piano — **chiuso il lunedì**',
      'L\'**Orangerie**, con le due sale ovali delle **Ninfee** progettate da Monet stesso per quello spazio',
      'La **Sainte-Chapelle**, con quindici vetrate alte quindici metri e oltre mille pannelli istoriati, costruita in circa sette anni per custodire la Corona di Spine',
      '**Notre-Dame**, riaperta nel dicembre 2024 dopo l\'incendio del 2019, con la pietra ripulita che ha restituito un interno chiarissimo — **ingresso gratuito, con un sistema di prenotazione a fasce orarie da verificare**',
      'La **Tour Eiffel**, e soprattutto i punti da cui la si guarda: Trocadéro, l\'Arc de Triomphe, Montparnasse, le terrazze dei grandi magazzini (gratuite), il Parc de Belleville',
      '**Versailles**, con la Galleria degli Specchi, il Trianon e l\'Hameau de la Reine — **prenotazione obbligatoria, chiuso il lunedì**',
      'Il **Marais** con Place des Vosges, la piazza pianificata più antica di Parigi, e il **Musée Picasso** nell\'Hôtel Salé',
      'Le **Catacombe**, un chilometro e mezzo di gallerie con i resti di milioni di persone, a quattordici gradi costanti — **su prenotazione**',
      'Il **Père-Lachaise**, gratuito, e i quartieri che non stanno sulle cartoline: Canal Saint-Martin, Belleville, Buttes-Chaumont, la **Coulée verte René-Dumont**, il parco lineare sopra un viadotto ferroviario che ha anticipato di vent\'anni la High Line di New York',
    ],
    cosaFare: [
      'Il **Louvre con una strategia decisa prima**, invece di percorrerlo tutto — vedi la scheda esperienza dedicata',
      'La **Sainte-Chapelle in una giornata di sole**, che è l\'unica condizione in cui ha senso — vedi la scheda esperienza dedicata',
      'Salire a **Montmartre all\'alba**, quando il quartiere è di chi ci abita — vedi la scheda esperienza dedicata',
      'Camminare i **passages couverts** del secondo arrondissement, gallerie commerciali ottocentesche con i lucernari in vetro',
      'Prendere il caffè **al banco** invece che al tavolo: i prezzi sono diversi per legge ed esposti, e al banco costa la metà',
      'Comprare una **baguette de tradition** in una boulangerie di quartiere, che è una categoria regolata per legge e non un nome commerciale',
    ],
    doveDormire:
      'La regola è stare **dentro i venti arrondissement e vicino a una stazione della metropolitana**, e nient\'altro conta davvero. Il **Marais** (3° e 4°) e **Saint-Germain** (6°) sono i più belli e i più cari; il **quartiere latino** (5°) è centrale e più economico; **Canal Saint-Martin e la Repubblica** (10° e 11°) sono i migliori per rapporto tra prezzo, vita di quartiere e collegamenti; **Montmartre** (18°) è bellissimo e in salita, con la parte bassa verso Pigalle molto diversa da quella alta. Da evitare per un primo viaggio le zone fuori dal Périphérique, che sembrano vicine sulla mappa e costano quaranta minuti a tratta.',
    doveMangiare:
      'Parigi è la città in cui è più facile mangiare male spendendo molto, e la difesa è una sola: **allontanarsi dai monumenti**. Il **menù di mezzogiorno** (formule entrée-plat o plat-dessert) costa una frazione della stessa cucina alla sera. I **bouillon**, ristoranti popolari nati nell\'Ottocento per dare da mangiare agli operai, esistono ancora e servono cucina classica a prezzi bassissimi. Da provare: **steak-frites**, **confit de canard**, **soupe à l\'oignon gratinée**, le **ostriche** da settembre, i formaggi di una fromagerie vera, e la **baguette de tradition** appena sfornata. Il **servizio è compreso per legge**: la mancia è facoltativa e simbolica.',
    comeArrivare:
      'Tre aeroporti: **Charles-de-Gaulle** (collegato dal treno regionale RER B), **Orly** (collegato dal prolungamento della metropolitana **linea 14**, inaugurato nel 2024, che è oggi il modo più semplice di arrivare in centro) e **Beauvais**, che è lontano e serve i voli low cost. In treno, l\'alta velocità collega Parigi a tutta Europa; da Milano e Torino il collegamento diretto è stato a lungo interrotto per una frana in Savoia e **va verificato**.',
    comeSpostarsi:
      '**Metropolitana**, sedici linee, frequenza altissima, ed è la risposta giusta quasi sempre. **I biglietti di carta a carnet sono stati eliminati**: si usa una carta ricaricabile o il telefono, e **dal 2025 è in vigore una tariffa unica semplificata per la rete di Parigi e dell\'Île-de-France**, con un prezzo dedicato per gli aeroporti — **importi e condizioni vanno verificati**. Parigi è anche una città che si cammina benissimo e in cui le piste ciclabili sono aumentate enormemente negli ultimi anni, con un sistema di bici pubbliche capillare.',
    periodoMigliore:
      '**aprile-giugno e settembre-ottobre.** L\'estate è calda, affollata e **in agosto molti ristoranti e negozi di quartiere chiudono per settimane**, il che paradossalmente rende la città più vuota ma anche più difficile da vivere. L\'inverno è freddo e umido, con le giornate corte, ma è il periodo con le code più brevi e i prezzi più bassi: per chi viene soprattutto per i musei è un\'ottima scelta.',
    costi:
      'Alta, e la voce che pesa di più è l\'alloggio. I musei costano poco singolarmente; il **Paris Museum Pass** a 2, 4 o 6 giorni conviene da circa tre musei al giorno, ma **non salta i controlli di sicurezza e non sostituisce la prenotazione oraria dove è richiesta** (Louvre e Versailles su tutti), il che è la fonte di equivoco più comune. Diversi musei municipali — Carnavalet, Petit Palais — hanno la **collezione permanente gratuita**.',
    erroriDaEvitare: [
      '**Non prenotare Louvre e Versailles.** Il pass da solo non basta: serve la fascia oraria, e nei periodi di punta si esaurisce',
      'Non controllare i giorni di chiusura: **il Louvre chiude il martedì, Orsay il lunedì, Versailles il lunedì**, e il martedì la folla si sposta in massa su Orsay e Versailles',
      'Mettere in programma il **Centre Pompidou** senza verificare: è entrato in una lunga fase di chiusura per ristrutturazione e la riapertura è prevista a fine decennio',
      'Salire sulla Tour Eiffel per vedere Parigi: dall\'alto della torre l\'unica cosa che manca al panorama è la torre stessa',
      'Fermarsi a Place du Tertre a Montmartre, che è la parte meno autentica della collina, a duecento metri da vie in cui non c\'è nessuno',
      'Sedersi al tavolo per un caffè veloce: al banco costa circa la metà, e i due prezzi sono esposti per legge',
      'Sottovalutare le distanze: la mappa della metropolitana comprime tutto, e Parigi è larga dieci chilometri',
    ],
    confronti: [
      {
        titolo: 'Quali musei scegliere davvero',
        introduzione:
          'Parigi ha più grandi musei di quanti se ne possano fare in una settimana, e la tentazione è di infilarne tre al giorno. Dopo il secondo si smette di guardare. La scelta utile non è "quali sono i più importanti" ma "quali reggono il tempo che hai".',
        opzioni: [
          {
            nome: 'Il Louvre',
            sintesi: 'Il museo più grande e più visitato del mondo, con decine di migliaia di opere esposte su chilometri di sale.',
            costo: 'biglietto singolo contenuto rispetto alla dimensione; incluso nel Museum Pass ma con prenotazione oraria comunque necessaria',
            durata: 'mezza giornata come minimo, e non lo si finisce mai',
            pro: [
              'Copre cinquemila anni, dall\'Egitto al Settecento francese: nessun altro museo ha questa ampiezza',
              'La Vittoria di Samotracia in cima allo scalone Daru è probabilmente l\'allestimento più riuscito di qualunque museo al mondo',
              'Le antichità mesopotamiche ed egizie sono di primo livello e semivuote',
              'L\'edificio stesso, con le fondazioni del castello medievale visitabili nei sotterranei',
            ],
            contro: [
              'La sala della Gioconda è un imbuto di folla in cui si guarda un quadro piccolo da lontano, e per molti è una delusione annunciata',
              'È faticoso fisicamente: si cammina per chilometri',
              'Chiuso il martedì, e senza fascia oraria prenotata si rischia di non entrare',
            ],
            perChi: 'Chi ha almeno tre giorni in città e accetta di sceglierne due o tre ali invece di percorrerlo tutto.',
          },
          {
            nome: 'Il Musée d\'Orsay',
            sintesi: 'Impressionismo e post-impressionismo dentro una stazione ferroviaria del 1900 rimasta intatta come contenitore.',
            costo: 'contenuto, incluso nel Museum Pass',
            durata: 'mezza giornata',
            pro: [
              'La collezione impressionista più importante al mondo, concentrata all\'ultimo piano',
              'L\'edificio: la navata della stazione con il grande orologio è parte dell\'esperienza',
              'Ha una dimensione umana: si finisce davvero, e questo cambia tutto rispetto al Louvre',
            ],
            contro: [
              'Molto affollato, soprattutto il martedì quando il Louvre è chiuso',
              'Chiuso il lunedì',
            ],
            perChi: 'Praticamente tutti. Se si sceglie un solo grande museo a Parigi, per molte persone questo è quello giusto.',
          },
          {
            nome: 'L\'Orangerie e il Musée Marmottan Monet',
            sintesi: 'Due musei piccoli e monografici: le Ninfee nelle sale ovali volute da Monet, e la più ampia raccolta di Monet al mondo.',
            costo: 'contenuti; l\'Orangerie è nel Museum Pass, il Marmottan generalmente no',
            durata: 'un\'ora e mezza ciascuno',
            pro: [
              'Le due sale ovali dell\'Orangerie sono uno spazio progettato dall\'artista per le sue opere: è un\'esperienza, non un\'esposizione',
              'Il Marmottan, fuori dal circuito, conserva il quadro da cui l\'impressionismo prende il nome ed è quasi sempre tranquillo',
              'Sono corti: si incastrano in mezza giornata senza saturarsi',
            ],
            contro: [
              'L\'Orangerie ha code lunghe nelle ore centrali nonostante sia piccola',
              'Il Marmottan è decentrato e va raggiunto apposta',
            ],
            perChi: 'Chi ha già fatto Orsay e vuole approfondire, o chi ha poco tempo e preferisce una cosa breve e intensa.',
          },
          {
            nome: 'I musei gratuiti e sottovalutati',
            sintesi: 'Carnavalet per la storia di Parigi, Petit Palais per la pittura dell\'Ottocento, la Maison de Victor Hugo: collezioni permanenti a ingresso gratuito.',
            costo: 'gratuiti (collezioni permanenti; le mostre temporanee si pagano)',
            durata: 'un\'ora o due ciascuno',
            pro: [
              'Il **Carnavalet** racconta la storia della città in modo straordinariamente concreto, con insegne, ricostruzioni di interni e oggetti della Rivoluzione',
              'Il **Petit Palais** ha un cortile-giardino interno che quasi nessuno conosce',
              'Sono vuoti rispetto ai grandi musei e si entra senza code',
            ],
            contro: [
              'Non hanno capolavori universalmente noti, e questo per alcuni è il punto e per altri un limite',
            ],
            perChi: 'Chi torna a Parigi, chi ha un budget stretto, chi vuole capire la città e non solo attraversarla.',
          },
        ],
        raccomandazione:
          'Su cinque giorni: **Orsay e Louvre in due mezze giornate separate**, mai lo stesso giorno; **Orangerie** come terza cosa breve; e almeno **un museo gratuito di quartiere**. Su tre giorni: **Orsay, e basta**, con la Sainte-Chapelle come seconda visita — che non è un museo ed è l\'interno più bello della città.',
      },
      {
        titolo: 'Versailles, Fontainebleau o Chantilly?',
        introduzione:
          'Sono tre regge raggiungibili in giornata da Parigi e sono molto diverse per affollamento, dimensione e tipo di visita. Versailles è la più famosa e la più faticosa; le altre due sono quasi vuote e nessuno le considera.',
        opzioni: [
          {
            nome: 'Versailles',
            sintesi: 'La reggia che ha definito il modello di corte europeo, con la Galleria degli Specchi, i giardini di Le Nôtre, il Trianon e l\'Hameau de la Reine.',
            costo: 'biglietto per il castello, supplemento per le giornate con le fontane in funzione; il parco è in gran parte gratuito',
            durata: 'una giornata intera, e resta corta',
            pro: [
              'La Galleria degli Specchi e gli appartamenti reali non hanno equivalenti',
              'Il **Domaine de Marie-Antoinette** con il Petit Trianon e l\'**Hameau de la Reine** — un finto villaggio agricolo costruito per la regina — è la parte più sorprendente e la meno visitata',
              'Il parco è enorme e si percorre in bici, in barca sul Grand Canal o con il trenino',
              'Nei fine settimana da primavera ad autunno le **fontane funzionano con accompagnamento musicale**, ed è lo spettacolo per cui il giardino è stato progettato',
            ],
            contro: [
              '**Affollamento estremo**: negli appartamenti si procede in fila indiana',
              'Prenotazione obbligatoria con fascia oraria, e **chiuso il lunedì**',
              'Il Trianon apre più tardi del castello: sbagliare l\'ordine costa ore',
              'Il martedì, con il Louvre chiuso, è ancora peggio',
            ],
            perChi: 'Chi è a Parigi per la prima volta e non può non vederla, mettendo in conto la folla e partendo all\'apertura.',
          },
          {
            nome: 'Fontainebleau',
            sintesi: 'La residenza reale più a lungo abitata di Francia, da otto secoli di sovrani, con una foresta enorme intorno.',
            costo: 'contenuto, sensibilmente meno di Versailles',
            durata: 'mezza giornata per il castello, una giornata con la foresta',
            pro: [
              'Ha una stratificazione che Versailles non ha: otto secoli di re che hanno costruito ognuno il proprio pezzo',
              'La Galleria di Francesco I è uno dei capolavori del Rinascimento in Francia',
              'Affollamento incomparabilmente minore',
              'La **foresta di Fontainebleau** è un\'area di arrampicata su massi famosa in tutto il mondo e un bellissimo posto per camminare',
            ],
            contro: [
              'Meno spettacolare di Versailles nei giardini',
              'Meno noto, quindi chi cerca "la cosa da vedere" resta indeciso',
            ],
            perChi: 'Chi torna a Parigi, chi odia la folla, chi vuole unire un castello a una giornata nella natura.',
          },
          {
            nome: 'Chantilly',
            sintesi: 'Un castello su uno specchio d\'acqua con una pinacoteca che è, per numero di dipinti antichi, tra le più importanti di Francia dopo il Louvre, e le grandi scuderie settecentesche.',
            costo: 'contenuto, con biglietti cumulativi castello-parco-scuderie',
            durata: 'una giornata',
            pro: [
              'Il **Musée Condé** ha una collezione di pittura straordinaria, esposta secondo l\'allestimento ottocentesco originale, per volontà testamentaria del donatore',
              'Le **Grandes Écuries**, scuderie monumentali costruite per un principe convinto di reincarnarsi in cavallo, oggi museo del cavallo con spettacoli equestri',
              'Il parco disegnato da Le Nôtre, con il giardino all\'inglese e il borgo rustico',
              'Quasi nessun turista internazionale',
            ],
            contro: [
              'Meno collegato: si arriva in treno regionale più una camminata o una navetta',
              'Il nome dice poco a chi viene da fuori, e questo lo rende il più trascurato dei tre',
            ],
            perChi: 'Chi ama la pittura antica, chi è già stato a Versailles, chi vuole una giornata fuori senza la calca.',
          },
        ],
        raccomandazione:
          'Alla prima visita, **Versailles**, ma fatta bene: prenotazione all\'apertura, appartamenti subito, e poi tutto il resto della giornata nel parco e al Trianon, che è dove la folla si dissolve. Alla seconda visita a Parigi, **Chantilly** senza esitare.',
      },
    ],
    miaEsperienza:
      'Parigi è una città in cui i primi due giorni si spendono nei posti che si conoscevano già prima di arrivare, e il terzo comincia il viaggio vero. Il momento in cui cambia è quasi sempre lo stesso: si esce da un museo grande, si è stanchi, si prende una direzione a caso invece di andare verso il monumento successivo, e si finisce in un quartiere dove non c\'è niente da vedere — Belleville, il Canal Saint-Martin, la parte alta del decimo — con la gente seduta sui bordi dell\'acqua, le boulangerie con la fila, e nessuno che fotografa niente. Da lì in poi la città funziona. La seconda cosa che si impara è la gestione del tempo: tutto sembra vicino sulla mappa della metropolitana, che comprime le distanze in modo ingannevole, e mettere in programma tre grandi musei in un giorno significa non vederne nessuno. Due cose grandi al giorno, mai tre. E poi ci sono le regole piccole che cambiano il rapporto con la città: si dice bonjour entrando ovunque, si beve il caffè al banco dove costa la metà, e si guarda la Tour Eiffel da lontano — dall\'alto della torre l\'unica cosa che manca al panorama è la torre.',
    esperienzeSlugs: ['louvre-strategia', 'sainte-chapelle', 'montmartre-alba', 'catacombe-parigi', 'pere-lachaise'],
    tripSlugs: ['parigi-5-giorni'],
    imageAlt: 'I tetti di zinco di Parigi con la Tour Eiffel sullo sfondo al tramonto',
  },
  {
    slug: 'normandia',
    paeseSlug: 'francia',
    ordine: 3,
    nome: 'Normandia',
    tipologia: ['storia', 'costa', 'gastronomia'],
    giorniConsigliati: '5-7 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La regione che ha dato il nome a un popolo venuto dal nord, che ha conquistato l\'Inghilterra nel 1066 e che nel 1944 ha visto lo sbarco più grande della storia militare. È anche una costa di falesie di gesso bianco, un entroterra di pascoli e meli, e il posto dove è nato l\'impressionismo — il nome stesso viene da un quadro dipinto nel porto di Le Havre.',
    percheAndarci:
      'Perché è una delle poche regioni d\'Europa in cui la storia non è un contorno del paesaggio ma il motivo per cui ci si va: le spiagge dello sbarco sono un luogo che cambia chi le attraversa. E perché il Mont-Saint-Michel, al netto della folla, resta una delle cose più straordinarie che l\'uomo abbia costruito in Europa.',
    cosaVedere: [
      'Le **spiagge dello sbarco**: Utah, Omaha, Gold, Juno e Sword, con il cimitero americano di Colleville-sur-Mer, la **Pointe du Hoc** ancora crivellata dai crateri, le batterie di Longues-sur-Mer e i cassoni del **porto artificiale di Arromanches** ancora in mare',
      'Il **Mémorial de Caen**, il museo che inquadra tutta la vicenda dalla fine della Prima guerra mondiale in poi, e che va fatto prima di andare sulle spiagge',
      'L\'**Arazzo di Bayeux**: settanta metri di ricamo dell\'XI secolo che raccontano la conquista normanna dell\'Inghilterra, iscritto nel registro UNESCO della Memoria del Mondo — **il museo è interessato da un lungo intervento di ristrutturazione: le date di chiusura e riapertura vanno verificate**',
      'Il **Mont-Saint-Michel**, con l\'abbazia sulla cima della roccia e le maree più ampie d\'Europa continentale intorno',
      'Le **falesie di Étretat**, con le arcate di gesso e l\'ago di roccia, e i sentieri sulla sommità',
      '**Honfleur**, con il Vieux Bassin e la chiesa di Sainte-Catherine, la più grande chiesa in legno di Francia, costruita dai maestri d\'ascia dei cantieri navali',
      '**Rouen**, con la cattedrale che Monet ha dipinto decine di volte a ore diverse del giorno, il Gros-Horloge e il luogo del rogo di Giovanna d\'Arco',
      '**Giverny**, la casa e il giardino di Monet con lo stagno delle ninfee e il ponte giapponese',
    ],
    cosaFare: [
      'Percorrere le **spiagge dello sbarco** in un giorno solo e nell\'ordine giusto — vedi la scheda esperienza dedicata',
      'Vedere il **Mont-Saint-Michel con la marea**, che è l\'unico modo di capirlo — vedi la scheda esperienza dedicata',
      'Camminare sulla **falesia di Étretat** invece di guardarla dalla spiaggia',
      'Visitare una **distilleria di calvados** o una fattoria di sidro, che qui sono una filiera agricola vera',
      'Mangiare i formaggi normanni nella loro zona d\'origine, che sono quattro e stanno tutti entro cinquanta chilometri',
    ],
    doveDormire:
      '**Bayeux** è la base migliore per le spiagge dello sbarco: piccola, bella, risparmiata dai bombardamenti del 1944 e a mezz\'ora da tutto. **Caen** ha più servizi e il Mémorial. Per il Mont-Saint-Michel, **dormire sull\'isola è possibile** in poche strutture piccole e care, ed è l\'unico modo di essere lì la sera e all\'alba quando i pullman sono ripartiti — altrimenti si dorme nei paesi della baia, molto più economici. **Honfleur** e la Côte Fleurie sono care in stagione.',
    doveMangiare:
      'La Normandia è una regione di **burro, panna e mele**, non di olio e vino: la cucina lo dice subito. **Camembert, livarot, pont-l\'évêque e neufchâtel** sono quattro formaggi a denominazione che nascono tutti qui. Il **sidro** si beve a tutto pasto in scodella, il **pommeau** è l\'aperitivo locale e il **calvados** è il distillato di sidro — tradizionalmente servito a metà pranzo come "trou normand" per riaprire lo stomaco. Poi **ostriche e cozze**, le **capesante** che hanno una stagione precisa (indicativamente da ottobre a maggio), l\'**agnello di pré-salé** allevato sulle praterie salmastre della baia del Mont-Saint-Michel, e la **teurgoule**, un riso al latte cotto nel forno per ore.',
    comeArrivare:
      'In treno da Parigi si arriva a Rouen, Caen e Bayeux in poche ore. **Per le spiagge dello sbarco e per l\'entroterra serve l\'auto**: le distanze sono brevi ma i siti sono sparsi e il trasporto pubblico non li collega. Il Mont-Saint-Michel si raggiunge in treno più navetta oppure in auto, con parcheggio obbligatorio sulla terraferma.',
    comeSpostarsi:
      '**Auto**, senza alternative reali. Le strade sono buone e le distanze contenute: tutta la fascia delle spiagge dello sbarco sta in una cinquantina di chilometri. In alternativa esistono tour accompagnati in giornata da Bayeux e Caen, che per il fronte dello sbarco hanno un vantaggio vero — il racconto è la metà dell\'esperienza.',
    periodoMigliore:
      '**da maggio a settembre**, con giugno e settembre come mesi migliori. **Il meteo resta una variabile in ogni mese**: qui piove in tutte le stagioni e il tempo cambia nell\'arco di un\'ora. Attorno al **6 giugno**, anniversario dello sbarco, ci sono commemorazioni importanti e la zona è molto affollata: è il momento più intenso e il più difficile da organizzare. L\'inverno è grigio e ventoso, con molte strutture costiere chiuse.',
    costi:
      'Nella media francese, più bassa della Costa Azzurra e di Parigi. Le spiagge dello sbarco sono in larga parte a **ingresso libero** — i cimiteri, la Pointe du Hoc e le batterie non si pagano — mentre i musei e il Mémorial hanno biglietti contenuti. La navetta e il parcheggio del Mont-Saint-Michel sono la voce che sorprende.',
    erroriDaEvitare: [
      'Andare sulle spiagge dello sbarco senza contesto: **il Mémorial de Caen o un museo vanno fatti prima**, altrimenti si guardano delle spiagge normali',
      'Provare a vedere tutti e cinque i settori dello sbarco in una giornata: se ne fanno bene due o tre',
      'Arrivare al Mont-Saint-Michel a mezzogiorno in alta stagione, che è l\'ora peggiore possibile',
      '**Non controllare il calendario delle maree**: le grandi maree sono pubblicate con anni di anticipo e sono l\'unico momento in cui il Mont diventa davvero un\'isola',
      'Attraversare la baia a piedi da soli: **le sabbie mobili sono reali e la marea risale velocemente. La traversata si fa solo con guida**',
      'Aspettarsi il sole. In Normandia si porta la giacca impermeabile a luglio',
      'Dare per scontata l\'apertura dell\'Arazzo di Bayeux, che è interessato da un lungo cantiere di ristrutturazione',
    ],
    confronti: [
      {
        titolo: 'Mont-Saint-Michel: come e quando visitarlo',
        introduzione:
          'È il monumento più visitato di Francia fuori da Parigi e riceve milioni di persone l\'anno su una roccia larga poche centinaia di metri. La differenza tra una visita memorabile e una coda in salita dipende interamente da tre scelte: l\'orario, il pernottamento e la marea.',
        opzioni: [
          {
            nome: 'In giornata, nelle ore centrali',
            sintesi: 'Il modo in cui lo fa la grande maggioranza: arrivo tra le 10 e le 16, parcheggio sulla terraferma, navetta, visita all\'abbazia, ripartenza.',
            costo: 'parcheggio più biglietto dell\'abbazia',
            durata: 'mezza giornata',
            pro: [
              'Semplice e senza vincoli di prenotazione per dormire',
              'L\'abbazia è aperta e tutti i servizi funzionano',
            ],
            contro: [
              'È l\'ora di punta assoluta: la Grande Rue in salita diventa una fila compatta tra negozi di souvenir',
              'La luce a mezzogiorno è la peggiore per il Mont, che dà il meglio all\'alba e al tramonto',
              'Non si vede la baia cambiare, che è metà del senso del posto',
            ],
            perChi: 'Chi è di passaggio e non ha alternative.',
          },
          {
            nome: 'Dormendo sull\'isola',
            sintesi: 'Poche strutture piccole dentro le mura, care e da prenotare con molto anticipo, che permettono di restare quando i pullman sono ripartiti.',
            costo: 'alto: è uno dei pernottamenti più cari della Normandia',
            durata: 'una notte',
            pro: [
              'Dopo le 18 e prima delle 9 il Mont è un altro posto: vicoli vuoti, rumore del vento, le luci sulla baia',
              'Si vede il cambio di marea senza dover incastrare gli orari',
              'L\'abbazia con le **visite serali** in certi periodi dell\'anno, con musica e illuminazione — **date da verificare ogni stagione**',
            ],
            contro: [
              'Costoso e con pochissima disponibilità',
              'Portare i bagagli su per la Grande Rue non è banale',
            ],
            perChi: 'Chi ci va una volta nella vita e vuole vederlo come va visto.',
          },
          {
            nome: 'Dormendo nella baia e andando all\'alba o alla sera',
            sintesi: 'Base in uno dei paesi a pochi chilometri, dove i prezzi sono normali, e visita fuori dalle ore centrali con la navetta o a piedi lungo la passerella.',
            costo: 'medio-basso',
            durata: 'una o due notti',
            pro: [
              'Il miglior rapporto tra costo e qualità dell\'esperienza',
              'Si può tornare due volte — alla sera e all\'alba — vedendo due Mont completamente diversi',
              'La camminata lungo la passerella con il Mont davanti che cresce è la parte più bella dell\'arrivo',
            ],
            contro: [
              'Serve l\'auto',
              'Le navette hanno orari: chi resta tardi deve verificare l\'ultima corsa o camminare',
            ],
            perChi: 'La scelta consigliata per quasi tutti.',
          },
          {
            nome: 'Attraversando la baia a piedi con una guida',
            sintesi: 'La traversata sulla sabbia della baia, scalzi, con accompagnamento autorizzato, seguendo i canali e aggirando le zone instabili.',
            costo: 'contenuto per persona',
            durata: '2-4 ore a seconda del percorso',
            pro: [
              'È il modo storico di arrivarci, quello dei pellegrini, e cambia completamente la percezione della baia',
              'Si capisce dal vivo cosa sono le sabbie mobili e perché la marea qui è pericolosa',
              'Si vede il Mont crescere dall\'orizzonte per ore',
            ],
            contro: [
              '**Assolutamente da non fare da soli**: le sabbie mobili esistono e la marea risale molto più velocemente di quanto si immagini',
              'Dipende dalle maree e dal meteo: si prenota e a volte si annulla',
              'Si torna bagnati e infangati: serve un cambio',
            ],
            perChi: 'Chi ha un giorno in più e vuole l\'esperienza invece della fotografia.',
          },
        ],
        raccomandazione:
          'Dormire **nella baia**, visitare **alla sera e tornare all\'alba**, e se le date coincidono con una **grande marea** spostare il viaggio per esserci: sono i pochi giorni all\'anno in cui il Mont torna a essere un\'isola circondata dall\'acqua, e il calendario è pubblicato con largo anticipo.',
      },
    ],
    miaEsperienza:
      'La cosa che spiazza delle spiagge dello sbarco è quanto siano normali. Omaha Beach, in una giornata di vento, è una spiaggia larghissima con la sabbia chiara, dei bagnanti, qualche cane. Non c\'è niente di drammatico nel paesaggio, ed è esattamente questo che la rende difficile da reggere: si guarda quella distesa piatta, si pensa a cosa significasse attraversarla di corsa sotto il fuoco delle postazioni sulla scarpata, e si capisce che il motivo per cui non c\'è niente da vedere è che la geografia era il problema. Poi si sale alla Pointe du Hoc, dove invece il terreno è rimasto come allora — crateri di bombardamento uno dentro l\'altro, bunker spaccati — e lì l\'effetto è opposto e immediato. L\'ordine giusto è quello: prima un museo che spieghi, poi le spiagge. Al contrario si guarda del mare. Il Mont-Saint-Michel è l\'altra faccia della regione e ha un problema di orari più che di folla: alle undici del mattino la via principale è una fila in salita tra i negozi di souvenir, alle sette di sera è vuota, con il vento e il rumore dell\'acqua. Chi ci passa mezza giornata nelle ore centrali torna dicendo che è sopravvalutato, e ha visto un\'altra cosa.',
    esperienzeSlugs: ['spiagge-sbarco', 'mont-saint-michel', 'arazzo-bayeux', 'giverny'],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'Il Mont-Saint-Michel con la marea alta che circonda la roccia al tramonto',
  },
  {
    slug: 'bretagna',
    paeseSlug: 'francia',
    ordine: 4,
    nome: 'Bretagna',
    tipologia: ['costa', 'trekking', 'archeologia'],
    giorniConsigliati: '7-10 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Una penisola che entra nell\'Atlantico per duecento chilometri, con duemilasettecento chilometri di costa, una lingua celtica ancora viva, le maree più ampie d\'Europa e allineamenti di megaliti più antichi delle piramidi. È la regione francese che somiglia meno alla Francia, e lo rivendica.',
    percheAndarci:
      'Per il **GR34**, il sentiero dei doganieri, che gira tutta la costa bretone ed è il percorso costiero più lungo di Francia — nato perché i doganieri sorvegliassero i contrabbandieri e oggi uno dei cammini più belli d\'Europa. E perché a Carnac ci sono tremila pietre alzate da qualcuno seimila anni fa per ragioni che non conosciamo.',
    cosaVedere: [
      'Gli **allineamenti di Carnac**: migliaia di menhir disposti in file parallele per chilometri, eretti nel Neolitico, **più antichi di Stonehenge e delle piramidi di Giza**',
      '**Saint-Malo**, la città corsara dentro le mura, distrutta nel 1944 e ricostruita pietra su pietra, con il camminamento sui bastioni e le isolette raggiungibili a piedi con la bassa marea',
      'La **Côte de Granit Rose** attorno a Ploumanac\'h, con blocchi di granito rosa erosi in forme impossibili direttamente sul mare',
      'La **Pointe du Raz**, il promontorio sull\'Atlantico che è uno dei punti più occidentali di Francia, e **Cap Fréhel** con il Fort la Latte',
      'Il **Golfo del Morbihan**, un mare interno con decine di isole, e il cairn di **Gavrinis** con le sue incisioni neolitiche',
      '**Locronan**, **Dinan** e **Concarneau** con la Ville Close, tre borghi murati che hanno conservato l\'impianto medievale',
      'La **penisola di Crozon**, con falesie, spiagge e pochissima gente',
      '**Cancale** per le ostriche e **Guérande** per le saline e la fleur de sel, poco più a sud',
    ],
    cosaFare: [
      'Camminare un tratto del **GR34**, che si fa a tappe o in giornata da quasi ogni paese costiero — vedi la scheda esperienza dedicata',
      'Vedere gli **allineamenti di Carnac** con il senso di cosa siano — vedi la scheda esperienza dedicata',
      'Fare il giro dei **bastioni di Saint-Malo** con la marea alta, quando le onde scavalcano il molo',
      'Prendere un traghetto per un\'isola: **Belle-Île**, **Bréhat**, **Ouessant** o l\'**Île aux Moines**',
      'Mangiare **galettes di grano saraceno** con il sidro in una crêperie di paese, che è il pasto bretone vero',
    ],
    doveDormire:
      'La Bretagna si fa con basi successive, non con una sola: le distanze da est a ovest sono lunghe. **Saint-Malo** per la costa nord-orientale e il Mont-Saint-Michel; **Perros-Guirec o Ploumanac\'h** per la Côte de Granit Rose; **Quimper, Douarnenez o la penisola di Crozon** per il Finistère; **Carnac, Vannes o Auray** per il Morbihan e i megaliti. I prezzi sono molto più bassi che sulla costa mediterranea, con l\'eccezione di Saint-Malo e Dinard in agosto.',
    doveMangiare:
      'La distinzione che i bretoni prendono sul serio: le **galettes** sono salate e si fanno con la **farina di grano saraceno**, le **crêpes** sono dolci e si fanno con la farina di frumento. Chiedere una "crêpe al prosciutto" segnala immediatamente da dove si viene. Si accompagnano con il **sidro servito in scodella** (bolée). Poi le **ostriche di Cancale**, le **cozze**, il **kouign-amann** — un dolce di pasta sfoglia, burro e zucchero caramellato che è probabilmente il dolce più calorico di Francia — il **far breton**, il **caramello al burro salato** e il **burro salato** in generale, che qui è la norma e non l\'eccezione.',
    comeArrivare:
      'In treno da Parigi si arriva a Rennes in circa un\'ora e mezza di alta velocità, e da lì si prosegue verso Saint-Malo, Brest, Quimper e Vannes. Gli aeroporti utili sono Rennes, Brest e Nantes. **L\'auto è necessaria** per la costa e per l\'interno.',
    comeSpostarsi:
      '**Auto.** La rete ferroviaria collega le città principali ma non la costa, che è il motivo per cui si viene. Nota utile: **in Bretagna le autostrade sono gratuite**, per un\'eredità storica dei piani di sviluppo regionale — è l\'unica regione francese in cui questo vale su tutta la rete principale.',
    periodoMigliore:
      '**da maggio a settembre**, con **giugno e settembre** come mesi ideali. Il meteo bretone è proverbiale e la formula locale è che il bel tempo capita più volte al giorno: piove, spiove e torna il sole nell\'arco di un\'ora, tutto l\'anno. Luglio e agosto sono i mesi con più sole e più gente. **Le grandi maree**, che qui hanno un\'escursione tra le maggiori d\'Europa, sono spettacolari e il calendario è pubblicato in anticipo.',
    costi:
      'Tra le regioni francesi più economiche per alloggi e ristorazione, con l\'eccezione delle località balneari più note ad agosto. Il GR34 è gratuito, i megaliti costano poco, i traghetti per le isole sono contenuti.',
    erroriDaEvitare: [
      'Sottovalutare le distanze: la Bretagna è grande e attraversarla da Saint-Malo a Quimper richiede mezza giornata',
      'Contare sul meteo. Si porta l\'antipioggia in ogni mese dell\'anno',
      '**Sottovalutare le maree**: si resta tagliati fuori su un isolotto o su una spiaggia con una facilità sorprendente. Gli orari sono affissi ovunque e vanno letti',
      '**Sottovalutare le correnti di risacca** sulle spiagge atlantiche, che sono la prima causa di incidenti in mare in Francia',
      'Chiamare "crêpe" una galetta salata',
      'Presentarsi ai campi di menhir di Carnac aspettandosi di camminarci in mezzo: **l\'accesso ai recinti è regolamentato per proteggere il terreno, con visite accompagnate in alta stagione e accesso più libero fuori stagione** — da verificare',
    ],
    confronti: [
      {
        titolo: 'Normandia o Bretagna, se c\'è tempo per una sola',
        introduzione:
          'Sono confinanti, si visitano spesso insieme e sono due viaggi completamente diversi. Chi le mette nello stesso itinerario senza saperlo finisce per trattare la seconda come un\'appendice della prima.',
        opzioni: [
          {
            nome: 'Normandia',
            sintesi: 'Un viaggio storico: lo sbarco del 1944, la conquista normanna dell\'Inghilterra, l\'abbazia sulla roccia, l\'impressionismo dove è nato.',
            costo: 'media',
            durata: '5-7 giorni',
            pro: [
              'Le spiagge dello sbarco sono un luogo che cambia chi le attraversa, e non hanno equivalenti',
              'Il Mont-Saint-Michel',
              'Più vicina a Parigi: si raggiunge in due ore di treno e si incastra facilmente',
              'Gastronomia forte e riconoscibile: formaggi, sidro, calvados',
            ],
            contro: [
              'La costa è meno spettacolare di quella bretone, Étretat a parte',
              'Molto più visitata: Mont-Saint-Michel e spiagge dello sbarco sono tra i luoghi più affollati di Francia',
              'Meno adatta a chi cerca natura e cammino',
            ],
            perChi: 'Chi viaggia per la storia, chi ha pochi giorni, chi parte da Parigi.',
          },
          {
            nome: 'Bretagna',
            sintesi: 'Un viaggio di costa e di preistoria: duemila chilometri di sentiero sul mare, megaliti neolitici, isole, una lingua celtica e il tempo che cambia ogni ora.',
            costo: 'medio-bassa',
            durata: '7-10 giorni',
            pro: [
              'Il GR34 è uno dei cammini costieri più belli d\'Europa e si fa anche in giornate singole',
              'Carnac e il Morbihan sono un insieme megalitico tra i più importanti al mondo',
              'Molto meno affollata, con prezzi sensibilmente più bassi',
              'Ha un\'identità culturale propria — lingua, musica, feste — che si sente davvero',
            ],
            contro: [
              'Serve più tempo: è grande e le distanze sono reali',
              'Il meteo è una variabile in ogni stagione',
              'Meno "cose da vedere" nel senso monumentale: è una regione da percorrere, non da spuntare',
            ],
            perChi: 'Chi cammina, chi cerca natura e costa, chi ha almeno una settimana e non vuole folla.',
          },
        ],
        raccomandazione:
          'Con **cinque giorni**, Normandia: è più densa, più vicina e più facile da organizzare. Con **dieci giorni o più**, si fanno entrambe, ma con un ordine preciso — Normandia prima, Bretagna dopo — perché il ritmo va da denso a lento e non viceversa. Chi ha una settimana e cammina scelga la Bretagna e non guardi indietro.',
      },
    ],
    miaEsperienza:
      'La Bretagna si capisce il primo giorno in cui si cammina sul GR34 e ci si rende conto che il sentiero non finisce: gira tutta la penisola, un promontorio dopo l\'altro, e da qualunque paese costiero si parta ci si può mettere a camminare e andare avanti per settimane. È un sentiero nato per un motivo pratico — sorvegliare i contrabbandieri — e questo si vede nella traccia, che sta il più vicino possibile all\'acqua, sui bordi delle falesie, e non cerca mai la scorciatoia. In un paio d\'ore si passa da una spiaggia a una scogliera a un bosco di pini a un porticciolo con le barche in secca sul fango, perché la marea se n\'è andata. Ed è la marea la cosa che colpisce di più: qui l\'escursione è tra le più ampie d\'Europa, e due volte al giorno il paesaggio cambia completamente — un\'insenatura piena d\'acqua diventa una distesa di sabbia dove la gente raccoglie le vongole. La seconda cosa è Carnac, che va affrontato sapendo cosa si sta guardando: tremila pietre alzate in file parallele per chilometri, da persone che non avevano il metallo, seimila anni fa, cioè prima delle piramidi. Non sappiamo perché. È uno dei pochi posti in Europa in cui l\'unica reazione onesta è ammettere di non capire.',
    esperienzeSlugs: ['gr34-sentiero-doganieri', 'carnac-megaliti', 'saint-malo-bastioni'],
    tripSlugs: ['normandia-bretagna'],
    imageAlt: 'I blocchi di granito rosa di Ploumanac\'h sulla costa bretone al tramonto',
  },
  {
    slug: 'castelli-loira',
    paeseSlug: 'francia',
    ordine: 5,
    nome: 'Castelli della Loira',
    tipologia: ['castelli', 'giardini', 'bicicletta'],
    giorniConsigliati: '5-7 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Duecentottanta chilometri di valle fluviale patrimonio UNESCO — non per i singoli castelli ma **come paesaggio culturale**, cioè per il modo in cui fiume, coltivazioni e architettura si sono costruiti a vicenda nei secoli. Ci sono circa trecento castelli, di cui una ventina visitabili sul serio, e la differenza tra un bel viaggio e una settimana di sale vuote sta interamente nel sceglierne cinque invece di vederne quindici.',
    percheAndarci:
      'Perché è il posto in cui il Rinascimento italiano è stato importato di peso in Francia e ne è uscito qualcosa di diverso: castelli che non servivano a difendersi ma a mostrare, costruiti in pietra di tufo tenera che si taglia come burro e che le lascia bianche. E perché è una delle poche grandi mete d\'Europa che si visita meglio in bicicletta che in auto.',
    cosaVedere: [
      '**Chambord**, il più grande, voluto da Francesco I: quattrocentoquaranta stanze, la **scala a doppia elica** in cui due persone salgono senza incontrarsi mai — con l\'ipotesi, discussa, di un\'ispirazione leonardesca — e la terrazza sul tetto che è una foresta di camini e lucernari. Non è mai stato davvero abitato',
      '**Chenonceau**, il castello delle dame, costruito **sopra il fiume Cher** con la galleria a ponte. Durante la Seconda guerra mondiale **la galleria attraversava la linea di demarcazione**: l\'ingresso era in zona occupata e l\'uscita in zona libera, e ci si passava per fuggire',
      '**Villandry**, per i giardini: l\'orto rinascimentale a disegni geometrici, il giardino ornamentale dell\'amore e quello d\'acqua, ricostruiti su modelli cinquecenteschi',
      '**Amboise** e il **Clos Lucé**, dove **Leonardo da Vinci ha passato gli ultimi tre anni di vita ed è morto nel 1519**: la casa conserva i modelli delle sue macchine, ed è sepolto nella cappella del castello',
      '**Azay-le-Rideau**, su un\'isola dell\'Indre, che si specchia nell\'acqua, e **Cheverny**, ancora abitato dalla stessa famiglia da secoli e modello dichiarato del castello di Moulinsart nelle avventure di Tintin',
      '**Chaumont-sur-Loire** con il **festival internazionale dei giardini**, che ogni anno espone decine di giardini d\'autore da primavera ad autunno',
      '**Fontevraud**, la più grande abbazia-città d\'Europa, con le **tombe dei Plantageneti** — Eleonora d\'Aquitania, Enrico II e Riccardo Cuor di Leone',
      'Le **cantine trogloditiche** scavate nel tufo: la stessa pietra estratta per costruire i castelli ha lasciato chilometri di gallerie, oggi usate come cantine e per la coltivazione dei funghi',
    ],
    cosaFare: [
      'Percorrere un tratto della **Loira in bicicletta**, su un itinerario ciclabile segnalato di circa novecento chilometri lungo il fiume, pianeggiante e che collega i castelli meglio dell\'auto',
      'Visitare **Chambord dalla terrazza**, che è il punto per cui è stato costruito — vedi la scheda esperienza dedicata',
      'Fare una **degustazione in una cantina trogloditica** di Vouvray, Chinon o Saumur, dentro la roccia',
      'Vedere il **Clos Lucé** e le macchine di Leonardo, che è la visita che piace anche a chi dei castelli non sa che farsene',
      'Salire sulla **scala a doppia elica** di Chambord e provare a incrociare qualcuno: non succede',
    ],
    doveDormire:
      '**Amboise, Tours o Blois** sono le basi più pratiche: centrali rispetto ai castelli principali, servite dal treno e con prezzi ragionevoli. **Saumur e Chinon** servono la parte occidentale e i vini. Dormire in un castello è possibile e non sempre costosissimo fuori stagione. Per chi pedala, la scelta migliore è muoversi lungo il fiume con tappe successive invece di usare una base fissa.',
    doveMangiare:
      'Cucina di fiume e di orto: **rillettes** e **rillons** di maiale, il **beurre blanc** (una salsa di burro, scalogno e vino bianco nata da queste parti), pesce d\'acqua dolce, **formaggi di capra** a denominazione — Sainte-Maure-de-Touraine, Selles-sur-Cher, Crottin de Chavignol — e la **tarte Tatin**, nata nel Loiret. I vini della valle sono tra i più vari di Francia: **Sancerre e Pouilly-Fumé** da Sauvignon, **Vouvray e Montlouis** da Chenin, **Chinon, Bourgueil e Saumur-Champigny** da Cabernet Franc, e il **Muscadet** alla foce.',
    comeArrivare:
      'In treno da Parigi si arriva a Tours, Blois, Amboise e Orléans in un\'ora o poco più. **Blois e Amboise sono le stazioni più utili.** In auto è comodo ma i parcheggi dei castelli principali si riempiono presto in alta stagione.',
    comeSpostarsi:
      '**L\'auto è la scelta standard, la bicicletta è quella giusta.** La valle è pianeggiante, esiste un itinerario ciclabile segnalato lungo tutto il fiume con noleggi a senso unico tra una città e l\'altra, e i castelli sono distanti tra loro dieci o venti chilometri: pedalare tra un castello e l\'altro lungo la Loira è letteralmente il modo in cui questo paesaggio va attraversato. Esistono anche navette stagionali tra i castelli principali e le stazioni: **da verificare stagionalità e percorsi**.',
    periodoMigliore:
      '**da aprile a giugno e in settembre-ottobre.** I **giardini** — Villandry su tutti, e il festival di Chaumont — danno il meglio da maggio a settembre. Luglio e agosto sono affollati nei castelli principali, mentre i minori restano tranquilli. L\'inverno è freddo e molti castelli riducono gli orari o chiudono: **da verificare**.',
    costi:
      'Ogni castello ha il suo biglietto e la somma pesa: cinque castelli sono una spesa reale. Esistono **formule cumulative e pass di area** che convengono da tre o quattro visite — vanno verificate perché cambiano. Il noleggio bici a senso unico ha un supplemento ma evita di riportare indietro il mezzo.',
    erroriDaEvitare: [
      '**Vederne troppi.** Dopo il terzo castello in due giorni si smette di distinguerli: cinque in una settimana, con calma, valgono il triplo',
      'Fare solo i grandi: Chambord e Chenonceau sono i più visitati di tutti, e i minori hanno un decimo della gente',
      'Arrivare a Chambord o Chenonceau a metà mattina in alta stagione, quando arrivano i pullman',
      'Trascurare i giardini: a Villandry il castello è l\'accessorio, il giardino è la ragione',
      'Muoversi solo in auto senza provare almeno una giornata in bici lungo il fiume',
      'Andare a Chaumont fuori dal periodo del festival dei giardini aspettandosi di trovarlo',
    ],
    confronti: [
      {
        titolo: 'Quali castelli della Loira scegliere',
        introduzione:
          'Sono circa trecento e visitarne più di cinque o sei in una settimana è controproducente. Non sono varianti della stessa cosa: uno è una reggia di rappresentanza mai abitata, uno è un ponte sul fiume, uno è un giardino, uno è la casa in cui è morto Leonardo. Si sceglie per tipo, non per fama.',
        opzioni: [
          {
            nome: 'Chambord',
            sintesi: 'Il più grande e il più teatrale: una reggia di caccia di quattrocentoquaranta stanze, in mezzo al parco recintato più esteso d\'Europa.',
            costo: 'biglietto tra i più alti della valle, più il parcheggio',
            durata: 'mezza giornata',
            pro: [
              'La scala a doppia elica e la terrazza-foresta di camini non hanno equivalenti',
              'Il parco recintato è enorme e si percorre in bici, in barca o a piedi, con cervi e cinghiali',
              'L\'edificio è talmente sproporzionato rispetto a qualunque funzione da raccontare da solo cosa fosse il potere nel Cinquecento',
            ],
            contro: [
              'Gli interni sono in gran parte vuoti: non è mai stato davvero abitato e l\'arredo è scarso',
              'È il più affollato insieme a Chenonceau',
              'Grande e dispersivo: si cammina molto',
            ],
            perChi: 'Tutti, almeno una volta. È il castello che si ricorda.',
          },
          {
            nome: 'Chenonceau',
            sintesi: 'Il castello costruito sopra il fiume, con la galleria a ponte: il più bello dei grandi e il più ricco di storia femminile e bellica.',
            costo: 'alto, in linea con Chambord',
            durata: 'mezza giornata',
            pro: [
              'L\'immagine del castello sull\'acqua è la più forte della valle',
              'Gli interni sono arredati e i giardini di Diana di Poitiers e Caterina de\' Medici si fronteggiano',
              'La storia della **linea di demarcazione che passava dentro la galleria** durante l\'occupazione è uno di quei dettagli che ridefiniscono un luogo',
              'Le composizioni floreali, rifatte continuamente con i fiori del giardino, sono una tradizione della casa',
            ],
            contro: [
              'Molto affollato: la galleria diventa una fila',
              'Va fatto all\'apertura o nell\'ultima ora',
            ],
            perChi: 'Tutti. Se se ne fa uno solo, per molte persone è questo.',
          },
          {
            nome: 'Villandry',
            sintesi: 'Il castello che si visita per il giardino: orto rinascimentale a disegni geometrici, giardino dell\'amore, giardino d\'acqua e labirinto.',
            costo: 'medio, con biglietto ridotto per i soli giardini',
            durata: 'mezza giornata',
            pro: [
              'L\'orto decorativo — verdure piantate a disegno, cambiate due volte l\'anno — non esiste in questa forma da nessun\'altra parte',
              'Si può comprare il biglietto per i soli giardini, che è quello che conta',
              'La terrazza alta permette di vedere i disegni dall\'alto, che è il punto di vista per cui sono progettati',
            ],
            contro: [
              'Fuori stagione i giardini sono spogli e la visita perde gran parte del senso',
              'Il castello in sé è meno interessante del parco',
            ],
            perChi: 'Chi viene tra maggio e settembre. Fuori da quel periodo, si salta.',
          },
          {
            nome: 'Amboise e il Clos Lucé',
            sintesi: 'Il castello reale sulla Loira e, a quattrocento metri, la casa in cui Leonardo ha passato gli ultimi tre anni ed è morto.',
            costo: 'due biglietti distinti, entrambi medi',
            durata: 'una giornata per entrambi',
            pro: [
              'Il **Clos Lucé** espone i modelli funzionanti delle macchine di Leonardo ed è la visita che conquista anche chi è stanco di castelli',
              'Leonardo è sepolto nella cappella del castello di Amboise',
              'Amboise è una cittadina viva in cui ha senso dormire, non solo un monumento',
              'Il castello ha una terrazza sul fiume che è uno dei punti di vista migliori sulla valle',
            ],
            contro: [
              'Il Clos Lucé è molto orientato alla divulgazione e in alta stagione è pieno di famiglie',
              'Il castello di Amboise è molto ridotto rispetto all\'originale, demolito in gran parte dopo la Rivoluzione',
            ],
            perChi: 'Chi viaggia con bambini, chi si interessa di storia della tecnica, chi vuole una base e non solo una visita.',
          },
          {
            nome: 'I minori: Azay-le-Rideau, Cheverny, Chaumont, Fontevraud',
            sintesi: 'Quattro visite più corte e molto meno affollate, ognuna con una ragione precisa: il riflesso sull\'acqua, la casa ancora abitata, il festival dei giardini, le tombe dei Plantageneti.',
            costo: 'medi o bassi',
            durata: 'due o tre ore ciascuno',
            pro: [
              '**Cheverny** è arredato e abitato dalla stessa famiglia da secoli: è l\'unico che sembra una casa e non un museo',
              '**Fontevraud** è un\'abbazia enorme con le tombe di Eleonora d\'Aquitania e Riccardo Cuor di Leone, e ha un\'atmosfera che nessun castello ha',
              '**Chaumont** con il festival dei giardini è una cosa a sé: decine di giardini d\'autore rinnovati ogni anno',
              'Affollamento molto inferiore',
            ],
            contro: [
              'Nessuno di questi è "il castello della Loira" che si aveva in mente prima di partire',
              'Fontevraud è decentrata rispetto agli altri',
            ],
            perChi: 'Chi ha più di quattro giorni, chi torna, chi non sopporta la folla.',
          },
        ],
        raccomandazione:
          'La combinazione che funziona su cinque giorni: **Chenonceau all\'apertura**, **Chambord con il parco**, **Villandry se si è in stagione di giardini**, **Amboise con il Clos Lucé** come giornata di base, e **uno tra Cheverny e Fontevraud** per capire come si viveva o come si pregava. Con almeno una di queste giornate fatta **in bicicletta lungo il fiume**, che cambia il viaggio.',
      },
    ],
    miaEsperienza:
      'L\'errore che quasi tutti fanno in Loira è trattarla come una lista. Si comincia con due castelli il primo giorno, tre il secondo, e al quarto si entra in una sala di rappresentanza cinquecentesca senza più alcuna reazione: sono tutti bianchi, tutti con le finestre a crociera, tutti con i camini enormi e le targhette. La valle funziona in un altro modo: si sceglie un castello al giorno, si passa lì la mattina e il resto del tempo lungo il fiume. È allora che si capisce perché l\'UNESCO abbia iscritto **il paesaggio** e non i monumenti — la Loira è l\'ultimo grande fiume europeo rimasto in gran parte non canalizzato, con i banchi di sabbia che si spostano e le isole che cambiano, e i castelli stanno lì per via del fiume. La cosa migliore che si possa fare è noleggiare una bici per una giornata: il percorso lungo l\'argine è piatto, si attraversano paesi che non hanno un castello e quindi non hanno nessuno, e si arriva al monumento successivo dopo due ore di pedalata invece che dopo venti minuti di auto e mezz\'ora di parcheggio. La seconda scoperta sono le cantine nel tufo: la pietra bianca con cui sono fatti i castelli è stata cavata nella collina dietro, e quelle gallerie oggi sono cantine — si scende in una galleria a dodici gradi costanti, con le bottiglie nelle nicchie, e chi versa spiega che il buco nel muro è vecchio quanto la facciata del castello di là dal fiume.',
    esperienzeSlugs: ['chambord', 'chenonceau', 'loira-in-bicicletta', 'cantina-troglodita-loira'],
    tripSlugs: ['castelli-loira'],
    imageAlt: 'Il castello di Chenonceau con la galleria a ponte sopra il fiume Cher',
  },
  {
    slug: 'bordeaux',
    paeseSlug: 'francia',
    ordine: 6,
    nome: 'Bordeaux e i suoi vigneti',
    tipologia: ['vino', 'città', 'costa'],
    giorniConsigliati: '6-8 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città è un insieme urbanistico settecentesco riconosciuto dall\'UNESCO come "Porto della Luna", ed è stata per anni la più vasta area urbana iscritta al mondo. Intorno c\'è il più esteso vigneto a denominazione di Francia, oltre centomila ettari, organizzato in una gerarchia di classificazioni che risale al 1855 e che è ancora oggi il riferimento del mercato mondiale del vino.',
    percheAndarci:
      'Perché è l\'unico posto al mondo in cui si può capire dal vivo come un vino sia diventato un bene finanziario: la classificazione del 1855, i castelli-azienda, i mercati a termine, i prezzi. E perché a un\'ora dai vigneti c\'è il Bacino di Arcachon con la duna di sabbia più alta d\'Europa.',
    cosaVedere: [
      '**Place de la Bourse** con il **Miroir d\'eau** davanti, una lastra d\'acqua di pochi millimetri che riflette la facciata settecentesca e che a intervalli si trasforma in nebbia',
      'Il centro settecentesco: la **Grosse Cloche**, la cattedrale di Saint-André con la **Tour Pey-Berland** che si sale per il panorama, la basilica di Saint-Michel, e **rue Sainte-Catherine**, una delle vie pedonali più lunghe d\'Europa',
      'Il quartiere dei **Chartrons**, dove stavano i commercianti di vino, con i magazzini convertiti',
      'La **Cité du Vin**, il museo del vino affacciato sulla Garonna',
      '**Saint-Émilion**, patrimonio UNESCO dal 1999 come **primo paesaggio vitivinicolo iscritto al mondo**, con la **chiesa monolitica scavata nella roccia** — la più grande d\'Europa nel suo genere — e le catacombe sotto il paese',
      'Il **Médoc** con i castelli-azienda allineati lungo la strada dei vini, e i **Graves e il Sauternes** a sud',
      'La **Dune du Pilat**, la duna di sabbia più alta d\'Europa, che avanza di qualche metro all\'anno verso l\'interno inghiottendo la pineta',
      'Il **Bacino di Arcachon** con le ostriche, il Cap Ferret e le capanne su palafitte dell\'Île aux Oiseaux',
    ],
    cosaFare: [
      'Una **degustazione a Saint-Émilion** con visita della chiesa monolitica — vedi la scheda esperienza dedicata',
      'Visitare un **château del Médoc su appuntamento**, sapendo che i grandi nomi si prenotano con settimane di anticipo',
      'Capire il **Sauternes**: la muffa nobile, le nebbie mattutine e la vendemmia a passaggi successivi — vedi la scheda esperienza dedicata',
      'Salire sulla **Dune du Pilat** al tramonto e mangiare **ostriche di Arcachon** nelle cabanes dei produttori',
      'Percorrere in bici una parte delle piste ciclabili delle Landes, che sono tra le più estese di Francia',
    ],
    doveDormire:
      '**Bordeaux città** è la base giusta: è bella, viva, con il tram che funziona, e da lì si raggiungono tutte le zone in meno di un\'ora. **Saint-Émilion** è bellissima e cara, con il paese che la sera si svuota completamente. **Arcachon o il Cap Ferret** per la parte di mare, con prezzi molto alti in luglio e agosto.',
    doveMangiare:
      'La cucina bordolese ruota attorno alla carne e al vino: l\'**entrecôte à la bordelaise** con la salsa al vino rosso e midollo, il **manzo di Bazas**, la **lamproie** (una specialità di fiume che divide), le **ostriche di Arcachon** servite tradizionalmente con piccole salsicce calde, e il **canelé**, il dolce di pasta densa con la crosta caramellata nato qui. La regola vale anche a Bordeaux: il **menù di mezzogiorno** costa una frazione della sera.',
    comeArrivare:
      'Alta velocità da Parigi in circa due ore. Aeroporto di **Bordeaux-Mérignac** collegato al centro. Per i vigneti **serve l\'auto**, con l\'avvertenza pesante che segue.',
    comeSpostarsi:
      'In città, tram e bici. Per i vigneti serve l\'auto, e qui c\'è il problema centrale di un viaggio del vino: **i controlli sull\'alcol alla guida in Francia sono frequenti e il limite è basso** — più basso che in Italia per i neopatentati, e con sanzioni pesanti. Le soluzioni reali sono tre: **un guidatore designato che non assaggia**, le **escursioni accompagnate in giornata** che partono da Bordeaux, oppure **sputare durante le degustazioni**, che è la prassi normale e non un\'offesa: nelle cantine serie c\'è sempre la sputacchiera ed è il comportamento atteso.',
    periodoMigliore:
      '**da maggio a ottobre**, con **settembre e ottobre** come periodo migliore per via della vendemmia. Da metà settembre le cantine sono in piena attività e alcune riducono le visite perché stanno lavorando: **va verificato prima**. Luglio e agosto sono caldi e la costa è satura. L\'inverno è tranquillo e molte proprietà chiudono le visite.',
    costi:
      'La città è nella media francese; le degustazioni vanno da gratuite a molto care a seconda del livello della proprietà. La differenza vera è tra le **cantine che ricevono senza appuntamento** nelle denominazioni minori, dove si spende poco, e i **grand cru classé**, dove la visita è un prodotto a sé con prezzi importanti e prenotazione obbligatoria.',
    erroriDaEvitare: [
      '**Presentarsi ai grandi château senza appuntamento.** I nomi noti si prenotano con settimane di anticipo e molti non ricevono affatto il pubblico',
      'Guidare dopo aver assaggiato. Sputare è la norma, e chi non vuole farlo organizzi un\'escursione accompagnata',
      'Fare solo i grandi nomi: le denominazioni satellite intorno a Saint-Émilion e le zone meno classificate offrono visite più vere e costano una frazione',
      'Andare a Saint-Émilion solo per la degustazione: **la chiesa monolitica e le catacombe si visitano soltanto con accompagnamento prenotato tramite l\'ufficio del turismo**, e sono il motivo per cui il paese è patrimonio UNESCO',
      'Sottovalutare la Dune du Pilat: si sale su sabbia ripida e in estate la sabbia scotta davvero',
      'Fare il bagno nell\'oceano senza informarsi: **le correnti di risacca sulla costa atlantica sono pericolose** e le spiagge sorvegliate hanno un perimetro segnalato che va rispettato',
    ],
    confronti: [
      {
        titolo: 'Riva sinistra o riva destra: quale Bordeaux',
        introduzione:
          'Il vigneto bordolese è diviso dalla Garonna e dalla Dordogna in due mondi con suoli diversi, vitigni diversi, paesaggi diversi e modi diversi di ricevere il visitatore. Chi ha pochi giorni deve sceglierne uno.',
        opzioni: [
          {
            nome: 'Riva sinistra: il Médoc',
            sintesi: 'Suoli di ghiaia, Cabernet Sauvignon dominante, i castelli-azienda della classificazione del 1855 allineati lungo una sola strada.',
            costo: 'da alto a altissimo per le visite ai cru classati',
            durata: '1-2 giorni',
            pro: [
              'È la storia del vino come sistema economico: la **classificazione del 1855**, ordinata per l\'Esposizione Universale sulla base dei prezzi di mercato, è ancora oggi quasi immutata',
              'I castelli sono architetture di rappresentanza, e vederli in fila lungo la strada è uno spettacolo a sé',
              'Le cantine sono organizzate per ricevere: visite strutturate, spesso in più lingue',
            ],
            contro: [
              'Il paesaggio è piatto e ripetitivo: chi si aspetta colline resta deluso',
              'Le visite ai grandi nomi costano care e vanno prenotate con largo anticipo',
              'Poca vita nei paesi: si visita e si torna a Bordeaux',
            ],
            perChi: 'Chi è interessato al vino come sistema, ai grandi rossi da invecchiamento e alla storia delle classificazioni.',
          },
          {
            nome: 'Riva destra: Saint-Émilion e Pomerol',
            sintesi: 'Argilla e calcare, Merlot dominante, colline vere, e un borgo medievale patrimonio UNESCO costruito sopra una rete di gallerie.',
            costo: 'medio-alto, con molte proprietà piccole accessibili',
            durata: '1-2 giorni',
            pro: [
              '**Saint-Émilion è un paese bellissimo**, e la visita non è solo enologica: la chiesa monolitica scavata nella roccia è unica in Europa per dimensioni',
              'Il paesaggio è collinare e molto più fotogenico del Médoc',
              'Ci sono centinaia di piccole proprietà che ricevono, spesso con visite più personali e meno costose',
              'Pomerol, minuscola, produce alcuni dei vini più cari al mondo su pochi ettari, e ci si passa in mezzo in auto',
            ],
            contro: [
              'Saint-Émilion in alta stagione è molto affollata nelle ore centrali',
              'I parcheggi in paese sono limitati e a pagamento',
            ],
            perChi: 'Chi ha un solo giorno, chi vuole unire vino e visita di un luogo, chi preferisce i rossi più morbidi. È la scelta consigliata alla prima volta.',
          },
          {
            nome: 'Graves e Sauternes',
            sintesi: 'A sud della città: i rossi e i bianchi secchi dei Graves e, più giù, il Sauternes con i vini dolci da muffa nobile.',
            costo: 'medio, con alcune eccezioni molto alte',
            durata: 'una giornata',
            pro: [
              'Il **Sauternes** è la storia enologica più affascinante di tutta la regione: **le nebbie mattutine di un affluente freddo che incontra un fiume più caldo creano le condizioni per la Botrytis cinerea**, la muffa nobile, che concentra gli zuccheri negli acini. La vendemmia si fa **a mano e a passaggi successivi**, acino per acino, raccogliendo solo quelli al punto giusto',
              'Le rese sono bassissime: si dice che da una vite esca un bicchiere',
              'Molto meno visitato del Médoc e di Saint-Émilion',
              'I Graves comprendono l\'unico château classificato nel 1855 fuori dal Médoc, alle porte della città',
            ],
            contro: [
              'Il vino dolce ha un pubblico più ristretto, e chi non lo ama trova poco altro',
              'Le proprietà sono sparse e serve l\'auto',
            ],
            perChi: 'Chi ha almeno tre giorni di vigneti, chi si interessa alla viticoltura più che alle etichette.',
          },
          {
            nome: 'Bordeaux città e il Bacino di Arcachon',
            sintesi: 'La versione senza vigneti: la città settecentesca, la Cité du Vin, e un\'ora di treno fino all\'oceano, alle ostriche e alla duna.',
            costo: 'medio',
            durata: '2-3 giorni',
            pro: [
              'Bordeaux si gira a piedi e in tram, è una delle città più belle di Francia e non richiede auto',
              'La **Cité du Vin** spiega il vino del mondo intero, non solo quello locale, e risolve il problema di chi non guida',
              'La **Dune du Pilat** e il Bacino di Arcachon sono raggiungibili in treno e sono una giornata completamente diversa',
              'Le **ostriche mangiate nelle cabanes dei produttori**, sedendosi sul pontile, costano poco e sono il pasto migliore della zona',
            ],
            contro: [
              'Non è un viaggio del vino: si vede il prodotto, non il territorio',
            ],
            perChi: 'Chi non guida, chi viaggia con chi non beve, chi ha un fine settimana.',
          },
        ],
        raccomandazione:
          'Su una settimana: **due notti a Bordeaux città**, **una giornata a Saint-Émilion** con la chiesa monolitica prenotata, **una giornata nel Médoc** con due château su appuntamento, **una nel Sauternes**, e **due giorni sul Bacino di Arcachon** per chiudere con l\'oceano. Chi ha tre giorni faccia città e Saint-Émilion, e lasci perdere il resto.',
      },
    ],
    miaEsperienza:
      'Bordeaux mette d\'accordo due cose che di solito non stanno insieme: è una città che si gira a piedi e un territorio che senza auto non si vede. La prima sorpresa è la città stessa, che ha una reputazione da posto serio e noioso e invece è uno degli insiemi urbani più belli di Francia — chilometri di facciate settecentesche della stessa pietra chiara, tenute pulite, con una vita studentesca che le impedisce di diventare un museo. La seconda è quanto poco il vigneto assomigli all\'immagine che se ne ha: nel Médoc non ci sono colline, è una pianura di ghiaia con i castelli in fila lungo una strada, e la bellezza sta nel capire cosa significhi quella ghiaia — drena, scalda, e fa sì che una vite a duecento metri di distanza produca un vino che vale dieci volte l\'altro. La terza cosa, quella che resta, è il Sauternes. Si arriva in una proprietà a settembre, ci mostrano i grappoli e sono orribili: acini raggrinziti, coperti di muffa grigia, che qualunque agricoltore normale butterebbe. E invece è esattamente quello che si aspettava tutto l\'anno, e la squadra passa nello stesso filare cinque o sei volte in settimane diverse per raccogliere solo gli acini arrivati al punto. È una delle cose più controintuitive dell\'agricoltura europea, e va vista sul posto per crederci.',
    esperienzeSlugs: ['saint-emilion', 'sauternes-muffa-nobile', 'dune-du-pilat', 'ostriche-arcachon'],
    tripSlugs: ['bordeaux-e-vigneti'],
    imageAlt: 'Il Miroir d\'eau di Bordeaux che riflette la facciata settecentesca di Place de la Bourse',
  },
  {
    slug: 'vigneti-di-francia',
    paeseSlug: 'francia',
    ordine: 7,
    nome: 'Le rotte dei vini',
    tipologia: ['vino', 'paesaggi', 'gastronomia'],
    giorniConsigliati: '4-5 giorni per regione, 12-14 per una rotta lunga',
    visitataPersonalmente: true,
    introduzione:
      'La Francia ha inventato il concetto stesso di **terroir** — l\'idea che un vino debba dire da quale pezzo di terra viene, e che quel pezzo possa essere grande due ettari — e ha costruito su quell\'idea un sistema di denominazioni che il resto del mondo ha copiato. Questa sezione non è un elenco di regioni: è una guida a sceglierne una, perché Champagne, Borgogna, Alsazia e Rodano hanno paesaggi, prezzi, accessibilità e modi di ricevere completamente diversi.',
    percheAndarci:
      'Perché in Borgogna un muro a secco separa due parcelle che producono vini che costano dieci volte l\'uno l\'altro, e andare a vedere quel muro è l\'unico modo di credere davvero al terroir. E perché in Champagne si scende in gallerie scavate dai Romani per estrarre il gesso e riusate duemila anni dopo per far maturare il vino.',
    cosaVedere: [
      '**Champagne**: Reims con la cattedrale delle incoronazioni e le vetrate di Chagall, l\'**Avenue de Champagne** a Épernay con chilometri di gallerie sotto la strada, le **crayères** — cave di gesso di epoca gallo-romana usate come cantine — e le colline patrimonio UNESCO dal 2015',
      '**Borgogna**: la Côte de Nuits e la Côte de Beaune, con i **climats** iscritti all\'UNESCO nel 2015 — oltre milleduecento parcelle delimitate e nominate, alcune grandi pochi ettari; l\'**Hôtel-Dieu di Beaune** con il tetto di tegole policrome e l\'asta dei vini in novembre; il **Clos de Vougeot**',
      '**Alsazia**: la Route des Vins per circa centosettanta chilometri tra i Vosgi e la pianura, con **Colmar**, **Riquewihr**, **Eguisheim** e **Kaysersberg**, e il **Museo Unterlinden** a Colmar con il polittico di Issenheim',
      '**Valle del Rodano**: a nord i pendii terrazzati di **Côte-Rôtie** e **Hermitage**, tra i più ripidi d\'Europa; a sud **Châteauneuf-du-Pape** con i suoi **galets roulés**, i ciottoli tondi che accumulano calore di giorno e lo restituiscono di notte',
      '**Il Giura**, minuscolo e fuori da ogni circuito, con il **vin jaune** che matura sei anni e tre mesi in botte sotto un velo di lieviti, senza rabbocco',
    ],
    cosaFare: [
      'Scendere in una **cantina di Champagne** scavata nel gesso e vedere il rémuage — vedi la scheda esperienza dedicata',
      'Percorrere la **Route des Vins d\'Alsace** fermandosi nei villaggi — vedi la scheda esperienza dedicata',
      'Camminare i **climats della Côte de Nuits** a piedi tra i muri a secco, che è gratis e vale una degustazione',
      'Vedere le **terrazze della Côte-Rôtie**, dove si vendemmia su pendenze che richiedono verricelli',
      'Andare in **vendemmia**, tra fine agosto e ottobre, quando le cantine sono al lavoro e si capisce cosa succede davvero',
    ],
    doveDormire:
      'Ogni regione ha la sua logica. In **Champagne**, Reims o Épernay; in **Borgogna**, **Beaune** è la base perfetta perché sta al centro della Côte; in **Alsazia**, Colmar o uno dei villaggi della Route des Vins; nel **Rodano**, Avignone o Valence a seconda del versante. Un\'opzione trasversale sono le **chambres d\'hôtes nelle proprietà vinicole**, che costano meno degli alberghi e spesso includono una degustazione.',
    doveMangiare:
      'Ogni regione ha una cucina costruita attorno ai suoi vini. In **Borgogna**: boeuf bourguignon, oeufs en meurette, jambon persillé, escargots, e i formaggi Époisses e Cîteaux. In **Alsazia**: choucroute, baeckeoffe, **tarte flambée** (una sfoglia sottilissima con panna acida, cipolla e lardo, cotta nel forno a legna), kougelhopf, bretzel. In **Champagne**: il jambon de Reims e i biscotti rosa da inzuppare nel vino. Nel **Rodano**: la cucina lionese a nord (quenelle, andouillette, bouchons) e quella provenzale a sud.',
    comeArrivare:
      'Reims è a quarantacinque minuti da Parigi in alta velocità, ed è la rotta del vino più facile da raggiungere senza auto. Digione e Beaune sono a un\'ora e mezza-due ore. Strasburgo e Colmar due ore. Per il Rodano si arriva a Lione, Valence o Avignone. **Per muoversi tra le cantine serve comunque l\'auto**, salvo in Champagne e in Alsazia dove esistono alternative.',
    comeSpostarsi:
      '**Auto, con un guidatore che non assaggia**, oppure **escursioni accompagnate in giornata**, che in tutte queste regioni esistono e risolvono il problema. Due alternative che funzionano davvero: in **Alsazia** la Route des Vins si fa benissimo **in bicicletta**, perché i villaggi distano pochi chilometri e c\'è una rete ciclabile; in **Borgogna** esiste una ciclabile lungo la Côte che collega i paesi del vigneto. **Sputare durante le degustazioni è la norma professionale e non un\'offesa.**',
    periodoMigliore:
      '**settembre e ottobre**, per la vendemmia e i colori. Da sapere: **durante la vendemmia molte proprietà sospendono o riducono le visite** perché stanno lavorando, e va verificato prima. **Maggio e giugno** sono ottimi per il paesaggio e più facili per le prenotazioni. L\'**Alsazia a dicembre** è un caso a sé, con i mercatini di Natale — quello di Strasburgo è il più antico di Francia — che riempiono i villaggi e fanno salire i prezzi.',
    costi:
      'Molto variabili. In Champagne e in Borgogna le visite alle grandi maison e ai domaine più noti sono care e vanno prenotate; nelle denominazioni minori e presso i piccoli produttori si spende poco o niente. **La Borgogna è la regione più difficile e più cara di tutte**: molti domaine non ricevono il pubblico e quelli che lo fanno chiedono un contatto preventivo.',
    erroriDaEvitare: [
      '**Presentarsi senza appuntamento.** In Francia le cantine non sono negozi: la visita si concorda, e in Borgogna spesso non si ottiene affatto',
      'Andare in vendemmia senza verificare: è il periodo più bello e quello in cui molti produttori non ricevono',
      'Guidare dopo le degustazioni. Sputare è la prassi; in alternativa, guidatore designato o escursione accompagnata',
      'Trattare la Borgogna come Bordeaux: qui le proprietà sono minuscole, spesso a conduzione familiare, e la scala è completamente diversa',
      'Comprare in cantina pensando di risparmiare: sui grandi nomi il prezzo in cantina non è quasi mai più basso',
      'Ignorare le denominazioni minori, che sono dove si beve meglio in rapporto al prezzo e dove si viene ricevuti meglio',
    ],
    confronti: [
      {
        titolo: 'Quale regione vinicola francese scegliere',
        introduzione:
          'Non sono varianti dello stesso viaggio. Cambiano il paesaggio, l\'accessibilità delle cantine, il costo, la difficoltà di prenotare e perfino la lingua che si sente nei paesi. Ecco come si dividono davvero, per chi deve sceglierne una.',
        opzioni: [
          {
            nome: 'Champagne',
            sintesi: 'Colline UNESCO a quarantacinque minuti da Parigi, con chilometri di gallerie scavate nel gesso sotto le città e le grandi maison organizzate per ricevere.',
            costo: 'medio-alto per le visite alle grandi maison, basso dai piccoli vignaioli',
            durata: '2-3 giorni',
            pro: [
              'La più facile di tutte da raggiungere e da organizzare: si fa anche in giornata da Parigi',
              'Le **crayères**, cave di gesso gallo-romane profonde decine di metri riusate come cantine, sono spazi che valgono la visita a prescindere dal vino',
              'Il processo è affascinante da vedere: seconda fermentazione in bottiglia, rémuage, sboccatura',
              'Le maison sono attrezzate per il pubblico, con visite in più lingue e orari certi',
              'Reims ha una cattedrale gotica di primo livello, dove sono stati incoronati i re di Francia',
            ],
            contro: [
              'È la regione più "industriale" nel modo di ricevere: la visita alle grandi case è un prodotto ben confezionato',
              'Il paesaggio è bello ma meno spettacolare di Alsazia e Borgogna',
              'Prezzi alti, senza vie di mezzo tra la grande maison e il piccolo vignaiolo',
            ],
            perChi: 'Chi ha pochi giorni, chi parte da Parigi, chi vuole capire un metodo di produzione.',
          },
          {
            nome: 'Borgogna',
            sintesi: 'La regione che ha inventato l\'idea di parcella: oltre milleduecento **climats** delimitati e nominati, patrimonio UNESCO, su una striscia di colline lunga una sessantina di chilometri.',
            costo: 'alto, e i vini sono tra i più cari del mondo',
            durata: '3-4 giorni',
            pro: [
              'È il posto in cui il concetto di terroir si tocca con mano: **due parcelle separate da un muro a secco producono vini di prezzo incomparabile**, e ci si può camminare in mezzo gratis',
              'L\'**Hôtel-Dieu di Beaune**, ospedale per i poveri del Quattrocento con il tetto di tegole smaltate, è uno dei monumenti più belli di Francia',
              'La ciclabile lungo la Côte permette di attraversare i grandi cru in bicicletta',
              'La cucina borgognona è una delle più solide del paese',
            ],
            contro: [
              '**La più difficile in assoluto da visitare**: la maggior parte dei domaine è piccolissima, non ha una struttura per il pubblico e non riceve senza contatto preventivo',
              'I prezzi dei vini sono fuori scala e le degustazioni spesso deludono chi si aspettava di assaggiare i nomi noti',
              'Il paesaggio è dolce ma monotono per chi cerca scenografia',
            ],
            perChi: 'Chi il vino lo conosce già e viene per capire, non per assaggiare a caso. Non è la prima rotta del vino da fare.',
          },
          {
            nome: 'Alsazia',
            sintesi: 'Centosettanta chilometri di strada dei vini tra i Vosgi e la pianura, con villaggi a case a graticcio, gerani alle finestre e una cultura a metà tra Francia e Germania.',
            costo: 'il più basso delle grandi regioni vinicole',
            durata: '3-5 giorni',
            pro: [
              '**È la più bella da attraversare**: i villaggi sono di una scenografia quasi eccessiva, e sono veri, non ricostruiti',
              'Le cantine ricevono facilmente, spesso senza appuntamento, e le degustazioni sono gratuite o quasi',
              'Si fa **in bicicletta**: i paesi distano pochi chilometri e la rete ciclabile è ottima',
              'I bianchi — Riesling, Gewurztraminer, Pinot Gris, Muscat — sono tra i più interessanti d\'Europa e costano poco',
              'Cultura, cucina e lingua propria: qui si parla ancora l\'alsaziano, e i cartelli sono bilingui',
            ],
            contro: [
              'Alcuni villaggi (Riquewihr su tutti) sono saturi di turisti nelle ore centrali',
              'A dicembre, con i mercatini di Natale, i prezzi salgono e i paesi sono pieni',
              'Chi cerca grandi rossi non troverà nulla: è terra di bianchi',
            ],
            perChi: 'Chi va per la prima volta in una regione vinicola francese, chi viaggia in famiglia, chi ha un budget. **È la scelta consigliata a chi non sa da dove cominciare.**',
          },
          {
            nome: 'Valle del Rodano',
            sintesi: 'Due regioni in una: a nord pendii terrazzati vertiginosi di Syrah, a sud un altopiano di ciottoli con Châteauneuf-du-Pape e il mistral.',
            costo: 'medio, con ampie fasce accessibili',
            durata: '3-4 giorni',
            pro: [
              'Il **Rodano settentrionale** ha i vigneti più scenografici di Francia: terrazze a secco su pendenze tali che la vendemmia si fa con verricelli',
              'Il **Rodano meridionale** è a portata da Avignone e si unisce facilmente alla Provenza',
              'I **galets roulés** di Châteauneuf-du-Pape — un campo di ciottoli tondi in cui sembra impossibile che cresca qualcosa — sono una lezione di viticoltura a occhio nudo',
              'Molto più accessibile della Borgogna e meno caro di Bordeaux',
            ],
            contro: [
              'Il nord e il sud sono lontani: fare entrambi richiede spostamenti veri',
              'Il mistral può soffiare per giorni e cambia la percezione del viaggio',
            ],
            perChi: 'Chi combina il vino con la Provenza, chi ama i rossi strutturati, chi vuole paesaggi vertiginosi.',
          },
          {
            nome: 'Loira',
            sintesi: 'La regione vinicola più varia di Francia, distribuita per centinaia di chilometri lungo il fiume, con le cantine scavate nel tufo e i castelli a fianco.',
            costo: 'basso',
            durata: 'si unisce ai castelli',
            pro: [
              'Enorme varietà: bianchi secchi, dolci, rossi leggeri e spumanti nella stessa valle',
              'Le **cantine trogloditiche** scavate nella stessa roccia con cui sono stati costruiti i castelli',
              'Costi bassi e accoglienza semplice',
              'Si combina naturalmente con i castelli: è lo stesso viaggio',
            ],
            contro: [
              'Dispersa su centinaia di chilometri: non esiste una "rotta" compatta',
              'Nessuna denominazione ha il peso simbolico di Champagne o Borgogna',
            ],
            perChi: 'Chi va in Loira per i castelli e vuole aggiungere il vino senza organizzare un viaggio a parte.',
          },
          {
            nome: 'Bordeaux',
            sintesi: 'Il vigneto a denominazione più esteso di Francia, con la gerarchia del 1855 e i castelli-azienda. Ha una scheda dedicata in questo archivio.',
            costo: 'da medio a molto alto',
            durata: '4-6 giorni',
            pro: [
              'La storia del vino come sistema economico e finanziario, che non si capisce altrove',
              'Bordeaux città è una delle più belle di Francia e non richiede auto',
              'Saint-Émilion unisce vino e patrimonio UNESCO',
            ],
            contro: [
              'Le grandi proprietà sono care e vanno prenotate con largo anticipo',
              'Il paesaggio del Médoc è piatto e ripetitivo',
            ],
            perChi: 'Chi si interessa ai grandi rossi da invecchiamento e al vino come mercato.',
          },
        ],
        raccomandazione:
          '**Alsazia** alla prima volta: è la più bella, la più economica, la più facile da visitare senza appuntamenti e si fa in bicicletta. **Champagne** se si hanno due giorni e si parte da Parigi. **Borgogna** solo quando si sa già cosa si sta cercando, e avendo scritto ai domaine con settimane di anticipo. **Bordeaux** se interessa il vino come sistema e non solo come bevanda.',
      },
    ],
    miaEsperienza:
      'La cosa che cambia il modo di guardare il vino francese non succede in una cantina: succede camminando. In Borgogna, lungo la Côte de Nuits, c\'è un sentiero che passa tra i vigneti e attraversa i grandi cru uno dopo l\'altro, con i cartelli di pietra all\'angolo di ogni parcella. Si cammina venti minuti e si passa da una denominazione regionale a un grand cru che vale cento volte tanto, e in mezzo c\'è un muro a secco alto un metro. Il terreno da un lato e dall\'altro sembra identico. Non lo è — cambia la pendenza, il drenaggio, l\'esposizione al sole del mattino — ma la differenza è talmente sottile da essere invisibile, e l\'unica cosa che la registra è il vino. È un\'idea che in Italia esiste ma non è mai stata codificata così, e vederla disegnata sul terreno con i muretti è la cosa più istruttiva di tutto il viaggio. L\'altra scoperta è che le regioni si comportano in modo opposto con chi arriva. In Alsazia si entra in cantina, si viene accolti, si assaggia sei vini, si paga poco o niente e si chiacchiera. In Borgogna la stessa richiesta, senza un contatto preso settimane prima, riceve un no gentile — perché il produttore ha diecimila bottiglie l\'anno, sono già tutte vendute, e ricevere visitatori non è il suo lavoro. Saperlo prima evita di prendere per scortesia quella che è semplicemente una scala diversa.',
    esperienzeSlugs: ['cantina-champagne', 'route-des-vins-alsazia', 'climats-borgogna'],
    tripSlugs: ['rotte-dei-vini-francia'],
    imageAlt: 'Le colline dei vigneti della Côte de Nuits in Borgogna con i muri a secco che delimitano i climats',
  },
  {
    slug: 'provenza',
    paeseSlug: 'francia',
    ordine: 8,
    nome: 'Provenza',
    tipologia: ['paesaggi', 'borghi', 'archeologia'],
    giorniConsigliati: '6-8 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La regione che nell\'immaginario collettivo coincide con due settimane di lavanda in fiore, e che in realtà è un territorio enorme con il canyon più profondo d\'Europa, la più alta concentrazione di monumenti romani fuori dall\'Italia, un parco nazionale di falesie calcaree sul mare e una montagna dipinta ottanta volte dallo stesso pittore.',
    percheAndarci:
      'Perché è il posto dove la luce ha cambiato la storia della pittura — Cézanne, Van Gogh, i fauve — e ci si accorge subito del perché: il mistral pulisce l\'aria e i colori diventano innaturalmente saturi. E perché a un\'ora di distanza l\'una dall\'altra ci sono un acquedotto romano alto quasi cinquanta metri e una gola in cui l\'acqua è verde smeraldo tra pareti di settecento metri.',
    cosaVedere: [
      'Le **Gole del Verdon**, il canyon più profondo d\'Europa, con il lago di Sainte-Croix all\'uscita e la strada panoramica sul bordo',
      'Il **Luberon** con i villaggi arroccati — **Gordes**, **Roussillon** con le cave di ocra e il sentiero tra le terre rosse, Ménerbes, Bonnieux, Lacoste',
      'L\'**altopiano di Valensole** e quello di **Sault**, i due grandi paesaggi di lavanda, che fioriscono e si tagliano in periodi diversi',
      '**Avignone** con il **Palazzo dei Papi**, il più grande palazzo gotico del mondo, e il ponte rimasto a metà',
      '**Arles** con l\'**anfiteatro romano ancora in uso**, gli Alyscamps e i luoghi di Van Gogh — con l\'avvertenza che **in città non c\'è nessun quadro di Van Gogh**',
      '**Nîmes** con l\'**arena romana meglio conservata al mondo** e la **Maison Carrée**, iscritta all\'UNESCO nel 2023',
      'Il **Pont du Gard**, patrimonio UNESCO: tre ordini di arcate, quasi cinquanta metri di altezza, parte di un acquedotto di circa cinquanta chilometri con una **pendenza media di circa venticinque centimetri al chilometro**',
      '**Aix-en-Provence** con il Cours Mirabeau, l\'atelier di **Cézanne** e la **Montagne Sainte-Victoire**, che ha dipinto decine di volte',
      '**Marsiglia** con il Vieux-Port, il MuCEM, Le Panier, e il **Parco Nazionale delle Calanques** — falesie calcaree e insenature tra la città e Cassis',
    ],
    cosaFare: [
      'Vedere la **lavanda nel periodo e nel posto giusti**, che è una finestra molto più stretta di quanto si creda — vedi la scheda esperienza dedicata',
      'Percorrere le **Gole del Verdon**, a piedi sul fondo o in kayak dal lago — vedi la scheda esperienza dedicata',
      'Entrare nelle **Calanques** da Marsiglia o da Cassis, via mare o a piedi — vedi la scheda esperienza dedicata',
      'Attraversare il **Pont du Gard** e fare il bagno nel fiume sotto le arcate',
      'Salire sul **Mont Ventoux**, il "gigante di Provenza", la salita più famosa del ciclismo francese, in bici o in auto',
      'Andare a un **mercato provenzale** il giorno giusto: ogni paese ha il suo, e sono la cosa più vera della regione',
    ],
    doveDormire:
      'La Provenza è grande e si fa con due basi, non con una. **Avignone o Saint-Rémy** per la parte occidentale — papi, romani, Alpilles, Camargue; **Gordes, Bonnieux o Apt** per il Luberon; **Moustiers-Sainte-Marie** per il Verdon; **Cassis** per le Calanques. Marsiglia è una città vera e una base ottima per chi non vuole guidare. I prezzi in luglio e agosto salgono molto, soprattutto nel Luberon.',
    doveMangiare:
      'Cucina di verdure, olio e erbe: **ratatouille**, **tapenade**, **anchoïade**, **pissaladière**, **daube** di manzo al vino, **pieds et paquets** a Marsiglia, e la **bouillabaisse**, che nella versione vera è un piatto di pescatori con pesci di scoglio e rascasse, servito in due tempi — prima il brodo con la rouille e i crostini, poi il pesce — e che ha un prezzo alto per una ragione: se costa poco, non lo è. I mercati sono pieni di **meloni di Cavaillon**, **olive**, **formaggi di capra**, **miele di lavanda** e **erbe di Provenza**. Da bere, i rosé della Provenza e i rossi del Rodano meridionale.',
    comeArrivare:
      'Alta velocità da Parigi ad Avignone in poco più di due ore e a Marsiglia in circa tre. Aeroporti a Marsiglia e Nîmes, più Nizza a est. **Per tutto quello che non è una città serve l\'auto.**',
    comeSpostarsi:
      '**Auto**, con due avvertenze. La prima: **Marsiglia, Aix e altre città hanno zone a basse emissioni e richiedono la vignetta Crit\'Air**, da ordinare online settimane prima. La seconda: nei villaggi del Luberon e a Moustiers **i parcheggi sono pochi, a pagamento e pieni entro metà mattina** in alta stagione.',
    periodoMigliore:
      '**maggio-giugno e settembre-ottobre**, con un\'eccezione importante: chi viene **per la lavanda** ha una finestra che va indicativamente **da metà giugno a inizio agosto**, diversa da altopiano ad altopiano, e **il taglio avviene subito dopo la fioritura**. Arrivare una settimana tardi significa trovare i campi già tagliati. Luglio e agosto sono caldissimi, affollati e costosi, e il **Festival di Avignone in luglio** rende la città impraticabile per chi non ci va apposta. Il **mistral** può soffiare in qualunque stagione per giorni consecutivi.',
    costi:
      'Media francese, con il Luberon e le Calanques sopra la media in alta stagione. Molte delle cose migliori sono gratuite o quasi: i villaggi, i mercati, i sentieri, i campi di lavanda. Il Pont du Gard si paga come parcheggio più museo; i monumenti romani di Arles e Nîmes hanno biglietti cumulativi convenienti.',
    erroriDaEvitare: [
      '**Venire per la lavanda nel periodo sbagliato.** È l\'errore più frequente in assoluto: le finestre di fioritura sono brevi e diverse tra Valensole e Sault, e dopo il taglio non c\'è più niente da vedere',
      'Entrare nei campi di lavanda per le fotografie: sono **coltivazioni private**, e nel caso dell\'abbazia più fotografata della regione i religiosi hanno chiesto esplicitamente di non farlo',
      '**Non verificare l\'accesso alle Calanques d\'estate**: per rischio incendio il parco applica una **valutazione giornaliera del rischio con chiusure decise il giorno prima**, e alcune calanque hanno **accesso a numero chiuso con prenotazione gratuita obbligatoria**',
      'Andare ad Arles aspettandosi di vedere i quadri di Van Gogh: non ce n\'è nessuno in città',
      'Arrivare a Gordes o a Moustiers a mezzogiorno in agosto e cercare parcheggio',
      'Sottovalutare il caldo: in luglio l\'interno provenzale supera regolarmente i trentacinque gradi e i sentieri vanno fatti all\'alba',
      'Entrare in una ZTL urbana senza la vignetta Crit\'Air',
    ],
    confronti: [
      {
        titolo: 'La lavanda: dove e quando, davvero',
        introduzione:
          'È il motivo principale per cui molte persone vanno in Provenza, ed è anche la cosa che più spesso va storta. La ragione è che "lavanda" indica due piante diverse, coltivate a quote diverse, che fioriscono in momenti diversi e si tagliano presto. Chi prenota ad agosto pensando di trovare i campi viola quasi sempre arriva dopo la mietitura.',
        opzioni: [
          {
            nome: 'Altopiano di Valensole — lavandino',
            sintesi: 'I campi larghissimi e regolari delle fotografie, a quota relativamente bassa, coltivati a lavandino: un ibrido più produttivo, dal colore più intenso e dai filari più fitti.',
            costo: 'gratuito (sono campi privati visibili dalla strada)',
            durata: 'fioritura indicativamente da metà giugno a metà luglio, con taglio subito dopo',
            pro: [
              'È il paesaggio che tutti hanno in mente: filari che arrivano all\'orizzonte, colore pieno',
              'Facile da raggiungere, vicino al Verdon: si unisce naturalmente al canyon',
              'Fiorisce presto, quindi è la scelta giusta per chi viene a giugno',
            ],
            contro: [
              '**Viene tagliato presto**, spesso già entro la metà di luglio: chi arriva a fine luglio trova stoppie',
              'È affollatissimo nelle due settimane di picco, con file di auto lungo le strade',
              'Il lavandino ha un profumo meno fine della lavanda vera',
            ],
            perChi: 'Chi viene tra metà giugno e i primi giorni di luglio e vuole l\'immagine classica.',
          },
          {
            nome: 'Altopiano di Sault — lavanda vera',
            sintesi: 'Sopra gli ottocento metri, dove cresce la lavanda fine, in campi più piccoli e irregolari ai piedi del Mont Ventoux.',
            costo: 'gratuito',
            durata: 'fioritura più tardiva, indicativamente da metà luglio a inizio agosto',
            pro: [
              '**Fiorisce più tardi**: è la risposta giusta per chi può venire solo a fine luglio',
              'La lavanda vera ha il profumo migliore ed è quella usata in profumeria',
              'Molto meno affollato di Valensole',
              'Il paesaggio è più vario, con il Ventoux sullo sfondo',
            ],
            contro: [
              'I campi sono più piccoli e meno spettacolari nelle fotografie',
              'Più decentrato rispetto agli altri punti della Provenza',
            ],
            perChi: 'Chi viaggia nella seconda metà di luglio, chi cerca il profumo e non la fotografia.',
          },
          {
            nome: 'L\'abbazia cistercense del Luberon',
            sintesi: 'L\'immagine più riprodotta della Provenza: un\'abbazia romanica del XII secolo con un campo di lavanda davanti.',
            costo: 'gratuito dall\'esterno; visita dell\'abbazia a pagamento e su prenotazione',
            durata: 'fioritura indicativamente da fine giugno a metà luglio',
            pro: [
              'L\'accostamento tra architettura romanica nuda e il campo viola è effettivamente straordinario',
              'L\'abbazia è una comunità monastica attiva e la visita è di per sé interessante',
            ],
            contro: [
              '**È il punto più affollato di tutta la Provenza nel periodo di fioritura**, con parcheggi saturi e file',
              '**I monaci hanno chiesto esplicitamente di non entrare nel campo**, e il rispetto di questa richiesta è il minimo',
              'La visita interna è contingentata e va prenotata',
            ],
            perChi: 'Chi ci arriva presto al mattino e accetta di fotografare dal bordo.',
          },
          {
            nome: 'Rinunciare alla lavanda',
            sintesi: 'Venire in Provenza a maggio, a settembre o in ottobre, quando non c\'è lavanda ma ci sono tutto il resto e nessuna folla.',
            costo: 'sensibilmente più basso',
            durata: 'tutta la stagione',
            pro: [
              'Il Verdon, le Calanques, i romani, i villaggi e i mercati ci sono tutto l\'anno, e in settembre sono vuoti',
              'Le temperature sono sopportabili: in luglio i sentieri si camminano solo all\'alba',
              'Gli alloggi costano molto meno',
              'A settembre c\'è la vendemmia nel Rodano meridionale',
            ],
            contro: [
              'Niente campi viola, che per molti è la ragione del viaggio',
            ],
            perChi: 'Chi torna, chi viaggia con il caldo come problema, chi vuole vedere la Provenza e non una fotografia.',
          },
        ],
        raccomandazione:
          'Chi vuole la lavanda pianifichi **fine giugno-inizio luglio su Valensole** oppure **metà-fine luglio su Sault**, e **verifichi lo stato della fioritura pochi giorni prima di partire**, perché varia di anno in anno con l\'andamento stagionale. Chi non ha quel vincolo venga in **settembre**: è quando la Provenza è migliore.',
      },
    ],
    miaEsperienza:
      'La Provenza ha un problema di aspettative che si risolve in un giorno, se si fa una cosa sola: uscire dal Luberon. I villaggi arroccati sono bellissimi e sono anche il punto in cui si concentra tutto — in agosto, a Gordes, si gira quaranta minuti per parcheggiare e poi si cammina in fila per una via di negozi. A un\'ora di distanza ci sono le Gole del Verdon, che sono il canyon più profondo d\'Europa e che quasi nessuno mette in programma: si cammina sul fondo, tra pareti verticali di centinaia di metri, con l\'acqua verde smeraldo che scorre accanto e dei tunnel scavati nella roccia da attraversare con la torcia. Oppure ci sono i romani: l\'arena di Nîmes è l\'anfiteatro romano meglio conservato del mondo e ci si fanno ancora gli spettacoli, e il Pont du Gard è un acquedotto che portava l\'acqua per cinquanta chilometri con una pendenza media di venticinque centimetri al chilometro, cioè un margine di errore che oggi si raggiunge con il laser. Sulla lavanda, l\'unica cosa che conta da sapere è che ha un calendario e che quel calendario non aspetta: si fiorisce e si taglia, e chi arriva ad agosto pensando ai campi viola trova stoppie e non ci crede.',
    esperienzeSlugs: ['lavanda-provenza', 'gole-verdon', 'calanques-marsiglia', 'pont-du-gard'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Un campo di lavanda in fiore sull\'altopiano di Valensole con un casolare di pietra sullo sfondo',
  },
  {
    slug: 'camargue',
    paeseSlug: 'francia',
    ordine: 9,
    nome: 'Camargue',
    tipologia: ['natura', 'fauna', 'tradizioni'],
    giorniConsigliati: '2-3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il delta del Rodano: quasi mille chilometri quadrati di lagune salmastre, risaie, saline e praterie tra i due bracci del fiume e il mare. È il più grande delta fluviale dell\'Europa occidentale, ed è un posto che non somiglia a nient\'altro in Francia — piatto fino all\'orizzonte, con l\'acqua e la terra che si confondono e una luce bassissima.',
    percheAndarci:
      'Perché è l\'unico sito di nidificazione regolare del fenicottero rosa in Francia, perché ci sono cavalli bianchi e tori neri allevati allo stato semibrado da una comunità di mandriani che esiste ancora, e perché è uno dei pochi paesaggi europei in cui si può guidare per venti chilometri senza vedere un rilievo.',
    cosaVedere: [
      'L\'**Étang de Vaccarès** e le lagune interne, il cuore della riserva',
      'I **fenicotteri rosa**, presenti tutto l\'anno e in numero maggiore in primavera ed estate, con il parco ornitologico di Pont de Gau che permette di vederli da vicino su passerelle',
      'I **cavalli camarguesi**, una razza antichissima: **nascono scuri e diventano bianchi tra i quattro e i sette anni**',
      'I **tori neri** allevati nelle *manades*, e i **gardians**, i mandriani a cavallo che li governano',
      '**Saintes-Maries-de-la-Mer**, il paese di mare con la chiesa fortificata, meta del **pellegrinaggio dei Rom e Sinti a fine maggio** per Sara la Nera',
      '**Aigues-Mortes**, la città murata fatta costruire da Luigi IX come porto d\'imbarco per le crociate, con le mura intatte e le **saline rosa** accanto',
      'Le **risaie**: la Camargue è la principale zona di coltivazione del riso in Francia',
    ],
    cosaFare: [
      'Una **passeggiata a cavallo** con i cavalli camarguesi, che è il modo tradizionale di entrare nelle zone che le strade non raggiungono — vedi la scheda esperienza dedicata',
      'Il **birdwatching** a Pont de Gau o lungo la digue à la mer, con i fenicotteri e centinaia di altre specie',
      'Percorrere la Camargue **in bicicletta**, che è piatta e ha una rete di sterrati',
      'Vedere una **course camarguaise**, che non è una corrida: **il toro non viene ucciso** e i *raseteurs* vestiti di bianco devono strappargli le coccarde dalle corna',
      'Salire sulle mura di **Aigues-Mortes** al tramonto, con le saline rosa sotto',
    ],
    doveDormire:
      '**Arles** è la base più pratica e più bella, a mezz\'ora dal cuore della Camargue e piena di storia romana. **Saintes-Maries-de-la-Mer** per stare dentro, con un\'offerta limitata e stagionale. **Aigues-Mortes** per il lato occidentale. Molte **manades** offrono alloggio in azienda: è il modo più coerente di dormire qui.',
    doveMangiare:
      'La cucina camarguese è particolare e locale: la **gardiane de taureau**, uno stufato di carne di toro al vino rosso cotto per ore e servito con il **riso di Camargue**; il **riso rosso** integrale della zona; le **telline** raccolte sulla battigia; le **anguille**; e il **sale di Camargue**, con la sua fleur de sel. Da bere i vini delle sabbie, i *vins de sable*, prodotti su suoli sabbiosi dove la fillossera non è mai arrivata.',
    comeArrivare:
      'In treno ad **Arles** o **Nîmes** e poi auto. L\'aeroporto più vicino è Marsiglia o Nîmes.',
    comeSpostarsi:
      '**Auto o bicicletta.** Le strade sono poche e dritte, e molte piste sono sterrate e chiuse al traffico. La bici funziona benissimo perché non c\'è un metro di dislivello, ma **il vento è una variabile seria**: con il mistral pedalare controvento sulla digue è durissimo.',
    periodoMigliore:
      '**aprile-maggio e settembre-ottobre.** In primavera ci sono la migrazione, i fenicotteri in piena attività e i fiori nelle praterie salmastre; in autunno la luce è migliore e non c\'è nessuno. **L\'estate ha due problemi seri: il caldo umido e le zanzare**, che in Camargue non sono un fastidio ma un fattore che determina se una serata è possibile o no. Repellente forte, maniche lunghe al tramonto.',
    costi:
      'Bassi. La riserva è in gran parte a **accesso libero**, i sentieri e le strade panoramiche sono gratuiti, il parco ornitologico e le mura di Aigues-Mortes hanno biglietti contenuti. Le passeggiate a cavallo e le visite alle manades sono la spesa principale.',
    erroriDaEvitare: [
      '**Venire in estate senza repellente.** Le zanzare della Camargue sono leggendarie per una ragione, e al tramonto rendono impraticabili le zone umide',
      'Aspettarsi paesaggi spettacolari: la Camargue è piattissima e sottile, e chi cerca panorami rimane deluso. Va guardata da vicino — uccelli, luce, orizzonte — non da lontano',
      'Confondere la **course camarguaise** con la corrida spagnola: sono due cose diverse, e nel primo caso il toro non viene ucciso. **Ad Arles e Nîmes si tengono però anche corride di tipo spagnolo** in occasione delle ferias, ed è bene sapere a cosa si sta comprando il biglietto',
      'Uscire dai sentieri nelle zone protette: gran parte della riserva è ad accesso regolamentato per proteggere la nidificazione',
      'Andare a Saintes-Maries a fine maggio senza sapere del pellegrinaggio: è un evento importante e il paese è pieno',
      'Guidare sulle piste sterrate con un\'auto bassa dopo le piogge',
    ],
    miaEsperienza:
      'La Camargue è il posto che meno somiglia al resto della Francia e quello che più facilmente delude chi ci arriva con le aspettative sbagliate. Non ci sono panorami: è piatta, l\'orizzonte è una linea continua, e da un punto qualsiasi si vedono acqua, canne e cielo. Bisogna abbassare lo sguardo. Quando lo si fa, cominciano ad apparire cose: i fenicotteri che filtrano il fango con il becco rovesciato all\'ingiù, che è una postura assurda da vedere; i cavalli bianchi in gruppo dentro l\'acqua bassa; gli aironi; e al tramonto una quantità di uccelli che si spostano tutti insieme. La seconda cosa è la gente. I gardians non sono una messa in scena per i turisti: sono mandriani che governano tori semibradi a cavallo, con un tridente, e il mestiere esiste ancora perché esiste ancora l\'allevamento. Assistere a una course camarguaise in un\'arena di paese — dove il toro non si uccide e la folla applaude l\'animale più del raseteur — è il modo più diretto di capire che qui la relazione con quegli animali è un\'altra cosa rispetto a quello che si immagina. Una nota pratica che vale più di molte altre: d\'estate, dopo il tramonto, le zanzare sono un problema serio e non una battuta.',
    esperienzeSlugs: ['camargue-a-cavallo', 'fenicotteri-camargue', 'aigues-mortes'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Fenicotteri rosa in una laguna della Camargue al tramonto con i cavalli bianchi sullo sfondo',
  },
  {
    slug: 'occitania',
    paeseSlug: 'francia',
    ordine: 10,
    nome: 'Occitania e Linguadoca',
    tipologia: ['storia', 'borghi', 'paesaggi'],
    giorniConsigliati: '5-7 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il sud che quasi nessun turista internazionale percorre: la città fortificata più grande d\'Europa, un canale del Seicento iscritto all\'UNESCO, i castelli catari arroccati su speroni impossibili, la cattedrale in mattoni più grande del mondo e un viadotto autostradale che è il ponte più alto del pianeta.',
    percheAndarci:
      'Perché è il contrappeso esatto della Provenza: stessi paesaggi mediterranei, stesso sole, un terzo dei prezzi e un decimo della gente. E perché la storia catara — una crociata bandita contro cristiani nel proprio paese — è una delle vicende più dure del medioevo europeo, e si visita camminando su rocce a mille metri.',
    cosaVedere: [
      '**Carcassonne**, la cité fortificata: cinquantadue torri, doppia cinta muraria, restaurata nell\'Ottocento da Viollet-le-Duc con criteri molto discussi — e proprio per questo un documento su cosa significasse "restaurare" nel XIX secolo',
      'Il **Canal du Midi**, patrimonio UNESCO: oltre duecento chilometri scavati nel Seicento per collegare l\'Atlantico al Mediterraneo, con i platani sulle sponde e le **scale di chiuse di Fonseranes**',
      'I **castelli catari** — Quéribus, Peyrepertuse, Montségur — arroccati su creste calcaree a centinaia di metri, ultimi rifugi di una comunità religiosa sterminata dalla crociata albigese',
      '**Albi**, con la **cattedrale di Sainte-Cécile**, la più grande chiesa in mattoni del mondo, che dall\'esterno sembra una fortezza, e il museo dedicato a **Toulouse-Lautrec**, che qui è nato',
      '**Tolosa**, la ville rose, con la basilica di Saint-Sernin, la più grande chiesa romanica conservata d\'Europa',
      '**Collioure** sulla costa catalana, il porto in cui **Matisse e Derain** hanno inventato il fauvismo in un\'estate',
      'Il **viadotto di Millau**, il ponte più alto del mondo per altezza dei piloni, e le **Gorges du Tarn** sotto',
      'Le **Cévennes** e il **Causse**, altopiani calcarei UNESCO come paesaggio dell\'agropastorizia mediterranea',
    ],
    cosaFare: [
      'Salire a un **castello cataro**, che significa sempre mezz\'ora o un\'ora di sentiero ripido — vedi la scheda esperienza dedicata',
      'Navigare o pedalare lungo il **Canal du Midi**, che ha una ciclabile sull\'alzaia',
      'Vedere **Carcassonne di sera**, quando i pullman sono ripartiti e le mura sono illuminate',
      'Attraversare il **viadotto di Millau** e poi guardarlo dal basso, dalle gole',
      'Mangiare un **cassoulet** nella sua zona d\'origine, dove la discussione su quale città lo faccia meglio è secolare',
    ],
    doveDormire:
      '**Carcassonne** — meglio nella città bassa, molto più economica, con la cité a venti minuti a piedi. **Narbonne o Béziers** per il canale e la costa. **Albi** per il nord. **Millau** per le gole. I prezzi sono tra i più bassi del sud della Francia.',
    doveMangiare:
      'Il piatto simbolo è il **cassoulet**: fagioli bianchi, cotenna, salsiccia e confit, cotto lentamente in un recipiente di terracotta — e tre città rivendicano la ricetta corretta, con una polemica che dura da sempre. Poi il **confit de canard**, il **foie gras**, il **Roquefort**, che si affina nelle grotte del paese omonimo e si visita, e le **ostriche di Bouzigues** dallo stagno di Thau. Da bere, i vini della **Linguadoca** — la più vasta area vinicola di Francia per superficie — e il **Banyuls** dolce sulla costa catalana.',
    comeArrivare:
      'Alta velocità e treni per Tolosa, Carcassonne, Narbonne, Béziers e Montpellier. Aeroporti a Tolosa, Montpellier, Carcassonne e Perpignano. **Serve l\'auto** per i castelli catari e per le gole.',
    comeSpostarsi:
      '**Auto.** I castelli catari sono sparsi su strade di montagna lente; il canale si percorre in bici o in barca a noleggio, che è una formula molto diffusa e non richiede patente nautica.',
    periodoMigliore:
      '**maggio-giugno e settembre-ottobre.** L\'estate è molto calda nell\'interno e i castelli catari, senza ombra, diventano faticosi. La costa in agosto è affollata, ma molto meno di quella provenzale. L\'inverno è mite sulla costa e freddo sui causse.',
    costi:
      'Tra i più bassi del sud della Francia: alloggi, ristorazione e ingressi costano sensibilmente meno che in Provenza e sulla Costa Azzurra. Molti castelli catari hanno biglietti simbolici o sono gratuiti.',
    erroriDaEvitare: [
      'Fare Carcassonne solo di giorno: **nelle ore centrali la cité è un flusso continuo**, la sera è vuota e illuminata',
      'Sottovalutare i castelli catari: si arriva in auto a un parcheggio e poi **si sale a piedi**, spesso ripidamente, con vento forte in cima',
      'Andarci in luglio e agosto senza acqua e cappello: sono creste calcaree senza un albero',
      'Trattare l\'Occitania come una versione economica della Provenza: è un\'altra cosa, con una storia propria e una lingua che dà il nome alla regione',
      'Ignorare il Canal du Midi perché "è un canale": è un\'opera idraulica del Seicento con una soluzione tecnica per ogni dislivello, e percorrerlo in bici è una delle cose migliori del sud',
    ],
    miaEsperienza:
      'L\'Occitania è la risposta a una domanda che quasi nessuno si pone: dove andare nel sud della Francia quando la Provenza è piena e cara. I paesaggi sono gli stessi — calcare, vigne, cipressi, luce — i prezzi sono un terzo e i turisti quasi non ci sono. La cosa che resta però non è il risparmio, è la storia catara. Si sale a Peyrepertuse o a Quéribus, che sono castelli costruiti su creste calcaree strettissime a centinaia di metri d\'altezza, con il vento che non smette mai, e si guarda in basso una valle vuota. Lassù, nel Duecento, si è rifugiata una comunità religiosa contro cui il papato ha bandito una crociata — non contro dei musulmani, ma contro dei cristiani del proprio paese — e la campagna è durata vent\'anni ed è finita con uno sterminio. Di quella gente non è rimasto niente se non queste rocce e i nomi dei luoghi. È una storia che in Italia non si studia e che qui è dappertutto, nei cartelli, nei musei di paese, nelle insegne. Carcassonne, per contrasto, va presa per quello che è: un restauro ottocentesco molto discusso, che ha inventato tetti a punta che probabilmente non c\'erano mai stati. È comunque impressionante, e la sera, quando i pullman sono ripartiti, si cammina tra le due cinte murarie senza incontrare nessuno.',
    esperienzeSlugs: ['castelli-catari', 'canal-du-midi', 'carcassonne'],
    tripSlugs: ['provenza-camargue'],
    imageAlt: 'Il castello cataro di Peyrepertuse sulla cresta calcarea con la valle sotto',
  },
  {
    slug: 'sciare-in-francia',
    paeseSlug: 'francia',
    ordine: 11,
    nome: 'Sciare in Francia',
    tipologia: ['sci', 'montagna', 'inverno'],
    giorniConsigliati: '6-7 giorni, la settimana da sabato a sabato',
    visitataPersonalmente: true,
    introduzione:
      'La Francia ha i comprensori sciistici collegati più grandi del mondo, e li ha per una ragione storica precisa: a partire dagli anni Sessanta lo Stato ha pianificato e costruito da zero, in alta quota, stazioni che prima non esistevano — le *stations intégrées* — scegliendo i siti per l\'innevamento e non per il paesaggio. Il risultato è un\'offerta che per estensione e affidabilità della neve non ha eguali in Europa, e che divide profondamente chi ci va.',
    percheAndarci:
      'Perché in un comprensorio come le Tre Valli si può sciare per una settimana senza rifare due volte la stessa pista, e perché stazioni sopra i duemila metri garantiscono la neve quando le Alpi basse non ce l\'hanno. E perché a Chamonix, che è l\'opposto di tutto questo, c\'è la discesa fuoripista più famosa del mondo.',
    cosaVedere: [
      'Le **Tre Valli** (Courchevel, Méribel, Val Thorens, Les Menuires, Saint-Martin), **il comprensorio collegato più esteso del mondo**, con Val Thorens che è la stazione più alta d\'Europa',
      '**Paradiski** (La Plagne, Les Arcs, Peisey-Vallandry), collegate dal **Vanoise Express**, una funivia a due piani che attraversa la valle in pochi minuti',
      '**Tignes e Val d\'Isère**, ad alta quota, con il ghiacciaio della Grande Motte',
      '**Chamonix**, che non è un comprensorio collegato ma una valle con settori separati, e che è la capitale mondiale dell\'alpinismo: l\'**Aiguille du Midi a 3.842 metri** e la **Vallée Blanche**',
      '**Portes du Soleil** e il **Grand Massif**, a quote più basse ma enormi e più economici',
      '**Alpe d\'Huez** e **Les 2 Alpes**, sul versante dell\'Isère, con piste lunghissime',
      'Le **Alpi del Sud** (Isola 2000, Auron, Valberg) a un\'ora e mezza dal mare, e i **Pirenei**, molto più economici e meno affidabili sulla neve',
    ],
    cosaFare: [
      'Sciare un comprensorio collegato **spostandosi di valle in valle**, che è l\'esperienza per cui questi domini esistono',
      'La **Vallée Blanche** a Chamonix con una guida, che non è una pista ma una discesa su ghiacciaio — vedi la scheda esperienza dedicata',
      'Salire all\'**Aiguille du Midi** anche senza sciare, per la funivia e la terrazza — vedi la scheda esperienza dedicata',
      'Provare lo **scialpinismo o le ciaspole** nelle valli laterali, che è il contrario del comprensorio e costa niente',
      'Sciare nelle **Alpi Marittime al mattino e scendere al mare nel pomeriggio**, che dalla Costa Azzurra si può fare davvero',
    ],
    doveDormire:
      'La differenza è tra **stazione integrata d\'alta quota** — appartamenti ai piedi delle piste, si esce con gli sci e si rientra con gli sci, architettura funzionale e spesso brutta — e **villaggio tradizionale** a quota più bassa, con il centro storico, il legno, le navette per gli impianti. È il secondo confronto qui sotto ed è la scelta che determina il tipo di settimana. Nota pratica: in Francia la formula dominante è **l\'appartamento in residence** con settimana da sabato a sabato, non la mezza pensione in albergo.',
    doveMangiare:
      'La cucina savoiarda è costruita sul formaggio e sulle calorie: **raclette** (mezza forma scaldata e raschiata sul piatto), **fondue savoyarde**, **tartiflette** — patate, lardo, cipolle e **Reblochon** fuso, che è un piatto molto più recente di quanto sembri, nato in buona parte per promuovere il formaggio — **diots** (salsicce) al vino bianco, e i formaggi Beaufort, Abondance e Tomme de Savoie. Da bere i bianchi di Savoia (Apremont, Roussette) e il **génépi** come digestivo. Sulle piste, i **ristoranti d\'altura** sono un\'istituzione e un capitolo di spesa importante.',
    comeArrivare:
      'In treno fino alle stazioni di fondovalle della Tarentaise (Bourg-Saint-Maurice, Moûtiers) e poi bus o navetta; in inverno ci sono treni notturni e collegamenti diretti stagionali da diverse città europee. Aeroporti di Ginevra, Lione, Grenoble e Chambéry. **In auto, catene o pneumatici invernali sono obbligatori per legge nei comuni di montagna in un periodo stabilito ogni anno**, e la regola va verificata.',
    comeSpostarsi:
      'Una volta in stazione non serve l\'auto: le navette gratuite collegano quartieri e impianti. **L\'avvertenza vera riguarda il giorno di arrivo**: il sabato, in alta stagione, tutte le settimane bianche francesi cambiano insieme e le strade della Tarentaise e della Maurienne registrano code che possono durare ore. Partire di domenica, o molto presto il sabato, cambia la giornata.',
    periodoMigliore:
      '**da metà gennaio a metà marzo** per il rapporto tra neve e prezzi, con **marzo** come mese migliore per neve, luce e giornate lunghe. **La variabile decisiva in Francia sono le vacanze scolastiche invernali, scaglionate in tre zone** su quattro o cinque settimane consecutive tra febbraio e inizio marzo: in quel periodo, a rotazione, le stazioni sono piene e i prezzi al massimo. **Il calendario delle zone si pubblica con largo anticipo e va consultato prima di prenotare.** Natale e Capodanno sono carissimi e con neve non garantita alle quote basse.',
    costi:
      'Alti, e la struttura è diversa dall\'Italia: **appartamento per la settimana + forfait + noleggio + scuola**, con il forfait dei grandi comprensori tra le voci più care d\'Europa. **I forfait plurigiornalieri comprati online in anticipo costano sensibilmente meno.** Va aggiunta l\'**assicurazione per il soccorso sulle piste**, venduta con lo skipass: **in Francia il soccorso sulle piste è a pagamento** e un intervento fuoripista costa cifre molto alte.',
    erroriDaEvitare: [
      '**Prenotare senza controllare il calendario delle vacanze scolastiche francesi**: è la differenza tra una settimana normale e una con prezzi doppi e piste piene',
      'Arrivare di sabato in alta stagione senza mettere in conto le code in valle',
      'Non comprare l\'assicurazione del soccorso sulle piste, che costa pochi euro al giorno e copre una voce che in Francia si paga',
      'Comprare il forfait alla cassa il primo giorno: online e in anticipo costa meno',
      'Scegliere un comprensorio enorme se si è principianti o si scia poche ore al giorno: si paga un forfait grande per usarne un decimo',
      'Andare fuoripista senza guida, senza ARVA, pala e sonda e senza saper leggere il bollettino valanghe. **La Vallée Blanche non è una pista**: è un itinerario su ghiacciaio con crepacci',
      'Aspettarsi villaggi alpini di legno in una stazione integrata degli anni Settanta. Sono state costruite per sciare, non per essere guardate',
    ],
    confronti: [
      {
        titolo: 'Quale comprensorio scegliere',
        introduzione:
          'I grandi domini francesi si assomigliano nei numeri e non si assomigliano affatto nell\'uso. La variabile che conta più di tutte è la **quota**, perché determina l\'affidabilità della neve; la seconda è il **carattere della stazione**; la terza è il prezzo, che in Francia varia molto più di quanto si creda.',
        opzioni: [
          {
            nome: 'Les 3 Vallées',
            sintesi: 'Il comprensorio collegato più esteso del mondo: cinque stazioni, centinaia di chilometri di piste, con Val Thorens che è la stazione più alta d\'Europa.',
            costo: 'il forfait più caro di Francia; alloggi da Courchevel (altissimo) a Les Menuires (accessibile)',
            durata: 'una settimana, e non si finisce',
            pro: [
              'Estensione senza paragoni: si può sciare sei giorni senza ripetere',
              '**Val Thorens a 2.300 metri ha la neve più affidabile delle Alpi francesi**',
              'Cinque stazioni molto diverse tra loro sotto lo stesso forfait: si sceglie il carattere e non si rinuncia al dominio',
              'Impianti tra i più moderni ed efficienti d\'Europa',
            ],
            contro: [
              'Il forfait è caro e ha senso solo per chi scia tutto il giorno e si sposta davvero',
              'Courchevel e Méribel hanno prezzi fuori scala',
              'Val Thorens è una stazione integrata d\'alta quota senza nessun carattere alpino tradizionale',
            ],
            perChi: 'Sciatori buoni che sciano molte ore al giorno e vogliono il massimo dell\'estensione.',
          },
          {
            nome: 'Paradiski (La Plagne e Les Arcs)',
            sintesi: 'Due grandi stazioni unite da una funivia a due piani che attraversa la valle, con un dominio enorme e quote alte.',
            costo: 'alto ma sotto le Tre Valli',
            durata: 'una settimana',
            pro: [
              'Dominio molto vasto e vario, con boschi e alta quota insieme',
              'Il collegamento tra i due versanti è un\'attrazione a sé',
              'Ottimo per famiglie: molte aree protette e piste blu lunghe',
              'Les Arcs ha una delle piste di chilometro lanciato più famose al mondo',
            ],
            contro: [
              'Le due stazioni sono frammentate in molti "villaggi" satellite: sbagliare quartiere significa essere lontani dagli impianti giusti',
              'L\'architettura degli anni Settanta divide',
            ],
            perChi: 'Famiglie e gruppi misti, chi vuole grandi dimensioni senza i prezzi delle Tre Valli.',
          },
          {
            nome: 'Tignes e Val d\'Isère',
            sintesi: 'Alta quota pura, con il ghiacciaio della Grande Motte e una stagione tra le più lunghe delle Alpi.',
            costo: 'alto',
            durata: 'una settimana',
            pro: [
              '**Innevamento tra i più affidabili d\'Europa** grazie alla quota e al ghiacciaio',
              'Terreno eccezionale per sciatori esperti e per il fuoripista, con moltissimi itinerari',
              'Val d\'Isère ha un centro con più carattere delle stazioni integrate pure',
              'Stagione lunghissima, con aperture precoci e chiusure tardive',
            ],
            contro: [
              'Quota alta significa anche esposizione al vento e chiusure di impianti nelle giornate di bufera',
              'Poco adatto ai principianti assoluti, e caro',
              'Tignes è architettonicamente la stazione che divide di più in assoluto',
            ],
            perChi: 'Sciatori esperti, amanti del fuoripista, chi vuole la certezza della neve a inizio o fine stagione.',
          },
          {
            nome: 'Chamonix',
            sintesi: 'Non un comprensorio ma una valle alpina storica con settori separati, ai piedi del Monte Bianco: la capitale mondiale dell\'alpinismo.',
            costo: 'medio per l\'alloggio, alto per guide e impianti d\'alta quota',
            durata: 'una settimana, anche senza sciare tutti i giorni',
            pro: [
              '**L\'Aiguille du Midi a 3.842 metri** e la **Vallée Blanche**, oltre venti chilometri di discesa su ghiacciaio con guida: un\'esperienza che non ha equivalenti',
              'È una città vera, abitata tutto l\'anno, con vita, negozi, musei e ristoranti — non una stazione',
              'Terreno leggendario per sciatori esperti (i Grands Montets su tutti)',
              'Ottima anche per chi non scia: funivie panoramiche, ciaspole, terme',
            ],
            contro: [
              '**I settori non sono collegati tra loro**: ci si sposta in navetta, e chi cerca il grande dominio continuo resta deluso',
              'Poco adatto ai principianti',
              'Le condizioni dei ghiacciai stanno cambiando e alcuni itinerari classici sono più difficili o più brevi che in passato',
            ],
            perChi: 'Sciatori esperti, alpinisti, chi vuole una valle con una vita propria e non un impianto ricettivo.',
          },
          {
            nome: 'Portes du Soleil, Grand Massif, Alpe d\'Huez',
            sintesi: 'Grandi domini a quote intermedie, con più bosco, prezzi più bassi e villaggi con più carattere.',
            costo: 'medio',
            durata: 'una settimana',
            pro: [
              'Ottimo rapporto tra dimensione e prezzo',
              'Sciare tra gli alberi, che nelle stazioni d\'alta quota non si può fare',
              'Le **Portes du Soleil** attraversano il confine e permettono di sciare in due paesi con lo stesso forfait',
              '**Alpe d\'Huez** ha una delle piste nere più lunghe del mondo, con un dislivello enorme in un solo tracciato',
            ],
            contro: [
              '**Innevamento meno affidabile** a quote basse, soprattutto a inizio e fine stagione',
              'Domini frammentati che richiedono lunghi trasferimenti su sci',
            ],
            perChi: 'Chi ha un budget, chi scia a gennaio e febbraio, chi preferisce il bosco all\'alta quota.',
          },
          {
            nome: 'Alpi del Sud e Pirenei',
            sintesi: 'Isola 2000, Auron e Valberg a un\'ora e mezza dalla Costa Azzurra; e la catena pirenaica, molto più economica.',
            costo: 'il più basso di tutti',
            durata: 'anche pochi giorni, o giornate singole',
            pro: [
              'Dalle Alpi Marittime **si scia al mattino e si è al mare nel pomeriggio**, che non è un modo di dire',
              'Prezzi molto più bassi: forfait, scuola e alloggio costano una frazione della Tarentaise',
              'Molto meno affollati, anche in febbraio',
              'I Pirenei hanno stazioni con un carattere spagnoleggiante e una cucina propria',
            ],
            contro: [
              '**Domini molto più piccoli** e innevamento meno affidabile, con stagioni corte',
              'Meno impianti moderni',
              'I Pirenei sono lontani da tutto il resto di questo itinerario',
            ],
            perChi: 'Chi ha un budget, chi scia pochi giorni, chi combina neve e mare, chi è già sulla Costa Azzurra.',
          },
        ],
        raccomandazione:
          'Per una settimana classica con neve garantita e grande estensione: **Tre Valli** se il budget lo permette, **Paradiski** come alternativa più equilibrata. Per sciatori esperti: **Tignes-Val d\'Isère** o **Chamonix**, che sono due mondi opposti e entrambi validi. Per chi ha un budget o pochi giorni: **le Alpi del Sud**, soprattutto se si è già sulla costa. E in ogni caso: **si guarda prima il calendario delle vacanze scolastiche, poi tutto il resto**.',
      },
      {
        titolo: 'Stazione integrata d\'alta quota o villaggio tradizionale?',
        introduzione:
          'È la scelta più francese di tutte e quasi nessuno la fa consapevolmente. Negli anni Sessanta e Settanta lo Stato ha costruito da zero decine di stazioni sopra i milleottocento metri, in luoghi disabitati, progettate da urbanisti con un solo criterio: uscire con gli sci dalla porta di casa. L\'alternativa sono i villaggi alpini preesistenti, più bassi e più belli.',
        opzioni: [
          {
            nome: 'Stazione integrata d\'alta quota',
            sintesi: 'Val Thorens, Tignes, Les Arcs, La Plagne, Avoriaz, Flaine: residence ai piedi delle piste, tutto pedonale, tutto a quota.',
            costo: 'medio-alto, con appartamenti di varie categorie',
            durata: 'la settimana classica',
            pro: [
              '**Ski-in ski-out reale**: si esce dal portone con gli sci ai piedi e si rientra allo stesso modo',
              'Neve garantita dalla quota, stagione lunga',
              'Tutto a distanza pedonale: niente auto, niente navette, niente tempi morti',
              'Ideale con bambini e attrezzatura da trasportare',
            ],
            contro: [
              '**Architettura funzionale che molti trovano brutta**: cemento, volumi grandi, nessun centro storico',
              'Fuori dalla stagione sciistica non c\'è nulla, e anche in stagione la "vita" è quella dei residence',
              'Esposte al vento e alle chiusure degli impianti nelle giornate cattive',
              'Nessuna alternativa se non si scia',
            ],
            perChi: 'Chi scia tutti i giorni e tutto il giorno, famiglie con bambini piccoli, chi vuole zero spostamenti.',
          },
          {
            nome: 'Villaggio alpino tradizionale',
            sintesi: 'Chamonix, Megève, La Clusaz, Le Grand-Bornand, Samoëns, Serre Chevalier: paesi preesistenti, più bassi, con un centro e una vita propria.',
            costo: 'variabile, da accessibile a molto alto (Megève)',
            durata: 'la settimana classica, con più senso anche per chi non scia',
            pro: [
              'Sono paesi veri, con una chiesa, un mercato, gente che ci vive tutto l\'anno',
              'Molto più belli e più piacevoli nelle giornate di brutto tempo',
              'Offerta gastronomica e serale incomparabilmente migliore',
              'Funzionano anche per chi non scia o scia poco',
            ],
            contro: [
              '**Quote più basse e innevamento meno affidabile**, soprattutto a dicembre e a fine stagione',
              'Serve la navetta o l\'auto per raggiungere gli impianti, con tempi morti quotidiani',
              'Megève e simili hanno prezzi elevati per ragioni che con lo sci c\'entrano poco',
            ],
            perChi: 'Chi non scia tutti i giorni, chi viaggia con persone che non sciano, chi vuole una vacanza in montagna e non solo sulle piste.',
          },
        ],
        raccomandazione:
          'Se tutto il gruppo scia tutti i giorni, **la stazione integrata vince senza discussione**: il tempo risparmiato ogni giorno vale molto più dell\'estetica. Se anche una sola persona non scia, o se si prevede di alternare, **il villaggio tradizionale è l\'unica scelta sensata** — perché in una stazione integrata, chi non scia, non ha niente da fare.',
      },
    ],
    miaEsperienza:
      'La prima volta che si arriva in una stazione integrata francese si resta perplessi: si sale in valle tra i boschi, si passa un tornante e appare un blocco di edifici degli anni Settanta a duemila metri, senza un campanile, senza una piazza, con gli sci appoggiati ovunque. Poi la mattina dopo si esce dal portone con gli sci ai piedi, si spinge due volte e si è su una seggiovia, e alle nove e un quarto si sta già sciando su neve che a quella quota c\'è sempre. Al terzo giorno la domanda estetica non esiste più. È esattamente quello per cui sono state costruite, e per chi scia davvero funzionano meglio di qualunque villaggio di cartolina. Il rovescio si vede il giorno di brutto tempo, quando gli impianti alti chiudono per vento: in una stazione integrata non c\'è nient\'altro da fare, e la giornata è persa. Le due cose che cambiano di più la settimana sono però amministrative e non sciistiche. La prima è il calendario delle vacanze scolastiche, scaglionato su tre zone: le stesse piste, la stessa neve, la stessa settimana di febbraio possono costare il doppio e avere il triplo delle persone, a seconda di quale zona è in vacanza. La seconda è l\'assicurazione del soccorso: qui il soccorso sulle piste si paga, e la polizza venduta con lo skipass costa pochi euro al giorno.',
    esperienzeSlugs: ['vallee-blanche', 'aiguille-du-midi', 'scialpinismo-francia'],
    tripSlugs: ['settimana-bianca-francia'],
    imageAlt: 'Sciatori su una pista d\'alta quota nelle Alpi francesi con il massiccio innevato sullo sfondo',
  },
  {
    slug: 'montagne-francesi',
    paeseSlug: 'francia',
    ordine: 12,
    nome: 'Camminare in montagna',
    tipologia: ['trekking', 'montagna', 'natura'],
    giorniConsigliati: '7-11 giorni per un trekking a tappe',
    visitataPersonalmente: true,
    introduzione:
      'La Francia ha il massiccio più alto delle Alpi, undici parchi nazionali, una rete di sentieri a lunga percorrenza — i **GR** — segnalata con la stessa bandierina bianca e rossa da ottant\'anni, e due dei trekking più famosi d\'Europa: il giro del Monte Bianco e la traversata della Corsica. Ha anche una cosa che l\'Italia non ha: **il soccorso in montagna effettuato dai reparti pubblici è in linea di principio gratuito**.',
    percheAndarci:
      'Perché il **Tour du Mont Blanc** attraversa tre paesi in una decina di giorni girando attorno alla montagna più alta delle Alpi, dormendo in rifugio ogni sera, ed è probabilmente il trekking a tappe più bello d\'Europa. E perché il **GR20** in Corsica è considerato il più duro percorso segnalato del continente, il che per una certa categoria di persone è una ragione sufficiente.',
    cosaVedere: [
      'Il **Tour du Mont Blanc**: circa centosettanta chilometri attorno al massiccio, tra Francia, Italia e Svizzera, con circa diecimila metri di dislivello complessivo',
      'Il massiccio del **Monte Bianco** da Chamonix: il **Lac Blanc**, il **Grand Balcon**, e l\'**Aiguille du Midi** a 3.842 metri con la funivia che sale di quasi tremila metri in venti minuti',
      'La **Mer de Glace**, il più grande ghiacciaio francese, raggiungibile con il trenino a cremagliera del Montenvers: **lungo la scala che scende alla grotta di ghiaccio sono segnati gli anni e il livello che il ghiacciaio aveva**, ed è il documento più diretto sul ritiro glaciale che si possa vedere in Europa',
      'Il **Parco Nazionale della Vanoise**, il primo parco nazionale francese, istituito nel 1963, dove lo stambecco è stato salvato dall\'estinzione sul versante alpino occidentale',
      'Il **Parco Nazionale degli Écrins**, alta montagna severa, con la **Barre des Écrins** che è il quattromila più meridionale delle Alpi',
      'I **Pirenei**: il **Cirque de Gavarnie**, patrimonio UNESCO, un anfiteatro glaciale con pareti di centinaia di metri e una delle cascate più alte d\'Europa, e la **Brèche de Roland**',
      'Il **GR20** in Corsica, circa centottanta chilometri da nord a sud sulla dorsale montuosa dell\'isola',
    ],
    cosaFare: [
      'Il **Tour du Mont Blanc** completo o in versione ridotta — vedi la scheda esperienza dedicata',
      'Il **GR20**, per chi ha esperienza vera — vedi la scheda esperienza dedicata',
      'Le escursioni in giornata da Chamonix, che danno il novanta per cento del panorama con il dieci per cento dell\'impegno',
      'Salire all\'**Aiguille du Midi** e affacciarsi dalla terrazza sospesa',
      'Una traversata breve in **Vanoise** o negli **Écrins**, che sono meno noti e molto meno affollati',
    ],
    doveDormire:
      '**In rifugio**, che è il senso di questi percorsi. Regole comuni: **mezza pensione**, cena a orario fisso, camerate, **sacco lenzuolo obbligatorio**, silenzio presto, e in molti casi **solo contanti**. **I rifugi del Tour du Mont Blanc si prenotano da gennaio-febbraio per l\'estate** ed è il vincolo che determina tutto l\'itinerario: si costruisce il percorso sulle disponibilità, non viceversa.',
    doveMangiare:
      'In rifugio si mangia una cucina ripetitiva e sostanziosa — zuppe, polenta, formaggi, torte — e dopo tre giorni si ama. In valle, la cucina savoiarda: **raclette**, **fondue**, **tartiflette**, **Beaufort** e **Reblochon**, e i vini bianchi di Savoia. In Corsica è tutta un\'altra cosa: **charcuterie** di maiale allevato allo stato brado, **brocciu** (un formaggio fresco di siero), **castagne** in ogni forma.',
    comeArrivare:
      'Per il Monte Bianco: treno o bus fino a **Chamonix**, oppure Ginevra e navetta. Per la Vanoise e gli Écrins: stazioni di fondovalle della Savoia e del Delfinato. Per i Pirenei: Lourdes, Pau, Tarbes. Per il GR20: aereo o traghetto in Corsica, poi treno o bus fino a Calenzana o Conca.',
    comeSpostarsi:
      'Nei trekking a tappe ci si sposta a piedi: il tema è semmai come tornare al punto di partenza, e per il Tour du Mont Blanc esistono navette e trasferimenti bagagli su tutta la rete. Nella valle di Chamonix il trasporto pubblico è ottimo e **con la tessera fornita dalle strutture ricettive è in genere incluso**: da verificare.',
    periodoMigliore:
      '**da metà giugno a metà settembre**, che è la finestra in cui i rifugi sono aperti e i colli alti sono liberi dalla neve. **Luglio e agosto sono i mesi più affollati**, e sul Tour du Mont Blanc l\'affollamento è reale. **Settembre è il mese migliore**: aria limpida, meno gente, rifugi ancora aperti nella prima parte del mese. A giugno i nevai residui sui colli alti sono una variabile seria. **Il GR20 si percorre indicativamente da giugno a settembre**, con i mesi centrali molto caldi nelle parti basse.',
    costi:
      'La mezza pensione in rifugio è la voce principale e in Francia è nella fascia alta alpina. Gli impianti di risalita (Aiguille du Midi, Montenvers) sono cari e vanno messi in conto a parte. Il soccorso pubblico è in linea di principio gratuito, ma **un\'assicurazione che copra rimpatrio e spese mediche resta sensata**.',
    erroriDaEvitare: [
      '**Prenotare i rifugi del Tour du Mont Blanc a maggio per agosto.** Si esauriscono da gennaio-febbraio, ed è il vincolo che struttura tutto il viaggio',
      'Sottovalutare i dislivelli: sul TMB le tappe hanno regolarmente otto-novecento metri di salita e altrettanti di discesa',
      'Partire tardi: **i temporali pomeridiani estivi in quota sono regolari e violenti**, e la regola è essere al rifugio prima del pomeriggio',
      'Andare in quota senza contanti, perché molti rifugi non hanno linea',
      'Affrontare il **GR20** come un trekking escursionistico: ha tratti attrezzati, passaggi con le mani, terreno di roccia e dislivelli enormi, e ogni anno molte persone si ritirano dopo tre tappe',
      'Dimenticare il **sacco lenzuolo**, obbligatorio in tutti i rifugi',
      'Fidarsi del meteo del mattino: in alta montagna cambia in due ore',
    ],
    confronti: [
      {
        titolo: 'Quale trekking di montagna scegliere',
        introduzione:
          'Sono tutti percorsi a tappe con rifugi, e le differenze non stanno nel paesaggio ma nella difficoltà tecnica, nell\'affollamento e nella possibilità di ritirarsi a metà. Sceglierne uno sbagliato rispetto alla propria preparazione è il modo più efficace di rovinare una vacanza.',
        opzioni: [
          {
            nome: 'Tour du Mont Blanc',
            sintesi: 'Il giro completo del massiccio in circa centosettanta chilometri e dieci giorni, attraversando Francia, Italia e Svizzera.',
            costo: 'medio-alto: mezza pensione in rifugio per ogni notte',
            durata: '7-11 giorni; esistono versioni di 3-5 tappe',
            pro: [
              'Paesaggio continuo di primo livello, con il massiccio sempre in vista da angolazioni diverse',
              '**Non è tecnico**: serve allenamento, non alpinismo. Non ci sono tratti attrezzati obbligatori',
              'Attraversa tre paesi e tre culture alpine, con la cucina che cambia a ogni colle',
              'Rete logistica eccellente: trasferimento bagagli, navette, possibilità di saltare tappe',
              'Si può fare in versione ridotta, ed è la scelta giusta per chi non ha mai fatto un trekking a tappe',
            ],
            contro: [
              '**È molto affollato in luglio e agosto**: è il trekking più famoso d\'Europa e si vede',
              'I rifugi si prenotano con mesi di anticipo e strutturano rigidamente l\'itinerario',
              'Le tappe sono lunghe e i dislivelli seri, anche se il terreno è facile',
            ],
            perChi: 'Chi è allenato, chi vuole un grande trekking senza difficoltà tecniche, chi lo fa per la prima volta.',
          },
          {
            nome: 'GR20, Corsica',
            sintesi: 'Circa centottanta chilometri sulla dorsale montuosa dell\'isola, in quindici tappe, considerato il percorso segnalato più duro d\'Europa.',
            costo: 'medio-basso: i rifugi sono spartani e si può portare la tenda',
            durata: '15 tappe, circa 12-16 giorni; si può fare la sola metà nord o sud',
            pro: [
              'Paesaggio unico nel Mediterraneo: creste granitiche, laghi glaciali, pinete di pino laricio',
              'La **metà nord** è la parte più spettacolare e più dura; la **metà sud** è più accessibile',
              'Molto meno affollato del TMB fuori dall\'alta stagione',
              'Un obiettivo vero: chi lo finisce lo ricorda',
            ],
            contro: [
              '**Duro davvero**: passaggi con le mani, tratti attrezzati con catene, terreno roccioso e instabile, dislivelli enormi',
              'I rifugi sono spartani e la ristorazione limitata: molti portano tenda e cibo',
              'Caldo intenso nelle parti basse d\'estate, e l\'acqua non è sempre disponibile',
              '**Ritirarsi a metà è complicato**: le vie di fuga sono poche e lunghe',
            ],
            perChi: 'Chi ha già fatto trekking impegnativi, ha piede fermo su roccia e sa cosa significa camminare otto ore su terreno tecnico. Non è un primo trekking.',
          },
          {
            nome: 'Vanoise',
            sintesi: 'Il primo parco nazionale francese, con una rete di rifugi fitta e itinerari ad anello di tre-sei giorni tra ghiacciai, laghi e alpeggi.',
            costo: 'medio',
            durata: '3-7 giorni',
            pro: [
              'Molto meno affollato del Monte Bianco',
              'La fauna è straordinaria: **è il parco in cui lo stambecco è stato salvato dall\'estinzione**, e oggi se ne vedono con facilità',
              'Itinerari ad anello brevi, che non richiedono logistica per il rientro',
              'Rifugi ben distribuiti e più facili da prenotare',
            ],
            contro: [
              'Meno spettacolare del massiccio del Monte Bianco, che resta un altro ordine di grandezza',
              'Confina con grandi stazioni sciistiche, e sui bordi si vedono gli impianti',
            ],
            perChi: 'Chi vuole un trekking alpino vero senza folla, chi ha meno di una settimana, chi va per la fauna.',
          },
          {
            nome: 'Écrins',
            sintesi: 'Alta montagna severa nel Delfinato, con il quattromila più meridionale delle Alpi e valli lunghe e selvagge.',
            costo: 'medio',
            durata: '4-7 giorni',
            pro: [
              'Il parco più alpinistico dei parchi francesi, con un carattere severo e poco addomesticato',
              'Pochissima gente rispetto al Monte Bianco',
              'Il **Glacier Blanc** è un\'escursione in giornata che porta a contatto con un ghiacciaio vero',
              'Prezzi più bassi in valle',
            ],
            contro: [
              'Più impegnativo del TMB: i colli sono alti e le tappe lunghe',
              'Meno servizi e meno logistica per bagagli e trasferimenti',
              'Il tempo è più variabile: è una zona di confine tra influssi atlantici e mediterranei',
            ],
            perChi: 'Chi ha già camminato in quota e vuole montagna seria senza folla.',
          },
          {
            nome: 'Pirenei: GR10 e Cirque de Gavarnie',
            sintesi: 'Una catena completamente diversa dalle Alpi, più verde, più selvaggia e molto meno frequentata, attraversata da un sentiero da un oceano all\'altro.',
            costo: 'basso',
            durata: 'da 3 giorni a un mese e mezzo per il GR10 completo',
            pro: [
              'Il **Cirque de Gavarnie** è uno dei paesaggi glaciali più impressionanti d\'Europa e si raggiunge con una camminata facile',
              'Molto meno frequentati e molto più economici delle Alpi',
              'Fauna eccezionale, con i grifoni e i camosci pirenaici',
              'La cultura locale — basca a ovest, catalana a est — è forte e riconoscibile',
            ],
            contro: [
              'Più lontani da tutto: non si combinano con nessun altro itinerario di questa sezione',
              'Il meteo atlantico è molto variabile, con nebbie frequenti',
              'La rete di rifugi è meno fitta delle Alpi',
            ],
            perChi: 'Chi cerca montagna senza folla, chi ha già fatto le Alpi, chi ha un budget.',
          },
        ],
        raccomandazione:
          'Al primo trekking a tappe: **Tour du Mont Blanc in versione ridotta**, tre o quattro tappe, per capire cosa significhi camminare giorni consecutivi dormendo in rifugio. Con esperienza e allenamento: **il TMB completo**, prenotando i rifugi a gennaio. Per chi vuole montagna vera senza folla: **Vanoise o Écrins**. Il **GR20** solo sapendo esattamente a cosa si va incontro.',
      },
    ],
    miaEsperienza:
      'La montagna francese ha una caratteristica che si nota subito e che cambia il modo di stare in quota: **il soccorso pubblico è gratuito**. Detta così sembra una nota amministrativa, ma ha un effetto concreto — nessuno esita a chiamare, e il rapporto con il rischio è più sereno rispetto a paesi in cui un intervento in elicottero significa una fattura da migliaia di euro. La seconda cosa è la rete dei GR, che esiste dagli anni Quaranta e che è segnata con due bandierine, una bianca e una rossa, dipinte su rocce, alberi e muri per migliaia di chilometri: si può partire da un paese qualunque e camminare per un mese seguendo dei tratti di vernice. Sul Tour du Mont Blanc, la cosa che spiazza è quanto sia internazionale: si dorme in rifugio con persone di dieci nazionalità che stanno facendo lo stesso giro in senso opposto, e si incontrano di nuovo tre giorni dopo su un colle. L\'altra è quanto cambi il paesaggio girando attorno a una sola montagna: il versante francese è verticale e ghiacciato, quello italiano si apre su prati larghissimi con il massiccio come una parete continua, quello svizzero è ordinato e verde. Sono tre modi diversi di stare sotto la stessa cima. E poi c\'è la Mer de Glace, che è la cosa più dura da guardare: si scende la scala verso la grotta di ghiaccio e ai lati ci sono i cartelli con gli anni e il livello che il ghiacciaio aveva — 1990 qui, 2000 più sotto, 2010 ancora più sotto — e si continua a scendere.',
    esperienzeSlugs: ['tour-du-mont-blanc', 'gr20-corsica', 'mer-de-glace'],
    tripSlugs: ['tour-du-mont-blanc'],
    imageAlt: 'Escursionisti su un colle del Tour du Mont Blanc con il massiccio innevato sullo sfondo',
  },
]
