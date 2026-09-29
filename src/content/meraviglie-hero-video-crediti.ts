/**
 * Crediti per i video hero in `meraviglie-hero-video.ts` — stesso criterio
 * di `viaggi-hero-video-crediti.ts`: autore, licenza e fonte per ciascun
 * video, non ancora mostrati in pagina ma pronti per un'eventuale pagina
 * crediti.
 */

export type CreditoVideo = {
  autore: string
  licenza: string
  fonteUrl: string
}

export const creditiHeroVideoMeraviglie: Record<string, CreditoVideo> = {
  'grande-muraglia-cinese': {
    autore: 'YanMednis (Mixkit)',
    licenza: 'Mixkit Stock Video Free License',
    fonteUrl: 'https://mixkit.co/free-stock-video/chinese-great-wall-in-the-mountains-28660/',
  },
  petra: {
    autore: 'Adrien JACTA (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/the-monastery-in-petra-jordan-4361420/',
  },
  'cristo-redentore': {
    autore: 'Rodrigo Tavares (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/cristo-redentor-16023860/',
  },
  'machu-picchu': {
    autore: 'Adrien JACTA (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/beautiful-view-of-machu-picchu-4361882/',
  },
  'chichen-itza': {
    autore: 'Christian Lund (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/ancient-mayan-ziggurat-pyramid-and-ruins-in-yucatan-mexico-27049871/',
  },
  colosseo: {
    autore: 'Alberto Escalona (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/aerial-view-of-colosseum-in-rome-italy-36540547/',
  },
  'taj-mahal': {
    autore: 'Chandan Kumar (Pexels)',
    licenza: 'Pexels License',
    fonteUrl: 'https://www.pexels.com/video/majestic-view-of-the-taj-mahal-in-agra-india-34379970/',
  },
}
