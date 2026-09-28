/**
 * Crediti fotografici per le immagini hero delle Sette Meraviglie, sourced da
 * Wikimedia Commons (vedi `src/content/meraviglie.ts`, campo `heroImage`).
 *
 * Le licenze CC BY e CC BY-SA richiedono attribuzione: questo file la tiene
 * tracciata in un posto solo, leggibile da chi mantiene il sito. Non è
 * ancora mostrata in pagina (nessuna richiesta in tal senso) — se in futuro
 * si vuole un credito visibile (es. una piccola dicitura sotto l'immagine o
 * una pagina "crediti fotografici"), i dati sono già tutti qui pronti da
 * collegare, senza dover ripercorrere ogni fonte da capo.
 *
 * Chiave = `Meraviglia['slug']`, stessa chiave usata in `meraviglie.ts`.
 */

import type { CreditoImmagine } from './viaggi-copertine-crediti'

export const creditiMeraviglie: Record<string, CreditoImmagine> = {
  'grande-muraglia-cinese': {
    autore: 'Lloyd Tudor (BLloydT)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Mutianyu_section_of_the_Great_Wall_of_China.jpg',
  },
  petra: {
    autore: 'Carole Raddato',
    licenza: 'CC BY-SA 2.0',
    fonteUrl:
      "https://commons.wikimedia.org/wiki/File:The_first_glimpse_of_Petra%27s_Treasury_(Al-Khazneh)_upon_exiting_the_Siq,_Petra,_Jordan_(34364806926).jpg",
  },
  'cristo-redentore': {
    autore: 'Gustavo Facci',
    licenza: 'CC BY-SA 2.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aerial_view_of_the_Statue_of_Christ_the_Redeemer.jpg',
  },
  'machu-picchu': {
    autore: 'Diego Delso',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Machu_Picchu,_Per%C3%BA,_2015-07-30,_DD_47.JPG',
  },
  'chichen-itza': {
    autore: 'Fcb981 (Eric Baetscher)',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:El_Castillo_Stitch_2008_Edit_2.jpg',
  },
  colosseo: {
    autore: 'Christoph Strässler',
    licenza: 'CC BY-SA 2.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum,_Rome,_Italy.jpg',
  },
  'taj-mahal': {
    autore: 'Aiwok',
    licenza: 'CC BY-SA 3.0 / 2.5 / 2.0 / 1.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Taj_Mahal_Spiegel.JPG',
  },
}
