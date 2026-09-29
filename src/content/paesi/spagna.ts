import type { Paese } from '@/lib/types'

// La Spagna entra nell'archivio non come una singola meta ma come quattro
// paesi diversi cuciti sotto un'unica bandiera: Canarie e Baleari sono due
// arcipelaghi separati, raggiungibili solo in aereo (o in traghetto tra loro),
// senza alcun nesso logico con la Spagna continentale o tra loro; il Sud
// (Andalusia) e il Nord (Paesi Baschi, Cantabria, Asturie, Galizia) sono
// entrambi sulla terraferma ma a 800-1.000 km di distanza e stilisticamente
// opposti — architettura moresca, flamenco e caldo torrido a sud, costa verde,
// cultura basca del cibo e clima fresco a nord. Per questo la scelta
// strutturale è la stessa già usata per l'Italia: un solo Paese, molti viaggi
// indipendenti, mai forzati in un unico itinerario.
//
// tripPrincipaleSlug punta a andalusia-itinerario: tra le quattro, l'Andalusia
// resta la "Spagna da cartolina" più riconoscibile a un pubblico italiano (Alhambra,
// Mezquita, flamenco) ed è quella con la più alta densità di patrimonio UNESCO
// per giorno di viaggio, quindi il viaggio-bandiera più naturale da mettere in
// vetrina nella pagina Paese — non perché sia "la Spagna vera" più delle altre tre.
//
// Nessuno ha ancora messo piede in nessuna delle quattro regioni per conto di
// questo sito: ogni destinazione ed esperienza spagnola resta
// visitataPersonalmente: false, senza il campo miaEsperienza (facoltativo nel
// tipo Destinazione/Esperienza — se assente la UI mostra un placeholder
// editoriale invece di un ricordo inventato, come già in polonia.ts). Fatti
// verificabili tramite ricerca, non un diario.

