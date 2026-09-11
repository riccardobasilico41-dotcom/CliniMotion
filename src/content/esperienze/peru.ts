import type { Esperienza } from '@/lib/types'

// Paese non ancora confermato come visitato: miaEsperienza assente e giudizio
// 'da-verificare' ovunque. Prezzi e regole di prenotazione in Perù cambiano
// spesso, vanno riverificati prima di prenotare.

export const esperienzePeru: Esperienza[] = [
  {
    slug: 'huayna-picchu',
    paeseSlug: 'peru',
    destinazioneSlug: 'machu-picchu',
    nome: 'Salita al Huayna Picchu',
    localita: 'Machu Picchu, Cusco',
    cosE:
      'La montagna che fa da sfondo alle foto classiche di Machu Picchu. Il sentiero sale ripidissimo lungo gradini inca scavati nella roccia, con tratti esposti assicurati da cavi, fino a una piattaforma da cui si guarda la cittadella dall\'alto. Richiede un biglietto specifico, con quota giornaliera separata e molto più ristretta di quella generale.',
    percheFarla: 'È l\'unico modo per vedere Machu Picchu dall\'alto e capirne l\'impianto: dalla cittadella non si percepisce la forma dell\'insieme.',
    durata: 'circa 2-3 ore andata e ritorno, oltre alla visita del sito',
    periodo: 'tutto l\'anno, con fasce orarie assegnate; nella stagione delle piogge i gradini diventano scivolosi',
    costo: 'il circuito che include Huayna Picchu o la Montaña Machu Picchu costa circa 200 soles (54$ circa), contro i circa 152 soles del circuito base',
    comePrenotare:
      'Solo sul portale ufficiale del Ministero della Cultura, tuboleto.cultura.pe. La disponibilità va controllata con almeno 2-3 mesi di anticipo in qualsiasi stagione e 3-4 mesi per i mesi di punta (giugno, luglio, agosto): i posti sono pochissimi e finiscono in fretta.',
    cosaPortare: 'Scarpe con buona presa, acqua, e la consapevolezza che alcuni tratti sono stretti ed esposti.',
    perChiEAdatta: 'Chi non soffre di vertigini e ha un minimo di allenamento: è breve ma molto ripida, a 2.700 metri di quota.',
    giudizio: 'da-verificare',
    alternative: [
      'Montaña Machu Picchu: più lunga e meno ripida, vista più ampia ma più distante',
      'Porta del Sole (Intipunku): raggiungibile senza biglietto extra, con vista panoramica sulla cittadella',
    ],
    tripSlugs: [],
    imageAlt: 'Vista di Machu Picchu dall\'alto del Huayna Picchu, Perù',
  },
  {
    slug: 'cammino-inca',
    paeseSlug: 'peru',
    destinazioneSlug: 'machu-picchu',
    nome: 'Cammino Inca classico',
    localita: 'Da km 82 a Machu Picchu, regione di Cusco',
    cosE:
      'Quattro giorni lungo la via lastricata originale costruita dagli Inca, con tre notti in campo, il valico di Warmiwañusca a 4.215 metri e l\'arrivo a Machu Picchu all\'alba dell\'ultimo giorno attraverso Intipunku, la Porta del Sole. Si può percorrere solo con un\'agenzia autorizzata, mai in autonomia.',
    percheFarla: 'Perché è il percorso per cui la cittadella era stata pensata: l\'arrivo dall\'alto, dalla Porta del Sole, è una cosa che chi arriva in treno non vede.',
    durata: '4 giorni, 3 notti',
    periodo:
      'da marzo a gennaio; il sentiero chiude tutto febbraio per manutenzione. La stagione migliore, da maggio a settembre, è anche quella in cui i permessi si esauriscono prima',
    costo: 'indicativamente 600-900$ a persona, con permesso, guida, portatori, tende, pasti e treno di rientro inclusi',
    comePrenotare:
      'Tramite agenzie autorizzate, con 5-6 mesi di anticipo per i mesi da maggio ad agosto. Il permesso è nominale e legato al passaporto: non è trasferibile né modificabile.',
    cosaPortare: 'Sacco a pelo adatto a temperature sotto zero, scarpe da trekking rodate, abbigliamento a strati, torcia frontale. I portatori si occupano del grosso del bagaglio.',
    perChiEAdatta: 'Serve una discreta forma fisica e, soprattutto, acclimatamento: il valico supera i 4.200 metri il secondo giorno.',
    giudizio: 'da-verificare',
    alternative: [
      'Cammino Inca corto (2 giorni), dal km 104, che arriva comunque alla Porta del Sole',
      'Trek del Salkantay, senza permessi contingentati e più economico',
    ],
    tripSlugs: [],
    imageAlt: 'Sentiero lastricato del Cammino Inca tra le montagne verso Machu Picchu, Perù',
  },
  {
    slug: 'trek-choquequirao',
    paeseSlug: 'peru',
    destinazioneSlug: 'choquequirao',
    nome: 'Trek a Choquequirao',
    localita: 'Da Cachora, regione di Apurímac',
    cosE:
      'Quattro o cinque giorni di cammino andata e ritorno da Cachora, con la discesa di circa 1.500 metri nel canyon dell\'Apurímac e la risalita sull\'altro versante fino alla cittadella inca di Choquequirao, scavata solo in parte e quasi sempre deserta.',
    percheFarla:
      'Perché è l\'unico sito inca di scala monumentale che si può ancora vedere in solitudine: meno di diecimila visitatori l\'anno, contro il milione e mezzo di Machu Picchu. E perché il progetto di teleferica, se mai partirà, cambierà tutto.',
    durata: '4-5 giorni andata e ritorno; 8-9 giorni per la traversata fino a Machu Picchu',
    periodo: 'da aprile a ottobre; nella stagione delle piogge il sentiero sul fianco del canyon è pericoloso per le frane',
    costo: 'trek organizzato indicativamente 400-700$ a persona per 4-5 giorni con guida, muli e pasti; molto meno in autonomia, più l\'ingresso al sito (attorno ai 60 soles)',
    comePrenotare: 'Tramite agenzie di Cusco; non servono permessi contingentati come per il Cammino Inca, quindi si può organizzare anche con pochi giorni di anticipo.',
    cosaPortare:
      'Scarpe da trekking solide, protezione solare seria (il fondovalle è caldissimo e senza ombra), almeno 3 litri d\'acqua al giorno, sacco a pelo. I muli per i bagagli valgono ogni sol speso.',
    perChiEAdatta:
      'Camminatori allenati: le guide di Cusco lo considerano più duro sia del Cammino Inca sia del Salkantay, perché il dislivello è concentrato e il caldo nel canyon pesa.',
    giudizio: 'da-verificare',
    alternative: ['Traversata Choquequirao-Machu Picchu in 8-9 giorni, per chi ha tempo ed esperienza'],
    tripSlugs: [],
    imageAlt: 'Terrazzamenti inca di Choquequirao affacciati sul canyon dell\'Apurímac, Perù',
  },
  {
    slug: 'homestay-amantani',
    paeseSlug: 'peru',
    destinazioneSlug: 'lago-titicaca',
    nome: 'Notte in famiglia ad Amantaní',
    localita: 'Isola di Amantaní, lago Titicaca',
    cosE:
      'Il tour classico di due giorni sul Titicaca prevede la notte a casa di una famiglia dell\'isola di Amantaní: si cena con loro, si sale al tempio di Pachatata per il tramonto e si partecipa alla festa serale del villaggio con gli abiti tradizionali prestati dagli ospiti.',
    percheFarla: 'Perché è l\'unico momento del giro sul lago in cui si esce dal circuito turistico degli Uros e si entra davvero in contatto con chi ci vive.',
    durata: '2 giorni, 1 notte, partendo dal porto di Puno',
    periodo: 'tutto l\'anno; da maggio a settembre le giornate sono più soleggiate ma le notti gelide',
    costo: 'indicativamente 30-60$ a persona per il tour di due giorni, tra i migliori rapporti qualità-prezzo del Perù',
    comePrenotare: 'Tramite le agenzie di Puno, anche il giorno prima; conviene sceglierne una che lavori direttamente con le famiglie dell\'isola.',
    cosaPortare:
      'Vestiti pesanti per la notte (a 3.800 metri non c\'è riscaldamento nelle case), torcia, contanti in piccoli tagli e, se si vuole, un piccolo dono utile per la famiglia ospitante — generi alimentari più che souvenir.',
    perChiEAdatta: 'Chiunque accetti sistemazioni essenziali: bagno condiviso, niente acqua calda garantita, niente elettricità continua.',
    giudizio: 'da-verificare',
    alternative: ['Notte a Taquile, meno organizzata per l\'ospitalità ma altrettanto autentica'],
    tripSlugs: [],
    imageAlt: 'Case in pietra e terrazzamenti sull\'isola di Amantaní, lago Titicaca, Perù',
  },
]
