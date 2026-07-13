/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette "strumento di precisione": grafite profondo (non nero puro),
        // ottone smorzato come accento primario (quadranti/leve di strumenti
        // analogici), blu acciaio per i dati misurati, salvia smorzata per
        // qualità/conferma. Deliberatamente lontano dal nero+neon generico.
        cm: {
          bg: '#12161D',
          panel: '#1B212B',
          panelBorder: '#2A3140',
          brass: '#C9A24B',
          data: '#8FB4D9',
          good: '#7CAE8D',
          warn: '#D98A4B',
          danger: '#C97070',
          text: '#E4E7EC',
          textDim: '#8A93A3',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
