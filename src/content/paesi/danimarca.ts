import type { Paese } from '@/lib/types'

// La Danimarca entra nell'archivio come prima tappa di "Capitali nordiche",
// l'itinerario che unisce Copenaghen, Stoccolma e Oslo (src/content/viaggi/
// 60-capitali-nordiche.md). Nessuno ha ancora messo piede in Danimarca per
// conto di questo sito: la destinazione di Copenaghen resta visitataPersonalmente:
// false e senza il campo miaEsperienza, facoltativo apposta nel tipo Destinazione
// (vedi il commento sul tipo in src/lib/types.ts) — stesso trattamento già usato
// per la Polonia (src/content/paesi/polonia.ts) e per il Centro America
// (src/content/viaggi-dati/centro-america-itinerario.ts). Scheda di ricerca,
// non un diario: fatti verificabili, senza episodi in prima persona.
//
// tripPrincipaleSlug punta a 'capitali-nordiche': a differenza di Svezia e
// Norvegia, che restano ancorate ai loro viaggi natura già pubblicati
// (lapponia-svedese-abisko, lofoten-estate-2025/tromso), la Danimarca non ha
// altri viaggi e nasce direttamente con questo come tappa di apertura.

export const danimarca: Paese = {
  slug: 'danimarca',
  nome: 'Danimarca',
  continente: 'Europa',
  titolo: 'Danimarca: Copenaghen, la porta d\'ingresso a un giro delle capitali nordiche',
  descrizione:
    'Per ora l\'archivio copre una sola meta danese, ed è quella che conta davvero: Copenaghen, la città più bike-friendly d\'Europa, con i canali colorati di Nyhavn, i giardini storici di Tivoli, la Sirenetta sul lungomare e Christiania, la comunità autogestita che dal 1971 vive secondo regole proprie nel cuore della città. È anche la prima tappa di "Capitali nordiche", l\'itinerario che la unisce a Stoccolma e Oslo in un unico giro di capitali scandinave — tre paesi, tre lingue affini, tre valute diverse, nessuna delle quali è l\'euro.',
  periodoMigliore:
    'maggio-settembre per le giornate lunghe e il clima più mite, con giugno-agosto alta stagione (più caldo, più turisti, Tivoli negli orari estivi pieni); aprile e ottobre restano gestibili con meno folla; l\'inverno è freddo e buio presto, ma Tivoli riapre per i mercatini di Natale a fine novembre.',
  durataConsigliata: '3 giorni per Copenaghen da sola; è anche la prima tappa di un giro di 9 giorni con Stoccolma e Oslo (vedi l\'itinerario "Capitali nordiche")',
  budgetIndicativo:
    'tra le città più care d\'Europa: una birra al bar 7-11€, un pranzo semplice 12-20€, una cena in un ristorante di fascia media 30-45€ a persona. I musei e le attrazioni principali (Tivoli, battello sui canali) aggiungono facilmente 20-40€ al giorno a persona.',
  stileViaggio: ['città', 'design', 'gastronomia', 'bici'],
  scheda: {
    documenti:
      'Danimarca nell\'Unione Europea e nell\'area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi. La Groenlandia e le Isole Fær Øer, pur essendo territori danesi, restano fuori da Schengen e dall\'UE doganale: non riguardano un viaggio a Copenaghen, ma vale la pena saperlo per chi progetta un\'estensione.',
    valuta:
      'Corona danese (DKK), non l\'euro: la Danimarca ha un opt-out storico dall\'eurozona (referendum del 2000) e non ha intenzione di adottarlo. La corona è però agganciata all\'euro tramite l\'accordo ERM II con una banda di oscillazione molto stretta (indicativamente 1€ = 7,46 DKK, con variazioni minime) — la valuta più stabile delle tre capitali nordiche di questo giro, ma comunque non l\'euro: le carte estere pagano spesso una piccola commissione di cambio.',
    pagamenti:
      'Tra i paesi più cashless al mondo: carta e contactless funzionano ovunque, molti locali non accettano proprio i contanti e alcuni applicano un piccolo sovrapprezzo alle carte straniere. Non serve cambiare denaro prima di partire; un po\' di contante in DKK resta utile solo per casi eccezionali (alcuni mercatini, mance).',
    connettivita: 'Roaming UE incluso nelle tariffe italiane. Copertura 4G/5G eccellente in tutta Copenaghen, senza zone scoperte degne di nota.',
    salute: 'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto ottima e potabile ovunque, tra le migliori d\'Europa.',
    sicurezza:
      'Copenaghen è una delle capitali più sicure d\'Europa, con un rischio di criminalità violenta molto basso. L\'attenzione reale va rivolta alla bicicletta: le piste ciclabili sono separate e trafficate quanto le strade, e camminare o fermarsi su una pista ciclabile senza guardare è la causa più comune di incidenti (e di campanelli infuriati) per i turisti a piedi. A Christiania valgono le regole della comunità stessa ("have fun, don\'t run, no hard drugs, no guns, no violence"): l\'area storica di Pusher Street, dove per decenni si è venduta hashish alla luce del sole, è stata chiusa dalle autorità nel 2024 dopo un episodio di violenza, e oggi la vendita di stupefacenti resta comunque illegale in tutta la Danimarca, hashish compreso — non è un\'area extra-legale come talvolta viene raccontata. La fotografia è vietata nelle zone segnalate (l\'ex Pusher Street in particolare) e va evitata sui residenti e sulle loro case senza permesso: le regole sono affisse e rispettate rigorosamente dai residenti stessi.',
    trasportiInterni:
      'Rete capillare di metro (driverless, attiva 24 ore nei weekend), S-tog (treni suburbani) e bus, con biglietto integrato a zone o Rejsekort ricaricabile; il centro storico si gira comodamente anche a piedi o, più nello spirito locale, in bicicletta a noleggio. La Copenhagen Card include trasporti e ingressi a molte attrazioni, utile solo per un programma molto denso di musei.',
    costoVita:
      'Tra le capitali più costose d\'Europa: una birra al bar 7-11€ (in supermercato molto meno, 2-3€), un cappuccino 4,50-7€, un pasto economico (hot dog, panetteria, mercato) 7-20€, un pranzo in caffè 17-27€, una cena in un ristorante di fascia media 40-75€ per due persone a testa. Il costo, più che i singoli ingressi, si sente nella somma di pasti e trasporti giorno dopo giorno.',
    lingua: 'Danese. L\'inglese è parlato correntemente da quasi tutta la popolazione, specie a Copenaghen: comunicare non è mai un problema.',
    elettricita: '230V, 50Hz, prese di tipo C e K: le spine italiane di tipo C (due poli, senza terra) entrano senza adattatore; quelle di tipo F o con terra a tre poli possono richiederne uno.',
    fusoOrario: 'UTC+1 (CET), stessa ora dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Clima oceanico temperato, mite per la latitudine grazie al mare. Estati (giugno-agosto) fresche e piacevoli, raramente sopra i 22-25°C, con giornate molto lunghe; inverni (dicembre-febbraio) freddi, spesso intorno o sotto lo zero, con buio che scende presto nel pomeriggio e vento che si fa sentire più del termometro. Piove con una certa regolarità tutto l\'anno: un k-way leggero non è mai fuori posto, in nessuna stagione.',
    festivita:
      'Il 5 giugno (Festa della Costituzione) è semi-festivo, con molti negozi chiusi nel pomeriggio. La Pasqua porta diversi giorni di chiusura per uffici e alcuni negozi. A dicembre Tivoli e il centro si vestono per i mercatini di Natale, tra le cose più suggestive della stagione fredda, con relativo affollamento nei weekend.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia si trova a Copenaghen.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Le case colorate del XVII secolo lungo il canale di Nyhavn a Copenaghen, con le barche ormeggiate al molo',
  tripPrincipaleSlug: 'capitali-nordiche',
}
