import type { Esperienza } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Lapponia svedese: Capodanno sotto l'aurora"
// (src/content/viaggi/14-lapponia-svedese-abisko.md). Prezzi, orari e modalità
// di svolgimento sono stati integrati con ricerca (fonti: siti ufficiali degli
// operatori, Swedish Tourist Association/STF, LKAB) per dare a chi legge una
// guida utile e concreta, non solo un ricordo personale — prezzi e orari vanno
// comunque sempre riverificati prima di prenotare, cambiano stagione per stagione.

export const esperienzeSvezia: Esperienza[] = [
  {
    slug: 'aurora-sky-station',
    paeseSlug: 'svezia',
    destinazioneSlug: 'abisko',
    nome: 'Aurora Sky Station',
    localita: 'Abisko, monte Nuolja',
    cosE:
      'Una seggiovia che sale in circa 15-20 minuti sul monte Nuolja (900 m) fino a una stazione panoramica con ristorante, bar e torre di osservazione dedicata all\'aurora boreale. Abisko ha un microclima secco che riduce la copertura nuvolosa rispetto al resto della regione — il cosiddetto "buco blu" sopra la valle, generato dalle montagne circostanti che deviano le perturbazioni — rendendolo uno dei punti con le probabilità di aurora più alte al mondo.',
    percheFarla: 'È l\'esperienza-simbolo di Abisko: unisce il panorama, la possibilità di cenare in quota e le migliori probabilità della zona di vedere davvero l\'aurora, il tutto a pochi passi dallo STF Abisko Turiststation.',
    durata: 'la seggiovia resta aperta fino all\'1:00 in inverno; una visita "mordi e fuggi" dura un\'ora o due, ma si può restare tutta la sera',
    periodo: 'stagione invernale, indicativamente da metà settembre a metà aprile',
    costo:
      'Solo seggiovia: circa 350-450 SEK a persona (35-40€ circa), biglietto acquistabile in loco o online. Pacchetto "notte in quota" con guida: pernottamento in camerata con sacco a pelo, colazione, cena, tuta termica, sauna e seggiovia inclusi, circa 2.990 SEK a persona (270-310€ circa), disponibile solo il venerdì su prenotazione.',
    comePrenotare: 'Biglietto seggiovia acquistabile direttamente allo STF Abisko Turiststation o online sul sito di Visit Abisko/STF; il pacchetto con cena e pernottamento va prenotato con anticipo, i posti sono limitati.',
    cosaPortare: 'Strati pesanti nonostante il breve tragitto: in cima, in attesa dell\'aurora, si sta fermi all\'aperto anche a lungo. Guanti pesanti e un termos con qualcosa di caldo aiutano.',
    perChiEAdatta: 'Chiunque alloggi ad Abisko, nessuna difficoltà fisica: si sale in seggiovia, non a piedi.',
    miaEsperienza:
      'La prima sera ad Abisko, dopo il trasferimento in treno da Kiruna: seggiovia al buio, cena panoramica, e il cielo che verso Nuolja sembra davvero più pulito rispetto a quello visto altrove nel viaggio.',
    giudizio: 'imperdibile',
    alternative: [],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Stazione panoramica Aurora Sky Station illuminata sul monte Nuolja con aurora boreale sullo sfondo',
  },
  {
    slug: 'motoslitta-lago-ghiacciato',
    paeseSlug: 'svezia',
    destinazioneSlug: 'abisko',
    nome: 'Motoslitta sul lago ghiacciato',
    localita: 'Abisko, parco nazionale',
    cosE:
      'Un\'escursione sulla superficie ghiacciata di uno dei laghi del parco nazionale di Abisko. Ci sono due formule diverse offerte dagli operatori locali: guidata, in cui si viene trainati in una slitta agganciata alla motoslitta di una guida (circa 2 ore), oppure "self-drive", in cui si guida personalmente la propria motoslitta seguendo la guida in testa al gruppo (percorsi più lunghi, anche mezza giornata).',
    percheFarla: 'L\'attività più adrenalinica del soggiorno ad Abisko, e un modo diverso di attraversare il paesaggio artico rispetto al passo lento dell\'husky sledding.',
    durata: 'dalle 2 ore della versione guidata "in slitta trainata" fino a mezza giornata per i tour self-drive più lunghi',
    periodo: 'inverno, quando il lago è completamente ghiacciato, indicativamente dicembre-aprile',
    costo:
      'Da circa 100-110€ a persona per il tour guidato in slitta trainata di 2 ore; i tour self-drive con motoslitta propria costano di più (in genere 150-250€ a seconda della durata e se si guida in solitaria o in coppia sullo stesso mezzo).',
    comePrenotare: 'Tour organizzati da operatori locali (es. Activities in Abisko), prenotabili online con ritiro/punto d\'incontro in paese; per il self-drive è richiesta la patente.',
    cosaPortare: 'Tuta termica e casco solitamente forniti dall\'operatore — da confermare in fase di prenotazione — guanti pesanti propri sempre consigliati.',
    perChiEAdatta: 'La versione guidata (in slitta trainata) non richiede esperienza; la versione self-drive richiede la patente e un minimo di attenzione, ma nessuna esperienza pregressa con le motoslitte.',
    miaEsperienza:
      'Il giorno più adrenalinico di Abisko: velocità sul ghiaccio e un silenzio surreale ogni volta che la motoslitta si fermava per godersi il panorama.',
    giudizio: 'imperdibile',
    alternative: [],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Motoslitta che attraversa un lago ghiacciato circondato da montagne innevate in Lapponia',
  },
  {
    slug: 'husky-sledding-caccia-aurora',
    paeseSlug: 'svezia',
    destinazioneSlug: 'abisko',
    nome: 'Husky sledding con caccia all\'aurora',
    localita: 'Abisko, parco nazionale',
    cosE:
      'Un\'escursione serale in slitta trainata da husky nei dintorni di Abisko, organizzata per coincidere con le ore più probabili di osservazione dell\'aurora. Come per la motoslitta, esistono tour "passeggeri" (si viene portati da un musher) e tour "self-drive" in cui si guida personalmente la slitta, spesso in coppia con cambio di ruolo a metà percorso.',
    percheFarla: 'La serata più suggestiva del viaggio: il movimento della slitta, il fiato dei cani nell\'aria gelida, e il cielo che — se le condizioni sono buone — si accende sopra la testa.',
    durata: 'un\'escursione base dura circa 1-2 ore di guida vera e propria; con il ritiro/riconsegna in paese la serata occupa 3-4 ore',
    periodo: 'stagione invernale, indicativamente da dicembre ad aprile',
    costo:
      '240€ a persona per il tour serale con caccia all\'aurora (dalla guida ai costi del preventivo originale del viaggio); le versioni più brevi/diurne ("panorama husky hike") partono da circa 70€, quelle self-drive più lunghe possono superare i 250€.',
    comePrenotare: 'Tour organizzato con guida, ritiro diretto dallo STF Abisko Turiststation con circa 45 minuti di anticipo sulla partenza; meglio prenotare con un minimo di anticipo nel periodo di Capodanno, quando la richiesta è più alta.',
    cosaPortare: 'Strati pesanti, guanti e sottoguanti — nella versione "passeggero" si resta fermi e immobili sulla slitta per buona parte del tempo, il freddo si sente più che nelle attività "attive" come il self-drive.',
    perChiEAdatta: 'La versione con musher è adatta a chiunque, nessuna difficoltà fisica; la versione self-drive richiede un minimo di equilibrio ma nessuna esperienza pregressa.',
    miaEsperienza:
      'Il silenzio prima della partenza, rotto solo dall\'agitazione dei cani impazienti di correre, e poi la corsa vera e propria nel buio quasi totale — con l\'aurora che quella sera si è fatta vedere, anche se non a lungo.',
    giudizio: 'imperdibile',
    alternative: [],
    tripSlugs: ['lapponia-svedese-abisko'],
    imageAlt: 'Slitta trainata da husky sulla neve al crepuscolo con aurora boreale visibile in cielo',
  },
  {
    slug: 'icehotel-jukkasjarvi',
    paeseSlug: 'svezia',
    destinazioneSlug: 'kiruna',
    nome: 'ICEHOTEL di Jukkasjärvi',
    localita: 'Jukkasjärvi, a circa 20 minuti da Kiruna',
    cosE:
      'Il più famoso hotel di ghiaccio al mondo, ricostruito ogni inverno con blocchi di ghiaccio del fiume Torne: camere e suite scolpite da artisti diversi ogni anno (l\'ICEHOTEL "Art Suite"), oltre a una parte "warm" riscaldata aperta tutto l\'anno con bar di ghiaccio, ristorante e negozio. Dal 2016 esiste anche l\'ICEHOTEL 365, una versione permanente refrigerata artificialmente e visitabile anche d\'estate.',
    percheFarla: 'È una delle attrazioni più conosciute di tutta la Lapponia svedese, a pochi minuti da Kiruna — non l\'abbiamo fatta in questo viaggio, ma vale la pena saperlo per organizzarne uno futuro, anche solo per la visita di poche ore.',
    durata: 'la sola visita si esaurisce in un\'ora o due; chi pernotta ha accesso gratuito e illimitato alla struttura di ghiaccio per tutta la durata del soggiorno',
    periodo: 'la versione stagionale di ghiaccio è aperta indicativamente da dicembre ad aprile; la versione permanente ICEHOTEL 365 tutto l\'anno',
    costo:
      'Ingresso giornaliero (solo visita): circa 349 SEK adulti (31€ circa), 249 SEK studenti/over 65 (22€ circa), 125 SEK bambini 7-15 anni (11€ circa), gratis sotto i 7. Pernottamento in una camera di ghiaccio "cold": circa 3.995 SEK a notte per 2 persone (350€ circa); una suite d\'artista: circa 4.995 SEK a notte per 2 persone (440€ circa). Chi dorme in una camera fredda ha comunque diritto, la mattina dopo, a un letto in una camera calda per il resto della notte, incluso nel prezzo.',
    comePrenotare: 'Biglietto d\'ingresso acquistabile direttamente in loco, non serve prenotazione; il pernottamento invece va prenotato con largo anticipo sul sito ufficiale, soprattutto per il periodo di Capodanno.',
    cosaPortare: 'Per chi pernotta: un sacco a pelo termico viene fornito dalla struttura, ma conviene comunque un cambio caldo per la mattina.',
    perChiEAdatta: 'Chi vuole un\'esperienza estrema anche solo per una notte, o semplicemente una visita guidata per chi preferisce dormire altrove (ad esempio a Kiruna, come nel nostro caso).',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: [],
    imageAlt: 'Camera scolpita nel ghiaccio con letto di ghiaccio illuminato all\'ICEHOTEL di Jukkasjärvi',
  },
  {
    slug: 'miniera-lkab-kiruna',
    paeseSlug: 'svezia',
    destinazioneSlug: 'kiruna',
    nome: 'Visita alla miniera LKAB',
    localita: 'Kiruna, LKAB Visitor Centre',
    cosE:
      'Un tour guidato di 3 ore nella più grande miniera di ferro sotterranea al mondo, scendendo fino a 540 metri sotto la superficie in un museo/centro visitatori di 20.000 m². È anche l\'occasione per capire perché l\'intera città di Kiruna si sta spostando: l\'espansione della miniera ha reso instabile il terreno sotto il centro storico.',
    percheFarla: 'Il modo migliore per capire cosa sta letteralmente ridisegnando Kiruna, e un\'esperienza diversa dalle attività naturalistiche del resto del viaggio.',
    durata: 'circa 3 ore, incluso il trasferimento',
    periodo: 'tutto l\'anno, ma solo in giorni fissi della settimana (martedì, giovedì, venerdì, sabato — da riverificare stagione per stagione)',
    costo: 'circa 590 SEK adulti (52€ circa), 490 SEK studenti/over 65 (43€ circa), 190 SEK bambini 6-15 anni (17€ circa). Prezzo comprensivo di transfer, guida e pausa caffè.',
    comePrenotare: 'Prenotazione online obbligatoria tramite Kiruna Lappland, i posti sono limitati.',
    cosaPortare: 'Abbigliamento pesante anche sottoterra: la temperatura in miniera si aggira sui 10°C.',
    perChiEAdatta: 'Età minima 6 anni e altezza minima 110 cm per motivi di sicurezza; non fatta in questo viaggio.',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: [],
    imageAlt: 'Galleria sotterranea illuminata della miniera di ferro LKAB a Kiruna',
  },
]
