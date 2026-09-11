import type { Paese } from '@/lib/types'

// Contenuto guida verificabile, non personale: miaEsperienza resta assente
// nelle destinazioni collegate. visitataPersonalmente è impostato a false in
// attesa di conferma. tripPrincipaleSlug punta a un itinerario ancora da
// scrivere: il codice gestisce il caso con un link di fallback a /viaggi.

export const peru: Paese = {
  slug: 'peru',
  nome: 'Perù',
  continente: 'Sud America',
  titolo: 'Perù: Machu Picchu, Amazzonia, Titicaca e i trek che pochi fanno',
  descrizione:
    'Il paese che concentra più cose diverse di qualsiasi altro in Sud America: la cittadella inca più famosa del mondo e il trek dimenticato di Choquequirao, tre porte d\'ingresso diverse per l\'Amazzonia, il lago navigabile più alto del pianeta con l\'estensione naturale verso la Bolivia, e una delle cucine più premiate al mondo.',
  periodoMigliore:
    'da maggio a settembre, la stagione secca sulle Ande: cieli limpidi su Machu Picchu e sentieri praticabili. In Amazzonia la stagione "secca" è relativa e le piogge non si fermano mai del tutto.',
  durataConsigliata:
    '14-16 giorni per Cusco, Valle Sacra, Machu Picchu e Titicaca; 21 giorni o più per aggiungere l\'Amazzonia o un trek lungo come Choquequirao',
  budgetIndicativo:
    'molto variabile: il paese in sé è economico, ma Machu Picchu costa caro per via del treno (70-500$ andata e ritorno secondo la classe) e i lodge amazzonici partono da 300-400$ per tre notti',
  stileViaggio: ['trekking', 'cultura inca', 'amazzonia', 'alta quota'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua all\'arrivo. Nessun visto per soggiorni turistici fino a 183 giorni per i cittadini italiani.',
    valuta: 'Nuevo sol (PEN). Si cambia in aeroporto, in banca o nelle casas de cambio autorizzate; i dollari USA sono accettati in molti contesti turistici.',
    pagamenti:
      'Carte accettate a Lima, Cusco e nelle strutture turistiche, molto meno nei mercati, sulle barche del Titicaca e nei villaggi della Valle Sacra. Conviene tenere sempre banconote di piccolo taglio: il resto per i tagli grossi è un problema ricorrente.',
    connettivita: 'Claro, Movistar, Entel e Bitel, con SIM acquistabili in aeroporto presentando il passaporto. Copertura buona nelle città e lungo il circuito turistico, assente nei lodge amazzonici e su gran parte dei trek.',
    salute:
      'Nessuna vaccinazione obbligatoria per l\'ingresso, ma quella contro la febbre gialla è raccomandata per chi scende in Amazzonia e alcuni lodge la richiedono. Il problema vero è però il soroche, il mal d\'altitudine: Cusco sta a 3.400 metri, Puno a 3.800. Servono almeno due giorni di acclimatamento prima di qualsiasi sforzo, e conviene pianificare l\'itinerario salendo di quota per gradi invece di atterrare a Cusco e partire subito per un trek.',
    sicurezza:
      'Il rischio principale sono i furti di effetti personali e documenti, ormai diffusi in ogni centro urbano turistico, spesso a opera di finti tassisti — in particolare nei tragitti da e per gli aeroporti e nei terminal dei bus: conviene usare solo taxi prenotati o app. Per i bus a lunga percorrenza vanno scelte solo le compagnie principali, perché gli incidenti mortali legati a mezzi in cattivo stato o conducenti inadeguati sono frequenti.',
    trasportiInterni:
      'I voli interni (Lima-Cusco, Lima-Arequipa, Lima o Cusco-Puerto Maldonado, Lima-Iquitos) fanno risparmiare giornate intere e costano poco. Per le tratte via terra, i bus cama delle compagnie migliori sono comodi e sicuri. Il treno serve solo la tratta per Machu Picchu e quella turistica Cusco-Puno.',
    costoVita:
      'Economico su alloggi, cibo e trasporti locali; il budget si concentra su tre voci — il treno per Machu Picchu, i trek organizzati e i lodge in Amazzonia — che da sole possono valere più di tutto il resto del viaggio.',
    lingua: 'Spagnolo, con quechua e aymara ampiamente parlati sulle Ande e nell\'area del Titicaca. Inglese diffuso solo nel circuito turistico.',
    elettricita: '220V, 60Hz, prese di tipo A e C: le spine italiane a due poli entrano quasi sempre, ma un adattatore universale resta utile.',
    fusoOrario: 'UTC-5 tutto l\'anno: 7 ore indietro rispetto all\'Italia in ora legale, 6 in inverno.',
    clima:
      'Tre paesi in uno. Sulle Ande la stagione secca va da maggio a settembre, con giornate limpide e notti gelide; quella delle piogge da dicembre a marzo, quando il Cammino Inca chiude a febbraio per manutenzione. Sulla costa, Lima vive sotto la garúa, una foschia umida che la copre da giugno a novembre. In Amazzonia è caldo e umido tutto l\'anno, con il livello dei fiumi che cambia radicalmente tra acque alte (dicembre-maggio) e acque basse (giugno-novembre).',
    festivita:
      'L\'Inti Raymi, la festa del sole, si celebra a Cusco il 24 giugno ed è l\'evento più importante dell\'anno: città piena e prezzi alle stelle, da prenotare con largo anticipo. A febbraio, la Virgen de la Candelaria a Puno è una delle feste più spettacolari del continente.',
    emergenze: 'Polizia 105, emergenze 911, polizia turistica dedicata nelle città principali. L\'Ambasciata d\'Italia si trova a Lima.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La cittadella inca di Machu Picchu con il Huayna Picchu sullo sfondo, Perù',
  tripPrincipaleSlug: 'peru-itinerario',
}
