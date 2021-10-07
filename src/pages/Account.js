import { Helmet } from 'react-helmet';
import {
  Box,
  Container
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import EmployeeProfile from '../components/account/EmployeeProfile';
import ClientProfile from '../components/account/ClientProfile';

const Account = () => {
  const { user } = useSelector((state) => ({
    user: state.users.user
  }));

  const { userType } = user.user;

  return (
    <>
      <Helmet>
        <title>Mi perfil</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          { userType.type === 'Cliente'
            ? <ClientProfile user={user} />
            : <EmployeeProfile user={user} />}
        </Container>
      </Box>
    </>
  );
};

export default Account;
