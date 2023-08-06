import { Theme } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#35baf8',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#82da55',
    },
  },
  typography: {
    fontFamily: '"Mulish", sans-serif',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 70,
    },
  },
});

export default theme;
