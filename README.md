# Viaggi 360°

Diario di viaggio: itinerari giorno per giorno, schede pratiche e consigli, organizzati per continente.

Costruito con Next.js 16 (App Router), Tailwind CSS v4, `motion` per le animazioni e `react-markdown` per il rendering dei contenuti.

## Sviluppo

```bash
npm install
npm run dev
```

## Struttura

- `src/content/viaggi/*.md` — un file per viaggio, formato libero ma con una struttura fissa (vedi sotto). Aggiungere un viaggio = aggiungere un file qui, numerato `NN-nome-luogo.md`.
- `src/lib/viaggi.ts` — parsing dei file markdown in oggetti `Viaggio` (metadati, sezioni, giorni, tag).
- `src/lib/site-config.ts` — nome, tagline e descrizione del sito.
- `src/app/` — home (`/`), catalogo (`/viaggi`), pagina di dettaglio (`/viaggi/[slug]`).
- `src/components/` — componenti condivisi (`Header`, `Footer`, `TripCard`, `Prose`, ecc.).

### Formato di un file viaggio

```
# Titolo del viaggio

**Stato bozza:** 🟢 pronta per il sito / 🟡 in lavorazione
**Periodo del viaggio:** ...
**Durata:** ...
**Compagni di viaggio:** ...
**Categoria:** Continente · Paese · tag · tag

---

## Apertura personale
## Scheda pratica
## Itinerario giorno per giorno
### Giorno 1 — ...
## Cosa vedere / cosa fare
## Dove abbiamo dormito
## Dove abbiamo mangiato
## Consigli pratici / errori da non ripetere
## Chiusura personale
## Foto/media
## Tag
```

Se "Apertura personale" o "Chiusura personale" contengono un appunto tra parentesi tipo `*(spunto pronto: ...)*` o `*(da scrivere insieme)*`, il sito lo riconosce come nota interna e non lo pubblica: mostra invece un badge "In aggiornamento" e usa il primo giorno d'itinerario come estratto per le card.

## Da completare

- **Foto**: nessuna delle destinazioni ha ancora foto reali — al momento il sito usa fasce di colore per continente al posto delle immagini. Ogni file `.md` ha una sezione "Foto/media" con la lista di scatti mancanti.
- **Aneddoti personali**: Marocco, New York, Florida, Transilvania e Costa Rica sono "in lavorazione" — mancano apertura/chiusura in prima persona (solo la Bulgaria è completa).
- **Dominio**: `siteConfig.url` è provvisorio (`viaggi360.it`).

## Deploy

Pensato per Vercel (o qualsiasi host compatibile con Next.js).
