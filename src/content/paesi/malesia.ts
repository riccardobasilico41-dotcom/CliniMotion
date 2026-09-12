import type { Paese } from '@/lib/types'

// La Malesia peninsulare e il Borneo malese sono tenuti separati di proposito:
// hanno logistica, tempi e ragioni di viaggio completamente diversi, e mettere
// tutto sotto un\'unica scheda è il modo più rapido per costruire un itinerario
// sbagliato. Vedi src/content/paesi/borneo.ts.
// I campi miaEsperienza nelle destinazioni e nelle esperienze sono bozze
// scritte da Claude nella voce del diario, basate su ciò che è oggettivamente
// vero di ogni posto e non su ricordi reali: vanno riletti e sostituiti.
// Nessun nome di hotel, ristorante o operatore è stato inventato.

export const malesia: Paese = {
  slug: 'malesia',
  nome: 'Malesia',
  continente: 'Asia',
  titolo: 'Malesia peninsulare: tre culture in un paese solo, e un\'ottima scusa per mangiare',
  descrizione:
    'Il paese più sottovalutato del sud-est asiatico, e probabilmente quello dove si mangia meglio: malesi, cinesi e indiani convivono da generazioni nelle stesse città, e il risultato è una cucina che non esiste da nessun\'altra parte. Ha strade buone, trasporti seri, inglese diffuso e prezzi bassi — il che ne fa la meta ideale per chi vuole il sud-est asiatico senza la fatica organizzativa.',
  periodoMigliore:
    'da dicembre a marzo per la costa ovest (Penang, Langkawi, Malacca) e da maggio a settembre per la costa est e le Perhentian, che nel monsone di nord-est chiudono quasi del tutto. Non esiste un mese buono per tutto il paese contemporaneamente: la scelta della costa viene prima della scelta delle date.',
  durataConsigliata:
    '10-12 giorni per Kuala Lumpur, Penang, Malacca, le Cameron Highlands e un\'isola; 14-16 giorni aggiungendo Taman Negara e Singapore in coda, che sta a quattro ore di bus da Malacca',
  budgetIndicativo:
    'tra i più bassi del sud-est asiatico: pasti ai food court da 2-4€, hotel di buon livello 30-50€, autobus interurbani comodissimi per pochi euro. Le voci che pesano sono i voli interni e le isole in alta stagione.',
  stileViaggio: ['gastronomia', 'città coloniali', 'isole', 'multiculturale'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. Nessun visto per i cittadini italiani fino a 90 giorni, ma dal 1° gennaio 2024 è obbligatoria la **MDAC** (Malaysia Digital Arrival Card): una dichiarazione online gratuita da compilare entro i tre giorni precedenti l\'arrivo, richiesta a tutti gli stranieri e per qualsiasi via d\'ingresso — aerea, terrestre o marittima. Non è un visto e non lo sostituisce: è una formalità, ma senza si resta bloccati al controllo passaporti. Va compilata sul portale ufficiale dell\'Immigrazione malese, diffidando dei siti che la fanno pagare.',
    valuta: 'Ringgit malese (MYR). Si cambia facilmente in aeroporto e nei money changer delle città, che hanno tassi migliori delle banche.',
    pagamenti:
      'Carte accettate in hotel, centri commerciali e ristoranti, ma il contante resta indispensabile per i food court, i mercati e i trasporti locali — cioè per la parte migliore del viaggio. Gli ATM sono ovunque. Sul posto conviene attivare Touch \'n Go, il portafoglio digitale usato da tutti: serve per i pedaggi, alcuni trasporti e moltissimi banchi, anche se per gli stranieri la registrazione non è sempre immediata.',
    connettivita: 'SIM ed eSIM turistiche economiche e con ottima copertura (Maxis, Celcom, Digi), acquistabili in aeroporto col passaporto. Wi-Fi diffuso. Grab è l\'app per i taxi e funziona in tutto il paese con carta estera: è il mezzo di trasporto urbano di fatto.',
    salute:
      'Nessuna vaccinazione obbligatoria, ma quella contro l\'epatite A e il tifo è raccomandata, e per chi va nelle zone interne vale la pena parlare di antimalarici con il medico — il rischio in penisola è basso, nel Borneo è un discorso diverso. La dengue invece è presente tutto l\'anno e in tutto il paese, comprese le città: il repellente è la vera profilassi. La sanità privata malese è ottima e molto più economica di quella europea. L\'acqua del rubinetto non si beve.',
    sicurezza:
      'Paese tranquillo e abituato ai viaggiatori, con criminalità comune bassa. L\'attenzione va ai borseggi e agli scippi da moto nelle zone affollate di Kuala Lumpur. Va tenuto presente che la Malesia è un paese musulmano con una forte componente cinese e indiana: nelle zone più conservatrici della costa est (Kelantan, Terengganu) l\'abbigliamento coperto non è un consiglio ma una forma di rispetto attesa, e l\'alcol è poco disponibile. Le leggi sulla droga prevedono pene durissime, fino alla pena capitale per il traffico.',
    trasportiInterni:
      'Ottimi e semplici. Gli autobus interurbani sono comodi, puntuali ed economici, con sedili larghi anche nelle classi base: sono il mezzo normale per muoversi tra le città. Il treno ETS collega Kuala Lumpur a Ipoh e Penang in poche ore ed è la scelta più comoda sulla dorsale ovest. I voli interni di AirAsia e Batik costano pochissimo e servono soprattutto per il Borneo, che dalla penisola dista due ore e mezza di volo. Nelle città, Grab risolve tutto.',
    costoVita:
      'Tra i più bassi della regione a parità di qualità. Un pasto completo in un food court sta sotto i 4 euro, una camera doppia buona attorno ai 35-50, l\'autobus tra due città costa meno di 10. Le uniche voci care sono l\'alcol — pesantemente tassato — e le isole in alta stagione.',
    lingua:
      'Malese (bahasa melayu), ma l\'inglese è diffuso e parlato bene quasi ovunque: è probabilmente il paese più facile del sud-est asiatico da questo punto di vista. Si sentono correntemente anche il cinese mandarino, l\'hokkien, il cantonese e il tamil, spesso nella stessa strada.',
    elettricita: '240V, 50Hz, prese di tipo G, le stesse britanniche a tre poli rettangolari: l\'adattatore serve e non è quello europeo.',
    fusoOrario: 'UTC+8 per tutto il paese: 6 ore avanti rispetto all\'Italia in ora legale, 7 in inverno.',
    clima:
      'Equatoriale, caldo e umido tutto l\'anno, con temperature stabili attorno ai 30 gradi e acquazzoni pomeridiani in qualunque stagione. La differenza la fanno i monsoni, e vanno letti al contrario tra le due coste: sulla costa ovest (Penang, Langkawi, Malacca) il periodo migliore va da dicembre a marzo; sulla costa est e alle Perhentian il monsone di nord-est, da novembre a febbraio, chiude quasi tutto e la stagione buona è da maggio a settembre. Nelle Cameron Highlands, a 1.500 metri, si sta sui 15-20 gradi e la sera fa freddo.',
    festivita:
      'Il paese segue calendari diversi contemporaneamente e questo è un pregio: il Capodanno cinese (gennaio-febbraio), il Deepavali indù (ottobre-novembre) e l\'Hari Raya musulmano si festeggiano tutti. Durante il Ramadan molti locali malesi chiudono di giorno, ma i quartieri cinesi e indiani restano aperti normalmente, e i bazar serali del Ramadan sono uno dei momenti gastronomici migliori dell\'anno. Nei giorni di Hari Raya e di Capodanno cinese i trasporti sono presi d\'assalto e molte attività chiudono per giorni.',
    emergenze: 'Polizia e ambulanza 999. L\'Ambasciata d\'Italia è a Kuala Lumpur.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Le Petronas Twin Towers illuminate al tramonto sullo skyline di Kuala Lumpur',
  tripPrincipaleSlug: 'malesia-singapore',
}
