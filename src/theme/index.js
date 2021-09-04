import { colors, createTheme } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white
    },
    primary: {
      contrastText: '#ffffff',
      main: '#d9c125'
    },
    primaryLight: {
      contrastText: '#ffffff',
      main: '#f5df64'
    },
    secondary: {
      contrastText: '#ffffff',
      main: '#a8a8a8'
    },
    secondaryDark: {
      contrastText: '#ffffff',
      main: '#3D3D3D'
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c'
    }
  },
  shadows,
  typography
});

export default theme;
