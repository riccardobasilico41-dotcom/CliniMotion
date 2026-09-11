import type { Esperienza } from '@/lib/types'

// Paese non ancora visitato: miaEsperienza assente e giudizio 'da-verificare'
// ovunque. Prezzi e modalità sono indicativi, da riverificare prima di
// prenotare.

export const esperienzePanama: Esperienza[] = [
  {
    slug: 'chiuse-miraflores',
    paeseSlug: 'panama',
    destinazioneSlug: 'panama-city',
    nome: 'Le chiuse di Miraflores sul Canale di Panama',
    localita: 'Miraflores, Panama City',
    cosE:
      'Il centro visitatori affacciato sulle chiuse di Miraflores, con terrazza panoramica, museo su quattro piani e proiezione sulla storia del canale. Dalla terrazza si assiste al passaggio delle navi, che vengono sollevate o abbassate di diversi metri in pochi minuti.',
    percheFarla:
      'Vedere una portacontainer da centinaia di metri entrare in una vasca con pochi centimetri di margine per lato è il modo più diretto per capire cosa significhi davvero il canale — un\'opera che ha ridisegnato il commercio mondiale.',
    durata: '2-3 ore, includendo museo e attesa del transito',
    periodo: 'tutto l\'anno; le fasce orarie con più transiti sono in genere la mattina presto e il tardo pomeriggio',
    costo: 'ingresso per stranieri indicativamente 20 USD, con museo e terrazza inclusi',
    comePrenotare: 'Biglietto acquistabile online o in loco; conviene controllare in anticipo il programma dei transiti previsti per non trovare le chiuse ferme.',
    cosaPortare: 'Protezione solare e acqua: la terrazza è in parte scoperta e l\'umidità è alta.',
    perChiEAdatta: 'Adatta a tutti, bambini inclusi; struttura accessibile e ben organizzata.',
    giudizio: 'da-verificare',
    alternative: [
      'Chiuse di Agua Clara, sul lato caraibico, più recenti e meno affollate',
      'Transito parziale del canale in barca (mezza giornata o giornata intera), per attraversare davvero una chiusa',
    ],
    tripSlugs: [],
    imageAlt: 'Nave che attraversa le chiuse di Miraflores sul Canale di Panama',
  },
  {
    slug: 'notte-isola-san-blas',
    paeseSlug: 'panama',
    destinazioneSlug: 'san-blas',
    nome: 'Notte in cabaña a San Blas',
    localita: 'Arcipelago di Guna Yala (San Blas)',
    cosE:
      'Un pacchetto di una o più notti su una delle isole dell\'arcipelago, gestito dalle famiglie Guna: trasferimento in 4x4 da Panama City fino al porto di Cartí, barca verso l\'isola, alloggio in cabaña essenziale, tutti i pasti e i giri in barca tra gli isolotti inclusi.',
    percheFarla:
      'È il modo per vivere le isole senza la fretta della gita in giornata, e per farlo dentro un territorio indigeno autogovernato, dove il turismo è regolato dalla comunità e non da operatori esterni.',
    durata: 'da 1 a 3 notti; il solo trasferimento richiede circa 3 ore per tratta più la barca',
    periodo: 'tutto l\'anno, mare più calmo nella stagione secca (dicembre-aprile)',
    costo:
      'indicativamente 60-150 USD a persona per notte secondo il livello della cabaña, con pasti e giri in barca inclusi; a parte il transfer 4x4 e barca (40-60 USD a tratta) e le tasse d\'ingresso al territorio Guna',
    comePrenotare: 'Tramite operatori riconosciuti che lavorano con le comunità Guna; partenze da Panama City nelle prime ore del mattino, spesso con ritiro in hotel.',
    cosaPortare:
      'Contanti sufficienti per tutto il soggiorno (nessun bancomat né pagamento con carta sulle isole), torcia, repellente, adattatore inutile dove non c\'è elettricità continua.',
    perChiEAdatta:
      'Adatta a chi accetta sistemazioni essenziali: bagni condivisi, acqua dolce razionata, elettricità solo per poche ore al giorno in molte isole.',
    giudizio: 'da-verificare',
    alternative: [
      'Gita in giornata da Panama City, molto più faticosa per via dei trasferimenti',
      'Traversata a vela San Blas-Cartagena (3-5 giorni), per chi prosegue verso la Colombia',
    ],
    tripSlugs: [],
    imageAlt: 'Cabaña con tetto di palma su un isolotto di sabbia bianca a San Blas, Panama',
  },
  {
    slug: 'alba-volcan-baru',
    paeseSlug: 'panama',
    destinazioneSlug: 'boquete',
    nome: 'Alba sui due oceani dal Volcán Barú',
    localita: 'Parco Nazionale Volcán Barú, Chiriquí',
    cosE:
      'La salita notturna al punto più alto di Panama (3.475 m), partendo attorno a mezzanotte per arrivare in vetta prima dell\'alba: nelle giornate limpide si vedono contemporaneamente l\'Oceano Pacifico e il Mar dei Caraibi. Si sale a piedi lungo una pista sterrata di circa 13-14 km per lato, oppure in 4x4 nella parte iniziale.',
    percheFarla:
      'È uno dei pochissimi punti al mondo da cui si possono vedere due oceani nello stesso sguardo — e comunque, anche senza cielo perfetto, una salita notturna in quota con vista sulle valli illuminate.',
    durata: 'circa 10-12 ore andata e ritorno a piedi; meno con il trasporto in 4x4 per una parte del percorso',
    periodo: 'stagione secca (dicembre-aprile) per le maggiori probabilità di cielo limpido in vetta',
    costo: 'ingresso al parco pochi dollari; salita guidata indicativamente 50-90 USD a persona, tour in 4x4 su richiesta',
    comePrenotare: 'Tramite le agenzie di Boquete, con un giorno o due di anticipo; la guida non è obbligatoria ma è fortemente consigliata per la partenza notturna.',
    cosaPortare:
      'Abbigliamento invernale vero: in vetta prima dell\'alba si sta vicino allo zero con vento. Torcia frontale, guanti, acqua e snack, scarpe da trekking.',
    perChiEAdatta:
      'Richiede buona resistenza: sono molte ore di cammino continuo in salita, di notte e in quota. Chi non se la sente può salire in 4x4 nella parte bassa.',
    giudizio: 'da-verificare',
    alternative: ['Sendero Los Quetzales, molto più leggero, per la foresta nuvolosa e il birdwatching'],
    tripSlugs: [],
    imageAlt: 'Vista dall\'alto del Volcán Barú all\'alba, con le nuvole sotto la vetta, Panama',
  },
]
