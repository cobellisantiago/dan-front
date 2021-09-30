import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import EmployeeNewOrder from '../../components/order/EmployeeNewOrder';

const AddOrder = () => (
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
      <EmployeeNewOrder />
    </Box>
  </>
);

export default AddOrder;
