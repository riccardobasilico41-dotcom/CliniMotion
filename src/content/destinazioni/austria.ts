import type { Destinazione } from '@/lib/types'

// Prima uscita austriaca dell'archivio, collegata al viaggio "Vienna in un
// weekend lungo" (src/content/viaggi/55-vienna-weekend.md, dati in
// src/content/viaggi-dati/vienna-weekend.ts). Vienna non è stata visitata di
// persona: visitataPersonalmente resta false e il campo miaEsperienza,
// facoltativo nel tipo, è assente di proposito — niente ricordo inventato,
// solo fatti verificati con ricerca (stesso trattamento usato in
// src/content/destinazioni/repubblica-ceca.ts per Praga). Nessun nome di
// hotel, ristorante o operatore è stato inventato. Prezzi e orari cambiano
// spesso e vanno riverificati sui canali ufficiali prima di partire.

export const destinazioniAustria: Destinazione[] = [
  {
    slug: 'vienna',
    paeseSlug: 'austria',
    ordine: 1,
    nome: 'Vienna',
    tipologia: ['città', 'arte', 'musica'],
    giorniConsigliati: '3-4 giorni per l\'Innere Stadt, Schönbrunn, il Belvedere e il Prater',
    visitataPersonalmente: false,
    introduzione:
      'La capitale austriaca, per secoli cuore dell\'Impero asburgico e oggi una delle città con la miglior qualità della vita al mondo secondo diverse classifiche internazionali: un centro storico compatto — l\'Innere Stadt, Patrimonio UNESCO — circondato dal Ring, il viale che ha sostituito le antiche mura cittadine nell\'Ottocento, con la reggia di Schönbrunn, il palazzo del Belvedere e il grande parco del Prater appena fuori dal nucleo più centrale.',
    percheAndarci:
      'Perché concentra in un\'area percorribile a piedi (o in pochi minuti di U-Bahn) secoli di storia imperiale, una delle collezioni d\'arte più importanti d\'Europa centrale con "Il Bacio" di Klimt al Belvedere, e una cultura del caffè riconosciuta dall\'UNESCO come patrimonio immateriale — il tutto nell\'eurozona, senza le complicazioni di cambio valuta di Praga o Cracovia.',
    cosaVedere: [
      'La Cattedrale di Santo Stefano (Stephansdom), gotica, simbolo della città, con il tetto in 230.000 tegole colorate e la torre sud (Steffl) alta 136 metri, salibile con 343 gradini fino a un belvedere panoramico; sotto la cattedrale, le catacombe con gli organi interni degli imperatori asburgici',
      'La Hofburg, la reggia invernale degli Asburgo per oltre sei secoli, oggi sede del Museo Sisi, degli Appartamenti Imperiali e della Scuola Spagnola di Equitazione con i suoi cavalli Lipizzani',
      'La Reggia di Schönbrunn, la residenza estiva della famiglia imperiale, con oltre 1.400 stanze (poche decine visitabili), i giardini barocchi e la Gloriette in collina',
      'Il Palazzo del Belvedere, con l\'Upper Belvedere che ospita "Il Bacio" e altre opere di Gustav Klimt, oltre a una delle collezioni di arte austriaca più importanti al mondo',
      'Il Naschmarkt, il mercato alimentare più famoso della città, oltre un chilometro e mezzo di bancarelle tra frutta, spezie e cucine internazionali, con un mercatino delle pulci il sabato',
      'Il Prater, il grande parco pubblico dal 1766, con il Wiener Riesenrad, la ruota panoramica costruita nel 1897 per il giubileo dell\'imperatore Francesco Giuseppe e per decenni la più alta al mondo',
    ],
    cosaFare: [
      'Sedersi almeno una volta in un caffè storico — Café Central, Café Sacher o Landtmann tra i più noti — per capire dal vivo la Kaffeehauskultur, la cultura del caffè viennese riconosciuta dall\'UNESCO come patrimonio culturale immateriale dal 2011',
      'Salire sulla torre sud della Cattedrale di Santo Stefano per una vista dall\'alto sui tetti del centro storico',
      'Assistere a uno spettacolo all\'Opera di Stato con un biglietto in piedi (Stehplatz), a partire da circa 13€, uno dei modi più economici al mondo per vedere un\'opera di alto livello',
      'Un giro sul Wiener Riesenrad al Prater, soprattutto al tramonto',
      'Una passeggiata lungo il Ring, il viale che circonda l\'Innere Stadt sul tracciato delle antiche mura, tra edifici storicisti ottocenteschi',
    ],
    doveDormire:
      'L\'Innere Stadt (il I distretto, dentro il Ring) è la scelta più comoda e concentra la maggior parte delle attrazioni, ma è anche la zona con i prezzi più alti. I distretti limitrofi (II, IV, VII) sono alternative più economiche e ben collegate in U-Bahn, spesso a pochi minuti a piedi dal Ring.',
    doveMangiare:
      'Il Wiener Schnitzel, la cotoletta di vitello impanata, è il piatto simbolo; il Tafelspitz, il bollito di manzo alla viennese, altrettanto tradizionale. Tra i dolci, la Sachertorte (la celebre torta al cioccolato con marmellata di albicocche, nata proprio a Vienna) e l\'Apfelstrudel. Il Naschmarkt è il posto migliore per un pasto informale tra cucine diverse; i caffè storici, oltre al caffè, servono spesso pasticceria e piccoli pasti durante tutto il giorno.',
    comeArrivare:
      'Aeroporto di Vienna-Schwechat (VIE), a circa 18 km dal centro: il City Airport Train (CAT) arriva a Wien Mitte in 16 minuti (circa 14,90€ a tratta), oppure i treni regionali (S7, ÖBB) coprono lo stesso tragitto in poco più tempo a un prezzo inferiore. In treno dall\'Italia, collegamenti diretti da diverse città del Nord; da Praga, circa 4 ore di treno diretto.',
    comeSpostarsi: 'Centro storico in gran parte a piedi. Per il resto della città, U-Bahn, tram e bus di Wiener Linien, con biglietti singoli o pass giornalieri/plurigiorno. Non serve auto.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, affollata soprattutto a Schönbrunn e Stephansplatz; novembre-marzo è freddo ma gestibile, con i mercatini di Natale a dicembre',
    costi: 'nella media europea: musei principali 20-25€, pasto normale 15-25€ a testa, biglietti in piedi dell\'Opera a partire da 13€, trasporti pubblici economici',
    erroriDaEvitare: [
      'Presentarsi a Schönbrunn o al Belvedere in alta stagione senza biglietto prenotato online: le code in loco possono superare l\'ora',
      'Sottovalutare la Kaffeehauskultur come una semplice pausa caffè: nei caffè storici il tavolo è "affittato" per tutto il tempo che si vuole, un\'usanza culturale precisa, non un\'attrazione da consumare in fretta',
      'Programmare acquisti o commissioni di domenica: quasi tutti i negozi, supermercati compresi, sono chiusi per legge, con le sole eccezioni di stazioni, aeroporto e farmacie di turno',
      'Abbassare la guardia sulla linea U3 della metropolitana nelle ore di punta: è la linea più segnalata per i borseggi in città',
      'Sottovalutare le dimensioni di Schönbrunn: il solo giro del palazzo e dei giardini principali richiede mezza giornata buona',
    ],
    esperienzeSlugs: ['vienna-schonbrunn-biglietto', 'vienna-opera-stehplatz', 'vienna-giro-caffe-storici'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'La Cattedrale di Santo Stefano a Vienna con il tetto in tegole colorate visto dall\'alto della torre sud',
  },
]
