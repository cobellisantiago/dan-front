import React, { useState } from 'react';
import {
 Box, Button, TextField, Grid, Select, InputLabel, CircularProgress, MenuItem
} from '@material-ui/core';
import ErrorDialog from 'src/components/ErrorDialog';
import { Formik } from 'formik';
import Modal from 'src/components/Modal';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';
import { Payments } from '../../services';

const useStyles = makeStyles({
  container: {
    maxHeight: '600px',
    maxWidth: '700px'
  }
});

const methods = [
  {
    id: 1,
    name: 'Efectivo',
    type: 'cash'
  },
  {
    id: 2,
    name: 'Transferencia',
    type: 'bankTransfer'
  },
  {
    id: 3,
    name: 'Cheque',
    type: 'check'
  }
];

const AddPayment = ({ setShowAddNewPayment, loadPayments }) => {
  const classes = useStyles();
  const [isSaving, setIsSaving] = useState(false);
  const [errorCreatingPayment, setErrorCreatingPayment] = useState(null);
  const [methodName, setMethodName] = useState('Efectivo');

  const handleClose = () => {
    setShowAddNewPayment(false);
  };

  const submit = (values, actions) => {
    console.log(values);
    const data = {
      bank: values.bank || null,
      checkNumber: values.checkNumber || null,
      originCBU: values.originCBU || null,
      destinationCBU: values.destinationCBU || null,
      transferCode: values.transferCode || null,
      receiptNumber: values.receiptNumber || null,
      paymentDate: new Date(),
      paymentMethod: {
        type: methods.find((method) => method.name === methodName)?.type,
        observation: values.observation
      },
      clientId: '1'
    };

    Payments.createPayment(data).then(() => {
      setShowAddNewPayment(false);
      loadPayments();
    })
    .catch((err) => setErrorCreatingPayment(err?.data?.message || err?.data || 'Unexpected Error'))
    .finally(() => {
      setIsSaving(false);
      actions.setSubmitting(false);
    });
  };

  return (
    <Modal
      title="Crear Pago"
      open
      onClose={handleClose}
      containerClass={classes.container}
    >
      <Box pl={5} pr={6.5} pb={4} pt={2} height="100%">
        <Formik
          initialValues={{
            method: '',
            cbu: '',
            bank: '',
            checkNumber: '',
            observation: ''
          }}
          validationSchema={Yup.object().shape({
            method: Yup.string(),
            cbu: Yup.number(),
            bank: Yup.string(),
            checkNumber: Yup.number(),
            observation: Yup.string(),
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
                  <InputLabel id="demo-simple-select-outlined-label">Metodo de pago</InputLabel>
                  <Select
                    id="payment-method-select"
                    error={Boolean(touched.method && errors.method)}
                    helperText={touched.method && errors.method}
                    labelId="demo-simple-select-outlined-label"
                    onBlur={handleBlur}
                    onChange={(e) => setMethodName(e.target.value)}
                    fullWidth
                    name="method"
                    value={methodName}
                  >
                    {methods.map((m) => <MenuItem id={m.id} value={m.name}>{m.name}</MenuItem>)}
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
                    error={Boolean(touched.observation && errors.observation)}
                    helperText={touched.observation && errors.observation}
                    label="Observacion"
                    name="observation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.observation}
                    variant="outlined"
                  />
                </Grid>
                {
                  (methodName === 'Transferencia') ? (
                    <Grid
                      item
                      md={6}
                      xs={12}
                    >
                      <TextField
                        fullWidth
                        error={Boolean(touched.cbu && errors.cbu)}
                        helperText={touched.cbu && errors.cbu}
                        label="CBU"
                        name="cbu"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.cbu}
                        variant="outlined"
                        type="number"
                      />
                    </Grid>
                  ) : <></>
                }
                {
                  (methodName === 'Cheque') ? (
                    <>
                      <Grid
                        item
                        md={6}
                        xs={12}
                      >
                        <TextField
                          fullWidth
                          label="Banco"
                          name="bank"
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
                          error={Boolean(touched.checkNumber && errors.checkNumber)}
                          helperText={touched.checkNumber && errors.checkNumber}
                          label="Numero de cheque"
                          name="checkNumber"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.checkNumber}
                          variant="outlined"
                          type="number"
                        />
                      </Grid>
                    </>
                  ) : <></>
                }
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

      {!!errorCreatingPayment && (
        <ErrorDialog
          title="Error al crear el Pago"
          message={errorCreatingPayment}
          handleClose={() => setErrorCreatingPayment(null)}
        />
      )}
    </Modal>
    );
};

export default AddPayment;
