import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/PageHero'
import { Reveal, RevealGroup, RevealItem } from '@/components/Reveal'
import { MapEmbed } from '@/components/MapEmbed'
import { Button } from '@/components/ui/Button'
import { Car, Train, Zap, ParkingCircle } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

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
    points: [
      'Info-point di Javrè, Porte di Rendena',
      'Cabinovia di Funivie Pinzolo',
      'Ufficio APT di Pinzolo, Piazza San Giacomo',
      'Piazzale Brenta, Madonna di Campiglio',
      'Zona Palù, Campo Carlo Magno',
    ],
    note: 'Cinque colonnine gratuite distribuite in valle.',
  },
  {
    zone: 'Pinzolo, Via Fucine 39',
    points: ['3 posti Plenitude — CCS 75 kW e Tipo 2 22 kW'],
    note: 'Ricarica rapida.',
  },
  {
    zone: 'Madonna di Campiglio, Piazzale Brenta',
    points: ['2 posti Enel X', '2 posti Neogy'],
    note: '',
  },
  {
    zone: 'Campo Carlo Magno',
    points: ['2 posti Audi'],
    note: '',
  },
]

export default function DoveSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="Dove siamo"
        title="Bocenago, nel cuore della Val Rendena"
        description="La mansarda si trova a Bocenago (provincia di Trento), tra Pinzolo e Madonna di Campiglio, ai piedi delle Dolomiti di Brenta. Parcheggio gratuito sul posto."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <MapEmbed />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="Indirizzo"
              title="Bocenago, Val Rendena, Trentino"
              description="Il centro del paese, con ristoranti e minimarket, è a 200 metri (3 minuti a piedi). Pinzolo è a circa 9 minuti d'auto, Madonna di Campiglio a circa 20."
            />
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-forest/10 bg-white/70 px-5 py-4">
              <ParkingCircle size={20} className="text-forest" />
              <p className="text-sm text-stone">{siteConfig.property.type} con parcheggio gratuito sul posto.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream-dark/60 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="In auto"
              title="Come arrivare da Trento, Verona e Brescia"
            />
          </Reveal>
          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-3">
            {drivingRoutes.map((r) => (
              <RevealItem key={r.from}>
                <div className="h-full rounded-3xl border border-forest/10 bg-white/70 p-7">
                  <Car size={20} className="text-forest" />
                  <h3 className="mt-3 font-display text-lg text-forest">{r.from}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{r.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1}>
            <div className="mt-10 flex items-start gap-4 rounded-3xl border border-forest/10 bg-white/70 p-7">
              <Train size={22} className="mt-0.5 shrink-0 text-forest" />
              <div>
                <h3 className="font-display text-lg text-forest">In treno e autobus</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  La stazione ferroviaria più comoda è Trento. Da lì, gli autobus di Trentino Trasporti
                  collegano la tratta Tione–Pinzolo–Madonna di Campiglio, con fermate anche in Val
                  Rendena.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Auto elettriche"
              title="Colonnine di ricarica a Pinzolo e Madonna di Campiglio"
              description="La Val Rendena mette a disposizione una rete di colonnine gratuite, oltre a punti di ricarica rapida a pagamento nei due centri principali."
            />
          </Reveal>

          <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
            {chargingStations.map((s) => (
              <RevealItem key={s.zone}>
                <div className="h-full rounded-3xl border border-forest/10 bg-white/70 p-7">
                  <Zap size={20} className="text-wood-dark" />
                  <h3 className="mt-3 font-display text-lg text-forest">{s.zone}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-stone">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {s.note && <p className="mt-3 text-xs text-stone/70">{s.note}</p>}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="pb-24">
        <Container className="flex flex-col items-start gap-6 rounded-3xl bg-forest px-8 py-10 text-cream sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl">Pronti a raggiungere Bocenago?</h2>
            <p className="mt-2 text-sm text-cream/75">Controlla le date disponibili per il tuo soggiorno.</p>
          </div>
          <Button href="/prenota" variant="light">
            Vai alla prenotazione
          </Button>
        </Container>
      </section>
    </>
  )
}
