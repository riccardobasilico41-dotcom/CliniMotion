import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/PageHero'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { Button } from '@/components/ui/Button'
import { Footprints, Bike, Mountain, Waves, Landmark } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosa fare in estate a Pinzolo e Madonna di Campiglio',
  description:
    "Trekking sulle Dolomiti di Brenta, il nuovo bike park, via ferrata, la Cascata del Masanel e la Val Genova: le attività estive a Pinzolo e Madonna di Campiglio, a pochi minuti dalla mansarda di Bocenago.",
  alternates: { canonical: '/pinzolo-campiglio-estate' },
}

const activities = [
  {
    icon: Footprints,
    title: 'Trekking sulle Dolomiti di Brenta',
    text: 'Le funivie di Madonna di Campiglio e Pinzolo restano aperte indicativamente da metà giugno a metà settembre e portano rapidamente in quota, verso i sentieri d\'alta montagna e i rifugi del gruppo del Brenta — patrimonio UNESCO come parte delle Dolomiti. Percorsi per tutti i livelli, dalle passeggiate panoramiche alla via ferrata.',
  },
  {
    icon: Bike,
    title: 'Bike area e mountain bike',
    text: 'Il comprensorio ha inaugurato una bike area con 23 tracciati di difficoltà diverse, oltre a 25 km di piste ciclabili e circa 90 e-bike a noleggio: un\'offerta pensata sia per chi cerca discese tecniche sia per chi preferisce pedalare in valle.',
  },
  {
    icon: Mountain,
    title: 'Pinzolo–Doss del Sabion',
    text: 'La cabinovia che sale al Doss del Sabion è stata rinnovata nel 2023 con una cabina a 10 posti, eco-efficiente: da qui si aprono sentieri, punti panoramici e la possibilità di scendere in bici lungo il bike park.',
  },
  {
    icon: Waves,
    title: 'Val Genova e le sue cascate',
    text: 'A pochi minuti da Pinzolo, la Val Genova — nel cuore del Parco Naturale Adamello Brenta — è una delle valli glaciali più suggestive del Trentino, con le celebri Cascate di Nardis tra le sue tappe classiche.',
  },
  {
    icon: Landmark,
    title: 'La Cascata del Masanel, direttamente da Bocenago',
    text: 'Senza muovere l\'auto: un anello facile parte dal paese e in meno di un\'ora raggiunge la piccola Cascata del Masanel, passando per il borgo abbandonato di Canisaga. Adatto anche a famiglie con bambini.',
  },
]

export default function EstatePage() {
  return (
    <>
      <PageHero
        tone="summer"
        eyebrow="Estate a Pinzolo e Madonna di Campiglio"
        title="Dolomiti di Brenta, sentieri e bike a due passi dalla mansarda"
        description="Da Bocenago, Pinzolo è a circa 9 minuti d'auto e Madonna di Campiglio a circa 20: abbastanza vicine per una gita di mezza giornata, abbastanza lontane da un centro affollato per godersi le sere tranquille in Val Rendena."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cosa fare"
              title="Le attività estive della Val Rendena"
              description="Dai sentieri d'alta quota raggiunti in funivia al nuovo bike park, fino alle cascate a portata di passeggiata."
            />
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            {activities.map((a) => (
              <RevealItem key={a.title}>
                <article className="h-full rounded-3xl border border-forest/10 bg-white/70 p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <a.icon size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 font-display text-lg text-forest">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{a.text}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-cream-dark/60 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Vicino a casa"
              title="A Bocenago, senza spostarsi"
              description="Il Golf Club Rendena è a 400 metri dalla mansarda, 5 minuti a piedi: un campo pratica immerso nel verde della valle, comodo per una partita anche senza organizzare la giornata in anticipo."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Consiglio pratico"
              title="Prenota gli impianti in anticipo nei weekend"
              description="Nei fine settimana di luglio e agosto le funivie di Campiglio e Pinzolo possono avere code alla partenza: partire presto la mattina, o verificare gli orari aggiornati sui siti degli impianti, aiuta a godersi meglio la giornata in quota."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-forest px-8 py-10 text-cream sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl">Organizza la tua estate in Val Rendena</h2>
            <p className="mt-2 text-sm text-cream/75">Verifica la disponibilità della mansarda per le tue date.</p>
          </div>
          <Button href="/prenota" variant="light">
            Vai alla prenotazione
          </Button>
        </Container>
      </section>
    </>
  )
}
