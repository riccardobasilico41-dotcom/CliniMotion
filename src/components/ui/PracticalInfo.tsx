import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export type PracticalInfoItem = {
  label: string
  value?: string
  href?: string
}

/**
 * Blocco informazioni pratiche riutilizzabile: se un item ha `href` diventa un
 * link (usato in "Organizza il viaggio"), altrimenti mostra solo il valore
 * (usato nelle schede destinazione/esperienza per come arrivare, periodo, costi...).
 */
export function PracticalInfo({ items, className = '' }: { items: PracticalInfoItem[]; className?: string }) {
  return (
    <dl className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-alpine/10 bg-white p-4"
        >
          <dt className="text-xs font-semibold uppercase tracking-wider text-stone/70">{item.label}</dt>
          {item.href ? (
            <Link
              href={item.href}
              className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-alpine hover:text-rosso"
            >
              {item.value ?? 'Scopri di più'}
              <ArrowRight size={13} />
            </Link>
          ) : (
            <dd className="mt-1.5 text-sm leading-relaxed text-ink">{item.value || 'da completare'}</dd>
          )}
        </div>
      ))}
    </dl>
  )
}
