import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TripCard } from '@/components/TripCard'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { getAllViaggi } from '@/lib/viaggi'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  const viaggi = getAllViaggi()
  const pronto = viaggi.find((v) => !v.inLavorazione)
  const primo = pronto ?? viaggi[0]
  const altri = viaggi.filter((v) => v.slug !== primo?.slug)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-alpine-dark py-28 sm:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(209,69,44,0.35), transparent 45%), radial-gradient(circle at 85% 75%, rgba(18,74,107,0.55), transparent 50%)',
          }}
        />
        <Container className="relative z-10">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
              Diario di viaggio
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-medium leading-[1.05] text-cream sm:text-7xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-8">
              <Link
                href="/viaggi"
                className="group inline-flex items-center gap-2 text-sm font-medium text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
              >
                Esplora tutti i viaggi
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Ultimi viaggi */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Itinerari"
            title="I viaggi raccontati finora"
            description="Ogni viaggio con itinerario giorno per giorno, scheda pratica e consigli su cosa vedere, dove dormire e dove mangiare."
          />
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
