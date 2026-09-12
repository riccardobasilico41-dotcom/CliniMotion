import type { Paese } from '@/lib/types'

// Città-stato trattata come Paese a sé, come già New York e Florida in questo
// archivio: le destinazioni qui sotto sono quartieri e aree, non città.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto e non su ricordi
// reali: vanno riletti e sostituiti. Nessun nome di hotel o ristorante è
// stato inventato, con l\'eccezione dei centri hawker e dei siti pubblici,
// che sono luoghi e non esercizi.

export const singapore: Paese = {
  slug: 'singapore',
  nome: 'Singapore',
  continente: 'Asia',
  titolo: 'Singapore: la città-stato che funziona, e il posto dove si mangia meglio per meno',
  descrizione:
    'Settecentotrenta chilometri quadrati, sei milioni di persone e un paese intero costruito su un\'isola che nel 1965 non aveva niente: né risorse, né acqua potabile propria, né un entroterra. Oggi è la città più efficiente del mondo e una delle più care — con un\'eccezione clamorosa, i centri hawker, dove si mangia per tre euro una cucina che altrove sarebbe stellata.',
  periodoMigliore:
    'si può andare tutto l\'anno: la temperatura è la stessa dodici mesi su dodici, attorno ai 31 gradi con umidità altissima. Febbraio-aprile sono i mesi statisticamente meno piovosi; da giugno a ottobre può arrivare la foschia da incendi in Indonesia, che è la vera variabile.',
  durataConsigliata:
    '2-3 giorni come tappa a sé, oppure 4-5 giorni usandola come base. Funziona benissimo anche come scalo lungo di 24 ore tra due voli, ed è uno dei pochi aeroporti al mondo dove uno scalo è una buona notizia.',
  budgetIndicativo:
    'la città più cara del sud-est asiatico sugli alloggi (100-180€ a notte per una camera decente) e sull\'alcol, che è tassato pesantemente. Ma i trasporti costano pochi centesimi e un pasto completo in un centro hawker sta tra i 3 e i 6 euro: si può stare a Singapore spendendo poco su tutto tranne il letto.',
  stileViaggio: ['città', 'gastronomia', 'architettura', 'scalo lungo'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. Nessun visto per i cittadini italiani fino a 90 giorni, ma è obbligatoria la **SG Arrival Card**, una dichiarazione digitale gratuita da presentare entro i tre giorni precedenti l\'arrivo sul portale ufficiale dell\'ICA o dall\'app MyICA. Come per la Malesia, non è un visto e non lo sostituisce, ma è richiesta a tutti: va compilata sul sito ufficiale, non su quelli che la fanno pagare. Chi entra via terra dalla Malesia deve compilarla comunque.',
    valuta: 'Dollaro di Singapore (SGD). I dollari di Brunei circolano alla pari, curiosità che vale poco nella pratica.',
    pagamenti:
      'Una delle città più cashless al mondo: carte contactless e pagamenti da telefono funzionano ovunque, compresi i tornelli della metropolitana, dove si appoggia direttamente la propria carta senza bisogno di comprarne una locale. Il contante serve praticamente solo in qualche banco dei centri hawker più vecchi, dove peraltro sta sparendo anche quello.',
    connettivita: 'Wi-Fi pubblico gratuito diffuso, eSIM turistiche economiche, copertura totale. Nulla è bloccato e tutto funziona come in Europa.',
    salute:
      'Standard sanitari tra i più alti al mondo e acqua del rubinetto potabile, cosa rara in tutta la regione. Nessuna vaccinazione obbligatoria. La dengue è presente e ci sono campagne pubbliche costanti: il repellente serve anche qui, per quanto la città sia impeccabile.',
    sicurezza:
      'Uno dei posti più sicuri del pianeta: si cammina ovunque a qualsiasi ora. Il tema semmai è opposto — le regole ci sono e vengono applicate davvero. Multe salate per mangiare o bere in metropolitana, per buttare cartacce, per fumare fuori dalle aree consentite; il chewing gum non si vende (importarlo per uso personale è tollerato, venderlo no); le leggi sulla droga sono tra le più severe al mondo e prevedono la pena capitale per il traffico, senza eccezioni per gli stranieri. Non è folklore: va preso alla lettera.',
    trasportiInterni:
      'La MRT, la metropolitana, è tra le migliori del mondo: pulita, capillare, climatizzata, con annunci in inglese e con i tornelli che accettano direttamente le carte contactless estere. Copre anche l\'aeroporto. Gli autobus completano il resto, i taxi e Grab costano poco per gli standard della città. Tutto è pensato per camminare il meno possibile sotto il sole: i quartieri centrali sono collegati da passaggi sotterranei climatizzati.',
    costoVita:
      'Doppia. Gli alloggi e l\'alcol hanno prezzi da Europa del nord — una birra in un bar costa facilmente 12-15 euro — mentre i trasporti costano pochi centesimi e i centri hawker servono piatti completi per 3-6 euro. Chi dorme in ostello o in hotel-capsula e mangia hawker sta a Singapore con una spesa giornaliera da sud-est asiatico.',
    lingua:
      'Quattro lingue ufficiali: inglese, mandarino, malese e tamil. L\'inglese è la lingua franca e la si parla ovunque con una cadenza tutta locale, il singlish, che mescola le altre tre e usa particelle finali come "lah". Nessuna barriera linguistica.',
    elettricita: '230V, 50Hz, prese di tipo G, britanniche a tre poli rettangolari: stesso adattatore della Malesia.',
    fusoOrario: 'UTC+8: 6 ore avanti rispetto all\'Italia in ora legale, 7 in inverno.',
    clima:
      'Equatoriale e sostanzialmente identico tutto l\'anno: attorno ai 31 gradi di giorno, 25 di notte, umidità molto alta e acquazzoni violenti ma brevi in qualsiasi mese. Il monsone di nord-est (novembre-gennaio) porta le piogge più insistenti. Il vero fattore variabile è la foschia da incendi che arriva dall\'Indonesia in alcuni anni tra giugno e ottobre e che può peggiorare sensibilmente la qualità dell\'aria.',
    festivita:
      'Il calendario riflette le quattro comunità: Capodanno cinese (gennaio-febbraio), che è la festa più sentita e in cui Chinatown si trasforma; Hari Raya Puasa alla fine del Ramadan, con Geylang Serai illuminata; Deepavali a Little India; Natale, che a Orchard Road diventa un fenomeno luminoso di proporzioni notevoli. Nel Capodanno cinese molti locali a gestione familiare chiudono per giorni, centri hawker compresi.',
    emergenze: 'Polizia 999, ambulanza e vigili del fuoco 995. L\'Ambasciata d\'Italia è a Singapore.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'I Supertree di Gardens by the Bay illuminati di sera con lo skyline di Marina Bay alle spalle, Singapore',
  tripPrincipaleSlug: 'malesia-singapore',
}
