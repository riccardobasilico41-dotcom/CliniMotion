import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, ParkingCircle, Car, Train, Zap } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { MapEmbed } from '@/components/MapEmbed'
import { siteConfig } from '@/lib/site-config'

const officialLinks = {
  bus: 'https://www.trentinotrasporti.it',
  charging: 'https://www.campigliodolomiti.it/it/ricarica-auto-elettriche',
}

export const metadata: Metadata = {
  title: 'Dove siamo: come arrivare a Bocenago e colonnine elettriche',
  description:
    "Come raggiungere Bocenago in Val Rendena in auto, treno e autobus da Trento, Brescia e Verona, e dove trovare le colonnine di ricarica per auto elettriche a Pinzolo e Madonna di Campiglio.",
  alternates: { canonical: '/dove-siamo' },
}

const drivingRoutes = [
  {
    from: 'Da Trento',
    text: 'A22 del Brennero, uscita Trento Centro (circa 62 km dal casello alla zona). Si prosegue sulla SS45bis fino a Sarche, poi SS237 fino a Tione e SS239 fino a Pinzolo e Bocenago.',
  },
  {
    from: 'Da Verona',
    text: 'A22 del Brennero, uscita Rovereto Sud, poi SS240 / SS240dir / SS45bis (Gardesana Occidentale) fino a Sarche e SS239 verso Pinzolo. In alternativa uscita Trento Sud, tangenziale SS12 e SS45bis.',
  },
  {
    from: 'Da Brescia',
    text: 'A4 Milano–Venezia, uscita Brescia Est (circa 110 km dal casello alla zona). Si segue la SS237 del Caffaro verso il Lago di Idro fino a Tione, poi SS239 fino a Pinzolo.',
  },
]

const chargingStations = [
  {
    zone: 'Val Rendena — rete gratuita',
    points: 'Javrè · Funivie Pinzolo · APT Pinzolo (P.za San Giacomo) · Piazzale Brenta (Campiglio) · Palù (Campo Carlo Magno)',
  },
  { zone: 'Pinzolo, Via Fucine 39', points: '3 posti Plenitude — CCS 75 kW e Tipo 2 22 kW, ricarica rapida' },
  { zone: 'Madonna di Campiglio, Piazzale Brenta', points: '2 posti Enel X, 2 posti Neogy' },
  { zone: 'Campo Carlo Magno', points: '2 posti Audi' },
]

export default function DoveSiamoPage() {
  return (
    <>
      <section className="pb-4 pt-16 sm:pt-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Dove siamo</p>
          <h1 className="mt-3 max-w-xl font-display text-3xl font-medium text-balance text-alpine sm:text-4xl">
            Bocenago, nel cuore della Val Rendena
          </h1>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <MapEmbed />
          <div>
            <p className="text-base leading-relaxed text-stone">
              Il centro del paese, con ristoranti e minimarket, è a 200 metri (3 minuti a piedi). Pinzolo
              è a circa 9 minuti d&apos;auto, Madonna di Campiglio a circa 20.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-alpine/10 pt-5">
              <ParkingCircle size={19} className="text-rosso-dark" />
              <p className="text-sm text-stone">
                {siteConfig.property.type} con parcheggio gratuito sul posto.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* In auto — elenco, non card */}
      <section className="border-y border-alpine/10 bg-cream-dark/50 py-20 sm:py-28">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">In auto</p>
          <h2 className="mt-3 font-display text-2xl text-alpine sm:text-3xl">
            Come arrivare da Trento, Verona e Brescia
          </h2>

          <div className="mt-10 divide-y divide-alpine/10 border-t border-alpine/10">
            {drivingRoutes.map((r) => (
              <div key={r.from} className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                <div className="flex items-center gap-2 text-alpine">
                  <Car size={16} />
                  <span className="font-display text-base">{r.from}</span>
                </div>
                <p className="text-sm leading-relaxed text-stone">{r.text}</p>
              </div>
            ))}
            <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
              <div className="flex items-center gap-2 text-alpine">
                <Train size={16} />
                <span className="font-display text-base">Treno e bus</span>
              </div>
              <p className="text-sm leading-relaxed text-stone">
                La stazione ferroviaria più comoda è Trento. Da lì, gli autobus di{' '}
                <a
                  href={officialLinks.bus}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-alpine underline underline-offset-4"
                >
                  Trentino Trasporti
                </a>{' '}
                collegano la tratta Tione–Pinzolo–Madonna di Campiglio, con fermate anche in Val Rendena.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Colonnine elettriche */}
      <section className="py-20 sm:py-28">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Auto elettriche</p>
          <h2 className="mt-3 max-w-xl font-display text-2xl text-balance text-alpine sm:text-3xl">
            Colonnine di ricarica a Pinzolo e Madonna di Campiglio
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone">
            La Val Rendena mette a disposizione una rete di colonnine gratuite, oltre a punti di ricarica
            rapida a pagamento nei due centri principali.{' '}
            <a
              href={officialLinks.charging}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-rosso underline underline-offset-4"
            >
              Elenco aggiornato
              <ExternalLink size={11} />
            </a>
          </p>

          <div className="mt-10 divide-y divide-alpine/10 border-t border-alpine/10">
            {chargingStations.map((s) => (
              <div key={s.zone} className="grid gap-1.5 py-5 sm:grid-cols-[16rem_1fr] sm:items-baseline sm:gap-8">
                <div className="flex items-center gap-2 text-alpine">
                  <Zap size={15} className="text-rosso-dark" />
                  <span className="text-sm font-medium">{s.zone}</span>
                </div>
                <p className="text-sm text-stone">{s.points}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-alpine/10 py-16 sm:py-20">
        <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="font-display text-2xl text-alpine">Pronti a raggiungere Bocenago?</h2>
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
