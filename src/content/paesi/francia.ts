import type { Paese } from '@/lib/types'

// Come l'Italia, la Francia è organizzata per temi e per regioni-carattere
// invece che per divisioni amministrative: Costa Azzurra, Parigi, Normandia
// e Bretagna, Loira, Bordeaux, Provenza e Camargue, Occitania, le rotte dei
// vini, lo sci e la montagna d'estate.
// La Costa Azzurra è l'unica sezione dell'archivio scritta da dentro: due
// anni vissuti ad Antibes. I campi miaEsperienza di quella destinazione e
// delle esperienze collegate vanno riletti e sostituiti con i ricordi veri,
// che qui esistono davvero; altrove restano bozze scritte da Claude.
// Nessun nome di hotel, ristorante, operatore, rifugio o domaine è stato
// inventato.
// Prezzi, contingentamenti e regole di accesso (Louvre, Mont-Saint-Michel,
// Calanques, Crit'Air, Bordeaux) cambiano ogni stagione: vanno riverificati.

export const francia: Paese = {
  slug: 'francia',
  nome: 'Francia',
  continente: 'Europa',
  titolo: 'Francia: il paese più visitato del mondo, e quasi sempre nello stesso punto',
  descrizione:
    'È da decenni la destinazione turistica più visitata del pianeta, e la statistica nasconde il fatto più interessante: la stragrande maggioranza di quei visitatori si concentra su Parigi, sulla Costa Azzurra e su una manciata di castelli. Tolto quello, la Francia è un paese enorme e sorprendentemente vuoto — il più esteso dell\'Unione Europea — con quattro climi, una costa atlantica che non somiglia in niente a quella mediterranea, il massiccio del Monte Bianco, la più alta densità di denominazioni vinicole al mondo e interi dipartimenti dove il turismo internazionale semplicemente non arriva. Questa sezione è organizzata per temi e per regioni-carattere, non per divisioni amministrative, perché il modo utile di raccontarla non è elencare cosa c\'è ma aiutare a scegliere tra cose che si assomigliano solo sulla carta.',
  periodoMigliore:
    'dipende dalla parte di Francia, e la differenza è più forte che in Italia. **Parigi** dà il meglio da aprile a giugno e a settembre-ottobre, con l\'inverno freddo e umido ma libero dalle code. La **Costa Azzurra** va da maggio a giugno e da metà settembre a ottobre: luglio e agosto sono saturi, cari e bloccati nel traffico, e l\'entroterra in quei mesi è l\'unica via d\'uscita. **Normandia e Bretagna** funzionano da maggio a settembre, con il meteo che resta una variabile in ogni mese dell\'anno. La **Loira** è primaverile e autunnale. La **Provenza** ha la finestra più stretta di tutte se si va per la lavanda, che fiorisce indicativamente **da fine giugno a metà luglio** e viene tagliata subito dopo. Le **rotte dei vini** danno il meglio in vendemmia, tra fine agosto e ottobre. Lo **sci** da fine dicembre a inizio aprile. La **montagna d\'estate** da metà giugno a metà settembre, con i rifugi aperti. La regola che vale ovunque: **agosto è il mese in cui si sposta tutta la Francia insieme**, e in cui mezza Parigi chiude.',
  durataConsigliata:
    'un lungo fine settimana per Parigi (che però ne chiede cinque), 7-10 giorni per la Costa Azzurra usandola come base, una settimana per la Loira o per Bordeaux con i suoi vigneti, due settimane per Normandia e Bretagna insieme o per una rotta dei vini fatta con calma. Non esiste un "giro di Francia" sensato: il paese è troppo grande e le sue regioni troppo diverse. Si sceglie un tema e lo si fa bene.',
  budgetIndicativo:
    'alto, con Parigi e la Costa Azzurra in alta stagione tra le zone più care d\'Europa e il resto del paese su livelli molto più umani. La leva più efficace è il pranzo: quasi ovunque, il **menù del giorno a mezzogiorno** costa una frazione della stessa cucina servita la sera, ed è il modo in cui i francesi mangiano bene senza svenarsi. Le altre due leve sono i treni prenotati con mesi di anticipo, dove il prezzo può dividersi per tre, e l\'evitare la settimana di Ferragosto e le vacanze scolastiche invernali.',
  stileViaggio: ['città d\'arte', 'mare', 'enogastronomia', 'montagna', 'sci'],
  scheda: {
    documenti:
      'Carta d\'identità per i cittadini UE, passaporto per gli altri. Nessuna formalità di ingresso. L\'unica cosa che somiglia a un adempimento è la **vignetta Crit\'Air** per chi arriva in auto: vedi la voce sui trasporti interni, perché è la sorpresa più costosa del viaggio.',
    valuta: 'Euro. Nessun cambio da fare.',
    pagamenti:
      'Carte accettate quasi ovunque e contactless diffusissimo, con tre eccezioni pratiche che si incontrano spesso: **molti piccoli esercizi applicano un minimo di spesa per il pagamento con carta** (di solito intorno ai dieci euro) ed è indicato alla cassa; **i mercati di paese, quelli veri, funzionano a contanti**; e **American Express è accettata molto meno che in Italia**. Contanti nel portafoglio per i mercati e per i rifugi di montagna.',
    connettivita:
      'Copertura ottima nelle città e lungo le direttrici principali. I buchi reali sono in alta montagna, nel Massiccio Centrale e in certe zone interne dell\'Occitania. Le mappe offline restano una precauzione seria per chi cammina.',
    salute:
      'Sanità di ottimo livello, tessera sanitaria europea valida per i cittadini UE. Sul soccorso in montagna vale una distinzione che sorprende chi arriva dall\'Italia: **il soccorso in montagna effettuato dai reparti pubblici — PGHM e CRS — è in linea di principio gratuito in Francia**, mentre **il soccorso sulle piste da sci ("secours sur pistes") è a pagamento** e a carico di chi lo riceve, con tariffe fissate dai comuni che per un intervento fuori pista o in quota arrivano a cifre molto alte. Le assicurazioni vendute insieme allo skipass coprono proprio quella voce e costano pochi euro al giorno: è la spesa più sensata della settimana bianca.',
    sicurezza:
      'Paese sicuro, con i rischi concentrati su borseggi e destrezza nelle zone turistiche: a Parigi la metropolitana nelle ore di punta, gli assi Châtelet-Les Halles, Gare du Nord, Montmartre e Trocadéro, e le trappole classiche del "gioco delle tre carte" e delle petizioni da firmare sotto la Tour Eiffel. Attenzione analoga a Marsiglia e nelle stazioni di Nizza. Il rischio più sottovalutato non è criminale: sulla costa mediterranea sono gli **incendi estivi**, che ogni anno chiudono massicci forestali interi con divieti di accesso decisi la mattina stessa; in montagna sono i **temporali pomeridiani** e, sulle spiagge atlantiche, le **correnti di risacca**, che in Bretagna e nelle Landes fanno vittime ogni estate.',
    trasportiInterni:
      'Il **TGV** è eccellente e mette Parigi a poco più di tre ore da Marsiglia: **la prenotazione è obbligatoria**, i prezzi salgono con l\'avvicinarsi della data e possono dividersi per tre prenotando con mesi di anticipo; esiste una formula low cost dello stesso operatore, più economica e più scomoda. I **TER** regionali coprono il resto e non richiedono prenotazione. Per Loira, Provenza, Bretagna interna, Bordeaux e le rotte dei vini **serve l\'auto**. Due avvertenze per chi guida: le **autostrade sono a pedaggio e care**, e soprattutto **molte grandi città hanno una zona a basse emissioni (ZFE) in cui è obbligatorio esporre la vignetta Crit\'Air**, un adesivo che si ordina online sul sito ufficiale e che arriva per posta — va richiesto **settimane prima di partire**, perché senza si rischia la sanzione e in certe fasce non si entra proprio.',
    costoVita:
      'Due paesi in uno. Parigi e la Costa Azzurra in stagione hanno prezzi tra i più alti d\'Europa; il Massiccio Centrale, l\'Occitania interna, la Bretagna fuori costa e i dipartimenti agricoli hanno un costo della vita molto più basso. La regola universale è il **menù di mezzogiorno**: la stessa cucina, in formula entrée-plat-dessert, costa a pranzo una frazione di quanto costa la sera.',
    lingua:
      'Francese. L\'inglese è meno diffuso che nel resto dell\'Europa occidentale, e fuori dalle zone turistiche può mancare del tutto. Una cosa vale più di qualunque corso di lingua e quasi nessuno la fa: **si entra sempre dicendo "bonjour" prima di parlare**, in un negozio, in un bar, da un fornaio, e si esce dicendo "au revoir". Non è formalismo, è la soglia oltre la quale l\'interazione cambia di tono, e chi la salta viene trattato come qualcuno che ha saltato una regola — perché l\'ha saltata.',
    elettricita:
      '230V, 50Hz, **prese di tipo E**, con lo spinotto di terra sporgente dalla presa. Le spine italiane a due poli funzionano; le **schuko tedesche (tipo F) a volte non entrano** in certe prese vecchie, ed è la sorpresa più comune per chi arriva con caricabatterie e ciabatte.',
    fusoOrario: 'UTC+1, UTC+2 in ora legale. Stesso fuso dell\'Italia.',
    clima:
      'Quattro climi distinti, ed è la ragione per cui la Francia non si racconta come un blocco. L\'**ovest atlantico** — Bretagna, Normandia, costa delle Landes — è oceanico: mite, ventoso, piovoso in ogni stagione, con il meteo che cambia nell\'arco della stessa ora. L\'**est** è continentale, con inverni freddi ed estati calde. Il **sud mediterraneo** ha estati lunghe e torride e inverni miti, con il **mistral** che soffia nella valle del Rodano e in Provenza per giorni consecutivi, pulisce il cielo e abbassa la temperatura percepita. L\'**arco alpino e pirenaico** ha il suo clima d\'alta quota. Chi va in Bretagna aspettandosi la meteorologia della Provenza ha sbagliato paese, non stagione.',
    festivita:
      '**Agosto è il tema centrale**, come in Italia ma con una differenza: a Parigi la città si svuota e **molti ristoranti e negozi di quartiere chiudono per tre o quattro settimane**, mentre la costa e la montagna si riempiono. Il mese di **maggio è pieno di ponti** — 1° maggio, 8 maggio, Ascensione, Pentecoste — e i francesi "font le pont", con weekend lunghi che congestionano tutto. La cosa più utile da sapere riguarda però lo sci: **le vacanze scolastiche invernali sono scaglionate in tre zone** (A, B, C) che si alternano su quattro o cinque settimane tra febbraio e inizio marzo, e **in quel periodo le stazioni sono piene e i prezzi al massimo, a rotazione**. Il calendario delle zone si pubblica con largo anticipo e consultarlo prima di prenotare una settimana bianca vale centinaia di euro.',
    emergenze:
      'Numero unico europeo **112**. In alternativa: 15 SAMU (emergenza medica), 17 police, 18 pompiers. Per il soccorso in montagna si chiama il 112 indicando la posizione più precisa possibile.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Il porto di Antibes con i bastioni e le Alpi innevate sullo sfondo, Costa Azzurra',
  tripPrincipaleSlug: 'costa-azzurra',
}
