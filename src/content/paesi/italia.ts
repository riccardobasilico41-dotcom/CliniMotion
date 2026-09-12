import type { Paese } from '@/lib/types'

// L\'Italia è organizzata per temi invece che per regioni: montagna estiva,
// sci, grandi città, isole, Italia inesplorata e rotte del vino. È l\'unico
// Paese dell\'archivio in cui le "destinazioni" sono in parte collezioni
// tematiche, perché è l\'unico che si conosce abbastanza bene da poterlo
// raccontare per criteri di scelta invece che per tappe.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario:
// vanno riletti e sostituiti con i tuoi, che qui più che altrove esistono
// davvero. Nessun nome di hotel, rifugio, ristorante o cantina è stato
// inventato.
// Prezzi, contingentamenti e regole di accesso (Venezia, Tre Cime, Braies,
// Pompei, Colosseo) cambiano ogni stagione: vanno riverificati.

export const italia: Paese = {
  slug: 'italia',
  nome: 'Italia',
  continente: 'Europa',
  titolo: 'Italia: sei modi di attraversarla, e nessuno la esaurisce',
  descrizione:
    'Il paese che si conosce meglio e che si visita peggio, perché quando ce l\'hai in casa lo rimandi. Ha più siti UNESCO di chiunque altro al mondo, un arco alpino con la catena dolomitica dichiarata patrimonio dell\'umanità per ragioni geologiche, ottomila chilometri di costa con due isole grandi come nazioni, quattrocento denominazioni di vino, e interi pezzi di Appennino dove non passa nessuno. Questa sezione è organizzata per temi e non per regioni: montagna d\'estate, sci, grandi città, isole, Italia inesplorata e rotte del vino — perché il modo più utile di raccontarla non è elencare cosa c\'è, ma aiutare a scegliere.',
  periodoMigliore:
    'dipende interamente da cosa si va a fare, ed è la ragione per cui questa sezione è divisa per temi. Le città d\'arte danno il meglio da ottobre a marzo, quando non ci si muore di caldo e le code si accorciano; le Dolomiti d\'estate vanno da fine giugno a metà settembre, quando i rifugi sono aperti; lo sci da dicembre a inizio aprile, con marzo come mese migliore per neve e luce; le isole da maggio a giugno e a settembre, evitando agosto; le rotte del vino in vendemmia, tra fine agosto e ottobre. L\'unica regola valida ovunque: **agosto va evitato quasi dappertutto**, perché è il mese in cui si sposta tutto il paese insieme.',
  durataConsigliata:
    'un fine settimana lungo per una grande città, 5-7 giorni per una settimana bianca o per un trekking in Dolomiti, 10-12 giorni per la Sicilia o per una rotta del vino fatta con calma. Non esiste un "giro d\'Italia" sensato sotto le tre settimane, e anche allora si sceglie.',
  budgetIndicativo:
    'enormemente variabile, e la variabile principale è il periodo. Una settimana bianca in Dolomiti in alta stagione costa quanto due settimane in sud-est asiatico; le stesse piste a metà gennaio o a fine marzo costano il quaranta per cento in meno. Le città d\'arte fuori stagione sono accessibili, in primavera no. L\'Italia inesplorata, invece, è economica sempre: nell\'Appennino interno si mangia e si dorme con cifre che altrove non esistono più.',
  stileViaggio: ['montagna', 'sci', 'città d\'arte', 'isole', 'enogastronomia'],
  scheda: {
    documenti:
      'Carta d\'identità per i cittadini UE, passaporto per gli altri. Nessuna formalità. L\'unica cosa che somiglia a una tassa d\'ingresso è il **contributo di accesso di Venezia**, che nel 2026 si è applicato in 60 giornate tra aprile e luglio per chi entra in città in giornata senza pernottare: 5 euro pagando con almeno quattro giorni d\'anticipo, 10 euro sotto quella soglia. La sperimentazione va riverificata ogni anno perché cambia calendario e condizioni.',
    valuta: 'Euro. Nessun cambio da fare, ovviamente, ma vale la pena ricordare che in molti rifugi alpini e in diversi agriturismi dell\'interno il bancomat non c\'è e la connessione nemmeno.',
    pagamenti:
      'Carte accettate ovunque per legge, contactless diffusissimo. Le eccezioni pratiche sono due e si incontrano proprio nei posti migliori: i **rifugi in quota**, dove spesso si paga solo in contanti perché non c\'è linea, e i piccoli produttori di vino e le trattorie di paese nell\'Appennino. Contanti nello zaino per la montagna, sempre.',
    connettivita:
      'Copertura ottima nelle città e lungo le direttrici principali, con buchi reali in due contesti: l\'alta montagna, dove il segnale è a chiazze e nei rifugi spesso manca del tutto, e certe valli interne dell\'Appennino centro-meridionale. Le mappe offline sono una precauzione seria per chi cammina, non un dettaglio.',
    salute:
      'Sanità pubblica di buon livello, tessera sanitaria europea valida per i cittadini UE. Per la montagna vale un discorso a parte: il **soccorso alpino in Italia è a pagamento** e in diverse regioni i costi di un intervento con elicottero sono a carico di chi lo chiama, con cifre che arrivano a migliaia di euro. Un\'assicurazione che copra il soccorso in montagna costa pochi euro l\'anno ed è la spesa più sensata di tutta la sezione — le tessere CAI la includono.',
    sicurezza:
      'Paese sicuro, con i rischi concentrati su borseggi e truffe nelle zone turistiche delle grandi città — stazioni di Roma e Milano, Rialto e San Marco a Venezia, i mezzi pubblici affollati. Nelle città del sud vale un\'attenzione in più agli oggetti in vista. Il rischio più sottovalutato non è criminale ma ambientale: in montagna i temporali estivi pomeridiani sono violenti e regolari, e ogni anno provocano incidenti a chi parte tardi. La regola alpina è banale e si ignora sempre: si parte presto e si è al rifugio prima delle due.',
    trasportiInterni:
      'L\'alta velocità ferroviaria è eccellente sull\'asse Torino-Milano-Bologna-Firenze-Roma-Napoli-Salerno, con due operatori in concorrenza e prezzi che crollano prenotando con settimane di anticipo. Fuori da quell\'asse la rete regionale è molto più lenta e irregolare, ed è il motivo per cui **per le isole, l\'Appennino e le rotte del vino serve l\'auto**. I traghetti per Sicilia e Sardegna vanno prenotati con mesi di anticipo per luglio e agosto se si imbarca il mezzo. In montagna d\'inverno le catene o le gomme invernali sono obbligatorie per legge su gran parte della rete, con date che variano per regione.',
    costoVita:
      'Due paesi diversi a seconda di dove e quando. Nelle città d\'arte in alta stagione e nelle località alpine a Natale e Capodanno i prezzi sono tra i più alti d\'Europa; nell\'Italia interna, nello stesso momento, si mangia un pasto completo con vino per venti euro e si dorme in agriturismo per cinquanta. Lo scarto tra le due Italie è la cosa più utile da sapere per costruire un viaggio.',
    lingua:
      'Italiano, con dialetti che in molte zone sono lingue vere e vengono usati quotidianamente — e in Alto Adige il tedesco è maggioritario, con toponimi doppi e un bilinguismo ufficiale che confonde chi arriva. L\'inglese è diffuso nelle zone turistiche e molto meno nell\'Italia interna, che è esattamente la parte più interessante.',
    elettricita: '230V, 50Hz, prese di tipo L (le italiane a tre poli in linea), C e in crescita F (schuko): nelle strutture nuove le prese schuko sono ormai la norma.',
    fusoOrario: 'UTC+1, UTC+2 in ora legale.',
    clima:
      'Non esiste un clima italiano. L\'arco alpino ha inverni lunghi e nevosi ed estati brevi, con i rifugi aperti solo da fine giugno a metà o fine settembre. La pianura padana ha inverni umidi e nebbiosi ed estati afose. Le coste tirreniche e adriatiche hanno un clima mediterraneo, con estati sempre più torride — le ondate di calore di luglio e agosto rendono le città d\'arte faticose e in certi casi rischiose. Il sud e le isole hanno estati lunghissime e inverni miti, e sono la scelta giusta di aprile, maggio, ottobre.',
    festivita:
      '**Agosto è il tema centrale**: nella settimana di Ferragosto il paese si sposta in massa verso il mare e la montagna, i prezzi triplicano, le strade si bloccano e molte attività delle città chiudono. Il periodo tra Natale e l\'Epifania fa lo stesso sulla neve. Il ponte del 25 aprile-1° maggio e quello del 2 giugno riempiono le città d\'arte. La Settimana Santa muove il sud. In compenso ogni paese ha la sua festa patronale, e nell\'Italia interna sono ancora l\'evento più vivo dell\'anno.',
    emergenze: 'Numero unico europeo 112. Soccorso alpino attraverso il 112, specificando la posizione: le app che trasmettono le coordinate esatte sono utili quanto un\'assicurazione.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Le cime delle Dolomiti al tramonto con l\'enrosadira, Italia',
  tripPrincipaleSlug: 'dolomiti-estate',
}
