module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono']
      },
      colors: {
        primary: '#3366FF',
        primaryDark: '#254EDA',
        primaryLight: '#6690FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
