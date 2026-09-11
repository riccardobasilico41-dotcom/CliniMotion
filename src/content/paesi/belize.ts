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
  scheda: {
    documenti:
      'Passaporto in corso di validità; la maggior parte dei visitatori, italiani inclusi, entra senza visto per soggiorni turistici fino a 30 giorni. Possono essere richiesti biglietto di ritorno e prova di fondi. In uscita è prevista una tassa di partenza, di norma già inclusa nel biglietto aereo ma da pagare a parte se si esce via terra verso Guatemala o Messico.',
    valuta:
      'Dollaro del Belize (BZD), agganciato stabilmente al dollaro USA con cambio fisso 2:1. I dollari americani sono accettati praticamente ovunque: si può viaggiare con USD in contanti senza cambiare nulla, ricevendo spesso il resto in BZD.',
    pagamenti:
      'Bancomat presenti in tutte le principali località turistiche e nei centri urbani. Le carte sono accettate nelle strutture turistiche, spesso con un supplemento del 3-5%; per tour, taxi, ristoranti piccoli e water taxi servono contanti.',
    connettivita:
      'Rete GSM con due operatori principali, Digi (ex BTL) e Smart. Copertura buona nei centri abitati e sulle isole maggiori, molto più irregolare nelle zone interne e remote. Le eSIM sono un\'alternativa pratica per soggiorni brevi.',
    salute:
      'Nessuna vaccinazione obbligatoria, salvo febbre gialla per chi proviene da paesi a rischio. Consigliate le profilassi di routine più epatite A e tifo. Acqua in bottiglia fuori dalle strutture principali e repellente per zanzare abbondante: dengue e zika sono presenti.',
    sicurezza:
      'Le aree turistiche — le cayes, San Ignacio, Placencia, Hopkins — sono considerate tranquille, con il rischio limitato ai piccoli furti. Belize City richiede più attenzione, soprattutto dopo il tramonto: la raccomandazione ricorrente è usare i taxi invece di spostarsi a piedi la sera.',
    trasportiInterni:
      'Bus lungo le highway principali (economici ma lenti), water taxi dal terminal di Belize City per Caye Caulker e Ambergris Caye, e voli interni con Tropic Air e Maya Island Air — cari ma risolutivi, visto lo stato delle strade sulle lunghe distanze. Si guida a destra.',
    costoVita:
      'Il paese più caro del Centro America, con prezzi più vicini ai Caraibi che ai vicini continentali: si paga in fascia dollaro, specialmente sulle isole e per le attività subacquee.',
    lingua:
      'Inglese, unica lingua ufficiale — è l\'ex Honduras Britannico e l\'unico paese anglofono della regione. Diffusi anche il creolo belizeano, lo spagnolo, il garifuna e alcune lingue maya.',
    elettricita: '110-120V, 60Hz, prese di tipo A e B (standard nordamericano): serve un adattatore dall\'Italia.',
    fusoOrario: 'UTC-6 tutto l\'anno, senza ora legale: 7 ore indietro rispetto all\'Italia in ora legale, 8 in inverno.',
    clima:
      'Stagione secca da dicembre ad aprile, la migliore per mare limpido e visibilità subacquea. Da giugno a novembre stagione delle piogge, che coincide con quella degli uragani: prezzi più bassi ma rischio reale di giornate perse e di chiusure (la grotta ATM può chiudere dopo piogge intense).',
    festivita:
      'Il Garifuna Settlement Day, il 19 novembre, è la festa più sentita della costa sud (Dangriga, Hopkins) e celebra l\'arrivo del popolo garifuna. A settembre le September Celebrations, tra il 10 (Battle of St. George\'s Caye) e il 21 (indipendenza), riempiono tutto il paese.',
    emergenze:
      'Numero unico 911. In Belize non c\'è una rappresentanza diplomatica italiana residente: l\'assistenza consolare fa capo alla sede competente per l\'area, da verificare su Viaggiare Sicuri prima della partenza.',
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['mare', 'diving', 'grotte', 'cultura maya'],
  heroImageAlt: 'Il Great Blue Hole visto dall\'alto, al largo della costa del Belize',
  tripPrincipaleSlug: 'centro-america-itinerario',
}
