/**
 * Video di sfondo per l'hero della pagina viaggio — overlay additivo come
 * `viaggi-copertine.ts`: un viaggio assente da questa mappa mostra la sua
 * copertina fotografica (o il Field Dossier, se non ne ha una), esattamente
 * come prima. Per ora popolato solo per gli 8 viaggi in evidenza sulla Home
 * (dove il video si nota di più): estenderlo agli altri è un lavoro a parte,
 * non garantito — molte destinazioni non hanno un video reale disponibile
 * con licenza libera.
 *
 * Ogni video è muto, in loop, ~10-20s, compresso per il web (ffmpeg,
 * 1280px di larghezza, audio rimosso). Licenza e fonte in
 * `viaggi-hero-video-crediti.ts`.
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
}

export function getHeroVideo(slug: string): HeroVideo | undefined {
  return heroVideoViaggi[slug]
}
