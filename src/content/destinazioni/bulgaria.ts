import type { Destinazione } from '@/lib/types'

// Contenuto ricostruito dal viaggio "Bulgaria on the snow" (src/content/viaggi/11-bulgaria-bansko-rila.md).

export const destinazioniBulgaria: Destinazione[] = [
  {
    slug: 'bansko',
    paeseSlug: 'bulgaria',
    ordine: 1,
    nome: 'Bansko',
    tipologia: ['sci', 'montagna'],
    giorniConsigliati: '4 giorni, tre pieni sulle piste',
    visitataPersonalmente: true,
    introduzione: 'Il comprensorio sciistico più famoso di Bulgaria, con circa 70-75 km di piste tra i Monti Pirin e un centro storico tra case in pietra e legno.',
    percheAndarci: 'Per l\'esperienza esotica di sciare in un angolo d\'Europa raramente nei programmi delle vacanze bianche, a prezzi molto più bassi delle Alpi.',
    cosaVedere: ['Il centro storico di Bansko, tra case della "scuola di Bansko" e la parte più moderna', 'Vista dal Todorka Peak (2.560 metri)'],
    cosaFare: [
      'Sci sulle piste di Bansko Ski Zone — vedi la scheda esperienza dedicata',
      'Discesa illuminata di 7,5 km per lo sci notturno — vedi la scheda esperienza dedicata',
      'Après-ski da Sopranos o Happy End Bar alla base della gondola',
      'Cena in mehana tipica nel centro storico',
    ],
    doveDormire:
      'Ho scelto un hotel a pochi minuti a piedi dalla stazione della gondola, comodo per raggiungere le piste al mattino e a due passi dal centro storico per le serate. Non una struttura di marca né particolarmente ricercata, solo una base pratica per la settimana sulla neve.\n\nAlternative vicino alla gondola — economiche: Hotel Dumanov (circa 150 metri dalla stazione a valle), La Vien Guest House (5 minuti a piedi, gestione familiare) · fascia media: Hotel Ida (piscina interna e idromassaggio), MPM Hotel Sport (accesso quasi diretto alle piste) · lusso: Kempinski Hotel Grand Arena Bansko (l\'unico vero ski-in/ski-out del paese), Premier Luxury Mountain Resort.',
    doveMangiare: 'Mehane del centro storico, tra kapama, banitsa e shopska salata, sempre accompagnati da rakia.',
    comeArrivare: 'Circa 2-2h30 di auto da Sofia (160 km), con alternative in shuttle/transfer privato, bus pubblico o treno+minibus.',
    comeSpostarsi: 'Gondola a 8 posti dal centro alle piste; sci per gli spostamenti tra le piste.',
    periodoMigliore: '1 dicembre - metà aprile, con innevamento artificiale garantito su oltre il 90% delle piste',
    costi: 'Skipass giornaliero 35-40€ (scontato online fino al 25%); birra al rifugio 1,50-2€; cena in mehana 15-20€ a testa.',
    erroriDaEvitare: ['Prenotare gli skipass online con qualche giorno di anticipo per lo sconto', 'Non aspettarsi piste da Alpi: si va per l\'esperienza e il prezzo, non per il livello del comprensorio'],
    miaEsperienza:
      'Non mi aspettavo grandi cose dallo sci in Bulgaria, ed è esattamente quello che ho trovato: piste carine, ben tenute, niente di esagerato rispetto alle Alpi. Ma è proprio questo il bello: andarci non è tanto per lo sci in sé, quanto per l\'esperienza esotica di sciare in un angolo d\'Europa fuori dai soliti circuiti.',
    esperienzeSlugs: ['sci-bansko', 'discesa-notturna-bansko'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'Le piste innevate del comprensorio sciistico di Bansko, Bulgaria',
    immagine: '/images/bulgaria/bansko-stock.jpg',
  },
  {
    slug: 'monastero-rila',
    paeseSlug: 'bulgaria',
    ordine: 2,
    nome: 'Monastero di Rila',
    tipologia: ['religione', 'storia', 'unesco'],
    giorniConsigliati: 'mezza giornata, lungo il tragitto di rientro',
    visitataPersonalmente: true,
    introduzione: 'Il più grande e importante monastero ortodosso di Bulgaria, Patrimonio UNESCO dal 1983, fondato nel X secolo dall\'eremita Ivan di Rila.',
    percheAndarci: 'Il vero colpo di scena del viaggio: un contrasto totale con le giornate sulla neve, e probabilmente il ricordo più forte di tutto il tour.',
    cosaVedere: [
      'La Chiesa della Natività della Vergine, a cinque cupole, completamente ricoperta da affreschi coloratissimi',
      'Le mura di pietra alte 24 metri che racchiudono il complesso',
      'Il Museo di Storia Ecclesiastica, con la Croce di Rafail intagliata con oltre 1.500 figure bibliche',
    ],
    cosaFare: ['Visita al complesso monastico e alla chiesa — vedi la scheda esperienza dedicata', 'Visita al Museo di Storia Ecclesiastica'],
    doveDormire: 'Non ho pernottato qui: tappa di mezza giornata lungo il tragitto di rientro verso Sofia.',
    doveMangiare: 'Nessuna indicazione specifica: tappa concentrata sulla visita.',
    comeArrivare: 'Deviazione dalla strada principale tra Bansko e Sofia.',
    comeSpostarsi: 'A piedi all\'interno del complesso monastico.',
    periodoMigliore: 'tutto l\'anno',
    costi: 'Ingresso al complesso e alla chiesa gratuito; Museo di Storia Ecclesiastica circa 8 BGN (4€).',
    erroriDaEvitare: ['Coprire spalle e ginocchia per entrare in chiesa', 'Niente foto o video all\'interno degli edifici religiosi'],
    miaEsperienza:
      'Rispetto alle giornate sulla neve, il monastero è stato il vero colpo di scena del viaggio: gli affreschi coloratissimi della Chiesa della Natività della Vergine, uniti al silenzio della montagna intorno, restano il ricordo più vivido di tutto il tour.',
    esperienzeSlugs: ['visita-monastero-rila'],
    tripSlugs: ['bulgaria-bansko-rila'],
    imageAlt: 'La facciata affrescata della Chiesa della Natività della Vergine al Monastero di Rila, Bulgaria',
    immagine: '/images/copertine/bulgaria-bansko-rila.jpg',
  },
]
