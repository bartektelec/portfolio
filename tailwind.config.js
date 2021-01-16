module.exports = {
  purge: ['./pages/*.tsx', './components/**/*.tsx', './components/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        profile: 'min(600px, 70vh)',
      },
      fontFamily: {
        marker: 'Permanent Marker',
      },
      letterSpacing: {
        ultra: '.3em',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
