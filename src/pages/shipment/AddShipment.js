import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader, CircularProgress,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import OrdersTable from '../../components/shipment/OrdersTable';
import ErrorDialog from '../../components/ErrorDialog';
import Modal from '../../components/Modal';
import { Orders, Shipments } from '../../services';

const useStyles = makeStyles({
  container: {
    maxHeight: '550px',
    maxWidth: '900px'
  }
});

const AddShipment = ({
 loadShipments, setShowAddNewShipment, selectedShipment, setSelectedShipment
}) => {
  const classes = useStyles();
  const [isSaving, setIsSaving] = useState(false);
  const [errorCreatingShipment, setErrorCreatingShipment] = useState(null);
  const [orders, setOrders] = useState([]);
  const [shipmentOrders, setShipmentOrders] = useState([]);

  const loadOrders = () => {
    Orders.getOrders().then((data) => setOrders(data.data || []))
      .catch((err) => {});
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleClose = () => {
    setShowAddNewShipment(false);
    setSelectedShipment(null);
  };

  const submit = (values, actions) => {
    const shipmentOrdersDTO = [];
    shipmentOrders.forEach((order) => {
      const newOrder = {
        id: order.id,
        details: order.details
      };
      shipmentOrdersDTO.push(newOrder);
    });

    const data = {
      cost: values.cost,
      destinationAddress: values.destinationAddress,
      date: '2021-01-08T23:03:21Z',
      orders: shipmentOrdersDTO
    };

    const request = selectedShipment ? Shipments.editShipment(selectedShipment.id, data) : Shipments.createShipment(data);
    console.log(data);
    request
      .then(() => {
        setSelectedShipment(null);
        setShowAddNewShipment(false);
        loadShipments();
      })
      .catch((err) => setErrorCreatingShipment(err?.error || 'Unexpected Error'))
      .finally(() => {
        setIsSaving(false);
        actions.setSubmitting(false);
      });
  };

  return (
    <Modal
      title="Agregar envio"
      open
      onClose={handleClose}
      containerClass={classes.container}
    >
      <Box pl={5} pr={6.5} pb={4} pt={2} height="100%">
        <Formik
          initialValues={{
            destinationAddress: '',
            cost: '',
            date: ''
          }}
          validationSchema={Yup.object().shape({
            destinationAddress: Yup.string().required('Campo requerido'),
            cost: Yup.number().required('Campo requerido'),
            date: Yup.date().required('Campo requerido'),
          })}
          onSubmit={(values, actions) => submit(values, actions)}
        >
          {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    md={3}
                    xs={12}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">Fecha</InputLabel>
                    <TextField
                      fullWidth
                      error={Boolean(touched.date && errors.date)}
                      helperText={touched.date && errors.date}
                      name="date"
                      type="date"
                      format="dd/MM/yyyy"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.date}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    sx={{ marginTop: 2.8 }}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.destinationAddress && errors.destinationAddress)}
                      helperText={touched.destinationAddress && errors.destinationAddress}
                      label="Direccion de destino"
                      name="destinationAddress"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.destinationAddress}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={3}
                    xs={12}
                    sx={{ marginTop: 2.8 }}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.cost && errors.cost)}
                      helperText={touched.cost && errors.cost}
                      label="Costo"
                      name="cost"
                      type="number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.cost}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <Divider sx={{ marginY: 3 }} />
                <Typography
                  color="textPrimary"
                  variant="h4"
                >
                  Pedidos
                </Typography>
                <OrdersTable orders={orders} shipmentOrders={shipmentOrders} setShipmentOrders={setShipmentOrders} />
                <Box
                  sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  p: 2
                }}
                >
                  <Button
                    color="secondary"
                    variant="contained"
                    size="medium"
                    sx={{ marginRight: 2 }}
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    disabled={isSubmitting}
                    type="submit"
                    size="medium"
                    startIcon={isSaving && <CircularProgress size={12} color="secondary" />}
                  >
                    Guardar
                  </Button>
                </Box>
              </form>
          )}
        </Formik>
      </Box>
      {!!errorCreatingShipment && (
      <ErrorDialog
        title="Error al crear un envío"
        message={errorCreatingShipment}
        handleClose={() => setErrorCreatingShipment(null)}
      />
      )}
    </Modal>
);
};

export default AddShipment;
