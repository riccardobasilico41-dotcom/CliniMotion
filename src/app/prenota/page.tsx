import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Button } from '@/components/ui/Button'
import { AmenityGrid } from '@/components/AmenityGrid'
import { Star, ShieldCheck } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Prenota la mansarda a Bocenago',
  description:
    'Verifica le date disponibili e prenota la Mansarda tra le Dolomiti di Brenta a Bocenago, in Val Rendena. Prenotazione gestita tramite Holidu.',
  alternates: { canonical: '/prenota' },
}

export default function PrenotaPage() {
  return (
    <>
      <PageHero
        eyebrow="Prenota"
        title="Verifica le date disponibili"
        description="La disponibilità e i prezzi esatti si vedono selezionando le date sul calendario. La prenotazione è gestita direttamente tramite Holidu, in sicurezza."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-3xl border border-forest/10 bg-white/70 p-8">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3 py-1.5 text-sm text-forest">
                <Star size={15} className="fill-wood text-wood" />
                {siteConfig.rating.value}/{siteConfig.rating.scale} · {siteConfig.rating.label} ·{' '}
                {siteConfig.rating.reviewCount} recensioni
              </span>

              <h2 className="mt-5 font-display text-2xl text-forest">{siteConfig.legalListingName}</h2>
              <p className="mt-2 text-sm text-stone">
                Bocenago, Val Rendena · {siteConfig.property.guests} persone ·{' '}
                {siteConfig.property.bedrooms} camere · {siteConfig.property.bathrooms} bagno ·{' '}
                {siteConfig.property.sizeSqm} m²
              </p>

              <Button href={siteConfig.booking.holiduUrl} external className="mt-6 w-full">
                Vai al calendario e prenota su Holidu
              </Button>

              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-forest/5 p-4">
                <ShieldCheck size={20} className="mt-0.5 shrink-0 text-forest" />
                <p className="text-xs leading-relaxed text-stone">
                  Numero di licenza {siteConfig.legal.licenseNumber} · Codice Identificativo Nazionale (CIN){' '}
                  {siteConfig.legal.cin}.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl text-forest">Cosa include il soggiorno</h2>
            <p className="mt-2 text-sm text-stone">
              Lenzuola e asciugamani inclusi nel prezzo. Animali domestici ammessi con supplemento (i
              gatti non sono ammessi). Non è consentito fumare all&apos;interno.
            </p>
            <div className="mt-6">
              <AmenityGrid />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
