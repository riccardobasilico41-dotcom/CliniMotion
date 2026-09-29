import type { Paese } from '@/lib/types'

// Terza e ultima tappa dell'itinerario combinato "Capitali baltiche in 9
// giorni" (src/content/viaggi/61-capitali-baltiche.md). Stesso trattamento
// delle altre due schede baltiche: nessuna destinazione o esperienza è stata
// vissuta di persona, visitataPersonalmente resta false e miaEsperienza è
// assente di proposito. tripPrincipaleSlug punta all'itinerario combinato,
// come su lituania.ts e lettonia.ts.

export const estonia: Paese = {
  slug: 'estonia',
  nome: 'Estonia',
  continente: 'Europa',
  titolo: 'Estonia: la Tallinn medievale, il parco di Kadriorg e il contrasto di Telliskivi',
  descrizione:
    'Tallinn ha uno dei centri storici medievali meglio conservati del nord Europa, patrimonio UNESCO, arroccato sulla collina di Toompea e disceso nella città bassa dei mercanti anseatici. A pochi minuti di tram, il parco e il palazzo barocco di Kadriorg, fatti costruire da Pietro il Grande, raccontano l\'Estonia zarista; a pochi altri minuti, l\'ex complesso industriale sovietico di Telliskivi è oggi il quartiere creativo più vivo della città. È anche il paese che più di ogni altro in Europa ha costruito la propria immagine attorno al digitale — da qui è nato Skype, e l\'Estonia è stata la prima nazione al mondo a offrire la e-Residency, un\'identità digitale a chiunque nel mondo voglia aprire un\'impresa europea online. In questo archivio l\'Estonia è la terza e ultima tappa dell\'itinerario combinato delle tre capitali baltiche, dopo Vilnius e Riga.',
  periodoMigliore:
    'maggio-settembre, con giugno-agosto il periodo più caldo e con le giornate più lunghe (quasi 19 ore di luce a fine giugno), ma anche il più affollato nella Città Vecchia; maggio e settembre restano miti con meno turisti. Da novembre a marzo il freddo è pungente, spesso sotto zero, con neve frequente da dicembre a febbraio — la Città Vecchia innevata e i mercatini di Natale hanno però un fascino proprio.',
  durataConsigliata:
    '3 giorni per Tallinn, la Città Vecchia, Toompea, Kadriorg e Telliskivi, come tappa conclusiva di un itinerario più ampio da Vilnius e Riga.',
  budgetIndicativo:
    'leggermente più caro di Vilnius e Riga ma ancora contenuto per gli standard nordici: pasto normale 10-18€, ingresso alle quattro torri delle mura cittadine 12€, ingresso al museo Kumu di Kadriorg 12-16€ secondo la mostra.',
  stileViaggio: ['città', 'storia', 'architettura', 'innovazione'],
  scheda: {
    documenti:
      'Estonia nell\'Unione Europea, nell\'area Schengen e nell\'eurozona: per i cittadini italiani basta la carta d\'identità valida per l\'espatrio (o il passaporto), senza formalità per soggiorni turistici sotto i novanta giorni.',
    valuta: 'Euro, dal 2011 — la prima delle tre capitali baltiche ad adottarlo, prima di Lettonia (2014) e Lituania (2015).',
    pagamenti:
      'Il paese più avanzato al mondo sui pagamenti e servizi digitali: carta e contactless sono lo standard quasi ovunque, dai mercati ai bus, e il contante è marginale anche per i piccoli acquisti.',
    connettivita: 'Con una SIM italiana il roaming UE è incluso nelle tariffe normali. Copertura 4G/5G eccellente a Tallinn e sulla costa.',
    salute: 'Tessera europea di assicurazione malattia (TEAM) valida. Nessuna vaccinazione richiesta. Acqua del rubinetto potabile a Tallinn.',
    sicurezza:
      'Tallinn è una capitale sicura per gli standard europei, con la normale attenzione ai borseggi nella Città Vecchia più turistica. L\'Estonia confina a est con la Russia, lungo il fiume Narva: quella zona di frontiera, nell\'estremo nord-est del paese, resta completamente fuori da questo itinerario, che si concentra su Tallinn e sul collegamento in bus da Riga.',
    trasportiInterni:
      'Il centro storico si gira interamente a piedi. Tram e bus della rete Tallinna Linnatransport (gratuiti per i residenti registrati, a pagamento per i visitatori con biglietti economici) collegano Kadriorg e Telliskivi al centro in pochi minuti. Non serve un\'auto a noleggio.',
    costoVita:
      'Il più caro dei tre Baltici, ma ancora nettamente sotto le capitali nordiche coperte altrove su questo sito (Oslo, Stoccolma, Reykjavík): pasto in un locale informale 10-15€, cena normale 15-20€ a testa.',
    lingua:
      'Estone, lingua ugrofinnica — imparentata con il finlandese (mutuamente comprensibile solo in parte, tra vicini di lunga data) e senza alcuna relazione con il lituano o il lettone, che appartengono invece alla famiglia linguistica baltica. È la differenza linguistica più netta tra le tre capitali di questo itinerario. Alfabeto latino con lettere proprie (õ, ä, ö, ü). L\'inglese è molto diffuso a Tallinn, specie tra i più giovani, complice anche la forte scena tech del paese.',
    elettricita: '230V, 50Hz, prese di tipo C ed F: le spine italiane a due poli entrano senza problemi.',
    fusoOrario: 'UTC+2 in inverno, UTC+3 in estate (EET/EEST) — un\'ora avanti rispetto all\'Italia tutto l\'anno, come Lettonia e Lituania.',
    clima:
      'Continentale umido, il più fresco dei tre Baltici per la posizione più settentrionale e l\'affaccio diretto sul Golfo di Finlandia. Inverni freddi e bui, spesso sotto zero da dicembre a febbraio; estati miti con giornate lunghissime intorno al solstizio.',
    festivita:
      'Il Festival della Canzone estone (Laulupidu), patrimonio culturale immateriale UNESCO insieme a quelli di Lettonia e Lituania, si tiene ogni cinque anni con decine di migliaia di coristi. Il 24 giugno, Jaanipäev (San Giovanni), è la festa più sentita del paese, con falò fino a notte fonda. A dicembre la Città Vecchia ospita uno dei mercatini di Natale più noti del nord Europa in Piazza del Municipio.',
    emergenze: 'Numero unico europeo 112. L\'Ambasciata d\'Italia è a Tallinn.',
    aggiornatoAl: 'settembre 2026',
  },
  heroImageAlt: 'I tetti rossi e le torri medievali della Città Vecchia di Tallinn viste dalla piattaforma panoramica di Kohtuotsa',
  tripPrincipaleSlug: 'capitali-baltiche',
}
