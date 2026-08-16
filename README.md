# Mansarda tra le Dolomiti di Brenta

Sito vetrina per l'Appartamento "Mansarda tra le Dolomiti di Brenta", a Bocenago (Val Rendena, Trentino). Host: Mara Morganti.

Costruito con Next.js 16 (App Router), Tailwind CSS v4 e la libreria `motion` per le animazioni.

## Sviluppo

```bash
npm install
npm run dev
```

## Struttura

- `src/lib/site-config.ts` — tutti i dati reali della struttura (indirizzo, servizi, licenze, link di prenotazione). Modificare qui per aggiornare i contenuti in tutto il sito.
- `src/app/` — le pagine: home, `/la-casa`, `/pinzolo-campiglio-estate`, `/pinzolo-campiglio-inverno`, `/dove-siamo`, `/prenota`.
- `src/components/` — componenti condivisi (header, footer, hero, reveal animati).

## Da completare prima del lancio definitivo

- **Foto**: al momento è disponibile una sola foto reale (`public/images/soggiorno-mansarda.jpg`), ricavata da uno screenshot dell'annuncio Holidu. Andrebbero aggiunte le altre foto reali della mansarda (camere, bagno, balcone, esterno, vista) per completare la galleria.
- **Dominio**: `siteConfig.url` in `src/lib/site-config.ts` è impostato su un dominio provvisorio (`mansardadolomitidibrenta.it`) — da sostituire con il dominio reale una volta acquistato e collegato.
- **Coordinate GPS**: `siteConfig.address.lat/lng` sono indicative del centro di Bocenago, non il pin esatto della casa — da affinare se necessario.
- **Prenotazione**: il pulsante "Prenota" rimanda al link Holidu fornito (`siteConfig.booking.holiduUrl`). Se cambia, aggiornare quel campo.

## Deploy

Pensato per Vercel (o qualsiasi host compatibile con Next.js).
