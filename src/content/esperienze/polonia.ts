import type { Esperienza } from '@/lib/types'

// Prima uscita polacca dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/polonia.ts). Prezzi, orari e regole di
// prenotazione — soprattutto quelli di Auschwitz-Birkenau — cambiano spesso e
// vanno riverificati sui canali ufficiali prima di prenotare.

export const esperienzePolonia: Esperienza[] = [
  {
    slug: 'auschwitz-birkenau-visita-guidata',
    paeseSlug: 'polonia',
    destinazioneSlug: 'auschwitz-birkenau',
    nome: 'Visita guidata ad Auschwitz-Birkenau',
    localita: 'Oświęcim, circa 66 km a ovest di Cracovia',
    cosE:
      'La visita con guida-educatore del Museo statale Auschwitz-Birkenau, che copre entrambi i siti — Auschwitz I e Auschwitz II-Birkenau, collegati da una navetta gratuita — con un percorso strutturato di circa 3,5 ore. Nella fascia oraria centrale della giornata (indicativamente dalle 7:30 fino al primo o tardo pomeriggio secondo il mese) l\'ingresso è consentito solo così, o con un tour organizzato equivalente: il tour libero senza guida è possibile solo nelle ore residue, più tardi nel pomeriggio.',
    percheFarla:
      'Perché una guida-educatore formata dal Museo restituisce un contesto storico che i soli pannelli informativi non danno, e perché per la maggior parte delle fasce orarie in alta stagione è comunque l\'unico modo di entrare. È l\'esperienza più importante di un weekend a Cracovia, e va trattata come tale: non un\'attrazione da spuntare, ma una visita che chiede tempo e preparazione.',
    durata: 'circa 3,5 ore per il percorso guidato su entrambi i siti, più il trasporto andata e ritorno da Cracovia (circa 1h30 a tratta in bus, poco meno in tour organizzato)',
    periodo: 'tutto l\'anno; l\'estate porta caldo e più visitatori, l\'inverno un freddo intenso su un percorso in gran parte all\'aperto e privo di ombra a Birkenau',
    costo:
      'l\'ingresso al Museo è gratuito. Il costo è quello del trasporto (bus di linea circa 34 PLN a tratta, treno fino a Oświęcim circa 16,50 PLN) oppure di un tour organizzato con transfer, guida e biglietto inclusi, generalmente alcune decine di euro a persona.',
    comePrenotare:
      'Obbligatoria in anticipo, esclusivamente online sul sito ufficiale visit.auschwitz.org: le entry card (comprese quelle gratuite per il tour senza guida) si possono prenotare fino a tre mesi prima e non sono più acquistabili in loco. Gli slot, soprattutto quelli in fascia guidata e in alta stagione, si esauriscono con settimane di anticipo.',
    cosaPortare: 'Un documento d\'identità (il nome sulla entry card deve corrispondere), abbigliamento comodo e adatto alla stagione — a Birkenau non c\'è quasi ombra — e uno zaino piccolo: c\'è un limite di dimensione per i bagagli ammessi, con deposito a pagamento per quelli più grandi.',
    perChiEAdatta:
      'A chiunque affronti la visita con la giusta disposizione: non è consigliata a chi cerca un\'uscita "leggera" o a bambini molto piccoli. Il Museo stesso sconsiglia la visita ai minori di 14 anni. Richiede di camminare a lungo, spesso all\'aperto.',
    giudizio: 'da-verificare',
    alternative: ['Tour organizzato da Cracovia con transfer, guida e biglietto inclusi, per chi preferisce non gestire da sé prenotazione e trasporto'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: 'I binari ferroviari che attraversano il cancello d\'ingresso di Auschwitz II-Birkenau',
  },
  {
    slug: 'wieliczka-miniera-di-sale',
    paeseSlug: 'polonia',
    destinazioneSlug: 'cracovia',
    nome: 'Miniera di sale di Wieliczka',
    localita: 'Wieliczka, circa 15 km a sud-est di Cracovia',
    cosE:
      'Una delle miniere di sale più antiche del mondo ancora esistenti, in attività ininterrotta dal XIII secolo fino al 1996, oggi Patrimonio dell\'Umanità UNESCO (tra i primi siti inseriti in assoluto, nel 1978). Il Percorso Turistico standard scende attraverso oltre venti camere scavate nel sale su più livelli, fino a raggiungere la Cappella di Santa Kinga, una chiesa sotterranea interamente scolpita nel sale — pavimento, lampadari e bassorilievi compresi — insieme a laghi salini sotterranei e gallerie di legno secolare.',
    percheFarla:
      'Perché non somiglia a nessun\'altra visita della zona: si scende centinaia di gradini in un mondo scavato a mano in sette secoli di lavoro, con una cattedrale sotterranea che è insieme luogo di culto attivo e capolavoro di scultura popolare.',
    durata: 'Percorso Turistico standard 2-3 ore; esiste anche il più impegnativo Percorso dei Minatori, di circa 3 ore, con attività pratiche (si scava e ci si muove in spazi più stretti)',
    periodo: 'tutto l\'anno: la miniera ha una temperatura costante sui 14-16°C indipendentemente dalla stagione in superficie, quindi è anche una buona opzione nelle giornate più calde o più fredde',
    costo: 'biglietto standard del Percorso Turistico attorno ai 120 PLN (circa 25-28€), con riduzioni; i tour con trasporto da Cracovia incluso partono da 50-60€ circa a persona',
    comePrenotare: 'Consigliata la prenotazione online in anticipo, soprattutto nei weekend e in alta stagione, per scegliere una fascia oraria e ridurre l\'attesa in loco.',
    cosaPortare: 'Una felpa o giacca leggera anche d\'estate, per via della temperatura costante sottoterra; scarpe comode per gli oltre 800 scalini di discesa (si risale invece con un ascensore).',
    perChiEAdatta: 'Adatta a quasi tutti; meno indicata a chi soffre di claustrofobia grave, vista la lunga permanenza sottoterra in spazi a tratti stretti.',
    giudizio: 'da-verificare',
    alternative: ['Il Percorso dei Minatori, più fisico ed esperienziale, per chi vuole qualcosa di più del percorso standard'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: 'La Cappella di Santa Kinga nella Miniera di sale di Wieliczka, con lampadari e bassorilievi scolpiti interamente nel sale',
  },
  {
    slug: 'kazimierz-food-vodka-tour',
    paeseSlug: 'polonia',
    destinazioneSlug: 'cracovia',
    nome: 'Tour gastronomico e degustazione di vodka a Kazimierz',
    localita: 'Kazimierz, Cracovia',
    cosE:
      'Un giro a piedi tra i locali storici di Kazimierz — spesso con tappa in un bar mleczny d\'epoca comunista per i pierogi, in una zapiekanka house sul Plac Nowy e in uno dei bar più vecchi del quartiere per una degustazione di vodka polacca, compresa quella aromatizzata come la żubrówka — offerto da diversi operatori locali sotto formula simile, con 3-4 tappe e assaggi multipli in circa tre ore.',
    percheFarla:
      'Perché Kazimierz è il quartiere dove la cucina polacca di strada e la tradizione della vodka convivono con la storia del quartiere ebraico, e un tour guidato mette in fila in una sera cose che altrimenti richiederebbero giorni di ricerca autonoma tra locali senza insegne turistiche.',
    durata: 'circa 3-3,5 ore, in genere nel tardo pomeriggio o in serata',
    periodo: 'tutto l\'anno, essendo un\'esperienza prevalentemente al chiuso',
    costo: 'indicativamente 40-70€ a persona secondo l\'operatore e il numero di tappe/assaggi incluso',
    comePrenotare: 'Tramite le piattaforme di tour online o direttamente con gli operatori locali con base a Kazimierz; consigliata la prenotazione con qualche giorno di anticipo nei weekend.',
    cosaPortare: 'Nessuna attrezzatura particolare; comodo verificare in anticipo eventuali intolleranze alimentari con l\'operatore.',
    perChiEAdatta: 'Adatta a chi vuole un assaggio guidato della cucina polacca senza dover scegliere da solo tra decine di locali; meno indicata a chi preferisce mangiare con calma in un unico posto.',
    giudizio: 'da-verificare',
    alternative: ['Girare da soli i bary mleczne e i locali di Plac Nowy, più lento ma più economico e senza vincoli di orario'],
    tripSlugs: ['cracovia-weekend'],
    imageAlt: 'Un banco di pierogi appena fatti in un bar mleczny di Cracovia, con diverse varietà servite su un piatto',
  },
]
