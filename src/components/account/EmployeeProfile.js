import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';

const user = {
  firstName: 'Juan Ignacio',
  lastName: 'Perez',
  userType: 'Empleado',
  dni: '32094895',
  email: 'jperez@gmail.com'
};

const EmployeeProfile = (props) => {
  const [values, setValues] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    dni: user.dni
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Card {...props} sx={{ padding: 3 }}>
      <CardHeader
        title={`${user.firstName} ${user.lastName}`}
        subheader={user.userType}
        titleTypographyProps={{ variant: 'h2' }}
        subheaderTypographyProps={{ variant: 'h4' }}
        sx={{ textAlign: 'center', backgroundColor: 'secondary' }}
      />
      <Divider />
      <CardContent sx={{ marginTop: 2 }}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              disabled="true"
              label="Nombre"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
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
              disabled="true"
              label="Apellido"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
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
              disabled="true"
              label="DNI"
              name="dni"
              tyoe="number"
              onChange={handleChange}
              value={values.dni}
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
              label="Email"
              name="email"
              tyoe="email"
              onChange={handleChange}
              value={values.email}
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
        >
          Guardar
        </Button>
      </Box>
    </Card>
  );
};

export default EmployeeProfile;
