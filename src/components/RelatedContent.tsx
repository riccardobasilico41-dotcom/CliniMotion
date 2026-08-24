import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export type RelatedItem = {
  href: string
  eyebrow: string
  titolo: string
  sottotitolo?: string
}

export function RelatedContent({
  titolo,
  items,
  className = '',
}: {
  titolo: string
  items: RelatedItem[]
  className?: string
}) {
  if (items.length === 0) return null

  return (
    <div className={className}>
      <h2 className="font-display text-xl text-alpine">{titolo}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-start justify-between gap-3 rounded-xl border border-alpine/10 bg-white p-4 transition-colors hover:border-alpine/30"
          >
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-rosso">{item.eyebrow}</p>
              <p className="mt-1 font-display text-base font-medium text-ink">{item.titolo}</p>
              {item.sottotitolo && <p className="mt-1 text-sm text-stone">{item.sottotitolo}</p>}
            </div>
            <ArrowUpRight
              size={16}
              className="mt-0.5 shrink-0 text-stone/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-alpine"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
