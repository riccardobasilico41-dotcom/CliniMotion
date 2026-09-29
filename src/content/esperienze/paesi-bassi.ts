import type { Esperienza } from '@/lib/types'

// Prima uscita olandese dell'archivio: nessuna di queste esperienze è stata
// provata di persona, quindi giudizio resta 'da-verificare' su tutte e
// miaEsperienza è assente di proposito (vedi il commento in
// src/content/destinazioni/paesi-bassi.ts). Prezzi, orari e regole di
// prenotazione — soprattutto quelli della Casa di Anna Frank — cambiano
// spesso e vanno riverificati sui canali ufficiali prima di prenotare.

export const esperienzePaesiBassi: Esperienza[] = [
  {
    slug: 'casa-di-anna-frank',
    paeseSlug: 'paesi-bassi',
    destinazioneSlug: 'amsterdam',
    nome: 'Casa di Anna Frank (Anne Frank Huis)',
    localita: 'Prinsengracht 263-267, Amsterdam',
    cosE:
      'Il museo allestito nell\'edificio dove Anne Frank, la sua famiglia e altri quattro rifugiati si nascosero dal luglio 1942 all\'agosto 1944, prima di essere scoperti e deportati. Il percorso attraversa l\'"Achterhuis" (l\'alloggio segreto sul retro dell\'edificio, dietro la libreria girevole che ne nascondeva l\'accesso) rimasto in gran parte spoglio per volontà di Otto Frank, l\'unico sopravvissuto della famiglia, e ricostruisce la vicenda attraverso il diario di Anne e materiali storici originali.',
    percheFarla:
      'Perché è uno dei luoghi di memoria più visitati e più diretti d\'Europa sulla persecuzione degli ebrei durante l\'occupazione nazista dei Paesi Bassi, reso universale dal diario di una ragazza di tredici anni. Come per altri luoghi di memoria di questo archivio, va affrontata con la disposizione giusta: non è una tappa turistica come le altre.',
    durata: 'circa 1-1,5 ore per il percorso completo, con ingresso a fascia oraria prenotata',
    periodo: 'tutto l\'anno; gli spazi interni sono ristretti e la visita può risultare affollata anche fuori stagione',
    costo: 'circa 16€ per gli adulti, con riduzioni per bambini e ragazzi; l\'ingresso online prevede una piccola commissione di prenotazione',
    comePrenotare:
      'Esclusivamente online sul sito ufficiale annefrank.org: i biglietti si aprono con settimane di anticipo (in genere il primo martedì di ogni mese per i due mesi successivi) e si esauriscono rapidamente, soprattutto nei weekend e nei mesi estivi. Una piccola quota di biglietti last-minute viene rilasciata ogni giorno online, ma non è una strategia affidabile per chi ha un weekend breve.',
    cosaPortare: 'Un documento d\'identità (il nome sul biglietto deve corrispondere); zaini e borse grandi non sono ammessi e vanno lasciati al guardaroba.',
    perChiEAdatta:
      'Adatta a un pubblico ampio, adolescenti compresi, con la consapevolezza che gli spazi interni sono stretti, con scale ripide in stile olandese, e la visita può risultare emotivamente intensa.',
    giudizio: 'da-verificare',
    alternative: ['Nessuna vera alternativa equivalente: chi non trova biglietti può comunque vedere l\'esterno dell\'edificio sul Prinsengracht e visitare il centro di documentazione adiacente'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'La facciata del Prinsengracht 263 ad Amsterdam, l\'edificio che ospita il museo della Casa di Anna Frank',
  },
  {
    slug: 'amsterdam-in-bicicletta',
    paeseSlug: 'paesi-bassi',
    destinazioneSlug: 'amsterdam',
    nome: 'Noleggio bici e giro in bicicletta per la città',
    localita: 'Amsterdam, punti di noleggio diffusi in tutto il centro',
    cosE:
      'Il noleggio di una bicicletta da uno dei numerosi punti in città (catene diffuse o negozi indipendenti) per spostarsi come fa la maggior parte degli amsterdammer: non un\'attività turistica a sé, ma il modo più naturale di vivere la città per uno o più giorni, con piste ciclabili dedicate su quasi tutte le strade principali.',
    percheFarla:
      'Perché Amsterdam è disegnata per la bicicletta più che per qualunque altro mezzo, ed è probabilmente l\'unico modo di sentirsi davvero parte del ritmo della città invece di osservarlo da fuori. Richiede però di imparare in fretta alcune regole non scritte, diverse da quelle di una città italiana.',
    durata: 'variabile, da poche ore a un\'intera giornata; il noleggio è tipicamente giornaliero',
    periodo: 'tutto l\'anno, con l\'accortezza di vestirsi per la pioggia (frequente) e il vento',
    costo: 'circa 10-15€ al giorno per una bici standard, con cauzione richiesta; ombrellone/casco raramente inclusi (i ciclisti locali quasi mai indossano il casco)',
    comePrenotare: 'Non serve prenotazione: i punti di noleggio sono numerosi e concentrati vicino alla Stazione Centrale e nel centro storico; nei weekend di alta stagione conviene comunque arrivare presto per avere scelta.',
    cosaPortare: 'Un documento d\'identità o carta di credito per la cauzione; abbigliamento a strati e, se possibile, una mantellina antipioggia leggera.',
    perChiEAdatta:
      'Adatta a chiunque sappia andare in bicicletta con una minima sicurezza nel traffico urbano; meno indicata a chi non è mai andato in bici tra veicoli e pedoni, vista la densità di traffico ciclabile del centro.',
    giudizio: 'da-verificare',
    alternative: ['Un tour guidato in bici con una guida locale, per chi preferisce muoversi in gruppo e con qualcuno che segnala le regole sul momento invece di impararle da soli'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Una fila di biciclette a noleggio parcheggiate lungo un canale nel centro di Amsterdam',
  },
  {
    slug: 'crociera-sui-canali-amsterdam',
    paeseSlug: 'paesi-bassi',
    destinazioneSlug: 'amsterdam',
    nome: 'Crociera sui canali',
    localita: 'Partenze da diversi punti di imbarco nel centro di Amsterdam',
    cosE:
      'Un giro in barca, aperta o coperta secondo la stagione, lungo l\'anello dei canali del Grachtengordel e spesso anche lungo l\'IJ (il grande bacino d\'acqua a nord della Stazione Centrale), con commento audio o guida dal vivo sulla storia dell\'anello dei canali e delle case che vi si affacciano.',
    percheFarla:
      'Perché l\'anello dei canali, patrimonio UNESCO, si legge in modo diverso dall\'acqua: le case che dai ponti sembrano tutte simili rivelano dall\'imbarcazione la varietà di gable (frontoni) e decorazioni che raccontano secoli di storia mercantile della città.',
    durata: 'circa 1-1,5 ore per il giro classico; esistono anche crociere serali con aperitivo o al tramonto, più lunghe',
    periodo: 'tutto l\'anno; le partenze serali d\'estate, con luce lunga fino a tardi, restano le più richieste',
    costo: 'circa 15-20€ a persona per il giro standard; le crociere serali con aperitivo o cena costano di più',
    comePrenotare: 'Online in anticipo nei weekend e in alta stagione, oppure direttamente al punto di imbarco fuori stagione; diversi operatori offrono orari frequenti lungo tutto il giorno.',
    cosaPortare: 'Uno strato in più anche in estate: sull\'acqua fa sempre più fresco che a terra, per il vento.',
    perChiEAdatta: 'Adatta praticamente a chiunque, compresi bambini e persone con mobilità ridotta, essendo un\'attività seduta e senza sforzo fisico.',
    giudizio: 'da-verificare',
    alternative: ['Un tour in barca elettrica autonoma senza skipper, senza patente nautica richiesta, per chi vuole più libertà di percorso e meno commento storico'],
    tripSlugs: ['amsterdam-weekend'],
    imageAlt: 'Una barca turistica che naviga lungo uno dei canali del Grachtengordel ad Amsterdam, tra case a schiera del Seicento',
  },
]
