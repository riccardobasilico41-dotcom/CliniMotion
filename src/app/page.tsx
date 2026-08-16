import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Users, BedDouble, Bath, Ruler } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AmenityGrid } from '@/components/AmenityGrid'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `${siteConfig.legalListingName} a Bocenago`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

const stats = [
  { icon: Users, label: `${siteConfig.property.guests} persone` },
  { icon: BedDouble, label: `${siteConfig.property.bedrooms} camere da letto` },
  { icon: Bath, label: `${siteConfig.property.bathrooms} bagno` },
  { icon: Ruler, label: `${siteConfig.property.sizeSqm} m²` },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-forest-dark">
        <div className="absolute inset-0">
          <Image
            src="/images/soggiorno-mansarda.jpg"
            alt="Soggiorno in legno della mansarda tra le Dolomiti di Brenta, a Bocenago"
            fill
            priority
            className="animate-slow-zoom object-cover opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/40 to-forest-dark/10" />
        </div>

        <Container className="relative pb-16 pt-40 sm:pb-24">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/70">
              Bocenago · Val Rendena · Trentino
            </p>
            <h1 className="mt-5 max-w-2xl font-display text-4xl font-medium text-balance text-cream sm:text-6xl">
              Una mansarda in legno, con le Dolomiti di Brenta sul balcone
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg">
              {siteConfig.description}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/prenota" variant="light">
                Prenota il soggiorno
              </Button>
              <Button href="/la-casa" variant="secondary" className="!border-cream/40 !text-cream hover:!bg-cream/10">
                Scopri la casa
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/85">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/10 px-3 py-1.5">
                <Star size={15} className="fill-wood text-wood" />
                {siteConfig.rating.value}/{siteConfig.rating.scale} · {siteConfig.rating.label} ·{' '}
                {siteConfig.rating.reviewCount} recensioni
              </span>
              {stats.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-1.5">
                  <s.icon size={16} strokeWidth={1.75} />
                  {s.label}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Intro / benvenuto di Mara */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Il benvenuto di Mara"
              title="Una casa vera, in un paese vero della Val Rendena"
              description={siteConfig.host.bio}
            />
            <p className="mt-6 text-sm text-stone">
              — {siteConfig.host.name}, {siteConfig.host.role.toLowerCase()}
              {siteConfig.host.isStarHost && (
                <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-wood/10 px-2.5 py-0.5 text-xs font-medium text-wood-dark">
                  Star Host
                </span>
              )}
            </p>
            <div className="mt-8">
              <Link href="/la-casa" className="text-sm font-medium text-forest underline underline-offset-4">
                Leggi la storia della casa e di Bocenago →
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-forest/10 bg-white/70 p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-wood">Perché sceglierla</p>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-stone">
                <li>A 200 metri dal centro di Bocenago: ristoranti e minimarket a piedi.</li>
                <li>A 9 minuti d&apos;auto da Pinzolo e dall&apos;impianto di Prà Rodont.</li>
                <li>Vicina agli impianti di risalita: raggiungibile con gli sci in inverno.</li>
                <li>Sentiero per la Cascata del Masanel a due passi da casa.</li>
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Amenities */}
      <section className="bg-cream-dark/60 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Cosa troverai"
              title="Tutto il necessario per sentirsi a casa in montagna"
              description="65 m² su due piani, con soggiorno in legno, cucina attrezzata, due camere e un balcone privato affacciato sulle montagne."
            />
          </Reveal>
          <div className="mt-10">
            <AmenityGrid />
          </div>
        </Container>
      </section>

      {/* Estate / Inverno teaser */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Il territorio"
              title="Pinzolo e Madonna di Campiglio, in ogni stagione"
              description="Dalle Dolomiti di Brenta ai laghi di Campiglio, dal bike park alle piste di Skirama: la Val Rendena si vive dodici mesi l'anno."
            />
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            <RevealItem>
              <Link
                href="/pinzolo-campiglio-estate"
                className="group block h-full rounded-3xl bg-forest p-8 text-cream transition-transform hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-cream/60">Estate</p>
                <h3 className="mt-3 font-display text-2xl">Trekking, bike e Dolomiti di Brenta</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  Sentieri, via ferrata, il nuovo bike park e le funivie che salgono verso i rifugi.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-cream underline underline-offset-4 group-hover:no-underline">
                  Scopri le attività estive →
                </span>
              </Link>
            </RevealItem>
            <RevealItem>
              <Link
                href="/pinzolo-campiglio-inverno"
                className="group block h-full rounded-3xl bg-[#233448] p-8 text-cream transition-transform hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-cream/60">Inverno</p>
                <h3 className="mt-3 font-display text-2xl">Sci a Skirama Dolomiti Adamello Brenta</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/75">
                  380 km di piste su un unico skipass, con Pinzolo e Madonna di Campiglio collegate.
                </p>
                <span className="mt-6 inline-block text-sm font-medium text-cream underline underline-offset-4 group-hover:no-underline">
                  Scopri le attività invernali →
                </span>
              </Link>
            </RevealItem>
          </RevealGroup>
        </Container>
      </section>

      {/* CTA finale */}
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-3xl bg-forest px-8 py-12 text-cream sm:flex-row sm:items-center sm:justify-between sm:px-12">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl">Pronti per la Val Rendena?</h2>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-cream/75">
                  <MapPin size={15} /> Bocenago, Trentino — a 9 minuti da Pinzolo
                </p>
              </div>
              <Button href="/prenota" variant="light">
                Verifica le date disponibili
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
