import { List } from 'lucide-react'

export type TocItem = {
  href: string
  label: string
}

/**
 * Indice di pagina con anchor link, in un <details> nativo: compatto e
 * chiuso di default ovunque (nessun contenuto "rubato" alla pagina), apribile
 * con un tap/click. Su desktop resta comunque raggiungibile durante lo
 * scroll grazie al posizionamento sticky. Nessun JS necessario.
 */
export function StickyTableOfContents({ items, className = '' }: { items: TocItem[]; className?: string }) {
  return (
    <nav aria-label="Indice della pagina" className={`lg:sticky lg:top-24 lg:self-start ${className}`}>
      <details className="group rounded-2xl border border-alpine/10 bg-white">
        <summary className="flex cursor-pointer list-none items-center gap-2 px-5 py-4 text-sm font-semibold text-alpine marker:content-none">
          <List size={16} />
          In questa pagina
        </summary>
        <ul className="space-y-0.5 px-5 pb-4">
          {items.map((item) => (
            <li key={`${item.href}-${item.label}`}>
              <a
                href={item.href}
                className="block rounded-lg px-2 py-1.5 text-sm text-stone transition-colors hover:bg-alpine/5 hover:text-alpine"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </nav>
  )
}
