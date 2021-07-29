module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'ldthistle': '#BAA1BA',
        'dthistle': '#886F88',
        'gblue': '#BFD9D9',
        'gyello': '#D9D9BF'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
