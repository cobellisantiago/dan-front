import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box, Button, Checkbox,
  TextField, Typography
} from '@material-ui/core';

const ClientRegister = ({ client, setClient, enabledButton }) => {
  // const samePassword = () => {
  //   const password = document.getElementById('passwordField');
  //   const passwordCheck = document.getElementById('passwordCheckField');
  //   if (password.value !== passwordCheck.value) {
  //     password.setCustomValidity('Las contrasenias no coinciden');
  //   } else {
  //     passwordCheck.setCustomValidity('');
  //   }
  // };
  console.log('registro clientes');
  return (
    <Formik
      initialValues={{
        cuil: '',
        businessName: '',
        user: '',
        email: '',
        password: '',
        passwordCheck: '',
        currentBalance: '',
        maxCurrentAccount: '',
        onlineEnabled: false
      }}
      validationSchema={
        Yup.object().shape({
          cuil: Yup.number().max(99999999999).required('Campo requerido'),
          businessName: Yup.string().max(255).required('Campo requerido'),
          user: Yup.string().max(255).required('Campo requerido'),
          email: Yup.string().email('Debe ingresar un email valido').max(255).required('Campo requerido'),
          password: Yup.string().max(255).required('Campo requerido'),
          passwordCheck: Yup.string().oneOf([Yup.ref('password')], 'Las contraseñas no coinciden').required('Campo requerido'),
          currentBalance: Yup.string().max(255).required('Campo requerido'),
          maxCurrentAccount: Yup.string().max(255).required('Campo requerido')
        })
      }
      onSubmit={(values) => {
        setClient({
          bussinessName: values.businessName,
          cuit: values.cuil,
          mail: values.email,
          maxCurrentAccount: values.maxCurrentAccount,
          onlineEnabled: values.onlineEnabled,
          user: {
            user: values.user,
            password: values.password,
            userType: {
             id: 0,
             type: 'cliente'
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
            <Box id="clientRegistry">
              <TextField
                className="field"
                error={Boolean(touched.cuil && errors.cuil)}
                helperText={touched.cuil && errors.cuil}
                label="CUIL"
                margin="normal"
                name="cuil"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.cuil}
                variant="outlined"
              />
              <TextField
                className="field"
                error={Boolean(touched.businessName && errors.businessName)}
                helperText={touched.businessName && errors.businessName}
                label="Razon Social"
                margin="normal"
                name="businessName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.businessName}
                variant="outlined"
              />
              <TextField
                className="field"
                error={Boolean(touched.user && errors.user)}
                helperText={touched.user && errors.user}
                label="Usuario"
                margin="normal"
                name="user"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.user}
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
              <TextField
                className="field"
                error={Boolean(touched.currentBalance && errors.currentBalance)}
                helperText={touched.currentBalance && errors.currentBalance}
                label="Monto bancario actual"
                margin="normal"
                name="currentBalance"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.currentBalance}
                variant="outlined"
              />
              <TextField
                className="field"
                error={Boolean(touched.maxCurrentAccount && errors.maxCurrentAccount)}
                helperText={touched.maxCurrentAccount && errors.maxCurrentAccount}
                label="Monto maximo en descubierto"
                margin="normal"
                type="number"
                name="maxCurrentAccount"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.maxCurrentAccount}
                variant="outlined"
              />
              <Box
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  ml: -1
                }}
              >
                <Checkbox
                  checked={values.onlineEnabled}
                  name="onlineEnabled"
                  onChange={(e) => {
                    handleChange({
                      target: {
                        name: e.target.name,
                        value: e.target.checked,
                      },
                    });
                  }}
                />
                <Typography
                  variant="body1"
                >
                  Habilitado en canal online
                </Typography>
              </Box>
            </Box>
            <Box sx={{ py: 2 }}>
              <Button
                sx={{ maxWidth: 500, display: 'block', margin: 'auto' }}
                color="primary"
                disabled={isSubmitting && !enabledButton}
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

export default ClientRegister;
