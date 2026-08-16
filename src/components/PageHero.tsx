import { Container } from './ui/Container'

export function PageHero({
  eyebrow,
  title,
  description,
  tone = 'forest',
}: {
  eyebrow: string
  title: string
  description: string
  tone?: 'forest' | 'summer' | 'winter'
}) {
  const gradients: Record<string, string> = {
    forest: 'from-forest via-forest to-forest-dark',
    summer: 'from-[#3c5a3f] via-forest to-forest-dark',
    winter: 'from-[#2c3e52] via-[#233448] to-forest-dark',
  }

  return (
    <section className={`relative overflow-hidden bg-gradient-to-br ${gradients[tone]} py-20 sm:py-28`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <Container className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium text-balance text-cream sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/75">{description}</p>
      </Container>
    </section>
  )
}
