import type { Paese } from '@/lib/types'

// A differenza degli altri Paesi, l'Indonesia non ha ancora un viaggio-diario
// (src/content/viaggi) collegato: le otto isole sono state visitate ma non
// esiste ancora un racconto giorno-per-giorno scritto, né foto caricate.
// Per ora questo file e le destinazioni/esperienze collegate contengono solo
// la parte "guida" (cosa vedere, come muoversi, quando andare), verificabile
// e non personale — aneddoti, foto e i veri itinerari combinati verranno
// aggiunti in un secondo momento. tripPrincipaleSlug punta a uno slug non
// ancora esistente: il codice gestisce il caso (link di fallback a /viaggi),
// da aggiornare non appena il primo itinerario combinato sarà pubblicato.

export const indonesia: Paese = {
  slug: 'indonesia',
  nome: 'Indonesia',
  titolo: 'Indonesia isola per isola: da Sumatra a Raja Ampat',
  descrizione:
    'Otto isole molto diverse tra loro — Sumatra, Giava, Bali, Sulawesi, Lombok e le Gili, Komodo, Flores, Raja Ampat — raccontate per ora come guida pratica isola per isola. I veri itinerari, che combinano più isole in un unico viaggio, arriveranno appena saranno pronti gli aneddoti e le foto.',
  periodoMigliore:
    'in generale aprile-ottobre (stagione secca) per la maggior parte dell\'arcipelago; Raja Ampat fa eccezione con la finestra migliore tra ottobre e aprile',
  durataConsigliata:
    'variabile: 5-7 giorni a isola per una visita approfondita, oppure 3-4 settimane per combinarne più di una in un unico giro',
  budgetIndicativo:
    'molto variabile da isola a isola — si va dal budget contenuto di Sumatra e Flores ai costi più alti di Raja Ampat per via della logistica e del permesso obbligatorio',
  stileViaggio: ['natura', 'avventura', 'isole', 'diving'],
  heroImageAlt: 'Isole calcaree ricoperte di giungla che emergono dal mare turchese dell\'arcipelago indonesiano',
  tripPrincipaleSlug: 'indonesia-itinerario',
}
