import { ArrowRight } from 'lucide-react'
import { HeaderAction, HeaderFacts, PageHeader } from './ui/PageHeader'
import type { Media } from './ui/HeaderMedia'
import { copertineViaggi } from '@/content/viaggi-copertine'
import { creditiCopertine } from '@/content/viaggi-copertine-crediti'
import type { Paese } from '@/lib/types'

/**
 * Apertura della pagina Paese: stessa grammatica di tutte le pagine interne (`PageHeader`).
 * Foto: quella del Paese se c'è, altrimenti la copertina reale del viaggio principale
 * (con il suo credito); se manca anche quella, testata solo tipografica.
 */
export function CountryHero({
  paese,
  tripHref,
  destinazioniHref,
}: {
  paese: Paese
  tripHref: string
  destinazioniHref: string
}) {
  const copertina = copertineViaggi[paese.tripPrincipaleSlug]
  const media: Media | undefined = paese.heroImage
    ? { tipo: 'foto', src: paese.heroImage, alt: paese.heroImageAlt }
    : copertina
      ? { tipo: 'foto', src: copertina.immagine, alt: copertina.imageAlt }
      : undefined
  const credito = !paese.heroImage && copertina ? creditiCopertine[paese.tripPrincipaleSlug] : undefined

  return (
    <PageHeader
      crumbs={[{ label: 'Home', href: '/' }, { label: 'Destinazioni', href: '/destinazioni' }, { label: paese.nome }]}
      eyebrow={paese.continente}
      title={paese.nome}
      lead={<p>{paese.descrizione}</p>}
      meta={
        <HeaderFacts
          items={[
            { label: 'Periodo migliore', value: paese.periodoMigliore },
            { label: 'Durata consigliata', value: paese.durataConsigliata },
            { label: 'Budget indicativo', value: paese.budgetIndicativo },
            { label: 'Stile di viaggio', value: paese.stileViaggio.join(' · ') },
          ]}
        />
      }
      actions={
        <>
          <HeaderAction href={tripHref}>
            Scopri il mio itinerario
            <ArrowRight size={16} aria-hidden="true" />
          </HeaderAction>
          <HeaderAction href={destinazioniHref} secondary>
            Esplora le destinazioni
          </HeaderAction>
        </>
      }
      media={media}
      credito={credito}
    />
  )
}
