module.exports = {
  purge: ['./pages/**/*.ts', './components/**/*.ts'],
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
