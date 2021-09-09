import React from 'react';
import {
  Box,
  Button
} from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const PaymentListToolbar = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/app/payment/add', { replace: true });
  }

  return (
    <Box {...props} sx={{ display: 'flex', justifyContent: 'right' }}>
      <Box sx={{ alignSelf: 'center' }}>
        <Button
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Agregar pago
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentListToolbar;
