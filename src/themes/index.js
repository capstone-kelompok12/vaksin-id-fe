import Rubik from '../assets/fonts/rubik/rubik-v21-latin-regular.woff2'
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette:{
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#006D39',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '##637E9A',
      main: '#2E4057',
      // dark: will be calculated from palette.secondary.main,
      contrastText: 'rgba(256, 256, 256, 0.87)',
    },
     // Provide every color token (light, main, dark, and contrastText) when using
     // custom colors for props in Material UI's components.
     // Then you will be able to use it like this: `<Button color="custom">`
     // (For TypeScript, you need to add module augmentation for the `custom` value)
    success: {
      light: '#99E459',
      main: '#6cd328',
      dark: '#50B51D',
      contrastText: 'rgba(0, 10, 10, 0.87)',
    },
    info:{
      light: '#7593FF',
      main: '#476cff',
      dark: '#3352DB',
      contrastText: 'rgba(0, 10, 10, 0.87)',
    },
    warning:{
      light: '#FFDF3F',
      main: '#ffd000',
      dark: '#DBAE00',
      contrastText: 'rgba(0, 10, 10, 0.87)',
    },
    danger:{
      light: '#FF9286',
      main: '#FF615e',
      dark: '#DB444E',
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
    softDanger:{
      light: '#ffe1de',
      main: '#FFDAD6',
      dark: '#b29895',
      contrastText: 'rgba(0, 10, 10, 0.87)',
      text: '#93000A',
    },
    softNeutral:{
      light: '#e7e8e4',
      main: '#E1E3DE',
      dark: '#9d9e9b',
      text: '#454744',
      contrastText: 'rgba(0, 10, 10, 0.87)',
    },
    softSuccess:{
      light: '#d7ffbc',
      main: '#CEFFAC',
      dark: '#90b278',
      text: '#285E00',
      contrastText: 'rgba(0, 10, 10, 0.87)',
    },
    softInfo:{
      light: '#dbe9ff',
      main: '#D2E4FF',
      dark: '#939fb2',
      text: '#004880',
      contrastText: 'rgba(0, 10, 10, 0.87)',
    },
    softWarning:{
      light: '#ffe69b',
      main: '#FFE082',
      dark: '#b29c5b',
      text: '#564500',
      contrastText: 'rgba(0, 10, 10, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography:{
    fontFamily: 'Rubik, sans-serif'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Rubik'), local('rubik-v21-latin-regular'), url(${Rubik}) format('woff2');
          // unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiButton: {
      styleOverrides:{
        root:{
          borderRadius: 18,
          textTransform: 'none',
          p: 2,
        }
      }
    },
    MuiChip: {
      styleOverrides:{
        root:{
          borderRadius: 6,
        }
      }
    }
  },
  color:{
    greenOpaque: `linear-gradient(0deg, rgba(0, 109, 57, 0.14), rgba(0, 109, 57, 0.14)), #FBFDF7`,
    neutral: '#fafafb',
    text: '#191C19'
  }
})

export default theme