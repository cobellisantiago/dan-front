import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const AccountProfile = (props) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    onlineEnabled: true
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
        subheader={user.country}
        title={user.name}
        titleTypographyProps={{ variant: 'h2' }}
        subheaderTypographyProps={{ variant: 'h3' }}
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
              label="CUIL"
              name="cuil"
              onChange={handleChange}
              value={values.cuil}
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
              label="Razon Social"
              name="businessName"
              onChange={handleChange}
              value={values.businessName}
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
              label="Monto bancario actual"
              name="currentBalance"
              tyoe="number"
              onChange={handleChange}
              value={values.currentBalance}
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
              label="Monto maximo en descubierto"
              name="maxCurrentAccount"
              onChange={handleChange}
              type="number"
              value={values.maxCurrentAccount}
              variant="outlined"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
          >
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

export default AccountProfile;
