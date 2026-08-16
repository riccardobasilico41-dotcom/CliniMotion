import { siteConfig } from '@/lib/site-config'

export function MapEmbed() {
  const { lat, lng } = siteConfig.address
  const delta = 0.02
  const bbox = [lng - delta, lat - delta * 0.7, lng + delta, lat + delta * 0.7].join(',')
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`

  return (
    <div className="overflow-hidden rounded-3xl border border-alpine/10">
      <iframe
        title="Mappa di Bocenago, Val Rendena"
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full sm:h-96"
      />
      <div className="flex items-center justify-between bg-white/80 px-5 py-3 text-xs">
        <span className="text-stone">Bocenago, Val Rendena</span>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-alpine underline underline-offset-4"
        >
          Apri in Google Maps →
        </a>
      </div>
    </div>
  )
}
