import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar, Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => (
  <AppBar elevation={0} {...rest} color="secondaryDark">
    <Toolbar>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <Typography
        color="white"
        variant="h4"
        sx={{ marginLeft: 2 }}
      >
        Corralón Martinez
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Hidden lgDown>
        <IconButton color="inherit">
          <InputIcon />
        </IconButton>
      </Hidden>
      <Hidden lgUp>
        <IconButton
          color="inherit"
          onClick={onMobileNavOpen}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </Toolbar>
  </AppBar>
);

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
