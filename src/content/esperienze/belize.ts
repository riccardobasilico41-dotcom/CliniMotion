import type { Esperienza } from '@/lib/types'

// Paese non ancora visitato: miaEsperienza assente e giudizio 'da-verificare'
// ovunque. Prezzi e modalità sono indicativi, da riverificare prima di
// prenotare.

export const esperienzeBelize: Esperienza[] = [
  {
    slug: 'hol-chan-shark-ray-alley',
    paeseSlug: 'belize',
    destinazioneSlug: 'caye-caulker',
    nome: 'Snorkeling a Hol Chan e Shark Ray Alley',
    localita: 'Hol Chan Marine Reserve, tra Caye Caulker e Ambergris Caye',
    cosE:
      'Un\'uscita in barca di mezza giornata (o giornata intera) con più soste di snorkeling: il canale naturale di Hol Chan, dove la barriera si apre e si concentrano pesci di ogni taglia, tartarughe e barracuda, e Shark Ray Alley, dove squali nutrice e razze si avvicinano alle barche da decenni.',
    percheFarla:
      'È il modo più diretto ed economico per capire perché la barriera corallina del Belize è Patrimonio UNESCO: in poche ore si nuota accanto a squali nutrice, razze, tartarughe e lamantini (questi ultimi solo con fortuna).',
    durata: 'mezza giornata (3-4 ore) o giornata intera con più soste',
    periodo: 'tutto l\'anno, con visibilità migliore nella stagione secca (dicembre-aprile)',
    costo: 'indicativamente 60-100 BZD a persona per il tour di mezza giornata, più le tasse d\'ingresso al parco marino, spesso escluse dal prezzo pubblicizzato',
    comePrenotare: 'Direttamente presso gli operatori sull\'isola, anche il giorno prima; conviene scegliere barche con gruppi piccoli.',
    cosaPortare: 'Crema solare reef-safe (le altre sono vietate in diverse aree protette), maglietta a maniche lunghe da mare, macchina subacquea se si vuole documentare.',
    perChiEAdatta: 'Adatta anche a chi non è esperto: si nuota in superficie con giubbotto disponibile, ma serve essere a proprio agio in acqua aperta.',
    giudizio: 'da-verificare',
    alternative: ['Immersione con bombole sugli stessi siti per chi è brevettato'],
    tripSlugs: [],
    imageAlt: 'Squali nutrice e razze in acqua bassa a Shark Ray Alley, Belize',
  },
  {
    slug: 'grotta-atm',
    paeseSlug: 'belize',
    destinazioneSlug: 'san-ignacio-cayo',
    nome: 'Grotta ATM (Actun Tunichil Muknal)',
    localita: 'Tapir Mountain Nature Reserve, distretto del Cayo',
    cosE:
      'Un\'escursione di giornata dentro una grotta usata dai Maya come luogo rituale: si raggiunge con una camminata nella giungla e tre guadi di fiume, si entra a nuoto e si prosegue per ore tra passaggi stretti e camere allagate, fino alle sale dove ceramiche e resti umani sono rimasti dove furono lasciati oltre mille anni fa — inclusa la celebre "Crystal Maiden".',
    percheFarla:
      'È una delle poche grotte archeologiche al mondo visitabili con i reperti ancora in situ, senza vetrine né ricostruzioni: un\'esperienza archeologica e fisica insieme, spesso raccontata come il momento più forte di un viaggio in Belize.',
    durata: 'giornata intera, circa 7-8 ore incluso il trasporto',
    periodo: 'tutto l\'anno, con possibili chiusure dopo piogge intense per il livello dell\'acqua nella grotta',
    costo: 'indicativamente 100-140 USD a persona, con trasporto, guida, ingresso e pranzo inclusi',
    comePrenotare:
      'Solo tramite operatori con licenza specifica per la grotta: gli accessi sono contingentati e nessuno può entrare senza una guida autorizzata. Meglio prenotare con qualche giorno di anticipo.',
    cosaPortare:
      'Abbigliamento che si possa bagnare del tutto, scarpe chiuse con buona presa da usare anche in acqua, calzini (si cammina scalzi in calzino nelle sale con i reperti). Le macchine fotografiche di qualsiasi tipo sono vietate, telefoni inclusi.',
    perChiEAdatta:
      'Serve saper nuotare ed essere a proprio agio in spazi stretti e al buio: ci sono passaggi in cui si procede in acqua fino al petto e fessure da superare di lato. Non adatta a chi soffre di claustrofobia.',
    giudizio: 'da-verificare',
    alternative: ['Cave tubing lungo il fiume Caves Branch, molto più leggero e senza componente archeologica'],
    tripSlugs: [],
    imageAlt: 'Ingresso allagato della grotta di Actun Tunichil Muknal nella giungla del Belize',
  },
]
