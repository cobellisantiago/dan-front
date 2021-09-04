import { Helmet } from 'react-helmet';
import {
  Box,
  Container
} from '@material-ui/core';
// import EmployeeProfile from '../components/account/EmployeeProfile';
import ClientProfile from '../components/account/ClientProfile';

const Account = () => (
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
        <ClientProfile />
      </Container>
    </Box>
  </>
);

export default Account;
