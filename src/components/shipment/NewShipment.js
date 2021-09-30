import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader, Divider,
  Grid, InputLabel,
  TextField, Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrdersTable from './OrdersTable';

const orders = [
  {
    id: 1,
    construction: 'Edificio - Padre Genesio 458',
    orderDetails: [
      {
        product: 'Ladrillos',
        quantity: '20'
      },
      {
        product: 'Cemento',
        quantity: '40'
      }
    ]
  },
  {
    id: 2,
    construction: 'Vial - San Martin 2458',
    orderDetails: [
      {
        product: 'Cemento',
        quantity: '100'
      }
    ]
  }
];

const EditShipment = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/app/shipment', { replace: true });
  };

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
        <Card sx={{ padding: 3, margin: 3 }}>
          <CardHeader
            title="Agregar envio"
            titleTypographyProps={{ variant: 'h3' }}
          />
          <CardContent>
            <Formik
              initialValues={{
                destinationAddress: '',
                price: '',
                date: ''
              }}
              validationSchema={Yup.object().shape({
                destinationAddress: Yup.string().required('Campo requerido'),
                price: Yup.number().required('Campo requerido'),
                date: Yup.date().required('Campo requerido'),
              })}
              onSubmit={() => {
                navigate('/app/shipment', { replace: true });
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
                          error={Boolean(touched.price && errors.price)}
                          helperText={touched.price && errors.price}
                          label="Costo"
                          name="price"
                          type="number"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.price}
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
                    <OrdersTable orders={orders} />
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
      </Box>
    </>
  );
};

export default EditShipment;
