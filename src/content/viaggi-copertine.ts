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
}
