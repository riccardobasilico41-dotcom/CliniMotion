import { ogImage, ogTesto, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { getAllViaggi, getViaggioBySlug } from '@/lib/viaggi'
import { getContinente } from '@/lib/utils'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = 'Itinerario di viaggio'

export function generateStaticParams() {
  return getAllViaggi().map((v) => ({ slug: v.slug }))
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const viaggio = getViaggioBySlug(slug)

  return ogImage({
    eyebrow: viaggio ? `Itinerario · ${getContinente(viaggio.categorie)}` : 'Itinerario',
    titolo: ogTesto(viaggio?.titolo ?? 'Itinerario di viaggio', 90),
    sottotitolo: viaggio?.durataBreve ? `${viaggio.durataBreve} · giorno per giorno` : undefined,
  })
}
