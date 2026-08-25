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
import { getViaggioBySlug, type Viaggio } from './viaggi'

// Registro dei Paesi disponibili. Aggiungere un nuovo Paese = aggiungere una
// riga qui più i relativi file in src/content/{paesi,destinazioni,esperienze}.
const PAESI: Paese[] = [messico, norvegia, islanda]
const DESTINAZIONI: Destinazione[] = [...destinazioniMessico, ...destinazioniNorvegia, ...destinazioniIslanda]
const ESPERIENZE: Esperienza[] = [...esperienzeMessico, ...esperienzeNorvegia, ...esperienzeIslanda]
const TRIP_META: TripMeta[] = [messicoBeachLifeMeta, lofotenEstate2025Meta, islanda2024Meta]

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
