import React, { useState, useEffect } from 'react';
import {
  Box, TextField, Grid, Button, InputLabel, Select, MenuItem, Divider, Typography, CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Modal from 'src/components/Modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ErrorDialog from 'src/components/ErrorDialog';
import OrderDetailsTable from 'src/components/order/OrderDetailsTable';
import {
 Orders, Clients, Products, Constructions
} from '../../services';

const useStyles = makeStyles({
  container: {
    maxHeight: '600px',
    maxWidth: '700px'
  }
});

const AddOrder = ({
 setShowAddNewOrder, setSelectedOrder, selectedOrder, loadOrders
}) => {
  const classes = useStyles();
  const [isSaving, setIsSaving] = useState(false);
  const [errorCreatingOrder, setErrorCreatingOrder] = useState(null);

  const [productName, setProductName] = useState();
  const [orderDetails, setOrderDetails] = useState([]);

  const [products, setProducts] = useState([]);
  const [constructions, setConstructions] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    Products.getProducts().then((data) => setProducts(data.data || []))
    .catch((err) => {});

    Constructions.getConstructions().then((data) => setConstructions(data.data || []))
    .catch((err) => {});

    // TODO getClients
  }, []);

  const handleSelectClick = (e) => {
    setProductName(e.target.value);
  };

  const handleClose = () => {
    setShowAddNewOrder(false);
    setSelectedOrder(null);
  };

  const submit = (values, actions) => {
    // TODO formar la data a enviar
    const data = {};

    const request = selectedOrder ? Orders.editOrder(selectedOrder.id, data) : Orders.createOrder(data);

    request
      .then(() => {
        setSelectedOrder(null);
        setShowAddNewOrder(false);
        loadOrders();
      })
      .catch((err) => setErrorCreatingOrder(err?.error || 'Unexpected Error'))
      .finally(() => {
        setIsSaving(false);
        actions.setSubmitting(false);
      });
  };

  const handleAddClick = () => {
    const product = productName;
    const quantity = document.getElementById('product-quantity').value;
    const price = document.getElementById('product-price').value;
    if (product !== undefined && quantity !== '' && price !== '') {
      const newOrderDetail = { // Crear producto en bdd
        id: orderDetails.length,
        product,
        quantity,
        price
      };
      setOrderDetails([
        ...orderDetails, newOrderDetail
      ]);
    }
  };

  return (
    <Modal
      title="Crear Pedido"
      open
      onClose={handleClose}
      containerClass={classes.container}
    >
      <Box pl={5} pr={6.5} pb={4} pt={2} height="100%">
        <Formik
          initialValues={{
            client: '',
            construction: ''
          }}
          validationSchema={Yup.object().shape({
            client: Yup.string().required('Campo requerido'),
            construction: Yup.string().required('Campo requerido')
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
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">Cliente asociado</InputLabel>
                  <Select
                    error={Boolean(touched.client && errors.client)}
                    helperText={touched.client && errors.client}
                    labelId="demo-simple-select-outlined-label"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    name="client"
                    value={values.client}
                  >
                    {clients.map((c) => <MenuItem value={c.id}>{c.name}</MenuItem>)}
                  </Select>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">Construccion asociada</InputLabel>
                  <Select
                    error={Boolean(touched.construction && errors.construction)}
                    helperText={touched.construction && errors.construction}
                    labelId="demo-simple-select-outlined-label"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    name="construction"
                    value={values.construction}
                  >
                    {
                      constructions.map((c) => (
                        <MenuItem value={c.id}>
                          {c.address}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </Grid>
                <Grid
                  item
                  md={4}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">Fecha de envio</InputLabel>
                  <TextField
                    fullWidth
                    name="shippingDate"
                    type="date"
                    format="dd/MM/yyyy"
                    onChange={handleChange}
                    value={values.shippingDate}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 3 }} />
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Detalles del pedido
              </Typography>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  md={4}
                  xs={12}
                  sx={{ marginTop: 2 }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">Producto</InputLabel>
                  <Select
                    id="product-select"
                    labelId="demo-simple-select-outlined-label"
                    onChange={handleSelectClick}
                    fullWidth
                    name="product"
                    value={values.product}
                  >
                    {products.map((p) => <MenuItem id={p.id} value={p.name}>{p.name}</MenuItem>)}
                  </Select>
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={12}
                  sx={{ marginTop: 4.8 }}
                >
                  <TextField
                    id="product-quantity"
                    fullWidth
                    label="Cantidad"
                    name="quantity"
                    type="number"
                    onChange={handleChange}
                    value={values.quantity}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={3}
                  xs={12}
                  sx={{ marginTop: 4.8 }}
                >
                  <TextField
                    id="product-price"
                    fullWidth
                    label="Precio"
                    name="price"
                    type="number"
                    onChange={handleChange}
                    value={values.price}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  md={2}
                  xs={12}
                  sx={{ marginTop: 4.8, alignSelf: 'center' }}
                >
                  <Button
                    color="primary"
                    variant="contained"
                    size="medium"
                    sx={{ marginRight: 2 }}
                    onClick={handleAddClick}
                  >
                    Agregar
                  </Button>
                </Grid>
                <OrderDetailsTable orderDetails={orderDetails} />
              </Grid>
              <Box flexGrow={1} />
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
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

      {!!errorCreatingOrder && (
        <ErrorDialog
          title="Error al crear la Orden"
          message={errorCreatingOrder}
          handleClose={() => setErrorCreatingOrder(null)}
        />
      )}
    </Modal>
  );
};

export default AddOrder;
