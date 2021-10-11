import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import OrderListToolbar from '../../components/order/OrderListToolbar';
import OrderListResults from '../../components/order/OrderListResults';
import { Orders } from '../../services';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const loadOrders = () => {
    Orders.getOrders().then((data) => setOrders(data.data || []))
    .catch((err) => {});
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
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
          <OrderListToolbar
            loadOrders={loadOrders}
            selectedOrder={selectedOrder}
            setSelectedOrder={setSelectedOrder}
          />
          <Box sx={{ pt: 3 }}>
            <OrderListResults orders={orders} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OrderList;
