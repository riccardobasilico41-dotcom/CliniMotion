import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { TripCard } from '@/components/TripCard'
import { MeravigliaCard } from '@/components/MeravigliaCard'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { getAllViaggi } from '@/lib/viaggi'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

/* Hallmark · macrostructure: 08 Photographic · genre: editorial · theme: custom
 * · nav: N6 · footer: Ft1 · designed-as-app
 * Replaces the previous Marquee-Hero-shaped homepage (dark radial-gradient
 * "aurora-blob" background + per-word fade-in headline) with a real
 * photograph doing the work the gradient used to fake. See design.md. */
export default function HomePage() {
  const viaggi = getAllViaggi()
  const pronto = viaggi.find((v) => !v.inLavorazione)
  const primo = pronto ?? viaggi[0]
  const altri = viaggi.filter((v) => v.slug !== primo?.slug)
  const meraviglie = getAllMeraviglie()

  return (
    <>
      {/* Photo-fold: the hero IS the photograph */}
      <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-alpine-dark sm:min-h-[74vh]">
        <Image
          src="/images/norvegia/reinebringen-stock.jpg"
          alt="Vista dall'alto del Reinebringen sul villaggio di Reine e i fiordi, Lofoten"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-alpine-dark/85 via-alpine-dark/10 to-transparent" />
        <Container className="relative z-10 pb-10 sm:pb-14">
          <Reveal>
            <p className="font-display text-lg italic text-cream/90 sm:text-xl">Reinebringen, Lofoten.</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/70 sm:text-base">
              {siteConfig.tagline}.
            </p>
            <Link
              href="/viaggi"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
            >
              Scopri il mio itinerario
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* Text-fold: the lede, narrow measure */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="max-w-2xl text-lg leading-relaxed text-stone sm:text-xl">{siteConfig.description}</p>
          </Reveal>
        </Container>
      </section>

      {/* Ultimi viaggi */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <h1 className="font-display text-3xl font-medium text-balance text-alpine sm:text-4xl">
            I viaggi raccontati finora
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone">
            Ogni viaggio con itinerario giorno per giorno, scheda pratica e consigli su cosa vedere, dove dormire e
            dove mangiare.
          </p>
          <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2" stagger={0.05}>
            {primo && (
              <RevealItem className="sm:col-span-2 sm:row-span-2">
                <TripCard viaggio={primo} featured />
              </RevealItem>
            )}
            {altri.map((v) => (
              <RevealItem key={v.slug}>
                <TripCard viaggio={v} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* Meraviglie del mondo */}
      <section className="border-t border-alpine/10 bg-cream-dark/40 py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-medium text-balance text-alpine sm:text-4xl">
                Le sette meraviglie del mondo
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone">
                Guida pratica monumento per monumento: prenotazione, prezzi, come arrivare, tour o autonomia, truffe
                da evitare e cosa vedere — e perché.
              </p>
            </div>
            <Link
              href="/meraviglie"
              className="group inline-flex items-center gap-2 text-sm font-medium text-rosso hover:underline"
            >
              Vedi tutte le meraviglie
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {meraviglie.slice(0, 3).map((m) => (
              <RevealItem key={m.slug}>
                <MeravigliaCard meraviglia={m} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {/* CTA finale */}
      <section className="border-t border-alpine/10 bg-alpine py-16 text-cream sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">
              {viaggi.length} itinerari raccontati
            </p>
            <h2 className="mt-3 max-w-md font-display text-3xl leading-tight sm:text-4xl">
              Il prossimo viaggio da dove comincia?
            </h2>
          </div>
          <Link
            href="/viaggi"
            className="group inline-flex items-center gap-2 text-base font-medium text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
          >
            Vedi tutti i viaggi
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </section>
    </>
  )
}
