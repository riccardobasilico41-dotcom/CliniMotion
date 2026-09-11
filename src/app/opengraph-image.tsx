import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/lib/og'
import { siteConfig } from '@/lib/site-config'

export const size = OG_SIZE
export const contentType = OG_CONTENT_TYPE
export const alt = `${siteConfig.brandName} — ${siteConfig.tagline}`

export default function Image() {
  return ogImage({
    eyebrow: 'Diario di viaggio',
    titolo: siteConfig.brandName,
    sottotitolo: 'Itinerari giorno per giorno, schede pratiche e consigli, un continente alla volta',
  })
}
