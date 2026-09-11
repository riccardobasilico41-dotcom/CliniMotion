import type { Paese } from '@/lib/types'

// Paese non ancora visitato di persona: contenuto guida verificabile
// (cosa vedere, come muoversi, costi indicativi), nessun ricordo personale.
// tripPrincipaleSlug punta all'itinerario combinato del Centro America,
// ancora da scrivere.

export const panama: Paese = {
  slug: 'panama',
  nome: 'Panama',
  continente: 'America Centrale',
  titolo: 'Panama: il canale, San Blas, Bocas del Toro e l\'alba sui due oceani',
  descrizione:
    'Il paese più facile da girare del Centro America — si paga in dollari, i collegamenti aerei interni funzionano e la capitale è un hub per tutta l\'America Latina. In poche ore si passa dallo skyline di Panama City all\'arcipelago autogestito dei Guna a San Blas, dai caffè d\'altura di Boquete alle isole caraibiche di Bocas del Toro.',
  periodoMigliore:
    'metà dicembre-metà aprile, stagione secca; Bocas del Toro ha un microclima a parte, spesso soleggiato anche a settembre-ottobre',
  durataConsigliata: '10-14 giorni per unire capitale, Caraibi (San Blas o Bocas) e altopiani di Boquete',
  budgetIndicativo:
    'costi medi per la regione, più alti a San Blas per via della logistica: transfer 4x4 + barca 40-60$ a tratta, notti in cabaña sulle isole 60-150$ a persona con pasti inclusi',
  stileViaggio: ['mare', 'isole', 'natura', 'città'],
  heroImageAlt: 'Isole di sabbia bianca e palme dell\'arcipelago di San Blas, Panama',
  tripPrincipaleSlug: 'centro-america-itinerario',
}
