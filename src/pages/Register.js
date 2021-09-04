import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box, Typography, Link, Radio, RadioGroup,
  Container, FormControl, FormControlLabel, FormLabel
} from '@material-ui/core';
import '../App.css';
import RegisterForm from '../components/register/RegisterForm';

const Register = () => {
  const [value, setValue] = React.useState('employee');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Registro</title>
      </Helmet>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          margin: 4
        }}
      >
        <Container maxWidth="md">
          <Box>
            <Typography
              color="textPrimary"
              variant="h2"
            >
              Crear cuenta
            </Typography>
          </Box>
          <FormControl component="fieldset" sx={{ margin: 'auto', width: 'fit-content', display: 'block' }}>
            <FormLabel component="legend" sx={{ margin: 'auto' }}>¿Qué tipo de usuario eres?</FormLabel>
            <RadioGroup aria-label="userType" name="userType" value={value} onChange={handleRadioChange} sx={{ display: 'flex', flexDirection: 'row' }}>
              <Box sx={{ margin: 'auto', width: 'fit-content' }}>
                <FormControlLabel value="employee" control={<Radio />} label="Empleado" />
                <FormControlLabel value="client" control={<Radio />} label="Cliente" sx={{ margin: 0 }} />
              </Box>
            </RadioGroup>
          </FormControl>
          <RegisterForm checkBoxValue={value} />
          <Typography
            color="textSecondary"
            variant="body1"
            sx={{ textAlign: 'center' }}
          >
            ¿Tienes una cuenta?
            {' '}
            <Link
              component={RouterLink}
              to="/login"
              variant="h5"
              sx={{ textDecoration: 'none', fontWeight: 'bold' }}
            >
              Ingresar
            </Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Register;
