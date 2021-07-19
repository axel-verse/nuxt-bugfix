const plugin = require('tailwindcss/plugin')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  mode: 'jit',
  purge: [
    './components/**/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './assets/**/*.scss',
  ],
  theme: {
    extend: {
      spacing: {
        1000: '1000px',
      },
    },
  },
  variants: {},
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.box-inherit': {
          boxSizing: 'inherit',
        },

        '.font-roboto': {
          fontFamily: '"Roboto", sans-serif',
        },
      }

      addUtilities(newUtilities)
    }),

    require('@tailwindcss/typography'),
  ],
}
