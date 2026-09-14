import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { MeravigliaCard } from '@/components/MeravigliaCard'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { CinematicHero } from '@/components/signature/CinematicHero'
import { Manifesto } from '@/components/signature/Manifesto'
import { GeographyIndex } from '@/components/signature/GeographyIndex'
import { FeaturedJourney } from '@/components/signature/FeaturedJourney'
import { VisualArchive } from '@/components/signature/VisualArchive'
import { getAllViaggi, type Viaggio } from '@/lib/viaggi'
import { getAllMeraviglie } from '@/lib/meraviglie'
import { getAllPaesi, getAllDestinazioni, getAllEsperienze, getDestinazioniByPaese, getTripMeta } from '@/lib/geo'
import { raggruppaPerContinente } from '@/lib/utils'
import { siteConfig } from '@/lib/site-config'
import { copertineViaggi } from '@/content/viaggi-copertine'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
  alternates: { canonical: '/' },
}

// Rotta decorativa dell'apertura cinematica: solo nomi, nessuna coordinata —
// è sfondo (aria-hidden), non un percorso reale da leggere, quindi resta
// dichiaratamente schematico. Cinque Paesi reali dell'archivio, un continente
// diverso ciascuno, scelti per varietà visiva.
const ROTTA_DECORATIVA = [
  { nome: 'Norvegia' },
  { nome: 'Marocco' },
  { nome: 'Giordania' },
  { nome: 'Giappone' },
  { nome: 'Messico' },
]

// Selezione editoriale per l'archivio visivo della Home: 8 viaggi scelti a
// mano (non i 47 al completo, che restano su /viaggi) per varietà geografica
// e narrativa. Bansko resta il "viaggio in evidenza" (vedi `primo` sotto) e
// non è duplicato qui. Aggiornare questa lista è una decisione editoriale,
// non un criterio automatico (durata, data, ecc.).
const VIAGGI_HOME_SLUGS = [
  'lofoten-estate-2025', // Lofoten
  'islanda-2024', // Islanda in tenda / Ring Road
  'giappone-360', // Giappone
  'cina-paesaggi', // "L'altra Cina" — Zhangjiajie, Sichuan, Yunnan, Yangshuo
  'giordania-360', // Giordania
  'costa-rica-360', // Costa Rica
  'marocco-360', // Marocco / Sahara
  'sicilia-itinerario', // Sicilia orientale
]

/* Signature Editorial · macrostructure: Field Archive
 * Sostituisce l'homepage fotografica singola (Hallmark, 08 Photographic) con
 * una sequenza a più registri: apertura tipografica su campo scuro, manifesto
 * asimmetrico, indice di geografia, viaggio in evidenza a scena fissa,
 * archivio orizzontale, meraviglie (invariate, fuori scope di questa
 * iterazione), chiusura silenziosa. Vedi la direzione creativa approvata
 * "VIAGGI 360 — SIGNATURE EDITORIAL" per il razionale sezione per sezione. */
export default function HomePage() {
  const viaggi = getAllViaggi()
  const pronto = viaggi.find((v) => !v.inLavorazione)
  const primo = pronto ?? viaggi[0]
  const selezioneHome = VIAGGI_HOME_SLUGS.map((slug) => viaggi.find((v) => v.slug === slug)).filter(
    (v): v is Viaggio => v !== undefined && v.slug !== primo?.slug
  )
  const meraviglie = getAllMeraviglie()
  const paesi = getAllPaesi()
  const destinazioni = getAllDestinazioni()
  const esperienze = getAllEsperienze()
  const gruppiPaesi = raggruppaPerContinente(paesi, (p) => p.continente)
  const primoMeta = primo ? getTripMeta(primo.slug) : undefined

  return (
    <>
      <CinematicHero
        tagline={siteConfig.tagline}
        subtext="Diario di viaggio con itinerari giorno per giorno, verificati e riverificati — non copiati da altre guide."
        routeTappe={ROTTA_DECORATIVA}
      />

      <Manifesto
        paragrafoPrincipale={siteConfig.description}
        paragrafoSecondario="Non è una guida copiata da altre guide: ogni itinerario è stato percorso davvero, e quello che trovi qui — prezzi pagati, errori fatti, tappe che non valevano la sosta — è scritto perché serva a chi quel viaggio lo deve ancora organizzare."
        statistiche={[
          { valore: viaggi.length, etichetta: 'itinerari raccontati' },
          { valore: paesi.length, etichetta: 'Paesi in archivio' },
          { valore: destinazioni.length, etichetta: 'destinazioni' },
          { valore: esperienze.length, etichetta: 'esperienze provate' },
        ]}
      />

      <GeographyIndex
        gruppi={gruppiPaesi}
        conteggioDestinazioni={(slug) => getDestinazioniByPaese(slug).length}
      />

      {primo && primoMeta && (
        <FeaturedJourney
          titolo={primo.titolo}
          href={`/viaggi/${primo.slug}`}
          tappe={primoMeta.tappeMappa}
          paeseSlug={primoMeta.paeseSlug}
          battute={[
            {
              eyebrow: 'Apertura',
              contenuto: (
                <p className="font-display text-2xl italic leading-relaxed text-alpine sm:text-3xl">
                  {primo.apertura ?? primo.descrizione}
                </p>
              ),
            },
            {
              eyebrow: 'Il ritmo',
              contenuto: <p className="text-lg leading-relaxed text-stone">{primoMeta.ritmo}</p>,
            },
            {
              eyebrow: 'Il punto forte',
              contenuto: (
                <p className="text-lg leading-relaxed text-stone">
                  {primoMeta.puntiForti[0] ?? primo.descrizione}
                </p>
              ),
            },
          ]}
        />
      )}

      <VisualArchive viaggi={selezioneHome} copertine={copertineViaggi} />

      <section className="border-t border-alpine/10 py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-5 text-center">
              <p className="max-w-md text-base leading-relaxed text-stone">
                Questi sono otto viaggi scelti a mano. L&apos;archivio completo ne racconta {viaggi.length}.
              </p>
              <Link
                href="/viaggi"
                className="inline-flex items-center gap-2 rounded-full bg-alpine px-7 py-3.5 text-sm font-medium text-cream transition-colors duration-150 hover:bg-alpine-dark"
              >
                Esplora tutti i {viaggi.length} viaggi
                <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-alpine/10 bg-cream-dark/40 py-24 sm:py-32">
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

      <section className="border-t border-alpine/10 py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="max-w-md font-display text-3xl font-medium leading-tight text-balance text-alpine sm:text-4xl">
              Il prossimo viaggio da dove comincia?
            </p>
            <Link
              href="/viaggi"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-rosso hover:underline"
            >
              Vedi tutti i viaggi
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
