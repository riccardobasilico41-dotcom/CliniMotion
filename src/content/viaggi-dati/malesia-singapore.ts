import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Malesia e Singapore in 14 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/19-malesia-singapore.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const malesiaSingaporeMeta: TripMeta = {
  tripSlug: 'malesia-singapore',
  paeseSlug: 'malesia',
  ritmo: 'Rilassato per gli standard del sud-est asiatico: sei basi in quattordici giorni, con trasferimenti brevi e mezzi comodi',
  trasporti: 'Autobus interurbani malesi, barca lunga sul fiume per Taman Negara, bus di frontiera per Singapore, metropolitana in città',
  stile: ['gastronomia', 'città coloniali', 'giungla'],
  adattoA: [
    'chi vuole il sud-est asiatico senza la fatica organizzativa: strade buone, inglese ovunque, prezzi bassi',
    'chi viaggia anche per mangiare, che qui è la ragione principale',
    'chi preferisce poche basi e trasferimenti corti a un itinerario a tappe continue',
  ],
  puntiForti: [
    'Il cibo di strada di George Town, che da solo giustifica il viaggio',
    'La night walk a Taman Negara, in una foresta pluviale di centotrenta milioni di anni',
    'I centri hawker di Singapore, dove si mangia benissimo per tre euro nella città più cara della regione',
  ],
  criticita: [
    'I monsoni delle due coste malesi sono opposti: questo itinerario è per la costa ovest (dicembre-marzo), mentre le Perhentian chiudono quasi del tutto da novembre a febbraio',
    'MDAC e SG Arrival Card sono obbligatorie e vanno compilate entro i tre giorni precedenti: la seconda serve anche arrivando via terra in autobus',
    'Il contante resta indispensabile in Malesia per food court e banchi di strada, cioè per la parte migliore del viaggio',
    'Le prese sono di tipo G britannico: l\'adattatore europeo non entra',
    'A Singapore gli alloggi costano tre volte il resto dell\'itinerario',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con autobus interurbani e prenotazioni fatte via via',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'L\'assam laksa a George Town, la night walk a Taman Negara, lo spettacolo ai Supertree di Singapore',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Kuala Lumpur', destinazioneSlug: 'kuala-lumpur' },
    { nome: 'Taman Negara', destinazioneSlug: 'taman-negara' },
    { nome: 'Cameron Highlands', destinazioneSlug: 'cameron-highlands' },
    { nome: 'Penang', destinazioneSlug: 'penang' },
    { nome: 'Malacca', destinazioneSlug: 'malacca' },
    { nome: 'Singapore', destinazioneSlug: 'quartieri-etnici' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Kuala Lumpur', tratta: 'Arrivo su KUL, KLIA Ekspres in centro (28 min)', pernottamento: 'Kuala Lumpur, Bukit Bintang o Chinatown', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'kuala-lumpur', immagine: '/images/viaggi/malesia-singapore/giorno-1-merdeka-square.jpg', imageAlt: "Il colonnato e la torre dell'orologio del Sultan Abdul Samad Building su Merdeka Square a Kuala Lumpur" },
    { titoloGiorno: 'Giorno 2 — Batu Caves e i quartieri', pernottamento: 'Kuala Lumpur, Bukit Bintang o Chinatown', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Batu Caves gratuito; Museo delle Arti Islamiche circa 20 ringgit', destinazioneSlug: 'kuala-lumpur', immagine: '/images/viaggi/malesia-singapore/giorno-2-batu-caves.jpg', imageAlt: "La statua dorata del dio Murugan e la scalinata colorata di 272 gradini a Batu Caves" },
    { titoloGiorno: 'Giorno 3 — Verso Taman Negara', tratta: 'KL → Kuala Tembeling in minibus, poi 2-3h di barca sul fiume', pernottamento: 'Kuala Tahan', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'taman-negara', immagine: '/images/viaggi/malesia-singapore/giorno-3-fiume-taman-negara.jpg', imageAlt: 'Una barca coperta risale un fiume della giungla malese tra le palme, verso Taman Negara' },
    { titoloGiorno: 'Giorno 4 — La foresta di centotrenta milioni di anni', pernottamento: 'Kuala Tahan', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'canopy walkway pochi ringgit; night walk guidata 50-150', destinazioneSlug: 'taman-negara', immagine: '/images/viaggi/malesia-singapore/giorno-4-canopy-walkway.jpg', imageAlt: 'Un escursionista attraversa il canopy walkway sospeso tra gli alberi della foresta pluviale di Taman Negara' },
    { titoloGiorno: 'Giorno 5 — Verso le Cameron Highlands', tratta: 'Taman Negara → Tanah Rata, con strada di montagna a tornanti', pernottamento: 'Tanah Rata', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'cameron-highlands', immagine: '/images/viaggi/malesia-singapore/giorno-5-cameron-highlands.jpg', imageAlt: 'Le colline verdi terrazzate delle Cameron Highlands, con le piantagioni che seguono il profilo dei rilievi' },
    { titoloGiorno: 'Giorno 6 — Piantagioni di tè e mossy forest', pernottamento: 'Tanah Rata', statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: 'tour di mezza giornata 40-60 ringgit', destinazioneSlug: 'cameron-highlands', immagine: '/images/viaggi/malesia-singapore/giorno-6-boh-tea-estate.jpg', imageAlt: 'Le file di arbusti di tè della piantagione BOH Sungei Palas avvolte dalla nebbia mattutina' },
    { titoloGiorno: 'Giorno 7 — Verso Penang', tratta: 'Cameron Highlands → George Town', pernottamento: 'George Town, dentro il perimetro UNESCO', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'penang', immagine: '/images/viaggi/malesia-singapore/giorno-7-verso-penang.jpg', imageAlt: 'Il primo profilo di George Town e della torre KOMTAR visto dal mare in avvicinamento a Penang' },
    { titoloGiorno: 'Giorno 8 — George Town a piedi', pernottamento: 'George Town, dentro il perimetro UNESCO', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'Penang Hill circa 30 ringgit A/R; centro storico gratuito', destinazioneSlug: 'penang', immagine: '/images/viaggi/malesia-singapore/giorno-8-george-town-mural.jpg', imageAlt: 'Il celebre murale "Little Children on a Bicycle" con la bicicletta vera integrata nel muro, a George Town' },
    { titoloGiorno: 'Giorno 9 — Penang: la giornata del cibo', pernottamento: 'George Town, dentro il perimetro UNESCO', statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: '5-15 ringgit a piatto ai banchi', destinazioneSlug: 'penang', immagine: '/images/viaggi/malesia-singapore/giorno-9-hawker-stall.jpg', imageAlt: 'Un banco di street food a Georgetown prepara il char koay kak sulla piastra tra il fumo della cottura' },
    { titoloGiorno: 'Giorno 10 — Verso Malacca', tratta: 'Penang → Malacca, volo su KL più bus oppure bus diretto', pernottamento: 'Malacca, centro storico', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'malacca', immagine: '/images/viaggi/malesia-singapore/giorno-10-fiume-malacca.jpg', imageAlt: 'Le case colorate affacciate sul fiume Malacca, viste da una barca durante la crociera fluviale' },
    { titoloGiorno: 'Giorno 11 — Malacca e la cucina nyonya', pernottamento: 'Malacca, centro storico', statoPernottamento: 'da-confermare', intensita: 'leggero', costiNoti: 'Baba & Nyonya Heritage Museum circa 25 ringgit', destinazioneSlug: 'malacca', immagine: '/images/viaggi/malesia-singapore/giorno-11-stadthuys-malacca.jpg', imageAlt: 'La torre dell\'orologio rossa dello Stadthuys coloniale olandese sulla Dutch Square di Malacca' },
    { titoloGiorno: 'Giorno 12 — Verso Singapore', tratta: 'Malacca → Singapore in autobus (4-5h, frontiera compresa)', pernottamento: 'Singapore, Chinatown o Bugis', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'quartieri-etnici', immagine: '/images/viaggi/malesia-singapore/giorno-12-skyline-singapore.jpg', imageAlt: 'Lo skyline dei grattacieli del distretto finanziario di Singapore illuminato di notte, visto da Marina Bay' },
    { titoloGiorno: 'Giorno 13 — Singapore: i quartieri e la baia', pernottamento: 'Singapore, Chinatown o Bugis', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'quartieri e Gardens gratuiti; serre 30-50 SGD', destinazioneSlug: 'marina-bay', immagine: '/images/viaggi/malesia-singapore/giorno-13-mbs-supertree.jpg', imageAlt: 'Il Marina Bay Sands e i Supertree di Gardens by the Bay stagliati contro il cielo al tramonto' },
    { titoloGiorno: 'Giorno 14 — La Singapore verde e partenza', tratta: 'Singapore → Changi in MRT', intensita: 'leggero', costiNoti: 'Botanic Gardens e MacRitchie gratuiti', destinazioneSlug: 'natura-singapore', immagine: '/images/viaggi/malesia-singapore/giorno-14-cloud-forest.jpg', imageAlt: "La montagna artificiale ricoperta di vegetazione all'interno della serra Cloud Forest di Gardens by the Bay" },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Trasporti interni in Malesia', valore: 'autobus interurbani pochi euro a tratta; eventuale volo interno molto economico' },
    { etichetta: 'Bus Malacca-Singapore', valore: 'pochi euro, 4-5 ore con la frontiera' },
    { etichetta: 'Alloggi in Malesia', valore: '30-50€ a notte per un buon livello' },
    { etichetta: 'Alloggi a Singapore', valore: '100-180€ a notte: la voce che ribalta il budget' },
    { etichetta: 'Pasti', valore: '2-4€ ai food court malesi, 3-6€ nei centri hawker di Singapore' },
  ],
}
