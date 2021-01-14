module.exports = {
  purge: ['./pages/*.tsx', './components/**/*.tsx', './components/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        profile: '80vh',
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
