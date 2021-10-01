import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box, Typography, Link, Radio, RadioGroup,
  Container, FormControl, FormControlLabel, FormLabel
} from '@material-ui/core';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import RegisterForm from '../components/register/RegisterForm';
import {
  addingClient,
  addingClientError,
  addClient
} from '../store/clients/actions';
import { Clients } from '../services';

const Register = () => {
  // eslint-disable-next-line no-shadow
  const { client, addClientInProgress, errorAddingClient } = useSelector((state) => ({
    client: state.clients.client,
    addClientInProgress: state.clients.addingClient,
    errorAddingClient: state.clients.errorAddingClient
  }));
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [value, setValue] = React.useState('employee');
  const [clientValue, setClient] = useState({});

  useEffect(() => {
    if (clientValue) {
      addNewClient(clientValue);
    }
  }, [clientValue]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const addNewClient = () => {
    dispatch(addingClient());
    Clients.addClient(clientValue).then((data) => {
      dispatch(addClient(data.body));
      navigate('/app/account', { replace: true });
    }).catch((err) => {
      dispatch(addingClientError(err && err.data
      && err.data.message ? err.data.message : 'Error Adding Client'));
    });
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
            <RadioGroup
              aria-label="userType"
              name="userType"
              value={value}
              onChange={handleRadioChange}
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              <Box sx={{ margin: 'auto', width: 'fit-content' }}>
                <FormControlLabel value="employee" control={<Radio />} label="Empleado" />
                <FormControlLabel value="client" control={<Radio />} label="Cliente" sx={{ margin: 0 }} />
              </Box>
            </RadioGroup>
          </FormControl>
          <RegisterForm checkBoxValue={value} client={client} setClient={(c) => setClient(c)} enableButton={!addClientInProgress} />
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
