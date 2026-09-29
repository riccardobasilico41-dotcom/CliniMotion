import type { Destinazione } from '@/lib/types'

// Prima uscita tedesca dell'archivio, collegata al viaggio "Berlino in
// quattro giorni" (src/content/viaggi/57-berlino-weekend.md, dati in
// src/content/viaggi-dati/berlino-weekend.ts). Un'unica destinazione,
// Berlino: a differenza di Cracovia con Auschwitz-Birkenau, qui i luoghi
// della memoria (Muro, Topografia del Terrore) sono dentro la città stessa e
// non richiedono una scheda-destinazione separata. visitataPersonalmente
// resta false e il campo miaEsperienza, facoltativo nel tipo, è assente di
// proposito — niente ricordo inventato, solo fatti verificati con ricerca
// (stesso trattamento usato in src/content/destinazioni/polonia.ts). I
// paragrafi legati al nazismo e alla Guerra Fredda restano in un registro
// sobrio e informativo, mai da "attrazione". Nessun nome di hotel,
// ristorante o operatore è stato inventato. Orari e prezzi vanno riverificati
// sui canali ufficiali prima di partire.

export const destinazioniGermania: Destinazione[] = [
  {
    slug: 'berlino',
    paeseSlug: 'germania',
    ordine: 1,
    nome: 'Berlino',
    tipologia: ['città', 'storia', 'memoria', 'arte'],
    giorniConsigliati: '4 giorni, uno in più rispetto ad altre capitali di quest\'archivio per via delle dimensioni della città',
    visitataPersonalmente: false,
    introduzione:
      'La capitale tedesca, capitale del Reich fino al 1945, divisa dal 1961 al 1989 in Berlino Ovest e Berlino Est dal Muro che l\'ha resa il simbolo fisico della Guerra Fredda, e riunificata con la Germania nel 1990. Città molto più estesa e meno densa di altre capitali europee, con quartieri dal carattere fortemente diverso: il centro storico e il quartiere del governo, l\'Isola dei Musei patrimonio UNESCO, e i quartieri a est come Kreuzberg e Friedrichshain, cresciuti sulla scia della riunificazione fino a diventare tra i più vivi d\'Europa.',
    percheAndarci:
      'Perché concentra in un\'unica città due secoli di storia europea — dall\'impero, al nazismo, alla divisione della Guerra Fredda, alla riunificazione — con siti che restano dov\'erano e si visitano camminando, e perché è insieme una delle capitali europee con la scena artistica, museale e notturna più densa, cresciuta proprio nei quartieri che fino a pochi decenni fa erano ai margini della città divisa.',
    cosaVedere: [
      'La Porta di Brandeburgo, costruita nel 1791, con la Quadriga sulla sommità, diventata dal 1989 il simbolo della riunificazione tedesca',
      'Il Reichstag, sede del Bundestag, con la celebre cupola di vetro disegnata da Norman Foster e completata nel 1999, visitabile con prenotazione gratuita in anticipo',
      'Il Memoriale dell\'Olocausto (Denkmal für die ermordeten Juden Europas), il campo di 2.711 stele in cemento disegnato da Peter Eisenman vicino alla Porta di Brandeburgo, con il centro informazioni sotterraneo',
      'La Gedenkstätte Berliner Mauer (Memoriale del Muro di Berlino) lungo Bernauer Straße, il tratto meglio conservato e documentato, con la ricostruzione della "striscia della morte" e il centro di documentazione',
      'Checkpoint Charlie, l\'ex punto di attraversamento tra i settori americano e sovietico, oggi ricostruito con un presidio simbolico e diventato uno dei luoghi più fotografati e turistici della città',
      'La Topografia del Terrore (Topographie des Terrors), il centro di documentazione costruito sul sito delle ex sedi centrali della Gestapo e delle SS, con un tratto di Muro conservato lungo il perimetro',
      'L\'Isola dei Musei (Museumsinsel), patrimonio UNESCO dal 1999, con cinque musei tra cui il Pergamonmuseum, il Neues Museum (con il busto di Nefertiti) e l\'Altes Museum',
      'L\'East Side Gallery, 1,3 km del Muro rimasti in piedi lungo la Sprea a Friedrichshain, dipinti da oltre cento artisti nel 1990: la più lunga galleria d\'arte a cielo aperto del mondo',
      'Il quartiere di Kreuzberg, multiculturale e alternativo, con il mercato turco lungo il Maybachufer e una forte street art diffusa',
    ],
    cosaFare: [
      'Salire sulla cupola del Reichstag (prenotazione gratuita obbligatoria) per il panorama sul quartiere del governo',
      'Camminare lungo Bernauer Straße al Memoriale del Muro, il modo più diretto per capire cosa significasse davvero il confine tra le due Berlino',
      'Passare almeno mezza giornata sull\'Isola dei Musei, verificando in anticipo quali sale del Pergamonmuseum sono aperte per i lavori di ristrutturazione in corso',
      'Percorrere a piedi o in bici l\'East Side Gallery lungo la Sprea',
      'Una serata tra i locali di Kreuzberg o Friedrichshain, con un cenno, per chi è interessato, alla scena techno berlinese — vedi la scheda esperienza dedicata',
    ],
    doveDormire:
      'Mitte, il centro storico intorno alla Porta di Brandeburgo e all\'Isola dei Musei, è la zona più comoda per la prima parte dell\'itinerario, ben servita dai mezzi. Kreuzberg e Friedrichshain, più a est, sono l\'alternativa più vissuta e in genere più economica, con una vita serale propria che il centro storico non ha, a scapito di qualche minuto in più di metro per i musei.',
    doveMangiare:
      'Il currywurst, il würstel tagliato a fette e servito con salsa al curry, nato proprio a Berlino nel dopoguerra; il döner kebab, arrivato con l\'immigrazione turca ed elevato a piatto simbolo della città al punto da avere varianti contese come "originali"; i mercati come il Markthalle Neun a Kreuzberg per lo street food internazionale. La domenica quasi tutti i negozi (non i ristoranti) sono chiusi per la Ladenschlussgesetz, la legge tedesca sugli orari di apertura.',
    comeArrivare:
      'Aeroporto di Berlino Brandeburgo (BER), unico scalo cittadino dal 2020: collegato al centro con S-Bahn e treni regionali in circa 30 minuti. In treno dall\'Italia non esiste un collegamento diretto comodo: si arriva in genere in aereo.',
    comeSpostarsi: 'Rete BVG di U-Bahn, S-Bahn, tram e bus, molto estesa data la dimensione della città: a differenza di centri storici più compatti come Cracovia, qui gli spostamenti tra un quartiere e l\'altro richiedono quasi sempre i mezzi pubblici. Non serve auto.',
    periodoMigliore: 'maggio-settembre per il clima mite e le giornate lunghe; giugno-agosto è alta stagione, più affollata; novembre-marzo è freddo ma i mercatini di Natale a dicembre restano un buon motivo per andarci comunque',
    costi: 'città di fascia media per l\'Europa occidentale, più accessibile di Parigi o Londra: cena normale 15-25€ a testa, biglietto BVG singolo circa 3€, ingressi ai grandi musei la voce più costosa della giornata tipo',
    erroriDaEvitare: [
      'Farsi fotografare con i finti soldati a Checkpoint Charlie senza sapere che il servizio è a pagamento: la foto "gratuita" viene richiesta a pagamento a cose fatte',
      'Programmare l\'Isola dei Musei senza controllare prima quali sale del Pergamonmuseum sono aperte: l\'ala nord, con la Sala dell\'Altare di Pergamo, è chiusa per lavori di ristrutturazione da tempo, con riapertura non prevista a breve',
      'Dare per scontato che i negozi siano aperti la domenica: la legge tedesca sugli orari chiude quasi tutta l\'attività commerciale, ristoranti esclusi',
      'Sottovalutare le distanze: Berlino è molto più estesa di altre capitali europee di questo archivio, e spostarsi tra Mitte e Friedrichshain richiede sempre i mezzi pubblici, non una passeggiata',
      'Trattare i luoghi della memoria (Muro, Topografia del Terrore, Memoriale dell\'Olocausto) come tappe fotografiche qualunque: sono pensati per una visita silenziosa e informata',
    ],
    esperienzeSlugs: ['reichstag-cupola', 'museumsinsel-pergamon', 'east-side-gallery', 'berlino-clubbing'],
    tripSlugs: ['berlino-weekend'],
    imageAlt: 'La cupola di vetro del Reichstag a Berlino, con la vista sul quartiere del governo attraverso lo specchio centrale',
  },
]
