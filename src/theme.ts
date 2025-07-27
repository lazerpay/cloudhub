import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FB432C',
      light: '#FF591E',
      dark: '#E63946',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF591E',
      light: '#FF7043',
      dark: '#E64A19',
      contrastText: '#ffffff'
    },
    text: {
      primary: '#282828',
      secondary: '#5f6980'
    },
    background: {
      default: '#ffffff',
      paper: '#fcfcfc'
    },
    grey: {
      50: '#fcfcfc',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121'
    },
    common: {
      black: '#000000',
      white: '#ffffff'
    }
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '54px',
      fontWeight: 600,
      lineHeight: '63px',
      letterSpacing: '-1.5px'
    },
    h2: {
      fontSize: '26px',
      fontWeight: 700,
      lineHeight: '32px'
    },
    h3: {
      fontSize: '21.86px',
      fontWeight: 500,
      lineHeight: '28px'
    },
    h4: {
      fontSize: '18px',
      fontWeight: 600,
      lineHeight: '24px'
    },
    h5: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '22px'
    },
    h6: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '20px'
    },
    body1: {
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '30px'
    },
    body2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px'
    },
    caption: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px'
    },
    button: {
      fontSize: '14px',
      fontWeight: 600,
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default theme;