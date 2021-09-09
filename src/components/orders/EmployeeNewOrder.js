import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader, Divider,
  Grid, InputLabel, MenuItem, Select, TextField, Typography
} from '@material-ui/core';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import OrderDetailsTable from './OrderDetailsTable';

const clients = [
  {
    id: 1,
    name: 'Ruben'
  },
  {
    id: 2,
    name: 'Carlos'
  },
  {
    id: 3,
    name: 'Oscar'
  }
];

const constructions = [
  {
    id: 1,
    constructionType: 'Reforma',
    address: 'San Jeronimo 2043'
  },
  {
    id: 2,
    constructionType: 'Casa',
    address: 'Tucuman 2354'
  },
  {
    id: 3,
    constructionType: 'Edificio',
    address: 'San Martin 432'
  },
  {
    id: 4,
    constructionType: 'Vial',
    address: 'Salta 3442'
  }
];

const products = [
  {
    id: 1,
    name: 'Ladrillos'
  },
  {
    id: 2,
    name: 'Cemento'
  },
  {
    id: 3,
    name: 'Arena'
  }
];

const EmployeeNewOrder = () => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState([]);
  const [productName, setProductName] = useState();

  const handleCancelClick = () => {
    navigate('/app/order', { replace: true });
  };

  const handleSelectClick = (e) => {
    setProductName(e.target.value);
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
    <Card sx={{ padding: 3, margin: 3 }}>
      <CardHeader
        title="Agregar Pedido"
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardContent>
        <Formik
          initialValues={{
            client: '',
            construction: ''
          }}
          validationSchema={Yup.object().shape({
            client: Yup.string().required('Campo requerido'),
            construction: Yup.string().required('Campo requerido')
          })}
          onSubmit={() => {
            navigate('/app/order', { replace: true });
          }}
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
                      {
                        clients.map((c) => <MenuItem value={c.id}>{c.name}</MenuItem>)
                      }
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
                            {`
                            ${c.constructionType.toUpperCase()}
                            -
                            ${c.address}
                            `}
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
                      {
                        products.map((p) => <MenuItem id={p.id} value={p.name}>{p.name}</MenuItem>)
                      }
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
                    onClick={handleCancelClick}
                  >
                    Cancelar
                  </Button>
                  <Button
                    color="primary"
                    variant="contained"
                    disabled={isSubmitting}
                    type="submit"
                    size="medium"
                  >
                    Guardar
                  </Button>
                </Box>
              </form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default EmployeeNewOrder;
