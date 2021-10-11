import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box, Typography, Link, Radio, RadioGroup,
  Container, FormControl, FormControlLabel, FormLabel, Button
} from '@material-ui/core';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  addingClient,
  addingClientError,
  addClient
} from '../store/clients/actions';
import { Clients } from '../services';
import Modal from '../components/Modal';
import RegisterForm from '../components/register/RegisterForm';

const useStyles = makeStyles({
  container: {
    maxHeight: '250px',
    maxWidth: '600px',
    position: 'absolute',
    left: '450px'
  }
});

const Register = () => {
  // eslint-disable-next-line no-shadow
  const { client, addClientInProgress, errorAddingClient } = useSelector((state) => ({
    client: state.clients.client,
    addClientInProgress: state.clients.addingClient,
    errorAddingClient: state.clients.errorAddingClient
  }));
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const classes = useStyles();
  const [value, setValue] = React.useState('employee');
  const [clientValue, setClient] = useState({});
  const [showClientRegistered, setShowClientRegistered] = useState(false);

  useEffect(() => {
    if (clientValue) {
      addNewClient(clientValue);
    }
  }, [clientValue]);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleLogin = () => {
    navigate('/login', { replace: true });
  };

  const addNewClient = () => {
    dispatch(addingClient());
    Clients.addClient(clientValue).then((data) => {
      dispatch(addClient(data.body));
      setShowClientRegistered(true);
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
        {(showClientRegistered) && (
          <Modal
            title="Cliente creado con exito"
            open
            containerClass={classes.container}
          >
            <Box>
              <Typography
                color="textSecondary"
                variant="body1"
                sx={{ textAlign: 'center', marginBottom: 3 }}
              >
                Debe iniciar sesion con el nuevo usuario para ingresar al sistema.
              </Typography>
              <Button
                sx={{
                  maxWidth: 300,
                  display: 'block',
                  margin: 'auto'
                }}
                color="primary"
                type="submit"
                variant="contained"
                onClick={handleLogin}
              >
                Iniciar sesion
              </Button>
            </Box>
          </Modal>
        )}
      </Box>
    </>
  );
};

export default Register;
