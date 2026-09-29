import type { Destinazione } from '@/lib/types'

// Prima uscita ungherese dell'archivio, collegata al viaggio "Budapest in un
// weekend lungo" (src/content/viaggi/56-budapest-weekend.md, dati in
// src/content/viaggi-dati/budapest-weekend.ts). Un'unica destinazione,
// Budapest: a differenza di Cracovia non c'è qui una gita fuori porta che
// meriti una scheda propria. visitataPersonalmente resta false e il campo
// miaEsperienza, facoltativo nel tipo, è assente di proposito — niente
// ricordo inventato, solo fatti verificati con ricerca (stesso trattamento
// usato in src/content/destinazioni/polonia.ts). Nessun nome di hotel,
// ristorante o operatore è stato inventato. Prezzi e orari delle terme
// cambiano spesso e vanno riverificati sui canali ufficiali prima di partire.

export const destinazioniUngheria: Destinazione[] = [
  {
    slug: 'budapest',
    paeseSlug: 'ungheria',
    ordine: 1,
    nome: 'Budapest',
    tipologia: ['città', 'terme', 'storia'],
    giorniConsigliati: '3-4 giorni, con una giornata dedicata alle terme',
    visitataPersonalmente: false,
    introduzione:
      'La capitale ungherese, nata nel 1873 dalla fusione di tre città distinte: Buda e Óbuda sulla riva collinare a ovest del Danubio, Pest su quella pianeggiante a est. Il centro storico di Buda, patrimonio UNESCO dal 1987, conserva il castello reale e il quartiere medievale intorno alla Chiesa di Mattia; Pest concentra il Parlamento, i grandi viali ottocenteschi e il quartiere ebraico con i suoi ruin bar. Budapest siede inoltre su oltre un centinaio di sorgenti termali, ed è ufficialmente conosciuta come "la città delle terme".',
    percheAndarci:
      'Perché unisce in un\'area compatta e percorribile un panorama da cartolina (il Danubio con il Parlamento e il Castello di Buda affacciati l\'uno sull\'altro), un patrimonio storico stratificato su due sponde diverse, e un\'attività che non si trova con la stessa qualità in nessun\'altra capitale europea: bagnarsi in acqua termale all\'aperto, in un edificio storico, nel cuore della città.',
    cosaVedere: [
      'Il Castello di Buda e il colle omonimo, con il Palazzo Reale (oggi sede di musei) e la vista sul Danubio e su Pest',
      'Il Bastione dei Pescatori (Halászbástya), la terrazza in stile neoromanico costruita nel 1902 come punto panoramico, non come fortificazione, con sette torrette che rappresentano le sette tribù magiare fondatrici',
      'La Chiesa di Mattia (Mátyás-templom), accanto al Bastione, con il tetto in tegole maiolicate policrome e la storia di incoronazioni reali e trasformazione in moschea durante l\'occupazione ottomana',
      'Il Parlamento ungherese (Országház), sulla riva di Pest, completato nel 1904 e tra gli edifici parlamentari più grandi al mondo, visitabile con tour guidato che include la Sacra Corona di Santo Stefano',
      'Il Ponte delle Catene (Széchenyi lánchíd), il primo ponte permanente tra Buda e Pest, aperto nel 1849, illuminato di sera',
      'La Grande Sinagoga di Via Dohány (Dohány utcai zsinagóga), la più grande d\'Europa e la seconda al mondo dopo quella di New York, in stile moresco, con il giardino memoriale e la scultura dell\'Albero della Vita di Imre Varga dedicata alle vittime della Shoah',
      'Il quartiere ebraico (Erzsébetváros, distretto VII), oggi centro dei ruin bar (romkocsma), i locali nati in edifici fatiscenti e cortili abbandonati a partire dai primi anni Duemila',
      'L\'Isola Margherita (Margitsziget), parco senza traffico nel mezzo del Danubio, con fontana musicale e proprie terme',
    ],
    cosaFare: [
      'Bagno alle Terme di Széchenyi o di Gellért — vedi le schede esperienza dedicate',
      'Una crociera o una passeggiata serale sul Danubio, per vedere il Parlamento e il Castello illuminati dall\'acqua',
      'Salire sulla Cupola della Basilica di Santo Stefano per il panorama sui tetti di Pest',
      'Un giro tra i ruin bar del quartiere ebraico, a partire dal più noto, lo Szimpla Kert',
      'Attraversare a piedi il Ponte delle Catene tra Buda e Pest al tramonto',
    ],
    doveDormire:
      'Il lato Pest, tra il Parlamento, la Basilica di Santo Stefano e il quartiere ebraico, è la zona più comoda e più viva la sera, a pochi minuti a piedi dai principali punti d\'interesse. Il lato Buda è più tranquillo e panoramico, ma meno centrale per gli spostamenti serali.',
    doveMangiare:
      'Il gulasch (gulyás), qui più zuppa che stufato, nella versione originale ungherese; il lángos, un disco di pasta fritta servito con panna acida e formaggio, lo street food per eccellenza; il paprikás csirke (pollo alla paprika); i dolci come il rétes (strudel) e la torta Dobos. Il Mercato Centrale (Nagycsarnok), inaugurato nel 1897, è il posto migliore per assaggiare prodotti locali, paprika compresa, a prezzi contenuti rispetto ai ristoranti turistici del centro.',
    comeArrivare:
      'Aeroporto Ferenc Liszt (BUD), a circa 16 km dal centro: bus navetta 100E diretto al centro in circa 35-40 minuti, oppure bus di linea 200E più metro. Non esiste un collegamento ferroviario diretto comodo dall\'Italia: si arriva in genere in aereo. Da Vienna, treno in circa 2h30.',
    comeSpostarsi: 'Rete BKK di metro, tram e bus, capillare ed economica. Il centro di Pest e il colle di Buda si girano bene anche a piedi. Non serve auto.',
    periodoMigliore: 'aprile-maggio e settembre-ottobre per il clima mite e meno folla; giugno-agosto è alta stagione, calda e affollata; novembre-marzo è freddo ma le terme diventano un\'esperienza particolare, con i mercatini di Natale a dicembre',
    costi: 'città di fascia medio-bassa per gli standard dell\'Europa occidentale: cena normale 12-20€ a testa, mezzi pubblici pochi HUF a corsa, l\'ingresso alle terme la voce più costosa di una giornata tipo',
    erroriDaEvitare: [
      'Seguire chi avvicina per strada proponendo "un locale fantastico" nel quartiere ebraico o intorno alle piazze turistiche: è lo schema classico che porta a conti gonfiati a dismisura',
      'Confondere gli zeri del fiorino: un conto da "8.000" non è 8 euro, ed è facile sbagliarsi nei primi giorni',
      'Sottovalutare le terme come una parentesi rilassante da un\'ora: tra ingresso, spogliatoio e code per gli armadietti, meno di due ore e mezza-tre non bastano per goderle davvero',
      'Programmare il weekend senza prenotare in anticipo il tour del Parlamento, che ha ingressi contingentati e va spesso esaurito con giorni di anticipo in alta stagione',
    ],
    esperienzeSlugs: ['terme-szechenyi', 'terme-gellert', 'crociera-danubio', 'ruin-bar-tour'],
    tripSlugs: ['budapest-weekend'],
    imageAlt: 'Il Bastione dei Pescatori e la Chiesa di Mattia sul colle di Buda, con Pest e il Danubio sullo sfondo',
  },
]
