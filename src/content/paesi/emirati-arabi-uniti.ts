import type { Paese } from '@/lib/types'

// Paese trattato soprattutto come destinazione da stopover lungo, che è il
// modo in cui quasi tutti ci arrivano: il confronto tra i programmi stopover
// delle compagnie del Golfo sta nella scheda Dubai.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto e non su ricordi
// reali: vanno riletti e sostituiti. Nessun nome di hotel, ristorante o
// operatore è stato inventato.
// Regole d\'ingresso e condizioni dei programmi stopover cambiano spesso:
// vanno riverificate sui siti ufficiali delle compagnie prima di prenotare.

export const emiratiArabiUniti: Paese = {
  slug: 'emirati-arabi-uniti',
  nome: 'Emirati Arabi Uniti',
  continente: 'Medio Oriente',
  titolo: 'Emirati Arabi Uniti: lo scalo che conviene trasformare in sosta',
  descrizione:
    'Il paese in cui quasi tutti passano senza fermarsi, ed è un peccato per una ragione molto pratica: Emirates ed Etihad offrono programmi che rendono la sosta a Dubai o ad Abu Dhabi quasi gratuita, e in due giorni si vede molto più di quanto la reputazione lasci pensare. Dietro lo skyline e i centri commerciali ci sono un creek con le barche di legno, un souq dell\'oro che funziona ancora, una delle moschee più belle del mondo e un Louvre con la cupola forata che filtra la luce come una palma.',
  periodoMigliore:
    'da novembre a marzo, senza discussione: in quella finestra si sta all\'aperto con 24-28 gradi. Da maggio a settembre si superano regolarmente i 45 gradi con umidità altissima, e la vita si svolge interamente al chiuso — che è un modo educato per dire che un viaggio estivo qui è un viaggio sprecato.',
  durataConsigliata:
    '24 ore per uno stopover essenziale, 48 per Dubai fatta bene, 3-4 giorni per aggiungere Abu Dhabi e una notte nel deserto. Oltre i cinque giorni si comincia a ripetersi.',
  budgetIndicativo:
    'molto variabile, ed è l\'unico paese di questo archivio in cui il modo di arrivarci cambia il conto: con Dubai Connect o lo stopover Etihad l\'hotel è incluso. Fuori da quei programmi, gli alloggi vanno dai 70€ delle zone vecchie ai numeri senza limite del lungomare. Mangiare, invece, costa poco: la cucina dei quartieri indiani e pakistani è ottima e sta sotto i 10€.',
  stileViaggio: ['stopover', 'architettura', 'deserto', 'città'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. I cittadini italiani non hanno bisogno di visto in anticipo: all\'arrivo viene rilasciato gratuitamente un permesso valido 180 giorni, che consente più ingressi per un totale di 90 giorni di soggiorno. È una delle regole d\'ingresso più semplici al mondo, ed è anche il motivo per cui gli stopover qui funzionano senza pratiche preventive.',
    valuta: 'Dirham degli Emirati (AED), agganciato al dollaro USA. Si cambia ovunque, ma serve poco contante.',
    pagamenti: 'Carte accettate praticamente ovunque, contactless incluso: si può passare una settimana senza toccare contanti. Qualche souq e qualche taxi di quartiere preferiscono ancora il contante, e vale la pena averne un po\'.',
    connettivita:
      'Copertura eccellente e Wi-Fi ovunque. Una cosa da sapere prima: **le chiamate VoIP sono limitate** — WhatsApp, FaceTime e Skype non funzionano per chiamate audio e video sulle reti locali, mentre i messaggi passano normalmente. Le app di chiamata autorizzate esistono, oppure si aggira la cosa con una eSIM estera in roaming, che è la soluzione più semplice per una sosta breve.',
    salute:
      'Standard sanitari altissimi e nessuna vaccinazione richiesta. Il rischio vero è il caldo: da maggio a settembre l\'esposizione al sole nelle ore centrali è pericolosa e la disidratazione è rapida. L\'acqua del rubinetto è tecnicamente potabile ma quasi nessuno la beve. L\'assicurazione sanitaria è indispensabile perché le cure private, che sono la norma, costano moltissimo.',
    sicurezza:
      'Tra i paesi più sicuri al mondo per criminalità comune: si cammina ovunque a qualsiasi ora. Il tema è un altro, ed è legale: l\'alcol si consuma solo nei locali autorizzati e negli hotel, l\'ubriachezza in pubblico è un reato, le manifestazioni d\'affetto in pubblico vanno contenute, e la legislazione su droga e sostanze è severissima — anche per quantità minime e per farmaci che in Europa sono da banco ma qui figurano come controllati. Fotografare persone senza permesso, edifici governativi e installazioni militari è un problema reale.',
    trasportiInterni:
      'La metropolitana di Dubai è pulita, economica e copre l\'asse principale della città, aeroporto compreso; si paga con la Nol Card. Taxi e Careem/Uber costano poco per gli standard occidentali. Tra Dubai e Abu Dhabi ci sono autobus frequenti (circa 2 ore) e taxi; dal 2025 è in costruzione una rete ferroviaria passeggeri che cambierà la logistica. Per il deserto e per Al Ain serve un mezzo proprio o un tour.',
    costoVita:
      'Doppio anche qui. Hotel, alcol e attrazioni hanno prezzi da capitale occidentale o più alti; la metropolitana costa pochi dirham e nei quartieri di Deira e Bur Dubai si mangia una cucina indiana, pakistana e filippina ottima per pochi euro. Chi sta sul lungomare e beve in hotel spende dieci volte chi dorme in città vecchia e mangia nei ristoranti di quartiere.',
    lingua:
      'Arabo lingua ufficiale, ma la lingua franca reale è l\'inglese: gli emiratini sono una minoranza nel proprio paese — attorno al 10-12% della popolazione — e la maggioranza dei residenti viene da India, Pakistan, Bangladesh e Filippine. In pratica si parla inglese ovunque, spesso come seconda lingua di entrambe le parti.',
    elettricita: '230V, 50Hz, prese di tipo G a tre poli rettangolari, britanniche: serve l\'adattatore, non quello europeo.',
    fusoOrario: 'UTC+4: 2 ore avanti rispetto all\'Italia in ora legale, 3 in inverno. Comodo per gli stopover verso l\'Asia, meno per quelli di ritorno.',
    clima:
      'Desertico. Da novembre a marzo è perfetto, con 24-28 gradi di giorno e sere fresche; da aprile la temperatura sale in fretta e tra giugno e settembre si superano regolarmente i 45 gradi, con l\'umidità della costa che rende l\'aria irrespirabile. Piove pochissimo, ma quando succede la città va in difficoltà perché il drenaggio non è pensato per quello. Le tempeste di sabbia riducono la visibilità qualche volta l\'anno.',
    festivita:
      'Durante il **Ramadan** molti ristoranti restano chiusi di giorno o servono solo in aree schermate, mangiare e bere in pubblico alla luce del sole è sconsigliato (e in alcuni contesti sanzionabile), e gli orari di tutto si spostano verso la notte. In compenso le sere del Ramadan sono il momento più interessante dell\'anno, con l\'iftar che diventa un evento sociale aperto a tutti. La Festa Nazionale è il 2 dicembre.',
    emergenze: 'Polizia 999, ambulanza 998, vigili del fuoco 997. L\'Ambasciata d\'Italia è ad Abu Dhabi, con Consolato generale a Dubai.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Lo skyline di Dubai con il Burj Khalifa al tramonto',
  tripPrincipaleSlug: 'stopover-golfo',
}
