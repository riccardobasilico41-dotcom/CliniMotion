import type { Esperienza } from '@/lib/types'

// Paese non ancora confermato come visitato: miaEsperienza assente e giudizio
// 'da-verificare' ovunque. Prezzi e operatori cambiano: da riverificare prima
// di prenotare.

export const esperienzeBolivia: Esperienza[] = [
  {
    slug: 'carretera-de-la-muerte',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'la-paz',
    nome: 'Carretera de la Muerte in mountain bike',
    localita: 'Da La Cumbre (4.650 m) a Yolosa (1.200 m), Yungas',
    cosE:
      'La discesa in mountain bike lungo la vecchia strada degli Yungas, quella che negli anni Novanta si guadagnò il nome di "strada più pericolosa del mondo" per il numero di veicoli che finivano nel vuoto. Dal 2006 il traffico passa su una strada nuova e asfaltata, e la vecchia pista è diventata di fatto un percorso ciclistico: circa 64 km di discesa, con oltre 3.400 metri di dislivello negativo, dal passo glaciale di La Cumbre alla foresta subtropicale di Yolosa.',
    percheFarla:
      'Perché in poche ore si attraversano tre fasce climatiche — dal freddo della puna alla giungla umida — su una pista sterrata larga tre metri con strapiombi di centinaia di metri. È l\'attività più iconica della Bolivia, e non richiede essere un ciclista esperto.',
    durata: 'giornata intera: partenza da La Paz al mattino presto, rientro nel tardo pomeriggio',
    periodo:
      'tutto l\'anno, ma la stagione secca (maggio-ottobre) è nettamente preferibile: nella stagione delle piogge la pista diventa fangosa, la visibilità cala con la nebbia e il rischio aumenta in modo concreto',
    costo:
      'indicativamente 80-170$ a persona secondo l\'operatore. Gli operatori economici stanno sugli 80-100$, quelli premium tra i 120 e i 170$, con differenze reali su bici, gruppi e protocolli di sicurezza.',
    comePrenotare:
      'Tramite le agenzie di La Paz, anche con un giorno di anticipo. Vale la pena leggere recensioni recenti e chiedere esplicitamente che bici verranno usate, quante persone per guida e se sono incluse le protezioni complete.',
    cosaPortare:
      'Abbigliamento a strati: si parte a 4.650 metri vicino allo zero e si arriva a 1.200 metri con clima tropicale. Guanti, occhiali, protezione solare e un cambio completo per la fine.',
    perChiEAdatta:
      'Non serve essere ciclisti esperti — è tutta discesa e si procede al proprio ritmo — ma serve saper gestire una mountain bike su sterrato e, soprattutto, avere la testa per non correre. Sconsigliata a chi soffre di vertigini.',
    confronti: [
      {
        titolo: 'Operatore economico o premium: dove sta davvero la differenza',
        introduzione:
          'Su questo percorso il prezzo del tour non è una questione di comfort ma di sicurezza. I numeri aiutano a inquadrare il rischio reale: sui circa 25.000 ciclisti che ogni anno affrontano la strada, i feriti gravi che richiedono ospedalizzazione sono nell\'ordine di poche unità all\'anno, e gli incidenti mortali si contano all\'incirca uno ogni due o tre anni su tutti gli operatori messi insieme — almeno diciotto dal 1998. Quasi tutti gli incidenti riportati coinvolgono operatori economici, attrezzature scadenti, velocità eccessiva o errore del ciclista.',
        opzioni: [
          {
            nome: 'Operatori economici',
            sintesi: 'Tour di base con bici a doppia sospensione di fascia bassa e gruppi più numerosi.',
            costo: '80-100$',
            pro: [
              'Costo contenuto, che su un viaggio lungo pesa',
              'Il percorso e i panorami sono ovviamente gli stessi',
            ],
            contro: [
              'Manutenzione delle bici meno rigorosa: su una discesa di 64 km i freni sono tutto',
              'Gruppi più grandi, quindi meno controllo da parte delle guide',
              'È la fascia in cui si concentra la quasi totalità degli incidenti riportati',
            ],
            perChi: 'Sconsigliata: è l\'unico caso in questo archivio in cui risparmiare non conviene.',
          },
          {
            nome: 'Operatori premium',
            sintesi:
              'Bici di fascia alta e ben mantenute, gruppi limitati, protocolli di sicurezza strutturati, guide esperte e mezzo di supporto al seguito. I nomi storici del settore — Gravity Bolivia, che ha di fatto inventato questi tour nel 1998, Barracuda Biking, Vertigo Biking — stanno in questa fascia.',
            costo: '120-170$',
            pro: [
              'Bici mantenute seriamente, con freni all\'altezza dei 3.400 metri di discesa',
              'Gruppi piccoli, spesso con un limite di dieci ciclisti per guida',
              'Briefing di sicurezza reale e mezzo di appoggio per chi si ferma',
            ],
            contro: ['Costa quasi il doppio della fascia economica'],
            perChi: 'Chiunque abbia intenzione di farlo davvero.',
          },
        ],
        raccomandazione:
          'Su questa attività, prendere l\'operatore più economico per risparmiare 50 dollari è la scelta sbagliata: i dati dicono che la differenza tra le due fasce si misura in incidenti, non in comfort. Meglio rinunciare del tutto che farla con attrezzatura scadente.',
      },
    ],
    giudizio: 'da-verificare',
    alternative: ['Percorrere la strada in auto o in moto con autista, per chi vuole vedere il paesaggio senza pedalare'],
    tripSlugs: [],
    imageAlt: 'Ciclisti sulla pista sterrata della Carretera de la Muerte con strapiombo sulla valle degli Yungas, Bolivia',
  },
  {
    slug: 'tour-uyuni-sud-lipez',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'salar-de-uyuni',
    nome: 'Tour di 3 giorni Uyuni e Sud Lípez',
    localita: 'Da Uyuni al Sud Lípez, fino al confine cileno',
    cosE:
      'Il tour classico in 4x4 che parte da Uyuni, attraversa il salar, e prosegue verso sud tra lagune colorate, deserti d\'alta quota, geyser e terme, con possibilità di concludere a San Pedro de Atacama in Cile invece di tornare indietro.',
    percheFarla: 'Perché concentra in tre giorni una sequenza di paesaggi che non esiste altrove: distesa di sale, fenicotteri su lagune rosse, geyser a 5.000 metri e vulcani al confine.',
    durata: '3 giorni, 2 notti (esiste anche la versione di un giorno sul solo salar)',
    periodo:
      'maggio-ottobre per il salar asciutto e completamente percorribile; gennaio-marzo per l\'effetto specchio, con però diverse tappe inaccessibili',
    costo: 'indicativamente 150-250$ a persona secondo l\'operatore, più l\'ingresso alla riserva Eduardo Avaroa',
    comePrenotare:
      'Tramite le agenzie di Uyuni o di La Paz. Vale la pena scegliere sulla base della manutenzione dei mezzi e non del prezzo: si viaggia su piste isolate a oltre 4.500 metri, dove un guasto serio è un problema difficile da risolvere.',
    cosaPortare:
      'Sacco a pelo pesante (non sempre incluso, e negli alloggi del Sud Lípez si dorme sotto zero), abbigliamento a strati, protezione solare fortissima — a quella quota il sole riflesso dal sale brucia — costume per le terme e contanti per gli ingressi.',
    perChiEAdatta: 'Adatto a tutti fisicamente, ma la quota si fa sentire: il secondo giorno si superano i 4.800 metri.',
    giudizio: 'da-verificare',
    alternative: [
      'Tour di un giorno sul solo salar, per chi ha poco tempo',
      'Percorso inverso partendo da San Pedro de Atacama, in Cile',
    ],
    tripSlugs: [],
    imageAlt: 'Fenicotteri sulla Laguna Colorada nel Sud Lípez, Bolivia',
  },
  {
    slug: 'miniere-cerro-rico',
    paeseSlug: 'bolivia',
    destinazioneSlug: 'sucre-potosi',
    nome: 'Visita alle miniere del Cerro Rico',
    localita: 'Cerro Rico, Potosí',
    cosE:
      'La visita guidata alle gallerie delle cooperative minerarie ancora attive del Cerro Rico, la montagna il cui argento finanziò per secoli l\'impero spagnolo. Si entra con casco, lampada e stivali, accompagnati quasi sempre da ex minatori, in cunicoli stretti, caldi e polverosi dove si lavora tuttora con metodi in gran parte manuali.',
    percheFarla:
      'Perché è uno dei pochi luoghi al mondo dove si tocca con mano cosa ha significato l\'estrazione coloniale, e perché il racconto di chi ci lavora è più efficace di qualsiasi museo.',
    durata: 'circa 4 ore',
    periodo: 'tutto l\'anno, nei giorni lavorativi quando le cooperative sono in attività',
    costo: 'indicativamente 15-30$ a persona con guida, attrezzatura inclusa',
    comePrenotare: 'Tramite le agenzie di Potosí, preferendo quelle gestite da ex minatori che destinano una quota alle cooperative.',
    cosaPortare:
      'Vestiti che si possano sporcare irrimediabilmente, mascherina o buff per la polvere, acqua. È tradizione portare un piccolo dono ai minatori che si incontrano — foglie di coca, bibite, guanti — acquistabile al mercato dei minatori prima di salire.',
    perChiEAdatta:
      'Sconsigliata a chi soffre di claustrofobia o ha problemi respiratori: le gallerie sono strette, l\'aria è pessima e si è a 4.000 metri di quota. Va affrontata sapendo che non è un\'attrazione, ma un luogo di lavoro con condizioni durissime e aspettative di vita ridotte.',
    giudizio: 'da-verificare',
    alternative: ['Casa Nacional de la Moneda, l\'antica zecca coloniale, per capire la storia del Cerro Rico senza entrare in miniera'],
    tripSlugs: [],
    imageAlt: 'Ingresso di una galleria mineraria sul Cerro Rico di Potosí, Bolivia',
  },
]
