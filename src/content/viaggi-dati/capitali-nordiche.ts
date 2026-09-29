import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Capitali nordiche: Copenaghen,
// Stoccolma e Oslo in 9 giorni". Il testo narrativo resta nel markdown
// (src/content/viaggi/60-capitali-nordiche.md). `titoloGiorno` deve
// combaciare esattamente con le intestazioni "### Giorno N — ..." del file
// markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
// Nessuna foto: campo `immagine`/`imageAlt` volutamente assente da ogni
// giorno, task separato.
//
// `paeseSlug` è una scelta editoriale, non un dato oggettivo: il tipo
// TripMeta supporta un solo Paese canonico per viaggio, qui impostato su
// 'danimarca' — la tappa di apertura dell'itinerario, ed è anche l'unico dei
// tre paesi il cui tripPrincipaleSlug punta a questo viaggio (Svezia e
// Norvegia restano ancorate ai loro viaggi natura già pubblicati). Stesso
// trattamento già usato in src/content/viaggi-dati/centro-america-itinerario.ts
// per 'guatemala': i link generati da RouteLine/DaySectionSignature
// combinano sempre questo paeseSlug con ogni destinazioneSlug
// (`/destinazioni/danimarca/<slug>`), quindi le tappe di Stoccolma e Oslo in
// tappeMappa/giorni puntano a un percorso che non esiste sotto
// /destinazioni/danimarca/: è un limite noto del tipo attuale, non un errore
// di battitura.

