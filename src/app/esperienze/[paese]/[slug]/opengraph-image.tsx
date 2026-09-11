import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllEsperienze, getEsperienza, getPaese } from '@/lib/geo'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Scheda esperienza'

export function generateStaticParams() {
  return getAllEsperienze().map((e) => ({ paese: e.paeseSlug, slug: e.slug }))
}

export default async function Image({ params }: { params: Promise<{ paese: string; slug: string }> }) {
  const { paese: paeseSlug, slug } = await params
  const esperienza = getEsperienza(paeseSlug, slug)
  const paese = getPaese(paeseSlug)

  return ogImage({
    eyebrow: paese ? `${paese.nome} · esperienza` : 'Esperienza',
    titolo: ogTesto(esperienza?.nome ?? 'Esperienza', 80),
    sottotitolo: esperienza ? ogTesto(esperienza.cosE, 120) : undefined,
  })
}
