// theme.js
const { createTheme } = require("@mui/material")

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // This sets the theme to dark mode
    primary: {
      main: '#e91e63', // You can customize your primary color
    },
    secondary: {
      main: '#5A20CB', // You can customize your secondary color
    },
    black: {
        main: '#242B2E', // You can customize your secondary color
    },
    background: {
      main: '#0000000', // Background color for the dark theme
      default: '#0D0D0D', // Paper color for the dark theme
      paper:'#0D0D0D'
    },
    textColor:{
        main:'#111111'
    }
  },
});


