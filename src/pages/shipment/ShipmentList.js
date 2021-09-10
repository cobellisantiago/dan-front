import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import customers from 'src/__mocks__/customers';
import ShipmentListToolbar from '../../components/shipment/ShipmentListToolbar';
import ShipmentListResults from '../../components/shipment/ShipmentListResults';

const ShipmentList = () => (
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
      <Container maxWidth={false}>
        <ShipmentListToolbar />
        <Box sx={{ pt: 3 }}>
          <ShipmentListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default ShipmentList;
