import type { Paese } from '@/lib/types'

// Paese non ancora visitato di persona: contenuto guida verificabile
// (cosa vedere, come muoversi, costi indicativi), nessun ricordo personale.
// tripPrincipaleSlug punta all'itinerario combinato del Centro America,
// ancora da scrivere.

export const belize: Paese = {
  slug: 'belize',
  nome: 'Belize',
  continente: 'America Centrale',
  titolo: 'Belize: la seconda barriera corallina del mondo, il Blue Hole e le grotte maya',
  descrizione:
    'L\'unico paese del Centro America dove si parla inglese, e quello con il mare più spettacolare: la seconda barriera corallina del pianeta, il Great Blue Hole, isole senza auto dove si va "go slow" e, nell\'entroterra, una delle grotte archeologiche più impressionanti al mondo.',
  periodoMigliore:
    'dicembre-aprile, stagione secca e mare più limpido; da giugno a novembre stagione delle piogge e degli uragani, con prezzi più bassi',
  durataConsigliata: '7-10 giorni per unire le isole (cayes) e l\'entroterra del Cayo',
  budgetIndicativo:
    'il paese più caro della regione: il dollaro del Belize è agganciato 2:1 al dollaro USA e i prezzi sono più vicini ai Caraibi che al Centro America — immersioni al Blue Hole 300-400$, ATM cave 100-140$',
  stileViaggio: ['mare', 'diving', 'grotte', 'cultura maya'],
  heroImageAlt: 'Il Great Blue Hole visto dall\'alto, al largo della costa del Belize',
  tripPrincipaleSlug: 'centro-america-itinerario',
}
