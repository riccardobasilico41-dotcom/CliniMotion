/**
 * Crediti per i video hero in `viaggi-hero-video.ts` — stesso criterio di
 * `viaggi-copertine-crediti.ts`: autore, licenza e fonte per ciascun video,
 * non ancora mostrati in pagina ma pronti per un'eventuale pagina crediti.
 */

export type CreditoVideo = {
  autore: string
  licenza: string
  fonteUrl: string
}

export const creditiHeroVideo: Record<string, CreditoVideo> = {
  'lofoten-estate-2025': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/sunset-drone-flyover-of-rocky-norway-sea-coast-8657/',
  },
  'islanda-2024': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/glacier-lake-in-iceland-8025/',
  },
  'giappone-360': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/time-lapse-of-a-street-and-mount-fuji-30148/',
  },
  'cina-paesaggi': {
    autore: 'picture panda (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/drone-video-of-dense-vegetation-and-rock-formations-18028963/',
  },
  'giordania-360': {
    autore: 'Irshad Ahmad (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/wadi-rum-desert-aerial-view-with-mountain-38605571/',
  },
  'costa-rica-360': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/man-hikes-up-path-towards-jungle-waterfall-49337/',
  },
  'marocco-360': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/dunes-in-the-sahara-desert-4149/',
  },
  'sicilia-itinerario': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/ruins-of-the-temple-of-segesta-in-sicily-in-greece-4402/',
  },
  'cina-classica': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/chinese-great-wall-in-the-mountains-28660/',
  },
  'venezia-3-giorni': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/gondola-sailing-in-a-venice-canal-11128/',
  },
  'tour-du-mont-blanc': {
    autore: 'Sergey Guk (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/breathtaking-aerial-view-of-mont-blanc-massif-36690240/',
  },
  'roma-4-giorni': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/the-colosseum-in-the-evening-11039/',
  },
  'parigi-5-giorni': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/full-shot-of-the-eiffel-tower-in-paris-france-27046/',
  },
  thailandia: {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/gold-sunset-landscape-at-phuket-beach-6872/',
  },
  'new-york-360': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/many-skyscrapers-next-to-central-park-30544/',
  },
  'florida-360': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/sunset-over-the-coast-of-florida-24550/',
  },
  tromso: {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/yellow-northern-lights-in-norway-4036/',
  },
  'lapponia-svedese-abisko': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/beautiful-northern-lights-of-yellow-and-pink-tones-4034/',
  },
  'bulgaria-bansko-rila': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/flying-over-a-ski-resort-with-a-panoramic-view-35516/',
  },
  'messico-beach-life': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/interior-of-a-heavenly-cenote-4375/',
  },
  'dolomiti-estate': {
    autore: 'Oskar Gross (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-tre-cime-di-lavaredo-peaks-34974241/',
  },
  'firenze-3-giorni': {
    autore: 'Alberto Escalona (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-florence-cathedral-dome-at-sunrise-36484575/',
  },
  'sri-lanka-2023': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/clouds-moving-over-a-tea-plantations-11193/',
  },
  'transilvania-express': {
    autore: 'Elena Veter (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/dracula-s-castle-in-transylvania-17387928/',
  },
  'corea-del-sud-itinerario': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/traditional-palace-in-korea-20095/',
  },
  'malesia-singapore': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/petronas-twin-towers-in-daylight-20133/',
  },
  'borneo-itinerario': {
    autore: 'Juan Camilo Trujillo Botero (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-lush-tropical-rainforest-canopy-32179534/',
  },
  'stopover-golfo': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/dubai-burj-khalifa-tower-time-lapse-20109/',
  },
  'arabia-saudita-itinerario': {
    autore: 'Aamir Somewhere (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/alula-old-town-saudi-arabia-18819906/',
  },
  'settimana-bianca': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/ski-resort-in-the-alps-aerial-shot-12785/',
  },
  'grandi-citta-italia': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/italys-iconic-city-4161/',
  },
  'rotte-dei-vini-itinerario': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/landscape-of-the-vineyards-in-the-tuscany-area-25189/',
  },
  'milano-e-i-laghi': {
    autore: 'Mixkit',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/duomo-di-milano-in-the-rain-time-lapse-20160/',
  },
  'torino-2-giorni': {
    autore: 'Kmeel.com Videos (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/low-angle-view-of-mole-antonelliana-building-in-turin-11929203/',
  },
  'napoli-3-giorni': {
    autore: 'Samborskaya Anastasia (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/scenic-view-of-naples-with-mount-vesuvius-35116824/',
  },
  'costiera-e-isole': {
    autore: 'Tommaso Zucol (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-beautiful-positano-coastline-29420358/',
  },
  'eolie-in-vela': {
    autore: 'Mehmet Ali Turan (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/drone-arc-shot-of-a-sailing-boat-at-sea-12084809/',
  },
  'sicilia-completa': {
    autore: 'Two Passports Later (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/drone-aerial-footage-of-sea-waves-beach-volcano-and-mediterranean-coastline-of-catania-etna-sicily-italy-19692491/',
  },
  'sardegna-due-anime': {
    autore: 'Nirjhar Basak (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/serene-sardinia-beach-aerial-view-34258973/',
  },
  'isole-siciliane': {
    autore: 'Mihaela Claudia Puscas (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-cala-rossa-in-favignana-italy-32800859/',
  },
  'costa-azzurra': {
    autore: 'Brendon Spring (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-mediterranean-coastline-37293572/',
  },
  'normandia-bretagna': {
    autore: 'Florian Delée (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-historic-mont-saint-michel-29779615/',
  },
  'castelli-loira': {
    autore: 'Adrien JACTA (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/drone-shot-of-a-historic-castle-12794719/',
  },
  'bordeaux-e-vigneti': {
    autore: 'Fernando Sánchez Aranguren (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/tomas-aereas-chateau-pichon-baron-18278389/',
  },
  'rotte-dei-vini-francia': {
    autore: 'Julien Goettelmann (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/charming-alsace-village-and-vineyard-aerial-view-32390621/',
  },
  'provenza-camargue': {
    autore: 'Judas Isariot (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-scenic-wetlands-and-coastal-marsh-37207628/',
  },
  'settimana-bianca-francia': {
    autore: 'Maison Delia (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/ski-slope-in-france-drone-footage-13369425/',
  },
}
