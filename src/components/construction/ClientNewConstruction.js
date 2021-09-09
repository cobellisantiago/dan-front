import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid, InputLabel, MenuItem, Select, TextField
} from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';

const ClientNewConstruction = () => {
  const navigate = useNavigate();

  const constructionTypes = [
    {
      id: 1,
      description: 'Reforma'
    },
    {
      id: 2,
      description: 'Casa'
    },
    {
      id: 3,
      description: 'Edificio'
    },
    {
      id: 4,
      description: 'Vial'
    }
  ];

  const handleCancelClick = () => {
    navigate('/app/construction', { replace: true });
  };

  return (
    <Card sx={{ padding: 3, margin: 3 }}>
      <CardHeader
        title="Agregar Construccion"
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardContent>
        <Formik
          initialValues={{
            constructionType: '',
            address: '',
            description: '',
            latitude: '',
            longitude: '',
            area: ''
          }}
          validationSchema={Yup.object().shape({
            constructionType: Yup.string().required('Campo requerido'),
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
                  <InputLabel id="demo-simple-select-outlined-label">Tipo de construccion</InputLabel>
                  <Select
                    error={Boolean(touched.constructionType && errors.constructionType)}
                    helperText={touched.constructionType && errors.constructionType}
                    labelId="demo-simple-select-outlined-label"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    name="constructionType"
                    value={values.constructionType}
                  >
                    {
                      constructionTypes.map((ct) => <MenuItem value={ct.id}>{ct.description}</MenuItem>)
                    }
                  </Select>
                </Grid>
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
  );
};

export default ClientNewConstruction;
