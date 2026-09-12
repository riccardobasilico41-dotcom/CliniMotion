import type { Paese } from '@/lib/types'

// A differenza di Emirati e Qatar, trattati soprattutto come stopover,
// l\'Arabia Saudita ha un itinerario completo: è un paese che si apre al
// turismo dal 2019 e che richiede giorni, non ore.
// I campi miaEsperienza sono bozze scritte da Claude nella voce del diario,
// basate su ciò che è oggettivamente vero di ogni posto e non su ricordi
// reali: vanno riletti e sostituiti. Nessun nome di hotel, ristorante o
// operatore è stato inventato.
// Le regole di ingresso e di comportamento in Arabia Saudita sono cambiate
// molto e in fretta negli ultimi anni: vanno riverificate sui canali
// ufficiali prima di partire, comprese quelle sull\'abbigliamento e sulle
// aree vietate ai non musulmani.

export const arabiaSaudita: Paese = {
  slug: 'arabia-saudita',
  nome: 'Arabia Saudita',
  continente: 'Medio Oriente',
  titolo: 'Arabia Saudita: il paese che fino al 2019 non si poteva visitare',
  descrizione:
    'Fino al 2019 non esisteva un visto turistico: si entrava per lavoro, per affari o per il pellegrinaggio, e basta. Oggi si entra online in pochi minuti, e si trova un paese che non somiglia a nessuno dei suoi vicini del Golfo — le tombe nabatee di Hegra, gemelle di Petra e senza nessuno davanti, un centro storico di corallo a Jeddah, le montagne verdi dell\'Asir che smentiscono l\'idea di Arabia come deserto unico, e una società in trasformazione rapidissima e piena di contraddizioni.',
  periodoMigliore:
    'da novembre a marzo per tutto il paese, con AlUla e il deserto che danno il meglio tra dicembre e febbraio. In estate si superano i 45-50 gradi nell\'interno e l\'umidità di Jeddah rende la costa insopportabile; fanno eccezione le montagne dell\'Asir, che restano fresche anche d\'estate.',
  durataConsigliata:
    '12-14 giorni per Jeddah, AlUla, Riyadh con Diriyah e le montagne dell\'Asir; 8-9 giorni per il nucleo Jeddah-AlUla-Riyadh; 4 giorni se si arriva con un visto stopover e si vuole vedere almeno AlUla.',
  budgetIndicativo:
    'più alto di quanto ci si aspetti: gli alloggi ad AlUla sono cari e pochi, i voli interni sono necessari e le distanze enormi rendono l\'auto a noleggio quasi obbligatoria. La benzina, al contrario, costa pochissimo. Il visto elettronico è attorno ai 130€, assicurazione sanitaria inclusa.',
  stileViaggio: ['archeologia', 'deserto', 'montagna', 'paese in trasformazione'],
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua. I cittadini italiani richiedono il **visto turistico elettronico** sul portale ufficiale visa.visitsaudi.com: costa circa 535 riyal (attorno ai 130 euro, con l\'assicurazione sanitaria obbligatoria inclusa), si ottiene in genere in poche ore o giorni, ed è valido **un anno con ingressi multipli** e soggiorni fino a 90 giorni ciascuno. Esiste anche una strada gratuita: il **visto stopover**, rilasciato a chi vola con Saudia o flynas, valido 4 giorni e legato all\'acquisto del biglietto — se ne parla nel dettaglio nel confronto sui programmi stopover del Golfo.',
    valuta: 'Riyal saudita (SAR), agganciato al dollaro USA.',
    pagamenti:
      'Il paese si è digitalizzato in fretta: carte e pagamenti contactless funzionano ovunque nelle città, compresi i taxi e molti piccoli esercizi. Il contante resta utile nei souq e nei villaggi dell\'interno. Gli ATM sono diffusi e accettano carte estere senza problemi.',
    connettivita:
      'Ottima copertura 4G e 5G anche nel deserto lungo le direttrici principali. SIM turistiche in vendita in aeroporto con il passaporto, a prezzi bassi. A differenza degli Emirati e del Qatar, le chiamate VoIP non sono bloccate: WhatsApp funziona normalmente.',
    salute:
      'Nessuna vaccinazione obbligatoria per il turismo (regole diverse valgono per il pellegrinaggio, con l\'obbligo della vaccinazione antimeningococcica). L\'assicurazione sanitaria è inclusa nel costo del visto elettronico, ma è di base: conviene affiancarne una propria. Il rischio principale è il caldo: nell\'interno si superano i 50 gradi d\'estate e la disidratazione è rapidissima. L\'acqua del rubinetto non si beve.',
    sicurezza:
      'La criminalità comune è molto bassa e viaggiare è tranquillo. Le cose da sapere sono altre. **L\'alcol è vietato in tutto il paese**, senza eccezioni e senza zone franche negli hotel: introdurlo è un reato serio. **La Mecca e Medina sono vietate ai non musulmani** — i cartelli sulle autostrade indicano le deviazioni obbligatorie, e non è una formalità. L\'abbigliamento richiesto è modesto per tutti: dal 2019 le donne straniere non devono indossare l\'abaya né coprirsi il capo, ma servono braccia e gambe coperte e abiti non aderenti; per gli uomini, niente pantaloncini corti in pubblico. Le manifestazioni d\'affetto in pubblico vanno evitate. Fotografare persone — soprattutto donne — senza permesso esplicito è un problema serio, più che altrove nella regione. Vanno infine controllati gli avvisi ufficiali per le zone di confine con lo Yemen, sconsigliate.',
    trasportiInterni:
      'Le distanze sono enormi: da Jeddah ad AlUla sono oltre 700 km, da Riyadh a Jeddah quasi 950. **I voli interni sono la norma**, con Saudia e flynas che collegano tutto a prezzi bassi. Esiste una linea ad alta velocità, l\'Haramain, che unisce Jeddah, La Mecca e Medina in poco tempo — ma le due città sante restano inaccessibili ai non musulmani, quindi per un turista serve soprattutto la tratta Jeddah-Medina. L\'auto a noleggio è consigliabile per AlUla e per l\'Asir; le strade principali sono ottime e la benzina costa pochissimo. Nelle città, Uber e Careem funzionano bene e costano poco.',
    costoVita:
      'Più caro dell\'immagine che se ne ha: AlUla ha poche strutture e prezzi alti, Riyadh e Jeddah hanno hotel da capitale. In compenso benzina, trasporti urbani e cibo di quartiere costano pochissimo, e non esiste la voce alcol perché non c\'è.',
    lingua:
      'Arabo. L\'inglese è diffuso nelle città, negli hotel e nei siti turistici — molto più di quanto ci si aspetti — ma cala rapidamente nell\'interno e nei villaggi. Un traduttore sul telefono e qualche parola di arabo aiutano parecchio.',
    elettricita: '230V, prese di tipo G britanniche a tre poli, come nel resto del Golfo.',
    fusoOrario: 'UTC+3: 1 ora avanti rispetto all\'Italia in ora legale, 2 in inverno.',
    clima:
      'Tre paesi in uno. L\'interno desertico ha inverni miti e notti fredde ed estati oltre i 50 gradi. La costa del Mar Rosso, a Jeddah, è calda e umidissima quasi tutto l\'anno. Le montagne dell\'Asir, attorno ad Abha, stanno sopra i 2.000 metri, hanno un clima fresco, nebbie e piogge estive, e sono coltivate a terrazze: è la parte del paese che smentisce ogni aspettativa.',
    festivita:
      'Il **Ramadan** qui si vive in modo più stringente che altrove nel Golfo: quasi tutto chiude durante il giorno, mangiare e bere in pubblico alla luce del sole è vietato per tutti, compresi i non musulmani, e la vita si sposta interamente sulla notte. Nei giorni di **Eid al-Fitr** e **Eid al-Adha** il paese si ferma e i trasporti sono presi d\'assalto. Il periodo dell\'Hajj comporta afflussi enormi verso l\'ovest del paese e prezzi più alti. La Festa Nazionale è il 23 settembre, la Fondazione il 22 febbraio.',
    emergenze: 'Polizia 999, ambulanza 997, vigili del fuoco 998; numero unico 911 attivo nelle principali città. L\'Ambasciata d\'Italia è a Riyadh, con Consolato generale a Jeddah.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Le tombe nabatee scavate nella roccia di Hegra ad AlUla, Arabia Saudita',
  tripPrincipaleSlug: 'arabia-saudita-itinerario',
}
