import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import AddPayment from 'src/pages/payment/AddPayment';

const PaymentListToolbar = ({ loadPayments }) => {
  const [showAddNewPayment, setShowAddNewPayment] = useState(false);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Box sx={{ alignSelf: 'center' }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setShowAddNewPayment(true)}
          >
            Agregar pago
          </Button>
        </Box>
      </Box>

      {showAddNewPayment && (
        <AddPayment
          loadPayments={loadPayments}
          setShowAddNewPayment={setShowAddNewPayment}
        />
      )}
    </>
  );
};

export default PaymentListToolbar;
