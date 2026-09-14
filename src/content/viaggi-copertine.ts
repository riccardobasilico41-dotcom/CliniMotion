/**
 * Copertina fotografica per ogni viaggio, in sostituzione del riquadro
 * colorato per continente usato finché non c'erano foto reali disponibili.
 * Overlay additivo (come src/content/viaggi-dati): il markdown resta la
 * fonte del testo, questo file aggiunge solo l'immagine. Se un viaggio non
 * è presente qui, TripCard torna al riquadro a gradiente — nessuna foto
 * inventata o placeholder generico spacciato per reale.
 *
 * Dove possibile si riusano foto già presenti sul sito (stesso Paese, pagina
 * diversa); per i viaggi senza ancora una pagina Paese dedicata si è scelta
 * la cosa più iconica del Paese/della zona raccontata nel viaggio.
 *
 * Le copertine sourced da Wikimedia Commons (licenza libera, verificata per
 * ciascuna) hanno il credito fotografico in `viaggi-copertine-crediti.ts` —
 * obbligatorio per le licenze CC BY/CC BY-SA, tenuto lì per non appesantire
 * questo file con dati che qui non servono per il rendering.
 */

export type CopertinaViaggio = {
  immagine: string
  imageAlt: string
}

export const copertineViaggi: Record<string, CopertinaViaggio> = {
  'lofoten-estate-2025': {
    immagine: '/images/norvegia/henningsvaer-stock.jpg',
    imageAlt: 'Vista aerea del celebre campo da calcio di Henningsvær incastonato tra il mare e le montagne, Lofoten',
  },
  'islanda-2024': {
    immagine: '/images/islanda/jokulsarlon-stock.jpg',
    imageAlt: 'Iceberg blu che galleggiano nella laguna glaciale di Jökulsárlón, Islanda',
  },
  'messico-beach-life': {
    immagine: '/images/messico/chichen-itza.jpg',
    imageAlt: 'La piramide di Chichén Itzá nello Yucatán, Messico',
  },
  'lapponia-svedese-abisko': {
    immagine: '/images/svezia/abisko-stock.jpg',
    imageAlt: 'Aurora boreale verde sopra le montagne innevate del parco nazionale di Abisko',
  },
  tromso: {
    immagine: '/images/norvegia/tromso-stock.jpg',
    imageAlt: 'Cattedrale Artica di Tromsø illuminata di sera con aurora boreale sullo sfondo',
  },
  'giordania-360': {
    immagine: '/images/copertine/giordania-360.jpg',
    imageAlt: 'La facciata del Tesoro (Al-Khazneh) scavata nella roccia a Petra, Giordania',
  },
  'sri-lanka-2023': {
    immagine: '/images/copertine/sri-lanka-2023.jpg',
    imageAlt: 'La rocca fortezza di Sigiriya che emerge dalla giungla, Sri Lanka',
  },
  'giappone-360': {
    immagine: '/images/copertine/giappone-360.jpg',
    imageAlt: 'Il Monte Fuji visto con la vegetazione in primo piano, Giappone',
  },
  thailandia: {
    immagine: '/images/copertine/thailandia.jpg',
    imageAlt: 'Barca a coda lunga in una baia turchese tra i faraglioni calcarei del sud della Thailandia',
  },
  'marocco-360': {
    immagine: '/images/copertine/marocco-360.jpg',
    imageAlt: 'Dune dorate del Sahara vicino a Merzouga, Marocco',
  },
  'new-york-360': {
    immagine: '/images/copertine/new-york-360.jpg',
    imageAlt: 'Lo skyline di Manhattan, New York',
  },
  'florida-360': {
    immagine: '/images/copertine/florida-360.jpg',
    imageAlt: 'Acqua turchese e palme lungo la costa della Florida',
  },
  'transilvania-express': {
    immagine: '/images/copertine/transilvania-express.jpg',
    imageAlt: 'Il Castello di Bran, il "Castello di Dracula", in Transilvania, Romania',
  },
  'bulgaria-bansko-rila': {
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
    imageAlt: 'Le arcate a righe colorate del cortile del Monastero di Rila, Bulgaria',
  },
  'costa-rica-360': {
    immagine: '/images/copertine/costa-rica-360.jpg',
    imageAlt: 'Il vulcano Arenal circondato dalla foresta pluviale, Costa Rica',
  },
  'cina-classica': {
    immagine: '/images/copertine/cina-classica.jpg',
    imageAlt: 'Le torri di guardia non restaurate della Grande Muraglia Cinese a Jinshanling, tra le montagne',
  },
  'cina-paesaggi': {
    immagine: '/images/copertine/cina-paesaggi.jpg',
    imageAlt: 'I pilastri di arenaria quarzosa del Parco Nazionale di Zhangjiajie avvolti nella foschia, Cina',
  },
  'corea-del-sud-itinerario': {
    immagine: '/images/copertine/corea-del-sud-itinerario.jpg',
    imageAlt: 'Il cartello sul binario della stazione di Dorasan con le distanze da Seoul e Pyongyang, Corea del Sud',
  },
  'malesia-singapore': {
    immagine: '/images/copertine/malesia-singapore.jpg',
    imageAlt: 'La scalinata colorata e la statua dorata di Murugan alle Grotte di Batu, vicino a Kuala Lumpur',
  },
  'borneo-itinerario': {
    immagine: '/images/copertine/borneo-itinerario.jpg',
    imageAlt: "St. John's Peak sul Monte Kinabalu emerge dal mare di nuvole poco prima dell'alba, Borneo",
  },
  'stopover-golfo': {
    immagine: '/images/copertine/stopover-golfo.jpg',
    imageAlt: 'Le imbarcazioni abra tradizionali attraversano il Dubai Creek al tramonto, Emirati Arabi Uniti',
  },
  'arabia-saudita-itinerario': {
    immagine: '/images/copertine/arabia-saudita-itinerario.jpg',
    imageAlt: 'I balconi in legno intagliato (rawashin) di una casa tradizionale ad Al-Balad, la città vecchia di Gedda',
  },
  'dolomiti-estate': {
    immagine: '/images/copertine/dolomiti-estate.jpg',
    imageAlt: 'Le Tre Cime di Lavaredo tra le nuvole, Dolomiti, Italia',
  },
  'parigi-5-giorni': {
    immagine: '/images/copertine/parigi-5-giorni.jpg',
    imageAlt: 'La Torre Eiffel vista dal Champ de Mars a Parigi, Francia',
  },
  'normandia-bretagna': {
    immagine: '/images/copertine/normandia-bretagna.jpg',
    imageAlt: "Il Mont-Saint-Michel circondato dall'acqua durante l'alta marea, Normandia",
  },
  'castelli-loira': {
    immagine: '/images/copertine/castelli-loira.jpg',
    imageAlt: 'La scala a doppia elica del Castello di Chambord, Valle della Loira',
  },
  'bordeaux-e-vigneti': {
    immagine: '/images/copertine/bordeaux-e-vigneti.jpg',
    imageAlt: 'Il Miroir d\'eau che riflette la Place de la Bourse a Bordeaux, Francia',
  },
  'rotte-dei-vini-francia': {
    immagine: '/images/copertine/rotte-dei-vini-francia.jpg',
    imageAlt: 'Il villaggio di Riquewihr circondato dai vigneti sulla Route des Vins d\'Alsace, Francia',
  },
  'provenza-camargue': {
    immagine: '/images/copertine/provenza-camargue.jpg',
    imageAlt: "Il Pont du Gard, l'antico acquedotto romano sul fiume Gardon, Provenza",
  },
  'settimana-bianca-francia': {
    immagine: '/images/copertine/settimana-bianca-francia.jpg',
    imageAlt: "La stazione dell'Aiguille du Midi sulla vetta rocciosa sopra Chamonix, Alpi francesi",
  },
  'tour-du-mont-blanc': {
    immagine: '/images/copertine/tour-du-mont-blanc.jpg',
    imageAlt: 'Il massiccio del Monte Bianco innevato visto dal versante italiano sopra Courmayeur',
  },
  'settimana-bianca': {
    immagine: '/images/copertine/settimana-bianca.jpg',
    imageAlt: "Pista da sci appena battuta nel comprensorio dell'Alta Badia, Dolomiti, con le cime innevate sullo sfondo",
  },
  'grandi-citta-italia': {
    immagine: '/images/copertine/grandi-citta-italia.jpg',
    imageAlt: 'Vista esterna del Colosseo di Roma illuminato dalla luce calda del tramonto',
  },
  'sicilia-itinerario': {
    immagine: '/images/copertine/sicilia-itinerario.jpg',
    imageAlt: "Il Teatro Greco di Taormina con la costa ionica e l'Etna innevato sullo sfondo, Sicilia",
  },
  'rotte-dei-vini-itinerario': {
    immagine: '/images/copertine/rotte-dei-vini-itinerario.jpg',
    imageAlt: 'Le colline delle Langhe ricoperte di vigneti dai colori autunnali, Piemonte',
  },
  'roma-4-giorni': {
    immagine: '/images/copertine/roma-4-giorni.jpg',
    imageAlt: "Vista interna del Colosseo di Roma, con gli anelli di arcate e l'ipogeo sotterraneo visibili dall'arena",
  },
  'firenze-3-giorni': {
    immagine: '/images/copertine/firenze-3-giorni.jpg',
    imageAlt: 'La cupola del Brunelleschi del Duomo di Firenze vista dal Campanile di Giotto',
  },
  'milano-e-i-laghi': {
    immagine: '/images/copertine/milano-e-i-laghi.jpg',
    imageAlt: 'Le guglie gotiche in marmo del Duomo di Milano, sormontate da statue',
  },
  'venezia-3-giorni': {
    immagine: '/images/copertine/venezia-3-giorni.jpg',
    imageAlt: 'La facciata ornata della Basilica di San Marco a Venezia, con le cupole dorate e la piazza affollata',
  },
  'torino-2-giorni': {
    immagine: '/images/copertine/torino-2-giorni.jpg',
    imageAlt: 'La cupola e la guglia della Mole Antonelliana che svettano sui tetti di Torino, con le Alpi sullo sfondo',
  },
  'napoli-3-giorni': {
    immagine: '/images/copertine/napoli-3-giorni.jpg',
    imageAlt: "Veduta dall'alto di Castel Sant'Elmo sul rettilineo di Spaccanapoli che taglia il centro storico di Napoli",
  },
  'costiera-e-isole': {
    immagine: '/images/copertine/costiera-e-isole.jpg',
    imageAlt: 'Il Sentiero degli Dei affacciato sulla Costiera Amalfitana con Positano visibile in basso sul mare',
  },
  'eolie-in-vela': {
    immagine: '/images/copertine/eolie-in-vela.jpg',
    imageAlt: 'Colate di lava incandescente che scendono di notte lungo la Sciara del Fuoco sul vulcano di Stromboli, viste dal mare',
  },
  'sicilia-completa': {
    immagine: '/images/copertine/sicilia-completa.jpg',
    imageAlt: 'Il soffitto ligneo a muqarnas della Cappella Palatina di Palermo, decorato con stelle geometriche dipinte',
  },
  'sardegna-due-anime': {
    immagine: '/images/copertine/sardegna-due-anime.jpg',
    imageAlt: 'Il Fungo, celebre roccia di granito rosa modellata dal vento nella zona di Arzachena, Costa Smeralda',
  },
  'isole-siciliane': {
    immagine: '/images/copertine/isole-siciliane.jpg',
    imageAlt: 'La cala turchese di Cala Rossa a Favignana, incorniciata dalle scogliere bianche delle Isole Egadi',
  },
  'costa-azzurra': {
    immagine: '/images/copertine/costa-azzurra.jpg',
    imageAlt: 'Il Sentier du Littoral, il sentiero costiero che corre sulle rocce di Cap d\'Antibes sulla Costa Azzurra',
  },
}
