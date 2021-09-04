import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';

const EmployeeNewMaterial = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/app/material', { replace: true });
  };

  return (
    <Card sx={{ padding: 3, margin: 3 }}>
      <CardHeader
        title="Agregar Material"
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardContent>
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
          onSubmit={() => {
            navigate('/app/material', { replace: true });
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
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.name && errors.name)}
                      helperText={touched.name && errors.name}
                      label="Nombre"
                      name="name"
                      required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.description && errors.description)}
                      helperText={touched.description && errors.description}
                      label="Descripcion"
                      name="description"
                      required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      error={Boolean(touched.price && errors.price)}
                      helperText={touched.price && errors.price}
                      label="Precio"
                      name="price"
                      required
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
                      required
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
                      required
                      onChange={handleChange}
                      value={values.minimumStock}
                      variant="outlined"
                      type="number"
                    />
                  </Grid>
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

export default EmployeeNewMaterial;
