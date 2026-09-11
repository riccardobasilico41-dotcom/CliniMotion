import { ImageResponse } from 'next/og'
import { siteConfig } from './site-config'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

// Valori esadecimali corrispondenti ai token OKLCH di design.md: l'ImageResponse
// di Satori non supporta oklch(), quindi qui si usano gli equivalenti originali.
const ALPINE_DARK = '#0a2c40'
const ALPINE = '#124a6b'
const CREAM = '#fdfcfa'
const ROSSO = '#d1452c'

/**
 * Card social condivisa da tutte le pagine: fondo scuro del brand, riga
 * occhiello in rosso, titolo grande e firma del sito. Nessun font esterno né
 * immagine remota — tutto renderizzato a build time, così le anteprime social
 * esistono anche senza foto caricate.
 */
export function ogImage({
  eyebrow,
  titolo,
  sottotitolo,
}: {
  eyebrow: string
  titolo: string
  sottotitolo?: string
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: ALPINE_DARK,
          backgroundImage: `linear-gradient(135deg, ${ALPINE_DARK} 0%, ${ALPINE} 100%)`,
          padding: '72px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: ROSSO,
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: titolo.length > 70 ? 62 : 78,
              lineHeight: 1.1,
              color: CREAM,
              fontWeight: 700,
            }}
          >
            {titolo}
          </div>
          {sottotitolo && (
            <div
              style={{
                display: 'flex',
                marginTop: 26,
                fontSize: 30,
                lineHeight: 1.4,
                color: 'rgba(253,252,250,0.72)',
              }}
            >
              {sottotitolo}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ display: 'flex', width: 64, height: 5, backgroundColor: ROSSO }} />
          <div style={{ display: 'flex', fontSize: 30, color: CREAM, fontWeight: 700 }}>
            {siteConfig.brandName}
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: 'rgba(253,252,250,0.55)' }}>
            {siteConfig.tagline}
          </div>
        </div>
      </div>
    ),
    OG_SIZE
  )
}

/** Taglia un testo lungo alla lunghezza utile per una card social. */
export function ogTesto(testo: string, max = 120): string {
  if (testo.length <= max) return testo
  return testo.slice(0, max).replace(/\s+\S*$/, '') + '…'
}
