# CliniMotion v2

MVP — Test rotazione cervicale con MediaPipe Pose, Supabase, Netlify.

## 1. Setup locale

```bash
npm install
cp .env.example .env   # poi riempi con i valori del tuo progetto Supabase
npm run dev
```

## 2. Creare il progetto Supabase (da fare tu, dal tuo account)

1. Vai su supabase.com → New Project
2. Aspetta il provisioning, poi vai in **SQL Editor** e incolla il contenuto di `supabase/schema.sql`, esegui
3. Vai in **Settings > API**: copia `Project URL` e la chiave **anon/public** (NON la publishable key — è l'errore che avevamo fatto la volta scorsa)
4. Incollali nel tuo `.env` locale
5. Vai in **Authentication > URL Configuration**: imposta il Site URL sul dominio Netlify (lo aggiorni dopo il deploy, per ora puoi lasciare localhost)
6. Vai in **Authentication > Users** → **Add user → Create new user**: crea il tuo utente terapista (email + password, spunta "Auto Confirm User"). Questo è l'account con cui farai login nell'app — senza questo passaggio, la creazione delle sessioni fallisce (RLS richiede un terapista autenticato).

## 3. Creare il repo GitHub (da fare tu)

```bash
cd clinimotion-v2
git init
git add .
git commit -m "Setup iniziale CliniMotion v2"
```

Poi su GitHub: New repository → `clinimotion-v2` (privato) → segui le istruzioni per collegare il remote:

```bash
git remote add origin https://github.com/TUO-USERNAME/clinimotion-v2.git
git branch -M main
git push -u origin main
```

**Importante**: committa spesso da qui in avanti, per evitare di perdere di nuovo il lavoro.

## 4. Collegare Netlify (da fare tu)

1. Netlify → Add new site → Import an existing project → collega il repo GitHub `clinimotion-v2`
2. Build command: `npm run build`
3. Publish directory: `dist`
4. In **Site settings > Environment variables**, aggiungi `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` con gli stessi valori del tuo `.env`
5. Deploy — poi torna su Supabase e aggiorna il Site URL con il dominio Netlify assegnato

## 5. Deploy Edge Function per interpretazione AI (da fare tu)

Serve la Supabase CLI (`npm install -g supabase` oppure `brew install supabase/tap/supabase`).

```bash
supabase login
supabase link --project-ref TUO-PROJECT-REF   # lo trovi nell'URL del dashboard
supabase secrets set ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxx
supabase functions deploy interpret-test
```

Senza questo step, il test funziona comunque e i risultati numerici vengono salvati — semplicemente non comparirà l'interpretazione AI (l'app lo gestisce senza bloccarsi, mostra solo un avviso).

## 6. Protocollo di acquisizione (importante)

Il test cervicale completo prevede **due fasi con setup camera diversi**:

1. **Vista frontale** (paziente rivolto verso la camera): rotazione dx/sx + flessione laterale dx/sx
2. **Vista laterale** (paziente girato di profilo, 90°): flessione ed estensione (metodo Craniovertebral Angle)

Questo perché flessione/estensione sono movimenti sul piano sagittale, non misurabili in modo affidabile da una singola camera frontale. L'app guida il terapista attraverso entrambe le fasi in sequenza nella stessa sessione.

## 7. Stato attuale

- ✅ Test cervicale completo: rotazione, flessione laterale (vista frontale) + flessione/estensione (vista laterale, CVA)
- ✅ Indicatore di qualità/confidenza per ogni misurazione
- ✅ Skeleton overlay in tempo reale
- ✅ Gestione paziente + sessione
- ✅ Salvataggio risultati su Supabase (`district_tests`)
- ✅ Interpretazione AI via Edge Function (Claude, con disclaimer clinico e note su qualità dato)
- ⬜ Altri distretti (fase 2 — spalla, anca, ginocchio, ecc.)
- ⬜ Storico paziente / grafici trend / PDF report (fase 2)
- ⬜ Calibrazione per-distretto contro goniometro reale (i coefficienti attuali sono valori iniziali empirici da tarare — vedi `DEG_PER_RATIO_UNIT` in `angles.ts`)

**Nota limite MVP**: il paziente viene identificato per nome esatto (match testuale semplice). Va sostituito con una selezione/ricerca più robusta (o collegamento diretto ai pazienti già presenti in CliniqOS) prima dell'uso reale in studio.

## Note tecniche importanti (lezioni dalla versione precedente)

- `strict: false` in tsconfig e niente `tsc` nel build command — altrimenti build Netlify falliva
- MediaPipe caricato via `<script>` CDN in `index.html` (UMD), non via import ESM — libreria non si presta bene al bundling Vite
- Soglia visibilità landmark: 0.15 (non più alta, altrimenti troppi falsi negativi)
- Fix mirror webcam: ratio negativo = rotazione destra, positivo = sinistra (vedi `romFromRatioSeries`)
- Usare sempre `isRecordingRef` (non state React) dentro la callback `onResults` di MediaPipe, altrimenti closure stale
