import type { Destinazione } from '@/lib/types'

// Seconda tappa dell'itinerario "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md, dati in
// src/content/viaggi-dati/capitali-baltiche.ts). Stesso trattamento delle
// destinazioni lituane ed estoni: visitataPersonalmente false ovunque,
// nessun miaEsperienza. Jūrmala è trattata come destinazione a sé (non
// ripiegata nel cosaFare di Riga), sullo stesso criterio usato per Trakai in
// src/content/destinazioni/lituania.ts: un luogo fisicamente separato con un
// proprio cosaVedere denso, non solo una riga nel cosaFare della capitale.

export const destinazioniLettonia: Destinazione[] = [
  {
    slug: 'riga',
    paeseSlug: 'lettonia',
    ordine: 1,
    nome: 'Riga',
    tipologia: ['città', 'architettura', 'gastronomia'],
    giorniConsigliati: '3 giorni, compresa la gita a Jūrmala',
    visitataPersonalmente: false,
    introduzione:
      'La capitale della Lettonia e la più grande delle tre capitali baltiche: il centro storico medievale, patrimonio UNESCO dal 1997, si affaccia sul fiume Daugava con le guglie delle chiese anseatiche e la Casa delle Teste Nere. Appena fuori dalle mura medievali, il quartiere costruito tra Otto e Novecento concentra una delle densità di architettura Art Nouveau più alte al mondo, e poco più in là il Mercato Centrale — cinque ex hangar per dirigibili — resta il più grande bazar coperto d\'Europa.',
    percheAndarci:
      'Perché in un\'area compatta mette insieme un centro medievale vero, un intero quartiere Art Nouveau da guardare con il naso all\'insù, e un mercato che è insieme monumento industriale e luogo dove si mangia ancora ogni giorno — e perché da qui parte la gita più classica della costa lettone, la spiaggia di Jūrmala.',
    cosaVedere: [
      'La Piazza del Duomo (Doma laukums) con la Cattedrale di Riga (Rīgas Doms), la chiesa più grande del Baltico, e il suo storico organo',
      'La Chiesa di San Pietro, con la piattaforma panoramica a 72 metri di altezza sulla guglia, la vista più alta sulla Città Vecchia e sul fiume Daugava',
      'La Casa delle Teste Nere (Melngalvju nams), la facciata rinascimentale più fotografata della piazza del municipio, ricostruita dopo la distruzione bellica',
      'Le Tre Sorelle (Trīs brāļi), il terzetto di case medievali e barocche su via Mazā Pils, tra gli edifici in pietra più antichi della città',
      'Il quartiere Art Nouveau, concentrato lungo Alberta iela, Elizabetes iela e Strēlnieku iela: centinaia di facciate decorate con maschere, volti scolpiti e motivi floreali, molte firmate dall\'architetto Mihails Eizenšteins, padre del regista Sergej Ėjzenštejn',
      'Il Mercato Centrale (Centrāltirgus), cinque padiglioni ricavati da hangar per dirigibili tedeschi della Prima guerra mondiale, aperto nel 1930 e allora il più grande e moderno d\'Europa, parte del sito UNESCO insieme alla Città Vecchia',
    ],
    cosaFare: [
      'Salire sulla torre della Chiesa di San Pietro per il panorama sulla Città Vecchia e sul Daugava',
      'Una passeggiata con il naso all\'insù lungo Alberta iela, cercando le facciate più elaborate del quartiere Art Nouveau',
      'Un giro tra i banchi del Mercato Centrale, tra i padiglioni di pesce, carne, latticini e prodotti dell\'orto, con soste per assaggiare specialità locali',
      'Una serata tra i bar e i ristoranti della Città Vecchia, con una sosta al Bar Skyline o su un altro rooftop per la vista sui tetti',
    ],
    doveDormire:
      'La Città Vecchia (Vecrīga) per avere tutto a piedi, compresa la vita notturna. Il quartiere Art Nouveau, appena fuori dalle mura verso nord, è un\'alternativa più tranquilla e ugualmente centrale, con la possibilità di dormire dentro un palazzo liberty.',
    doveMangiare:
      'Il pelēkie zirņi ar speķi (piselli grigi con pancetta) è il piatto invernale più identitario; il rupjmaize, il pane di segale nero, è alla base di molta cucina lettone, compreso il dolce rupjmaizes kārtojums a strati con panna e frutti di bosco; i banchi del Mercato Centrale restano il modo più economico e genuino di assaggiare prodotti locali, dal formaggio affumicato al pesce del Baltico.',
    comeArrivare:
      'Aeroporto Internazionale di Riga (RIX), il principale hub del Baltico, a circa 10 km dal centro: bus o tram in 20-30 minuti, oppure taxi/Bolt in pochi minuti. Collegamenti diretti stagionali o annuali da alcuni aeroporti italiani con vettori low-cost; altrimenti scalo su un hub europeo. Da Vilnius: bus (circa 4 ore, più compagnie tra cui Lux Express, molte corse al giorno).',
    comeSpostarsi:
      'Il centro storico si gira interamente a piedi. Tram, filobus e bus della rete Rīgas satiksme coprono il resto della città, con biglietti a tempo economici. Per Jūrmala: treno regionale dalla stazione centrale, circa 30 minuti, con partenze almeno ogni mezz\'ora.',
    periodoMigliore:
      'maggio-settembre per il clima mite e la possibilità di combinare la città con un bagno a Jūrmala in piena estate; giugno-agosto è la stagione più affollata; l\'inverno (novembre-marzo) è freddo e spesso ventoso, ma la Città Vecchia regge bene, con i mercatini di Natale a dicembre in Piazza del Duomo.',
    costi: 'città economica per gli standard dell\'Europa occidentale: ingresso alla torre di San Pietro 9€, cena normale 10-16€ a testa, treno per Jūrmala circa 2€ a tratta.',
    erroriDaEvitare: [
      'Limitare la visita alla sola Città Vecchia: il quartiere Art Nouveau appena fuori dalle mura è una parte altrettanto centrale dell\'identità architettonica di Riga, non un\'estensione facoltativa',
      'Andare al Mercato Centrale già dopo pranzo nel weekend: i banchi migliori si svuotano presto e l\'atmosfera del mattino, con i venditori locali, è la più autentica',
      'Programmare Jūrmala senza controllare il meteo: è una gita balneare, che ha senso soprattutto da giugno ad agosto',
      'Dare per scontato che il russo non serva: è ancora ampiamente parlato dalla consistente minoranza russofona della città, più dell\'inglese in alcuni contesti quotidiani fuori dal centro turistico',
    ],
    esperienzeSlugs: ['riga-art-nouveau-passeggiata', 'riga-mercato-centrale-tour'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'La Piazza del Duomo di Riga con la Cattedrale e le guglie della Città Vecchia al tramonto',
  },
  {
    slug: 'jurmala',
    paeseSlug: 'lettonia',
    ordine: 2,
    nome: 'Jūrmala',
    tipologia: ['mare', 'architettura', 'relax'],
    giorniConsigliati: 'mezza giornata, come gita da Riga',
    visitataPersonalmente: false,
    introduzione:
      'La città balneare storica della Lettonia, una striscia di circa 32 km di sabbia bianca finissima lungo il Golfo di Riga, a soli 20 km e mezz\'ora di treno dalla capitale. Dagli anni del dominio zarista fino all\'epoca sovietica, quando era la meta di villeggiatura dell\'élite dell\'URSS, Jūrmala ha accumulato centinaia di ville di legno in stile Art Nouveau e Art Déco, molte oggi restaurate come case private, hotel o piccoli musei.',
    percheAndarci:
      'Perché è la spiaggia più semplice da raggiungere da una capitale di questo itinerario, e perché non è solo mare: le vie residenziali dietro la spiaggia, punteggiate di ville di legno decorate, sono un museo diffuso di architettura balneare che racconta più di un secolo di storia lettone.',
    cosaVedere: [
      'La spiaggia di sabbia bianca che corre ininterrotta per circa 32 km, tra le più larghe e pulite del Baltico',
      'Jomas iela, la via pedonale commerciale di Majori, il cuore della cittadina, con negozi, caffè e gelaterie',
      'Le ville di legno Art Nouveau e Art Déco delle vie residenziali di Majori e Dzintari, molte con decorazioni intagliate a mano e verande vetrate',
      'La Dzintari Concert Hall, la sala da concerti all\'aperto tra i pini, sede storica di festival ed eventi estivi',
    ],
    cosaFare: [
      'Una lunga passeggiata sulla spiaggia, dalla stazione di Majori verso Dzintari o Bulduri',
      'Un giro tra le vie residenziali dietro Jomas iela, per guardare da fuori le ville di legno decorate',
      'Una sosta in uno dei caffè o ristoranti sul lungomare, aperti tutto l\'anno anche se più animati in estate',
    ],
    doveDormire: 'Si visita in mezza giornata da Riga: non è pensata come tappa con pernottamento a Jūrmala in questo itinerario, anche se resta una possibile estensione per chi vuole restare qualche giorno al mare.',
    doveMangiare: 'I ristoranti e i caffè lungo Jomas iela coprono cucina lettone e internazionale; in estate diversi chioschi sulla spiaggia servono pesce alla griglia e gelato.',
    comeArrivare: 'Da Riga: treno regionale dalla stazione centrale (Rīga Centrālā stacija) fino a Majori, circa 30 minuti, con partenze almeno ogni mezz\'ora.',
    comeSpostarsi: 'Il centro di Majori e la spiaggia si girano a piedi; per raggiungere Dzintari o le zone più estreme della città si può proseguire con lo stesso treno regionale, che ferma in più punti lungo la costa.',
    periodoMigliore: 'giugno-agosto per un vero bagno di mare; nelle mezze stagioni resta comunque piacevole per la passeggiata sulla spiaggia e tra le ville di legno, con meno folla.',
    costi: 'gita economica: biglietto del treno circa 2€ a tratta, ingresso alla spiaggia gratuito, pasto in un caffè del lungomare 8-15€.',
    erroriDaEvitare: [
      'Andarci fuori stagione aspettandosi la vita balneare dell\'estate: da ottobre a maggio la spiaggia è quasi deserta e molti locali chiudono',
      'Limitarsi alla sola spiaggia senza un giro tra le vie residenziali: le ville di legno decorate sono il motivo per cui Jūrmala non è "solo un\'altra spiaggia"',
      'Sottovalutare l\'acqua bassa e fresca del Golfo di Riga, ben diversa da un bagno mediterraneo',
    ],
    esperienzeSlugs: ['jurmala-spiaggia-ville-liberty'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Una villa di legno in stile Art Nouveau tra i pini di Jūrmala, con decorazioni intagliate e una veranda vetrata',
  },
]
