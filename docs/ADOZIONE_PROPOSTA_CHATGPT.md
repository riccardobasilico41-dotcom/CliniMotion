# Adozione proposta ChatGPT — cosa integriamo ora, cosa rimandiamo

*Documento di riferimento — luglio 2026*

## Perché non adottiamo il pacchetto integralmente

Il pacchetto proposto descrive un prodotto SaaS clinico multi-tenant enterprise
(organizzazioni, RBAC, Evidence Registry con workflow di approvazione,
microservizio Python separato, coda Redis/Celery, monorepo Next.js+FastAPI).

È un disegno valido come **visione a lungo termine**, ma:
- richiede uno stack tecnico diverso da quello attuale (Vite/React/Supabase/Netlify)
- il Milestone 0 da solo (solo infrastruttura, zero metriche cliniche) è settimane di lavoro
- siamo ancora in fase di validazione dell'MVP funzionante

Adottarlo ora significherebbe ripartire da zero invece di consolidare quanto fatto.

## Principi adottati subito (nessun cambio di stack)

| Principio | Come lo applichiamo ora |
|---|---|
| Wording clinico non diagnostico | Già nel system prompt dell'interpretazione AI |
| Quality-first execution | Già presente: confidence score per ogni misurazione |
| Versionamento formula | Aggiungere campo `formula_version` a `district_tests` |
| Stato experimental/clinical | Campo `status` su ogni metrica (default `experimental`) |
| Evidence Registry "light" | Tabella semplice fonti citate, senza workflow di approvazione multi-step |
| Separazione misura/interpretazione | Già presente: dato numerico + interpretazione AI separati |

## Rimandato a quando CliniMotion diventa prodotto multi-clinica

- Multi-tenancy / organizzazioni
- RBAC granulare oltre il semplice login terapista
- Audit log completo su ogni azione
- Microservizio di elaborazione video separato (Python/Celery/Redis)
- Workflow di approvazione scientifica delle interpretazioni
- Consensi versionati formali, export dati strutturato
- Predizioni cliniche (esplicitamente disabilitate anche nel pacchetto originale)

## Nota

Questo documento va rivisto quando si arriva alla Fase 3 della roadmap
(vedi `CliniMotion_Architettura.md`) — a quel punto molti dei principi
"rimandati" diventano rilevanti e si può riconsiderare parte dello stack.
