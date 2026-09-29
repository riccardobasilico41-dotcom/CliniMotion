import type { Esperienza } from '@/lib/types'

// Prima uscita estone dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/estonia.ts). Prezzi e orari cambiano nel tempo e
// vanno riverificati sui canali ufficiali prima di partire.

export const esperienzeEstonia: Esperienza[] = [
  {
    slug: 'tallinn-kadriorg-kumu',
    paeseSlug: 'estonia',
    destinazioneSlug: 'tallinn',
    nome: 'Il Parco di Kadriorg e il museo KUMU',
    localita: 'Kadriorg, Tallinn',
    cosE:
      'Una visita al Parco di Kadriorg, fatto costruire nel 1718 da Pietro il Grande per la moglie Caterina I su progetto dell\'architetto italiano Niccolò Michetti, con il Palazzo barocco (oggi museo d\'arte straniera) e i suoi giardini geometrici, seguita da una tappa al KUMU, il museo d\'arte estone in un edificio contemporaneo a pochi passi, Museo Europeo dell\'Anno nel 2008.',
    percheFarla:
      'Perché mostra una Tallinn completamente diversa dalla Città Vecchia medievale: quella imperiale russa del Settecento, con un parco degno di una reggia, affiancata dall\'arte estone del Novecento e contemporanea raccolta nel KUMU — un contrasto netto in pochi minuti di cammino.',
    durata: 'circa 1 ora per il solo parco, 2-3 ore aggiungendo una visita completa al KUMU',
    periodo: 'il parco tutto l\'anno, con i giardini più suggestivi da maggio a settembre; il museo è al chiuso, quindi adatto anche a giornate di pioggia',
    costo: 'accesso al parco gratuito; ingresso al KUMU indicativamente 12-16€ secondo la mostra in corso; il Palazzo di Kadriorg ha un biglietto separato, di solito pochi euro',
    comePrenotare: 'Nessuna prenotazione necessaria per il parco; i biglietti del KUMU si acquistano in loco o online sul sito del museo, utile in caso di mostre temporanee particolarmente richieste.',
    cosaPortare: 'Nessuna attrezzatura particolare; comodo controllare in anticipo il giorno di chiusura settimanale del museo.',
    perChiEAdatta: 'Adatta a chiunque apprezzi parchi storici e arte; il KUMU in particolare è indicato per chi vuole capire l\'Estonia oltre il centro storico medievale.',
    giudizio: 'da-verificare',
    alternative: ['Il solo giro nel parco e nei giardini, per chi preferisce restare all\'aperto senza una visita museale'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Il Palazzo barocco di Kadriorg a Tallinn con i giardini geometrici in primo piano',
  },
  {
    slug: 'tallinn-telliskivi-creative-city',
    paeseSlug: 'estonia',
    destinazioneSlug: 'tallinn',
    nome: 'Telliskivi Creative City',
    localita: 'Telliskivi, Tallinn',
    cosE:
      'Un giro tra i capannoni dell\'ex complesso industriale e ferroviario sovietico di Telliskivi, riconvertito a partire dal 2009 nel quartiere creativo più vivo della città: negozi indipendenti, studi di design, gallerie, street art sulle facciate dei vecchi edifici in mattoni e una concentrazione di bar e ristoranti che cambia radicalmente registro rispetto alla Città Vecchia medievale.',
    percheFarla:
      'Perché è il modo più diretto per vedere l\'altra Tallinn, quella della scena tech e creativa che ha reso l\'Estonia un caso internazionale nel digitale (da qui è nato Skype), raccontata attraverso l\'architettura industriale sovietica riconvertita invece che attraverso un museo.',
    durata: 'un\'ora e mezza-due ore per un giro con calma tra negozi, street art e una sosta in un locale',
    periodo: 'tutto l\'anno; i mercati alimentari e gli eventi all\'aperto del quartiere sono più frequenti da maggio a settembre',
    costo: 'l\'accesso al quartiere è libero; il costo dipende da cosa si mangia o si acquista, in linea con i prezzi medi di Tallinn',
    comePrenotare: 'Nessuna prenotazione necessaria: si raggiunge a piedi o con un breve tragitto in tram dalla Città Vecchia.',
    cosaPortare: 'Nessuna attrezzatura particolare.',
    perChiEAdatta: 'Adatta a chi cerca un contrappunto contemporaneo al centro medievale; meno indicata a chi ha tempo solo per la sola Città Vecchia.',
    giudizio: 'da-verificare',
    alternative: ['Un giro più mirato ai soli mercati del weekend, quando il quartiere è più animato e i banchi gastronomici temporanei aprono tra i capannoni'],
    tripSlugs: ['capitali-baltiche'],
    imageAlt: 'Un murale colorato su un vecchio capannone industriale nel quartiere creativo di Telliskivi, a Tallinn',
  },
]
