export const siteConfig = {
  name: 'Mansarda tra le Dolomiti di Brenta',
  legalListingName: 'Appartamento "Mansarda tra le Dolomiti di Brenta" con vista montagna e balcone',
  shortName: 'Mansarda tra le Dolomiti di Brenta',
  tagline: 'Una mansarda in legno a Bocenago, con le Dolomiti di Brenta sul balcone',
  description:
    'Appartamento in mansarda a Bocenago, in Val Rendena (Trentino), con vista sulle Dolomiti di Brenta e sull\'Adamello. 65 m², 2 camere, 1 bagno, fino a 4 persone. A 9 minuti da Pinzolo e a pochi minuti dagli impianti di Madonna di Campiglio.',
  url: 'https://mansardadolomitidibrenta.it',

  host: {
    name: 'Mara Morganti',
    role: 'Host',
    bio:
      "Sono Mara, sempre presente per i miei graditi ospiti, dato che abito nello stesso edificio. Sono socievole e disponibile per offrire il massimo comfort: per qualunque necessità basta contattarmi. Con altri host del paese abbiamo creato un gruppo di ospitalità a Bocenago per offrire sconti e vantaggi in diverse attività economiche della zona. Nella mia mansarda siete sempre i benvenuti.",
    language: 'Italiano',
    isStarHost: true,
  },

  property: {
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    sizeSqm: 65,
    type: 'Appartamento intero',
    floors: 2,
    petsAllowed: true,
    petsNote: 'Animali domestici ammessi con supplemento (i gatti non sono ammessi).',
    smokingAllowed: false,
  },

  rating: {
    value: 9.2,
    scale: 10,
    label: 'Fantastico',
    reviewCount: 23,
  },

  amenities: [
    { label: 'Wi-Fi', icon: 'wifi' },
    { label: 'Raggiungibile con gli sci', icon: 'ski' },
    { label: 'Vista montagna e vista giardino', icon: 'mountain' },
    { label: 'Balcone privato con barbecue', icon: 'balcony' },
    { label: 'Cucina ben attrezzata', icon: 'kitchen' },
    { label: 'Lavatrice e lavastoviglie', icon: 'appliances' },
    { label: 'Televisione via cavo', icon: 'tv' },
    { label: 'Letto per bambini e seggiolone', icon: 'crib' },
    { label: 'Parcheggio gratuito sul posto', icon: 'parking' },
    { label: 'Entrata privata', icon: 'door' },
    { label: 'Animali ammessi (supplemento, no gatti)', icon: 'pet' },
    { label: 'Ambiente tranquillo', icon: 'calm' },
  ],

  address: {
    locality: 'Bocenago',
    region: 'Val Rendena, Trentino',
    country: 'Italia',
    area: 'Dolomiti di Brenta',
    // Coordinate indicative del centro di Bocenago (TN) — da sostituire con il pin esatto quando disponibile.
    lat: 46.1614,
    lng: 10.7594,
  },

  legal: {
    licenseNumber: '022018-AT-823579',
    cin: 'IT022018C2TJ3LMI6V',
  },

  booking: {
    holiduUrl:
      'https://www.vacation-bookings.com/d/38005414?currency=EUR&locale=it-IT&salesChannelId=HOLIDU_HOST_WEBSITE&colorPrimary=%23024251&colorPrimaryDark=%23003644&colorCTA=%2300809D&colorCTAActive=%2300728f&colorCTAText=%23FFFFFF&title=Mara+Morganti&ccons=MTc4Njg5NTY0NzcwMzoxMTE%3D&ctx=yMrzJwHRaV',
  },

  distances: [
    { label: 'Centro di Bocenago (ristoranti, minimarket)', value: '200 m · 3 min a piedi' },
    { label: 'Golf Club Rendena', value: '400 m · 5 min a piedi' },
    { label: 'Cascata del Masanel (sentiero escursionistico)', value: 'Nelle immediate vicinanze' },
    { label: 'Pinzolo', value: '~9 min in auto' },
    { label: 'Impianto di risalita Prà Rodont (Pinzolo)', value: 'A Pinzolo, 9 min in auto' },
    { label: 'Madonna di Campiglio', value: '~20 min in auto' },
  ],

  flags: {
    showPhone: false,
    showEmail: false,
    showInstagram: false,
  },

  contact: {
    phone: '',
    email: '',
    instagram: '',
  },
} as const

export type SiteConfig = typeof siteConfig
