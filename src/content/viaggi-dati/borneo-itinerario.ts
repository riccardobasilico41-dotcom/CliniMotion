import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Borneo in 12 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/20-borneo-itinerario.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const borneoItinerarioMeta: TripMeta = {
  tripSlug: 'borneo-itinerario',
  paeseSlug: 'borneo',
  ritmo: 'Impegnativo: una vetta oltre i 4.000 metri, trasferimenti lunghi su strade lente e sveglie prima dell\'alba quasi ogni giorno',
  trasporti: 'Volo da Kuala Lumpur, trasferimenti su strada con pacchetti organizzati, barche sul fiume e per le isole',
  stile: ['fauna selvatica', 'trekking', 'diving'],
  adattoA: [
    'chi viene per la fauna e accetta che nessun avvistamento sia garantito',
    'chi prenota con mesi di anticipo e non improvvisa',
    'subacquei brevettati, per la parte di Sipadan',
  ],
  puntiForti: [
    'L\'alba dai 4.095 metri del Monte Kinabalu, dopo una partenza notturna sul granito',
    'Le crociere all\'alba sul Kinabatangan, con il miglior rapporto tra avvistamenti e costo della regione',
    'Sipadan, che è uno dei pochi posti la cui reputazione da "migliore del mondo" regge alla prova',
  ],
  criticita: [
    'Tutto è contingentato e va prenotato con mesi di anticipo: poco più di 160 permessi al giorno per il Kinabalu, poco più di 250 per Sipadan',
    'I permessi per Sipadan non si rilasciano ai privati: li assegna Sabah Parks agli operatori, che li distribuiscono a rotazione premiando i soggiorni lunghi',
    'Sabah e Sarawak hanno immigrazione propria: si passa un controllo passaporti anche arrivando dalla penisola',
    'Fuori dalle città il contante è obbligatorio e gli ATM sono rari e inaffidabili',
    'Qui la malaria va valutata con un medico, a differenza della penisola, e servono calze antisanguisughe per la foresta',
    'È la parte più cara di qualsiasi viaggio in Malesia: lodge a pacchetto, permessi, voli interni',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con lodge, permessi e trasferimenti prenotati con mesi di anticipo',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'L\'alba in vetta al Kinabalu, l\'uscita all\'alba sul Kinabatangan, la parete di Sipadan',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Kota Kinabalu', destinazioneSlug: 'kota-kinabalu' },
    { nome: 'Kinabalu Park', destinazioneSlug: 'kota-kinabalu' },
    { nome: 'Sepilok e Sandakan', destinazioneSlug: 'sepilok-sandakan' },
    { nome: 'Fiume Kinabatangan', destinazioneSlug: 'kinabatangan' },
    { nome: 'Semporna e Sipadan', destinazioneSlug: 'semporna-sipadan' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Kota Kinabalu', tratta: 'Volo da Kuala Lumpur (2h30), controllo passaporti del Sabah', pernottamento: 'Kota Kinabalu, lungomare', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'kota-kinabalu', immagine: '/images/viaggi/borneo-itinerario/giorno-1-kota-kinabalu.jpg', imageAlt: 'Vista aerea di Kota Kinabalu, con il centro città, il porto e le isole al largo' },
    { titoloGiorno: 'Giorno 2 — Verso il Kinabalu Park', tratta: 'Kota Kinabalu → Kundasang (circa 2h)', pernottamento: 'Kundasang o dentro il parco', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'kota-kinabalu', immagine: '/images/viaggi/borneo-itinerario/giorno-2-kinabalu-park.jpg', imageAlt: "La foresta pluviale nebulosa del Kinabalu Park, con felci arboree e tronchi avvolti nella foschia" },
    { titoloGiorno: 'Giorno 3 — Kinabalu, primo giorno', tratta: 'Timpohon Gate (1.866 m) → Laban Rata (3.270 m), 6 km di gradini', pernottamento: 'Rifugio di Laban Rata', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'permesso, guida obbligatoria e notte in rifugio a pacchetto', destinazioneSlug: 'kota-kinabalu', immagine: '/images/viaggi/borneo-itinerario/giorno-3-monte-kinabalu.jpg', imageAlt: 'Il massiccio granitico del Monte Kinabalu visto dalla valle, con le nuvole che avvolgono i fianchi della montagna' },
    { titoloGiorno: 'Giorno 4 — Vetta all\'alba e discesa', tratta: 'Laban Rata → vetta (4.095 m) → discesa completa → Sandakan', pernottamento: 'Sandakan o Sepilok', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'kota-kinabalu', immagine: '/images/viaggi/borneo-itinerario/giorno-4-vetta-alba.jpg', imageAlt: "L'alba vista dal plateau granitico in vetta al Monte Kinabalu, con gli escursionisti sulle rocce e il mare di nuvole all'orizzonte" },
    { titoloGiorno: 'Giorno 5 — Sepilok', pernottamento: 'Sepilok, lodge nella foresta', statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: 'Sepilok circa 30 ringgit, sun bear centre circa 30, RDC circa 15', destinazioneSlug: 'sepilok-sandakan', immagine: '/images/viaggi/borneo-itinerario/giorno-5-sepilok-orangutan.jpg', imageAlt: 'Due oranghi al Sepilok Orangutan Rehabilitation Centre, ripresi da vicino mentre si nutrono' },
    { titoloGiorno: 'Giorno 6 — Sandakan e la memoria', tratta: 'Sandakan → Sukau/Bilit (circa 2h), poi barca al lodge', pernottamento: 'Lodge sul Kinabatangan', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'kinabatangan', immagine: '/images/viaggi/borneo-itinerario/giorno-6-sandakan-memorial.jpg', imageAlt: 'La lapide del Sandakan Memorial Park, con le corone di fiori deposte in ricordo delle marce della morte della Seconda guerra mondiale' },
    { titoloGiorno: 'Giorno 7 — Kinabatangan', pernottamento: 'Lodge sul Kinabatangan', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'pacchetto da circa 100€ a notte con pensione completa e uscite incluse', destinazioneSlug: 'kinabatangan', immagine: '/images/viaggi/borneo-itinerario/giorno-7-kinabatangan-proboscide.jpg', imageAlt: "Una scimmia proboscide su un albero lungo il fiume Kinabatangan" },
    { titoloGiorno: 'Giorno 8 — Kinabatangan e verso Semporna', tratta: 'Kinabatangan → Semporna, poi barca per Mabul (45 min)', pernottamento: 'Mabul', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'semporna-sipadan', immagine: '/images/viaggi/borneo-itinerario/giorno-8-kinabatangan-barca.jpg', imageAlt: "La prua di una barca che risale il fiume Kinabatangan tra la foschia mattutina e la foresta sulle rive" },
    { titoloGiorno: 'Giorno 9 — Mabul: muck diving', pernottamento: 'Mabul', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'semporna-sipadan', immagine: '/images/viaggi/borneo-itinerario/giorno-9-mabul-villaggio.jpg', imageAlt: 'Il villaggio di palafitte Bajau sulla spiaggia di Mabul, con le barche a riva e l\'acqua turchese in primo piano' },
    { titoloGiorno: 'Giorno 10 — Sipadan', pernottamento: 'Mabul', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'permesso a parte, tre immersioni sull\'isola nella stessa giornata', destinazioneSlug: 'semporna-sipadan', immagine: '/images/viaggi/borneo-itinerario/giorno-10-sipadan-tartaruga.jpg', imageAlt: 'Una tartaruga verde appoggiata sulla barriera corallina di Sipadan, circondata da pesci' },
    { titoloGiorno: 'Giorno 11 — Mabul o Bohey Dulang', pernottamento: 'Mabul o Semporna', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'semporna-sipadan', immagine: '/images/viaggi/borneo-itinerario/giorno-11-bohey-dulang.jpg', imageAlt: 'La baia craterica di Bohey Dulang vista dall\'alto, con la barriera corallina turchese e le isole del Tun Sakaran Marine Park sullo sfondo' },
    { titoloGiorno: 'Giorno 12 — Tawau e rientro', tratta: 'Semporna → Tawau (1h30), volo di rientro', intensita: 'leggero', destinazioneSlug: 'semporna-sipadan', immagine: '/images/viaggi/borneo-itinerario/giorno-12-tawau.jpg', imageAlt: 'La facciata del mercato Pasar Tanjung Tawau nel centro città, ultima tappa prima del volo di rientro' },
  ],
  budget: [
    { etichetta: 'Volo Kuala Lumpur-Kota Kinabalu', valore: 'economico, decine di collegamenti al giorno' },
    { etichetta: 'Salita al Monte Kinabalu', valore: 'permesso, guida obbligatoria, rifugio e trasferimenti a pacchetto: la voce singola più alta' },
    { etichetta: 'Lodge sul Kinabatangan', valore: 'da circa 100€ a notte con pensione completa e uscite in barca' },
    { etichetta: 'Pacchetto diving a Mabul', valore: 'più notti con pensione completa; permesso per Sipadan a parte' },
    { etichetta: 'Ingressi', valore: 'Sepilok ~30 ringgit, sun bear ~30, Rainforest Discovery Centre ~15' },
    { etichetta: 'Contanti', valore: 'da prelevare a Kota Kinabalu e Sandakan: fuori dalle città gli ATM sono rari' },
  ],
}
