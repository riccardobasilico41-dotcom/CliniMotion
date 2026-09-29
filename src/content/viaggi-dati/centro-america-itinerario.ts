import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Centro America in 32 giorni: Guatemala
// e Belize via terra, Panama in volo a parte".
// Il testo narrativo resta nel markdown (src/content/viaggi/51-centro-america-itinerario.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
//
// Itinerario "composito" in due parti: la Parte 1 (Guatemala-Belize, 22 giorni)
// è un continuo via terra vero attraverso le 5 destinazioni del Guatemala e le
// 4 del Belize già pubblicate su questo sito; la Parte 2 (Panama, 10 giorni)
// copre le 4 destinazioni del Panama, raggiunta con un volo diretto perché tra
// le due parti non esiste un collegamento overland sensato (Honduras, El
// Salvador, Nicaragua e Costa Rica non sono coperti da questo sito).
//
// `paeseSlug` è una scelta editoriale: il tipo TripMeta supporta un solo Paese
// canonico per viaggio, qui impostato su 'guatemala' (la tappa di apertura e
// la più estesa della Parte 1). I link generati da RouteLine/DaySectionSignature
// combinano sempre questo paeseSlug con ogni destinazioneSlug (`/destinazioni/
// guatemala/<slug>`), quindi le tappe di Belize e Panama in tappeMappa/giorni
// puntano a un percorso che non esiste ancora sotto /destinazioni/guatemala/:
// è un limite noto del tipo attuale, non un errore di battitura.
//
// Le foto giorno-per-giorno sono un task a parte, non ancora impostato per
// nessun giorno di questo viaggio.

