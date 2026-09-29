import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Bolivia in 19 giorni: La Paz, il Salar
// de Uyuni, il Titicaca e l'Amazzonia".
// Il testo narrativo resta nel markdown (src/content/viaggi/49-bolivia-itinerario.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.
//
// A differenza dell'itinerario Indonesia (composito di sei viaggi), questo è
// un unico percorso logistico costruito sulle cinque destinazioni boliviane
// già pubblicate in src/content/destinazioni/bolivia.ts, tutte visitate di
// persona ma senza ancora un racconto scritto in prima persona: vedi la nota
// finale nel markdown per cosa manca. Foto giorno per giorno sourced da
// Wikimedia Commons, crediti in src/content/viaggi-giorno-foto-crediti.ts.

export const boliviaItinerarioMeta: TripMeta = {
  tripSlug: 'bolivia-itinerario',
  paeseSlug: 'bolivia',
  ritmo: 'Impegnativo per la quota più che per lo sforzo fisico: giorni di solo acclimatamento all\'inizio, un tratto molto intenso (Carretera de la Muerte, tre giorni di 4x4 nel Sud Lípez, le miniere di Potosí), e un salto netto di ambiente e altitudine nella parte finale amazzonica',
  trasporti: 'Voli interni (La Paz-Uyuni o bus notturno, La Paz-Sucre, La Paz-Rurrenabaque), tour organizzato in 4x4 nel Sud Lípez, bus di linea tra Uyuni, Potosí e Sucre, barche collettive per l\'Isola del Sole e nelle pampas, Mi Teleférico a La Paz',
  stile: ['alta quota', 'avventura', 'deserti', 'cultura andina', 'natura', 'Amazzonia'],
  adattoA: [
    'chi ha tra le due e le tre settimane e vuole vedere insieme altopiano, salar e Amazzonia invece di scegliere',
    'chi non soffre particolarmente la quota, o è disposto a rispettare i giorni di acclimatamento senza saltarli',
    'chi cerca un paese dove viaggiare in autonomia costa relativamente poco, accettando in cambio infrastrutture meno affidabili (voli, blocchi stradali)',
    'chi vuole affiancare natura estrema (Salar, Sud Lípez, pampas) a una parte storica e culturale forte (miniere di Potosí, Sucre coloniale)',
    'chi è disposto a scegliere un operatore sulla sicurezza e non sul prezzo più basso, per il tour di Uyuni e per la Carretera de la Muerte',
  ],
  puntiForti: [
    'Il tour di tre giorni nel Salar de Uyuni e nel Sud Lípez: il salar sconfinato, le lagune colorate piene di fenicotteri, i geyser a quasi 5.000 metri e la Laguna Verde ai piedi del vulcano Licancabur',
    'La discesa in mountain bike sulla Carretera de la Muerte, tre fasce climatiche in poche ore dal passo glaciale di La Cumbre alla giungla di Yolosa',
    'Le miniere ancora attive del Cerro Rico a Potosí, l\'esperienza più pesante e memorabile del viaggio',
    'Una notte sull\'Isola del Sole sul lago Titicaca, più bella e meno costruita delle isole peruviane sull\'altra sponda',
    'Il salto netto verso le pampas del Rio Yacuma, dove caimani, capibara e delfini rosa si vedono con una facilità che non ha eguali altrove nel viaggio',
  ],
  criticita: [
    'La quota è il tema centrale del viaggio: La Paz sta a 3.640 metri, El Alto e Potosí oltre i 4.000, il Sud Lípez sfiora i 4.800 — i primi due giorni a La Paz vanno presi con calma assoluta, senza eccezioni',
    'I blocchi stradali sono frequenti dopo il cambio di governo del 2025 e possono isolare intere zone per giorni, facendo saltare voli e trasferimenti: l\'itinerario va tenuto elastico, soprattutto sui tratti via terra Uyuni-Potosí-Sucre',
    'Il tour di Uyuni va prenotato in anticipo da La Paz o online, non sul posto: le agenzie di strada e pop-up ad Uyuni cambiano itinerario dopo il pagamento, sovraccaricano i mezzi o usano autisti senza patente o assicurazione',
    'Sulla Carretera de la Muerte non conviene risparmiare sull\'operatore: quasi tutti gli incidenti riportati coinvolgono la fascia economica con bici mal mantenute e gruppi troppo numerosi',
    'I voli La Paz-Rurrenabaque, su piccoli aerei, saltano spesso per il meteo anche fuori dalla stagione delle piogge: serve un giorno di margine, specialmente prima del volo internazionale di rientro',
    'Le miniere del Cerro Rico non sono un\'attrazione turistica: gallerie strette, aria pessima e quota di 4.000 metri, sconsigliate a chi soffre di claustrofobia o problemi respiratori',
    'Forte carenza di valuta estera negli ultimi anni: bancomat che possono restare a secco, meglio arrivare con dollari in contanti e informarsi sulla situazione aggiornata prima di partire',
    'Nelle pampas alcune guide maneggiano la fauna (caimani, anaconda) per intrattenere i clienti: pratica da rifiutare esplicitamente',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con tour organizzati nei tratti che li richiedono per legge o per sicurezza',
    cosaCercavo: undefined,
    treEsperienzePiuBelle:
      'Il secondo giorno del tour nel Sud Lípez tra lagune rosse e geyser a quasi 5.000 metri, le gallerie del Cerro Rico a Potosí, i delfini rosa e i caimani sul Rio Yacuma nelle pampas',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'La Paz', destinazioneSlug: 'la-paz' },
    { nome: 'Copacabana e Isola del Sole', destinazioneSlug: 'titicaca-boliviano' },
    { nome: 'Salar de Uyuni e Sud Lípez', destinazioneSlug: 'salar-de-uyuni' },
    { nome: 'Potosí e Sucre', destinazioneSlug: 'sucre-potosi' },
    { nome: 'Rurrenabaque e il Madidi', destinazioneSlug: 'rurrenabaque-madidi' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a El Alto e primo contatto con La Paz', tratta: 'Volo internazionale su El Alto (LPB)', pernottamento: 'La Paz, zona Sopocachi o San Pedro', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'la-paz', immagine: '/images/viaggi/bolivia-itinerario/giorno-01-la-paz.jpg', imageAlt: 'Il centro di La Paz visto dall\'alto, con l\'altopiano di El Alto al bordo della conca, circa 500 metri più in alto' },
    { titoloGiorno: 'Giorno 2 — La Paz: teleferiche, mercato delle streghe e Valle de la Luna', pernottamento: 'La Paz, zona Sopocachi o San Pedro', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'la-paz', immagine: '/images/viaggi/bolivia-itinerario/giorno-02-la-paz.jpg', imageAlt: 'Le cabine di Mi Teleférico sospese sopra i palazzi di La Paz, il sistema di funivie urbane della città' },
    { titoloGiorno: 'Giorno 3 — Tiwanaku e trasferimento a Copacabana', tratta: 'La Paz → Tiwanaku → Copacabana, circa 4h con la traversata dello stretto di Tiquina', pernottamento: 'Copacabana', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'titicaca-boliviano', immagine: '/images/viaggi/bolivia-itinerario/giorno-03-tiwanaku.jpg', imageAlt: 'La porta d\'ingresso del tempio di Kalasasaya nel sito archeologico di Tiwanaku, Bolivia' },
    { titoloGiorno: 'Giorno 4 — Barca per l\'Isola del Sole e notte sull\'isola', tratta: 'Copacabana → Isola del Sole in barca collettiva', pernottamento: 'Isola del Sole', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'titicaca-boliviano', immagine: '/images/viaggi/bolivia-itinerario/giorno-04-isla-del-sol.jpg', imageAlt: 'Il villaggio di Yumani sull\'Isola del Sole, con le case dai tetti rossi tra i terrazzamenti sopra il lago Titicaca' },
    { titoloGiorno: 'Giorno 5 — L\'Isola del Sole all\'alba e ritorno a La Paz', tratta: 'Isola del Sole → Copacabana → La Paz', pernottamento: 'La Paz', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'la-paz', immagine: '/images/viaggi/bolivia-itinerario/giorno-05-isla-del-sol.jpg', imageAlt: 'Vista del lago Titicaca dall\'Isola del Sole, con le acque blu che si estendono verso l\'orizzonte' },
    { titoloGiorno: 'Giorno 6 — La Carretera de la Muerte in mountain bike', tratta: 'La Cumbre (4.650 m) → Yolosa (1.200 m), circa 64 km in mountain bike', pernottamento: 'La Paz', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'indicativamente 80-170$ secondo l\'operatore; consigliata la fascia 120-170$ per manutenzione e sicurezza', destinazioneSlug: 'la-paz', immagine: '/images/viaggi/bolivia-itinerario/giorno-06-yungas-road.jpg', imageAlt: 'La Carretera de la Muerte, la vecchia strada degli Yungas, che attraversa la fitta foresta subtropicale boliviana' },
    { titoloGiorno: 'Giorno 7 — El Alto e bus notturno verso Uyuni', tratta: 'La Paz → Uyuni, bus notturno (alternativa: volo diretto di circa 1h)', pernottamento: 'Bus notturno La Paz → Uyuni', intensita: 'leggero', destinazioneSlug: 'la-paz', immagine: '/images/viaggi/bolivia-itinerario/giorno-07-el-alto.jpg', imageAlt: 'Bancarelle di abbigliamento nella feria 16 de Julio, il grande mercato di strada di El Alto' },
    { titoloGiorno: 'Giorno 8 — Uyuni, il cimitero dei treni e ingresso nel Salar', tratta: 'Inizio del tour di 3 giorni in 4x4 nel Salar de Uyuni', pernottamento: 'Hotel di sale, Salar de Uyuni (incluso nel tour)', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'tour di 3 giorni indicativamente 150-250$ a persona, più ingresso alla riserva Eduardo Avaroa', destinazioneSlug: 'salar-de-uyuni', immagine: '/images/viaggi/bolivia-itinerario/giorno-08-salar-de-uyuni.jpg', imageAlt: 'La foresta di cactus giganti sull\'Isla Incahuasi, circondata dalla distesa bianca del Salar de Uyuni' },
    { titoloGiorno: 'Giorno 9 — Sud Lípez: lagune colorate e notte a oltre 4.000 metri', pernottamento: 'Alloggio essenziale nel Sud Lípez, oltre 4.000 m (incluso nel tour)', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'salar-de-uyuni', immagine: '/images/viaggi/bolivia-itinerario/giorno-09-laguna-colorada.jpg', imageAlt: 'Fenicotteri di James nelle acque rosse della Laguna Colorada, nel Sud Lípez boliviano' },
    { titoloGiorno: 'Giorno 10 — Geyser Sol de Mañana, Laguna Verde e ritorno a Uyuni', tratta: 'Geyser Sol de Mañana (quasi 5.000 m) → Laguna Verde → rientro in 4x4 a Uyuni', pernottamento: 'Uyuni', statoPernottamento: 'da-confermare', intensita: 'intenso', destinazioneSlug: 'salar-de-uyuni', immagine: '/images/viaggi/bolivia-itinerario/giorno-10-laguna-verde.jpg', imageAlt: 'La Laguna Verde ai piedi del vulcano Licancabur, al confine tra Bolivia e Cile' },
    { titoloGiorno: 'Giorno 11 — Da Uyuni a Potosí', tratta: 'Uyuni → Potosí via terra', pernottamento: 'Potosí', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'sucre-potosi', immagine: '/images/viaggi/bolivia-itinerario/giorno-11-potosi.jpg', imageAlt: 'Il Cerro Rico che sovrasta la città di Potosí, a quasi 4.800 metri di quota' },
    { titoloGiorno: 'Giorno 12 — Potosí e le miniere del Cerro Rico', pernottamento: 'Potosí', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'tour delle miniere indicativamente 15-30$ a persona con guida e attrezzatura', destinazioneSlug: 'sucre-potosi', immagine: '/images/viaggi/bolivia-itinerario/giorno-12-potosi-miniere.jpg', imageAlt: 'Un minatore che trasporta minerale in una carriola nelle gallerie ancora attive del Cerro Rico, a Potosí' },
    { titoloGiorno: 'Giorno 13 — Da Potosí a Sucre', tratta: 'Potosí → Sucre, circa 3h di strada', pernottamento: 'Sucre, centro storico', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'sucre-potosi', immagine: '/images/viaggi/bolivia-itinerario/giorno-13-sucre.jpg', imageAlt: 'La Plaza 25 de Mayo nel centro storico coloniale di Sucre, con i suoi giardini e le palme' },
    { titoloGiorno: 'Giorno 14 — Sucre: centro coloniale e Parque Cretácico', pernottamento: 'Sucre, centro storico', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'sucre-potosi', immagine: '/images/viaggi/bolivia-itinerario/giorno-14-sucre-cretacico.jpg', imageAlt: 'La parete verticale della cava di Cal Orcko al Parque Cretácico, dove sono state trovate migliaia di impronte di dinosauro, vicino a Sucre' },
    { titoloGiorno: 'Giorno 15 — Da Sucre a La Paz', tratta: 'Sucre → La Paz, volo di circa 1h (alternativa: bus notturno)', pernottamento: 'La Paz', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'la-paz', immagine: '/images/viaggi/bolivia-itinerario/giorno-15-la-paz.jpg', imageAlt: 'Vista aerea del quartiere di Sopocachi e del centro di La Paz, incastonato nel canyon dell\'altopiano' },
    { titoloGiorno: 'Giorno 16 — Volo verso Rurrenabaque e ingresso nelle pampas del Yacuma', tratta: 'La Paz → Rurrenabaque, volo di circa 45 minuti, spesso soggetto a cancellazioni meteo', pernottamento: 'Lodge sul Rio Yacuma, pampas (incluso nel tour)', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'tour delle pampas di 3 giorni indicativamente 100-200$ a persona, tutto incluso', destinazioneSlug: 'rurrenabaque-madidi', immagine: '/images/viaggi/bolivia-itinerario/giorno-16-pampas-yacuma.jpg', imageAlt: 'Le barche ormeggiate sulle rive del Rio Yacuma, punto di partenza per i tour nelle pampas boliviane' },
    { titoloGiorno: 'Giorno 17 — Pampas del Yacuma: caimani, capibara e delfini rosa', pernottamento: 'Lodge sul Rio Yacuma, pampas (incluso nel tour)', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'rurrenabaque-madidi', immagine: '/images/viaggi/bolivia-itinerario/giorno-17-pampas-yacuma.jpg', imageAlt: 'Un delfino rosa di fiume (bufeo) emerge dalle acque del Rio Yacuma, nelle pampas boliviane' },
    { titoloGiorno: 'Giorno 18 — Pesca ai piranha e ricerca notturna dei caimani, ritorno a Rurrenabaque', tratta: 'Rientro in barca a Rurrenabaque', pernottamento: 'Rurrenabaque', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'rurrenabaque-madidi', immagine: '/images/viaggi/bolivia-itinerario/giorno-18-rurrenabaque.jpg', imageAlt: 'Il Cañon del Bala, dove il fiume Beni si stringe tra le colline forestate vicino a Rurrenabaque' },
    { titoloGiorno: 'Giorno 19 — Ritorno a La Paz e partenza', tratta: 'Rurrenabaque → La Paz, volo di circa 45 minuti → volo internazionale da El Alto', intensita: 'leggero', destinazioneSlug: 'la-paz', immagine: '/images/viaggi/bolivia-itinerario/giorno-19-el-alto.jpg', imageAlt: 'Il monte Illimani innevato visto da El Alto, vicino all\'aeroporto internazionale di La Paz' },
  ],
  budget: [
    { etichetta: 'Voli intercontinentali', valore: undefined },
    { etichetta: 'Voli interni', valore: 'La Paz-Uyuni (o bus notturno), Sucre-La Paz, La Paz-Rurrenabaque andata e ritorno, su BoA, Amaszonas o EcoJet secondo disponibilità' },
    { etichetta: 'Carretera de la Muerte', valore: 'indicativamente 80-170$ secondo l\'operatore, consigliata la fascia alta' },
    { etichetta: 'Tour Salar de Uyuni e Sud Lípez', valore: 'indicativamente 150-250$ a persona, più ingresso alla riserva Eduardo Avaroa' },
    { etichetta: 'Miniere del Cerro Rico', valore: 'indicativamente 15-30$ a persona con guida' },
    { etichetta: 'Tour pampas del Yacuma', valore: 'indicativamente 100-200$ a persona per 3 giorni, tutto incluso' },
    { etichetta: 'Alloggi', valore: 'tra i più economici del Sud America, con qualche eccezione nei lodge amazzonici' },
    { etichetta: 'Pasti', valore: 'pochi euro a piatto nei mercati coperti fuori dai tour, leggermente di più nei ristoranti turistici' },
  ],
}
