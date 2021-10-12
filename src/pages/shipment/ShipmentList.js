import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import customers from 'src/__mocks__/customers';
import { useEffect, useState } from 'react';
import ShipmentListToolbar from '../../components/shipment/ShipmentListToolbar';
import ShipmentListResults from '../../components/shipment/ShipmentListResults';
import { Shipments } from '../../services';

const ShipmentList = () => {
  const [shipments, setShipments] = useState([]);
  const [selectedShipment, setSelectedShipment] = useState(null);

  const loadShipments = () => {
    Shipments.getShipments().then((data) => setShipments(data.data || []))
      .catch((err) => {});
  };

  useEffect(() => {
    loadShipments();
  }, []);

  return (
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
          <ShipmentListToolbar
            loadShipments={loadShipments}
            selectedShipment={selectedShipment}
            setSelectedShipment={setSelectedShipment}
          />
          <Box sx={{ pt: 3 }}>
            <ShipmentListResults
              shipments={shipments}
              setSelectedShipment={setSelectedShipment}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ShipmentList;
