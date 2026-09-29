import type { Esperienza } from '@/lib/types'

// Prima uscita tedesca dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/germania.ts). Prezzi, orari e regole di
// prenotazione cambiano spesso — in particolare quelle del Reichstag e i
// lavori di ristrutturazione del Pergamonmuseum — e vanno riverificati sui
// canali ufficiali prima di prenotare.

export const esperienzeGermania: Esperienza[] = [
  {
    slug: 'reichstag-cupola',
    paeseSlug: 'germania',
    destinazioneSlug: 'berlino',
    nome: 'Cupola del Reichstag',
    localita: 'Platz der Republik, Mitte, Berlino',
    cosE:
      'La cupola di vetro che sovrasta il palazzo del Reichstag, sede del Bundestag (il parlamento tedesco), disegnata dall\'architetto britannico Norman Foster e completata nel 1999 nell\'ambito della ricostruzione dell\'edificio dopo la riunificazione. Una rampa a spirale porta alla sommità, con vista a 360° sul quartiere del governo e su Berlino, e uno specchio centrale che rifletteva la luce sull\'aula parlamentare sottostante.',
    percheFarla:
      'Perché è, insieme, un\'esperienza architettonica distintiva e un panorama gratuito sulla città, e perché salire nel cuore del parlamento tedesco è un modo diretto per toccare con mano la storia della riunificazione: l\'edificio porta ancora, nei corridoi interni, le scritte lasciate dai soldati sovietici nel 1945.',
    durata: 'circa 1-1,5 ore per la visita alla cupola e alla terrazza panoramica',
    periodo: 'tutto l\'anno; la cupola resta aperta fino a tarda sera (generalmente fino alle 22, ultimo ingresso alle 21), un buon modo per vedere Berlino illuminata dall\'alto',
    costo: 'ingresso gratuito',
    comePrenotare:
      'Prenotazione online obbligatoria e gratuita sul sito ufficiale del Bundestag, con slot orari limitati che si esauriscono spesso con giorni o settimane di anticipo in alta stagione; è richiesto un documento d\'identità valido all\'ingresso e si passa un controllo di sicurezza simile a quello aeroportuale.',
    cosaPortare: 'Documento d\'identità (obbligatorio, il nome deve corrispondere alla prenotazione); niente zaini o borse oltre una dimensione minima, che vanno lasciati fuori o depositati.',
    perChiEAdatta: 'Adatta a chiunque, essendo gratuita e priva di parti impegnative fisicamente (rampa in salita ma non ripida); l\'unico vincolo reale è organizzativo, per via della prenotazione a slot limitati.',
    giudizio: 'da-verificare',
    alternative: ['La terrazza panoramica della Basilica di Santo Stefano-equivalente locale non esiste a Berlino: altri punti panoramici alternativi sono la Fernsehturm (Torre della TV) di Alexanderplatz, a pagamento ma senza necessità di prenotazione con largo anticipo'],
    tripSlugs: ['berlino-weekend'],
    imageAlt: 'La rampa a spirale interna della cupola di vetro del Reichstag, con lo specchio centrale e la vista su Berlino',
  },
  {
    slug: 'museumsinsel-pergamon',
    paeseSlug: 'germania',
    destinazioneSlug: 'berlino',
    nome: 'Isola dei Musei e Pergamonmuseum',
    localita: 'Museumsinsel, Mitte, Berlino',
    cosE:
      'Il complesso di cinque musei statali sull\'isola formata dal fiume Sprea nel cuore di Berlino, patrimonio UNESCO dal 1999: Altes Museum, Neues Museum (con il celebre busto di Nefertiti), Alte Nationalgalerie, Bode-Museum e il Pergamonmuseum, quest\'ultimo il più visitato per le sue collezioni di archeologia antica, tra cui la Porta di Ishtar di Babilonia e la Porta del Mercato di Mileto.',
    percheFarla:
      'Perché è una delle concentrazioni museali più dense e importanti d\'Europa in un\'area percorribile a piedi in pochi minuti, con opere di livello mondiale che vanno dall\'antico Egitto alla Mesopotamia fino alla pittura europea dell\'Ottocento.',
    durata: 'mezza giornata per una visita che tocchi almeno due musei con calma; una giornata intera per vederli tutti',
    periodo: 'tutto l\'anno, essendo un\'esperienza interamente al chiuso',
    costo: 'biglietto per singolo museo indicativamente 12-14€, biglietto cumulativo per l\'intera isola (Museumsinsel-Ticket) intorno ai 24-29€',
    comePrenotare:
      'Consigliato l\'acquisto online con orario prenotato, soprattutto per il Pergamonmuseum e il Neues Museum nei weekend e in alta stagione, per evitare code alla cassa.',
    cosaPortare: 'Nessuna attrezzatura particolare; verificare in anticipo online quali sale sono effettivamente aperte.',
    perChiEAdatta:
      'Adatta a chiunque sia interessato a storia e archeologia; importante sapere in anticipo che l\'ala nord del Pergamonmuseum, con la Sala dell\'Altare di Pergamo, è chiusa dal 2023 per un\'ampia ristrutturazione con riapertura non prevista a breve — restano visitabili altre sezioni, tra cui la Porta di Ishtar. Da verificare sul sito ufficiale prima di includerlo nel programma, per non trovarsi davanti a una sala attesa e chiusa.',
    giudizio: 'da-verificare',
    alternative: ['Concentrarsi su Neues Museum e Altes Museum, entrambi interamente aperti, se l\'obiettivo principale era proprio la sala del Pergamonmuseum ora chiusa'],
    tripSlugs: ['berlino-weekend'],
    imageAlt: 'La Porta di Ishtar in ceramica blu e oro ricostruita all\'interno del Pergamonmuseum di Berlino',
  },
  {
    slug: 'east-side-gallery',
    paeseSlug: 'germania',
    destinazioneSlug: 'berlino',
    nome: 'East Side Gallery',
    localita: 'Mühlenstraße, lungo la Sprea, Friedrichshain, Berlino',
    cosE:
      'Un tratto di 1,3 km del Muro di Berlino rimasto in piedi lungo la riva della Sprea, dipinto nel 1990, subito dopo la caduta del Muro, da oltre cento artisti provenienti da tutto il mondo: la più lunga galleria d\'arte a cielo aperto del mondo. Il murale più celebre è il "Bacio fraterno" di Dmitri Vrubel, che ritrae l\'abbraccio tra Leonid Brežnev ed Erich Honecker, ripreso da una fotografia del 1979.',
    percheFarla:
      'Perché è, allo stesso tempo, un\'opera d\'arte collettiva e uno dei pochi tratti del Muro sopravvissuti quasi per intero: camminarci lungo restituisce fisicamente la lunghezza e la presenza di una barriera che per ventotto anni ha diviso la città.',
    durata: 'circa 1 ora per percorrerla con calma da un capo all\'altro',
    periodo: 'tutto l\'anno, essendo un percorso all\'aperto; migliore con luce diurna per fotografare i murales',
    costo: 'accesso libero e gratuito',
    comePrenotare: 'Nessuna prenotazione necessaria, sito sempre accessibile.',
    cosaPortare: 'Nessuna attrezzatura particolare.',
    perChiEAdatta: 'Adatta a chiunque; alcuni murales sono stati restaurati nel tempo per il deterioramento e gli atti di vandalismo, quindi l\'aspetto di alcune opere può differire da vecchie foto trovate online.',
    giudizio: 'da-verificare',
    alternative: ['La Gedenkstätte Berliner Mauer lungo Bernauer Straße, più istituzionale e documentaria, per chi cerca il lato storico-informativo del Muro invece di quello artistico'],
    tripSlugs: ['berlino-weekend'],
    imageAlt: 'Il murale del "Bacio fraterno" tra Brežnev e Honecker sull\'East Side Gallery di Berlino',
  },
  {
    slug: 'berlino-clubbing',
    paeseSlug: 'germania',
    destinazioneSlug: 'berlino',
    nome: 'Techno e vita notturna a Berlino',
    localita: 'Vari indirizzi, soprattutto Friedrichshain e dintorni della ex centrale elettrica di Berghain',
    cosE:
      'La scena dei club techno berlinesi, cresciuta a partire dai primi anni Novanta negli spazi industriali abbandonati della ex Berlino Est dopo la caduta del Muro (il club Tresor, aperto nel 1991 in un caveau bancario sotterraneo, è tra i pionieri) e oggi identificata a livello internazionale con locali come il Berghain, ricavato in un\'ex centrale elettrica, famoso per la porta d\'ingresso estremamente selettiva e imprevedibile e per il divieto assoluto di fotografie all\'interno. Nel marzo 2024 la cultura techno berlinese è stata iscritta nel registro tedesco del patrimonio culturale immateriale, un passo formale verso un possibile futuro riconoscimento internazionale.',
    percheFarla:
      'Perché è un fenomeno nato e cresciuto qui in modo unico, legato proprio agli spazi lasciati liberi dalla caduta del Muro, ed è tra le ragioni per cui Berlino è considerata da decenni una delle capitali mondiali della musica elettronica — anche solo come cenno informativo per chi non è del settore.',
    durata: 'una serata (i club aprono spesso tardi, dopo mezzanotte, e alcuni restano aperti fino al mattino o oltre)',
    periodo: 'tutto l\'anno, essendo un\'esperienza interamente notturna e al chiuso',
    costo: 'ingresso ai club indicativamente 10-25€ secondo il locale e l\'evento',
    comePrenotare: 'Nessuna prenotazione per la maggior parte dei club: si fa la fila all\'ingresso, con selezione al momento da parte del buttafuori. Per i locali più ambiti come Berghain non esiste modo garantito di entrare.',
    cosaPortare: 'Documento d\'identità; abbigliamento informale (l\'abbigliamento elegante è spesso controproducente per l\'ingresso nei club techno berlinesi); niente macchine fotografiche, spesso vietate all\'interno.',
    perChiEAdatta:
      'Un cenno per completezza più che un elemento centrale di un weekend di quattro giorni: adatta a chi è specificamente interessato alla scena; non è indispensabile per godersi Berlino, e le regole d\'ingresso non scritte di alcuni locali possono rendere la serata frustrante per chi non conosce il contesto.',
    giudizio: 'da-verificare',
    alternative: ['Bar e locali più informali di Kreuzberg e Friedrichshain, con ingresso libero e atmosfera meno selettiva'],
    tripSlugs: ['berlino-weekend'],
    imageAlt: 'L\'esterno in mattoni dell\'ex centrale elettrica che ospita un noto club techno di Berlino, di sera',
  },
]
