import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AmenityGrid } from '@/components/AmenityGrid'
import { Star, ShieldCheck, Phone, Mail, AtSign } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Prenota la mansarda a Bocenago',
  description:
    'Verifica le date disponibili e prenota la Mansarda tra le Dolomiti di Brenta a Bocenago, in Val Rendena. Prenotazione gestita tramite Holidu.',
  alternates: { canonical: '/prenota' },
}

const hasContacts = siteConfig.flags.showPhone || siteConfig.flags.showEmail || siteConfig.flags.showInstagram

export default function PrenotaPage() {
  return (
    <>
      <section className="pb-4 pt-16 sm:pt-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rosso">Prenota</p>
          <h1 className="mt-3 max-w-lg font-display text-3xl font-medium text-balance text-alpine sm:text-4xl">
            Verifica le date disponibili
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-stone">
            Disponibilità e prezzi esatti si vedono selezionando le date sul calendario. La prenotazione
            è gestita direttamente tramite Holidu, in sicurezza.
          </p>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-alpine/10 bg-white/70 p-8">
            <span className="inline-flex items-center gap-1.5 text-sm text-alpine">
              <Star size={15} className="fill-rosso text-rosso" />
              {siteConfig.rating.value}/{siteConfig.rating.scale} · {siteConfig.rating.label} ·{' '}
              {siteConfig.rating.reviewCount} recensioni
            </span>

            <h2 className="mt-5 font-display text-2xl text-alpine">{siteConfig.legalListingName}</h2>
            <p className="mt-2 text-sm text-stone">
              Bocenago, Val Rendena · {siteConfig.property.guests} persone ·{' '}
              {siteConfig.property.bedrooms} camere · {siteConfig.property.bathrooms} bagno ·{' '}
              {siteConfig.property.sizeSqm} m²
            </p>

            <Button href={siteConfig.booking.holiduUrl} external className="mt-6 w-full">
              Vai al calendario e prenota su Holidu
            </Button>

            <div className="mt-6 flex items-start gap-3 border-t border-alpine/10 pt-5">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-alpine" />
              <p className="text-xs leading-relaxed text-stone">
                Numero di licenza {siteConfig.legal.licenseNumber} · Codice Identificativo Nazionale (CIN){' '}
                {siteConfig.legal.cin}.
              </p>
            </div>

            {hasContacts && (
              <div className="mt-6 space-y-2 border-t border-alpine/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-rosso">Contatta Mara</p>
                {siteConfig.flags.showPhone && siteConfig.contact.phone && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-center gap-2 text-sm text-stone hover:text-alpine"
                  >
                    <Phone size={15} /> {siteConfig.contact.phone}
                  </a>
                )}
                {siteConfig.flags.showEmail && siteConfig.contact.email && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-center gap-2 text-sm text-stone hover:text-alpine"
                  >
                    <Mail size={15} /> {siteConfig.contact.email}
                  </a>
                )}
                {siteConfig.flags.showInstagram && siteConfig.contact.instagram && (
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-stone hover:text-alpine"
                  >
                    <AtSign size={15} /> Instagram
                  </a>
                )}
              </div>
            )}
          </div>

          <div>
            <h2 className="font-display text-2xl text-alpine">Cosa include il soggiorno</h2>
            <p className="mt-2 text-sm text-stone">
              Lenzuola e asciugamani inclusi nel prezzo. Animali domestici ammessi con supplemento (i
              gatti non sono ammessi). Non è consentito fumare all&apos;interno.
            </p>
            <div className="mt-6">
              <AmenityGrid />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
