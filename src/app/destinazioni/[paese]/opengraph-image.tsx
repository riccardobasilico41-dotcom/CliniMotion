import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllPaesi, getPaese } from '@/lib/geo'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Guida di viaggio per Paese'

export function generateStaticParams() {
  return getAllPaesi().map((p) => ({ paese: p.slug }))
}

export default async function Image({ params }: { params: Promise<{ paese: string }> }) {
  const { paese: paeseSlug } = await params
  const paese = getPaese(paeseSlug)

  return ogImage({
    eyebrow: paese ? `Guida · ${paese.continente}` : 'Guida di viaggio',
    titolo: paese?.nome ?? 'Destinazione',
    sottotitolo: paese ? ogTesto(paese.titolo, 110) : undefined,
  })
}
