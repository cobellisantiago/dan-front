import React, { useState } from 'react';
import {
 Box, Button, Grid, Select, InputLabel, TextField, MenuItem, CircularProgress
} from '@material-ui/core';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/styles';
import ErrorDialog from '../../components/ErrorDialog';
import Modal from '../../components/Modal';
import { Constructions } from '../../services';

const useStyles = makeStyles({
  container: {
    maxHeight: '600px',
    maxWidth: '700px'
  }
});

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

const AddConstruction = ({
loadConstructions, setShowAddNewConstruction, selectedConstruction, setSelectedConstruction
}) => {
  const classes = useStyles();
  const [isSaving, setIsSaving] = useState(false);
  const [errorCreatingConstruction, setErrorCreatingConstruction] = useState(null);

  const handleClose = () => {
    setShowAddNewConstruction(false);
    setSelectedConstruction(null);
  };

  const submit = (values, actions) => {
    // TODO clientId must be the client logged in
    // for now it is hardcoded with clientId: 1
    const data = {
      constructionTypeId: values.constructionTypeId,
      address: values.address,
      description: values.description,
      latitude: values.latitude,
      longitude: values.longitude,
      area: values.area,
      clientId: 1
    };

    const request = selectedConstruction
      ? Constructions.editConstruction(selectedConstruction.id, data)
        : Constructions.createConstruction(data);

    request
      .then(() => {
        setSelectedConstruction(null);
        setShowAddNewConstruction(false);
        loadConstructions();
      })
      .catch((err) => setErrorCreatingConstruction(err?.error || 'Unexpected Error'))
      .finally(() => {
        setIsSaving(false);
        actions.setSubmitting(false);
      });
  };

  return (
    <Modal
      title={`${selectedConstruction?.id ? 'EDITAR' : 'CREAR'} CONSTRUCCION`}
      open
      onClose={handleClose}
      containerClass={classes.container}
    >
      <Box pl={5} pr={6.5} pb={4} pt={2} height="100%">
        <Formik
          initialValues={{
            constructionTypeId: selectedConstruction?.type?.id || '',
            address: selectedConstruction?.address || '',
            description: selectedConstruction?.description || '',
            latitude: selectedConstruction?.latitude || '',
            longitude: selectedConstruction?.longitude || '',
            area: selectedConstruction?.area || ''
          }}
          validationSchema={Yup.object().shape({
            constructionTypeId: Yup.string().required('Campo requerido'),
            address: Yup.string().required('Campo requerido'),
            description: Yup.string().required('Campo requerido'),
            latitude: Yup.number().required('Campo requerido'),
            longitude: Yup.number().required('Campo requerido'),
            area: Yup.number().required('Campo requerido'),
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
                  md={6}
                  xs={12}
                >
                  <InputLabel id="demo-simple-select-outlined-label">Tipo de construccion</InputLabel>
                  <Select
                    error={Boolean(touched.constructionTypeId && errors.constructionTypeId)}
                    helperText={touched.constructionTypeId && errors.constructionTypeId}
                    labelId="demo-simple-select-outlined-label"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    fullWidth
                    name="constructionTypeId"
                    value={values.constructionTypeId}
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
                  sx={{ marginTop: 2.8 }}
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

      {!!errorCreatingConstruction && (
        <ErrorDialog
          title="Error al crear una Obra"
          message={errorCreatingConstruction}
          handleClose={() => setErrorCreatingConstruction(null)}
        />
      )}
    </Modal>
  );
};

export default AddConstruction;
