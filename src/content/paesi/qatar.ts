import type { Paese } from '@/lib/types'

// Come per gli Emirati, il Qatar è trattato soprattutto come destinazione da
// stopover: il confronto tra i programmi delle compagnie del Golfo sta nella
// scheda Dubai, quello sulla durata della sosta nella scheda Doha.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario:
// vanno riletti e sostituiti. Nessun nome di hotel o ristorante è inventato.

export const qatar: Paese = {
  slug: 'qatar',
  nome: 'Qatar',
  continente: 'Medio Oriente',
  titolo: 'Qatar: lo stopover che costa quattordici dollari',
  descrizione:
    'Una penisola più piccola dell\'Abruzzo con uno dei programmi stopover più convenienti al mondo: Qatar Airways offre hotel a quattro e cinque stelle a Doha a partire da cifre che non coprono nemmeno la colazione altrove. E Doha, negli ultimi quindici anni, è passata dall\'essere uno scalo anonimo ad avere il museo di Jean Nouvel, quello di I.M. Pei e un souq restaurato che, al contrario di molti della regione, funziona ancora come mercato.',
  periodoMigliore:
    'da novembre a marzo. L\'estate qatariota è tra le più dure del pianeta: si superano i 45 gradi con un\'umidità costiera che rende impossibile stare fuori, e perfino i marciapiedi di certi quartieri sono climatizzati.',
  durataConsigliata:
    '12-24 ore per uno stopover essenziale, 2-3 giorni per Doha con calma più il deserto e il nord. Oltre i quattro giorni il paese finisce.',
  budgetIndicativo:
    'lo stopover con Qatar Airways ribalta completamente il conto: hotel a quattro stelle da circa 14 dollari a persona a notte e cinque stelle da 20-30, cioè una frazione dei prezzi normali di Doha. Fuori dal programma, gli alloggi costano come in una capitale europea. Musei e souq costano poco o niente.',
  stileViaggio: ['stopover', 'musei', 'architettura', 'deserto'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. Per i cittadini italiani il visto viene rilasciato all\'arrivo all\'aeroporto di Doha, gratuitamente, con biglietto di ritorno confermato: di norma vale 30 giorni, estendibili fino a 90 con il pagamento dell\'assicurazione sanitaria. Non serve nessuna pratica preventiva, ed è il motivo per cui il programma stopover funziona senza complicazioni.',
    valuta: 'Riyal qatariota (QAR), agganciato al dollaro USA.',
    pagamenti: 'Carte accettate ovunque. Il contante serve solo per i taxi più vecchi e per contrattare nel souq, dove peraltro pagare in contanti aiuta a trattare.',
    connettivita:
      'Copertura totale, Wi-Fi diffuso, eSIM turistiche economiche. Come negli Emirati, alcune chiamate VoIP sono limitate sulle reti locali: i messaggi passano, le chiamate no. Una eSIM estera in roaming aggira la cosa per una sosta breve.',
    salute: 'Sanità di altissimo livello e nessuna vaccinazione richiesta. Il problema, anche qui, è il caldo: tra giugno e settembre l\'esposizione al sole nelle ore centrali è pericolosa. Assicurazione sanitaria indispensabile.',
    sicurezza:
      'Tra i paesi con i tassi di criminalità più bassi al mondo. Valgono le stesse cautele legali degli Emirati: alcol solo nei locali autorizzati e negli hotel, tolleranza zero per l\'ubriachezza in pubblico, pene severissime per la droga, discrezione nelle manifestazioni d\'affetto. L\'abbigliamento richiesto nei luoghi pubblici è più conservativo che a Dubai: spalle e ginocchia coperte per tutti, non solo nelle moschee.',
    trasportiInterni:
      'La metropolitana di Doha è recente, velocissima ed economica, e collega aeroporto, souq, Corniche e i quartieri principali. Karwa Taxi e Uber completano il resto a prezzi bassi. Per il deserto di Khor Al Adaid e per il nord del paese servono un 4x4 o un tour: sono percorsi su sabbia, non su strada.',
    costoVita:
      'Alto sugli alloggi fuori dal programma stopover e sull\'alcol, che si trova quasi solo negli hotel ed è tassato pesantemente. Trasporti, musei e cibo di quartiere costano invece poco. Il souq Waqif ha ristoranti a tutti i livelli di prezzo.',
    lingua: 'Arabo ufficiale, inglese lingua franca reale: come negli Emirati, i qatarioti sono una minoranza nel proprio paese e la maggioranza dei residenti è straniera.',
    elettricita: '240V, prese di tipo G britanniche a tre poli: stesso adattatore degli Emirati.',
    fusoOrario: 'UTC+3: 1 ora avanti rispetto all\'Italia in ora legale, 2 in inverno.',
    clima:
      'Desertico e costiero. Da novembre a marzo è la stagione buona, con 20-28 gradi; ad aprile comincia a salire e tra giugno e settembre si superano i 45 con umidità altissima. Le tempeste di sabbia sono possibili in primavera. Piove pochissimo e quasi solo in inverno.',
    festivita:
      'Durante il **Ramadan** valgono le stesse regole degli Emirati, con un\'applicazione in genere più stretta: molti ristoranti chiusi di giorno, sconsigliato mangiare e bere in pubblico alla luce del sole, e la vita che si sposta interamente sulla notte. La Festa Nazionale è il 18 dicembre.',
    emergenze: 'Numero unico per le emergenze 999. L\'Ambasciata d\'Italia è a Doha.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Lo skyline di Doha visto dalla Corniche al tramonto, Qatar',
  tripPrincipaleSlug: 'stopover-golfo',
}
