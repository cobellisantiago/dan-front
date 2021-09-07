import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@material-ui/core';
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditConstruction = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/app/construction', { replace: true });
  };

  const client = {
    client: 'Pintureria SRL',
    constructionType: 'Edificio',
    address: 'Padre vittori 234',
    description: 'Sucursal de pintureria',
    latitude: '35.4489488',
    longitude: '-78.4968478',
    area: '200'
  };

  return (
    <>
      <Helmet>
        <title>Obras</title>
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
            title="Editar Construccion"
            titleTypographyProps={{ variant: 'h3' }}
          />
          <CardContent>
            <Formik
              initialValues={{
                address: client.address,
                description: client.description,
                latitude: client.latitude,
                longitude: client.longitude,
                area: client.area
              }}
              validationSchema={Yup.object().shape({
                address: Yup.string().required('Campo requerido'),
                description: Yup.string().required('Campo requerido'),
                latitude: Yup.number().required('Campo requerido'),
                longitude: Yup.number().required('Campo requerido'),
                area: Yup.number().required('Campo requerido'),
              })}
              onSubmit={() => {
                navigate('/app/construction', { replace: true });
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
                          error={Boolean(touched.address && errors.address)}
                          helperText={touched.address && errors.address}
                          label="Direccion"
                          name="address"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.address}
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
                          error={Boolean(touched.latitude && errors.latitude)}
                          helperText={touched.latitude && errors.latitude}
                          label="Latitud"
                          name="latitude"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.latitude}
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
                          error={Boolean(touched.longitude && errors.longitude)}
                          helperText={touched.longitude && errors.longitude}
                          label="Longitud"
                          name="longitude"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.longitude}
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
                          error={Boolean(touched.area && errors.area)}
                          helperText={touched.area && errors.area}
                          label="Area"
                          name="area"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.area}
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
      </Box>
    </>
  );
};

export default EditConstruction;
