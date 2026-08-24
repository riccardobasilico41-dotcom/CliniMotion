import Link from 'next/link'
import { Compass, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-20">
      <Container className="text-center">
        <Compass size={48} strokeWidth={1} className="mx-auto text-alpine/30" />
        <h1 className="mt-6 font-display text-3xl font-medium text-alpine sm:text-4xl">
          Questa pagina non esiste (ancora)
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-stone">
          Il link potrebbe essere sbagliato, o la pagina è ancora in lavorazione. Nel frattempo, ecco dove trovare i contenuti del sito.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/viaggi"
            className="inline-flex items-center gap-2 rounded-full bg-alpine px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-alpine-dark"
          >
            Tutti i viaggi
            <ArrowRight size={15} />
          </Link>
          <Link
            href="/destinazioni/messico"
            className="inline-flex items-center gap-2 rounded-full border border-alpine/30 px-6 py-3 text-sm font-medium text-alpine transition-colors hover:bg-alpine/5"
          >
            Destinazioni Messico
          </Link>
        </div>
      </Container>
    </section>
  )
}
