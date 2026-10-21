import Link from 'next/link'
import type { ReactNode } from 'react'
import { HeaderMedia, type Media } from './HeaderMedia'
import { richNodes } from './Rich'

export type Crumb = { label: string; href?: string }
export type Credito = { autore: string; licenza: string; fonteUrl: string }

/**
 * Apertura unica di tutte le pagine interne, Stile A "Ghat" (stessa grammatica
 * dell'hero della Home): briciole di pane, etichetta rossa, titolo grotesk a
 * scala fissa, sottotitolo, dati e azioni a sinistra; a destra la foto o il
 * video vero, con il credito sotto. Senza media diventa una testata tipografica
 * a colonna unica, allineata al contenitore della pagina.
 * Sempre chiusa da una riga spessa (border-b-2), mai fondi scuri o sfumature.
 */
export function PageHeader({
  crumbs,
  eyebrow,
  badge,
  title,
  titleNote,
  lead,
  meta,
  actions,
  media,
  credito,
  luogo,
}: {
  crumbs?: Crumb[]
  eyebrow?: ReactNode
  badge?: ReactNode
  title: ReactNode
  /** Seconda riga piccola accanto al titolo (es. nome in lingua locale). */
  titleNote?: ReactNode
  lead?: ReactNode
  meta?: ReactNode
  actions?: ReactNode
  media?: Media
  credito?: Credito
  /** Didascalia del luogo prima del credito. */
  luogo?: string
}) {
  const testo = (
    <>
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Briciole di pane" className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-stone">
          {crumbs.map((c, i) => (
            <span key={`${c.label}-${i}`} className="inline-flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? (
                <Link href={c.href} className="underline-offset-2 hover:text-rosso hover:underline">
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-ink">
                  {c.label}
                </span>
              )}
            </span>
          ))}
        </nav>
      )}
      {(eyebrow || badge) && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{eyebrow}</p>}
          {badge}
        </div>
      )}
      <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(2.5rem,5.2vw,5rem)] text-balance text-ink">
        {title}
        {titleNote && (
          <span className="mt-2 block font-sans text-xl font-normal tracking-normal text-stone">{titleNote}</span>
        )}
      </h1>
      {lead && <div className="mt-6 max-w-[46ch] text-lg leading-relaxed text-stone">{lead}</div>}
      {meta && <div className="mt-8 border-t border-ink/15 pt-6">{meta}</div>}
      {actions && <div className="mt-8 flex flex-wrap items-center gap-6">{actions}</div>}
    </>
  )

  if (!media) {
    return (
      <section className="border-b-2 border-ink">
        <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14">{testo}</div>
      </section>
    )
  }

  return (
    <section className="grid border-b-2 border-ink lg:min-h-[min(46rem,calc(100dvh-4rem))] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="flex flex-col justify-end px-6 pb-12 pt-10 sm:px-8 lg:px-12 lg:pb-14 lg:pt-14">{testo}</div>
      <figure className="relative m-0 flex flex-col">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream-dark lg:aspect-auto lg:flex-1">
          <HeaderMedia media={media} />
        </div>
        {(credito || luogo) && (
          <figcaption className="px-4 py-3 text-xs text-stone sm:px-8 lg:px-4">
            {luogo}
            {luogo && credito && '. '}
            {credito && (
              <>
                {media.tipo === 'video' ? 'Video' : 'Foto'}:{' '}
                <a
                  href={credito.fonteUrl}
                  className="underline underline-offset-2 hover:text-rosso"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {credito.autore}
                </a>
                , {credito.licenza}
              </>
            )}
          </figcaption>
        )}
      </figure>
    </section>
  )
}

/** Riga di dati brevi sotto il titolo (periodo, durata, budget…). */
export function HeaderFacts({ items }: { items: { label: string; value?: ReactNode }[] }) {
  const pieni = items.filter((i) => i.value)
  if (!pieni.length) return null
  const lunghi = pieni.some((i) => typeof i.value === 'string' && i.value.length > 70)
  return (
    <dl className={`grid gap-x-8 gap-y-5 ${lunghi ? 'sm:grid-cols-2' : 'grid-cols-2 sm:grid-cols-4'}`}>
      {pieni.map((i) => (
        <div key={i.label}>
          <dt className="text-xs font-semibold uppercase tracking-wider text-stone">{i.label}</dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink">{typeof i.value === 'string' ? richNodes(i.value) : i.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Azione primaria piena rossa + secondaria sottolineata, come nella Home. */
export function HeaderAction({ href, children, secondary }: { href: string; children: ReactNode; secondary?: boolean }) {
  return secondary ? (
    <Link
      href={href}
      className="text-[0.95rem] font-semibold text-ink underline decoration-rosso decoration-2 underline-offset-[6px] hover:text-rosso"
    >
      {children}
    </Link>
  ) : (
    <Link
      href={href}
      className="inline-flex min-h-12 items-center gap-2 bg-rosso px-6 py-3 text-[0.95rem] font-semibold text-cream transition-colors duration-150 hover:bg-rosso-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rosso focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  )
}
