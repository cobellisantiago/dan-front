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

const methods = [
  {
    id: 1,
    name: 'Efectivo'
  },
  {
    id: 2,
    name: 'Transferencia'
  },
  {
    id: 3,
    name: 'Cheque'
  }
];

const EmployeeNewPayment = () => {
  const navigate = useNavigate();
  const [methodName, setMethodName] = React.useState('Efectivo');

  const handleCancelClick = () => {
    navigate('/app/payment', { replace: true });
  };

  const handleSelectClick = (e) => {
    setMethodName(e.target.value);
  };

  return (
    <Card sx={{ padding: 3, margin: 3 }}>
      <CardHeader
        title="Agregar Pago"
        titleTypographyProps={{ variant: 'h3' }}
      />
      <CardContent>
        <Formik
          initialValues={{
            method: '',
            cbu: '',
            bank: '',
            checkNumber: ''
          }}
          validationSchema={Yup.object().shape({
            method: Yup.string(),
            cbu: Yup.number(),
            bank: Yup.string(),
            checkNumber: Yup.number(),
          })}
          onSubmit={() => {
            navigate('/app/payment', { replace: true });
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
                    <InputLabel id="demo-simple-select-outlined-label">Metodo de pago</InputLabel>
                    <Select
                      id="payment-method-select"
                      error={Boolean(touched.method && errors.method)}
                      helperText={touched.method && errors.method}
                      labelId="demo-simple-select-outlined-label"
                      onBlur={handleBlur}
                      onChange={handleSelectClick}
                      fullWidth
                      name="method"
                      value={methodName}
                    >
                      {
                        methods.map((m) => <MenuItem id={m.id} value={m.name}>{m.name}</MenuItem>)
                      }
                    </Select>
                  </Grid>
                  {
                    (methodName === 'Transferencia') ? (
                      <Grid
                        item
                        md={6}
                        xs={12}
                        sx={{ marginTop: 2.8 }}
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
                          sx={{ marginTop: 2.8 }}
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

export default EmployeeNewPayment;
