import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import OrdersTable from '../../components/shipment/OrdersTable';
import ErrorDialog from '../../components/ErrorDialog';
import Modal from '../../components/Modal';

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
  },
  {
    id: 3,
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
    id: 4,
    construction: 'Vial - San Martin 2458',
    orderDetails: [
      {
        product: 'Cemento',
        quantity: '100'
      }
    ]
  },
  {
    id: 5,
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
    id: 6,
    construction: 'Vial - San Martin 2458',
    orderDetails: [
      {
        product: 'Cemento',
        quantity: '100'
      }
    ]
  }
];

const useStyles = makeStyles({
  container: {
    maxHeight: '650px',
    maxWidth: '1000px'
  }
});

const AddShipment = ({
 loadShipments, selectedShipment, setSelectedShipment, setShowAddNewShipment
}) => {
  const classes = useStyles();
  const [isSaving, setIsSaving] = useState(false);
  const [errorCreatingShipment, setErrorCreatingShipment] = useState(null);

  const handleClose = () => {
    setShowAddNewShipment(false);
    setSelectedShipment(null);
  };

  const submit = (values, actions) => {
    // TODO clientId must be the client logged in
    // for now it is hardcoded with clientId: 1
    // const data = {
    //   constructionTypeId: values.constructionTypeId,
    //   address: values.address,
    //   description: values.description,
    //   latitude: values.latitude,
    //   longitude: values.longitude,
    //   area: values.area,
    //   clientId: 1
    // };
    //
    // const request = selectedConstruction
    //   ? Constructions.editConstruction(selectedConstruction.id, data)
    //   : Constructions.createConstruction(data);
    //
    // request
    //   .then(() => {
    //     setSelectedConstruction(null);
    //     setShowAddNewConstruction(false);
    //     loadConstructions();
    //   })
    //   .catch((err) => setErrorCreatingConstruction(err?.error || 'Unexpected Error'))
    //   .finally(() => {
    //     setIsSaving(false);
    //     actions.setSubmitting(false);
    //   });
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
            price: '',
            date: ''
          }}
          validationSchema={Yup.object().shape({
            destinationAddress: Yup.string().required('Campo requerido'),
            price: Yup.number().required('Campo requerido'),
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