export const centroAmericaItinerarioMeta: TripMeta = {
  tripSlug: 'centro-america-itinerario',
  paeseSlug: 'guatemala',
  ritmo:
    'Impegnativo a tratti e rilassato ad altri: due salite notturne in quota (Acatenango, Volcán Barú), una grotta fisicamente impegnativa (ATM) e giornate di puro relax caraibico, uniti da un lungo tratto via terra in Guatemala e Belize e da un volo diretto per raggiungere Panama',
  trasporti:
    'Shuttle turistici e chicken bus in Guatemala, bus e water taxi in Belize, un volo diretto Belize City-Panama City (Copa Airlines) tra le due parti, voli interni e 4x4 più barca a Panama, lance pubbliche sul lago Atitlán, taxi colectivo alla frontiera di Melchor de Mencos',
  stile: ['vulcani', 'cultura maya', 'natura', 'mare', 'isole', 'avventura'],
  adattoA: [
    'chi ha almeno un mese e vuole unire vulcani, cultura maya, barriera corallina e Caraibi panamensi in un solo racconto',
    'chi accetta un salto in aereo come collegamento onesto tra due parti del viaggio invece di forzare un continuum via terra che geograficamente non esiste',
    'chi vuole scegliere tra trekking impegnativi (Acatenango, Volcán Barú, grotta ATM) e giornate di puro relax caraibico',
    'chi è disposto a gestire budget molto diversi tappa per tappa: Guatemala economico, Belize il più caro della regione, Panama nella media',
    'chi preferisce anche solo una delle due parti: la Parte 1 (Guatemala-Belize, 22 giorni) e la Parte 2 (Panama, 10 giorni) funzionano anche come viaggi indipendenti',
  ],
  puntiForti: [
    'Il campo sull\'Acatenango con il vulcano Fuego che erutta a un paio di chilometri di distanza, per tutta la notte',
    'La grotta ATM, con ceramiche e resti umani maya lasciati esattamente dove furono deposti oltre mille anni fa',
    'L\'alba dal Tempio IV di Tikal, con il coro di scimmie urlatrici che si sveglia sopra la giungla del Petén',
    'Il giro dei villaggi del lago Atitlán in lancha, un\'identità diversa ogni dieci minuti di barca',
    'Le isole autogovernate dei Guna a San Blas, uno dei pochi territori indigeni autonomi del continente',
    'L\'alba sui due oceani dal Volcán Barú, uno dei pochissimi punti al mondo da cui si vedono insieme Pacifico e Caraibi',
  ],
  criticita: [
    'Panama non è collegata via terra a Guatemala e Belize: tra le due parti dell\'itinerario ci sono Honduras, El Salvador, Nicaragua e Costa Rica, non coperti da questo sito — il collegamento è un volo diretto Belize City-Panama City (Copa Airlines), che opera solo due giorni a settimana (martedì e venerdì)',
    'Il mercato di Chichicastenango, tappa del Giorno 5, esiste solo il giovedì e la domenica: le date del viaggio vanno incastrate su questo vincolo',
    'Alla frontiera di Melchor de Mencos (Guatemala-Belize) sono segnalati cambiavalute non ufficiali e tassisti che esagerano la distanza dalla fermata dei colectivi pubblici: cambiare solo agli sportelli ufficiali e diffidare di chi si offre di aiutare non richiesto',
    'La grotta ATM richiede guida autorizzata obbligatoria, vieta qualsiasi fotografia e può chiudere dopo piogge intense per il livello dell\'acqua',
    'San Blas è un territorio Guna autogoverno: solo contanti (nessun bancomat sulle isole), immersioni con bombole vietate, regole comunitarie su foto e souvenir naturali da rispettare senza eccezioni',
    'Il trekking all\'Acatenango e la salita notturna al Volcán Barú richiedono buona forma fisica e attrezzatura invernale vera: il freddo in quota sorprende chiunque lo sottovaluti pensando ai tropici',
    'Belize è il paese più caro della regione, quasi il doppio del Guatemala: va messo in conto nel budget, specialmente per diving e voli interni',
    'I trasferimenti via terra più lunghi (Panajachel-Lanquín, Lanquín-Flores) superano le 8-9 ore e vanno trattati come giornate a sé, non come tappe "di passaggio"',
    'Guatemala e Belize condividono lo stesso fuso orario (UTC-6), Panama è un\'ora avanti (UTC-5): da tenere presente incastrando il volo della Parte 2',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito:
      'in autonomia, mettendo insieme le schede di viaggio già pubblicate per Guatemala, Belize e Panama in un unico itinerario in due parti',
    cosaCercavo: undefined,
    treEsperienzePiuBelle:
      'La notte al campo sull\'Acatenango con il Fuego in eruzione, la grotta ATM con i reperti maya intatti, le isole autogovernate dei Guna a San Blas',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Antigua Guatemala', destinazioneSlug: 'antigua-guatemala' },
    { nome: 'Chichicastenango', destinazioneSlug: 'chichicastenango' },
    { nome: 'Lago Atitlán', destinazioneSlug: 'lago-atitlan' },
    { nome: 'Semuc Champey', destinazioneSlug: 'semuc-champey' },
    { nome: 'Tikal e Flores', destinazioneSlug: 'tikal-flores' },
    { nome: 'San Ignacio e il Cayo', destinazioneSlug: 'san-ignacio-cayo' },
    { nome: 'Placencia e Hopkins', destinazioneSlug: 'placencia-hopkins' },
    { nome: 'Caye Caulker', destinazioneSlug: 'caye-caulker' },
    { nome: 'Ambergris Caye', destinazioneSlug: 'ambergris-caye' },
    { nome: 'Panama City', destinazioneSlug: 'panama-city' },
    { nome: 'San Blas', destinazioneSlug: 'san-blas' },
    { nome: 'Boquete', destinazioneSlug: 'boquete' },
    { nome: 'Bocas del Toro', destinazioneSlug: 'bocas-del-toro' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Città del Guatemala e trasferimento ad Antigua', tratta: 'Città del Guatemala (GUA) → Antigua, taxi privato o shuttle, circa 1h', pernottamento: 'Antigua, centro storico', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'antigua-guatemala', immagine: '/images/viaggi/centro-america-itinerario/giorno-01-antigua-guatemala.jpg', imageAlt: 'Via acciottolata del centro di Antigua Guatemala con l\'arco giallo di Santa Catalina in fondo alla strada' },
    { titoloGiorno: 'Giorno 2 — Antigua Guatemala: arco di Santa Catalina e Cerro de la Cruz', pernottamento: 'Antigua, centro storico', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'antigua-guatemala', immagine: '/images/viaggi/centro-america-itinerario/giorno-02-antigua-guatemala.jpg', imageAlt: 'Vista dal Cerro de la Cruz su Antigua Guatemala con il vulcano Agua sullo sfondo' },
    { titoloGiorno: 'Giorno 3 — Salita al vulcano Acatenango', pernottamento: 'Campo in quota, vulcano Acatenango', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'trekking Acatenango indicativamente 60-120€ a persona, attrezzatura e guida incluse', destinazioneSlug: 'antigua-guatemala', immagine: '/images/viaggi/centro-america-itinerario/giorno-03-acatenango.jpg', imageAlt: 'Una cima vulcanica del Guatemala che emerge da una fitta coltre di nuvole (foto illustrativa)' },
    { titoloGiorno: 'Giorno 4 — Il Fuego in eruzione e la discesa dall\'Acatenango', pernottamento: 'Antigua, centro storico', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'antigua-guatemala', immagine: '/images/viaggi/centro-america-itinerario/giorno-04-fuego.jpg', imageAlt: 'Il vulcano Fuego in eruzione notturna, con lava incandescente e pennacchio di cenere illuminato dal bagliore' },
    { titoloGiorno: 'Giorno 5 — Chichicastenango e il lago Atitlán', tratta: 'Antigua → Chichicastenango (circa 3h, solo giovedì o domenica) → Panajachel, lago Atitlán (circa 1h30)', pernottamento: 'Panajachel, lago Atitlán', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'chichicastenango', immagine: '/images/viaggi/centro-america-itinerario/giorno-05-chichicastenango.jpg', imageAlt: 'Donne in abiti tradizionali maya al mercato di Chichicastenango, Guatemala, davanti a un comal per tortillas' },
    { titoloGiorno: 'Giorno 6 — Panajachel e il lago Atitlán', pernottamento: 'Panajachel, lago Atitlán', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'lago-atitlan', immagine: '/images/viaggi/centro-america-itinerario/giorno-06-panajachel.jpg', imageAlt: 'Tramonto sul lago Atitlán da Panajachel, con i vulcani Tolimán e Atitlán sullo sfondo' },
    { titoloGiorno: 'Giorno 7 — Il giro dei villaggi del lago Atitlán in lancha', pernottamento: 'Panajachel, lago Atitlán', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'lance pubbliche 10-25 GTQ a tratta', destinazioneSlug: 'lago-atitlan', immagine: '/images/viaggi/centro-america-itinerario/giorno-07-atitlan-lancha.jpg', imageAlt: 'Lance pubbliche ormeggiate sul lago Atitlán, con un villaggio maya sulla collina e le montagne sullo sfondo' },
    { titoloGiorno: 'Giorno 8 — Alba dall\'Indian Nose e Santiago Atitlán', pernottamento: 'Panajachel, lago Atitlán', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'lago-atitlan', immagine: '/images/viaggi/centro-america-itinerario/giorno-08-indian-nose.jpg', imageAlt: 'Il lago Atitlán visto da Santiago Atitlán, con moli e barche sull\'acqua' },
    { titoloGiorno: 'Giorno 9 — Verso Lanquín e Semuc Champey', tratta: 'Panajachel → Lanquín, shuttle turistico, indicativamente 7-9h', pernottamento: 'Lanquín', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'semuc-champey', immagine: '/images/viaggi/centro-america-itinerario/giorno-09-lanquin.jpg', imageAlt: 'La valle nebbiosa di Lanquín tra le colline verdi dell\'Alta Verapaz, Guatemala' },
    { titoloGiorno: 'Giorno 10 — Le piscine di Semuc Champey e le grotte di K\'anba', pernottamento: 'Lanquín', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'ingresso al parco circa 50 GTQ; tour combinato grotte + ingresso sui 150-250 GTQ', destinazioneSlug: 'semuc-champey', immagine: '/images/viaggi/centro-america-itinerario/giorno-10-semuc-champey.jpg', imageAlt: 'Vista dall\'alto delle piscine turchesi a gradoni di Semuc Champey immerse nella giungla, Guatemala' },
    { titoloGiorno: 'Giorno 11 — Trasferimento a Flores, sul lago Petén Itzá', tratta: 'Lanquín → Flores, shuttle turistico, indicativamente 9-12h', pernottamento: 'Isola di Flores, lago Petén Itzá', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'shuttle Lanquín-Flores indicativamente 35-45 USD a persona', destinazioneSlug: 'tikal-flores', immagine: '/images/viaggi/centro-america-itinerario/giorno-11-flores.jpg', imageAlt: 'L\'isola di Flores vista dal lago Petén Itzá, con le case colorate e la cattedrale sulla collina' },
    { titoloGiorno: 'Giorno 12 — Alba a Tikal dal Tempio IV', pernottamento: 'Isola di Flores, lago Petén Itzá', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'ingresso Tikal circa 150 GTQ + supplemento alba, totale indicativo 250 GTQ in contanti, guida inclusa nella fascia alba', destinazioneSlug: 'tikal-flores', immagine: '/images/viaggi/centro-america-itinerario/giorno-12-tikal.jpg', imageAlt: 'Le cime dei templi di Tikal che emergono dalla giungla del Petén, viste dal Tempio IV' },
    { titoloGiorno: 'Giorno 13 — La frontiera di Melchor de Mencos e l\'arrivo a San Ignacio', tratta: 'Flores → frontiera di Melchor de Mencos (circa 2h) → San Ignacio, Belize', pernottamento: 'San Ignacio, distretto del Cayo', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'san-ignacio-cayo', immagine: '/images/viaggi/centro-america-itinerario/giorno-13-san-ignacio.jpg', imageAlt: 'Il valico di frontiera pedonale tra Guatemala e Belize a Melchor de Mencos/Benque Viejo' },
    { titoloGiorno: 'Giorno 14 — La grotta ATM (Actun Tunichil Muknal)', pernottamento: 'San Ignacio, distretto del Cayo', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'tour ATM indicativamente 100-140 USD a persona, trasporto e guida inclusi', destinazioneSlug: 'san-ignacio-cayo', immagine: '/images/viaggi/centro-america-itinerario/giorno-14-atm-cave.jpg', imageAlt: 'Formazioni calcaree e stalagmiti riflesse nell\'acqua di una grotta del distretto del Cayo, Belize (foto illustrativa: l\'interno della grotta ATM non può essere fotografato)' },
    { titoloGiorno: 'Giorno 15 — Xunantunich e la Mountain Pine Ridge', pernottamento: 'San Ignacio, distretto del Cayo', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'ingresso Xunantunich circa 10 USD', destinazioneSlug: 'san-ignacio-cayo', immagine: '/images/viaggi/centro-america-itinerario/giorno-15-xunantunich.jpg', imageAlt: 'El Castillo, la piramide maya principale del sito archeologico di Xunantunich, Belize' },
    { titoloGiorno: 'Giorno 16 — Verso la costa sud: Placencia', tratta: 'San Ignacio → Placencia, lungo la Hummingbird e la Southern Highway, circa 4-5h', pernottamento: 'Placencia', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'placencia-hopkins', immagine: '/images/viaggi/centro-america-itinerario/giorno-16-placencia.jpg', imageAlt: 'Pergolato di legno su una spiaggia di sabbia bianca a Placencia, Belize, al tramonto' },
    { titoloGiorno: 'Giorno 17 — Placencia e la Placencia Sidewalk', pernottamento: 'Placencia', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'placencia-hopkins', immagine: '/images/viaggi/centro-america-itinerario/giorno-17-placencia.jpg', imageAlt: 'Palme e lettini da spiaggia sulla sabbia bianca di Placencia, Belize, con il mare turchese sullo sfondo' },
    { titoloGiorno: 'Giorno 18 — Hopkins e la cultura garifuna', tratta: 'Placencia → Hopkins, meno di 1h', pernottamento: 'Hopkins', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'placencia-hopkins', immagine: '/images/viaggi/centro-america-itinerario/giorno-18-hopkins.jpg', imageAlt: 'Casa tradizionale garifuna con tetto di palma a Hopkins, Belize, in riva al mare' },
    { titoloGiorno: 'Giorno 19 — Verso Belize City e Caye Caulker', tratta: 'Hopkins → Belize City (circa 3h) → Caye Caulker, water taxi (circa 45 min)', pernottamento: 'Caye Caulker', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'caye-caulker', immagine: '/images/viaggi/centro-america-itinerario/giorno-19-caye-caulker.jpg', imageAlt: 'Vista aerea di Caye Caulker, Belize, con The Split e le acque turchesi della barriera corallina' },
    { titoloGiorno: 'Giorno 20 — Caye Caulker: Hol Chan e Shark Ray Alley', pernottamento: 'Caye Caulker', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'tour snorkeling di mezza giornata 60-100 BZD più le tasse del parco marino', destinazioneSlug: 'caye-caulker', immagine: '/images/viaggi/centro-america-itinerario/giorno-20-hol-chan.jpg', imageAlt: 'Squali nutrice in acque basse e trasparenti tropicali (foto illustrativa, non scattata a Hol Chan)' },
    { titoloGiorno: 'Giorno 21 — Ambergris Caye e il Great Blue Hole', tratta: 'Caye Caulker → Ambergris Caye, barca', pernottamento: 'Ambergris Caye, San Pedro', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'immersione Blue Hole 300-400 USD a persona; volo panoramico un\'alternativa più economica', destinazioneSlug: 'ambergris-caye', immagine: '/images/viaggi/centro-america-itinerario/giorno-21-blue-hole.jpg', imageAlt: 'Vista aerea del Great Blue Hole al largo del Belize, il cerchio blu scuro perfetto circondato dalla barriera corallina' },
    { titoloGiorno: 'Giorno 22 — Ultimo giorno alle isole e trasferimento a Belize City', tratta: 'Ambergris Caye/San Pedro → Belize City, in vista del volo per Panama', pernottamento: 'Belize City', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'ambergris-caye', immagine: '/images/viaggi/centro-america-itinerario/giorno-22-belize-city.jpg', imageAlt: 'Il porto di Belize City al tramonto, con barche a vela ormeggiate e un cartello per i traghetti verso Caye Caulker e San Pedro' },
    { titoloGiorno: 'Giorno 23 — Il volo per Panama City', tratta: 'Belize City (BZE) → Panama City-Tocumen (PTY), volo diretto Copa Airlines, circa 2h30', pernottamento: 'Panama City, Casco Viejo', statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: 'volo Copa Airlines BZE-PTY indicativamente 165-580 USD a persona secondo la data, solo martedì e venerdì', destinazioneSlug: 'panama-city', immagine: '/images/viaggi/centro-america-itinerario/giorno-23-panama-city.jpg', imageAlt: 'Il Casco Viejo di Panama City di notte, con gli edifici coloniali illuminati e i grattacieli dello skyline sullo sfondo' },
    { titoloGiorno: 'Giorno 24 — Panama City: Casco Viejo e le chiuse di Miraflores', pernottamento: 'Panama City, Casco Viejo', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'ingresso a Miraflores circa 20 USD per gli stranieri', destinazioneSlug: 'panama-city', immagine: '/images/viaggi/centro-america-itinerario/giorno-24-miraflores.jpg', imageAlt: 'Una portacontainer in transito nelle chiuse di Miraflores, sul Canale di Panama' },
    { titoloGiorno: 'Giorno 25 — Verso San Blas: la traversata di Cartí', tratta: 'Panama City → Cartí, 4x4 (2h30-3h) → isole di San Blas, barca', pernottamento: 'Cabaña su un\'isola, San Blas (Guna Yala)', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'transfer 4x4 + barca 40-60 USD a tratta; tassa d\'ingresso Guna circa 20 USD a persona più 2-5 USD al porto; pacchetto cabaña con pasti 60-150 USD a persona per notte', destinazioneSlug: 'san-blas', immagine: '/images/viaggi/centro-america-itinerario/giorno-25-san-blas.jpg', imageAlt: 'Isolotto con palme delle isole di San Blas (Guna Yala), Panama' },
    { titoloGiorno: 'Giorno 26 — Giornata piena tra le isole di Guna Yala', pernottamento: 'Cabaña su un\'isola, San Blas (Guna Yala)', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'san-blas', immagine: '/images/viaggi/centro-america-itinerario/giorno-26-guna-yala.jpg', imageAlt: 'Isolotto con palme circondato dalla barriera corallina nella Comarca Guna Yala, Panama' },
    { titoloGiorno: 'Giorno 27 — Ritorno a Panama City e volo per David', tratta: 'San Blas → Panama City (4x4 + barca) → volo per David (circa 1h) → Boquete (40 min)', pernottamento: 'Boquete', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'boquete', immagine: '/images/viaggi/centro-america-itinerario/giorno-27-boquete.jpg', imageAlt: 'Vista aerea di Boquete, Panama, con il fiume che attraversa la valle tra le colline verdi di Chiriquí' },
    { titoloGiorno: 'Giorno 28 — Boquete: caffè e Sendero Los Quetzales', pernottamento: 'Boquete', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'tour del caffè 30-40 USD', destinazioneSlug: 'boquete', immagine: '/images/viaggi/centro-america-itinerario/giorno-28-boquete-caffe.jpg', imageAlt: 'Colline verdi degli altopiani di Boquete, Panama, viste da una finca di caffè' },
    { titoloGiorno: 'Giorno 29 — Alba sui due oceani dal Volcán Barú', pernottamento: 'Boquete', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'salita guidata al Barú indicativamente 50-90 USD a persona', destinazioneSlug: 'boquete', immagine: '/images/viaggi/centro-america-itinerario/giorno-29-volcan-baru.jpg', imageAlt: 'Alba dalla cima del Volcán Barú, Panama, con la valle di Chiriquí sotto le nuvole' },
    { titoloGiorno: 'Giorno 30 — Da Boquete a Bocas del Toro', tratta: 'Boquete → David → Almirante → Bocas Town, water taxi (circa 30 min)', pernottamento: 'Bocas Town, Isla Colón', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'bocas-del-toro', immagine: '/images/viaggi/centro-america-itinerario/giorno-30-bocas-del-toro.jpg', imageAlt: 'Il parco centrale di Bocas Town, Isla Colón, decorato con bandierine panamensi' },
    { titoloGiorno: 'Giorno 31 — Bocas del Toro: Cayo Zapatilla e Starfish Beach', pernottamento: 'Bocas Town, Isla Colón', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'tour in barca di giornata 25-40 USD a persona più le tasse del parco nazionale', destinazioneSlug: 'bocas-del-toro', immagine: '/images/viaggi/centro-america-itinerario/giorno-31-cayo-zapatillas.jpg', imageAlt: 'Spiaggia di sabbia bianca e palme su un isolotto dei Cayos Zapatillas, Bocas del Toro, Panama' },
    { titoloGiorno: 'Giorno 32 — Ultima mattina a Bocas Town e partenza', tratta: 'Bocas del Toro → Panama City-Tocumen (PTY), volo interno o via terra secondo i collegamenti', intensita: 'leggero', destinazioneSlug: 'bocas-del-toro', immagine: '/images/viaggi/centro-america-itinerario/giorno-32-bocas-town.jpg', imageAlt: 'Vista aerea di Bocas Town su Isla Colón, Bocas del Toro, Panama, con barche a vela ormeggiate nella baia' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Volo Belize City-Panama City', valore: 'Copa Airlines, unica compagnia sulla rotta diretta, indicativamente 165-580 USD a persona secondo la data (solo martedì e venerdì)' },
    { etichetta: 'Voli interni a Panama', valore: 'Panama City-David e, se scelto invece del percorso via terra, David-Bocas del Toro, con Air Panama' },
    { etichetta: 'Shuttle turistici in Guatemala', valore: 'indicativamente 15-30€ a tratta tra le tappe principali, di più sui trasferimenti più lunghi (Panajachel-Lanquín, Lanquín-Flores)' },
    { etichetta: 'Trasporti in Belize', valore: 'bus e water taxi economici; voli interni Tropic Air/Maya Island Air più cari ma risolutivi sulle lunghe distanze' },
    { etichetta: 'Guide obbligatorie', valore: 'Acatenango 60-120€; grotta ATM 100-140 USD; Volcán Barú 50-90 USD' },
    { etichetta: 'San Blas', valore: 'transfer 4x4 + barca 40-60 USD a tratta; tassa d\'ingresso Guna circa 20 USD; pacchetto cabaña con pasti 60-150 USD a persona per notte' },
    { etichetta: 'Immersioni/attività opzionali', valore: 'Great Blue Hole 300-400 USD; tour in barca a Bocas del Toro 25-40 USD' },
    { etichetta: 'Alloggi', valore: 'molto variabile: economico in Guatemala, più caro alle isole del Belize, nella media a Panama' },
    { etichetta: 'Pasti', valore: 'pochi euro/dollari nei comedor e mercati fuori da Belize; più caro sulle isole e nei ristoranti turistici' },
  ],
}
