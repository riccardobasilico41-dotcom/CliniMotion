import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Cosa fare in inverno a Pinzolo e Madonna di Campiglio',
  description:
    "Sci a Skirama Dolomiti Adamello Brenta, l'impianto di Prà Rodont per le famiglie, ciaspole e piste da fondo: le attività invernali a Pinzolo e Madonna di Campiglio, a 9 minuti dalla mansarda di Bocenago.",
  alternates: { canonical: '/pinzolo-campiglio-inverno' },
}

export default function InvernoPage() {
  return (
    <>
      {/* Marquee — nessuna foto, un'unica affermazione tipografica */}
      <section className="relative flex min-h-[64vh] flex-col justify-between overflow-hidden bg-[#1c2b3d] py-14 text-cream sm:min-h-[72vh]">
        <Container>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cream/60">
            Pinzolo · Madonna di Campiglio
          </p>
        </Container>

        <Container>
          <p className="font-display text-[6.5rem] font-semibold leading-[0.85] tracking-tight sm:text-[10rem]">
            380
          </p>
          <p className="mt-2 max-w-sm text-lg text-cream/80">
            km di piste su Skirama Dolomiti Adamello Brenta, un unico skipass
          </p>
        </Container>

        <Container className="flex items-end justify-between">
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">
            La mansarda a Bocenago è &ldquo;raggiungibile con gli sci&rdquo;: con neve, si scia fin quasi
            a casa.
          </p>
          <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-cream/50 sm:block">
            Val Rendena, Trentino
          </p>
        </Container>
      </section>

      {/* Due numeri, in linea, non in card */}
      <section className="border-b border-forest/10 py-10">
        <Container className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div>
            <p className="font-display text-3xl text-forest">150</p>
            <p className="mt-1 text-sm text-stone">impianti di risalita in 8 località collegate</p>
          </div>
          <div>
            <p className="font-display text-3xl text-forest">90%+</p>
            <p className="mt-1 text-sm text-stone">innevamento garantito su oltre 340 km</p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">Madonna di Campiglio</p>
            <h2 className="mt-3 font-display text-2xl text-forest sm:text-3xl">60 km di piste, 22 impianti</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              La località più nota del comprensorio, con piste che scendono verso il paese e
              collegamenti verso il Gruppo di Brenta e la Val di Sole. Adatta sia a sciatori esperti sia
              a chi cerca piste più tranquille.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">Pinzolo</p>
            <h2 className="mt-3 font-display text-2xl text-forest sm:text-3xl">30 km di piste, 10 impianti</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              Più raccolta e familiare, con l&apos;impianto di Prà Rodont indicato spesso come punto
              ideale per sciare in famiglia con bambini, e la cabinovia rinnovata verso il Doss del
              Sabion.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-forest/10 bg-cream-dark/50 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-wood">Non solo sci</p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-medium text-balance text-forest">
              Ciaspole, fondo e passeggiate sulla neve
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
              La Val Rendena e l&apos;altopiano di Campo Carlo Magno, storica sede di piste da fondo,
              offrono anche itinerari per racchette da neve e sci nordico, per chi cerca un ritmo più
              lento tra i boschi innevati.
            </p>
          </div>
          <div className="flex items-start gap-4 border-l-2 border-wood/40 pl-6">
            <Users size={20} className="mt-0.5 shrink-0 text-wood-dark" />
            <p className="text-sm leading-relaxed text-stone">
              La mansarda dispone di letto per bambini, seggiolone e balcone protetto: comoda base per
              famiglie con bambini piccoli che vogliono alternare sci e giornate più tranquille in paese.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-forest/10 py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl text-forest">Prenota il tuo inverno in Val Rendena</h2>
            <p className="mt-1.5 text-xs text-stone/70">
              Numero di licenza {siteConfig.legal.licenseNumber} · CIN {siteConfig.legal.cin}
            </p>
          </div>
          <Link
            href="/prenota"
            className="group inline-flex items-center gap-2 text-sm font-medium text-forest underline underline-offset-4"
          >
            Vai alla prenotazione
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </section>
    </>
  )
}
