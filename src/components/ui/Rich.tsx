import { Fragment, type ReactNode } from 'react'

/**
 * Testo breve dei contenuti (destinazioni, esperienze, Paesi) con il markdown in linea
 * che vi compare: **grassetto**, *corsivo*, [link](url). Senza questo gli asterischi
 * finivano in pagina così com'erano. Niente HTML grezzo: solo elementi React.
 */
const TOKEN = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]\([^)\s]+\))/g

export function richNodes(text?: string | null): ReactNode[] {
  if (!text) return []
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong>
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
    if (link) {
      const esterno = /^https?:/.test(link[2])
      return (
        <a
          key={i}
          href={link[2]}
          className="underline decoration-rosso underline-offset-2 hover:text-rosso"
          {...(esterno ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {link[1]}
        </a>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

export function Rich({ text, as: Tag = 'span', className }: { text?: string; as?: 'span' | 'p' | 'li' | 'dd'; className?: string }) {
  if (!text) return null
  return <Tag className={className}>{richNodes(text)}</Tag>
}

/** Versione testuale pulita (per meta description, alt, JSON-LD). */
export function plain(text: string) {
  return text.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*\s][^*]*)\*/g, '$1').replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
}
