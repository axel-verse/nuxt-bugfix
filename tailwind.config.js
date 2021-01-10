module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      padding: {
        full: '100%',
      },
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      textColor: ['disabled'],
      backgroundColor: ['disabled'],
      ringColor: ['hover'],
      ringWidth: ['hover'],
    },
  },
  plugins: [],
}
