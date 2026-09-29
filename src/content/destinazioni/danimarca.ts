import type { Destinazione } from '@/lib/types'

// Prima uscita danese dell'archivio, collegata all'itinerario "Capitali
// nordiche" (src/content/viaggi/60-capitali-nordiche.md, dati in
// src/content/viaggi-dati/capitali-nordiche.ts). Nessuno ha ancora messo
// piede a Copenaghen per conto di questo sito: visitataPersonalmente resta
// false e il campo miaEsperienza, facoltativo nel tipo, è assente di
// proposito — stesso trattamento usato per la Polonia
// (src/content/destinazioni/polonia.ts) e per il Centro America. Nessun nome
// di hotel o ristorante specifico è stato inventato: solo zone e categorie di
// prezzo verificabili con ricerca. Prezzi e orari (Tivoli è aperto solo a
// stagioni alterne, non tutto l'anno) vanno riverificati prima di partire.

export const destinazioniDanimarca: Destinazione[] = [
  {
    slug: 'copenaghen',
    paeseSlug: 'danimarca',
    ordine: 1,
    nome: 'Copenaghen',
    tipologia: ['città', 'design', 'gastronomia'],
    giorniConsigliati: '3 giorni, la prima tappa dell\'itinerario "Capitali nordiche"',
    visitataPersonalmente: false,
    introduzione:
      'La capitale danese, spesso citata come la città più a misura di bicicletta del mondo: oltre la metà degli abitanti si sposta ogni giorno in bici su una rete di oltre 450 km di piste dedicate. Un centro compatto che mette insieme i canali colorati di Nyhavn, i giardini storici di Tivoli, il lungomare della Sirenetta e Christiania, la comunità autogestita che dal 1971 vive secondo regole proprie nel cuore della città.',
    percheAndarci:
      'Perché concentra in un\'area percorribile a piedi e in bici alcune delle immagini più riconoscibili del nord Europa — le case a graticcio di Nyhavn, i tetti in rame verde del centro storico, il design scandinavo dentro e fuori i musei — e perché è la porta d\'ingresso più naturale a un giro di capitali nordiche: da qui, treno o volo verso Stoccolma in poche ore.',
    cosaVedere: [
      'Nyhavn, il canale del XVII secolo con le facciate colorate delle case dei mercanti, oggi fila ininterrotta di caffè e ristoranti sul molo — il punto più fotografato della città, e non a caso',
      'Tivoli Gardens, aperto nel 1843 e tra i parchi divertimento più antichi al mondo ancora in funzione: giardini curati, montagne russe storiche in legno e un\'illuminazione serale che lo rende suggestivo anche solo da attraversare senza salire su nulla — aperto solo a stagioni (primavera-estate, Halloween, mercatini di Natale), chiuso per alcuni mesi invernali',
      'La Sirenetta (Den Lille Havfrue), la scultura in bronzo del 1913 ispirata alla fiaba di Hans Christian Andersen, sul lungomare di Langelinie: piccola, spesso circondata da folla e gruppi turistici, uno dei casi più citati di attrazione più famosa per fama che per l\'impatto visivo effettivo — vale comunque la passeggiata sul lungomare intorno',
      'Christiania, la "città libera" fondata nel 1971 in un\'ex area militare a Christianshavn: case autocostruite, murales, un\'atmosfera che non somiglia a nient\'altro in città. La storica Pusher Street, dove per decenni si vendeva hashish a vista, è stata chiusa dalle autorità danesi nel 2024 dopo un episodio di violenza — la vendita di stupefacenti resta comunque illegale in tutta la Danimarca',
      'Il centro storico intorno a Strøget, una delle vie pedonali commerciali più lunghe d\'Europa, con Stroget che collega Rådhuspladsen (piazza del municipio) alla vecchia piazza del mercato di Kongens Nytorv',
      'Il quartiere di Christianshavn, con i suoi canali minori, le case galleggianti e la chiesa di Vor Frelsers Kirke, con la celebre scala esterna a spirale che sale intorno alla guglia dorata',
    ],
    cosaFare: [
      'Un giro in bicicletta a noleggio lungo il lungomare e i canali — il modo in cui la città stessa si muove ogni giorno, non un\'attività "da turisti" — vedi la scheda esperienza dedicata',
      'Un giro in barca sui canali, da Nyhavn o Christianshavn, per vedere il centro storico dall\'acqua — vedi la scheda esperienza dedicata',
      'Una serata a Tivoli, tra giostre storiche e giardini illuminati, quando è in stagione',
      'Una visita a Christiania con le regole della comunità in mente: niente foto sull\'ex Pusher Street, rispetto per i residenti — vedi la scheda esperienza dedicata',
      'Un tour o una sosta gastronomica dedicata allo smørrebrød, il panino aperto danese, a Torvehallerne (mercato coperto) o in una delle rosticcerie storiche del centro — vedi la scheda esperienza dedicata',
    ],
    doveDormire:
      'Il centro storico (Indre By) è la scelta più comoda per chi vuole tutto a piedi, ma è anche la zona più cara. Vesterbro, ex quartiere a luci rosse oggi tra i più vivaci della città per bar e ristoranti, offre un buon compromesso tra prezzo e posizione, a pochi minuti a piedi o in metro dal centro. Nørrebro, multiculturale e meno turistico, è l\'opzione più economica con una vita locale autentica, un po\' più lontana dalle attrazioni principali.',
    doveMangiare:
      'Torvehallerne, il mercato coperto vicino a Nørreport, per smørrebrød, pesce e prodotti locali in formato street food di qualità. Nyhavn è scenografico ma con prezzi da location: meglio scegliere con attenzione o limitarsi a un caffè guardando il canale. Reffen, l\'area street food sul lungomare (stagionale, aperta da primavera ad autunno), per un\'alternativa più informale e internazionale.',
    comeArrivare:
      'Aeroporto di Copenaghen-Kastrup (CPH), tra gli hub meglio collegati del nord Europa, a circa 20 minuti dal centro in metro. Volo diretto dall\'Italia disponibile dalle principali città. In treno dall\'Italia non esiste un collegamento diretto pratico: si arriva in aereo, o via Germania con più cambi per chi preferisce non volare.',
    comeSpostarsi:
      'Bicicletta a noleggio, l\'opzione più coerente con lo spirito della città, oltre a metro, S-tog (treni suburbani) e bus con biglietto integrato a zone. Il centro storico si copre comodamente anche a piedi.',
    periodoMigliore:
      'maggio-settembre per clima e giornate lunghe; giugno-agosto è alta stagione, con Tivoli negli orari estivi pieni; dicembre per i mercatini di Natale, in un\'atmosfera molto diversa e altrettanto suggestiva.',
    costi:
      'Tivoli: ingresso giardini da circa 20€, biglietto combinato giardini più giostre illimitate fino a circa 66€. Giro in barca sui canali: circa 15-20€ a persona per un\'ora. Pasto economico 7-20€, pranzo in caffè 17-27€, cena di fascia media 40-75€ per due.',
    erroriDaEvitare: [
      'Camminare o sostare su una pista ciclabile senza guardare: sono trafficate quanto le strade e i ciclisti non rallentano per i turisti distratti',
      'Fotografare a Christiania nelle zone segnalate (l\'ex Pusher Street in particolare) o i residenti senza permesso: le regole sono affisse e rispettate rigorosamente',
      'Aspettarsi Tivoli aperto tutto l\'anno: chiude per alcuni mesi invernali fuori dalla finestra natalizia, verificare il calendario stagionale prima di programmare la serata',
      'Sottovalutare l\'effetto sorpresa (in negativo) della Sirenetta: è una statua piccola, spesso circondata da folla — va goduta come parte di una passeggiata sul lungomare, non come destinazione a sé',
      'Dare per scontato che si paghi in euro: la Danimarca non è nell\'eurozona, si paga in corone danesi (DKK)',
    ],
    esperienzeSlugs: ['nyhavn-giro-in-barca', 'copenaghen-tour-in-bicicletta', 'christiania-visita', 'smorrebrod-tour-torvehallerne'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Le case colorate del XVII secolo lungo il canale di Nyhavn a Copenaghen, con le barche ormeggiate al molo',
  },
]
