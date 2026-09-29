import type { Esperienza } from '@/lib/types'

// Prima uscita austriaca dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/austria.ts). Prezzi, orari e regole di
// prenotazione cambiano spesso e vanno riverificati sui canali ufficiali
// prima di prenotare.

export const esperienzeAustria: Esperienza[] = [
  {
    slug: 'vienna-schonbrunn-biglietto',
    paeseSlug: 'austria',
    destinazioneSlug: 'vienna',
    nome: 'Visita alla Reggia di Schönbrunn',
    localita: 'Schönbrunn, Vienna',
    cosE:
      'Il tour della residenza estiva della famiglia imperiale asburgica, con accesso a una selezione di stanze storiche (dalle circa 1.400 totali) tra cui gli appartamenti dell\'imperatrice Sissi e dell\'imperatore Francesco Giuseppe; i biglietti si dividono in più livelli, dal Tour Imperiale di base al Grand Tour più esteso, con o senza accesso ai giardini e alla Gloriette.',
    percheFarla:
      'Perché Schönbrunn è il monumento più visitato d\'Austria e racconta, meglio di ogni altro luogo della città, come viveva la corte asburgica: sale di rappresentanza, appartamenti privati e un parco barocco che da solo occupa mezza giornata.',
    durata: 'circa 1-1,5 ore per il tour delle stanze, mezza giornata se si aggiungono i giardini e la Gloriette',
    periodo: 'tutto l\'anno; il palazzo ha orari più ampi in estate (fino alle 18:00) e più ridotti in inverno (fino alle 17:00); il parco è gratuito e sempre accessibile durante l\'orario di apertura',
    costo: 'il tour di base parte da circa 26€ per adulto; i giardini e il parco sono gratuiti, la Gloriette e il labirinto hanno un biglietto a parte',
    comePrenotare: 'Vendita ufficiale solo online sul sito di Schönbrunn; fortemente consigliato l\'acquisto anticipato con fascia oraria, soprattutto in alta stagione, per evitare le code in loco.',
    cosaPortare: 'Nessuna attrezzatura particolare; scarpe comode per il parco, molto esteso.',
    perChiEAdatta: 'Adatta a quasi tutti; le code non prenotate in alta stagione la rendono più faticosa con bambini piccoli.',
    giudizio: 'da-verificare',
    alternative: ['Visitare solo il parco e la Gloriette, gratuiti (a parte il biglietto per salire sulla Gloriette), per chi ha poco tempo o budget limitato'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'La facciata gialla della Reggia di Schönbrunn a Vienna vista dai giardini con la Gloriette sullo sfondo',
  },
  {
    slug: 'vienna-opera-stehplatz',
    paeseSlug: 'austria',
    destinazioneSlug: 'vienna',
    nome: 'Biglietto in piedi (Stehplatz) all\'Opera di Stato di Vienna',
    localita: 'Wiener Staatsoper, Innere Stadt, Vienna',
    cosE:
      'I biglietti in piedi della Wiener Staatsoper, venduti il giorno stesso dello spettacolo: 435 posti in piedi ripartiti su tre settori (Stehparterre a platea, Galerie in galleria, Balkon in balconata), con la particolarità che, nonostante il nome, la maggior parte del pubblico finisce seduta a terra sulla moquette per la durata dello spettacolo.',
    percheFarla:
      'Perché è uno dei modi più economici al mondo per assistere a uno spettacolo lirico o di balletto di altissimo livello in una delle sale più prestigiose d\'Europa, e perché fa parte di un\'usanza viennese consolidata più che di un semplice risparmio.',
    durata: 'la durata dello spettacolo, in genere 2-3,5 ore secondo il titolo in cartellone',
    periodo: 'stagione operistica da settembre a giugno; l\'Opera resta chiusa in estate',
    costo: 'da circa 13€ (Balkon) a circa 18€ (Stehparterre) a biglietto, secondo il settore',
    comePrenotare: 'I biglietti in piedi si vendono esclusivamente il giorno stesso: una prima quota online dalle 10:00, una seconda alla biglietteria dedicata a partire da 80 minuti prima dell\'inizio dello spettacolo — non sono prenotabili in anticipo.',
    cosaPortare: 'Una sciarpa o un fazzoletto: è ancora in uso, tra chi fa la fila prima, legarne uno alla balaustra per "prenotare" simbolicamente un posto in piedi, un\'usanza informale rispettata dal pubblico abituale.',
    perChiEAdatta: 'Adatta a chi non ha problemi a restare in piedi (o seduto a terra) per diverse ore; meno indicata a chi ha problemi di mobilità o cerca il comfort di un posto a sedere numerato.',
    giudizio: 'da-verificare',
    alternative: ['Un biglietto a sedere nelle categorie più economiche, prenotabile in anticipo online, per chi preferisce la certezza del posto assegnato'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'L\'interno dorato e rosso della sala principale della Wiener Staatsoper, l\'Opera di Stato di Vienna',
  },
  {
    slug: 'vienna-giro-caffe-storici',
    paeseSlug: 'austria',
    destinazioneSlug: 'vienna',
    nome: 'Giro dei caffè storici viennesi',
    localita: 'Innere Stadt, Vienna',
    cosE:
      'Un percorso tra due o tre caffè storici del centro — tipicamente scelti tra Café Central, Café Sacher, Café Landtmann e Café Hawelka, ciascuno con un\'identità e una storia diverse — per assaggiare le principali varianti di caffè viennese (dal Melange al Einspänner) insieme alla pasticceria tradizionale, dalla Sachertorte all\'Apfelstrudel.',
    percheFarla:
      'Perché la Kaffeehauskultur viennese è patrimonio culturale immateriale UNESCO dal 2011: il caffè storico non è un bar qualunque, ma — nella definizione della candidatura UNESCO stessa — "un luogo dove si consumano tempo e spazio, e solo il caffè compare sul conto". È un\'esperienza che racconta la città quanto i suoi monumenti.',
    durata: 'circa 2-3 ore per un giro di due o tre caffè con calma',
    periodo: 'tutto l\'anno, essendo un\'esperienza al chiuso',
    costo: 'un caffè con dolce in un caffè storico del centro costa indicativamente 8-14€ a persona per tappa',
    comePrenotare: 'Nessuna prenotazione necessaria per la maggior parte dei caffè, salvo occasioni particolari o gruppi numerosi; nei caffè più noti (Central, Sacher) può capitare una breve fila nelle ore di punta.',
    cosaPortare: 'Nessuna attrezzatura particolare; comodo avere contante per i caffè più tradizionali, anche se le carte sono ormai accettate quasi ovunque.',
    perChiEAdatta: 'Adatta praticamente a tutti; per chi ha poco tempo, anche una sola tappa in un caffè storico basta a farsi un\'idea dell\'usanza.',
    giudizio: 'da-verificare',
    alternative: ['Un caffè di quartiere fuori dal centro più turistico, più economico e altrettanto autentico per chi vuole evitare i prezzi delle insegne più famose'],
    tripSlugs: ['vienna-weekend'],
    imageAlt: 'L\'interno del Café Central a Vienna, con i tavolini di marmo, le sedie Thonet e i soffitti a volta decorati',
  },
]
