import type { Destinazione, Esperienza, Paese, TripMeta } from './types'
import { messico } from '@/content/paesi/messico'
import { destinazioniMessico } from '@/content/destinazioni/messico'
import { esperienzeMessico } from '@/content/esperienze/messico'
import { messicoBeachLifeMeta } from '@/content/viaggi-dati/messico-beach-life'
import { norvegia } from '@/content/paesi/norvegia'
import { destinazioniNorvegia } from '@/content/destinazioni/norvegia'
import { esperienzeNorvegia } from '@/content/esperienze/norvegia'
import { lofotenEstate2025Meta } from '@/content/viaggi-dati/lofoten-estate-2025'
import { islanda } from '@/content/paesi/islanda'
import { destinazioniIslanda } from '@/content/destinazioni/islanda'
import { esperienzeIslanda } from '@/content/esperienze/islanda'
import { islanda2024Meta } from '@/content/viaggi-dati/islanda-2024'
import { svezia } from '@/content/paesi/svezia'
import { destinazioniSvezia } from '@/content/destinazioni/svezia'
import { esperienzeSvezia } from '@/content/esperienze/svezia'
import { lapponiaSvedeseAbiskoMeta } from '@/content/viaggi-dati/lapponia-svedese-abisko'
import { tromsoMeta } from '@/content/viaggi-dati/tromso'
import { giordania } from '@/content/paesi/giordania'
import { destinazioniGiordania } from '@/content/destinazioni/giordania'
import { esperienzeGiordania } from '@/content/esperienze/giordania'
import { giordania360Meta } from '@/content/viaggi-dati/giordania-360'
import { sriLanka } from '@/content/paesi/sri-lanka'
import { destinazioniSriLanka } from '@/content/destinazioni/sri-lanka'
import { esperienzeSriLanka } from '@/content/esperienze/sri-lanka'
import { sriLanka2023Meta } from '@/content/viaggi-dati/sri-lanka-2023'
import { giappone } from '@/content/paesi/giappone'
import { destinazioniGiappone } from '@/content/destinazioni/giappone'
import { esperienzeGiappone } from '@/content/esperienze/giappone'
import { giappone360Meta } from '@/content/viaggi-dati/giappone-360'
import { thailandia } from '@/content/paesi/thailandia'
import { destinazioniThailandia } from '@/content/destinazioni/thailandia'
import { esperienzeThailandia } from '@/content/esperienze/thailandia'
import { thailandiaMeta } from '@/content/viaggi-dati/thailandia'
import { marocco } from '@/content/paesi/marocco'
import { destinazioniMarocco } from '@/content/destinazioni/marocco'
import { esperienzeMarocco } from '@/content/esperienze/marocco'
import { marocco360Meta } from '@/content/viaggi-dati/marocco-360'
import { newYork } from '@/content/paesi/new-york'
import { destinazioniNewYork } from '@/content/destinazioni/new-york'
import { esperienzeNewYork } from '@/content/esperienze/new-york'
import { newYork360Meta } from '@/content/viaggi-dati/new-york-360'
import { florida } from '@/content/paesi/florida'
import { destinazioniFlorida } from '@/content/destinazioni/florida'
import { esperienzeFlorida } from '@/content/esperienze/florida'
import { florida360Meta } from '@/content/viaggi-dati/florida-360'
import { transilvania } from '@/content/paesi/transilvania'
import { destinazioniTransilvania } from '@/content/destinazioni/transilvania'
import { esperienzeTransilvania } from '@/content/esperienze/transilvania'
import { transilvaniaExpressMeta } from '@/content/viaggi-dati/transilvania-express'
import { bulgaria } from '@/content/paesi/bulgaria'
import { destinazioniBulgaria } from '@/content/destinazioni/bulgaria'
import { esperienzeBulgaria } from '@/content/esperienze/bulgaria'
import { bulgariaBanskoRilaMeta } from '@/content/viaggi-dati/bulgaria-bansko-rila'
import { costaRica } from '@/content/paesi/costa-rica'
import { destinazioniCostaRica } from '@/content/destinazioni/costa-rica'
import { esperienzeCostaRica } from '@/content/esperienze/costa-rica'
import { costaRica360Meta } from '@/content/viaggi-dati/costa-rica-360'
import { indonesia } from '@/content/paesi/indonesia'
import { destinazioniIndonesia } from '@/content/destinazioni/indonesia'
import { esperienzeIndonesia } from '@/content/esperienze/indonesia'
import { guatemala } from '@/content/paesi/guatemala'
import { destinazioniGuatemala } from '@/content/destinazioni/guatemala'
import { esperienzeGuatemala } from '@/content/esperienze/guatemala'
import { belize } from '@/content/paesi/belize'
import { destinazioniBelize } from '@/content/destinazioni/belize'
import { esperienzeBelize } from '@/content/esperienze/belize'
import { panama } from '@/content/paesi/panama'
import { destinazioniPanama } from '@/content/destinazioni/panama'
import { esperienzePanama } from '@/content/esperienze/panama'
import { peru } from '@/content/paesi/peru'
import { destinazioniPeru } from '@/content/destinazioni/peru'
import { esperienzePeru } from '@/content/esperienze/peru'
import { italia } from '@/content/paesi/italia'
import { destinazioniItalia } from '@/content/destinazioni/italia'
import { esperienzeItalia } from '@/content/esperienze/italia'
import { dolomitiEstateMeta } from '@/content/viaggi-dati/dolomiti-estate'
import { settimanaBiancaMeta } from '@/content/viaggi-dati/settimana-bianca'
import { grandiCittaItaliaMeta } from '@/content/viaggi-dati/grandi-citta-italia'
import { siciliaItinerarioMeta } from '@/content/viaggi-dati/sicilia-itinerario'
import { rotteDeiViniMeta } from '@/content/viaggi-dati/rotte-dei-vini-itinerario'
import { emiratiArabiUniti } from '@/content/paesi/emirati-arabi-uniti'
import { destinazioniEmiratiArabiUniti } from '@/content/destinazioni/emirati-arabi-uniti'
import { esperienzeEmiratiArabiUniti } from '@/content/esperienze/emirati-arabi-uniti'
import { stopoverGolfoMeta } from '@/content/viaggi-dati/stopover-golfo'
import { qatar } from '@/content/paesi/qatar'
import { destinazioniQatar } from '@/content/destinazioni/qatar'
import { esperienzeQatar } from '@/content/esperienze/qatar'
import { arabiaSaudita } from '@/content/paesi/arabia-saudita'
import { destinazioniArabiaSaudita } from '@/content/destinazioni/arabia-saudita'
import { esperienzeArabiaSaudita } from '@/content/esperienze/arabia-saudita'
import { arabiaSauditaItinerarioMeta } from '@/content/viaggi-dati/arabia-saudita-itinerario'
import { malesia } from '@/content/paesi/malesia'
import { destinazioniMalesia } from '@/content/destinazioni/malesia'
import { esperienzeMalesia } from '@/content/esperienze/malesia'
import { malesiaSingaporeMeta } from '@/content/viaggi-dati/malesia-singapore'
import { borneo } from '@/content/paesi/borneo'
import { destinazioniBorneo } from '@/content/destinazioni/borneo'
import { esperienzeBorneo } from '@/content/esperienze/borneo'
import { borneoItinerarioMeta } from '@/content/viaggi-dati/borneo-itinerario'
import { singapore } from '@/content/paesi/singapore'
import { destinazioniSingapore } from '@/content/destinazioni/singapore'
import { esperienzeSingapore } from '@/content/esperienze/singapore'
import { coreaDelSud } from '@/content/paesi/corea-del-sud'
import { destinazioniCoreaDelSud } from '@/content/destinazioni/corea-del-sud'
import { esperienzeCoreaDelSud } from '@/content/esperienze/corea-del-sud'
import { coreaDelSudItinerarioMeta } from '@/content/viaggi-dati/corea-del-sud-itinerario'
import { cina } from '@/content/paesi/cina'
import { destinazioniCina } from '@/content/destinazioni/cina'
import { esperienzeCina } from '@/content/esperienze/cina'
import { cinaClassicaMeta } from '@/content/viaggi-dati/cina-classica'
import { cinaPaesaggiMeta } from '@/content/viaggi-dati/cina-paesaggi'
import { bolivia } from '@/content/paesi/bolivia'
import { destinazioniBolivia } from '@/content/destinazioni/bolivia'
import { esperienzeBolivia } from '@/content/esperienze/bolivia'
import { getViaggioBySlug, type Viaggio } from './viaggi'

