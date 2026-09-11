import type { Paese } from '@/lib/types'

// Paese non ancora visitato di persona: contenuto guida verificabile
// (cosa vedere, come muoversi, costi indicativi), nessun ricordo personale.
// tripPrincipaleSlug punta all'itinerario combinato del Centro America,
// ancora da scrivere — il codice gestisce il caso con un link di fallback
// a /viaggi.

export const guatemala: Paese = {
  slug: 'guatemala',
  nome: 'Guatemala',
  continente: 'America Centrale',
  titolo: 'Guatemala: Antigua, il lago Atitlán, Tikal e i vulcani da scalare',
  descrizione:
    'Il paese più "denso" del Centro America: una capitale coloniale circondata da tre vulcani, un lago vulcanico costellato di villaggi maya raggiungibili solo in barca, le piramidi di Tikal che spuntano dalla giungla del Petén e la possibilità di dormire davanti a un vulcano in eruzione.',
  periodoMigliore:
    'novembre-aprile, stagione secca; da maggio a ottobre piove quasi ogni pomeriggio, con strade di montagna più difficili',
  durataConsigliata: '10-14 giorni per Antigua, Atitlán, Semuc Champey e Tikal senza correre',
  budgetIndicativo:
    'tra i paesi più economici della regione: ostelli e comedor a pochi euro, shuttle turistici tra le tappe principali sui 15-30€ a tratta, trekking all\'Acatenango sui 60-120€',
  stileViaggio: ['vulcani', 'cultura maya', 'natura', 'on the road'],
  heroImageAlt: 'L\'arco di Santa Catalina ad Antigua Guatemala con il vulcano Agua sullo sfondo',
  tripPrincipaleSlug: 'centro-america-itinerario',
}
