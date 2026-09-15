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
}
