import type { Esperienza } from '@/lib/types'

// Esperienze collegate a "Svizzera in van" (src/content/viaggi/52-svizzera-alpi-van.md).
// Nessuna di queste è stata provata realmente: tutte hanno
// giudizio: 'da-verificare' e nessuna ha il campo miaEsperienza, lo stesso
// pattern usato per monte-fuji-chureito in src/content/esperienze/giappone.ts
// per una giornata aggiunta editorialmente e non vissuta. Prezzi e orari
// stagionali vanno riverificati prima di partire.

export const esperienzeSvizzera: Esperienza[] = [
  {
    slug: 'jungfraujoch-top-of-europe',
    paeseSlug: 'svizzera',
    destinazioneSlug: 'jungfraujoch',
    nome: 'Il treno per il Jungfraujoch, Top of Europe',
    localita: 'Jungfraujoch',
    cosE:
      'Il treno a cremagliera che sale dentro la montagna fino alla stazione ferroviaria più alta d\'Europa, a 3.454 metri, affacciata sul ghiacciaio dell\'Aletsch, il più lungo delle Alpi.',
    percheFarla:
      'Perché è un\'impresa ingegneristica costruita tra il 1896 e il 1912 che resta unica in Europa, e perché il ghiacciaio dell\'Aletsch visto da lassù non ha equivalenti nel resto della guida — al prezzo, però, del biglietto più caro del viaggio.',
    durata: 'giornata intera contando i trasferimenti da Interlaken',
    periodo: 'tutto l\'anno, con orari e frequenze diverse tra alta e bassa stagione; le mattine sono statisticamente più serene',
    costo: 'circa 224-261 CHF A/R da Interlaken Ost a seconda della stagione (indicativo, soggetto a revisione periodica)',
    comePrenotare: 'online sul sito ufficiale delle Jungfrau Railways, consigliato nei weekend di alta stagione',
    cosaPortare: 'giacca a vento e strati anche in piena estate: in quota fa freddo indipendentemente dalla stagione a valle',
    perChiEAdatta: 'chiunque, senza bisogno di allenamento fisico: il dislivello lo fa interamente il treno',
    giudizio: 'da-verificare',
    alternative: ['Schilthorn (più economico, panorama a 360° invece del ghiacciaio)', 'First con il Bachalpsee (molto più economico, richiede una camminata)'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il treno a cremagliera del Jungfraujoch che emerge dalla galleria scavata nella roccia dell\'Eiger',
  },
  {
    slug: 'via-ferrata-muerren-gimmelwald',
    paeseSlug: 'svizzera',
    destinazioneSlug: 'muerren-schilthorn',
    nome: 'Via ferrata Mürren-Gimmelwald',
    localita: 'Mürren',
    cosE:
      'Un percorso attrezzato di circa 2,2 km che scende — insolitamente, va in discesa invece che in salita — lungo le pareti della valle di Lauterbrunnen da Mürren al vicino villaggio di Gimmelwald, con un ponte sospeso di 90 metri sopra la cascata del Mürrenbach come tratto clou.',
    percheFarla:
      'Perché è l\'unica via ferrata di questa guida e uno dei pochi percorsi attrezzati alpini pensati per la discesa invece che per la salita, con un\'esposizione che la rende memorabile senza richiedere un dislivello in salita.',
    durata: '2-3 ore',
    periodo: 'da giugno a fine ottobre',
    costo: 'gratuita come percorso; noleggio kit da ferrata sul posto a pagamento',
    comePrenotare: 'nessuna prenotazione necessaria per il percorso; guida alpina consigliata per chi non ha esperienza',
    cosaPortare: 'kit da ferrata omologato con dissipatore, casco, scarpe da montagna',
    perChiEAdatta: 'escursionisti con esperienza di via ferrata; difficoltà K3-K4 sulla scala Hüsler, media-alta',
    giudizio: 'da-verificare',
    alternative: ['Sentiero normale Mürren-Gimmelwald a piedi, senza attrezzatura da ferrata'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Il ponte sospeso di 90 metri sopra la cascata del Mürrenbach lungo la via ferrata Mürren-Gimmelwald',
  },
  {
    slug: 'giro-battello-laghi-thun-brienz',
    paeseSlug: 'svizzera',
    destinazioneSlug: 'interlaken',
    nome: 'Giro in battello sui laghi di Thun e Brienz',
    localita: 'Interlaken',
    cosE:
      'Una traversata in battello — su alcune tratte con imbarcazioni storiche a vapore ancora in servizio — su uno o entrambi i laghi color turchese-lattiginoso che danno il nome a Interlaken, con fermate nei villaggi rivieraschi come Iseltwald e Oberhofen.',
    percheFarla:
      'Perché è il modo più rilassante di vedere le Alpi Bernesi dal basso, senza dislivello, e costa una frazione di qualunque funivia di questa guida.',
    durata: 'da 1 a 3 ore secondo la tratta scelta',
    periodo: 'da primavera ad autunno, con servizio ridotto fuori stagione',
    costo: 'circa 20-30 CHF a tratta singola; abbonamento giornaliero per entrambi i laghi più treni e bus locali 83 CHF in seconda classe (indicativo, soggetto a revisione periodica)',
    comePrenotare: 'biglietti direttamente a bordo o alle biglietterie degli imbarcaderi, nessuna prenotazione necessaria',
    cosaPortare: 'giacca, il vento sul lago rinfresca anche nelle giornate calde',
    perChiEAdatta: 'chiunque, inclusi bambini e anziani: nessun dislivello, nessuno sforzo fisico',
    giudizio: 'da-verificare',
    alternative: ['Passeggiata a piedi lungo l\'Höheweg di Interlaken, gratuita ma senza la prospettiva dal lago'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Un battello storico a vapore sul Lago di Brienz con le montagne della Jungfrau Region sullo sfondo',
  },
  {
    slug: 'trummelbachfalle',
    paeseSlug: 'svizzera',
    destinazioneSlug: 'lauterbrunnen',
    nome: 'Trümmelbachfälle',
    localita: 'Lauterbrunnen',
    cosE:
      'Un sistema di dieci cascate glaciali visibili da gallerie e ascensori scavati dentro la roccia della montagna: l\'unico posto al mondo dove si osserva da vicino l\'intero disgelo del massiccio della Jungfrau incanalarsi in una sola gola.',
    percheFarla:
      'Perché è un\'esperienza geologica più che paesaggistica, diversa da qualunque altra cascata della guida, ed è economica rispetto al resto delle attrazioni della regione.',
    durata: '1-1,5 ore',
    periodo: 'da inizio aprile a inizio novembre, chiuso il resto dell\'anno',
    costo: '18 CHF adulti, 8 CHF bambini 6-15 anni (indicativo, soggetto a revisione periodica)',
    comePrenotare: 'nessuna prenotazione necessaria, si paga all\'ingresso',
    cosaPortare: 'scarpe con buona aderenza, le gallerie sono umide e scivolose; una giacca leggera per l\'umidità interna',
    perChiEAdatta: 'chiunque, incluse famiglie con bambini: il percorso è attrezzato con passerelle e ascensore',
    giudizio: 'da-verificare',
    alternative: ['La cascata Staubbach, visibile gratuitamente dal centro di Lauterbrunnen, ma senza l\'accesso dentro la montagna'],
    tripSlugs: ['svizzera-alpi-van'],
    imageAlt: 'Le gallerie scavate nella roccia alle Trümmelbachfälle con l\'acqua glaciale che precipita tra le pareti',
  },
]
