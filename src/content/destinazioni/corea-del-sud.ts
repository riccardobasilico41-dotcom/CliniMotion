import type { Destinazione } from '@/lib/types'

// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto (orari, regole
// d\'accesso, stagione, affollamento) e non su ricordi reali: vanno riletti e
// sostituiti con i tuoi. Nessun nome di hotel, ristorante o operatore è stato
// inventato.
// Le parti storiche — la DMZ e la cultura delle haenyeo a Jeju — sono scritte
// su fonti verificabili (date, cifre, status UNESCO) e non ricostruite: i
// numeri vanno però riverificati, perché cambiano di anno in anno. Lo stesso
// vale per l\'accesso alla JSA di Panmunjom, sospeso e riaperto più volte.

export const destinazioniCoreaDelSud: Destinazione[] = [
  {
    slug: 'seoul',
    paeseSlug: 'corea-del-sud',
    ordine: 1,
    nome: 'Seoul',
    tipologia: ['città', 'cultura', 'gastronomia'],
    giorniConsigliati: '4-5 giorni, escluse le gite fuori città',
    visitataPersonalmente: true,
    introduzione:
      'Una capitale di dieci milioni di abitanti stretta tra montagne e attraversata dal fiume Han, dove cinque palazzi reali del Cinquecento convivono con i quartieri più tecnologici dell\'Asia e dove, a quaranta chilometri in linea d\'aria, comincia il confine più militarizzato del mondo.',
    percheAndarci:
      'Perché è una delle poche megalopoli asiatiche che si cammina davvero, quartiere per quartiere, e perché nessun\'altra città racconta con altrettanta chiarezza cosa significhi aver ricostruito un paese da zero in due generazioni: nel 1953 Seoul era in macerie.',
    cosaVedere: [
      'Gyeongbokgung, il palazzo principale della dinastia Joseon, con il cambio della guardia davanti alla porta Gwanghwamun',
      'Changdeokgung e il suo Giardino Segreto (Huwon), visitabile solo con visita guidata a numero chiuso',
      'Il villaggio di hanok di Bukchon, tra i due palazzi, con le case tradizionali ancora abitate',
      'Il Memoriale della Guerra di Corea, il museo che spiega tutto ciò che si andrà a vedere alla DMZ',
      'Il mercato di Gwangjang, il più antico della città, con le cucine di strada in mezzo ai banchi',
      'La N Seoul Tower sul monte Namsan e la fortezza urbana che corre sui crinali attorno al centro',
      'Insadong per l\'artigianato, Hongdae per la vita universitaria, Seongsu per i caffè ricavati dalle vecchie fabbriche',
    ],
    cosaFare: [
      'Visitare Gyeongbokgung in hanbok, il costume tradizionale, che azzera il biglietto d\'ingresso — vedi la scheda esperienza dedicata',
      'Cena di cibo di strada al mercato di Gwangjang, tra bindaetteok e mayak gimbap',
      'Serata in un jjimjilbang, la sauna coreana aperta 24 ore, dove si può anche dormire',
      'Camminare un tratto della fortezza di Seoul lungo il crinale del Bugaksan, con la città sotto',
      'Gita in giornata alla DMZ, che parte da qui — vedi la scheda destinazione dedicata',
    ],
    doveDormire:
      'Myeongdong e Jongno sono le zone più comode per i palazzi e per la metropolitana; Hongdae e Yeonnam per la vita serale e i prezzi più bassi; Seongsu e Itaewon per un ritmo più adulto. La regola vera è scegliere vicino a una stazione della metro, perché a Seoul le distanze sono grandi e il traffico è pesante.',
    doveMangiare:
      'Seoul è una delle capitali gastronomiche dell\'Asia e la cosa da capire subito è il meccanismo dei banchan: qualunque piatto si ordini, arriva accompagnato da cinque o dieci contorni gratuiti che vengono rimpiazzati su richiesta, senza costi. Da provare il barbecue coreano — dove la carne la si gira da soli sulla griglia incassata nel tavolo — il gomtang e il samgyetang per le zuppe, il naengmyeon freddo d\'estate, e almeno una cena di cibo di strada al mercato di Gwangjang. I caffè, invece, costano quanto in Europa: in Corea sono luoghi di ritrovo e si paga la sosta, non la tazza.',
    comeArrivare:
      'Volo internazionale su Incheon (ICN), uno dei migliori aeroporti al mondo, collegato al centro dall\'AREX in circa un\'ora. Il secondo scalo, Gimpo (GMP), serve soprattutto i voli interni, Jeju compresa.',
    comeSpostarsi:
      'Metropolitana capillare, pulita e con cartelli e annunci in inglese: si paga con la T-money, che si compra in qualsiasi minimarket. Per i taxi si usa Kakao T, che funziona con carta estera. Attenzione a Google Maps: in Corea non calcola i percorsi, servono Naver Map o KakaoMap.',
    periodoMigliore:
      'aprile per i ciliegi e ottobre-inizio novembre per il foliage. L\'estate è calda, umida e piovosa; l\'inverno gelido ma limpido, con i palazzi nella neve che valgono il freddo.',
    costi:
      'Ingresso ai palazzi 3.000 won circa, gratis indossando l\'hanbok; il biglietto combinato per quattro palazzi più il santuario di Jongmyo costa poco più di 10.000 won. Metropolitana poco più di un euro, pasti 6-15€.',
    erroriDaEvitare: [
      'Andare a Changdeokgung senza aver prenotato la visita al Giardino Segreto: è a numero chiuso, con orari fissi, e si esaurisce',
      'Affidarsi a Google Maps per muoversi: mostra i luoghi ma non calcola nessun percorso',
      'Visitare i palazzi di martedì, quando Gyeongbokgung è chiuso (gli altri chiudono il lunedì): è l\'errore di programmazione più comune',
      'Saltare il Memoriale della Guerra prima di andare alla DMZ: senza quel contesto, la gita al confine resta una collezione di fotografie',
    ],
    confronti: [
      {
        titolo: 'Quale dei cinque palazzi di Seoul',
        introduzione:
          'I palazzi reali di Seoul sono cinque, tutti nel raggio di due chilometri, e quasi tutti i visitatori ne fanno uno solo. Sono però molto diversi per dimensione, folla e tipo di visita, e la scelta cambia la giornata.',
        opzioni: [
          {
            nome: 'Gyeongbokgung',
            sintesi: 'Il palazzo principale, il più grande e il più monumentale, con il cambio della guardia davanti alla porta Gwanghwamun.',
            costo: 'circa 3.000 won, gratis in hanbok',
            durata: '2-3 ore',
            pro: ['La scala e la solennità non hanno pari negli altri quattro', 'Il cambio della guardia, più volte al giorno, è uno spettacolo vero', 'Due musei importanti all\'interno del recinto'],
            contro: ['Il più affollato di tutti', 'Quasi interamente ricostruito: i giapponesi lo demolirono in larga parte durante l\'occupazione', 'Chiuso il martedì'],
            perChi: 'Chi ne vede uno solo e vuole l\'immagine classica.',
          },
          {
            nome: 'Changdeokgung e il Giardino Segreto',
            sintesi: 'Patrimonio UNESCO, costruito assecondando il terreno invece di imporgli una griglia, con un giardino reale visitabile solo su prenotazione.',
            costo: 'circa 3.000 won più 5.000 per il Huwon',
            durata: '3 ore con la visita guidata al giardino',
            pro: ['Il Giardino Segreto è la cosa più bella tra tutti i palazzi di Seoul', 'Molto più autentico: è il palazzo meglio conservato dei cinque', 'La visita guidata a numero chiuso tiene lontana la folla'],
            contro: ['Il Huwon si prenota online e si esaurisce, soprattutto in autunno', 'Orari rigidi, si entra solo con il gruppo assegnato', 'Chiuso il lunedì'],
            perChi: 'Chi ha una mattinata da dedicargli e prenota con qualche giorno di anticipo. È la scelta migliore in assoluto.',
          },
          {
            nome: 'Deoksugung',
            sintesi: 'Il più piccolo e il più strano: accanto ai padiglioni tradizionali ci sono edifici in stile occidentale di inizio Novecento, testimoni degli ultimi anni dell\'impero coreano.',
            costo: 'circa 1.000 won',
            durata: '1 ora',
            pro: ['In pieno centro, si infila in mezzo a qualsiasi programma', 'Il contrasto tra architettura coreana e neoclassica non esiste altrove', 'Bellissimo di sera, quando resta aperto e illuminato'],
            contro: ['Piccolo, si esaurisce in fretta', 'Meno spettacolare degli altri', 'Chiuso il lunedì'],
            perChi: 'Chi ha un\'ora libera o vuole vedere un palazzo dopo il tramonto.',
          },
        ],
        raccomandazione:
          'Con due mezze giornate: Changdeokgung con il Giardino Segreto prenotato, e Gyeongbokgung per il cambio della guardia. Con una sola, Changdeokgung — a patto di aver prenotato il Huwon, perché senza quello il confronto si ribalta.',
      },
    ],
    miaEsperienza:
      'Seoul spiazza perché non somiglia a nessuna delle altre capitali asiatiche: è ordinata, silenziosa per le sue dimensioni, e si cammina. La cosa che colpisce di più non sono i palazzi, che sono belli ma in larga parte ricostruiti, è il fatto che tutto quello che si guarda ha meno di settant\'anni — nel 1953 la città era in macerie e quasi nessuno degli edifici che si vedono oggi esisteva. Il Memoriale della Guerra è il posto dove questa cosa diventa concreta, ed è il motivo per cui va visto prima della DMZ e non dopo: senza, il confine resta una gita fotografica. Sul cibo non ci sono avvertenze da fare, solo una constatazione: il meccanismo dei banchan, con dieci contorni che arrivano gratis e vengono rimpiazzati senza chiedere niente, è la cosa che più fa venire voglia di tornare. E il jjimjilbang, la sauna aperta 24 ore dove intere famiglie dormono per terra su stuoie, è l\'istituzione più coreana che ci sia.',
    esperienzeSlugs: ['gyeongbokgung-hanbok', 'gwangjang-cibo-strada', 'jjimjilbang'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il palazzo Gyeongbokgung con i grattacieli di Seoul e le montagne sullo sfondo',
  },
  {
    slug: 'dmz',
    paeseSlug: 'corea-del-sud',
    ordine: 2,
    nome: 'La DMZ e Panmunjom',
    tipologia: ['storia', 'memoria', 'escursione'],
    giorniConsigliati: '1 giorno, in gita da Seoul',
    visitataPersonalmente: true,
    introduzione:
      'Una striscia di terra larga quattro chilometri e lunga 248, che taglia la penisola da costa a costa lungo la linea dove i combattimenti si sono fermati il 27 luglio 1953. Si chiama Zona Demilitarizzata ed è il confine più militarizzato del pianeta: un milione di mine, due eserciti schierati, e nel mezzo una fascia di bosco in cui da settant\'anni non entra quasi nessuno.',
    percheAndarci:
      'Perché è l\'unico posto al mondo dove si guarda dentro una guerra che non è mai finita. L\'armistizio del 1953 non è mai diventato un trattato di pace: le due Coree sono tecnicamente ancora in guerra, e tutto quello che si vede qui — i tunnel, i villaggi vetrina, la stazione che aspetta un treno che non arriva — è la conseguenza diretta di quel documento non firmato.',
    cosaVedere: [
      'Imjingak, il parco della memoria appena fuori dalla zona controllata, con il Ponte della Libertà e la locomotiva crivellata di proiettili lasciata dov\'era',
      'Il Terzo Tunnel d\'Infiltrazione, scoperto nel 1978: 1.635 metri scavati dal Nord verso sud, 73 metri sotto terra, in grado di far passare 30.000 soldati all\'ora e con la testa a poco più di 40 chilometri da Seoul',
      'L\'Osservatorio di Dora, da cui si vedono la città nordcoreana di Kaesong, il "villaggio della propaganda" di Kijong-dong e il pennone alto 160 metri costruito per superare quello del Sud',
      'La stazione di Dorasan, inaugurata nel 2002 sulla linea per Pyongyang, con il cartello che non dice "ultima stazione del Sud" ma "prima stazione verso il Nord"',
      'La JSA di Panmunjom, quando è accessibile: le baracche azzurre a cavallo della linea di demarcazione e il Ponte del Non Ritorno',
    ],
    cosaFare: [
      'Tour standard della DMZ, con Terzo Tunnel, Osservatorio di Dora e Dorasan — vedi la scheda esperienza dedicata',
      'Tour della JSA di Panmunjom, quando riaperto: è un\'esperienza completamente diversa e va prenotato settimane prima — vedi la scheda esperienza dedicata',
      'Visitare il Memoriale della Guerra di Corea a Seoul il giorno prima, che è ciò che rende leggibile tutto il resto',
      'Legare un nastro sulla recinzione del Ponte della Libertà, dove le famiglie divise lasciano messaggi da settant\'anni',
    ],
    doveDormire: 'Non ci si dorme: la DMZ si fa in giornata da Seoul, con partenze al mattino presto e rientro nel pomeriggio.',
    doveMangiare:
      'Il pranzo è quasi sempre incluso nel tour, in ristoranti convenzionati lungo la strada per Paju. La specialità della zona è la soia: l\'area di Jangdan, proprio sul confine, è nota per i suoi fagioli di soia, e il tofu e il doenjang che si mangiano da queste parti sono tra i migliori del paese. Dentro la zona controllata non si compra né si mangia niente al di fuori dei punti previsti.',
    comeArrivare:
      'Solo con un tour organizzato da un operatore autorizzato, con partenza da Seoul: non si può accedere in autonomia, né in auto né con i mezzi pubblici. I punti di ritrovo sono in centro, con partenze tra le 7 e le 8 del mattino.',
    comeSpostarsi:
      'In pullman, all\'interno del tour. Superato il checkpoint militare si sale a bordo di un mezzo autorizzato con una guida accreditata e non ci si allontana mai dal gruppo: i percorsi sono fissi e sorvegliati.',
    periodoMigliore:
      'tutto l\'anno, con le giornate limpide di autunno e inverno che offrono la visibilità migliore dall\'Osservatorio di Dora. Le visite sono normalmente sospese il lunedì e nelle festività nazionali, e possono essere annullate senza preavviso per esercitazioni militari o tensioni diplomatiche.',
    costi:
      'Tour standard indicativamente 50-90€ a persona da Seoul, pranzo spesso incluso; il tour con JSA, quando disponibile, costa parecchio di più per via delle procedure di autorizzazione.',
    erroriDaEvitare: [
      'Dimenticare il passaporto: senza l\'originale non si passa il checkpoint, e nessuna copia o foto è accettata',
      'Prenotare all\'ultimo momento: il tour standard va preso con giorni di anticipo, quello della JSA con settimane, perché i dati del passaporto devono essere trasmessi in anticipo per l\'autorizzazione militare',
      'Dare per scontata la JSA: l\'accesso civile a Panmunjom è stato sospeso più volte dal 2023 e resta subordinato alla situazione diplomatica — va verificato poco prima della partenza, con un piano B già pronto',
      'Presentarsi vestiti in modo inadeguato ai tour della JSA, dove esiste un codice di abbigliamento: niente jeans strappati, sandali o capi troppo scoperti',
      'Fotografare fuori dai punti consentiti: le restrizioni sono reali e vengono fatte rispettare',
      'Andarci senza aver letto niente prima: è l\'unico posto di questo viaggio dove il contesto storico vale più del panorama',
    ],
    confronti: [
      {
        titolo: 'Tour standard della DMZ o JSA di Panmunjom?',
        introduzione:
          'Sono due esperienze diverse che spesso vengono confuse. Il tour standard porta nelle aree controllate attorno alla zona: tunnel, osservatorio, stazione. La JSA porta dentro Panmunjom, nell\'unico punto dove i soldati dei due paesi si guardano a pochi metri di distanza. Il secondo è molto più difficile da ottenere e, dal 2023, non sempre esiste.',
        opzioni: [
          {
            nome: 'Tour standard della DMZ',
            sintesi: 'Imjingak, Terzo Tunnel d\'Infiltrazione, Osservatorio di Dora, stazione di Dorasan. Mezza giornata o giornata intera da Seoul.',
            costo: 'indicativamente 50-90€, pranzo spesso incluso',
            durata: '5-8 ore con i trasferimenti',
            pro: [
              'Disponibile praticamente sempre, con partenze quotidiane',
              'Si prenota con pochi giorni di anticipo',
              'Il Terzo Tunnel è l\'esperienza fisica più forte: si scende a piedi in una galleria scavata dal Nord verso Seoul',
              'Nessun codice di abbigliamento e regole più rilassate',
            ],
            contro: [
              'Non si entra a Panmunjom né si vedono soldati nordcoreani',
              'La discesa nel tunnel è ripida, in uno spazio basso e stretto: chi soffre di claustrofobia farebbe meglio a saltarla',
              'Dall\'Osservatorio di Dora, con foschia, si vede poco',
            ],
            perChi: 'Chiunque abbia una giornata a Seoul e voglia capire la frontiera. È la scelta di fatto, anche perché spesso è l\'unica.',
          },
          {
            nome: 'Tour della JSA di Panmunjom',
            sintesi: 'L\'area di sicurezza congiunta, con le baracche azzurre a cavallo della linea di demarcazione, la Freedom House e il Ponte del Non Ritorno.',
            costo: 'sensibilmente più alto del tour standard',
            durata: 'giornata intera',
            pro: [
              'È l\'unico posto dove si sta a pochi metri dai soldati nordcoreani',
              'Dentro la sala delle riunioni si attraversa fisicamente la linea di confine',
              'Il Ponte del Non Ritorno, dove nel 1953 i prigionieri scelsero da che parte restare, con una sola possibilità',
            ],
            contro: [
              'Accesso civile sospeso più volte dal 2023 e mai garantito: dipende dalla situazione diplomatica del momento',
              'Va prenotato con 2-4 settimane di anticipo, con i dati del passaporto trasmessi giorni prima per l\'autorizzazione militare',
              'Codice di abbigliamento, restrizioni fotografiche, dichiarazione di responsabilità da firmare',
              'Può essere annullato all\'ultimo, senza rimborso automatico del resto del viaggio',
            ],
            perChi: 'Chi ha date flessibili, prenota con largo anticipo e accetta che possa saltare.',
          },
        ],
        raccomandazione:
          'Prenotare il tour standard come base certa e, se le date lo permettono, tentare la JSA in parallelo, verificandone lo stato poco prima della partenza. Costruire il viaggio sulla JSA è il modo più diretto per restare delusi: dal 2023 è stata chiusa più volte che aperta.',
      },
    ],
    miaEsperienza:
      'La DMZ è la tappa che più di ogni altra va preparata leggendo, perché il paesaggio da solo non dice quasi niente: sono colline, filo spinato, un parcheggio e un pullman. Quello che la rende una delle giornate più forti di tutto il viaggio è sapere cosa si sta guardando. Il Terzo Tunnel è il punto in cui diventa fisico: si scende per centinaia di metri lungo una galleria di servizio ripidissima, poi si prosegue curvi dentro un cunicolo scavato nella roccia con il caschetto che batte contro il soffitto, e a un certo punto c\'è una barriera di cemento oltre la quale il tunnel continua verso nord. Fu scoperto nel 1978, è largo poco più di un metro e mezzo, e attraverso di esso sarebbero potuti passare trentamila uomini all\'ora a quaranta chilometri da Seoul. Dall\'Osservatorio di Dora, con il binocolo, si vedono i campi coltivati del Nord e il villaggio di Kijong-dong, costruito perché lo si guardasse: file di case con le finestre senza vetri e le luci accese a orario. Ma la cosa che resta più a lungo è la stazione di Dorasan, tirata a lucido, con i tabelloni delle partenze, i tornelli e il personale in servizio, che aspetta dal 2002 un treno per Pyongyang. Il cartello dice: non l\'ultima stazione del Sud, la prima verso il Nord.',
    esperienzeSlugs: ['tour-dmz-terzo-tunnel', 'jsa-panmunjom'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Il filo spinato e la recinzione lungo il confine della Zona Demilitarizzata coreana con il fiume Imjin',
  },
  {
    slug: 'sokcho-seoraksan',
    paeseSlug: 'corea-del-sud',
    ordine: 3,
    nome: 'Sokcho e il Seoraksan',
    tipologia: ['natura', 'trekking', 'montagna'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il parco nazionale più famoso della Corea, sulla costa orientale: creste di granito, monasteri incastrati nella roccia e, in ottobre, il foliage che in questo paese è un evento nazionale seguito bollettino per bollettino. Ai suoi piedi c\'è Sokcho, città di pescatori con una storia poco raccontata.',
    percheAndarci:
      'Perché è il contrappeso naturale a Seoul e perché Sokcho ha una particolarità storica precisa: fino al 1945 stava in territorio poi assegnato al Nord, e dopo la guerra si riempì di profughi nordcoreani che non riuscirono mai a tornare a casa. Il quartiere di Abai, costruito da loro, esiste ancora.',
    cosaVedere: [
      'Il parco nazionale del Seoraksan, con il Buddha di bronzo di Sinheungsa all\'ingresso',
      'La funivia per Gwongeumseong, che risparmia la salita a chi non vuole camminare',
      'L\'eremo di Ulsanbawi, in cima a 808 gradini metallici lungo una parete di granito',
      'Il villaggio di Abai a Sokcho, fondato dai profughi nordcoreani, raggiungibile con il galsseonbae, la chiatta a fune tirata a mano',
      'Il mercato del pesce di Sokcho, uno dei migliori della costa orientale',
    ],
    cosaFare: [
      'Salita a Ulsanbawi, circa 4 ore andata e ritorno, con l\'ultimo tratto su scale metalliche a strapiombo',
      'Attraversare il canale di Abai sulla chiatta a fune, tirandola insieme agli altri passeggeri',
      'Mangiare l\'ojingeo sundae, il calamaro ripieno che è la specialità dei profughi del Nord',
      'Salita al Daecheongbong, la cima del massiccio, per chi ha una giornata intera e gambe allenate',
    ],
    doveDormire:
      'Sokcho è la base naturale, con l\'offerta più larga e il mare a due passi; i motel e le pensioni vicino all\'ingresso del parco sono più comodi per partire all\'alba ma molto più spogli.',
    doveMangiare:
      'Sokcho vive di pesce: il mercato centrale è il posto giusto, con i banchi che cucinano al momento. Il piatto identitario è però l\'ojingeo sundae, il calamaro farcito, portato qui dai profughi nordcoreani e diventato la cosa che la città rivendica di più. Da provare anche il granchio e, in stagione, il pesce crudo servito alla coreana, con le foglie di lattuga e la pasta di peperoncino.',
    comeArrivare:
      'Autobus express da Seoul, circa 2h30 dal terminal di Express Bus Terminal o da Dong Seoul: il treno non arriva fin qui e il bus è il mezzo normale. I bus coreani a lunga percorrenza sono comodissimi, con sedili reclinabili.',
    comeSpostarsi: 'Autobus locali frequenti tra Sokcho e l\'ingresso del parco (circa 30 minuti); taxi economici per le tratte brevi.',
    periodoMigliore:
      'ottobre è il mese del foliage ed è anche quello in cui il parco è più affollato: nei fine settimana di ottobre i sentieri si percorrono in fila. Maggio è l\'alternativa migliore. D\'inverno il parco resta aperto ma i sentieri alti si ghiacciano.',
    costi: 'ingresso al parco pochi euro; funivia per Gwongeumseong attorno agli 11.000 won andata e ritorno.',
    erroriDaEvitare: [
      'Andarci in un fine settimana di ottobre: il foliage in Corea è un fenomeno di massa e il parco si riempie oltre ogni aspettativa',
      'Sottovalutare gli 808 gradini di Ulsanbawi: sono scale metalliche ripide su una parete esposta, e la discesa pesa più della salita',
      'Fermarsi al Seoraksan e saltare Abai, che è il motivo per cui Sokcho vale una notte e non mezza giornata',
    ],
    miaEsperienza:
      'Il Seoraksan è bello ma il vero motivo per venire fin qui, almeno per come è andata, sta a valle. Sokcho è una città di mare ordinaria fino a quando non si scopre cos\'è il quartiere di Abai: fu costruito dai profughi arrivati dal Nord durante la guerra, convinti di fermarsi qualche mese, e rimasti per sempre. Ci si arriva attraversando un canale su una chiatta a fune che i passeggeri tirano a mano, tutti insieme, con dei ganci: costa pochi centesimi, dura due minuti e vale più di molte attrazioni. Sul monte, la salita a Ulsanbawi è dura nel tratto finale — ottocento gradini metallici su una parete di granito, con il vuoto sotto — ma la vista dalla cima sulla costa e sul mare vale la fatica. E va detto che chi ci arriva in un fine settimana di ottobre trova una fila di persone sui gradini e un\'attesa che toglie il senso alla giornata: qui più che altrove il giorno feriale non è un consiglio, è la condizione.',
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Le creste di granito del parco nazionale del Seoraksan con il foliage autunnale, Corea del Sud',
  },
  {
    slug: 'andong',
    paeseSlug: 'corea-del-sud',
    ordine: 4,
    nome: 'Andong e il villaggio di Hahoe',
    tipologia: ['cultura', 'borghi', 'storia'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'Il cuore del confucianesimo coreano, nella provincia del Gyeongsang settentrionale: il villaggio di Hahoe, patrimonio UNESCO, è abitato dalla stessa famiglia da seicento anni e conserva case di nobili e di contadini nello stesso perimetro, dentro un\'ansa del fiume Nakdong.',
    percheAndarci:
      'Perché è il posto dove si capisce la struttura sociale che ha retto la Corea per cinquecento anni, e perché la danza delle maschere di Hahoe è una delle poche forme di satira popolare sopravvissute: erano i contadini a mettere in ridicolo i nobili, una volta l\'anno, con il loro permesso.',
    cosaVedere: [
      'Il villaggio di Hahoe, con le case dal tetto di paglia dei contadini e quelle dal tetto di tegole dei nobili',
      'Il Museo delle maschere di Hahoe, con gli esemplari originali in legno, tesoro nazionale',
      'L\'accademia confuciana di Dosan Seowon, anch\'essa patrimonio UNESCO, immersa nei boschi',
      'La scogliera di Buyongdae, dall\'altra parte del fiume, da cui si vede il villaggio nell\'ansa',
    ],
    cosaFare: [
      'Assistere allo spettacolo delle maschere byeolsingut, che si tiene regolarmente nei fine settimana',
      'Attraversare il fiume in barca e salire a Buyongdae per la vista dall\'alto',
      'Dormire in una hanok tradizionale dentro il villaggio, che è l\'unico modo di vederlo la sera',
      'Mangiare l\'andong jjimdak, il pollo brasato con verdure e noodles di patata dolce che porta il nome della città',
    ],
    doveDormire:
      'Dentro Hahoe, in una delle case tradizionali che affittano stanze: si dorme su un materasso sottile sul pavimento riscaldato, si condividono i bagni, e alle cinque del pomeriggio, quando i pullman se ne vanno, il villaggio torna a essere un paese. È l\'unica ragione per non farlo in giornata.',
    doveMangiare:
      'L\'andong jjimdak è il piatto della città e si mangia nel mercato vecchio, dove un\'intera galleria è occupata da ristoranti che fanno solo quello. L\'altra specialità è il heotjesatbap, un bibimbap "da cerimonia" nato dalle offerte rituali confuciane, servito senza peperoncino e con le verdure disposte secondo una regola precisa. Da provare anche il soju di Andong, molto più forte di quello industriale.',
    comeArrivare:
      'Treno o autobus express da Seoul, circa 2-3 ore secondo il mezzo; da Andong al villaggio di Hahoe c\'è un autobus locale che impiega circa 40 minuti e non è frequentissimo — vanno guardati gli orari di ritorno prima di partire.',
    comeSpostarsi: 'Autobus locali tra la città e i siti; il villaggio si gira interamente a piedi.',
    periodoMigliore:
      'primavera e autunno; a fine settembre-inizio ottobre si tiene il festival internazionale delle maschere, che riempie la città ed è il momento migliore e più affollato insieme.',
    costi: 'ingresso a Hahoe attorno ai 5.000 won, spettacolo delle maschere spesso gratuito.',
    erroriDaEvitare: [
      'Farlo in giornata da Seoul: significa vedere il villaggio solo nelle ore dei pullman, che sono le peggiori',
      'Non controllare gli orari dell\'autobus di ritorno da Hahoe: le corse sono poche e l\'ultima è presta',
      'Aspettarsi un museo all\'aperto: è un paese abitato, con famiglie che ci vivono, e va trattato come tale',
    ],
    miaEsperienza:
      'Hahoe è una delle tappe che quasi nessun itinerario straniero include e che invece spiega più cose di molti musei. Non è un villaggio ricostruito: ci vivono ancora i discendenti della stessa famiglia, le case sono abitate, e nei cortili ci sono panni stesi e attrezzi agricoli. La cosa che colpisce è l\'urbanistica sociale — le case dei nobili con i tetti di tegole stanno in alto e al centro, quelle dei contadini con i tetti di paglia attorno, e la gerarchia si legge camminando. La danza delle maschere è l\'altra faccia della stessa medaglia: una volta l\'anno i contadini mettevano in scena uno spettacolo in cui il monaco è corrotto e il nobile è un idiota, e i nobili assistevano. Dormirci è quello che cambia la visita: alle cinque i pullman se ne vanno tutti insieme e restano il fiume, i cani e qualche vecchio seduto fuori.',
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Le case tradizionali dal tetto di paglia del villaggio di Hahoe nell\'ansa del fiume, Andong',
  },
  {
    slug: 'gyeongju',
    paeseSlug: 'corea-del-sud',
    ordine: 5,
    nome: 'Gyeongju',
    tipologia: ['storia', 'cultura', 'archeologia'],
    giorniConsigliati: '2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La capitale del regno di Silla per quasi mille anni, dal 57 a.C. al 935 d.C.: una città bassa dove al posto dei palazzi ci sono decine di tumuli funerari erbosi, alti come colline, in mezzo alle strade e ai parchi. La chiamano il museo senza muri, e per una volta la definizione è esatta.',
    percheAndarci:
      'Perché è l\'unico posto in Corea dove la storia antica è visibile a cielo aperto e non ricostruita, e perché Bulguksa e l\'eremo di Seokguram, entrambi patrimonio UNESCO, sono i due capolavori dell\'arte buddista coreana.',
    cosaVedere: [
      'I tumuli reali del Daereungwon, con la Tomba del Cavallo Celeste aperta e visitabile dall\'interno',
      'Il tempio di Bulguksa, con le due pagode di pietra dell\'VIII secolo',
      'L\'eremo di Seokguram, la grotta artificiale sul monte con il Buddha di granito che guarda verso il mare',
      'Lo stagno di Donggung e Wolji (Anapji), che di notte si specchia nei padiglioni illuminati',
      'Cheomseongdae, l\'osservatorio astronomico del VII secolo, tra i più antichi al mondo ancora in piedi',
      'Il Museo Nazionale di Gyeongju, con la corona d\'oro di Silla',
    ],
    cosaFare: [
      'Giro dei tumuli in bicicletta, che è il modo giusto di muoversi in questa città',
      'Bulguksa e Seokguram nella stessa mattinata — vedi la scheda esperienza dedicata',
      'Templestay in un monastero, per dormire e alzarsi con i monaci — vedi la scheda esperienza dedicata',
      'Anapji dopo il tramonto, quando si accendono le luci sull\'acqua',
    ],
    doveDormire:
      'La zona attorno al Daereungwon è la più comoda, con le guesthouse in hanok che sono la scelta più coerente col posto. Bomun Lake è il quartiere dei resort, comodo in auto ma lontano da tutto il resto a piedi.',
    doveMangiare:
      'Gyeongju ha due specialità precise: il ssambap, un pasto in cui arrivano venti ciotoline di verdure, carne e salse da avvolgere nelle foglie, e il pane di Hwangnam, un dolcetto ripieno di fagioli rossi che qui si vende in scatole da regalo e si mangia camminando. Nella zona del mercato si trova la cucina quotidiana a prezzi bassi.',
    comeArrivare:
      'KTX fino a Singyeongju, circa 2 ore da Seoul e 30 minuti da Busan, poi autobus o taxi per il centro (la stazione è fuori città). Comodissima come tappa intermedia tra Seoul e Busan.',
    comeSpostarsi:
      'La bicicletta è il mezzo giusto: il centro storico è pianeggiante e i siti sono vicini. Per Bulguksa e Seokguram, che stanno fuori città sul monte Toham, servono autobus locali o taxi — e tra i due c\'è ancora una strada di montagna.',
    periodoMigliore:
      'aprile per i ciliegi, che qui fioriscono intorno ai tumuli e sono tra i più belli del paese, e ottobre-novembre per il foliage. L\'estate è calda e umida.',
    costi: 'Bulguksa e Seokguram circa 6.000 won ciascuno, Daereungwon 3.000, Museo Nazionale gratuito.',
    erroriDaEvitare: [
      'Farla in giornata da Busan: Gyeongju ha bisogno di due giorni e soprattutto di una sera, perché Anapji illuminato è la cosa più bella della città',
      'Programmare Seokguram senza controllare i collegamenti: dall\'ingresso di Bulguksa c\'è ancora una strada di montagna e gli autobus sono radi',
      'Aspettarsi di vedere il Buddha di Seokguram da vicino: è protetto da una vetrata e si guarda dall\'anticamera, cosa che delude chi non lo sa prima',
    ],
    miaEsperienza:
      'Gyeongju è la tappa che si sottovaluta sulla carta e che poi si rivela la più riposante e forse la più bella del viaggio. La particolarità è che i tumuli reali non sono stati recintati in un parco archeologico: stanno in mezzo alla città, sono colline erbose alte venti metri accanto a un incrocio, e ci si gira attorno in bicicletta come se niente fosse. Uno di essi è aperto e si entra dentro, con la corona d\'oro esposta nel punto esatto in cui fu trovata. Bulguksa è bellissimo e molto affollato, mentre Seokguram, lassù sul monte, è la cosa che lascia il segno: una grotta artificiale costruita nell\'VIII secolo con blocchi di granito incastrati senza malta, con un Buddha seduto che guarda verso il mare d\'Oriente. Va detto che si osserva da dietro un vetro, dall\'anticamera, e che chi non lo sa in anticipo resta deluso. Il momento migliore resta però Anapji dopo il buio, con i padiglioni riflessi nello stagno: dura mezz\'ora e vale la giornata.',
    esperienzeSlugs: ['bulguksa-seokguram', 'templestay'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'I tumuli funerari erbosi del parco di Daereungwon a Gyeongju al tramonto',
  },
  {
    slug: 'busan',
    paeseSlug: 'corea-del-sud',
    ordine: 6,
    nome: 'Busan',
    tipologia: ['città', 'mare', 'gastronomia'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La seconda città del paese e il suo porto principale, distesa tra il mare e le colline: spiagge cittadine, il mercato del pesce più grande della Corea, un tempio costruito sugli scogli e un quartiere di case colorate che è nato come baraccopoli di profughi di guerra.',
    percheAndarci:
      'Perché è l\'esatto contrario di Seoul — più lenta, più rumorosa, più meridionale — e perché durante la guerra di Corea fu l\'unica grande città a non cadere mai: il perimetro di Busan fu l\'ultimo lembo di paese a resistere, e la città si riempì di centinaia di migliaia di profughi che non se ne andarono più.',
    cosaVedere: [
      'Il villaggio culturale di Gamcheon, il quartiere di case colorate aggrappate alla collina, nato come insediamento di profughi',
      'Il mercato del pesce di Jagalchi, il più grande della Corea, gestito storicamente da donne',
      'Il tempio di Haedong Yonggungsa, costruito sugli scogli a picco sul mare',
      'Le spiagge di Haeundae e Gwangalli, con il ponte illuminato la sera',
      'Il cimitero commemorativo delle Nazioni Unite, l\'unico al mondo dedicato ai caduti ONU, con i soldati di ventidue paesi',
      'Il mercato di Gukje e i vicoli di Bosu-dong, la strada dei librai fondata dai profughi',
    ],
    cosaFare: [
      'Camminare Gamcheon dall\'alto verso il basso, seguendo i vicoli — vedi la scheda esperienza dedicata',
      'Colazione di pesce crudo al secondo piano del Jagalchi, dove si compra sotto e si fa cucinare sopra',
      'Sentiero costiero di Igidae, con la vista frontale sullo skyline di Haeundae',
      'Serata a Gwangalli, con il ponte illuminato e i locali sulla spiaggia',
      'Visita al cimitero ONU, che è il posto dove la guerra torna a essere fatta di nomi',
    ],
    doveDormire:
      'Haeundae per la spiaggia e i servizi, Seomyeon per essere al centro dei trasporti e della vita notturna, Nampo-dong per il porto, i mercati e Gamcheon. Busan è lunga e stretta: la metropolitana risolve, ma la scelta della zona cambia le giornate.',
    doveMangiare:
      'Busan è una città di mare e si mangia di conseguenza. Le specialità sono il dwaeji gukbap, la zuppa di maiale con riso nata proprio qui durante la guerra dagli scarti che i profughi potevano permettersi, e il milmyeon, i noodles freddi di farina che sono la versione povera del naengmyeon del Nord — entrambi piatti che raccontano la storia della città. Al Jagalchi si compra il pesce al banco e lo si fa cucinare al piano di sopra, pagando un supplemento. Da provare anche gli ssiat hotteok, le frittelle dolci ripiene di semi, al mercato di Gukje.',
    comeArrivare:
      'KTX da Seoul in poco più di 2h30, la tratta ferroviaria più trafficata del paese: conviene prenotare qualche giorno prima. Volo su Gimhae (PUS) per chi arriva da Jeju.',
    comeSpostarsi: 'Metropolitana con quattro linee e T-money; autobus per Gamcheon e Haedong Yonggungsa, che non sono serviti dalla metro.',
    periodoMigliore:
      'maggio-giugno e settembre-ottobre. Luglio e agosto sono la stagione delle spiagge e Haeundae diventa un tappeto di ombrelloni; in ottobre si tiene il festival internazionale del cinema, il più importante dell\'Asia.',
    costi: 'quasi tutto gratuito o quasi: Gamcheon si visita liberamente, il tempio è gratuito, i mercati sono mercati.',
    erroriDaEvitare: [
      'Trattare Gamcheon come uno sfondo per le fotografie: è un quartiere abitato, con anziani che vivono in quelle case, e i cartelli che chiedono silenzio non sono decorativi',
      'Andare a Haedong Yonggungsa nel fine settimana, quando il percorso sugli scogli si fa in fila indiana',
      'Saltare il cimitero ONU perché "è un cimitero": è il luogo che dà senso a tutto quello che si è visto alla DMZ',
      'Sottovalutare le distanze: Busan si allunga per trenta chilometri lungo la costa',
    ],
    miaEsperienza:
      'Busan si prende bene proprio perché non è Seoul: è più disordinata, più rumorosa, la gente parla più forte e il dialetto si sente anche senza conoscere il coreano. Gamcheon è il posto di cui tutti mostrano le foto e su cui vale la pena essere precisi: quelle case colorate sulla collina non sono un quartiere artistico, sono nate come baraccopoli per i profughi di guerra, e la vernice è arrivata solo negli anni Duemila con un progetto di riqualificazione. Sapendolo, camminarci dentro è una cosa diversa dal fotografarlo. La tappa che invece nessuno mette in programma e che resta di più è il cimitero delle Nazioni Unite: file di lapidi di ragazzi di ventidue paesi diversi, molti di vent\'anni, in un giardino silenzioso in mezzo alla città. Dopo la DMZ, che è tutta geopolitica, lì la guerra torna a essere fatta di nomi. Sul cibo, invece, un solo consiglio: il dwaeji gukbap sembra una zuppa qualsiasi e invece è nato dalla fame di questa città nel 1951, e mangiarlo in uno dei locali storici vicino al porto è la cosa più busanese che si possa fare.',
    esperienzeSlugs: ['gamcheon-busan'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Le case colorate del villaggio di Gamcheon aggrappate alla collina, Busan',
  },
  {
    slug: 'jeonju',
    paeseSlug: 'corea-del-sud',
    ordine: 7,
    nome: 'Jeonju',
    tipologia: ['gastronomia', 'cultura', 'borghi'],
    giorniConsigliati: '1-2 giorni',
    visitataPersonalmente: true,
    introduzione:
      'La città dove è nato il bibimbap e dove sopravvive il più grande villaggio di hanok della Corea: più di ottocento case tradizionali in un unico quartiere, in una città che l\'UNESCO ha riconosciuto come città creativa della gastronomia.',
    percheAndarci:
      'Perché è la capitale gastronomica del paese e perché il quartiere di hanok, pur essendo molto turistico, è l\'unico posto dove si può dormire in una casa tradizionale senza uscire dalla città.',
    cosaVedere: [
      'Il villaggio di hanok, con le oltre ottocento case dai tetti curvi',
      'Il santuario di Gyeonggijeon, con il ritratto del fondatore della dinastia Joseon',
      'La cattedrale di Jeondong, in mattoni rossi, costruita dove erano stati giustiziati i primi martiri cattolici coreani',
      'Il belvedere di Omokdae, da cui si vedono tutti i tetti del villaggio insieme',
      'Il mercato di Nambu, con la sua sezione notturna nel fine settimana',
    ],
    cosaFare: [
      'Mangiare il bibimbap nella città in cui è nato, servito in una ciotola di ottone con una dozzina di ingredienti disposti a raggiera',
      'Girare il villaggio in hanbok, come fanno quasi tutti i coreani che vengono qui',
      'Dormire in una hanok, con il pavimento riscaldato dall\'ondol',
      'Assaggiare il makgeolli di Jeonju, servito in grandi brocche con una tavolata di contorni inclusi',
    ],
    doveDormire:
      'Dentro il villaggio di hanok, che è il motivo per cui ci si ferma: si dorme su un materasso sul pavimento caldo, in stanze essenziali, con i bagni spesso condivisi. Fuori dal villaggio gli hotel costano meno ma la sosta perde senso.',
    doveMangiare:
      'Il bibimbap di Jeonju è un piatto diverso da quello che si mangia nel resto del paese: riso cotto nel brodo di manzo, una dozzina di verdure, manzo crudo condito e un tuorlo, tutto in ciotola di ottone. Va mescolato con decisione, non con delicatezza. L\'altra istituzione locale è il kongnamul gukbap, la zuppa di germogli di soia che qui si mangia al mattino dopo una sera di makgeolli, e i "makgeolli alley", dove si ordina la bevanda e i contorni arrivano gratis in quantità crescente a ogni brocca.',
    comeArrivare: 'KTX da Seoul in circa 1h40, oppure autobus express. La stazione è a qualche chilometro dal villaggio di hanok, collegata da autobus urbani e taxi.',
    comeSpostarsi: 'Il villaggio si gira a piedi; per il resto della città autobus locali e taxi.',
    periodoMigliore: 'primavera e autunno; in ottobre si tiene il festival del cibo. Nei fine settimana il villaggio è pienissimo di visitatori coreani.',
    costi: 'ingresso al villaggio gratuito, Gyeonggijeon 3.000 won circa; bibimbap 10.000-15.000 won nei locali storici.',
    erroriDaEvitare: [
      'Andarci in un fine settimana: il villaggio di hanok è una delle mete domestiche più popolari della Corea e in quei giorni si cammina in mezzo alla folla',
      'Fermarsi solo alla via principale, che è tutta negozi di cibo da asporto: le vie laterali hanno ancora le case abitate',
      'Aspettarsi un borgo antico intatto: molte hanok sono ricostruzioni recenti, e il quartiere è una operazione di conservazione, non un reperto',
    ],
    miaEsperienza:
      'Jeonju è una tappa che si giustifica per una ragione sola, ed è sufficiente: si viene qui a mangiare. Il bibimbap servito nella ciotola di ottone, con il riso cotto nel brodo invece che nell\'acqua, è un\'altra cosa rispetto a quello che si mangia altrove — più ricco, più profondo, e va mescolato con energia fino a rendere tutto omogeneo, che è l\'opposto di come lo tratta chi vuole conservare la disposizione per la fotografia. Il villaggio di hanok, va detto onestamente, è molto turistico: la via principale è una fila continua di banchi di street food e di negozi che noleggiano hanbok, e nel fine settimana ci si muove a fatica. Ma bastano due traverse per trovare cortili silenziosi e case ancora abitate, e dormire in una hanok con il pavimento caldo sotto la schiena è una di quelle cose che si ricordano meglio di molte attrazioni.',
    esperienzeSlugs: [],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'I tetti curvi delle case hanok del villaggio tradizionale di Jeonju visti dall\'alto',
  },
  {
    slug: 'jeju',
    paeseSlug: 'corea-del-sud',
    ordine: 8,
    nome: 'Jeju e le haenyeo',
    tipologia: ['isole', 'natura', 'cultura'],
    giorniConsigliati: '4 giorni, di cui almeno uno dedicato alla costa est e alle haenyeo',
    visitataPersonalmente: true,
    introduzione:
      'Un\'isola vulcanica a sud della penisola, dominata dall\'Hallasan — la montagna più alta della Corea del Sud — e circondata da un mare freddo in cui, da secoli, donne che oggi hanno in media più di settant\'anni si immergono in apnea per raccogliere molluschi e alghe. Sono le haenyeo, e la loro cultura è patrimonio immateriale UNESCO dal 2016.',
    percheAndarci:
      'Per l\'isola in sé, che ha crateri, cascate, tubi di lava e un sentiero costiero lungo 437 chilometri. Ma soprattutto per le haenyeo: è una delle ultime occasioni di vedere dal vivo una pratica che sta finendo, e che ha determinato per secoli l\'assetto sociale ed economico di quest\'isola in modo unico in tutta l\'Asia orientale.',
    cosaVedere: [
      'Il Museo delle haenyeo a Gujwa-eup, sulla costa orientale, il punto di partenza per capire tutto il resto',
      'Seongsan Ilchulbong, il cono vulcanico che esce dal mare, patrimonio UNESCO, con le dimostrazioni di immersione delle haenyeo ai suoi piedi',
      'L\'Hallasan, 1.947 metri, con i sentieri che portano al cratere sommitale',
      'Il tubo di lava di Manjanggul, una galleria vulcanica lunga chilometri',
      'Le cascate di Jeongbang, tra le pochissime al mondo che cadono direttamente in mare',
      'Il Parco della Pace 4·3, dedicato ai fatti del 1948-1954, la pagina più dura della storia dell\'isola',
      'I bulteok, i ripari circolari in pietra dove le haenyeo si cambiano e si riscaldano: ne restano una settantina',
    ],
    cosaFare: [
      'Assistere a un\'immersione delle haenyeo e ascoltare il sumbisori — vedi la scheda esperienza dedicata',
      'Alba su Seongsan Ilchulbong, che in coreano significa letteralmente "picco del sole nascente" — vedi la scheda esperienza dedicata',
      'Salita all\'Hallasan lungo uno dei due sentieri che arrivano in cima — vedi la scheda esperienza dedicata',
      'Camminare una tappa degli Olle Trail, i sentieri costieri che fanno il giro dell\'isola',
      'Mangiare in una delle bancarelle gestite direttamente dalle cooperative di haenyeo, dove si paga il pescato a loro',
    ],
    doveDormire:
      'Jeju-si a nord, vicino all\'aeroporto, è la base più comoda per i collegamenti; Seogwipo a sud ha il clima più mite e le cascate; la costa orientale attorno a Seongsan è la scelta giusta per chi viene soprattutto per le haenyeo e per l\'alba sul cono vulcanico. L\'isola si gira in auto in due ore da nord a sud: la base conta meno che altrove.',
    doveMangiare:
      'Jeju ha una cucina propria, molto diversa da quella della penisola. Il maiale nero dell\'isola, allevato qui da secoli, si mangia alla griglia ed è la cosa più famosa; il galchi, il pesce sciabola, si serve grigliato o in umido; e poi c\'è tutto ciò che raccolgono le haenyeo — orecchie di mare, ricci, polpo, conchiglie — venduto spesso nelle bancarelle delle loro cooperative, che è il modo più diretto di far arrivare i soldi a loro. Da provare anche il gogi guksu, i noodles in brodo di maiale, e il tè al mandarino, che dell\'isola è il prodotto agricolo simbolo.',
    comeArrivare:
      'Volo da Seoul Gimpo, Busan o altre città: la tratta Seoul-Jeju è una delle più trafficate al mondo, con decine di voli al giorno e prezzi bassissimi. In alternativa traghetto da Mokpo o Wando, molto più lento.',
    comeSpostarsi:
      'L\'auto a noleggio è di gran lunga il mezzo migliore: la rete di autobus esiste ed è economica ma lenta, e molti punti della costa sono scomodi da raggiungere. Serve la patente internazionale, che va fatta in Italia prima di partire.',
    periodoMigliore:
      'aprile-giugno e settembre-ottobre. L\'estate è affollata di turismo interno e battuta dai tifoni tra agosto e settembre; l\'inverno è ventoso e freddo, ma è anche la stagione in cui le haenyeo lavorano nelle condizioni più dure — e in cui è più raro vederle in acqua.',
    costi:
      'Museo delle haenyeo circa 1.100 won, Seongsan Ilchulbong 5.000, Manjanggul 4.000, Parco della Pace 4·3 gratuito. Noleggio auto da 40-60€ al giorno, più caro in alta stagione.',
    erroriDaEvitare: [
      'Aspettarsi di trovare le haenyeo in acqua a comando: escono secondo maree, stagione e condizioni del mare, e nei mesi di riposo biologico non si immergono affatto — le uniche uscite a orario fisso sono le dimostrazioni organizzate',
      'Fotografarle da vicino senza chiedere: sono donne al lavoro, spesso molto anziane, non un\'attrazione folkloristica',
      'Salire sull\'Hallasan senza prenotare: i due sentieri che arrivano in cima hanno quote giornaliere e prenotazione obbligatoria online',
      'Noleggiare l\'auto senza patente internazionale, che in Corea è richiesta e non negoziabile',
      'Ridurre Jeju a un\'isola balneare: il mare è freddo, il vento è costante, e quello che vale davvero qui è la terra e chi ci vive',
    ],
    confronti: [
      {
        titolo: 'Come incontrare davvero le haenyeo',
        introduzione:
          'È la ragione principale per cui vale la pena venire a Jeju, e anche la cosa più facile da sbagliare: le haenyeo non sono uno spettacolo a orario e il loro numero sta crollando — erano oltre 4.500 nel 2013, alla fine del 2024 erano circa 2.600, e più del 60% ha superato i settant\'anni. Ci sono quattro modi di avvicinarsi, molto diversi per onestà e per probabilità di riuscita.',
        opzioni: [
          {
            nome: 'Il Museo delle haenyeo a Gujwa-eup',
            sintesi: 'Il museo dedicato, sulla costa orientale, con attrezzatura originale, ricostruzioni dei bulteok, testimonianze filmate e la storia della rivolta del 1932.',
            costo: 'circa 1.100 won',
            durata: '1-2 ore',
            pro: [
              'È il posto dove si capisce tutto il resto: senza, un\'immersione vista da lontano resta una curiosità',
              'Racconta la parte politica che nessun tour menziona, compresa la protesta anti-giapponese del 1932 guidata dalle haenyeo',
              'Aperto sempre, indipendente da maree e stagione',
              'Economicissimo',
            ],
            contro: ['Non si vede nessuna haenyeo in carne e ossa', 'Fuori mano rispetto ai circuiti classici dell\'isola'],
            perChi: 'Tutti, come primo passo. È il presupposto degli altri tre.',
          },
          {
            nome: 'La dimostrazione a Seongsan Ilchulbong',
            sintesi: 'Immersioni dimostrative organizzate ai piedi del cono vulcanico, con orari pubblicati, seguite dalla vendita del pescato.',
            costo: 'gratuito da guardare, oltre al biglietto del sito',
            durata: '30 minuti circa',
            pro: [
              'È la sola occasione ragionevolmente garantita di vederle entrare in acqua',
              'Si sente il sumbisori, il fischio con cui espellono anidride carbonica riemergendo, che è il tratto più riconoscibile del loro mestiere',
              'Si può comprare da loro subito dopo, e i soldi restano alla cooperativa',
            ],
            contro: [
              'È una dimostrazione: breve, in acqua bassa, con il pubblico intorno',
              'Gli orari cambiano con maree e meteo e le uscite vengono annullate',
              'Molto affollata nei fine settimana e in alta stagione',
            ],
            perChi: 'Chi ha un solo giorno sulla costa est e vuole la certezza ragionevole di vederle.',
          },
          {
            nome: 'I villaggi della costa e i bulteok',
            sintesi: 'Andare nei paesi dove lavorano davvero — Hado-ri, Gujwa, Jongdal — nelle ore di marea giusta, e guardare da lontano senza organizzare niente.',
            costo: 'gratuito',
            durata: 'dipende: può non succedere nulla',
            pro: [
              'È l\'unica versione non addomesticata: donne che lavorano, non che mostrano',
              'Si vedono i bulteok, i ripari circolari in pietra dove si cambiano e si scaldano, che erano anche il luogo in cui la comunità prendeva le decisioni a voto',
              'Nessun costo e nessuna folla',
            ],
            contro: [
              'Nessuna garanzia: dipende da marea, stagione, mare e fermo biologico',
              'Serve un\'auto e la disponibilità a tornare più volte',
              'Vanno rispettate delle regole non scritte: non avvicinarsi, non fotografare da vicino, non entrare nei bulteok',
            ],
            perChi: 'Chi ha più giorni sull\'isola e accetta di non trovare niente.',
          },
          {
            nome: 'Le bancarelle e i ristoranti delle cooperative',
            sintesi: 'Mangiare il pescato là dove lo vendono direttamente le haenyeo, lungo la costa: orecchie di mare, ricci, polpo, conchiglie.',
            costo: 'variabile, a peso',
            durata: 'un pasto',
            pro: [
              'È il modo in cui i soldi arrivano davvero a loro, senza intermediari',
              'Si parla con loro, per quanto lo permetta la lingua',
              'Il pescato è di poche ore prima, e la differenza si sente',
            ],
            contro: ['Non si vede l\'immersione', 'Prezzi non sempre bassi, soprattutto per le orecchie di mare', 'Poche insegne in inglese'],
            perChi: 'Chiunque: è il complemento naturale di qualsiasi delle altre tre opzioni.',
          },
        ],
        raccomandazione:
          'La combinazione che funziona è museo al mattino, dimostrazione a Seongsan nel pomeriggio secondo l\'orario delle maree, e pranzo o cena a una bancarella delle cooperative. Chi ha un giorno in più aggiunga una mattina nei villaggi della costa est, senza aspettative: se capita, è la versione vera.',
      },
    ],
    miaEsperienza:
      'Jeju viene venduta come isola di vacanza e questa è la lettura sbagliata: il mare è freddo, il vento non smette mai, e quello che vale è la terra e soprattutto chi ci lavora. Le haenyeo sono il motivo per cui vale la pena arrivare fin qui, e conviene sapere in cosa si sta entrando prima di cercarle. Scendono in apnea fino a dieci metri, senza bombole, con la sola muta, per raccogliere molluschi e alghe; stanno sotto un paio di minuti e riemergono con un fischio acutissimo — il sumbisori — che serve a buttare fuori l\'anidride carbonica in un colpo solo, e che dal molo si sente prima di vedere qualsiasi cosa. Riconoscono le proprie compagne da quel suono. La cosa che spiazza davvero però non è tecnica: sono le età. La donna che esce dall\'acqua con la rete piena ha settantacinque anni, e non è un\'eccezione — oltre il sessanta per cento di loro ha superato i settanta, e da poco più di quattromila sono scese attorno alle duemilaseicento in poco più di dieci anni. Il museo di Gujwa spiega il resto, compresa la parte che nessun tour racconta: qui le donne hanno portato il reddito in casa per secoli, con un\'autonomia economica che nel resto della Corea confuciana non esisteva, e nel 1932 furono loro a guidare una delle più grandi proteste contro il dominio giapponese. Vederle oggi significa vedere la fine di qualcosa, e questa è la ragione per cui va fatto adesso.',
    esperienzeSlugs: ['haenyeo-jeju', 'seongsan-ilchulbong', 'hallasan'],
    tripSlugs: ['corea-del-sud-itinerario'],
    imageAlt: 'Una haenyeo di Jeju riemerge con il tewak, il galleggiante arancione, lungo la costa dell\'isola',
  },
]
