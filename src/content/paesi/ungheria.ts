import type { Paese } from '@/lib/types'

// L'Ungheria entra nell'archivio con un solo itinerario: un weekend lungo a
// Budapest (3-4 giorni), nel filone "weekend lunghi in Europa" già usato per
// Roma, Firenze, Venezia, Parigi e Cracovia. Non è una guida al paese intero:
// fuori Budapest l'Ungheria non è coperta.
//
// Nessuno ha ancora messo piede in Ungheria per conto di questo sito: la
// destinazione di Budapest resta visitataPersonalmente: false e senza il
// campo miaEsperienza, che nel tipo Destinazione è facoltativo apposta — se
// assente, la UI mostra un placeholder editoriale invece di un ricordo
// inventato (vedi il commento sul tipo in src/lib/types.ts, e lo stesso
// trattamento usato in src/content/paesi/polonia.ts). Questa è quindi scheda
// di ricerca, non un diario: fatti verificabili, senza episodi in prima
// persona.

export const ungheria: Paese = {
  slug: 'ungheria',
  nome: 'Ungheria',
  continente: 'Europa',
  titolo: 'Ungheria: Budapest in un weekend lungo, tra terme, Danubio e ruin bar',
  descrizione:
    'Per ora l\'archivio copre una sola meta ungherese, ed è la capitale: Budapest, nata nel 1873 dalla fusione di Buda, Óbuda e Pest, divisa in due dal Danubio e seduta su oltre un centinaio di sorgenti termali che ne fanno una delle poche capitali europee dove le terme sono un\'attività da weekend e non una parentesi wellness. Il castello di Buda e il bastione dei Pescatori da una parte del fiume, il Parlamento neogotico e il quartiere ebraico con i suoi ruin bar dall\'altra: tre o quattro giorni bastano per vederla bene, senza dover scegliere tra storia e vita notturna.',
  periodoMigliore:
    'aprile-maggio e settembre-ottobre, con clima mite e meno folla rispetto all\'estate. Giugno-agosto è caldo e molto affollato, soprattutto intorno al Bastione dei Pescatori e alle terme di Széchenyi; novembre-marzo è freddo (spesso sotto zero da dicembre a febbraio) ma le terme diventano un\'esperienza particolare proprio col freddo, e a dicembre i mercatini di Natale in Piazza Vörösmarty e davanti alla Basilica di Santo Stefano sono tra i più noti d\'Europa centrale.',
  durataConsigliata:
    '3-4 giorni per Budapest, il lato Buda e il lato Pest, con una giornata dedicata alle terme; non pensata per essere estesa al resto dell\'Ungheria.',
  budgetIndicativo:
    'tra le capitali europee più economiche, pur non essendo più "low cost" come un tempo: pasti e trasporti pubblici costano una frazione dell\'Europa occidentale. Le voci fisse sono l\'ingresso alle terme (variabile secondo l\'impianto e il giorno, indicativamente 20-30€) e, se scelto, il noleggio di telo e ciabatte se non portati da casa.',
  stileViaggio: ['città', 'terme', 'vita notturna', 'gastronomia'],
  scheda: {
    documenti:
      'Ungheria nell\'Unione Europea e nell\'area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Fiorino ungherese (HUF), non l\'euro. È la sorpresa più comune per chi dà per scontato che "Unione Europea" significhi automaticamente euro: l\'Ungheria non è nell\'eurozona e non ha una data fissata per entrarci. I numeri in fiorini sono grandi (un caffè può costare 800-1.200 HUF, una cena 4.000-8.000 HUF a testa) e la confusione tra "mille" e "diecimila" è l\'errore più comune di chi arriva da poco: conviene abituarsi subito a leggere gli zeri prima di pagare.',
    pagamenti:
      'Carta e contactless funzionano quasi ovunque, mezzi pubblici compresi. Il contante resta utile per i piccoli acquisti e per evitare i cambiavalute meno trasparenti. Attenzione ai cambiavalute intorno a Váci utca e alle zone più turistiche: alcuni espongono un tasso vistoso applicato solo a cifre molto alte o nascondono in piccolo una commissione elevata — meglio un cambiavalute con il tabellino completo, oppure prelevare direttamente in HUF da uno sportello bancario.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali, senza bisogno di una SIM locale. Copertura 4G/5G buona in tutta la città.',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile in tutta Budapest.',
    sicurezza:
      'Budapest è una città sicura per gli standard europei, ma il quartiere ebraico (Erzsébetváros, distretto VII) e le vie intorno alle piazze più turistiche sono note per un tipo di truffa specifica ai danni dei turisti, in particolare gruppi di uomini in addio al celibato: promoter di strada o ragazze che invitano a entrare in un locale "con musica dal vivo" o "con sconto", dove arrivano poi conti gonfiati a dismisura per pochi drink, con buttafuori che scoraggiano l\'uscita finché non si paga — lo stesso schema documentato in altre capitali dell\'Europa centrale come Cracovia e Praga. La regola resta la stessa: non seguire mai chi avvicina per strada proponendo un locale, e controllare sempre il listino prezzi (con IVA inclusa) prima di ordinare. Per il resto, le accortezze normali contro i borseggi su tram e metro affollati bastano.',
    trasportiInterni:
      'Rete BKK molto efficiente: la linea M1 della metropolitana (la "Kisföldalatti", inaugurata nel 1896, la prima linea metropolitana del continente europeo, oggi Patrimonio UNESCO) più altre tre linee, tram (il tram 2 lungo il Danubio è tra i percorsi urbani più panoramici d\'Europa) e bus. Biglietti singoli o pass giornalieri/settimanali; il biglietto va convalidato prima di salire, e i controllori in borghese fanno multe salate a chi viaggia senza titolo valido. Non serve un\'auto a noleggio per un weekend concentrato su Budapest.',
    costoVita: 'Medio-basso per gli standard dell\'Europa occidentale, in crescita negli ultimi anni: cena normale 12-20€ a testa nelle zone centrali, birra artigianale nei ruin bar 3-5€, ingresso alle terme la voce più cara della giornata tipo.',
    lingua: 'Ungherese, lingua non indoeuropea e senza parentele evidenti con l\'italiano. L\'inglese è diffuso nel centro storico, negli hotel e tra i più giovani; il tedesco è spesso una seconda lingua utile con i più anziani.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane entrano senza problemi, non serve adattatore.',
    fusoOrario: 'UTC+1 (CET), lo stesso fuso orario dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Continentale. Inverni freddi, spesso sotto zero da dicembre a febbraio, con possibilità di neve; estati calde e a tratti afose da giugno ad agosto, il periodo di massimo affollamento turistico. Primavera e autunno sono le stagioni più equilibrate per girare la città a piedi.',
    festivita:
      'A dicembre i mercatini di Natale in Piazza Vörösmarty e davanti alla Basilica di Santo Stefano sono tra gli eventi più affollati dell\'anno. Il 20 agosto (Festa di Santo Stefano, fondazione dello Stato ungherese) porta grandi fuochi d\'artificio sul Danubio. Il 15 marzo (anniversario della rivoluzione del 1848) è un\'altra data nazionale sentita.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Budapest.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Il Parlamento ungherese illuminato sulla riva del Danubio, visto dal lato di Buda',
  tripPrincipaleSlug: 'budapest-weekend',
}
