import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "Transilvania Express in 5 giorni". Il testo
// narrativo resta nel markdown (src/content/viaggi/10-transilvania-express.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const transilvaniaExpressMeta: TripMeta = {
  tripSlug: 'transilvania-express',
  paeseSlug: 'transilvania',
  ritmo: 'Molto intenso — fino a 5 ore di guida in un solo giorno, e un altro tratto di 3h45 non-stop',
  trasporti: 'Auto a noleggio self-drive per tutto il viaggio, Uber/Bolt/taxi negli spostamenti in città',
  stile: ['on the road', 'castelli', 'road trip'],
  adattoA: ['chi vuole vedere il meglio della Transilvania in un weekend lungo', 'chi non ha problemi a guidare molto su strade di montagna', 'chi cerca castelli, storia e un po\' di leggenda di Dracula'],
  puntiForti: [
    'Il Castello di Peleș, probabilmente il più bello architettonicamente di tutto il viaggio',
    'Salina Turda, una miniera di sale trasformata in un parco sotterraneo con laghetto navigabile',
    'La Transfăgărășan, tra le strade panoramiche più belle al mondo',
  ],
  criticita: [
    'Il ritmo è molto denso per soli 5 giorni, con giornate di guida fino a 5 ore',
    'La Romania ha il tasso di mortalità stradale più alto dell\'Unione Europea: le strade di montagna richiedono prudenza extra',
    'Non è confermato se alcune tappe facoltative (Bear Sanctuary, Viscri) siano state effettivamente fatte, né se il Giorno 4 sia stato completato con la Transfăgărășan aperta o in funivia',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'organizzato tramite un tour operator (WeRoad), con auto a noleggio self-drive',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il Castello di Peleș, Salina Turda con il suo laghetto sotterraneo, i tornanti della Transfăgărășan',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Bucarest', destinazioneSlug: 'bucarest' },
    { nome: 'Castello di Peleș e Castello di Bran', destinazioneSlug: 'peles-bran' },
    { nome: 'Brașov', destinazioneSlug: 'brasov' },
    { nome: 'Sighișoara e Salina Turda', destinazioneSlug: 'sighisoara-salina-turda' },
    { nome: 'Sibiu e Transfăgărășan', destinazioneSlug: 'sibiu-transfagarasan' },
    { nome: 'Bucarest', destinazioneSlug: 'bucarest' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Bucarest',
      tratta: 'Arrivo a Bucarest',
      pernottamento: 'Hotel Duke Romana',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'bucarest',
      immagine: '/images/viaggi/transilvania-express/giorno-1-bucarest-lipscani.jpg',
      imageAlt: 'Il tramonto su Strada Lipscani nel centro storico di Bucarest, tra i tavolini dei locali e la folla della sera',
    },
    {
      titoloGiorno: 'Giorno 2 — Bucarest, Castello di Peleș, Castello di Bran, Brașov',
      tratta: 'Bucarest → Sinaia (Peleș) → Bran → Brașov',
      pernottamento: 'Curtea Brașoveana',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'brasov',
      immagine: '/images/viaggi/transilvania-express/giorno-2-castello-peles.jpg',
      imageAlt: 'Il Castello di Peleș a Sinaia con le sue guglie in stile neorinascimentale tedesco, tra i boschi dei Carpazi',
    },
    {
      titoloGiorno: 'Giorno 3 — Paesi sassoni, Sighișoara e Salina Turda',
      tratta: 'Brașov → Viscri → Sighișoara → Salina Turda → Sibiu (5 ore di guida totali)',
      pernottamento: 'MyContinental Sibiu',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      costiNoti: 'Viscri 12 LEI/pax; Salina Turda 10-12€; guida 100 LEI',
      destinazioneSlug: 'sighisoara-salina-turda',
      immagine: '/images/viaggi/transilvania-express/giorno-3-salina-turda.jpg',
      imageAlt: 'Il lago sotterraneo di Salina Turda, con le passerelle in legno e le barchette a remi tra le pareti di sale scavate',
    },
    {
      titoloGiorno: 'Giorno 4 — Sibiu, Transfăgărășan e ritorno a Bucarest',
      tratta: 'Sibiu → Transfăgărășan → Bucarest (3h45 di rientro)',
      pernottamento: 'Hotel Continental Forum',
      statoPernottamento: 'provato',
      intensita: 'intenso',
      destinazioneSlug: 'sibiu-transfagarasan',
      immagine: '/images/viaggi/transilvania-express/giorno-4-transfagarasan.jpg',
      imageAlt: 'I tornanti a zig-zag della Transfăgărășan che risalgono il versante erboso dei Carpazi',
    },
    {
      titoloGiorno: 'Giorno 5 — Bucarest: check-out, Terme e saluti',
      tratta: 'Bucarest → rientro',
      pernottamento: 'nessun pernottamento (giorno di partenza)',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      costiNoti: 'Terme di Bucarest 35€',
      destinazioneSlug: 'bucarest',
      immagine: '/images/viaggi/transilvania-express/giorno-5-therme-bucuresti.jpg',
      imageAlt: 'La facciata in vetro e acciaio a vela del complesso Therme București, ultima tappa prima del rientro',
    },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'Cassa comune', valore: '80-90€ a persona' },
    { etichetta: 'Spesa media personale', valore: '120-150€' },
    { etichetta: 'Terme di Bucarest (facoltative)', valore: '35€' },
    { etichetta: 'Totale', valore: undefined },
  ],
}
