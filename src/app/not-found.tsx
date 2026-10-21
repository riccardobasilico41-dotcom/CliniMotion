import { ArrowRight } from 'lucide-react'
import { HeaderAction, PageHeader } from '@/components/ui/PageHeader'
import { Container } from '@/components/ui/Container'
import { BenSpot } from '@/components/ben/BenSpot'

export default function NotFound() {
  return (
    <>
    <PageHeader
      eyebrow="Errore 404"
      title="Questa pagina non esiste (ancora)"
      lead={
        <p>
          Il link potrebbe essere sbagliato, o la pagina è ancora in lavorazione. Nel frattempo, ecco dove trovare i
          contenuti del sito.
        </p>
      }
      actions={
        <>
          <HeaderAction href="/viaggi">
            Tutti i viaggi
            <ArrowRight size={16} aria-hidden="true" />
          </HeaderAction>
          <HeaderAction href="/destinazioni" secondary>
            Sfoglia per Paese
          </HeaderAction>
        </>
      }
    />
      <section className="py-12 sm:py-16">
        <Container className="flex items-center gap-6">
          <BenSpot pose="lost" trigger="mount" label="Ben, anche lui un po' perso: tocca per un saluto" className="w-28 shrink-0 sm:w-36" />
          <p className="max-w-[34ch] text-stone">Anche Ben si è perso. Succede ai migliori viaggiatori.</p>
        </Container>
      </section>
    </>
  )
}
