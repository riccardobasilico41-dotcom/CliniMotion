import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Berlino in quattro giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/57-berlino-weekend.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da ogni giorno,
// task separato.

export const berlinoWeekendMeta: TripMeta = {
  tripSlug: 'berlino-weekend',
  paeseSlug: 'germania',
  ritmo: 'Quattro giorni di calendario, un giorno in più rispetto ad altri weekend lunghi di questo archivio per via delle dimensioni della città, con una giornata isolata dedicata al Muro e alla memoria',
  trasporti: 'Rete BVG di U-Bahn, S-Bahn, tram e bus: quasi indispensabile per spostarsi tra i quartieri, a differenza di centri storici più compatti; nessuna auto necessaria',
  stile: [
    'storia',
    'memoria',
    'vita notturna',
  ],
  adattoA: [
    'chi vuole un weekend europeo che unisca la memoria del Novecento a una scena artistica e notturna tra le più vive del continente',
    'chi accetta di dedicare una giornata intera ai luoghi del Muro e del nazismo, con lo stesso rispetto già riservato ad Auschwitz-Birkenau in questo archivio',
    'chi non ha problemi a muoversi molto con i mezzi pubblici, data l\'estensione della città',
  ],
  puntiForti: [
    'La cupola di vetro del Reichstag, gratuita, con vista a 360° sul quartiere del governo',
    'La Gedenkstätte Berliner Mauer lungo Bernauer Straße, il modo più diretto per capire cosa fosse davvero il confine tra le due Berlino',
    'L\'East Side Gallery, la più lunga galleria d\'arte a cielo aperto del mondo, ricavata da un tratto del Muro sopravvissuto',
  ],
  criticita: [
    'Berlino è molto più estesa di altre capitali di questo archivio: gli spostamenti richiedono quasi sempre i mezzi pubblici',
    'L\'ala nord del Pergamonmuseum, con la Sala dell\'Altare di Pergamo, è chiusa dal 2023 per ristrutturazione con riapertura non prevista a breve',
    'La domenica quasi tutti i negozi sono chiusi per la legge tedesca sugli orari di apertura (Ladenschlussgesetz)',
    'A Checkpoint Charlie i figuranti travestiti da soldati chiedono un pagamento a cose fatte per le foto',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con i mezzi pubblici',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Porta di Brandeburgo e Reichstag', destinazioneSlug: 'berlino' },
    { nome: 'Muro di Berlino e Checkpoint Charlie', destinazioneSlug: 'berlino' },
    { nome: 'Isola dei Musei e Alexanderplatz', destinazioneSlug: 'berlino' },
    { nome: 'Kreuzberg e Friedrichshain', destinazioneSlug: 'berlino' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Porta di Brandeburgo e il quartiere del governo',
      tratta: 'Porta di Brandeburgo, cupola del Reichstag e Memoriale dell\'Olocausto',
      pernottamento: 'Berlino, Mitte',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Reichstag gratuito ma con prenotazione online obbligatoria; Memoriale dell\'Olocausto a ingresso libero',
      destinazioneSlug: 'berlino',
    },
    {
      titoloGiorno: 'Giorno 2 — Il Muro di Berlino e la Guerra Fredda',
      tratta: 'Gedenkstätte Berliner Mauer a Bernauer Straße, Checkpoint Charlie e Topografia del Terrore',
      pernottamento: 'Berlino, Mitte',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'memoriale del Muro e Topografia del Terrore a ingresso libero; Checkpoint Charlie gratuito da vedere, foto con i figuranti a pagamento',
      destinazioneSlug: 'berlino',
    },
    {
      titoloGiorno: 'Giorno 3 — L\'Isola dei Musei e Berlino Est',
      tratta: 'Pergamonmuseum e Neues Museum sull\'Isola dei Musei, Alexanderplatz e Nikolaiviertel',
      pernottamento: 'Berlino',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'biglietto singolo museo 12-14€ circa, biglietto cumulativo Isola dei Musei 24-29€ circa; verificare in anticipo le sale aperte del Pergamonmuseum',
      destinazioneSlug: 'berlino',
    },
    {
      titoloGiorno: 'Giorno 4 — Kreuzberg e Friedrichshain',
      tratta: 'East Side Gallery lungo la Sprea, mercato turco e street art a Kreuzberg, sera nella zona di Friedrichshain',
      intensita: 'leggero',
      costiNoti: 'East Side Gallery a ingresso libero; club serali indicativamente 10-25€',
      destinazioneSlug: 'berlino',
    },
  ],
  budget: [
    { etichetta: 'Reichstag', valore: 'gratuito, con prenotazione online obbligatoria' },
    { etichetta: 'Isola dei Musei', valore: 'circa 12-14€ a museo singolo, 24-29€ il biglietto cumulativo' },
    { etichetta: 'Memoriali e Muro', valore: 'ingresso libero a Bernauer Straße, Topografia del Terrore ed East Side Gallery' },
    { etichetta: 'Alloggio', valore: 'fascia media per l\'Europa occidentale, più accessibile di Parigi o Londra' },
    { etichetta: 'Trasporti', valore: 'biglietto BVG singolo circa 3€, rete molto estesa ed efficiente' },
    { etichetta: 'Cibo', valore: 'currywurst e döner kebab pochi euro, cena normale 15-25€ a testa' },
  ],
}
