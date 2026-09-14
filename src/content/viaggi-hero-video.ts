/**
 * Video di sfondo per l'hero della pagina viaggio — overlay additivo come
 * `viaggi-copertine.ts`: un viaggio assente da questa mappa mostra la sua
 * copertina fotografica (o il Field Dossier, se non ne ha una), esattamente
 * come prima. Popolato per la maggior parte dei viaggi; qualche destinazione
 * resta senza video perché non esiste materiale reale con licenza libera
 * che la rappresenti in modo onesto.
 *
 * Alcune voci sono il miglior match disponibile più che un ritratto esatto
 * della destinazione (es. paesaggio di giungla generico per il Borneo,
 * castello della Loira diverso da quello nominato nel viaggio, palude
 * generica per la Camargue) — vedi `viaggi-hero-video-crediti.ts` per fonte
 * e licenza di ciascun video.
 *
 * Ogni video è muto, in loop, ~10-20s, compresso per il web (ffmpeg,
 * 1280px di larghezza, audio rimosso).
 */

export type HeroVideo = {
  src: string
  poster: string
}

export const heroVideoViaggi: Record<string, HeroVideo> = {
  'lofoten-estate-2025': {
    src: '/videos/trips/lofoten-estate-2025.mp4',
    poster: '/videos/trips/lofoten-estate-2025-poster.jpg',
  },
  'islanda-2024': {
    src: '/videos/trips/islanda-2024.mp4',
    poster: '/videos/trips/islanda-2024-poster.jpg',
  },
  'giappone-360': {
    src: '/videos/trips/giappone-360.mp4',
    poster: '/videos/trips/giappone-360-poster.jpg',
  },
  'cina-paesaggi': {
    src: '/videos/trips/cina-paesaggi.mp4',
    poster: '/videos/trips/cina-paesaggi-poster.jpg',
  },
  'giordania-360': {
    src: '/videos/trips/giordania-360.mp4',
    poster: '/videos/trips/giordania-360-poster.jpg',
  },
  'costa-rica-360': {
    src: '/videos/trips/costa-rica-360.mp4',
    poster: '/videos/trips/costa-rica-360-poster.jpg',
  },
  'marocco-360': {
    src: '/videos/trips/marocco-360.mp4',
    poster: '/videos/trips/marocco-360-poster.jpg',
  },
  'sicilia-itinerario': {
    src: '/videos/trips/sicilia-itinerario.mp4',
    poster: '/videos/trips/sicilia-itinerario-poster.jpg',
  },
  'cina-classica': {
    src: '/videos/trips/cina-classica.mp4',
    poster: '/videos/trips/cina-classica-poster.jpg',
  },
  'venezia-3-giorni': {
    src: '/videos/trips/venezia-3-giorni.mp4',
    poster: '/videos/trips/venezia-3-giorni-poster.jpg',
  },
  'tour-du-mont-blanc': {
    src: '/videos/trips/tour-du-mont-blanc.mp4',
    poster: '/videos/trips/tour-du-mont-blanc-poster.jpg',
  },
  'roma-4-giorni': {
    src: '/videos/trips/roma-4-giorni.mp4',
    poster: '/videos/trips/roma-4-giorni-poster.jpg',
  },
  'parigi-5-giorni': {
    src: '/videos/trips/parigi-5-giorni.mp4',
    poster: '/videos/trips/parigi-5-giorni-poster.jpg',
  },
  thailandia: {
    src: '/videos/trips/thailandia.mp4',
    poster: '/videos/trips/thailandia-poster.jpg',
  },
  'new-york-360': {
    src: '/videos/trips/new-york-360.mp4',
    poster: '/videos/trips/new-york-360-poster.jpg',
  },
  'florida-360': {
    src: '/videos/trips/florida-360.mp4',
    poster: '/videos/trips/florida-360-poster.jpg',
  },
  tromso: {
    src: '/videos/trips/tromso.mp4',
    poster: '/videos/trips/tromso-poster.jpg',
  },
  'lapponia-svedese-abisko': {
    src: '/videos/trips/lapponia-svedese-abisko.mp4',
    poster: '/videos/trips/lapponia-svedese-abisko-poster.jpg',
  },
  'bulgaria-bansko-rila': {
    src: '/videos/trips/bulgaria-bansko-rila.mp4',
    poster: '/videos/trips/bulgaria-bansko-rila-poster.jpg',
  },
  'messico-beach-life': {
    src: '/videos/trips/messico-beach-life.mp4',
    poster: '/videos/trips/messico-beach-life-poster.jpg',
  },
  'dolomiti-estate': {
    src: '/videos/trips/dolomiti-estate.mp4',
    poster: '/videos/trips/dolomiti-estate-poster.jpg',
  },
  'firenze-3-giorni': {
    src: '/videos/trips/firenze-3-giorni.mp4',
    poster: '/videos/trips/firenze-3-giorni-poster.jpg',
  },
  'sri-lanka-2023': {
    src: '/videos/trips/sri-lanka-2023.mp4',
    poster: '/videos/trips/sri-lanka-2023-poster.jpg',
  },
  'transilvania-express': {
    src: '/videos/trips/transilvania-express.mp4',
    poster: '/videos/trips/transilvania-express-poster.jpg',
  },
  'corea-del-sud-itinerario': {
    src: '/videos/trips/corea-del-sud-itinerario.mp4',
    poster: '/videos/trips/corea-del-sud-itinerario-poster.jpg',
  },
  'malesia-singapore': {
    src: '/videos/trips/malesia-singapore.mp4',
    poster: '/videos/trips/malesia-singapore-poster.jpg',
  },
  'borneo-itinerario': {
    src: '/videos/trips/borneo-itinerario.mp4',
    poster: '/videos/trips/borneo-itinerario-poster.jpg',
  },
  'stopover-golfo': {
    src: '/videos/trips/stopover-golfo.mp4',
    poster: '/videos/trips/stopover-golfo-poster.jpg',
  },
  'arabia-saudita-itinerario': {
    src: '/videos/trips/arabia-saudita-itinerario.mp4',
    poster: '/videos/trips/arabia-saudita-itinerario-poster.jpg',
  },
  'settimana-bianca': {
    src: '/videos/trips/settimana-bianca.mp4',
    poster: '/videos/trips/settimana-bianca-poster.jpg',
  },
  'grandi-citta-italia': {
    src: '/videos/trips/grandi-citta-italia.mp4',
    poster: '/videos/trips/grandi-citta-italia-poster.jpg',
  },
  'rotte-dei-vini-itinerario': {
    src: '/videos/trips/rotte-dei-vini-itinerario.mp4',
    poster: '/videos/trips/rotte-dei-vini-itinerario-poster.jpg',
  },
  'milano-e-i-laghi': {
    src: '/videos/trips/milano-e-i-laghi.mp4',
    poster: '/videos/trips/milano-e-i-laghi-poster.jpg',
  },
  'torino-2-giorni': {
    src: '/videos/trips/torino-2-giorni.mp4',
    poster: '/videos/trips/torino-2-giorni-poster.jpg',
  },
  'napoli-3-giorni': {
    src: '/videos/trips/napoli-3-giorni.mp4',
    poster: '/videos/trips/napoli-3-giorni-poster.jpg',
  },
  'costiera-e-isole': {
    src: '/videos/trips/costiera-e-isole.mp4',
    poster: '/videos/trips/costiera-e-isole-poster.jpg',
  },
  'eolie-in-vela': {
    src: '/videos/trips/eolie-in-vela.mp4',
    poster: '/videos/trips/eolie-in-vela-poster.jpg',
  },
  'sicilia-completa': {
    src: '/videos/trips/sicilia-completa.mp4',
    poster: '/videos/trips/sicilia-completa-poster.jpg',
  },
  'sardegna-due-anime': {
    src: '/videos/trips/sardegna-due-anime.mp4',
    poster: '/videos/trips/sardegna-due-anime-poster.jpg',
  },
  'isole-siciliane': {
    src: '/videos/trips/isole-siciliane.mp4',
    poster: '/videos/trips/isole-siciliane-poster.jpg',
  },
  'costa-azzurra': {
    src: '/videos/trips/costa-azzurra.mp4',
    poster: '/videos/trips/costa-azzurra-poster.jpg',
  },
  'normandia-bretagna': {
    src: '/videos/trips/normandia-bretagna.mp4',
    poster: '/videos/trips/normandia-bretagna-poster.jpg',
  },
  'castelli-loira': {
    src: '/videos/trips/castelli-loira.mp4',
    poster: '/videos/trips/castelli-loira-poster.jpg',
  },
  'bordeaux-e-vigneti': {
    src: '/videos/trips/bordeaux-e-vigneti.mp4',
    poster: '/videos/trips/bordeaux-e-vigneti-poster.jpg',
  },
  'rotte-dei-vini-francia': {
    src: '/videos/trips/rotte-dei-vini-francia.mp4',
    poster: '/videos/trips/rotte-dei-vini-francia-poster.jpg',
  },
  'provenza-camargue': {
    src: '/videos/trips/provenza-camargue.mp4',
    poster: '/videos/trips/provenza-camargue-poster.jpg',
  },
  'settimana-bianca-francia': {
    src: '/videos/trips/settimana-bianca-francia.mp4',
    poster: '/videos/trips/settimana-bianca-francia-poster.jpg',
  },
}

export function getHeroVideo(slug: string): HeroVideo | undefined {
  return heroVideoViaggi[slug]
}
