import type { Metadata } from 'next'
import { siteConfig } from './site-config'

/**
 * Metadata di pagina standard: title/description/canonical più Open
 * Graph e Twitter (prima mancavano quasi ovunque tranne in layout.tsx,
 * quindi ogni pagina ereditava lo stesso OG generico del sito — le
 * anteprime social non distinguevano una pagina viaggio da una
 * destinazione). `social*` sovrascrive solo l'anteprima social quando
 * deve differire dal title/description SEO; altrimenti eredita gli stessi.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  socialTitle,
  socialDescription,
}: {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  socialTitle?: string
  socialDescription?: string
}): Metadata {
  const ogTitle = socialTitle ?? title
  const ogDescription = socialDescription ?? description

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: path,
      siteName: siteConfig.shortName,
      locale: 'it_IT',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
    },
  }
}