export const spagna: Paese = {
  slug: 'spagna',
  nome: 'Spagna',
  continente: 'Europa',
  titolo: 'Spagna: quattro paesi in uno, dalle Canarie subtropicali al verde del Nord basco',
  descrizione:
    'Non esiste "un" viaggio in Spagna: l\'arcipelago delle Canarie, al largo dell\'Africa e con clima mite tutto l\'anno; le Baleari, l\'estate mediterranea per eccellenza tra Mallorca, Ibiza e Minorca; l\'Andalusia del sud, moresca, calda e piena di flamenco tra Siviglia, Granada e Cordoba; e il Nord verde e piovoso di San Sebastián, Bilbao e la Galizia del Cammino di Santiago sono quattro Spagne diverse, geograficamente scollegate e climaticamente opposte. Questo archivio le tratta come tali: una guida unica a destinazioni ed esperienze che copre tutte e quattro le regioni, e quattro itinerari separati — uno per regione — nessuno dei quali va forzato dentro gli altri.',
  periodoMigliore:
    'dipende interamente dalla regione: le Canarie hanno un clima mite tutto l\'anno (16-21°C anche a gennaio) e sono la meta spagnola giusta proprio quando altrove è inverno; le Baleari danno il meglio tra maggio-giugno e settembre, con luglio-agosto affollatissimi e carissimi; l\'Andalusia va evitata a luglio-agosto, quando Siviglia e Cordoba superano regolarmente i 40°C (record assoluto spagnolo, 47,6°C a Córdoba nell\'agosto 2021), ed è più godibile in primavera o autunno; il Nord è invece il posto dove il caldo spagnolo non arriva quasi mai, con un clima fresco e piovoso tutto l\'anno che rende l\'estate (giugno-settembre) la finestra più asciutta e affidabile.',
  durataConsigliata:
    '7-10 giorni per ciascuna delle quattro regioni, trattate come viaggi a sé: non è pensata per essere compressa in un unico giro, dato che Canarie e Baleari sono arcipelaghi raggiungibili solo in aereo (o in traghetto tra loro) e Sud e Nord distano 800-1.000 km sulla terraferma.',
  budgetIndicativo:
    'molto variabile secondo regione e stagione: le Baleari in alta stagione (luglio-agosto) hanno tra i prezzi più alti d\'Europa per alloggi e voli; le Canarie restano relativamente contenute anche in bassa stagione altrove; Andalusia e Nord sono nella media spagnola, con l\'Andalusia più economica del Nord basco, dove il costo della vita (soprattutto il cibo) è tra i più alti del paese.',
  stileViaggio: ['isole', 'cultura moresca', 'gastronomia', 'natura vulcanica', 'mare', 'cammino di santiago'],
  scheda: {
    documenti:
      'Spagna nell\'Unione Europea e nell\'area Schengen (Canarie e Baleari comprese): per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta: 'Euro, come in Italia: nessun cambio necessario, nessuna sorpresa valutaria in nessuna delle quattro regioni.',
    pagamenti:
      'Carte e contactless accettati praticamente ovunque, comprese le isole minori e i piccoli bar da pintxos del Nord. Il contante resta utile per mercati, bar mleczny-style di quartiere e mance informali.',
    connettivita:
      'Roaming UE incluso nelle tariffe italiane normali, senza bisogno di una SIM locale. Copertura 4G/5G buona nelle città e lungo le coste turistiche; cala nelle zone rurali dell\'entroterra andaluso, nei tratti più isolati del Cammino del Norte e in alcune valli interne delle Canarie (Anaga a Tenerife, entroterra di Fuerteventura e La Gomera).',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida ovunque, isole comprese. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile in tutto il territorio nazionale, Canarie incluse (spesso desalinizzata, con un sapore leggermente diverso da quella continentale).',
    sicurezza:
      'La Spagna è nel complesso un paese sicuro per gli standard europei. Il rischio più diffuso, in tutte e quattro le regioni, sono i borseggi nelle zone turistiche molto affollate (Rambla-equivalenti locali, spiagge, stazioni, autobus turistici): mai lasciare borse o zaini incustoditi, soprattutto nei tavolini all\'aperto di Siviglia, Granada, Palma o San Sebastián. Ad Ibiza e in generale sulle Baleari in alta stagione vale la normale prudenza da vita notturna (drink incustoditi, gruppi numerosi). In Andalusia, la vera criticità pratica non è la sicurezza ma il caldo estivo: colpi di calore e disidratazione sono un rischio reale a luglio-agosto, con temperature che a Siviglia e Cordoba superano regolarmente i 40°C.',
    trasportiInterni:
      'Non esiste un\'unica logistica per tutta la Spagna: sulla terraferma (Andalusia, Nord) la rete AVE ad alta velocità e i collegamenti autostradali coprono bene le grandi città, ma muoversi tra i borghi (pueblos blancos andalusi, costa basco-cantabrica) richiede quasi sempre un\'auto a noleggio; tra le isole delle Baleari si viaggia in traghetto (Baleària, Trasmed, da 1 a oltre 4 ore secondo la tratta) o in breve volo; tra le isole delle Canarie il volo interno (Binter, Canaryfly) è quasi sempre più pratico del traghetto, viste le distanze e il mare aperto. Dentro ogni singola isola o città, mezzi pubblici e taxi bastano quasi sempre.',
    costoVita:
      'Nel complesso più economica dell\'Italia del Nord su ristorazione e alloggi medi, con forti eccezioni stagionali: le Baleari a luglio-agosto sono tra le mete più care d\'Europa, mentre le Canarie e l\'Andalusia in bassa stagione restano convenienti tutto l\'anno.',
    lingua:
      'Spagnolo (castigliano) ovunque, ma con lingue coufficiali regionali che segnano davvero l\'identità locale: catalano/maiorchino alle Baleari, euskera (basco) nei Paesi Baschi — una lingua non indoeuropea, senza legami dimostrati con nessun\'altra lingua vivente — e galiziano in Galizia. L\'inglese è diffuso nelle zone turistiche di tutte e quattro le regioni, meno nell\'entroterra andaluso e nei piccoli paesi del Cammino del Norte.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano quasi ovunque senza adattatore.',
    fusoOrario:
      'Attenzione: la Spagna continentale e le Baleari sono in UTC+1 (CET), come l\'Italia, ma le Canarie sono in UTC+0 (WET) — un\'ora indietro rispetto al resto della Spagna e all\'Italia, tutto l\'anno, cambio dell\'ora incluso. È una sorpresa comune per chi organizza voli o collegamenti tra le due zone.',
    clima:
      'Quattro climi diversi, che sono di fatto la ragione stessa per cui questo Paese è diviso in quattro viaggi: subtropicale mite alle Canarie tutto l\'anno; mediterraneo classico, caldo e secco d\'estate, alle Baleari; mediterraneo continentale con estati torride in Andalusia; oceanico fresco e piovoso, molto più simile all\'Irlanda che al resto della Spagna, nel Nord.',
    festivita:
      'La Settimana Santa (Semana Santa) è l\'evento religioso e turistico più sentito, soprattutto a Siviglia, con processioni che paralizzano il centro storico per una settimana e alloggi prenotati con mesi di anticipo. La Feria de Abril a Siviglia (due settimane dopo la Pasqua) è l\'altro grande appuntamento andaluso. San Fermín a Pamplona (6-14 luglio) è fuori dalle quattro regioni qui trattate ma influenza i prezzi dei voli su tutto il Nord della Spagna in quel periodo. Il Cammino di Santiago ha il suo picco per il 25 luglio, festa di San Giacomo, specialmente negli anni Santi (Xacobeo).',
    emergenze: 'Numero unico europeo 112, attivo su tutto il territorio incluse le isole. Ambasciata d\'Italia a Madrid; Consolati a Barcellona, e consolati onorari in diverse città, Canarie e Baleari comprese.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Collage ideale delle quattro Spagne: i patii dell\'Alhambra di Granada, le dune vulcaniche di Timanfaya a Lanzarote, le calette di Minorca e i tetti di Bilbao sotto la Ria del Nervión',
  tripPrincipaleSlug: 'andalusia-itinerario',
}
