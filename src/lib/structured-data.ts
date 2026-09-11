import { siteConfig } from './site-config'

/**
 * Helper per i dati strutturati schema.org. Restituiscono oggetti da passare a
 * <JsonLd />: tenerli qui evita di ripetere url assoluti e @context in ogni
 * pagina, e rende esplicito quale tipo usiamo dove.
 */

function url(percorso: string): string {
  return `${siteConfig.url}${percorso}`
}

export type VoceBreadcrumb = { nome: string; percorso: string }

/** Traccia il percorso di navigazione: aiuta Google a mostrare le briciole nei risultati. */
export function breadcrumbJsonLd(voci: VoceBreadcrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: voci.map((voce, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: voce.nome,
      item: url(voce.percorso),
    })),
  }
}

/** Un itinerario raccontato giorno per giorno è a tutti gli effetti un articolo di diario. */
export function articoloViaggioJsonLd({
  titolo,
  descrizione,
  percorso,
  sezioni,
}: {
  titolo: string
  descrizione: string
  percorso: string
  sezioni: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: titolo,
    description: descrizione,
    url: url(percorso),
    image: url(`${percorso}/opengraph-image`),
    inLanguage: 'it-IT',
    isPartOf: {
      '@type': 'Blog',
      name: siteConfig.brandName,
      url: siteConfig.url,
    },
    articleSection: sezioni,
  }
}

/** Indice di raccolta: usato dalle pagine elenco (viaggi, destinazioni, meraviglie). */
export function raccoltaJsonLd({
  nome,
  descrizione,
  percorso,
  elementi,
}: {
  nome: string
  descrizione: string
  percorso: string
  elementi: { nome: string; percorso: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: nome,
    description: descrizione,
    url: url(percorso),
    inLanguage: 'it-IT',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: elementi.length,
      itemListElement: elementi.map((elemento, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: elemento.nome,
        url: url(elemento.percorso),
      })),
    },
  }
}