export const capitaliNordicheMeta: TripMeta = {
  tripSlug: 'capitali-nordiche',
  paeseSlug: 'danimarca',
  ritmo:
    'Un ritmo da "tre città in una", tre giorni pieni a testa con due giorni di cerniera dedicati anche al trasferimento (treno o volo) verso la capitale successiva: non frenetico, ma con poco spazio per improvvisare',
  trasporti:
    'A piedi, in bici e con i mezzi pubblici dentro ogni città; treno diretto SJ o volo interno per i due trasferimenti Copenaghen-Stoccolma e Stoccolma-Oslo',
  stile: ['città', 'design', 'cultura nordica', 'gastronomia'],
  adattoA: [
    'chi vuole confrontare da vicino tre capitali scandinave in un solo viaggio, invece di sceglierne solo una',
    'chi accetta un budget alto: sono tra le città più care d\'Europa, in tutte e tre le tappe',
    'chi si muove bene tra treni, voli interni e mezzi pubblici cittadini, senza bisogno di un\'auto',
    'chi preferisce anche solo una delle tre tappe: Copenaghen, Stoccolma e Oslo reggono ciascuna un weekend lungo a sé',
  ],
  puntiForti: [
    'Nyhavn a Copenaghen, il canale colorato del XVII secolo, di giorno e di sera',
    'Il Vasamuseet a Stoccolma, con una nave da guerra del 1628 recuperata quasi intatta dal fondo del porto',
    'L\'arcipelago di Stoccolma, trentamila isole a est della città',
    'Il Vigeland Park a Oslo, il più grande parco di sculture al mondo realizzato da un solo artista',
    'La crociera sull\'Oslofjord, per salutare il viaggio vedendo l\'ultima capitale dall\'acqua',
  ],
  criticita: [
    'Copenaghen, Stoccolma e Oslo sono tra le città più care d\'Europa: una birra al bar costa 7-14€ secondo la città, una cena di fascia media parte da 35-45€ a persona',
    'Tre valute diverse (DKK, SEK, NOK), nessuna delle quali è l\'euro, con la Norvegia fuori anche dall\'Unione Europea (solo area Schengen/SEE)',
    'Nessun collegamento diretto via mare tra Stoccolma e Oslo: la cerniera tra le due tappe è un treno (circa 5h45) o un volo (circa 1h)',
    'Il Viking Ship Museum di Oslo, a Bygdøy, è chiuso per ristrutturazione con riapertura non prevista prima del 2027',
    'Tivoli Gardens a Copenaghen è aperto solo a stagioni alterne, non tutto l\'anno: va verificato il calendario prima di programmare la serata',
    'A Christiania (Copenaghen) valgono regole specifiche della comunità, foto comprese: l\'ex Pusher Street è stata chiusa dalle autorità nel 2024 e la vendita di stupefacenti resta illegale in tutta la Danimarca',
    'Nessuna parte di questo itinerario nasce da un soggiorno reale: è una scheda di ricerca, non un diario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con treno e volo interno tra le tre capitali, tutto il resto a piedi, in bici o con i mezzi pubblici',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: undefined,
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Copenaghen', destinazioneSlug: 'copenaghen' },
    { nome: 'Stoccolma', destinazioneSlug: 'stoccolma' },
    { nome: 'Oslo', destinazioneSlug: 'oslo' },
  ],
  giorni: [
    {
      titoloGiorno: 'Giorno 1 — Arrivo a Copenaghen e Nyhavn',
      tratta: 'Arrivo a Copenaghen-Kastrup, centro città e Nyhavn',
      pernottamento: 'Copenaghen',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'copenaghen',
    },
    {
      titoloGiorno: 'Giorno 2 — Tivoli Gardens, la Sirenetta e il lungomare',
      pernottamento: 'Copenaghen',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Tivoli Gardens da circa 20€ solo giardini, fino a 66€ il biglietto combinato con le giostre; aperto solo a stagioni',
      destinazioneSlug: 'copenaghen',
    },
    {
      titoloGiorno: 'Giorno 3 — Christiania, Christianshavn e il treno per Stoccolma',
      tratta: 'Copenaghen → Stoccolma, treno diretto SJ (circa 5-5h30) o volo (circa 1h)',
      pernottamento: 'Stoccolma',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'stoccolma',
    },
    {
      titoloGiorno: 'Giorno 4 — Gamla Stan e il centro storico di Stoccolma',
      pernottamento: 'Stoccolma',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      destinazioneSlug: 'stoccolma',
    },
    {
      titoloGiorno: 'Giorno 5 — Vasamuseet, Stadshuset e ABBA The Museum',
      pernottamento: 'Stoccolma',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Vasamuseet 195-240 SEK secondo la stagione; ABBA The Museum 269-349 SEK',
      destinazioneSlug: 'stoccolma',
    },
    {
      titoloGiorno: 'Giorno 6 — L\'arcipelago di Stoccolma e il treno per Oslo',
      tratta: 'Mattina in arcipelago; Stoccolma → Oslo, treno diretto SJ (circa 5h45) o volo (circa 1h)',
      pernottamento: 'Oslo',
      statoPernottamento: 'da-confermare',
      intensita: 'intenso',
      costiNoti: 'gita in arcipelago da circa 375 SEK (35€ circa) per un\'uscita guidata di 2-2,5 ore',
      destinazioneSlug: 'oslo',
    },
    {
      titoloGiorno: 'Giorno 7 — Il centro di Oslo e l\'Opera House',
      pernottamento: 'Oslo',
      statoPernottamento: 'da-confermare',
      intensita: 'leggero',
      destinazioneSlug: 'oslo',
    },
    {
      titoloGiorno: 'Giorno 8 — Vigeland Park e i musei di Bygdøy',
      pernottamento: 'Oslo',
      statoPernottamento: 'da-confermare',
      intensita: 'medio',
      costiNoti: 'Vigeland Park gratuito; Fram Museum circa 180 NOK (16€ circa); Viking Ship Museum chiuso per ristrutturazione fino al 2027',
      destinazioneSlug: 'oslo',
    },
    {
      titoloGiorno: 'Giorno 9 — Crociera sull\'Oslofjord e partenza',
      tratta: 'Crociera sull\'Oslofjord, poi partenza da Oslo Gardermoen',
      intensita: 'leggero',
      costiNoti: 'crociera sull\'Oslofjord indicativamente 45-70€ a persona per 1,5-2 ore',
      destinazioneSlug: 'oslo',
    },
  ],
  budget: [
    { etichetta: 'Treno/volo Copenaghen-Stoccolma', valore: 'treno SJ diretto circa 5-5h30, da poche decine di euro; volo diretto circa 1h' },
    { etichetta: 'Treno/volo Stoccolma-Oslo', valore: 'treno SJ diretto circa 5h45; volo diretto circa 1h' },
    { etichetta: 'Tivoli Gardens (Copenaghen)', valore: 'da circa 20€ solo giardini a circa 66€ il biglietto combinato con le giostre' },
    { etichetta: 'Vasamuseet e ABBA Museum (Stoccolma)', valore: 'Vasamuseet 195-240 SEK; ABBA Museum 269-349 SEK' },
    { etichetta: 'Arcipelago di Stoccolma', valore: 'da circa 375 SEK (35€ circa) per un\'uscita guidata di 2-2,5 ore' },
    { etichetta: 'Vigeland Park e musei di Bygdøy (Oslo)', valore: 'Vigeland Park gratuito; Fram Museum circa 180 NOK (16€ circa)' },
    { etichetta: 'Crociera sull\'Oslofjord', valore: 'indicativamente 45-70€ a persona per 1,5-2 ore' },
    { etichetta: 'Pasti', valore: 'tra i più cari d\'Europa nelle tre città: pasto semplice 12-20€, cena di fascia media da 35-45€ a persona' },
    { etichetta: 'Alloggi', valore: 'molto variabile secondo zona e stagione; giugno-agosto è il periodo più caro in tutte e tre le città' },
  ],
}
