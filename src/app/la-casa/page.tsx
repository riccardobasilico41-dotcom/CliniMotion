import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/Button'
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
      <PageHero
        eyebrow="La casa"
        title="Una mansarda in legno dentro un paese che racconta la Val Rendena"
        description="A Bocenago, tra le baite rurali della Val Rendena, la mansarda di Mara occupa gli ultimi due piani di un edificio di famiglia: tetto e pareti in legno, travi a vista, la vista sulle Dolomiti di Brenta dal balcone."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/soggiorno-mansarda.jpg"
                alt="Soggiorno con soffitto e travi in legno della mansarda a Bocenago"
                width={960}
                height={680}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="La mansarda"
              title="Due piani, tetto spiovente, legno ovunque"
              description="La proprietà si estende su due piani: al livello principale il soggiorno con angolo pranzo e la cucina ben attrezzata, ai piani le due camere da letto e il bagno. Il soffitto spiovente in legno e le travi a vista sono l'architettura tipica delle mansarde della Val Rendena, pensate in origine per il fieno e oggi trasformate in spazi abitativi luminosi."
            />
            <p className="mt-6 text-sm leading-relaxed text-stone">
              Dal balcone privato, con angolo barbecue, la vista spazia sulle Dolomiti di Brenta e sulle
              montagne dell&apos;Adamello: un buon punto da cui iniziare la giornata con un caffè, in
              qualsiasi stagione.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-cream-dark/60 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Il paese"
              title="Bocenago, il volto più autentico della Val Rendena"
              description="Bocenago è, tra i paesi della Val Rendena, quello che ha conservato meglio l'architettura rurale del passato: nel nucleo antico, gli edifici hanno una base massiccia in muratura — che un tempo ospitava il focolare e la stalla — sormontata da piani superiori interamente in legno."
            />
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <article className="rounded-3xl border border-forest/10 bg-white/70 p-8">
                <h3 className="font-display text-xl text-forest">La peste del 1630</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  Una lapide a Bocenago ricorda la peste manzoniana del 1630, che qui fu particolarmente
                  violenta: spopolò le frazioni vicine di Canisaga e Varcè, al punto che Bocenago ne
                  ereditò i vasti territori boschivi circostanti. Il borgo abbandonato di Canisaga si
                  incontra ancora oggi lungo il sentiero che porta alla Cascata del Masanel.
                </p>
              </article>
            </Reveal>
            <Reveal delay={0.12}>
              <article className="rounded-3xl border border-forest/10 bg-white/70 p-8">
                <h3 className="font-display text-xl text-forest">Un dipinto di scuola veneta</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  La chiesa di Bocenago custodisce uno dei primi dipinti su tela realizzati in Trentino:
                  un Compianto su Cristo deposto di scuola veneta, attribuito da alcuni storici
                  dell&apos;arte alla cerchia di Carpaccio — una piccola sorpresa per un paese di poche
                  centinaia di abitanti.
                </p>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <article className="mt-10 rounded-3xl bg-forest p-8 text-cream sm:p-10">
              <h3 className="font-display text-xl">La Cascata del Masanel, a due passi da casa</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/80">
                Un anello escursionistico facile parte proprio da Bocenago: prima su una strada
                lastricata, poi in un bosco quasi fiabesco, fino alla piccola Cascata del Masanel, con
                area picnic. Il ritorno passa per Canisaga, il borgo abbandonato nel Seicento a causa
                della peste. Percorso adatto anche a famiglie con bambini, in meno di un&apos;ora di
                cammino fino alla cascata.
              </p>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="flex flex-col items-start gap-6 rounded-3xl border border-forest/10 bg-white/70 px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl text-forest">Vieni a vederla di persona</h2>
            <p className="mt-2 text-sm text-stone">
              Host: {siteConfig.host.name} — abita nello stesso edificio, sempre disponibile durante il
              soggiorno.
            </p>
          </div>
          <Button href="/prenota">Controlla la disponibilità</Button>
        </Container>
      </section>
    </>
  )
}
