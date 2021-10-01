import React, { useState } from 'react';
import {
 Box, TextField, Grid, Button, CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Formik } from 'formik';
import Modal from 'src/components/Modal';
import * as Yup from 'yup';
import { Products } from '../../services';

const useStyles = makeStyles({
  container: {
    maxHeight: '600px',
    maxWidth: '700px'
  }
});

const AddMaterial = ({ loadProducts, setShowAddNewProduct }) => {
  const classes = useStyles();
  const [isSaving, setIsSaving] = useState(false);

  const handleClose = () => {
    setShowAddNewProduct(false);
  };

  const submit = (values) => {
    const product = {
      name: values.name,
      description: values.description,
      price: values.price,
      actualStock: values.actualStock,
      minimumStock: values.minimumStock
    };

    Products.createProduct(product)
      .then(() => loadProducts())
      .catch((err) => {})
      .finally(() => {
        setIsSaving(false);
        handleClose();
      });
  };

  return (
    <Modal
      title="Crear Material"
      open
      onClose={handleClose}
      containerClass={classes.container}
    >
      <Box pl={5} pr={6.5} pb={4} height="100%">
        <Formik
          initialValues={{
            name: '',
            description: '',
            price: '',
            actualStock: '',
            minimumStock: ''
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Campo requerido'),
            description: Yup.string().required('Campo requerido'),
            price: Yup.number().required('Campo requerido'),
            actualStock: Yup.number().required('Campo requerido'),
            minimumStock: Yup.number().required('Campo requerido'),
          })}
          onSubmit={(values) => submit(values)}
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
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                >
                  <TextField
                    fullWidth
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}
                    label="Nombre"
                    name="name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <TextField
                    fullWidth
                    error={Boolean(touched.description && errors.description)}
                    helperText={touched.description && errors.description}
                    label="Descripcion"
                    name="description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.description}
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                >
                  <TextField
                    fullWidth
                    error={Boolean(touched.price && errors.price)}
                    helperText={touched.price && errors.price}
                    label="Precio"
                    name="price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.price}
                    variant="outlined"
                    type="number"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    error={Boolean(touched.actualStock && errors.actualStock)}
                    helperText={touched.actualStock && errors.actualStock}
                    label="Stock actual"
                    name="actualStock"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.actualStock}
                    variant="outlined"
                    type="number"
                  />
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                  <TextField
                    fullWidth
                    error={Boolean(touched.minimumStock && errors.minimumStock)}
                    helperText={touched.minimumStock && errors.minimumStock}
                    label="Stock minimo"
                    name="minimumStock"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.minimumStock}
                    variant="outlined"
                    type="number"
                  />
                </Grid>
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
    </Modal>

  );
};

export default AddMaterial;
