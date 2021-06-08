module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      spacing: {
        1000: '1000px',
      },
    },
  },
  variants: {
    extend: {
      alignItems: ['first'],
      flexGrow: ['first'],
      fontWeight: ['first'],
      margin: ['first', 'last'],
      textTransform: ['first'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
