import type { Paese } from '@/lib/types'

// Il Borneo malese (Sabah e Sarawak) è tenuto separato dalla Malesia
// peninsulare di proposito: logistica, costi, tempi e ragioni di viaggio sono
// completamente diversi, e trattarlo come un\'appendice della penisola è il
// modo più rapido per sottodimensionarlo in itinerario.
// I campi miaEsperienza nelle destinazioni e nelle esperienze sono bozze
// scritte da Claude nella voce del diario, basate su ciò che è oggettivamente
// vero di ogni posto (stagione, quote, probabilità di avvistamento, fatica) e
// non su ricordi reali: vanno riletti e sostituiti. Nessun nome di lodge,
// resort o operatore è stato inventato.

export const borneo: Paese = {
  slug: 'borneo',
  nome: 'Borneo malese',
  continente: 'Asia',
  titolo: 'Borneo: oranghi, foresta primaria e uno dei reef più belli del pianeta',
  descrizione:
    'La terza isola più grande del mondo, divisa tra tre paesi — Malesia (Sabah e Sarawak), Brunei e Indonesia (Kalimantan) — di cui questa scheda copre la parte malese. È il posto dove si vedono gli oranghi, dove si sale la montagna più alta del sud-est asiatico tra Himalaya e Nuova Guinea, e dove si immerge a Sipadan, che molti considerano il miglior sito di immersione al mondo. È anche il posto dove si vede meglio cosa ha fatto la palma da olio: si atterra su un tappeto verde che sembra foresta e non lo è.',
  periodoMigliore:
    'da marzo a ottobre, con i mesi migliori tra aprile e settembre: mare calmo a Semporna, visibilità alta a Sipadan e minor probabilità di pioggia sul Kinabalu. Da novembre a febbraio le piogge sono più frequenti e il mare più mosso, ma la foresta è la foresta e piove comunque tutto l\'anno.',
  durataConsigliata:
    '10-12 giorni per fare il Sabah con criterio (Kinabalu, Sepilok, Kinabatangan, Semporna); 14-16 per aggiungere la Danum Valley o il Sarawak. Meno di una settimana significa passare più tempo negli aeroporti che nella foresta.',
  budgetIndicativo:
    'la parte più costosa di qualsiasi viaggio in Malesia. I lodge nella foresta si pagano a pacchetto con pasti inclusi (da 100€ a notte in su, molto di più alla Danum Valley), i permessi per il Kinabalu e Sipadan sono contingentati e cari, e i trasferimenti interni sono lunghi. È però l\'unico modo di vedere queste cose.',
  stileViaggio: ['natura', 'fauna selvatica', 'diving', 'trekking'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità e **MDAC** obbligatoria come per tutta la Malesia. Va però saputa una cosa che spiazza quasi tutti: **Sabah e Sarawak hanno un controllo dell\'immigrazione proprio**, eredità dei termini con cui entrarono nella Federazione nel 1963. Chi arriva dalla penisola, pur restando nello stesso paese, passa un controllo passaporti all\'arrivo a Kota Kinabalu o Kuching e riceve un nuovo timbro, con un permesso di soggiorno separato. Lo stesso vale passando da Sabah a Sarawak. Non serve nulla di più del passaporto, ma è bene non farsi trovare impreparati.',
    valuta: 'Ringgit malese (MYR), come nel resto del paese.',
    pagamenti:
      'Nelle città (Kota Kinabalu, Sandakan, Kuching) le carte funzionano normalmente. Fuori, la regola cambia: i lodge sul Kinabatangan, i villaggi lungo i fiumi e molti operatori di Semporna trattano solo in contante, e gli ATM diventano rari e inaffidabili. Va fatta scorta di ringgit prima di lasciare la città, ed è uno degli errori più comuni di chi arriva dalla penisola.',
    connettivita:
      'Buona nelle città, intermittente lungo il Kinabatangan, praticamente assente alla Danum Valley e nelle grotte del Mulu — dove è parte del punto. Chi ha bisogno di essere raggiungibile deve pianificarlo: certi lodge hanno una sola zona con segnale, e il wi-fi funziona a orari.',
    salute:
      'Il Borneo è l\'unica parte della Malesia dove il discorso malaria va affrontato sul serio: il rischio esiste nelle zone interne e forestali, e va valutata la profilassi con un medico prima di partire. C\'è anche la malaria da Plasmodium knowlesi, trasmessa dai macachi, presente proprio qui. La dengue è diffusa tutto l\'anno. Il repellente ad alta concentrazione, le maniche lunghe la sera e le calze antisanguisughe per i trekking in foresta non sono optional. Gli ospedali buoni sono a Kota Kinabalu e Kuching: da un lodge sul fiume l\'evacuazione richiede ore, e l\'assicurazione va scelta di conseguenza.',
    sicurezza:
      'Sabah e Sarawak sono tranquilli. L\'unica zona con una storia di sicurezza diversa è la costa orientale del Sabah attorno a Semporna e alle isole vicine, dove in passato si sono verificati rapimenti da parte di gruppi armati provenienti dalle Filippine meridionali: oggi l\'area è presidiata da una zona di sicurezza dedicata con coprifuoco marittimo notturno, e il turismo funziona regolarmente, ma vale la pena controllare gli avvisi di viaggio aggiornati prima di prenotare. In foresta i rischi sono altri e più banali: sanguisughe, disidratazione e distorsioni su sentieri fangosi.',
    trasportiInterni:
      'Si vola: Kota Kinabalu e Kuching sono collegate a Kuala Lumpur da decine di voli al giorno a prezzi bassissimi, e tra i due stati ci si sposta di nuovo in aereo, perché via terra è impensabile. Sul posto le distanze sono lunghe e le strade lente: da Kota Kinabalu a Sandakan sono sei ore di auto, da Sandakan al Kinabatangan altre due. Quasi tutto si organizza a pacchetto con trasferimenti inclusi, ed è la scelta ragionevole. Il Mulu si raggiunge solo in aereo.',
    costoVita:
      'Nelle città i prezzi sono quelli malesi, bassi. Fuori cambia tutto: i lodge si pagano a pacchetto con pasti e attività inclusi, i permessi sono contingentati e la concorrenza è poca. Il Borneo è la parte del viaggio in cui il budget si decide, e va calcolato prima.',
    lingua: 'Malese e inglese, quest\'ultimo molto diffuso. Nell\'interno si parlano decine di lingue indigene — kadazan-dusun in Sabah, iban in Sarawak — e le guide dei lodge appartengono quasi sempre a queste comunità.',
    elettricita: '240V, prese di tipo G a tre poli rettangolari, come nel resto della Malesia.',
    fusoOrario: 'UTC+8, come tutta la Malesia: 6 ore avanti rispetto all\'Italia in ora legale, 7 in inverno.',
    clima:
      'Equatoriale: caldo, umido e piovoso tutto l\'anno, con la stagione più secca tra marzo e ottobre. Non esiste un periodo asciutto in senso europeo — in foresta piove comunque — ma da novembre a febbraio il monsone di nord-est rende il mare più mosso a Semporna e le piste forestali più difficili. Sul Kinabalu, sopra i 3.000 metri, di notte si va vicino allo zero.',
    festivita:
      'Oltre alle feste malesi, il Borneo ha le proprie: il Kaamatan in Sabah (maggio) e il Gawai Dayak in Sarawak (inizio giugno), entrambe feste del raccolto delle comunità indigene, con giorni di celebrazioni nei villaggi. Sono i momenti più interessanti dell\'anno per essere qui, e anche quelli in cui trasporti e alloggi si riempiono.',
    emergenze: 'Polizia e ambulanza 999. Il Consolato italiano più vicino è a Kuala Lumpur: dal Borneo, in caso di emergenza, si passa comunque da lì.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Un orango selvatico su un albero nella foresta pluviale del Borneo malese',
  tripPrincipaleSlug: 'borneo-itinerario',
}
