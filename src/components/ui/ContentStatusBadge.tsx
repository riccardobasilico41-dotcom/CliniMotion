import { CheckCircle2, ThumbsUp, AlertTriangle, HelpCircle } from 'lucide-react'
import { STATO_CONTENUTO_LABEL, type StatoContenuto } from '@/lib/types'

const STYLE: Record<StatoContenuto, { classes: string; icon: typeof CheckCircle2 }> = {
  provato: { classes: 'bg-alpine text-cream', icon: CheckCircle2 },
  consigliato: { classes: 'bg-alpine/10 text-alpine', icon: ThumbsUp },
  'da-verificare': { classes: 'bg-rosso/10 text-rosso-dark', icon: AlertTriangle },
  'da-confermare': { classes: 'bg-stone/10 text-stone', icon: HelpCircle },
}

export function ContentStatusBadge({
  stato,
  className = '',
}: {
  stato: StatoContenuto
  className?: string
}) {
  const { classes, icon: Icon } = STYLE[stato]
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider ${classes} ${className}`}
    >
      <Icon size={12} />
      {STATO_CONTENUTO_LABEL[stato]}
    </span>
  )
}
