import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllDestinazioni, getDestinazione, getPaese } from '@/lib/geo'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Scheda destinazione'

export function generateStaticParams() {
  return getAllDestinazioni().map((d) => ({ paese: d.paeseSlug, slug: d.slug }))
}

export default async function Image({ params }: { params: Promise<{ paese: string; slug: string }> }) {
  const { paese: paeseSlug, slug } = await params
  const destinazione = getDestinazione(paeseSlug, slug)
  const paese = getPaese(paeseSlug)

  return ogImage({
    eyebrow: paese ? `${paese.nome} · destinazione` : 'Destinazione',
    titolo: destinazione?.nome ?? 'Destinazione',
    sottotitolo: destinazione ? ogTesto(destinazione.introduzione, 120) : undefined,
  })
}
