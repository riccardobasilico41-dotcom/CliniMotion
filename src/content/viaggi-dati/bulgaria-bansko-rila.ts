import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per il viaggio "Bulgaria on the snow". Il testo
// narrativo resta nel markdown (src/content/viaggi/11-bulgaria-bansko-rila.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nota: il markdown ha un blocco unico "### Giorno 2-4 — Sci sulle piste di Bansko"
// per tre giornate identiche: qui viene mappato come un solo GiornoMeta.

export const bulgariaBanskoRilaMeta: TripMeta = {
  tripSlug: 'bulgaria-bansko-rila',
  paeseSlug: 'bulgaria',
  ritmo: 'Rilassato — tre giorni pieni sulle piste, un giorno di visita al monastero lungo il tragitto di rientro',
  trasporti: 'Auto a noleggio da Sofia, guidata fino a Bansko (alternative: shuttle privato/condiviso, bus pubblico, treno+minibus)',
  stile: ['sci', 'montagna', 'balcani'],
  adattoA: ['chi cerca un weekend sulla neve economico e diverso dalle Alpi', 'chi vuole unire sci e cultura in pochi giorni', 'chi è alla prima esperienza sciistica e non cerca un comprensorio impegnativo'],
  puntiForti: [
    'Prezzi tra i più bassi d\'Europa per una vacanza sulla neve',
    'La discesa illuminata di 7,5 km per lo sci notturno',
    'Il Monastero di Rila, il vero colpo di scena del viaggio',
  ],
  criticita: [
    'Il comprensorio di Bansko è onesto ma senza pretese, niente a che vedere con le grandi stazioni alpine',
    'La strada di montagna verso Bansko richiede gomme invernali in caso di neve fresca',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: 'Non mi aspettavo grandi cose dallo sci in Bulgaria, ed è esattamente quello che ho trovato: piste carine, ben tenute, niente di esagerato rispetto alle Alpi. Ma è proprio questo il bello — andarci non è tanto per lo sci in sé, quanto per l\'esperienza esotica di sciare in un angolo d\'Europa che raramente finisce nei programmi delle vacanze bianche.',
    conChiSonoPartito: 'auto a noleggio da Sofia, guidata fino a Bansko',
    cosaCercavo: 'un weekend diverso, economico, con un finale a sorpresa',
    treEsperienzePiuBelle: 'La discesa notturna illuminata di 7,5 km, le giornate sulle piste di Bansko, gli affreschi del Monastero di Rila',
    cosaCambierei: undefined,
    aChiLoConsiglio: 'Un viaggio che non punta tutto sullo sci — le piste sono piacevoli ma oneste, senza il fascino delle grandi stazioni alpine — e che invece funziona benissimo come parentesi esotica ed economica fuori dal solito giro.',
  },
  tappeMappa: [
    { nome: 'Bansko', destinazioneSlug: 'bansko' },
    { nome: 'Monastero di Rila', destinazioneSlug: 'monastero-rila' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Sofia e trasferimento a Bansko',
      tratta: 'Sofia → Bansko (160 km, 2-2h30 di guida)',
      pernottamento: 'hotel a pochi minuti dalla stazione della gondola (nome non annotato)',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'bansko',
    },
    {
      titoloGiorno: 'Giorno 2-4 — Sci sulle piste di Bansko',
      tratta: 'Tre giorni pieni sulle piste di Bansko Ski Zone',
      pernottamento: 'hotel a pochi minuti dalla stazione della gondola (nome non annotato)',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Skipass giornaliero 35-40€',
      destinazioneSlug: 'bansko',
    },
    {
      titoloGiorno: 'Giorno 5 — Escursione al Monastero di Rila',
      tratta: 'Bansko → Monastero di Rila → verso Sofia',
      pernottamento: 'nessun pernottamento (tappa lungo il rientro)',
      statoPernottamento: 'provato',
      intensita: 'medio',
      costiNoti: 'Museo di Storia Ecclesiastica 8 BGN (4€)',
      destinazioneSlug: 'monastero-rila',
    },
    {
      titoloGiorno: 'Giorno 6 — Rientro',
      tratta: 'Verso Sofia → rientro',
      pernottamento: 'nessun pernottamento (giorno di partenza)',
      statoPernottamento: 'provato',
      intensita: 'leggero',
      destinazioneSlug: 'monastero-rila',
    },
  ],
  budget: [
    { etichetta: 'Voli', valore: undefined },
    { etichetta: 'Auto a noleggio', valore: undefined },
    { etichetta: 'Skipass (3 giorni)', valore: '105-120€' },
    { etichetta: 'Vitto (mehane)', valore: '15-20€ a testa a cena' },
    { etichetta: 'Totale', valore: undefined },
  ],
}
