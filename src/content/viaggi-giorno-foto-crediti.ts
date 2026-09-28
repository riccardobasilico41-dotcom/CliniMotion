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
  'tour-du-mont-blanc': {
    'Giorno 1 — Les Houches, partenza': {
      autore: 'Ymblanter (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Les_Houches_Mont_Blanc_seen_from_Route_de_la_C%C3%B4te_des_Chavants_1.jpg',
    },
    'Giorno 2 — Verso il Col du Bonhomme': {
      autore: 'Dominicus Johannes Bergsma (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Col_De_La_Croix_Du_Bonhomme_(2479_m.)_05.JPG',
    },
    'Giorno 3 — Ingresso in Italia, Val Veny': {
      autore: 'Giorgio Galeotti (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Monte_Bianco_-_Val_Veny,_Courmayeur,_Italia_-_10_Agosto_2016.jpg',
    },
    'Giorno 4 — Courmayeur': {
      autore: 'Rémih (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Courmayeur_Mont_Ch%C3%A9tif.jpg',
    },
    'Giorno 5 — Rifugio Bonatti': {
      autore: 'Cboon (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rifugio_Walter_Bonatti_Refuge.jpg',
    },
    'Giorno 6 — Passaggio in Svizzera': {
      autore: 'Dominicus Johannes Bergsma (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Grand_Col_Ferret_(2537_meter).__02.JPG',
    },
    'Giorno 7 — La Fouly, Champex-Lac': {
      autore: 'Barbara Steinemann (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lac_de_Champex_in_Champex.jpg',
    },
    'Giorno 8 — Rientro verso la Francia': {
      autore: 'Björn S... (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        "https://commons.wikimedia.org/wiki/File:Panoramic_view_onto_Glacier_du_Tour,_Aiguille_du_Chardonnet,_Glacier_d'Argenti%C3%A8re_and_Aiguille_Verte_(12834233464).jpg",
    },
    'Giorno 9 — Chamonix': {
      autore: 'Ypsilon (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Chamonix_town_view_from_the_Mer_de_Glace_railway.jpg',
    },
  },
  'lapponia-svedese-abisko': {
    'Giorno 1 — Milano → Stoccolma': {
      autore: 'Giuseppe Milo (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Stockholm_Skyline_At_Night_(91983391).jpeg',
    },
    'Giorno 2 — Stoccolma → Kiruna (Capodanno)': {
      autore: 'Arild Vågen (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kiruna_kyrka_September_2017_04.jpg',
    },
    'Giorno 3 — Kiruna → Abisko': {
      autore: 'Arjoopy (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Abisko_Turiststation_in_Winter.jpg',
    },
    'Giorno 4 — Abisko: motoslitta e husky sotto l\'aurora': {
      autore: 'Pavel.shyshkouski (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aurora_in_Abisko_near_Tornetr%C3%A4sk.jpg',
    },
    'Giorno 5 — Abisko → Kiruna': {
      autore: 'Ludovic Lubeigt (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Train_Station_-_Kiruna,_Sweden_(15123542346).jpg',
    },
    'Giorno 6 — Kiruna → Stoccolma': {
      autore: 'ArildV (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Stockholms_stadshus_February_2026_02.jpg',
    },
    'Giorno 7 — Rientro': {
      autore: 'Andreas Trepte (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.5',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Airport_Arlanda_Sweden.jpg',
    },
  },
  'dolomiti-roadtrip': {
    'Val Gardena, Ortisei e la Seceda': {
      autore: 'Stch2022 (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl:
        "https://commons.wikimedia.org/wiki/File:The_famous_Sec%C3%ABda-Alm_Ridgeline_located_in_South_Tyrol,_Italy.jpg",
    },
    'Alta Badia e il Parco di Fanes-Sennes': {
      autore: 'Bbruno (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lago_Verde_Fanes_03.JPG',
    },
    'I Quattro Passi e il Sella Ronda': {
      autore: 'gogolander (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rifugio_Nuvolau_Dolomiti.JPG',
    },
    'Il Lagazuoi e le trincee della Grande Guerra': {
      autore: 'Luca Lorenzi (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Gallerie_del_Lagazuoi.JPG',
    },
    'La Marmolada, la Regina delle Dolomiti': {
      autore: 'Marco Manfroi (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Marmolada_lago_fedaia.jpg',
    },
    'Le Tre Cime di Lavaredo e San Candido': {
      autore: 'Alessandro Drago (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Le_Tre_Cime_dopo_il_tramonto,_dal_Rifugio_Locatelli.jpg',
    },
    'Brunico e la Val Pusteria': {
      autore: '-wuppertaler (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:ITA_Brunico,_Stadtgasse_004.jpg',
    },
    "Vipiteno e l'Alta Val d'Isarco": {
      autore: 'Zairon (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sterzing_Zw%C3%B6lferturm_1.jpg',
    },
    "Val di Sole, l'altra faccia del Trentino": {
      autore: 'Andrea.piccioli (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Trentino_-_Val_di_Sole_-_Peio_(TN).jpg',
    },
    'Cosa fare d\'estate — sentieri impegnativi (Puez-Odle)': {
      autore: 'Flortography (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hiking_at_Sass_de_Putia.jpg',
    },
    'Cosa fare d\'estate — sentieri per tutti (Alpe di Siusi)': {
      autore: 'H. Zell (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Seiser_Alm_01.jpg',
    },
  },
  'new-york-360': {
    'Giorno 1 (07.09) — Arrivo, Times Square': {
      autore: 'Rafi B. (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Times_square_at_night.jpg',
    },
    'Giorno 2 (08.09) — Harlem, Central Park, Empire State Building': {
      autore: 'dllu (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg',
    },
    'Giorno 3 (09.09) — Cattedrale, MoMA, High Line, The Vessel': {
      autore: 'Wikimedia Commons',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Vessel_June_2024.jpg',
    },
    'Giorno 4 (10.09) — Statua della Libertà, Wall Street, Chinatown, Broadway': {
      autore: 'Daniel Schwen (Wikimedia Commons)',
      licenza: 'CC BY-SA',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Statue_of_Liberty_frontal_2_crop.JPG',
    },
    'Giorno 5 (11.09) — Ground Zero, DUMBO, Top of the Rock': {
      autore: 'Wikimedia Commons',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Manhattan_Bridge_view_from_Washington_Street_DUMBO_Brooklyn_Morning_2022.jpg',
    },
    'Giorno 6 (12.09) — Rientro': {
      autore: 'Kidfly182 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lower_Manhattan_Skyline_from_Brooklyn_Heights.jpg',
    },
  },
  'florida-360': {
    'Giorno 1 — Arrivo a Miami': {
      autore: 'Phillip Pessar (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Art_Deco_Hotels_Ocean_Drive_South_Beach.jpg',
    },
    'Giorno 2 — Key West': {
      autore: 'Radomianin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Southernmost_point_buoy,_NE_view.jpg',
    },
    'Giorno 3 — Key West e Marathon': {
      autore: 'SimonMGC (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Seven_Mile_Bridge,_Florida.jpg',
    },
    'Giorno 4 — Everglades e Naples': {
      autore: 'Wikimedia Commons',
      licenza: 'CC BY-SA',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:American_Alligator_at_Shark_Valley_in_Everglades_National_Park.jpg',
    },
    'Giorno 5 — Da Naples a Orlando via Clearwater': {
      autore: 'Wikimedia Commons',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Clearwater-beach-florida-pier-60.jpg',
    },
    'Giorno 6 — Orlando (parco a tema)': {
      autore: 'Wikimedia Commons',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lake_Eola_and_Orlando_Skyline_seen_in_2024.jpg',
    },
    'Giorno 7 — Orlando e Kennedy Space Center': {
      autore: 'Diego Delso (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rocket_garden,_Kennedy_Space_Center,_Florida,_USA1.jpg',
    },
    'Giorno 8 — Miami Beach': {
      autore: 'Gzzz (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ocean_Drive_by_night_1.jpg',
    },
    'Giorno 9 — Miami "di terra"': {
      autore: 'Dan Lundberg (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Wynwood_Walls_Miami_Florida_October_2013.jpg',
    },
    'Giorno 10 — Check-out e rientro': {
      autore: 'Dough4872 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Miami_International_Airport_Terminal_D_January_2026.jpeg',
    },
  },
  thailandia: {
    'Giorno 1 — Bangkok': {
      autore: 'Jakub Hałun (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:20171201_Bangkok_Wat_Arun_6460_DxO.jpg',
    },
    'Giorno 2 — Bangkok-Hua Hin': {
      autore: 'Khaosaming (Wikimedia Commons)',
      licenza: 'CC BY-SA',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Hua_Hin_Railway_Station_Thailand.JPG',
    },
    'Giorno 3 — Hua Hin-Chumphon': {
      autore: 'KOSIN SUKHUM (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mu_Ko_Chumphon_National_Park_Chumphon_Thailand.jpg',
    },
    'Giorno 4 — Chumphon-Khao Sok': {
      autore: 'Vyacheslav Argenberg (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Khao_Sok,_Forest_and_hills,_Surat_Thani,_Thailand.jpg',
    },
    'Giorno 5 — Khao Sok, il lago Cheow Lan': {
      autore: 'Vyacheslav Argenberg (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Karst_landscape_of_Cheow_Lan_Lake,_Surat_Thani,_Thailand.jpg',
    },
    'Giorno 6 — Khao Sok-Krabi': {
      autore: 'Satdeep Gill (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:A_view_of_Ao_Nang_beach,_Krabi.jpg',
    },
    'Giorno 7 — Krabi: Bond Island e canoa': {
      autore: 'DSN18 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:James_Bond_Island_Thailand.jpg',
    },
    'Giorno 8 — Krabi-Koh Phi Phi': {
      autore: 'Caitriana Nicholson (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Koh_Phi_Phi_viewpoint_(4463475153).jpg',
    },
    'Giorno 9 — Koh Phi Phi-Krabi': {
      autore: 'Christophe95 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Loh_Dalum_Bay,_Ko_Phi_Phi_Don.jpg',
    },
    'Giorno 10 — Krabi-Bangkok': {
      autore: 'Nnthurber (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Limestone_karst_cliff_and_longtail_boats_at_Railay_West_Beach_Krabi.jpg',
    },
    'Giorno 11 — Bangkok': {
      autore: 'Tomasz Swatowski (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Wat_Pho_Reclining_Buddha.jpg',
    },
  },
  'borneo-itinerario': {
    'Giorno 1 — Arrivo a Kota Kinabalu': {
      autore: 'FILMR Production (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Kota_Kinabalu_City.jpg',
    },
    'Giorno 2 — Verso il Kinabalu Park': {
      autore: 'Dukeabruzzi (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Borneo_rainforest.jpg',
    },
    'Giorno 3 — Kinabalu, primo giorno': {
      autore: 'Anton Zelenov (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Morning_view_of_Mount_Kinabalu_in_Malaysia,_with_its_peak_clearly_visible.jpg',
    },
    "Giorno 4 — Vetta all'alba e discesa": {
      autore: 'Edelans (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Kinabalu.JPG',
    },
    'Giorno 5 — Sepilok': {
      autore: 'Eterna Media (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/bornean-orangutans-in-natural-habitat-39494080/',
    },
    'Giorno 6 — Sandakan e la memoria': {
      autore: 'Enziee (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sandakan_Memorial_monument.jpg',
    },
    'Giorno 7 — Kinabatangan': {
      autore: 'Apocru (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Proboscis_monkey_(Kinabatangan_River,_July_2025).jpg',
    },
    'Giorno 8 — Kinabatangan e verso Semporna': {
      autore: 'Mike Prince (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Boating_down_the_Kinabatangan_River_(14134035806).jpg',
    },
    'Giorno 9 — Mabul: muck diving': {
      autore: 'Topfmodel / Marco Teubner (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mabul-village.jpg',
    },
    'Giorno 10 — Sipadan': {
      autore: 'Avoini (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Green_Turtle.jpg',
    },
    'Giorno 11 — Mabul o Bohey Dulang': {
      autore: 'Amri HMS (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bohey_Dulang_from_Above_(17287121525).jpg',
    },
    'Giorno 12 — Tawau e rientro': {
      autore: 'CEphoto / Uwe Aranas (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tawau_Sabah_Pasar-Tanjung-Tawau-01.jpg',
    },
  },
  'arabia-saudita-itinerario': {
    'Giorno 1 — Arrivo a Jeddah': {
      autore: 'AndLikeThings (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:King_Fahd_Fountain.jpg',
    },
    'Giorno 2 — Al-Balad': {
      autore: 'Jpatokal (Wikimedia Commons)',
      licenza: 'CC BY-SA',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:AlBalad_CoralHouses.JPG',
    },
    'Giorno 3 — Volo per AlUla': {
      autore: 'Prof. Mortel (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Landscape_at_al-Ula,_Saudi_Arabia_(1).jpg',
    },
    'Giorno 4 — Hegra': {
      autore: 'Prof. Mortel (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Qasr_al-Farid,_Hegra_(Madain_Salih),_1st_cent._CE,_Saudi_Arabia_(1).jpg',
    },
    "Giorno 5 — Jabal Ikmah, Dadan e l'oasi": {
      autore: 'Prof. Mortel (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Jabal_Ikmah,_ancient_Arabian_rock_art_and_inscription_site;_1st_millenium_BCE;_al-Ula,_Saudi_Arabia_(3).jpg',
    },
    'Giorno 6 — Volo per Riyadh': {
      autore: 'B.alotaby (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Riyadh_Skyline_showing_the_King_Abdullah_Financial_District_(KAFD)_and_the_famous_Kingdom_Tower_.jpg',
    },
    'Giorno 7 — Diriyah': {
      autore: 'Radosław Botev (Wikimedia Commons)',
      licenza: 'CC BY 3.0 PL',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:At-Turaif_District_in_ad-Dir'iyah_(5).jpg",
    },
    "Giorno 8 — L'Edge of the World": {
      autore: 'S0lL0 TRAVELER (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Edge_of_the_World.jpg',
    },
    'Giorno 9 — Volo per Abha': {
      autore: 'Wajahatmr (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Ridges_of_Sarawat_Mountains.jpg',
    },
    'Giorno 10 — Rijal Almaa': {
      autore: 'Richard Mortel (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rijal_Almaa_village_2021.jpg',
    },
    'Giorno 11 — Le montagne': {
      autore: 'marviikad (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Abha-_Saudi_Arabia_-_on_the_way_to_Al_Sawda_(2518041457).jpg',
    },
    'Giorno 12 — Rientro': {
      autore: 'Æmyr Sahli (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/airplane-view-from-airport-terminal-window-31703078/',
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
    'Notte Adam\'s Peak — la sfida fisica del viaggio': {
      autore: 'Lasitha Sandeepa Kurukula Arachchi (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sripada-crowd.jpg',
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
  'normandia-bretagna': {
    'Giorno 1 — Rouen': {
      autore: 'Daniel Vorndran / DXR (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Rouen_Cathedral_and_Rue_de_Gros_Horloge_as_seen_from_Gros_Horloge_140215_2.jpg',
    },
    'Giorno 2 — Le spiagge dello sbarco (parte 1)': {
      autore: 'Jrwadf1435 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Normandy_American_Cemetery_and_Memorial_Overlooking_Omaha_Beach.jpg',
    },
    'Giorno 3 — Le spiagge dello sbarco (parte 2)': {
      autore: 'Jebulon (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bombing_craters_at_Pointe_du_Hoc.jpg',
    },
    "Giorno 4 — Bayeux e l'Arazzo": {
      autore: 'Ndesmoul (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Cath%C3%A9drale_de_Bayeux_-_fa%C3%A7ade_-_assemblage_de_4_images.jpg',
    },
    'Giorno 5 — Étretat e Honfleur': {
      autore: 'Mathieu Chollet / MChollet (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cliffs_of_Etretat,_Normandy,_France,_December_2022.jpg',
    },
    'Giorno 6 — Mont-Saint-Michel': {
      autore: 'John Samuel / Jsamwrites (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ramparts_of_Mont_Saint-Michel_01.jpg',
    },
    "Giorno 7 — Mont-Saint-Michel all'alba, poi Saint-Malo": {
      autore: 'Wolfgang Pehlemann (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0 DE',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Saint-Malo_Panorama_Remparts_Walled_City_Altstadt_mit_Stadtmauern_Bastion_St_Philippe_Kathedrale_St_Vincent_Foto_2017_Wolfgang_Pehlemann_P1170149.jpg',
    },
    'Giorno 8 — Dinan e la Côte de Granit Rose': {
      autore: 'Rémih (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rue_du_Jerzual_Dinan.jpg',
    },
    "Giorno 9 — Ploumanac'h e il GR34": {
      autore: 'Pierre Guezingar (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:Fin_de_journ%C3%A9e_sur_Ploumanac%27h_-_Flickr_-_pguezingar.jpg",
    },
    'Giorno 10 — Penisola di Crozon': {
      autore: 'Gzen92 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pointe_de_Pen-Hir_et_les_Tas_de_Pois_(2).jpg',
    },
    'Giorno 11 — Carnac e il Golfo del Morbihan': {
      autore: 'Le Passant (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Alignements_de_Carnac,_Morbihan_(France).jpg',
    },
    'Giorno 12 — Partenza': {
      autore: 'Serge Ottaviani (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:A%C3%A9roport_de_Rennes_-_Saint-Jacques_-_tours_de_contr%C3%B4le.JPG',
    },
  },
  'messico-beach-life': {
    'Giorno 0 — Cancún, notte extra pre-tour': {
      autore: 'Alfonzo Buscemi (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cancun_Hotel_Zone_at_VCI_-_panoramio.jpg',
    },
    'Giorno 1 — Cancún, giornata di spiaggia': {
      autore: 'Matthew T Rader (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:A_beautiful_beach_in_Cancun,_Mexico.jpg',
    },
    'Giorno 2 — Cancún → Valladolid': {
      autore: 'Adam Jones (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Plaza_Scene_with_Iglesia_de_San_Gervasio_-_Valladolid_-_Yucatan_-_Mexico.jpg',
    },
    'Giorno 3 — Valladolid → Mérida': {
      autore: 'Andreita Pech (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Casa_Pe%C3%B3n_de_Regil_-_Paseo_de_Montejo,_M%C3%A9rida,_Yucat%C3%A1n.jpg',
    },
    'Giorno 4 — Mérida, giornata break: Playa Progreso': {
      autore: 'DaLoetz (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:The_beach_and_pier_of_Progreso_de_Castro,_Yucat%C3%A1n.jpg',
    },
    'Giorno 5 — Mérida → Campeche': {
      autore: 'Bernard DUPONT (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colorful_Houses_-_Colonial_Quarter,_Campeche_Feb_2020.jpg',
    },
    'Giorno 6 — Campeche → Mahahual': {
      autore: 'Larry D. Moore (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Walking_Path_Mahahual_Quintana_Roo_2023.jpg',
    },
    'Giorno 7 — Mahahual: Bacalar, snorkeling e Temazcal': {
      autore: 'Sharon Hahn Darlin (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bacalar,_Quintana_Roo,_Mexico_-_Shore_2021.jpg',
    },
    'Giorno 8 — Tulum: giornata chill': {
      autore: 'Erik Cleves Kristensen (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Maya_ruins_at_Tulum_2023_-_beach.jpg',
    },
    'Giorno 9 — Tulum e Playa del Carmen': {
      autore: 'Scott S Bateman (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Playa-del-carmen-beach.jpg',
    },
    'Giorno 10 — Verso Holbox: 3 Islas e bioluminescenza': {
      autore: 'Bruno Rijsman (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:A_touristic_beach_on_Holbox_Island,_Mexico,_june_2018.jpg',
    },
    'Giorno 11 — Holbox: squalo balena': {
      autore: 'dronepicr (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Whale_shark_Holbox_island_Mexico_Walhai_(20179364025).jpg',
    },
    'Giorno 12 — Rientro a Cancún': {
      autore: 'Antony-22 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Canc%C3%BAn_International_Airport_2024a.jpg',
    },
  },
  'provenza-camargue': {
    'Giorno 10 — Un castello cataro o Carcassonne, e partenza': {
      autore: 'Daniel Lepoittevin (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Enter_The_Fortress_(258300379).jpeg',
    },
    'Giorno 9 — Le Calanques': {
      autore: 'Chabe01 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Calanque_En_Vau_Marseille_29.jpg',
    },
    'Giorno 8 — Aix-en-Provence e Marsiglia': {
      autore: 'Clément Bardot (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Vieux-Port_de_Marseille,_France.jpg',
    },
    'Giorno 7 — Le Gole del Verdon': {
      autore: 'Benh LIEU SONG (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Gorges_Verdon_Barrage_Sainte_Croix.jpg',
    },
    'Giorno 6 — Il Luberon e la lavanda (se in stagione)': {
      autore: 'Einaz80 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lavender_field_near_Valensole_3.jpg',
    },
    'Giorno 5 — Aigues-Mortes e le Alpilles': {
      autore: 'Benjamin Smith (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aigues-Mortes_-_Ramparts_at_sunset_-_02.jpg',
    },
    'Giorno 4 — Camargue': {
      autore: 'Compo (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pink_Flamingos_in_the_Camargue.jpg',
    },
    'Giorno 3 — Arles e la Camargue': {
      autore: 'PierreSelim (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Arles_-_2017-05-24_-_Roman_Amphitheatre_-_3804.jpg',
    },
    'Giorno 2 — Pont du Gard e Nîmes': {
      autore: 'Wolfgang Moroder (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pont_du_Gard_2017.jpg',
    },
    'Giorno 1 — Avignone': {
      autore: 'Acediscovery (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Palais-des-Papes-Avignon-June-2012.jpg',
    },
  },
  'costa-azzurra': {
    'Giorno 8 — Partenza, o estensione nel Mercantour': {
      autore: 'Eebie (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Vallee_des_Merveilles-lacs1.jpg',
    },
    'Giorno 7 — Grasse e le colline del profumo': {
      autore: 'Olivier Cleynen (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tourrettes-sur-Loup_seen_from_the_east.jpg',
    },
    'Giorno 6 — Cannes e le Isole di Lerino': {
      autore: 'Abxbay (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ile_sainte_marguerite_fort_royal.JPG',
    },
    'Giorno 5 — Èze, La Turbie e Monaco': {
      autore: 'Tobi 87 (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Èze_und_Cap_Ferrat-Grande_Corniche.jpg',
    },
    'Giorno 4 — Saint-Paul-de-Vence e Vence': {
      autore: 'Pom² (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Saint_paul_de_vence_panorama.jpg',
    },
    'Giorno 3 — Nizza': {
      autore: 'Mike is Michi (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Baie_des_Anges_and_Promenade_des_Anglais_Nice_2026.JPG',
    },
    'Giorno 2 — Il Cap d\'Antibes a piedi': {
      autore: 'Gilbert Bochenek (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sentier_du_Littoral,_Cap_d%27Antibes-France.jpg',
    },
    'Giorno 1 — Antibes: la città vecchia e il porto': {
      autore: 'Evgenii Novikov (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Антиб._Вид_на_порт_Вобан_и_старый_город.jpg',
    },
  },
  'tromso': {
    'Giorno 5 — Tempo libero e partenza': {
      autore: 'Lee Dyer (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Polaria_winter.jpg',
    },
    'Giorno 4 — Cultura sami e renne': {
      autore: 'Nicolas Buffler (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Reindeer_husbandry_in_Saariselkä,_2019_(40293963903).jpg',
    },
    'Giorno 3 — Husky sledding': {
      autore: 'Randi Hausken (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mushing_(5293678449).jpg',
    },
    'Giorno 2 — Aurora chase in minibus': {
      autore: 'Andi Gentsch (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aurora_Borealis_Tromsø_Norway.jpg',
    },
    'Giorno 1 — Arrivo a Tromsø': {
      autore: 'Gaute Bruvik / Tromsø kommune (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tromsdalen_kirke_(Ishavskatedralen)_-_The_Arctic_Cathedral_(5557802765).jpg',
    },
  },
  'costiera-e-isole': {
    'Giorno 1 — Arrivo e prima sera in Costiera': {
      autore: 'Thomas Fabian (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Positano_at_sunset1.jpg',
    },
    'Giorno 2 — Il Sentiero degli Dei': {
      autore: 'Wolfgang Moroder (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sentiero_degli_Dei_26_sopra_Positano_Campania.jpg',
    },
    'Giorno 3 — Amalfi, Atrani e Ravello': {
      autore: 'Berthold Werner (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Amalfi_BW_2013-05-15_10-09-21.jpg',
    },
    'Giorno 4 — La costa orientale e la Valle delle Ferriere': {
      autore: 'LuciaPuzziello (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:To_the_realm_of_fairies.jpg',
    },
    'Giorno 5 — Trasferimento a Capri': {
      autore: 'Wolfgang Moroder (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Marina_Grande_Capri.jpg',
    },
    'Giorno 6 — Capri, dall\'alto e dal mare': {
      autore: 'Marlis Börger (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Capri_Faraglioni_with_boat.jpg',
    },
    'Giorno 7 — Ischia: il Castello e le terme': {
      autore: 'Dudva (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Castello_Aragonese_(Ischia).jpg',
    },
    'Giorno 8 — Ischia: l\'Epomeo, Sorgeto e La Mortella': {
      autore: "Manu'ndroid (Wikimedia Commons)",
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ischia,_Sorgeto.jpeg',
    },
    'Giorno 9 — Procida e rientro': {
      autore: 'Velvet (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Procida_Marina_Corricella.jpg',
    },
  },
  'eolie-in-vela': {
    'Giorno 1 — Imbarco a Milazzo e trasferimento a Vulcano': {
      autore: 'Tartaruga86 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sunset_in_Aeolian_Islands.jpg',
    },
    'Giorno 2 — Vulcano e le Sette Piaghe': {
      autore: 'Francesco Tosoni (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Vulcano_(isola)._Solfatara_(01422).JPG',
    },
    'Giorno 3 — Lipari: il castello, il museo e la pomice': {
      autore: 'Jeanne boleyn (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lipari_castle_on_acropolis.jpeg',
    },
    'Giorno 4 — Salina: la verde': {
      autore: 'fab. (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Eolie_salina_2.jpg',
    },
    'Giorno 5 — Panarea e gli isolotti': {
      autore: 'GerritR (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cala_Junco.JPG',
    },
    'Giorno 6 — Stromboli: la Sciara del Fuoco': {
      autore: 'Unukorno (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Stromboli_sciara_del_fuoco_in_september_2014.jpg',
    },
    'Giorno 7 — Filicudi o Alicudi: le isole della fine': {
      autore: 'Stephen kleckner (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Isola_di_Alicudi_vista_dal_mare_by_Stephne_Kleckner.jpg',
    },
    'Giorno 8 — Rientro e sbarco': {
      autore: 'Dedda71 (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Milazzo_harbour.jpg',
    },
  },
  'stopover-golfo': {
    'Giorno 1 — Dubai, le prime 24 ore': {
      autore: 'CT Cooper (Wikimedia Commons)',
      licenza: 'Public Domain',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Abra_with_passengers_in_Dubai_Creek.jpg',
    },
    'Giorno 2 — Dubai, il secondo giorno': {
      autore: 'Desertsafarideals (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Desert_Dune.jpg',
    },
    'Giorno 3 — Abu Dhabi, lo stopover Etihad': {
      autore: 'Guilhem Vellut (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Sheikh_Zayed_Grand_Mosque_@_Abu_Dhabi_(15856602738).jpg',
    },
    'Giorno 4 — Abu Dhabi, il Louvre e il deserto': {
      autore: 'Boubloub (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:LouvreAD_water.jpg',
    },
    'Giorno 5 — Doha, lo stopover da quattordici dollari': {
      autore: 'Mohamod Fasil (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:IslamicArtMuseumDohaSkyline.jpg',
    },
    'Giorno 6 — Doha, l\'inland sea': {
      autore: 'FLASHPACKER TRAVELGUIDE (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Khor_Al_Adaid_Inland_Sea_and_desert_in_Katar.jpg',
    },
    'Giorno 7 — Jeddah, lo stopover saudita': {
      autore: 'Francisco Anzola (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Green_woodwork_in_old_Jeddah_(Al_Balad)_October_8_2021.jpg',
    },
  },
  'isole-siciliane': {
    'Giorno 1 — Trapani e sbarco a Favignana': {
      autore: 'Davide Mauro / Codas (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Porto_di_Favignana_02.jpg',
    },
    'Giorno 2 — Favignana in bicicletta': {
      autore: 'Davide Mauro / Codas (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cala_Rossa,_Favignana_02.jpg',
    },
    'Giorno 3 — Levanzo e la Grotta del Genovese': {
      autore: 'Civa61 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Levanzo_paese.jpg',
    },
    'Giorno 4 — Marettimo': {
      autore: 'sctkirk (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:The_Castle_of_Marettimo_(36357071461).jpg',
    },
    'Giorno 5 — Trasferimento a Pantelleria e primo giro': {
      autore: 'Nathill2512 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:Arco_dell'Elefante.jpg",
    },
    'Giorno 6 — Lo Specchio di Venere, Benikulà e la Montagna Grande': {
      autore: 'Luca Volpi / Goldmund100 (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Panorama_Lago_specchio_di_venere.jpg',
    },
    'Giorno 7 — I vigneti, i capperi e il Passito': {
      autore: 'Mario Squitieri (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Heroic_Agricolture.jpg',
    },
    'Giorno 8 — Pantelleria dal mare': {
      autore: 'Michael Leithold (Wikimedia Commons)',
      licenza: 'Public Domain',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Dammuso_in_Pantelleria,_Sicily.JPG',
    },
    'Giorno 9 — Giornata di transito': {
      autore: 'EdoBoo (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:External_view_of_Palermo_Airport.jpg',
    },
    'Giorno 10 — Lampedusa e la Spiaggia dei Conigli': {
      autore: 'ALY MOHAMED YOUSSEF (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:SPIAGGIA_DEI_CONIGLI_LAMPEDUSA_1.jpg',
    },
    'Giorno 11 — In barca, o Linosa': {
      autore: 'Luca Siragusa (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Tabaccara,_Lampedusa_(5253890675).jpg',
    },
    'Giorno 12 — Partenza': {
      autore: 'Carlo Dani (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Aeroporto_di_Lampedusa.jpg',
    },
  },
  'grandi-citta-italia': {
    'Giorno 1 — Arrivo a Roma': {
      autore: 'Jorge Franganillo (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Roma_Piazza_di_Santa_Maria_in_Trastevere_(52470998325).jpg',
    },
    'Giorno 2 — Roma antica': {
      autore: 'Stefano Lovato (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Il_Foro_Romano_verso_il_Colosseo_(27556348350).jpg',
    },
    'Giorno 3 — Vaticano e le chiese': {
      autore: 'David Iliff (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:St_Peter's_Square,_Vatican_City_-_April_2007.jpg",
    },
    'Giorno 4 — La Roma sotterranea e l\'Appia': {
      autore: 'Palickap (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Roma,_Via_Appia_Antica_(04).jpg',
    },
    'Giorno 5 — Alta velocità per Firenze': {
      autore: 'Giorgio Galeotti (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Firenze_-_Basilica_di_San_Miniato_al_Monte,_Florence,_Italy_-_April_6,_2015_02.jpg',
    },
    'Giorno 6 — La cupola e gli Uffizi': {
      autore: 'Senpai (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.5',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cupola_Santa_Maria_del_Fiore.JPG',
    },
    'Giorno 8 — Alta velocità per Venezia': {
      autore: 'Derbrauni (Wikimedia Commons)',
      licenza: 'CC BY 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Canal_Grande_at_Stazione_di_Venezia_Santa_Lucia.jpg',
    },
    'Giorno 9 — Venezia all\'alba e la Scuola di San Rocco': {
      autore: 'Armin Kleiner (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Venice,_San_Polo,_Mercato_del_Pesce_i1.jpg',
    },
    'Giorno 10 — La laguna': {
      autore: 'Anoixe (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Case_di_Burano.jpg',
    },
    'Giorno 11 — Alta velocità per Napoli': {
      autore: 'MM (Wikimedia Commons)',
      licenza: 'Public Domain',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:NapoliPanoramaDaSanMartino.jpg',
    },
    'Giorno 7 — Il museo che nessuno fa': {
      autore: 'Sailko (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Lorenzo_ghiberti,_porta_del_paradiso,_1425-52,_00.JPG',
    },
    'Giorno 12 — Pompei ed Ercolano, e rientro': {
      autore: 'Tracey Hind (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:View_of_Vesuvius_from_Via_Dell'Abbondanza,_Pompeii_(52786200781).jpg",
    },
  },
  'bordeaux-e-vigneti': {
    'Giorno 1 — Bordeaux città': {
      autore: 'Mith (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Place_de_la_Bourse,_Bordeaux.jpg',
    },
    'Giorno 2 — La Cité du Vin e i Chartrons': {
      autore: 'Chris06 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bordeaux_Quai_de_Bacalan_(1).jpg',
    },
    'Giorno 3 — Saint-Émilion': {
      autore: 'Chris06 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:2023_%C3%89glise_monolithe_de_Saint-%C3%89milion_(01).jpg',
    },
    'Giorno 4 — Pomerol e i Graves': {
      autore: 'Pascal3012 (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pomerol.jpg',
    },
    'Giorno 5 — Il Médoc': {
      autore: 'Slywire (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Chateau_La_Tour_de_By_Vignoble.jpg',
    },
    'Giorno 6 — Sauternes': {
      autore: 'Megan Mallen (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        "https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_Doisy-V%C3%A9drines,_Barsac,_Sauternes_noble_rot_grapes.jpg",
    },
    'Giorno 7 — Bacino di Arcachon': {
      autore: 'Seriousgroove (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Dune_du_Pyla.JPG',
    },
  },
  'firenze-3-giorni': {
    'Giorno 1 — Il complesso del Duomo e il centro': {
      autore: 'Senpai (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.5',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cupola_Santa_Maria_del_Fiore.JPG',
    },
    'Giorno 2 — Uffizi e Oltrarno': {
      autore: 'Jebulon (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ponte_Vecchio_Arno_Florence.jpg',
    },
    'Giorno 3 — Il David, le Cappelle Medicee e la scelta finale': {
      autore: 'Dimitris Kamaras (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        "https://commons.wikimedia.org/wiki/File:Michelangelo's_David,_Galleria_dell'Accademia,_Florence_(26612167281).jpg",
    },
  },
  'roma-4-giorni': {
    'Giorno 1 — La Roma antica: Colosseo, Foro, Palatino': {
      autore: 'Debashritaiitmandi (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Colosseum_Rome_DSC06208.jpg',
    },
    'Giorno 2 — Vaticano: Musei, Sistina, San Pietro': {
      autore: 'Paris Orlando / NikonZ7II (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:Facade_of_Saint_Peter's_Basilica_in_day.jpg",
    },
    'Giorno 3 — Il centro barocco e la Galleria Borghese': {
      autore: 'Nicholas Hartmann (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Rome_Pantheon_facade_and_Piazza_della_Rotonda.jpg',
    },
    'Giorno 4 — La Roma che non finisce sulle cartoline': {
      autore: 'Rincewindbpmeu (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Appian_Way_as_seen_from_Mausoleum_of_the_Curiazi.jpg',
    },
  },
  'venezia-3-giorni': {
    'Giorno 1 — San Marco, ma all\'ora giusta': {
      autore: 'Nino Barbieri (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.5',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:Venice_-_St._Marc's_Basilica_01.jpg",
    },
    'Giorno 2 — Dorsoduro, i Frari e San Rocco': {
      autore: 'Wolfgang Moroder (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Basilica_Santa_Maria_della_Salute_Canal_Grande_Dorsoduro_Venezia.jpg',
    },
    'Giorno 3 — Cannaregio, il Ghetto e le isole': {
      autore: 'Jorge Franganillo (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Burano_-_canal_and_colourful_houses_(35262836603).jpg',
    },
  },
  'napoli-3-giorni': {
    'Giorno 1 — I decumani, il Cristo Velato e la Napoli sotterranea': {
      autore: 'Alpha 350 (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Spaccanapoli,_Via_dei_Tribunali,_Naples,_Italy_(18036064939).jpg',
    },
    'Giorno 2 — MANN, Sanità e la collina': {
      autore: 'Argo Navis (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:View_of_Naples_from_Castel_Sant'Elmo_20230622_01.jpg",
    },
    'Giorno 3 — Il Vesuvio, Ercolano e Pompei': {
      autore: 'Brian Jeffery Beggerly (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pompeii,_December_2023_IMG_7708_(54186985376).jpg',
    },
  },
  'torino-2-giorni': {
    'Giorno 1 — Museo Egizio, piazze e caffè': {
      autore: 'Jeanne Griffin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Turin_Palazzo_Madama_Juvarra_facade_22-3-22.jpg',
    },
    'Giorno 2 — La Mole, il fiume e la collina': {
      autore: 'Wikibusters (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mole_Antonelliana_in_Turin.jpg',
    },
  },
  'milano-e-i-laghi': {
    'Giorno 1 — Duomo, centro, Brera e Castello': {
      autore: 'l0da_ralta (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Duomo_facade,_Milan,_Italy_(9471457573).jpg',
    },
    'Giorno 2 — Cenacolo, Sant\'Ambrogio e la Milano contemporanea': {
      autore: 'Threecharlie (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        "https://commons.wikimedia.org/wiki/File:Basilica_di_Sant'Ambrogio,_facciata_e_quadriportico_(Milano).jpg",
    },
  },
  'parigi-5-giorni': {
    'Giorno 1 — Île de la Cité e il centro storico': {
      autore: 'Dietmar Rabich (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Paris,_Notre_Dame_--_2014_--_1434.jpg',
    },
    'Giorno 2 — Il Louvre': {
      autore: 'Pedro Szekely (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:North_facade_of_the_Denon_Wing_%26_Louvre_Pyramid,_1_May_2018.jpg',
    },
    'Giorno 3 — Orsay, Orangerie e Torre Eiffel': {
      autore: 'NonOmnisMoriar (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Eiffel_tower_from_trocadero.jpg',
    },
    'Giorno 4 — Montmartre all\'alba e Versailles': {
      autore: 'Pedro Szekely (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: "https://commons.wikimedia.org/wiki/File:Sacr%C3%A9-C%C5%93ur_Basilica_in_Montmartre,_2_May_2018.jpg",
    },
    'Giorno 5 — Quartieri e chiusura': {
      autore: 'Pierre-Yves Beaudouin (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cemetery_P%C3%A8re-Lachaise_in_autumn_01.jpg',
    },
  },
  'rotte-dei-vini-itinerario': {
    'Giorno 1 — Arrivo nelle Langhe': {
      autore: 'Phalaenopsis Aphrodite (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Langhe.jpg',
    },
    'Giorno 2 — Barolo': {
      autore: 'Megan Mallen (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Nebbiolo_vines_above_town_of_Barolo.jpg',
    },
    'Giorno 3 — Barbaresco e Roero': {
      autore: 'David Haberthür (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Barbaresco_vineyard.jpg',
    },
    'Giorno 4 — Trasferimento in Valpolicella': {
      autore: 'Aaron Epstein (Wikimedia Commons)',
      licenza: 'CC BY 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Stitched_Panorama_of_Valpolicella_vineyard.jpg',
    },
    'Giorno 5 — Amarone, Valpolicella e Soave': {
      autore: 'Casa del Vino (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Soave_Castle.jpg',
    },
    'Giorno 6 — Le colline del Prosecco': {
      autore: 'Civvì (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Pentagono_del_Cartizze_01.jpg',
    },
    'Giorno 7 — Chianti Classico': {
      autore: 'Tom Chance (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Vineyards_in_the_Chianti_Classico_valleys.jpg',
    },
    'Giorno 8 — Montalcino': {
      autore: 'Bjørn Christian Tørrissen (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Montalcino-Skyline-2012.JPG',
    },
    'Giorno 9 — La Val d\'Orcia': {
      autore: 'JP Vets (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cipressi_pellegrini.jpg',
    },
    'Giorno 10 — Rientro': {
      autore: 'Maëlick (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Florence_Sunset_-_Flickr_-_Ma%C3%ABlick.jpg',
    },
  },
  'castelli-loira': {
    'Giorno 1 — Arrivo e Blois': {
      autore: 'Cussenot (Wikimedia Commons)',
      licenza: 'CC0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Blois_-_Fa%C3%A7ade_des_Loges.jpg',
    },
    'Giorno 2 — Chambord': {
      autore: 'Krzysztof Golik (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:North-west_facade_of_the_Castle_of_Chambord_06.jpg',
    },
    'Giorno 3 — Chenonceau e Amboise': {
      autore: 'Giladtop (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Chenonceau_on_a_cloudy_day.jpg',
    },
    'Giorno 4 — In bicicletta lungo la Loira': {
      autore: 'Guillaume Boulanger (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/37553948/',
    },
    'Giorno 5 — Villandry e Azay-le-Rideau': {
      autore: 'LonganimE (Wikimedia Commons)',
      licenza: 'CC BY-SA 2.5',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Villandry_vue_des_jardins.JPG',
    },
    'Giorno 6 — Cheverny o Fontevraud, e partenza': {
      autore: 'Jean-Christophe BENOIST (Wikimedia Commons)',
      licenza: 'CC BY 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Cheverny-Chateau-VueFrontale.jpg',
    },
  },
  'settimana-bianca': {
    'Giorno 1 — Arrivo e ritiro dell\'attrezzatura': {
      autore: 'Kallerna (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:3_Zinnen_Dolomites_ski_resort_1.jpg',
    },
    'Giorno 2 — Rodaggio e ricognizione': {
      autore: 'RimOrso (Wikimedia Commons)',
      licenza: 'Public Domain',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:La_pista_Valon_sopra_le_nuvole.jpg',
    },
    'Giorno 3 — Il giro del Sellaronda': {
      autore: 'Michael Karavanov (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Gruppo_del_Sella_-_panoramio.jpg',
    },
    'Giorno 4 — Giornata tecnica o riposo attivo': {
      autore: 'MaiDireLollo (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Franchetti.JPG',
    },
    'Giorno 5 — Scialpinismo, o la montagna senza impianti': {
      autore: 'Giacomo Berardi (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Scialpinismo_sotto_il_Catinaccio.jpg',
    },
    'Giorno 6 — La giornata lunga': {
      autore: 'Luca Lorenzi (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Plan_de_Corones_-_panorama.JPG',
    },
    'Giorno 7 — Ultima mattina e rientro': {
      autore: 'VitVit (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Corvara_sjezdovka_a_lanovka.jpg',
    },
  },
  'rotte-dei-vini-francia': {
    'Giorno 1 — Arrivo a Colmar': {
      autore: 'Krzysztof Golik (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Little_Venice_in_Colmar_01.jpg',
    },
    'Giorno 2 — Riquewihr e Eguisheim in bicicletta': {
      autore: 'JopkeB (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Street_in_Riquewihr_2011.jpg',
    },
    'Giorno 3 — Route des Vins verso sud': {
      autore: 'AlineRockstud68 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:La_place_du_Ch%C3%A2teau_Saint-L%C3%A9on_%C3%A0_Eguisheim.jpg',
    },
    'Giorno 4 — Strasburgo': {
      autore: 'Bohyunlee (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Petite_France_of_Strasbourg.jpg',
    },
    'Giorno 5 — Trasferimento a Reims': {
      autore: 'Lumaca (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Cath%C3%A9drale_Notre-Dame_de_Reims_(fa%C3%A7ade).jpg',
    },
    'Giorno 6 — Una crayère di Champagne': {
      autore: 'Wes Guild (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/34643419/',
    },
    "Giorno 7 — Épernay e l'Avenue de Champagne": {
      autore: 'Mz~commonswiki (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Headquarters_moet_et_chandon_in_Epernay.JPG',
    },
    'Giorno 8 — Rientro': {
      autore: 'Florian Pépellin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:TGV_en_gare_de_Reims_avant_retour_%C3%A0_Paris_(juillet_2024).JPG',
    },
  },
  'settimana-bianca-francia': {
    'Giorno 4 — Giornata in una valle laterale o a Chamonix': {
      autore: 'Christian David (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Panorama_of_Aiguille_du_Midi_station_and_Mont_Blanc_glaciers,_Chamonix,_Haute-Savoie.jpg',
    },
    'Giorno 2 — Sci nel comprensorio principale': {
      autore: 'Florian Pépellin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Gorges_de_la_Daille_et_Val-d%27Is%C3%A8re_depuis_le_barrage_(f%C3%A9vrier_2026).JPG',
    },
    'Giorno 3 — Sci nel comprensorio principale': {
      autore: 'Rémih (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Mont_du_Vallon_@_Col_du_Gollet.jpg',
    },
    'Giorno 5 — Sci libero': {
      autore: 'Webwizzard (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Ski_Touring_group_Chamonix_Mont_Blanc.JPG',
    },
    'Giorno 1 — Arrivo': {
      autore: 'Florian Pépellin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Station_de_Val_Thorens_en_hiver_(f%C3%A9vrier_2024)_1.JPG',
    },
    'Giorno 6 — Sci libero': {
      autore: 'Antoine Lamielle (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:2017-01_Grande_Motte_Tignes_01.jpg',
    },
    'Giorno 7 — Ultima mattina e partenza': {
      autore: 'Florian Pépellin (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Office_du_tourisme_de_Courchevel_1850_(d%C3%A9cembre_2019).JPG',
    },
  },
  'bulgaria-bansko-rila': {
    'Giorno 1 — Arrivo a Sofia e trasferimento a Bansko': {
      autore: 'Colin W (Wikimedia Commons)',
      licenza: 'CC BY-SA 3.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Old_town_Bansko_-_panoramio.jpg',
    },
    'Giorno 2-4 — Sci sulle piste di Bansko': {
      autore: 'Kallerna (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl: 'https://commons.wikimedia.org/wiki/File:Bansko_ski_2025_16.jpg',
    },
    'Giorno 5 — Escursione al Monastero di Rila': {
      autore: 'Explorer1940 (Wikimedia Commons)',
      licenza: 'CC BY-SA 4.0',
      fonteUrl:
        'https://commons.wikimedia.org/wiki/File:Rila_Monastery_-_Rozhdestvo_Bogorodichno_01.jpg',
    },
    'Giorno 6 — Rientro': {
      autore: 'Yassen Kounchev (Pexels)',
      licenza: 'Pexels License',
      fonteUrl: 'https://www.pexels.com/photo/19745695/',
    },
  },
}
