import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import customers from 'src/__mocks__/customers';
import OrderListToolbar from '../../components/orders/OrderListToolbar';
import OrderListResults from '../../components/orders/OrderListResults';

const OrderList = () => (
  <>
    <Helmet>
      <title>Pedidos</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <OrderListToolbar />
        <Box sx={{ pt: 3 }}>
          <OrderListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default OrderList;
