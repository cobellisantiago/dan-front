import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
    color="secondaryDark"
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/" sx={{ display: 'flex' }}>
        <Logo />
      </RouterLink>
      <Typography
        color="white"
        variant="h4"
        sx={{ marginLeft: 2 }}
      >
        Corralón Martinez
      </Typography>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
