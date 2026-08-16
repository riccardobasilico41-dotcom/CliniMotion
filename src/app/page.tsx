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
      {/* Hero — il testo passa dietro le vette: foto, poi testo, poi il ritaglio delle montagne sopra */}
      <section className="relative flex h-[78vh] min-h-[560px] items-start overflow-hidden bg-alpine-dark pt-[24%] sm:h-[86vh] sm:pt-[20%]">
        {/* livello 1: foto intera (cielo + montagne) */}
        <div className="absolute inset-0">
          <Image
            src="/images/dolomiti-brenta-hero.jpg"
            alt="Le Dolomiti di Brenta viste dalla Val Rendena, vicino a Bocenago"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-alpine-dark/10" />
        </div>

        {/* corner caption */}
        <div className="absolute right-6 top-6 z-20 text-right sm:right-10 sm:top-10">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cream/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.4)]">
            Bocenago
            <br />
            Trentino
          </p>
        </div>

        {/* livello 2: il testo, tra il cielo e le montagne */}
        <Container className="relative z-10">
          <Reveal>
            <h1
              className="max-w-xl font-display text-[3.4rem] font-black leading-[0.85] tracking-tight text-white sm:text-[6rem] lg:text-[7.5rem]"
              style={{ textShadow: '0 6px 30px rgba(6,14,22,0.5), 0 2px 10px rgba(6,14,22,0.55), 0 1px 2px rgba(6,14,22,0.4)' }}
            >
              Casa
              <br />
              di Mara
            </h1>
          </Reveal>
        </Container>

        {/* livello 3: ritaglio delle montagne, sopra al testo — stessa foto, stessa posizione */}
        <div className="pointer-events-none absolute inset-0 z-[15]">
          <Image
            src="/images/dolomiti-brenta-hero-cutout.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* livello 4: sottotitolo e CTA, in basso sopra il bosco */}
        <div className="absolute inset-x-0 bottom-0 z-20 pb-10 sm:pb-14">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-0"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(10,21,32,0.55) 100%)',
            }}
          />
          <Container className="relative">
            <p className="text-center text-base font-normal text-cream/85 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] sm:text-lg">
              {siteConfig.shortName}, a Bocenago
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              <Link
                href="/prenota"
                className="group inline-flex items-center gap-2 text-sm font-medium text-cream underline decoration-cream/40 decoration-1 underline-offset-4 transition-colors hover:decoration-cream"
              >
                Prenota il soggiorno
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="inline-flex items-center gap-1.5 text-xs text-cream/80">
                <Star size={13} className="fill-rosso text-rosso" />
                {siteConfig.rating.value}/{siteConfig.rating.scale} · {siteConfig.rating.reviewCount} recensioni
              </span>
            </div>
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
