'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    contrastThreshold: 4.5,
    primary: {
      main: '#0153C1',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#F6C5C5',
      main: '#C62535',
      light: '#7A1220',
      contrastText: '#fff',
    },
  },
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    
    MuiButton: {
      styleOverrides:{
        root:{
          borderRadius: 5,
        }
      },defaultProps: {
        // The props to change the default for.
        disableElevation: true, // No more ripple, on the whole application 💣!

      },
    },
    
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: 'info' },
              style: {
                backgroundColor: '#60a5fa',
              },
            },
          ],
        },
      },
    },
  },
});

export default theme;
