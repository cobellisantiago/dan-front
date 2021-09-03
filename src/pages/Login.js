import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel
} from '@material-ui/core';

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState('employee');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Ingresar</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Debe ingresar un email valido').max(255).required('Campo requerido'),
              password: Yup.string().max(255).required('Campo requerido')
            })}
            onSubmit={() => {
              navigate('/app/account', { replace: true });
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
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Iniciar sesión
                  </Typography>
                </Box>
                <FormControl component="fieldset" sx={{ margin: 'auto', width: 'fit-content', display: 'block' }}>
                  <FormLabel component="legend" sx={{ margin: 'auto' }}>¿Con qué tipo de usuario desea ingresar?</FormLabel>
                  <RadioGroup aria-label="userType" name="userType" value={value} onChange={handleRadioChange} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ margin: 'auto', width: 'fit-content' }}>
                      <FormControlLabel value="employee" control={<Radio />} label="Empleado" />
                      <FormControlLabel value="client" control={<Radio />} label="Cliente" sx={{ margin: 0 }} />
                    </Box>
                  </RadioGroup>
                </FormControl>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Contraseña"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Ingresar
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                  sx={{ textAlign: 'center' }}
                >
                  ¿No tienes una cuenta?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h5"
                    sx={{ textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    Registrate
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;
