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
  scheda: {
    documenti:
      'Passaporto in corso di validità (consigliati almeno 6 mesi residui); nessun visto per soggiorni turistici fino a 90 giorni per i cittadini italiani. All\'ingresso possono essere richiesti il biglietto di uscita dal paese e la prova di fondi sufficienti.',
    valuta:
      'Il balboa (PAB) è agganciato 1:1 al dollaro USA ed esiste solo in monete: nella pratica si paga in banconote americane. È il paese più semplice della regione dal punto di vista valutario — si arriva con dollari e non serve cambiare nulla.',
    pagamenti:
      'Carte accettate quasi ovunque in città. I contanti restano indispensabili nelle zone rurali, nei mercati e soprattutto a San Blas, dove non esistono bancomat né pagamenti elettronici. Gli ATM sono diffusi ma capita di trovarli fuori servizio e con commissioni alte.',
    connettivita:
      'Operatori principali +Móvil (ex Cable & Wireless) e Tigo, con buona copertura urbana e lungo le arterie principali; segnale scarso o assente a San Blas e in alcune zone di Bocas del Toro. eSIM ampiamente disponibili.',
    salute:
      'Nessuna vaccinazione obbligatoria per l\'ingresso, salvo febbre gialla per chi proviene da paesi a rischio; la vaccinazione è però raccomandata per chi si spinge verso il Darién. A Panama City l\'acqua del rubinetto è generalmente potabile — un\'eccezione nella regione — ma non vale ovunque nel paese.',
    sicurezza:
      'Il Dipartimento di Stato USA classifica Panama a livello 2 ("maggiore cautela", aggiornamento agosto 2026). La criminalità si concentra in quartieri precisi della capitale — El Chorrillo e parti di Calidonia — mentre le zone turistiche (Casco Viejo, El Cangrejo, Punta Pacifica) hanno presidio e incidenza bassa. Il Darién, al confine con la Colombia, è da evitare del tutto. Frequenti le manifestazioni: meglio starne alla larga.',
    trasportiInterni:
      'Panama City ha una metropolitana efficiente e a prezzi simbolici (circa 0,35 USD a corsa con carta ricaricabile), taxi sui 3-8 USD a tratta e Uber molto diffuso. Per le distanze lunghe i voli interni (Air Panama) verso Bocas del Toro e David sono il modo più rapido; i bus a lunga percorrenza partono dal terminal di Albrook.',
    costoVita:
      'Costi medi per la regione, più alti a San Blas per via della logistica: il transfer 4x4 più barca vale 40-60 USD a tratta e le cabañas sulle isole 60-150 USD a persona per notte, pasti inclusi.',
    lingua: 'Spagnolo; l\'inglese è piuttosto diffuso negli ambienti turistici e d\'affari, eredità della presenza statunitense legata al canale.',
    elettricita: '110V, 60Hz, prese di tipo A e B (standard nordamericano): serve un adattatore dall\'Italia.',
    fusoOrario: 'UTC-5 tutto l\'anno, senza ora legale: 6 ore indietro rispetto all\'Italia in ora legale, 7 in inverno.',
    clima:
      'Stagione secca da metà dicembre a metà aprile, la finestra migliore per la capitale, San Blas e gli altopiani. Bocas del Toro fa storia a sé, con un microclima caraibico in cui settembre-ottobre e febbraio-marzo sono spesso i periodi più soleggiati: pianificare l\'arcipelago con il calendario del resto del paese è uno degli errori più comuni.',
    festivita:
      'Il Carnevale (febbraio o marzo, secondo l\'anno) è la festa più sentita del paese e blocca di fatto Panama per quattro giorni, con Las Tablas come epicentro. A novembre si concentrano le fiestas patrias, con più giorni festivi ravvicinati.',
    emergenze: 'Numero unico 911. L\'Ambasciata d\'Italia si trova a Panama City.',
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['mare', 'isole', 'natura', 'città'],
  heroImageAlt: 'Isole di sabbia bianca e palme dell\'arcipelago di San Blas, Panama',
  tripPrincipaleSlug: 'centro-america-itinerario',
}
