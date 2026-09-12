import type { Esperienza } from '@/lib/types'

// I campi miaEsperienza e i giudizi sono bozze scritte da Claude nella voce
// del diario, coerenti con ciò che è oggettivamente vero di ogni esperienza
// (regole d\'accesso, stagione, contingentamenti) ma non basate su ricordi
// reali: vanno riletti e confermati o corretti. Nessun operatore, hotel o
// ristorante è stato inventato.
// Regole di accesso e prezzi in Arabia Saudita cambiano in fretta: vanno
// riverificati sui canali ufficiali prima di partire.

export const esperienzeArabiaSaudita: Esperienza[] = [
  {
    slug: 'hegra-alula',
    paeseSlug: 'arabia-saudita',
    destinazioneSlug: 'alula',
    nome: 'Hegra, la Petra senza fila',
    localita: 'AlUla, provincia di Medina',
    cosE:
      'Il sito nabateo più importante dopo Petra: centoundici tombe monumentali scavate nell\'arenaria tra il I secolo a.C. e il I d.C., con facciate elaborate, iscrizioni ancora leggibili e la Qasr al-Farid, la tomba isolata rimasta incompiuta. Primo sito saudita iscritto nel patrimonio UNESCO, nel 2008.',
    percheFarla:
      'Perché è l\'altra capitale del regno nabateo — la stessa civiltà di Petra, la stessa tecnica, la stessa epoca — conservata meglio perché l\'arenaria qui è più resistente, e con una differenza che cambia tutto: non c\'è quasi nessuno.',
    durata: 'mezza giornata per la visita guidata standard',
    periodo:
      'da ottobre a marzo, con dicembre e febbraio come mesi migliori. In estate si superano i 40 gradi e il sito, che è tutto all\'aperto e senza ombra, diventa impraticabile.',
    costo: 'biglietto con visita guidata, contingentato, da prenotare online; esistono formule combinate con gli altri siti dell\'area',
    comePrenotare:
      'Online, in anticipo, sul portale ufficiale di AlUla. **L\'accesso è solo con visita guidata e con numeri contingentati**: non si entra in autonomia né con il proprio mezzo, si sale sui bus del sito con una guida (i rawi, i narratori, che sono in gran parte gente del posto). Nei mesi di punta gli slot si esauriscono.',
    cosaPortare:
      'Cappello, crema solare e acqua: non c\'è un metro d\'ombra tra una tomba e l\'altra. Scarpe comode, e abbigliamento rispettoso delle norme del paese — braccia e gambe coperte.',
    perChiEAdatta:
      'A tutti: si viaggia in bus tra i gruppi di tombe e si cammina poco e in piano. È una delle visite archeologiche più accessibili che esistano.',
    miaEsperienza:
      'Chi arriva pensando "Petra senza turisti" trova una cosa diversa e vale la pena saperlo prima: qui le tombe sono centoundici contro le centinaia di Petra, non c\'è un Siq che costruisca l\'effetto sorpresa, e non c\'è un Tesoro. Ma quello che c\'è non esiste più da nessun\'altra parte. Si sta davanti a una facciata nabatea scolpita duemila anni fa, alta dieci metri, con l\'iscrizione sull\'architrave ancora leggibile — nome del proprietario, anno, avvertimento a chi violi la tomba — e intorno non c\'è nessuno: nessun venditore, nessun cammello agghindato, nessun gruppo con la bandierina. La Qasr al-Farid è il pezzo che spiega meglio come lavoravano: è rimasta incompiuta, quindi la parte alta è finita e quella bassa è ancora roccia grezza, e si vede che scolpivano dall\'alto verso il basso. La cosa pratica da sapere è che non si gira liberamente: si entra solo con visita guidata e con prenotazione, si viaggia in bus tra i gruppi di tombe, e la sosta a ciascuno è cronometrata. È il prezzo di un sito che si sta aprendo adesso e che ha scelto di contingentare prima di rovinarsi.',
    giudizio: 'imperdibile',
    alternative: [
      'Jabal Ikmah, la "biblioteca a cielo aperto" con centinaia di iscrizioni in quattro alfabeti antichi, poco lontano',
      'Dadan, la capitale dei regni precedenti ai nabatei, compresa nella stessa area',
      'Petra in Giordania, per il confronto: più grande e più spettacolare, ma con la folla che qui non c\'è',
    ],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Facciata nabatea scolpita nell\'arenaria a Hegra, AlUla, Arabia Saudita',
  },
  {
    slug: 'al-balad-jeddah',
    paeseSlug: 'arabia-saudita',
    destinazioneSlug: 'jeddah',
    nome: 'Al-Balad al tramonto',
    localita: 'Centro storico di Jeddah',
    cosE:
      'Il centro storico di Jeddah, patrimonio UNESCO dal 2014: case-torre alte fino a cinque piani costruite in pietra corallina estratta dal Mar Rosso, con i rawashin — le facciate di legno di teak intagliato che coprono le finestre, costruite per far circolare l\'aria e permettere di guardare fuori senza essere visti.',
    percheFarla:
      'Perché è l\'unico centro storico camminabile dell\'Arabia Saudita e perché quell\'architettura non esiste altrove: il legno arrivava dall\'India e dal sud-est asiatico sulle stesse navi che portavano i pellegrini, e la pietra viene dal reef davanti alla città.',
    durata: '2-3 ore, nel tardo pomeriggio',
    periodo:
      'da novembre a marzo. Jeddah è umida tutto l\'anno e in estate camminare in Al-Balad a qualsiasi ora è faticoso. Il momento giusto è comunque sempre l\'ultima ora di luce.',
    costo: 'il quartiere si cammina gratuitamente; le case-museo hanno biglietti contenuti',
    comePrenotare:
      'Niente da prenotare per il quartiere. Alcune case restaurate e i musei interni hanno orari propri e vanno controllati. Esistono visite guidate organizzate, utili perché molte case sono chiuse e senza contesto si guardano solo facciate.',
    cosaPortare:
      'Abbigliamento coperto, secondo le norme del paese. E la disponibilità a non fotografare le persone senza chiedere: qui è un tema più sensibile che altrove nella regione.',
    perChiEAdatta: 'A tutti: è un quartiere pianeggiante che si gira a piedi. Attenzione ai cantieri: molte case sono puntellate e alcune strade sono chiuse per il restauro in corso.',
    miaEsperienza:
      'Al-Balad è la ragione per cui Jeddah vale due giorni e non mezza giornata, ma va visto nell\'ora giusta. Di giorno è un quartiere polveroso pieno di impalcature, con case puntellate e strade chiuse: il restauro è in corso e non è uniforme. Poi la luce si abbassa e prende i rawashin — quelle facciate di legno di teak intagliato, alcune alte quattro piani, con i pannelli scorrevoli e i motivi geometrici — e il quartiere diventa un\'altra cosa. Il legno arrivava dall\'India sulle navi dei pellegrini e la pietra dai reef del Mar Rosso a poche centinaia di metri: una città costruita letteralmente con quello che passava dal porto. Vale la pena sapere che Al-Balad si sta vedendo a metà strada: molte case sono crollate negli anni in cui nessuno se ne occupava, il restauro è partito da poco e sta cambiando il quartiere in fretta. Chi ci va adesso lo vede in una fase che tra dieci anni non ci sarà più — né in meglio né in peggio, semplicemente diversa.',
    giudizio: 'imperdibile',
    alternative: [
      'La Corniche di Jeddah il giovedì sera, per la parte sociale invece che architettonica',
      'Diriyah a Riyadh, l\'altro grande centro storico restaurato del paese, costruito in fango invece che in corallo',
    ],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'Le facciate di legno intagliato di una casa-torre di Al-Balad a Jeddah',
  },
  {
    slug: 'diriyah',
    paeseSlug: 'arabia-saudita',
    destinazioneSlug: 'riyadh-diriyah',
    nome: 'Diriyah e il quartiere di At-Turaif',
    localita: 'Alla periferia di Riyadh',
    cosE:
      'La capitale originale della dinastia Saud, fondata nel XV secolo lungo il wadi Hanifa e costruita interamente in mattoni di fango: palazzi a più piani, moschee e mura, distrutti dagli ottomani nel 1818 e restaurati negli ultimi anni. Il quartiere di At-Turaif è patrimonio UNESCO dal 2010.',
    percheFarla:
      'Perché è il luogo di nascita dello stato saudita e perché l\'architettura najdi in fango — con i motivi triangolari sulle facciate e le travi di palma a vista — è completamente diversa da tutto il resto della penisola.',
    durata: '2-3 ore, nel tardo pomeriggio',
    periodo:
      'da novembre a marzo. L\'interno saudita in estate supera i 45 gradi e il sito è in gran parte all\'aperto.',
    costo: 'biglietto d\'ingresso per At-Turaif, con i musei interni compresi',
    comePrenotare:
      'Online o all\'ingresso; nei periodi di punta e nei fine settimana conviene in anticipo. Gli orari serali sono quelli più belli e anche i più richiesti.',
    cosaPortare: 'Abbigliamento coperto secondo le norme del paese; scarpe comode per i vicoli in terra battuta.',
    perChiEAdatta: 'A tutti: percorsi in piano e ben tenuti, con parti accessibili.',
    miaEsperienza:
      'Diriyah è il posto in cui l\'Arabia Saudita racconta se stessa, e l\'ha restaurata di conseguenza: il complesso è curatissimo, con illuminazione studiata, musei interni e una parte commerciale attorno che sta crescendo in fretta. Detto questo, funziona. I palazzi di At-Turaif sono costruiti in mattoni di fango e paglia, con le travi di palma a vista e le facciate decorate da motivi triangolari che servono a far circolare l\'aria, e nell\'ultima ora di luce il colore passa dall\'ocra all\'arancione bruciato — è il momento per cui vale la pena arrivare tardi invece che a mezzogiorno, quando il fango riverbera e le fotografie vengono piatte. La cosa che colpisce, guardando dal bordo del wadi, è quanto sia recente tutta questa storia: da qui, nel 1744, partì l\'alleanza che ha prodotto lo stato saudita; nel 1818 gli ottomani rasero al suolo la città; e a poco più di venti chilometri c\'è oggi una capitale di sette milioni di abitanti con i grattacieli. Duecento anni scarsi.',
    giudizio: 'imperdibile',
    alternative: [
      'Il Museo Nazionale Saudita a Riyadh, per il contesto storico completo della penisola',
      'Masmak Fort, la fortezza di fango da cui nel 1902 iniziò la riconquista, in pieno centro',
    ],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'I palazzi in mattoni di fango del quartiere di At-Turaif a Diriyah al tramonto',
  },
  {
    slug: 'edge-of-the-world',
    paeseSlug: 'arabia-saudita',
    destinazioneSlug: 'riyadh-diriyah',
    nome: 'L\'Edge of the World',
    localita: 'Jebel Fihrayn, scarpata del Tuwaiq, a circa 90 km da Riyadh',
    cosE:
      'Il punto in cui l\'altopiano del Najd si interrompe di colpo: una scarpata di roccia calcarea che scende per trecento metri su una pianura desertica che continua fino all\'orizzonte, senza recinzioni, senza biglietti e senza costruzioni. Faceva parte di una via carovaniera antica.',
    percheFarla:
      'Perché è una delle viste più spettacolari della penisola arabica e sta a un\'ora e mezza dalla capitale, e perché è l\'esatto opposto di tutto quello che il Golfo mostra di solito: nessuna infrastruttura, nessuna gestione, nessuno spettacolo di luci.',
    durata: 'mezza giornata, meglio nel pomeriggio per restare al tramonto',
    periodo:
      'da novembre a marzo. In estate è pericoloso per il caldo e le escursioni vengono sospese. Dopo le piogge la pista può diventare impraticabile.',
    costo: 'gratuito il sito; l\'escursione con 4x4 e autista costa indicativamente 300-600 riyal a persona',
    comePrenotare:
      'Con un operatore che fornisce 4x4 e autista, prenotando con qualche giorno di anticipo nei weekend invernali. **Andarci in autonomia con un\'auto normale è una cattiva idea**: l\'ultimo tratto è pista, non c\'è segnaletica, il campo telefonico va e viene e ogni anno qualcuno resta bloccato.',
    cosaPortare:
      'Acqua in quantità, scarpe con buona presa — il bordo è roccia friabile — e qualcosa di caldo per il tramonto, perché nel deserto la temperatura crolla appena il sole scende.',
    perChiEAdatta:
      'A chi non ha problemi con l\'esposizione: **non ci sono parapetti di nessun tipo**, il bordo è netto e la roccia sbriciola. È una cosa che va detta chiaramente, perché la fotografia classica si scatta a pochi centimetri dal vuoto.',
    miaEsperienza:
      'Il nome sembra una trovata di marketing e invece è la descrizione più economica possibile di quello che si vede. Dopo un\'ora e mezza, di cui l\'ultima mezz\'ora su pista, si arriva in cima a una scarpata e davanti non c\'è più niente: trecento metri di parete verticale e poi una pianura piatta che continua fino a perdersi nella foschia. Non c\'è un parapetto, non c\'è una biglietteria, non c\'è un chiosco — e in inverno ci si trovano poche decine di persone in tutto. È la cosa più bella vista in Arabia Saudita insieme a Hegra, e le due sono agli antipodi: quella gestita e contingentata, questa completamente libera. Proprio per questo serve una precisazione seria: il bordo è friabile, non c\'è nessuna protezione, e la foto che tutti fanno seduti sul ciglio si scatta a pochi centimetri da un salto di trecento metri. Vale la pena andarci nel pomeriggio e restare al tramonto, quando la roccia diventa rossa — ma il rientro poi si fa al buio su pista, e questa è un\'altra ragione per non guidare da soli.',
    giudizio: 'imperdibile',
    alternative: [
      'Le formazioni di arenaria attorno ad AlUla, per un paesaggio desertico diverso e più accessibile',
      'Il wadi Hanifa, alle porte di Riyadh, per una gita più semplice e senza 4x4',
    ],
    tripSlugs: ['arabia-saudita-itinerario'],
    imageAlt: 'La scarpata del Tuwaiq che scende sulla pianura desertica all\'Edge of the World, Riyadh',
  },
]
