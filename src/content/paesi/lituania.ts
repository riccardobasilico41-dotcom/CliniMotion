import type { Paese } from '@/lib/types'

// Prima uscita lituana dell'archivio, collegata al viaggio combinato
// "Capitali baltiche in 9 giorni: Vilnius, Riga e Tallinn"
// (src/content/viaggi/61-capitali-baltiche.md). Nessuno ha ancora messo
// piede in nessuno dei tre paesi baltici per conto di questo sito:
// visitataPersonalmente resta false su ogni destinazione ed esperienza, e il
// campo miaEsperienza è assente di proposito ovunque — niente ricordo
// inventato, solo fatti verificati con ricerca (stesso trattamento usato per
// la Polonia in src/content/paesi/polonia.ts e per i monumenti non visitati
// in src/content/meraviglie.ts).
//
// tripPrincipaleSlug punta all'itinerario combinato ed è impostato allo
// stesso modo su lituania.ts, lettonia.ts ed estonia.ts, seguendo lo stesso
// pattern di belize.ts/guatemala.ts/panama.ts per il Centro America: un solo
// viaggio, tre Paesi che vi puntano tutti. La Lituania è anche il Paese
// scelto come paeseSlug canonico del TripMeta, perché Vilnius è la tappa di
// apertura dell'itinerario (vedi la nota in
// viaggi-dati/capitali-baltiche.ts).

export const lituania: Paese = {
  slug: 'lituania',
  nome: 'Lituania',
  continente: 'Europa',
  titolo: 'Lituania: Vilnius barocca, la Repubblica di Užupis e il castello sul lago di Trakai',
  descrizione:
    'La più meridionale e la più popolosa delle tre capitali baltiche: Vilnius ha il centro storico barocco più esteso dell\'Europa centro-orientale, patrimonio UNESCO, e al suo interno un quartiere che si è autoproclamato repubblica indipendente per gioco (ma non troppo) il primo aprile di ogni anno. A mezz\'ora di treno, il castello gotico in mattoni rossi di Trakai galleggia su un\'isola del lago Galvė, costruito nel Quattrocento dai granduchi di Lituania e oggi la gita fuori porta più fotografata del paese. In questo archivio la Lituania è per ora la prima tappa dell\'itinerario combinato delle tre capitali baltiche: Vilnius apre il viaggio, prima di Riga e Tallinn.',
  periodoMigliore:
    'maggio-settembre, con giugno-agosto il periodo più caldo e con più ore di luce (fino a 17 ore a fine giugno) ma anche il più affollato e caro; maggio e settembre restano miti con meno turisti. Da novembre a marzo il freddo è pungente, spesso sotto zero, con neve possibile da dicembre a febbraio: la Città Vecchia resta comunque suggestiva, soprattutto ai mercatini di Natale.',
  durataConsigliata:
    '3 giorni per Vilnius, la Città Vecchia, Užupis e la gita a Trakai, come prima tappa di un itinerario più ampio verso Riga e Tallinn; bastano anche da soli per un weekend lungo autonomo.',
  budgetIndicativo:
    'tra le capitali europee più economiche, pur essendo nell\'eurozona: pasto normale 8-15€, birra locale 3-4€, biglietto per la Torre di Gediminas 8€ (più 2-3€ di funicolare), ingresso al Castello dell\'Isola di Trakai 12-14€ secondo la stagione.',
  stileViaggio: ['città', 'storia', 'arte', 'natura'],
  scheda: {
    documenti:
      'Lituania nell\'Unione Europea, nell\'area Schengen e nell\'eurozona: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i novanta giorni.',
    valuta:
      'Euro, dal 2015 — l\'ultimo dei tre Baltici ad adottarlo, dopo Estonia (2011) e Lettonia (2014). Rispetto a mete come la Polonia, qui non c\'è alcuna conversione da fare.',
    pagamenti:
      'Paese molto avanzato sui pagamenti digitali: carta e contactless funzionano quasi ovunque, compresi bus urbani e mercatini. Il contante resta utile per i piccoli acquisti a Trakai e per qualche bancarella del centro.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. Copertura 4G/5G molto buona a Vilnius e lungo le principali direttrici; la Lituania è tra i paesi europei con l\'internet mobile più veloce.',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile a Vilnius.',
    sicurezza:
      'Vilnius è una capitale sicura per gli standard europei, con la normale attenzione ai borseggi nelle zone più turistiche e sui mezzi pubblici affollati. Un punto da tenere presente per chi organizza il viaggio: la Lituania confina a est e sud-est con la Bielorussia e a nord-est con l\'enclave russa di Kaliningrad. Questo itinerario (Vilnius, Trakai, e poi Riga e Tallinn verso nord) resta interamente nel corridoio turistico occidentale del paese e non si avvicina in alcun modo a quelle zone di confine, che comunque restano fuori da qualunque percorso turistico standard.',
    trasportiInterni:
      'Il centro storico di Vilnius si gira interamente a piedi. Per il resto della città, bus e filobus (rete Vilniaus viešasis transportas) sono economici, con biglietti a tempo o carta ricaricabile Vilniečio kortelė. Per Trakai: treno regionale (circa 34 minuti) o bus (circa 35 minuti) dalla stazione centrale di Vilnius, entrambi economici e frequenti. Non serve un\'auto a noleggio per questa tappa dell\'itinerario.',
    costoVita:
      'Basso per gli standard dell\'Europa occidentale e nordica, pur pagando in euro: pasto in un bar tradizionale pochi euro, cena normale 10-15€ a testa, birra artigianale locale 3-5€. Più caro di Cracovia (che paga in złoty), ma nettamente più economico delle capitali nordiche coperte altrove su questo sito (Oslo, Stoccolma, Reykjavík).',
    lingua:
      'Lituano, lingua baltica con un proprio alfabeto latino esteso (lettere come ą, č, ę, š, ų, ž). È una lingua indoeuropea arcaica, spesso citata dai linguisti per la sua conservatività, ed è imparentata solo alla lontana con il lettone: le due lingue non sono mutuamente comprensibili, nonostante la vicinanza geografica. L\'inglese è diffuso a Vilnius tra i più giovani e nel turismo, meno nelle zone rurali.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi.',
    fusoOrario:
      'UTC+2 in inverno, UTC+3 in estate (EET/EEST) — un\'ora avanti rispetto all\'Italia tutto l\'anno, cambio dell\'ora legale nello stesso weekend europeo.',
    clima:
      'Continentale umido. Inverni freddi, spesso sotto zero da dicembre a febbraio, con neve possibile; estati miti e piacevoli da giugno ad agosto, con giornate lunghissime a ridosso del solstizio. Le stagioni di mezzo (maggio, settembre) offrono il miglior compromesso tra clima e affollamento.',
    festivita:
      'Il 1° aprile Užupis festeggia il proprio "giorno dell\'indipendenza" con eventi in tutto il quartiere. Il solstizio d\'estate (fine giugno, festa di Rasos/Joninės) è tra le ricorrenze più sentite del paese, con fuochi e canti fino all\'alba. A dicembre la Città Vecchia ospita i mercatini di Natale intorno a Piazza della Cattedrale.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Vilnius.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La Cattedrale di Vilnius e la Torre di Gediminas sulla collina, con il centro storico barocco sullo sfondo',
  tripPrincipaleSlug: 'capitali-baltiche',
}
