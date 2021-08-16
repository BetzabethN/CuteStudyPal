module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '425px',
      ms: '530px',
      sm: '640px',
      md: '768px',
      rg: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
      '4xl': '1920px',
    },
    extend: {
      backgroundColor: theme => ({
        'ldthistle': '#BAA1BA',
        'dthistle': '#886F88',
        'gblue': '#BFD9D9',
        'gyello': '#D9D9BF'
        // add code from email
      }),
      colors: {
        transparent: 'transparent',
  
        black: '#000000',
        white: '#ffffff',
  
        primary: '#ff6027',
  
        mint: '#3deab6',
  
        // OP Theme Colors
        opOrange: '#ff7252',
        opTangerine: '#f7957e',
        opYellow: '#f7ce68',
        opDandelion: '#fef8e9',
        opIris: '#554dd1',
        opPeriwinkle: '#807bd7',
  
        // OP Alt. Colors
        opBlack: '#3a3a3a',
        opOffWhite: '#f6f6f6',
        opGray: '#c4c4c4',
        opYellowLite: '#fbe7b3',
  
        // Text color
        darkGray: '#3f3f3f',
  
        // Perk Card Colors
        darkIris: '#352EA4',
        lightGray: '#5B5B5B',
  
        // Transparent gray
        grayLight: 'rgba(0, 0, 0, 0.25)',
        blackLight: 'rgba(0, 0, 0, 0.65)',
  
        success: '#44A816',
        error: '#FF4141',
  
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#cacaca',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        red: {
          100: '#fff5f5',
          200: '#fed7d7',
          300: '#feb2b2',
          400: '#fc8181',
          500: '#f56565',
          600: '#e53e3e',
          700: '#c53030',
          800: '#9b2c2c',
          900: '#742a2a',
        },
        orange: {
          100: '#fffaf0',
          150: '#f9eed8',
          200: '#feebc8',
          300: '#fbd38d',
          400: '#f6ad55',
          500: '#ed8936',
          600: '#dd6b20',
          700: '#c05621',
          800: '#9c4221',
          900: '#7b341e',
        },
        lightGreen: {
          100: '#f0fff4',
          200: '#c6f6d5',
          300: '#9ae6b4',
          400: '#68d391',
          500: '#48bb78',
          600: '#38a169',
          700: '#2f855a',
          800: '#276749',
          900: '#22543d',
        },
        teal: {
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#4db6ac',
          400: '#26a69a',
          500: '#009688',
          600: '#00897b',
          700: '#00796b',
          800: '#00695c',
          900: '#004d40',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',}}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
