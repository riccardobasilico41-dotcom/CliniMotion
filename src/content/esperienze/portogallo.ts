import type { Esperienza } from '@/lib/types'

// Prima uscita portoghese dell'archivio: nessuna di queste esperienze è
// stata provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/portogallo.ts). Prezzi, orari e regole di
// prenotazione — soprattutto quelli di Sintra — cambiano spesso e vanno
// riverificati sui canali ufficiali prima di prenotare.

export const esperienzePortogallo: Esperienza[] = [
  {
    slug: 'tram-28-alfama',
    paeseSlug: 'portogallo',
    destinazioneSlug: 'lisbona',
    nome: 'Tram 28 e passeggiata nell\'Alfama',
    localita: 'Alfama e colline centrali di Lisbona',
    cosE:
      'Il tram storico numero 28, in servizio dal primo Novecento su vagoni in legno d\'epoca (ancora oggi in gran parte di quella flotta, restaurati), che attraversa alcune delle salite e curve più strette della città collegando Martim Moniz, l\'Alfama, la Baixa, Estrela e Campo de Ourique. Abbinato spesso a una passeggiata a piedi nei vicoli dell\'Alfama, il quartiere più antico della città.',
    percheFarla:
      'Perché è, insieme, un mezzo pubblico reale e un\'attrazione turistica: le sue curve strettissime tra case a distanza di un braccio e le salite ripidissime sono uniche in Europa. È anche, per lo stesso motivo, il luogo con la più alta concentrazione di borseggiatori della città, e va affrontato con questo in mente.',
    durata: 'il tragitto completo dura circa 40-45 minuti, ma la maggior parte dei visitatori scende e risale più volte lungo il percorso; con la passeggiata nell\'Alfama si può facilmente dedicarci mezza giornata',
    periodo: 'tutto l\'anno; nelle ore centrali di alta stagione il tram diventa quasi impraticabile per la calca',
    costo: 'un singolo biglietto acquistato a bordo costa più del previsto (circa 3€); molto più conveniente la carta Viva Viagem/Navegante ricaricata o un pass giornaliero, validi su tutta la rete pubblica',
    comePrenotare: 'Non serve prenotazione: si sale alla fermata come su qualunque tram; conviene solo scegliere l\'orario, il prima possibile al mattino, per evitare la ressa.',
    cosaPortare: 'Solo l\'essenziale, portato davanti al corpo: è il mezzo con la più alta incidenza di borseggi della città.',
    perChiEAdatta: 'Adatta a chiunque, con l\'accortezza di non affrontarlo nelle ore di punta di mezza giornata se si cerca un\'esperienza tranquilla piuttosto che sopravvivere alla calca.',
    giudizio: 'da-verificare',
    alternative: ['Percorrere lo stesso itinerario a piedi, più lento ma senza code né rischio di borseggio, fermandosi liberamente ai miradouros lungo la salita'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il tram 28 giallo che percorre una curva stretta tra le case dell\'Alfama a Lisbona',
  },
  {
    slug: 'pasteis-de-belem',
    paeseSlug: 'portogallo',
    destinazioneSlug: 'lisbona',
    nome: 'Pastéis de nata alla Pastéis de Belém',
    localita: 'Rua de Belém 84-92, quartiere di Belém, Lisbona',
    cosE:
      'La pasticceria storica aperta nel 1837 accanto al Mosteiro dos Jerónimos, che custodisce la ricetta originale del pastel de nata (qui chiamato pastel de Belém, nome protetto e riservato solo a questo locale) tramandata dai monaci del monastero prima della soppressione degli ordini religiosi nel 1834. Si producono ancora migliaia di sfoglie al giorno, servite calde e spolverate di cannella e zucchero a velo su richiesta.',
    percheFarla:
      'Perché è l\'origine diretta e documentata di uno dei dolci più noti del Portogallo, non una rivendicazione turistica come capita altrove; e perché il contrasto tra la sfoglia calda appena sfornata e le versioni da bar (comunque buone) del resto della città si sente davvero.',
    durata: '30-60 minuti, coda inclusa nelle ore di punta',
    periodo: 'tutto l\'anno, aperto tutti i giorni',
    costo: 'pochi euro per pasticceria (2-3 pezzi facilmente sotto i 5€ in totale)',
    comePrenotare: 'Non si prenota: si fa la coda alla porta (spesso lunga) o, più rapidamente, ci si siede nella sala interna più ampia sul retro, meno nota ai turisti di passaggio davanti alla vetrina.',
    cosaPortare: 'Nessuna attrezzatura particolare; utile sapere che il locale ha più sale, e quella sul retro assorbe meglio la fila rispetto all\'ingresso principale.',
    perChiEAdatta: 'Adatta a chiunque; l\'unico vero limite è la pazienza per la coda nelle ore centrali della giornata.',
    giudizio: 'da-verificare',
    alternative: ['Una qualunque pasticceria di quartiere in centro: il pastel de nata "generico" è comunque ottimo quasi ovunque a Lisbona, senza fila'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Un vassoio di pastéis de nata appena sfornati, con la superficie caramellata a chiazze scure, tipici della Pastéis de Belém',
  },
  {
    slug: 'sintra-giornata-da-lisbona',
    paeseSlug: 'portogallo',
    destinazioneSlug: 'sintra',
    nome: 'Gita di un giorno a Sintra',
    localita: 'Sintra, circa 30 km a nord-ovest di Lisbona',
    cosE:
      'La gita fuori porta più classica da Lisbona: treno da Rossio fino a Sintra e visita ai suoi palazzi e giardini, in particolare il Palácio Nacional da Pena e la Quinta da Regaleira, entrambi con codici di attesa spesso lunghi nelle ore centrali della giornata.',
    percheFarla:
      'Perché Sintra concentra in un\'area collinare relativamente piccola una densità di palazzi romantici e giardini esoterici che non si trova altrove in Portogallo, ed è di fatto la gita obbligata di qualunque soggiorno lisbonese di più di due giorni.',
    durata: 'una giornata intera, dalla mattina presto al tardo pomeriggio',
    periodo: 'tutto l\'anno; il vero fattore stagionale è l\'affollamento, non il clima: giugno-agosto porta le code più lunghe',
    costo: 'treno circa 5€ a tratta da Rossio; Palácio da Pena circa 20-25€, Quinta da Regaleira circa 15€, con sconti sui biglietti combinati; bus locale 434 pochi euro',
    comePrenotare:
      'Biglietti d\'ingresso ai palazzi acquistabili online con fascia oraria: fortemente consigliato prenotare in anticipo, soprattutto per il Palácio da Pena in alta stagione, dove gli slot della mattina si esauriscono. Il treno non richiede prenotazione, solo biglietto o carta contactless.',
    cosaPortare: 'Scarpe comode per le salite e i lunghi camminamenti tra un sito e l\'altro; una giacca leggera, visto il microclima più fresco e umido di Sintra rispetto a Lisbona.',
    perChiEAdatta:
      'Adatta a chiunque accetti una giornata di code e camminate in salita; meno indicata a chi ha mobilità ridotta o cerca un ritmo di visita rilassato, vista la pressione turistica reale del sito.',
    giudizio: 'da-verificare',
    alternative: ['Un tour organizzato da Lisbona con transfer in minivan e ingresso prioritario incluso — vedi il confronto nella scheda della destinazione Lisbona'],
    tripSlugs: ['lisbona-weekend'],
    imageAlt: 'Il Palácio Nacional da Pena di Sintra visto dal basso, con le torri colorate che emergono dalla vegetazione della collina',
  },
]
