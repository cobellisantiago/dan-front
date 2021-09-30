import { Helmet } from 'react-helmet';
import { Box } from '@material-ui/core';
import NewShipment from '../../components/shipment/NewShipment';

const AddShipment = () => (
  <>
    <Helmet>
      <title>Envios</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <NewShipment />
    </Box>
  </>
);

export default AddShipment;
