import type { Paese } from '@/lib/types'

// La Germania entra nell'archivio con un solo itinerario: un weekend lungo a
// Berlino (4 giorni, uno in più rispetto ai weekend da 3-4 giorni usati per
// altre capitali europee di quest'archivio, per via delle dimensioni della
// città e della densità di cose da vedere). Non è una guida al paese intero:
// fuori Berlino la Germania non è coperta.
//
// Nessuno ha ancora messo piede in Germania per conto di questo sito: la
// destinazione di Berlino resta visitataPersonalmente: false e senza il
// campo miaEsperienza, che nel tipo Destinazione è facoltativo apposta — se
// assente, la UI mostra un placeholder editoriale invece di un ricordo
// inventato (vedi il commento sul tipo in src/lib/types.ts, e lo stesso
// trattamento usato in src/content/paesi/polonia.ts). Questa è quindi scheda
// di ricerca, non un diario: fatti verificabili, senza episodi in prima
// persona. I luoghi legati alla Seconda guerra mondiale e alla Guerra Fredda
// sono scritti nello stesso registro sobrio e informativo usato per
// Auschwitz-Birkenau in src/content/destinazioni/polonia.ts: mai come
// "attrazioni".

export const germania: Paese = {
  slug: 'germania',
  nome: 'Germania',
  continente: 'Europa',
  titolo: 'Germania: Berlino in quattro giorni, tra storia divisa, musei e quartieri',
  descrizione:
    'Per ora l\'archivio copre una sola meta tedesca, ed è la capitale: Berlino, una città che nel Novecento è stata capitale del Reich, città divisa in due dal Muro per ventotto anni e infine simbolo della riunificazione tedesca del 1990. Quattro giorni, uno in più rispetto ad altri weekend lunghi di questo archivio, servono a coprire il centro storico e il quartiere del potere, i luoghi della memoria legati al nazismo e alla Guerra Fredda, l\'Isola dei Musei e i quartieri più vivi a est, senza dover scegliere tra storia e vita contemporanea in una città che le tiene entrambe, letteralmente, sulla stessa strada.',
  periodoMigliore:
    'maggio-settembre per le giornate lunghe e il clima mite, con giugno-agosto il periodo più caldo e affollato; aprile e ottobre restano gestibili con meno folla. Novembre-marzo è freddo (spesso vicino o sotto zero da dicembre a febbraio) ma dicembre porta i celebri mercatini di Natale sparsi per la città, tra cui quello davanti alla Gedächtniskirche.',
  durataConsigliata:
    '4 giorni per Berlino: il centro storico e il quartiere del governo, i luoghi della memoria legati al Muro e al nazismo, l\'Isola dei Musei, e un quarto giorno per i quartieri di Kreuzberg e Friedrichshain. Non pensata per essere estesa al resto della Germania.',
  budgetIndicativo:
    'capitale relativamente economica rispetto ad altre grandi città dell\'Europa occidentale come Parigi o Londra, pur essendo in area euro: i trasporti pubblici e la ristorazione informale restano accessibili, mentre gli ingressi ai grandi musei (Isola dei Musei) e alcune esperienze guidate sono le voci più costose della giornata tipo.',
  stileViaggio: ['città', 'storia', 'memoria', 'vita notturna'],
  scheda: {
    documenti:
      'Germania nell\'Unione Europea e nell\'area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Euro, come in Italia: nessuna conversione da fare, a differenza di altre mete dell\'Europa centrale come Polonia o Ungheria.',
    pagamenti:
      'A differenza di quanto ci si aspetterebbe da un\'economia avanzata come quella tedesca, il contante resta più diffuso che in molti altri paesi europei: alcuni ristoranti, bar e piccoli negozi, soprattutto fuori dal centro turistico, non accettano ancora carte di credito o le accettano solo sopra una soglia minima. Meglio avere sempre un po\' di contante con sé, mentre nei supermercati e nella grande distribuzione carta e contactless funzionano regolarmente.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali, senza bisogno di una SIM locale. Copertura 4G/5G buona in tutta la città, con qualche zona a rete più debole nella metropolitana.',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile in tutta Berlino.',
    sicurezza:
      'Berlino è una città sicura per gli standard europei. L\'accortezza più utile riguarda Checkpoint Charlie e i suoi dintorni, dove alcuni figuranti travestiti da soldati americani o sovietici chiedono soldi per farsi fotografare pur non essendo un servizio ufficiale del sito: la foto sembra "gratis" ma viene richiesto un pagamento a cose fatte. Per il resto, le accortezze normali contro i borseggi su metro e tram affollati bastano; nei quartieri della vita notturna come Kreuzberg e Friedrichshain, le stesse precauzioni valide in ogni grande città di notte.',
    trasportiInterni:
      'Rete BVG tra le più efficienti ed estese d\'Europa: U-Bahn (metropolitana), S-Bahn (ferrovia urbana), tram e bus coprono l\'intera città a tariffe contenute rispetto ad altre capitali occidentali. Il biglietto va convalidato (timbrato) prima di salire nelle stazioni non presidiate da tornelli: i controlli in borghese sono frequenti e le multe salate. Non serve un\'auto a noleggio per un soggiorno concentrato su Berlino.',
    costoVita: 'Medio per gli standard dell\'Europa occidentale, comunque più accessibile di Parigi, Londra o Amsterdam: pasto informale 8-15€, cena in un ristorante normale 15-25€ a testa, biglietto BVG singolo circa 3€.',
    lingua: 'Tedesco. L\'inglese è molto diffuso, soprattutto tra i più giovani e nei quartieri centrali; a Berlino, per la sua storia recente di città internazionale, è probabilmente la capitale tedesca dove è più facile cavarsela solo in inglese.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane entrano senza problemi, non serve adattatore.',
    fusoOrario: 'UTC+1 (CET), lo stesso fuso orario dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Continentale, con influenze oceaniche. Inverni freddi, spesso vicino o sotto zero da dicembre a febbraio, con possibilità di neve; estati miti-calde da giugno ad agosto, il periodo di massimo affollamento turistico. Primavera e autunno restano le stagioni più equilibrate per girare la città a piedi tra un museo e l\'altro.',
    festivita:
      'La Legge sulla chiusura dei negozi (Ladenschlussgesetz) rende la domenica un giorno con quasi tutti i negozi chiusi in tutta la Germania, Berlino compresa (fanno eccezione bar, ristoranti, farmacie e gli esercizi nelle grandi stazioni ferroviarie): un dettaglio pratico da mettere in conto costruendo il programma, soprattutto per chi conta di fare shopping o commissioni. A dicembre i mercatini di Natale sono sparsi in decine di punti della città. Il 3 ottobre (Giorno dell\'Unità Tedesca, anniversario della riunificazione del 1990) è la festa nazionale principale.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Berlino.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La Porta di Brandeburgo illuminata di sera, con la Quadriga sulla sommità',
  tripPrincipaleSlug: 'berlino-weekend',
}
