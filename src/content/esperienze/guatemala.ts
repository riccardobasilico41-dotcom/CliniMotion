import type { Esperienza } from '@/lib/types'

// Paese non ancora visitato: miaEsperienza assente e giudizio 'da-verificare'
// ovunque. Prezzi e modalità sono indicativi, da riverificare prima di
// prenotare.

export const esperienzeGuatemala: Esperienza[] = [
  {
    slug: 'trekking-acatenango',
    paeseSlug: 'guatemala',
    destinazioneSlug: 'antigua-guatemala',
    nome: 'Trekking notturno all\'Acatenango',
    localita: 'Vulcano Acatenango, vicino Antigua Guatemala',
    cosE:
      'Un trekking di due giorni con notte in campo sul fianco del vulcano Acatenango (3.976 m), da cui si osserva il vicino Fuego — uno dei vulcani più attivi al mondo — eruttare a intervalli regolari, spesso più volte in una notte. Si sale in 5-6 ore con 1.500 metri di dislivello, si dorme in tenda o in rifugio e si scende la mattina dopo.',
    percheFarla:
      'È l\'esperienza simbolo del Guatemala: poche volte si può guardare dall\'alto, e da distanza di sicurezza, un vulcano che erutta lava in diretta per tutta la notte.',
    durata: '2 giorni, 1 notte',
    periodo: 'tutto l\'anno, molto meglio nella stagione secca (novembre-aprile) per i sentieri e per la visibilità notturna',
    costo:
      'indicativamente 60-120€ a persona a seconda dell\'operatore e del livello del campo, con attrezzatura, pasti e guida inclusi; l\'escursione extra fino alla base del Fuego costa in genere 20-30€ in più',
    comePrenotare: 'Tramite le agenzie del centro di Antigua o direttamente con gli operatori specializzati, anche il giorno prima fuori stagione; in alta stagione conviene prenotare con qualche giorno di anticipo.',
    cosaPortare:
      'Strati termici veri: in campo si scende vicino allo zero. Scarpe da trekking con buona presa, torcia frontale, almeno 3-4 litri d\'acqua (spesso non inclusa), guanti e berretto.',
    perChiEAdatta:
      'Richiede una discreta forma fisica: il dislivello è importante, il terreno è sabbia vulcanica che cede sotto i piedi e l\'altitudine si sente. I porter per lo zaino si possono ingaggiare a parte.',
    giudizio: 'da-verificare',
    alternative: ['Vulcano Pacaya in mezza giornata, molto più semplice ma senza eruzioni dal vivo garantite'],
    tripSlugs: [],
    imageAlt: 'Il vulcano Fuego in eruzione visto di notte dal campo sull\'Acatenango, Guatemala',
  },
  {
    slug: 'lance-villaggi-atitlan',
    paeseSlug: 'guatemala',
    destinazioneSlug: 'lago-atitlan',
    nome: 'Giro dei villaggi del lago Atitlán in lancha',
    localita: 'Lago Atitlán, tra Panajachel, San Juan, San Pedro e Santiago',
    cosE:
      'Le lance sono le barche pubbliche che collegano i villaggi del lago, l\'unico vero mezzo di trasporto della zona: partono a riempimento dai moli principali e permettono di costruirsi un giro su misura, saltando da un paese all\'altro nell\'arco di una giornata.',
    percheFarla:
      'Ogni villaggio del lago ha un\'identità diversa — tessitura a San Juan, vita tradizionale a Santiago, scuole di spagnolo a San Pedro, yoga a San Marcos — e il modo giusto per capirlo è vederne almeno tre o quattro di seguito.',
    durata: 'una giornata per 3-4 villaggi; ogni tratta dura tra i 10 e i 40 minuti',
    periodo: 'tutto l\'anno, sempre al mattino: dal primo pomeriggio si alza il vento Xocomil e il lago diventa mosso',
    costo: 'indicativamente 10-25 GTQ a tratta (1-3€), da pagare in contanti a bordo',
    comePrenotare: 'Nessuna prenotazione: ci si presenta al molo e si aspetta la partenza successiva, con corse frequenti fino al tramonto.',
    cosaPortare: 'Contanti in quetzales in piccoli tagli, giacca antivento e antispruzzo, protezione solare.',
    perChiEAdatta: 'Adatta a tutti; chi soffre il mal di mare farebbe bene a viaggiare la mattina presto, quando l\'acqua è ferma.',
    giudizio: 'da-verificare',
    alternative: ['Tour organizzato in barca privata con guida, più caro ma con orari garantiti'],
    tripSlugs: [],
    imageAlt: 'Lancha pubblica in navigazione sul lago Atitlán con i vulcani sullo sfondo, Guatemala',
  },
  {
    slug: 'alba-tikal',
    paeseSlug: 'guatemala',
    destinazioneSlug: 'tikal-flores',
    nome: 'Alba a Tikal dal Tempio IV',
    localita: 'Parco Nazionale di Tikal, Petén',
    cosE:
      'L\'ingresso anticipato al parco, prima dell\'apertura ordinaria, per raggiungere la piattaforma del Tempio IV e assistere al risveglio della giungla: prima il buio e i richiami delle scimmie urlatrici, poi la luce che scopre le cime dei templi sopra la volta della foresta.',
    percheFarla:
      'Più che per l\'alba in sé — spesso velata dalla foschia — vale per il sonoro: il coro di scimmie urlatrici e uccelli al primo chiarore è l\'esperienza che nessuna visita diurna può restituire.',
    durata: 'circa 3-4 ore per la parte all\'alba, poi si prosegue con la visita del sito',
    periodo: 'tutto l\'anno; nella stagione secca la foschia mattutina è frequente, nella stagione delle piogge il cielo è a volte più limpido all\'alba',
    costo: 'ingresso al parco circa 150 GTQ più il supplemento per l\'ingresso anticipato, con guida obbligatoria in quella fascia oraria',
    comePrenotare: 'Tramite le agenzie di Flores o direttamente con gli hotel dentro il parco, il giorno prima; la partenza è intorno alle 3:00-4:00 del mattino.',
    cosaPortare: 'Torcia frontale, repellente per insetti, acqua abbondante, scarpe chiuse per i sentieri umidi.',
    perChiEAdatta: 'Adatta a tutti, con la sola accortezza della sveglia molto presto e di alcuni chilometri a piedi nella giungla al buio.',
    giudizio: 'da-verificare',
    alternative: ['Tramonto a Yaxhá, sito vicino molto meno affollato, spesso preferito proprio per la luce serale'],
    tripSlugs: [],
    imageAlt: 'Le cime dei templi di Tikal che emergono dalla giungla nella luce dell\'alba, Guatemala',
  },
]
