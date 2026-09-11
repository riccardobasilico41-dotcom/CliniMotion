export const siteConfig = {
  name: 'Viaggi 360°',
  brandName: 'Viaggi 360°',
  shortName: 'Viaggi 360°',
  tagline: 'Itinerari e appunti di viaggio, un continente alla volta',
  description:
    'Diario di viaggio con itinerari giorno per giorno, consigli pratici e schede utili per organizzare il prossimo viaggio: dal Marocco alla Costa Rica, dalla Transilvania alla Florida.',
  // URL pubblico del sito. È la base di canonical, sitemap, anteprime social e
  // dati strutturati: se punta a un dominio che non risponde, Google indicizza
  // male o non indicizza affatto.
  //
  // Si imposta con la variabile d'ambiente NEXT_PUBLIC_SITE_URL (su Vercel:
  // Project Settings → Environment Variables), così si cambia dominio senza
  // toccare il codice. Il valore qui sotto è solo il fallback provvisorio, da
  // sostituire quando il dominio definitivo sarà attivo.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://viaggi360.it',

  flags: {
    showInstagram: false,
  },

  contact: {
    instagram: '',
  },
} as const

export type SiteConfig = typeof siteConfig
