import type { Paese } from '@/lib/types'

// L'Austria entra nell'archivio con un solo itinerario: un weekend lungo a
// Vienna (3-4 giorni), nello stesso filone "weekend lunghi in Europa" già
// usato per Roma, Firenze, Venezia, Parigi, Cracovia e Praga. Nessuno ha
// ancora messo piede a Vienna per conto di questo sito: la destinazione di
// Vienna resta visitataPersonalmente: false e senza il campo miaEsperienza,
// che nel tipo Destinazione è facoltativo apposta — se assente, la UI mostra
// un placeholder editoriale invece di un ricordo inventato (vedi il commento
// sul tipo in src/lib/types.ts). Questa è quindi scheda di ricerca, non un
// diario: fatti verificabili, senza episodi in prima persona.

export const austria: Paese = {
  slug: 'austria',
  nome: 'Austria',
  continente: 'Europa',
  titolo: 'Austria: Vienna in un weekend lungo, tra caffè storici, palazzi imperiali e Klimt',
  descrizione:
    'Per ora l\'archivio copre una sola meta austriaca, la più naturale per iniziare: Vienna, la capitale che per secoli è stata il cuore dell\'Impero asburgico e che oggi conserva quell\'eredità in un centro storico compatto — l\'Innere Stadt Patrimonio UNESCO, la reggia di Schönbrunn, il palazzo del Belvedere con "Il Bacio" di Klimt — insieme a una tradizione di caffè storici riconosciuta dall\'UNESCO come patrimonio culturale immateriale. A differenza di Praga o Cracovia, Vienna è nell\'eurozona: un fattore pratico che semplifica non poco un weekend qui rispetto alle altre capitali dell\'Europa centrale già coperte da questo archivio.',
  periodoMigliore:
    'aprile-maggio e settembre-ottobre, con clima mite e senza il pieno dell\'alta stagione. Giugno-luglio-agosto sono caldi e affollati nei punti più turistici (Schönbrunn e Stephansplatz in primis); novembre-marzo è freddo ma la città regge bene anche d\'inverno, con i mercatini di Natale a dicembre tra i più noti d\'Europa.',
  durataConsigliata:
    '3-4 giorni per l\'Innere Stadt, Schönbrunn, il Belvedere e il Prater; non è pensata per essere estesa a un tour di tutto il paese.',
  budgetIndicativo:
    'nella media europea, più alto di Praga e Cracovia ma inferiore a molte capitali dell\'Europa occidentale: i musei principali (Schönbrunn, Belvedere, Hofburg) hanno biglietti sui 20-25€, i trasporti pubblici sono economici ed efficienti, e i biglietti in piedi dell\'Opera di Stato (a partire da circa 13€) restano uno dei modi più economici al mondo per assistere a uno spettacolo lirico di alto livello.',
  stileViaggio: ['città', 'arte', 'musica', 'gastronomia'],
  scheda: {
    documenti:
      'Austria nell\'Unione Europea e nell\'area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Euro. A differenza della Repubblica Ceca e della Polonia, già coperte da questo archivio, l\'Austria è nell\'eurozona: nessuna necessità di cambio valuta né rischio di conversioni penalizzanti nei ristoranti — un vantaggio pratico non da poco per chi arriva dall\'Italia.',
    pagamenti:
      'Carte e contactless funzionano quasi ovunque, compresi i trasporti pubblici. Il contante resta utile in alcuni dei caffè storici più tradizionali e per le mance, che a Vienna si arrotondano più che percentualizzare (indicativamente il 5-10%).',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali, senza bisogno di una SIM locale. Copertura 4G/5G eccellente in tutta la città.',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto tra le più pulite d\'Europa, potabile ovunque e spesso servita gratuitamente nei ristoranti su richiesta.',
    sicurezza:
      'Vienna è una delle città più sicure al mondo per la criminalità violenta, stabilmente ai vertici di classifiche internazionali come il Safe Cities Index. Il rischio reale è quello dei borseggi: la città registra diverse migliaia di casi l\'anno, concentrati soprattutto sulla **linea U3 della metropolitana** (in particolare tra Stephansplatz e Westbahnhof), nei vagoni affollati nelle ore di punta e nei luoghi più turistici come **Stephansplatz, il Naschmarkt nei weekend e le stazioni principali**. Circola anche qui, come in altre capitali europee, la truffa dei **finti agenti di polizia** che chiedono di controllare documenti o borsello: un vero agente non lo fa per strada senza motivo. Per il resto, le normali accortezze contro i borseggi in luoghi affollati bastano.',
    trasportiInterni:
      'Rete di metropolitana (U-Bahn, cinque linee), tram e bus tra le più efficienti ed estese d\'Europa, gestita da Wiener Linien. Biglietto singolo attorno ai 2,40€, giornaliero (24 ore) attorno ai 6€, 48 ore attorno ai 14€: per un weekend di tre-quattro giorni conviene calcolare in anticipo se conviene di più il biglietto plurigiorno o i singoli. Centro storico comunque percorribile a piedi in gran parte. Non serve un\'auto a noleggio.',
    costoVita: 'Nella media dell\'Europa occidentale: un caffè in un caffè storico del centro 5-7€, un pasto normale 15-25€ a testa, i biglietti in piedi dell\'Opera di Stato a partire da circa 13€.',
    lingua: 'Tedesco, con un accento e alcune espressioni tipicamente austriache diverse dal tedesco standard. L\'inglese è molto diffuso nel centro, negli hotel e tra i più giovani.',
    elettricita: '230V, 50Hz, prese di tipo F (Schuko): le spine italiane a due poli (tipo C) entrano quasi sempre; quelle a tre poli con messa a terra possono richiedere un adattatore.',
    fusoOrario: 'UTC+1 (CET), lo stesso fuso orario dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Continentale con influenze alpine. Inverni freddi, spesso con neve, da dicembre a febbraio; estati miti-calde da giugno ad agosto, con luglio-agosto anche il picco di affollamento turistico. Primavera e autunno sono le stagioni più equilibrate per camminare tutto il giorno.',
    festivita:
      'La quasi totalità dei negozi, supermercati compresi, **è chiusa la domenica per legge** (Ladenschlussgesetz), con le sole eccezioni dei punti vendita nelle stazioni ferroviarie, in aeroporto e delle farmacie di turno: la spesa e gli acquisti vanno organizzati nei giorni feriali o al sabato. A dicembre i mercatini di Natale, in particolare quello davanti al Municipio (Rathausplatz), sono tra i più noti d\'Europa. Il 26 ottobre è la Festa nazionale austriaca.',
    emergenze: 'Numero unico europeo 112. In alternativa: 133 polizia, 122 vigili del fuoco, 144 ambulanza. L\'Ambasciata d\'Italia è a Vienna.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La facciata barocca del Palazzo del Belvedere a Vienna con i giardini e le fontane in primo piano',
  tripPrincipaleSlug: 'vienna-weekend',
}
