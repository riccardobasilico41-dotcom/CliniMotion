import type { Destinazione } from '@/lib/types'

// Terza e ultima tappa dell'itinerario "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts). Stesso trattamento delle
// destinazioni lituane e lettoni: visitataPersonalmente false, nessun
// miaEsperienza. A differenza di Vilnius e Riga, qui non c'è una seconda
// destinazione satellite paragonabile a Trakai o Jūrmala: Toompea, Kadriorg e
// Telliskivi sono quartieri di Tallinn stessa, non luoghi separati, e restano
// dentro il cosaVedere/cosaFare dell'unica destinazione estone.

export const destinazioniEstonia: Destinazione[] = [
  {
    slug: 'tallinn',
    paeseSlug: 'estonia',
    ordine: 1,
    nome: 'Tallinn',
    tipologia: ['città', 'storia', 'architettura'],
    giorniConsigliati: '3 giorni',
    visitataPersonalmente: false,
    introduzione:
      'La capitale dell\'Estonia e la più settentrionale delle tre capitali baltiche, affacciata sul Golfo di Finlandia. La Città Vecchia, patrimonio UNESCO dal 1997, è uno dei centri medievali meglio conservati del nord Europa, divisa tra la Toompea, la collina fortificata dove risiedeva il potere, e la città bassa dei mercanti anseatici. Fuori dalle mura, il parco barocco di Kadriorg e l\'ex complesso industriale di Telliskivi raccontano due Estonie diverse: quella zarista e quella più recente, digitale e creativa.',
    percheAndarci:
      'Perché il centro storico è vero, non ricostruito — mura, torri e la piazza del municipio più antica del Baltico sono arrivate fino a oggi quasi intatte — e perché appena fuori da quelle mura Tallinn mostra un\'identità completamente diversa: un parco imperiale russo da un lato, un distretto creativo nato da una fabbrica sovietica dall\'altro.',
    cosaVedere: [
      'La Piazza del Municipio (Raekoja plats), con il Municipio di Tallinn, del 1404, il più antico ancora in uso del Baltico',
      'La collina di Toompea, con il Castello di Toompea (oggi sede del parlamento estone, il Riigikogu) e la Cattedrale di Alexander Nevsky, ortodossa, dalle cupole a cipolla dorate',
      'Le piattaforme panoramiche di Kohtuotsa e Patkuli su Toompea, le due viste più classiche sulla città bassa, il porto e il Golfo di Finlandia',
      'Le mura cittadine medievali, circa 1,85 km ancora in piedi con le torri superstiti (tra cui la Kiek in de Kök, la torre-cannone il cui nome significa letteralmente "sbircia in cucina"), tra i sistemi difensivi meglio conservati d\'Europa',
      'La Chiesa di Sant\'Olaf (Oleviste kirik), che nel Cinquecento, con la sua guglia, fu per un periodo l\'edificio più alto del mondo',
      'Il Parco di Kadriorg, con il Palazzo di Kadriorg, fatto costruire nel 1718 da Pietro il Grande per la moglie Caterina I su progetto dell\'architetto italiano Niccolò Michetti, oggi sede del museo d\'arte straniera; a pochi passi, il KUMU, il museo d\'arte estone in un edificio contemporaneo, Museo Europeo dell\'Anno nel 2008',
      'Telliskivi Creative City, l\'ex complesso industriale e ferroviario di epoca sovietica riconvertito dal 2009 in quartiere creativo, tra street art, studi di design, negozi indipendenti e locali',
    ],
    cosaFare: [
      'Salire su Toompea fino alle piattaforme di Kohtuotsa e Patkuli per il panorama sulla città bassa',
      'Camminare lungo il tratto di mura ancora percorribile e salire su una delle torri aperte al pubblico',
      'Un giro tra i musei e i viali del Parco di Kadriorg, con una sosta al KUMU se si ha tempo per una visita più approfondita',
      'Un pomeriggio tra i negozi indipendenti, i murales e i locali di Telliskivi Creative City',
    ],
    doveDormire:
      'La Città Vecchia, per avere tutto a piedi: la parte bassa intorno a Piazza del Municipio è la più centrale, Toompea la più tranquilla e panoramica. Il quartiere di Kalamaja, tra la Città Vecchia e Telliskivi, è un\'alternativa più residenziale e con un\'atmosfera locale.',
    doveMangiare:
      'La verivorst (sanguinaccio) con mirtilli rossi è tradizionale soprattutto a Natale; il kiluvõileib, un tramezzino aperto con spratti marinati, burro e uovo sodo, è lo spuntino più identitario; Telliskivi concentra la scena gastronomica più giovane della città, tra street food, birrifici artigianali e mercati alimentari nei fine settimana.',
    comeArrivare:
      'Aeroporto di Tallinn-Lennart Meri (TLL), a circa 4 km dal centro: tram in 15-20 minuti o taxi/Bolt in pochi minuti, tra gli aeroporti più vicini al centro città d\'Europa. Collegamenti diretti stagionali o annuali da alcuni aeroporti italiani con vettori low-cost; altrimenti scalo su un hub europeo. Da Riga: bus (circa 4-4h30, più compagnie tra cui Lux Express, diverse corse al giorno). Da Helsinki: traghetto in circa 2 ore, un\'estensione classica per chi ha qualche giorno in più.',
    comeSpostarsi:
      'Il centro storico si gira interamente a piedi. Tram e bus della rete pubblica raggiungono Kadriorg e Telliskivi dal centro in pochi minuti, con biglietti economici acquistabili tramite app o alle biglietterie.',
    periodoMigliore:
      'maggio-settembre per il clima più mite e le giornate lunghissime a ridosso del solstizio; giugno-agosto è la stagione più affollata nella Città Vecchia; l\'inverno (novembre-marzo) è freddo e buio, ma la neve sui tetti medievali e i mercatini di Natale in Piazza del Municipio hanno un fascino proprio.',
    costi: 'leggermente più cara di Vilnius e Riga: ingresso alle quattro torri delle mura cittadine 12€, ingresso al KUMU 12-16€ secondo la mostra, cena normale 12-18€ a testa.',
    erroriDaEvitare: [
      'Limitarsi alla sola Città Vecchia: Kadriorg e Telliskivi mostrano due facce di Tallinn — quella zarista e quella contemporanea — che il solo centro medievale non racconta',
      'Salire su Toompea senza passare dalle due piattaforme panoramiche (Kohtuotsa e Patkuli): sono a pochi passi l\'una dall\'altra e offrono angolazioni diverse sulla città bassa',
      'Dare per scontato che l\'estone assomigli al lituano o al lettone: è una lingua ugrofinnica, imparentata con il finlandese e del tutto estranea alla famiglia linguistica baltica delle altre due capitali',
      'Visitare Telliskivi di domenica sera o di lunedì, quando diversi locali e negozi indipendenti restano chiusi',
    ],
    esperienzeSlugs: ['tallinn-kadriorg-kumu', 'tallinn-telliskivi-creative-city'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'La Piazza del Municipio di Tallinn con il Municipio medievale e le guglie della Città Vecchia sullo sfondo',
  },
]
