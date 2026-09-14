/**
 * Crediti fotografici per le copertine sourced da Wikimedia Commons — solo
 * quelle non originali del sito (le foto "-stock.jpg" e quelle già in
 * `copertine/` prima di questo file restano senza credito qui: erano già
 * nel repo, sorgente non ritracciata retroattivamente).
 *
 * Le licenze CC BY e CC BY-SA richiedono attribuzione: questo file la tiene
 * tracciata in un posto solo, leggibile da chi mantiene il sito. Non è
 * ancora mostrata in pagina (nessuna richiesta in tal senso) — se in futuro
 * si vuole un credito visibile (es. una piccola dicitura sotto l'immagine o
 * una pagina "crediti fotografici"), i dati sono già tutti qui pronti da
 * collegare, senza dover ripercorrere ogni fonte da capo.
 *
 * Chiave = `Viaggio['slug']`, stessa chiave di `copertineViaggi`.
 */

export type CreditoImmagine = {
  autore: string
  licenza: string
  fonteUrl: string
}

export const creditiCopertine: Record<string, CreditoImmagine> = {
  'cina-classica': {
    autore: 'Luka Peternel',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Jinshanling-facing-west-2019-Luka-Peternel.jpg',
  },
  'cina-paesaggi': {
    autore: 'Chensiyuan',
    licenza: 'CC BY-SA 4.0 / 3.0 / GFDL',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
  },
  'corea-del-sud-itinerario': {
    autore: 'CES (Wikipedia in inglese)',
    licenza: 'Pubblico dominio',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Dorasan_Station.jpg',
  },
  'malesia-singapore': {
    autore: 'Chainwit.',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Batu_Caves_stairs_2022-05.jpg',
  },
  'borneo-itinerario': {
    autore: 'Kallerna',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:St._John%27s_Peak_Mount_Kinabalu_3.jpg',
  },
  'stopover-golfo': {
    autore: 'Phil6007',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_view_of_Dubai_Creek.jpg',
  },
  'arabia-saudita-itinerario': {
    autore: 'Francisco Anzola',
    licenza: 'CC BY 2.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Green_woodwork_in_old_Jeddah_(Al_Balad)_October_8_2021.jpg',
  },
  'dolomiti-estate': {
    autore: 'Daniele Bonaldo',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tre_cime_di_Lavaredo.jpg',
  },
  'parigi-5-giorni': {
    autore: 'Benh Lieu Song',
    licenza: 'Pubblico dominio / CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tour_Eiffel_Wikimedia_Commons.jpg',
  },
  'normandia-bretagna': {
    autore: 'Annick Bregain (Kalianouk)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Grandes_mar%C3%A9es_Mont_Saint_Michel_21_mars_2015.jpg',
  },
  'castelli-loira': {
    autore: 'Hélène Rival',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Escalier-central-de-face.jpg',
  },
  'bordeaux-e-vigneti': {
    autore: 'MJJR',
    licenza: 'CC BY 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bordeaux_Bourse_R05.jpg',
  },
  'rotte-dei-vini-francia': {
    autore: 'Adam Baker (AlphaTangoBravo)',
    licenza: 'CC BY 2.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Descending_into_Riquewihr_through_vineyards.jpg',
  },
  'provenza-camargue': {
    autore: 'Benh Lieu Song',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pont_du_Gard_BLS.jpg',
  },
  'settimana-bianca-francia': {
    autore: 'Christian David (Espandero)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Panorama_of_Aiguille_du_Midi_station,_Chamonix,_Haute-Savoie.jpg',
  },
  'tour-du-mont-blanc': {
    autore: 'Hagai Agmon-Snir (Agmonsnir)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:MonteBiancoAug082024_01.jpg',
  },
  'settimana-bianca': {
    autore: 'Guba Zoky Rabko',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Piste_Bo%C3%A8_-_View_from_piste_Alta_Badia_-_panoramio.jpg',
  },
  'grandi-citta-italia': {
    autore: 'FeaturedPics',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseo_2020.jpg',
  },
  'sicilia-itinerario': {
    autore: 'Grey48 (via Pixabay)',
    licenza: 'CC0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sicily_Taormina_Teatro_Greco_Etna.jpg',
  },
  'rotte-dei-vini-itinerario': {
    autore: 'Davide Tomatis (Toma15996)',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Autunno_da_Clavesana_1.jpg',
  },
  'roma-4-giorni': {
    autore: 'Julian Lupyan',
    licenza: 'CC0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum,_Eastern_Interior.jpg',
  },
  'firenze-3-giorni': {
    autore: 'Thomas Roessler',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: "https://commons.wikimedia.org/wiki/File:Brunelleschi%27s_Dome,_Florence_Cathedral.jpg",
  },
  'milano-e-i-laghi': {
    autore: 'Julian Lupyan',
    licenza: 'CC0 (pubblico dominio)',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Spires_of_Milan_Cathedral.jpg',
  },
  'venezia-3-giorni': {
    autore: 'Zairon',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Venezia_Basilica_di_San_Marco_Fassade_2.jpg',
  },
  'torino-2-giorni': {
    autore: 'Mongolo1984',
    licenza: 'CC BY-SA 4.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mole_Antonelliana_(Torino)_09.jpg',
  },
  'napoli-3-giorni': {
    autore: 'Lalupa',
    licenza: 'CC BY 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Spaccanapoli_da_s_Elmo_1050131.JPG',
  },
  'costiera-e-isole': {
    autore: 'Wolfgang Moroder',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sentiero_degli_Dei_26_sopra_Positano_Campania.jpg',
  },
  'eolie-in-vela': {
    autore: 'giggel',
    licenza: 'CC BY 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Stromboli_%E2%80%93_n%C3%A4chtlicher_Lavafluss_-_am_26.09.2014_%E2%80%93_23.07_Uhr_von_der_%E2%80%9EMein_Schiff_3%E2%80%9C_aus_gesehen_-_panoramio.jpg',
  },
  'sicilia-completa': {
    autore: 'CarlesVA, ritocco di Memorato',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cappella_Palatina_-_sostre-2010-08-11.jpg',
  },
  'sardegna-due-anime': {
    autore: 'Jkens',
    licenza: 'CC BY-SA 3.0 / GFDL 1.2+',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Fungo_Arzachena.jpg',
  },
  'isole-siciliane': {
    autore: 'giomodica',
    licenza: 'CC BY 3.0',
    fonteUrl: 'https://commons.wikimedia.org/wiki/File:Favignana_-_Cala_rossa_-_panoramio.jpg',
  },
  'costa-azzurra': {
    autore: 'Gilbert Bochenek',
    licenza: 'CC BY-SA 3.0',
    fonteUrl: "https://commons.wikimedia.org/wiki/File:Cap_d%27antibes-PACA-Sentier_du_littoral-gb.jpg",
  },
}
