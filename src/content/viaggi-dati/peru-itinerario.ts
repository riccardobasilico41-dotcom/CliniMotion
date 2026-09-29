import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Perù in 31 giorni: dalle Ande all'Amazzonia,
// fino alla Cordillera Blanca". Il testo narrativo resta nel markdown
// (src/content/viaggi/50-peru-itinerario.md). `titoloGiorno` deve combaciare
// esattamente con le intestazioni "### Giorno N — ..." del file markdown,
// altrimenti il merge in DayTimeline non trova la corrispondenza.
//
// Itinerario in due parti (un solo racconto di trentun giorni, pensato per
// funzionare anche diviso a metà): la Parte 1, diciassette giorni, è il Perù
// andino classico (Lima, Cusco, Valle Sacra, Machu Picchu, Titicaca, Arequipa
// e il Colca); la Parte 2, quattordici giorni, aggiunge due estensioni via
// Lima che non si toccano tra loro, Amazzonia (Puerto Maldonado/Tambopata) e
// Cordillera Blanca (Huaraz). Choquequirao resta fuori apposta — trek a sé,
// più duro del Cammino Inca e del Salkantay — così come Iquitos e il Manu,
// le altre due porte d'ingresso in Amazzonia. Le foto giorno-per-giorno sono
// un task a parte.

