import type { Destinazione } from '@/lib/types'

// Prima uscita olandese dell'archivio, collegata al viaggio "Amsterdam in un
// weekend lungo" (src/content/viaggi/58-amsterdam-weekend.md, dati in
// src/content/viaggi-dati/amsterdam-weekend.ts). Un'unica destinazione:
// Amsterdam stessa. Non è stata visitata di persona: visitataPersonalmente
// resta false e il campo miaEsperienza, facoltativo nel tipo, è assente di
// proposito — niente ricordo inventato, solo fatti verificati con ricerca
// (stesso trattamento usato in src/content/paesi/polonia.ts). Nessun nome di
// hotel, ristorante o operatore è stato inventato. Prezzi e orari (soprattutto
// quelli della Casa di Anna Frank) cambiano spesso e vanno riverificati sui
// canali ufficiali prima di partire.

export const destinazioniPaesiBassi: Destinazione[] = [
  {
    slug: 'amsterdam',
    paeseSlug: 'paesi-bassi',
    ordine: 1,
    nome: 'Amsterdam',
    tipologia: ['città', 'arte', 'storia'],
    giorniConsigliati: '3-4 giorni per il centro storico, l\'anello dei canali e i musei principali',
    visitataPersonalmente: false,
    introduzione:
      'La capitale dei Paesi Bassi, costruita su una rete di canali concentrici scavati a partire dal Seicento durante l\'età dell\'oro olandese: il Grachtengordel (l\'anello dei canali) è Patrimonio UNESCO dal 2010, con le tipiche case a schiera strette e alte affacciate sull\'acqua. Città compatta, quasi piatta, pensata per essere girata a piedi o, più spesso, in bicicletta.',
    percheAndarci:
      'Perché concentra in un\'area percorribile in bici in mezz\'ora alcuni dei musei più importanti d\'Europa (Rijksmuseum, Van Gogh Museum), un luogo di memoria che chiede una visita informata come la Casa di Anna Frank, un quartiere di canali che è patrimonio dell\'umanità intero e non un singolo monumento, e una cultura urbana — quella della bicicletta come mezzo di trasporto primario, non come attività per turisti — che non si trova altrove in questa forma.',
    cosaVedere: [
      'Il Grachtengordel, l\'anello dei canali seicenteschi (Herengracht, Keizersgracht, Prinsengracht) patrimonio UNESCO, con le case a schiera e i tipici gable (frontoni decorati) che segnalavano un tempo il mestiere o la ricchezza del proprietario',
      'La Casa di Anna Frank (Anne Frank Huis), sul Prinsengracht, l\'edificio dove la famiglia Frank si nascose dal 1942 al 1944: i biglietti si esauriscono con settimane di anticipo e vanno prenotati online sul sito ufficiale',
      'Il Rijksmuseum, il museo nazionale con la più grande collezione di arte e storia olandese al mondo, dalla Ronda di notte di Rembrandt in poi',
      'Il Van Gogh Museum, la più grande collezione al mondo di opere di Vincent van Gogh, ordinata in gran parte cronologicamente',
      'Jordaan, l\'ex quartiere operaio a ovest del centro, oggi tra le zone più vissute della città, con stradine strette, hofjes (piccoli cortili interni un tempo case di carità) e un\'atmosfera più residenziale rispetto al centro storico',
      'Il Quartiere a Luci Rosse (De Wallen), nel cuore medievale della città: un\'area a luci rosse regolamentata da secoli, non un\'attrazione da fotografare',
      'Dam Square, la piazza centrale con il Palazzo Reale e il Monumento Nazionale',
    ],
    cosaFare: [
      'Noleggiare una bicicletta e spostarsi come fanno gli amsterdammer: è il modo più naturale di vivere la città, ma richiede di imparare in fretta le regole base (vedi la scheda esperienza dedicata)',
      'Una crociera sui canali, di giorno o al tramonto, per vedere l\'anello del Grachtengordel dall\'acqua invece che dai ponti',
      'Camminare per Jordaan senza una meta precisa, tra hofjes e piccoli negozi',
      'Attraversare il Quartiere a Luci Rosse con lo stesso passo con cui si attraversa qualunque altra zona della città: senza fermarsi a fotografare le vetrine né le persone che vi lavorano — è vietato per legge in molte aree e comunque una questione di rispetto elementare',
      'Salire su uno dei musei minori se il tempo lo consente: il Museo Van Loon o il Museo Willet-Holthuysen, due case-museo di canale che restituiscono come si viveva davvero in queste case',
    ],
    doveDormire:
      'Il Grachtengordel (l\'anello dei canali) è la zona più centrale e caratteristica, comoda a piedi per quasi tutto; Jordaan, appena a ovest, è l\'alternativa più residenziale e spesso leggermente più economica, a dieci minuti a piedi dal cuore del centro storico.',
    doveMangiare:
      'La bitterballen (polpette fritte ripiene, tipico snack da bar) accompagnata da una birra olandese; l\'haring (aringa cruda marinata, servita a pezzi con cipolla tritata) dai chioschi di strada; lo stroopwafel, la cialda ripiena di sciroppo di caramello, meglio appena fatta e ancora calda dai banchetti di mercato; la rijsttafel, il "tavolo di riso" con decine di piccoli piatti in stile indonesiano, eredità diretta del passato coloniale olandese e oggi parte della cucina cittadina.',
    comeArrivare:
      'Aeroporto di Amsterdam Schiphol (AMS), tra i più trafficati d\'Europa, a circa 15 km dal centro: treno diretto in 15-20 minuti fino alla Stazione Centrale, con corse molto frequenti. In treno dall\'Italia non esiste un collegamento diretto comodo: si arriva quasi sempre in aereo.',
    comeSpostarsi: 'Bicicletta o piedi per il centro; tram, bus e metro GVB per il resto della città, pagabili anche con carta contactless direttamente sui mezzi. Auto sconsigliata: traffico scoraggiato e parcheggio caro e scarso nel centro.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e molto affollata; novembre-marzo è freddo e spesso piovoso ma gestibile, con i mercatini di Natale a dicembre',
    costi: 'città cara per gli standard europei: musei principali 20-25€ l\'uno, cena normale 20-25€ a testa, noleggio bici 10-15€ al giorno',
    erroriDaEvitare: [
      'Arrivare senza aver prenotato online la Casa di Anna Frank: i biglietti si esauriscono con settimane di anticipo e non si comprano più alla cassa',
      'Camminare o fermarsi distrattamente sulle piste ciclabili (l\'asfalto rosso, distinto dal marciapiede): è la causa più comune di incidenti e discussioni con i turisti in tutta la città',
      'Dare per scontato di poter pagare in contanti ovunque: molti locali accettano solo carta o contactless',
      'Fotografare le vetrine o le persone che lavorano nel Quartiere a Luci Rosse: è vietato in gran parte dell\'area e culturalmente molto mal visto',
      'Sottovalutare le code al Rijksmuseum e al Van Gogh Museum in alta stagione: conviene prenotare biglietti con fascia oraria online in anticipo',
    ],
    esperienzeSlugs: ['amsterdam-in-bicicletta', 'crociera-sui-canali-amsterdam', 'casa-di-anna-frank'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Case a schiera colorate lungo uno dei canali del Grachtengordel ad Amsterdam, con biciclette parcheggiate lungo l\'argine',
  },
]
