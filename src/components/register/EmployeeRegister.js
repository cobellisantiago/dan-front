import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box, Button,
  TextField
} from '@material-ui/core';

const EmployeeRegister = () => {
  const navigate = useNavigate();

  // const samePassword = () => {
  //   const password = document.getElementById('passwordField');
  //   const passwordCheck = document.getElementById('passwordCheckField');
  //   if (password.value !== passwordCheck.value) {
  //     password.setCustomValidity('Las contrasenias no coinciden');
  //   } else {
  //     passwordCheck.setCustomValidity('');
  //   }
  // };

  return (
    <Formik
      initialValues={{
        dni: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        passwordCheck: ''
      }}
      validationSchema={
        Yup.object().shape({
          dni: Yup.number().max(99999999).required('Campo requerido'),
          email: Yup.string().email('Debe ingresar un email valido').max(255).required('Campo requerido'),
          firstName: Yup.string().max(255).required('Campo requerido'),
          lastName: Yup.string().max(255).required('Campo requerido'),
          password: Yup.string().max(255).required('Campo requerido'),
          passwordCheck: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden').required('Campo requerido')
        })
      }
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
            <Box id="employeeRegistry">
              <TextField
                className="field"
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                label="Nombre"
                margin="normal"
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                variant="outlined"
              />
              <TextField
                className="field"
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                label="Apellido"
                margin="normal"
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                variant="outlined"
              />
              <TextField
                className="field"
                error={Boolean(touched.dni && errors.dni)}
                helperText={touched.dni && errors.dni}
                label="DNI"
                margin="normal"
                name="dni"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.dni}
                variant="outlined"
              />
              <TextField
                className="field"
                error={Boolean(touched.email && errors.email)}
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
                id="passwordField"
                className="field"
                error={Boolean(touched.password && errors.password)}
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
              <TextField
                id="passwordCheckField"
                className="field"
                error={Boolean(touched.passwordCheck && errors.passwordCheck)}
                helperText={touched.passwordCheck && errors.passwordCheck}
                label="Repetir Contraseña"
                margin="normal"
                name="passwordCheck"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.passwordCheck}
                variant="outlined"
              />
            </Box>
            <Box sx={{ py: 2 }}>
              <Button
                sx={{ maxWidth: 500, display: 'block', margin: 'auto' }}
                color="primary"
                disabled={isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Registrarme
              </Button>
            </Box>
          </form>
      )}
    </Formik>
  );
};

export default EmployeeRegister;
