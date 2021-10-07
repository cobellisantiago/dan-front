import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography
} from '@material-ui/core';
import {
  Home as ConstructionIcon,
  Tool as MaterialIcon,
  ShoppingCart as OrderIcon,
  DollarSign as PaymentIcon,
  Truck as ShipmentIcon,
  User as ProfileIcon
} from 'react-feather';
import { useSelector } from 'react-redux';
import NavItem from './NavItem';

const items = [
  {
    href: '/app/account',
    icon: ProfileIcon,
    title: 'Mi perfil',
    clientVisibility: true,
  },
  {
    href: '/app/construction',
    icon: ConstructionIcon,
    title: 'Obras',
    clientVisibility: true,
  },
  {
    href: '/app/material',
    icon: MaterialIcon,
    title: 'Materiales',
    clientVisibility: false,
  },
  {
    href: '/app/order',
    icon: OrderIcon,
    title: 'Pedidos',
    clientVisibility: true,
  },
  {
    href: '/app/payment',
    icon: PaymentIcon,
    title: 'Pagos',
    clientVisibility: true,
  },
  {
    href: '/app/shipment',
    icon: ShipmentIcon,
    title: 'Envios',
    clientVisibility: false,
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();
  const { user } = useSelector((state) => ({
   user: state.users.user,
  }));

  const { userType } = user.user;

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Typography
          color="textPrimary"
          variant="h5"
        >
          {user.businessName || user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user?.user?.userType?.type}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
              hidden={!item.clientVisibility}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: 'calc(100% - 64px)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
