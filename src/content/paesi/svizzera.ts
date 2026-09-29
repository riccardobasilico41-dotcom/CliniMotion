import type { Paese } from '@/lib/types'

// Nessuna esperienza diretta del sito dietro questa scheda: la Svizzera non è
// mai stata visitata dall'autore di questo archivio, a differenza della
// maggior parte degli altri paesi. Tutte le destinazioni collegate hanno
// visitataPersonalmente: false e nessuna ha il campo miaEsperienza — vedi
// il commento in src/content/destinazioni/svizzera.ts. Prezzi, vignetta,
// regole di campeggio in van e aperture stagionali dei passi cambiano ogni
// stagione e da un cantone all'altro: vanno riverificati prima di partire.

export const svizzera: Paese = {
  slug: 'svizzera',
  nome: 'Svizzera',
  continente: 'Europa',
  titolo: 'Svizzera in van: le Alpi Bernesi tra laghi, ghiacciai e prezzi da sapere prima di partire',
  descrizione:
    'Un paese piccolo, montuoso, e sistematicamente tra i più cari d\'Europa — tre fatti che insieme spiegano perché conviene arrivarci con un budget preventivato invece che scoperto sul posto. Questa sezione si concentra sulle Alpi Bernesi, la regione dell\'Interlaken-Jungfrau, il cuore alpino del paese e il più naturale da percorrere in van: due laghi turchesi, una valle di settantadue cascate, un treno che sale dentro la montagna fino a 3.454 metri, e — per chi ha una settimana — una strada di passi che porta fino ai piedi del Cervino.',
  periodoMigliore:
    'da giugno a settembre per la montagna, con luglio-agosto come finestra più affidabile per i passi alpini di alta quota, che restano chiusi il resto dell\'anno. Giugno e settembre hanno meno folla e prezzi leggermente più bassi nei campeggi, con il rischio di trovare ancora neve residua sui passi più alti a inizio giugno.',
  durataConsigliata:
    'un weekend lungo di 3-4 giorni per il cuore della Jungfrau Region (Interlaken, Lauterbrunnen, Grindelwald), una settimana per aggiungere Mürren-Schilthorn, la strada dei passi Grimsel-Furka e un\'estensione fino a Zermatt.',
  budgetIndicativo:
    'alto, sistematicamente superiore a Italia e Francia: tra vignetta autostradale, carburante, campeggi e anche solo un paio di funivie o treni di montagna, un budget giornaliero realistico per due persone in van raramente scende sotto i 150-200 CHF, vignetta esclusa. Le leve per contenerlo sono poche ma reali: fare la spesa nei supermercati invece che al ristorante, scegliere un solo grande biglietto "clou" (tipicamente il Jungfraujoch) invece di sommare più funivie, e sfruttare gli sconti mattutini dove esistono (per esempio il Good Morning Ticket del Jungfraujoch).',
  stileViaggio: ['montagna', 'vanlife', 'roadtrip', 'trekking', 'laghi'],
  scheda: {
    documenti:
      'La Svizzera è in area Schengen ma **non fa parte dell\'Unione Europea**: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio, senza visto. La differenza pratica che conta per chi viaggia in van è che **il confine resta un confine doganale vero**, anche senza controlli passaporto sistematici: dal 2025 la franchigia di valore per le merci portate con sé è stata dimezzata a **150 CHF a persona** (600 CHF per una famiglia di quattro), oltre la quale va dichiarato l\'intero valore, non solo l\'eccedenza. Patente italiana valida per guidare.',
    valuta:
      'Franco svizzero (CHF), non l\'euro. Il cambio è storicamente sfavorevole all\'euro, il che amplifica ogni prezzo espresso in valuta estera. Alcuni esercizi turistici accettano euro in contanti ma danno il resto in franchi a un cambio penalizzante: conviene prelevare o pagare direttamente in CHF.',
    pagamenti:
      'Carte e contactless accettati quasi ovunque, compresi i piccoli esercizi, i parcheggi e molte aree di sosta camper: è un paese fortemente orientato al pagamento elettronico. **Conviene comunque avere un po\' di contanti in franchi** per le aree di sosta meno strutturate e per alcuni distributori automatici di parcheggi di montagna che non sempre accettano carte estere.',
    connettivita:
      'La Svizzera **non è nell\'Unione Europea né nello Spazio economico europeo**, quindi il roaming "come a casa" degli operatori italiani non si applica automaticamente: molti operatori (Vodafone, Fastweb) lo includono comunque nelle proprie tariffe, altri (TIM, Iliad) vendono un\'opzione dedicata a pochi euro al mese, e una eSIM locale resta un\'alternativa economica per chi consuma molti dati. Copertura ottima nelle valli principali, più debole in quota e nelle gole più strette come Lauterbrunnen.',
    salute:
      'La tessera europea di assicurazione malattia (TEAM) è valida in Svizzera grazie all\'accordo bilaterale con l\'UE, ma il sistema svizzero funziona a **assistenza indiretta**: nella maggior parte dei casi si paga prima e si chiede il rimborso dopo, a differenza del sistema diretto degli altri paesi UE. Un\'assicurazione di viaggio resta consigliata, soprattutto per chi fa attività in quota. Nessuna vaccinazione richiesta, standard sanitari altissimi.',
    sicurezza:
      'Paese molto sicuro anche per gli standard europei, con criminalità minima. Il rischio reale è quello di montagna: **temporali pomeridiani estivi**, sbalzi di temperatura in quota anche in piena estate, e i percorsi attrezzati (via ferrata) che richiedono kit omologato ed esperienza. **Il soccorso in montagna in Svizzera è a pagamento**: un intervento in elicottero della Rega costa mediamente alcune migliaia di franchi. La Rega vende un tesseramento annuale di sostegno (circa 40 CHF a persona) che copre gratuitamente gli interventi per i propri sostenitori — la spesa più sensata prima di qualunque escursione in quota.',
    trasportiInterni:
      'Rete stradale eccellente, ma **serve la vignetta autostradale annuale** (circa 40 CHF, obbligatoria anche solo per una settimana) per circolare su autostrade e semiautostrade — niente vignette giornaliere o settimanali. Treni e funivie di montagna sono puntuali e frequenti, ma tra i più cari d\'Europa: chi non viaggia in van può valutare uno Swiss Travel Pass per più giorni consecutivi di trasporti e sconti sulle funivie. **Zermatt è chiusa al traffico privato dal 1961**: il van si lascia nel parcheggio di Täsch e si prosegue in treno navetta.',
    costoVita:
      'Tra i più alti d\'Europa in ogni voce: carburante, ristoranti, campeggi, funivie. Un pasto semplice fuori raramente scende sotto i 25-30 CHF a persona; la spesa nei supermercati Coop e Migros resta l\'opzione più economica per chi cucina nel van.',
    lingua:
      'Tedesco (con un forte dialetto svizzero-tedesco parlato, diverso dal tedesco standard scritto) nelle Alpi Bernesi e a Zermatt; francese nel Vallese occidentale. L\'inglese è diffuso nelle zone turistiche e tra il personale di funivie e stazioni.',
    elettricita:
      '230V, 50Hz, **prese di tipo J**, uniche della Svizzera e del Liechtenstein: tre pin rotondi disposti a triangolo stretto. Le spine europee a due poli (tipo C, come quelle italiane senza terra) entrano quasi sempre; le **spine Schuko tedesche con terra (tipo F) spesso non entrano** per la forma della presa — un adattatore risolve, ma va portato o comprato sul posto.',
    fusoOrario: 'UTC+1, UTC+2 in ora legale. Stesso fuso dell\'Italia.',
    clima:
      'Alpino, molto variabile con la quota: a Interlaken (568 m) le estati sono miti, in quota il tempo cambia rapidamente e la neve è possibile anche in piena estate sopra i 2.500-3.000 metri. **I temporali pomeridiani estivi sono frequenti**: le attività in quota vanno programmate al mattino.',
    festivita:
      'La festa nazionale è il **1° agosto**. Per il resto, le festività sono in gran parte cantonali e variano da regione a regione, il che può causare chiusure inattese non previste guardando solo il calendario nazionale. La frizione più concreta per chi viaggia resta comunque settimanale, non stagionale: **la domenica la quasi totalità dei negozi è chiusa per legge**, con la sola eccezione dei punti vendita nelle grandi stazioni ferroviarie, negli aeroporti e in alcune aree di servizio autostradali — la spesa grossa va fatta il sabato.',
    emergenze:
      'Numero unico europeo **112**. In alternativa: 117 polizia, 118 vigili del fuoco, 144 ambulanza, **1414 Rega** (soccorso aereo in montagna).',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La valle di Lauterbrunnen con le cascate e le pareti verticali della Jungfrau Region, Alpi Bernesi',
  tripPrincipaleSlug: 'svizzera-alpi-van',
}
