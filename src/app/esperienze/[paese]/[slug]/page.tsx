import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/Reveal'
import { PersonalVerdict } from '@/components/ui/PersonalVerdict'
import { PracticalInfo } from '@/components/ui/PracticalInfo'
import { RelatedContent } from '@/components/RelatedContent'
import {
  getAllEsperienze,
  getEsperienza,
  getPaese,
  getDestinazioniByEsperienzaSlug,
  getViaggiByEsperienza,
} from '@/lib/geo'

export async function generateStaticParams() {
  return getAllEsperienze().map((e) => ({ paese: e.paeseSlug, slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}): Promise<Metadata> {
  const { paese: paeseSlug, slug } = await params
  const esperienza = getEsperienza(paeseSlug, slug)
  if (!esperienza) return {}
  return {
    title: esperienza.nome,
    description: esperienza.cosE,
    alternates: { canonical: `/esperienze/${paeseSlug}/${slug}` },
  }
}

export default async function EsperienzaPage({
  params,
}: {
  params: Promise<{ paese: string; slug: string }>
}) {
  const { paese: paeseSlug, slug } = await params
  const paese = getPaese(paeseSlug)
  const esperienza = getEsperienza(paeseSlug, slug)
  if (!paese || !esperienza) notFound()

  const destinazioni = getDestinazioniByEsperienzaSlug(esperienza)
  const viaggi = getViaggiByEsperienza(esperienza)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: esperienza.nome,
    description: esperienza.cosE,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="border-b border-alpine/10 bg-alpine-dark py-16 text-cream sm:py-20">
        <Container>
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-cream/60">
              <Link href="/" className="hover:text-cream">
                Home
              </Link>
              <span>/</span>
              <Link href={`/destinazioni/${paeseSlug}`} className="hover:text-cream">
                {paese.nome}
              </Link>
              <span>/</span>
              <span className="text-cream/85">{esperienza.nome}</span>
            </nav>
            <Link
              href={`/destinazioni/${paeseSlug}`}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cream/60 hover:text-cream"
            >
              <ArrowLeft size={13} />
              Torna al Messico
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">{esperienza.localita}</p>
              <PersonalVerdict giudizio={esperienza.giudizio} />
            </div>
            <h1 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
              {esperienza.nome}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70">{esperienza.cosE}</p>
          </Reveal>
        </Container>
      </section>

      {esperienza.immagine && (
        <Container className="relative -mt-10 sm:-mt-14">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-alpine/10 shadow-lg sm:aspect-[21/9]">
              <Image
                src={esperienza.immagine}
                alt={esperienza.imageAlt}
                fill
                sizes="(min-width: 1024px) 1152px, 100vw"
                priority
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      )}

      <section className="py-16 sm:py-20">
        <Container className="grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl text-alpine">Perché farla</h2>
              <p className="mt-3 text-base leading-relaxed text-stone">{esperienza.percheFarla}</p>
            </div>

            {esperienza.miaEsperienza ? (
              <div>
                <h2 className="font-display text-2xl text-alpine">La mia esperienza</h2>
                <p className="mt-3 font-display text-xl italic leading-relaxed text-alpine">
                  {esperienza.miaEsperienza}
                </p>
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-alpine/20 p-5 text-sm text-stone/70">
                Ricordo personale da aggiungere.
              </div>
            )}

            {esperienza.alternative.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-alpine">Alternative</h2>
                <ul className="mt-3 space-y-1.5 text-base leading-relaxed text-stone">
                  {esperienza.alternative.map((a) => (
                    <li key={a}>· {a}</li>
                  ))}
                </ul>
              </div>
            )}

            <RelatedContent
              titolo="Destinazione collegata"
              items={destinazioni.map((d) => ({
                href: `/destinazioni/${paeseSlug}/${d.slug}`,
                eyebrow: 'Destinazione',
                titolo: d.nome,
                sottotitolo: d.giorniConsigliati,
              }))}
            />

            <RelatedContent
              titolo="Itinerari che la includono"
              items={viaggi.map((v) => ({
                href: `/viaggi/${v.slug}`,
                eyebrow: 'Itinerario completo',
                titolo: v.titolo,
                sottotitolo: v.durataBreve,
              }))}
            />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div>
              <h2 className="font-display text-lg text-alpine">Informazioni pratiche</h2>
              <PracticalInfo
                className="mt-4"
                items={[
                  { label: 'Dove si trova', value: esperienza.localita },
                  { label: 'Durata', value: esperienza.durata },
                  { label: 'Periodo', value: esperienza.periodo },
                  { label: 'Costo', value: esperienza.costo ?? 'da completare' },
                  { label: 'Come prenotare', value: esperienza.comePrenotare ?? 'da completare' },
                  { label: 'Cosa portare', value: esperienza.cosaPortare ?? 'da completare' },
                  { label: 'Per chi è adatta', value: esperienza.perChiEAdatta ?? 'da completare' },
                ]}
              />
            </div>
            <p className="flex items-center gap-1.5 text-xs text-stone/60">
              <ArrowUpRight size={12} />
              Prezzi, orari e disponibilità vanno sempre verificati prima della partenza.
            </p>
          </aside>
        </Container>
      </section>
    </>
  )
}
