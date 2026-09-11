import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllMeraviglie, getMeraviglia } from '@/lib/meraviglie'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Guida a una meraviglia del mondo'

export function generateStaticParams() {
  return getAllMeraviglie().map((m) => ({ slug: m.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meraviglia = getMeraviglia(slug)

  return ogImage({
    eyebrow: meraviglia ? `Meraviglia del mondo · ${meraviglia.paese}` : 'Meraviglie del mondo',
    titolo: meraviglia?.nome ?? 'Meraviglia del mondo',
    sottotitolo: meraviglia ? ogTesto(meraviglia.descrizione, 120) : undefined,
  })
}
