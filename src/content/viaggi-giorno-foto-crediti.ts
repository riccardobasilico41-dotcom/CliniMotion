import type { CreditoImmagine } from './viaggi-copertine-crediti'

/**
 * Crediti fotografici per le foto giorno-per-giorno in `viaggi-dati/*.ts`
 * (campo `immagine` di `GiornoMeta`) — stesso criterio di
 * `viaggi-copertine-crediti.ts`, ma qui la chiave è a due livelli perché un
 * viaggio ha più foto (una per giorno), non una sola copertina.
 *
 * Una foto di un giorno assente da questo file è uno scatto reale del
 * viaggio (non stock): non richiede credito. Chiave esterna =
 * `Viaggio['slug']`, chiave interna = `GiornoMeta['titoloGiorno']`.
 */

export const creditiGiornoFoto: Record<string, Record<string, CreditoImmagine>> = {
  'dolomiti-estate': {
    'Giorno 2 — Il Parco Fanes-Sennes': {
      autore: 'Bbruno (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lago_Verde_Fanes_03.JPG',
    },
    'Giorno 3 — Le Tre Cime di Lavaredo': {
      autore: 'Alessandro Drago (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Le_Tre_Cime_dopo_il_tramonto,_dal_Rifugio_Locatelli.jpg',
    },
    'Giorno 4 — Prima notte in rifugio': {
      autore: 'gogolander (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rifugio_Nuvolau_Dolomiti.JPG',
    },
    'Giorno 5 — Seconda tappa in quota': {
      autore: 'Flortography (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hiking_at_Sass_de_Putia.jpg',
    },
    'Giorno 6 — Una via ferrata': {
      autore: 'Luca Lorenzi (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Gallerie_del_Lagazuoi.JPG',
    },
    'Giorno 7 — Seceda, Alpe di Siusi e rientro': {
      autore: 'Stch2022 (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl:
        "https://commons.wikimedia.org/wiki/File:The_famous_Sec%C3%ABda-Alm_Ridgeline_located_in_South_Tyrol,_Italy.jpg",
    },
  },
  'lofoten-estate-2025': {
    'Giorno 1 — Oslo': {
      autore: 'Bjørn Erik Pedersen (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Oslo_hamn_pano.jpg',
    },
    'Giorno 2 — Oslo → Bodø → Svolvær': {
      autore: 'Christoph Strässler (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Svolv%C3%A6r_Harbour_at_blue_hour_with_Hurtigruten_Ship,_Lofoten,_Norway.jpg',
    },
    'Giorno 3 — Svolvær → Henningsvær': {
      autore: 'Giladtop (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Henningsv%C3%A6r_and_the_surrounding_islands.jpg',
    },
    'Giorno 4 — Svolvær → Reine → Nesland': {
      autore: 'Wolfgang Hägele (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Reine_panorama_2023.jpg',
    },
    'Giorno 5 — Spiaggia di Bunes': {
      autore: 'Raf24 (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bunes_beach.jpg',
    },
    'Giorno 6 — Å e il sentiero verso Nusfjord': {
      autore: 'Daniel Vorndran / DXR (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:%C3%85_i_Lofoten,_Northeast_view_20150608_1.jpg',
    },
    'Giorno 7 — Bødø e rientro a Oslo': {
      autore: 'Frankemann (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Apparent_whirlpools_of_Saltstraumen_seen_from_the_air.jpg',
    },
  },
  'islanda-2024': {
    "Giorno 1 — Arrivo a Keflavík e l'eruzione vista da vicino": {
      autore: 'Gylfi Gylfason (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/majestic-lava-eruption-in-icelandic-volcano-34315894/',
    },
    'Giorno 2 — Golden Circle: Geysir e Gullfoss': {
      autore: 'Andreas Tille (Wikimedia Commons)',
      licenza: 'CC BY-SA',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Strokkur_geyser_eruption,_close-up_view.jpg',
    },
    'Giorno 3 — Dyrhólaey, Reynisfjara e la laguna glaciale': {
      autore: 'Jakub Hałun (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Reynisfjara,_Iceland,_20230501_1639_4044.jpg',
    },
    "Giorno 4 — Viking Village, fiordi dell'Est ed Egilsstaðir": {
      autore: 'Eric Kilby (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Coastline_Looking_South_-_Eastfjords.jpg',
    },
    'Giorno 5 — Stuðlagil, Dettifoss e Ásbyrgi': {
      autore: 'Syrio (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Canyon_di_Stu%C3%B0lagil_01.jpg',
    },
    'Giorno 6 — Húsavík, whale watching e il lago Mývatn': {
      autore: 'Dabydeen (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:H%C3%BAsav%C3%ADk_harbour.JPG',
    },
    'Giorno 7 — Verso la penisola di Snæfellsnes': {
      autore: 'Jakub Hałun (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kirkjufell,_Iceland,_20240714_1631_0713.jpg',
    },
    'Giorno 8 — Relax termale e rientro a Reykjavík': {
      autore: 'Jakub Hałun (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Blue_Lagoon_with_%C3%9Eorbj%C3%B6rn,_Iceland,_20230430_1626_3692.jpg',
    },
    'Giorno 9 — Rientro': {
      autore: 'Olga Ernst (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Keflav%C3%ADk_International_Airport_seen_from_runway.jpg',
    },
  },
  'cina-paesaggi': {
    'Giorno 1 — Arrivo a Chongqing': {
      autore: 'Jonipoon (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Chongqing_Night_Yuzhong.jpg',
    },
    'Giorno 2 — Chongqing verticale': {
      autore: 'HoweyYuan (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hongya_Cave_20240722.jpg',
    },
    'Giorno 3 — Furong Zhen, il borgo sulla cascata': {
      autore: 'Chensiyuan (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:1_furong_aerial_panorama_2017.jpg',
    },
    'Giorno 4 — Verso Zhangjiajie': {
      autore: 'Lianguanlun (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sandstone_spire_forest_Zhangjiajie_Hunan.jpg',
    },
    "Giorno 5 — Yuanjiajie e l'ascensore di Bailong": {
      autore: 'Codas (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bailong_Elevator_area_02.jpg',
    },
    'Giorno 6 — Tianzi Shan e il fondovalle': {
      autore: 'Rocio Gil (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Tianzi_Mountain(%E5%A4%A9%E5%AD%90%E5%B1%B1)from_the_top_of_the_cable_car.jpg',
    },
    'Giorno 7 — Tianmen Shan e volo per Chengdu': {
      autore: 'Lianguanlun (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tianmen_Mountain_Heaven_Gate_arch_Zhangjiajie.jpg',
    },
    'Giorno 8 — Chengdu: panda, tè e hot pot': {
      autore: 'Ramaz Bluashvili (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/giant-panda-eating-bamboo-in-chengdu-zoo-31639676/',
    },
    'Giorno 9 — Leshan, poi volo per Lijiang': {
      autore: 'Giorgioglobe (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Giant_Buddha_of_Leshan.jpg',
    },
    'Giorno 10 — Lijiang e Baisha': {
      autore: 'Colegota (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.1 ES',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lijiang-canales-w02.jpg',
    },
    'Giorno 11 — Yulong Xueshan e Impression Lijiang': {
      autore: 'ShuQizhe (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Main_Peak_of_Jade_Dragon_Snow_Mountain_20260221_185346.jpg',
    },
    'Giorno 12 — Gola del Salto della Tigre, primo giorno': {
      autore: 'StateStreet (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tiger_Leaping_Gorge.JPG',
    },
    'Giorno 13 — Secondo giorno di trek e Shangri-La': {
      autore: 'BrokenSphere (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Countryside_along_Tiger_Leaping_Gorge_trail_10.JPG',
    },
    'Giorno 14 — Shangri-La e rientro a Lijiang': {
      autore: 'Colin W (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Songzanlin_Monastery,_Shangri-La,_China_-_panoramio.jpg',
    },
    'Giorno 15 — Volo per Guilin e trasferimento a Yangshuo': {
      autore: 'Rod Waddington (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Li_River_Valley_(46039406491).jpg',
    },
    'Giorno 16 — Xingping in zattera e alba a Xianggong': {
      autore: 'PQ77wd (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sight_for_CNY%C2%A520_since_1999.jpg',
    },
    'Giorno 17 — Yangshuo in bicicletta': {
      autore: 'McKay Savage (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:China_-_Yangshuo_29_-_Rice_Paddy_Terraces_(140905203).jpg',
    },
    'Giorno 18 — Guilin e partenza': {
      autore: 'Aokisang (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:2018.08.27_%E5%B9%BF%E8%A5%BF%E6%A1%82%E6%9E%97_%E8%B1%A1%E9%BC%BB%E5%B1%B1.jpg',
    },
  },
  'giappone-360': {
    'Giorno 1 (06.04) — Tokyo, Asakusa e la caccia ai sakura': {
      autore: 'Gorgo / Stephan (Wikimedia Commons)',
      licenza: 'Public Domain',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sensoji0349.jpg',
    },
    "Giorno 2 (07.04) — Kamakura, l'antica capitale sul mare": {
      autore: 'DXR (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Great_Buddha_at_K%C5%8Dtoku-in_20190421_1.jpg',
    },
    'Giorno 3 (08.04) — NUOVO: Monte Fuji e Pagoda Chureito': {
      autore: 'Stjepko Krehula (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Chureito_Pagoda_and_Mount_Fuji_2023-03-07.jpg',
    },
    'Giorno 4 (09.04) — Tokyo-Kyoto': {
      autore: 'John Gillespie (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Shinkansen_N700_at_Kyoto_Station_2015-10-18_01.jpg',
    },
    'Giorno 5 (10.04) — Kyoto: Arashiyama, la foresta di bambù e Gion': {
      autore: 'Basile Morin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bamboo_Forest,_Arashiyama,_Kyoto,_Japan.jpg',
    },
    'Giorno 6 (11.04) — Kyoto: Fushimi Inari, Nijo Castle, Kinkaku-ji': {
      autore: 'Hyppolyte de Saint-Rambert (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Fushimi_Inari_Taisha_tunnel.jpg',
    },
    'Giorno 7 (12.04) — Kyoto-Hiroshima-Miyajima': {
      autore: 'Jakub Hałun (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Itsukushima-jinja_torii_at_sunset,_Miyajima,_Japan,_20240816_1812_4144.jpg',
    },
    'Giorno 8 (13.04) — Hiroshima-Himeji-Osaka (o Kobe)': {
      autore: 'Gilles Desjardins (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Himeji_Castle_Japan.jpg',
    },
    'Giorno 9 (14.04) — Osaka e Nara': {
      autore: 'Sun jess (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:A_pair_of_deer_in_Nara_Park,_Japan.jpg',
    },
    'Giorno 10 (15.04) — Osaka-Tokyo: Harajuku e Shibuya': {
      autore: 'Benh LIEU SONG (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tokyo_Shibuya_Scramble_Crossing_2018-10-09.jpg',
    },
    'Giorno 11 (16.04) — Tokyo: Tsukiji, Akihabara, Senso-ji, Shinjuku': {
      autore: 'Basile Morin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colorful_neon_street_signs_in_Kabukich%C5%8D,_Shinjuku,_Tokyo.jpg',
    },
    'Giorno 12 (17.04) — Check out': {
      autore: 'Fred Cherrygarden (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tokyo_-_Sunset_Skyline.jpg',
    },
  },
  'sicilia-itinerario': {
    'Giorno 1 — Arrivo a Catania': {
      autore: 'GiovanniPen (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Piazza_duomo_catania_fontana_elefante.jpg',
    },
    "Giorno 2 — L'Etna": {
      autore: 'Auregann (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Etna_craters_near_Sapienza.jpg',
    },
    "Giorno 3 — Taormina e i Gole dell'Alcantara": {
      autore: 'Grey48 (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sicily_Taormina_Teatro_Greco_Etna.jpg',
    },
    'Giorno 4 — Siracusa e Ortigia': {
      autore: 'Rosaria Privitera Saggio (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Siracusa,_Ortigia,_Piazza_Duomo.jpg',
    },
    'Giorno 5 — Noto, Modica, Scicli': {
      autore: 'Berthold Werner (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Noto_Cathedral_BW_2025-04-26_11-08-40.jpg',
    },
    'Giorno 6 — Ragusa Ibla e Vendicari': {
      autore: 'Nicolas Chadeville (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ragusa_Ibla_in_Sicily.jpg',
    },
    "Giorno 7 — Verso l'interno: Piazza Armerina ed Enna": {
      autore: 'Dsiculo (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:BikiniM.jpg',
    },
    'Giorno 8 — Agrigento': {
      autore: 'Sharon Hahn Darlin (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Tempio_della_Concordia,_Valle_dei_Templi,_Agrigento,_Sicilia,_Italia_2024.jpg',
    },
    'Giorno 9 — Scala dei Turchi e rientro verso Catania': {
      autore: 'Carnby (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Scala_dei_Turchi_panorama.jpg',
    },
    'Giorno 10 — Ultima mattina e partenza': {
      autore: 'Sailko (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aeroporto_di_catania,_veduta_etna.jpg',
    },
  },
  'costa-rica-360': {
    'Giorno 1 — San José': {
      autore: 'Mariordo / Mario Roberto Durán Ortiz (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Teatro_Nacional_CRI_07_2019_8963.jpg',
    },
    'Giorno 2 — Puerto Viejo, tra Caribe e giungla': {
      autore: 'Aude (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Beach_at_Puerto_Viejo_de_Talamanca.jpg',
    },
    'Giorno 3 — Parco Nazionale di Cahuita': {
      autore: 'Bernal Saborio (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cahuita_Point_(44975091512).jpg',
    },
    'Giorno 4 — Verso Tortuguero, tra fiume e giungla': {
      autore: 'Lars0001 (Wikimedia Commons)',
      licenza: 'Public Domain',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tortuguero_boat_trip.JPG',
    },
    'Giorno 5 — Tortuguero: kayak tra le mangrovie, poi Sarapiquí': {
      autore: 'The Casual Tellurian (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Boca_R%C3%ADo_Tortuguero.jpg',
    },
    'Giorno 6 — Rafting sul fiume Sarapiquí': {
      autore: 'Steve Jurvetson (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rafting_Sarapiqui_river._Costa_Rica.jpg',
    },
    'Giorno 7 — Arenal: cascate, vulcano e sorgenti termali': {
      autore: 'CIA World Factbook (Wikimedia Commons)',
      licenza: 'Public Domain',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Arenal_Volcano_seen_from_La_Fortuna,_Costa_Rica.jpg',
    },
    'Giorno 8 — Monteverde, nella foresta nebulosa': {
      autore: 'Haakon S. Krohn (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Monteverde_puente.jpg',
    },
    'Giorno 9 — Zipline a Monteverde, poi verso il Pacifico e Uvita': {
      autore: 'Costaricapro (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Zip_Line_Canopy_Tour_Costa_Rica.jpg',
    },
    'Giorno 10 — Uvita: avvistamento balene': {
      autore: 'Ceever (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Uvita,_Ballena_Marine_National_Park.jpg',
    },
    'Giorno 11 — Uvita: giornata libera tra surf, cavalli e yoga': {
      autore: 'François Bianco (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Surfer_at_sunset_(15709034809).jpg',
    },
    'Giorno 12 — Parco Nazionale Manuel Antonio e rientro a San José': {
      autore: 'Rodtico21 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Manuel_Antonio_Bay._Costa_Rica.JPG',
    },
    'Giorno 13 — Check-out e rientro': {
      autore: 'Ll1324 (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Juan_Santamaria_Aeropuerto_San_Jose_Costa_Rica.jpg',
    },
  },
  'giordania-360': {
    'Giorno 1 — Arrivo ad Amman': {
      autore: 'peuplier (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Jordanie_Amman_th%C3%A9%C3%A2tre_vu_de_la_citadelle_(3572940445).jpg',
    },
    'Giorno 2 — Jerash e Mar Morto': {
      autore: 'Dennis G. Jarvis (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Oval_plaza_in_Jerash.jpg',
    },
    'Giorno 3 — Karak, Monte Nebo e Little Petra': {
      autore: 'Petar Milošević (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Karak_Castle,_Jordan_(%D9%82%D9%84%D8%B9%D8%A9_%D8%A7%D9%84%D9%83%D8%B1%D9%83).jpg',
    },
    'Giorno 4 — Petra, giornata intera': {
      autore: 'Graham Racher (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Al_Khazneh_Petra_edit_2.jpg',
    },
    'Giorno 5 — Wadi Rum: cammelli, jeep safari e Capodanno nel deserto': {
      autore: 'Melissamarzo (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Camels_in_Wadi_Rum_-_Jordan,_2023.jpg',
    },
    'Giorno 6 — Alba nel deserto e mare ad Aqaba': {
      autore: 'Adeeb Atwan (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Beach_visitors_of_Aqaba_-_panoramio.jpg',
    },
    'Giorno 7 — Rientro ad Amman: due opzioni': {
      autore: 'Aya Reyad (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:King_Abdullah_I_Mosque2019.jpg',
    },
    'Giorno 8 — Rientro': {
      autore: 'Death Star Central (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Queen_Alia_International_Airport_Terminal_Interior.jpg',
    },
  },
  'marocco-360': {
    'Giorno 1 — Marrakech': {
      autore: 'Jean-Pierre Dalbéra (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Le_minaret_de_la_Koutoubia_(Marrakech,_Maroc)_(50961792868).jpg',
    },
    'Giorno 2 — Marrakech-Aït Benhaddou': {
      autore: 'Alexander Cahlenstein (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:2010-11-04_%E2%80%94_Old_kasbah_in_the_Sahara_desert_%E2%80%93_A%C3%AFt_Benhaddou.jpg',
    },
    "Giorno 3 — Merzouga, l'ingresso nel Sahara": {
      autore: 'Thomas Fuhrmann (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Erg_Chebbi_sunset.jpg',
    },
    'Giorno 4 — Merzouga-Agdz': {
      autore: 'Nawfal Kharbach (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Todgha_Gorges,_southern_Morocco.jpg',
    },
    'Giorno 5 — Agdz-Agadir': {
      autore: 'Bazookajones (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Vall%C3%A9e_du_Draa_et_ses_oasis.jpg',
    },
    'Giorno 6 — Agadir-Essaouira, con tappa surf a Taghazout': {
      autore: 'Heather Cowper (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Panorama_beach_at_Taghazout.jpg',
    },
    'Giorno 7 — Essaouira-Marrakech': {
      autore: 'CastlesCatalog (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Blue_Fishing_Boat_and_Medina_Walls,_Essaouira,_Morocco.jpg',
    },
    'Giorno 8 — Marrakech': {
      autore: 'FriedrichFrisch (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Jardin_Majorelle_(Marrakech).jpg',
    },
    'Giorno 9 — Rientro': {
      autore: 'Abdeaitali (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Departure_hall_Marrakech_airport.jpg',
    },
  },
  'sicilia-completa': {
    'Giorno 1 — Arrivo a Palermo': {
      autore: 'Wikimedia Commons',
      licenza: 'CC BY-SA',
      fonteUrl: 'https://commons.wikimedia.org/wiki/Category:Quattro_Canti',
    },
    'Giorno 2 — Palermo arabo-normanna': {
      autore: 'Wikimedia Commons',
      licenza: 'CC BY-SA',
      fonteUrl: 'https://commons.wikimedia.org/wiki/Category:Cappella_Palatina',
    },
    'Giorno 3 — I mercati, le Catacombe, Palazzo Abatellis': {
      autore: 'Benjamín Núñez González (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Ballar%C3%B2,_gente_en_el_mercado,_Palermo,_Sicilia,_Italia,_2015.JPG',
    },
    'Giorno 4 — Monreale e Cefalù': {
      autore: 'Berthold Werner (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Monreale_Cathedral_BW_2025-04-29_15-42-01.jpg',
    },
    'Giorno 5 — Segesta, Erice e Trapani': {
      autore: 'Rabe! (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Segesta_-_Griechischer_Tempel_2015-03-29c.jpg',
    },
    'Giorno 6 — Le saline, Mozia e Marsala': {
      autore: 'La mia avventura (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mulino_alle_Saline_di_Trapani.jpg',
    },
    'Giorno 7 — Lo Zingaro, Scopello e San Vito Lo Capo': {
      autore: 'Norbert Reimer (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Tonnara_di_Scopello_(Castellammare_del_Golfo)_-_Trapani,_Sicily_-_Italy_-_(1).jpg',
    },
    'Giorno 8 — Selinunte e le Cave di Cusa': {
      autore: 'Jos Dielis (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Temple_ruins_Selinunte,_Sicily.jpg',
    },
    'Giorno 9 — Agrigento e la Valle dei Templi': {
      autore: 'Giorgio Curioni (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tempio_di_Giunone,_Agrigento,_Sicilia.JPG',
    },
    "Giorno 10 — La Scala dei Turchi e l'interno": {
      autore: '29C (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Scala_dei_Turchi_2020.jpg',
    },
    "Giorno 11 — Ragusa Ibla e l'arrivo nel barocco": {
      autore: 'Savvo90 (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ingresso_Ibla.JPG',
    },
    'Giorno 12 — Modica, Scicli e Noto': {
      autore: 'Ruggero Poggianella (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Modica,_Duomo_di_San_Giorgio.jpg',
    },
    'Giorno 13 — Vendicari e arrivo a Siracusa': {
      autore: 'Einaz80 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Riserva_Naturale_Vendicari_1.jpg',
    },
    'Giorno 14 — Siracusa': {
      autore: 'Allie Caulfield (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Syrakus_-_Tempio_di_Apollo.jpg',
    },
    "Giorno 15 — L'Etna": {
      autore: 'Cayambe (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mount_Etna_2024_28.jpg',
    },
    'Giorno 16 — Taormina e le Gole dell\'Alcantara': {
      autore: 'Richard Allaway (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Columnar_jointing_in_the_Alcantara_Gorge,_Sicily.jpg',
    },
    'Giorno 17 — Catania e partenza': {
      autore: 'Cosal (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Catania,_via_Etnea.jpg',
    },
  },
  'cina-classica': {
    'Giorno 1 — Arrivo a Pechino': {
      autore: 'FLASHPACKER TRAVELGUIDE (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Hutong,_Gasse_in_Peking,_alley_in_Beijing_(44042315480).jpg',
    },
    'Giorno 2 — Città Proibita, Tiananmen e Jingshan': {
      autore: 'Peter K Burian (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hall_of_Supreme_Harmony_2018._Forbidden_City.jpg',
    },
    'Giorno 3 — La Grande Muraglia a Jinshanling': {
      autore: 'Vincent Ndaku (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Great_Wall_of_China_at_Jinshanling.jpg',
    },
    "Giorno 4 — Tempio del Cielo, hutong e Palazzo d'Estate": {
      autore: 'Xiquinho Silva (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Temple_of_Heaven_-_Hall_of_Prayer_for_Good_Harvests_01.jpg',
    },
    "Giorno 5 — Treno per Xi'an e mura in bicicletta": {
      autore: 'AcidBomber (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:XiAn_CityWall.JPG',
    },
    'Giorno 6 — Esercito di Terracotta': {
      autore: 'shankar s. (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:The_sheer_scale_of_it_was_nothing_like_what_I_had_expected_(35519050182).jpg',
    },
    'Giorno 7 — Treno per Shanghai e il Bund': {
      autore: 'Daniel Case (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lujiazui_skyline_by_night_from_Bund,_fully_illuminated.jpg',
    },
    'Giorno 8 — Shanghai: Concessione Francese, Yuyuan, Pudong': {
      autore: 'Elizaveta Butryn (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Shanghai,_Yuyuan_Garden.jpg',
    },
    'Giorno 9 — Suzhou e i giardini classici': {
      autore: 'Rose Abrams (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:Touring_the_Humble_Administrator%27s_Garden_10.jpg",
    },
    "Giorno 10 — Un villaggio d'acqua": {
      autore: 'Mattias Hill (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Zhouzhuang_water_town.jpg',
    },
    'Giorno 11 — Verso Hong Kong': {
      autore: 'WiNG (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hong_Kong_Island_Skyline_2009.jpg',
    },
    'Giorno 12 — Hong Kong: Peak, Star Ferry, mercati': {
      autore: 'Exploringlife (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Overlook_Hong_Kong_Island_north_coast,_Victoria_Harbour_and_Kowloon_from_Peak_Tower_at_daytime_(improved_version).jpg',
    },
    'Giorno 13 — Macao in giornata': {
      autore: 'Løken (Wikimedia Commons)',
      licenza: 'CC BY-SA',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:Ruins_of_St._Paul%27s,_Macau.JPG",
    },
    'Giorno 14 — Lantau e la Hong Kong che non ci si aspetta': {
      autore: 'Tessa Bury (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tian_Tan_Buddha_Outdoors.jpg',
    },
    'Giorno 15 — Partenza': {
      autore: 'LN9267 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sunset_in_Hong_Kong_International_Airport_02-11-2024.jpg',
    },
  },
  'transilvania-express': {
    'Giorno 1 — Bucarest': {
      autore: 'Ștefan Jurcă (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bucharest_-_Sunset_on_Lipscani_Street_(28592940111).jpg',
    },
    'Giorno 2 — Bucarest, Castello di Peleș, Castello di Bran, Brașov': {
      autore: 'Teodor Mitrache (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0 RO',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Peles_Castle,_Sinaia_(Romania).jpg',
    },
    'Giorno 3 — Paesi sassoni, Sighișoara e Salina Turda': {
      autore: 'Cristian Bortes (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Salina_Turda_3.jpg',
    },
    'Giorno 4 — Sibiu, Transfăgărășan e ritorno a Bucarest': {
      autore: 'Draceane (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Fagara%C5%A1,_Transfagara%C5%A1,_2014_(06).jpg',
    },
    'Giorno 5 — Bucarest: check-out, Terme e saluti': {
      autore: 'Daniele Napolitano (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:ThermeBucuresti.jpg',
    },
  },
  'corea-del-sud-itinerario': {
    'Giorno 1 — Arrivo a Seoul': {
      autore: 'USAGI_POST (Pixabay / Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Han_River_Seoul_skyline_Pixabay_1214950.jpg',
    },
    'Giorno 2 — Palazzi e Memoriale della Guerra': {
      autore: 'lumoplank (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Changdeokgung,_Seoul_-_Changdeokgung3148.jpg',
    },
    'Giorno 3 — La DMZ': {
      autore: 'Travis Wise (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Demilitarized_Zone_(DMZ)_Joint_Security_Area_(JSA)_Looking_Into_North_Korea_(28819154694).jpg',
    },
    'Giorno 4 — Seoul: quartieri, fortezza, jjimjilbang': {
      autore: 'Basile Morin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Bukchon-ro_11-gil_street_with_hanok_houses_and_blue_sky_in_Bukchon_Hanok_Village_Seoul.jpg',
    },
    'Giorno 5 — Sokcho e il Seoraksan': {
      autore: 'Olga Lipunova (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Seoraksan_National_Park,_Daecheongbong.jpg',
    },
    'Giorno 6 — Seoraksan': {
      autore: 'Olga Lipunova (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Seoraksan_National_Park,_Ulsanbawi.jpg',
    },
    'Giorno 7 — Andong e il villaggio di Hahoe': {
      autore: 'Theda Grimoire (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Korea-Andong-Hahoe_Folk_Village-02.jpg',
    },
    'Giorno 8 — Gyeongju': {
      autore: 'parhessiastes (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Korea-Gyeongju-Cheomseongdae-01.jpg',
    },
    'Giorno 9 — Bulguksa, Seokguram e templestay': {
      autore: 'lumoplank (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bulguksa_Temple,_Gyeongju_-_Bulguska2632.jpg',
    },
    'Giorno 10 — Busan': {
      autore: 'Basile Morin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Colorful_houses_in_Gamcheon_Culture_Village_at_sunset_in_Busan_South_Korea.jpg',
    },
    'Giorno 11 — Busan: il cimitero ONU e la costa': {
      autore: 'StephNurnberg (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Haeundae_Beach_in_Busan.jpg',
    },
    'Giorno 12 — Volo per Jeju e la costa orientale': {
      autore: 'Lcarrion88 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Seopjiokji_Coastline.jpg',
    },
    'Giorno 13 — Le haenyeo e Seongsan Ilchulbong': {
      autore: 'Korea.net / Korean Culture and Information Service (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Seongsan_Ilchulbong_from_the_air.jpg',
    },
    'Giorno 14 — Rientro': {
      autore: 'Arne Müseler (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0 DE',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Incheon_International_Airport_Terminal_1_Departure.jpg',
    },
  },
  'sri-lanka-2023': {
    'Giorno 1 — Negombo': {
      autore: 'Rudolph.A.furtado (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Fibreglass_fishing_boat_on_Negombo_Beach.JPG',
    },
    'Giorno 2 — Negombo-Anuradhapura': {
      autore: 'A.Savin (Wikimedia Commons)',
      licenza: 'Free Art License',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:SL_Anuradhapura_asv2020-01_img11_Ruwanwelisaya_Stupa.jpg',
    },
    'Giorno 3 — Anuradhapura-Dambulla: Mihintale e safari': {
      autore: 'Shankar S. (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Elephant_herd_(7568539214).jpg',
    },
    'Giorno 4 — Dambulla-Polonnaruwa-Dambulla': {
      autore: 'Michael Gunther (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Polonnaruwa_0355.jpg',
    },
    'Giorno 5 — Dambulla-Kandy': {
      autore: 'A.Savin (Wikimedia Commons)',
      licenza: 'Free Art License',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:SL_Kandy_asv2020-01_img34_Sacred_Tooth_Temple.jpg',
    },
    'Giorno 6 — Kandy-Nallathanniya: rafting a Kitulgala': {
      autore: 'Pavithra Packiyanathan (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:A_river_through_the_mountain.jpg',
    },
    'Giorno 7 — Hatton-Nuwara Eliya: piantagioni di tè': {
      autore: 'Curved.kiwix (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tea_picker_in_the_highland_region_of_Nuwara_Eliya.jpg',
    },
    'Giorno 8 — Nuwara Eliya-Ella: il treno panoramico': {
      autore: 'A.Savin (Wikimedia Commons)',
      licenza: 'Free Art License',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:SL_Demodara_near_Ella_asv2020-01_img02.jpg',
    },
    'Giorno 9 — Ella-Yala-Hikkaduwa: safari e prima spiaggia': {
      autore: 'Byrdyak / Volodymyr Burdiak (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Leopard_on_stone_in_Yala_National_Park.jpg',
    },
    'Giorno 10 — Hikkaduwa: giornata di mare': {
      autore: 'Dinusha Chathuranga (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hikkaduwa_beach_beauty.jpg',
    },
    'Giorno 11 — Hikkaduwa-Negombo': {
      autore: 'Dan Lundberg (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:20160129_Sri_Lanka_4191_Habaraduwa_sRGB_(25139072394).jpg',
    },
    'Giorno 12 — Negombo-Aeroporto': {
      autore: 'Imaas181 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bandaranaike_International_Airport_-_BIA.jpg',
    },
  },
  'sardegna-due-anime': {
    'Giorno 1 — Arrivo a Olbia e Costa Smeralda': {
      autore: 'Ökologix (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Spiaggia_del_Principe.jpg',
    },
    "Giorno 2 — L'arcipelago della Maddalena": {
      autore: 'Gianni Careddu (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:La_Maddalena_-_Isola_di_Budelli_(01).JPG',
    },
    'Giorno 3 — Capo Testa, la Valle della Luna e la Gallura interna': {
      autore: 'Isiwal (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sardinien_Capo_Testa_Blick_Korsika_2010.jpg',
    },
    'Giorno 4 — Verso il Golfo di Orosei': {
      autore: 'Carlo Pelagalli (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Costa_del_golfo_di_Orosei_-_panoramio.jpg',
    },
    'Giorno 5 — Cala Goloritzé': {
      autore: 'Rosanna C. (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Baunei-Guglia_di_Cala_Goloritz%C3%A9.jpg',
    },
    'Giorno 6 — Le cale del golfo in barca': {
      autore: 'K. Härtling (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cala_Luna,_Sardinien.JPG',
    },
    'Giorno 7 — Il Supramonte: Gorropu o Tiscali': {
      autore: 'Pigiosu (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Gorropu_-_interno.JPG',
    },
    'Giorno 8 — La Barbagia: Orgosolo, Mamoiada, il Cannonau': {
      autore: 'Daniel Ventura (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Murals_in_Orgosolo_01.jpg',
    },
    'Giorno 9 — Il Sinis, Tharros e i nuraghi': {
      autore: 'Gloriamusa (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colonne_di_Tharros.JPG',
    },
    'Giorno 10 — Il Sulcis-Iglesiente e Porto Flavia': {
      autore: 'DeeJay05 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:27_Nahaufnahme-Hafen-Porto-Flavia-Iglesias-Sardinien-Italien.jpg',
    },
    'Giorno 11 — Le dune di Piscinas e la Costa Verde': {
      autore: 'Giorgio Galeotti (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Dunes_of_Piscinas_-_Arbus,_Sud_Sardegna,_Italy_-_August_13,_2020.jpg',
    },
    "Giorno 12 — Carloforte e l'isola di San Pietro": {
      autore: 'trolvag / Tom Rolvag (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Carloforte_porto,_Carloforte,_Carbonia-Iglesias,_Sardinia,_Italy_-_panoramio.jpg',
    },
    'Giorno 13 — Cagliari': {
      autore: 'Mike Peel (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:At_Cagliari,_Sardinia_2019_165.jpg',
    },
    'Giorno 14 — Partenza': {
      autore: 'Norbert Nagel (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Archaeological_site_Nora_-_Pula_-_Sardinia_-_Italy_-_15.jpg',
    },
  },
  'malesia-singapore': {
    'Giorno 1 — Arrivo a Kuala Lumpur': {
      autore: 'Philip Nalangan (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Merdeka_Square_Kuala_Lumpur_Malaysia.jpg',
    },
    'Giorno 2 — Batu Caves e i quartieri': {
      autore: 'KQuhen (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Batu_Caves_Murugan_Statue_and_Stairs_2015.jpg',
    },
    'Giorno 3 — Verso Taman Negara': {
      autore: 'Maxine Xin (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/tranquil-river-scene-with-boat-in-malaysia-33691774/',
    },
    'Giorno 4 — La foresta di centotrenta milioni di anni': {
      autore: 'Vyacheslav Argenberg (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Taman_Negara,_Malaysia,_Canopy_Walkway.jpg',
    },
    'Giorno 5 — Verso le Cameron Highlands': {
      autore: 'Adam Jones (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Cameron_Valley_Tea_Estate_-_Near_Tanah_Rata_-_Cameron_Highlands_-_Malaysia_-_01_(34733984213).jpg',
    },
    'Giorno 6 — Piantagioni di tè e mossy forest': {
      autore: 'Pro QueeNia (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Breathtaking_view_at_BOH_Sungei_Palas_Tea_Plantation,_Cameron_Highlands.jpg',
    },
    'Giorno 7 — Verso Penang': {
      autore: 'Gryffindor (Wikimedia Commons)',
      licenza: 'Public Domain',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Penang_Dec_2006_006.jpg',
    },
    'Giorno 8 — George Town a piedi': {
      autore: 'Wikimedia Commons',
      licenza: 'CC BY',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Penang_-_Little_Children_on_a_Bicycle.JPG',
    },
    'Giorno 9 — Penang: la giornata del cibo': {
      autore: 'Khairil Yusof (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Char_Koay_Kak,_Hawker_Stall,_Georgetown,_Penang.jpg',
    },
    'Giorno 10 — Verso Malacca': {
      autore: 'Felix Andrews (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Riverside_buildings_Melaka.jpg',
    },
    'Giorno 11 — Malacca e la cucina nyonya': {
      autore: 'Leo Andyka (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Stadthuys.jpg',
    },
    'Giorno 12 — Verso Singapore': {
      autore: 'Bijay Chaurasia (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Marina_Bay_Singapore-3499.jpg',
    },
    'Giorno 13 — Singapore: i quartieri e la baia': {
      autore: 'Giorces (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:View_of_Marina_Bay_Sands_Hotel_and_the_Supertree_Grove,_Gardens_by_the_Bay,_Singapore,_at_sunset_-_20140513.jpg',
    },
    'Giorno 14 — La Singapore verde e partenza': {
      autore: 'Shiny Things (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cloud_Forest,_Gardens_by_the_Bay,_Singapore_-_20120712-03.jpg',
    },
  },
}
