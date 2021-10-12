import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box, Typography, Link, Radio, RadioGroup,
  Container, FormControl, FormControlLabel, FormLabel, Button
} from '@material-ui/core';
import '../App.css';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  addingClientError,
  addClient
} from '../store/clients/actions';
import { Employees, Clients } from '../services';
import Modal from '../components/Modal';
import RegisterForm from '../components/register/RegisterForm';
import ErrorDialog from '../components/ErrorDialog';

const useStyles = makeStyles({
  container: {
    maxHeight: '250px',
    maxWidth: '600px',
    position: 'absolute',
    left: '450px'
  }
});

const Register = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const classes = useStyles();
  const [userType, setUserType] = React.useState('employee');
  const [client, setClient] = useState(null);
  const [employee, setEmployee] = useState(null);
  const [registerInProgress, setRegisterInProgress] = useState(false);
  const [showClientRegistered, setShowClientRegistered] = useState(false);
  const [showEmployeeRegistered, setShowEmployeeRegistered] = useState(false);
  const [errorRegistering, setErrorRegistering] = useState(null);

  useEffect(() => {
    if (client) {
      addNewClient(client);
    }
  }, [client]);

  useEffect(() => {
    if (employee) {
      addNewEmployee(employee);
    }
  }, [employee]);

  const handleRadioChange = (event) => {
    setUserType(event.target.value);
  };

  const handleLogin = () => {
    setShowEmployeeRegistered(false);
    setShowClientRegistered(false);
    navigate('/login', { replace: true });
  };

  const addNewClient = () => {
    setRegisterInProgress(true);
      Clients.addClient(client).then((data) => {
        dispatch(addClient(data.body));
        setShowClientRegistered(true);
        setRegisterInProgress(false);
        setErrorRegistering(null);
      }).catch((err) => {
        setRegisterInProgress(false);
        setErrorRegistering(err && err.data
        && err.data.message ? err.data.message : 'Error Adding Client');
      });
  };

  const addNewEmployee = () => {
    setRegisterInProgress(true);
    Employees.addEmployee(employee).then((data) => {
      setShowEmployeeRegistered(true);
      setRegisterInProgress(false);
      setErrorRegistering(null);
    }).catch((err) => {
      setRegisterInProgress(false);
      setErrorRegistering(err && err.data
      && err.data.message ? err.data.message : 'Error Adding Client');
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
              value={userType}
              onChange={handleRadioChange}
              sx={{ display: 'flex', flexDirection: 'row' }}
            >
              <Box sx={{ margin: 'auto', width: 'fit-content' }}>
                <FormControlLabel value="employee" control={<Radio />} label="Empleado" />
                <FormControlLabel value="client" control={<Radio />} label="Cliente" sx={{ margin: 0 }} />
              </Box>
            </RadioGroup>
          </FormControl>
          <RegisterForm
            checkBoxValue={userType}
            setClient={(c) => setClient(c)}
            setEmployee={(e) => setEmployee(e)}
            disabledButton={registerInProgress}
          />
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
        {(showClientRegistered || showEmployeeRegistered) && (
          <Modal
            title={showClientRegistered ? 'Cliente registrado exitosamente' : 'Empleado registrado exitosamente'}
            open
            containerClass={classes.container}
          >
            <Box>
              <Typography
                color="textSecondary"
                variant="body1"
                sx={{ textAlign: 'center', marginBottom: 3 }}
              >
                Ya puedes ingresar con tu usuario.
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
        {!!errorRegistering && (
          <ErrorDialog
            title={`Error al registrando un ${userType}`}
            message={errorRegistering}
            handleClose={() => {
              setErrorRegistering(null);
              setEmployee(null);
              setClient(null);
              setRegisterInProgress(false);
            }}
          />
        )}
      </Box>
    </>
  );
};

export default Register;
