import type { Esperienza } from '@/lib/types'

// I campi miaEsperienza e i giudizi sono bozze scritte da Claude nella voce
// del diario, coerenti con ciò che è oggettivamente vero di ogni esperienza
// (regole d\'accesso, fatica, stagione, affollamento) ma non basate su ricordi
// reali: vanno riletti e confermati o corretti. Nessun operatore, hotel o
// ristorante è stato inventato.
// Le due schede storiche — DMZ/JSA e haenyeo — poggiano su date, cifre e
// status UNESCO verificabili. L\'accesso alla JSA di Panmunjom è però sospeso
// e riaperto a fasi alterne dal 2023: va verificato poco prima di partire.

export const esperienzeCoreaDelSud: Esperienza[] = [
  {
    slug: 'tour-dmz-terzo-tunnel',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'dmz',
    nome: 'Tour della DMZ e Terzo Tunnel d\'Infiltrazione',
    localita: 'Paju, provincia del Gyeonggi, circa un\'ora a nord di Seoul',
    cosE:
      'La gita di una giornata nelle aree controllate attorno alla Zona Demilitarizzata: il parco della memoria di Imjingak, la discesa a piedi nel Terzo Tunnel d\'Infiltrazione, l\'Osservatorio di Dora affacciato sulla Corea del Nord e la stazione di Dorasan, costruita nel 2002 sulla linea ferroviaria per Pyongyang e mai entrata davvero in servizio.',
    percheFarla:
      'Perché è l\'unico modo di vedere da vicino una guerra che non si è mai chiusa. L\'armistizio firmato a Panmunjom il 27 luglio 1953 non è mai diventato un trattato di pace: tutto ciò che si attraversa in questa giornata — i tunnel scavati sotto il confine, il villaggio vetrina dall\'altra parte, i binari che finiscono nel nulla — è la conseguenza di quella firma mancata.',
    durata: 'mezza giornata o giornata intera, 5-8 ore compresi i trasferimenti da Seoul',
    periodo:
      'tutto l\'anno. Le giornate limpide di autunno e inverno offrono la visibilità migliore dall\'Osservatorio di Dora. Le visite sono normalmente sospese il lunedì e nelle festività nazionali, e possono essere annullate senza preavviso per esercitazioni o tensioni al confine.',
    costo: 'indicativamente 50-90€ a persona da Seoul, con pranzo spesso incluso',
    comePrenotare:
      'Solo tramite operatori autorizzati, con partenza da Seoul: non si accede in autonomia, né in auto né con i mezzi pubblici. Si prenota con qualche giorno di anticipo, comunicando i dati del passaporto. Nei periodi di punta conviene muoversi con una settimana.',
    cosaPortare:
      'Il passaporto originale, che è la cosa più importante di tutte: senza, non si passa il checkpoint, e nessuna fotocopia o foto sul telefono viene accettata. Scarpe comode per la discesa nel tunnel e un giubbino, perché sottoterra la temperatura è costante e bassa.',
    perChiEAdatta:
      'A tutti, con un\'avvertenza precisa sul tunnel: la galleria di accesso è una rampa ripida e lunga, e il cunicolo vero è alto poco più di un metro e mezzo, tanto che si cammina curvi con il caschetto che sfrega il soffitto. Chi soffre di claustrofobia o ha problemi di ginocchia può saltarlo e aspettare fuori senza perdere il resto.',
    miaEsperienza:
      'È la giornata che più di ogni altra dipende da quanto si è letto prima, perché il paesaggio da solo non dice niente: colline, filo spinato, un parcheggio. Il Terzo Tunnel è il punto in cui diventa fisico. Si scende centinaia di metri lungo una rampa ripidissima, poi si prosegue piegati dentro una galleria scavata nella roccia, e a un certo punto c\'è una barriera di cemento oltre la quale il cunicolo continua verso nord. Fu scoperto nel 1978 grazie a un disertore, arriva a poco più di quaranta chilometri da Seoul e sarebbe stato in grado di far passare decine di migliaia di soldati in un\'ora. Dall\'Osservatorio di Dora, col binocolo, si vedono i campi del Nord e Kijong-dong, il villaggio costruito perché lo si guardasse: case con le finestre senza vetri e le luci accese a orario. Ma la cosa che resta più a lungo è Dorasan, una stazione nuova e lucida, con i tabelloni delle partenze e il personale in servizio, che dal 2002 aspetta un treno per Pyongyang. Il cartello non dice "ultima stazione del Sud": dice "prima stazione verso il Nord".',
    giudizio: 'imperdibile',
    alternative: [
      'Il tour della JSA di Panmunjom, quando accessibile: un\'esperienza completamente diversa e molto più difficile da ottenere',
      'Il Memoriale della Guerra di Corea a Seoul, gratuito, da vedere il giorno prima: è ciò che rende leggibile tutto il resto',
      'L\'Osservatorio dell\'Unificazione di Goseong, sulla costa orientale, molto meno battuto',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'L\'ingresso del Terzo Tunnel d\'Infiltrazione nella DMZ coreana con i caschetti per i visitatori',
  },
  {
    slug: 'jsa-panmunjom',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'dmz',
    nome: 'La JSA di Panmunjom',
    localita: 'Joint Security Area, Panmunjom, sulla linea di demarcazione militare',
    cosE:
      'L\'unico punto della frontiera dove i soldati delle due Coree si fronteggiano a pochi metri di distanza: un piazzale con le baracche azzurre delle conferenze costruite a cavallo della linea di demarcazione, la Freedom House sul lato sud e, poco lontano, il Ponte del Non Ritorno. Dentro la sala delle riunioni si attraversa fisicamente il confine.',
    percheFarla:
      'Perché è il luogo in cui la divisione della penisola è avvenuta materialmente: qui è stato firmato l\'armistizio del 1953, qui nel 1976 due ufficiali americani furono uccisi a colpi d\'ascia durante la potatura di un pioppo, e qui nel 2018 i leader delle due Coree si sono stretti la mano davanti alle telecamere di tutto il mondo.',
    durata: 'giornata intera',
    periodo:
      'quando è accessibile, il che non è scontato: l\'ingresso civile a Panmunjom è stato sospeso più volte dal 2023 e la riapertura dipende dalla situazione diplomatica. Va verificato poco prima della partenza.',
    costo: 'sensibilmente più alto del tour standard della DMZ, per via delle procedure di autorizzazione',
    comePrenotare:
      'Solo con operatori accreditati, con 2-4 settimane di anticipo in alta stagione e 1-2 in bassa. I dati del passaporto vanno trasmessi 5-7 giorni prima per l\'autorizzazione militare, e va firmata una dichiarazione di responsabilità. Esistono limitazioni per alcune nazionalità e regole diverse per i cittadini sudcoreani. La visita può essere annullata all\'ultimo momento senza possibilità di recupero.',
    cosaPortare:
      'Passaporto originale, obbligatorio. E abbigliamento conforme al codice previsto: niente jeans strappati, sandali, canottiere o capi militari. Le restrizioni fotografiche sono reali e vengono fatte rispettare: si scatta solo dove e quando la guida lo consente.',
    perChiEAdatta:
      'A chi ha date flessibili, prenota con largo anticipo e mette in conto che possa saltare. Non è adatta a chi costruisce l\'intero viaggio attorno a questa giornata.',
    miaEsperienza:
      'La JSA è l\'unica parte della frontiera in cui la tensione si sente addosso invece di doverla immaginare. Si arriva dopo una trafila di controlli, si firma una liberatoria che spiega senza giri di parole quali sono i rischi, e si scende dal pullman in un piazzale dove i soldati sudcoreani stanno in posizione fissa, mezzi coperti dietro le baracche, e dall\'altra parte c\'è la Corea del Nord a venti metri. Dentro la sala delle conferenze la linea di demarcazione passa esattamente in mezzo al tavolo, e girando attorno a quel tavolo si finisce tecnicamente in territorio nordcoreano per qualche secondo. Il pezzo che però racconta di più è il Ponte del Non Ritorno, un ponticello grigio in mezzo al verde: nel 1953 i prigionieri di guerra ci passarono sopra dovendo scegliere da che parte restare, con una sola possibilità e nessun ripensamento. Da lì il nome. Vale la pena essere chiari su un punto: dal 2023 questa visita è stata chiusa più volte che aperta, e chi organizza il viaggio contandoci rischia di restare a mani vuote.',
    giudizio: 'imperdibile',
    alternative: [
      'Il tour standard della DMZ con Terzo Tunnel e Dorasan, sempre disponibile e da prenotare comunque come piano principale',
      'Il Memoriale della Guerra di Corea a Seoul, per il contesto storico completo',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Le baracche azzurre della Joint Security Area di Panmunjom a cavallo della linea di demarcazione',
  },
  {
    slug: 'haenyeo-jeju',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'jeju',
    nome: 'Le haenyeo, le donne del mare di Jeju',
    localita: 'Costa orientale di Jeju: Gujwa-eup, Hado-ri, Seongsan',
    cosE:
      'Le haenyeo sono le pescatrici in apnea di Jeju: scendono fino a una decina di metri senza bombole, con la sola muta, una maschera e un galleggiante — il tewak — per raccogliere orecchie di mare, ricci, polpi e alghe. Restano sott\'acqua un paio di minuti per volta, per ore, e riemergono con un fischio acutissimo chiamato sumbisori, con cui espellono l\'anidride carbonica in un colpo solo. La loro cultura è iscritta nella lista del patrimonio immateriale UNESCO dal 2016.',
    percheFarla:
      'Perché è una pratica che sta finendo sotto gli occhi di chi la guarda: erano oltre 4.500 nel 2013 e alla fine del 2024 erano scese attorno alle 2.600, con più del 60% sopra i settant\'anni e circa il 90% sopra i sessanta. E perché ha prodotto qualcosa di unico nell\'Asia orientale confuciana: su quest\'isola, per secoli, il reddito familiare l\'hanno portato le donne.',
    durata: 'mezza giornata per il museo e una dimostrazione, una giornata intera facendo anche i villaggi della costa',
    periodo:
      'tutto l\'anno, ma le immersioni dipendono da maree, condizioni del mare e periodi di fermo biologico. Le uniche uscite a orario prevedibile sono le dimostrazioni organizzate. D\'inverno lavorano nelle condizioni più dure e si vedono più di rado.',
    costo: 'Museo delle haenyeo circa 1.100 won; le dimostrazioni sono gratuite oltre al biglietto del sito; il pescato si paga a peso alle bancarelle delle cooperative',
    comePrenotare:
      'Niente da prenotare. Il museo di Gujwa-eup è aperto tutto l\'anno (chiuso il lunedì); gli orari delle dimostrazioni a Seongsan vengono pubblicati sul posto e cambiano con le maree. Per i villaggi della costa serve solo un\'auto e la disponibilità a tornare più volte.',
    cosaPortare:
      'Un binocolo, che cambia completamente la possibilità di seguirle da riva senza avvicinarsi. E soprattutto il rispetto delle regole non scritte: sono donne molto anziane al lavoro, non un\'attrazione folkloristica. Non ci si avvicina in acqua, non si fotografa da vicino senza chiedere, non si entra nei bulteok.',
    perChiEAdatta:
      'A chiunque, con una premessa: senza il contesto è solo una signora che nuota. Il museo prima, tutto il resto dopo.',
    miaEsperienza:
      'Il sumbisori si sente prima di vedere qualsiasi cosa. Si sta sul molo, il mare è mosso e grigio, e dall\'acqua arriva un fischio lungo e acuto, poi un altro più lontano: sono loro che riemergono, e si riconoscono tra di loro proprio da quel suono. La cosa che spiazza non è l\'apnea, è l\'età. La donna che esce dall\'acqua con la rete piena di ricci ha settantacinque anni, cammina piano sugli scogli con gli stivali di gomma, e nel giro di mezz\'ora è di nuovo sotto. Il museo di Gujwa è il posto dove il quadro si compone e andrebbe fatto per primo: spiega i bulteok, i ripari circolari in pietra dove si cambiano e si scaldano e dove per generazioni la comunità ha preso le decisioni a voto; spiega la gerarchia interna, dalle principianti alle sanggun che scendono più a fondo; e racconta la parte che nessun tour menziona, cioè che nel 1932 furono le haenyeo a guidare una delle più grandi proteste contro il dominio coloniale giapponese. Il modo più onesto di chiudere la giornata è comprare qualcosa alle bancarelle delle cooperative, dove i soldi vanno direttamente a loro. È l\'unica esperienza di questo viaggio che ha una scadenza: tra vent\'anni, con questi numeri, non ci sarà più.',
    giudizio: 'imperdibile',
    alternative: [
      'Le ama giapponesi di Toba e della penisola di Shima, la pratica gemella dall\'altra parte del mare',
      'Il Parco della Pace 4·3 a Jeju, per l\'altra grande pagina di storia dell\'isola',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Una haenyeo di Jeju riemerge accanto al tewak arancione lungo la costa rocciosa dell\'isola',
  },
  {
    slug: 'seongsan-ilchulbong',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'jeju',
    nome: 'Alba su Seongsan Ilchulbong',
    localita: 'Costa orientale di Jeju',
    cosE:
      'Un cono vulcanico di tufo alto 182 metri, nato da un\'eruzione sottomarina e saldato all\'isola da un istmo, con un cratere erboso in cima circondato da guglie di roccia. Il nome significa letteralmente "picco del sole nascente" ed è patrimonio UNESCO. La salita è di circa venti minuti su gradini.',
    percheFarla:
      'Perché è il punto da cui l\'alba si guarda in tutta la Corea, e perché ai suoi piedi si tengono le dimostrazioni di immersione delle haenyeo: è l\'unico posto dell\'isola dove le due cose stanno a cinquecento metri l\'una dall\'altra.',
    durata: '1-2 ore per la salita e la discesa',
    periodo:
      'tutto l\'anno, con orari di apertura che seguono l\'alba e cambiano di mese in mese. Il sito apre appositamente prima del sorgere del sole.',
    costo: 'circa 5.000 won',
    comePrenotare: 'Non serve prenotare, si paga all\'ingresso. Gli orari di apertura vanno però controllati il giorno prima, perché seguono l\'alba.',
    cosaPortare: 'Una giacca a vento: qui il vento non smette mai e all\'alba, anche in estate, fa freddo. Torcia o telefono per i primi gradini al buio.',
    perChiEAdatta: 'A tutti: la salita è breve, su scalinata regolare con corrimano, ma è continua e senza tratti pianeggianti.',
    miaEsperienza:
      'La salita è corta e i gradini sono comodi, ma il vento sulla cresta finale è quello che rende la cosa memorabile: arriva dal mare aperto senza niente a fermarlo, e in cima ci si tiene al parapetto. Il cratere in sé è meno spettacolare di quanto le fotografie facciano credere — è una conca erbosa, non un pozzo di lava — mentre quello che vale davvero è girarsi e guardare il profilo del cono dall\'istmo, con il mare intorno su tre lati. L\'alba merita la sveglia solo con il cielo pulito, e a Jeju non è scontato. Il vero motivo per essere qui presto, comunque, è un altro: nella mattinata, ai piedi del cono, ci sono le uscite delle haenyeo, e vedere la stessa costa prima dall\'alto e poi dal livello dell\'acqua chiude il cerchio meglio di qualsiasi altra combinazione dell\'isola.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il cratere di Sangumburi o uno degli oreum interni, molto meno affollati',
      'L\'isola di Udo, a dieci minuti di traghetto, con altre haenyeo e nessuna coda',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il cono vulcanico di Seongsan Ilchulbong che esce dal mare all\'alba, Jeju',
  },
  {
    slug: 'hallasan',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'jeju',
    nome: 'Salita all\'Hallasan',
    localita: 'Parco nazionale dell\'Hallasan, centro dell\'isola di Jeju',
    cosE:
      'La montagna più alta della Corea del Sud, 1.947 metri, un vulcano a scudo con un lago craterico in cima. Due soli sentieri arrivano alla vetta — Seongpanak e Gwaneumsa — mentre gli altri si fermano più in basso. La salita non è tecnica ma è lunga: si parla di 8-10 ore andata e ritorno.',
    percheFarla:
      'Perché è il punto più alto del paese e perché dalla cima, nelle giornate limpide, si vede tutta l\'isola con il mare attorno. E perché è l\'unica escursione seria di un viaggio altrimenti urbano.',
    durata: '8-10 ore andata e ritorno secondo il sentiero',
    periodo:
      'aprile-giugno e settembre-ottobre. D\'inverno la salita è possibile ma richiede ramponi e i sentieri possono chiudere; d\'estate il caldo e le piogge la rendono pesante. Esistono orari limite oltre i quali i ranger non lasciano proseguire oltre i rifugi intermedi.',
    costo: 'ingresso al parco gratuito; la prenotazione è obbligatoria ma non a pagamento',
    comePrenotare:
      'Prenotazione online obbligatoria per i due sentieri che arrivano in vetta, con quote giornaliere: senza, non si viene lasciati passare al checkpoint. Si prenota sul portale del parco nazionale con qualche giorno di anticipo, di più nei fine settimana e in autunno.',
    cosaPortare:
      'Scarpe da trekking, acqua e pranzo al sacco — lungo i sentieri non si compra nulla — e strati, perché in cima la temperatura è molto più bassa che alla partenza. Torcia se si parte prima dell\'alba, cosa che quasi tutti fanno per rispettare gli orari limite.',
    perChiEAdatta:
      'Serve allenamento, non tecnica: non ci sono passaggi esposti né attrezzati, ma sono dieci ore di cammino su fondo sassoso e la discesa pesa più della salita, soprattutto sul sentiero di Gwaneumsa.',
    miaEsperienza:
      'È l\'escursione che rende Jeju un\'isola vera e non una gita al mare. Il sentiero di Seongpanak è il più facile e il più lungo, con una salita graduale nel bosco che per ore non offre niente da guardare: è la parte noiosa, e va attraversata sapendo che il paesaggio arriva solo negli ultimi due chilometri, quando gli alberi finiscono e si esce sull\'altopiano sommitale. Quello di Gwaneumsa è più corto, più ripido e molto più bello, con creste e valli aperte, ed è il motivo per cui chi può organizzare il rientro in taxi sale da uno e scende dall\'altro. Gli orari limite imposti dai ranger non sono una formalità: chi arriva tardi al rifugio intermedio viene fermato lì, e tutta la giornata va indietro. E sul lago craterico conviene abbassare le aspettative: per buona parte dell\'anno è quasi asciutto e la cima è spesso nella nebbia. La salita vale comunque, ma non per la cartolina.',
    giudizio: 'bella-non-essenziale',
    alternative: [
      'Una tappa degli Olle Trail lungo la costa, molto meno impegnativa e più rappresentativa dell\'isola',
      'La salita a uno degli oreum, i coni vulcanici minori che punteggiano Jeju, in un\'ora invece che in dieci',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il sentiero verso la vetta dell\'Hallasan sopra il limite degli alberi, Jeju',
  },
  {
    slug: 'gyeongbokgung-hanbok',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'seoul',
    nome: 'Gyeongbokgung in hanbok',
    localita: 'Centro di Seoul, quartiere di Jongno',
    cosE:
      'La visita al palazzo reale principale della dinastia Joseon indossando l\'hanbok, l\'abito tradizionale coreano, che si noleggia nei numerosi negozi attorno all\'ingresso. Chi lo indossa entra gratis in tutti i palazzi della città, ed è il motivo per cui lo fanno anche moltissimi coreani.',
    percheFarla:
      'Perché è l\'unico modo di vedere Gyeongbokgung come lo vedono i visitatori locali, e perché rende evidente una cosa che sfugge guardando le foto: i cortili sono stati progettati per essere attraversati da persone vestite così, e il modo in cui l\'abito si muove nello spazio cambia la percezione dell\'architettura.',
    durata: '3-4 ore comprese vestizione e restituzione',
    periodo:
      'tutto l\'anno. Primavera e autunno sono i mesi migliori; d\'estate l\'hanbok è pesante e d\'inverno va messo sopra i propri vestiti. Il palazzo è chiuso il martedì.',
    costo: 'noleggio hanbok indicativamente 15.000-30.000 won per 2-4 ore; ingresso al palazzo gratuito indossandolo (altrimenti circa 3.000 won)',
    comePrenotare:
      'I negozi di noleggio sono decine attorno alla fermata Gyeongbokgung e non richiedono prenotazione nei giorni feriali; nei fine settimana e in alta stagione conviene prenotare online. L\'acconciatura è spesso inclusa o costa pochissimo in più.',
    cosaPortare: 'Nulla di particolare: si lascia tutto in deposito al negozio. Scarpe comode, perché l\'hanbok si porta con le proprie.',
    perChiEAdatta: 'A tutti. Vale la pena sapere che gli uomini lo indossano quanto le donne e che nessuno guarda strano: è la norma, non un travestimento.',
    miaEsperienza:
      'Sembra la cosa più turistica che si possa fare e invece è quella che meglio spiega come funziona questo posto: nei cortili di Gyeongbokgung, in una giornata qualsiasi, metà delle persone in hanbok sono coreane, spesso ragazzi e ragazze di vent\'anni che lo fanno per le stesse ragioni per cui lo fa un visitatore straniero. Il vantaggio pratico è concreto — l\'ingresso ai palazzi diventa gratuito e il noleggio si ripaga in parte da solo — ma la cosa che colpisce è un\'altra: camminare tra i padiglioni con quell\'abito addosso cambia il passo, perché la gonna è ampia e non permette di correre, e all\'improvviso si capisce perché i cortili siano così grandi e le distanze così dilatate. Il cambio della guardia davanti alla porta principale, che si ripete più volte al giorno, è la cornice giusta. Da sapere prima: il palazzo è chiuso il martedì, ed è l\'errore di programmazione più comune di chi arriva a Seoul.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il Giardino Segreto di Changdeokgung, con visita guidata a numero chiuso: meno scenografico e più bello',
      'Deoksugung dopo il tramonto, illuminato e quasi vuoto',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Visitatori in hanbok nel cortile del palazzo Gyeongbokgung a Seoul',
  },
  {
    slug: 'gwangjang-cibo-strada',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'seoul',
    nome: 'Cena al mercato di Gwangjang',
    localita: 'Jongno, Seoul',
    cosE:
      'Il mercato coperto più antico di Seoul, aperto dal 1905, dove tra i banchi di tessuti si è formata una delle concentrazioni di cucina di strada più famose dell\'Asia: si mangia seduti su sgabelli davanti alla piastra, gomito a gomito con chi cucina.',
    percheFarla:
      'Perché è il posto dove si mangia la cucina di strada coreana nella sua forma originale, e perché l\'ora di punta — tra le sette e le nove di sera — è uno spettacolo in sé, con centinaia di persone sedute ai banchi dentro un capannone di inizio Novecento.',
    durata: '1-2 ore',
    periodo: 'tutto l\'anno, la sera. Molti banchi chiudono la domenica o presto nel pomeriggio: l\'orario giusto è tra le sei e le nove.',
    costo: 'indicativamente 3.000-8.000 won a porzione: si mangia molto bene con 10-15€ a testa',
    comePrenotare: 'Niente da prenotare: ci si siede dove c\'è posto. Nei banchi più famosi, quelli finiti nei documentari, c\'è una coda che vale la pena evitare spostandosi di dieci metri.',
    cosaPortare: 'Contanti per i banchi più piccoli, anche se quasi tutti accettano carta. E appetito, perché le porzioni arrivano in fretta.',
    perChiEAdatta:
      'A tutti, con un\'avvertenza per i vegetariani: quasi ogni piatto contiene pesce o carne, brodi compresi, e spiegarlo è complicato. Chi non tollera il piccante trova comunque molte opzioni.',
    miaEsperienza:
      'È la cosa da fare la prima sera a Seoul, prima ancora dei palazzi, perché mette subito nella condizione giusta. Ci si siede su uno sgabello di plastica davanti a una signora che cucina la stessa cosa da trent\'anni, si indica, e nel giro di due minuti arriva il piatto. I tre da provare sono il bindaetteok — una frittella spessa di fagioli mung macinati sul momento e fritta nello strutto, che è la specialità del mercato — il mayak gimbap, piccoli rotoli di riso e alga da intingere nella senape, e il tteokbokki, gli gnocchi di riso nella salsa rossa. La parte migliore però non è il cibo: è il rumore, il vapore, la gente che mangia in piedi, e il fatto che i banchi famosi con la fila davanti servono esattamente le stesse cose di quelli a dieci metri di distanza, dove ci si siede subito.',
    giudizio: 'imperdibile',
    alternative: [
      'Il mercato di Tongin, dove si comprano gettoni di ottone e si compone il proprio vassoio banco per banco',
      'La zona di Euljiro dopo il tramonto, con i tavolini in strada, per una versione meno turistica',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Banchi di cucina di strada affollati al mercato di Gwangjang, Seoul',
  },
  {
    slug: 'jjimjilbang',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'seoul',
    nome: 'Una notte in jjimjilbang',
    localita: 'Ovunque in Corea; a Seoul se ne trovano in ogni quartiere',
    cosE:
      'La sauna pubblica coreana, aperta ventiquattro ore: da una parte le vasche termali, divise per sesso e rigorosamente senza costume, dall\'altra una grande sala comune mista dove si sta in pigiama fornito dalla struttura, si mangia, si guarda la televisione e si dorme per terra su stuoie e cuscini di legno.',
    percheFarla:
      'Perché è l\'istituzione sociale più coreana che esista: ci vanno le famiglie il fine settimana, i ragazzi dopo una serata fuori, chi ha perso l\'ultimo treno. E perché per dieci euro si ha un posto dove dormire.',
    durata: 'da due ore a una notte intera',
    periodo: 'tutto l\'anno, aperti 24 ore su 24',
    costo: 'indicativamente 8.000-15.000 won per l\'ingresso, con supplemento notturno in alcune strutture',
    comePrenotare: 'Non si prenota: si entra, si paga, si riceve un braccialetto con la chiave dell\'armadietto e il pigiama. Il braccialetto registra anche i consumi interni, che si saldano all\'uscita.',
    cosaPortare:
      'Niente: asciugamani, pigiama e prodotti da bagno sono forniti o si comprano all\'interno. Vale la pena sapere in anticipo che nella zona delle vasche il costume non si usa e non è ammesso, e che ci si lava seduti alle docce prima di entrare in acqua.',
    perChiEAdatta:
      'A chi non ha problemi con la nudità nella zona termale, che è separata per sesso. La sala comune, dove si dorme, è mista e in pigiama. Sconsigliato a chi ha la pelle sensibile: le sale calde superano abbondantemente i settanta gradi.',
    miaEsperienza:
      'È l\'esperienza più strana e più normale di tutto il viaggio, nello stesso momento. Si entra, si paga poco più di dieci euro, si ricevono un pigiama e un braccialetto, e da lì in poi si fa quello che fanno tutti: prima le vasche, con l\'alternanza tra caldissimo e gelato, poi la sala comune, dove decine di persone stanno sdraiate per terra a guardare la televisione, mangiare uova sode cotte nella sauna e dormire. La prima volta la parte che imbarazza è la zona termale, dove il costume non esiste e il rituale è preciso — ci si lava seduti alle docce basse prima di entrare in acqua, e saltare questo passaggio è la vera scortesia. Dopo dieci minuti non ci pensa più nessuno. La cosa che resta è che alle tre di notte, nella sala comune, c\'è un padre che dorme accanto al figlio, due ragazze che chiacchierano, e un signore anziano che russa: non è una spa, è un pezzo di vita quotidiana in cui un visitatore può entrare per dieci euro.',
    giudizio: 'imperdibile',
    alternative: [
      'Un onsen giapponese, per il confronto: stessa idea di base, opposta nell\'atmosfera',
      'Una sauna di quartiere più piccola invece dei grandi complessi, dove non c\'è quasi nessun visitatore straniero',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'La sala comune di un jjimjilbang coreano con le stuoie per dormire e i pigiami forniti',
  },
  {
    slug: 'bulguksa-seokguram',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'gyeongju',
    nome: 'Bulguksa e l\'eremo di Seokguram',
    localita: 'Monte Toham, fuori Gyeongju',
    cosE:
      'I due capolavori dell\'arte buddista del regno di Silla, entrambi patrimonio UNESCO e costruiti nell\'VIII secolo: il tempio di Bulguksa, con le sue terrazze di pietra e le due pagode del cortile, e l\'eremo di Seokguram, una grotta artificiale costruita più in alto sul monte con blocchi di granito incastrati senza malta, al cui interno un Buddha seduto guarda verso il mare d\'Oriente.',
    percheFarla:
      'Perché sono il vertice tecnico e artistico di mille anni di regno di Silla, e perché Seokguram in particolare è una costruzione che resta impressionante anche sapendo com\'è fatta: una cupola di pietra autoportante del 751, orientata in modo che la luce del sole che sorge colpisse il volto della statua.',
    durata: 'mezza giornata per entrambi, compresi gli spostamenti',
    periodo:
      'tutto l\'anno. Aprile per i ciliegi lungo la strada di accesso e ottobre-novembre per il foliage sul monte Toham. L\'8 aprile del calendario lunare, per il compleanno del Buddha, i templi sono coperti di lanterne.',
    costo: 'circa 6.000 won ciascuno',
    comePrenotare: 'Nessuna prenotazione. Vanno però controllati gli orari degli autobus locali, perché tra Bulguksa e Seokguram c\'è ancora una strada di montagna e le corse sono poche.',
    cosaPortare: 'Scarpe comode, perché il complesso di Bulguksa è tutto su terrazze e scalinate di pietra.',
    perChiEAdatta: 'A tutti. Dall\'ingresso di Seokguram alla grotta c\'è un sentiero pianeggiante di circa dieci minuti nel bosco.',
    miaEsperienza:
      'Bulguksa è bellissimo e va preso per quello che è: quasi tutto il legno è stato ricostruito nel Novecento, mentre le parti originali sono le fondamenta, le scalinate e soprattutto le due pagode di pietra del cortile, che sono lì dall\'VIII secolo. Con la folla del fine settimana perde parecchio. Seokguram, più in alto sul monte, è il pezzo che lascia il segno: una cupola di granito costruita nel 751 incastrando blocchi senza malta, con al centro un Buddha di tre metri e mezzo scolpito in un unico masso, orientato verso il mare in modo che il sole del mattino gli arrivasse in faccia. Va detto chiaramente una cosa che delude chi non la sa prima: oggi si guarda da dietro una grande vetrata, dall\'anticamera, e non si può entrare nella grotta né girarci attorno. Resta impressionante lo stesso, ma chi si aspetta di stare sotto la cupola resta sorpreso. Il consiglio pratico è farli nello stesso mattino, cominciando da Seokguram appena apre, quando i pullman non sono ancora saliti.',
    giudizio: 'la-rifarei',
    alternative: [
      'I tumuli del Daereungwon in città, con la tomba aperta e visitabile dall\'interno',
      'Lo stagno di Anapji dopo il tramonto, che è il momento più bello della giornata a Gyeongju',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Le terrazze di pietra e le pagode del tempio di Bulguksa a Gyeongju',
  },
  {
    slug: 'templestay',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'gyeongju',
    nome: 'Templestay in un monastero buddista',
    localita: 'Monasteri in tutta la Corea; i più noti sono nelle montagne attorno a Gyeongju, Busan e Seoul',
    cosE:
      'Un programma ufficiale che permette di soggiornare in un monastero buddista partecipando alla vita dei monaci: cerimonia serale, sveglia prima dell\'alba per la liturgia delle tre del mattino o poco dopo, pasti in silenzio secondo il rito del baru gongyang, meditazione seduta e lavoro comunitario. Esiste in centinaia di templi, con formule di una o due notti.',
    percheFarla:
      'Perché è il rovescio esatto del ritmo coreano: dopo giorni di metropolitane, mercati e treni ad alta velocità, si finisce in un monastero di montagna dove il rumore più forte è una campana. E perché il pasto rituale, in cui non si può lasciare nemmeno un chicco di riso e si finisce lavando le ciotole con l\'acqua che poi si beve, insegna più di molte visite guidate.',
    durata: '1-2 notti',
    periodo:
      'tutto l\'anno. Le formule variano per stagione; in inverno molti templi di montagna sono freddissimi e lo si sente, perché le stanze sono essenziali.',
    costo: 'indicativamente 50.000-100.000 won per una notte, con pasti inclusi',
    comePrenotare:
      'Sul portale ufficiale Templestay, che ha una sezione in inglese e indica quali monasteri offrono programmi con supporto linguistico: è un dettaglio che cambia molto, perché in parecchi templi si svolge tutto in coreano.',
    cosaPortare:
      'Abbigliamento comodo e coprente — le divise da tempio vengono fornite ma si indossano su strati propri — e calzini, perché si sta scalzi negli edifici. Niente alcol, niente carne. Il telefono si tiene ma si usa poco: è parte del patto.',
    perChiEAdatta:
      'A chi accetta regole precise: sveglia intorno alle tre o alle quattro del mattino, silenzio a tavola, prostrazioni ripetute durante le cerimonie. Non è un ritiro benessere e non va scelto pensando che lo sia.',
    miaEsperienza:
      'È la tappa che nessuno mette in programma e che finisce per essere quella di cui si parla di più tornando a casa. La sveglia è prima delle quattro e la prima cerimonia si tiene al buio, con il tamburo e la campana che chiamano nel cortile: sul momento è durissima, e mezz\'ora dopo è la cosa più bella della giornata. Il pasto rituale è il pezzo che spiazza di più — quattro ciotole, porzioni decise da sé, il divieto assoluto di lasciare avanzi, e alla fine si pulisce l\'ultima ciotola con un pezzo di daikon e si beve l\'acqua del risciacquo. Non è folklore: è la regola monastica, e farlo una volta cambia il modo di guardare il cibo per un po\'. Va detto che la notte si dorme su un materasso sottile per terra e che in montagna, fuori stagione, fa freddo. Il consiglio è scegliere un monastero con programma in inglese, perché altrimenti gran parte di quello che succede resta incomprensibile.',
    giudizio: 'imperdibile',
    alternative: [
      'Una notte in hanok a Hahoe o a Jeonju, per l\'esperienza dell\'alloggio tradizionale senza la parte religiosa',
      'Una visita in giornata a un tempio di montagna, per chi non vuole impegnare una notte',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il cortile di un monastero buddista coreano di montagna all\'alba, con le lanterne colorate',
  },
  {
    slug: 'gamcheon-busan',
    paeseSlug: 'corea-del-sud',
    destinazioneSlug: 'busan',
    nome: 'Il villaggio di Gamcheon',
    localita: 'Saha-gu, Busan',
    cosE:
      'Un quartiere di case basse e colorate che sale a gradoni su un fianco di collina, con vicoli stretti, scalinate e murales. Nato come insediamento di profughi durante la guerra di Corea, è stato riqualificato negli anni Duemila con un progetto artistico che ne ha fatto uno dei luoghi più fotografati del paese.',
    percheFarla:
      'Perché dietro la cartolina c\'è una storia precisa: quelle case le costruirono, una addossata all\'altra sulla collina, le famiglie arrivate qui senza niente mentre il resto della penisola era occupato. Sapendolo, camminare nei vicoli è un\'altra cosa dal fotografarli.',
    durata: '2-3 ore',
    periodo: 'tutto l\'anno. Il tardo pomeriggio ha la luce migliore sulle facciate; il fine settimana è molto affollato.',
    costo: 'gratuito; alcune case-museo e punti panoramici chiedono un piccolo contributo',
    comePrenotare:
      'Niente da prenotare. Si sale in autobus dalla stazione della metro di Toseong e si scende a piedi: farlo nel senso opposto significa affrontare tutta la salita.',
    cosaPortare: 'Scarpe comode: è tutto scalinate e pendenza, e il fondo è irregolare.',
    perChiEAdatta:
      'A tutti, tranne che a chi ha difficoltà a camminare in salita e discesa: non esistono percorsi pianeggianti. È un quartiere abitato e le regole di silenzio nei vicoli residenziali sono segnalate ovunque.',
    miaEsperienza:
      'La trappola di Gamcheon è trattarlo come un set. Le case colorate sulla collina sono davvero fotogeniche e nel fine settimana ci si trova in mezzo a centinaia di persone che cercano lo stesso inquadratura, ma quel quartiere non è nato come progetto artistico: è nato come baraccopoli per chi era scappato dal Nord e dal resto del paese durante la guerra, quando Busan fu l\'ultima città a non cadere, e la vernice è arrivata sessant\'anni dopo. Il modo giusto di visitarlo è salire in autobus fino in cima e scendere a piedi, senza seguire il percorso segnalato dei murales: nei vicoli laterali ci sono ancora gli anziani seduti fuori casa, i panni stesi e le porte aperte, e i cartelli che chiedono di parlare piano non sono un arredo. Dall\'alto, con la luce del tardo pomeriggio, la vista su quel mosaico di tetti fino al mare è una delle immagini che restano di tutto il viaggio.',
    giudizio: 'la-rifarei',
    alternative: [
      'Il cimitero commemorativo delle Nazioni Unite, a Busan, che racconta la stessa guerra da un\'altra angolazione',
      'Il sentiero costiero di Igidae, con la vista frontale sullo skyline di Haeundae',
    ],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'I vicoli e le case colorate a gradoni del villaggio di Gamcheon, Busan',
  },
]
