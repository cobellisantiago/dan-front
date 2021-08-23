import { Helmet } from 'react-helmet';
import {
  Box,
  Container
} from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';

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
        <AccountProfile />
      </Container>
    </Box>
  </>
);

export default Account;
