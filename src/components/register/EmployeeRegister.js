import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box, Button,
  TextField
} from '@material-ui/core';

const EmployeeRegister = ({ setEmployee, disabledButton }) => (
  <Formik
    initialValues={{
      email: '',
      name: '',
      password: '',
      passwordCheck: ''
    }}
    validationSchema={
      Yup.object().shape({
        email: Yup.string().email('Debe ingresar un email valido').max(255).required('Campo requerido'),
        name: Yup.string().max(255).required('Campo requerido'),
        password: Yup.string().max(255).required('Campo requerido'),
        passwordCheck: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden').required('Campo requerido')
      })
    }
    onSubmit={(values) => {
      setEmployee({
        mail: values.email,
        name: values.name,
        user: {
          user: values.email,
          password: values.password,
          userType: {
            id: 2
          }
        }
      });
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
              error={Boolean(touched.name && errors.name)}
              helperText={touched.name && errors.name}
              label="Nombre y Apellido"
              margin="normal"
              name="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
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
              disabled={isSubmitting || disabledButton}
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

export default EmployeeRegister;
