import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import ClientNewPayment from '../../components/payment/ClientNewPayment';

const AddPayment = () => (
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
      <ClientNewPayment />
    </Box>
  </>
);

export default AddPayment;
