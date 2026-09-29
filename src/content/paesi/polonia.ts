import type { Paese } from '@/lib/types'

// La Polonia entra nell'archivio con un solo itinerario: un weekend lungo a
// Cracovia (3-4 giorni), nel filone "weekend lunghi in Europa" già usato per
// Roma, Firenze, Venezia e Parigi. Non è (ancora) una guida al paese intero:
// manca di proposito Varsavia, che meriterebbe un itinerario a sé e non va
// compressa dentro un weekend breve.
//
// Nessuno ha ancora messo piede in Polonia per conto di questo sito: la
// destinazione di Cracovia e quella di Auschwitz-Birkenau restano entrambe
// visitataPersonalmente: false e senza il campo miaEsperienza, che nel tipo
// Destinazione è facoltativo apposta — se assente, la UI mostra un
// placeholder editoriale invece di un ricordo inventato (vedi il commento sul
// tipo in src/lib/types.ts, e lo stesso trattamento usato in
// src/content/meraviglie.ts per i monumenti non visitati). Questa è quindi
// scheda di ricerca, non un diario: fatti verificabili, senza episodi in
// prima persona.

export const polonia: Paese = {
  slug: 'polonia',
  nome: 'Polonia',
  continente: 'Europa',
  titolo: 'Polonia: Cracovia in un weekend lungo, tra Rynek, Wawel e la memoria di Auschwitz',
  descrizione:
    'Per ora l\'archivio copre una sola meta polacca, ed è quella giusta per iniziare: Cracovia, l\'unica grande città polacca uscita quasi intatta dalla Seconda guerra mondiale, con il centro medievale più denso d\'Europa centrale, il castello reale di Wawel, il quartiere ebraico di Kazimierz e, a un\'ora e mezza di distanza, il luogo che più di ogni altro chiede una visita informata prima che turistica: Auschwitz-Birkenau. Varsavia non è qui: è un\'altra Polonia, quella della capitale ricostruita da zero, e merita un itinerario proprio invece di essere schiacciata dentro un weekend da tre-quattro giorni.',
  periodoMigliore:
    'aprile-maggio e settembre-ottobre, con clima mite e senza il pieno dell\'alta stagione. Giugno-luglio-agosto sono caldi e affollatissimi, con Rynek Główny e Auschwitz al limite della capienza a ferragosto; novembre-marzo è freddo (spesso sotto zero, con possibilità di neve) ma la città regge bene anche d\'inverno, con meno code e i mercatini di Natale a dicembre.',
  durataConsigliata:
    '3-4 giorni per Cracovia, il centro storico e le due gite fuori porta più comuni (Auschwitz-Birkenau e la Miniera di sale di Wieliczka); non è pensata per essere estesa a un tour di tutta la Polonia.',
  budgetIndicativo:
    'tra le capitali europee più economiche: pasti, alloggi e trasporti pubblici costano una frazione di Europa occidentale. Le voci fisse sono la Miniera di Wieliczka (circa 120 PLN, poco più di 25€) e i trasporti verso Auschwitz (bus o treno, poche decine di PLN); l\'ingresso ad Auschwitz-Birkenau è gratuito.',
  stileViaggio: ['città', 'storia', 'memoria', 'gastronomia'],
  scheda: {
    documenti:
      'Polonia nell\'Unione Europea e nell\'area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Złoty polacco (PLN), non l\'euro. È la sorpresa più comune per chi dà per scontato che "Unione Europea" significhi automaticamente euro: la Polonia non è nell\'eurozona e non ha una data fissata per entrarci, quindi si paga in złoty ovunque, anche nei negozi che espongono cartelli con prezzi "convertiti" in euro a un cambio spesso svantaggioso.',
    pagamenti:
      'Paese molto avanzato sui pagamenti digitali: carta e contactless funzionano quasi ovunque, tram e bus compresi. Il contante resta utile per i piccoli acquisti e soprattutto per evitare i cambiavalute (kantor) più opachi. Attenzione ai kantor intorno a Rynek Główny e in via Floriańska: alcuni espongono in grande un tasso vantaggioso per valute minori (lek albanesi, dinari) invece che per euro e dollari, o segnano in piccolo la differenza tra tasso di acquisto e di vendita — conviene cambiare in cambiavalute con il tabellino completo e trasparente, un po\' fuori dall\'asse più turistico.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali, senza bisogno di una SIM locale. Copertura 4G/5G buona in città; cala nelle zone rurali intorno a Wieliczka e Oświęcim.',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto tecnicamente potabile a Cracovia, ma il sapore (cloro) spinge molti, residenti compresi, a preferire quella in bottiglia.',
    sicurezza:
      'Cracovia è una città sicura per gli standard europei, ma è anche una delle mete di addio al celibato più battute del continente, e questo genera un tipo di truffa specifica: promoter di strada, spesso ragazze, che invitano i turisti (soprattutto gruppi di uomini) in "un bar fantastico" nei dintorni di Rynek Główny, via Floriańska o Kazimierz. Il locale applica poi conti gonfiati a dismisura — anche centinaia di euro per pochi drink — con i buttafuori che scoraggiano l\'uscita finché non si paga. La regola è semplice: non seguire mai chi avvicina per strada proponendo un locale, e controllare sempre i prezzi al banco prima di ordinare. Per il resto, le accortezze normali contro i borseggi su tram affollati e nelle vie del centro bastano.',
    trasportiInterni:
      'Il centro storico si gira interamente a piedi. Per il resto della città, la rete di tram e bus KMK è capillare, economica ed efficiente (biglietti a tempo, dai 4 ai 25 PLN circa secondo la durata). Per Auschwitz-Birkenau: bus diretto dalla stazione dei pullman (circa 1h30, con corse ogni 20-40 minuti) o treno fino a Oświęcim (circa 1h40, poi 20-30 minuti a piedi o un breve bus fino al Museo). Per Wieliczka: bus o treno regionale in mezz\'ora circa. Non serve un\'auto a noleggio per un weekend concentrato su Cracovia.',
    costoVita: 'Basso per gli standard dell\'Europa occidentale: pasto in un bar mleczny (i "bar del latte" della tradizione comunista, oggi mense economiche) pochi euro, cena normale 10-15€ a testa, birra o vodka locale a prezzi contenuti.',
    lingua: 'Polacco. L\'inglese è diffuso nel centro storico, negli hotel e tra i più giovani; cala nei quartieri periferici e tra le generazioni più anziane. Qualche parola di polacco (dzień dobry, dziękuję) viene sempre apprezzata.',
    elettricita: '230V, 50Hz, prese di tipo C ed E: le spine italiane a due poli entrano senza problemi, quelle a tre poli con messa a terra possono richiedere un adattatore.',
    fusoOrario: 'UTC+1 (CET), lo stesso fuso orario dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Continentale. Inverni freddi e spesso nevosi da dicembre a febbraio, con temperature regolarmente sotto zero; estati calde e a tratti afose da giugno ad agosto, con luglio-agosto anche il picco di affollamento turistico e delle code ad Auschwitz. Primavera e autunno sono le stagioni più equilibrate, con meno folla e un clima gestibile per camminare tutto il giorno.',
    festivita:
      'La settimana della Pasqua ortodossa e cattolica può sovrapporsi a eventi religiosi sentiti in città. Il 1° novembre (Ognissanti) è una data molto sentita in Polonia, con i cimiteri illuminati da migliaia di candele. A dicembre Rynek Główny ospita uno dei mercatini di Natale più noti dell\'Europa centrale, con relativo affollamento serale. Il 3 maggio (Festa della Costituzione) e l\'11 novembre (Festa dell\'Indipendenza) sono le due feste nazionali principali.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Varsavia; a Cracovia opera un Consolato onorario d\'Italia.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'Rynek Główny, la piazza centrale di Cracovia, con la Sukiennice e le torri della Basilica di Santa Maria sullo sfondo',
  tripPrincipaleSlug: 'cracovia-weekend',
}
