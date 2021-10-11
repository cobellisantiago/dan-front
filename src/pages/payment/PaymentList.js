import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import PaymentListResults from 'src/components/payment/PaymentListResults';
import PaymentListToolbar from 'src/components/payment/PaymentListToolbar';
import ErrorDialog from 'src/components/ErrorDialog';
import { Payments } from '../../services';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [errorFetchingPayments, setErrorFetchingPayments] = useState(null);

  const loadPayments = () => {
    Payments.getPayments().then((data) => setPayments(data.data || []))
    .catch((err) => setErrorFetchingPayments(err?.data?.message || 'An Error has ocurred.'));
  };

  useEffect(() => {
    loadPayments();
  }, []);

  return (
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
          <PaymentListToolbar loadPayments={loadPayments} />
          <Box sx={{ pt: 3 }}>
            <PaymentListResults payments={payments} />
          </Box>
        </Container>
      </Box>

      {!!errorFetchingPayments && (
        <ErrorDialog
          title="Error al buscar los Pagos"
          message={errorFetchingPayments}
          handleClose={() => setErrorFetchingPayments(null)}
        />
      )}
    </>
  );
};

export default PaymentList;