export const peruItinerarioMeta: TripMeta = {
  tripSlug: 'peru-itinerario',
  paeseSlug: 'peru',
  ritmo:
    'Impegnativo negli innesti in quota (Cusco, Puno, Huaraz) e nel trek di Santa Cruz, ma con giorni di trasferimento e di riposo intercalati apposta per l\'acclimatamento, mai a caso; il ritmo si allenta nella Valle Sacra, ad Arequipa e nei lodge amazzonici, dove è il pacchetto a organizzare tutto.',
  trasporti:
    'In autonomia: voli interni (Lima-Cusco, Arequipa-Lima, Lima-Puerto Maldonado), bus turistici e notturni (Cusco-Puno, Puno-Arequipa, Lima-Huaraz), treno PeruRail/IncaRail per Machu Picchu, barche sul Titicaca e in Amazzonia, tour organizzati sul Titicaca e nel Colca, guide obbligatorie in Amazzonia e agenzie di trekking a Huaraz.',
  stile: ['trekking', 'alta quota', 'cultura inca', 'amazzonia', 'sud america'],
  adattoA: [
    'chi ha un mese, o preferisce dividerlo in due viaggi da due-tre settimane ciascuno (vedi la nota al Giorno 17)',
    'chi vuole vedere insieme il Perù andino classico e le sue due estensioni meno battute, Amazzonia e Cordillera Blanca',
    'chi accetta di dedicare più giorni all\'acclimatamento che a qualsiasi altra cosa, perché l\'altitudine è il vero tema del viaggio',
    'chi cerca trekking impegnativi (Laguna 69, passo di Punta Unión nel trek di Santa Cruz) e non solo Machu Picchu in treno',
    'chi preferisce dividere: la Parte 1 (Lima-Cusco-Valle Sacra-Machu Picchu-Titicaca-Arequipa-Colca, 17 giorni) e la Parte 2 (Amazzonia e Cordillera Blanca, 14 giorni) funzionano anche come due viaggi indipendenti',
  ],
  puntiForti: [
    'Machu Picchu al primo turno, quaranta minuti di silenzio prima che arrivino i gruppi',
    'La notte in homestay ad Amantaní sul Titicaca, l\'unico momento del giro in cui si esce davvero dal circuito turistico',
    'La Laguna 69 e il passo di Punta Unión nel trek di Santa Cruz, alla Cordillera Blanca, a una frazione del prezzo e della folla del circuito di Cusco',
    'L\'alba alla collpa in Amazzonia, quando centinaia di ara si radunano sulla parete d\'argilla',
    'La Cruz del Cóndor nel Canyon del Colca, quando i condor si alzano in volo sfruttando le correnti termiche del mattino',
  ],
  criticita: [
    'L\'altitudine è il vero tema del viaggio: servono almeno due giorni di acclimatamento vero a Cusco, e altrettanti separatamente a Puno (3.812 m) e a Huaraz (circa 3.050 m) — sono tre quote diverse, non un\'unica acclimatazione che vale per tutto il viaggio',
    'Machu Picchu va prenotato con largo anticipo secondo la stagione: il Cammino Inca classico si esaurisce con 5-6 mesi di anticipo (8-12 per le date di punta di giugno-agosto), Huayna Picchu e la Montaña Machu Picchu con 2-4 mesi; i permessi per l\'anno escono a ottobre di quello precedente',
    'Furti a opera di finti tassisti nei tragitti da e per gli aeroporti, e a Cusco cambiavalute di strada che passano banconote false o fuori corso: taxi solo prenotati o via app, cambio solo in banca o in casa de cambio autorizzata',
    'Solo bus delle compagnie principali per le lunghe percorrenze via terra, incluso il notturno per Huaraz: gli incidenti legati a mezzi o conducenti scadenti sono un rischio reale',
    'Choquequirao resta fuori apposta: è un trek a sé di 4-5 giorni, più duro del Cammino Inca e del Salkantay, che merita un viaggio dedicato, magari prima che il progetto di teleferica (ancora senza data certa nel 2026) cambi per sempre il posto',
    'Delle tre porte d\'ingresso in Amazzonia, Iquitos e il Parco del Manu restano fuori a favore di Puerto Maldonado, l\'unica che si incastra in un viaggio di questa lunghezza senza stravolgerlo',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito:
      'in autonomia, con voli interni, bus turistici e notturni, treno per Machu Picchu, tour organizzati sul Titicaca e nel Colca, guide obbligatorie in Amazzonia e agenzie di trekking a Huaraz',
    cosaCercavo: undefined,
    treEsperienzePiuBelle:
      'Machu Picchu al primo turno prima dei gruppi, la notte in famiglia ad Amantaní sul Titicaca, il passo di Punta Unión nel trek di Santa Cruz alla Cordillera Blanca',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Lima', destinazioneSlug: 'lima' },
    { nome: 'Cusco', destinazioneSlug: 'cusco' },
    { nome: 'Valle Sacra', destinazioneSlug: 'valle-sacra' },
    { nome: 'Machu Picchu', destinazioneSlug: 'machu-picchu' },
    { nome: 'Titicaca (Puno e Amantaní)', destinazioneSlug: 'lago-titicaca' },
    { nome: 'Arequipa e il Colca', destinazioneSlug: 'arequipa-colca' },
    { nome: 'Amazzonia (Tambopata)', destinazioneSlug: 'amazzonia-peruviana' },
    { nome: 'Huaraz e la Cordillera Blanca', destinazioneSlug: 'huaraz-cordillera-blanca' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Lima', tratta: 'Arrivo internazionale a Lima (Jorge Chávez) → Miraflores o Barranco', pernottamento: 'Lima, Miraflores o Barranco', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'lima', immagine: '/images/viaggi/peru-itinerario/giorno-01-lima.jpg', imageAlt: 'Tramonto sulla scogliera del Malecón di Miraflores a Lima, con il faro, i grattacieli e un parapendio in volo sull\'oceano' },
    { titoloGiorno: 'Giorno 2 — Lima: centro storico, Miraflores e Barranco', pernottamento: 'Lima, Miraflores o Barranco', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'lima', immagine: '/images/viaggi/peru-itinerario/giorno-02-lima.jpg', imageAlt: 'Vista panoramica della Plaza Mayor di Lima, con il Palazzo di Governo, la Cattedrale e gli edifici coloniali gialli del centro storico' },
    { titoloGiorno: 'Giorno 3 — Volo a Cusco e primo giorno di acclimatamento', tratta: 'Lima → Cusco, volo interno (circa 1h20), atterraggio a 3.400 metri', pernottamento: 'Cusco, centro storico o San Blas', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'cusco', immagine: '/images/viaggi/peru-itinerario/giorno-03-cusco.jpg', imageAlt: 'Panoramica della Plaza de Armas di Cusco con la chiesa della Compañía de Jesús e le colline della città sullo sfondo' },
    { titoloGiorno: 'Giorno 4 — Cusco: Qorikancha, Sacsayhuamán e San Blas', pernottamento: 'Cusco, centro storico o San Blas', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Boleto Turístico del Cusco: circa 130 soles, copre Sacsayhuamán, i siti della Valle Sacra e diversi musei', destinazioneSlug: 'cusco', immagine: '/images/viaggi/peru-itinerario/giorno-04-cusco.jpg', imageAlt: 'Le mura megalitiche della fortezza di Sacsayhuamán sopra Cusco, con i giganteschi blocchi di pietra incastrati senza malta' },
    { titoloGiorno: 'Giorno 5 — Rainbow Mountain o la laguna Humantay', pernottamento: 'Cusco, centro storico o San Blas', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'cusco', immagine: '/images/viaggi/peru-itinerario/giorno-05-cusco.jpg', imageAlt: 'Le strisce minerali multicolori di Vinicunca, la Rainbow Mountain, sopra i 5.000 metri nelle Ande di Cusco' },
    { titoloGiorno: 'Giorno 6 — Verso la Valle Sacra: Pisac e Ollantaytambo', tratta: 'Cusco → Pisac → Ollantaytambo, Valle Sacra', pernottamento: 'Ollantaytambo, Valle Sacra', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'valle-sacra', immagine: '/images/viaggi/peru-itinerario/giorno-06-valle-sacra.jpg', imageAlt: 'Le terrazze e la scalinata inca della fortezza di Ollantaytambo, con i turisti che risalgono i gradini di pietra' },
    { titoloGiorno: 'Giorno 7 — Le saline di Maras, Moray e Chinchero', pernottamento: 'Ollantaytambo, Valle Sacra', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Ingresso alle saline di Maras: circa 10 soles', destinazioneSlug: 'valle-sacra', immagine: '/images/viaggi/peru-itinerario/giorno-07-valle-sacra.jpg', imageAlt: 'I terrazzamenti circolari concentrici di Moray, il laboratorio agricolo inca nella Valle Sacra' },
    { titoloGiorno: 'Giorno 8 — In treno verso Machu Picchu', tratta: 'Ollantaytambo → Aguas Calientes, treno PeruRail/IncaRail', pernottamento: 'Aguas Calientes', statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: 'Treno 70-500$ andata e ritorno secondo la classe (Expedition/Voyager, Vistadome, Hiram Bingham)', destinazioneSlug: 'machu-picchu', immagine: '/images/viaggi/peru-itinerario/giorno-08-machu-picchu.jpg', imageAlt: 'Il treno PeruRail costeggia il fiume Urubamba in un canyon lungo la tratta verso Machu Picchu' },
    { titoloGiorno: 'Giorno 9 — Machu Picchu all\'apertura', tratta: 'Aguas Calientes → Machu Picchu (bus navetta o a piedi) → treno di rientro verso Ollantaytambo e Cusco', pernottamento: 'Cusco, centro storico o San Blas', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Bus navetta Consettur: circa 25 minuti, 24$ andata e ritorno; ingresso al sito circa 152 soles (circa 200 soles con Huayna Picchu o Montaña Machu Picchu)', destinazioneSlug: 'machu-picchu', immagine: '/images/viaggi/peru-itinerario/giorno-09-machu-picchu.jpg', imageAlt: 'La cittadella di Machu Picchu avvolta dalla nebbia mattutina, con il Huayna Picchu che emerge dalle nuvole al primo turno d\'ingresso' },
    { titoloGiorno: 'Giorno 10 — Da Cusco a Puno sull\'altopiano', tratta: 'Cusco → Puno, bus turistico (7-8h) con soste ad Andahuaylillas, Raqchi e il valico de La Raya (oltre 4.300 m)', pernottamento: 'Puno', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'lago-titicaca', immagine: '/images/viaggi/peru-itinerario/giorno-10-lago-titicaca.jpg', imageAlt: 'Il tempio di Wiracocha a Raqchi, con le mura in adobe su base di pietra e le montagne dell\'altopiano sullo sfondo, una delle soste lungo la strada da Cusco a Puno' },
    { titoloGiorno: 'Giorno 11 — Titicaca: le isole Uros e Taquile, notte ad Amantaní', tratta: 'Puno → isole Uros → Taquile → Amantaní, in barca', pernottamento: 'Amantaní, homestay in famiglia', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Tour di due giorni con homestay: indicativamente 30-60$ a persona', destinazioneSlug: 'lago-titicaca', immagine: '/images/viaggi/peru-itinerario/giorno-11-lago-titicaca.jpg', imageAlt: 'Un\'isola galleggiante degli Uros costruita in totora sul lago Titicaca, con le acque blu del lago in primo piano' },
    { titoloGiorno: 'Giorno 12 — Amantaní all\'alba e ritorno a Puno', tratta: 'Amantaní → Puno, in barca', pernottamento: 'Puno', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'lago-titicaca', immagine: '/images/viaggi/peru-itinerario/giorno-12-lago-titicaca.jpg', imageAlt: 'Vista aerea dall\'isola di Amantaní verso il lago Titicaca al tramonto, con i campi terrazzati e il tempio di Pachatata in primo piano' },
    { titoloGiorno: 'Giorno 13 — Da Puno ad Arequipa', tratta: 'Puno → Arequipa, bus (circa 6h)', pernottamento: 'Arequipa, centro storico', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'arequipa-colca', immagine: '/images/viaggi/peru-itinerario/giorno-13-arequipa-colca.jpg', imageAlt: 'La Plaza de Armas di Arequipa con la cattedrale in sillar bianco e il vulcano Misti innevato sullo sfondo, tra le palme del viale centrale' },
    { titoloGiorno: 'Giorno 14 — Arequipa, la città bianca', pernottamento: 'Arequipa, centro storico', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: '/images/viaggi/peru-itinerario/giorno-14-arequipa-colca.jpg', imageAlt: 'Il corridoio blu del Monastero di Santa Catalina ad Arequipa, con volte affrescate e vasi di piante lungo il porticato' },
    { titoloGiorno: 'Giorno 15 — Verso il Canyon del Colca', tratta: 'Arequipa → Canyon del Colca, con sosta ai bagni termali di La Calera a Chivay', pernottamento: 'Chivay o Cabanaconde, Canyon del Colca', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: '/images/viaggi/peru-itinerario/giorno-15-arequipa-colca.jpg', imageAlt: 'Vista dall\'alto del Canyon del Colca vicino a Chivay, con i terrazzamenti agricoli e il fiume sul fondo della valle avvolta nella foschia mattutina' },
    { titoloGiorno: 'Giorno 16 — La Cruz del Cóndor e ritorno ad Arequipa', tratta: 'Cruz del Cóndor → rientro ad Arequipa nel pomeriggio', pernottamento: 'Arequipa, centro storico', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'arequipa-colca', immagine: '/images/viaggi/peru-itinerario/giorno-16-arequipa-colca.jpg', imageAlt: 'Un condor andino in volo ravvicinato, ali spiegate, sopra il Canyon del Colca alla Cruz del Cóndor' },
    { titoloGiorno: 'Giorno 17 — Da Arequipa a Lima, chiusura della Parte 1', tratta: 'Arequipa → Lima, volo mattutino', pernottamento: 'Lima, Miraflores o Barranco', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'lima', immagine: '/images/viaggi/peru-itinerario/giorno-17-lima.jpg', imageAlt: 'Il Puente de los Suspiros nel quartiere di Barranco a Lima, la passerella in legno tra le case colorate del bohémien' },
    { titoloGiorno: 'Giorno 18 — Verso l\'Amazzonia: volo a Puerto Maldonado', tratta: 'Lima → Puerto Maldonado, volo diretto (poco più di 2h) → lodge in barca lungo il fiume, riserva di Tambopata', pernottamento: 'Lodge nella foresta di Tambopata', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Lodge a Tambopata: indicativamente 300-600$ per 3 notti, tutto incluso', destinazioneSlug: 'amazzonia-peruviana', immagine: '/images/viaggi/peru-itinerario/giorno-18-amazzonia-peruviana.jpg', imageAlt: 'Il fiume Tambopata visto da un punto panoramico sopraelevato, con le acque color terra che tagliano la foresta amazzonica densa' },
    { titoloGiorno: 'Giorno 19 — Tambopata: canopy walkway e lago Sandoval', pernottamento: 'Lodge nella foresta di Tambopata', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'amazzonia-peruviana', immagine: '/images/viaggi/peru-itinerario/giorno-19-amazzonia-peruviana.jpg', imageAlt: 'Il lago Sandoval circondato da palme di aguaje nella riserva di Tambopata, con le acque immobili che riflettono la foresta' },
    { titoloGiorno: 'Giorno 20 — L\'alba alla collpa e il volo di rientro a Lima', tratta: 'Lodge → Puerto Maldonado in barca → volo pomeridiano per Lima', pernottamento: 'Lima, Miraflores o Barranco', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'amazzonia-peruviana', immagine: '/images/viaggi/peru-itinerario/giorno-20-amazzonia-peruviana.jpg', imageAlt: 'Decine di are e pappagalli blu, gialli e rossi radunati su una parete di argilla, la collpa, nella riserva di Tambopata' },
    { titoloGiorno: 'Giorno 21 — Lima e il bus notturno per Huaraz', tratta: 'Lima → Huaraz, bus notturno (circa 8h)', pernottamento: 'Bus notturno verso Huaraz', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'lima', immagine: '/images/viaggi/peru-itinerario/giorno-21-lima.jpg', imageAlt: 'L\'interno di un bus notturno Cruz del Sur in Perù, con le poltrone reclinabili in pelle del servizio turistico' },
    { titoloGiorno: 'Giorno 22 — Arrivo a Huaraz e primo giorno di acclimatamento', pernottamento: 'Huaraz', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-22-huaraz-cordillera-blanca.jpg', imageAlt: 'La Plaza de Armas di Huaraz decorata a festa, con i picchi innevati della Cordillera Blanca visibili oltre i tetti della città' },
    { titoloGiorno: 'Giorno 23 — Acclimatamento: la laguna Churup', pernottamento: 'Huaraz', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-23-huaraz-cordillera-blanca.jpg', imageAlt: 'Le acque turchesi della laguna Churup ai piedi di una parete rocciosa e di un nevado, vicino a Huaraz' },
    { titoloGiorno: 'Giorno 24 — Il sito archeologico di Chavín de Huántar', pernottamento: 'Huaraz', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-24-huaraz-cordillera-blanca.jpg', imageAlt: 'Le mura in pietra del centro cerimoniale preincaico di Chavín de Huántar, incorniciate dalle montagne della valle' },
    { titoloGiorno: 'Giorno 25 — La Laguna 69', pernottamento: 'Huaraz', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'Una delle escursioni più economiche e spettacolari del Perù: poche decine di dollari per la giornata', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-25-huaraz-cordillera-blanca.jpg', imageAlt: 'Il cartello della Laguna 69 a 4.604 metri, con le acque turchesi del lago glaciale e la parete di roccia e ghiaccio sullo sfondo' },
    { titoloGiorno: 'Giorno 26 — Trekking di Santa Cruz, giorno 1', tratta: 'Huaraz → punto di partenza del trek di Santa Cruz', pernottamento: 'Campo tenda, trekking di Santa Cruz', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-26-huaraz-cordillera-blanca.jpg', imageAlt: 'Il fondovalle ampio della Quebrada Santa Cruz, tra pareti di roccia e un piccolo lago sullo sfondo, all\'inizio del trekking' },
    { titoloGiorno: 'Giorno 27 — Trekking di Santa Cruz, giorno 2: il passo di Punta Unión', pernottamento: 'Campo tenda, trekking di Santa Cruz', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-27-huaraz-cordillera-blanca.jpg', imageAlt: 'La vista dal passo di Punta Unión sul trekking di Santa Cruz, con un lago turchese nella valle sottostante tra le vette innevate' },
    { titoloGiorno: 'Giorno 28 — Trekking di Santa Cruz, giorno 3', pernottamento: 'Campo tenda, trekking di Santa Cruz', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-28-huaraz-cordillera-blanca.jpg', imageAlt: 'La laguna Jatuncocha lungo la discesa del trekking di Santa Cruz, con il sentiero che costeggia le acque ai piedi delle montagne' },
    { titoloGiorno: 'Giorno 29 — Trekking di Santa Cruz, giorno 4: rientro a Huaraz', tratta: 'Fine del sentiero → collettivo di rientro a Huaraz', pernottamento: 'Huaraz', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-29-huaraz-cordillera-blanca.jpg', imageAlt: 'Escursionisti e muli da soma sull\'ultimo tratto del trekking di Santa Cruz, con le nuvole basse sulle vette della Cordillera Blanca' },
    { titoloGiorno: 'Giorno 30 — Giornata di riposo a Huaraz', pernottamento: 'Huaraz', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'huaraz-cordillera-blanca', immagine: '/images/viaggi/peru-itinerario/giorno-30-huaraz-cordillera-blanca.jpg', imageAlt: 'Il ghiacciaio del Nevado Pastoruri con la piccola laguna proglaciale ai suoi piedi, sotto un cielo nuvoloso' },
    { titoloGiorno: 'Giorno 31 — Bus notturno per Lima e partenza', tratta: 'Huaraz → Lima, bus notturno → volo internazionale di rientro', pernottamento: 'Bus notturno verso Lima, poi volo di rientro', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'lima', immagine: '/images/viaggi/peru-itinerario/giorno-31-lima.jpg', imageAlt: 'Vista aerea della nuova area terminal dell\'aeroporto internazionale Jorge Chávez di Lima' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Voli interni', valore: 'Lima-Cusco, Arequipa-Lima, Lima-Puerto Maldonado' },
    { etichetta: 'Bus turistici e notturni', valore: 'Cusco-Puno, Puno-Arequipa, Lima-Huaraz e ritorno' },
    { etichetta: 'Machu Picchu', valore: 'treno 70-500$ A/R secondo la classe, bus navetta 24$ A/R, ingresso circa 152 soles (circa 200 soles con Huayna Picchu o Montaña Machu Picchu)' },
    { etichetta: 'Tour e homestay sul Titicaca', valore: 'indicativamente 30-60$ a persona per il tour di due giorni con notte ad Amantaní' },
    { etichetta: 'Lodge in Amazzonia', valore: 'indicativamente 300-600$ per 3 notti a Tambopata, tutto incluso' },
    { etichetta: 'Trekking a Huaraz', valore: 'tra le zone più economiche del Perù: Laguna 69 poche decine di dollari, trek di Santa Cruz con agenzia o in autonomia' },
    { etichetta: 'Alloggi e pasti', valore: 'economici quasi ovunque, più cari nei lodge amazzonici e nei ristoranti turistici di Aguas Calientes' },
  ],
}
