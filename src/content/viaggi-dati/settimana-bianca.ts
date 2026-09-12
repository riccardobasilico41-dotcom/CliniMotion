import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Settimana bianca in Italia".
// Il testo narrativo resta nel markdown (src/content/viaggi/24-settimana-bianca.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const settimanaBiancaMeta: TripMeta = {
  tripSlug: 'settimana-bianca',
  paeseSlug: 'italia',
  ritmo: 'Sostenuto ma calibrato: sei giorni sugli sci con una giornata di recupero a metà e una fuori dagli impianti',
  trasporti: 'Auto con catene o gomme invernali obbligatorie per legge, skibus di valle, e gli sci come mezzo di trasporto dentro il comprensorio',
  stile: ['sci', 'montagna', 'inverno'],
  adattoA: [
    'sciatori di livello intermedio che possono scegliere le date',
    'chi mette il pranzo in rifugio tra i motivi per cui scia',
    'chi vuole provare una giornata fuori dagli impianti con ciaspole o scialpinismo',
  ],
  puntiForti: [
    'Il giro del Sellaronda, un massiccio intero girato sugli sci in una giornata',
    'La prima seggiovia del mattino sulla pista appena battuta',
    'Il pranzo seduti in un rifugio in quota, che è il vantaggio italiano sulla neve',
  ],
  criticita: [
    'Le date valgono fino al quaranta per cento del prezzo: Natale e Capodanno sono le settimane più care dell\'anno, gennaio dopo l\'Epifania la migliore',
    'Sotto i 1.800 metri di quota la neve naturale non è più una garanzia: il comprensorio va scelto per altitudine, non per fama',
    'Catene o gomme invernali sono un obbligo di legge sanzionabile',
    'In Italia il soccorso in pista e in montagna si paga, e la RC sciistica è obbligatoria per legge: va verificato cosa copre lo skipass',
    'Il Sellaronda va iniziato entro le nove, o si rischia di restare dalla parte sbagliata del massiccio',
    'Fuoripista senza ARTVA, pala, sonda e la capacità di usarli non è uno sport, è un rischio',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con skipass e alloggio prenotati in pacchetto',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Il Sellaronda partendo alle nove, la prima pista battuta del mattino, la salita con le pelli in silenzio',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Comprensorio dolomitico', destinazioneSlug: 'sciare-in-italia' },
    { nome: 'Sellaronda', destinazioneSlug: 'sciare-in-italia' },
    { nome: 'Fuori dagli impianti', destinazioneSlug: 'sciare-in-italia' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo e ritiro dell\'attrezzatura',
      tratta: 'Arrivo, ritiro skipass e noleggio',
      pernottamento: 'Struttura sulle piste',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'sciare-in-italia',
    },
    {
      titoloGiorno: 'Giorno 2 — Rodaggio e ricognizione',
      pernottamento: 'Struttura sulle piste',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'skipass giornaliero Dolomiti Superski attorno agli 86€ in alta stagione',
      destinazioneSlug: 'sciare-in-italia',
    },
    {
      titoloGiorno: 'Giorno 3 — Il giro del Sellaronda',
      tratta: 'Giro completo del Sellaronda, 26 km di discese e altrettanti di risalite',
      pernottamento: 'Struttura sulle piste',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'sciare-in-italia',
    },
    {
      titoloGiorno: 'Giorno 4 — Giornata tecnica o riposo attivo',
      pernottamento: 'Struttura sulle piste',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'sciare-in-italia',
    },
    {
      titoloGiorno: 'Giorno 5 — Scialpinismo, o la montagna senza impianti',
      tratta: 'Salita con le pelli, fuori dagli impianti',
      pernottamento: 'Struttura sulle piste',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'noleggio attrezzatura scialpinistica 30-50€ al giorno; guida alpina a parte',
      destinazioneSlug: 'sciare-in-italia',
    },
    {
      titoloGiorno: 'Giorno 6 — La giornata lunga',
      pernottamento: 'Struttura sulle piste',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      destinazioneSlug: 'sciare-in-italia',
    },
    {
      titoloGiorno: 'Giorno 7 — Ultima mattina e rientro',
      tratta: 'Mezza giornata sugli sci e rientro',
      intensita: 'leggero',
      destinazioneSlug: 'sciare-in-italia',
    },
  ],
  budget: [
    { etichetta: 'Skipass Dolomiti Superski', valore: 'giornaliero attorno agli 86€ in alta stagione, circa 77€ in bassa; stagionale attorno ai 970€' },
    { etichetta: 'Noleggio attrezzatura', valore: '25-45€ al giorno per un set completo, meno sui pacchetti settimanali' },
    { etichetta: 'Pacchetto skipass + alloggio', valore: 'fa risparmiare in modo reale rispetto a prenotare separatamente' },
    { etichetta: 'Pranzi in quota', valore: 'più alti che a valle, ma non ai livelli di Francia e Svizzera' },
    { etichetta: 'Assicurazione', valore: 'da verificare cosa copre lo skipass: in Italia il soccorso si paga e la RC sciistica è obbligatoria' },
    { etichetta: 'Scialpinismo', valore: 'noleggio 30-50€ al giorno, guida alpina a parte' },
  ],
}
