import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Svizzera in van: le Alpi Bernesi da
// Interlaken al Cervino". Il testo narrativo resta nel markdown
// (src/content/viaggi/52-svizzera-alpi-van.md).
// Come in dolomiti-roadtrip.ts, `giorni[]` non rappresenta giorni di
// calendario ma le 7 zone del roadtrip modulare — vedi la nota in cima al
// markdown. `titoloGiorno` deve combaciare esattamente con le intestazioni
// "### ..." del file markdown, altrimenti il merge in DayTimeline non trova
// la corrispondenza.
// Nessun campo miaEsperienza né immagine/imageAlt sui singoli GiornoMeta:
// questa guida non è basata su un viaggio vissuto realmente (vedi la nota
// in fondo al markdown), e le foto sono un task separato.

export const svizzeraAlpiVanMeta: TripMeta = {
  tripSlug: 'svizzera-alpi-van',
  paeseSlug: 'svizzera',
  ritmo:
    'Modulare: si combinano le zone in base ai giorni disponibili, da un weekend lungo di 3-4 giorni sulla sola Jungfrau Region a una settimana che arriva fino a Zermatt. Due proposte pronte nella scheda pratica.',
  trasporti:
    "Van o camper, con vignetta autostradale annuale obbligatoria (circa 40 CHF) e rete stradale eccellente. Zermatt è chiusa al traffico privato: il van si lascia nel parcheggio di Täsch e si sale in treno. Grimselpass e Furkapass sono aperti solo in stagione, indicativamente da giugno a ottobre.",
  stile: ['vanlife', 'roadtrip', 'montagna', 'trekking'],
  adattoA: [
    'chi ha già fatto un roadtrip alpino in Italia o Francia e vuole misurarsi con un paese dove il livello di prezzi e di regole è sensibilmente più alto',
    'chi viaggia in van e accetta di pianificare le notti in anticipo invece di cercare posto sul momento',
    'chi vuole vedere l\'Eiger, la Jungfrau e il Cervino nello stesso viaggio, accettando il costo che questo comporta',
    'chi preferisce un budget preventivato con largo anticipo a una sorpresa scoperta sul posto',
  ],
  puntiForti: [
    'Sette zone trattate come luoghi distinti, dalla base di Interlaken fino a Zermatt, con indicazioni pratiche su ciascuna',
    'Disclaimer espliciti su costi, orari e regole per il van che nessuna guida generalista mette al centro con questa insistenza',
    'Due roadtrip pronti (weekend lungo di 3-4 giorni, settimana di 7) che combinano le zone senza dover fare da soli il lavoro di incastro',
  ],
  criticita: [
    'La Svizzera è sistematicamente tra i paesi più cari d\'Europa: vignetta, carburante, funivie e campeggi pesano su un budget giornaliero che va preventivato prima di partire, non scoperto lungo strada',
    'Il campeggio libero in van è vietato o fortemente ristretto quasi ovunque, con multe reali — fino a 200 CHF a Lauterbrunnen, fino a 2.000 CHF nel Canton Berna nei casi più seri',
    'La domenica quasi tutti i negozi sono chiusi per legge, con la sola eccezione dei punti vendita nelle grandi stazioni ferroviarie',
    'Grimselpass e Furkapass chiudono in inverno e le date esatte di apertura variano ogni anno con l\'innevamento residuo',
    'Il Jungfraujoch è probabilmente il singolo biglietto turistico più caro delle Alpi (indicativamente 224-261 CHF A/R): va budgetizzato come giornata a sé',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    treEsperienzePiuBelle:
      'Il ghiacciaio dell\'Aletsch visto dal Jungfraujoch, il Cliff Walk sospeso sulla parete del First con l\'Eiger di fronte, il Cervino che appare in fondo alla via principale di Zermatt',
  },
  unitaGiorniLabel: 'Zona',
  tappeMappa: [
    { nome: 'Interlaken e i laghi di Thun e Brienz', destinazioneSlug: 'interlaken' },
    { nome: 'Lauterbrunnen e la valle delle cascate', destinazioneSlug: 'lauterbrunnen' },
    { nome: 'Grindelwald e il First', destinazioneSlug: 'grindelwald' },
    { nome: 'Jungfraujoch, il Top of Europe', destinazioneSlug: 'jungfraujoch' },
    { nome: 'Mürren e lo Schilthorn', destinazioneSlug: 'muerren-schilthorn' },
    { nome: 'Grimselpass e Furkapass', destinazioneSlug: 'grimsel-furka' },
    { nome: 'Zermatt e il Cervino', destinazioneSlug: 'zermatt' },
  ],
  giorni: [
    {
      titoloGiorno: 'Interlaken e i laghi di Thun e Brienz',
      tratta: 'Snodo logistico centrale, base consigliata per tutto il giro',
      intensita: 'leggero',
      costiNoti: 'campeggi 35-50 CHF/notte; giro in battello sui laghi da circa 20-30 CHF a tratta',
      destinazioneSlug: 'interlaken',
    },
    {
      titoloGiorno: 'Lauterbrunnen e la valle delle cascate',
      tratta: 'Da Interlaken, 20 minuti',
      intensita: 'medio',
      costiNoti:
        'Trümmelbachfälle 18 CHF ingresso; campeggio libero vietato nella valle, multe fino a 200 CHF',
      destinazioneSlug: 'lauterbrunnen',
    },
    {
      titoloGiorno: 'Grindelwald e il First',
      tratta: 'Da Interlaken, 20 minuti',
      intensita: 'leggero',
      costiNoti: 'funivia First 72-76 CHF A/R; Cliff Walk incluso nel biglietto',
      destinazioneSlug: 'grindelwald',
    },
    {
      titoloGiorno: 'Jungfraujoch, il Top of Europe',
      tratta: 'Da Interlaken Ost, circa 2h20 di treno con cambi',
      intensita: 'medio',
      costiNoti: 'biglietto 224-261 CHF A/R secondo stagione; Good Morning Ticket scontato partendo entro le 8',
      destinazioneSlug: 'jungfraujoch',
    },
    {
      titoloGiorno: 'Mürren e lo Schilthorn',
      tratta: 'Da Lauterbrunnen, funivia fino a Stechelberg o cremagliera da Lauterbrunnen',
      intensita: 'medio',
      costiNoti: 'funivia Schilthorn circa 115 CHF A/R da Stechelberg; via ferrata Mürren-Gimmelwald aperta giugno-ottobre',
      destinazioneSlug: 'muerren-schilthorn',
    },
    {
      titoloGiorno: 'Grimselpass e Furkapass',
      tratta: 'Trasferimento verso il Vallese, circa 2-3 ore di guida con soste panoramiche',
      intensita: 'leggero',
      costiNoti: 'nessun pedaggio sulla strada; passi aperti indicativamente giugno-ottobre, verificare ogni stagione',
      destinazioneSlug: 'grimsel-furka',
    },
    {
      titoloGiorno: 'Zermatt e il Cervino',
      tratta: 'Da Täsch (parcheggio obbligatorio, van non ammesso a Zermatt), 12 minuti di treno navetta',
      intensita: 'medio',
      costiNoti: 'parcheggio Täsch da 17 CHF/giorno; funivia Gornergrat a parte',
      destinazioneSlug: 'zermatt',
    },
  ],
  budget: [
    { etichetta: 'Vignetta autostradale annuale', valore: 'circa 40 CHF, obbligatoria una tantum per l\'intero soggiorno' },
    { etichetta: 'Carburante', valore: 'benzina 2,00-2,15 CHF/litro, diesel 2,25-2,45 CHF/litro' },
    { etichetta: 'Campeggio per van, 2 persone', valore: '35-50 CHF a notte, offerte Stop & Go da circa 25 CHF' },
    { etichetta: 'Jungfraujoch A/R da Interlaken', valore: '224-261 CHF a seconda della stagione' },
    { etichetta: 'Funivia Schilthorn A/R da Stechelberg', valore: 'circa 115 CHF' },
    { etichetta: 'Funivia First A/R', valore: '72-76 CHF' },
    { etichetta: 'Trümmelbachfälle, ingresso', valore: '18 CHF adulti' },
    { etichetta: 'Parcheggio giornaliero zone turistiche', valore: '15-20 CHF, da 17 CHF/giorno a Täsch per Zermatt' },
  ],
}
