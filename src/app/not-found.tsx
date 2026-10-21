import { ArrowRight } from 'lucide-react'
import { HeaderAction, PageHeader } from '@/components/ui/PageHeader'

export default function NotFound() {
  return (
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
  )
}
