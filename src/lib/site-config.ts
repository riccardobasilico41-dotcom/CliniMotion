export const siteConfig = {
  name: 'Viaggi 360°',
  brandName: 'Viaggi 360°',
  shortName: 'Viaggi 360°',
  tagline: 'Itinerari e appunti di viaggio, un continente alla volta',
  description:
    'Diario di viaggio con itinerari giorno per giorno, consigli pratici e schede utili per organizzare il prossimo viaggio: dal Marocco alla Costa Rica, dalla Transilvania alla Florida.',
  // Dominio provvisorio — da sostituire una volta acquistato e collegato.
  url: 'https://viaggi360.it',

  flags: {
    showInstagram: false,
  },

  contact: {
    instagram: '',
  },
} as const

export type SiteConfig = typeof siteConfig
