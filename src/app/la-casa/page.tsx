import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'La casa e la storia di Bocenago',
  description:
    "La mansarda tra le Dolomiti di Brenta e la storia di Bocenago: l'architettura rurale della Val Rendena, la peste del 1630 e la Cascata del Masanel.",
  alternates: { canonical: '/la-casa' },
}

export default function LaCasaPage() {
  return (
    <>
      {/* Masthead — testata a due colonne, nessun blocco colorato */}
      <section className="pt-16 sm:pt-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch lg:gap-6">
          <div className="flex flex-col justify-center py-10 lg:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">La casa</p>
            <h1 className="mt-4 max-w-md font-display text-4xl font-medium leading-[1.05] text-alpine sm:text-5xl">
              Una mansarda in legno, dentro un paese vero
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-stone">
              A Bocenago, tra le baite rurali della Val Rendena, la mansarda occupa gli ultimi due piani
              di un edificio di famiglia: tetto e pareti in legno, travi a vista, la vista sulle Dolomiti
              di Brenta dal balcone.
            </p>
          </div>
          <div className="relative min-h-[22rem] overflow-hidden rounded-2xl lg:min-h-0">
            <Image
              src="/images/soggiorno-mansarda.jpg"
              alt="Soggiorno con soffitto e travi in legno della mansarda a Bocenago"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </Container>
      </section>

      {/* La mansarda */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <p className="font-display text-2xl italic leading-tight text-alpine sm:text-3xl">
            Due piani, tetto spiovente, legno ovunque.
          </p>
          <div>
            <p className="text-base leading-relaxed text-stone">
              La proprietà si estende su due piani: al livello principale il soggiorno con angolo pranzo
              e la cucina ben attrezzata, ai piani le due camere da letto e il bagno. Il soffitto
              spiovente in legno e le travi a vista sono l&apos;architettura tipica delle mansarde della
              Val Rendena, pensate in origine per il fieno e oggi trasformate in spazi abitativi
              luminosi.
            </p>
            <p className="mt-5 text-base leading-relaxed text-stone">
              Dal balcone privato, con angolo barbecue, la vista spazia sulle Dolomiti di Brenta e sulle
              montagne dell&apos;Adamello: un buon punto da cui iniziare la giornata con un caffè, in
              qualsiasi stagione.
            </p>
          </div>
        </Container>
      </section>

      {/* Il paese — indice numerato, non card affiancate */}
      <section className="border-y border-alpine/10 bg-cream-dark/50 py-20 sm:py-28">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Il paese</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-medium text-balance text-alpine sm:text-4xl">
            Bocenago, il volto più autentico della Val Rendena
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="relative order-first h-64 overflow-hidden rounded-2xl lg:order-none lg:h-full lg:min-h-[16rem]">
              <Image
                src="/images/borgo-montagna.jpg"
                alt="Un borgo di montagna in Trentino, con chiesa e case tradizionali"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
            <p className="text-base leading-relaxed text-stone">
              Bocenago è, tra i paesi della Val Rendena, quello che ha conservato meglio
              l&apos;architettura rurale del passato: nel nucleo antico, gli edifici hanno una base
              massiccia in muratura — che un tempo ospitava il focolare e la stalla — sormontata da
              piani superiori interamente in legno.
            </p>
          </div>

          <div className="mt-14 divide-y divide-alpine/10 border-t border-alpine/10">
            <article className="grid gap-3 py-8 sm:grid-cols-[5rem_1fr] sm:gap-8">
              <span className="font-display text-4xl text-rosso/50">01</span>
              <div>
                <h3 className="font-display text-xl text-alpine">La peste del 1630</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">
                  Una lapide a Bocenago ricorda la peste manzoniana del 1630, che qui fu particolarmente
                  violenta: spopolò le frazioni vicine di Canisaga e Varcè, al punto che Bocenago ne
                  ereditò i vasti territori boschivi circostanti. Il borgo abbandonato di Canisaga si
                  incontra ancora oggi lungo il sentiero che porta alla Cascata del Masanel.
                </p>
              </div>
            </article>
            <article className="grid gap-3 py-8 sm:grid-cols-[5rem_1fr] sm:gap-8">
              <span className="font-display text-4xl text-rosso/50">02</span>
              <div>
                <h3 className="font-display text-xl text-alpine">Un dipinto di scuola veneta</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">
                  La chiesa di Bocenago custodisce uno dei primi dipinti su tela realizzati in Trentino:
                  un Compianto su Cristo deposto di scuola veneta, attribuito da alcuni storici
                  dell&apos;arte alla cerchia di Carpaccio — una piccola sorpresa per un paese di poche
                  centinaia di abitanti.
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>

      {/* Cascata del Masanel — banda fotografica a piena larghezza */}
      <section className="relative overflow-hidden bg-alpine-dark py-20 text-cream sm:py-28">
        <div className="absolute inset-0">
          <Image
            src="/images/brenta-notte-stellata.jpg"
            alt="Cielo stellato sulle vette innevate delle Dolomiti di Brenta"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-alpine-dark/70" />
        </div>
        <Container className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">A due passi da casa</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
            La Cascata del Masanel
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80">
            Un anello escursionistico facile parte proprio da Bocenago: prima su una strada lastricata,
            poi in un bosco quasi fiabesco, fino alla piccola Cascata del Masanel, con area picnic. Il
            ritorno passa per Canisaga, il borgo abbandonato nel Seicento a causa della peste. Percorso
            adatto anche a famiglie con bambini, in meno di un&apos;ora di cammino fino alla cascata.
          </p>
        </Container>
      </section>

      {/* Chiusura in stile lettera */}
      <section className="py-20 sm:py-28">
        <Container className="max-w-2xl">
          <p className="font-display text-xl italic leading-relaxed text-alpine sm:text-2xl">
            &ldquo;Vieni a vederla di persona: abito nello stesso edificio, sempre disponibile durante il
            soggiorno.&rdquo;
          </p>
          <p className="mt-4 text-sm text-stone">— {siteConfig.host.name}</p>
          <Link
            href="/prenota"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-alpine underline underline-offset-4"
          >
            Controlla la disponibilità
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </section>
    </>
  )
}
