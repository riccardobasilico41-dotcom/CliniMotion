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
  continente: 'Asia',
  titolo: 'Indonesia isola per isola: da Sumatra a Raja Ampat',
  descrizione:
    'Otto isole molto diverse tra loro — Sumatra, Giava, Bali, Sulawesi, Lombok e le Gili, Komodo, Flores, Raja Ampat — raccontate per ora come guida pratica isola per isola. I veri itinerari, che combinano più isole in un unico viaggio, arriveranno appena saranno pronti gli aneddoti e le foto.',
  periodoMigliore:
    'in generale aprile-ottobre (stagione secca) per la maggior parte dell\'arcipelago; Raja Ampat fa eccezione con la finestra migliore tra ottobre e aprile',
  durataConsigliata:
    'variabile: 5-7 giorni a isola per una visita approfondita, oppure 3-4 settimane per combinarne più di una in un unico giro',
  budgetIndicativo:
    'molto variabile da isola a isola — si va dal budget contenuto di Sumatra e Flores ai costi più alti di Raja Ampat per via della logistica e del permesso obbligatorio',
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua e in buone condizioni. Per turismo serve il visto on arrival: si può ottenere all\'arrivo in aeroporto oppure, meglio, richiedere online l\'e-VOA su evisa.imigrasi.go.id almeno una settimana prima — costa circa 500.000 IDR (35€ circa) e dà diritto all\'autogate. Da ottobre 2025 è inoltre obbligatoria la All Indonesia Arrival Card, un modulo elettronico da compilare prima dell\'arrivo.',
    valuta: 'Rupia indonesiana (IDR), indicativamente 1€ = 17.000-18.000 IDR. Si maneggiano cifre con molti zeri: attenzione a non confondere i tagli da 10.000 e 100.000.',
    pagamenti:
      'Carte accettate a Bali, nelle grandi città di Giava e nei resort; fuori da lì servono contanti. I bancomat sono diffusi a Bali e Giava, rari o assenti a Raja Ampat, nell\'interno di Flores e sulle isole minori: conviene arrivarci già riforniti.',
    connettivita:
      'Telkomsel ha la copertura migliore soprattutto nelle isole remote; XL Axiata e Indosat sono alternative valide nelle zone più popolate. La SIM va registrata con il passaporto. A Raja Ampat e in alcune zone di Flores il segnale è assente anche con l\'operatore migliore.',
    salute:
      'Nessuna vaccinazione obbligatoria salvo febbre gialla per chi proviene da paesi a rischio. Consigliate epatite A e B, tifo, e la valutazione della profilassi antimalarica per la Papua occidentale (Raja Ampat) e alcune zone orientali. Acqua sempre in bottiglia; mettere in conto la "Bali belly" nei primi giorni.',
    sicurezza:
      'Il paese è nel complesso tranquillo per i viaggiatori. I rischi veri sono di altra natura: gli incidenti in scooter sono la prima causa di guai per i turisti a Bali e Lombok, le correnti marine di alcune spiagge sono insidiose e i vulcani attivi possono chiudere aeroporti con poco preavviso. Attenzione anche ai contratti di noleggio scooter con danni contestati alla riconsegna.',
    trasportiInterni:
      'Con un arcipelago di queste dimensioni i voli interni sono la spina dorsale degli spostamenti (Garuda, Lion Air, Citilink, Wings Air), affiancati da traghetti e barche locali. A Bali e Giava, Grab e Gojek sono comodissimi ed economici. Sulle Gili non circolano veicoli a motore: solo cidomo e biciclette.',
    costoVita:
      'Tra le mete più economiche del sud-est asiatico per alloggi e cibo, con l\'eccezione netta di Raja Ampat, dove logistica e permesso del parco marino alzano parecchio il conto.',
    lingua: 'Bahasa indonesiano, affiancato da centinaia di lingue locali. L\'inglese è diffuso a Bali e nei contesti turistici, molto meno altrove.',
    elettricita: '230V, 50Hz, prese di tipo C e F: sono le stesse italiane, quindi non serve adattatore — una delle poche mete dove capita.',
    fusoOrario:
      'Tre fusi orari diversi: WIB (UTC+7) per Sumatra e Giava, WITA (UTC+8) per Bali, Lombok, Sulawesi, Komodo e Flores, WIT (UTC+9) per la Papua e Raja Ampat. Da tenere presente quando si incastrano voli interni.',
    clima:
      'Stagione secca indicativamente da aprile a ottobre per gran parte dell\'arcipelago. Raja Ampat fa eccezione, con la finestra migliore tra ottobre e aprile: è l\'errore di pianificazione più comune di chi prova a unire Raja Ampat al resto del paese in un unico viaggio.',
    festivita:
      'Il Nyepi, il capodanno balinese (marzo, data variabile), è il "giorno del silenzio": a Bali si fermano tutte le attività per 24 ore, l\'aeroporto chiude e non si può uscire dall\'alloggio. Va saputo in anticipo, perché può bloccare un itinerario.',
    emergenze: 'Numero unico 112. L\'Ambasciata d\'Italia è a Giacarta, con un consolato onorario a Denpasar (Bali).',
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['natura', 'avventura', 'isole', 'diving'],
  heroImageAlt: 'Isole calcaree ricoperte di giungla che emergono dal mare turchese dell\'arcipelago indonesiano',
  tripPrincipaleSlug: 'indonesia-itinerario',
}
