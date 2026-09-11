import type { Paese } from '@/lib/types'

// Paese non ancora visitato di persona: contenuto guida verificabile
// (cosa vedere, come muoversi, costi indicativi), nessun ricordo personale.
// tripPrincipaleSlug punta all'itinerario combinato del Centro America,
// ancora da scrivere — il codice gestisce il caso con un link di fallback
// a /viaggi.

export const guatemala: Paese = {
  slug: 'guatemala',
  nome: 'Guatemala',
  continente: 'America Centrale',
  titolo: 'Guatemala: Antigua, il lago Atitlán, Tikal e i vulcani da scalare',
  descrizione:
    'Il paese più "denso" del Centro America: una capitale coloniale circondata da tre vulcani, un lago vulcanico costellato di villaggi maya raggiungibili solo in barca, le piramidi di Tikal che spuntano dalla giungla del Petén e la possibilità di dormire davanti a un vulcano in eruzione.',
  periodoMigliore:
    'novembre-aprile, stagione secca; da maggio a ottobre piove quasi ogni pomeriggio, con strade di montagna più difficili',
  durataConsigliata: '10-14 giorni per Antigua, Atitlán, Semuc Champey e Tikal senza correre',
  budgetIndicativo:
    'tra i paesi più economici della regione: ostelli e comedor a pochi euro, shuttle turistici tra le tappe principali sui 15-30€ a tratta, trekking all\'Acatenango sui 60-120€',
  scheda: {
    documenti:
      'Passaporto con almeno 6 mesi di validità residua dall\'ingresso. Per i cittadini italiani e UE nessun visto per soggiorni turistici fino a 90 giorni. Il vaccino contro la febbre gialla è obbligatorio solo per chi arriva da un paese a rischio di trasmissione.',
    valuta:
      'Quetzal guatemalteco (GTQ), indicativamente 1€ = 8-9 GTQ. Attenzione a una regola poco nota: non si possono introdurre nel paese più di 10.000 dollari USA (o equivalente) in contanti, e le pene previste in caso di violazione sono severe.',
    pagamenti:
      'Bancomat nelle città e nelle località turistiche, di solito il modo più semplice per procurarsi quetzales. Le carte sono accettate negli hotel e nei ristoranti turistici, ma i contanti restano indispensabili per mercati, lance sul lago Atitlán, tuk tuk e villaggi. Conviene tenere sempre tagli piccoli.',
    connettivita:
      'Tre operatori: Tigo (la copertura migliore), Claro e Movistar. La SIM prepagata costa indicativamente 20-50 GTQ e va registrata mostrando il passaporto; i pacchetti dati partono da circa 30 GTQ. Le eSIM sono un\'alternativa comoda per evitare la registrazione in loco.',
    salute:
      'Nessuna vaccinazione obbligatoria salvo febbre gialla per chi proviene da paesi a rischio. Consigliate le profilassi di routine più epatite A e tifo. Non bere acqua di rubinetto. La profilassi antimalarica riguarda solo alcune zone di bassa quota, il Petén in particolare: da valutare con un centro di medicina dei viaggi.',
    sicurezza:
      'Il tasso di criminalità è alto nelle aree urbane più povere, mentre gli itinerari turistici classici sono generalmente tranquilli. Le raccomandazioni ricorrenti: attenzione agli effetti personali nella capitale e sui mezzi pubblici, preferire gli shuttle turistici ai bus di linea quando si viaggia con i bagagli, evitare spostamenti notturni su strade extraurbane.',
    trasportiInterni:
      'Gli shuttle turistici collegano tutte le tappe principali (Antigua, Atitlán, Lanquín, Flores) e sono lo standard per chi viaggia. I chicken bus sono economicissimi ma scomodi e poco adatti con i bagagli. Per il Petén conviene il volo interno da Città del Guatemala a Flores. La rete stradale non asfaltata è spesso in cattivo stato: i tempi reali superano quasi sempre quelli stimati dalle mappe.',
    costoVita:
      'Tra i paesi più economici del Centro America: letto in ostello e pasti in comedor locali costano pochi euro, gli shuttle tra le tappe principali si aggirano sui 15-30€ a tratta.',
    lingua: 'Spagnolo, affiancato da oltre venti lingue maya ancora vive (k\'iche\', kaqchikel, q\'eqchi\', tz\'utujil e altre). L\'inglese è diffuso solo nei contesti turistici.',
    elettricita: '120V, 60Hz, prese di tipo A e B (standard nordamericano): serve un adattatore dall\'Italia.',
    fusoOrario: 'UTC-6 tutto l\'anno, senza ora legale: 7 ore indietro rispetto all\'Italia in ora legale, 8 in inverno.',
    clima:
      'Stagione secca da novembre ad aprile, la migliore per viaggiare; da maggio a ottobre piove quasi ogni pomeriggio, con strade di montagna più difficili e acque meno limpide a Semuc Champey. Il clima cambia molto con la quota: Antigua e Atitlán sono fresche la sera, il Petén è caldo e umido tutto l\'anno.',
    festivita:
      'La Semana Santa di Antigua, con i tappeti di segatura e le processioni, è tra le più celebri dell\'America Latina — bellissima ma con prezzi e affollamento molto più alti. Il 1° novembre, a Sumpango e Santiago Sacatepéquez, si tiene la festa degli aquiloni giganti per il Día de Todos los Santos.',
    emergenze:
      'Numeri utili: 110 per la polizia nazionale, 1500 per la polizia turistica (Asistur), 122/123 per vigili del fuoco e ambulanza. L\'Ambasciata d\'Italia si trova a Città del Guatemala.',
    aggiornatoAl: 'settembre 2026',
  },
  stileViaggio: ['vulcani', 'cultura maya', 'natura', 'on the road'],
  heroImageAlt: 'L\'arco di Santa Catalina ad Antigua Guatemala con il vulcano Agua sullo sfondo',
  tripPrincipaleSlug: 'centro-america-itinerario',
}
