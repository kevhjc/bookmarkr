module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Newsreader', 'serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [],
}
