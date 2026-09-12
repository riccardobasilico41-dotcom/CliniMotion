import type { Paese } from '@/lib/types'

// I campi miaEsperienza nelle destinazioni e nelle esperienze sono bozze
// scritte da Claude nella voce del diario, basate su ciò che è oggettivamente
// vero di ogni posto (orari, regole d\'accesso, stagione, affollamento) e non
// su ricordi reali: vanno riletti e sostituiti. Nessun nome di hotel,
// ristorante o operatore è stato inventato.
// Le due sezioni con più peso — la DMZ e le haenyeo di Jeju — sono costruite
// su fonti storiche e su dati verificabili (numeri, date, status UNESCO), non
// su ricostruzioni: le cifre vanno però riverificate, perché cambiano.

export const coreaDelSud: Paese = {
  slug: 'corea-del-sud',
  nome: 'Corea del Sud',
  continente: 'Asia',
  titolo: 'Corea del Sud: la DMZ, le haenyeo di Jeju e un paese che si legge in controluce',
  descrizione:
    'Il paese più facile dell\'Asia in cui viaggiare — treni puntuali al minuto, sicurezza assoluta, carta di credito accettata ovunque — e uno dei più difficili da capire davvero. Perché sotto la superficie di K-pop e grattacieli ci sono una guerra mai formalmente finita, una frontiera di 248 chilometri che è il confine più militarizzato del mondo, e a Jeju una comunità di donne che da secoli si immerge in apnea per vivere e che oggi sta scomparendo.',
  periodoMigliore:
    'aprile per la fioritura dei ciliegi e ottobre-inizio novembre per il foliage, che in Corea è un fenomeno nazionale. Vanno evitati il jangma (la stagione monsonica di fine giugno-luglio) e le due grandi feste — Seollal e Chuseok — quando il paese intero si sposta e molte attività chiudono.',
  durataConsigliata:
    '12-14 giorni per Seoul, la DMZ, il sud (Gyeongju e Busan) e Jeju; 8-9 giorni per il minimo sindacale Seoul-DMZ-Busan; 16 giorni per aggiungere Seoraksan, Andong e i tempi morti che questo paese merita',
  budgetIndicativo:
    'nella media giapponese ma più basso: KTX Seoul-Busan attorno ai 40€, hotel di buon livello 60-90€ a notte, pasti 6-15€ e tra i migliori dell\'Asia. Le voci che pesano sono il volo intercontinentale, l\'eventuale tour della JSA e Jeju in alta stagione.',
  stileViaggio: ['storia contemporanea', 'cultura', 'gastronomia', 'isole'],
  scheda: {
    documenti:
      'Passaporto con validità per tutta la durata del soggiorno. Per i cittadini italiani non serve visto per turismo fino a 90 giorni e l\'esenzione dal K-ETA — l\'autorizzazione elettronica di viaggio — è stata prorogata fino al 31 dicembre 2026. Restano due dettagli pratici: si può comunque richiedere il K-ETA su base volontaria (circa 10.000 won, valido tre anni) per evitare di compilare la scheda d\'ingresso cartacea a ogni viaggio, e da febbraio 2025 esiste la e-Arrival Card, compilabile online prima della partenza, che fa risparmiare tempo in aeroporto. Le regole vanno riverificate prima di partire: l\'esenzione K-ETA è stata prorogata anno per anno e non è definitiva.',
    valuta: 'Won sudcoreano (KRW). Si cambia in aeroporto o in banca, ma serve pochissimo contante.',
    pagamenti:
      'Uno dei paesi più semplici al mondo da questo punto di vista: le carte estere si usano ovunque, anche per un caffè da due euro, e il contactless funziona senza problemi. Il contante serve solo in qualche bancarella di mercato e in certi taxi di provincia. La carta da procurarsi subito è invece la T-money, che si compra in qualsiasi minimarket per pochi euro e si ricarica in contanti: serve per metropolitana, autobus, taxi e anche per pagare al konbini, e senza di lei muoversi in città è inutilmente complicato.',
    connettivita:
      'Wi-Fi pubblico ovunque e copertura totale. SIM ed eSIM turistiche si comprano in aeroporto o online prima di partire, a prezzi bassi. Il punto che sorprende quasi tutti è un altro: **Google Maps in Corea non calcola i percorsi**, né a piedi né in auto, per via delle norme sull\'esportazione dei dati cartografici. Mostra i luoghi ma non porta da nessuna parte. Le app da scaricare prima di partire sono Naver Map o KakaoMap per la navigazione (entrambe con interfaccia in inglese), Kakao T per i taxi — funziona con carta estera — e Papago per la traduzione, che con il coreano è nettamente migliore delle alternative.',
    salute:
      'Sanità di livello altissimo e nessuna vaccinazione richiesta. L\'acqua del rubinetto è potabile ma quasi nessuno la beve: ovunque ci sono erogatori gratuiti di acqua filtrata. Le farmacie sono ben fornite ma molti farmaci da banco europei qui richiedono ricetta, quindi conviene portare da casa quello che si usa abitualmente. Nelle grandi città ci sono ospedali con servizi internazionali; l\'assicurazione sanitaria resta comunque indispensabile perché le prestazioni per stranieri si pagano.',
    sicurezza:
      'Tra i paesi più sicuri al mondo: si cammina di notte ovunque, gli oggetti dimenticati nei caffè restano al loro posto e il borseggio è praticamente inesistente. Il tema della sicurezza qui è geopolitico e non criminale: il paese è tecnicamente ancora in guerra con il Nord, l\'armistizio del 1953 non è mai diventato un trattato di pace, e le tensioni al confine si riflettono immediatamente sull\'accesso turistico alla zona di Panmunjom. Nella vita quotidiana non se ne percepisce nulla, con l\'eccezione delle sirene delle esercitazioni di protezione civile e del fatto che ogni uomo coreano ha fatto diciotto mesi di servizio militare.',
    trasportiInterni:
      'Il KTX, la rete ad alta velocità, collega Seoul a Busan in poco più di due ore e mezza e copre gran parte del paese: si prenota online sul sito o sull\'app di Korail, che accettano carte estere, e sulle tratte principali conviene farlo qualche giorno prima. Per le destinazioni non servite dal treno ci sono gli autobus express, comodissimi e frequenti, con i sedili reclinabili delle classi superiori. Nelle città la metropolitana è capillare, pulita, con cartelli e annunci in inglese, e si paga con la T-money. Per Jeju si vola: la tratta Seoul-Jeju è una delle più trafficate al mondo e i voli costano pochissimo.',
    costoVita:
      'Più economico del Giappone su quasi tutto tranne gli alloggi nelle zone centrali di Seoul. Un pasto completo in un ristorante di quartiere sta tra i 6 e i 12 euro, con i contorni (banchan) sempre inclusi e rimpiazzati gratis; la metropolitana costa poco più di un euro; il caffè, invece, costa quanto in Europa e a volte di più, perché in Corea i caffè sono luoghi di ritrovo e si paga la sosta.',
    lingua:
      'Coreano. L\'hangul, l\'alfabeto, è stato progettato nel Quattrocento per essere imparato in fretta ed è davvero così: un paio d\'ore bastano per decifrare le insegne e i nomi delle fermate, e cambia parecchio. L\'inglese è insegnato a tutti ma parlato con esitazione, soprattutto fuori Seoul; Papago colma il resto. Le persone tendono ad aiutare più di quanto la barriera linguistica lasci pensare.',
    elettricita: '220V, 60Hz, prese di tipo C e F: le spine italiane a due poli tondi entrano senza adattatore, cosa rara in Asia.',
    fusoOrario: 'UTC+9, senza ora legale: 7 ore avanti rispetto all\'Italia in estate, 8 in inverno.',
    clima:
      'Quattro stagioni molto nette. La primavera (aprile-maggio) è la stagione migliore, con la fioritura dei ciliegi che risale il paese da sud verso nord tra fine marzo e metà aprile. L\'estate porta il jangma, la fase monsonica di fine giugno e luglio, seguita da agosto caldo e umidissimo e da una stagione dei tifoni che arriva fino a settembre. L\'autunno (ottobre-inizio novembre) è l\'altra finestra buona, con il foliage che in Corea è un evento seguito come da noi il meteo delle vacanze. L\'inverno è gelido e secco, con temperature molto sotto zero nel nord e a Seoraksan, ma limpido.',
    festivita:
      'Due date da evitare: Seollal, il capodanno lunare (tra fine gennaio e febbraio), e Chuseok, la festa del raccolto (settembre-ottobre). In entrambe il paese si sposta in massa verso i paesi d\'origine, i trasporti sono esauriti, le autostrade bloccate e moltissimi ristoranti e negozi restano chiusi per giorni — anche a Seoul. Il 6 giugno è il Memorial Day e il 25 giugno l\'anniversario dello scoppio della guerra di Corea: la DMZ in quei giorni ha accessi ridotti e cerimonie ufficiali.',
    emergenze: 'Polizia 112, emergenze mediche e vigili del fuoco 119. Esiste anche la Korea Travel Hotline, il numero 1330, attivo 24 ore su 24 e multilingue: è uno dei servizi turistici migliori al mondo e risolve dai problemi di trasporto alle traduzioni al telefono. L\'Ambasciata d\'Italia è a Seoul.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Il padiglione Gyeonghoeru del palazzo Gyeongbokgung riflesso nello stagno, Seoul',
  tripPrincipaleSlug: 'corea-del-sud-itinerario',
}
