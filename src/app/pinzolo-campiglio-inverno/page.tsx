import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/PageHero'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { Button } from '@/components/ui/Button'
import { Mountain, Users, Snowflake, CableCar } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Cosa fare in inverno a Pinzolo e Madonna di Campiglio',
  description:
    "Sci a Skirama Dolomiti Adamello Brenta, l'impianto di Prà Rodont per le famiglie, ciaspole e piste da fondo: le attività invernali a Pinzolo e Madonna di Campiglio, a 9 minuti dalla mansarda di Bocenago.",
  alternates: { canonical: '/pinzolo-campiglio-inverno' },
}

const stats = [
  { icon: Mountain, label: '380 km di piste', sub: 'su Skirama Dolomiti Adamello Brenta, unico skipass' },
  { icon: CableCar, label: '150 impianti di risalita', sub: 'in 8 località sciistiche collegate' },
  { icon: Snowflake, label: '90%+ innevamento garantito', sub: 'oltre 340 km con impianti di innevamento programmato' },
]

export default function InvernoPage() {
  return (
    <>
      <PageHero
        tone="winter"
        eyebrow="Inverno a Pinzolo e Madonna di Campiglio"
        title="Skirama Dolomiti Adamello Brenta, a 9 minuti dalla mansarda"
        description={`La mansarda a Bocenago è indicata dall'annuncio come "${'raggiungibile con gli sci'}": in inverno, con neve, si può sciare fin quasi a casa. Pinzolo e Madonna di Campiglio sono collegate tra loro dalla cabinovia Pinzolo-Campiglio Express.`}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="rounded-3xl border border-forest/10 bg-white/70 p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <s.icon size={20} strokeWidth={1.75} />
                  </span>
                  <p className="mt-4 font-display text-2xl text-forest">{s.label}</p>
                  <p className="mt-1 text-sm text-stone">{s.sub}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-cream-dark/60 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Madonna di Campiglio"
              title="60 km di piste e 22 impianti"
              description="La località più nota del comprensorio, con piste che scendono verso il paese e collegamenti verso il Gruppo di Brenta e la Val di Sole. Adatta sia a sciatori esperti sia a chi cerca piste più tranquille."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Pinzolo"
              title="30 km di piste e 10 impianti"
              description="Più raccolta e familiare, con l'impianto di Prà Rodont indicato spesso come punto ideale per sciare in famiglia con bambini, e la cabinovia rinnovata verso il Doss del Sabion."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Non solo sci"
              title="Ciaspole, fondo e passeggiate sulla neve"
              description="La Val Rendena e l'altopiano di Campo Carlo Magno, storica sede di piste da fondo, offrono anche itinerari per racchette da neve e sci nordico, per chi cerca un ritmo più lento tra i boschi innevati."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 flex items-start gap-4 rounded-3xl border border-wood/20 bg-wood/5 p-7">
              <Users size={22} className="mt-0.5 shrink-0 text-wood-dark" />
              <p className="text-sm leading-relaxed text-stone">
                La mansarda dispone di letto per bambini, seggiolone e balcone protetto: comoda base per
                famiglie con bambini piccoli che vogliono alternare sci e giornate più tranquille in
                paese, a Bocenago.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-forest px-8 py-10 text-cream sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl">Prenota il tuo inverno in Val Rendena</h2>
            <p className="mt-2 text-sm text-cream/75">
              Numero di licenza {siteConfig.legal.licenseNumber} · CIN {siteConfig.legal.cin}
            </p>
          </div>
          <Button href="/prenota" variant="light">
            Vai alla prenotazione
          </Button>
        </Container>
      </section>
    </>
  )
}
