import type { Paese } from '@/lib/types'

// Primo ingresso dei Paesi Bassi nell'archivio: un solo itinerario, un
// weekend lungo ad Amsterdam (3-4 giorni), nello stesso filone "weekend
// lunghi in Europa" di Cracovia, Parigi, Roma. Non è una guida al paese
// intero: Rotterdam, L'Aia e il resto dei Paesi Bassi restano fuori di
// proposito.
//
// Nessuno ha ancora messo piede ad Amsterdam per conto di questo sito: la
// destinazione resta visitataPersonalmente: false e senza il campo
// miaEsperienza, facoltativo nel tipo Destinazione apposta per questo caso
// (la UI mostra un placeholder editoriale invece di un ricordo inventato,
// vedi src/lib/types.ts e lo stesso trattamento in src/content/paesi/polonia.ts).
// Scheda di ricerca, non un diario: fatti verificabili, senza episodi in
// prima persona.

export const paesiBassi: Paese = {
  slug: 'paesi-bassi',
  nome: 'Paesi Bassi',
  continente: 'Europa',
  titolo: 'Paesi Bassi: Amsterdam in un weekend lungo, tra canali, musei e due ruote',
  descrizione:
    'Per ora l\'archivio copre una sola meta olandese, la più ovvia per iniziare: Amsterdam, la capitale che si gira quasi solo a piedi o in bicicletta, con l\'anello di canali del Seicento patrimonio UNESCO, i grandi musei (Rijksmuseum, Van Gogh Museum), il quartiere di Jordaan e un luogo che chiede una visita informata più che turistica: la Casa di Anna Frank. Rotterdam, L\'Aia e il resto del paese non sono qui: un weekend di tre-quattro giorni basta a malapena per Amsterdam stessa.',
  periodoMigliore:
    'aprile-maggio (tulipani e clima mite) e settembre-ottobre, con meno folla rispetto alla piena estate. Giugno-agosto è alta stagione, calda per gli standard olandesi e molto affollata sui canali e ai grandi musei; novembre-marzo è freddo, spesso piovoso e ventoso, ma con code più corte e i mercatini di Natale a dicembre.',
  durataConsigliata:
    '3-4 giorni per il centro storico, l\'anello dei canali e i musei principali; non è pensata per estendersi al resto dei Paesi Bassi.',
  budgetIndicativo:
    'Amsterdam è una delle capitali più care d\'Europa occidentale, in linea con Parigi o Londra. Le voci fisse più rilevanti sono i biglietti dei musei maggiori (Rijksmuseum e Van Gogh Museum, circa 20-25€ l\'uno) e la Casa di Anna Frank (circa 16€, da prenotare con largo anticipo), oltre al noleggio bici (10-15€ al giorno) e a una crociera sui canali (15-20€).',
  stileViaggio: ['città', 'arte', 'storia', 'cicloturismo'],
  scheda: {
    documenti:
      'Paesi Bassi nell\'Unione Europea e nell\'area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Euro (€), come l\'Italia: nessun cambio necessario.',
    pagamenti:
      'Paese tra i più avanzati al mondo sui pagamenti digitali, al punto opposto rispetto a molte mete turistiche: moltissimi negozi, bar, ristoranti e persino alcuni mercatini accettano solo carta o contactless, e un certo numero non accetta affatto contanti. È la sorpresa più comune per chi arriva pensando "meglio avere sempre un po\' di cash": conviene invece assicurarsi che la propria carta funzioni senza problemi (Maestro/V PAY sono diffuse quanto Visa/Mastercard) e non contare sui contanti come piano B.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. Copertura 4G/5G capillare in tutto il paese, Amsterdam compresa.',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto perfettamente potabile e di buona qualità in tutti i Paesi Bassi.',
    sicurezza:
      'Amsterdam è una città sicura per gli standard europei, ma il centro storico e in particolare la zona intorno alla Stazione Centrale, Dam Square e il Quartiere a Luci Rosse restano tra le più battute d\'Europa dai borseggiatori, soprattutto su tram affollati, in coda ai musei e tra la folla serale. Il rischio più specifico della città è però un altro: i ciclisti. Amsterdam ha più biciclette che abitanti e le piste ciclabili hanno la priorità reale, non solo teorica — camminare o fermarsi distrattamente su una pista ciclabile (spesso segnata in asfalto rosso, ben distinta dal marciapiede) è la causa più comune di incidenti e discussioni con i turisti, che semplicemente non si aspettano il traffico di bici silenzioso e veloce.',
    trasportiInterni:
      'Il centro si gira benissimo a piedi, ma il modo più naturale di spostarsi è la bicicletta, con noleggi diffusi ovunque (10-15€ al giorno). In alternativa, tram, autobus e metro GVB coprono la città con biglietti a tempo o la OV-chipkaart contactless (si può pagare direttamente con carta di credito/debito contactless sui mezzi). Non serve un\'auto: il traffico privato nel centro è scoraggiato e il parcheggio è caro e scarso.',
    costoVita: 'Alto per gli standard europei: un pasto normale al ristorante parte da 20-25€ a testa, una birra al bar 5-6€, un caffè 3-4€.',
    lingua: 'Olandese. L\'inglese è parlato in modo diffuso e a un livello altissimo da praticamente tutta la popolazione, turismo compreso: è probabilmente il paese europeo dove è meno necessario conoscere anche solo qualche parola della lingua locale.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi, quelle a tre poli con messa a terra possono richiedere un adattatore.',
    fusoOrario: 'UTC+1 (CET), lo stesso fuso orario dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Oceanico, mite ma instabile tutto l\'anno: piove spesso, anche d\'estate, e il vento (Amsterdam è vicina al mare) si fa sentire soprattutto sui canali e in bicicletta. Le temperature raramente sono estreme in un senso o nell\'altro, ma un k-way o un ombrello compatto sono utili in ogni stagione.',
    festivita:
      'Il 27 aprile, Koningsdag (Festa del Re), è l\'evento cittadino più grande dell\'anno: Amsterdam si veste d\'arancione, i canali si riempiono di barche e il centro diventa un unico grande mercatino/festa di strada — città bellissima da vivere ma estremamente affollata, con alloggi che vanno prenotati con largo anticipo. A dicembre mercatini di Natale e luci lungo i canali (Amsterdam Light Festival, da fine novembre a gennaio).',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è all\'Aia; a Amsterdam opera un Consolato Generale d\'Italia.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Case a schiera lungo un canale del centro storico di Amsterdam, con biciclette parcheggiate sul ponte in primo piano',
  tripPrincipaleSlug: 'amsterdam-weekend',
}
