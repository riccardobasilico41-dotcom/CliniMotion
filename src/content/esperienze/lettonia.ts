import type { Esperienza } from '@/lib/types'

// Prima uscita lettone dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/lettonia.ts). Prezzi e orari cambiano nel tempo e
// vanno riverificati sui canali ufficiali prima di partire.

export const esperienzeLettonia: Esperienza[] = [
  {
    slug: 'riga-art-nouveau-passeggiata',
    paeseSlug: 'lettonia',
    destinazioneSlug: 'riga',
    nome: 'Passeggiata tra le facciate Art Nouveau di Alberta iela',
    localita: 'Quartiere Art Nouveau, Riga',
    cosE:
      'Un giro a piedi, autonomo o con guida, lungo Alberta iela, Elizabetes iela e le vie limitrofe, dove si concentra una delle più alte densità di architettura Art Nouveau (Jugendstil) al mondo: si stima che circa un terzo degli edifici del centro di Riga sia in questo stile, con centinaia di facciate decorate da maschere, volti scolpiti, motivi floreali e vetrate colorate, molte firmate dall\'architetto Mihails Eizenšteins, padre del regista sovietico Sergej Ėjzenštejn.',
    percheFarla:
      'Perché è un aspetto di Riga distinto e spesso sottovalutato rispetto alla sola Città Vecchia medievale, e perché capirlo — riconoscere lo stile decorativo di Eizenšteins rispetto a quello più sobrio di altri architetti del periodo — cambia il modo di guardare l\'intera città per il resto del viaggio.',
    durata: 'un\'ora e mezza-due ore per un giro autonomo con calma; i tour guidati durano in genere circa 2 ore',
    periodo: 'tutto l\'anno, essendo un\'esperienza prevalentemente all\'aperto ma senza attività fisica impegnativa',
    costo: 'gratuita in autonomia; i tour guidati a piedi partono da circa 15-20€ a persona; il Museo dell\'Art Nouveau di Alberta iela 12 ha un biglietto separato, indicativamente 6-10€',
    comePrenotare: 'Nessuna prenotazione necessaria per il giro autonomo; i tour guidati si prenotano online o presso gli operatori del centro storico; il Museo dell\'Art Nouveau ha un proprio sito con orari e biglietti.',
    cosaPortare: 'Nessuna attrezzatura particolare; comodo un binocolo leggero o uno zoom per fotografare i dettagli delle facciate più alte.',
    perChiEAdatta: 'Adatta a chiunque; particolarmente indicata per chi ama l\'architettura e la fotografia urbana.',
    giudizio: 'da-verificare',
    alternative: ['Il Museo dell\'Art Nouveau di Alberta iela 12, che ricostruisce un appartamento borghese d\'epoca dentro uno degli edifici più decorati della via, per chi vuole vedere anche gli interni'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Una facciata Art Nouveau decorata su Alberta iela a Riga, con maschere scolpite e motivi floreali intorno alle finestre',
  },
  {
    slug: 'riga-mercato-centrale-tour',
    paeseSlug: 'lettonia',
    destinazioneSlug: 'riga',
    nome: 'Giro gastronomico al Mercato Centrale di Riga',
    localita: 'Centrāltirgus, Riga',
    cosE:
      'Un giro, autonomo o guidato, tra i cinque padiglioni del Mercato Centrale di Riga — ex hangar tedeschi per dirigibili della Prima guerra mondiale, riconvertiti e aperti come mercato nel 1930, all\'epoca il più grande e moderno d\'Europa — con soste per assaggiare pesce affumicato del Baltico, formaggi locali, miele e pane di segale nero (rupjmaize) direttamente dai produttori.',
    percheFarla:
      'Perché il mercato non è solo un\'attrazione architettonica (fa parte del sito UNESCO insieme alla Città Vecchia dal 1998): è ancora oggi un mercato vero, frequentato ogni giorno da circa 80.000 persone, ed è probabilmente il modo più economico e genuino di assaggiare i prodotti lettoni.',
    durata: 'un\'ora per un giro autonomo veloce, fino a 2-3 ore con un tour guidato con assaggi in più tappe',
    periodo: 'tutto l\'anno; il mattino, prima di mezzogiorno, è il momento con più scelta e più vita locale',
    costo: 'l\'ingresso al mercato è libero; un giro autonomo con assaggi costa quanto si decide di comprare (pochi euro a porzione); i tour gastronomici guidati partono da circa 30-45€ a persona',
    comePrenotare: 'Nessuna prenotazione per il giro autonomo; i tour gastronomici guidati si prenotano online con qualche giorno di anticipo, soprattutto nei weekend.',
    cosaPortare: 'Contanti di piccolo taglio per i banchi più informali, anche se la maggior parte accetta ormai carte e contactless.',
    perChiEAdatta: 'Adatta a chiunque ami i mercati alimentari; meno indicata a chi ha poco tempo e preferisce vedere solo l\'esterno architettonico degli hangar.',
    giudizio: 'da-verificare',
    alternative: ['Un giro rapido dei soli esterni e del padiglione principale, per chi vuole vedere l\'architettura senza dedicare tempo agli assaggi'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'L\'interno di uno dei padiglioni del Mercato Centrale di Riga, con banchi di frutta e verdura sotto la struttura in ferro dell\'ex hangar per dirigibili',
  },
  {
    slug: 'jurmala-spiaggia-ville-liberty',
    paeseSlug: 'lettonia',
    destinazioneSlug: 'jurmala',
    nome: 'Giornata a Jūrmala: spiaggia e ville liberty',
    localita: 'Jūrmala, circa 20 km da Riga',
    cosE:
      'Una giornata o mezza giornata sulla lunga spiaggia di sabbia bianca di Jūrmala, combinata con un giro a piedi tra le ville di legno Art Nouveau e Art Déco delle vie residenziali di Majori e Dzintari, molte risalenti all\'epoca zarista e sovietica in cui la città era la meta balneare dell\'élite della regione.',
    percheFarla:
      'Perché è la gita balneare più semplice di tutto l\'itinerario — mezz\'ora di treno da Riga — e perché unisce il mare, raro nelle capitali di questo viaggio, a un patrimonio architettonico ligneo che non si vede altrove nel Baltico.',
    durata: 'mezza giornata per la sola spiaggia e la via principale, una giornata intera per aggiungere un giro più ampio tra le vie residenziali e una sosta più lunga in spiaggia',
    periodo: 'giugno-agosto per il bagno vero e proprio; maggio e settembre restano piacevoli per la passeggiata, con acqua troppo fredda per la maggior parte dei visitatori',
    costo: 'biglietto del treno circa 2€ a tratta da Riga; l\'accesso alla spiaggia è gratuito; pasto in un caffè del lungomare 8-15€',
    comePrenotare: 'Nessuna prenotazione necessaria: si prende il treno regionale dalla stazione centrale di Riga verso Majori, con partenze frequenti tutto il giorno.',
    cosaPortare: 'Costume e telo da mare in stagione; scarpe comode per il giro tra le vie residenziali; una felpa leggera, perché il vento dal golfo rinfresca anche nelle giornate calde.',
    perChiEAdatta: 'Adatta a chiunque cerchi una pausa di mare durante un itinerario cittadino; meno indicata fuori stagione, quando la vita balneare si riduce quasi a zero.',
    giudizio: 'da-verificare',
    alternative: ['Un giro incentrato solo sulle ville Art Nouveau, per chi visita fuori stagione o non è interessato al bagno'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'La spiaggia di sabbia bianca di Jūrmala con le dune erbose e le cabine in legno sul bordo della spiaggia',
  },
]