// Registro dei Paesi disponibili. Aggiungere un nuovo Paese = aggiungere una
// riga qui più i relativi file in src/content/{paesi,destinazioni,esperienze}.
// L'Indonesia non ha ancora un TRIP_META (nessun viaggio-diario collegato,
// vedi src/content/paesi/indonesia.ts) — va aggiunto qui non appena il primo
// itinerario combinato tra isole sarà pubblicato.
const PAESI: Paese[] = [italia, messico, norvegia, islanda, svezia, giordania, sriLanka, giappone, thailandia, marocco, newYork, florida, transilvania, bulgaria, costaRica, indonesia, guatemala, belize, panama, peru, bolivia, cina, coreaDelSud, malesia, borneo, singapore, emiratiArabiUniti, qatar, arabiaSaudita]
const DESTINAZIONI: Destinazione[] = [...destinazioniMessico, ...destinazioniNorvegia, ...destinazioniIslanda, ...destinazioniSvezia, ...destinazioniGiordania, ...destinazioniSriLanka, ...destinazioniGiappone, ...destinazioniThailandia, ...destinazioniMarocco, ...destinazioniNewYork, ...destinazioniFlorida, ...destinazioniTransilvania, ...destinazioniBulgaria, ...destinazioniCostaRica, ...destinazioniIndonesia, ...destinazioniGuatemala, ...destinazioniBelize, ...destinazioniPanama, ...destinazioniPeru, ...destinazioniBolivia, ...destinazioniCina, ...destinazioniCoreaDelSud, ...destinazioniMalesia, ...destinazioniBorneo, ...destinazioniSingapore, ...destinazioniEmiratiArabiUniti, ...destinazioniQatar, ...destinazioniArabiaSaudita, ...destinazioniItalia]
const ESPERIENZE: Esperienza[] = [...esperienzeMessico, ...esperienzeNorvegia, ...esperienzeIslanda, ...esperienzeSvezia, ...esperienzeGiordania, ...esperienzeSriLanka, ...esperienzeGiappone, ...esperienzeThailandia, ...esperienzeMarocco, ...esperienzeNewYork, ...esperienzeFlorida, ...esperienzeTransilvania, ...esperienzeBulgaria, ...esperienzeCostaRica, ...esperienzeIndonesia, ...esperienzeGuatemala, ...esperienzeBelize, ...esperienzePanama, ...esperienzePeru, ...esperienzeBolivia, ...esperienzeCina, ...esperienzeCoreaDelSud, ...esperienzeMalesia, ...esperienzeBorneo, ...esperienzeSingapore, ...esperienzeEmiratiArabiUniti, ...esperienzeQatar, ...esperienzeArabiaSaudita, ...esperienzeItalia]

