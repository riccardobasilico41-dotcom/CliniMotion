import type { Paese } from '@/lib/types'

// La Repubblica Ceca entra nell'archivio con un solo itinerario: un weekend
// lungo a Praga (3-4 giorni), nello stesso filone "weekend lunghi in Europa"
// già usato per Roma, Firenze, Venezia, Parigi e Cracovia. Nessuno ha ancora
// messo piede a Praga per conto di questo sito: la destinazione di Praga
// resta visitataPersonalmente: false e senza il campo miaEsperienza, che nel
// tipo Destinazione è facoltativo apposta — se assente, la UI mostra un
// placeholder editoriale invece di un ricordo inventato (vedi il commento sul
// tipo in src/lib/types.ts, e lo stesso trattamento usato in
// src/content/paesi/polonia.ts per Cracovia). Questa è quindi scheda di
// ricerca, non un diario: fatti verificabili, senza episodi in prima persona.

export const repubblicaCeca: Paese = {
  slug: 'repubblica-ceca',
  nome: 'Repubblica Ceca',
  continente: 'Europa',
  titolo: 'Repubblica Ceca: Praga in un weekend lungo, tra Rynek... anzi Staré Město, il Castello e i boccali di birra più economici d\'Europa',
  descrizione:
    'Per ora l\'archivio copre una sola meta ceca, la più naturale per iniziare: Praga, la "città dalle cento torri" uscita quasi indenne dai bombardamenti della Seconda guerra mondiale, con uno dei centri storici medievali meglio conservati d\'Europa. La Piazza della Città Vecchia con l\'Orologio Astronomico, il Ponte Carlo che unisce le due rive della Moldava, il colle del Castello con la Cattedrale di San Vito, il quartiere di Malá Strana ai piedi del Castello e quello ebraico di Josefov: tutto è concentrato in un\'area percorribile a piedi in tre-quattro giorni, con Vyšehrad come contrappunto tranquillo a un\'ora di cammino dal centro più affollato.',
  periodoMigliore:
    'aprile-maggio e settembre-ottobre, con clima mite e senza il pieno dell\'alta stagione. Giugno-luglio-agosto sono caldi e molto affollati, con la Piazza della Città Vecchia e il Ponte Carlo al limite della capienza; novembre-marzo è freddo (spesso sotto zero, con possibilità di neve) ma la città regge bene anche d\'inverno, con meno code e i mercatini di Natale a dicembre.',
  durataConsigliata:
    '3-4 giorni per il centro storico di Praga (Staré Město, Malá Strana, il Castello, Josefov) e Vyšehrad come mezza giornata più tranquilla; non è pensata per essere estesa a un tour di tutto il paese.',
  budgetIndicativo:
    'tra le capitali europee più economiche fuori dalle zone più turistiche: pasti, alloggi e trasporti pubblici costano una frazione dell\'Europa occidentale, con la birra tradizionalmente più economica dell\'acqua in bottiglia nei locali non turistici. Le voci che possono far lievitare il conto sono i ristoranti intorno alla Piazza della Città Vecchia (spesso con menù gonfiati per i turisti) e i biglietti dei principali monumenti (Castello, quartiere ebraico), da mettere comunque in conto.',
  stileViaggio: ['città', 'storia', 'architettura', 'gastronomia'],
  scheda: {
    documenti:
      'Repubblica Ceca nell\'Unione Europea e nell\'area Schengen: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i tre mesi.',
    valuta:
      'Corona ceca (CZK), non l\'euro. È la sorpresa più comune per chi dà per scontato che "Unione Europea" significhi automaticamente euro: la Repubblica Ceca non è nell\'eurozona e non ha una data fissata per entrarci, quindi si paga in corone ovunque. Alcuni locali turistici intorno alla Piazza della Città Vecchia espongono prezzi "convertiti" in euro a un cambio spesso svantaggioso: meglio pagare sempre in CZK.',
    pagamenti:
      'Paese molto avanzato sui pagamenti digitali: carta e contactless funzionano quasi ovunque, tram e metro compresi. Il contante resta utile nei locali più tradizionali e per le mance. Attenzione ai cambiavalute più vistosi intorno a Piazza Venceslao e nel centro storico, che spesso applicano commissioni nascoste o tassi di acquisto/vendita molto divaricati: meglio prelevare direttamente in corone da uno sportello bancario o usare un cambiavalute con tabellino trasparente, un po\' fuori dall\'asse più turistico.',
    connettivita:
      'Con una SIM italiana il roaming UE è incluso nelle tariffe normali, senza bisogno di una SIM locale. Copertura 4G/5G buona in tutta la città.',
    salute:
      'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile a Praga.',
    sicurezza:
      'Praga è una città sicura per gli standard europei, con criminalità violenta contro i turisti molto rara. Il rischio reale è quello dei piccoli furti e delle truffe da zona turistica: **borseggi concentrati sul tram 22** (la linea che sale verso il Castello, spesso presa dai turisti) e nei vagoni affollati della metro, con la tecnica classica della distrazione in coppia; **ristoranti intorno alla Piazza della Città Vecchia e via Karlova** che applicano conti gonfiati, menù senza prezzi, "welcome drink" non richiesti ma addebitati, o pane e antipasti lasciati sul tavolo e fatturati come se fossero stati ordinati; occasionali **finti agenti di polizia** che fermano i turisti per un presunto controllo del biglietto o del passaporto chiedendo il pagamento immediato di una multa in contanti — un vero agente non chiede mai soldi per strada. La regola pratica è semplice: controllare sempre il menù e i prezzi prima di ordinare, chiedere conferma se qualcosa viene servito senza essere stato richiesto, e verificare il tesserino di chiunque si qualifichi come poliziotto.',
    trasportiInterni:
      'Il centro storico si gira interamente a piedi. Per il resto della città, la rete di metro (tre linee), tram e bus è capillare, puntuale ed economica (biglietti a tempo del sistema PID, da circa 30 a 120 CZK secondo la durata), con biglietto singolo valido su tutti i mezzi e obbligo di convalida a bordo. Non serve un\'auto a noleggio per un weekend concentrato sul centro di Praga.',
    costoVita:
      'Basso per gli standard dell\'Europa occidentale fuori dalle zone più turistiche: un mezzo litro di birra alla spina in un pub di quartiere costa indicativamente 55-80 CZK, contro i 100-150 CZK (o più) dei locali sulla Piazza della Città Vecchia; un pasto normale fuori dal centro turistico si aggira sui 10-15€ a testa.',
    lingua: 'Ceco. L\'inglese è diffuso nel centro storico, negli hotel e tra i più giovani; cala nei quartieri periferici e tra le generazioni più anziane. Qualche parola di ceco (dobrý den, děkuji) viene sempre apprezzata.',
    elettricita: '230V, 50Hz, prese di tipo C ed E: le spine italiane a due poli entrano senza problemi, quelle a tre poli con messa a terra possono richiedere un adattatore.',
    fusoOrario: 'UTC+1 (CET), lo stesso fuso orario dell\'Italia tutto l\'anno, ora legale compresa: nessuna differenza oraria.',
    clima:
      'Continentale. Inverni freddi e a tratti nevosi da dicembre a febbraio, con temperature regolarmente sotto zero; estati calde da giugno ad agosto, con luglio-agosto anche il picco di affollamento turistico. Primavera e autunno sono le stagioni più equilibrate, con meno folla e un clima gestibile per camminare tutto il giorno.',
    festivita:
      'A dicembre la Piazza della Città Vecchia e Piazza Venceslao ospitano due dei mercatini di Natale più noti dell\'Europa centrale, con relativo affollamento serale. Il 28 ottobre (Giorno dell\'Indipendenza) e il 6 luglio (Jan Hus) sono tra le feste nazionali più sentite.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Praga.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'La Piazza della Città Vecchia di Praga con la torre dell\'Orologio Astronomico e le guglie della Chiesa di Tyn sullo sfondo',
  tripPrincipaleSlug: 'praga-weekend',
}
