/**
 * Field Dossier: lo stato "senza fotografia" di Signature Editorial.
 * Non è un placeholder — è la risposta dichiarata alla domanda "cosa mostro
 * quando non ho una foto reale". Usa solo dati che il sito ha già per
 * davvero (nome, coordinate se note, indice del giorno, durata, paese):
 * niente gradiente, niente icona generica al posto della foto mancante.
 *
 * Componente server-renderable: nessuna animazione propria oltre a quella
 * già applicata dal chiamante (es. Reveal). Tinte: `dark` per i contesti su
 * sfondo alpine-dark (hero, opener), `light` per i contesti su cream.
 */
export function FieldDossier({
  titolo,
  eyebrow,
  coordinateLabel,
  meta,
  tone = 'light',
  size = 'md',
  className = '',
}: {
  titolo: string
  eyebrow?: string
  coordinateLabel?: string
  meta?: string
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const toneClasses =
    tone === 'dark'
      ? 'border-cream/15 bg-alpine-dark text-cream'
      : 'border-alpine/15 bg-cream-dark/50 text-ink'
  const mutedClasses = tone === 'dark' ? 'text-cream/50' : 'text-stone/60'
  const titleSize = { sm: 'text-xl sm:text-2xl', md: 'text-2xl sm:text-3xl', lg: 'text-4xl sm:text-5xl' }[size]

  return (
    <div
      // Nessuna altezza di default (niente `h-full`): dentro una cella di
      // CSS Grid anche una riga "auto" ottiene un'altezza risolta e definita
      // per i figli, quindi `h-full` qui vincerebbe sempre su un'altezza
      // esplicita passata dal chiamante (es. `h-28`), indipendentemente
      // dall'ordine delle classi — non è una questione di specificità CSS,
      // è che due utility diverse (h-full e h-28) non "competono": vince
      // quella che risulta applicabile per prima nel foglio di stile
      // generato. Il chiamante decide sempre l'altezza tramite `className`.
      className={`relative flex flex-col justify-between overflow-hidden border p-5 sm:p-6 ${toneClasses} ${className}`}
    >
      {/* Tacche cartografiche decorative: cornice a mirino, non un'icona-soggetto */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className={`pointer-events-none absolute inset-0 h-full w-full ${tone === 'dark' ? 'text-cream/10' : 'text-alpine/10'}`}
      >
        <path d="M4 14 V4 H14" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M86 4 H96 V14" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M96 86 V96 H86" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <path d="M14 96 H4 V86" fill="none" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      <div className="relative z-10">
        {eyebrow && (
          <p className={`font-mono text-[0.65rem] uppercase tracking-[0.2em] ${mutedClasses}`}>{eyebrow}</p>
        )}
        <p className={`mt-3 font-display font-medium leading-[1.05] text-balance ${titleSize}`}>{titolo}</p>
      </div>

      <div className={`relative z-10 mt-6 flex items-end justify-between gap-3 font-mono text-[0.65rem] tabular-nums ${mutedClasses}`}>
        <span>{coordinateLabel ?? '—'}</span>
        {meta && <span className="text-right">{meta}</span>}
      </div>
    </div>
  )
}