const TRIP_META: TripMeta[] = [
  messicoBeachLifeMeta,
  lofotenEstate2025Meta,
  islanda2024Meta,
  lapponiaSvedeseAbiskoMeta,
  tromsoMeta,
  giordania360Meta,
  sriLanka2023Meta,
  giappone360Meta,
  thailandiaMeta,
  marocco360Meta,
  newYork360Meta,
  florida360Meta,
  transilvaniaExpressMeta,
  bulgariaBanskoRilaMeta,
  costaRica360Meta,
  cinaClassicaMeta,
  cinaPaesaggiMeta,
  coreaDelSudItinerarioMeta,
  malesiaSingaporeMeta,
  borneoItinerarioMeta,
  stopoverGolfoMeta,
  arabiaSauditaItinerarioMeta,
  dolomitiEstateMeta,
  settimanaBiancaMeta,
  grandiCittaItaliaMeta,
  siciliaItinerarioMeta,
  rotteDeiViniMeta,
]

export function getAllPaesi(): Paese[] {
  return PAESI
}

export function getPaese(slug: string): Paese | undefined {
  return PAESI.find((p) => p.slug === slug)
}

export function getDestinazioniByPaese(paeseSlug: string): Destinazione[] {
  return DESTINAZIONI.filter((d) => d.paeseSlug === paeseSlug).sort((a, b) => a.ordine - b.ordine)
}

export function getDestinazione(paeseSlug: string, slug: string): Destinazione | undefined {
  return DESTINAZIONI.find((d) => d.paeseSlug === paeseSlug && d.slug === slug)
}

export function getAllDestinazioni(): Destinazione[] {
  return DESTINAZIONI
}

export function getEsperienzeByPaese(paeseSlug: string): Esperienza[] {
  return ESPERIENZE.filter((e) => e.paeseSlug === paeseSlug)
}

export function getEsperienza(paeseSlug: string, slug: string): Esperienza | undefined {
  return ESPERIENZE.find((e) => e.paeseSlug === paeseSlug && e.slug === slug)
}

export function getAllEsperienze(): Esperienza[] {
  return ESPERIENZE
}

export function getEsperienzeByDestinazione(destinazioneSlug: string): Esperienza[] {
  return ESPERIENZE.filter((e) => e.destinazioneSlug === destinazioneSlug)
}

export function getDestinazioniByEsperienza(esperienza: Esperienza): Destinazione | undefined {
  return DESTINAZIONI.find((d) => d.slug === esperienza.destinazioneSlug)
}

export function getTripMeta(tripSlug: string): TripMeta | undefined {
  return TRIP_META.find((t) => t.tripSlug === tripSlug)
}

/** Viaggi (dal parser markdown) che toccano una destinazione. */
export function getViaggiByDestinazione(destinazione: Destinazione): Viaggio[] {
  return destinazione.tripSlugs
    .map((slug) => getViaggioBySlug(slug))
    .filter((v): v is Viaggio => Boolean(v))
}

/** Viaggi (dal parser markdown) collegati a un'esperienza. */
export function getViaggiByEsperienza(esperienza: Esperienza): Viaggio[] {
  return esperienza.tripSlugs
    .map((slug) => getViaggioBySlug(slug))
    .filter((v): v is Viaggio => Boolean(v))
}

/** Destinazioni collegate a un'esperienza (di solito una sola, ma il tipo resta un array per uniformità). */
export function getDestinazioniByEsperienzaSlug(esperienza: Esperienza): Destinazione[] {
  const d = DESTINAZIONI.find((d) => d.slug === esperienza.destinazioneSlug)
  return d ? [d] : []
}

/** Esperienze collegate a una destinazione tramite gli slug espliciti sulla destinazione stessa. */
export function getEsperienzeDiDestinazione(destinazione: Destinazione): Esperienza[] {
  return destinazione.esperienzeSlugs
    .map((slug) => ESPERIENZE.find((e) => e.slug === slug))
    .filter((e): e is Esperienza => Boolean(e))
}
