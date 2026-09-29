import type { Esperienza } from '@/lib/types'

// Prima uscita lituana dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/lituania.ts). Prezzi e orari cambiano nel tempo e
// vanno riverificati sui canali ufficiali prima di partire.

export const esperienzeLituania: Esperienza[] = [
  {
    slug: 'uzupis-repubblica-passeggiata',
    paeseSlug: 'lituania',
    destinazioneSlug: 'vilnius',
    nome: 'Passeggiata nella Repubblica di Užupis',
    localita: 'Užupis, Vilnius',
    cosE:
      'Un giro a piedi, autonomo o con guida, nel quartiere che il primo aprile 1997 si è autoproclamato "Repubblica Indipendente di Užupis", con tanto di bandiera, presidente onorario, un piccolo esercito simbolico (circa dodici persone) e una costituzione di 41 articoli — molti dei quali surreali o poetici ("ognuno ha diritto a essere fraintendo", "ognuno ha diritto di amare e prendersi cura del gatto") — incisa su targhe in decine di lingue lungo il Muro della Costituzione, su via Paupio.',
    percheFarla:
      'Perché racconta, con leggerezza dichiarata ma con una storia artistica vera alle spalle (il quartiere era la zona più degradata della Vilnius sovietica, poi ripopolata da artisti negli anni Novanta), una delle trovate più originali e meno "da cartolina" di tutto il Baltico, ed è un\'ora abbondante di passeggiata che nessuna guida in fretta rende davvero.',
    durata: 'un\'ora e mezza-due ore per un giro con calma, incluso il Muro della Costituzione e le gallerie d\'arte',
    periodo: 'tutto l\'anno; il 1° aprile, giorno dell\'"indipendenza", il quartiere ospita eventi e celebrazioni speciali',
    costo: 'gratuita in autonomia; i tour guidati a piedi partono da circa 15-20€ a persona',
    comePrenotare: 'Nessuna prenotazione necessaria per il giro autonomo; i tour guidati si prenotano online o direttamente in loco presso gli operatori del centro storico.',
    cosaPortare: 'Nessuna attrezzatura particolare; comode scarpe da passeggio, vista la pavimentazione irregolare di alcune vie.',
    perChiEAdatta: 'Adatta a chiunque; particolarmente indicata per chi ama l\'arte di strada, le gallerie indipendenti e le storie fuori dal comune.',
    giudizio: 'da-verificare',
    alternative: ['Un tour guidato a piedi con focus sulla storia artistica del quartiere, per chi vuole più contesto rispetto al giro autonomo'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il Muro della Costituzione di Užupis a Vilnius, con targhe multilingue incise sui suoi 41 articoli',
  },
  {
    slug: 'trakai-castello-lago-galve',
    paeseSlug: 'lituania',
    destinazioneSlug: 'trakai',
    nome: 'Visita al Castello dell\'Isola di Trakai e giro in barca sul lago Galvė',
    localita: 'Trakai, circa 28 km a ovest di Vilnius',
    cosE:
      'La visita al Museo Storico dentro il Castello dell\'Isola di Trakai, seguita da un giro in barca a remi o pedalò sul lago Galvė per vedere il castello dall\'acqua — l\'angolazione più fotografata e, secondo molti visitatori, quella che rende davvero l\'idea di un castello "che galleggia" su un\'isola.',
    percheFarla:
      'Perché unisce in poche ore un vero castello gotico medievale, ricostruito con cura filologica nel Novecento sui resti originali, e un\'esperienza di lago che a Vilnius, capitale senza acqua paragonabile, semplicemente non esiste.',
    durata: 'circa 1-1,5 ore per la visita al museo, più 30-60 minuti di barca o pedalò secondo quanto ci si ferma sul lago; mezza giornata in tutto, trasporti da Vilnius inclusi',
    periodo: 'tutto l\'anno per il museo; la barca è un\'attività prevalentemente da aprile a ottobre, quando i noleggi sul lago sono aperti',
    costo: 'ingresso al museo 12€ in bassa stagione (ottobre-marzo), 14€ in alta stagione (aprile-settembre); noleggio barca o pedalò indicativamente 8-15€ l\'ora secondo il mezzo',
    comePrenotare: 'Il museo si visita liberamente, biglietto acquistabile in loco o online; il noleggio barche si prenota direttamente ai chioschi sul lungolago vicino al ponte pedonale, senza bisogno di prenotazione anticipata fuori dai weekend di alta stagione.',
    cosaPortare: 'Scarpe comode per il tratto a piedi dalla stazione, e uno strato in più anche in estate se si va in barca: sul lago il vento raffredda più che in città.',
    perChiEAdatta: 'Adatta praticamente a tutti, famiglie comprese; il tratto a piedi dalla stazione (circa 30-40 minuti) è l\'unico elemento fisico da mettere in conto.',
    giudizio: 'da-verificare',
    alternative: ['Solo la visita al castello, per chi ha meno tempo o preferisce non affrontare il lago in barca'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Una barca a remi sul lago Galvė con il Castello dell\'Isola di Trakai sullo sfondo',
  },
]
