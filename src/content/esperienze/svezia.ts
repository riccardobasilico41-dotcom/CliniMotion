import type { Esperienza } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Lapponia svedese: Capodanno sotto l'aurora"
// (src/content/viaggi/14-lapponia-svedese-abisko.md). Prezzi, orari e modalità
// di svolgimento sono stati integrati con ricerca (fonti: siti ufficiali degli
// operatori, Swedish Tourist Association/STF, LKAB) per dare a chi legge una
// guida utile e concreta, non solo un ricordo personale — prezzi e orari vanno
// comunque sempre riverificati prima di prenotare, cambiano stagione per stagione.
//
// Le quattro esperienze di Stoccolma in fondo al file (Vasamuseet, Gamla Stan,
// ABBA Museum, arcipelago) appartengono al nuovo itinerario "Capitali
// nordiche" (src/content/viaggi/60-capitali-nordiche.md) e non al viaggio in
// Lapponia: nessuna è stata provata di persona, giudizio resta 'da-verificare'
// su tutte, coerente con destinazioni/svezia.ts.

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
  {
    slug: 'vasamuseet-stoccolma',
    paeseSlug: 'svezia',
    destinazioneSlug: 'stoccolma',
    nome: 'Vasamuseet (Museo Vasa)',
    localita: 'Djurgården, Stoccolma',
    cosE:
      'Il museo che custodisce il Vasa, una nave da guerra reale svedese affondata nel porto di Stoccolma nel suo viaggio inaugurale nel 1628, dopo aver navigato meno di 1.300 metri, e recuperata quasi completamente intatta nel 1961 dal fondo del porto. È oggi la nave del XVII secolo meglio conservata al mondo, esposta intera all\'interno di un edificio costruito apposta intorno allo scafo.',
    percheFarla:
      'Perché non è un semplice museo navale: è un disastro navale del Seicento conservato quasi come si fosse fermato ieri, con oltre 95% del materiale originale, e restituisce un colpo d\'occhio che nessuna foto rende davvero.',
    durata: 'indicativamente 1,5-2 ore per una visita con calma, incluso il film introduttivo',
    periodo: 'tutto l\'anno, museo al coperto',
    costo: 'da 195 SEK (gennaio-aprile e ottobre-dicembre) a 240 SEK (maggio-settembre) per adulti; gratuito sotto i 18 anni',
    comePrenotare: 'Biglietto acquistabile online in anticipo (consigliato in alta stagione) o direttamente in loco',
    cosaPortare: 'Nulla di particolare, museo al coperto',
    perChiEAdatta: 'Chiunque, nessuna difficoltà; tra le attrazioni più visitate di tutta la Svezia',
    giudizio: 'da-verificare',
    alternative: ['Il biglietto combinato con il Vrak Museum of Wrecks, dedicato ad altri relitti del Mar Baltico, valido 72 ore'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'La prua scolpita della nave da guerra Vasa del XVII secolo esposta al Vasamuseet di Stoccolma',
  },
  {
    slug: 'gamla-stan-passeggiata',
    paeseSlug: 'svezia',
    destinazioneSlug: 'stoccolma',
    nome: 'Passeggiata a Gamla Stan',
    localita: 'Gamla Stan, centro storico di Stoccolma',
    cosE:
      'Una passeggiata a piedi nel centro storico medievale di Stoccolma, costruito su una piccola isola propria: vicoli stretti acciottolati, case color pastello, la piazza di Stortorget (la più antica della città, teatro del "Bagno di sangue di Stoccolma" del 1520), il Palazzo Reale con il cambio della guardia e la cattedrale di Storkyrkan.',
    percheFarla:
      'Perché è il nucleo originario di Stoccolma, fondata qui nel 1252, e concentra in un\'area piccola e percorribile in poche ore gran parte della storia della città.',
    durata: 'mezza giornata per un giro con calma, incluse soste per caffè',
    periodo: 'tutto l\'anno, più piacevole da aprile a settembre',
    costo: 'gratuito camminare; il Palazzo Reale (appartamenti di stato) ha un ingresso a pagamento separato',
    comePrenotare: 'Nessuna prenotazione necessaria per la passeggiata; il cambio della guardia ha orari fissi da verificare in loco o online',
    cosaPortare: 'Scarpe comode: i ciottoli di Gamla Stan non perdonano tacchi o suole sottili',
    perChiEAdatta: 'Chiunque, nessuna difficoltà fisica particolare',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Vicolo acciottolato con case color pastello nel centro storico di Gamla Stan, Stoccolma',
  },
  {
    slug: 'abba-museum-stoccolma',
    paeseSlug: 'svezia',
    destinazioneSlug: 'stoccolma',
    nome: 'ABBA The Museum',
    localita: 'Djurgården, Stoccolma',
    cosE:
      'Un museo interattivo dedicato agli ABBA, il gruppo pop svedese più famoso al mondo: costumi di scena originali, strumenti, la ricostruzione dello studio di registrazione Polar Music, e stanze interattive dove ci si può "esibire" virtualmente insieme agli ologrammi della band.',
    percheFarla:
      'Perché è uno dei musei musicali più curati e divertenti d\'Europa, pensato per essere vissuto più che osservato, e perché racconta un pezzo di cultura pop svedese esportata in tutto il mondo.',
    durata: 'circa 1,5-2 ore',
    periodo: 'tutto l\'anno, museo al coperto',
    costo: 'adulti 269-349 SEK secondo la data (prezzo dinamico), bambini 7-15 anni 129-169 SEK, gratuito sotto i 7',
    comePrenotare: 'Biglietto con fascia oraria d\'ingresso, da prenotare online in anticipo: gli slot più richiesti si esauriscono, specie nei weekend',
    cosaPortare: 'Nulla di particolare',
    perChiEAdatta: 'Chiunque, anche senza essere fan sfegatati degli ABBA; particolarmente indicato per famiglie grazie alla componente interattiva',
    giudizio: 'da-verificare',
    alternative: [],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Costumi di scena originali degli ABBA esposti all\'ABBA The Museum di Stoccolma',
  },
  {
    slug: 'arcipelago-stoccolma-in-barca',
    paeseSlug: 'svezia',
    destinazioneSlug: 'stoccolma',
    nome: 'Gita in barca nell\'arcipelago di Stoccolma',
    localita: 'Stockholms skärgård, a est di Stoccolma',
    cosE:
      'Un\'uscita in barca — guidata su battello turistico o in autonomia con i traghetti pubblici Waxholmsbolaget — tra le oltre 30.000 isole e isolotti dell\'arcipelago di Stoccolma, che si estende verso est fino al Mar Baltico. Le formule guidate più comuni toccano una o due isole in mezza giornata; per chi ha più tempo esistono uscite di giornata intera o soggiorni di una notte su un\'isola.',
    percheFarla:
      'Perché l\'arcipelago è la ragione per cui molti svedesi considerano Stoccolma una città "sull\'acqua" più che una città e basta: un\'altra faccia della capitale rispetto al centro storico, fatta di casette rosse di legno, pinete e acqua bassa e trasparente.',
    durata: 'da 2-2,5 ore per un\'uscita guidata classica a una giornata intera per chi vuole toccare più isole',
    periodo: 'maggio-settembre, quando la maggior parte delle linee turistiche e dei collegamenti verso le isole minori è attiva; d\'inverno il servizio si riduce parecchio',
    costo: 'da circa 375 SEK (35€ circa) per un\'uscita guidata di 2-2,5 ore; i traghetti pubblici Waxholmsbolaget sono più economici ma richiedono organizzarsi da soli l\'itinerario',
    comePrenotare: 'Tour guidati prenotabili online (es. Strömma) con partenza dal centro; i traghetti pubblici si prendono direttamente al molo di Strandvägen o Nybroplan, biglietto acquistabile in loco o via app',
    cosaPortare: 'Una giacca a vento anche d\'estate: il vento in mare aperto si sente più che in città',
    perChiEAdatta: 'Chiunque, nessuna difficoltà fisica sulle uscite guidate; le formule in autonomia richiedono un minimo di organizzazione con orari dei traghetti',
    giudizio: 'da-verificare',
    alternative: ['I traghetti pubblici Waxholmsbolaget, più economici e più liberi nei tempi ma senza guida'],
    tripSlugs: ['capitali-nordiche'],
    imageAlt: 'Isolotto con case di legno rosse tradizionali nell\'arcipelago di Stoccolma, circondato da acqua calma',
  },
]
