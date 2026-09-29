import type { Destinazione } from '@/lib/types'

// Prima uscita lituana dell'archivio, collegata al viaggio "Capitali
// baltiche in 9 giorni" (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts). Nessuna delle due
// destinazioni qui sotto è stata visitata di persona: visitataPersonalmente
// resta false su entrambe e il campo miaEsperienza, facoltativo nel tipo, è
// assente di proposito — niente ricordo inventato, solo fatti verificati con
// ricerca (stesso trattamento usato in src/content/destinazioni/polonia.ts e
// in src/content/meraviglie.ts per i monumenti non visitati). Trakai è
// trattata come destinazione a sé, non ripiegata dentro il cosaFare di
// Vilnius, sullo stesso modello con cui Auschwitz-Birkenau è una destinazione
// a sé rispetto a Cracovia: è un luogo fisicamente separato, con una propria
// storia e un proprio cosaVedere denso, non solo una tappa nel cosaFare della
// capitale.

export const destinazioniLituania: Destinazione[] = [
  {
    slug: 'vilnius',
    paeseSlug: 'lituania',
    ordine: 1,
    nome: 'Vilnius',
    tipologia: ['città', 'storia', 'arte'],
    giorniConsigliati: '3 giorni, compresa la gita a Trakai',
    visitataPersonalmente: false,
    introduzione:
      'La capitale della Lituania e la più popolosa delle tre capitali baltiche: il centro storico, patrimonio UNESCO dal 1994, è uno dei più estesi centri barocchi dell\'Europa centro-orientale, con oltre 1.500 edifici storici tra chiese barocche, cortili rinascimentali e vicoli medievali. Dentro quel centro storico, sull\'altra sponda del fiume Vilnia, il quartiere di Užupis si è autoproclamato repubblica indipendente nel 1997, con tanto di costituzione, bandiera e presidente onorari.',
    percheAndarci:
      'Perché mette insieme, in un\'area percorribile a piedi, la collina fortificata di Gediminas che domina la città, la più alta concentrazione di architettura barocca del Baltico, e un quartiere bohémien che si prende gioco delle proprie stesse istituzioni con la stessa serietà con cui le rispetta — e perché è la base logistica naturale per la gita più classica del paese, il castello sull\'isola di Trakai.',
    cosaVedere: [
      'La Cattedrale di Vilnius (Vilniaus katedra), neoclassica, in Piazza della Cattedrale, con il campanile separato a torre e le cripte reali del Granducato di Lituania',
      'La collina di Gediminas, con i resti del Castello Superiore e la Torre di Gediminas (raggiungibile a piedi o in funicolare), il simbolo della città e il punto panoramico più alto sul centro storico',
      'Il quartiere di Užupis, con il Muro della Costituzione — il testo dei 41 articoli della "costituzione" del quartiere tradotto in decine di lingue su altrettante targhe — e l\'Angelo di Užupis, la statua-simbolo del rione',
      'La Chiesa di Sant\'Anna, gotica in mattoni rossi, e la vicina Chiesa di San Francesco e Sant\'Bernardino, spesso citate insieme come uno degli scorci gotici più fotografati della città',
      'Il Cortile Universitario dell\'Università di Vilnius, fondata nel 1579, tra i più antichi atenei dell\'Europa centro-orientale, con tredici cortili collegati e affreschi astronomici',
      'La Porta dell\'Aurora (Aušros Vartai), l\'unica porta superstite delle antiche mura cittadine, con la cappella che custodisce l\'icona della Madonna Nera, meta di pellegrinaggio',
      'Il Palazzo dei Granduchi di Lituania, ricostruito sui resti archeologici del castello reale medievale, oggi museo sulla storia del Granducato',
    ],
    cosaFare: [
      'Salire con il funicolare (o a piedi) fino alla Torre di Gediminas per il panorama sui tetti rossi della Città Vecchia',
      'Passeggiare tra le gallerie d\'arte, i caffè e i piccoli laboratori artigianali di Užupis, cercando le targhe del Muro della Costituzione',
      'Attraversare i tredici cortili dell\'Università di Vilnius, con una sosta nella Biblioteca dell\'Università e nella Chiesa di San Giovanni',
      'Un giro serale tra i bar del centro storico intorno a via Pilies, la via pedonale che collega la Piazza della Cattedrale alla Porta dell\'Aurora',
    ],
    doveDormire:
      'Il centro storico (Senamiestis), per avere tutto a piedi: la parte intorno a via Pilies è la più centrale, quella verso Užupis più tranquilla e con un\'atmosfera bohémien propria. Fuori dalle mura, il quartiere di Naujamiestis (nuova città) è l\'alternativa più economica, a pochi minuti a piedi dal centro storico.',
    doveMangiare:
      'I cepelinai, grandi gnocchi di patata ripieni di carne o formaggio, sono il piatto nazionale; la šaltibarščiai, zuppa fredda di barbabietola rosa acceso servita con patate lesse, è il simbolo estivo della cucina lituana; il kibinas, il fagottino ripieno portato in Lituania dalla comunità caraima di Trakai, si trova anche a Vilnius. Diversi ristoranti del centro storico propongono menu di cucina lituana contemporanea a prezzi ancora contenuti rispetto all\'Europa occidentale.',
    comeArrivare:
      'Aeroporto Internazionale di Vilnius (VNO), a circa 7 km dal centro: treno o bus pubblico in 10-20 minuti, oppure taxi/Bolt in pochi minuti. Collegamenti diretti stagionali o annuali da alcuni aeroporti italiani con vettori low-cost; altrimenti scalo su un hub europeo.',
    comeSpostarsi:
      'Il centro storico si gira interamente a piedi. Per il resto della città, bus e filobus della rete pubblica sono economici e frequenti. Per Trakai: treno regionale (circa 34 minuti) o bus (circa 35 minuti) dalla stazione centrale.',
    periodoMigliore:
      'maggio-settembre per il clima mite e le lunghe giornate; giugno-agosto è la stagione più calda e affollata, con il picco del solstizio a fine giugno; l\'inverno (novembre-marzo) è freddo ma la città regge bene, con i mercatini di Natale a dicembre.',
    costi: 'città economica per gli standard dell\'Europa occidentale: ingresso alla Torre di Gediminas 8€ più 2-3€ di funicolare, cena normale 10-15€ a testa, birra locale 3-5€.',
    erroriDaEvitare: [
      'Dare per scontato che il lituano e il lettone (la lingua della vicina Riga) siano mutuamente comprensibili: sono lingue baltiche imparentate alla lontana, ma un parlante dell\'una non capisce di default l\'altra',
      'Trattare Užupis come un semplice quartiere da attraversare in fretta: il senso del posto è nel fermarsi, leggere il Muro della Costituzione e girare senza meta tra le gallerie',
      'Sottovalutare la salita alla Torre di Gediminas nelle ore centrali dell\'alta stagione, quando la coda per il funicolare si allunga: conviene andarci presto al mattino o verso il tramonto',
      'Programmare Trakai come una tappa "veloce" di un\'ora: tra i trasporti e la visita al castello serve realisticamente mezza giornata',
    ],
    confronti: [
      {
        titolo: 'Come arrivare a Trakai da Vilnius',
        introduzione: 'Due modi altrettanto pratici per raggiungere il castello sull\'isola, entrambi dalla stazione centrale di Vilnius e con tempi di percorrenza molto simili.',
        opzioni: [
          {
            nome: 'Treno regionale',
            sintesi: 'Il collegamento più diretto e puntuale, con la stazione di Trakai a circa 3 km dal castello.',
            durata: 'circa 34 minuti',
            costo: 'poche unità di euro a tratta',
            pro: ['Puntuale e frequente', 'Nessun rischio di traffico'],
            contro: ['La stazione di Trakai è più lontana dal castello rispetto alla fermata del bus', 'Meno corse rispetto al bus'],
            perChi: 'chi preferisce orari certi e non ha problemi a camminare (o prendere un bus locale) dalla stazione al castello',
          },
          {
            nome: 'Bus di linea',
            sintesi: 'Più frequente del treno, con una fermata più vicina al castello.',
            durata: 'circa 35 minuti',
            costo: 'circa 5-6€ a tratta',
            pro: ['Corse più frequenti, fino a 50 al giorno in settimana', 'Fermata a circa 2,3 km dal castello, un po\' più vicina della stazione ferroviaria'],
            contro: ['Soggetto al traffico sulla statale', 'Leggermente più caro del treno'],
            perChi: 'chi vuole la massima flessibilità di orario, specialmente nel weekend',
          },
        ],
      },
    ],
    esperienzeSlugs: ['uzupis-repubblica-passeggiata'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il centro storico barocco di Vilnius visto dalla Torre di Gediminas, con i campanili delle chiese tra i tetti rossi',
  },
  {
    slug: 'trakai',
    paeseSlug: 'lituania',
    ordine: 2,
    nome: 'Trakai',
    tipologia: ['castello', 'natura', 'storia'],
    giorniConsigliati: 'mezza giornata, come gita da Vilnius',
    visitataPersonalmente: false,
    introduzione:
      'L\'antica capitale del Granducato di Lituania prima di Vilnius, circa 28 km a ovest della capitale attuale: un castello gotico in mattoni rossi costruito su un\'isola del lago Galvė, collegato alla terraferma da un ponte pedonale in legno, tra i laghi più belli del paese (Trakai ne conta oltre duecento nei dintorni). È anche la sede storica della comunità caraima (Karaim), portata qui dal Granduca Vytautas nel Trecento come guardia personale, con una lingua, una religione e una cucina proprie ancora vive oggi.',
    percheAndarci:
      'Perché è la gita fuori porta più fotografata della Lituania, e perché lo è per un buon motivo: un vero castello medievale che galleggia letteralmente su un\'isola, raggiungibile in mezza giornata da Vilnius senza bisogno di un\'auto.',
    cosaVedere: [
      'Il Castello dell\'Isola di Trakai (Trakų salos pilis), costruito nel XIV-XV secolo dai granduchi Kęstutis e Vytautas, oggi Museo Storico di Trakai, con le sale espositive sulla storia del Granducato e la torre principale panoramica sul lago',
      'Il ponte pedonale in legno che collega la terraferma all\'isola del castello, il punto fotografico più classico della cittadina',
      'Il quartiere caraimo, con le tradizionali case di legno a tre finestre sulla via Karaimų — una rivolta alla strada, una al cortile, una a Dio, secondo la tradizione locale — e la Kenesa, il tempio caraimo ancora attivo',
      'Il lago Galvė, il maggiore dei laghi che circondano Trakai, con le rive attrezzate per passeggiate e noleggio di barche e canoe',
    ],
    cosaFare: [
      'Visitare il museo all\'interno del castello e salire sulla torre principale per il panorama sul lago Galvė',
      'Noleggiare una barca a remi o un pedalò per vedere il castello dall\'acqua, l\'angolazione più fotografata di tutte',
      'Assaggiare i kibinai, i fagottini ripieni tipici della cucina caraima, in uno dei locali storici sulla via principale',
      'Una passeggiata tra le case di legno del quartiere caraimo, con una sosta alla Kenesa se aperta',
    ],
    doveDormire: 'Si visita in mezza giornata da Vilnius: non è pensata come tappa con pernottamento a Trakai in questo itinerario.',
    doveMangiare:
      'I kibinai caraimi, il piatto identitario della cittadina, si trovano in diversi locali storici vicino al castello; per un pasto più completo, i ristoranti sul lungolago con vista sul castello coprono cucina lituana e caraima insieme.',
    comeArrivare: 'Da Vilnius: treno regionale (circa 34 minuti, stazione a circa 3 km dal castello) o bus di linea (circa 35 minuti, fermata a circa 2,3 km dal castello), entrambi dalla stazione centrale di Vilnius.',
    comeSpostarsi: 'Il centro di Trakai e il castello si raggiungono a piedi dalla stazione o dalla fermata del bus in 30-40 minuti di cammino tranquillo lungo il lago, oppure con un breve bus locale.',
    periodoMigliore: 'maggio-settembre, quando i colori del lago e la possibilità di noleggiare una barca rendono la visita più completa; il castello si visita comunque tutto l\'anno, con un fascino diverso sotto la neve.',
    costi: 'ingresso al Museo Storico del Castello 12€ in bassa stagione (ottobre-marzo) e 14€ in alta stagione (aprile-settembre); gratuito l\'ultima domenica del mese.',
    erroriDaEvitare: [
      'Arrivare senza aver controllato gli orari: il castello ha un giorno di chiusura settimanale e orari più corti in bassa stagione',
      'Fermarsi solo al ponte pedonale senza entrare nel museo: le sale interne, comprese quelle sulla storia del Granducato, valgono il biglietto',
      'Confondere la gita con una tappa di poche decine di minuti: tra andata, visita e ritorno serve realisticamente mezza giornata piena',
    ],
    esperienzeSlugs: ['trakai-castello-lago-galve'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il Castello dell\'Isola di Trakai, in mattoni rossi gotici, riflesso nelle acque del lago Galvė con il ponte pedonale in legno',
  },
]
