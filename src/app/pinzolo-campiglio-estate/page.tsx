import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { ArrowRight, ExternalLink, Footprints, Bike, Mountain, Waves, Landmark } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cosa fare in estate a Pinzolo e Madonna di Campiglio',
  description:
    "Trekking sulle Dolomiti di Brenta, il nuovo bike park, via ferrata, la Cascata del Masanel e la Val Genova: le attività estive a Pinzolo e Madonna di Campiglio, a pochi minuti dalla mansarda di Bocenago.",
  alternates: { canonical: '/pinzolo-campiglio-estate' },
}

const officialLinks = {
  funivie: 'https://www.campigliodolomiti.it/it/skiarea-estiva',
  pnab: 'https://www.pnab.it/it/',
  golf: 'https://www.golfrendena.it',
}

const featured = {
  icon: Footprints,
  title: 'Trekking sulle Dolomiti di Brenta',
  text: "Le funivie di Madonna di Campiglio e Pinzolo restano aperte indicativamente da metà giugno a metà settembre e portano rapidamente in quota, verso i sentieri d'alta montagna e i rifugi del gruppo del Brenta — patrimonio UNESCO come parte delle Dolomiti. Percorsi per tutti i livelli, dalle passeggiate panoramiche alla via ferrata.",
}

const activities = [
  {
    icon: Bike,
    title: 'Bike area e mountain bike',
    text: "Il comprensorio ha inaugurato una bike area con 23 tracciati di difficoltà diverse, oltre a 25 km di piste ciclabili e circa 90 e-bike a noleggio.",
  },
  {
    icon: Mountain,
    title: 'Pinzolo–Doss del Sabion',
    text: 'La cabinovia rinnovata nel 2023 con una cabina a 10 posti, eco-efficiente: sentieri, punti panoramici e discesa in bici lungo il bike park.',
  },
  {
    icon: Waves,
    title: 'Val Genova e le sue cascate',
    text: 'Nel cuore del Parco Naturale Adamello Brenta, una delle valli glaciali più suggestive del Trentino, con le celebri Cascate di Nardis.',
    link: { href: officialLinks.pnab, label: 'Sito del Parco' },
  },
  {
    icon: Landmark,
    title: 'La Cascata del Masanel',
    text: "Senza muovere l'auto: un anello facile parte da Bocenago e in meno di un'ora raggiunge la piccola cascata, passando per il borgo abbandonato di Canisaga.",
  },
]

export default function EstatePage() {
  return (
    <>
      {/* Hero fotografico — stessa foto della home, taglio e testo diversi */}
      <section className="relative flex h-[60vh] min-h-[420px] items-start overflow-hidden bg-alpine-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/dolomiti-brenta-hero.jpg"
            alt="Le Dolomiti di Brenta in estate, viste dalla Val Rendena"
            fill
            className="object-cover object-[30%_60%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-alpine-dark/80 via-alpine-dark/10 to-transparent" />
        </div>
        <Container className="relative pt-16 sm:pt-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cream/70">
            Pinzolo · Madonna di Campiglio
          </p>
          <h1 className="mt-3 max-w-lg font-display text-4xl font-medium leading-[1.05] text-cream sm:text-6xl">
            Estate in Val Rendena
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <p className="max-w-2xl text-base leading-relaxed text-stone">
            Da Bocenago, Pinzolo è a circa 9 minuti d&apos;auto e Madonna di Campiglio a circa 20:
            abbastanza vicine per una gita di mezza giornata, abbastanza lontane da un centro affollato
            per godersi le sere tranquille in Val Rendena.
          </p>
        </Container>
      </section>

      {/* Attività — un blocco in evidenza + lista, non griglia uniforme */}
      <section className="border-t border-alpine/10 py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <article>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-alpine text-cream">
                <featured.icon size={20} strokeWidth={1.75} />
              </span>
              <h2 className="mt-5 font-display text-2xl text-alpine sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 max-w-md text-base leading-relaxed text-stone">{featured.text}</p>
              <a
                href={officialLinks.funivie}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-rosso underline underline-offset-4"
              >
                Orari e stato impianti (sito ufficiale)
                <ExternalLink size={12} />
              </a>
            </article>

            <div className="divide-y divide-alpine/10 border-t border-alpine/10 lg:border-t-0">
              {activities.map((a) => (
                <div key={a.title} className="flex gap-4 py-6 first:pt-0 lg:first:pt-0">
                  <a.icon size={18} strokeWidth={1.75} className="mt-1 shrink-0 text-rosso-dark" />
                  <div>
                    <h3 className="font-display text-base text-alpine">{a.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-stone">{a.text}</p>
                    {a.link && (
                      <a
                        href={a.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-rosso underline underline-offset-4"
                      >
                        {a.link.label}
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-alpine/10 bg-cream-dark/50 py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Vicino a casa</p>
            <h2 className="mt-3 font-display text-2xl text-alpine">A Bocenago, senza spostarsi</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Il{' '}
              <a
                href={officialLinks.golf}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-alpine underline underline-offset-4"
              >
                Golf Club Rendena
              </a>{' '}
              è a 400 metri dalla mansarda, 5 minuti a piedi: un campo pratica immerso nel verde della
              valle.
            </p>
          </div>
          <div className="border-l border-alpine/15 pl-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Consiglio pratico</p>
            <h2 className="mt-3 font-display text-2xl text-alpine">Prenota gli impianti in anticipo</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Nei fine settimana di luglio e agosto le funivie di Campiglio e Pinzolo possono avere code
              alla partenza: partire presto la mattina aiuta a godersi meglio la giornata in quota.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-alpine/10 py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl text-alpine">Organizza la tua estate in Val Rendena</h2>
          <Link
            href="/prenota"
            className="group inline-flex items-center gap-2 text-sm font-medium text-alpine underline underline-offset-4"
          >
            Vai alla prenotazione
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </section>
    </>
  )
}
