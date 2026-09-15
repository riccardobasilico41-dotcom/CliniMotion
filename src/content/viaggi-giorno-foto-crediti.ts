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
}
