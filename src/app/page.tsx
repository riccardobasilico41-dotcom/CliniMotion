import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AmenityGrid } from '@/components/AmenityGrid'
import { Reveal } from '@/components/Reveal'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `${siteConfig.legalListingName} a Bocenago`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[78vh] min-h-[560px] overflow-hidden bg-alpine-dark sm:h-[86vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/dolomiti-brenta-hero.jpg"
            alt="Le Dolomiti di Brenta viste dalla Val Rendena, vicino a Bocenago"
            fill
            priority
            className="animate-slow-zoom object-cover"
            sizes="100vw"
          />
        </div>

        {/* corner caption */}
        <div className="absolute right-6 top-6 z-10 text-right sm:right-10 sm:top-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/80">
            Bocenago
            <br />
            Trentino
          </p>
        </div>

        {/* text block, biased low-left, local scrim only */}
        <div className="relative mt-auto w-full pb-10 pt-24 sm:pb-16">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-1/3"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(28,46,37,0.55) 55%, rgba(28,46,37,0.85) 100%)',
            }}
          />
          <Container className="relative">
            <Reveal>
              <h1 className="max-w-3xl font-display text-[3.4rem] font-semibold leading-[0.95] tracking-tight text-cream sm:text-[5.5rem] lg:text-[6.5rem]">
                {siteConfig.brandName}
              </h1>
              <p className="mt-3 max-w-md text-base font-normal text-cream/80 sm:text-lg">
                {siteConfig.shortName}, a Bocenago
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                <Link
                  href="/prenota"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-cream underline decoration-cream/40 decoration-1 underline-offset-4 transition-colors hover:decoration-cream"
                >
                  Prenota il soggiorno
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="inline-flex items-center gap-1.5 text-xs text-cream/70">
                  <Star size={13} className="fill-rosso text-rosso" />
                  {siteConfig.rating.value}/{siteConfig.rating.scale} · {siteConfig.rating.reviewCount} recensioni
                </span>
              </div>
            </Reveal>
          </Container>
        </div>
      </section>

      {/* Intro / benvenuto di Mara — voce in prima persona, nessun box */}
      <section className="pb-16 pt-24 sm:pb-20 sm:pt-32">
        <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Il benvenuto di Mara</p>
            <p className="mt-5 font-display text-[1.85rem] italic leading-[1.15] text-alpine sm:text-4xl">
              &ldquo;Sono sempre presente per i miei graditi ospiti, dato che abito nello stesso
              edificio.&rdquo;
            </p>
            <p className="mt-6 text-sm text-stone">
              — {siteConfig.host.name}
              {siteConfig.host.isStarHost && <span className="text-rosso-dark"> · Star Host</span>}
            </p>
          </div>

          <div className="border-t border-alpine/15 pt-8 lg:border-t-0 lg:border-l lg:pl-14 lg:pt-0">
            <p className="text-base leading-relaxed text-stone">{siteConfig.host.bio}</p>
            <ul className="mt-8 space-y-3 text-sm text-stone">
              <li className="flex gap-3">
                <span className="text-rosso">01</span>A 200 metri dal centro di Bocenago: ristoranti e
                minimarket a piedi.
              </li>
              <li className="flex gap-3">
                <span className="text-rosso">02</span>A 9 minuti d&apos;auto da Pinzolo e dall&apos;impianto di
                Prà Rodont.
              </li>
              <li className="flex gap-3">
                <span className="text-rosso">03</span>Sentiero per la Cascata del Masanel a due passi da casa.
              </li>
            </ul>
            <Link
              href="/la-casa"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-alpine underline underline-offset-4"
            >
              Leggi la storia della casa e di Bocenago
              <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Amenities */}
      <section className="border-y border-alpine/10 bg-cream-dark/50 py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Cosa troverai"
            title="Tutto il necessario per sentirsi a casa in montagna"
            description="65 m² su due piani: soggiorno in legno, cucina attrezzata, due camere e un balcone privato affacciato sulle montagne."
          />
          <div className="mt-10">
            <AmenityGrid />
          </div>
        </Container>
      </section>

      {/* Estate / Inverno teaser — asimmetrico, non due card identiche */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Il territorio"
            title="Pinzolo e Madonna di Campiglio, in ogni stagione"
            description="Dalle Dolomiti di Brenta ai laghi di Campiglio, dal bike park alle piste di Skirama: la Val Rendena si vive dodici mesi l'anno."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            <Link
              href="/pinzolo-campiglio-estate"
              className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-2xl p-8 text-cream lg:col-span-3"
            >
              <Image
                src="/images/lago-rifugio-tramonto.jpg"
                alt=""
                fill
                className="object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-alpine-dark/90 via-alpine-dark/20 to-transparent" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-wider text-cream/70">Estate</p>
                <h3 className="mt-2 font-display text-3xl">Trekking, bike e Dolomiti di Brenta</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-cream underline underline-offset-4 group-hover:no-underline">
                  Scopri le attività estive
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>

            <Link
              href="/pinzolo-campiglio-inverno"
              className="group relative flex min-h-[22rem] flex-col justify-between overflow-hidden rounded-2xl bg-[#1c2b3d] p-8 text-cream lg:col-span-2"
            >
              <Image
                src="/images/brenta-vette-inverno.jpg"
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1520]/90 via-[#0a1520]/35 to-transparent" />
              <p className="relative text-xs font-semibold uppercase tracking-wider text-cream/60">Inverno</p>
              <div className="relative">
                <h3 className="font-display text-2xl leading-tight">
                  Sci a Skirama
                  <br />
                  Dolomiti Adamello Brenta
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  380 km di piste su un unico skipass.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cream underline underline-offset-4 group-hover:no-underline">
                  Scopri le attività invernali
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA finale — banda a piena larghezza, nessun box arrotondato */}
      <section className="border-t border-alpine/10 bg-alpine py-16 text-cream sm:py-20">
        <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">Bocenago, Trentino</p>
            <h2 className="mt-3 max-w-md font-display text-3xl leading-tight sm:text-4xl">
              Pronti per la Val Rendena?
            </h2>
          </div>
          <Link
            href="/prenota"
            className="group inline-flex items-center gap-2 text-base font-medium text-cream underline decoration-cream/40 underline-offset-4 hover:decoration-cream"
          >
            Verifica le date disponibili
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </section>
    </>
  )
}
