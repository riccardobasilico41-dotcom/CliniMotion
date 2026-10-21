# Ben · mascotte di Viaggi 360°

Stato al 21 ottobre 2026.

## Cosa c'è
- `src/components/ben/BenSvg.tsx`: Ben dai 13 livelli di `Ben_Rig_Starter` (artboard 600×600). Ricostruzione vettoriale semplificata, **non** il 3D approvato.
- `Ben.module.css`: pose per stato (`data-state`): idle, run, brake, crash, recover, embarrassed, lean, wave, point, curious, lost. Battito di ciglia casuale, sguardo che segue il puntatore (desktop).
- `useBen.ts`: controller con la stessa API della state machine obiettivo `Ben_Controller`.
- `benConfig.ts`: tutti i tempi (dal pacchetto `Ben_Rive_Claude_Integration`).
- `BenHero.tsx`: Home, angolo in basso a sinistra della foto. Prima visita della sessione: run > brake > crash > recover > embarrassed > lean > idle (GSAP per lo spostamento). Poi fermo. Tocco: saluta.
- `BenSpot.tsx`: apparizioni secondarie (max 2 per pagina). Pagina Paese: `point` accanto a «Destinazioni» al 65% di visibilità + 300 ms. 404: `lost`.
- Reduced motion: posa ferma, nessuna animazione.

## Cosa manca (non inventato)
- **Nessun file .riv.** La Rive CLI non gira su questo Mac (Intel x86_64; su macOS supporta solo Apple Silicon). Il rig va fatto nel Rive Editor o con la CLI su Apple Silicon/Linux.
- Quando il .riv esiste: aggiungere `@rive-app/react-canvas`, un adapter che mappa gli stati di `useBen` sugli input di `Ben_Controller`, caricamento on demand; `BenSvg` resta come fallback.
- Livelli da ridisegnare con la qualità del Ben originale (vedi README dello starter).
- Stati del pacchetto non ancora posizionati: `curious` su Esperienze, microreazioni sulle card, ricerca vuota.
