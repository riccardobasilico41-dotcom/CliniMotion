import type { Paese } from '@/lib/types'

// Seconda tappa dell'itinerario combinato "Capitali baltiche in 9 giorni"
// (src/content/viaggi/61-capitali-baltiche.md). Stesso trattamento delle
// altre due schede baltiche: nessuna destinazione o esperienza è stata
// vissuta di persona, visitataPersonalmente resta false ovunque e
// miaEsperienza è assente di proposito. tripPrincipaleSlug punta
// all'itinerario combinato, come su lituania.ts ed estonia.ts — vedi la nota
// lì per il perché paeseSlug del TripMeta è invece impostato sulla sola
// Lituania.

export const lettonia: Paese = {
  slug: 'lettonia',
  nome: 'Lettonia',
  continente: 'Europa',
  titolo: 'Lettonia: Riga, la capitale con più Art Nouveau d\'Europa, e la spiaggia di Jūrmala',
  descrizione:
    'Riga è la più grande delle tre capitali baltiche, con un centro storico medievale patrimonio UNESCO e, appena fuori dalle sue mura, una delle concentrazioni di architettura Art Nouveau più alte al mondo: centinaia di facciate liberty, molte firmate dal padre del regista Sergej Ėjzenštejn. Il Mercato Centrale, cinque hangar per dirigibili riconvertiti in mercato coperto negli anni Trenta, è ancora oggi il più grande bazar d\'Europa. A mezz\'ora di treno, la lunga spiaggia di sabbia bianca di Jūrmala è la meta balneare storica di tutta la regione. In questo archivio la Lettonia è la seconda tappa dell\'itinerario combinato delle tre capitali baltiche, tra Vilnius e Tallinn.',
  periodoMigliore:
    'maggio-settembre, con giugno-agosto il periodo più caldo e adatto anche a un bagno a Jūrmala, ma anche il più affollato; maggio e settembre restano miti con meno turisti nella Città Vecchia. Da novembre a marzo il freddo è pungente e spesso ventoso, vista la posizione sul Golfo di Riga.',
  durataConsigliata:
    '3 giorni per Riga, la Città Vecchia, il quartiere Art Nouveau, il Mercato Centrale e la gita a Jūrmala, come tappa intermedia di un itinerario più ampio tra Vilnius e Tallinn.',
  budgetIndicativo:
    'economica per gli standard dell\'Europa occidentale, pur essendo nell\'eurozona: pasto normale 8-16€, biglietto della torre panoramica della Chiesa di San Pietro 9€, treno per Jūrmala 2€ circa a tratta.',
  stileViaggio: ['città', 'architettura', 'mare', 'gastronomia'],
  scheda: {
    documenti:
      'Lettonia nell\'Unione Europea, nell\'area Schengen e nell\'eurozona: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i novanta giorni.',
    valuta: 'Euro, dal 2014 — la seconda delle tre capitali baltiche ad adottarlo, dopo l\'Estonia (2011) e prima della Lituania (2015).',
    pagamenti:
      'Carta e contactless funzionano quasi ovunque, mezzi pubblici compresi. Il contante resta utile per le bancarelle del Mercato Centrale e i piccoli acquisti a Jūrmala.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. Copertura 4G/5G buona a Riga e sulla costa; cala nelle zone rurali più interne, che questo itinerario comunque non tocca.',
    salute: 'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile a Riga.',
    sicurezza:
      'Riga è una capitale sicura per gli standard europei; la normale attenzione ai borseggi nelle zone turistiche e nella vita notturna della Città Vecchia nei weekend basta. Come per la Lituania, la Lettonia confina a est con la Russia e a sud-est con la Bielorussia: quelle zone di confine restano del tutto fuori da questo itinerario, concentrato su Riga, la costa di Jūrmala e il collegamento via bus verso le altre due capitali.',
    trasportiInterni:
      'Il centro storico si gira interamente a piedi. Tram, filobus e bus della rete Rīgas satiksme collegano il resto della città, con biglietti a tempo economici. Per Jūrmala: treno regionale dalla stazione centrale (Rīga Centrālā stacija), circa 30 minuti, partenze almeno ogni mezz\'ora. Non serve un\'auto a noleggio.',
    costoVita:
      'Basso per gli standard dell\'Europa occidentale e nordica: pasto in un locale tradizionale pochi euro, cena normale 10-16€ a testa. Nettamente più economico delle capitali nordiche coperte altrove su questo sito (Oslo, Stoccolma, Reykjavík), in linea con Vilnius e Tallinn.',
    lingua:
      'Lettone, lingua baltica imparentata alla lontana con il lituano ma non mutuamente comprensibile: le due lingue si sono separate secoli fa e oggi un parlante lettone non capisce il lituano di default, e viceversa. Alfabeto latino con segni diacritici propri (ā, č, ģ, ī, ķ, ļ, ņ, š, ž). L\'inglese è diffuso a Riga tra i più giovani e nel turismo; il russo resta ampiamente parlato dalla consistente minoranza russofona del paese.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi.',
    fusoOrario: 'UTC+2 in inverno, UTC+3 in estate (EET/EEST) — un\'ora avanti rispetto all\'Italia tutto l\'anno, come la Lituania e l\'Estonia.',
    clima:
      'Continentale umido, mitigato dal Mar Baltico. Inverni freddi e ventosi, spesso sotto zero da dicembre a febbraio; estati miti, con luglio-agosto la stagione balneare a Jūrmala. Le stagioni di mezzo restano le più equilibrate per girare la città a piedi.',
    festivita:
      'Il Festival della Canzone e della Danza lettone (Dziesmu un deju svētki), patrimonio culturale immateriale UNESCO, si tiene ogni cinque anni con decine di migliaia di partecipanti: se le date coincidono, cambia radicalmente affollamento e prezzi. A dicembre la Città Vecchia ospita uno dei mercatini di Natale più fotografati del Baltico, in Piazza del Duomo.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Riga.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Facciata Art Nouveau decorata di un edificio su Alberta iela a Riga, con maschere scolpite e balconi ornati',
  tripPrincipaleSlug: 'capitali-baltiche',
}
