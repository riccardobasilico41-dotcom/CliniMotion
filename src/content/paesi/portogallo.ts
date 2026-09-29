import type { Paese } from '@/lib/types'

// Primo ingresso del Portogallo nell'archivio: un solo itinerario, un
// weekend lungo a Lisbona con gita di un giorno a Sintra (4 giorni), stesso
// filone "weekend lunghi in Europa" di Cracovia, Parigi, Amsterdam. Porto e
// il resto del paese restano fuori di proposito: meritano un itinerario a sé.
//
// Nessuno ha ancora messo piede a Lisbona per conto di questo sito: le
// destinazioni (Lisbona e Sintra, voci separate) restano entrambe
// visitataPersonalmente: false e senza il campo miaEsperienza, facoltativo
// nel tipo Destinazione apposta per questo caso (vedi src/lib/types.ts e lo
// stesso trattamento in src/content/paesi/polonia.ts). Scheda di ricerca,
// non un diario: fatti verificabili, senza episodi in prima persona.

export const portogallo: Paese = {
  slug: 'portogallo',
  nome: 'Portogallo',
  continente: 'Europa',
  titolo: 'Portogallo: Lisbona e Sintra in quattro giorni, tra colline, fado e palazzi da favola',
  descrizione:
    'Per ora l\'archivio copre una sola meta portoghese, la più naturale per iniziare: Lisbona, la capitale costruita su sette colline affacciata sul Tago, con il tram 28 che attraversa l\'Alfama, il monastero di Jerónimos e la Torre di Belém a ricordare l\'epoca delle scoperte, e a meno di un\'ora di treno Sintra, la cittadina di palazzi romantici tra cui il Palácio da Pena, tanto fotogenica quanto affollata. Porto e il resto del Portogallo non sono qui: quattro giorni bastano appena per Lisbona e la sua gita fuori porta più classica.',
  periodoMigliore:
    'aprile-maggio e settembre-ottobre, con clima mite, meno turisti e temperature più gestibili per camminare su e giù per le colline della città. Giugno-agosto è alta stagione: caldo intenso, tram 28 e Sintra al limite della capienza, code lunghe ovunque; novembre-marzo è mite per gli standard europei ma piovoso, con giornate più corte.',
  durataConsigliata:
    '4 giorni, di cui uno dedicato interamente alla gita a Sintra: non è pensata per estendersi a Porto o al resto del Portogallo.',
  budgetIndicativo:
    'Lisbona resta tra le capitali più economiche dell\'Europa occidentale, anche se i prezzi sono saliti negli ultimi anni per la pressione turistica. Le voci fisse sono il biglietto combinato di Sintra (Palácio da Pena, circa 20-25€, e Quinta da Regaleira, circa 15€) e il treno da Lisbona (circa 5€ a tratta).',
  stileViaggio: ['città', 'storia', 'mare', 'gastronomia'],
  scheda: {
    documenti:
      'Portogallo nell\'Unione Europea e nell\'area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Euro (€), come l\'Italia: nessun cambio necessario.',
    pagamenti:
      'Carte e contactless funzionano ovunque, anche nei piccoli negozi e chioschi del centro; il contante resta comunque comodo per i venditori ambulanti e i piccoli caffè di quartiere.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. Copertura 4G/5G buona in città; può calare un po\' nelle zone più collinari e boscose intorno a Sintra.',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile a Lisbona.',
    sicurezza:
      'Lisbona è una città sicura per gli standard europei, ma soffre di borseggi mirati proprio nei punti più turistici: il tram 28, spesso stipato all\'inverosimile, è il bersaglio più segnalato in assoluto, insieme alle stazioni della funicolare (Elevador da Glória, Elevador da Bica) e alle zone di Baixa, Chiado e Alfama nelle ore di punta serali. La regola pratica è la solita — borsa davanti, tasche chiuse, attenzione extra sul tram 28 — ma qui vale la pena ripeterla perché è lo scenario più frequente in assoluto.',
    trasportiInterni:
      'Il centro si visita bene a piedi, ma Lisbona è una città di sette colline e le salite sono reali e frequenti: tram storici (il 28 su tutti), funicolari (elevadores) e un ascensore panoramico (l\'Elevador de Santa Justa) esistono proprio per questo, oltre a metro, autobus e treni suburbani gestiti in gran parte con la carta contactless Viva Viagem/Navegante. Per Sintra: treno regionale dalla stazione di Rossio, circa 40 minuti, il modo di gran lunga più semplice ed economico. Non serve un\'auto a noleggio per un soggiorno concentrato su Lisbona e Sintra.',
    costoVita: 'Medio-basso per gli standard dell\'Europa occidentale: un pranzo semplice 10-12€, una cena normale 15-20€ a testa, un caffè (bica) e un pastel de nata insieme spesso sotto i 3€.',
    lingua: 'Portoghese. L\'inglese è diffuso nel centro storico, negli hotel e tra i più giovani; qualche parola di portoghese (bom dia, obrigado/a) viene sempre apprezzata.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi, quelle a tre poli con messa a terra possono richiedere un adattatore.',
    fusoOrario: 'UTC+0 (WET), un\'ora indietro rispetto all\'Italia tutto l\'anno, cambio dell\'ora legale compreso: alle 12:00 in Italia sono le 11:00 a Lisbona.',
    clima:
      'Mediterraneo con influenza atlantica: estati calde e asciutte da giugno ad agosto, ma temperate dal vento e meno afose che nel Mediterraneo interno; inverni miti e piovosi da novembre a marzo, raramente sotto i 5°C. Primavera e autunno restano le stagioni più equilibrate per camminare tutto il giorno tra le colline.',
    festivita:
      'Giugno è il mese delle Festas de Lisboa, con il culmine nella notte di Santo António (12-13 giugno): sardine alla griglia per strada, musica e feste di quartiere in tutta l\'Alfama, bellissime da vivere ma con la città molto più affollata del solito. Il 10 giugno è la Festa nazionale del Portogallo.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Lisbona stessa.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Vista dell\'Alfama a Lisbona dall\'alto, con i tetti rossi digradanti verso il fiume Tago e un tram storico giallo in primo piano',
  tripPrincipaleSlug: 'lisbona-weekend',
}
