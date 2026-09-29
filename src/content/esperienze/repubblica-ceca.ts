import type { Esperienza } from '@/lib/types'

// Prima uscita ceca dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/repubblica-ceca.ts). Prezzi, orari e regole di
// prenotazione cambiano spesso e vanno riverificati sui canali ufficiali
// prima di prenotare.

export const esperienzeRepubblicaCeca: Esperienza[] = [
  {
    slug: 'praga-castello-biglietto',
    paeseSlug: 'repubblica-ceca',
    destinazioneSlug: 'praga',
    nome: 'Percorso dei visitatori del Castello di Praga e Cattedrale di San Vito',
    localita: 'Hradčany, colle del Castello, Praga',
    cosE:
      'Il "Circuito A" (Main Visitor Route), il biglietto che copre le principali attrazioni del complesso: l\'interno della Cattedrale di San Vito, il Vecchio Palazzo Reale, la Basilica di San Giorgio e il Vicolo d\'Oro con la Torre Daliborka. L\'accesso ai cortili del Castello e alla navata esterna della Cattedrale resta gratuito; solo l\'ingresso alle sale interne richiede il biglietto.',
    percheFarla:
      'Perché il Castello di Praga è tra i complessi castellani chiusi più grandi al mondo e la Cattedrale di San Vito, al suo interno, è il monumento gotico più importante del paese: senza biglietto si vedono solo l\'esterno e i cortili, perdendo interni, cripte reali e vetrate.',
    durata: 'mezza giornata (3-4 ore) per il percorso completo con code incluse in alta stagione',
    periodo: 'tutto l\'anno; l\'estate porta code più lunghe agli ingressi, l\'inverno un clima più rigido ma meno folla',
    costo: 'biglietto del Circuito A attorno ai 450 CZK per adulto (circa 18-20€); la salita alla Grande Torre Sud della Cattedrale ha un biglietto separato, attorno ai 200 CZK',
    comePrenotare: 'Acquistabile online sul sito ufficiale del Castello o in loco alle biglietterie; consigliato l\'acquisto anticipato online nei weekend e in alta stagione per saltare la coda.',
    cosaPortare: 'Scarpe comode: il percorso comprende molti scalini, sia nella cattedrale sia nel Vicolo d\'Oro.',
    perChiEAdatta: 'Adatta praticamente a tutti; le code più lunghe (soprattutto per l\'ingresso alla Cattedrale) rendono la visita più faticosa con bambini piccoli nei mesi centrali dell\'estate.',
    giudizio: 'da-verificare',
    alternative: ['Visitare solo i cortili esterni e la navata della Cattedrale, gratuiti, per chi ha poco tempo o budget limitato'],
    tripSlugs: ['praga-weekend'],
    imageAlt: 'La facciata gotica della Cattedrale di San Vito vista dal cortile del Castello di Praga',
  },
  {
    slug: 'praga-josefov-jewish-town',
    paeseSlug: 'repubblica-ceca',
    destinazioneSlug: 'praga',
    nome: 'Jewish Town Ticket — quartiere ebraico di Josefov',
    localita: 'Josefov, Staré Město, Praga',
    cosE:
      'Il biglietto unico del Museo Ebraico di Praga che dà accesso a sei siti storici di Josefov: la Sinagoga Vecchia-Nuova (Staronová synagoga, la più antica sinagoga attiva d\'Europa, con biglietto separato), l\'Antico Cimitero Ebraico con le sue migliaia di lapidi sovrapposte, e le sinagoghe Pinkas, Maisel, Klausen e Spagnola, ciascuna oggi sede di un\'esposizione diversa sulla storia della comunità ebraica ceca.',
    percheFarla:
      'Perché Josefov, nel cuore di Staré Město, conserva una delle collezioni di sinagoghe storiche meglio preservate d\'Europa, sopravvissuta paradossalmente proprio perché i nazisti la vollero conservare come "museo di una razza estinta" — un fatto che dà al quartiere un peso storico che la sola passeggiata tra le vie eleganti di oggi non trasmette.',
    durata: 'circa 2-3 ore per visitare tutti i siti inclusi nel biglietto con calma',
    periodo: 'tutto l\'anno; alcuni siti chiudono per le festività ebraiche e il sabato (Shabbat), da verificare in anticipo',
    costo: 'Jewish Town Ticket attorno ai 600 CZK per adulto; la Sinagoga Vecchia-Nuova richiede un biglietto a parte',
    comePrenotare: 'Acquistabile online sul sito del Museo Ebraico di Praga o direttamente alle biglietterie delle sinagoghe Spagnola, Klausen o Pinkas; non serve prenotazione con largo anticipo fuori dai weekend di alta stagione.',
    cosaPortare: 'Nessuna attrezzatura particolare; abbigliamento rispettoso per l\'ingresso nei luoghi di culto.',
    perChiEAdatta: 'Adatta a chi vuole capire la storia della comunità ebraica praghese oltre alla superficie del quartiere; meno indicata a chi ha solo mezza giornata e vuole vedere anche il resto di Staré Město.',
    giudizio: 'da-verificare',
    alternative: ['Un tour guidato a piedi del quartiere ebraico, con biglietti d\'ingresso inclusi, per chi preferisce un racconto guidato invece della sola visita autonoma'],
    tripSlugs: ['praga-weekend'],
    imageAlt: 'Le lapidi fitte e sovrapposte dell\'Antico Cimitero Ebraico di Josefov, Praga',
  },
  {
    slug: 'praga-degustazione-birra',
    paeseSlug: 'repubblica-ceca',
    destinazioneSlug: 'praga',
    nome: 'Degustazione di birra ceca in un hospoda tradizionale',
    localita: 'Fuori dal centro più turistico — Žižkov, Vinohrady o Holešovice, Praga',
    cosE:
      'Una serata (o un tour guidato) tra due o tre hospoda, i pub tradizionali cechi, per assaggiare diverse birre alla spina — dalle pilsner più note ai marchi locali meno esportati — nei locali frequentati soprattutto dai residenti, lontano dai prezzi gonfiati del centro storico.',
    percheFarla:
      'Perché la Repubblica Ceca ha il consumo di birra pro capite più alto al mondo e la cultura dell\'hospoda è un pezzo di identità nazionale tanto quanto i monumenti: capirla da dentro, in un locale di quartiere, racconta Praga meglio di molte tappe turistiche.',
    durata: 'circa 2-3 ore, in genere in tardo pomeriggio o serata',
    periodo: 'tutto l\'anno, essendo un\'esperienza prevalentemente al chiuso',
    costo: 'un mezzo litro di birra alla spina in un pub di quartiere costa indicativamente 55-80 CZK; un tour guidato con più tappe e assaggi si aggira sui 30-50€ a persona',
    comePrenotare: 'I tour tematici si prenotano tramite le piattaforme di tour online; per la versione autonoma non serve prenotazione, solo scegliere pub fuori dall\'asse più turistico.',
    cosaPortare: 'Nessuna attrezzatura particolare.',
    perChiEAdatta: 'Adatta a chi vuole un\'esperienza autentica senza pagare i prezzi da zona turistica; meno indicata a chi non beve alcolici, per cui restano comunque interessanti gli hospoda per il cibo.',
    giudizio: 'da-verificare',
    alternative: ['Un birrificio artigianale con visita e degustazione, per chi cerca qualcosa di più strutturato di una semplice serata al pub'],
    tripSlugs: ['praga-weekend'],
    imageAlt: 'Boccali di birra ceca alla spina su un tavolo di legno in un hospoda tradizionale di Praga',
  },
]
