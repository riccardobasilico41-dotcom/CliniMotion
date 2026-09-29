/**
 * Video di sfondo per l'hero della pagina Meraviglia — stesso pattern
 * additivo di `viaggi-hero-video.ts`: una meraviglia assente da questa
 * mappa mostra la sua `heroImage` fotografica (o il fallback tipografico,
 * se non ne ha una), esattamente come prima.
 *
 * Ogni video è muto, in loop, ~8-13s, compresso per il web (ffmpeg,
 * 1280px di larghezza, audio rimosso). Vedi `meraviglie-hero-video-crediti.ts`
 * per fonte e licenza di ciascun video.
 *
 * Quasi tutte le voci sono aeree/drone sul soggetto esatto descritto in
 * `heroImageAlt` (es. Petra: il Tesoro visto dall'uscita del Siq; Cristo
 * Redentore: Corcovado con il Pan di Zucchero sullo sfondo; Chichén Itzá:
 * verticale su El Castillo). Due eccezioni dichiarate: la Grande Muraglia
 * mostra un tratto panoramico non identificato con certezza come Mutianyu;
 * il Taj Mahal è ripreso da terra lungo il vialetto dei giardini Charbagh
 * (nessun video aereo reale e verificabile trovato per questo monumento).
 */

export type HeroVideo = {
  src: string
  poster: string
}

export const heroVideoMeraviglie: Record<string, HeroVideo> = {
  'grande-muraglia-cinese': {
    src: '/videos/meraviglie/grande-muraglia-cinese.mp4',
    poster: '/videos/meraviglie/grande-muraglia-cinese-poster.jpg',
  },
  petra: {
    src: '/videos/meraviglie/petra.mp4',
    poster: '/videos/meraviglie/petra-poster.jpg',
  },
  'cristo-redentore': {
    src: '/videos/meraviglie/cristo-redentore.mp4',
    poster: '/videos/meraviglie/cristo-redentore-poster.jpg',
  },
  'machu-picchu': {
    src: '/videos/meraviglie/machu-picchu.mp4',
    poster: '/videos/meraviglie/machu-picchu-poster.jpg',
  },
  'chichen-itza': {
    src: '/videos/meraviglie/chichen-itza.mp4',
    poster: '/videos/meraviglie/chichen-itza-poster.jpg',
  },
  colosseo: {
    src: '/videos/meraviglie/colosseo.mp4',
    poster: '/videos/meraviglie/colosseo-poster.jpg',
  },
  'taj-mahal': {
    src: '/videos/meraviglie/taj-mahal.mp4',
    poster: '/videos/meraviglie/taj-mahal-poster.jpg',
  },
}

export function getHeroVideoMeraviglia(slug: string): HeroVideo | undefined {
  return heroVideoMeraviglie[slug]
}
