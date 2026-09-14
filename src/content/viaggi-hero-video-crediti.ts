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
}
