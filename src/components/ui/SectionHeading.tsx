export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-[clamp(2rem,3.4vw,3rem)] text-balance text-alpine">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-stone">{description}</p>}
    </div>
  )
}
