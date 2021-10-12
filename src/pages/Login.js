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
import { useDispatch } from 'react-redux';
import { setUser } from '../store/users/actions';
import { Clients, Employees } from '../services';

const USER_TYPE_CLIENT = 'client';
const USER_TYPE_EMPLOYEE = 'employee';

const Login = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = React.useState(USER_TYPE_EMPLOYEE);

  const dispatch = useDispatch();

  const handleRadioChange = (event) => {
    setUserType(event.target.value);
  };

  const loginUser = (email, password) => {
    if (userType === USER_TYPE_CLIENT) {
      Clients.getClients().then((response) => {
        const client = response.data?.find((c) => c.user.user === email);
        if (client) {
          dispatch(setUser(client));
          navigate('/app/account', { replace: true });
        }
      }).catch((error) => console.log(error));
    } else {
      Employees.getEmployees().then((response) => {
        const employee = response.data?.find((e) => e.user.user === email);
        if (employee) {
          dispatch(setUser(employee));
          navigate('/app/account', { replace: true });
        }
      }).catch((error) => console.log(error));
    }
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
            onSubmit={(values) => {
              loginUser(values.email, values.password);
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
              <form onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(values);
              }}
              >
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
                  <RadioGroup aria-label="userType" name="userType" value={userType} onChange={handleRadioChange} sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ margin: 'auto', width: 'fit-content' }}>
                      <FormControlLabel value={USER_TYPE_EMPLOYEE} control={<Radio />} label="Empleado" />
                      <FormControlLabel value={USER_TYPE_CLIENT} control={<Radio />} label="Cliente" sx={{ margin: 0 }} />
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
