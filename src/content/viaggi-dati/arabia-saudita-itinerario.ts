import type { TripMeta } from '@/lib/types'

// Overlay di metadati strutturati per "Arabia Saudita in 12 giorni".
// Il testo narrativo resta nel markdown (src/content/viaggi/22-arabia-saudita-itinerario.md).
// `titoloGiorno` deve combaciare esattamente con le intestazioni "### Giorno N — ..."
// del file markdown, altrimenti il merge in DayTimeline non trova la corrispondenza.

export const arabiaSauditaItinerarioMeta: TripMeta = {
  tripSlug: 'arabia-saudita-itinerario',
  paeseSlug: 'arabia-saudita',
  ritmo: 'Medio, ma con distanze enormi: tre voli interni e trasferimenti lunghi, compensati da giornate non piene',
  trasporti: 'Voli interni Saudia e flynas, auto a noleggio ad AlUla e nell\'Asir, 4x4 con autista per l\'Edge of the World, Uber nelle città',
  stile: ['archeologia', 'deserto', 'montagna'],
  adattoA: [
    'chi vuole vedere un paese che fino al 2019 non si poteva visitare, mentre sta cambiando',
    'chi accetta regole di comportamento precise: niente alcol, abbigliamento coperto, La Mecca interdetta',
    'chi organizza in anticipo, perché Hegra e gli alloggi ad AlUla sono contingentati',
  ],
  puntiForti: [
    'Hegra, la seconda città nabatea dopo Petra, con centoundici tombe e quasi nessuno davanti',
    'L\'Edge of the World, trecento metri di scarpata senza recinzioni, biglietti né chioschi',
    'Le montagne dell\'Asir, verdi e coltivate a terrazze, che smentiscono l\'idea stessa di Arabia',
  ],
  criticita: [
    'Hegra si visita solo con guida e con prenotazione contingentata: va prenotata prima dei voli',
    'Gli alloggi ad AlUla sono pochi e cari, e in alta stagione si esauriscono',
    'Le distanze rendono i voli interni praticamente obbligatori: Jeddah-AlUla sono oltre 700 km, Riyadh-Jeddah quasi 950',
    'L\'alcol non esiste in tutto il paese e La Mecca è vietata ai non musulmani, con controlli sulle autostrade',
    'L\'Asir ha il calendario invertito rispetto al resto del paese: la sua stagione buona è l\'estate',
    'Il paese cambia molto in fretta: regole d\'ingresso e accessi ai siti vanno riverificati prima di partire',
  ],
  budgetTotale: undefined,
  viaggioInBreve: {
    percheHoScelto: undefined,
    conChiSonoPartito: 'in autonomia, con visto elettronico, voli interni e auto a noleggio',
    cosaCercavo: undefined,
    treEsperienzePiuBelle: 'Hegra senza nessuno davanti, l\'Edge of the World al tramonto, Al-Balad nell\'ultima ora di luce',
    cosaCambierei: undefined,
    aChiLoConsiglio: undefined,
  },
  tappeMappa: [
    { nome: 'Jeddah', destinazioneSlug: 'jeddah' },
    { nome: 'AlUla', destinazioneSlug: 'alula' },
    { nome: 'Riyadh', destinazioneSlug: 'riyadh-diriyah' },
    { nome: 'Abha e Asir', destinazioneSlug: 'abha-asir' },
  ],
  giorni: [
    { titoloGiorno: 'Giorno 1 — Arrivo a Jeddah', tratta: 'Arrivo su JED', pernottamento: 'Jeddah, Al-Balad o Corniche', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'jeddah' },
    { titoloGiorno: 'Giorno 2 — Al-Balad', pernottamento: 'Jeddah, Al-Balad o Corniche', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'quartiere gratuito; case-museo con biglietti contenuti', destinazioneSlug: 'jeddah' },
    { titoloGiorno: 'Giorno 3 — Volo per AlUla', tratta: 'Volo JED → ULH (circa 1h30), in alternativa 7h di strada', pernottamento: 'AlUla', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'alula' },
    { titoloGiorno: 'Giorno 4 — Hegra', pernottamento: 'AlUla', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'biglietto con visita guidata contingentata, da prenotare online in anticipo', destinazioneSlug: 'alula' },
    { titoloGiorno: 'Giorno 5 — Jabal Ikmah, Dadan e l\'oasi', pernottamento: 'AlUla', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'alula' },
    { titoloGiorno: 'Giorno 6 — Volo per Riyadh', tratta: 'Volo ULH → RUH (circa 2h)', pernottamento: 'Riyadh, Olaya o King Fahd Road', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'riyadh-diriyah' },
    { titoloGiorno: 'Giorno 7 — Diriyah', pernottamento: 'Riyadh', statoPernottamento: 'da-confermare', intensita: 'medio', costiNoti: 'biglietto d\'ingresso per At-Turaif, musei interni compresi', destinazioneSlug: 'riyadh-diriyah' },
    { titoloGiorno: 'Giorno 8 — L\'Edge of the World', tratta: 'Riyadh → Jebel Fihrayn (1h30, ultimo tratto su pista)', pernottamento: 'Riyadh', statoPernottamento: 'da-confermare', intensita: 'intenso', costiNoti: 'sito gratuito; escursione con 4x4 e autista 300-600 riyal', destinazioneSlug: 'riyadh-diriyah' },
    { titoloGiorno: 'Giorno 9 — Volo per Abha', tratta: 'Volo RUH → AHB (circa 1h30)', pernottamento: 'Abha', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'abha-asir' },
    { titoloGiorno: 'Giorno 10 — Rijal Almaa', pernottamento: 'Abha', statoPernottamento: 'da-confermare', intensita: 'medio', destinazioneSlug: 'abha-asir' },
    { titoloGiorno: 'Giorno 11 — Le montagne', pernottamento: 'Abha', statoPernottamento: 'da-confermare', intensita: 'leggero', destinazioneSlug: 'abha-asir' },
    { titoloGiorno: 'Giorno 12 — Rientro', tratta: 'Volo da Abha con scalo a Jeddah o Riyadh', intensita: 'leggero', destinazioneSlug: 'abha-asir' },
  ],
  budget: [
    { etichetta: 'Visto turistico elettronico', valore: 'circa 535 riyal (attorno ai 130€), assicurazione sanitaria inclusa' },
    { etichetta: 'Voli internazionali', valore: undefined },
    { etichetta: 'Tre voli interni', valore: 'Saudia e flynas, prezzi bassi ma da sommare' },
    { etichetta: 'Alloggi ad AlUla', valore: 'la voce più alta del viaggio: strutture poche e prezzi alti' },
    { etichetta: 'Alloggi a Jeddah e Riyadh', valore: 'prezzi da capitale' },
    { etichetta: 'Ingressi', valore: 'Hegra con visita guidata contingentata; Diriyah At-Turaif; Edge of the World gratuito ma con escursione 300-600 riyal' },
    { etichetta: 'Alcol', valore: 'voce inesistente: non è in vendita nel paese' },
  ],
}
