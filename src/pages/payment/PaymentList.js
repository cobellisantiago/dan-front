import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PaymentListResults from 'src/components/payment/PaymentListResults';
import PaymentListToolbar from 'src/components/payment/PaymentListToolbar';
import customers from 'src/__mocks__/customers';

const PaymentList = () => (
  <>
    <Helmet>
      <title>Pagos</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <PaymentListToolbar />
        <Box sx={{ pt: 3 }}>
          <PaymentListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default PaymentList;
