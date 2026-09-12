import type { Destinazione } from '@/lib/types'

// L\'Italia è organizzata per temi invece che per regioni: vedi il commento in
// src/content/paesi/italia.ts.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario:
// vanno riletti e sostituiti. Nessun nome di hotel, rifugio, ristorante o
// cantina è stato inventato.
// Prezzi, contingentamenti e regole di accesso cambiano ogni stagione e sono
// la parte che invecchia più in fretta: vanno riverificati prima di partire.

export const destinazioniItalia: Destinazione[] = [
  {
    slug: 'dolomiti',
    paeseSlug: 'italia',
    ordine: 1,
    nome: 'Dolomiti d\'estate',
    tipologia: ['montagna', 'trekking', 'natura'],
    giorniConsigliati: '4-5 giorni per una valle, 7-10 per un\'Alta Via completa',
    visitataPersonalmente: true,
    introduzione:
      'Patrimonio UNESCO dal 2009, e per una ragione precisa che quasi nessuno conosce: non per la bellezza, ma perché sono un archivio geologico — barriere coralline di un mare tropicale di duecentocinquanta milioni di anni fa, sollevate e spaccate, con le pareti verticali che ne conservano la stratificazione. Sono nove sistemi separati distribuiti su tre province, e la scelta di quale fare è la decisione più importante del viaggio.',
    percheAndarci:
      'Perché la combinazione di pareti verticali di dolomia, prati di fondovalle e una rete di rifugi con cucina e posti letto non esiste in questa densità da nessun\'altra parte al mondo: si cammina per giorni senza mai portarsi tenda e cibo, dormendo a tremila metri e mangiando canederli.',
    cosaVedere: [
      'Le Tre Cime di Lavaredo, con il giro ad anello attorno alla base — **la strada per il Rifugio Auronzo è a pedaggio e dal 2026 richiede prenotazione online obbligatoria**',
      'Il Lago di Braies, punto di partenza dell\'Alta Via 1 — **accesso in auto contingentato d\'estate, con prenotazione obbligatoria tra le 9 e le 16**',
      'Seceda, con la cresta erbosa che si spezza di colpo in pareti verticali, e l\'Alpe di Siusi, l\'altopiano alpino più esteso d\'Europa',
      'Il Gruppo del Sella, il massiccio tabulare attorno a cui girano i quattro passi',
      'La Marmolada, la Regina delle Dolomiti, con quello che resta del ghiacciaio',
      'Il Lago di Sorapis e il Lago di Carezza, con l\'acqua di quel turchese lattiginoso dato dalla farina glaciale',
      'Le Cinque Torri e il museo all\'aperto della Grande Guerra, con le trincee restaurate',
    ],
    cosaFare: [
      'Alta Via 1, da Braies a Belluno, il trekking a tappe più bello delle Alpi — vedi la scheda esperienza dedicata',
      'Il giro delle Tre Cime, che è l\'escursione più famosa e la più affollata — vedi la scheda esperienza dedicata',
      'Una via ferrata, che nelle Dolomiti è nata e dove la rete è la più fitta al mondo — vedi la scheda esperienza dedicata',
      'Dormire in rifugio almeno una notte, anche senza fare un trekking lungo: cambia completamente il rapporto con la montagna',
      'Vedere l\'enrosadira, il rosa che prende le pareti al tramonto e all\'alba per la presenza di dolomia',
    ],
    doveDormire:
      'La scelta della valle conta più della struttura, ed è il senso del confronto qui sotto. In generale: i **rifugi** sono l\'esperienza da fare almeno una volta e si prenotano da gennaio per l\'estate — camerate comuni, cena alle 19, silenzio alle 22, sacco lenzuolo obbligatorio, quasi sempre solo contanti. In fondovalle, gli **agriturismi masi** dell\'Alto Adige hanno un rapporto qualità-prezzo che gli hotel non reggono, ma vanno prenotati con mesi di anticipo per luglio e agosto.',
    doveMangiare:
      'In rifugio si mangia una cucina precisa e ripetitiva che dopo tre giorni si ama: canederli in brodo, gulasch, polenta con formaggio fuso e funghi, Kaiserschmarrn come dolce, e la zuppa d\'orzo che è il piatto d\'alta quota per eccellenza. In fondovalle, l\'Alto Adige ha una cucina propria che non è né italiana né austriaca: speck, Schlutzkrapfen (i ravioli di segale con spinaci), strudel, e i Törggelen autunnali nei masi, quando esce il vino nuovo. Da bere, il Lagrein e la Schiava in Alto Adige, il Teroldego in Trentino.',
    comeArrivare:
      'In auto è il modo più pratico, e per certe valli l\'unico sensato. In treno si arriva a Bolzano, Bressanone o Calalzo e si prosegue con i bus di valle, che sono buoni in Alto Adige e molto meno in Veneto. Gli aeroporti utili sono Venezia, Verona, Innsbruck e Treviso.',
    comeSpostarsi:
      'Auto, con l\'avvertenza che **d\'estate i parcheggi dei punti più noti si esauriscono entro le otto del mattino** e diverse strade sono contingentate. Il sistema di bus dell\'Alto Adige, incluso nelle card locali di molte strutture, è efficiente e permette di lasciare l\'auto ferma; in Veneto la copertura è peggiore. Le funivie estive fanno risparmiare centinaia di metri di dislivello e vanno messe in conto nel budget.',
    periodoMigliore:
      '**da fine giugno a metà settembre**, che è la finestra in cui i rifugi sono aperti — prima e dopo, gran parte della rete è chiusa e certi sentieri alti hanno ancora neve. Luglio e agosto sono i mesi più affollati e più cari; **settembre è il mese migliore in assoluto**: meno gente, aria limpida, colori, e rifugi ancora aperti fino a fine mese. A giugno i nevai residui sui passi alti sono una variabile seria.',
    costi:
      'Mezza pensione in rifugio indicativamente 60-80€ a persona, con sconti per i soci CAI e delle associazioni alpinistiche affiliate — la tessera si ripaga in tre notti. **Pedaggio per le Tre Cime attorno ai 40€ per auto** (valido 12 ore, con prenotazione obbligatoria), funivie 15-30€ a tratta, noleggio del kit da ferrata 15-25€ al giorno.',
    erroriDaEvitare: [
      'Presentarsi alle Tre Cime o a Braies senza prenotazione: dal 2026 la strada delle Tre Cime richiede prenotazione online obbligatoria e Braies contingenta l\'accesso in auto tra le 9 e le 16 in alta stagione. Chi arriva senza, torna indietro',
      'Prenotare i rifugi a giugno per agosto: i posti si esauriscono da gennaio-febbraio, e per le camere private anche prima',
      'Partire tardi: i temporali pomeridiani estivi sono regolari e violenti, e la regola alpina è essere al rifugio prima delle due',
      'Andare in quota senza contanti: in molti rifugi la carta non si usa perché non c\'è linea',
      'Sottovalutare il dislivello: nelle Dolomiti i numeri sono bassi in chilometri e alti in metri, e un "sentiero facile" può significare ottocento metri di salita',
      'Fare una ferrata senza kit omologato e senza sapere cosa si sta facendo: è la causa più frequente di interventi del soccorso alpino, che in Italia si paga',
    ],
    confronti: [
      {
        titolo: 'Quale zona delle Dolomiti scegliere',
        introduzione:
          'Le Dolomiti non sono un posto ma nove sistemi montuosi su tre province, con lingue, prezzi, affollamento e carattere diversi. Chi sceglie a caso finisce quasi sempre nei due o tre punti più fotografati, che sono anche i più congestionati. Ecco come si dividono davvero.',
        opzioni: [
          {
            nome: 'Val Gardena e Alpe di Siusi',
            sintesi: 'Il cuore turistico dell\'Alto Adige, con Seceda, il Sassolungo e l\'altopiano alpino più esteso d\'Europa. Ladino, tedesco e italiano nella stessa valle.',
            costo: 'fascia alta: è la zona più cara delle Dolomiti insieme a Cortina',
            durata: '4-5 giorni',
            pro: [
              'La densità di panorami iconici più alta di tutte: Seceda, Alpe di Siusi, Sassolungo in pochi chilometri',
              'Impianti estivi numerosi, che rendono accessibili quote alte anche a chi cammina poco',
              'Servizi eccellenti, bus di valle efficienti, strutture di livello',
              'Ottima per famiglie e per chi non vuole un trekking impegnativo',
            ],
            contro: [
              'Affollatissima in luglio e agosto: i parcheggi di Seceda e Ortisei si riempiono prestissimo',
              'Molto costruita: il fondovalle è un susseguistrsi di alberghi e non ha più niente di alpino',
              'I prezzi in alta stagione sono da capogiro',
            ],
            perChi: 'Chi ci va per la prima volta, chi viaggia con famiglia, chi vuole le fotografie che ha visto.',
          },
          {
            nome: 'Cortina e le Dolomiti Ampezzane',
            sintesi: 'Il versante veneto, con Tre Cime, Cinque Torri, Lago di Sorapis e Tofane. Sede olimpica 2026 insieme a Milano.',
            costo: 'fascia alta, con i prezzi di Cortina che condizionano tutta la valle',
            durata: '4-6 giorni',
            pro: [
              'Le Tre Cime, che restano il simbolo delle Dolomiti',
              'Il museo all\'aperto della Grande Guerra alle Cinque Torri, con le trincee restaurate: è storia, non solo paesaggio',
              'Accesso comodo a Misurina, Sorapis e al Passo Giau',
            ],
            contro: [
              'Il pedaggio e la prenotazione obbligatoria per le Tre Cime, con code reali nelle ore centrali',
              'Cortina è cara e in alta stagione mondana in un modo che c\'entra poco con la montagna',
              'I lavori e gli interventi legati alle Olimpiadi hanno cambiato la valle: va verificato cosa è aperto',
            ],
            perChi: 'Chi vuole le Tre Cime e la parte storica della Grande Guerra, e accetta l\'affollamento.',
          },
          {
            nome: 'Val Badia e Alta Badia',
            sintesi: 'Il cuore ladino, attorno al Gruppo del Sella e alle Odle, con il Parco Naturale Fanes-Sennes-Braies alle spalle.',
            costo: 'media-alta, un gradino sotto la Gardena',
            durata: '4-6 giorni',
            pro: [
              'Cultura ladina ancora viva, con lingua e toponomastica proprie',
              'Base perfetta per il giro dei quattro passi e per il gruppo del Sella',
              'Il Parco Fanes-Sennes, che è uno degli altopiani più belli e meno battuti delle Dolomiti',
              'Cucina di livello altissimo in rapporto alle dimensioni della valle',
            ],
            contro: ['Meno "iconica" nelle fotografie, il che è un pregio ma non per tutti', 'I passi in alta stagione sono presi d\'assalto dalle moto e dai ciclisti'],
            perChi: 'Chi torna una seconda volta e vuole camminare sul serio senza rinunciare ai servizi.',
          },
          {
            nome: 'Val di Fassa e Pale di San Martino',
            sintesi: 'Il Trentino: Catinaccio, Marmolada, e più a sud l\'altopiano delle Pale, che è un deserto di roccia a duemilaseicento metri.',
            costo: 'media, sensibilmente più bassa dell\'Alto Adige',
            durata: '4-6 giorni',
            pro: [
              'Prezzi più accessibili a parità di paesaggio',
              'L\'altopiano delle Pale di San Martino non somiglia a nient\'altro nelle Dolomiti: sembra la luna',
              'Meno affollamento rispetto ai poli altoatesini',
              'Il Catinaccio al tramonto è il posto dove l\'enrosadira dà il meglio',
            ],
            contro: ['Servizi e trasporti pubblici meno curati che in Alto Adige', 'San Martino di Castrozza è lontana dagli altri poli dolomitici'],
            perChi: 'Chi vuole le Dolomiti spendendo meno e con meno gente intorno.',
          },
          {
            nome: 'Dolomiti Friulane e Bellunesi',
            sintesi: 'Il pezzo che quasi nessuno fa: le Dolomiti Friulane, dichiarate "wilderness", e il Parco Nazionale delle Dolomiti Bellunesi.',
            costo: 'bassa: è la zona più economica dell\'intero sistema',
            durata: '3-5 giorni',
            pro: [
              'Solitudine vera: si cammina per giornate intere incontrando pochissime persone',
              'Prezzi da altra epoca rispetto all\'Alto Adige',
              'Rifugi piccoli e a conduzione familiare, senza prenotazioni impossibili',
            ],
            contro: [
              'Sentieri meno curati e segnati, con tratti che richiedono più esperienza',
              'Pochi impianti: qui si sale con le gambe',
              'Servizi minimi e trasporti pubblici quasi assenti',
            ],
            perChi: 'Chi ha già fatto le Dolomiti classiche e non sopporta più la coda sul sentiero.',
          },
        ],
        raccomandazione:
          'Prima volta: Val Gardena o Alta Badia, in **settembre** invece che in agosto, che cambia il viaggio più di qualsiasi altra scelta. Seconda volta: Val di Fassa o Pale di San Martino, per spendere meno e vedere di più. Se la coda sul sentiero è il problema principale, Dolomiti Friulane senza pensarci — con la consapevolezza che lì bisogna saper camminare da soli.',
      },
      {
        titolo: 'Rifugio o fondovalle: come dormire in Dolomiti',
        introduzione:
          'È la scelta che determina il tipo di viaggio, e viene quasi sempre fatta per abitudine invece che per criterio. Dormire in quota non è solo più scomodo: è un\'altra cosa.',
        opzioni: [
          {
            nome: 'Rifugio in quota',
            sintesi: 'Camerate comuni o camere piccole a duemila-tremila metri, mezza pensione, cena a orario fisso, silenzio dalle 22.',
            costo: 'mezza pensione indicativamente 60-80€, con sconti soci CAI che rendono la tessera conveniente in tre notti',
            durata: 'da una notte a un\'Alta Via intera',
            pro: [
              'Si è già in quota all\'alba e al tramonto, che sono le due ore per cui vale la pena essere lì',
              'Permette trekking a tappe senza tenda né cibo: è il modello alpino e non esiste in questa densità altrove',
              'La cena in comune con gli altri escursionisti è metà dell\'esperienza',
              'Sconti importanti per i soci delle associazioni alpinistiche',
            ],
            contro: [
              'Va prenotato da gennaio-febbraio per l\'estate; le camere private molto prima',
              'Sacco lenzuolo obbligatorio, docce a gettone o assenti, camerate rumorose',
              'Spesso **solo contanti**, perché non c\'è linea',
              'Niente di negoziabile: cena alle 19, luci spente alle 22',
            ],
            perChi: 'Chiunque cammini. Almeno una notte va fatta anche da chi non ha intenzione di fare un trekking lungo.',
          },
          {
            nome: 'Maso o agriturismo di fondovalle',
            sintesi: 'Le strutture agricole dell\'Alto Adige e del Trentino, spesso ancora aziende attive, con camere e colazione di produzione propria.',
            costo: 'sorprendentemente accessibile rispetto agli hotel, ma va prenotato con mesi di anticipo',
            durata: 'base fissa per 4-7 giorni di escursioni giornaliere',
            pro: [
              'Il miglior rapporto qualità-prezzo della montagna italiana',
              'Colazioni con prodotti dell\'azienda che nessun hotel eguaglia',
              'Base comoda per uscite diverse ogni giorno, senza spostare i bagagli',
              'Molte strutture includono la card dei trasporti pubblici di valle',
            ],
            contro: [
              'Si perdono alba e tramonto in quota, che sono il momento migliore',
              'Servono auto o bus ogni mattina, con i parcheggi che si riempiono presto',
              'Prenotazione con mesi di anticipo per luglio e agosto',
            ],
            perChi: 'Chi fa escursioni in giornata, chi viaggia con bambini, chi vuole una base fissa.',
          },
          {
            nome: 'Hotel in località turistica',
            sintesi: 'Ortisei, Cortina, Canazei, Corvara: servizi completi, spa, mezza pensione.',
            costo: 'da alto a molto alto, con picchi in agosto',
            durata: 'settimana classica',
            pro: ['Comodità totale e servizi di livello', 'Ottimo con famiglie o in caso di meteo pessimo', 'Vicinanza agli impianti e ai bus'],
            contro: ['Il fondovalle turistico ha perso quasi ogni carattere alpino', 'Prezzi alti per quello che si vede, rispetto alle altre due opzioni', 'Si vive la montagna a orario, tra le nove e le cinque'],
            perChi: 'Chi cerca una vacanza più che un\'escursione, e chi ha esigenze di comfort precise.',
          },
        ],
        raccomandazione:
          'La formula che funziona meglio è mista: base in un maso di fondovalle per quattro o cinque giorni di uscite, con **almeno una o due notti in rifugio** nel mezzo. Costa poco più, e le due notti in quota sono quello che si ricorda. Chi fa un\'Alta Via, invece, vive in rifugio e basta — e prenota a gennaio.',
      },
    ],
    miaEsperienza:
      'Le Dolomiti sono il posto dove il paragone con il resto del mondo smette di funzionare, e non per campanilismo: la combinazione di pareti verticali, prati alti e una rete di rifugi con cucina e letti non esiste in questa densità da nessun\'altra parte. Si cammina otto ore con uno zaino da trenta litri e la sera si mangia polenta e formaggio fuso a duemilacinquecento metri, con la parete che diventa rosa. L\'enrosadira, che sembra una trovata per depliant, è un fenomeno reale legato alla composizione della dolomia, e la prima volta che si vede una parete accendersi in quel modo si capisce perché a questi monti abbiano dato un nome proprio. Detto questo, c\'è una cosa che va affrontata senza giri di parole: in luglio e agosto certi punti sono diventati impraticabili. Il giro delle Tre Cime nel pieno di agosto è una fila indiana, i parcheggi si esauriscono all\'alba, e nel 2026 hanno dovuto mettere la prenotazione obbligatoria sulla strada. La soluzione non è rinunciare: è andare a settembre, quando i rifugi sono ancora aperti e c\'è un terzo delle persone, oppure spostarsi di venti chilometri verso le valli che nessuno fotografa.',
    esperienzeSlugs: ['alta-via-1', 'tre-cime-lavaredo', 'via-ferrata-dolomiti'],
    tripSlugs: ['dolomiti-estate'],
    imageAlt: 'Le Tre Cime di Lavaredo con l\'enrosadira al tramonto, Dolomiti',
  },
  {
    slug: 'sciare-in-italia',
    paeseSlug: 'italia',
    ordine: 2,
    nome: 'Sciare in Italia',
    tipologia: ['sci', 'montagna', 'inverno'],
    giorniConsigliati: '5-7 giorni per una settimana bianca, 2-3 per un fine settimana lungo',
    visitataPersonalmente: true,
    introduzione:
      'L\'Italia ha una delle offerte sciistiche più grandi al mondo: il solo Dolomiti Superski mette insieme dodici comprensori e oltre milleduecento chilometri di piste con un unico skipass, e sull\'arco alpino ci sono collegamenti internazionali con Francia e Svizzera, ghiacciai sciabili e stazioni a quota altissima. La domanda vera non è dove si può sciare, ma quale comprensorio corrisponde al proprio modo di sciare — e a quanto si è disposti a spendere.',
    percheAndarci:
      'Perché il rapporto tra estensione, qualità dei servizi e prezzo in Italia regge il confronto con Francia, Svizzera e Austria, e perché a differenza di quasi tutto l\'arco alpino qui si mangia bene in quota: il rifugio a metà pista non è un self-service, è un ristorante.',
    cosaVedere: [
      'Il Sellaronda, il giro sciistico attorno al Gruppo del Sella: quattro passi, quattro valli, un giorno intero sugli sci',
      'La Marmolada, con la pista che scende dal ghiacciaio e la vista su tutta la catena',
      'Il Cervino da Breuil-Cervinia, con il collegamento internazionale a Zermatt',
      'Il Monte Bianco da Courmayeur, con lo Skyway e il fuoripista della Vallée Blanche sul versante francese',
      'La Via Lattea, che collega Sestriere, Sauze d\'Oulx, Sansicario e Montgenèvre in Francia',
      'Livigno, zona extradoganale a 1.800 metri, con la neve più affidabile delle Alpi italiane',
    ],
    cosaFare: [
      'Il giro del Sellaronda in giornata, in senso orario o antiorario — vedi la scheda esperienza dedicata',
      'Sci d\'alba, quando i comprensori aprono gli impianti prima dell\'orario per il primo tracciato sul battuto',
      'Scialpinismo o ciaspole, per chi vuole la montagna invernale senza impianti — vedi la scheda esperienza dedicata',
      'Pranzo in un rifugio in quota, che in Italia è parte del motivo per cui si scia',
      'Sci notturno, dove le piste illuminate restano aperte fino a tardi',
    ],
    doveDormire:
      'Vale la regola opposta a quella estiva: d\'inverno **stare sulle piste conta davvero**, perché mezz\'ora di navetta con gli scarponi ai piedi due volte al giorno pesa. Le formule ski-in/ski-out costano di più e spesso li valgono. La settimana bianca in mezza pensione resta il formato più conveniente, e i pacchetti che includono skipass e noleggio fanno risparmiare parecchio rispetto a comprare tutto separatamente.',
    doveMangiare:
      'È il vantaggio competitivo italiano sulla neve: i rifugi di pista non sono mense. Si mangiano canederli, polenta, gulasch e casunziei in Dolomiti, polenta concia e fonduta in Valle d\'Aosta, pizzoccheri in Valtellina, e si beve bene. Il conto è più alto che a valle ma non è quello della Francia o della Svizzera. Da mettere in conto: in alta stagione i rifugi migliori si prenotano, anche a pranzo.',
    comeArrivare:
      'In auto, con **catene o gomme invernali obbligatorie per legge** su gran parte della rete montana nel periodo invernale, con date che variano da regione a regione. I collegamenti in treno arrivano ai fondovalle principali (Bolzano, Aosta, Tirano, Oulx) e proseguono in bus. Gli aeroporti più utili sono Verona, Venezia, Milano, Torino e Innsbruck, con transfer organizzati verso le stazioni maggiori.',
    comeSpostarsi:
      'Dentro i grandi comprensori gli sci sono il mezzo di trasporto: si attraversano valli intere senza toccare l\'auto. Gli skibus di valle sono in genere inclusi nella tessera ospiti e risolvono l\'ultimo miglio.',
    periodoMigliore:
      'La stagione va da inizio dicembre a metà aprile, ma i periodi non sono equivalenti. **Natale e Capodanno** hanno i prezzi più alti dell\'anno e le piste più affollate. **Gennaio dopo l\'Epifania** è il momento migliore per rapporto qualità-prezzo: neve buona, poca gente, prezzi bassi. **Febbraio** è il mese con la neve più affidabile ma coincide con le settimane bianche scolastiche. **Marzo** è il mese migliore per chi scia bene: giornate lunghe, sole, neve ancora buona in quota e prezzi in calo. Ad aprile si scia solo in alta quota e sui ghiacciai.',
    costi:
      'Lo skipass è la voce principale e varia molto. Nel Dolomiti Superski il giornaliero in alta stagione sta attorno agli 86 euro (circa 77 in bassa) e lo stagionale attorno ai 970: sono cifre indicative che vanno riverificate ogni anno. A questi si aggiungono noleggio (25-45€ al giorno per un set completo), lezioni, e il pranzo in quota. **Le tariffe scendono sensibilmente prenotando skipass e alloggio in pacchetto e fuori dai periodi di punta.**',
    erroriDaEvitare: [
      'Prenotare a Natale o a Capodanno senza sapere che sono le due settimane più care dell\'anno, con differenze anche del quaranta per cento rispetto a gennaio',
      'Scegliere il comprensorio per fama invece che per quota: sotto i 1.800 metri, con gli inverni degli ultimi anni, la neve naturale non è più garantita e si scia su innevamento programmato',
      'Comprare skipass e noleggio separatamente quando esiste il pacchetto: la differenza è reale',
      'Mettersi in strada senza catene o gomme invernali: in Italia è un obbligo di legge sanzionabile, non una raccomandazione',
      'Sottovalutare l\'assicurazione: in Italia **il soccorso in pista e in montagna si paga**, e in diverse regioni un intervento con elicottero costa migliaia di euro. Molti skipass includono una copertura base, che va verificata',
      'Affrontare il fuoripista senza ARTVA, pala, sonda e qualcuno che sappia usarli: è la differenza tra uno sport e un rischio',
    ],
    confronti: [
      {
        titolo: 'Quale comprensorio sciistico scegliere in Italia',
        introduzione:
          'La scelta si fa quasi sempre per abitudine o per passaparola, e quasi sempre senza considerare i due criteri che contano davvero: la **quota** (che oggi decide se ci sarà neve) e il **tipo di sciata** che si cerca. Ecco i grandi comprensori italiani messi a confronto su quelle basi.',
        opzioni: [
          {
            nome: 'Dolomiti Superski',
            sintesi: 'Il più grande consorzio sciistico al mondo per estensione servita da un unico skipass: dodici comprensori, oltre 1.200 km di piste, dal Sellaronda alla Marmolada a Cortina.',
            costo: 'giornaliero attorno agli 86€ in alta stagione, stagionale attorno ai 970€',
            durata: 'una settimana non basta per vederlo tutto',
            pro: [
              'Estensione senza confronti: si scia per giorni senza mai ripetere una pista',
              'Il Sellaronda, un giro completo attorno a un massiccio in giornata, non esiste altrove',
              'Qualità dei rifugi in quota nettamente superiore a Francia e Svizzera',
              'Manutenzione delle piste e innevamento programmato tra i migliori d\'Europa',
              'Panorama: si scia dentro un patrimonio UNESCO',
            ],
            contro: [
              'Lo skipass più caro d\'Italia',
              'Piste in gran parte facili e medie: chi cerca pendenze serie trova meno di quanto l\'estensione lasci sperare',
              'Quote medie non altissime rispetto alla Francia: nelle stagioni scarse si dipende molto dall\'innevamento artificiale',
              'Affollamento reale sul Sellaronda nelle settimane di punta',
            ],
            perChi: 'Chi scia per il piacere di girare, chi mette il paesaggio e il pranzo tra i motivi della giornata, famiglie e livelli intermedi.',
          },
          {
            nome: 'Cervinia-Zermatt (Valle d\'Aosta)',
            sintesi: 'Il comprensorio più alto delle Alpi italiane, con collegamento sciistico internazionale alla svizzera Zermatt e sci estivo sul ghiacciaio del Plateau Rosà.',
            costo: 'alto, con supplemento importante per lo skipass internazionale verso Zermatt',
            durata: '5-7 giorni',
            pro: [
              'Quota altissima: è il comprensorio italiano con la neve più garantita, e si scia fino a tarda primavera',
              'Il collegamento a Zermatt permette di sciare in due paesi nello stesso giorno, sotto il Cervino da entrambi i versanti',
              'Piste lunghissime e larghe, perfette per macinare chilometri',
              'Sci estivo sul ghiacciaio',
            ],
            contro: [
              'Il paese di Cervinia non ha nessun carattere: è una stazione costruita per sciare, senza un centro storico',
              'Esposto al vento e alla nebbia in quota, con chiusure impianti frequenti nelle giornate brutte',
              'Il supplemento per Zermatt è caro',
              'Poche piste difficili in proporzione',
            ],
            perChi: 'Chi vuole la certezza della neve e piste lunghe, e chi ci va a fine stagione quando altrove si scia su fondo marcio.',
          },
          {
            nome: 'Livigno',
            sintesi: 'Zona extradoganale in Alta Valtellina a 1.800 metri di quota minima, con esposizione favorevole e una vocazione forte per snowpark e freestyle. Sede olimpica 2026 per le discipline freestyle e snowboard.',
            costo: 'medio, con il vantaggio dell\'esenzione fiscale su attrezzatura, carburante e alcol',
            durata: '5-7 giorni',
            pro: [
              'Quota di partenza alta e clima secco: tra le stazioni italiane con la neve più affidabile',
              'Zona franca: attrezzatura, carburante e generi vari costano sensibilmente meno',
              'Lo snowpark è tra i migliori d\'Europa, e le strutture olimpiche hanno alzato ulteriormente il livello',
              'Ottima anche per sci di fondo, con anelli molto estesi',
            ],
            contro: [
              'Arrivarci è lungo: la strada passa da passi alti o dal tunnel, e in caso di neve i tempi si allungano parecchio',
              'Il paese è lungo e disperso, con navette necessarie',
              'Estensione del comprensorio inferiore a quella dolomitica',
              'Freddo secco molto intenso a gennaio',
            ],
            perChi: 'Freestyler, snowboarder, chi cerca neve garantita senza i prezzi dolomitici, chi scia anche di fondo.',
          },
          {
            nome: 'Via Lattea (Piemonte)',
            sintesi: 'Sestriere, Sauze d\'Oulx, Sansicario, Claviere e la francese Montgenèvre: quattrocento chilometri di piste con un unico skipass, a un\'ora e mezza da Torino.',
            costo: 'nettamente più basso del Dolomiti Superski a parità di estensione',
            durata: '4-6 giorni',
            pro: [
              'Il miglior rapporto chilometri-prezzo delle Alpi italiane',
              'Collegamento con la Francia compreso nello skipass completo',
              'Comodissima da Torino e dal nord-ovest: si fa anche in giornata',
              'Piste tecniche di livello olimpico a Sestriere, eredità dei Giochi 2006',
            ],
            contro: [
              'Innevamento meno affidabile dei comprensori alpini più alti, con dipendenza forte dal programmato',
              'Le stazioni sono architettonicamente poco attraenti, figlie dell\'edilizia degli anni Sessanta e Settanta',
              'Servizi e rifugi non al livello dolomitico',
              'Collegamenti tra i settori a volte lenti',
            ],
            perChi: 'Chi vuole tanti chilometri spendendo poco, chi vive nel nord-ovest, sciatori intermedi e avanzati.',
          },
          {
            nome: 'Monterosa Ski (Valle d\'Aosta e Piemonte)',
            sintesi: 'Champoluc, Gressoney e Alagna collegate tra loro sotto il massiccio del Monte Rosa. È il riferimento italiano per il fuoripista.',
            costo: 'medio',
            durata: '5-7 giorni',
            pro: [
              'Il miglior freeride d\'Italia: Alagna è una delle mete freeride più note d\'Europa',
              'Tre valli walser con un\'identità culturale e architettonica forte, che le stazioni costruite non hanno',
              'Quote alte e versanti nord che tengono bene la neve',
              'Meno affollato dei grandi nomi',
            ],
            contro: [
              'Comprensorio pensato per sciatori esperti: i principianti hanno poco',
              'Il fuoripista qui è serio e richiede attrezzatura di autosoccorso e guida',
              'Collegamenti tra le valli che con vento forte si interrompono',
              'Meno servizi e meno vita serale',
            ],
            perChi: 'Freerider, sciatori esperti, chi cerca montagna vera e non stazione.',
          },
          {
            nome: 'Appennino: Roccaraso, Campo Felice, Abetone, Monte Amiata',
            sintesi: 'Le stazioni appenniniche, dal grande comprensorio di Roccaraso-Rivisondoli in Abruzzo ai poli toscani ed emiliani.',
            costo: 'il più basso in assoluto, spesso la metà delle Alpi',
            durata: 'weekend',
            pro: [
              'Prezzi di skipass, alloggio e ristorazione lontanissimi da quelli alpini',
              'Comodità per chi vive nel centro-sud: si scia a poche ore da Roma e da Napoli',
              'Roccaraso ha un\'estensione seria, la maggiore dell\'Appennino',
              'Atmosfera più familiare e meno mondana',
            ],
            contro: [
              'Quote basse: l\'innevamento è la variabile critica e negli ultimi inverni ha vacillato spesso',
              'Stagioni corte e sempre più incerte',
              'Piste meno estese e meno varie',
              'Affollamento pesante nei fine settimana, perché è il bacino di tutto il centro-sud',
            ],
            perChi: 'Chi vive nel centro-sud, chi scia pochi giorni l\'anno, famiglie con budget contenuto.',
          },
        ],
        raccomandazione:
          'Il criterio più utile oggi è la **quota**, perché è quella che decide se ci sarà neve: sopra i duemila metri di partenza si scia con ragionevole certezza, sotto i milleottocento si dipende dal cannone. Detto questo: per una settimana bianca classica con famiglia o livello intermedio, **Dolomiti Superski**, accettandone il prezzo e andando a gennaio dopo l\'Epifania o a marzo. Per la certezza della neve e per sciare tardi, **Cervinia**. Per il fuoripista, **Monterosa**. Per tanti chilometri a poco, **Via Lattea**. Per il freestyle e la neve garantita senza i prezzi dolomitici, **Livigno**. L\'Appennino ha senso per chi vive nel centro-sud e scia pochi giorni, con la consapevolezza che la stagione è diventata una scommessa.',
      },
      {
        titolo: 'Quando andare: le cinque stagioni della settimana bianca',
        introduzione:
          'Nella stessa stazione, nello stesso comprensorio, lo stesso appartamento può costare il doppio a seconda della settimana. Conoscere il calendario è il singolo modo più efficace di risparmiare sulla neve.',
        opzioni: [
          {
            nome: 'Dicembre fino all\'Immacolata',
            sintesi: 'L\'apertura della stagione, con l\'8 dicembre come primo weekend forte.',
            costo: 'basso fuori dal ponte, alto durante',
            durata: 'weekend o pochi giorni',
            pro: ['Prezzi bassi nelle settimane feriali', 'Piste nuove e poca gente', 'Atmosfera di inizio stagione'],
            contro: ['Innevamento incerto: spesso è aperta solo una parte del comprensorio', 'Giornate cortissime', 'Il ponte dell\'Immacolata ha già prezzi da alta stagione'],
            perChi: 'Chi vuole sciare presto e accetta che sia aperto a metà.',
          },
          {
            nome: 'Natale e Capodanno',
            sintesi: 'Le due settimane più care dell\'anno, senza confronto.',
            costo: 'il massimo assoluto, con differenze anche del 40% rispetto a gennaio',
            durata: 'settimana',
            pro: ['Atmosfera, eventi, vita serale al massimo', 'Tutti gli impianti aperti', 'Se si viaggia con famiglia, coincide con le vacanze scolastiche'],
            contro: ['Prezzi altissimi su tutto', 'Piste affollate e code agli impianti', 'Va prenotato con mesi di anticipo'],
            perChi: 'Chi non ha alternative per il calendario, e chi cerca l\'atmosfera più che la sciata.',
          },
          {
            nome: 'Gennaio dopo l\'Epifania',
            sintesi: 'La finestra migliore per rapporto qualità-prezzo di tutta la stagione.',
            costo: 'il più basso dell\'alta stagione, spesso con offerte aggressive',
            durata: 'settimana',
            pro: [
              'Prezzi in caduta subito dopo il 6 gennaio',
              'Neve in genere ottima e comprensori completamente aperti',
              'Piste vuote nelle settimane feriali',
            ],
            contro: ['Freddo intenso, con giornate rigide in quota', 'Giornate ancora corte', 'Meno vita serale'],
            perChi: 'Chiunque possa scegliere le date. È la risposta giusta nella maggioranza dei casi.',
          },
          {
            nome: 'Febbraio',
            sintesi: 'Il mese con la neve statisticamente più affidabile, ma coincide con le settimane bianche scolastiche.',
            costo: 'alto, con picchi nelle settimane di vacanza scolastica',
            durata: 'settimana',
            pro: ['Neve al suo meglio', 'Giornate che si allungano', 'Comprensori al massimo dell\'efficienza'],
            contro: ['Affollamento nelle settimane di vacanze scolastiche, che cambiano per regione', 'Prezzi alti', 'Code agli impianti nelle ore centrali'],
            perChi: 'Chi mette la qualità della neve davanti a tutto, evitando le settimane scolastiche della propria regione e delle confinanti.',
          },
          {
            nome: 'Marzo e inizio aprile',
            sintesi: 'La stagione dello sci primaverile: sole, giornate lunghe, prezzi in calo.',
            costo: 'in discesa, con offerte forti a fine stagione',
            durata: 'settimana o weekend',
            pro: [
              'Giornate lunghe e luminose: si scia dalle nove alle cinque',
              'Prezzi sensibilmente più bassi',
              'Pranzi sulle terrazze dei rifugi, che sono metà del piacere',
              'Poca gente dopo le settimane scolastiche',
            ],
            contro: [
              'La neve si trasforma: dura al mattino, marcia nel pomeriggio, e alle quote basse può sparire',
              'Alcuni impianti chiudono prima',
              'Serve alta quota per avere garanzie',
            ],
            perChi: 'Chi scia bene e sa gestire la neve trasformata, e chi mette il sole tra i motivi per andare in montagna.',
          },
        ],
        raccomandazione:
          '**Gennaio dopo l\'Epifania** se si può scegliere liberamente: stesse piste, stesso comprensorio, quaranta per cento in meno e nessuna coda. **Marzo in alta quota** se si scia bene e si vuole il sole. Natale e Capodanno solo se il calendario non lascia alternative — e in quel caso prenotando con mesi di anticipo.',
      },
    ],
    miaEsperienza:
      'La cosa che rende lo sci italiano diverso da quello francese o svizzero non è la lunghezza delle piste: è il pranzo. In Francia si scia forte e si mangia in un self-service; in Dolomiti si fanno quattro ore al mattino, ci si siede in un rifugio a duemilaquattrocento metri e si mangiano canederli e strudel davanti a una parete rosa. Chi scia per fare chilometri lo considera tempo perso, chi ci va per stare in montagna lo considera il motivo. Il Sellaronda, il giro attorno al Gruppo del Sella, è la cosa più bella e più sopravvalutata insieme: bellissimo come idea — quattro passi, quattro valli, un massiccio intero girato sugli sci in una giornata — e nelle settimane di punta è una coda continua, con le ultime risalite che chiudono prestissimo e il rischio concreto di restare dalla parte sbagliata. Va fatto in gennaio, partendo alle nove. La cosa che invece è cambiata davvero negli ultimi anni è la quota: sotto i milleottocento metri la neve naturale non è più una garanzia, e scegliere la stazione per fama invece che per altitudine è il modo più rapido per trovare una lingua bianca in mezzo all\'erba.',
    esperienzeSlugs: ['sellaronda', 'scialpinismo-ciaspole'],
    tripSlugs: ['settimana-bianca'],
    imageAlt: 'Piste da sci e pareti dolomitiche innevate al mattino, Alto Adige',
  },
  {
    slug: 'roma',
    paeseSlug: 'italia',
    ordine: 3,
    nome: 'Roma',
    tipologia: ['città d\'arte', 'archeologia', 'gastronomia'],
    giorniConsigliati: '4-5 giorni, e non bastano',
    visitataPersonalmente: true,
    introduzione:
      'Tremila anni di stratificazione in un centro storico che è per intero patrimonio UNESCO, con dentro uno stato sovrano. È l\'unica città al mondo dove si scava per una metropolitana e si trova una caserma imperiale, e dove questo è considerato un problema logistico più che una scoperta.',
    percheAndarci:
      'Perché non esiste un altro posto con questa densità di strati sovrapposti, e perché a differenza di quasi tutte le grandi città d\'arte europee Roma è ancora abitata nel suo centro: nei rioni si compra il pane, si litiga e si vive.',
    cosaVedere: [
      'Il Colosseo, il Foro Romano e il Palatino, con il biglietto unico — **nominativo dal 2023, con documento d\'identità obbligatorio all\'ingresso**',
      'I Musei Vaticani e la Cappella Sistina, più San Pietro con la cupola',
      'Il Pantheon, che dal 2023 ha un biglietto d\'ingresso, e la cupola in calcestruzzo non armato più grande mai costruita',
      'Il Foro di Traiano, i Mercati e la Domus Aurea, con le visite guidate a numero chiusissimo',
      'Trastevere, il Ghetto e Monti: i rioni dove Roma è ancora un posto dove si vive',
      'La Galleria Borghese, a prenotazione obbligatoria con ingressi ogni due ore',
      'L\'Appia Antica e gli acquedotti, che sono la Roma che quasi nessuno mette in programma',
    ],
    cosaFare: [
      'Roma sotterranea: Basilica di San Clemente, Case Romane del Celio, Domus Aurea — vedi la scheda esperienza dedicata',
      'Camminare l\'Appia Antica la domenica, quando è chiusa al traffico — vedi la scheda esperienza dedicata',
      'Aperitivo e cena nei rioni invece che attorno ai monumenti, che è la differenza tra mangiare bene e mangiare male',
      'Entrare in una decina di chiese a caso: a Roma la pittura di Caravaggio è gratis e spesso non c\'è nessuno',
    ],
    doveDormire:
      'Monti e Trastevere per stare in un rione vivo, Prati per i prezzi più bassi e la comodità della metro A verso il Vaticano, Testaccio per mangiare bene e stare fuori dalla calca. Da evitare le zone immediatamente attorno alla Stazione Termini per la sera e l\'area di Fontana di Trevi, che di giorno è impraticabile.',
    doveMangiare:
      'La cucina romana è di quattro paste — cacio e pepe, gricia, amatriciana, carbonara — più il quinto quarto, che è la parte che pochi provano e che spiega la città meglio delle paste: coda alla vaccinara, trippa, coratella. Da mangiare in trattoria a Testaccio o al Pigneto, non nel centro. Il carciofo alla giudia nel Ghetto in stagione (da fine inverno a primavera), la pizza romana sottile e croccante, il supplì come merenda. **La regola che vale più di tutte: non mangiare in nessun locale con le foto dei piatti fuori o con qualcuno che invita a entrare.**',
    comeArrivare:
      'Volo su Fiumicino (FCO), con il Leonardo Express in 32 minuti per Termini, o Ciampino (CIA) per i voli low cost. In treno, l\'alta velocità collega Roma a Milano in tre ore e a Napoli in poco più di un\'ora.',
    comeSpostarsi:
      'Metropolitana con tre linee (poche per una città così, e la ragione è archeologica: ogni scavo trova qualcosa), autobus lenti e irregolari, tram utili in alcune direttrici. **Il centro storico si cammina**, ed è l\'unico modo sensato: le distanze sono minori di quanto sembri e quasi tutto è nel raggio di due chilometri.',
    periodoMigliore:
      '**da ottobre a marzo**, senza discussione. Aprile, maggio e settembre sono bellissimi e pieni; luglio e agosto sono difficili, con temperature che superano i 38 gradi e ondate di calore che rendono la visita faticosa e per alcuni rischiosa. Ad agosto, in compenso, molti romani sono via e la città ha un\'altra faccia — con molte trattorie chiuse.',
    costi:
      'Biglietto unico Colosseo-Foro-Palatino, nominativo e a fascia oraria; Musei Vaticani con prenotazione obbligatoria di fatto; Galleria Borghese con ingressi contingentati ogni due ore. Le chiese sono quasi tutte gratuite, e contengono una parte enorme di quello che si viene a vedere.',
    erroriDaEvitare: [
      'Comprare il biglietto del Colosseo sul posto o da rivenditori per strada: è **nominativo**, serve un documento d\'identità originale (non una copia), e dal 2026 il cambio del nominativo è stato ulteriormente ristretto. Si compra solo sul canale ufficiale, con settimane di anticipo per le fasce migliori',
      'Non prenotare la Galleria Borghese: gli ingressi sono contingentati a fasce di due ore e si esauriscono',
      'Mangiare entro trecento metri da un monumento famoso',
      'Programmare Vaticano e Colosseo lo stesso giorno: sono due mezze giornate pesanti e stanno agli antipodi del centro',
      'Dare per scontato di poter entrare in San Pietro in pantaloncini: il codice di abbigliamento è applicato all\'ingresso',
      'Andarci in luglio o agosto senza organizzare le giornate attorno al caldo, con i musei nelle ore centrali',
    ],
    miaEsperienza:
      'Roma è la città che si visita peggio proprio perché si crede di conoscerla. La trappola è il triangolo Colosseo-Trevi-Vaticano, che si fa in due giorni con la lingua di fuori, in coda, mangiando male. Quello che invece resta sono due cose che non costano niente. La prima sono le chiese: a Roma ci sono tre Caravaggio in San Luigi dei Francesi, si entra gratis, e a metà mattina di un martedì di novembre non c\'è quasi nessuno — si mette un euro nella gettoniera per la luce e si sta lì dieci minuti davanti alla Vocazione di San Matteo. La seconda è l\'Appia Antica di domenica, chiusa al traffico: si cammina su basoli romani originali tra i sepolcri e i pini, con gli acquedotti in lontananza, e per chilometri ci sono solo ciclisti e famiglie. È a mezz\'ora dal Colosseo e non ci va quasi nessuno dei milioni di persone che quel Colosseo lo fotografano. Sul mangiare, una sola regola vale tutto il resto: allontanarsi. A Testaccio, al Pigneto o a San Lorenzo si mangia una cacio e pepe fatta bene per quindici euro, a cinquecento metri da un posto dove la stessa cosa costa il doppio ed è surgelata.',
    esperienzeSlugs: ['roma-sotterranea', 'appia-antica'],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Il Colosseo visto dal Foro Romano al tramonto, Roma',
  },
  {
    slug: 'firenze',
    paeseSlug: 'italia',
    ordine: 4,
    nome: 'Firenze',
    tipologia: ['città d\'arte', 'rinascimento', 'gastronomia'],
    giorniConsigliati: '3 giorni, più uno o due per la Toscana attorno',
    visitataPersonalmente: true,
    introduzione:
      'Il posto dove è stato inventato il Rinascimento, concentrato in un centro storico che si attraversa a piedi in venti minuti. È anche, per la stessa ragione, una delle città più sature d\'Europa: nello stesso mezzo chilometro quadrato ci sono la cupola di Brunelleschi, gli Uffizi, il David e il Ponte Vecchio.',
    percheAndarci:
      'Perché la densità di opere per metro quadrato non ha paragoni al mondo, e perché la cupola di Brunelleschi — costruita senza centine, con una tecnica che nessuno è mai riuscito a replicare esattamente — è ancora oggi un problema di ingegneria prima che un monumento.',
    cosaVedere: [
      'La cupola di Brunelleschi, salendo i 463 gradini fino alla lanterna — **salita a prenotazione obbligatoria con fascia oraria**',
      'Gli Uffizi, con la prenotazione obbligatoria di fatto',
      'La Galleria dell\'Accademia per il David, e il Museo dell\'Opera del Duomo, che quasi tutti saltano e che è il migliore della città',
      'Palazzo Pitti e il Giardino di Boboli, sull\'altra riva',
      'La Cappella Brancacci e le Cappelle Medicee, meno affollate e altrettanto importanti',
      'San Miniato al Monte, la chiesa romanica sulla collina, con il canto gregoriano dei monaci nel pomeriggio',
      'L\'Oltrarno, con le botteghe artigiane che sono la parte della città che sta scomparendo più in fretta',
    ],
    cosaFare: [
      'Salire la cupola prenotando la prima fascia del mattino — vedi la scheda esperienza dedicata',
      'Passare un pomeriggio nell\'Oltrarno tra le botteghe di restauro, doratura e pelletteria',
      'Salire a San Miniato al tramonto invece che al Piazzale Michelangelo, che è a cento metri e ha dieci volte la gente',
      'Mangiare in una trattoria dell\'Oltrarno o a Sant\'Ambrogio invece che nel quadrilatero del centro',
    ],
    doveDormire:
      'L\'Oltrarno per stare in un quartiere ancora vivo a cinque minuti a piedi dal centro, Sant\'Ambrogio per i prezzi e il mercato, San Frediano per la sera. Il quadrilatero tra Duomo e Signoria è comodissimo e caro, e la sera è vuoto di residenti.',
    doveMangiare:
      'La cucina toscana è povera e di materia prima: ribollita, pappa al pomodoro, panzanella d\'estate, e la bistecca alla fiorentina — che è un taglio preciso, alto almeno tre dita, cotto al sangue e non negoziabile, servito al chilo. Da mangiare i panini con il lampredotto ai banchi, che è la cosa più fiorentina che esista, e i crostini di fegatini. Il mercato di Sant\'Ambrogio è quello dei residenti; quello centrale di San Lorenzo, al primo piano, è diventato una food court.',
    comeArrivare:
      'Alta velocità: Firenze Santa Maria Novella è in centro, a quindici minuti a piedi dal Duomo, e collega Milano in un\'ora e quaranta e Roma in un\'ora e mezza. L\'aeroporto di Firenze è piccolo; Pisa e Bologna sono le alternative con collegamento in treno.',
    comeSpostarsi:
      'Tutto a piedi: il centro storico è piccolo, e questo è insieme il suo pregio e la ragione della congestione. La tramvia serve la periferia e l\'aeroporto. **L\'auto in centro è inutile e sanzionata dalla ZTL**, con telecamere che multano regolarmente chi non lo sa.',
    periodoMigliore:
      'novembre, gennaio e febbraio sono i mesi in cui la città torna vivibile e i musei si visitano senza code assurde. Aprile-giugno e settembre-ottobre sono i più belli e i più pieni. Luglio e agosto sono caldissimi e saturi.',
    costi:
      'Uffizi e Accademia hanno tariffe più alte in alta stagione; il biglietto cumulativo del complesso del Duomo copre cupola, battistero, campanile, cripta e museo ed è l\'unico modo di salire. **Le prime domeniche del mese i musei statali sono gratuiti**, il che significa anche code enormi.',
    erroriDaEvitare: [
      'Presentarsi agli Uffizi o all\'Accademia senza prenotazione: le code arrivano a ore, e in alta stagione si rischia di non entrare',
      'Non prenotare la salita alla cupola, che ha fasce orarie contingentate e si esaurisce con giorni di anticipo',
      'Saltare il Museo dell\'Opera del Duomo perché "è solo un museo annesso": contiene le porte originali del Battistero e la Pietà Bandini, ed è il migliore della città',
      'Entrare in centro in auto: la ZTL è attiva e le multe arrivano a casa mesi dopo',
      'Andare al Piazzale Michelangelo al tramonto invece che a San Miniato, che sta cento metri più su, ha la stessa vista e un decimo della gente',
      'Ordinare una "bistecca fiorentina" ben cotta o sotto i due etti e mezzo: non esiste, e chi la serve così sta servendo altro',
    ],
    miaEsperienza:
      'Firenze ha un problema di scala che nessuna guida dice: tutto quello che si viene a vedere sta in mezzo chilometro quadrato, e questo significa che da aprile a ottobre il centro è una folla compatta che si sposta lentamente lungo tre assi. La conseguenza pratica è che la città va fatta al contrario — presto al mattino, o a novembre. La salita alla cupola prenotata alla prima fascia, alle otto e mezza, è un\'altra esperienza rispetto a farla a mezzogiorno: si sale per una scala stretta tra i due gusci, si passa a pochi centimetri dagli affreschi del Giudizio, e in cima c\'è aria. Il pezzo però che quasi nessuno fa e che vale quanto gli Uffizi è il Museo dell\'Opera del Duomo: dentro ci sono le porte originali del Battistero — quelle in piazza sono copie — e l\'ultima Pietà di Michelangelo, quella che voleva distruggere. Ci sono quattro persone. E per il tramonto: tutti vanno al Piazzale Michelangelo, che è un parcheggio con i venditori; cento metri più su c\'è San Miniato al Monte, una chiesa romanica del Mille con la facciata a intarsi di marmo, la stessa vista, e nel pomeriggio i monaci che cantano in gregoriano nella cripta.',
    esperienzeSlugs: ['cupola-brunelleschi'],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'La cupola di Brunelleschi e i tetti di Firenze visti dall\'alto al tramonto',
  },
  {
    slug: 'venezia',
    paeseSlug: 'italia',
    ordine: 5,
    nome: 'Venezia',
    tipologia: ['città d\'arte', 'isole', 'architettura'],
    giorniConsigliati: '3 giorni, di cui uno per la laguna',
    visitataPersonalmente: true,
    introduzione:
      'Una città costruita su pali di legno conficcati nel fango di una laguna, che per mille anni è stata una potenza marittima e oggi ha meno di cinquantamila residenti nel centro storico — meno di un terzo rispetto agli anni Cinquanta. È l\'unico posto in Italia dove esiste un biglietto d\'ingresso per la città.',
    percheAndarci:
      'Perché non somiglia a nient\'altro e non è replicabile: una città senza automobili, dove tutto — i rifiuti, i mobili, i malati — si muove in barca. E perché la laguna, che quasi nessuno visita, è la ragione per cui Venezia esiste.',
    cosaVedere: [
      'La Basilica di San Marco, con i mosaici d\'oro, e il Palazzo Ducale con i Piombi e il Ponte dei Sospiri',
      'Le Gallerie dell\'Accademia e la Collezione Peggy Guggenheim',
      'Il Ponte di Rialto e il mercato del pesce al mattino presto, che è ancora un mercato vero',
      'Cannaregio e il Ghetto, il primo ghetto ebraico d\'Europa, dove Venezia è ancora abitata',
      'Le isole della laguna: Murano per il vetro, Burano per le case colorate, Torcello per la basilica con i mosaici bizantini',
      'La Scuola Grande di San Rocco, con il ciclo di Tintoretto: è la Cappella Sistina di Venezia e ci sono dieci persone',
      'San Giorgio Maggiore, con il campanile che ha la vista migliore su San Marco e nessuna coda',
    ],
    cosaFare: [
      'Venezia all\'alba, prima che arrivino i treni e le navi — vedi la scheda esperienza dedicata',
      'Prendere il vaporetto della linea 1 lungo il Canal Grande, che costa una frazione di una gondola e dura molto di più',
      'Perdersi a Cannaregio e Castello, che sono i sestieri dove vive ancora la gente',
      'Un giro in laguna verso Torcello e le isole minori, che è la Venezia di prima di Venezia',
    ],
    doveDormire:
      'Cannaregio e Castello per stare in una zona ancora abitata e spendere meno; Dorsoduro per la vicinanza ai musei e una sera più viva. **Dormire in centro esenta dal contributo di accesso** e permette di avere la città all\'alba e dopo le sei di sera, che sono le uniche due finestre in cui è quello che ci si aspettava. Mestre costa meno ma toglie esattamente questo.',
    doveMangiare:
      'La cucina veneziana è di laguna e di pesce povero: sarde in saor, baccalà mantecato, moeche (i granchi in muta, stagionali e costosissimi), risotto di gò, fegato alla veneziana. Il modo giusto di mangiare è il **giro di bacari**: piccole osterie dove si mangiano i cicheti in piedi al banco — mezzo uovo con l\'acciuga, polpette, baccalà su un crostino — accompagnati da un\'ombra di vino, spostandosi da una all\'altra. Costa poco e si mangia benissimo, purché si esca dagli assi principali.',
    comeArrivare:
      'Treno fino a Venezia Santa Lucia, che è **dentro** la città: è il modo di arrivarci più sensato in assoluto. Aeroporto Marco Polo, collegato con vaporetto Alilaguna o bus a Piazzale Roma. In auto si arriva solo fino a Piazzale Roma o al Tronchetto, con parcheggi carissimi.',
    comeSpostarsi:
      'A piedi e in vaporetto. **I biglietti singoli del vaporetto sono cari e i pass a tempo si ripagano subito** se si fa più di una corsa al giorno. I traghetti da gondola che attraversano il Canal Grande nei punti senza ponte costano pochi centesimi e quasi nessun visitatore sa che esistono.',
    periodoMigliore:
      'da novembre a febbraio — escluso il Carnevale — è quando Venezia torna a essere una città. Le giornate sono corte e umide, c\'è la possibilità di acqua alta (che oggi il MOSE limita ma non annulla), e in cambio ci si trova nei campielli da soli. Aprile-giugno e settembre-ottobre sono i mesi più belli e i più saturi.',
    costi:
      '**Il contributo di accesso** si applica a chi entra in giornata senza pernottare, in un numero definito di giornate di alta stagione: nel 2026 si è pagato in 60 giornate tra aprile e luglio, 5 euro prenotando con almeno quattro giorni d\'anticipo e 10 euro sotto quella soglia. Chi pernotta in città ne è esente ma deve comunque registrarsi. Il calendario cambia ogni anno e va verificato. Il pass vaporetto a tempo è quasi sempre conveniente; la gondola ha tariffe fissate dal Comune ed è cara per definizione.',
    erroriDaEvitare: [
      'Venire in giornata in alta stagione senza verificare il contributo di accesso e senza prenotarlo in anticipo, pagando il doppio',
      'Fare Venezia tra le dieci e le cinque e giudicarla: in quelle ore, sugli assi principali, è una folla compatta. Alle sette del mattino la stessa calle è vuota',
      'Mangiare nei ristoranti con il menu turistico attorno a San Marco e Rialto: è il posto d\'Italia dove il rapporto qualità-prezzo è peggiore',
      'Prendere la gondola pensando che sia un trasporto: è un\'esperienza a tariffa fissa e cara. Il vaporetto 1 sul Canal Grande costa una frazione e dura di più',
      'Saltare la laguna: Torcello, con la basilica del VII secolo e i mosaici del Giudizio Universale, è dove Venezia è cominciata e ci sono venti persone',
      'Dare per scontato di trovare un bancomat o un bagno pubblico facilmente: entrambi sono scarsi e i secondi a pagamento',
    ],
    miaEsperienza:
      'Venezia è la città più fraintesa d\'Italia, e il motivo è l\'orario. Tra le dieci del mattino e le cinque del pomeriggio, sugli assi che vanno dalla stazione a Rialto e da Rialto a San Marco, si cammina in un flusso compatto e si capisce perché i veneziani se ne siano andati — sono meno di cinquantamila, un terzo rispetto agli anni Cinquanta, e continuano a calare. Ma quella è una fascia oraria, non la città. Alle sette del mattino le stesse calli sono vuote, si sente l\'acqua battere contro i muri, passano le barche delle consegne, e i bacari aprono per chi va al lavoro. Dopo le sette di sera succede la stessa cosa al contrario. È l\'unica ragione seria per dormire in centro invece che a Mestre: non la comodità, ma l\'accesso a quelle due finestre. La cosa che invece quasi nessuno fa è la laguna: Torcello ha una basilica del settimo secolo con un Giudizio Universale a mosaico che copre un\'intera parete, ci si arriva in quaranta minuti di vaporetto, e ci sono venti persone. È lì che Venezia è cominciata, prima che esistesse Venezia.',
    esperienzeSlugs: ['venezia-alba'],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Un canale di Venezia all\'alba con le barche ormeggiate e nessuno in giro',
  },
  {
    slug: 'napoli',
    paeseSlug: 'italia',
    ordine: 6,
    nome: 'Napoli e il golfo',
    tipologia: ['città d\'arte', 'archeologia', 'gastronomia'],
    giorniConsigliati: '4-5 giorni con Pompei e la costiera',
    visitataPersonalmente: true,
    introduzione:
      'Il centro storico più densamente abitato d\'Europa, fondato dai greci, con sotto quaranta metri di città sotterranea e davanti un vulcano attivo che nel 79 d.C. ha sigillato due città intere sotto la cenere, conservandole meglio di qualsiasi restauro.',
    percheAndarci:
      'Perché è la città italiana con più energia e più contraddizioni, e perché nel raggio di trenta chilometri ci sono Pompei, Ercolano, il Vesuvio, i Campi Flegrei, Capri e la Costiera Amalfitana: una densità che non esiste altrove.',
    cosaVedere: [
      'Il centro storico UNESCO, con Spaccanapoli e San Gregorio Armeno',
      'Il Museo Archeologico Nazionale, che contiene i reperti di Pompei ed Ercolano e va visto **prima** dei siti, non dopo',
      'La Cappella Sansevero con il Cristo Velato',
      'Napoli sotterranea e le catacombe di San Gennaro e San Gaudioso',
      'Pompei ed Ercolano — **biglietti nominativi e tetto di 20.000 visitatori al giorno a Pompei, con fasce orarie in estate**',
      'Il Vesuvio, con la salita al cratere, e i Campi Flegrei con la Solfatara',
      'La Costiera Amalfitana, Capri, Ischia e Procida',
    ],
    cosaFare: [
      'Pompei ed Ercolano nello stesso viaggio, sapendo che sono complementari e non alternative — vedi la scheda esperienza dedicata',
      'Napoli sotterranea, scendendo nelle cave greche e nei rifugi antiaerei — vedi la scheda esperienza dedicata',
      'Mangiare una pizza napoletana nel luogo in cui è nata, che è un\'altra cosa da qualsiasi altra pizza — vedi la scheda esperienza dedicata',
      'Il Sentiero degli Dei sulla Costiera, da Bomerano a Nocelle, che è la costiera vista dall\'alto invece che dalla strada',
    ],
    doveDormire:
      'Il centro storico per stare dentro la città, Chiaia per una zona più tranquilla e residenziale, il Vomero per la vista e i prezzi. Per la Costiera, dormire a Napoli e fare le gite in giornata costa molto meno che alloggiare ad Amalfi o Positano in stagione.',
    doveMangiare:
      'La pizza, ovviamente, con la differenza che qui è un cibo popolare e costa poco: l\'impasto alto sul cornicione, cotto novanta secondi a quattrocento gradi, morbido al centro al punto che si mangia piegata. Poi il ragù napoletano che cuoce ore, la genovese (che di genovese non ha niente), il babà, la sfogliatella riccia calda del mattino, e il caffè, che a Napoli è una cosa seria — corto, forte, bevuto in piedi. E la pizza a portafoglio da strada, che costa due euro.',
    comeArrivare:
      'Alta velocità da Roma in poco più di un\'ora e da Milano in quattro e mezza, con la stazione di Napoli Centrale in città. Aeroporto di Capodichino, vicinissimo al centro. Per la Costiera e Pompei si usa la Circumvesuviana, che è lenta e affollata ma diretta.',
    comeSpostarsi:
      'Metropolitana linea 1, con le "stazioni dell\'arte" che sono opere in sé, e funicolari verso il Vomero. Il centro si cammina. **Per la costiera, il traghetto batte l\'auto e l\'autobus in ogni stagione**, e d\'estate la strada statale amalfitana è un ingorgo continuo.',
    periodoMigliore:
      'aprile-giugno e settembre-ottobre. In agosto la costiera è satura e la statale è bloccata; in inverno Napoli è ottima e la costiera si svuota (con molte strutture chiuse). Il periodo natalizio a San Gregorio Armeno, la strada dei presepi, è un fenomeno a sé: bellissimo e impraticabile.',
    costi:
      'Museo Archeologico e siti vesuviani hanno biglietti contenuti rispetto al nord Italia. Il biglietto cumulativo per Pompei, Ercolano, Oplontis e Stabia dura tre giorni e conviene sempre se se ne fanno almeno due.',
    erroriDaEvitare: [
      'Andare a Pompei senza biglietto prenotato: dal 2024 i biglietti sono **nominativi** e c\'è un **tetto di 20.000 visitatori al giorno**, con fasce orarie in estate (15.000 al mattino, 5.000 dal primo pomeriggio). Esaurita la quota non si entra, né online né in biglietteria',
      'Visitare Pompei senza aver visto prima il Museo Archeologico di Napoli: mosaici, affreschi e bronzi migliori sono lì, e senza quel passaggio il sito sembra un campo di muri',
      'Fare Pompei a mezzogiorno d\'estate: non c\'è ombra, è vastissima, e ogni anno qualcuno sta male',
      'Scegliere Pompei al posto di Ercolano: Ercolano è molto più piccola ma meglio conservata — ci sono i piani superiori, il legno carbonizzato, i mobili',
      'Guidare sulla statale amalfitana in agosto',
      'Aspettarsi che a Napoli il traffico e i motorini seguano le regole a cui si è abituati: si attraversa con decisione e prevedibilità, non aspettando un varco che non arriva',
    ],
    miaEsperienza:
      'Napoli è la città italiana che più divide, e la ragione è che chiede di adattarsi invece di accogliere. Il centro storico è la zona più densamente abitata d\'Europa e si sente: i vicoli sono stretti, i motorini passano dove non dovrebbero, i panni sono stesi sopra la testa e c\'è un rumore costante. Chi si irrita torna a casa dicendo che è caotica; chi entra nel ritmo scopre la città con più energia del paese. La cosa che però cambia di più la visita è un consiglio banale sull\'ordine: il Museo Archeologico Nazionale va visto **prima** di Pompei e non dopo. Tutti i mosaici, gli affreschi e i bronzi migliori sono stati portati lì nell\'Ottocento, e chi arriva a Pompei senza averli visti cammina per tre ore in mezzo a muri senza capire cosa ci fosse dentro. E poi Ercolano, che quasi tutti saltano per fare la più famosa: è un decimo di Pompei ma è stata sepolta da fango e non da cenere, quindi si sono conservati i piani superiori, le travi di legno carbonizzate e perfino i mobili. Si cammina dentro case a due piani con le scale ancora al loro posto.',
    esperienzeSlugs: ['pompei-ercolano', 'napoli-sotterranea', 'pizza-napoletana'],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Il golfo di Napoli con il Vesuvio sullo sfondo visto dal lungomare',
  },
  {
    slug: 'milano-nord',
    paeseSlug: 'italia',
    ordine: 7,
    nome: 'Milano e il nord',
    tipologia: ['città', 'design', 'laghi'],
    giorniConsigliati: '2-3 giorni, più i laghi',
    visitataPersonalmente: true,
    introduzione:
      'La città che meno somiglia al resto d\'Italia: lavora, si muove in fretta, e ha scelto il design e la moda come identità. Ha anche un Duomo gotico che ci hanno messo quasi seicento anni a finire e, su un muro di refettorio, un dipinto che si prenota mesi prima per vederlo quindici minuti.',
    percheAndarci:
      'Perché è la porta d\'ingresso naturale del nord Italia e perché nel raggio di un\'ora ha i laghi prealpini — Como, Maggiore, Garda — che sono tra i paesaggi più celebrati d\'Europa da due secoli.',
    cosaVedere: [
      'Il Duomo e soprattutto le **terrazze**, che si camminano tra i pinnacoli e sono la parte migliore',
      'Il Cenacolo di Leonardo in Santa Maria delle Grazie — **prenotazione obbligatoria, aperture a cadenza trimestrale, quindici minuti di visita**',
      'La Pinacoteca di Brera e il quartiere omonimo',
      'Il Castello Sforzesco, con l\'ultima Pietà di Michelangelo, lasciata incompiuta',
      'La Galleria Vittorio Emanuele II e il Teatro alla Scala con il suo museo',
      'I Navigli e la zona di Porta Venezia, per la sera',
      'Il Lago di Como con Bellagio e Varenna, il Lago Maggiore con le Isole Borromee, il Garda con Sirmione',
    ],
    cosaFare: [
      'Salire sulle terrazze del Duomo, meglio a piedi che in ascensore',
      'Prenotare il Cenacolo con mesi di anticipo — è l\'unico modo, e le prenotazioni si aprono a scaglioni trimestrali',
      'Aperitivo, che a Milano è un\'istituzione codificata e non una moda',
      'Giornata sul Lago di Como con il battello, che è il modo giusto di vederlo: la strada costiera è stretta e trafficata',
    ],
    doveDormire:
      'Brera e il centro per la comodità, Navigli e Porta Venezia per la sera, la zona della Stazione Centrale per i prezzi. Milano è ben servita dalla metropolitana: la posizione conta meno che in altre città italiane.',
    doveMangiare:
      'La cucina milanese vera è ricca e invernale: risotto allo zafferano, cotoletta (alta, con l\'osso, non impanata sottile), ossobuco, cassoeula. Il resto è una scena internazionale tra le più sviluppate d\'Italia. L\'aperitivo è un formato: si paga il drink e il buffet è compreso, con qualità molto variabile. I mercati coperti e la zona di Porta Romana hanno il miglior rapporto qualità-prezzo.',
    comeArrivare:
      'Tre aeroporti (Malpensa, Linate, Bergamo) e il nodo ferroviario più importante d\'Italia: da Milano Centrale si raggiunge Roma in tre ore, Firenze in un\'ora e quaranta, Venezia in due e mezza.',
    comeSpostarsi:
      'Metropolitana con quattro linee, tram storici, bike e scooter sharing capillare. **Area B e Area C limitano l\'accesso delle auto al centro**, con telecamere: chi entra in auto senza sapere cosa sono paga.',
    periodoMigliore:
      'aprile-giugno e settembre-ottobre. L\'inverno è freddo e nebbioso ma la città funziona; l\'estate è afosa e ad agosto Milano si svuota, con molti locali chiusi. Durante il Salone del Mobile (aprile) e le settimane della moda i prezzi degli alloggi triplicano e trovare posto è difficile.',
    costi:
      'La città più cara d\'Italia sugli alloggi. Duomo e terrazze hanno un biglietto cumulativo; il Cenacolo ha un biglietto contenuto ma il problema è la disponibilità, non il prezzo.',
    erroriDaEvitare: [
      'Provare a vedere il Cenacolo senza prenotazione: **non si entra**, le aperture delle prenotazioni sono trimestrali e si esauriscono in poco tempo. È l\'errore più comune dei visitatori a Milano',
      'Entrare in centro in auto senza conoscere Area B e Area C',
      'Prenotare durante il Salone del Mobile senza saperlo: i prezzi degli hotel arrivano a moltiplicarsi',
      'Fare il Lago di Como in auto in un fine settimana estivo: la strada è stretta, i parcheggi non esistono e il battello fa tutto meglio',
      'Giudicare Milano dal centro: la città interessante sta nei quartieri, e il centro è la parte meno rappresentativa',
    ],
    miaEsperienza:
      'Milano ha la reputazione di essere la città italiana che non vale un viaggio, e per il turismo classico è quasi vero: il centro si vede in un giorno e non ha il fascino stratificato di Roma o di Firenze. Poi però ci si sale sulle terrazze del Duomo, che quasi tutti saltano per fare solo l\'interno, e la prospettiva cambia: si cammina sul tetto di una cattedrale gotica in mezzo a centotrentacinque guglie e a tremila statue, con la città sotto e nelle giornate limpide le Alpi all\'orizzonte. È una delle cose più belle d\'Italia e costa quanto un museo. Sul Cenacolo va detta la cosa scomoda: non è un\'attrazione che si "prova a vedere", è un dipinto su un muro in un ambiente a umidità controllata dove entrano piccoli gruppi per quindici minuti, si prenota mesi prima con aperture trimestrali, e chi arriva a Milano sperando di trovarne uno all\'ultimo non entra. Chi ci riesce, però, sta davanti a un affresco che sta scomparendo da cinquecento anni — Leonardo lo dipinse con una tecnica sperimentale che iniziò a degradarsi mentre lui era ancora vivo — e quei quindici minuti valgono la trafila.',
    esperienzeSlugs: [],
    tripSlugs: ['grandi-citta-italia'],
    imageAlt: 'Le guglie e le terrazze del Duomo di Milano con la città sullo sfondo',
  },
  {
    slug: 'sicilia',
    paeseSlug: 'italia',
    ordine: 8,
    nome: 'Sicilia',
    tipologia: ['isole', 'archeologia', 'gastronomia'],
    giorniConsigliati: '10-12 giorni, 7 per una metà sola',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola grande come una nazione, che in tremila anni è stata greca, romana, bizantina, araba, normanna, sveva, spagnola e borbonica — e ognuna di queste dominazioni ha lasciato architettura, parole e ricette che convivono ancora. Ha anche il vulcano attivo più alto d\'Europa, che erutta regolarmente.',
    percheAndarci:
      'Perché nessun\'altra regione italiana ha questa stratificazione: si può vedere un tempio greco meglio conservato di quelli in Grecia, un duomo normanno con i mosaici bizantini e le iscrizioni in arabo, e un palazzo barocco, nello stesso giorno. E perché si mangia in un modo che non somiglia al resto d\'Italia.',
    cosaVedere: [
      'La Valle dei Templi ad Agrigento, con il Tempio della Concordia, tra i templi dorici meglio conservati al mondo',
      'Palermo, con la Cappella Palatina e il Duomo di Monreale: arte bizantina, maestranze arabe e struttura normanna nello stesso edificio',
      'L\'Etna, con i crateri sommitali e le colate recenti',
      'Siracusa e Ortigia, con il teatro greco e il Duomo costruito dentro un tempio dorico ancora visibile nelle colonne',
      'Il barocco della Val di Noto — Noto, Modica, Ragusa Ibla, Scicli — ricostruito dopo il terremoto del 1693',
      'Taormina con il teatro greco-romano affacciato sull\'Etna e sul mare',
      'Segesta e Selinunte, i due siti greci dell\'ovest, molto meno affollati di Agrigento',
      'Le riserve di Vendicari e dello Zingaro, e la Scala dei Turchi',
    ],
    cosaFare: [
      'Salire sull\'Etna fino alla zona sommitale, con guida obbligatoria oltre una certa quota — vedi la scheda esperienza dedicata',
      'Il mercato di Ballarò o della Vucciria a Palermo al mattino, che è street food e teatro insieme',
      'La Valle dei Templi al tramonto o in notturna, quando i templi sono illuminati e la temperatura è vivibile',
      'Un giro del barocco della Val di Noto in auto, che è il modo in cui va fatta',
    ],
    doveDormire:
      'La scelta della base è il tema centrale della Sicilia, ed è il senso del confronto qui sotto: l\'isola è troppo grande per una base sola. In generale, Palermo per l\'ovest, Siracusa o Catania per l\'est, con una o due basi intermedie.',
    doveMangiare:
      'La Sicilia ha due cucine diverse, una per versante. A Palermo domina lo street food arabo-normanno: arancine (femminile, a Palermo), panelle, sfincione, pane con la milza per i coraggiosi. A est prevalgono il pesce e la pasta: pasta alla Norma a Catania, pasta con le sarde, ricci a Siracusa. E poi i dolci, che sono un capitolo a sé: cannoli riempiti al momento e mai prima, cassata, granita con la brioche a colazione — che d\'estate è il modo giusto di cominciare la giornata. Il vino: Etna Rosso dal Nerello Mascalese, Nero d\'Avola, Grillo e Carricante.',
    comeArrivare:
      'Voli su Palermo e Catania, i due scali principali, più Trapani e Comiso. In treno e in auto si arriva con il traghetto da Villa San Giovanni — i treni vengono ancora imbarcati sulla nave, cosa che non esiste quasi più da nessuna parte. Dal nord Italia i traghetti notturni da Genova, Livorno e Napoli portano anche l\'auto.',
    comeSpostarsi:
      '**L\'auto è indispensabile.** La rete ferroviaria è lenta e copre poco, gli autobus sono l\'opzione reale per chi non guida ma vincolano parecchio. Le autostrade collegano Palermo, Catania e Messina; il resto è strada statale, con tempi più lunghi di quanto Google suggerisca.',
    periodoMigliore:
      '**maggio-giugno e settembre-ottobre**, senza discussione. Luglio e agosto sono torridi — si superano regolarmente i 40 gradi nell\'interno — affollati e cari. L\'inverno è mite e ottimo per le città d\'arte e i siti archeologici, con il mare fuori gioco e molte strutture costiere chiuse. Aprile e novembre sono ottimi e poco battuti.',
    costi:
      'Più economica del centro-nord su alloggi e ristorazione, con l\'eccezione di Taormina e delle località balneari in agosto. Gli ingressi ai siti archeologici sono contenuti; il biglietto cumulativo per più siti conviene quasi sempre.',
    erroriDaEvitare: [
      'Provare a fare tutta la Sicilia in una settimana: è grande come una regione e mezza, le strade interne sono lente, e il risultato è passare la vacanza in auto',
      'Fare Agrigento a mezzogiorno d\'estate: la Valle dei Templi non ha ombra e si superano i 40 gradi',
      'Andarci in agosto senza sapere che è il mese peggiore su ogni parametro',
      'Saltare l\'interno — Enna, Piazza Armerina, le Madonie — per stare solo sulla costa: è dove la Sicilia è più sé stessa e meno turistica',
      'Prendere la granita con la panna montata pensando che sia la versione autentica: la granita siciliana si fa con acqua, zucchero e il frutto, e si accompagna alla brioche col tuppo',
      'Fidarsi dei tempi di percorrenza stimati: sulle statali interne vanno aumentati di un terzo',
    ],
    confronti: [
      {
        titolo: 'Sicilia orientale o occidentale: quale metà scegliere',
        introduzione:
          'La Sicilia è troppo grande per essere fatta bene in una settimana, e il modo migliore di affrontarla è sceglierne una metà invece di attraversarla di corsa. Le due parti hanno storia, architettura, cucina e ritmo diversi.',
        opzioni: [
          {
            nome: 'Sicilia orientale (Catania, Siracusa, Val di Noto, Etna, Taormina)',
            sintesi: 'Il versante greco e barocco, dominato dall\'Etna: teatri greci, città ricostruite in barocco dopo il terremoto del 1693, e il vulcano che si vede da ovunque.',
            costo: 'medio, con Taormina fuori scala rispetto al resto',
            durata: '7-8 giorni',
            pro: [
              'L\'Etna, che è un\'esperienza a sé e non solo un panorama',
              'Siracusa e Ortigia, dove il Duomo è letteralmente costruito dentro un tempio greco, con le colonne doriche inglobate nei muri',
              'Il barocco della Val di Noto, patrimonio UNESCO, concentrato in pochi chilometri',
              'Distanze più brevi: si gira con una o due basi',
              'Le spiagge e le riserve del sud-est (Vendicari, Marzamemi) sono tra le migliori dell\'isola',
            ],
            contro: [
              'Taormina in alta stagione è satura e ha prezzi da altra regione',
              'Catania come città divide molto: viva e caotica, meno bella di Palermo',
              'Più battuta dal turismo internazionale',
            ],
            perChi: 'Chi ci va la prima volta, chi ha una settimana sola, chi vuole unire archeologia, barocco e mare senza spostamenti lunghi.',
          },
          {
            nome: 'Sicilia occidentale (Palermo, Monreale, Segesta, Trapani, Agrigento)',
            sintesi: 'Il versante arabo-normanno e fenicio-punico: Palermo con la Cappella Palatina, Monreale, i templi di Segesta e Selinunte, le saline, le Egadi.',
            costo: 'più basso dell\'est a parità di qualità',
            durata: '7-8 giorni',
            pro: [
              'Palermo è la città più stratificata e più interessante dell\'isola, e il duomo di Monreale è uno dei capolavori assoluti del Medioevo europeo',
              'Segesta e Selinunte hanno templi quasi come Agrigento con un decimo delle persone',
              'Lo street food palermitano non ha equivalenti in Italia',
              'Le saline di Trapani e Marsala, le isole Egadi, San Vito Lo Capo e la riserva dello Zingaro',
              'Meno turismo internazionale e prezzi più bassi',
            ],
            contro: [
              'Palermo richiede di adattarsi: traffico, disordine e degrado in certe zone',
              'Distanze maggiori tra i punti d\'interesse',
              'La Valle dei Templi ad Agrigento resta il sito più affollato dell\'isola',
              'Trasporto pubblico peggiore che a est',
            ],
            perChi: 'Chi torna una seconda volta, chi mette la storia e il cibo davanti al mare, chi vuole spendere meno.',
          },
          {
            nome: 'Il giro completo',
            sintesi: 'Tutta l\'isola in un solo viaggio, con base mobile.',
            costo: 'alto in carburante e tempo',
            durata: 'minimo 12-14 giorni per avere senso',
            pro: ['Si vede tutto quello che si era messo in lista', 'Con due settimane vere si fa bene', 'Il passaggio attraverso l\'interno mostra la Sicilia meno turistica'],
            contro: [
              'Sotto i dodici giorni diventa un tour di trasferimenti: si dorme in un posto diverso ogni notte e si passa la vacanza in auto',
              'I tempi sulle statali interne sono più lunghi di quanto le mappe stimino',
              'Si finisce per vedere tutto di corsa e niente davvero',
            ],
            perChi: 'Chi ha almeno due settimane piene e accetta di stare parecchio in auto.',
          },
        ],
        raccomandazione:
          'Con una settimana o dieci giorni, **si sceglie una metà**: l\'est la prima volta, per l\'Etna, Siracusa e il barocco; l\'ovest la seconda, per Palermo, Monreale e i templi senza fila. Il giro completo ha senso solo da dodici giorni in su. E qualunque sia la scelta, un paio di giorni nell\'interno — Enna, Piazza Armerina, le Madonie — cambiano la percezione dell\'isola più di qualsiasi tappa costiera.',
      },
    ],
    miaEsperienza:
      'La Sicilia è la regione italiana che più viene sottodimensionata in fase di pianificazione: sulla mappa sembra un\'isola, nella realtà è una nazione, e il classico "giro della Sicilia in una settimana" si traduce in sei giorni di statali. La cosa che mi ha colpito di più non è un monumento singolo ma un edificio che li contiene tutti: il Duomo di Monreale, costruito da re normanni con maestranze arabe e mosaicisti bizantini, con seimila metri quadrati di mosaici d\'oro e un chiostro dove ogni capitello è diverso. Lì dentro si capisce che la Sicilia non è stata conquistata da una cultura dopo l\'altra: le ha tenute tutte insieme. La seconda cosa è l\'Etna, che va fatto sapendo che non è un panorama ma un vulcano in attività: si sale su un terreno nero di lapilli che scricchiola sotto i piedi, con le fumarole che escono dalle fessure e il terreno caldo se ci si appoggia la mano. E per il resto, un consiglio poco romantico ma utile: la Valle dei Templi si fa in notturna. Di giorno, in estate, si cammina in un forno senza un albero.',
    esperienzeSlugs: ['etna'],
    tripSlugs: ['sicilia-itinerario'],
    imageAlt: 'Il Tempio della Concordia nella Valle dei Templi di Agrigento al tramonto, Sicilia',
  },
  {
    slug: 'sardegna',
    paeseSlug: 'italia',
    ordine: 9,
    nome: 'Sardegna',
    tipologia: ['isole', 'mare', 'trekking'],
    giorniConsigliati: '8-10 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola con una lingua propria, una civiltà preistorica che ha lasciato settemila torri di pietra e nessun\'altra spiegazione di sé, e un mare che regge il confronto con i Caraibi. È anche, contro ogni aspettativa, una delle mete di trekking più severe d\'Italia.',
    percheAndarci:
      'Per il mare, ovviamente — Cala Goloritzé, Cala Mariolu, La Pelosa, l\'arcipelago della Maddalena — ma soprattutto perché l\'interno è tutta un\'altra isola: il Supramonte, la gola di Gorropu, i nuraghi, i paesi della Barbagia dove si parla sardo e dove il turismo non è mai arrivato.',
    cosaVedere: [
      'Il Golfo di Orosei, con Cala Goloritzé, Cala Mariolu e Cala Luna, raggiungibili quasi solo via mare o a piedi',
      'L\'arcipelago della Maddalena e Budelli con la spiaggia rosa, oggi protetta e inaccessibile',
      'Su Nuraxi di Barumini, patrimonio UNESCO, il complesso nuragico meglio conservato',
      'La gola di Gorropu, tra le più profonde d\'Europa, con pareti fino a cinquecento metri',
      'La Barbagia e i paesi del Supramonte: Orgosolo con i murales, Oliena, Urzulei',
      'Alghero, con l\'impronta catalana ancora nella lingua, e la Grotta di Nettuno',
      'Le miniere dismesse del Sulcis-Iglesiente, patrimonio geominerario, e Porto Flavia',
    ],
    cosaFare: [
      'Trekking nella gola di Gorropu, che è la cosa più impressionante dell\'interno — vedi la scheda esperienza dedicata',
      'Scendere a Cala Goloritzé a piedi (l\'unico modo via terra) — vedi la scheda esperienza dedicata',
      'Giro in gommone del Golfo di Orosei, che è il modo per vedere le cale non raggiungibili',
      'Un giorno in Barbagia, tra Orgosolo e Oliena, per vedere l\'isola che non è di mare',
    ],
    doveDormire:
      'La Sardegna si fa con due o tre basi: il nord-est per la Maddalena e la Costa Smeralda, il centro-est per il Golfo di Orosei e il Supramonte, il sud-ovest per il Sulcis e le spiagge meno battute. Gli agriturismi dell\'interno hanno un rapporto qualità-prezzo che la costa non ha nemmeno lontanamente.',
    doveMangiare:
      'La cucina sarda non è di mare, contro ogni aspettativa: è di pastori. Porceddu allo spiedo, pane carasau, culurgiones (i ravioli con patata, menta e pecorino, chiusi a spiga), malloreddus, pecorino sardo in tutte le stagionature, e il fiore sardo affumicato. Il mirto come digestivo. Il Cannonau è il vino simbolo, il Vermentino di Gallura l\'unica DOCG dell\'isola. **Sulla costa si mangia pesce a prezzi turistici; a venti chilometri nell\'interno si mangia meglio e si spende metà.**',
    comeArrivare:
      'Voli su Cagliari, Olbia e Alghero, con tariffe che schizzano in luglio e agosto. **I traghetti con l\'auto da Genova, Livorno, Civitavecchia e Napoli vanno prenotati con mesi di anticipo per l\'estate**, e sono l\'opzione più sensata per chi resta più di una settimana.',
    comeSpostarsi:
      '**Auto obbligatoria.** La rete ferroviaria è minima e lenta, gli autobus collegano i centri principali ma non le spiagge. Le strade interne del Supramonte sono strette e tortuose; molte cale si raggiungono solo con sterrati o a piedi.',
    periodoMigliore:
      '**maggio-giugno e settembre**, che è la risposta giusta quasi sempre: mare già caldo, prezzi normali, spiagge vivibili. Luglio e agosto sono affollatissimi e carissimi, con i traghetti esauriti e le cale contingentate. Ottobre e aprile sono ottimi per l\'interno e il trekking, con il mare fuori gioco.',
    costi:
      'In alta stagione la costa ha prezzi tra i più alti d\'Italia, con la Costa Smeralda fuori scala. **Diverse spiagge hanno accessi contingentati con prenotazione a pagamento** — La Pelosa, Cala Goloritzé, alcune cale del Golfo di Orosei — introdotti per proteggerle: vanno verificati e prenotati prima di partire, perché senza non si entra.',
    erroriDaEvitare: [
      'Non prenotare il traghetto con l\'auto per luglio e agosto: si esaurisce con mesi di anticipo e i prezzi salgono in modo drastico',
      'Presentarsi a una spiaggia contingentata senza prenotazione: diverse cale hanno numeri chiusi e accessi a pagamento, e senza si torna indietro',
      'Fare solo la costa: l\'interno — Supramonte, Barbagia, Gorropu — è la parte che nessuno si aspetta e la più sorprendente',
      'Sottovalutare i sentieri: quelli del Supramonte sono severi, poco segnati e senza acqua, e ogni anno ci sono interventi di soccorso',
      'Andare in agosto',
      'Aspettarsi di mangiare pesce come piatto tradizionale: la cucina sarda è pastorale, e il meglio è nell\'interno',
    ],
    miaEsperienza:
      'La Sardegna ha un problema di percezione: la si associa al mare, e il mare è davvero tra i più belli del Mediterraneo — Cala Goloritzé con quel pinnacolo di calcare e l\'acqua trasparente regge qualsiasi confronto. Ma la parte che sorprende è a venti chilometri dalla costa, nell\'interno, e ci va una frazione delle persone. La gola di Gorropu è una fenditura tra pareti che arrivano a cinquecento metri, dove si cammina su massi grandi come automobili con una striscia di cielo sopra: sembra un canyon americano e sta in Barbagia. E i nuraghi sono la cosa più strana d\'Italia: settemila torri di pietra a secco costruite tra il 1800 e il 1100 avanti Cristo da una civiltà di cui non sappiamo quasi nulla, senza scrittura, e di cui non si capisce con certezza nemmeno a cosa servissero quelle torri. A Barumini si entra dentro e si sale per scale interne nello spessore del muro. Poi c\'è la cosa pratica che va detta: le cale più belle sono state contingentate proprio perché stavano venendo distrutte, e oggi senza prenotazione non ci si entra.',
    esperienzeSlugs: ['gorropu', 'cala-goloritze'],
    tripSlugs: [],
    imageAlt: 'La spiaggia di Cala Goloritzé con il pinnacolo di calcare e l\'acqua trasparente, Sardegna',
  },
  {
    slug: 'isole-minori',
    paeseSlug: 'italia',
    ordine: 10,
    nome: 'Le isole minori',
    tipologia: ['isole', 'mare', 'natura'],
    giorniConsigliati: '4-7 giorni per arcipelago',
    visitataPersonalmente: true,
    introduzione:
      'Oltre alle due grandi, l\'Italia ha una sessantina di isole abitate distribuite in otto arcipelaghi, e sono mondi separati: vulcani attivi alle Eolie, rocce nere e vigne ad alberello a Pantelleria, il tufo e le grotte alle Ponziane, i fondali delle Tremiti nell\'unico parco marino dell\'Adriatico.',
    percheAndarci:
      'Perché hanno mantenuto una scala che la costa continentale ha perso: si gira a piedi o in barca, in bassa stagione ci vive poca gente, e diverse sono tuttora senza auto. E perché ognuna ha un carattere completamente diverso dalle altre — sceglierle a caso è il modo migliore per andare nel posto sbagliato.',
    cosaVedere: [
      'Stromboli, con l\'eruzione visibile dal mare o dal punto di osservazione, e la Sciara del Fuoco',
      'Salina, Filicudi e Alicudi, le Eolie che non sono Lipari e Panarea',
      'Pantelleria, con i dammusi, i giardini panteschi e il Lago Specchio di Venere',
      'Capri con i Faraglioni e la Grotta Azzurra, Ischia con le terme naturali, Procida con Marina Corricella',
      'Ponza e Palmarola, con il tufo colorato e le grotte marine',
      'Le Tremiti, unico arcipelago dell\'Adriatico, con i fondali dell\'area marina protetta',
      'L\'Elba e l\'Arcipelago Toscano, il parco marino più grande d\'Europa',
      'Lampedusa con la Spiaggia dei Conigli, e Favignana con le cave di tufo e la tonnara',
    ],
    cosaFare: [
      'Salire a vedere l\'attività dello Stromboli, con guida obbligatoria oltre una certa quota',
      'Immersioni o snorkeling alle Tremiti e a Ustica, che è la prima area marina protetta istituita in Italia',
      'Bagno notturno nel Lago Specchio di Venere a Pantelleria, con il fango termale',
      'Giro di un\'isola in barca, che nelle isole minori è quasi sempre il modo migliore di vederla',
    ],
    doveDormire:
      'Nelle isole minori l\'offerta è limitata per definizione e in alta stagione si esaurisce: si prenota con mesi di anticipo per luglio e agosto. I dammusi a Pantelleria, le case eoliane a Salina e gli alberghi diffusi sono le formule più coerenti con i posti.',
    doveMangiare:
      'Ogni arcipelago ha la sua identità: capperi, malvasia e pesce azzurro alle Eolie; capperi, passito e il pesto pantesco a Pantelleria; coniglio all\'ischitana a Ischia, che è un piatto di terra su un\'isola; il pesce e il tonno in tutte le sue conserve a Favignana. La regola generale è che nelle isole minori **il pesce costa caro e la cucina di terra costa poco ed è spesso migliore**.',
    comeArrivare:
      'Traghetti e aliscafi dai porti continentali, con **frequenze che crollano in bassa stagione** e corse che saltano con il mare mosso — è la variabile che condiziona tutto. Pantelleria e Lampedusa hanno aeroporti; l\'Elba pure, ma con pochi collegamenti.',
    comeSpostarsi:
      'A piedi, in scooter, in barca. **Diverse isole limitano o vietano lo sbarco delle auto in estate** e in alcune (Panarea, Alicudi, Filicudi) le auto praticamente non esistono. Portarsi il mezzo è quasi sempre inutile e spesso impossibile.',
    periodoMigliore:
      'giugno e settembre sono la finestra ideale: mare caldo, collegamenti pieni, prezzi non ancora fuori scala. **Luglio e agosto sono da evitare** ovunque nelle isole minori: satura l\'offerta, moltiplica i prezzi e riempie posti che sono piccoli per definizione. Da novembre a marzo molte isole chiudono quasi del tutto, con traghetti ridotti e strutture serrate.',
    costi:
      'I traghetti incidono più di quanto si pensi, e con l\'auto al seguito raddoppiano. In alta stagione gli alloggi nelle isole più note (Capri, Panarea, Ponza) raggiungono cifre da capitale europea.',
    erroriDaEvitare: [
      'Programmare coincidenze strette con i traghetti: **con il mare mosso le corse saltano**, e restare bloccati un giorno in più è la normalità, non l\'eccezione',
      'Scegliere l\'isola per fama invece che per carattere: Capri e Panarea in agosto sono mondane e affollatissime, e chi cercava la pace ha sbagliato indirizzo',
      'Portare l\'auto: quasi sempre inutile, spesso vietata, sempre cara',
      'Andare in bassa stagione senza verificare cosa è aperto: da novembre a marzo diverse isole hanno due ristoranti e un traghetto ogni tanto',
      'Sottovalitare l\'acqua: molte isole minori hanno problemi idrici e l\'acqua arriva con le navi cisterna. Non è un dettaglio folkloristico, è una ragione per non sprecarla',
    ],
    confronti: [
      {
        titolo: 'Quale arcipelago italiano scegliere',
        introduzione:
          'Le isole minori italiane vengono spesso trattate come un blocco unico, e sono invece mondi separati per geologia, carattere, prezzi e affollamento. Ecco come si dividono davvero.',
        opzioni: [
          {
            nome: 'Eolie (Sicilia)',
            sintesi: 'Sette isole vulcaniche a nord della Sicilia, patrimonio UNESCO, con due vulcani attivi: Stromboli, che erutta in continuazione, e Vulcano.',
            costo: 'medio-alto, con Panarea fuori scala e Alicudi e Filicudi molto economiche',
            durata: '5-7 giorni per farne almeno tre',
            pro: [
              'Due vulcani attivi: Stromboli è uno dei pochi al mondo in eruzione permanente e si vede dal mare di notte',
              'Le sette isole sono diversissime tra loro: si può passare da Panarea mondana ad Alicudi, dove non ci sono strade e ci si muove a piedi o con i muli',
              'Collegamenti interni frequenti in alta stagione',
              'Capperi, malvasia e una cucina isolana forte',
            ],
            contro: [
              'Affollatissime in luglio e agosto, con Panarea e Lipari sature',
              'I collegamenti dipendono dal mare: in caso di libeccio si resta fermi',
              'In inverno la vita si riduce drasticamente',
            ],
            perChi: 'Chi vuole vulcani e varietà, e chi è disposto a spostarsi tra più isole in un viaggio.',
          },
          {
            nome: 'Pantelleria',
            sintesi: 'Un\'isola vulcanica più vicina all\'Africa che alla Sicilia, senza spiagge di sabbia, con i dammusi di pietra lavica e la vite ad alberello riconosciuta patrimonio immateriale UNESCO.',
            costo: 'medio-alto, ma senza il turismo di massa',
            durata: '5-7 giorni',
            pro: [
              'Non somiglia a nessun\'altra isola italiana: roccia nera, vento costante, terrazzamenti e giardini panteschi (i muri circolari che proteggono un solo albero)',
              'Il Lago Specchio di Venere, con il fango termale, e le grotte di vapore naturali',
              'Passito e capperi di livello altissimo',
              'Turismo meno di massa, con una clientela che ci torna',
            ],
            contro: [
              'Nessuna spiaggia di sabbia: si entra in acqua dalle rocce, e non è per tutti',
              'Il vento è una costante e può essere forte',
              'Serve l\'auto, e i collegamenti dal continente sono meno frequenti',
            ],
            perChi: 'Chi cerca un\'isola di carattere invece che di spiagge, e chi ama il vino.',
          },
          {
            nome: 'Golfo di Napoli: Capri, Ischia, Procida',
            sintesi: 'Tre isole vicinissime tra loro e completamente diverse: Capri verticale e mondana, Ischia termale e grande, Procida piccola e colorata.',
            costo: 'da altissimo (Capri) a contenuto (Procida)',
            durata: '3-5 giorni',
            pro: [
              'Accessibilità: si raggiungono in meno di un\'ora da Napoli, anche in giornata',
              'Ischia ha terme naturali vere, con sorgenti sfruttate dai greci',
              'Procida è rimasta un paese di pescatori ed è la più autentica delle tre',
              'Capri fuori stagione, senza i giornalieri, è un\'altra cosa',
            ],
            contro: [
              'Capri in alta stagione è invivibile e carissima: arrivano decine di migliaia di visitatori in giornata',
              'Ischia è grande e in parte edificata in modo pesante',
              'Poca sensazione di isola remota: sono a vista dalla terraferma',
            ],
            perChi: 'Chi è già a Napoli, chi ha pochi giorni, chi cerca le terme (Ischia).',
          },
          {
            nome: 'Ponziane: Ponza e Palmarola',
            sintesi: 'Isole di tufo colorato a metà strada tra Roma e Napoli, con falesie, grotte marine e un mare che compete con le migliori del Tirreno.',
            costo: 'alto in alta stagione, soprattutto per il bacino romano che le riempie',
            durata: '4-5 giorni',
            pro: [
              'Il tufo giallo e rosso crea una costa unica, con grotte e archi naturali',
              'Palmarola, disabitata, è considerata da molti la più bella isola del Tirreno',
              'Vicinissime a Roma: si raggiungono in giornata',
            ],
            contro: [
              'In agosto sono il mare di Roma e si sente: affollatissime e care',
              'Servizi limitati e alloggi pochi',
              'I collegamenti fuori stagione si riducono molto',
            ],
            perChi: 'Chi viene dal centro Italia e vuole un mare eccezionale senza andare in Sicilia.',
          },
          {
            nome: 'Tremiti e Arcipelago Toscano',
            sintesi: 'Le Tremiti, unico arcipelago dell\'Adriatico e area marina protetta; l\'Arcipelago Toscano con l\'Elba, il parco marino più grande d\'Europa.',
            costo: 'medio, sensibilmente più basso del Tirreno meridionale',
            durata: '3-5 giorni',
            pro: [
              'Le Tremiti hanno i fondali migliori dell\'Adriatico e sono minuscole: si girano a piedi',
              'L\'Elba unisce mare, montagna (il Monte Capanne), storia napoleonica e miniere',
              'Prezzi più contenuti e turismo prevalentemente italiano',
              'Ottime per immersioni e snorkeling',
            ],
            contro: [
              'Mare meno spettacolare rispetto al Tirreno meridionale',
              'Le Tremiti in agosto sono piccolissime e affollate',
              'L\'Elba è grande e in parte molto costruita',
            ],
            perChi: 'Chi viene dal centro-nord, subacquei, famiglie, chi vuole spendere meno.',
          },
        ],
        raccomandazione:
          'Per varietà e carattere, **le Eolie** restano la scelta più forte, a patto di andarci a giugno o a settembre e di includere almeno un\'isola minore come Salina o Filicudi. **Pantelleria** se si cerca un\'isola che non somigli a nulla e non si ha bisogno di sabbia. **Procida** se si è a Napoli e si ha poco tempo. E una regola generale che vale per tutte: in agosto, nelle isole minori italiane, si paga il triplo per stare in mezzo al triplo delle persone.',
      },
    ],
    miaEsperienza:
      'Le isole minori sono la parte d\'Italia dove la differenza tra andare a giugno e andare ad agosto non è di grado ma di natura: sono posti piccoli, con un numero finito di letti, ristoranti e barche, e quando arriva il carico di agosto smettono semplicemente di funzionare come funzionano il resto dell\'anno. La cosa che resta di più, tra tutte, è Stromboli visto dal mare di notte: si sta su una barca a motore spento davanti alla Sciara del Fuoco, al buio, e ogni pochi minuti il cratere sputa materiale incandescente che rotola lungo il versante fino all\'acqua. Non c\'è nessun effetto speciale e nessuna spiegazione che regga: è un vulcano che fa quello che fa da millenni, con un paese abitato sotto. L\'altra sorpresa è Pantelleria, che è l\'anti-isola italiana: niente sabbia, vento sempre, roccia nera, e una viticoltura in cui le viti si coltivano in buche scavate nel terreno per proteggerle dal vento, tecnica dichiarata patrimonio immateriale dall\'UNESCO. Ci si va per capire cosa significa coltivare qualcosa in un posto ostile.',
    esperienzeSlugs: [],
    tripSlugs: [],
    imageAlt: 'Lo Stromboli in attività visto dal mare di notte, Isole Eolie',
  },
  {
    slug: 'italia-inesplorata',
    paeseSlug: 'italia',
    ordine: 11,
    nome: 'L\'Italia inesplorata',
    tipologia: ['borghi', 'natura', 'cammini'],
    giorniConsigliati: '4-7 giorni per area',
    visitataPersonalmente: true,
    introduzione:
      'Il paese ha cinquantanove siti UNESCO e milioni di visitatori concentrati su una decina di posti. Nel frattempo esistono intere regioni dove il turismo non è mai arrivato: il Molise, che è diventato un meme proprio per questo, l\'Appennino lucano, le montagne del Friuli, i Sibillini, l\'entroterra calabrese. Sono le zone dove l\'Italia costa ancora quello che costava vent\'anni fa.',
    percheAndarci:
      'Perché è l\'unica parte del paese dove si può camminare un\'intera giornata senza incontrare nessuno, mangiare per venti euro e parlare con chi ci vive invece che con chi ci lavora. E perché molti di questi posti si stanno spopolando: si vedono adesso o non si vedono.',
    cosaVedere: [
      'Il Molise: Campobasso e Isernia, i tratturi della transumanza (patrimonio immateriale UNESCO), Pietrabbondante con il teatro sannita, la costa di Termoli',
      'L\'Appennino lucano e il Pollino, il parco nazionale più grande d\'Italia, con i pini loricati',
      'I Monti Sibillini e l\'entroterra marchigiano, con i borghi ricostruiti dopo il sisma del 2016',
      'La Carnia e le Valli del Natisone in Friuli, con le case in pietra e una cultura di confine slovena e germanica',
      'L\'Aspromonte e la Calabria greca, dove si parla ancora il grecanico',
      'La Val Grande in Piemonte, la più vasta area wilderness d\'Italia: nessuna strada, nessun paese abitato',
      'Il Cilento interno, con i borghi e il Vallo di Diano, e le Murge con le gravine',
      'I cammini: la Via degli Dei, il Cammino di San Benedetto, la Via Francigena nel sud',
    ],
    cosaFare: [
      'Camminare un tratto della Via degli Dei o di un altro cammino, dormendo negli ostelli e nelle parrocchie — vedi la scheda esperienza dedicata',
      'Le feste patronali di paese, che nell\'Italia interna sono ancora l\'evento vero dell\'anno',
      'Mangiare in una trattoria di paese senza menu, dove si chiede cosa c\'è',
      'Percorrere un tratto di tratturo, le vie erbose larghe cento metri su cui si spostavano le greggi da secoli',
    ],
    doveDormire:
      'Agriturismi, alberghi diffusi (formula nata proprio in Friuli e diffusa nei borghi in spopolamento) e B&B familiari. I prezzi sono quelli che nel resto d\'Italia non esistono più: cinquanta-settanta euro per due persone con colazione è la norma, non l\'eccezione.',
    doveMangiare:
      'È la parte migliore. Nell\'Italia interna la cucina è ancora quella territoriale e stagionale che altrove è diventata un concetto di marketing: pasta fatta a mano con nomi diversi ogni venti chilometri, carni di allevamento locale, formaggi di piccole produzioni, verdure spontanee. **Un pasto completo con vino sta tra i venti e i trenta euro**, e spesso non c\'è un menu scritto. La contropartita: fuori dalle fasce orarie non si mangia, e la domenica sera e il lunedì molti posti sono chiusi.',
    comeArrivare:
      '**Auto obbligatoria, senza eccezioni.** I treni regionali arrivano ai capoluoghi e poi si ferma tutto; gli autobus extraurbani hanno corse pensate per gli studenti, quindi due la mattina e due il pomeriggio, e niente nei fine settimana.',
    comeSpostarsi:
      'Auto propria. Le strade interne sono strette, tortuose e in certi tratti dissestate: i tempi vanno aumentati di un terzo rispetto alle stime delle mappe. Il carburante nei paesi piccoli può non esserci: si fa il pieno quando si può, non quando serve.',
    periodoMigliore:
      'maggio-giugno e settembre-ottobre. L\'estate nell\'interno del centro-sud è torrida; l\'inverno in Appennino porta neve e strade chiuse, con diversi paesi che vanno in letargo. Le feste patronali si concentrano tra giugno e settembre ed è quando i paesi tornano pieni, perché rientrano gli emigrati.',
    costi:
      'La parte d\'Italia dove si spende meno, senza confronto. Ingressi quasi ovunque gratuiti o simbolici, alloggi e ristoranti a cifre che sulla costa o in città non esistono più.',
    erroriDaEvitare: [
      'Contare sui mezzi pubblici: qui non esistono in senso utile',
      'Arrivare in un paese alle tre del pomeriggio e cercare da mangiare: nell\'Italia interna si mangia tra le dodici e mezza e le due, e poi si chiude',
      'Dare per scontata la connessione: in molte valli interne il segnale è assente, e le mappe offline sono una precauzione seria',
      'Sottovalutare le distanze e le strade: sessanta chilometri di statale interna possono voler dire due ore',
      'Aspettarsi servizi turistici: qui non ci sono uffici informazioni, audioguide né cartelli in inglese, ed è esattamente il punto',
      'Andare in agosto pensando che sia vuota: in agosto i paesi si riempiono di chi è emigrato e torna, ed è il periodo più vivo dell\'anno — bello, ma non silenzioso',
    ],
    confronti: [
      {
        titolo: 'Dove va davvero nessuno: cinque Italie fuori rotta',
        introduzione:
          'Non tutte le zone poco battute sono uguali: alcune sono remote per geografia, altre per spopolamento, altre semplicemente perché non hanno mai avuto un\'immagine da vendere. Cambiano parecchio per accessibilità, paesaggio e cosa ci si trova.',
        opzioni: [
          {
            nome: 'Molise',
            sintesi: 'La regione più piccola e meno visitata d\'Italia, con i tratturi della transumanza, i siti sanniti, un pezzo di Appennino e sessanta chilometri di costa.',
            costo: 'il più basso d\'Italia',
            durata: '4-5 giorni',
            pro: [
              'I tratturi, le vie erbose larghe fino a cento metri su cui si spostavano le greggi per secoli: la transumanza è patrimonio immateriale UNESCO',
              'Pietrabbondante, con un teatro sannita del II secolo a.C. in una posizione spettacolare e nessuno intorno',
              'Prezzi e ospitalità di un\'Italia che altrove non c\'è più',
              'Accessibile: è a due ore da Roma e Napoli',
            ],
            contro: [
              'Non ha un "pezzo forte" da cartolina, ed è il motivo per cui nessuno ci va',
              'Servizi turistici quasi assenti',
              'Serve l\'auto e serve accettare che il programma sia poco denso',
            ],
            perChi: 'Chi vuole l\'Italia senza filtro e non ha bisogno di monumenti famosi.',
          },
          {
            nome: 'Appennino lucano e Pollino',
            sintesi: 'Il parco nazionale più grande d\'Italia a cavallo tra Basilicata e Calabria, con i pini loricati e i paesi arbëreshë di lingua albanese.',
            costo: 'molto basso',
            durata: '5-7 giorni',
            pro: [
              'Montagna vera e poco frequentata, con vette sopra i duemila metri',
              'I pini loricati, che crescono solo qui e nei Balcani, aggrappati alle rocce',
              'I paesi arbëreshë, fondati da profughi albanesi nel Quattrocento, dove si parla ancora una lingua propria',
              'Vicino a Matera, che si può aggiungere',
            ],
            contro: [
              'Strade lunghe e lente, distanze reali',
              'Sentieristica meno curata rispetto alle Alpi',
              'Pochissimi servizi in quota',
            ],
            perChi: 'Chi cammina e vuole montagna senza folla, e chi si interessa alle minoranze linguistiche.',
          },
          {
            nome: 'Carnia e Valli del Natisone (Friuli)',
            sintesi: 'Le montagne del Friuli, con una cultura di confine tra italiano, friulano, sloveno e tedesco, e i luoghi della Grande Guerra.',
            costo: 'basso per gli standard alpini',
            durata: '4-6 giorni',
            pro: [
              'Alpi senza i prezzi e l\'affollamento alpini',
              'Una stratificazione culturale unica, con quattro lingue in poche valli',
              'I luoghi della Grande Guerra, dal Monte Cavallo alle trincee',
              'Cucina di montagna con il frico, il formaggio di malga e i vini friulani a poca distanza',
            ],
            contro: ['Clima piovoso: il Friuli è tra le zone più piovose d\'Italia', 'Distanze dalle grandi città', 'Alcuni valichi chiusi d\'inverno'],
            perChi: 'Chi ama la montagna ma non vuole pagare le Dolomiti, e chi si interessa alla storia di confine.',
          },
          {
            nome: 'Val Grande (Piemonte)',
            sintesi: 'La più vasta area wilderness d\'Italia, tra Lago Maggiore e Svizzera: nessuna strada, nessun paese abitato, alpeggi abbandonati riconquistati dal bosco.',
            costo: 'basso, ma richiede autonomia',
            durata: '2-4 giorni di trekking',
            pro: [
              'Solitudine assoluta: è l\'unico posto in Italia dove si può camminare giorni senza incontrare nessuno e senza strade',
              'Vicinissima al Lago Maggiore, quindi facile da raggiungere',
              'Storia della resistenza partigiana e dell\'abbandono montano',
            ],
            contro: [
              '**Non è per principianti**: sentieri poco segnati, bivacchi essenziali, nessun rifugio con servizio, nessun segnale telefonico',
              'Serve autonomia completa: acqua, cibo, orientamento',
              'Ogni anno ci sono interventi di soccorso per persone che l\'hanno sottovalutata',
            ],
            perChi: 'Escursionisti esperti e autonomi. Non è una passeggiata e non va trattata come tale.',
          },
          {
            nome: 'Aspromonte e Calabria greca',
            sintesi: 'L\'estremità della penisola, con il parco nazionale dell\'Aspromonte, i borghi abbandonati come Pentedattilo e Roghudi, e le comunità dove si parla ancora il grecanico.',
            costo: 'molto basso',
            durata: '5-7 giorni',
            pro: [
              'Il grecanico, una lingua greca sopravvissuta dall\'antichità, ancora parlata da poche centinaia di persone',
              'Borghi abbandonati spettacolari, svuotati da frane e alluvioni e lasciati dov\'erano',
              'Paesaggio che passa dal mare a milleottocento metri in venti chilometri',
              'I Bronzi di Riace a Reggio, che sono tra i pochi bronzi greci originali al mondo',
            ],
            contro: [
              'Strade interne molto lente e in certi tratti dissestate',
              'Servizi turistici minimi',
              'Estate torrida sulla costa',
            ],
            perChi: 'Chi vuole spingersi dove finisce l\'Italia, e chi si interessa alle culture in via di estinzione.',
          },
        ],
        raccomandazione:
          'La più accessibile e la meno impegnativa è il **Molise**, che è a due ore da Roma e non chiede niente. Per la montagna, **Carnia** al nord e **Pollino** al sud, entrambe a una frazione del prezzo delle Alpi famose. La **Val Grande** solo per chi cammina davvero ed è autonomo. L\'**Aspromonte** è la più lontana e la più sorprendente, ma va messo in conto un viaggio lungo. E una cosa che vale per tutte: qui l\'auto non è un comfort, è la condizione.',
      },
    ],
    miaEsperienza:
      'L\'Italia inesplorata è il posto dove si capisce quanto sia concentrato il turismo in questo paese: cinquanta milioni di persone all\'anno si distribuiscono su una decina di città e di coste, e a due ore da quelle stesse città ci sono valli in cui si cammina mezza giornata senza incontrare nessuno. La cosa che colpisce non è il paesaggio — bello ma non straordinario rispetto alle Alpi — è il rapporto con chi ci vive. In un paese di trecento abitanti dell\'Appennino nessuno cerca di venderti niente, perché non c\'è un mercato: ti chiedono da dove vieni, e la risposta interessa davvero. Si mangia in trattorie senza menu dove si chiede cosa c\'è e arrivano tre portate per venticinque euro con il vino della casa. La contropartita da conoscere: qui non ci sono orari flessibili, non c\'è connessione, non c\'è un ufficio informazioni, e chi arriva alle tre del pomeriggio cercando un pranzo trova tutto chiuso. E c\'è una cosa che non si può ignorare, perché è la ragione stessa per cui questi posti sono vuoti: si stanno spopolando. Ci sono paesi con più case vuote che abitate e con l\'età media sopra i sessant\'anni. Vederli adesso significa vederli finché ci sono.',
    esperienzeSlugs: ['cammini-italia'],
    tripSlugs: [],
    imageAlt: 'Un borgo dell\'Appennino interno tra le colline, Italia',
  },
  {
    slug: 'rotte-dei-vini',
    paeseSlug: 'italia',
    ordine: 12,
    nome: 'Sulle rotte dei grandi vini',
    tipologia: ['enogastronomia', 'paesaggi', 'itinerari'],
    giorniConsigliati: '4-6 giorni per rotta',
    visitataPersonalmente: true,
    introduzione:
      'L\'Italia è il maggior produttore mondiale di vino e ha oltre cinquecento varietà autoctone catalogate — più di qualunque altro paese. Tre paesaggi vitivinicoli sono patrimonio UNESCO: le Langhe-Roero e Monferrato, le colline del Prosecco di Conegliano e Valdobbiadene, e la Costiera come paesaggio culturale. Ma soprattutto, quasi ogni denominazione importante ha attorno un territorio che si gira in auto in pochi giorni.',
    percheAndarci:
      'Perché il vino qui è il pretesto migliore per vedere paesaggi agrari costruiti in secoli — i terrazzamenti della Valtellina, le colline delle Langhe, i muretti a secco dell\'Etna — e perché in cantina si parla direttamente con chi produce, cosa che in Francia succede molto meno.',
    cosaVedere: [
      'Le Langhe e il Roero, patrimonio UNESCO, con Barolo, Barbaresco, Alba e il tartufo bianco',
      'La Valpolicella e il Soave, con le ville venete e le fruttaie dove appassiscono le uve dell\'Amarone',
      'Le colline del Prosecco tra Conegliano e Valdobbiadene, patrimonio UNESCO, con il Cartizze',
      'Il Chianti Classico, Montalcino e Montepulciano, con le abbazie e i borghi murati',
      'L\'Etna, con le contrade sui versanti del vulcano e le viti a piede franco, sopravvissute alla fillossera',
      'Il Collio e i Colli Orientali in Friuli, per i bianchi e i macerati',
      'La Valtellina, con i terrazzamenti a strapiombo e i muretti a secco',
      'L\'Irpinia e il Vulture, i due grandi rossi del sud: Taurasi e Aglianico del Vulture',
    ],
    cosaFare: [
      'Visita e degustazione in cantina, prenotando in anticipo — vedi la scheda esperienza dedicata',
      'Andarci in vendemmia, tra fine agosto e ottobre, quando le cantine lavorano',
      'La fiera del tartufo bianco d\'Alba, in autunno, che è il momento in cui le Langhe danno il meglio e si riempiono',
      'Camminare tra i vigneti: quasi tutte le zone hanno sentieri segnati tra le vigne',
    ],
    doveDormire:
      'Gli agriturismi e i wine resort delle zone vitivinicole sono la formula giusta, e in molti casi sono le cantine stesse. In Langhe e in Chianti i prezzi sono alti in stagione; in Irpinia, nel Vulture e in Valtellina si spende una frazione per una qualità simile.',
    doveMangiare:
      'Ogni rotta ha la sua cucina, ed è la ragione per cui questo tema funziona: nelle Langhe il tajarin, il vitello tonnato, la carne cruda e il tartufo; in Valpolicella il risotto all\'Amarone e i bolliti; in Toscana la bistecca e i pici; sull\'Etna la pasta alla Norma e il pesce dello Ionio; in Valtellina i pizzoccheri e la bresaola. **Il modo migliore di mangiare in queste zone è nelle osterie convenzionate con i consorzi**, che hanno le carte dei vini locali complete a prezzi di cantina.',
    comeArrivare:
      'In auto, sempre. Le zone vitivinicole sono colline con paesi sparsi e i mezzi pubblici non le servono in modo utile. Gli aeroporti e le stazioni di riferimento sono Torino e Milano per il Piemonte, Verona per il Veneto, Firenze per la Toscana, Catania per l\'Etna, Trieste per il Friuli.',
    comeSpostarsi:
      'Auto, con un tema serio: **chi guida non degusta**. Le alternative sono affidarsi a un autista, usare i servizi navetta che diverse zone offrono, o organizzare le visite in modo che chi guida assaggi e sputi — che è quello che fanno i professionisti e non è una rinuncia.',
    periodoMigliore:
      '**settembre e ottobre**, durante la vendemmia: le cantine sono in piena attività, i colori delle vigne cambiano e le fiere sono in calendario. Aprile-giugno è la seconda finestra, con il verde e meno gente. Da novembre a marzo molte piccole cantine riducono le visite, e in agosto diverse chiudono.',
    costi:
      'Le degustazioni in cantina costano mediamente tra i 15 e i 40 euro a persona a seconda dei vini e dell\'accoglienza, spesso scalati sull\'acquisto. Nelle zone più note (Barolo, Montalcino) le visite guidate delle cantine storiche costano di più; nelle zone emergenti si paga molto meno o nulla.',
    erroriDaEvitare: [
      '**Presentarsi in cantina senza appuntamento**: è l\'errore numero uno. Le cantine non sono negozi, sono aziende agricole con orari di lavoro, e quasi tutte ricevono solo su prenotazione — spesso con qualche giorno di anticipo',
      'Programmare più di due o tre cantine al giorno: dopo la terza non si assaggia più niente con attenzione, e la giornata diventa una collezione di timbri',
      'Non risolvere il problema di chi guida prima di partire: le sanzioni per la guida in stato di ebbrezza in Italia sono severe e i controlli nelle zone vitivinicole esistono',
      'Andare in agosto: molte cantine chiudono o riducono, e chi lavora è in ferie o in preparazione della vendemmia',
      'Fermarsi solo alle denominazioni famose: le Langhe e Montalcino sono care e affollate, mentre l\'Irpinia, il Vulture, la Valtellina e l\'Etna offrono lo stesso livello con una frazione dei visitatori',
      'Comprare in enoteca quello che si può comprare in cantina: in azienda il prezzo è quello di produzione e si parla con chi l\'ha fatto',
    ],
    confronti: [
      {
        titolo: 'Quale rotta del vino scegliere',
        introduzione:
          'Le denominazioni italiane sono oltre quattrocento, ma le rotte che funzionano come viaggio — cioè con paesaggio, cantine visitabili e cucina all\'altezza in un raggio percorribile — sono una decina. Cambiano moltissimo per prezzo, affollamento e tipo di vino.',
        opzioni: [
          {
            nome: 'Langhe e Roero (Piemonte)',
            sintesi: 'Patrimonio UNESCO: Barolo, Barbaresco, Barbera e Dolcetto su colline di marna, con Alba al centro e il tartufo bianco in autunno.',
            costo: 'la rotta più cara d\'Italia, con Barolo e Barbaresco a livelli internazionali',
            durata: '4-5 giorni',
            pro: [
              'Il livello enologico più alto d\'Italia, con il Nebbiolo che è tra i grandi vitigni del mondo',
              'Paesaggio UNESCO di colline coltivate a vite fino all\'orizzonte',
              'La cucina piemontese è tra le migliori del paese: tajarin, carne cruda, plin, tartufo in stagione',
              'Cantine strutturate per l\'accoglienza, con visite ben organizzate',
            ],
            contro: [
              'Cara su tutto: cantine, alloggi, ristoranti',
              'In autunno, durante la fiera del tartufo, è satura e i prezzi raddoppiano',
              'È la rotta più battuta e si sente',
            ],
            perChi: 'Chi vuole il meglio e ha budget, e chi mette la cucina allo stesso livello del vino.',
          },
          {
            nome: 'Valpolicella, Soave e le colline del Prosecco (Veneto)',
            sintesi: 'Tre zone vicine tra loro alle spalle di Verona: l\'Amarone con le sue fruttaie, il Soave, e le colline del Prosecco patrimonio UNESCO.',
            costo: 'medio',
            durata: '3-5 giorni',
            pro: [
              'Tre denominazioni diversissime in poche decine di chilometri',
              'Le fruttaie dell\'Amarone, dove le uve appassiscono per mesi su graticci, sono una tecnica che si vede solo qui',
              'Le colline del Prosecco sono paesaggio UNESCO, con pendenze coltivate a mano',
              'Vicinissime a Verona, al Garda e a Venezia: facili da incastrare',
            ],
            contro: [
              'La zona del Prosecco ha subito una viticoltura molto intensiva, e in certi tratti si vede',
              'Meno "remota" delle altre: si è sempre vicini a strade trafficate',
              'La Valpolicella classica è piccola e in alta stagione le cantine migliori si riempiono',
            ],
            perChi: 'Chi ha pochi giorni, chi combina il vino con Verona e il Garda, chi vuole vedere tecniche diverse.',
          },
          {
            nome: 'Chianti Classico, Montalcino e Montepulciano (Toscana)',
            sintesi: 'Il Sangiovese in tre declinazioni, tra Firenze e Siena, con le abbazie, i borghi murati e i cipressi.',
            costo: 'alto, con Montalcino ai livelli delle Langhe',
            durata: '4-6 giorni',
            pro: [
              'Il paesaggio più fotografato d\'Italia, e non a caso',
              'Si combina con Firenze e Siena senza spostamenti lunghi',
              'Brunello di Montalcino e Chianti Classico sono denominazioni con cantine molto ben organizzate per le visite',
              'Le abbazie — Sant\'Antimo, San Galgano — aggiungono un piano in più al viaggio',
            ],
            contro: [
              'La rotta più turistica in assoluto: in alta stagione le strade del Chianti sono trafficate',
              'Prezzi alti, con molte strutture pensate per un turismo internazionale di fascia alta',
              'Meno varietà: è quasi tutto Sangiovese',
            ],
            perChi: 'Chi ci va la prima volta, chi combina vino e città d\'arte, chi vuole il paesaggio da cartolina.',
          },
          {
            nome: 'Etna (Sicilia)',
            sintesi: 'Le contrade sui versanti del vulcano, con il Nerello Mascalese e il Carricante coltivati tra i 400 e i 1.000 metri su suoli lavici, spesso con viti a piede franco.',
            costo: 'medio, con alcune cantine di livello internazionale',
            durata: '3-4 giorni',
            pro: [
              'Le **viti a piede franco**: l\'Etna è una delle poche zone d\'Europa dove la fillossera non è mai arrivata, e ci sono ceppi prefillosserici di oltre cento anni',
              'Il concetto di contrada, che funziona come i cru borgognoni: suoli e quote diverse a poche centinaia di metri di distanza',
              'Paesaggio unico: terrazzamenti di pietra lavica con il vulcano fumante sopra',
              'Si combina con Taormina, Catania e il mare',
            ],
            contro: [
              'Le cantine sono sparse su un territorio ampio e le strade del versante sono lente',
              'Zona in forte crescita: alcune realtà sono molto commerciali',
              'D\'estate fa molto caldo alle quote basse',
            ],
            perChi: 'Chi cerca vini di carattere e un territorio che non somiglia a nessun altro in Italia.',
          },
          {
            nome: 'Collio e Colli Orientali (Friuli)',
            sintesi: 'La zona dei grandi bianchi italiani, a cavallo del confine sloveno, con il Friulano, la Ribolla Gialla e la scuola dei macerati.',
            costo: 'medio, molto accessibile rispetto al livello',
            durata: '3-4 giorni',
            pro: [
              'I migliori bianchi d\'Italia, riconosciuti a livello internazionale',
              'La scuola degli **orange wine**, cioè bianchi macerati sulle bucce, è nata proprio qui e in Slovenia',
              'Paesaggio dolce di colline a cavallo di un confine che si attraversa senza accorgersene',
              'Prezzi molto più umani delle Langhe a parità di qualità',
            ],
            contro: ['Meno spettacolare come paesaggio', 'Lontano dalle grandi direttrici turistiche', 'Poca offerta ricettiva di fascia alta'],
            perChi: 'Chi beve bianchi, chi si interessa ai macerati, chi vuole qualità senza pagare la fama.',
          },
          {
            nome: 'Irpinia e Vulture (Campania e Basilicata)',
            sintesi: 'I grandi rossi del sud: Taurasi in Irpinia e Aglianico del Vulture sulle pendici di un vulcano spento, più Fiano e Greco di Tufo per i bianchi.',
            costo: 'il più basso di tutte le rotte',
            durata: '4-5 giorni',
            pro: [
              'L\'Aglianico è uno dei grandi vitigni italiani e costa una frazione del Nebbiolo o del Sangiovese di pari livello',
              'Zone praticamente prive di turismo: si visita in cantina parlando con il proprietario',
              'Il Vulture ha le cantine scavate nel tufo e un paesaggio vulcanico inaspettato',
              'Prezzi di alloggi e ristoranti bassissimi',
            ],
            contro: [
              'Poca organizzazione per l\'accoglienza: molte cantine ricevono ma non sono strutturate per il turismo',
              'Strade interne lente',
              'Servizi ricettivi limitati',
            ],
            perChi: 'Chi ha già fatto le rotte famose e vuole bere altrettanto bene spendendo un terzo.',
          },
          {
            nome: 'Valtellina (Lombardia)',
            sintesi: 'Il Nebbiolo di montagna, coltivato su terrazzamenti a strapiombo sostenuti da centinaia di chilometri di muretti a secco.',
            costo: 'medio-basso',
            durata: '2-3 giorni',
            pro: [
              'Il paesaggio terrazzato più impressionante d\'Italia: muretti a secco costruiti a mano su versanti ripidissimi',
              'Viticoltura eroica vera: si lavora a mano perché nessun mezzo può salire',
              'Lo Sforzato, ottenuto da uve appassite, è un vino di montagna senza equivalenti',
              'Si combina con la montagna e con i pizzoccheri',
            ],
            contro: ['Zona piccola con poche cantine visitabili', 'Il fondovalle è trafficato e poco bello', 'Meno varietà rispetto alle altre rotte'],
            perChi: 'Chi ama la montagna e vuole vedere cosa significa viticoltura eroica.',
          },
        ],
        raccomandazione:
          'Prima rotta in assoluto: **Langhe**, perché il livello è il più alto e la cucina accompagna, accettandone il prezzo — e andandoci a settembre invece che durante la fiera del tartufo. Se il budget conta, **Irpinia e Vulture** danno quasi lo stesso per un terzo, con l\'unica rinuncia dell\'accoglienza organizzata. Per qualcosa che non somiglia a nessun\'altra parte d\'Italia, **Etna**, con le viti prefillosseriche. Per i bianchi, **Collio** senza discussione. E qualunque rotta si scelga: **si prenota in cantina, non ci si presenta**, e si risolve prima il problema di chi guida.',
      },
    ],
    miaEsperienza:
      'Le rotte del vino sono il tema che funziona meglio per vedere l\'Italia agricola invece di quella monumentale, e la cosa che cambia tutto è banale: si prenota. Una cantina non è un negozio, è un\'azienda agricola con un lavoro da fare, e chi arriva senza appuntamento nella maggior parte dei casi trova il cancello chiuso — mentre chi scrive una mail tre giorni prima viene ricevuto dal produttore in persona, che ha un\'ora per te. La differenza tra queste due esperienze è enorme. La seconda cosa che ho capito riguarda il rapporto tra fama e valore: le Langhe sono straordinarie e costano di conseguenza, ma sull\'Etna ci sono viti di oltre cento anni a piede franco — perché la fillossera su quel suolo lavico non è mai arrivata — e in Irpinia si beve un Aglianico che regge il confronto con rossi che costano quattro volte tanto, in cantine dove entri e c\'è il proprietario che sta travasando. Il problema pratico più serio, che nessuno affronta in fase di pianificazione, è chi guida: si visitano cantine in zone collinari, si assaggia, e la tentazione di far finta di niente è forte. La soluzione seria è una sola — si assaggia e si sputa, come fanno i professionisti — oppure si paga un autista.',
    esperienzeSlugs: ['degustazione-cantina'],
    tripSlugs: ['rotte-dei-vini-itinerario'],
    imageAlt: 'Le colline coltivate a vite delle Langhe in autunno, Piemonte',
  },
]
